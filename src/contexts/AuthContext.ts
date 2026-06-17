import { createContext } from "react"
import type { User } from "../types/User"

interface AuthContextData {
    user: User | null
    token: string | null
    signIn: (data: { token: string; user: User }) => void
    signOut: () => void
    isLoading: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

