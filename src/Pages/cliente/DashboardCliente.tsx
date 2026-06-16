import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "../admin/adminVariants";
import type { VariantProps } from "class-variance-authority";

interface DashboardClienteProps extends VariantProps<typeof adminVariants> { }


export function DashboardCliente({ }: DashboardClienteProps) {
    return (
        <AppLayout role="CLIENTE">
            <Outlet />
        </AppLayout>
    );
}