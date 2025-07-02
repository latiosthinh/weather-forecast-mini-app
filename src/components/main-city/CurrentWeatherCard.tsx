import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { ReactNode } from "react";

interface CurrentWeatherCardProps {
	city: string;
	condition: string;
	temp: number;
	high: number;
	low: number;
	wind: number;
	humidity: number;
	icon: ReactNode;
}

export function CurrentWeatherCard({ city, condition, temp, high, low, wind, humidity, icon }: CurrentWeatherCardProps) {
	return (
		<Card className="flex flex-col gap-2 items-start bg-gradient-to-br from-purple-700/60 to-orange-400/40 h-[300px]">
			<div className="flex justify-between w-full items-center">
				<div>
					<Text variant="h1">{city}</Text>
					<Text variant="h2">{condition}</Text>
					<Text className="text-5xl font-bold mt-2">{temp}°C</Text>
					<Text className="mt-1">H: {high}°  L: {low}°</Text>
				</div>
				<div className="flex flex-col items-center">
					{icon}
					<Text className="mt-2">{wind} km/h</Text>
					<Text>{humidity}%</Text>
				</div>
			</div>
		</Card>
	);
} 