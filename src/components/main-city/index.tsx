import { CurrentWeatherCard } from "./CurrentWeatherCard";
import ForecastTabs from "./ForecastTabs";

const dummyCurrent = {
	city: "Singapore",
	condition: "Clear",
	temp: 26,
	high: 31,
	low: 26,
	wind: 12,
	humidity: 64,
	icon: <span>☀️</span>,
};

export default function MainCityCard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
			<CurrentWeatherCard {...dummyCurrent} />
			<ForecastTabs />
		</div>
	);
}