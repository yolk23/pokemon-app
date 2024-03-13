import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokedex from "./Components/Pokedex";
import Home from "./Components/Home";
import Guess from "./Components/Guess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/Pokedex",
    element: <Pokedex />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/Guess",
    element: <Guess />,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
