import { createContext } from "react";
import type { CategoryServices } from "./model/categoryServices";

interface CategoryServicesContextType {
  categoryServices: CategoryServices[];
  loading: boolean;
  fetchCategoryServices: () => Promise<void>;
  createServico: (
    dados: Pick<CategoryServices, "name" | "price" | "active">,
  ) => Promise<void>;
  updateServico: (
    id: string,
    dados: Partial<CategoryServices>,
  ) => Promise<void>;
  deleteServico: (id: string) => Promise<void>;
}

export const ServicesContext =
  createContext<CategoryServicesContextType | null>(null);
