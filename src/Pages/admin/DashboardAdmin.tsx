import { Outlet } from "react-router-dom";
import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "./adminVariants";
import type { VariantProps } from "class-variance-authority";

interface AdminProps extends VariantProps<typeof adminVariants> { }


export function DashboardAdmin({ }: AdminProps) {
    return (
        <AppLayout role="ADMIN">
            <Outlet />
        </AppLayout>
    );
}