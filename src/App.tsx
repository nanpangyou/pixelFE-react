import * as React from "react";
import { Navigate } from "react-router-dom";

export const App: React.FC = () => {
  const isRead = localStorage.getItem("isRead") === "yes";
  if (isRead) {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/welcome/1" />;
  }
};
