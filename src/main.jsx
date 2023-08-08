/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import Providers, { UserContext } from "./Components/Providers.jsx";

// export const UserContext = React.createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
