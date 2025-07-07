import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CityWeatherData } from "@/types";

interface SelectedCityState {
	selectedCity: CityWeatherData | null;
	setSelectedCity: (city: CityWeatherData) => void;
}

export const useSelectedCityStore = create(
	persist<SelectedCityState>(
		(set) => ({
			selectedCity: null,
			setSelectedCity: (city) => set({ selectedCity: city }),
		}),
		{
			name: "selected-city-store",
		}
	)
);

interface CityListState {
	cityList: CityWeatherData[];
	setCityList: (cityList: CityWeatherData[]) => void;
	addCity: (city: CityWeatherData) => void;
	removeCity: (cityName: string) => void;
}

export const useCityListStore = create(
	persist<CityListState>(
		(set) => ({
			cityList: [],
			setCityList: (cityList) => set({ cityList }),
			addCity: (city) => set((state) => ({ cityList: [...state.cityList, city] })),
			removeCity: (cityName) => set((state) => ({ cityList: state.cityList.filter((c) => c.name.toLowerCase().trim() !== cityName.toLowerCase().trim()) })),
		}),
		{
			name: "city-list-store",
		}
	)
);