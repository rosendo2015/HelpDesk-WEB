import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { PrivateRoute } from "../routes/PrivateRoute";

vi.mock("../hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "../hooks/useAuth";

const mockUseAuth = vi.mocked(useAuth);

const mockUser = {
  id: "1",
  name: "Teste",
  email: "teste@email.com",
  password: "",
  avatarUrl: "",
  role: "CLIENTE" as const,
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
  disponibilidades: [],
};

function PaginaProtegida() {
  return <div>Conteúdo protegido</div>;
}

function PaginaLogin() {
  return <div>Página de login</div>;
}

function renderPrivateRoute(roles?: string[]) {
  return render(
    <MemoryRouter initialEntries={["/protegido"]}>
      <Routes>
        <Route path="/login" element={<PaginaLogin />} />
        <Route
          path="/protegido"
          element={
            <PrivateRoute roles={roles}>
              <PaginaProtegida />
            </PrivateRoute>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PrivateRoute", () => {
  it("mostra loading enquanto está carregando", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      isLoading: true,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });
    renderPrivateRoute();

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it("redireciona para /login quando não há usuário", () => {
    mockUseAuth.mockReturnValue({
      user: null,
      token: null,
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    renderPrivateRoute();

    expect(screen.getByText(/página de login/i)).toBeInTheDocument();
    expect(screen.queryByText(/conteúdo protegido/i)).not.toBeInTheDocument();
  });

  it("renderiza o conteúdo quando usuário está autenticado", () => {
    mockUseAuth.mockReturnValue({
      user: mockUser,
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });
    renderPrivateRoute();

    expect(screen.getByText(/conteúdo protegido/i)).toBeInTheDocument();
  });

  it("redireciona quando usuário não tem o role exigido", () => {
    mockUseAuth.mockReturnValue({
      user: mockUser, // role: "CLIENTE"
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    // Rota exige ADMIN mas usuário é CLIENTE
    renderPrivateRoute(["ADMIN"]);

    expect(screen.getByText(/página de login/i)).toBeInTheDocument();
    expect(screen.queryByText(/conteúdo protegido/i)).not.toBeInTheDocument();
  });

  it("renderiza quando usuário tem o role exigido", () => {
    mockUseAuth.mockReturnValue({
      user: { ...mockUser, role: "ADMIN" as const },
      token: "abc",
      isLoading: false,
      signIn: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    });

    // Rota exige ADMIN e usuário é ADMIN
    renderPrivateRoute(["ADMIN"]);

    expect(screen.getByText(/conteúdo protegido/i)).toBeInTheDocument();
  });
});
