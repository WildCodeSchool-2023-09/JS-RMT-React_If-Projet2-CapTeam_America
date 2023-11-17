import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CompleteCard from "./pages/CompleteCard";
import Cardheros from "./components/cardheros/Cardheros";
import Favoris from "./components/favoris/Favoris";
import ContactForm from "./components/contactForm/ContactForm";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cardheros />,
        loader: () => {
          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/superheros`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/favorites",
        element: <Favoris />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/superheros/:id",
        element: <CompleteCard />,
        loader: ({ params }) => {
          return axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/superheros/${params.id}`
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
