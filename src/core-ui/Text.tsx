import { cn } from "@/utils";

export interface TextProps {
	children: React.ReactNode;
	className?: string;
	variant?: "h1" | "h2" | "p";
}

export function Title({ children, className = "" }: TextProps) {
	return <h1 className={cn("text-3xl font-bold", className)}>{children}</h1>;
}
export function Subtitle({ children, className = "" }: TextProps) {
	return <h2 className={cn("text-lg font-semibold text-gray-200", className)}>{children}</h2>;
}
export function NormalText({ children, className = "" }: TextProps) {
	return <p className={cn("text-base text-gray-300", className)}>{children}</p>;
}

export default function Text({ children, className = "", variant = "p" }: TextProps) {
	switch (variant) {
		case "h1":
			return <Title className={className}>{children}</Title>;
		case "h2":
			return <Subtitle className={className}>{children}</Subtitle>;
		case "p":
			return <NormalText className={className}>{children}</NormalText>;
	}
}