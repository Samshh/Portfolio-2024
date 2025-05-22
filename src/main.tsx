import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./router.tsx";
import "./index.css";
import SVGGrainEffect from "./components/SVGGrainEffect.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SVGGrainEffect />
    <RouterProvider router={Router} />
  </React.StrictMode>
);
