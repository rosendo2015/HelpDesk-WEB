import { useState, type ReactNode } from "react";

import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Avatar } from "../components/Avatar";
import { ButtonIcon } from "../components/ButtonIcon";

import MenuIcon from "../assets/icons/menu.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import LogoutIcon from "../assets/icons/log-out.svg?react";
import UserIcon from "../assets/icons/circle-user.svg?react";
import UploadIcon from "../assets/icons/upload.svg?react";
import TrachIcon from "../assets/icons/trash.svg?react";

import { useAuth } from "../hooks/useAuth";
import { Popover, PopoverContent, PopoverTrigger } from "../components/Popover";
import { Text } from "../components/Text";

import { ActionLink } from "../components/ActionLink";
import { Icon } from "../components/Icon";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../components/Dialog";
import Divider from "../components/Divider";
import { Button } from "../components/Button";
import { InputText } from "../components/InputText";
import { TagTime } from "../components/TagTime";

interface AppLayoutProps {
  children: ReactNode;
}
function handleLogout() {
  // Remove todas as informações salvas no localStorage
  localStorage.removeItem("@helpdesk:token"); // se você usa token JWT
  localStorage.removeItem("@helpdesk:user"); // se guarda dados do usuário
  localStorage.removeItem("permissions"); // se tiver permissões específicas

  // ou, se quiser limpar tudo:
  // localStorage.clear();

  // Redireciona para a página de login
  window.location.href = "/login";
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
        <Popover>
          <PopoverTrigger>
            <footer className="border-t border-gray-300 flex items-center gap-4 text-gray-400 pt-5 cursor-pointer">
              <Avatar name={user?.name ?? "CLIENTE"} size="sm" />
              <div className="text-left">
                <p className="truncate w-37.5">{user?.name}</p>
                <p className="truncate w-37.5">{user?.email}</p>
              </div>
            </footer>
          </PopoverTrigger>
          <PopoverContent>
            <Text
              as="div"
              variant={"text-xxs-bold"}
              className="text-gray-400 pt-4"
            >
              OPÇÕES
            </Text>
            <div className="flex flex-col gap-3 px-4 mt-4">
              <div className="flex items-center gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="-ml-7.5 bg-transparent">
                      <Icon svg={UserIcon} className="fill-gray-500 mr-2" />
                      <Text className="text-gray-500">Perfil</Text>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <Text>Perfil</Text>
                    </DialogHeader>
                    <Divider className="my-4" />
                    <form>
                      <div className="flex items-center gap-2 mb-5">
                        <img
                          src="/a911cc6a6aee5d15662b-photo-francisco.jpg"
                          alt="user"
                          className="w-12 h-12 rounded-full"
                        />
                        <Button icon={UploadIcon} variant="secondary" size="sm">
                          {" "}
                          Nova imagem
                        </Button>
                        <ActionLink to={`#`} variant="subtitle" size="md">
                          <Icon
                            size="sm"
                            svg={TrachIcon}
                            className="w-4 h-4  fill-feedback-danger"
                          />
                        </ActionLink>
                      </div>
                      <InputText label="NOME" />
                      <InputText label="E-MAIL" />
                      <div className="flex items-end border-b border-gray-400">
                        <InputText type="password" label="SENHA" />
                        <Button variant="secondary" className="mb-2">
                          Alterar
                        </Button>
                      </div>
                      <Divider className="my-4" />
                      <div className="flex flex-col mb-4">
                        <Text variant="text-sm-bold">Disponibilidade</Text>
                        <Text variant="text-xs-regular">
                          Horários de atendimento definidos pelo admin.
                        </Text>
                      </div>
                      <div className="flex gap-2">
                        <TagTime>09:00</TagTime>
                        <TagTime>10:00</TagTime>
                        <TagTime>12:00</TagTime>
                        <TagTime>13:00</TagTime>
                        <TagTime>15:00</TagTime>
                        <TagTime>16:00</TagTime>
                      </div>
                      <Divider className="my-4" />
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="submit" size={"lg"}>
                            Salvar
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Button
                className="-ml-25 bg-transparent hover:bg-transparent mb-2"
                onClick={handleLogout}
              >
                <Icon svg={LogoutIcon} className="fill-feedback-danger mr-2" />
                <Text className="text-feedback-danger">Perfil</Text>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </aside>

      {/* Conteúdo principal */}
      <main className="px-6 py-7 w-full bg-gray-600 p-4 h-screen rounded-tl-4xl rounded-tr-4xl lg:mt-3 lg:rounded-tl-4xl lg:rounded-tr-none lg:p-8 lg:h-auto">
        {children}
      </main>
    </div>
  );
}
