import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../types/User";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadStoredData = () => {
      const storedUser = localStorage.getItem("@helpdesk:user");
      const storedToken = localStorage.getItem("@helpdesk:token");

      if (storedUser && storedToken) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
        } catch (error) {
          console.error("Erro ao carregar usuário:", error);
          localStorage.removeItem("@helpdesk:user");
          localStorage.removeItem("@helpdesk:token");
        }
      }
    };

    loadStoredData();
  }, []);

  function signIn({ token, user }: { token: string; user: User }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user));
    localStorage.setItem("@helpdesk:token", token);
    setUser(user);
    setToken(token);
  }

  function signOut() {
    localStorage.removeItem("@helpdesk:user");
    localStorage.removeItem("@helpdesk:token");
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
