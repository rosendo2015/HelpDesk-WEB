// src/contexts/Servico/ServicesProvider.tsx
import type { ReactNode } from "react";
import { useState, useEffect, startTransition, useContext } from "react";
import { api } from "../../services/api";
import { ServicesContext } from "../../contexts/Servico/ServicesContext";
import { AuthContext } from "../../contexts/AuthContext";
import type { Servicos } from "../../contexts/Servico/model/servicos";

export function ServicesProvider({ children }: { children: ReactNode }) {
  const [servicos, setServicos] = useState<Servicos[]>([]);
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext); // 🔹 Pega o token do contexto de autenticação

  // 🔹 Buscar serviços ativos
  async function fetchServicos() {
    setLoading(true);
    try {
      // 🔹 Se for admin, busca todos (ativos + inativos)
      const url =
        user?.role === "ADMIN" ? "/services?includeInactive=true" : "/services";

      const response = await api.get<Servicos[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      startTransition(() => {
        setServicos(response.data);
      });
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (!token) return;
    async function carregarServicos() {
      await fetchServicos();
    }
    carregarServicos();
  }, [token, user?.role]); // ✅ recarrega se o role mudar

  // 🔹 Criar novo serviço (corrigido para aceitar apenas os campos necessários)
  async function createServico(
    dados: Pick<Servicos, "name" | "price" | "active">,
  ) {
    try {
      const response = await api.post("/services", dados);
      startTransition(() => {
        setServicos((prev) => [...prev, response.data]);
      });
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
    }
  }

  // 🔹 Atualizar serviço existente
  async function updateServico(id: string, dados: Partial<Servicos>) {
    try {
      const response = await api.patch(`/services/${id}`, dados);
      startTransition(() => {
        setServicos((prev) =>
          prev.map((s) => (s.id === id ? { ...s, ...response.data } : s)),
        );
      });
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
    }
  }

  // 🔹 Excluir serviço
  async function deleteServico(id: string) {
    try {
      await api.delete(`/services/${id}`);
      startTransition(() => {
        setServicos((prev) => prev.filter((s) => s.id !== id));
      });
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  }

  // 🔹 Carregar serviços ao montar (somente se o token existir)
  useEffect(() => {
    if (!token) return; // ✅ Garante que só busca se o token estiver disponível

    async function carregarServicos() {
      await fetchServicos();
    }

    carregarServicos();
  }, [token]); // ✅ Recarrega se o token mudar

  return (
    <ServicesContext.Provider
      value={{
        servicos,
        loading,
        fetchServicos,
        createServico,
        updateServico,
        deleteServico,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}
