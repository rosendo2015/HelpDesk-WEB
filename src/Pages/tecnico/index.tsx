import { AppLayout } from "../../layout/AppLayout";
import { tecnicoVariants } from "./tecnicoVariants";
import type { VariantProps } from "class-variance-authority";

interface TecnicoProps extends VariantProps<typeof tecnicoVariants> { }


export function DashboardTecnico({ }: TecnicoProps) {
    return (
        <AppLayout role="TECNICO">
            <h2 className="text-xl font-bold mb-2">Técnicos</h2>
            <p className="text-gray-500">Gerencie seus técnicos aqui.</p>
        </AppLayout>
    );
}