import { useState, type ReactNode } from "react"

import { Logo } from "../components/Logo"
import { Sidebar } from "../components/Sidebar"
import { Avatar } from "../components/Avatar"
import { ButtonIcon } from "../components/ButtonIcon"

import MenuIcon from "../assets/icons/menu.svg?react"
import XIcon from "../assets/icons/x.svg?react"

interface AppLayoutProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    children: ReactNode
}

export function AppLayout({ role = "CLIENTE", children }: AppLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false) // ✅ aqui está o useState

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Header para mobile */}
            <header className="flex items-center justify-between bg-gray-100 p-4 lg:hidden">
                <div className="flex items-center gap-4">
                    <ButtonIcon
                        icon={MenuIcon}
                        variant="primary"
                        onClick={() => setIsSidebarOpen(true)}
                    />
                    <Logo color="white" size="md" orientation="horizontal" role={role} />
                </div>
                <Avatar name="Usuario Cliente" size="sm" />
            </header>

            {/* Sidebar mobile com animação */}
            <aside
                className={`fixed inset-0 z-50 bg-gray-100 flex flex-col justify-between p-6 lg:hidden transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="mb-8 border-b border-gray-300 pb-4 flex justify-between items-center">
                    <ButtonIcon
                        icon={XIcon}
                        variant="primary"
                        onClick={() => setIsSidebarOpen(false)} // ✅ fecha sidebar
                    />
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                    <Avatar name="Usuario Cliente" size="sm" />
                </div>
                <Sidebar role={role} onClose={() => setIsSidebarOpen(false)} />
            </aside>

            {/* Sidebar desktop */}
            <aside className="hidden lg:flex w-64 bg-gray-100 flex-col justify-between p-6">
                <div className="mb-8 border-b border-gray-300 pb-4">
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                </div>
                <Sidebar role={role} />
                <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5">
                    <Avatar name="Usuario Cliente" size="sm" />
                    <div>
                        <p>Usuário {role}</p>
                        <p>user.{role.toLowerCase()}@test.com</p>
                    </div>
                </footer>
            </aside>

            {/* Conteúdo principal */}
            <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
                {children}
            </main>
        </div>
    )
}
