import type { ReactNode } from "react"
import { appLayoutVariants } from "./layoutVariants"
import { Logo } from "../components/Logo"
import { Sidebar } from "../components/Sidebar"
import { Avatar } from "../components/Avatar"

interface AppLayoutProps {
    role?: "ADMIN" | "TECNICO" | "CLIENTE"
    children: ReactNode
}

export function AppLayout({ role = "CLIENTE", children }: AppLayoutProps) {
    return (
        <div className={appLayoutVariants({ role })}>
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 flex flex-col justify-between p-6">
                {/* Logo no topo */}
                <div className="mb-8">
                    <Logo color="white" size="lg" orientation="horizontal" role={role} />
                </div>
                <Sidebar role={role} />
                {/* Rodapé opcional */}
                <footer className="flex items-center gap-4 text-gray-400 mt-auto">
                    <Avatar name="Usuario Cliente" size="sm" />
                    <div>
                        <p>Usuário {role}</p>
                        <p>user.{role.toLowerCase()}@test.com</p>
                    </div>
                </footer>
            </aside>

            <main className="mt-3 border bg-gray-600 flex-1 p-8 text-gray-100 rounded-tl-3xl">

                {children}

            </main>
        </div>
    )
}
