import { CityWeatherGrid } from "@/components/CityWeatherGrid";
import MainCityCard from "@/components/main-city";
import Sidebar from "@/components/sidebar";
import { SearchBar } from "@/components/sidebar/Searchbar";

// const dummyCities = [
//   { name: "New York", condition: "Rain", temp: 19, icon: "🌧️" },
//   { name: "Tokyo", condition: "Partly cloudy", temp: 21, icon: "⛅" },
//   { name: "Sydney", condition: "Cloudy", temp: 18, icon: "☁️" },
//   { name: "Paris", condition: "Showers", temp: 17, icon: "🌦️" },
// ];

export default function HomePage() {

  return (
    <main className="p-4 bg-gradient min-h-screen flex items-center justify-center">
      <div className="max-w-lg flex flex-col gap-4">
        <MainCityCard />
        {/* <CityWeatherGrid cities={dummyCities} /> */}
        {/* <SearchBar /> */}
      </div>

      <Sidebar />
    </main>
  );
}
