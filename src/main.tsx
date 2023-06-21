import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Timeframe } from "./components/Timeframe.tsx";
import { DateResult } from "./components/DateResult.tsx";
import { Avaliability } from "./components/Avaliability.tsx";
import { ConfirmDate } from "./components/ConfirmDate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
