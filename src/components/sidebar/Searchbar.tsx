"use client";

import { Input } from "@/core-ui/Input";
import { useCityListStore } from "@/store/cityStore";
import { City } from "@/types";
import { cn } from "@/utils";
import { PinIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SearchBar({ className }: { className?: string }) {
	const [keyword, setKeyword] = useState("");
	const [cities, setCities] = useState<City[]>([]);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const { addCity } = useCityListStore();

	const handleAddCity = (city: City) => {
		fetch("/api/get-weather-data", {
			method: "POST",
			body: JSON.stringify({ lat: city.lat, lon: city.lng, type: "current" }),
		})
			.then((response) => response.json())
			.then((data) => {
				addCity({ ...city, ...data });
			});
		setKeyword("");
		setCities([]);
	};

	useEffect(() => {
		if (keyword.length < 3) return setCities([]);
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		timeoutRef.current = setTimeout(() => {
			fetch("/api/search-city", {
				method: "POST",
				body: JSON.stringify({ query: keyword }),
			})
				.then((response) => response.json())
				.then((data) => {
					setCities(data);
				});
		}, 300);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, [keyword]);

	return (
		<div className={cn("relative", className)}>
			<Input
				placeholder="Search for a city..."
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>

			{cities.length > 0 && (
				<div className="flex flex-col mt-1 rounded-md overflow-hidden absolute top-full left-0 w-full z-50">
					{cities.map((city, index) => (
						<div key={index} className="w-full [&:not(:last-child)]:border-b border-black/10 bg-white py-2 px-4 flex items-center justify-between">
							<span className="text-black">{city.name}</span>

							<button
								className="text-white cursor-pointer p-1 bg-purple-400 rounded hover:bg-orange-500 transition"
								title="Add to list"
								onClick={() => handleAddCity(city)}>
								<PinIcon className="w-4 h-4" />
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
} 