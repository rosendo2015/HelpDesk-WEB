import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import type { JSX } from "react"

interface Props {
    children: JSX.Element
    roles?: string[]
}

export function PrivateRoute({ children, roles }: Props) {
    const { user, isLoading } = useAuth()

    // 🔹 Enquanto o AuthProvider ainda está carregando, não renderiza nada
    if (isLoading) {
        return <div>Carregando...</div> // ou um splash elegante
    }

    // 🔹 Se não há usuário após o carregamento, redireciona
    if (!user) {
        return <Navigate to="/login" replace />
    }

    // 🔹 Se há restrição de papel (role)
    if (roles && !roles.includes(user.role)) {
        return <Navigate to="/login" replace />
    }

    return children
}
