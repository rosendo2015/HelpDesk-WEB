import { Route, Routes, Navigate } from "react-router-dom";

import { AuthLayout } from "../layout/AuthLayout";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { DashboardCliente } from "../pages/cliente/DashboardCliente";
import { DashboardAdmin } from "../pages/admin/DashboardAdmin";
import { ChamadosAdmin } from "../pages/admin/ChamadosAdmin";
import { PrivateRoute } from "./PrivateRoute";
import { ChamadosCliente } from "../pages/cliente/ChamadosCliente";
import { NovoChamado } from "../pages/cliente/NovoChamado";
import { DashboardTecnico } from "../pages/tecnico/DashboardTecnico";
import { ChamadosTecnico } from "../pages/tecnico/ChamadosTecnico";

export function AppRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Route>

            {/* Rotas do ADMIN */}
            <Route
                path="/admin"
                element={
                    <PrivateRoute roles={["ADMIN"]}>
                        <DashboardAdmin />
                    </PrivateRoute>
                }
            >
                <Route index element={<ChamadosAdmin />} />
                <Route path="chamados" element={<ChamadosAdmin />} />
                {/* Futuras rotas */}
                {/*
        <Route path="tecnicos" element={<TecnicosAdmin />} />
        <Route path="clientes" element={<ClientesAdmin />} />
        <Route path="servicos" element={<ServicosAdmin />} />
        */}
            </Route>

            {/* Rotas do TÉCNICO */}

            <Route
                path="/tecnico"
                element={
                    <PrivateRoute roles={["TECNICO"]}>
                        <DashboardTecnico />
                    </PrivateRoute>
                }
            >
                <Route index element={<ChamadosTecnico />} />
                <Route path="meus-chamados" element={<ChamadosTecnico />} />
            </Route>


            {/* Rotas do CLIENTE */}

            <Route
                path="/cliente"
                element={
                    <PrivateRoute roles={["CLIENTE"]}>
                        <DashboardCliente />
                    </PrivateRoute>
                }
            >

                <Route index element={<ChamadosCliente />} />
                <Route path="chamados-cliente" element={<ChamadosCliente />} />
                <Route path="novo-chamado" element={<NovoChamado />} />

            </Route>


            {/* Fallback */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

