import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";

import { AuthStore } from "../types/auth";

const queryClient = new QueryClient();

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isAuthenticated: !!localStorage.getItem("token"),

  setAuth: (auth) => {
    if (auth) {
      localStorage.setItem("token", auth.token);
      localStorage.setItem("user", JSON.stringify(auth.user));
      set({ token: auth.token, user: auth.user, isAuthenticated: true });

      queryClient.invalidateQueries({ queryKey: ["products"] });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ token: null, user: null, isAuthenticated: false });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Invalidate the product query after logout
    queryClient.invalidateQueries({ queryKey: ["products"] });

    set({ token: null, user: null, isAuthenticated: false });
  },
}));
