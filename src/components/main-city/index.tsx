import { Card } from "@/core-ui/Card";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastTabs from "./ForecastTabs";

const dummyCurrent = {
	city: "Singapore",
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
		<Card className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 bg-gradient-to-br from-purple-700/60 to-orange-400/40">
			<CurrentWeatherCard {...dummyCurrent} />
			<ForecastTabs />
		</Card>
	);
}