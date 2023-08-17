import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Project from "./containers/Project.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./sass/main.scss";
import AppProvider from "./context/AppContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:projectId",
    element: <Project />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
