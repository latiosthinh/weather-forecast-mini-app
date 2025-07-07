import { Card } from "@/core-ui/Card";
import { Dropdown } from "@/core-ui/Dropdown";
import Text from "@/core-ui/Text";
import { useCityListStore, useSelectedCityStore } from "@/store/cityStore";
import { CityWeatherData } from "@/types";
import { getWeatherIcon } from "@/utils";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function CityCard({ city }: { city: CityWeatherData }) {
	const { removeCity } = useCityListStore();
	const { setSelectedCity } = useSelectedCityStore();

	const handlePinToMainScreen = (city: CityWeatherData) => {
		setSelectedCity(city);
	}

	const handleDeleteCity = (city: CityWeatherData) => {
		removeCity(city.name);
	}

	return (
		<Card className="flex flex-col items-center p-4 pt-8">
			<Text variant="h2" className="text-lg">{city.name}</Text>
			<Text className="text-sm capitalize">{city.current.weather[0].description}</Text>
			<Image src={getWeatherIcon(city.current.weather[0].icon)} alt={city.current.weather[0].description} width={60} height={60} />
			<Text className="text-lg font-bold">{city.current.temp}°C</Text>

			<Dropdown
				align="right"
				trigger={<Menu className="w-4 h-4 rounded cursor-pointer hover:bg-white/20 transition" />}
				className="absolute top-2 right-2"
				actions={[
					{
						label: "Pin to main screen",
						onClick: () => handlePinToMainScreen(city),
					},
					{
						label: "Delete",
						onClick: () => handleDeleteCity(city),
					},
				]}
			/>
		</Card >
	);
}