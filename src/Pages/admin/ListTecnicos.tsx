import { useEffect, useState } from "react";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { Skeleton } from "../../components/Skeleton";
import { HorariosList } from "../../components/HorariosList";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";

export function TecnicosAdmin() {
  const [tecnicos, setTecnicos] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTecnicos() {
      try {
        const token = localStorage.getItem("@helpdesk:token");
        const response = await api.get<Users[]>("/users/tecnicos", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Filtra apenas técnicos
        const tecnicosFiltrados = response.data.filter(
          (user) => user.role === "TECNICO",
        );
        setTecnicos(tecnicosFiltrados);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Erro ao buscar técnicos:", error.message);
        } else {
          console.error("Erro de conexão com o servidor:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTecnicos();
  }, []);

  return (
    <div className="mx-auto max-w-267.5 p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Técnicos
        </Text>
        <div>
          <ActionLink
            to="/admin/novoTecnico"
            variant="tertiary"
            size="md"
            icon={PlusIcon}
            className="md:hidden"
          />
          <ActionLink
            to="/admin/novoTecnico"
            variant="tertiary"
            size="md"
            className="md:block hidden justify-center hover:bg-gray-200"
            icon={PlusIcon}
          >
            Novo
          </ActionLink>
        </div>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-42.5 md:w-87.5">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left md:w-63.75">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-30 md:w-82">
                Disponibilidade
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left w-13"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2">
                      <Skeleton className="h-4 w-24" />
                    </td>
                  </tr>
                ))
              : tecnicos.map((tecnico) => (
                  <tr key={tecnico.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left">
                      <div className="flex items-center gap-3">
                        <Avatar name={tecnico.name} />
                        <Text
                          variant="text-sm-bold"
                          className="truncate max-w-37.5"
                        >
                          {tecnico.name}
                        </Text>
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell truncate max-w-30">
                      <Text>{tecnico.email}</Text>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <HorariosList
                        horarios={
                          tecnico.disponibilidades?.map((d) => d.horario) || []
                        }
                      />
                    </td>
                    <td className="px-3 py-2 text-left">
                      <div className="flex items-center justify-end">
                        <ActionLink
                          to={`/admin/editarTecnico/${tecnico.id}`}
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
