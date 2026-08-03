import { createContext } from "react";
import type { Chamado, ChamadoPayload } from "./model/Chamado";

export interface ChamadosContextType {
  chamados: Chamado[];
  loading: boolean;
  fetchChamados: () => Promise<void>;
  getChamadoById: (id: string) => Chamado | undefined;
  createChamado: (dados: ChamadoPayload) => Promise<void>;
  updateChamado: (id: string, dados: ChamadoPayload) => Promise<void>;
}

export const ChamadosContext = createContext<ChamadosContextType | null>(null);
