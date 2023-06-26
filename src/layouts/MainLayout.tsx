import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Home } from "../view/home";

export const MainLayout: React.FC = () => {
  const nav = useNavigate();
  const isRead = true;
  if (isRead) {
    nav("/home");
    return;
  }
  return <Outlet />;
};
