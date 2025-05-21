import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function PrivateRoutes({ children }) {
  const { isAuthenticated } = useAuth();

  return <>{isAuthenticated() ? children : <Navigate to="/login" replace />}</>;
}

export default PrivateRoutes;
