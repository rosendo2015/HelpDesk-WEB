import type { Users } from "../../User/model/users";

export interface Servicos {
  id: string;
  name: string;
  active: boolean;
  adminId: Users;
  price: number;
  chamadoService: string;
  createdAt: string;
  updatedAt: string;
}
