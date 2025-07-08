import { cn } from "@/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }>(
	({ className, icon, ...props }, ref) => (
		<div className="relative">
			{icon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>}
			<input
				ref={ref}
				className={cn(
					"w-full pr-4 py-2 rounded-md bg-white/10 text-white placeholder:text-gray-200 focus:outline-none border border-transparent focus:border-blue-400",
					icon ? "pl-10" : "pl-4",
					className
				)}
				{...props}
			/>
		</div>
	)
);
Input.displayName = "Input";