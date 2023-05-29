import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorRouter } from "./routes/ErrorRouter";

const rootDiv = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello xxxxworld!
        <Outlet />
      </div>
    ),
    errorElement: <ErrorRouter />,
    children: [
      {
        path: "welcome",
        element: (
          <div>
            welcome <Outlet />
          </div>
        ),
        children: [
          { path: "1", element: <div>1</div> },
          { path: "2", element: <div>2</div> },
          { path: "3", element: <div>3</div> },
          { path: "4", element: <div>4</div> }
        ]
      }
    ]
  }
  // {
  //   // 404 强制跳转至 ‘/’
  //   path: "*",
  //   element: <Navigate to="/" replace />
  // }
]);

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
