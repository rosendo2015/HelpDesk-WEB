// src/contexts/Servico/ServicesProvider.tsx
import type { ReactNode } from "react";
import { useState, useEffect, startTransition, useContext } from "react";
import { api } from "../../services/api";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { AuthContext } from "../../contexts/AuthContext";
import type { CategoryServices } from "../CategoryServices/model/categoryServices";

export function ServicesProvider({ children }: { children: ReactNode }) {
  const [categoryServices, setCategoryServices] = useState<CategoryServices[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext); // 🔹 Pega o token do contexto de autenticação

  // 🔹 Buscar serviços ativos
  async function fetchCategoryServices() {
    setLoading(true);
    try {
      // 🔹 Se for admin, busca todos (ativos + inativos)
      const url =
        user?.role === "ADMIN" ? "/services?includeInactive=true" : "/services";

      const response = await api.get<CategoryServices[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      startTransition(() => {
        setCategoryServices(response.data);
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
      await fetchCategoryServices();
    }
    carregarServicos();
  }, [token, user?.role]); // ✅ recarrega se o role mudar

  // 🔹 Criar novo serviço (corrigido para aceitar apenas os campos necessários)
  async function createServico(
    dados: Pick<CategoryServices, "name" | "price" | "active">,
  ) {
    try {
      const response = await api.post("/services", dados);
      startTransition(() => {
        setCategoryServices((prev) => [...prev, response.data]);
      });
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
    }
  }

  // 🔹 Atualizar serviço existente
  async function updateServico(id: string, dados: Partial<CategoryServices>) {
    try {
      const response = await api.patch(`/services/${id}`, dados);
      startTransition(() => {
        setCategoryServices((prev) =>
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
        setCategoryServices((prev) => prev.filter((s) => s.id !== id));
      });
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  }

  // 🔹 Carregar serviços ao montar (somente se o token existir)
  useEffect(() => {
    if (!token) return; // ✅ Garante que só busca se o token estiver disponível

    async function carregarServicos() {
      await fetchCategoryServices();
    }

    carregarServicos();
  }, [token]); // ✅ Recarrega se o token mudar

  return (
    <ServicesContext.Provider
      value={{
        categoryServices,
        loading,
        fetchCategoryServices,
        createServico,
        updateServico,
        deleteServico,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}
