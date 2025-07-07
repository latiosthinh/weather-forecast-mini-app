"use client";

import Text from "@/core-ui/Text";
import { useFlyoutStore } from "@/store/menuSettingsStore";

export default function NoCitySelected() {
	const { openFlyout } = useFlyoutStore();

	return (
		<div className="p-4">
			<Text>No city selected. Click <span className="text-yellow-300 hover:text-orange-500 transition-colors cursor-pointer underline" onClick={openFlyout}>here</span> to select a city.</Text>
		</div>
	);
}