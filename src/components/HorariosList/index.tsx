import { TagTime } from "../TagTime";

type HorariosListProps = {
  horarios: string[];
};

export function HoarariosList({ horarios }: HorariosListProps) {
  if (!horarios || horarios.length === 0) {
    return <TagTime>Sem horários aqui...</TagTime>;
  }

  return (
    <>
      {/**Mobile */}
      <div className=" flex gap-2 md:hidden">
        {horarios.slice(0, 1).map((hora, index) => (
          <TagTime key={index}>{hora}</TagTime>
        ))}
        {horarios.length > 1 && <TagTime>+{horarios.length - 1}</TagTime>}
      </div>

      {/**Desktop */}
      <div className="hidden md:flex gap-2">
        {horarios.slice(0, 4).map((hora, index) => (
          <TagTime key={index}>{hora}</TagTime>
        ))}
        {horarios.length > 4 && <TagTime>+{horarios.length - 4}</TagTime>}
      </div>
    </>
  );
}
