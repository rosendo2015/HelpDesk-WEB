import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import { Avatar } from "../../components/Avatar";

import PlusIcon from "../../assets/icons/plus.svg?react";
import { HoarariosList } from "../../components/HorariosList";

export function TecnicosAdmin() {
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
            className=" md:block hidden justify-center hover:bg-gray-200"
            icon={PlusIcon}
          >
            Novo
          </ActionLink>
        </div>
      </header>
      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className=" text-gray-400 ">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left truncate w-[170px] md:w-[350px]">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left md:w-[255px]">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-[120px] md:w-[328px]">
                Disponibilidade
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left w-[52px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-500">
              <td className="px-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <Avatar name="Jão Silva" />
                  <Text variant="text-sm-bold" className="truncate max-w-37.5">
                    João Silva
                  </Text>
                </div>
              </td>
              <td className="px-3 py-2 text-left hidden md:table-cell truncate max-w-30">
                <Text>joao.silva@teste.com</Text>
              </td>
              <td className="px-3 py-2 text-left">
                <HoarariosList
                  horarios={[
                    "08:00",
                    "09:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "15:00",
                    "16:00",
                    "17:00",
                    "18:00",
                    "19:00",
                  ]}
                />
              </td>
              <td className="px-3 py-2 sm:px-4 text-left">
                <div className="flex items-center justify-end">
                  <ActionLink
                    to={`/admin/editarTecnico`}
                    variant="subtitle"
                    size="md"
                  >
                    <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                  </ActionLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
