import { useForecastSettingsStore } from "@/store/menuSettingsStore";
import { useState } from "react";

export default function SettingsPage() {
	const { forecastDays, setForecastDays } = useForecastSettingsStore();

	return (
		<div className="p-4">
			<h2 className="text-lg font-bold mb-4">Settings</h2>
			<div className="mb-4">
				<label htmlFor="forecast-days" className="block mb-1 font-medium">Daily forecast</label>
				<select
					id="forecast-days"
					className="border rounded px-3 py-2 bg-white text-black"
					value={forecastDays}
					onChange={e => setForecastDays(Number(e.target.value))}
				>
					{[3, 4, 5, 6, 7].map(days => (
						<option key={days} value={days}>{days} days</option>
					))}
				</select>
			</div>
		</div>
	);
}