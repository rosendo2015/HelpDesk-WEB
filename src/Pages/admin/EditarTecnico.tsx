import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import z from "zod";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { InputText } from "../../components/InputText";
import { TagTime } from "../../components/TagTime";
import { Text } from "../../components/Text";
import { api } from "../../services/api";

const tecnicoSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  horarios: z.array(z.string()).optional(),
});

const periodos = {
  MANHÃ: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  TARDE: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  NOITE: ["19:00", "20:00", "21:00", "22:00", "23:00"],
};
interface Disponibilidade {
  horario: string;
}
export function EditarTecnico() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [horarios, setHorarios] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Buscar dados atuais do técnico
  useEffect(() => {
    async function fetchTecnico() {
      try {
        const response = await api.get(`/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setHorarios(
          response.data.disponibilidades?.map(
            (d: Disponibilidade) => d.horario,
          ) || [],
        );
      } catch {
        setError("Erro ao carregar dados do técnico");
      }
    }
    if (id) fetchTecnico();
  }, [id]);

  // Alternar seleção de horários
  function toggleHorario(horario: string) {
    setHorarios((prev) =>
      prev.includes(horario)
        ? prev.filter((h) => h !== horario)
        : [...prev, horario],
    );
  }

  // Atualizar técnico
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = tecnicoSchema.safeParse({ name, email, horarios });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    navigate("/admin/tecnicos");
    try {
      await api.patch(`/users/${id}`, result.data);
      alert("Perfil atualizado com sucesso!");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Erro ao atualizar técnico");
      } else {
        setError("Erro ao atualizar técnico");
      }
    }
  }

  return (
    <div className="mx-auto md:w-full max-w-[800px] ">
      <header className="mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:w-full md:max-w-[790px] ">
        <div className="flex flex-col items-start">
          <button
            type="button"
            className="flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <Text variant="text-xs-bold">Voltar</Text>
          </button>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/admin/tecnicos")}
          >
            Cancelar
          </Button>
          <Button className="w-full" onClick={handleSubmit}>
            Salvar
          </Button>
        </div>
      </header>

      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col gap-4 p-6 w-full h-fit md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <div className="py-1">
              <Avatar name={name} />
            </div>
            <InputText
              label="NOME"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              label="E-MAIL"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <Text className="text-red-500">{error}</Text>}
          </Card>

          <Card className="flex flex-col p-6">
            <Text as="h2" variant="heading-md-bold">
              Horários de atendimento
            </Text>
            <Text as="p" variant="text-sm-regular">
              Selecione os horários de disponibilidade do técnico para
              atendimento
            </Text>

            {Object.entries(periodos).map(([periodo, horas]) => (
              <div key={periodo} className="mt-4">
                <Text variant="text-xs-bold" className="text-gray-300">
                  {periodo}
                </Text>
                <div className="flex gap-2 flex-wrap">
                  {horas.map((hora) => (
                    <TagTime
                      key={hora}
                      svg={XIcon}
                      checked={horarios.includes(hora)} // marcar se já está selecionado
                      onClick={() => toggleHorario(hora)}
                    >
                      {hora}
                    </TagTime>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </form>
      </Container>
    </div>
  );
}
