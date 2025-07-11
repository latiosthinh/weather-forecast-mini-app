// Weather condition object
export type WeatherCondition = {
	id: number;
	main: string;
	description: string;
	icon: string;
};

// Hourly weather data
export type HourlyWeather = {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherCondition[];
	pop: number;
	rain?: { "1h": number };
};

// Daily weather data
export type DailyWeather = {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	summary: string;
	temp: {
		day: number;
		min: number;
		max: number;
		night: number;
		eve: number;
		morn: number;
	};
	feels_like: {
		day: number;
		night: number;
		eve: number;
		morn: number;
	};
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherCondition[];
	clouds: number;
	pop: number;
	rain?: number;
	uvi: number;
};

// Current weather data
export type CurrentWeather = {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherCondition[];
};

// The main weather data type
export type WeatherData = {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: CurrentWeather;
	hourly: HourlyWeather[];
	daily: DailyWeather[];
};

export type CityWeatherData = City & WeatherData;

export type City = {
	name: string;
	lat?: string;
	lng?: string;
}