import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  //DialogClose,
} from "../Dialog";
import { InputText } from "../InputText";
import { Button } from "../Button";
import { Text } from "../Text";
import Divider from "../Divider";
import { api } from "../../services/api";
import axios from "axios";

export function UpdatePasswordDialog({ userId }: { userId: string }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await api.patch(`/users/${userId}/password`, {
        oldPassword,
        newPassword,
      });
      setOldPassword("");
      setNewPassword("");
      setOldPasswordError("");
      setNewPasswordError("");
      alert("Senha atualizada com sucesso!");
      setOpen(false);
    } catch (err) {
      console.error("Erro ao atualizar senha:", err);

      // Limpa erros anteriores
      setOldPasswordError("");
      setNewPasswordError("");

      if (axios.isAxiosError(err)) {
        const data = err.response?.data;

        // Erros de validação do Zod
        if (data?.issues && Array.isArray(data.issues)) {
          data.issues.forEach((issue: { path: string; message: string }) => {
            if (issue.path === "oldPassword") {
              setOldPasswordError(issue.message);
            }

            if (issue.path === "newPassword") {
              setNewPasswordError(issue.message);
            }
          });

          return;
        }

        // Erros do AppError
        if (data?.message) {
          if (data.message === "Senha atual incorreta.") {
            setOldPasswordError(data.message);
          } else {
            setNewPasswordError(data.message);
          }

          return;
        }

        setNewPasswordError("Não foi possível atualizar a senha.");
      } else {
        setNewPasswordError("Ocorreu um erro ao atualizar a senha.");
      }
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (value) {
          setOldPasswordError("");
          setNewPasswordError("");
        }
      }}
    >
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
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-2">
          <InputText
            type="password"
            label="Senha atual"
            placeholder="Digite sua senha atual"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
              setOldPasswordError("");
            }}
            error={!!oldPasswordError}
            helperText={oldPasswordError ? oldPasswordError : "."}
          />
          <InputText
            type="password"
            label="Nova senha"
            placeholder="Digite sua nova senha"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setNewPasswordError("");
            }}
            error={!!newPasswordError}
            helperText={
              newPasswordError ? newPasswordError : "mínimo 6 dígitos"
            }
          />

          <Divider className="my-4 mt-10 mb-10" />

          <DialogFooter>
            <Button type="submit" size="lg" className="">
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
