import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { useState } from "react";
import { TagTime } from "../../components/TagTime";
import XIcon from "../../assets/icons/x.svg?react";
import { z } from "zod";
import { api } from "../../services/api";

const tecnicoSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 dígitos"),
  horarios: z.array(z.string()).optional(),
  role: z.literal("TECNICO"),
});

export function NovoTecnico() {
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      horarios: formData.getAll("horarios") as string[],
      role: "TECNICO",
    };

    const result = tecnicoSchema.safeParse(payload);

    if (!result.success) {
      const formatted = result.error.format();
      setError({
        name: formatted.name?._errors[0] ?? "",
        email: formatted.email?._errors[0] ?? "",
        password: formatted.password?._errors[0] ?? "",
        horarios: formatted.horarios?._errors[0] ?? "",
      });
      return;
    }
    try {
      const response = await api.post("/users", {
        ...result.data,
        role: "TECNICO",
      });

      if (response.status !== 201) throw new Error("Erro ao salvar técnico");

      alert("Técnico salvo com sucesso!");
      setError({});
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Falha ao salvar técnico");
    }
  };

  return (
    <div className="mx-auto md:w-full max-w-[800px] pt-[52px]">
      <header className="mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4  md:w-full md:max-w-[790px] ">
        <div className="flex flex-col items-start">
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </a>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" className="w-full">
            Cancelar
          </Button>
          <Button type="submit" className="w-full" form="horariosForm">
            Salvar
          </Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form
          onSubmit={handleSubmit}
          id="horariosForm"
          className="mx-auto flex flex-col gap-6 md:flex-row "
        >
          <Card className="flex flex-col p-6 w-full md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <InputText
              type="text"
              label="NOME"
              name="name"
              placeholder="Nome Completo"
              error={!!error.name}
              helperText={error.name}
            />
            <InputText
              type="text"
              label="E-MAIL"
              name="email"
              placeholder="exemplo@email.com"
              error={!!error.email}
              helperText={error.email}
            />
            <InputText
              type="password"
              label="SENHA"
              name="password"
              placeholder="Defina a senha de acesso"
              error={!!error.password}
              helperText={error.password}
            />
          </Card>
          <Card className="flex flex-col p-6">
            <Text as="h2" variant="heading-md-bold">
              Horários de atendimento
            </Text>
            <Text as="p" variant="text-sm-regular">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                MANHÃ
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="07:00" svg={XIcon}>
                  07:00
                </TagTime>
                <TagTime name="horarios" value="08:00" svg={XIcon}>
                  08:00
                </TagTime>
                <TagTime name="horarios" value="09:00" svg={XIcon}>
                  09:00
                </TagTime>
                <TagTime name="horarios" value="10:00" svg={XIcon}>
                  10:00
                </TagTime>
                <TagTime name="horarios" value="11:00" svg={XIcon}>
                  11:00
                </TagTime>
                <TagTime name="horarios" value="12:00" svg={XIcon}>
                  12:00
                </TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                TARDE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="13:00" svg={XIcon}>
                  13:00
                </TagTime>
                <TagTime name="horarios" value="14:00" svg={XIcon}>
                  14:00
                </TagTime>
                <TagTime name="horarios" value="15:00" svg={XIcon}>
                  15:00
                </TagTime>
                <TagTime name="horarios" value="16:00" svg={XIcon}>
                  16:00
                </TagTime>
                <TagTime name="horarios" value="17:00" svg={XIcon}>
                  17:00
                </TagTime>
                <TagTime name="horarios" value="18:00" svg={XIcon}>
                  18:00
                </TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                NOITE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime name="horarios" value="19:00" svg={XIcon}>
                  19:00
                </TagTime>
                <TagTime name="horarios" value="20:00" svg={XIcon}>
                  20:00
                </TagTime>
                <TagTime name="horarios" value="21:00" svg={XIcon}>
                  21:00
                </TagTime>
                <TagTime name="horarios" value="22:00" svg={XIcon}>
                  22:00
                </TagTime>
                <TagTime name="horarios" value="23:00" svg={XIcon}>
                  23:00
                </TagTime>
              </div>
            </div>
          </Card>
        </form>
      </Container>
    </div>
  );
}
