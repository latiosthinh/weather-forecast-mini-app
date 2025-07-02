import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/utils";
import { createPortal } from "react-dom";
import { useFlyoutStore } from "@/store/flyoutStore";

interface FlyoutProps {
	children: ReactNode;
	className?: string;
	side?: "left" | "right";
	ariaLabel?: string;
}

export function Flyout({
	children,
	className = "",
	side = "right",
	ariaLabel = "Sidebar menu",
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
			<div
				ref={ref}
				tabIndex={-1}
				role="dialog"
				aria-modal="true"
				aria-label={ariaLabel}
				className={cn(
					// Responsive: full width on mobile, 20rem on md+
					"fixed inset-0 z-50 top-0 h-full w-full max-w-full bg-white/90 dark:bg-black/90 shadow-xl transition-transform duration-300 focus:outline-none md:w-80",
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
				<button
					onClick={closeFlyout}
					aria-label="Close sidebar"
					className={cn(
						"absolute top-4 p-2 rounded-full text-gray-500 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition",
						side === "right" ? "right-4" : "left-4"
					)}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
				<div className="h-full overflow-y-auto pt-16">{/* space for close btn */}
					{children}
				</div>
			</div>
			, document.body,
		)}
	</>
}
