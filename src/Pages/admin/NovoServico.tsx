import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";
import { Text } from "../../components/Text";
import { InputText } from "../../components/InputText";
import { useState } from "react";
import { TagTime } from "../../components/TagTime";

export function NovoServico() {
  const [error, setError] = useState(false);
  return (
    <div className="mx-auto md:w-full max-w-[800px] ">
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
          <Button className="w-full">Salvar</Button>
        </div>
      </header>
      <Container className="w-full md:max-w-[800px]">
        <form className="mx-auto flex flex-col gap-6 md:flex-row ">
          <Card className="flex flex-col p-6 w-full md:max-w-[296px]">
            <Text as="h2" variant="heading-md-bold">
              Dados pessoais
            </Text>
            <Text as="p" variant="text-sm-regular">
              Defina as informações do perfil de técnico
            </Text>
            <InputText label="NOME" placeholder="Nome Completo" />
            <InputText label="E-MAIL" placeholder="exemplo@email.com" />
            <InputText
              label="SENHA"
              placeholder="Defina a senha de acesso"
              error={error}
              helperText={
                error ? "A senha é obrigatório" : "Minimo de 6 dígitos"
              }
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
                <TagTime>07:00</TagTime>
                <TagTime>08:00</TagTime>
                <TagTime>09:00</TagTime>
                <TagTime>10:00</TagTime>
                <TagTime>11:00</TagTime>
                <TagTime>12:00</TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                TARDE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime>13:00</TagTime>
                <TagTime>14:00</TagTime>
                <TagTime>15:00</TagTime>
                <TagTime>16:00</TagTime>
                <TagTime>17:00</TagTime>
                <TagTime>18:00</TagTime>
              </div>
            </div>
            <div className="mt-4">
              <Text variant="text-xs-bold" className="text-gray-300">
                NOITE
              </Text>
              <div className="flex gap-2 flex-wrap">
                <TagTime>19:00</TagTime>
                <TagTime>20:00</TagTime>
                <TagTime>21:00</TagTime>
                <TagTime>22:00</TagTime>
                <TagTime>23:00</TagTime>
              </div>
            </div>
          </Card>
        </form>
      </Container>
    </div>
  );
}
