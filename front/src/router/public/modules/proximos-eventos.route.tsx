import ProximosEventos from "../../../pages/public/proximos-eventos/proximos-eventos.page";
import { Routes, Route } from "react-router-dom";

const ProximosEventosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProximosEventos />} />
    </Routes>
  );
};

export default ProximosEventosRoutes;
