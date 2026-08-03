import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useCahmados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Button } from "../../components/Button";

export function EditarChamadoAdmin() {
  const { id } = useParams();
  const { getChamadoById, updateChamado } = useChamados();

  const chamado = getChamadoById(id!);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  function handleUpdateStatus(newStatus: "EM_ATENDIMENTO" | "ENCERRADO") {
    updateChamado(chamado.id, { status: newStatus });
  }

  return (
    <div className="mx-auto md:w-full max-w-[800px]">
      <header className="px-3 mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:w-full md:max-w-[800px] ">
        <div className="flex flex-col items-start">
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
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            icon={ClockIcon}
            size="sm"
            className="py-5 w-full"
            onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
          >
            Em_atendimento
          </Button>
          <Button
            variant="secondary"
            icon={CheckIcon}
            size="sm"
            className="py-5 w-full"
            onClick={() => handleUpdateStatus("ENCERRADO")}
          >
            Encerrado
          </Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col gap-4 p-6 w-full md:max-w-[480px]">
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
            <div className="flex flex-col gap-2">
              <Text variant="text-sm-bold" className="text-gray-400">
                Cliente
              </Text>
              <div className="flex items-center gap-2">
                <Avatar name={String(chamado.cliente.name ?? "")} size="xs" />
                <Text>{chamado.cliente.name}</Text>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col p-6 w-[269px] h-fit">
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
                  <Text>R$ {service.valor.toFixed(2)}</Text>
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
        </form>
      </Container>
    </div>
  );
}
