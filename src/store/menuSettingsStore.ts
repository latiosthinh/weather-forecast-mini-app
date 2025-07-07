import { create, StateCreator } from 'zustand';

interface FlyoutState {
	open: boolean;
	openFlyout: () => void;
	closeFlyout: () => void;
	toggleFlyout: () => void;
}

export const useFlyoutStore = create<FlyoutState>(((set: Parameters<StateCreator<FlyoutState>>[0]) => ({
	open: false,
	openFlyout: () => set({ open: true }),
	closeFlyout: () => set({ open: false }),
	toggleFlyout: () => set((state: FlyoutState) => ({ open: !state.open })),
})));

export type MenuActive = "search" | "settings";

interface MenuState {
	active: MenuActive;
	setActive: (active: MenuActive) => void;
}

export const useMenuStore = create<MenuState>(((set: Parameters<StateCreator<MenuState>>[0]) => ({
	active: "search",
	setActive: (active: MenuActive) => set({ active }),
})));

interface ForecastSettingsState {
	forecastDays: number;
	setForecastDays: (days: number) => void;
}

export const useForecastSettingsStore = create<ForecastSettingsState>(((set: Parameters<StateCreator<ForecastSettingsState>>[0]) => ({
	forecastDays: 5,
	setForecastDays: (days: number) => set({ forecastDays: days }),
})));