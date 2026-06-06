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

export function Sidebar({ role = "CLIENTE" }: SidebarProps) {
    return (



        <aside className="h-full ">
            {/* Logo no topo */}
            <div className="flex items-center justify-center ">

                <nav className="w-full flex flex-col gap-4">
                    {role === "ADMIN" && (
                        <>
                            <Link to="/chamados" icon={ClipboardList} variant="tertiary" size="lg" className="bg-blue-dark" >Chamados</Link>
                            <Link to="/tecnicos" icon={Users} variant="tertiary" size="lg" className="bg-blue-dark" >Técnicos</Link>
                            <Link to="/clientes" icon={BriefCase} variant="tertiary" size="lg" className="bg-blue-dark" >Clientes</Link>
                            <Link to="/servicos" icon={Wrench} variant="tertiary" size="lg" className="bg-blue-dark" >Serviços</Link>
                        </>
                    )}

                    {role === "TECNICO" && (
                        <>
                            <Link to="/meus-chamados" icon={ClipboardList} variant="tertiary" size="lg" className="bg-blue-dark" >Meus chamados</Link>

                        </>
                    )}

                    {role === "CLIENTE" && (
                        <>
                            <Link to="/meus-chamados" icon={ClipboardList} variant="tertiary" size="lg" className="bg-blue-dark"  >Meus chamados</Link>
                            <Link to="/criar-chamado" icon={Plus} variant="tertiary" size="lg" className="bg-blue-dark" >Criar chamado</Link>
                        </>
                    )}
                </nav>
            </div>
        </aside>

    )
}
