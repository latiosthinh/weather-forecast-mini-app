"use client"

import { CityWeatherGrid } from "@/components/CityWeatherGrid";
import MainCityCard from "@/components/main-city";
import { Flyout } from "@/core-ui/Flyout";



const dummyCities = [
  { name: "New York", condition: "Rain", temp: 19, icon: <span>🌧️</span> },
  { name: "Tokyo", condition: "Partly cloudy", temp: 21, icon: <span>⛅</span> },
  { name: "Sydney", condition: "Cloudy", temp: 18, icon: <span>☁️</span> },
  { name: "Paris", condition: "Showers", temp: 17, icon: <span>🌦️</span> },
];

export default function HomePage() {

  return (
    <main className="p-4 bg-gradient-to-br from-purple-900 to-orange-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md md:max-w-4xl flex flex-col gap-4">
        <MainCityCard />
        <CityWeatherGrid cities={dummyCities} />
      </div>

      <Flyout>
        <div>
          <h1>Hello</h1>
        </div>
      </Flyout>
    </main>
  );
}
