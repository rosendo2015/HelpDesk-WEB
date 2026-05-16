
import { ButtonIcon } from "./components/ButtonIcon";

import IconHamburger from "./assets/icon/menu.svg?react";
import IconX from "./assets/icon/x.svg?react";



export function App() {

  return (
    <div className="flex flex-col max-w-md mx-auto border border-gray-300 p-4">

      <h1 className="text-blue-dark text-3xl font-bold">Tailwind CSS - Button Icon</h1>

      <IconHamburger className="fill-amber-600" />

      <ButtonIcon icon={<IconX />} />

    </div>
  )
}