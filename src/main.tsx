import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/appRoutes";
import "./index.css";

import { AuthProvider } from "./contexts/AuthProvider";
import { ServicesProvider } from "./contexts/Servico/ServicesProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ServicesProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ServicesProvider>
    </AuthProvider>
  </StrictMode>,
);
