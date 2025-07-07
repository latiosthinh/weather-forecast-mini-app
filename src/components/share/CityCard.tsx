import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { useCityListStore } from "@/store/cityStore";
import { CityWeatherData } from "@/types";
import { getWeatherIcon } from "@/utils";
import { Minus } from "lucide-react";
import Image from "next/image";

export default function CityCard({ city }: { city: CityWeatherData }) {
	const { removeCity } = useCityListStore();

	const handleDeleteCity = (e: React.MouseEvent<SVGSVGElement>, city: CityWeatherData) => {
		e.stopPropagation();
		removeCity(city.name);
	}

	return (
		<Card className="flex flex-col items-center p-4 pt-8">
			<Text variant="h2" className="text-lg">{city.name}</Text>
			<Text className="text-sm capitalize">{city.weather[0].description}</Text>
			<Image src={getWeatherIcon(city.weather[0].icon)} alt={city.weather[0].description} width={60} height={60} />
			<Text className="text-lg font-bold">{city.main.temp}°C</Text>

			<Minus className="w-4 h-4 bg-black rounded cursor-pointer hover:bg-black/50 transition absolute top-2 right-2"
				onClick={e => handleDeleteCity(e, city)}
			/>
		</Card>
	);
}