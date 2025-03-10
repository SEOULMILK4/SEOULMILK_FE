import { create } from "zustand";

interface DrawerState {
  isVerifyDrawerOpen: boolean;

  openVerifyDrawer: () => void;
  closeVerifyDrawer: () => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isVerifyDrawerOpen: false,
  openVerifyDrawer: () => set(() => ({ isVerifyDrawerOpen: true })),
  closeVerifyDrawer: () => set(() => ({ isVerifyDrawerOpen: false })),
}));
