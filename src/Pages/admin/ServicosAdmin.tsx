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
import { z, ZodError } from "zod";
import { useContext, useState } from "react";
import { ServicesContext } from "../../contexts/Servico/ServicesContext";
import { formatCurrencyBRL } from "../../utils/formatCurrency";
import { NumericFormat } from "react-number-format";

const servicoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  price: z.number().positive("O preço deve ser maior que zero"),
  active: z.boolean(),
});

export function ServicosAdmin() {
  const { servicos, loading, createServico, updateServico } =
    useContext(ServicesContext)!;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const [active, setActive] = useState(true);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const parsed = servicoSchema.parse({
        name,
        price: Number(price.replace(",", ".")),
        active: Boolean(active),
      });
      await createServico(parsed);
      setName("");
      setPrice("");
      setActive(true);
      setErrors({});
    } catch (error: unknown) {
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
        console.error("Erro ao criar serviço", error);
      }
    }
  }

  async function handleUpdateServico(
    id: string,
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    try {
      const parsed = servicoSchema.pick({ name: true, price: true }).parse({
        name: editName,
        price: Number(editPrice.replace(",", ".")),
      });

      await updateServico(id, parsed);

      setEditName("");
      setEditPrice("");
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
        console.error("Erro ao atualizar serviço", error);
      }
    }
  }

  return (
    <div className="p-4 mx-auto overflow-x-auto max-w-267.5">
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
                <Text variant="heading-md-bold">Cadastro de serviços</Text>
              </DialogHeader>

              <form onSubmit={handleSubmit}>
                <Divider className="my-4" />
                <InputText
                  label="TÍTULO"
                  placeholder="Nome do serviço"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!errors.name}
                />
                <InputText
                  label="VALOR"
                  placeholder="R$ 0,00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  error={!!errors.price}
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
      </header>

      <div className="border border-gray-500 rounded-lg overflow-hidden">
        {loading ? (
          <Text>Carregando serviços...</Text>
        ) : (
          <table className="w-full">
            <thead className="text-gray-400">
              <tr className="border-t border-gray-500">
                <th className="px-3 py-2 sm:px-4 text-left">Título</th>
                <th className="w-50 px-3 py-2 sm:px-4 text-left">Valor</th>
                <th className="w-30 px-3 py-2 sm:px-4 text-left">Status</th>
                <th
                  className=" px-3 py-2 sm:px-4 text-left w-5"
                  colSpan={2}
                ></th>
              </tr>
            </thead>
            <tbody>
              {servicos.map((servico) => (
                <tr key={servico.id} className="border-t border-gray-500">
                  <td className="px-3 py-2 text-left">
                    <Text variant="text-sm-bold">{servico.name}</Text>
                  </td>
                  <td className="px-3 py-2 text-left">
                    <Text variant="text-sm-regular">
                      {formatCurrencyBRL(servico.price)}
                    </Text>
                  </td>
                  <td className="px-3 py-2 text-left">
                    <Tags
                      variant={servico.active ? "success" : "danger"}
                      svg={servico.active ? CircleCheckIcon : BanIcon}
                    >
                      {servico.active ? "Ativo" : "Inativo"}
                    </Tags>
                  </td>

                  <td className="px-3 py-2 sm:px-4 flex items-center gap-2 text-right ">
                    {servico.active ? (
                      <button
                        onClick={() =>
                          updateServico(servico.id, { active: false })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon svg={BanIcon} />
                        <Text>Desativar</Text>
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          updateServico(servico.id, { active: true })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon svg={CircleCheckIcon} />
                        <Text>Reativar</Text>
                      </button>
                    )}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Dialog
                        onOpenChange={(open) => {
                          if (open) {
                            setEditName(servico.name);
                            setEditPrice(servico.price.toString());
                          }
                        }}
                      >
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
                            <Text variant="heading-md-bold">Serviço</Text>
                          </DialogHeader>

                          <form
                            onSubmit={(e) => handleUpdateServico(servico.id, e)}
                          >
                            <Divider className="my-4" />
                            <InputText
                              label="TÍTULO"
                              placeholder="Nome do serviço"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              error={!!errors.name}
                            />

                            {/* Campo com máscara de moeda na edição */}
                            <NumericFormat
                              customInput={InputText}
                              label="VALOR"
                              placeholder="R$ 0,00"
                              value={editPrice}
                              onValueChange={(values: { value: string }) =>
                                setEditPrice(values.value)
                              }
                              thousandSeparator="."
                              decimalSeparator=","
                              prefix="R$ "
                              decimalScale={2}
                              fixedDecimalScale
                              error={!!errors.price}
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
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
