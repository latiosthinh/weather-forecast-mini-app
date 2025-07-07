// Weather icon table for OpenWeatherMap-like codes
// Each entry maps a code to its day/night icon and description

export type WeatherIconEntry = {
	day: string;
	night: string;
	description: string;
};

export const iconsTable: Record<string, WeatherIconEntry> = {
	"01": { day: "01d.png", night: "01n.png", description: "clear sky" },
	"02": { day: "02d.png", night: "02n.png", description: "few clouds" },
	"03": { day: "03d.png", night: "03n.png", description: "scattered clouds" },
	"04": { day: "04d.png", night: "04n.png", description: "broken clouds" },
	"09": { day: "09d.png", night: "09n.png", description: "shower rain" },
	"10": { day: "10d.png", night: "10n.png", description: "rain" },
	"11": { day: "11d.png", night: "11n.png", description: "thunderstorm" },
	"13": { day: "13d.png", night: "13n.png", description: "snow" },
	"50": { day: "50d.png", night: "50n.png", description: "mist" },
};
