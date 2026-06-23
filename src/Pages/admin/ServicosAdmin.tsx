import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import BanIcon from "../../assets/icons/ban.svg?react"

import { Tags } from "../../components/Tags";

export function ServicosAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Serviços
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Tiítulo</th>
                            <th className="px-3 py-2 sm:px-4 hidden md:table-cell text-left">Valor</th>
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
                                    <Tags variant="success">Ativo</Tags>
                                </div>
                            </td>
                            <td className="px-3 py-2 sm:px-4 text-left">
                                <div className="flex items-center justify-end">
                                    <Link to={``} variant="secondary" size="md">
                                        <Icon svg={BanIcon} />
                                        <Text variant="text-sm-bold">Desativar</Text>
                                    </Link>
                                    <Link to={``} variant="subtitle">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-500" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

