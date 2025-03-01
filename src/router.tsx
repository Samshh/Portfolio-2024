import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/not-found";
import Layout from "./layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/404",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
]);

export default Router;
