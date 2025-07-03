import { create } from "zustand";
import { City } from "@/types";

interface SelectedCityState {
	selectedCity: City | null;
	setSelectedCity: (city: City) => void;
}

export const useSelectedCityStore = create<SelectedCityState>((set) => ({
	selectedCity: null,
	setSelectedCity: (city) => set({ selectedCity: city }),
}));


interface CityListState {
	cityList: City[];
	setCityList: (cityList: City[]) => void;
	addCity: (city: City) => void;
	removeCity: (cityName: string) => void;
}

export const useCityListStore = create<CityListState>((set) => ({
	cityList: [],
	setCityList: (cityList) => set({ cityList }),
	addCity: (city) => set((state) => ({ cityList: [...state.cityList, city] })),
	removeCity: (cityName) => set((state) => ({ cityList: state.cityList.filter((c) => c.name.toLowerCase().trim() !== cityName.toLowerCase().trim()) })),
}));