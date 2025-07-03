import { Button } from "@/core-ui/Button";
import { Input } from "@/core-ui/Input";
import { Tooltip } from "@/core-ui/Tooltip";
import { useCityListStore, useSelectedCityStore } from "@/store/cityStore";
import { City } from "@/types";
import { Pin, PinIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function SearchBar() {
	const [keyword, setKeyword] = useState("");
	const [cities, setCities] = useState<City[]>([]);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const { addCity } = useCityListStore();

	const handleAddCity = (city: City) => {
		addCity(city);
		fetch("/api/get-weather-data", {
			method: "POST",
			body: JSON.stringify({ lat: city.lat, lon: city.lng }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
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
		<>
			<Input
				placeholder="Search for a city..."
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>

			{cities.length > 0 && (
				<div className="flex flex-col mt-1 rounded-md overflow-hidden">
					{cities.map((city, index) => (
						<div key={index} className="w-full [&:not(:last-child)]:border-b border-white/10 bg-white/10 p-2 flex items-center justify-between">
							<span>{city.name}</span>

							<button
								className="text-white cursor-pointer p-1 bg-black/20 rounded hover:bg-black/30 transition"
								title="Add to list"
								onClick={() => handleAddCity(city)}>
								<PinIcon className="w-4 h-4" />
							</button>
						</div>
					))}
				</div>
			)}
		</>
	);
} 