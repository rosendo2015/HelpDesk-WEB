import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "../admin/adminVariants";
import type { VariantProps } from "class-variance-authority";

interface ClienteProps extends VariantProps<typeof adminVariants> { }

export function DashboardCliente({ }: ClienteProps) {
    return (
        <AppLayout role="CLIENTE">
            <Outlet />
        </AppLayout>
    );
}