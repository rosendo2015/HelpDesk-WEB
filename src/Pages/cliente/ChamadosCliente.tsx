
import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";
import EyeIcon from "../../assets/icons/eye.svg?react";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";

import { Link } from "../../components/Link";
import { Icon } from "../../components/Icon";

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
    role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
    return (
        <>
            <h2 className="text-xl font-bold mb-2 text-blue-dark">
                {role === "CLIENTE" ? "MEUS CHAMADOS" : "CHAMADOS"}
            </h2>
            <table className="w-full border border-gray-500 bg-white rounded-lg">
                <thead>
                    <tr className="text-left text-gray-400">
                        <th className="px-4 py-2">Atualizado em</th>
                        <th className="px-4 py-2 hidden md:table-cell">Id</th>
                        <th className="px-4 py-2">Titulo</th>
                        <th className="px-4 py-2 hidden md:table-cell">Serviço</th>
                        <th className="px-4 py-2 hidden md:table-cell">Valor total</th>
                        <th className="px-4 py-2 hidden md:table-cell">Técnico</th>
                        <th className="px-4 py-2" colSpan={2}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-gray-500">
                        <td className="px-4 py-2">13/04/25 20:56</td>
                        <td className="px-4 py-2 font-bold hidden md:table-cell">00003</td>
                        <td className="px-4 py-2 font-bold">Rede lenta</td>
                        <td className="px-4 py-2 hidden md:table-cell">Instalação de Rede</td>
                        <td className="px-4 py-2 hidden md:table-cell">R$ 180,00</td>

                        <td className="px-4 py-2 hidden md:table-cell">
                            <div className="flex items-center">
                                <Avatar size="xs" name="John Doe" />
                                <span className="ml-2">John Doe</span>
                            </div>
                        </td>

                        <td className="px-2 py-2">
                            <div className="inline-flex items-center">
                                <Tags variant="danger" size="md-width-text" display="text" svg={CircleHelpIcon} > Aberto</Tags>
                            </div>
                        </td>

                        <td className="px-2 py-2">
                            <Link to={`/admin/chamados/0003`} variant="subtitle" size="md">
                                <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                            </Link>
                        </td>

                    </tr>
                    <tr className="border border-gray-500">
                        <td className="px-4 py-2">13/04/25 20:56</td>
                        <td className="px-4 py-2 font-bold hidden md:table-cell">00003</td>
                        <td className="px-4 py-2 font-bold">Rede lenta</td>
                        <td className="px-4 py-2 hidden md:table-cell">Instalação de Rede</td>
                        <td className="px-4 py-2 hidden md:table-cell">R$ 180,00</td>

                        <td className="px-4 py-2 hidden md:table-cell">
                            <div className="flex items-center">
                                <Avatar size="xs" name="John Doe" />
                                <span className="ml-2">John Doe</span>
                            </div>
                        </td>

                        <td className="px-2 py-2">
                            <div className="inline-flex items-center">
                                <Tags variant="info" size="md-width-text" display="text" svg={CircleClockIcon} > Em Andamento</Tags>
                            </div>
                        </td>

                        <td className="px-2 py-2">
                            <Link to={`/admin/chamados/0003`} variant="subtitle" size="md">
                                <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                            </Link>
                        </td>

                    </tr>

                </tbody>
            </table>

        </>
    );
}
