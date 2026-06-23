import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";

interface NovoChamado {
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
interface NovoChamadoProps {
    titulo: string
    description: string
}

export function NovoChamado({ titulo, description }: NovoChamadoProps) {
    return (
        <div className="md:max-w-200 mt-14 mx-auto">
            <header className="w-200 mb-6">
                <Text as="h1" variant="text-xl-bold" className="text-blue-dark">Novo chamado</Text>
            </header>
            <Container className="w-full flex  flex-col gap-6 md:flex-row">
                <Card className="p-8 md:max-w-120 w-full">
                    <Text as="h2" variant="heading-md-bold">Informações</Text>
                    <Text variant="text-xs-regular" className="text-gray-400">
                        Configure os dias e horários em que você está disponível para atender chamados
                    </Text>
                    <form>
                        <InputText label="Título" placeholder="Digite um título para o chamado" />
                        <Textarea
                            label="Descrição"
                            placeholder="Descreva o que está acontecendo"
                        />
                        <InputSelect
                            label="Categoria"
                            placeholder="Selecione a categoria de atendimento"
                            options={["Item 1", "Item 2", "Item 3"]}

                        />
                    </form>
                </Card>
                <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
                    <div>
                        <Text as="h2" variant="heading-md-bold">Resumo</Text>
                        <Text variant="text-xs-regular" className="text-gray-300">Valores e detalhes</Text>
                    </div>
                    <div>
                        <Text as="h3" variant="text-xs-regular" className="text-gray-400">Categoria de serviço</Text>
                        <Text variant="text-sm-regular" className="text-gray-200">Erro de rede</Text>
                    </div>
                    <div>
                        <Text as="h3">Custo inicial</Text>
                        <Text>R$ 200,00</Text>
                    </div>
                    <Text variant="text-xs-regular" className="text-gray-300">
                        O chamado será automaticamente atribuído a um técnico disponível
                    </Text>
                    <Button>Criar chamado</Button>

                </Card>
            </Container>
        </div>
    )
}
