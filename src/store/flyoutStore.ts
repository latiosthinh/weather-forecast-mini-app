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