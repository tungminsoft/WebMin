import NavHomeRoute from "@/components/NavHomeRoute";
import ProtectedRoute from "@/components/ProtectedRoute";
import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";
import NotFound from "@/pages/NotFound";
import routes from "@/routes";
import { Fragment } from "react";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout =
          route.layout === undefined ? DefaultLayout : route.layout || NoLayout;
        const Component = route.component;
        const RouterWapper = route.protected
          ? ProtectedRoute
          : route.navHome
          ? NavHomeRoute
          : Fragment;

        return (
          <Route key={route.path} element={<Layout />}>
            <Route
              path={route.path}
              element={
                <RouterWapper>
                  <Component />
                </RouterWapper>
              }
            />
          </Route>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
