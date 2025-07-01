import { cn } from "@/utils";

export interface TextProps {
	children: React.ReactNode;
	className?: string;
}

export function Title({ children, className = "" }: TextProps) {
	return <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>;
}
export function Subtitle({ children, className = "" }: TextProps) {
	return <h2 className={cn("text-lg font-semibold text-gray-200", className)}>{children}</h2>;
}
export function Text({ children, className = "" }: TextProps) {
	return <p className={cn("text-base text-gray-300", className)}>{children}</p>;
} 