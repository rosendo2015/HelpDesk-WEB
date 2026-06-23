import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react"
import TrachIcon from "../../assets/icons/trash.svg?react";

export function ClientesAdmin() {
    return (
        <div className="p-4 sm:p-6">
            <header className="mb-4">
                <Text variant="text-lg-bold" className="text-blue-dark">
                    Clientes
                </Text>
            </header>
            <div className="border border-gray-500 rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className=" text-gray-400 ">
                        <tr className="border-t border-gray-500">
                            <th className="px-3 py-2 md:max-w-20 md:truncate sm:px-4 text-left">Nome</th>
                            <th className="px-3 py-2 sm:px-4 md:truncate md:w-30 hidden md:table-cell text-left">Email</th>
                            <th className="px-3 py-2 sm:px-4  hidden md:table-cell text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-gray-500">
                            <td className="px-3 py-2 text-left">
                                <div className="flex items-center gap-3">
                                    <Avatar name="Jão Silva" />
                                    <Text variant="text-sm-bold">João Silva</Text>
                                </div>
                            </td>
                            <td className="px-3 py-2 text-left">
                                <Text>joao.silva@teste.com</Text>
                            </td>

                            <td className="px-3 py-2 sm:px-4">
                                <div className="flex items-center justify-end gap-3 text-right">
                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={TrachIcon} className="w-4 h-4 fill-red-500" />
                                    </Link>

                                    <Link to={``} variant="subtitle" size="md">
                                        <Icon svg={PenLineIcon} className="w-4 h-4 fill-gray-100" />
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

