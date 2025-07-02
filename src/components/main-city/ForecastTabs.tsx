"use client"

import { useState } from "react";
import { HourlyForecast } from "./HourlyForecast";
import { Tabs } from "@/core-ui/Tabs";

const dummyHours = [
	{ time: "1PM", icon: <span>🌤️</span>, temp: 27 },
	{ time: "2PM", icon: <span>☀️</span>, temp: 30 },
	{ time: "3PM", icon: <span>☀️</span>, temp: 30 },
	{ time: "4PM", icon: <span>☀️</span>, temp: 30 },
	{ time: "5PM", icon: <span>☀️</span>, temp: 30 },
	{ time: "6PM", icon: <span>☀️</span>, temp: 29 },
];

export default function ForecastTabs() {
	const [tab, setTab] = useState(0);

	return (
		<section className="flex flex-col gap-4">
			<Tabs
				tabs={["HOURLY FORECAST", "5-DAY FORECAST"]}
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
		</section>
	);
}