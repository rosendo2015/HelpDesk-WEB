import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { SignIn } from "../Pages/SignIn";

vi.mock("../hooks/useAuth", () => ({
  useAuth: () => ({
    signIn: vi.fn(),
    isLoading: false,
  }),
}));

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn().mockResolvedValue({ data: { status: "ok" } }),
    post: vi.fn(),
  },
}));

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

describe("SignIn", () => {
  beforeEach(() => {
    alertMock.mockClear();
  });

  it("renderiza o formulário de login", () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>,
    );
    expect(
      screen.getByPlaceholderText(/exemplo@email.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite sua senha/i),
    ).toBeInTheDocument();
  });

  it("mostra alerta ao submeter com senha curta", async () => {
    render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    // Aguarda botão habilitar
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /enviar/i }),
      ).not.toBeDisabled();
    });

    // Email válido + senha curta — jsdom não bloqueia, Zod rejeita a senha
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), "123");

    // Submete o form diretamente para contornar validação nativa HTML
    fireEvent.submit(
      screen.getByRole("button", { name: /enviar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/senha deve ter pelo menos/i),
      );
    });
  });
});
