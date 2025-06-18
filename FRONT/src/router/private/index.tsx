import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MisEventosRoutes = lazy(() => import("./modules/mis-eventos.route"));
const PerfilRoutes = lazy(() => import("./modules/perfil.route"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route index path="/mis-eventos/*" element={<MisEventosRoutes />} />
      <Route path="/perfil/*" element={<PerfilRoutes />} />
    </Routes>
  );
};

export default PrivateRoutes;
