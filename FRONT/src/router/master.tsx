import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateMiddleware, PublicMiddleware } from "../middleware";
import { Spinner } from "@heroui/react";
import {
  MemoizedNavbar,
  MemoizedFooter,
} from "../components/memoized-components";

// Mover los imports lazy fuera del componente para evitar recrearlos en cada render
const PrivateRoutes = lazy(() => import("./private/index.tsx"));
const PublicRoutes = lazy(() => import("./public/index.tsx"));

const master = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-950 via-red-950 to-black">
      <MemoizedNavbar />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center py-20">
              <Spinner color="danger" size="lg" aria-label="Cargando..." />
            </div>
          }
        >
          <Routes>
            <Route element={<PublicMiddleware />}>
              <Route index path="/*" Component={PublicRoutes} />
            </Route>
            <Route element={<PrivateMiddleware />}>
              <Route index path="/*" Component={PrivateRoutes} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <MemoizedFooter />
    </div>
  );
};

export default master;
