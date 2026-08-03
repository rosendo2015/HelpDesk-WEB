import type { Users } from "../../User/model/users";

export interface CategoryServices {
  id: string;
  name: string;
  active: boolean;
  adminId: Users;
  price: number;
  chamadoService: string;
  createdAt: string;
  updatedAt: string;
}
