import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Layout</h2>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
