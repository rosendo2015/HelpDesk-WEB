import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { InputText } from "../../components/InputText";
import { Textarea } from "../../components/InputTextArea";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { useState, useEffect, useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { useNavigate } from "react-router-dom";

import { useChamados } from "../../contexts/Chamado/hooks/useChamados";

export function NovoChamado() {
  const { createChamado } = useChamados();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categoria, setCategoria] = useState<{
    id: string;
    nome: string;
    valor: number;
  } | null>(null);

  const { user } = useAuth();
  const servicesCtx = useContext(ServicesContext);
  const navigate = useNavigate();

  useEffect(() => {
    servicesCtx?.fetchCategoryServices();
  }, []);

  async function enviarChamado() {
    try {
      if (!user) throw new Error("Usuário não autenticado");

      // 🔍 Loga o objeto que será enviado
      const chamadoData = {
        title,
        clienteId: user.id,
        description: desc,
        services: categoria ? [String(categoria.id ?? "")] : [],
      };

      console.log("Dados enviados para criarChamado:", chamadoData);

      await createChamado(chamadoData);

      alert("Chamado criado com sucesso!");

      navigate("/cliente/chamados-cliente");
    } catch (error) {
      alert("Erro ao criar chamado");
      console.error(error);
    }
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Novo chamado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="p-8 md:max-w-120 w-full md:min-w-120">
          <Text as="h2" variant="heading-md-bold">
            Informações
          </Text>
          <form
            id="novoChamado"
            onSubmit={(e) => {
              e.preventDefault();
              enviarChamado();
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
              onChange={(option) => setCategoria(option)}
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
          {categoria && (
            <div>
              <Text as="h3" variant="text-xs-regular" className="text-gray-400">
                Categoria de serviço
              </Text>
              <Text variant="text-sm-regular" className="text-gray-200">
                {categoria.nome}
              </Text>
              <Text as="h3">Custo inicial</Text>
              <Text>R$ {categoria.valor}</Text>
            </div>
          )}
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
