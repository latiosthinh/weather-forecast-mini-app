import { Input } from "@/core-ui/Input";
import { Select } from "@/core-ui/Select";
import { useForecastSettingsStore, useRefetchIntervalStore } from "@/store/menuSettingsStore";

export default function SettingsPage() {
	const { forecastDays, setForecastDays } = useForecastSettingsStore();
	const { refetchInterval, setRefetchInterval } = useRefetchIntervalStore();

	return (
		<div className="p-4" data-testid="settings-page">
			<h2 className="text-lg font-bold mb-4">Settings</h2>
			<div className="mb-4">
				<label htmlFor="forecast-days" className="block mb-1 font-medium">Daily forecast</label>
				<Select
					id="forecast-days"
					value={forecastDays}
					onChange={v => setForecastDays(Number(v))}
					options={[3, 4, 5, 6, 7].map(days => ({ label: `${days} days`, value: days }))}
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="refetch-interval" className="block mb-1 font-medium">Data refetch interval (in minutes)</label>
				<Input
					id="refetch-interval"
					type="number"
					min={1}
					value={refetchInterval}
					onChange={e => setRefetchInterval(Number(e.target.value))}
				/>
			</div>
		</div>
	);
}