import { Avatar } from "./components/Avatar";
import { Text } from "./components/Text";
import { Icon } from "./components/Icon";
import { Tags } from "./components/Tags";
import { TagTime } from "./components/TagTime";
import { Button } from "./components/Button";

import AlertCircle from "./assets/icons/circle-alert.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinIcon from "./assets/icons/spinner.svg?react";
import LogOutIcon from "./assets/icons/log-out.svg?react";
import NewIcon from "./assets/icons/circle-help.svg?react";
import ClockIcon from "./assets/icons/clock-2.svg?react";
import CircleCheckIcon from "./assets/icons/circle-check-big.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import LinePencil from "./assets/icons/pen-line.svg?react";
import { ButtonIcon } from "./components/ButtonIcon";
import { InputText } from "./components/InputText";
import { InputSelect } from "./components/InputSelect";

import { useState } from "react"
import { Card } from "./components/Card";



export function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Simples validação: senha precisa ter pelo menos 8 caracteres
    if (!email || !password) {
      setError(true)
      return
    }
    if (password.length < 8) {
      setError(true)
      return
    } else {
      setError(false)
      alert("Formulário enviado com sucesso!")
    }
  }


  return (
    <div className="flex flex-col gap-2 p-4">
      <Text variant={"text-xl-bold"} className="text-blue-dark">Hello, World!</Text>
      <Text variant={"text-lg-bold"}>Hello, World!</Text>
      <Text variant={"heading-md-normal"}>Hello, World!</Text>
      <Text variant={"text-sm-regular"}>Hello, World!</Text>
      <Text variant={"text-xs-regular"}>Hello, World!</Text>
      <Text variant={"text-xs-bold"}>Hello, World!</Text>
      <Text variant={"text-xxs-bold"}>Hello, World!</Text>

      <div className="flex gap-4">
        <Avatar name="Maria Oliveira" sizePx={70} color={"green"} />
        <Avatar name="João Souza" size="lg" color={"yellow"} />
        <Avatar name="Ana Costa" />
        <Avatar name="Francisco Silva" color={"red"} />
      </div>

      <div className="flex gap-4">
        <Icon svg={TrashIcon} className="fill-gray-100" />
        <Icon svg={SpinIcon} className="fill-gray-100" animate />
        <Icon svg={LogOutIcon} className="fill-feedback-danger w-5 h-5" />
      </div>
      <div className="flex gap-4">
        <Tags variant="new" svg={NewIcon} >LABEL</Tags>
        <Tags variant="info" svg={ClockIcon}>LABEL</Tags>
        <Tags variant="success" svg={CircleCheckIcon}>LABEL</Tags>
        <Tags variant="danger" svg={NewIcon}>LABEL</Tags>
      </div>
      <div className="flex gap-4">
        <TagTime>09:00</TagTime>
        <TagTime variant="selected" svg={XIcon}>15:00</TagTime>
        <TagTime variant="disabled"> 08:30 </TagTime>
      </div>
      <div className="flex gap-4">
        <Button icon={LinePencil} variant="primary">Primary</Button>
        <Button icon={LinePencil} size="sm" variant="primary">Primary</Button>
        <Button icon={LinePencil} disabled>Disabled</Button>
        <Button icon={LinePencil} variant="secondary">Secondary</Button>
        <Button icon={LinePencil} variant="link">Link</Button>
        <Button icon={LinePencil} size="sm" variant="link">Link</Button>
      </div>
      <div className="flex gap-4">
        <ButtonIcon icon={LinePencil} variant="primary" />
        <ButtonIcon icon={LinePencil} variant="primary" size="sm" />
        <ButtonIcon icon={LinePencil} disabled />
        <ButtonIcon icon={LinePencil} variant="secondary" />
        <ButtonIcon icon={LinePencil} variant="link" />
        <ButtonIcon icon={LinePencil} variant="link" size="sm" />
      </div>

      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold">FORMULÁRIO EXEMPLO</h2>

        <InputText
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          errorIcon={AlertCircle}
          helperText={error ? "O email é obrigatório" : ""}
        />

        <InputText
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={true}
          errorIcon={AlertCircle}
          helperText={error ? "A senha deve ter pelo menos 8 caracteres" : ""}
        />

        <InputSelect
          label="Categoria"
          options={["Item 1", "Item 2", "Item 3"]}
          helperText="Escolha uma opção"
          error={false}
        />

        <InputSelect
          label="Categoria"
          options={["Item 1", "Item 2", "Item 3"]}
          helperText="Campo obrigatório"
          error={true}
        />


        <Button type="submit" variant="primary">Enviar</Button>
      </form>


      <div className="flex p-8 bg-gray-100">
        <Card size="md">Hello World.</Card>
      </div>

    </div>
  )
}




