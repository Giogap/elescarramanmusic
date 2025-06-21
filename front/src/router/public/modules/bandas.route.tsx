import Bandas from "../../../pages/public/bandas/bandas.page";
import { Routes, Route } from "react-router-dom";

const BandasRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Bandas />} />
    </Routes>
  );
};

export default BandasRoutes;
