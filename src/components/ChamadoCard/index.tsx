import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import CheckIcon from "../../assets/icons/circle-check-big.svg?react";
import { getStatusConfig } from "../../utils/statusConfig";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Card } from "../Card";
import Divider from "../Divider";
import { Tags } from "../Tags";
import { Text } from "../Text";
import { NavLink } from "../NavLink";
import type { Chamado } from "../../contexts/Chamado/model/Chamado";

interface ChamadoCardProps {
  chamado: Chamado;
}

export function ChamadoCard({ chamado }: ChamadoCardProps) {
  return (
    <Card className="h-fit p-5">
      <div className="w-full md:max-w-86.5 flex flex-col items-center ">
        <header className="w-86.5 flex justify-between mb-1">
          <Text variant="heading-md-normal" className="w-37.5 truncate">
            {chamado.id}
          </Text>
          <div className="flex gap-2">
            <NavLink
              variant="subtitle"
              to={`/tecnico/chamado-details/${chamado.id}`}
              icon={PenLineIcon}
            />

            <Button variant="primary" size="sm" icon={CheckIcon}>
              Encerrar
            </Button>
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
