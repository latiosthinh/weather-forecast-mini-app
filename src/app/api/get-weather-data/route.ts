import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { name }: { name: string } = await request.json();

	const apiKey = process.env.OPENWEATHER_API_KEY;
	const cityApiUrl = process.env.OPENWEATHER_API_CITY_URL;
	const oneCallApiUrl = process.env.OPENWEATHER_API_ONE_CALL_URL;

	if (!apiKey || !cityApiUrl || !oneCallApiUrl) {
		return NextResponse.json({ error: "API key or URLs not set" }, { status: 500 });
	}

	const responseCities = await fetch(`${cityApiUrl}?q=${name},SG&limit=1&appid=${apiKey}`);
	const dataCities = await responseCities.json();

	const { lat, lon } = dataCities[0];

	const response = await fetch(`${oneCallApiUrl}?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`);
	const data = await response.json();

	return NextResponse.json(data, { status: 200 });
}