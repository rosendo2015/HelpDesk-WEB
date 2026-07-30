import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { Users } from "../../contexts/User/model/users";
import z, { ZodError } from "zod";

import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import { Skeleton } from "../../components/Skeleton";
import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { InputText } from "../../components/InputText";
import Divider from "../../components/Divider";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";

import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";

const clienteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email("E-Mail inválido"),
});

export function ClientesAdmin() {
  const [clientes, setClientes] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await api.get<Users[]>("/users");
        const clientesFiltrados = response.data.filter(
          (user) => user.role === "CLIENTE",
        );
        setClientes(clientesFiltrados);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchClientes();
  }, []);

  async function handleUpdateCliente(id: string, dados: Partial<Users>) {
    try {
      const parsed = clienteSchema.parse(dados);
      const response = await api.patch(`/users/${id}`, parsed, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setClientes((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...response.data } : c)),
      );
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors = error.issues.reduce(
          (acc, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao atualizar cliente", error);
      }
    }
  }

  async function handleDeleteCliente(id: string) {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  }

  return (
    <div className="mx-auto max-w-267.5 p-4 sm:p-6">
      <header className="flex items-center justify-between mb-4">
        <Text as="h1" variant="text-lg-bold" className="text-blue-dark">
          Clientes
        </Text>
      </header>

      <div className="border border-gray-500 rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="text-gray-400">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-33.5 md:w-145.5">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 w-24 md:w-100 text-left">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4 text-left w-22"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2 w-33.5 md:w-145.5">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell w-24 md:w-100">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2 w-22">
                      <div className="flex justify-end gap-3">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </td>
                  </tr>
                ))
              : clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left w-33.5 md:w-145.5 truncate">
                      <div className="flex items-center gap-3">
                        <Avatar name={cliente.name} className="md:w-11.25" />
                        <Text
                          variant="text-sm-bold"
                          className="w-17.5 md:w-full truncate"
                        >
                          {cliente.name}
                        </Text>
                      </div>
                    </td>
                    <td className="w-24 md:w-100 px-3 py-2 text-left md:table-cell truncate max-w-30">
                      <Text className="w-24 md:w-100 truncate">
                        {cliente.email}
                      </Text>
                    </td>
                    <td className="px-3 py-2 sm:px-4 w-22">
                      <div className="flex items-center justify-end gap-3 text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <ActionLink to="#" variant="subtitle" size="md">
                              <Icon
                                svg={TrachIcon}
                                className="fill-feedback-danger"
                              />
                            </ActionLink>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <Text variant="heading-md-bold">
                                Excluir cliente
                              </Text>
                            </DialogHeader>

                            <Divider className="my-4" />
                            <div className="flex flex-col gap-6 py-6">
                              <Text>
                                Deseja realmente excluir{" "}
                                <strong>{cliente.name}</strong>?
                              </Text>
                              <Text as="p" className="mt-2 text-gray-300">
                                Ao excluir, todos os chamados deste cliente
                                serão removidos e esta ação não poderá ser
                                desfeita.
                              </Text>
                            </div>
                            <Divider className="my-4" />

                            <DialogFooter>
                              <div className="flex items-center justify-center gap-2 w-full py-6">
                                <DialogClose asChild>
                                  <Button variant="secondary" size="lg">
                                    Cancelar
                                  </Button>
                                </DialogClose>

                                <DialogClose asChild>
                                  <Button
                                    size="lg"
                                    onClick={() => {
                                      handleDeleteCliente(cliente.id);
                                      alert(
                                        `Cliente ${cliente.name} excluído com sucesso!`,
                                      );
                                    }}
                                  >
                                    Sim, excluir
                                  </Button>
                                </DialogClose>
                              </div>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <ButtonIcon
                              variant="secondary"
                              size="md"
                              icon={PenLineIcon}
                              className="fill-gray-100"
                            />
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <Text>Editar Cliente</Text>
                            </DialogHeader>
                            <Divider className="my-4" />
                            <Avatar name={cliente.name} />
                            <EditClienteForm
                              cliente={cliente}
                              onSave={handleUpdateCliente}
                              errors={errors}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EditClienteForm({
  cliente,
  onSave,
  errors,
}: {
  cliente: Users;
  onSave: (id: string, dados: Partial<Users>) => void;
  errors: Record<string, string>;
}) {
  const [formData, setFormData] = useState({
    name: cliente.name,
    email: cliente.email,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(cliente.id, formData);
      }}
    >
      <InputText
        label="NOME"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
      />
      <InputText
        label="E-MAIL"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
      />

      <Divider className="my-4" />

      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" size="lg">
            Salvar
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}
