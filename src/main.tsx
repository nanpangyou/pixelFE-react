import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const rootDiv = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
