"use client";

import { useSelectedCityStore } from "@/store/cityStore";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastTabs from "./ForecastTabs";
import NoCitySelected from "./NoCitySelected";

export default function MainCityCard() {
	const { selectedCity } = useSelectedCityStore();

	if (!selectedCity) return <NoCitySelected />;

	return (
		<>
			<CurrentWeatherCard />
			<ForecastTabs />
		</>
	);
}