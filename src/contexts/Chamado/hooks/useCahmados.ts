import { useContext } from "react";
import { ChamadosContext } from "../ChamadosContext";

export function useChamados() {
  const context = useContext(ChamadosContext);
  if (!context) {
    throw new Error("useChamados deve ser usado dentro de ChamadosProvider");
  }
  return context;
}
