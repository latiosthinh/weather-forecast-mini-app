import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { type City } from "@/types";
import { Minus } from "lucide-react";

export default function CityCard({ city }: { city: City }) {
	const handleDeleteCity = (e: React.MouseEvent<SVGSVGElement>, city: City) => {
		e.stopPropagation();
		console.log(city);
	}

	return (
		<Card className="flex flex-col items-center p-4 pt-8">
			<Text variant="h2" className="text-lg">{city.name}</Text>
			<Text className="text-sm">{city.condition}</Text>
			<span className="text-[60px]">{city.icon}</span>
			<Text className="text-lg font-bold">{city.temp}°C</Text>

			<Minus className="w-4 h-4 bg-black rounded cursor-pointer hover:bg-black/50 transition absolute top-2 right-2"
				onClick={e => handleDeleteCity(e, city)}
			/>
		</Card>
	);
}