import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

export function Button({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={cn(
				"px-4 py-2 rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}

export function IconButton({ icon, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactNode }) {
	return (
		<button
			className={cn(
				"p-2 rounded-full bg-white/10 hover:bg-white/20 transition",
				className
			)}
			{...props}
		>
			{icon}
		</button>
	);
} 