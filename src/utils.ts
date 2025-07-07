export { twMerge as cn } from "tailwind-merge";

export const getWeatherIcon = (icon: string) => {
	return `https://openweathermap.org/img/wn/${icon}@4x.png`;
}