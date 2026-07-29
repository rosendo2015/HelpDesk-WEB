export interface Horario {
  horario: string;
}

export interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
  role: "CLIENTE" | "ADMIN" | "TECNICO";
  createdAt: string;
  updatedAt: string;
  disponibilidades: Array<Horario>;
}
