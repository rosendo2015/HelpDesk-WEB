import { Outlet } from "react-router";
import { AppLayout } from "../../layout/AppLayout";

export function DashboardTecnico() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
