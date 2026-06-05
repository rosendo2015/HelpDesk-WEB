import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";

interface Props {
    children: JSX.Element;
    roles?: string[];
}

export function PrivateRoute({
    children,
    roles
}: Props) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (
        roles &&
        !roles.includes(user.role)
    ) {
        return <Navigate to="/login" replace />;
    }

    return children;
}