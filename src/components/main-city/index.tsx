import { Card } from "@/core-ui/Card";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastTabs from "./ForecastTabs";

const dummyCurrent = {
	name: "Singapore",
	condition: "Clear",
	temp: 26,
	high: 31,
	low: 26,
	wind: 12,
	humidity: 64,
	icon: "☀️",
};

export default function MainCityCard() {
	return (
		<>
			<CurrentWeatherCard {...dummyCurrent} />
			<ForecastTabs />
		</>
	);
}