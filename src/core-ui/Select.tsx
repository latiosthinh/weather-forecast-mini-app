import { cn } from "@/utils";
import React, { useState, useRef, useEffect } from "react";

interface Option {
	label: string;
	value: string | number;
}

interface SelectProps {
	value: string | number;
	onChange: (value: string | number) => void;
	options: Option[];
	id?: string;
	className?: string;
}

export const Select: React.FC<SelectProps> = ({ value, onChange, options, id, className }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// Close dropdown on outside click
	useEffect(() => {
		if (!open) return;
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, [open]);

	// Keyboard navigation
	useEffect(() => {
		if (!open) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [open]);

	const selected = options.find(opt => opt.value === value);

	return (
		<div ref={ref} className={`relative ${className || ""}`} tabIndex={0}>
			<button
				id={id}
				type="button"
				className="w-full rounded px-3 py-2 bg-white/10 text-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-400"
				onClick={() => setOpen(v => !v)}
				aria-haspopup="listbox"
				aria-expanded={open}
			>
				<span>{selected ? selected.label : "Select..."}</span>
				<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
			</button>
			{open && (
				<ul
					className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto"
					role="listbox"
				>
					{options.map(opt => (
						<li
							key={opt.value}
							role="option"
							aria-selected={opt.value === value}
							className={cn(
								"px-4 py-2 cursor-pointer text-black hover:bg-orange-500 hover:text-white",
								opt.value === value && "bg-purple-200"
							)}
							onClick={() => {
								onChange(opt.value);
								setOpen(false);
							}}
							tabIndex={0}
							onKeyDown={e => {
								if (e.key === "Enter" || e.key === " ") {
									onChange(opt.value);
									setOpen(false);
								}
							}}
						>
							{opt.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}; 