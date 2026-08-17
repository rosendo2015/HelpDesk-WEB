import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SignUp } from "../Pages/SignUp";

vi.mock("../services/api", () => ({
  api: {
    get: vi.fn().mockResolvedValue({ data: { status: "ok" } }),
    post: vi.fn().mockResolvedValue({ data: {} }),
  },
}));

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
const confirmMock = vi.spyOn(window, "confirm").mockImplementation(() => false);

describe("SignUp", () => {
  beforeEach(() => {
    alertMock.mockClear();
    confirmMock.mockClear();
  });

  it("renderiza o formulário de cadastro", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );
    expect(
      screen.getByPlaceholderText(/digite o nome completo/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/exemplo@email.com/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite sua senha/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cadastrar/i }),
    ).toBeInTheDocument();
  });

  it("mostra alerta quando o nome está vazio", async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "senha123",
    );

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/informe o nome/i),
      );
    });
  });

  it("mostra alerta quando a senha é curta", async () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/digite o nome completo/i),
      "João Silva",
    );
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "teste@email.com",
    );
    await user.type(screen.getByPlaceholderText(/digite sua senha/i), "123");

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringMatching(/senha deve ter pelo menos/i),
      );
    });
  });

  it("chama api.post ao submeter com dados válidos", async () => {
    const { api } = await import("../services/api");
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /cadastrar/i }),
      ).not.toBeDisabled();
    });

    const user = userEvent.setup();
    await user.type(
      screen.getByPlaceholderText(/digite o nome completo/i),
      "João Silva",
    );
    await user.type(
      screen.getByPlaceholderText(/exemplo@email.com/i),
      "joao@email.com",
    );
    await user.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "senha123",
    );

    fireEvent.submit(
      screen.getByRole("button", { name: /cadastrar/i }).closest("form")!,
    );

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith(
        "/users",
        expect.objectContaining({
          name: "João Silva",
          email: "joao@email.com",
          password: "senha123",
          role: "CLIENTE",
        }),
      );
    });
  });
});
