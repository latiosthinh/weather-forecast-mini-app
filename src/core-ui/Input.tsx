import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<div className="relative">
			<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
				<svg width="20" height="20" fill="none" stroke="currentColor"><circle cx="9" cy="9" r="7" /><line x1="15" y1="15" x2="19" y2="19" /></svg>
			</span>
			<input
				ref={ref}
				className={cn(
					"w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder:text-gray-300 focus:outline-none border border-transparent focus:border-blue-400",
					className
				)}
				{...props}
			/>
		</div>
	)
);
Input.displayName = "Input"; 