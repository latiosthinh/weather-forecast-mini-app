"use client";

import NoCitySelected from "@/components/main-city/NoCitySelected";
import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { useSelectedCityStore } from "@/store/cityStore";
import { useForecastSettingsStore } from "@/store/menuSettingsStore";
import { getWeatherIcon } from "@/utils";
import { ChevronLeftIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DailyForecastPage() {
	const { forecastDays } = useForecastSettingsStore();
	const { selectedCity } = useSelectedCityStore();

	if (!selectedCity) return <NoCitySelected />;

	const daily = selectedCity.daily.slice(0, forecastDays);

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<Link href={"/"} className="flex items-center gap-1 text-white/50 hover:text-white transition-colors">
					<ChevronLeftIcon className="w-4 h-4" />
					<Text className="uppercase text-sm text-inherit">Back</Text>
				</Link>

				<Text variant="h1" className="text-4xl flex items-center gap-2">
					<MapPin className="w-8 h-8" />
					{selectedCity.name}
				</Text>
			</div>


			<div className="max-w-lg md:min-w-md flex flex-col gap-2 overflow-y-auto cool-scrollbar max-h-[500px]">
				{daily.map((day, i) => (
					<Card key={i} className="flex items-center gap-6 p-4">
						<Text className="w-32 text-lg font-semibold">
							{new Date(day.dt * 1000).toLocaleDateString("en-SG", { weekday: "long", month: "short", day: "numeric" })}
						</Text>
						<Image src={getWeatherIcon(day.weather[0].icon)} alt={day.weather[0].description} width={60} height={60} />
						<div className="flex flex-col flex-1">
							<Text className="capitalize text-white text-base">{day.weather[0].description}</Text>
							<Text className="text-sm text-white/50">{day.summary}</Text>
						</div>
						<div className="flex flex-col items-end min-w-[80px]">
							<Text className="text-lg font-bold text-white">{Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°C</Text>
							<Text className="text-xs text-white/50">H: {Math.round(day.temp.max)}° L: {Math.round(day.temp.min)}°</Text>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
} 