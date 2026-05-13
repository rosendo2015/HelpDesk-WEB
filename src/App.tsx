import { Button } from "./components/Button";

export function App() {

  return (
    <div className="bg-[var(--gray-600)] text-[var(--gray-200)] max-w-[24.375rem] mx-auto border border-gray-300 p-4 rounded-lg">
      <h1 className="text-3xl font-bold">Hello, Vite + React!</h1>
      <Button />
    </div>
  )
}