import { create } from 'zustand';

const useCart = create((set, get) => ({
  items: [],
  addToCart: (beat) => set((state) => ({ items: [...state.items, beat] })),
  removeFromCart: (beat) => set((state) => ({ items: state.items.filter((item) => item.title !== beat.title) })),
  isInCart: (beat) => Boolean(get().items.find((item) => item.title === beat.title)),
  emptyCart: () => set({ items: [] }),
}));

export default useCart;
