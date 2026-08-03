import { useEffect, useState } from "react";
import { Text } from "../../components/Text";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import { api } from "../../services/api";
import { getStatusConfig } from "../../utils/statusConfig";

interface Servico {
  id: string;
  nome: string;
  price: number;
}

interface ChamadoFormatado {
  id: string;
  title: string;
  cliente: { id: string; name: string };
  tecnico: { id: string; name: string };
  status: "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";
  totalPrice: number;
  updatedAt: string;
  createdAt?: string;
  services: Servico[];
}

export function ChamadosAdmin() {
  const [chamados, setChamados] = useState<ChamadoFormatado[]>([]);

  useEffect(() => {
    api
      .get(`/chamados`)
      .then((res) => {
        setChamados(res.data);
      })
      .catch((err) => console.error("Erro ao buscar chamados:", err));
  }, []);
  return (
    <div className="p-4 sm:p-6">
      <header className="mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Chamados
        </Text>
      </header>

      <div className="border border-gray-500 rounded-lg">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr>
              <th className=" py-2 px-4 text-left">
                <div className="max-w-[80px] truncate lg:max-w-[112px]">
                  <Text variant="heading-md-bold" className="">
                    Atualizado em
                  </Text>
                </div>
              </th>

              <th className="px-3 py-2 text-left hidden lg:table-cell">Id</th>

              <th className="px-3 py-2 text-left">
                <Text variant="heading-md-bold" className="">
                  Título e Serviço
                </Text>
              </th>

              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Valor total
              </th>
              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Cliente
              </th>
              <th className="px-3 py-2 text-left hidden lg:table-cell">
                Técnico
              </th>
              <th className="max-w-[64px] px-3 py-2 text-left lg:max-w-[152px]">
                Status
              </th>
              <th className="max-w-[52px] px-3 py-2 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id} className="border-t border-gray-500">
                <td className="px-3 py-2">
                  <Text variant="text-xs-regular" className="">
                    {new Date(chamado.updatedAt).toLocaleString()}
                  </Text>
                </td>

                <td className="max-w-[64px] px-3 py-2 hidden truncate lg:table-cell ">
                  <Text variant="text-sm-bold" className="">
                    {chamado.id}
                  </Text>
                </td>

                <td className="max-w-[146px] px-3 py-2 truncate lg:max-w-[266px]">
                  <Text
                    as="h3"
                    variant="text-sm-bold"
                    className="max-w-[122px] truncate lg:max-w-[242px]"
                  >
                    {chamado.title}
                  </Text>
                  {chamado.services?.map((item) => (
                    <Text
                      as="p"
                      key={item.id}
                      variant="text-sm-regular"
                      className="max-w-[122px] truncate lg:max-w-[242px]"
                    >
                      {item.nome}
                    </Text>
                  ))}
                </td>

                <td className="px-3 py-2 hidden lg:table-cell">
                  <Text variant="text-sm-bold">
                    {chamado.totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Text>
                </td>

                <td className="px-3 py-2 hidden md:hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={chamado.cliente.name} size="xs" />
                    <Text variant="text-sm-bold">{chamado.cliente.name}</Text>
                  </div>
                </td>

                <td className="px-3 py-2 hidden md:hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={chamado.tecnico.name} size="xs" />
                    <Text variant="text-sm-bold">{chamado.tecnico.name}</Text>
                  </div>
                </td>

                <td className="flex max-w-[64px] px-3 py-2 lg:max-w-[152px] md:max-w-[152px]">
                  <Tags
                    variant={getStatusConfig(chamado.status).variant}
                    svg={getStatusConfig(chamado.status).icon}
                    className="max-w-[28px] lg:max-w-[152px] md:max-w-[152px] "
                  >
                    {getStatusConfig(chamado.status).label}
                  </Tags>
                </td>

                <td className="max-w-[52px] px-3 py-2">
                  <div className="flex items-center justify-end">
                    <ActionLink
                      to={`admin/editarChamados/${chamado.id}`}
                      variant="subtitle"
                      size="md"
                    >
                      <Icon
                        svg={PenLineIcon}
                        className="w-4 h-4 fill-gray-100"
                      />
                    </ActionLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
