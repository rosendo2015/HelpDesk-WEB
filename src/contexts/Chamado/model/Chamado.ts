// models/chamado.ts
import type { Users } from "../../User/model/users";

export type Status = "ABERTO" | "EM_ATENDIMENTO" | "ENCERRADO";

export interface Chamado {
  id: string;
  title: string;
  description?: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  totalPrice: number;
  // Relações
  cliente: Pick<Users, "id" | "name">; // apenas id e nome
  tecnico?: Pick<Users, "id" | "name" | "email"> | null; // opcional
  admin?: Pick<Users, "id" | "name"> | null;
  disponibilidadeId?: string;

  // Serviços vinculados
  services: {
    id: string;
    nome: string;
    price: number;
  }[];
}
export type ChamadoPayload = {
  title?: string;
  description?: string;
  services?: string[]; // apenas IDs
  status?: Status;
};
