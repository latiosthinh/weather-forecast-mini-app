"use client";

import { useCityListStore } from "@/store/cityStore";
import { CityWeatherData } from "@/types";
import { useRefetchIntervalStore } from "@/store/menuSettingsStore";
import { useEffect } from "react";

export default function WeatherRefetchProvider({ children }: { children: React.ReactNode }) {
	const { cityList, setCityList } = useCityListStore();
	const refetchInterval = useRefetchIntervalStore((state) => state.refetchInterval);

	useEffect(() => {
		const fetchWeatherForCity = async (city: CityWeatherData) => {
			const response = await fetch("/api/get-weather-data", {
				method: "POST",
				body: JSON.stringify({ name: city.name }),
			});
			const data = await response.json();
			return { ...city, ...data };
		};

		const refetchAll = async () => {
			if (cityList.length === 0) return;
			const updatedCities = await Promise.all(cityList.map(city => fetchWeatherForCity(city)));
			setCityList(updatedCities);
		};

		const interval = setInterval(refetchAll, refetchInterval * 60 * 1000);
		return () => clearInterval(interval);
	}, [cityList, setCityList, refetchInterval]);

	return <>{children}</>;
} 