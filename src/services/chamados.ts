import { api } from "./api"; // importa o cliente axios já configurado

// Criar chamado
export async function criarChamado(chamadoData: {
  clienteId: number;
  tecnicoId: number;
  servicos: number[];
}) {
  const response = await api.post("/chamados", chamadoData);
  return response.data;
}

// Listar chamados
export async function listarChamados() {
  const response = await api.get("/chamados");
  return response.data;
}

// Buscar serviços (para popular o select)
export async function getServicos() {
  const response = await api.get("/servicos");
  return response.data;
}
