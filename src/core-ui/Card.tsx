import { ReactNode } from "react";
import { cn } from "@/utils";

interface CardProps {
	children: ReactNode;
	className?: string;
}

export function Card({ children, className = "" }: CardProps) {
	return (
		<div className={cn(
			"rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md",
			className
		)}>
			{children}
		</div>
	);
} 