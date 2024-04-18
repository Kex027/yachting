import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import Contact from "../pages/Contact.jsx";
import { CssVarsProvider } from "@mui/joy";
import theme from "./theme.js";

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
