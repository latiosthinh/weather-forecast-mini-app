"use client";

import CurrentWeatherCard from "./CurrentWeatherCard";
import { useSelectedCityStore } from "@/store/cityStore";
import { useFlyoutStore } from "@/store/flyoutStore";
import Text from "@/core-ui/Text";
import ForecastTabs from "./ForecastTabs";

export default function MainCityCard() {
	const { selectedCity } = useSelectedCityStore();
	const { openFlyout } = useFlyoutStore();

	if (!selectedCity) return (
		<Text className="text-center">No city selected. Click <span className="text-blue-500 cursor-pointer underline" onClick={openFlyout}>here</span> to select a city.</Text>
	);

	return (
		<>
			<CurrentWeatherCard />
			<ForecastTabs />
		</>
	);
}