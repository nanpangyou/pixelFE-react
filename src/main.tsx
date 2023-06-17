import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "@unocss/reset/tailwind.css";
import "./config/css/variable.scss";
import "virtual:uno.css";

const rootDiv = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
