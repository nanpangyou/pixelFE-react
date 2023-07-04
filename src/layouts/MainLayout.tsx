import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  const isRead = false;
  if (isRead) {
    return <Navigate to="/home" />;
  } else {
    return <Outlet />;
  }
};
