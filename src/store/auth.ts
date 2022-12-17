import create from "zustand";
import { createSelectors } from "./utils";
type AuthState = {
  token: string;
  updateToken: (token: string) => void;
};

export const useAuth = createSelectors(
  create<AuthState>()((set, get) => ({
    token: "",
    updateToken: (token) => set({ token }),
  }))
);
