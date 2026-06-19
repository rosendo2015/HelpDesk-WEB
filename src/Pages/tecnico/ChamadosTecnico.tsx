import { Text } from "../../components/Text"

interface Servico {

    id: string
    nome: string
    price: number

}

interface ChamadoTecnicoFormatado {
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

export function ChamadosTecnico() {

    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Meus chamados
                </Text>
            </header>


        </div>
    )
}

