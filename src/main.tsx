import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Timeframe } from "./pages/Timeframe.tsx";
import { DateResult } from "./pages/DateResult.tsx";
import { Avaliability } from "./pages/Avaliability.tsx";
import { ConfirmDate } from "./pages/ConfirmDate.tsx";
import { Welcome } from "./pages/Welcome.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  AvaliabilityContext,
  AvaliabilityDispatchContext,
  avaliabilityReducer,
  initialAvaliablilty,
} from "./contexts/AvaliabilityContext.tsx";

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

const App = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(
    avaliabilityReducer,
    initialAvaliablilty
  );

  return (
    <AvaliabilityContext.Provider value={state}>
      <AvaliabilityDispatchContext.Provider value={dispatch}>
        {children}
      </AvaliabilityDispatchContext.Provider>
    </AvaliabilityContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App>
        <RouterProvider router={router} />
      </App>
    </LocalizationProvider>
  </React.StrictMode>
);
