import { jwtDecode } from "jwt-decode";
import { type ReactNode, useCallback, useEffect, useState } from "react";
import type { Users } from "../contexts/User/model/users";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

interface DecodedToken {
  exp: number;
  sub: string;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<Users | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signOut = useCallback(() => {
    localStorage.removeItem("@helpdesk:user");
    localStorage.removeItem("@helpdesk:token");
    setUser(null);
    setToken(null);
    delete api.defaults.headers.common["Authorization"];
  }, []);

  useEffect(() => {
    const loadStoredData = () => {
      const storedUser = localStorage.getItem("@helpdesk:user");
      const storedToken = localStorage.getItem("@helpdesk:token");

      if (!storedUser || !storedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const decoded: DecodedToken = jwtDecode(storedToken);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          signOut();
          setIsLoading(false);
          return;
        }

        const parsedUser: Users = JSON.parse(storedUser);

        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

        setUser(parsedUser);
        setToken(storedToken);
      } catch (error) {
        console.error("Erro ao carregar dados de autenticação:", error);
        signOut();
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredData();
  }, [signOut]);

  function signIn({ token, user }: { token: string; user: Users }) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(user));
    localStorage.setItem("@helpdesk:token", token);
    setUser(user);
    setToken(token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  function updateUser(updatedUser: Users) {
    localStorage.setItem("@helpdesk:user", JSON.stringify(updatedUser));

    setUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{ user, token, signIn, signOut, updateUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
