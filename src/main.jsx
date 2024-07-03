import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import Form from "./pages/form/Form.jsx";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";

export const myRoute = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "form",
    path: "/form",
    element: <Form />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: myRoute,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
