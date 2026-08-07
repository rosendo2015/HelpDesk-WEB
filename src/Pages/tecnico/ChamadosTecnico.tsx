import { ChamadoCard } from "../../components/ChamadoCard";
import { Tags } from "../../components/Tags";
import { Text } from "../../components/Text";
import { useChamados } from "../../contexts/Chamado/hooks/useChamados";
import { getStatusConfig } from "../../utils/statusConfig";

export function ChamadosTecnico() {
  const { chamados, loading } = useChamados();

  const chamadosPorStatus = {
    EM_ATENDIMENTO: chamados.filter((c) => c.status === "EM_ATENDIMENTO"),
    ABERTO: chamados.filter((c) => c.status === "ABERTO"),
    ENCERRADO: chamados.filter((c) => c.status === "ENCERRADO"),
  };

  const renderChamados = (lista: typeof chamados) => (
    <div className="flex flex-wrap gap-3 mt-4">
      {lista.map((chamado) => (
        <ChamadoCard key={chamado.id} chamado={chamado} />
      ))}
    </div>
  );
  return (
    <div className="p-4 sm:p-6">
      <header className="mb-4">
        <Text variant="text-lg-bold" className="text-blue-dark">
          Meus chamados
        </Text>
      </header>
      {loading ? (
        <>{/*TODO:Criar o Skeleton*/}</>
      ) : (
        <>
          <section className="mb-8">
            <Tags
              variant={getStatusConfig("EM_ATENDIMENTO").variant}
              svg={getStatusConfig("EM_ATENDIMENTO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("EM_ATENDIMENTO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.EM_ATENDIMENTO)}
          </section>

          <section className="mb-8">
            <Tags
              variant={getStatusConfig("ABERTO").variant}
              svg={getStatusConfig("ABERTO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("ABERTO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.ABERTO)}
          </section>

          <section className="mb-8">
            <Tags
              variant={getStatusConfig("ENCERRADO").variant}
              svg={getStatusConfig("ENCERRADO").icon}
              className="mb-4 w-max"
            >
              {getStatusConfig("ENCERRADO").label}
            </Tags>
            {renderChamados(chamadosPorStatus.ENCERRADO)}
          </section>
        </>
      )}
    </div>
  );
}
