"use client";

import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { Menu } from "lucide-react";
import CityCard from "./share/CityCard";
import { useCityListStore } from "@/store/cityStore";
import { CityWeatherData } from "@/types";

export function CityWeatherGrid() {
	const { cityList, setCityList } = useCityListStore();

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		const reordered = Array.from(cityList);
		const [removed] = reordered.splice(result.source.index, 1);
		reordered.splice(result.destination.index, 0, removed);
		setCityList(reordered);
	};

	if (cityList.length === 0) return null;

	return (
		<div className="relative w-full">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="city-grid" direction="vertical">
					{(provided) => (
						<div
							{...provided.droppableProps}
							className="flex flex-col gap-4 w-full"
						>
							{cityList.map((city: CityWeatherData, i) => (
								<Draggable key={city.id} draggableId={city.id.toString()} index={i}>
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