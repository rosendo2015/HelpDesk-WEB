import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";
import EyeIcon from "../../assets/icons/eye.svg?react";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import { Link } from "../../components/Link";
import { Icon } from "../../components/Icon";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Chamado {
    id: string
    title: string
    status: "ABERTO" | "EM_ANDAMENTO" | "CONCLUIDO"
    updatedAt: string
    totalPrice: number
    cliente: string
    tecnico: string
    services: {
        nome: string
        valor: number
    }[]
}

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
    role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
    const [chamados, setChamados] = useState<Chamado[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchChamados() {
            try {
                const response = await api.get<Chamado[]>("/chamados")
                setChamados(response.data)
            } catch (error) {
                console.error("Erro ao buscar chamados:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchChamados()
    }, [])

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
                    {isLoading ? (
                        <tr>
                            <td colSpan={8} className="text-center py-4">Carregando...</td>
                        </tr>
                    ) : (
                        chamados.map(chamado => (
                            <tr key={chamado.id} className="border border-gray-500">
                                <td className="px-4 py-2">
                                    {new Date(chamado.updatedAt).toLocaleString("pt-BR")}
                                </td>

                                <td className="px-4 py-2 font-bold hidden md:table-cell max-w-20 truncate">{chamado.id}</td>

                                <td className="px-4 py-2 font-bold max-w-50.5 truncate">{chamado.title}</td>

                                <td className="px-4 py-2 hidden md:table-cell max-w-44 truncate">
                                    {chamado.services.map(s => s.nome).join(", ")}
                                </td>

                                <td className="px-4 py-2 hidden md:table-cell">
                                    R$ {chamado.totalPrice.toFixed(2)}
                                </td>

                                <td className="px-4 py-2 hidden md:table-cell">
                                    <div className="flex items-center">
                                        <Avatar size="xs" name={chamado.tecnico} />
                                        <span className="ml-2">{chamado.tecnico}</span>
                                    </div>
                                </td>

                                <td className="px-2 py-2">
                                    <Tags
                                        variant={
                                            chamado.status === "ABERTO"
                                                ? "danger"
                                                : chamado.status === "EM_ANDAMENTO"
                                                    ? "info"
                                                    : "success"
                                        }
                                        size="md-width-text"
                                        display="text"
                                        svg={
                                            chamado.status === "ABERTO"
                                                ? CircleHelpIcon
                                                : CircleClockIcon
                                        }
                                    >
                                        {chamado.status === "ABERTO"
                                            ? "Aberto"
                                            : chamado.status === "EM_ANDAMENTO"
                                                ? "Em andamento"
                                                : "Concluído"}
                                    </Tags>
                                </td>

                                <td className="px-2 py-2">
                                    <Link to={`/cliente/chamados/${chamado.id}`} variant="subtitle" size="md">
                                        <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

        </>
    );
}
