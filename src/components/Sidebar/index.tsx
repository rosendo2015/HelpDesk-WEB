import { NavLink } from "../NavLink"; // 🔹 usa o novo NavLink
import ClipboardList from "../../assets/icons/clipboard-list.svg?react";
import Plus from "../../assets/icons/plus.svg?react";
import Users from "../../assets/icons/users.svg?react";
import BriefCase from "../../assets/icons/briefcase-business.svg?react";
import Wrench from "../../assets/icons/wrench.svg?react";

interface SidebarProps {
  role?: "ADMIN" | "TECNICO" | "CLIENTE";
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ role = "CLIENTE", onClose }: SidebarProps) {
  return (
    <aside className="h-full">
      <div className="flex items-center justify-center">
        <nav className="w-full flex flex-col gap-4">
          {role === "ADMIN" && (
            <>
              <NavLink
                to="/admin/chamados"
                icon={ClipboardList}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Chamados
              </NavLink>
              <NavLink
                to="/admin/tecnicos"
                icon={Users}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Técnicos
              </NavLink>
              <NavLink
                to="/admin/clientes"
                icon={BriefCase}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Clientes
              </NavLink>
              <NavLink
                to="/admin/servicos"
                icon={Wrench}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Serviços
              </NavLink>
            </>
          )}

          {role === "TECNICO" && (
            <>
              <NavLink
                to="/tecnico/meus-chamados"
                icon={ClipboardList}
                variant="tertiary"
                size="lg"
                onClick={onClose}
              >
                Meus chamados
              </NavLink>
            </>
          )}

          {role === "CLIENTE" && (
            <>
              <NavLink
                to="/cliente/chamados-cliente"
                icon={ClipboardList}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Meus chamados
              </NavLink>
              <NavLink
                to="/cliente/novo-chamado"
                icon={Plus}
                variant="secondary"
                size="lg"
                onClick={onClose}
              >
                Criar chamado
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </aside>
  );
}
