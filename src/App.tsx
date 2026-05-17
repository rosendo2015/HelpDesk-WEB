import { Avatar } from "./components/Avatar";
import { Text } from "./components/Text";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinIcon from "./assets/icons/spinner.svg?react";
import LogOutIcon from "./assets/icons/log-out.svg?react";
import { Icon } from "./components/Icon";
import { Tags } from "./components/Tags";
import NewIcon from "./assets/icons/circle-help.svg?react";
import ClockIcon from "./assets/icons/clock-2.svg?react";
import CircleCheckIcon from "./assets/icons/circle-check-big.svg?react";

export function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant={"text-xl-bold"} className="text-blue-dark">Hello, World!</Text>
      <Text variant={"text-lg-bold"}>Hello, World!</Text>
      <Text variant={"heading-md-normal"}>Hello, World!</Text>
      <Text variant={"text-sm-regular"}>Hello, World!</Text>
      <Text variant={"text-xs-regular"}>Hello, World!</Text>
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
    </div>
  )
}