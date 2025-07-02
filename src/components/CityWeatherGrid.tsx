import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { ReactNode } from "react";

interface CityData {
	name: string;
	condition: string;
	temp: number;
	icon: ReactNode;
}

interface CityWeatherGridProps {
	cities: CityData[];
}

export function CityWeatherGrid({ cities }: CityWeatherGridProps) {
	return (
		<div className="grid grid-cols-2 gap-4">
			{cities.map((city, i) => (
				<Card key={i} className="flex items-start p-4">
					<div className="flex flex-col gap-1">
						<Text variant="h1" className="text-lg">{city.name}</Text>
						<Text>{city.condition}</Text>
						<Text className="text-2xl font-bold">{city.temp}°</Text>
					</div>
					<span className="text-[60px]">{city.icon}</span>
				</Card>
			))}
		</div>
	);
} 