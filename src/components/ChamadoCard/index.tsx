import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import ClockIcon from "../../assets/icons/clock-2.svg?react";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import type { Chamado, Status } from "../../contexts/Chamado/model/Chamado";
import { getStatusConfig } from "../../utils/statusConfig";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Card } from "../Card";
import Divider from "../Divider";
import { NavLink } from "../NavLink";
import { Tags } from "../Tags";
import { Text } from "../Text";

interface ChamadoCardProps {
  chamado: Chamado;
}

export function ChamadoCard({ chamado }: ChamadoCardProps) {
  const { updateChamado } = useChamados();

  async function handleStatusChange(status: Status) {
    try {
      await updateChamado(chamado.id, { status });
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
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
