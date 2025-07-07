"use client"

import Text from "@/core-ui/Text";
import { useForecastSettingsStore } from "@/store/menuSettingsStore";
import { ChevronsRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DailyForecast from "./DailyForcast";
import HourlyForecast from "./HourlyForecast";
import { useSelectedCityStore } from "@/store/cityStore";

export default function ForecastTabs() {
	const [tab, setTab] = useState(0);
	const { forecastDays } = useForecastSettingsStore();
	const { selectedCity } = useSelectedCityStore();

	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between">
				<Text className="uppercase text-white border-b-2 border-yellow-500">Today</Text>

				<Link href={`/daily-forecast?city=${selectedCity?.name.toLowerCase().replaceAll(" ", "_")}&days=${forecastDays}`} className="flex items-center gap-1">
					<Text className="uppercase text-white">Next {forecastDays} days</Text>
					<ChevronsRightIcon className="w-5 h-5 text-white" />
				</Link>
			</div>
			<div className="h-full">
				{tab === 0 ? (
					<HourlyForecast />
				) : (
					<DailyForecast />
				)}
			</div>
		</div>
	);
}