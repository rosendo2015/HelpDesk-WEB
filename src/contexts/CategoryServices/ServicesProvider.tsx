import type { ReactNode } from "react";
import { startTransition, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ServicesContext } from "../../contexts/CategoryServices/ServicesContext";
import { api } from "../../services/api";
import type { CategoryServices } from "../CategoryServices/model/categoryServices";

export function ServicesProvider({ children }: { children: ReactNode }) {
  const [categoryServices, setCategoryServices] = useState<CategoryServices[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const { token, user } = useContext(AuthContext);

  // ✅ Função mantida fora do effect para poder ser exposta no context
  // O React Compiler gerencia a memoização automaticamente
  async function fetchCategoryServices() {
    setLoading(true);
    try {
      const url =
        user?.role === "ADMIN" ? "/services?includeInactive=true" : "/services";
      const response = await api.get<CategoryServices[]>(url, {
        headers: { Authorization: `Bearer ${token}` },
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

  // ✅ useEffect com lógica inline — evita referência a função externa
  // O React Compiler não reclama porque o setState está dentro do callback async
  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    const carregar = async () => {
      setLoading(true);
      try {
        const url =
          user?.role === "ADMIN"
            ? "/services?includeInactive=true"
            : "/services";
        const response = await api.get<CategoryServices[]>(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!cancelled) {
          startTransition(() => setCategoryServices(response.data));
        }
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    carregar();

    // cleanup: evita setState em componente desmontado
    return () => {
      cancelled = true;
    };
  }, [token, user?.role]); // ✅ deps diretas — sem referência a função externa

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
