import { CityWeatherGrid } from "../CityWeatherGrid";
import { SearchBar } from "./Searchbar";

const dummyCities = [
	{ name: "New York", condition: "Rain", temp: 19, icon: "🌧️" },
	{ name: "Tokyo", condition: "Partly cloudy", temp: 21, icon: "⛅" },
	{ name: "Sydney", condition: "Cloudy", temp: 18, icon: "☁️" },
	{ name: "Paris", condition: "Showers", temp: 17, icon: "🌦️" },
];

export default function SearchPage() {
	return (
		<section className="p-4">
			<SearchBar className="mb-4" />
			<CityWeatherGrid cities={dummyCities} />
		</section>
	)
}