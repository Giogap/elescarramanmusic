import Inicio from "../../../pages/public/inicio/inicio.page";
import { Routes, Route } from "react-router-dom";

const InicioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
};

export default InicioRoutes;
