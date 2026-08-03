import { useState, useEffect, useContext } from "react";
import { ChamadosContext } from "./ChamadosContext";
import { api } from "../../services/api";
import type { Chamado, ChamadoPayload } from "./model/Chamado";
import { AuthContext } from "../AuthContext";

export function ChamadosProvider({ children }: { children: React.ReactNode }) {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  async function fetchChamados() {
    setLoading(true);
    try {
      const response = await api.get<Chamado[]>("/chamados", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChamados(response.data);
    } catch (error) {
      console.error("Erro ao buscar chamados:", error);
    } finally {
      setLoading(false);
    }
  }

  async function createChamado(dados: ChamadoPayload) {
    try {
      const response = await api.post("/chamados", dados, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChamados((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Erro ao criar chamado:", error);
    }
  }

  async function updateChamado(id: string, dados: ChamadoPayload) {
    try {
      const response = await api.patch(`/chamados/${id}`, dados, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChamados((prev) =>
        prev.map((c) => (c.id === id ? { ...c, ...response.data } : c)),
      );
    } catch (error) {
      console.error("Erro ao atualizar chamado:", error);
    }
  }

  function getChamadoById(id: string) {
    return chamados.find((c) => c.id === id);
  }

  useEffect(() => {
    if (!token) return;
    const carregaChamados = async () => {
      await fetchChamados();
    };
    carregaChamados();
  }, [token]);

  return (
    <ChamadosContext.Provider
      value={{
        chamados,
        loading,
        fetchChamados,
        getChamadoById,
        createChamado,
        updateChamado,
      }}
    >
      {children}
    </ChamadosContext.Provider>
  );
}
