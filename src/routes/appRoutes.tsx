import { Route, Routes, Navigate } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { DashboardAdmin } from "../pages/admin";
import { DashboardTecnico } from "../pages/tecnico";
import { DashboardCliente } from "../pages/cliente/meusChamados";

import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
    return (
        <Routes>

            <Route element={<AuthLayout />}>
                <Route
                    path="/login"
                    element={<SignIn />}
                />

                <Route
                    path="/register"
                    element={<SignUp />}
                />
            </Route>

            <Route
                path="/admin"
                element={
                    <PrivateRoute roles={["ADMIN"]}>
                        <DashboardAdmin />
                    </PrivateRoute>
                }
            />

            <Route
                path="/tecnico"
                element={
                    <PrivateRoute roles={["TECNICO"]}>
                        <DashboardTecnico />
                    </PrivateRoute>
                }
            />

            <Route
                path="/cliente"
                element={
                    <PrivateRoute roles={["CLIENTE"]}>
                        <DashboardCliente />
                    </PrivateRoute>
                }
            />

            <Route
                path="*"
                element={<Navigate to="/login" />}
            />

        </Routes>
    );
}