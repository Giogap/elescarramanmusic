import { Routes, Route } from "react-router-dom";
import Contacto from "../../../pages/public/contacto/contacto.page";

const ContactoRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacto />} />
    </Routes>
  );
};

export default ContactoRoutes;
