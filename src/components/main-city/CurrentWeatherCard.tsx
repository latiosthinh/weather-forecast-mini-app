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

export default function CurrentWeatherCard({ city, condition, temp, high, low, wind, humidity, icon }: CurrentWeatherCardProps) {
	return (
		<Card className="flex flex-col gap-2 items-start bg-gradient-to-br from-purple-700/60 to-orange-400/40">
			<div className="flex w-full h-full justify-between gap-4">
				<div className="flex flex-col justify-between w-full gap-4">
					<Text variant="h1" className="text-2xl">{city}</Text>

					<div>
						<Text>{condition}</Text>
						<Text className="text-5xl font-bold">{temp}°C</Text>
					</div>
					<Text>H: {high}°  L: {low}°</Text>
				</div>
				<div className="flex flex-col items-center justify-between">
					<span className="text-[100px]">{icon}</span>

					<div className="flex items-center gap-4">
						<Text>{wind} km/h</Text>
						<Text>{humidity}%</Text>
					</div>
				</div>
			</div>
		</Card>
	);
} 