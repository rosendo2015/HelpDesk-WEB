import { Text } from "../../components/Text";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ButtonIcon } from "../../components/ButtonIcon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";
import { InputSelect } from "../../components/InputSelect";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function ChamadoDetailsTecnico() {
  const [services, setServices] = useState<
    { id: string; name: string; price: number }[]
  >([]);

  const { id } = useParams();
  const { getChamadoById, fetchChamados } = useChamados();

  const chamado = getChamadoById(id!);

  const [selectedServiceId, setSelectedServiceId] = useState<{
    id: string;
    nome: string;
    valor: number;
  } | null>(null);
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
  const [isAddingService, setIsAddingService] = useState(false);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await api.get("/services");
        setServices(response.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }

    fetchServices();
  }, []);

  if (!chamado) {
    return <Text>Cramado não encontrado</Text>;
  }

  const precoBase = chamado?.services[0]?.price ?? 0;

  const totalAdicionais = chamado?.services
    .slice(1)
    .reduce((total, service) => total + service.price, 0);

  async function handleUpdateStatus(status: "EM_ATENDIMENTO" | "ENCERRADO") {
    try {
      await api.patch(`/chamados/${chamado?.id}/status`, {
        status,
      });

      await fetchChamados();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  async function handleAddService() {
    if (!selectedServiceId) {
      return;
    }

    try {
      setIsAddingService(true);

      // IDs dos serviços que o chamado já possui
      const servicesAtuais = chamado?.services.map((service) => service.id);

      // Evita adicionar o mesmo serviço duas vezes
      if (servicesAtuais?.includes(selectedServiceId.id)) {
        alert("Esse serviço já foi adicionado ao chamado.");
        return;
      }

      // Mantém os serviços existentes e adiciona o novo
      const servicesAtualizados = [...servicesAtuais, selectedServiceId.id];

      await api.patch(`/chamados/${chamado?.id}`, {
        services: servicesAtualizados,
      });

      // Atualiza os chamados no contexto
      await fetchChamados();

      // Limpa seleção
      setSelectedServiceId(null);

      // Fecha modal
      setServiceDialogOpen(false);
    } catch (error) {
      console.error("Erro ao adicionar serviço:", error);
      alert("Não foi possível adicionar o serviço.");
    } finally {
      setIsAddingService(false);
    }
  }

  async function handleRemoveService(serviceId: string) {
    try {
      await api.delete(`/chamados/${chamado?.id}/services/${serviceId}`);

      await fetchChamados();

      alert("Serviço excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao remover serviço:", error);

      alert("Não foi possível excluir o serviço.");
    }
  }

  return (
    <div className="md:max-w-210 mt-14 mx-auto">
      <header className="flex flex-col md:items-end justify-between max-w-199 mb-6 md:flex-row">
        <div>
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
        <div className="w-full md:max-w-80 flex gap-2 mt-2">
          <Button
            variant="secondary"
            size="md"
            icon={CheckIcon}
            className="w-full md:w-max"
          >
            Encerrar
          </Button>

          {chamado.status === "ABERTO" && (
            <Button
              variant="primary"
              size="md"
              icon={ClockIcon}
              onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
              className="w-full"
            >
              Iniciar atendimento
            </Button>
          )}

          {chamado.status === "EM_ATENDIMENTO" && (
            <Button
              variant="primary"
              size="md"
              icon={CheckIcon}
              onClick={() => handleUpdateStatus("ENCERRADO")}
              className="w-full"
            >
              Encerrar
            </Button>
          )}
        </div>
      </header>
      <Container className="w-full flex flex-wrap flex-col gap-6 md:flex-row md:max-w-210">
        <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full">
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
          <div>
            <Text>Cliente</Text>
            <div className="flex items-center gap-2 mt-2">
              <Avatar name={chamado.cliente.name} />
              <Text>{chamado.cliente.name}</Text>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:max-w-74 h-fit flex flex-col gap-6 max-w-[full]">
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
              <Text>R$ {precoBase.toFixed(2)}</Text>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Text variant="text-sm-bold" className="text-gray-400 mb-2">
              Adicionais
            </Text>

            {chamado.services.slice(1).map((service) => (
              <div key={service.id} className="flex justify-between gap-4">
                <Text className="truncate w-[150px]">{service.nome}</Text>

                <Text>R$ {service.price.toFixed(2)}</Text>
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex justify-between">
            <Text variant="heading-md-bold">Total</Text>
            {/** aqui deve exibir o total do preço base + adicionais */}
            <Text variant="heading-md-bold">
              R$ {(precoBase + totalAdicionais).toFixed(2)}
            </Text>
          </div>
        </Card>
        <Card className="flex flex-col gap-5 p-8 md:max-w-120 w-full md:min-w-120">
          <header className="flex justify-between">
            <Text variant="heading-md-bold" className="text-gray-300">
              Serviços adicionais
            </Text>
            <Dialog
              open={serviceDialogOpen}
              onOpenChange={(open) => {
                setServiceDialogOpen(open);

                if (!open) {
                  setSelectedServiceId(null);
                }
              }}
            >
              <DialogTrigger asChild>
                <ButtonIcon size="lg" icon={PlusIcon} />
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <Text>Serviços adicionais</Text>
                </DialogHeader>

                <Divider className="my-4" />

                <div className="flex items-center gap-2 mb-5">
                  <InputSelect
                    label="Serviços cadastrados"
                    placeholder="Selecione um serviço"
                    value={selectedServiceId ?? undefined}
                    onChange={(option) => setSelectedServiceId(option)}
                  />
                </div>

                <Divider className="my-4" />

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="secondary" size="lg">
                      Cancelar
                    </Button>
                  </DialogClose>

                  <Button
                    type="button"
                    size="lg"
                    onClick={handleAddService}
                    disabled={!selectedServiceId || isAddingService}
                  >
                    {isAddingService ? "Salvando..." : "Salvar"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </header>
          <table className="w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {chamado.services.slice(1).map((service) => (
                <tr key={service.id}>
                  <td className="py-1">
                    <Text variant="heading-md-bold">{service.nome}</Text>
                  </td>

                  <td className="py-1">R$ {service.price.toFixed(2)}</td>

                  <td className="w-10 py-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveService(service.id)}
                      className="p-2 flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-sm cursor-pointer"
                    >
                      <Icon
                        svg={TrachIcon}
                        className="w-6 h-6 fill-feedback-danger"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Container>
    </div>
  );
}
