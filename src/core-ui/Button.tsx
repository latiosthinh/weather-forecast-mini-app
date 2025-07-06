import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

export function Button({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={cn(
				"px-4 py-2 bg-white/10 text-white font-semibold hover:bg-black/20 cursor-pointer text-left transition",
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
				"p-2 w-[50px] h-[50px] flex items-center justify-center hover:bg-white/20 transition cursor-pointer",
				className
			)}
			{...props}
		>
			{icon}
		</button>
	);
} 