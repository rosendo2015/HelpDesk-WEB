import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "../components/Text";

describe("Text", () => {
  it("renderiza o texto passado como children", () => {
    render(<Text>Olá mundo</Text>);
    expect(screen.getByText(/olá mundo/i)).toBeInTheDocument();
  });

  it("renderiza como span por padrão", () => {
    render(<Text>Texto padrão</Text>);
    const el = screen.getByText(/texto padrão/i);
    expect(el.tagName).toBe("SPAN");
  });

  it("renderiza como h1 quando as='h1'", () => {
    render(<Text as="h1">Título</Text>);
    const el = screen.getByText(/título/i);
    expect(el.tagName).toBe("H1");
  });

  it("aplica classe font-bold na variante text-lg-bold", () => {
    render(<Text variant="text-lg-bold">Negrito</Text>);
    const el = screen.getByText(/negrito/i);
    expect(el.className).toContain("font-bold");
  });

  it("aplica classe font-normal na variante text-sm-regular", () => {
    render(<Text variant="text-sm-regular">Normal</Text>);
    const el = screen.getByText(/normal/i);
    expect(el.className).toContain("font-normal");
  });

  it("aplica classe text-xs na variante text-xs-bold", () => {
    render(<Text variant="text-xs-bold">Pequeno</Text>);
    const el = screen.getByText(/pequeno/i);
    expect(el.className).toContain("text-xs");
  });

  it("aplica className extra quando passado", () => {
    render(<Text className="text-red-500">Vermelho</Text>);
    const el = screen.getByText(/vermelho/i);
    expect(el.className).toContain("text-red-500");
  });

  it("renderiza como p quando as='p'", () => {
    render(<Text as="p">Parágrafo</Text>);
    const el = screen.getByText(/parágrafo/i);
    expect(el.tagName).toBe("P");
  });
});
