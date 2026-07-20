import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useState } from "react";
import { criarChamado, getServicos } from "../../services/chamados";

interface NovoChamado {
  id: string;
  title: string;
  status: "ABERTO" | "EM_ANDAMENTO" | "CONCLUIDO";
  updatedAt: string;
  totalPrice: number;
  cliente: string;
  tecnico: string;
  services: {
    nome: string;
    valor: number;
  }[];
}

export function NovoChamado() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categoria, setCategoria] = useState("");

  // Função externa que recebe os dados e cria o chamado
  async function enviarChamado(title: string, desc: string, categoria: string) {
    const clienteId = Number(localStorage.getItem("clienteId"));
    const tecnicoId = 1; // depois você pode trocar por um select de técnicos
    const servicos = [Number(categoria)];

    const chamado = await criarChamado({ clienteId, tecnicoId, servicos });
    return chamado;
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Novo chamado
        </Text>
      </header>
      <Container className="w-full flex  flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="p-8 md:max-w-120 w-full md:min-w-120">
          <Text as="h2" variant="heading-md-bold">
            Informações
          </Text>
          <Text variant="text-xs-regular" className="text-gray-400">
            Configure os dias e horários em que você está disponível para
            atender chamados
          </Text>
          <form
            id="novoChamado"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const chamado = await enviarChamado(title, desc, categoria);
                alert("Chamado criado com sucesso!");
                console.log(chamado);
              } catch (error) {
                alert("Erro ao criar chamado");
                console.error(error);
              }
            }}
          >
            <InputText
              label="Título"
              placeholder="Digite um título para o chamado"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Descrição"
              placeholder="Descreva o que está acontecendo"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <InputSelect
              label="Categoria"
              placeholder="Selecione a categoria de atendimento"
              value={categoria}
              options={["1 - Software", "2 - Hardware", "3 - Rede"]}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </form>
        </Card>
        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
          <div>
            <Text as="h2" variant="heading-md-bold">
              Resumo
            </Text>
            <Text variant="text-xs-regular" className="text-gray-300">
              Valores e detalhes
            </Text>
          </div>
          <div>
            <Text as="h3" variant="text-xs-regular" className="text-gray-400">
              Categoria de serviço
            </Text>
            <Text variant="text-sm-regular" className="text-gray-200">
              Erro de rede
            </Text>
          </div>
          <div>
            <Text as="h3">Custo inicial</Text>
            <Text>R$ 200,00</Text>
          </div>
          <Text variant="text-xs-regular" className="text-gray-300">
            O chamado será automaticamente atribuído a um técnico disponível
          </Text>
          <Button form="novoChamado" type="submit">
            Criar chamado
          </Button>
        </Card>
      </Container>
    </div>
  );
}
