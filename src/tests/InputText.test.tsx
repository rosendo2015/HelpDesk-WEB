import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { InputText } from "../components/InputText";

describe("InputText", () => {
  it("renderiza o input na tela", () => {
    render(<InputText />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renderiza com label visível", () => {
    render(<InputText label="E-MAIL" />);
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument();
  });

  it("renderiza com placeholder", () => {
    render(<InputText placeholder="Digite seu email" />);
    expect(
      screen.getByPlaceholderText(/digite seu email/i),
    ).toBeInTheDocument();
  });

  it("aceita digitação do usuário", async () => {
    render(<InputText placeholder="Digite algo" />);
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/digite algo/i);

    await user.type(input, "texto de teste");

    expect(input).toHaveValue("texto de teste");
  });

  it("renderiza o helperText quando passado", () => {
    render(<InputText helperText="Campo obrigatório" />);
    expect(screen.getByText(/campo obrigatório/i)).toBeInTheDocument();
  });

  it("renderiza o helperText em vermelho quando error=true", () => {
    render(<InputText helperText="Campo inválido" error={true} />);
    const helper = screen.getByText(/campo inválido/i);
    expect(helper.className).toContain("text-red");
  });

  it("chama onChange ao digitar", async () => {
    const handleChange = vi.fn();
    render(<InputText placeholder="Digite algo" onChange={handleChange} />);

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/digite algo/i), "abc");

    expect(handleChange).toHaveBeenCalled();
  });
});
