
import { ButtonIcon } from "./components/ButtonIcon";

import IconHamburger from "./assets/icon/menu.svg?react";
import IconX from "./assets/icon/x.svg?react";



export function App() {

  return (
    <div className="flex flex-col bg-[var(--gray-600)] text-[var(--gray-200)] max-w-[24.375rem] mx-auto border border-gray-300 p-4">

      <IconHamburger className="fill-amber-600" />

      <ButtonIcon icon={<IconX />} />


    </div>
  )
}