import * as React from "react";
import { cn } from "@/utils";

interface TabsProps {
	tabs: string[];
	active: number;
	onChange: (idx: number) => void;
}

export function Tabs({ tabs, active, onChange }: TabsProps) {
	return (
		<div className="flex md:justify-center border-b border-white/10">
			{tabs.map((tab, idx) => (
				<button
					key={tab}
					className={cn(
						"px-4 py-2 font-medium transition cursor-pointer",
						active === idx
							? "border-b-2 border-yellow-400 text-white"
							: "text-gray-300"
					)}
					onClick={() => onChange(idx)}
				>
					{tab}
				</button>
			))}
		</div>
	);
} 