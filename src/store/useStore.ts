import { create } from 'zustand';
import { Product } from '../types/product';

interface Store {
  products: Product[];
  setProducts: (products: Product[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
}));