import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import App from "./App.tsx";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <HeroUIProvider>
          <main className="dark text-foreground bg-background">
            <App />
          </main>
        </HeroUIProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
