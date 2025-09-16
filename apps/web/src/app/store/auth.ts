import { create } from "zustand"
import { USER_ROLE } from "../utils/user-role";

interface AuthState {
  user: { id: string; role: USER_ROLE } | null
  setUser: (user: AuthState["user"]) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
