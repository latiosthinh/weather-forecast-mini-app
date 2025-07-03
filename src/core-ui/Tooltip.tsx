import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
	message: string;
	children: React.ReactNode;
	className?: string;
	position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({
	message,
	children,
	className = "",
	position = "top",
}) => {
	const [visible, setVisible] = useState(false);
	const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
	const triggerRef = useRef<HTMLSpanElement>(null);
	const tooltipRef = useRef<HTMLSpanElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const showTooltip = () => {
		timeoutRef.current = setTimeout(() => setVisible(true), 100);
	};
	const hideTooltip = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setVisible(false);
	};

	// Calculate tooltip position
	useEffect(() => {
		if (!visible || !triggerRef.current || !tooltipRef.current) return;
		const triggerRect = triggerRef.current.getBoundingClientRect();
		const tooltipRect = tooltipRef.current.getBoundingClientRect();
		let top = 0, left = 0;
		switch (position) {
			case "bottom":
				top = triggerRect.bottom + window.scrollY + 8;
				left = triggerRect.left + window.scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
				break;
			case "left":
				top = triggerRect.top + window.scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
				left = triggerRect.left + window.scrollX - tooltipRect.width - 8;
				break;
			case "right":
				top = triggerRect.top + window.scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
				left = triggerRect.right + window.scrollX + 8;
				break;
			case "top":
			default:
				top = triggerRect.top + window.scrollY - tooltipRect.height - 8;
				left = triggerRect.left + window.scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
				break;
		}
		setCoords({ top, left });
	}, [visible, position]);

	// Recalculate on scroll/resize
	useEffect(() => {
		if (!visible) return;
		const update = () => {
			if (!triggerRef.current || !tooltipRef.current) return;
			const triggerRect = triggerRef.current.getBoundingClientRect();
			const tooltipRect = tooltipRef.current.getBoundingClientRect();
			let top = 0, left = 0;
			switch (position) {
				case "bottom":
					top = triggerRect.bottom + window.scrollY + 8;
					left = triggerRect.left + window.scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
					break;
				case "left":
					top = triggerRect.top + window.scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
					left = triggerRect.left + window.scrollX - tooltipRect.width - 8;
					break;
				case "right":
					top = triggerRect.top + window.scrollY + triggerRect.height / 2 - tooltipRect.height / 2;
					left = triggerRect.right + window.scrollX + 8;
					break;
				case "top":
				default:
					top = triggerRect.top + window.scrollY - tooltipRect.height - 8;
					left = triggerRect.left + window.scrollX + triggerRect.width / 2 - tooltipRect.width / 2;
					break;
			}
			setCoords({ top, left });
		};
		window.addEventListener("scroll", update, true);
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update, true);
			window.removeEventListener("resize", update);
		};
	}, [visible, position]);

	return (
		<span
			className={"relative inline-block " + className}
			ref={triggerRef}
			onMouseEnter={showTooltip}
			onMouseLeave={hideTooltip}
			onFocus={showTooltip}
			onBlur={hideTooltip}
			tabIndex={0}
			aria-describedby="tooltip"
			style={{ outline: "none" }}
		>
			{children}
			{visible && coords && createPortal(
				<span
					ref={tooltipRef}
					id="tooltip"
					role="tooltip"
					className={`pointer-events-none fixed z-[9999] px-2 py-1 rounded bg-gray-900 text-white text-xs whitespace-nowrap shadow-lg`}
					style={{ top: coords.top, left: coords.left }}
				>
					{message}
				</span>,
				document.body
			)}
		</span>
	);
};
