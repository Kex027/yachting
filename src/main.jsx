import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import { CssVarsProvider } from "@mui/joy";
import theme from "./theme.js";
import Pricing from "../pages/Pricing.jsx";
import BoatSpecification from "../pages/BoatSpecification.jsx";
import Reservation from "../pages/Reservation.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/reservation/",
        element: <Reservation />,
      },
      {
        path: "/pricing/",
        element: <Pricing />,
      },
      {
        path: "/boat_specification",
        element: <BoatSpecification />,
      },
      {
        path: "/contact/",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <RouterProvider router={router} />
    </CssVarsProvider>
  </React.StrictMode>,
);
