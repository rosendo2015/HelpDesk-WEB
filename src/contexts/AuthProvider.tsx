import { useState, useEffect, type ReactNode, startTransition } from "react"
import { AuthContext } from "./AuthContext"
import type { User } from "../types/User"
import { jwtDecode } from "jwt-decode"
import { api } from "../services/api"

interface Props {
  children: ReactNode
}

interface DecodedToken {
  exp: number
  sub: string
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const loadStoredData = async () => {
      const storedUser = localStorage.getItem("@helpdesk:user")
      const storedToken = localStorage.getItem("@helpdesk:token")

      if (!storedUser || !storedToken) return

      try {
        const decoded: DecodedToken = jwtDecode(storedToken)
        const isExpired = decoded.exp * 1000 < Date.now()

        if (isExpired) {
          signOut()
          return
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`

        // 🔹 Usa startTransition para evitar render síncrono
        startTransition(() => {
          setUser(JSON.parse(storedUser))
          setToken(storedToken)
        })
      } catch (error) {
        console.error("Erro ao carregar token:", error)
        signOut()
      }
    }

    loadStoredData()
  }, [])

  function signIn({ token, user }: { token: string; user: User }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user))
    localStorage.setItem("@helpdesk:token", token)
    setUser(user)
    setToken(token)
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  function signOut() {
    localStorage.removeItem("@helpdesk:user")
    localStorage.removeItem("@helpdesk:token")
    setUser(null)
    setToken(null)
    delete api.defaults.headers.common["Authorization"]
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
