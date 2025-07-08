import { cn } from "@/utils";
import { SearchIcon } from "lucide-react";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
	({ className, ...props }, ref) => (
		<div className="relative">
			<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
			<input
				ref={ref}
				className={cn(
					"w-full pl-10 pr-4 py-2 rounded-md bg-white/10 text-white placeholder:text-gray-200 focus:outline-none border border-transparent focus:border-blue-400",
					className
				)}
				{...props}
			/>
		</div>
	)
);
Input.displayName = "Input";