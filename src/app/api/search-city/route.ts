import data from "@/data/sg.json";
import { City } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { query } = await request.json();
	if (!query || typeof query !== "string") {
		return NextResponse.json("Invalid query", { status: 400 });
	}

	const searchString = query.toLowerCase();
	const results = (data as unknown as City[]).filter((city) => city.name.toLowerCase().includes(searchString));

	return NextResponse.json(results, { status: 200 });
}