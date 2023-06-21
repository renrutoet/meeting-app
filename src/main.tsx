import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Timeframe } from "./pages/Timeframe.tsx";
import { DateResult } from "./pages/DateResult.tsx";
import { Avaliability } from "./pages/Avaliability.tsx";
import { ConfirmDate } from "./pages/ConfirmDate.tsx";
import { Welcome } from "./pages/Welcome.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/timeframe",
    element: <Timeframe />,
  },
  {
    path: "/avaliability/:personIndex",
    element: <Avaliability />,
  },
  {
    path: "/result",
    element: <DateResult />,
  },
  {
    path: "/confirm",
    element: <ConfirmDate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
