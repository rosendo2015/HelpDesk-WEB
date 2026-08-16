import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { ChamadosAdmin } from "../Pages/admin/ChamadosAdmin";
import { DashboardAdmin } from "../Pages/admin/DashboardAdmin";
import { EditarChamadoAdmin } from "../Pages/admin/EditarChamadoAdmin";
import { EditarTecnico } from "../Pages/admin/EditarTecnico";
import { ClientesAdmin } from "../Pages/admin/ListClientes";
import { TecnicosAdmin } from "../Pages/admin/ListTecnicos";
import { NovoTecnico } from "../Pages/admin/NovoTecnico";
import { ServicosAdmin } from "../Pages/admin/ServicosAdmin";
import { ChamadosCliente } from "../Pages/cliente/ChamadosCliente";
import { DashboardCliente } from "../Pages/cliente/DashboardCliente";
import { DetailChamadoCliente } from "../Pages/cliente/DetailChamadoCliente";
import { EditarChamadoCliente } from "../Pages/cliente/EditarChamadoCliente";
import { NovoChamado } from "../Pages/cliente/NovoChamado";

import { Components } from "../Pages/PageComponents";
import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";
import { ChamadoDetailsTecnico } from "../Pages/tecnico/ChamadoDetailsTecnico";
import { ChamadosTecnico } from "../Pages/tecnico/ChamadosTecnico";
import { DashboardTecnico } from "../Pages/tecnico/DashboardTecnico";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/components" element={<Components />} />
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
        <Route path="editarChamados/:id" element={<EditarChamadoAdmin />} />
        <Route path="clientes" element={<ClientesAdmin />} />
        <Route path="servicos" element={<ServicosAdmin />} />

        <Route path="tecnicos" element={<TecnicosAdmin />} />
        <Route path="novoTecnico" element={<NovoTecnico />} />
        <Route path="editarTecnico/:id" element={<EditarTecnico />} />
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
        <Route path="chamado-details/:id" element={<ChamadoDetailsTecnico />} />
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
        <Route path="editar-chamado/:id" element={<EditarChamadoCliente />} />
        <Route path="detail-chamado/:id" element={<DetailChamadoCliente />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
