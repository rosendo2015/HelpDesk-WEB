import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";

export function DashboardAdmin() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
