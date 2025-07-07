import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface FlyoutState {
	open: boolean;
	openFlyout: () => void;
	closeFlyout: () => void;
	toggleFlyout: () => void;
}

export const useFlyoutStore = create(
	persist<FlyoutState>(
		(set) => ({
			open: false,
			openFlyout: () => set({ open: true }),
			closeFlyout: () => set({ open: false }),
			toggleFlyout: () => set((state) => ({ open: !state.open })),
		}),
		{
			name: "flyout-store",
		}
	)
);

export type MenuActive = "search" | "settings";

interface MenuState {
	active: MenuActive;
	setActive: (active: MenuActive) => void;
}

export const useMenuStore = create(
	persist<MenuState>(
		(set) => ({
			active: "search",
			setActive: (active: MenuActive) => set({ active }),
		}),
		{
			name: "menu-store",
		}
	)
);

interface ForecastSettingsState {
	forecastDays: number;
	setForecastDays: (days: number) => void;
}

export const useForecastSettingsStore = create(
	persist<ForecastSettingsState>(
		(set) => ({
			forecastDays: 5,
			setForecastDays: (days: number) => set({ forecastDays: days }),
		}),
		{
			name: "forecast-settings-store",
		}
	)
);

interface RefetchIntervalState {
	refetchInterval: number; // in minutes
	setRefetchInterval: (minutes: number) => void;
}

export const useRefetchIntervalStore = create(
	persist<RefetchIntervalState>(
		(set) => ({
			refetchInterval: 15,
			setRefetchInterval: (minutes) => set({ refetchInterval: minutes }),
		}),
		{
			name: "refetch-interval-store",
		}
	)
);