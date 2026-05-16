import { Avatar } from "./components/Avatar";
import { Text } from "./components/Text";

export function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant={"text-xl-bold"} className="text-blue-dark">Hello, World!</Text>
      <Text variant={"text-lg-bold"}>Hello, World!</Text>
      <Text variant={"heading-md-normal"}>Hello, World!</Text>
      <Text variant={"text-sm-regular"}>Hello, World!</Text>
      <Text variant={"text-xs-regular"}>Hello, World!</Text>
      <Text variant={"text-xxs-bold"}>Hello, World!</Text>

      <Avatar name="Maria Oliveira" sizePx={70} color={"green"} />
      <Avatar name="João Souza" size="lg" color={"yellow"} />
      <Avatar name="Ana Costa" />
      <Avatar name="Francisco Silva" color={"red"} />


    </div>
  )
}