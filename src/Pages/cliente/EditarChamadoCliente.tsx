import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useCahmados";
import { useState } from "react";

export function EditarChamadoCliente() {
  const { id } = useParams();
  const { getChamadoById, updateChamado } = useChamados();
  const navigate = useNavigate();

  const chamado = getChamadoById(id!);

  const [title, setTitle] = useState(chamado?.title ?? "");
  const [desc, setDesc] = useState(chamado?.description ?? "");
  const [services, setServices] = useState(
    chamado?.services.map((s) => s.id) ?? [],
  );

  async function salvarChamado(e: React.FormEvent) {
    e.preventDefault();
    await updateChamado(id!, {
      title,
      description: desc,
      services,
    });
    alert("Chamado atualizado com sucesso!");
    navigate("/cliente/chamados-cliente");
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Editar chamado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="p-8 md:max-w-120 w-full md:min-w-120">
          <Text as="h2" variant="heading-md-bold">
            Informações
          </Text>
          <form onSubmit={salvarChamado}>
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
              value={chamado?.services[0]}
              onChange={(option) => setServices([option.id])}
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
              Categoria selecionada
            </Text>
            <Text as="h3">Custo inicial</Text>
            <Text>{chamado?.services[0]?.valor?.toFixed(2) || "0.00"}</Text>
          </div>

          <Text variant="text-xs-regular" className="text-gray-300">
            O chamado será automaticamente atribuído a um técnico disponível
          </Text>
          <div className="flex items-center justify-end gap-2">
            <Button variant="secondary" type="reset">
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
