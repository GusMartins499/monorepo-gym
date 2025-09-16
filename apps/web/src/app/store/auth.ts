import { create } from "zustand"
import { persist } from "zustand/middleware"
import { USER_ROLE } from "../utils/user-role";

interface AuthState {
  user: { id: string; role: USER_ROLE } | null
  setUser: (user: AuthState["user"]) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.log('Erro ao recuperar dados do localStorage:', error)
        }
      },
    }
  )
)