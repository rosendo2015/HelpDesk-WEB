import { api } from "./api";

// DTO para criação de chamado
export interface CriarChamadoDTO {
  clienteId: string;
  tecnicoId: string;
  services: string[];
  disponibilidadeId?: string;
  adminId?: string;
  title?: string;
}

// Criar chamado
export async function criarChamado(data: CriarChamadoDTO) {
  const token = localStorage.getItem("@helpdesk:token");

  const response = await api.post("/chamados", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Listar chamados
export async function listarChamados() {
  const token = localStorage.getItem("@helpdesk:token");
  const response = await api.get("/chamados", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Buscar serviços (para popular o select)
export async function getServicos() {
  const response = await api.get("/servicos");
  return response.data;
}
