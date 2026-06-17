import { useEffect, useState, type JSX } from "react"
import { Text } from "../../components/Text"
import { Icon } from "../../components/Icon"
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import AlertIcon from "../../assets/icons/circle-alert.svg?react"
import { api } from "../../services/api"
import { Link } from "../../components/Link"
import { Tags } from "../../components/Tags"
import { Avatar } from "../../components/Avatar"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoFormatado {
    id: string
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

    const renderStatus = (status: ChamadoFormatado["status"]): JSX.Element => {
        switch (status) {
            case "ABERTO":
                return <Tags svg={AlertIcon} variant="danger" size="md-width-text" display="text" format="default">{status}</Tags>
            case "EM_ATENDIMENTO":
                return <Tags variant="success" size="md-width-text" display="text">{status}</Tags>
            case "ENCERRADO":
                return <Tags variant="danger" size="md-width-text" display="text">{status}</Tags>
            default:
                return <Tags variant="default" size="md-width-text" display="text">{status}</Tags>
        }
    }


    return (
        <div className="p-4 sm:p-6">
            <header>
                <Text variant="text-lg-bold" className="text-blue-600 mb-4">
                    Chamados
                </Text>
            </header>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm sm:text-base">
                    <thead className="bg-gray-500 text-gray-100">
                        <tr>
                            <th className="px-3 py-2 sm:px-4">Atualizado em</th>
                            <th className="px-3 py-2 sm:px-4">Id</th>
                            <th className="px-3 py-2 sm:px-4">Título e Serviço</th>
                            <th className="px-3 py-2 sm:px-4">Valor total</th>
                            <th className="px-3 py-2 sm:px-4">Cliente</th>
                            <th className="px-3 py-2 sm:px-4">Técnico</th>
                            <th className="px-3 py-2 sm:px-4">Status</th>
                            <th className="px-3 py-2 sm:px-4"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {chamados.map((chamado) => (
                            <tr key={chamado.id} className="border-t hover:bg-gray-50">

                                <td className="px-3 py-2 sm:px-4 whitespace-nowrap">
                                    {new Date(chamado.updatedAt).toLocaleString()}
                                </td>

                                <td className="px-3 py-2 sm:px-4">
                                    <Text variant="text-sm-bold">{chamado.id}</Text>
                                </td>

                                <td className="px-3 py-2 sm:px-4">
                                    {chamado.services && chamado.services.map(item => (
                                        <div key={item.id}>
                                            <Text variant="text-sm-bold">{item.nome}</Text>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    <Text variant="text-sm-bold">
                                        {chamado.totalPrice.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </Text>
                                </td>
                                <td className="px-3 py-2 sm:px-4">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.cliente} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.cliente}
                                        </Text>
                                    </div>
                                </td>

                                <td className="px-3 py-2 sm:px-4">
                                    <div className="flex items-center gap-2">
                                        <Avatar name={chamado.tecnico} size="xs" />
                                        <Text variant="text-sm-bold">
                                            {chamado.tecnico}
                                        </Text>
                                    </div>
                                </td>
                                <td className="">
                                    {renderStatus(chamado.status)}
                                </td>
                                <td className="px-3 py-2 sm:px-4 text-center">
                                    <Link to={`/admin/chamados/${chamado.id}`} variant="secondary" size="md">
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

