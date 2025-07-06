import { ReactNode } from "react";

export type City = {
	name: string;
	lat?: string;
	lng?: string;
	capital?: string;
	condition?: string;
	temp?: number;
	icon?: ReactNode;
	high?: number;
	low?: number;
	wind?: number;
	humidity?: number;
}

export type WeatherData = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
}