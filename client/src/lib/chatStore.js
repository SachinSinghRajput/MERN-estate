import { create } from "zustand";

export const useChatStore = create((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));

export default useChatStore;
