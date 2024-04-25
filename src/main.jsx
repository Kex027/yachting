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
    path: "/yachting/",
    element: <App />,
    children: [
      {
        path: "/yachting/",
        element: <MainPage />,
      },
      {
        path: "/yachting/reservation/",
        element: <Reservation />,
      },
      {
        path: "/yachting/pricing/",
        element: <Pricing />,
      },
      {
        path: "/yachting/boat_specification",
        element: <BoatSpecification />,
      },
      {
        path: "/yachting/contact/",
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
