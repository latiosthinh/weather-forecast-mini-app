import { IconButton } from "@/core-ui/Button";
import { useFlyoutStore, useMenuStore } from "@/store/menuSettingsStore";
import { cn } from "@/utils";
import { PanelLeftClose, Search, Settings } from "lucide-react";

export default function Menu() {
	const { active, setActive } = useMenuStore();
	const { closeFlyout } = useFlyoutStore();
	return (
		<div className="flex flex-col w-[50px] border-r border-white/10 items-center h-full">
			<IconButton data-testid="active-search-page-button" icon={<Search className="w-4 h-4" />} className={cn(active === "search" && "bg-white/20")} onClick={() => setActive("search")} />
			<IconButton data-testid="active-settings-page-button" icon={<Settings className="w-4 h-4" />} className={cn(active === "settings" && "bg-white/20")} onClick={() => setActive("settings")} />

			<PanelLeftClose
				data-testid="close-menu"
				onClick={closeFlyout}
				className={cn(
					"absolute bottom-4 rounded-full text-gray-300 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition cursor-pointer"
				)} />
		</div>
	)
}