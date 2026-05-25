import { Route, Routes, Navigate } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
    return (
        <Routes>
            {/* Layout de autenticação */}
            <Route element={<AuthLayout />}>
                <Route index element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Route>
        </Routes>
    );
}
