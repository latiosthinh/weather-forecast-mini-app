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
				<Card key={i} className="flex flex-col items-start p-4">
					<Text variant="h1" className="text-lg">{city.name}</Text>
					<Text variant="h2">{city.condition}</Text>
					<div className="flex items-center gap-2 mt-2">
						{city.icon}
						<Text className="text-2xl font-bold">{city.temp}°</Text>
					</div>
				</Card>
			))}
		</div>
	);
} 