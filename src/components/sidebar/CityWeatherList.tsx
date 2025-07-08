"use client";

import Spinner from "@/core-ui/Spinner";
import { useCityListStore } from "@/store/cityStore";
import { CityWeatherData } from "@/types";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import CityCard from "../share/CityCard";

export default function CityWeatherList() {
	const { cityList, setCityList, loading } = useCityListStore();

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
				<Droppable droppableId="city-list" direction="vertical">
					{(provided) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							className="flex flex-col gap-4 w-full"
						>
							{cityList.map((city: CityWeatherData, i) => (
								<Draggable key={city.name.trim()} draggableId={city.name.trim()} index={i}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={{
												...provided.draggableProps.style,
												opacity: snapshot.isDragging ? 0.7 : 1,
												userSelect: 'none',
											}}
										>
											<CityCard city={city} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
							{loading && <Spinner />}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}
