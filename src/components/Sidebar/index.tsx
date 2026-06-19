import { Link } from "../Link"
import ClipboardList from "../../assets/icons/clipboard-list.svg?react"
import Plus from "../../assets/icons/plus.svg?react"
import Users from "../../assets/icons/users.svg?react"
import BriefCase from "../../assets/icons/briefcase-business.svg?react"
import Wrench from "../../assets/icons/wrench.svg?react"

interface SidebarProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    isOpen?: boolean
    onClose?: () => void
}

export function Sidebar({ role = "CLIENTE", onClose }: SidebarProps) {
    return (



        <aside className="h-full ">
            {/* Logo no topo */}
            <div className="flex items-center justify-center ">

                <nav className="w-full flex flex-col gap-4">
                    {role === "ADMIN" && (
                        <>
                            <Link
                                to="/admin/chamados"
                                icon={ClipboardList}
                                variant="tertiary"
                                size="lg" className="bg-blue-dark"
                                onClick={onClose}>Chamados
                            </Link>
                            <Link
                                to="/tecnicos"
                                icon={Users}
                                variant="secondary"
                                size="lg" className="bg-blue-dark" onClick={onClose}>Técnicos</Link>
                            <Link
                                to="/clientes"
                                icon={BriefCase}
                                variant="secondary"
                                size="lg"
                                className="bg-blue-dark"
                                onClick={onClose}>
                                Clientes
                            </Link>
                            <Link
                                to="/servicos"
                                icon={Wrench}
                                variant="secondary"
                                size="lg"
                                className="bg-blue-dark"
                                onClick={onClose}>
                                Serviços
                            </Link>
                        </>
                    )}

                    {role === "TECNICO" && (
                        <>
                            <Link
                                to="/tecnico/meus-chamados"
                                icon={ClipboardList}
                                variant="tertiary"
                                size="lg"
                                className="bg-blue-dark"
                                onClick={onClose}>
                                Meus chamados
                            </Link>

                        </>
                    )}

                    {role === "CLIENTE" && (
                        <>
                            <Link
                                to="/cliente/chamados-cliente"
                                icon={ClipboardList} variant="tertiary"
                                size="lg"
                                className="bg-blue-dark"
                                onClick={onClose}>
                                Meus chamados
                            </Link>
                            <Link
                                to="/cliente/criar-chamado"
                                icon={Plus}
                                variant="secondary"
                                size="lg"
                                onClick={onClose}>
                                Criar chamado
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </aside>

    )
}
