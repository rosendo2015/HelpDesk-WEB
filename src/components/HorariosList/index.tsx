import { TagTime } from "../TagTime";
import XIcon from "../../assets/icons/x.svg?react";

type HorariosListProps = {
  horarios: string[];
};

export function HorariosList({ horarios }: HorariosListProps) {
  if (!horarios || horarios.length === 0) {
    return <TagTime disabled>Sem horários aqui...</TagTime>;
  }

  return (
    <>
      {/* Mobile */}
      <div className="flex gap-2 md:hidden">
        {horarios.slice(0, 1).map((hora, index) => (
          <TagTime key={index} name="horarios" value={hora} svg={XIcon}>
            {hora}
          </TagTime>
        ))}
        {horarios.length > 1 && (
          <TagTime disabled>+{horarios.length - 1}</TagTime>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-2">
        {horarios.slice(0, 4).map((hora, index) => (
          <TagTime key={index} name="horarios" value={hora} svg={XIcon}>
            {hora}
          </TagTime>
        ))}
        {horarios.length > 4 && (
          <TagTime disabled>+{horarios.length - 4}</TagTime>
        )}
      </div>
    </>
  );
}
