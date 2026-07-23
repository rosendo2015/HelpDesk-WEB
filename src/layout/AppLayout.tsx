import { useState, type ReactNode } from "react";

import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Avatar } from "../components/Avatar";
import { ButtonIcon } from "../components/ButtonIcon";

import MenuIcon from "../assets/icons/menu.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { useAuth } from "../hooks/useAuth";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

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
          <Logo
            color="white"
            size="md"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
        </div>
        <Avatar name={user?.name ?? "Usuário"} size="sm" />
      </header>

      {/* Sidebar mobile com animação */}
      <aside
        className={`fixed inset-0 z-50 bg-gray-100 flex flex-col justify-between p-6 lg:hidden transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 border-b border-gray-300 pb-4 flex justify-between items-center">
          <ButtonIcon
            icon={XIcon}
            variant="primary"
            onClick={() => setIsSidebarOpen(false)}
          />
          <Logo
            color="white"
            size="lg"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
          <Avatar name={user?.name ?? "Usuário"} size="sm" />
        </div>
        <Sidebar
          role={user?.role ?? "CLIENTE"}
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>

      {/* Sidebar desktop */}
      <aside className="hidden lg:flex w-64 bg-gray-100 flex-col justify-between p-6">
        <div className="mb-8 border-b border-gray-300 pb-4">
          <Logo
            color="white"
            size="lg"
            orientation="horizontal"
            role={user?.role ?? "CLIENTE"}
          />
        </div>
        <Sidebar role={user?.role ?? "CLIENTE"} />
        <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5">
          <Avatar name={user?.name ?? "CLIENTE"} size="sm" />
          <div>
            <p className="truncate w-37.5">{user?.name}</p>
            <p className="truncate w-37.5">{user?.email}</p>
          </div>
        </footer>
      </aside>

      {/* Conteúdo principal */}
      <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
        {children}
      </main>
    </div>
  );
}
