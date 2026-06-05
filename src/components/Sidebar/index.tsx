import { Link } from "../Link"
import ClipboardList from "../../assets/icons/clipboard-list.svg?react"
import Plus from "../../assets/icons/plus.svg?react"
import Users from "../../assets/icons/users.svg?react"
import BriefCase from "../../assets/icons/briefcase-business.svg?react"
import Wrench from "../../assets/icons/wrench.svg?react"

interface SidebarProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
}

export function Sidebar({ role = "CLIENTE" }: SidebarProps) {
    return (
        <aside className="w-64 bg-gray-100 flex flex-col justify-between m-[-2rem] rounded-tl-3xl">
            {/* Logo no topo */}
            <div className="justify-center items-center">

                <nav className="w-60 h-160 border border-t-gray-300 border-b-gray-300 mx-4 py-5 flex flex-col gap-3 flex-1 mt-8">
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
