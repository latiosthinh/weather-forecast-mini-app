import { cn } from "@/utils";
import React, { useRef, useState, useEffect } from "react";

interface DropdownAction {
	label: string;
	onClick: () => void;
	icon?: React.ReactNode;
	className?: string;
}

interface DropdownProps {
	trigger: React.ReactNode;
	actions: DropdownAction[];
	menuClassName?: string;
	align?: "left" | "right";
	className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, actions, menuClassName = "", align = "left", className }) => {
	const [open, setOpen] = useState(false);
	const triggerRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	// Close on outside click
	useEffect(() => {
		if (!open) return;
		const handleClick = (e: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				triggerRef.current &&
				!triggerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [open]);

	// Close on escape
	useEffect(() => {
		if (!open) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [open]);

	return (
		<div className={cn("relative inline-block", className)}>
			<div ref={triggerRef} onClick={() => setOpen((v) => !v)} className="cursor-pointer select-none">
				{trigger}
			</div>
			{open && (
				<div
					ref={menuRef}
					className={cn("absolute min-w-content rounded-md overflow-hidden py-1 z-[9999] ", menuClassName, align === "right" ? "right-0" : "left-0")}
					style={{ top: "calc(100% + 4px)" }}
					tabIndex={-1}
				>
					{actions.map((action, i) => (
						<button
							key={i}
							className={cn("w-full min-w-content whitespace-nowrap cursor-pointer flex items-center gap-2 px-4 py-2 text-left text-sm bg-white text-black hover:bg-gray-200 transition", action.className)}
							onClick={() => {
								setOpen(false);
								action.onClick();
							}}
							tabIndex={0}
							type="button"
						>
							{action.icon && <span>{action.icon}</span>}
							{action.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
