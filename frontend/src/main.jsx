import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cardheros from "./components/cardheros/Cardheros";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      const count = window.innerWidth > 765 ? 8 : 4;
      return axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/superheros?limit=${count}`
        )
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
    children: [
      {
        path: "/",
        element: <Cardheros />,
        loader: () => {
          const count = window.innerWidth > 765 ? 8 : 4;
          return axios
            .get(
              `${
                import.meta.env.VITE_BACKEND_URL
              }/api/superheros?limit=${count}`
            )
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
