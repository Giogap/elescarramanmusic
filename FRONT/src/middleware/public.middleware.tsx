import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import type { FC } from "react";
import type { Location } from "react-router-dom";

interface LocationState {
  from: Location;
}

const PublicMiddleware: FC = () => {
  const location = useLocation();
  const token = Cookies.get("Sb32&sF");

  if (token) {
    console.log("Token encontrado, redirigiendo a /eventos");
    return (
      <Navigate
        to="/proximos-eventos"
        state={{ from: location } as LocationState}
        replace
      />
    );
  }

  return <Outlet />;
};

export default PublicMiddleware;
