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
		<div className="grid grid-cols-6 items-center h-full border border-white/20 rounded-lg">
			{hours.map((h, i) => (
				<div key={i} className="flex flex-col items-center justify-center [&:not(:last-child)]:border-r border-white/20">
					<span className="text-xl">{h.icon}</span>
					<Text className="font-semibold text-sm">{h.temp}°</Text>
					<Text className="mt-2 font-semibold text-sm">{h.time}</Text>
				</div>
			))}
		</div>
	);
} 