import { Routes, Route } from "react-router-dom";
import QuienesSomos from "../../../pages/public/quienes-somos/quienes-somos.page";

const QuienesSomosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QuienesSomos />} />
    </Routes>
  );
};

export default QuienesSomosRoutes;
