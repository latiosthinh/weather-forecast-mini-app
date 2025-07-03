"use client";

import { Flyout } from "@/core-ui/Flyout";
import { useSelectedCityStore } from "@/store/cityStore";
import { useFlyoutStore } from "@/store/flyoutStore";
import { Settings } from "lucide-react";
import CityCard from "../share/CityCard";
import { SearchBar } from "./Searchbar";

export default function Sidebar() {
	const { open, toggleFlyout } = useFlyoutStore();
	const { selectedCity } = useSelectedCityStore();

	return (
		<>
			{open && (
				<Flyout>
					<SearchBar />
				</Flyout>
			)}

			{!open && <Settings onClick={toggleFlyout} className="fixed bottom-4 left-4 text-white cursor-pointer" />}
		</>
	);
}