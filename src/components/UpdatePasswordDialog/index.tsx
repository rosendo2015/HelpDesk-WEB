import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "../Dialog";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { Text } from "../Text";
import Divider from "../Divider";
import { api } from "../../services/api";

export function UpdatePasswordDialog({ userId }: { userId: string }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.patch(`/users/${userId}/password`, {
        oldPassword,
        newPassword,
      });
      setOldPassword("");
      setNewPassword("");
      alert("Senha atualizada com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar senha:", err);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="mb-6">
          Alterar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Text>Alterar senha</Text>
        </DialogHeader>
        <Divider className="my-4 mb-10 mt-10" />
        <form onSubmit={handlePasswordSubmit}>
          <InputText
            type="password"
            label="Senha atual"
            placeholder="Digite sua senha atual"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="mb-10"
          />
          <InputText
            type="password"
            label="Nova senha"
            placeholder="Digite sua nova senha"
            helperText="mínimo 6 dígitos"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <Divider className="my-4 mt-10 mb-10" />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" size="lg" className="">
                Salvar
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
