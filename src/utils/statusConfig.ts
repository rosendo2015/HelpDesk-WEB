import HelpIcon from "../assets/icons/circle-help.svg?react";
import CircleClockIcon from "../assets/icons/clock-2.svg?react";
import CheckIcon from "../assets/icons/circle-check-big.svg?react";

type TagVariant =
  | "danger"
  | "info"
  | "success"
  | "default"
  | "new"
  | null
  | undefined;

export function getStatusConfig(status: string): {
  variant: TagVariant;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
} {
  switch (status) {
    case "ABERTO":
      return { variant: "new", label: "Aberto", icon: HelpIcon };
    case "EM_ATENDIMENTO":
      return {
        variant: "info",
        label: "Em atendimento",
        icon: CircleClockIcon,
      };
    case "ENCERRADO":
      return { variant: "success", label: "Encerrado", icon: CheckIcon };
    default:
      return { variant: "default", label: status, icon: HelpIcon };
  }
}
