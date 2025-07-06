import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { lat, lon, exclude = "minutely,alerts", type = "current" } = await request.json();
	const apiKey = process.env.OPENWEATHER_API_KEY;
	const currentWeatherUrl = process.env.OPENWEATHER_API_CURRENT_URL;
	const dailyWeatherUrl = process.env.OPENWEATHER_API_DAILY_URL;

	if (!apiKey) {
		return NextResponse.json({ error: "API key not set" }, { status: 500 });
	}

	const response = await fetch(`${type === "current" ? currentWeatherUrl : dailyWeatherUrl}?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`);
	const data = await response.json();

	return NextResponse.json(data, { status: 200 });
}