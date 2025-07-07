import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
	return (
		<div
			className={cn(
				"rounded-md bg-white/10 p-6 shadow-lg backdrop-blur-md",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
} 