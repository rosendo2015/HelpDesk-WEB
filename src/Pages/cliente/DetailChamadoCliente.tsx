import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useCahmados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";

export function DetailChamadoCliente() {
  const { id } = useParams();
  const { getChamadoById } = useChamados();

  const chamado = getChamadoById(id!);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <Text variant="text-xs-bold">Voltar</Text>
        </a>
        <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
          Chamado detalhado
        </Text>
      </header>
      <Container className="w-full flex flex-col gap-6 md:flex-row md:min-w-200">
        <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full md:min-w-120">
          <div className="flex items-start justify-between mb-6">
            <div className="flex flex-col gap-2">
              <Text as="h2" variant="heading-md-normal">
                {chamado.id}
              </Text>
              <Text as="h2" variant="heading-md-bold">
                {chamado.title}
              </Text>
            </div>

            <Tags
              variant={getStatusConfig(chamado.status).variant}
              svg={getStatusConfig(chamado.status).icon}
              className="flex w-1/3"
            >
              {getStatusConfig(chamado.status).label}
            </Tags>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="text-sm-bold" className="text-gray-400">
              Descrição
            </Text>
            <Text>{chamado.description}</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Text variant="text-sm-bold" className="text-gray-400">
              Categoria
            </Text>
            {chamado.services.map((service) => (
              <Text key={service.id}>{service.nome}</Text>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-20">
              <div className="flex flex-col gap-2">
                <Text variant="text-sm-bold" className="text-gray-400">
                  Criado em
                </Text>
                <Text>{new Date(chamado.createdAt).toLocaleString()}</Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text variant="text-sm-bold" className="text-gray-400">
                  Atualizado em
                </Text>
                <Text>{new Date(chamado.updatedAt).toLocaleString()}</Text>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 w-full">
          <div>
            <Text variant="text-sm-bold" className="text-gray-400 mb-2 block">
              Técnico responsável
            </Text>

            <div className="flex gap-2">
              <Avatar name="Jhon Doe" />
              <div className="flex flex-col">
                <Text variant="text-xs-regular" className="text-gray-300">
                  {chamado.tecnico?.name || "Técnico não atribuído"}
                </Text>
                <Text variant="text-xs-regular" className="text-gray-300">
                  {chamado.tecnico?.email || "Email não disponível"}
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Valores
            </Text>
            <div className="flex justify-between">
              <Text>Preço Base</Text>
              <Text>R$ {chamado.totalPrice.toFixed(2)}</Text>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Adicionais
            </Text>
            {/** nessa parte deve exibir os serviços adicionais */}
            {chamado.services.slice(1).map((service) => (
              <div key={service.id} className="flex justify-between">
                <Text>{service.nome}</Text>
                <Text>R$ {service.price.toFixed(2)}</Text>
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex justify-between">
            <Text variant="heading-md-bold">Total</Text>
            {/** aqui deve exibir o total do preço base + adicionais */}
            <Text variant="heading-md-bold">
              R$ {chamado.totalPrice.toFixed(2)}
            </Text>
          </div>
        </Card>
      </Container>
    </div>
  );
}
