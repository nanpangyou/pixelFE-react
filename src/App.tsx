import * as React from "react";
import { Navigate } from "react-router-dom";
import { useLocalStore } from "./store/useLocalStore";

export const App: React.FC = () => {
  const { isRead } = useLocalStore();
  if (isRead) {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/welcome/1" />;
  }
};
