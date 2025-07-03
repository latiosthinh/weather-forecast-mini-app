"use client"

import { useFlyoutStore } from "@/store/flyoutStore";
import { cn } from "@/utils";
import { PanelLeftClose } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Card } from "./Card";

interface FlyoutProps {
	children: ReactNode;
	className?: string;
	side?: "left" | "right";
}

export function Flyout({
	children,
	className = "",
	side = "right",
}: FlyoutProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { open, closeFlyout } = useFlyoutStore();

	// Close on ESC key
	useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeFlyout();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [open]);

	// Focus trap
	useEffect(() => {
		if (!open || !ref.current) return;
		const previouslyFocused = document.activeElement as HTMLElement;
		ref.current.focus();
		return () => previouslyFocused?.focus();
	}, [open]);

	if (!open) return null;

	return <>
		{createPortal(
			<>
				<div className="fixed inset-0 z-10 top-0 left-0 w-full h-full bg-black/30" onClick={closeFlyout} />
				<Card
					className={cn(
						"fixed inset-0 z-50 top-0 h-full w-full max-w-full transition-transform duration-300 focus:outline-none md:w-80 rounded-none bg-gradient",
						side === "right"
							? open
								? "translate-x-0 right-0"
								: "translate-x-full right-0"
							: open
								? "translate-x-0 left-0"
								: "-translate-x-full left-0",
						className
					)}
				>
					<PanelLeftClose
						onClick={closeFlyout}
						className={cn(
							"absolute bottom-4 rounded-full text-gray-300 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition cursor-pointer",
							side === "right" ? "right-4" : "left-4"
						)} />
					<div className="h-full overflow-y-auto">
						{children}
					</div>
				</Card>
			</>
			, document.body,
		)}
	</>
}
