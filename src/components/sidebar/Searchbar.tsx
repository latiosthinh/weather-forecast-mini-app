"use client";

import { Input } from "@/core-ui/Input";
import { useCityListStore } from "@/store/cityStore";
import { City } from "@/types";
import { cn } from "@/utils";
import { PinIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { sgCities } from "@/data/sgCities";

export function SearchBar({ className }: { className?: string }) {
	const [keyword, setKeyword] = useState("");
	const [cities, setCities] = useState<City[]>([]);
	const [isFocused, setIsFocused] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const { addCity, cityList } = useCityListStore();

	const handleAddCity = (city: City) => {
		if (inputRef.current) inputRef.current.blur();
		fetch("/api/get-weather-data", {
			method: "POST",
			body: JSON.stringify({ name: city.name }),
		})
			.then((response) => response.json())
			.then((data) => {
				addCity({ ...city, ...data });
			});
		setKeyword("");
		setCities([]);
		setIsFocused(false);
	};

	useEffect(() => {
		if (!isFocused) {
			setCities([]);
			return;
		}
		if (keyword.length === 0) {
			setCities(sgCities.map(city => ({ name: city })));
			return;
		}
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		timeoutRef.current = setTimeout(() => {
			setCities(sgCities.filter(city => city.toLowerCase().includes(keyword.toLowerCase())).map(city => ({ name: city })));
		}, 300);
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [keyword, isFocused]);

	return (
		<div className={cn("relative", className)}>
			<Input
				ref={inputRef}
				placeholder="Search for a city..."
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setTimeout(() => setIsFocused(false), 100)}
				data-testid="search-input"
			/>

			{cities.length > 0 && isFocused && (
				<div className="flex flex-col mt-1 rounded-md overflow-y-auto cool-scrollbar max-h-60 absolute top-full left-0 w-full z-50" data-testid="search-results">
					{cities.map((city, index) => {
						const alreadyAdded = cityList.some(
							(c) => c.name.trim().toLowerCase() === city.name.trim().toLowerCase()
						);
						return (
							<div key={index} className="w-full [&:not(:last-child)]:border-b border-black/10 bg-white py-2 px-4 flex items-center justify-between">
								<span className="text-black">{city.name}</span>

								<button
									className={cn(
										"text-white cursor-pointer p-1 bg-purple-400 rounded hover:bg-orange-500 transition",
										alreadyAdded && "opacity-50 cursor-not-allowed hover:bg-purple-400"
									)}
									data-testid="add-city-button"
									title={alreadyAdded ? "City already added" : "Add to list"}
									onMouseDown={e => {
										if (alreadyAdded) return;
										e.preventDefault();
										handleAddCity(city);
									}}
									disabled={alreadyAdded}
								>
									<PinIcon className="w-4 h-4" />
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
} 