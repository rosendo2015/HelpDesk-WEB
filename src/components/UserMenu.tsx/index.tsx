import { useState, type ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Button } from "../Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../Dialog";
import Divider from "../Divider";
import { Icon } from "../Icon";
import { InputFile } from "../InputFile";
import { InputText } from "../InputText";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { TagTime } from "../TagTime";
import { Text } from "../Text";
import { UpdatePasswordDialog } from "../UpdatePasswordDialog";
import UserIcon from "../../assets/icons/users.svg?react";
import LogoutIcon from "../../assets/icons/log-out.svg?react";

interface UserMenuProps {
  children: ReactNode;
}

export function UserMenu({ children }: UserMenuProps) {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");

  const [profileOpen, setProfileOpen] = useState(false);

  function handleProfileOpen(open: boolean) {
    setProfileOpen(open);

    if (open) {
      setName(user?.name ?? "");
      setEmail(user?.email ?? "");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("=== SALVAR PERFIL ===");
    console.log("Usuário:", user);
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("ID:", user?.id);

    try {
      const response = await api.patch(`/users/${user?.id}`, {
        name,
        email,
      });

      console.log("Resposta da API:", response.data);

      // Atualiza contexto com dados novos
      updateUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (err) {
      console.error("Erro ao atualizar perfil:", err);
    }
  }

  function handleLogout() {
    // Remove todas as informações salvas no localStorage
    localStorage.removeItem("@helpdesk:token"); // se você usa token JWT
    localStorage.removeItem("@helpdesk:user"); // se guarda dados do usuário
    localStorage.removeItem("permissions"); // se tiver permissões específicas
    // Redireciona para a página de login
    window.location.href = "/login";
  }

  async function handleDeleteAvatar() {
    try {
      const response = await api.delete("/user-avatar/avatar");

      updateUser(response.data);

      alert("Imagem removida com sucesso!");
    } catch (error) {
      console.error("Erro ao remover imagem:", error);
      alert("Erro ao remover imagem.");
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>
        <Text as="div" variant={"text-xxs-bold"} className="text-gray-400 pt-4">
          OPÇÕES
        </Text>
        <div className="flex flex-col gap-3 px-4 mt-4">
          <div className="flex items-center gap-3">
            <Dialog open={profileOpen} onOpenChange={handleProfileOpen}>
              <DialogTrigger asChild>
                <Button type="button" className="-ml-7.5 bg-transparent">
                  <Icon svg={UserIcon} className="fill-gray-500 mr-2" />
                  <Text className="text-gray-500">Perfil</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form id="profile-form" onSubmit={handleSubmit}>
                  <DialogHeader>
                    <Text>Perfil</Text>
                  </DialogHeader>
                  <Divider className="my-4" />
                  <div className="flex items-center gap-2 mb-5">
                    <InputFile
                      avatarUrl={user?.avatarUrl}
                      onChange={(data) => {
                        updateUser({
                          ...user!,
                          avatarUrl: data.avatarUrl,
                        });
                      }}
                      onDelete={handleDeleteAvatar}
                    />
                  </div>
                  <InputText
                    label="NOME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputText
                    label="E-MAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex py-1 items-end">
                    <InputText
                      readOnly
                      placeholder="******"
                      type="password"
                      label="SENHA"
                      value="123456"
                      helperText="Para atualizar a senha clique no botão Alterar"
                    />

                    <UpdatePasswordDialog userId={user!.id} />
                  </div>
                  <Divider className="my-4" />
                  {user?.role === "TECNICO" && (
                    <>
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
                    </>
                  )}
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" form="profile-form" size="lg">
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
            <Text className="text-feedback-danger">Sair</Text>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
