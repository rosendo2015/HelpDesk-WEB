import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";

export function DashboardCliente() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
