import { createContext } from "react";
import type { Servicos } from "./model/servicos";

interface ServicesContextType {
  servicos: Servicos[];
  loading: boolean;
  fetchServicos: () => Promise<void>;
  createServico: (
    dados: Pick<Servicos, "name" | "price" | "active">,
  ) => Promise<void>;
  updateServico: (id: string, dados: Partial<Servicos>) => Promise<void>;
  deleteServico: (id: string) => Promise<void>;
}

export const ServicesContext = createContext<ServicesContextType | null>(null);
