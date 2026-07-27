import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import { Avatar } from "../../components/Avatar";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import TrachIcon from "../../assets/icons/trash.svg?react";
import { useEffect, useState } from "react";
import type { Users } from "../../contexts/User/model/users";
import { api } from "../../services/api";
import { Skeleton } from "../../components/Skeleton";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";

import { Button } from "../../components/Button";
import Divider from "../../components/Divider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { InputText } from "../../components/InputText";
import z, { ZodError } from "zod";

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
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error("Erro ao tentar atualizar cliente", error);
      }
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
          <thead className=" text-gray-400 ">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left w-[134px] md:w-[582px]">
                Nome
              </th>
              <th className="px-3 py-2 sm:px-4 w-[96px] md:w-[400px] text-left">
                Email
              </th>
              <th className="px-3 py-2 sm:px-4  md:table-cell text-left w-[88px]"></th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr
                    key={`sckeleton-${index}`}
                    className="border-t border-gray-500"
                  >
                    <td className="px-3 py-2 w-[134px] md:w-[582px]">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </td>
                    <td className="px-3 py-2 hidden md:table-cell w-[96px] md:w-[400px]">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-3 py-2 w-[88px]">
                      <div className="flex justify-end gap-3">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </td>
                  </tr>
                ))
              : clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-t border-gray-500">
                    <td className="px-3 py-2 text-left w-[134px] md:w-[582px] truncate">
                      <div className="flex items-center gap-3">
                        <Dialog>
                          <DialogTrigger>
                            <Avatar name={cliente.name} />
                          </DialogTrigger>
                          <DialogContent variant="default">
                            <DialogHeader>
                              <Text>Cliente</Text>
                            </DialogHeader>

                            <Divider className="my-4" />

                            <DialogBody>
                              <Avatar name={cliente.name} />
                              <div className="flex flex-col gap-2 border-b border-gray-500 py-2">
                                <Text
                                  variant={"text-xs-bold"}
                                  className="text-gray-300"
                                >
                                  NOME
                                </Text>
                                <Text>{cliente.name}</Text>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-500 py-2 mb-8">
                                <Text
                                  variant={"text-xs-bold"}
                                  className="text-gray-300"
                                >
                                  E-MAIL
                                </Text>
                                <Text>{cliente.email}</Text>
                              </div>
                            </DialogBody>

                            <Divider className="my-4" />

                            <DialogFooter>
                              <DialogClose asChild>
                                <Button size={"lg"}>Fechar</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <Text
                          variant="text-sm-bold"
                          className="w-[70px] md:w-full truncate"
                        >
                          {cliente.name}
                        </Text>
                      </div>
                    </td>
                    <td className="w-[96px] md:w-[400px] px-3 py-2 text-left md:table-cell truncate max-w-30">
                      <Text className="w-[96px] md:w-[400px] truncate">
                        {cliente.email}
                      </Text>
                    </td>

                    <td className="px-3 py-2 sm:px-4  w-[88px]">
                      <div className="flex items-center justify-end gap-3 text-right">
                        <ActionLink to={`#`} variant="subtitle" size="md">
                          <Icon
                            svg={TrachIcon}
                            className=" fill-feedback-danger"
                          />
                        </ActionLink>

                        <div className="flex items-center gap-3">
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
                                <Text>Cliente</Text>
                              </DialogHeader>

                              <Divider className="my-4" />
                              <Avatar name={cliente.name} />

                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  handleUpdateCliente(cliente.id, {
                                    name: cliente.name,
                                    email: cliente.email,
                                  });
                                }}
                              >
                                <InputText
                                  label="NOME"
                                  value={cliente.name}
                                  onChange={(e) =>
                                    setClientes((prev) =>
                                      prev.map((c) =>
                                        c.id === cliente.id
                                          ? { ...c, name: e.target.value }
                                          : c,
                                      ),
                                    )
                                  }
                                  error={errors.name}
                                />
                                <InputText
                                  label="E-MAIL"
                                  value={cliente.email}
                                  onChange={(e) =>
                                    setClientes((prev) =>
                                      prev.map((c) =>
                                        c.id === cliente.id
                                          ? {
                                              ...cliente,
                                              email: e.target.value,
                                            }
                                          : c,
                                      ),
                                    )
                                  }
                                  error={errors.email}
                                />

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
