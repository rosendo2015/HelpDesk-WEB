import { useEffect, useState } from "react"
import { Text } from "../../components/Text"
import { Icon } from "../../components/Icon"
import { Link } from "../../components/Link"
import { Tags } from "../../components/Tags"
import { Avatar } from "../../components/Avatar"

import PenLineIcon from "../../assets/icons/pen-line.svg?react"

import CircleClockIcon from "../../assets/icons/clock-2.svg?react";
import CircleHelpIcon from "../../assets/icons/circle-help.svg?react";

import { api } from "../../services/api"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoFormatado {
    id: string
    title: string
    cliente: string
    tecnico: string
    status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO"
    totalPrice: number
    updatedAt: string
    createdAt?: string
    services: Servico[]
}

export function ChamadosAdmin() {
    const [chamados, setChamados] = useState<ChamadoFormatado[]>([])

    useEffect(() => {
        api.get(`/chamados`)
            .then(res => {

                setChamados(res.data)
            })
            .catch(err => console.error("Erro ao buscar chamados:", err))
    }, [])
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Chamados
                </Text>
            </header>

            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr>
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 ">Atualizado em</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell">Id</th>
                            <th className="px-3 py-2 sm:px-4">Título e Serviço</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell">Valor total</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell">Cliente</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell">Técnico</th>
                            <th className="px-3 py-2 sm:px-4 ">Status</th>
                            <th className="px-3 py-2 sm:px-4 "></th>
                        </tr>
                    </thead>

                    <tbody>
                        {chamados.map((chamado) => (
                            <tr key={chamado.id} className="border-t border-gray-500">

                                <td className="px-3 py-2 sm:px-4 whitespace-nowrap">
                                    {new Date(chamado.updatedAt).toLocaleString()}
                                </td>

                                <td className="px-3 py-2 sm:px-4 max-w-20 truncate hidden md:table-cell">
                                    <Text variant="text-sm-bold" >{chamado.id}</Text>
                                </td>

                                <td className="px-3 py-2 sm:px-4">
                                    <Text variant="text-sm-bold">{chamado.title}</Text>
                                    {chamado.services && chamado.services.map(item => (
                                        <div key={item.id}>
                                            <Text variant="text-sm-regular" className="hidden md:table-cell">{item.nome}</Text>
                                        </div>
                                    ))}
                                </td>
                                <td className="hidden md:table-cell">
                                    <Text variant="text-sm-bold">
                                        {chamado.totalPrice.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </Text>
                                </td>
                                <td className="px-3 py-2 sm:px-4 hidden md:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.cliente} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.cliente}
                                        </Text>
                                    </div>
                                </td>

                                <td className="px-3 py-2 sm:px-4 hidden md:table-cell">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.tecnico} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.tecnico}
                                        </Text>
                                    </div>
                                </td>
                                <td className="">
                                    <td className="px-2 py-2">
                                        <Tags
                                            variant={
                                                chamado.status === "ABERTO"
                                                    ? "danger"
                                                    : chamado.status === "EM_ATENDIMENTO"
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
                                                : chamado.status === "EM_ATENDIMENTO"
                                                    ? "Em andamento"
                                                    : "Concluído"}
                                        </Tags>
                                    </td>
                                </td>
                                <td className="px-3 py-2 sm:px-4 text-center">
                                    <Link to={`/admin/chamados/${chamado.id}`} variant="subtitle" size="md">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

