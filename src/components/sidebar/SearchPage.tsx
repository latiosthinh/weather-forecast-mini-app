import { SearchBar } from "./Searchbar";
import CityWeatherList from "./CityWeatherList";


export default function SearchPage() {
	return (
		<section className="p-4" data-testid="search-page">
			<SearchBar className="mb-4" />
			<CityWeatherList />
		</section>
	)
}