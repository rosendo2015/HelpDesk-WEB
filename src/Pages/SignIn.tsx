import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { api } from "../services/api";
import { z, ZodError } from "zod";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";


const signInSchema = z.object({
    email: z.string().email({ message: "E-Mail inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" })
})

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const { signIn } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = signInSchema.parse({
                email, password
            })
            const response = await api.post("/sessions", data);


            signIn({
                token: response.data.token,
                user: response.data.user
            });

            const role = response.data.user.role;

            if (role === "ADMIN") {
                navigate("/admin");
            }

            if (role === "TECNICO") {
                navigate("/tecnico");
            }

            if (role === "CLIENTE") {
                navigate("/cliente");
            }

        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            setError("Falha ao autenticar. Verifique suas credenciais.");
        }
    };

    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
            <header>
                <Logo color="blue" />
            </header>
            <main className="flex flex-col gap-3 w-85.5 sm:w-100">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Acesse o portal</Text>
                    <Text as="span" variant="text-xs-regular" className="text-gray-300">
                        Entre usando seu e-mail e senha cadastrados
                    </Text>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <InputText
                            label="E-MAIL"
                            type="email"
                            placeholder="exemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputText
                            label="SENHA"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <Text variant="text-xs-regular" className="text-red-400">
                                {error}
                            </Text>
                        )}

                        <Button size="lg" className="mt-4" type="submit">Enviar</Button>
                    </form>
                </Card>
                <Card className="flex flex-col w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Ainda não tem conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">
                        Cadastre agora mesmo
                    </Text>
                    <Link to="/register" size="lg" variant="secondary" className="mt-5">
                        Criar conta
                    </Link>
                </Card>
            </main>
        </Container>
    );
}
