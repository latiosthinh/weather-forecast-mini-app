import { CityWeatherGrid } from "../CityWeatherGrid";
import { SearchBar } from "./Searchbar";


export default function SearchPage() {
	return (
		<section className="p-4">
			<SearchBar className="mb-4" />
			<CityWeatherGrid />
		</section>
	)
}