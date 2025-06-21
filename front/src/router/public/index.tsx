import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const InicioRoutes = lazy(() => import("./modules/inicio.route"));
const ProximosEventosRoutes = lazy(
  () => import("./modules/proximos-eventos.route")
);
const BandasRoutes = lazy(() => import("./modules/bandas.route"));
// const LoginRoutes = lazy(() => import("./modules/login.route"));
const ContactoRoutes = lazy(() => import("./modules/contacto.route"));
const QuienesSomosRoutes = lazy(() => import("./modules/quienes-somos.route"));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route index path="/inicio" element={<InicioRoutes />} />
      <Route
        index
        path="/proximos-eventos/*"
        element={<ProximosEventosRoutes />}
      />

      <Route path="/bandas/*" element={<BandasRoutes />} />
      <Route path="/contacto/*" element={<ContactoRoutes />} />
      <Route path="/quienes-somos/*" element={<QuienesSomosRoutes />} />

      {/* <Route path="/login/*" element={<LoginRoutes />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
