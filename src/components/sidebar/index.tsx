"use client";

import { Flyout } from "@/core-ui/Flyout";
import { useFlyoutStore, useMenuStore } from "@/store/flyoutStore";
import { AlignLeft } from "lucide-react";
import Menu from "./Menu";
import SearchPage from "./SearchPage";
import SettingsPage from "./SettingsPage";

export default function Sidebar() {
	const { open, toggleFlyout } = useFlyoutStore();
	const { active } = useMenuStore();

	return (
		<>
			{open && (
				<Flyout>
					<Menu />
					{active === "search" && <SearchPage />}
					{active === "settings" && <SettingsPage />}
				</Flyout>
			)}

			{!open && <AlignLeft onClick={toggleFlyout} className="fixed bottom-4 left-4 text-white cursor-pointer" />}
		</>
	);
}