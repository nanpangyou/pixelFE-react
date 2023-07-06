import { Navigate, createHashRouter } from "react-router-dom";
import { App } from "../App";
import { WelcomeLayout } from "../layouts/WelcomLayout";
import { BootPage1 } from "../components/guide/BootPage1";
import { BootPage2 } from "../components/guide/BootPage2";
import { BootPage3 } from "../components/guide/BootPage3";
import { BootPage4 } from "../components/guide/BootPage4";
import { StyleComponentDemo } from "../components/demo/StyleComponentDemo";
import { CssModuleDemo } from "../components/demo/CssModuleDemo";
import { UnocssDemo } from "../components/demo/UnocssDemo";
import { Home } from "../view/home";
// import { ErrorRouter } from "./ErrorRouter";

// Todo change hash to browser router
// createBrowserRouter,
export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    // 404错误处理不使用errorElement,而是暂时用<Navigate>
    // errorElement: <ErrorRouter />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <WelcomeLayout />,
    children: [
      { path: "1", element: <BootPage1 /> },
      { path: "2", element: <BootPage2 /> },
      { path: "3", element: <BootPage3 /> },
      { path: "4", element: <BootPage4 /> },
    ],
  },
  {
    path: "/style-component-demo",
    element: <StyleComponentDemo />,
  },
  {
    path: "/css-module-demo",
    element: <CssModuleDemo />,
  },
  {
    path: "/uno-demo",
    element: <UnocssDemo />,
  },
  {
    // 404 强制跳转至 ‘/’
    path: "*",
    element: <Navigate to="/welcome/1" replace />,
  },
]);
