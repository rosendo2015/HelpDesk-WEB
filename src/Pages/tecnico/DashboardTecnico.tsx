import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";

export function DashboardTecnico() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
