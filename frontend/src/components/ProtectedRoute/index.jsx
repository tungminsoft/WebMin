import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "@/components/Loading";
import { UserContext } from "@/contexts/UserContext";
import config from "@/config";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(UserContext);
  if (loading) return <Loading />;
  
  if (!user)
    return (
      <Navigate
        to={`${config.routes.login}?continue=${encodeURIComponent(
          location.pathname
        )}`}
      />
    );

  return children;
};

export default ProtectedRoute;
