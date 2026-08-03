import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import "./index.css";

import { AuthProvider } from "./contexts/AuthProvider";
import { ServicesProvider } from "./contexts/CategoryServices/ServicesProvider";
import { ChamadosProvider } from "./contexts/Chamado/ChamadosProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ServicesProvider>
        <ChamadosProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ChamadosProvider>
      </ServicesProvider>
    </AuthProvider>
  </StrictMode>,
);
