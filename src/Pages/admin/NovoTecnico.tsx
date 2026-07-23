import { ActionLink } from "../../components/ActionLink";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import { Text } from "../../components/Text";

export function NovoTecnico() {
  return (
    <div className="md:max-w-200 mt-14 mx-auto">
      <header className="w-200 mb-6 flex justify-between">
        <div className="flex flex-col items-start text-right">
          <ActionLink icon={ArrowLeftIcon}>Voltar</ActionLink>
          <Text as="h1" variant="text-xl-bold" className="text-blue-dark">
            Perfil de técnico
          </Text>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Cancelar</Button>
          <Button>Salvar</Button>
        </div>
      </header>
      <Container className="w-full flex  flex-col gap-6 md:flex-row md:min-w-200">
        <Card>
          <form action=""></form>
        </Card>
      </Container>
    </div>
  );
}
