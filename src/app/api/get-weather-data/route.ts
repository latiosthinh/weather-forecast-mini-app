import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { lat, lon, exclude = "minutely,alerts" } = await request.json();
	const apiKey = process.env.OPENWEATHER_API_KEY;
	const url = process.env.OPENWEATHER_API_BASE_URL;

	if (!apiKey) {
		return NextResponse.json({ error: "API key not set" }, { status: 500 });
	}

	const response = await fetch(`${url}?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`);
	const data = await response.json();

	return NextResponse.json(data, { status: 200 });
}