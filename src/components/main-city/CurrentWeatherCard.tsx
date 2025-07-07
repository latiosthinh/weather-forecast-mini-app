import Text from "@/core-ui/Text";
import { useSelectedCityStore } from "@/store/cityStore";
import { DropletIcon, MapPin, WindIcon } from "lucide-react";
import { getWeatherIcon } from "@/utils";
import Image from "next/image";
import { Card } from "@/core-ui/Card";

export default function CurrentWeatherCard() {
	const { selectedCity } = useSelectedCityStore();

	const today = new Date();
	const formattedDate = today.toLocaleDateString("en-SG", {
		hour: "2-digit",
		weekday: "long",
		day: "numeric",
		month: "long",
	});

	if (!selectedCity) return null;

	return (
		<div className="flex flex-col justify-between w-full gap-4">
			<div className="relative">
				<Text variant="h1" className="text-4xl flex items-center gap-2 text-center justify-center">
					<MapPin className="w-8 h-8" />
					{selectedCity.name}
				</Text>
				<Text className="text-center mt-2 text-white">{formattedDate}</Text>

				<div className="flex items-center justify-center">
					<Image src={getWeatherIcon(selectedCity.current.weather[0].icon)} alt={selectedCity.current.weather[0].description} width={150} height={150} />

					<div className="flex flex-col items-center justify-center">
						<Text className="text-[32px] font-bold text-center text-white">{selectedCity.current.temp}°C</Text>
						<Text className="text-right capitalize text-white">{selectedCity.current.weather[0].description}</Text>
					</div>
				</div>
				<div className="flex items-center justify-center gap-4">
					<Text className="text-white">H: {selectedCity.daily[0].temp.max}°C</Text>
					<Text className="text-white">L: {selectedCity.daily[0].temp.min}°C</Text>
				</div>
			</div>

			<Card className="flex items-center gap-4 p-4 justify-around">
				<div className="flex flex-col items-center justify-center">
					<WindIcon className="w-6 h-6" />
					<Text>{selectedCity.current.wind_speed} km/h</Text>
				</div>
				<div className="flex flex-col items-center justify-center">
					<DropletIcon className="w-6 h-6" />
					<Text>{selectedCity.current.humidity}%</Text>
				</div>
			</Card>
		</div>
	);
} 