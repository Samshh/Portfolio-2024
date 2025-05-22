import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Layout from "./layout";
import Error from "./pages/error";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/404",
        element: <NotFound />,
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
]);

export default Router;
