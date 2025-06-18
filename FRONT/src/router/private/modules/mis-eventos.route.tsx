import MisEventos from "../../../pages/private/mis-eventos/mis-eventos.page";
import { Routes, Route } from "react-router-dom";

const MisEventosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MisEventos />} />
    </Routes>
  );
};

export default MisEventosRoutes;
