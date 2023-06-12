import { Navigate, createHashRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { WelcomeLayout } from "../layouts/WelcomLayout";
import { BootPage1 } from "../components/guide/BootPage1";
import { BootPage2 } from "../components/guide/BootPage2";
import { BootPage3 } from "../components/guide/BootPage3";
import { BootPage4 } from "../components/guide/BootPage4";
// import { ErrorRouter } from "./ErrorRouter";

// Todo change hash to browser router
// createBrowserRouter,
export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    // 404错误处理不使用errorElement,而是暂时用<Navigate>
    // errorElement: <ErrorRouter />,
    children: [
      {
        path: "welcome",
        element: <WelcomeLayout />,
        children: [
          { path: "1", element: <BootPage1 /> },
          { path: "2", element: <BootPage2 /> },
          { path: "3", element: <BootPage3 /> },
          { path: "4", element: <BootPage4 /> }
        ]
      }
    ]
  },
  {
    // 404 强制跳转至 ‘/’
    path: "*",
    element: <Navigate to="/welcome/1" replace />
  }
]);