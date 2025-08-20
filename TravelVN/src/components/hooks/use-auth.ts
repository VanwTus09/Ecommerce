import { create } from "zustand";
import type { User } from "../models";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  SetUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      SetUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // key trong localStorage
       storage: createJSONStorage(() => localStorage), // 
    }
  )
);