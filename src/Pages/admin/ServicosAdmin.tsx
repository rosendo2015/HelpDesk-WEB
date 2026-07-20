import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import BanIcon from "../../assets/icons/ban.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";
import CircleCheckIcon from "../../assets/icons/circle-check.svg?react";

import { Tags } from "../../components/Tags";
import { Button } from "../../components/Button";

export function ServicosAdmin() {
  return (
    <div className="p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Serviços
        </Text>
        <Button icon={PlusIcon}>Novo</Button>
      </header>
      <div className="border border-gray-500 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className=" text-gray-400 ">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">
                Tiítulo
              </th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">
                Valor
              </th>
              <th className="px-3 py-2 sm:px-4 text-left">Status</th>
              <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-500">
              <td className="px-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <Text variant="text-sm-bold">Instação de Rede</Text>
                </div>
              </td>
              <td className="px-3 py-2 text-left">
                <Text variant="text-sm-regular">R$ 180,00</Text>
              </td>
              <td className="px-3 py-2 text-left">
                <div className=" flex gap-3">
                  <Tags variant="success" size="md-width-text">
                    Ativo
                  </Tags>
                </div>
              </td>
              <td className="px-3 py-2 sm:px-4 text-left">
                <div className="flex items-center justify-end gap-4">
                  <Tags variant="default" svg={BanIcon}>
                    Desativar
                  </Tags>

                  <ActionLink to={``} variant="subtitle">
                    <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                  </ActionLink>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-500">
              <td className="px-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <Text variant="text-sm-bold">Recuperação de dados</Text>
                </div>
              </td>
              <td className="px-3 py-2 text-left">
                <Text variant="text-sm-regular">R$ 200,00</Text>
              </td>
              <td className="px-3 py-2 text-left">
                <div className=" flex gap-3">
                  <Tags variant="danger" size="md-width-text">
                    Inativo
                  </Tags>
                </div>
              </td>
              <td className="px-3 py-2 sm:px-4 text-left">
                <div className="flex items-center justify-end gap-4">
                  <Tags variant="default" svg={CircleCheckIcon}>
                    Reativar
                  </Tags>

                  <ActionLink to={``} variant="subtitle">
                    <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                  </ActionLink>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-500">
              <td className="px-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <Text variant="text-sm-bold">Instação de Rede</Text>
                </div>
              </td>
              <td className="px-3 py-2 text-left">
                <Text variant="text-sm-regular">R$ 180,00</Text>
              </td>
              <td className="px-3 py-2 text-left">
                <div className=" flex gap-3">
                  <Tags variant="success" size="md-width-text">
                    Ativo
                  </Tags>
                </div>
              </td>
              <td className="px-3 py-2 sm:px-4 text-left">
                <div className="flex items-center justify-end gap-4">
                  <Tags variant="default" svg={BanIcon}>
                    Desativar
                  </Tags>

                  <ActionLink to={``} variant="subtitle">
                    <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
                  </ActionLink>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-500">
              <td className="px-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <Text variant="text-sm-bold">Instação de Rede</Text>
                </div>
              </td>
              <td className="px-3 py-2 text-left">
                <Text variant="text-sm-regular">R$ 180,00</Text>
              </td>
              <td className="px-3 py-2 text-left">
                <div className=" flex gap-3">
                  <Tags variant="success" size="md-width-text">
                    Ativo
                  </Tags>
                </div>
              </td>
              <td className="px-3 py-2 sm:px-4 text-left">
                <div className="flex items-center justify-end gap-4">
                  <Tags variant="default" svg={BanIcon}>
                    Desativar
                  </Tags>

                  <ActionLink to={``} variant="subtitle">
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
