import Perfil from "../../../pages/private/perfil/perfil.page";
import { Routes, Route } from "react-router-dom";

const BandasRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Perfil />} />
    </Routes>
  );
};

export default BandasRoutes;
