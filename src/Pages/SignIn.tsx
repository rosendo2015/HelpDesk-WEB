import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { InputText } from "../components/InputText";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";

export function SignIn() {
    return (
        <Container className="flex flex-col items-center justify-center gap-6 py-8 px-6 mx-auto rounded-3xl">
            <header>
                <Logo />
            </header>
            <main className="flex flex-col gap-3 w-98">
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Acesse o portal</Text>
                    <Text as="span" variant="text-xs-regular" className="text-gray-300" >Entre usando seu e-mail e senha cadastrados</Text>

                    <form action="#" className="flex flex-col gap-4">
                        <InputText
                            label="E-MAIL"
                            type="email"
                            placeholder="exemplo@email.com"
                        />
                        <InputText
                            label="SENHA"
                            type="password"
                            placeholder="Digite sua senha"
                        />

                        <Button size="lg" className="mt-4">Enviar</Button>
                    </form>
                </Card>
                <Card className="w-full p-6">
                    <Text as="h2" variant="text-lg-bold">Ainda não tem conta?</Text>
                    <Text variant="text-xs-regular" className="text-gray-300">Cadstre agora mesmo</Text>
                    <Button size="lg" variant="secondary" className="mt-5">Criar conta</Button>
                </Card>
            </main>
        </Container>

    );
}