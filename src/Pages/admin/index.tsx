import { AppLayout } from "../../layout/AppLayout";
import { adminVariants } from "./adminVariants";
import type { VariantProps } from "class-variance-authority";

interface AdminProps extends VariantProps<typeof adminVariants> { }


export function DashboardAdmin({ }: AdminProps) {
    return (
        <AppLayout role="ADMIN">
            <h2 className="text-xl font-bold mb-2">Admin</h2>
            <p className="text-gray-500">Gerencie seus administradores aqui.</p>
        </AppLayout>
    );
}