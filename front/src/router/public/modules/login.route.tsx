import Login from "../../../pages/public/login/login.page";
import { Routes, Route } from "react-router-dom";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default LoginRoutes;
