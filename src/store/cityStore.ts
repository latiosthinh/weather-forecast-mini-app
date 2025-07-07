import { create } from "zustand";
import { CityWeatherData } from "@/types";

interface SelectedCityState {
	selectedCity: CityWeatherData | null;
	setSelectedCity: (city: CityWeatherData) => void;
}

export const useSelectedCityStore = create<SelectedCityState>((set) => ({
	selectedCity: null,
	setSelectedCity: (city) => set({ selectedCity: city }),
}));


interface CityListState {
	cityList: CityWeatherData[];
	setCityList: (cityList: CityWeatherData[]) => void;
	addCity: (city: CityWeatherData) => void;
	removeCity: (cityName: string) => void;
}

export const useCityListStore = create<CityListState>((set) => ({
	cityList: [],
	setCityList: (cityList) => set({ cityList }),
	addCity: (city) => set((state) => ({ cityList: [...state.cityList, city] })),
	removeCity: (cityName) => set((state) => ({ cityList: state.cityList.filter((c) => c.name.toLowerCase().trim() !== cityName.toLowerCase().trim()) })),
}));