import { Card } from "@/core-ui/Card";
import Text from "@/core-ui/Text";
import { useSelectedCityStore } from "@/store/cityStore";
import { getWeatherIcon } from "@/utils";
import Image from "next/image";
import { useRef } from "react";

export default function HourlyForecast() {
	const { selectedCity } = useSelectedCityStore();
	const scrollRef = useRef<HTMLDivElement>(null);
	let isDown = false;
	let startX = 0;
	let scrollLeft = 0;

	const hours = selectedCity?.hourly
		?.slice()
		.sort((a, b) => a.dt - b.dt)
		.slice(0, 24)
		.map((h) => ({
			time: new Date(h.dt * 1000).toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit' }),
			icon: getWeatherIcon(h.weather[0].icon),
			description: h.weather[0].description,
			temp: h.temp,
		}));

	if (!hours) return null;

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		isDown = true;
		if (scrollRef.current) {
			scrollRef.current.classList.add("scrolling");
			startX = e.pageX - scrollRef.current.offsetLeft;
			scrollLeft = scrollRef.current.scrollLeft;
		}
	};

	const handleMouseLeave = () => {
		isDown = false;
		if (scrollRef.current) scrollRef.current.classList.remove("scrolling");
	};

	const handleMouseUp = () => {
		isDown = false;
		if (scrollRef.current) scrollRef.current.classList.remove("scrolling");
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDown) return;
		e.preventDefault();
		if (scrollRef.current) {
			const x = e.pageX - scrollRef.current.offsetLeft;
			const walk = (x - startX) * 1; // scroll-fastness
			scrollRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	return (
		<div className="w-full">
			<div
				ref={scrollRef}
				className="flex flex-row gap-4 overflow-x-auto cursor-grab py-2 no-scrollbar select-none transform-gpu"
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				{hours?.map((h, i) => (
					<Card key={i} className="flex flex-col items-center justify-between min-w-[140px]">
						<Text className="text-sm text-white uppercase">{h.time}</Text>
						<Image src={h.icon} alt={h.description} width={70} height={70} className="pointer-events-none" />
						<Text className="text-xs capitalize text-white whitespace-nowrap">{h.description}</Text>
						<Text className="text-lg font-semibold text-white">{Math.round(h.temp)}°C</Text>
					</Card>
				))}
			</div>
		</div>
	);
} 