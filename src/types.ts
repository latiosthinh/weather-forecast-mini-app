import { ReactNode } from "react";

export type City = {
	name: string;
	lat?: string;
	lng?: string;
	capital?: string;
	condition?: string;
	temp?: number;
	icon?: ReactNode;
}