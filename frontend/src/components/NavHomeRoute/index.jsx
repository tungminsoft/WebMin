import Loading from "@/components/Loading";
import config from "@/config";
import { UserContext } from "@/contexts/UserContext";
import useQuery from "@/hooks/useQuery";
import { useContext } from "react";
import { Navigate } from "react-router";

const NavHomeRoute = ({ children }) => {
  const query = useQuery();

  const { user, loading } = useContext(UserContext);
  if (loading) return <Loading />;

  if (user)
    return <Navigate to={query.get("continue") || config.routes.home} />;

  return children;
};

export default NavHomeRoute;
