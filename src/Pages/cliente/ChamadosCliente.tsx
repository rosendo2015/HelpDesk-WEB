import { clienteVariants } from "./clienteVariants";
import type { VariantProps } from "class-variance-authority";
import EyeIcon from "../../assets/icons/eye.svg?react";
import EditIcon from "../../assets/icons/pen-line.svg?react";
import { Tags } from "../../components/Tags";
import { Avatar } from "../../components/Avatar";
import { ActionLink } from "../../components/ActionLink";
import { Icon } from "../../components/Icon";

import { getStatusConfig } from "../../utils/statusConfig";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";

// Interface tipando os props
interface ClienteProps extends VariantProps<typeof clienteVariants> {
  role?: "CLIENTE" | "ADMIN" | "TECNICO";
}

export function ChamadosCliente({ role = "CLIENTE" }: ClienteProps) {
  const { chamados, loading } = useChamados();

  return (
    <>
      <h2 className="text-xl font-bold mb-2 text-blue-dark">
        {role === "CLIENTE" ? "Meus chamados" : "Chamados"}
      </h2>
      <div className="border border-gray-500 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="px-4 py-2">Atualizado em</th>
              <th className="px-4 py-2 hidden md:table-cell">Id</th>
              <th className="px-4 py-2">Titulo</th>
              <th className="px-4 py-2 hidden md:table-cell">Serviço</th>
              <th className="px-4 py-2 hidden md:table-cell">Valor total</th>
              <th className="px-4 py-2 hidden md:table-cell">Técnico</th>
              <th className="px-4 py-2" colSpan={2}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  Carregando...
                </td>
              </tr>
            ) : (
              chamados.map((chamado) => (
                <tr key={chamado.id} className="border-t border-gray-500">
                  <td className="px-4 py-2">
                    {new Date(chamado.updatedAt).toLocaleString("pt-BR")}
                  </td>

                  <td className="px-4 py-2 font-bold hidden md:table-cell max-w-20 truncate">
                    {chamado.id}
                  </td>

                  <td className="px-4 py-2 font-bold max-w-40 truncate">
                    {chamado.title}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell max-w-40 truncate">
                    {chamado.services.map((s) => s.nome).join(", ")}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell">
                    R$ {(chamado.totalPrice ?? 0.0).toFixed(2)}
                  </td>

                  <td className="px-4 py-2 hidden md:table-cell">
                    <div className="flex items-center">
                      <Avatar
                        size="xs"
                        name={chamado.tecnico?.name ?? "Sem técnico"}
                      />
                      <span className="ml-2">
                        {chamado.tecnico?.name ?? "Sem técnico"}
                      </span>
                    </div>
                  </td>

                  <td className="px-2 py-2">
                    <Tags
                      variant={getStatusConfig(chamado.status).variant}
                      svg={getStatusConfig(chamado.status).icon}
                      className="w-max px-2 py-1 flex items-center gap-1"
                    >
                      {getStatusConfig(chamado.status).label}
                    </Tags>
                  </td>

                  <td className="flex gap-2 px-2 py-2">
                    <ActionLink
                      to={`/cliente/detail-chamado/${chamado.id}`}
                      variant="subtitle"
                      size="md"
                    >
                      <Icon svg={EyeIcon} className="w-4 h-4 fill-gray-200" />
                    </ActionLink>

                    <ActionLink
                      to={`/cliente/editar-chamado/${chamado.id}`}
                      variant="tertiary"
                      size="md"
                    >
                      <Icon svg={EditIcon} className="w-4 h-4 fill-gray-600" />
                    </ActionLink>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
