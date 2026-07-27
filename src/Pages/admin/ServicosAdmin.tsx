import { Icon } from "../../components/Icon";
import { ActionLink } from "../../components/ActionLink";
import { Text } from "../../components/Text";
import PenLineIcon from "../../assets/icons/pen-line.svg?react";
import BanIcon from "../../assets/icons/ban.svg?react";
import CircleCheckIcon from "../../assets/icons/circle-check.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";

import { Tags } from "../../components/Tags";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../components/Dialog";
import Divider from "../../components/Divider";

import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { ButtonIcon } from "../../components/ButtonIcon";
import z, { ZodError } from "zod";
import { api } from "../../services/api";
import type { Servicos } from "../../contexts/Servico/model/servicos";
import { useEffect, useState } from "react";

const servicoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email("E-Mail inválido"),
});

export function ServicosAdmin() {
  const [servicos, setServicos] = useState<Servicos[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchServicos() {
      try {
        const response = await api.get<Servicos[]>("/services");

        const servicosFiltrados = response.data.filter(
          (servico) => servico.active,
        );
        setServicos(servicosFiltrados);
      } catch (error) {
        console.error("Erro ao buscar servico:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchServicos();
  }, []);

  async function handleCreateServico(id: string, dados: Partial<Servicos>) {
    try {
      const parsed = servicoSchema.parse(dados);
      const response = await api.patch(`/servicos/${id}`, parsed, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@helpdesk:token")}`,
        },
      });
      setServicos((prev) =>
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
    <div className="p-4 mx-auto  overflow-x-auto max-w-[1070px]">
      <header className="flex items-center justify-between mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Serviços
        </Text>

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <ButtonIcon className="md:hidden" icon={PlusIcon} />
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button className="md:block hidden w-full" icon={PlusIcon}>
                Novo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Text>Cadastro de serviços</Text>
              </DialogHeader>

              <form>
                <Divider className="my-4" />
                <InputText label="TÍTULO" placeholder="Nome do serviço" />
                <InputText label="VALOR" placeholder="R$ 0,00" />
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
      </header>
      <div className="border border-gray-500 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className=" text-gray-400 ">
            <tr className="border-t border-gray-500">
              <th className="px-3 py-2 sm:px-4 text-left">Tiítulo</th>
              <th className="px-3 py-2 sm:px-4 text-left">Valor</th>
              <th className="px-3 py-2 sm:px-4 text-left">Status</th>
              <th className="px-3 py-2 sm:px-4 text-left w-5" colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-500">
              <td className="px-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <Text
                    className="truncate overflow-hidden whitespace-nowrap"
                    variant="text-sm-bold"
                  >
                    Instação de Rede
                  </Text>
                </div>
              </td>
              <td className="px-3 py-2 text-left">
                <Text variant="text-sm-regular" className="">
                  R$ 180,00
                </Text>
              </td>
              <td className="px-3 py-2 text-left">
                <div className=" flex gap-3">
                  <Tags variant="success" className="" svg={CircleCheckIcon}>
                    Ativo
                  </Tags>
                </div>
              </td>
              <td className="px-3 py-2 sm:px-4 flex gap-2 text-right">
                <Tags variant="default" svg={BanIcon}>
                  Desativar
                </Tags>

                <div className="flex items-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <ActionLink variant="subtitle">
                        <Icon
                          svg={PenLineIcon}
                          className="w-4 h-4 fill-gray-100"
                        />
                      </ActionLink>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <Text>Serviço</Text>
                      </DialogHeader>

                      <form>
                        <Divider className="my-4" />
                        <InputText
                          value="Instalação de rede"
                          label="TÍTULO"
                          placeholder="Nome do serviço"
                        />
                        <InputText
                          value="R$ 180,00"
                          label="VALOR"
                          placeholder="R$ 0,00"
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
