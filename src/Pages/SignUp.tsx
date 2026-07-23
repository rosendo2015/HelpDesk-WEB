import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { ActionLink } from "../components/ActionLink";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { InputSelect } from "../components/InputSelect";

interface TokenPayload {
  role: "ADMIN" | "TECNICO" | "CLIENTE";
  sub: string;
  exp: number;
}

const roleOptions = [
  { id: 1, nome: "CLIENTE", valor: 1 },
  { id: 2, nome: "TECNICO", valor: 2 },
  { id: 3, nome: "ADMIN", valor: 3 },
];

const token = localStorage.getItem("token");
const currentUser = token ? jwtDecode<TokenPayload>(token) : null;
const isAdmin = currentUser?.role === "ADMIN";

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome completo." }),
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CLIENTE");
  const [dbStatus, setDbStatus] = useState<"ok" | "error" | "">("");

  const navigate = useNavigate();

  // Verifica o health check ao montar
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        if (response.data.status === "ok") {
          setDbStatus("ok");
        } else {
          setDbStatus("error");
        }
      } catch {
        setDbStatus("error");
      }
    };
    checkHealth();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = signUpSchema.parse({
        name,
        email,
        password,
      });

      await api.post("/users", { ...data, role });

      if (confirm("Cadastrado com sucesso.")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      alert("Não foi possivel cadastrar.");
    }
  }

  return (
    <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
      <header>
        <Logo color="blue" />
      </header>
      <main className="flex flex-col gap-3 w-85.5 sm:w-100">
        {dbStatus === "error" && (
          <Card className="w-full p-4 bg-red-600">
            <Text as="span" variant="text-xs-bold" className="text-white">
              ⚠️ Sistema indisponível: banco de dados fora do ar.
            </Text>
          </Card>
        )}

        <Card className="w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Crie sua conta
          </Text>
          <Text as="span" variant="text-xs-regular" className="text-gray-300">
            Informe seu nome, e-mail e senha
          </Text>

          <form onSubmit={onSubmit} action="#" className="flex flex-col gap-4">
            <InputText
              label="NOME"
              type="text"
              placeholder="Digite o nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              label="E-MAIL"
              type="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              label="SENHA"
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isAdmin && (
              <InputSelect
                label="Tipo de Usuário"
                options={roleOptions}
                placeholder="Escolha o perfil do usuário"
                error={false}
                onChange={(option) => setRole(option.nome)}
              />
            )}

            <Button size="lg" className="mt-4" disabled={dbStatus === "error"}>
              Cadastrar
            </Button>
          </form>
        </Card>
        <Card className="flex flex-col w-full p-6">
          <Text as="h2" variant="text-lg-bold">
            Já tem uma conta?
          </Text>
          <Text variant="text-xs-regular" className="text-gray-300">
            Entre agora mesmo
          </Text>
          <ActionLink to="/login" size="lg" variant="subtitle" className="mt-5">
            Acessar conta
          </ActionLink>
        </Card>
      </main>
    </Container>
  );
}
