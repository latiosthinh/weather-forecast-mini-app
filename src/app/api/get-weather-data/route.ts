import { NextResponse } from "next/server";


export async function POST(request: Request) {
	const { name } = await request.json();

	const apiKey = process.env.OPENWEATHER_API_KEY;
	const cityApiUrl = process.env.OPENWEATHER_API_CITY_URL;
	const currentWeatherUrl = process.env.OPENWEATHER_API_CURRENT_URL;

	if (!apiKey || !cityApiUrl || !currentWeatherUrl) {
		return NextResponse.json({ error: "API key or URLs not set" }, { status: 500 });
	}

	const responseCities = await fetch(`${cityApiUrl}?q=${name},SG&limit=1&appid=${apiKey}`);
	const dataCities = await responseCities.json();

	const { lat, lon } = dataCities[0];

	const responseCurrentWeather = await fetch(`${currentWeatherUrl}?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`);
	const dataCurrentWeather = await responseCurrentWeather.json();

	return NextResponse.json(dataCurrentWeather, { status: 200 });
}