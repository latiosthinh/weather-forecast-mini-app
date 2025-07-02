import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { ReactNode } from "react";

interface HourData {
	time: string;
	icon: ReactNode;
	temp: number;
}

interface HourlyForecastProps {
	hours: HourData[];
}

export function HourlyForecast({ hours }: HourlyForecastProps) {
	return (
		<Card className="flex flex-row justify-between items-center h-full">
			{hours.map((h, i) => (
				<div key={i} className="flex flex-col items-center">
					{h.icon}
					<Text className="mt-1">{h.time}</Text>
					<Text className="font-bold">{h.temp}°</Text>
				</div>
			))}
		</Card>
	);
} 