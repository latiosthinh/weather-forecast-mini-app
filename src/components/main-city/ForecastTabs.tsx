"use client"

import { useState } from "react";
import { HourlyForecast } from "./HourlyForecast";
import { Tabs } from "@/core-ui/Tabs";

const dummyHours = [
	{ time: "1 PM", icon: "🌤️", temp: 27 },
	{ time: "2 PM", icon: "☀️", temp: 30 },
	{ time: "3 PM", icon: "☀️", temp: 30 },
	{ time: "4 PM", icon: "☀️", temp: 30 },
	{ time: "5 PM", icon: "☀️", temp: 30 },
	{ time: "6 PM", icon: "☀️", temp: 29 },
];

export default function ForecastTabs() {
	const [tab, setTab] = useState(0);

	return (
		<div className="flex flex-col gap-4">
			<Tabs
				tabs={["TODAY", "NEXT 5-DAY"]}
				active={tab}
				onChange={setTab}
			/>
			<div className="h-full">
				{tab === 0 ? (
					<HourlyForecast hours={dummyHours} />
				) : (
					<div className="mt-4 text-center text-gray-300">5-Day Forecast Coming Soon</div>
				)}
			</div>
		</div>
	);
}