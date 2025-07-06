import Text from "@/core-ui/Text";
import { City } from "@/types";
import { MapPin } from "lucide-react";

export default function CurrentWeatherCard({ name, condition, temp, high, low, wind, humidity, icon }: City) {
	const today = new Date();
	const formattedDate = today.toLocaleDateString("en-SG", {
		weekday: "long",
		day: "numeric",
		month: "long",
	});

	return (
		<div className="flex flex-col justify-between w-full gap-4">
			<div className="relative">
				<Text variant="h1" className="text-4xl flex items-center gap-2 text-center justify-center">
					<MapPin className="w-8 h-8" />
					{name}
				</Text>
				<Text className="text-center mt-2">{formattedDate}</Text>

				<div className="flex items-center justify-center">
					<Text className="text-[80px] text-center">{icon}</Text>

					<div className="flex flex-col items-center justify-center">
						<Text className="text-[32px] font-bold text-center">{temp}°C</Text>
						<Text className="text-right">{condition}</Text>
					</div>
				</div>
			</div>
			<Text>H: {high}°  L: {low}°</Text>

			<div className="flex items-center gap-4">
				<Text>{wind} km/h</Text>
				<Text>{humidity}%</Text>
			</div>
		</div>
	);
} 