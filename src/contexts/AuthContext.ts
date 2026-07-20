import { createContext } from "react";
import type { Users } from "../contexts/User/model/users";

interface AuthContextData {
  user: Users | null;
  token: string | null;
  signIn: (data: { token: string; user: Users }) => void;
  signOut: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
