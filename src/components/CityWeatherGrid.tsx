"use client";

import { type City } from "@/types";
import CityCard from "./share/CityCard";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";

interface CityWeatherGridProps {
	cities: City[];
	onReorder?: (cities: City[]) => void;
}

export function CityWeatherGrid({ cities: initialCities, onReorder }: CityWeatherGridProps) {
	const [cities, setCities] = useState(initialCities);
	const scrollRef = useRef<HTMLDivElement>(null);

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		const reordered = Array.from(cities);
		const [removed] = reordered.splice(result.source.index, 1);
		reordered.splice(result.destination.index, 0, removed);
		setCities(reordered);
		onReorder?.(reordered);
	};

	const scrollBy = (offset: number) => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
		}
	};

	return (
		<div className="relative w-full">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="city-grid" direction="vertical">
					{(provided) => (
						<div
							ref={(el) => {
								scrollRef.current = el;
								provided.innerRef(el);
							}}
							{...provided.droppableProps}
							className="flex flex-col gap-4 w-full"
							style={{}}
						>
							{cities.map((city, i) => (
								<Draggable key={city.name} draggableId={city.name} index={i}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											style={{
												...provided.draggableProps.style,
												opacity: snapshot.isDragging ? 0.7 : 1,
												userSelect: 'none',
												position: 'relative',
											}}
										>
											<div
												className="absolute top-2 left-2 cursor-move z-10"
												tabIndex={0}
												{...provided.dragHandleProps}
											>
												<Menu className="w-4 h-4" />
											</div>
											<CityCard city={city} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
} 