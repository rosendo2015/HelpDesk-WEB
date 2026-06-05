import { AppLayout } from "../../layout/AppLayout";
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";

interface ClienteProps extends VariantProps<typeof clienteVariants> { }


export function DashboardCliente({ }: ClienteProps) {
    return (
        <AppLayout role="CLIENTE">
            <h2 className="text-xl font-bold mb-2">Clientes</h2>
            <p className="text-gray-500">Gerencie seus clientes aqui.</p>
        </AppLayout>
    );
}