import { AppLayout } from "../../../layout/AppLayout";
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import CircleHelpIcon from "../../../assets/icons/circle-help.svg?react";
import EyeIcon from "../../../assets/icons/eye.svg?react";
import { Tags } from "../../../components/Tags";

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
    role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function DashboardCliente({ role = "CLIENTE" }: ClienteProps) {
    return (
        <AppLayout role={role}>
            <h2 className="text-xl font-bold mb-2 text-blue-dark">MEUS CHAMADOS</h2>
            <table className="border border-gray-500 w-full bg-white rounded-lg">
                <thead>
                    <tr className="text-left text-gray-400">
                        <th className="px-4 py-2">Atualiz...</th>
                        <th className="px-4 py-2">Titulo</th>
                        <th className="px-4 py-2" colSpan={2}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-gray-500">
                        <td className="px-4 py-2">13/04/25 20:56</td>
                        <td className="px-4 py-2 font-bold">Rede lenta</td>
                        <td className="px-4 py-2"><Tags variant="danger" svg={CircleHelpIcon} /></td>
                        <td className="px-4 py-2"><Tags variant="default" svg={EyeIcon} /></td>
                    </tr>
                    <tr className="border border-gray-500">
                        <td className="px-4 py-2">13/04/25 20:56</td>
                        <td className="px-4 py-2 font-bold">Rede lenta</td>
                        <td className="px-4 py-2"><Tags variant="danger" svg={CircleHelpIcon} /></td>
                        <td className="px-4 py-2"><Tags variant="default" svg={EyeIcon} /></td>
                    </tr>
                </tbody>
            </table>
        </AppLayout>
    );
}
