import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { z, ZodError } from "zod";
import { api } from "../services/api";
import { useNavigate } from "react-router";


const signUpSchema = z.object({
    name: z.string().trim().min(1, { message: "Informe o nome completo." }),
    email: z.string().email({ message: "E-Mail inválido." }),
    password: z.string().min(6, { message: "A senha deve ter pelo menos 6 digitos" })
})

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const data = signUpSchema.parse({
                name, email, password
            })
            await api.post("/users", data)
            if (confirm("cadastrado com sucesso.")) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            if (error instanceof ZodError) {
                return alert(error.issues[0].message)
            }
            alert("Não foi possivel cadastrar.")
        }
    }
    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto bg-gray-600 rounded-3xl">
            <header>
                <Logo />
            </header>
            <main className="flex flex-col gap-3 w-85.5 sm:w-100">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Crie sua conta</Text>
                    <Text as="span" variant="text-xs-regular" className="text-gray-300" >Informe seu nome, e-mail e senha</Text>

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

                        <Button size="lg" className="mt-4">Cadastrar</Button>
                    </form>
                </Card>
                <Card className="flex flex-col w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Já tem uma conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">Entre agora mesmo</Text>
                    <Link href="/login" size="lg" variant="secondary" className="mt-5">Acessar conta</Link>

                </Card>
            </main>
        </Container>

    );
}