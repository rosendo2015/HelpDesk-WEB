import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";

import { getStatusConfig } from "../../utils/statusConfig";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Card } from "../Card";
import Divider from "../Divider";
import { Tags } from "../Tags";
import { Text } from "../Text";
import { NavLink } from "../NavLink";

import { useState } from "react";
import { api } from "../../services/api";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import type { Chamado, Status } from "../../contexts/Chamado/model/Chamado";

interface ChamadoCardProps {
  chamado: Chamado;
}

type Status = "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";

export function ChamadoCard({ chamado }: ChamadoCardProps) {
  const { updateChamado } = useChamados();
  const [loading, setLoading] = useState(false);

  async function handleUpdateStatus(novoStatus: Status) {
    try {
      setLoading(true);

      await api.patch(`/chamados/${chamado.id}`, {
        status: novoStatus,
      });

      // Recarrega os chamados para que o card
      // mude de seção conforme o novo status
      window.location.reload();
    } catch (error) {
      console.error("Erro ao atualizar status do chamado:", error);
      alert("Não foi possível atualizar o status do chamado.");
    } finally {
      setLoading(false);
    }
  }

  async function handleStatusChange(status: Status) {
    try {
      await updateChamado(chamado.id, { status });
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  }

  function renderStatusButton() {
    if (chamado.status === "ABERTO") {
      return (
        <Button
          variant="primary"
          size="sm"
          type="button"
          disabled={loading}
          onClick={() => handleUpdateStatus("EM_ATENDIMENTO")}
        >
          {loading ? "..." : "Iniciar"}
        </Button>
      );
    }

    if (chamado.status === "EM_ATENDIMENTO") {
      return (
        <Button
          variant="primary"
          size="sm"
          type="button"
          icon={CheckIcon}
          disabled={loading}
          onClick={() => handleUpdateStatus("ENCERRADO")}
        >
          {loading ? "..." : "Encerrar"}
        </Button>
      );
    }

    return null;
  }

  return (
    <Card className="h-fit p-5">
      <div className="w-full md:max-w-86.5 flex flex-col items-center ">
        <header className="w-86.5 flex justify-between mb-1"></header>
        <header className="w-86.5 flex justify-between mb-1">
          <Text>{chamado.id}</Text>

          <div className="flex items-center gap-2">
            <NavLink
              variant="subtitle"
              to={`/tecnico/chamado-details/${chamado.id}`}
              icon={PenLineIcon}
            />

            {chamado.status === "ABERTO" && (
              <Button
                variant="primary"
                size="sm"
                icon={ClockIcon}
                onClick={() => handleStatusChange("EM_ATENDIMENTO")}
              >
                Iniciar
              </Button>
            )}

            {chamado.status === "EM_ATENDIMENTO" && (
              <Button
                variant="primary"
                size="sm"
                icon={CheckIcon}
                onClick={() => handleStatusChange("ENCERRADO")}
              >
                Encerrar
              </Button>
            )}
          </div>
        </header>

        <div className="flex flex-col">
          <Text as="h3" variant="heading-md-bold">
            {chamado.title}
          </Text>
          <Text as="h3">{chamado.description ?? "-"}</Text>
          <div className="w-86.5 flex justify-between mt-4">
            <Text>{chamado.createdAt}</Text>
            <Text>R$ {chamado.totalPrice}</Text>
          </div>
          <Divider className="mt-4 mb-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar name={chamado.cliente!.name} />
              <Text>{chamado.cliente.name}</Text>
            </div>
            <Tags
              variant={getStatusConfig(chamado.status).variant}
              svg={getStatusConfig(chamado.status).icon}
              className="w-max px-2 py-1 flex items-center gap-1"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
