import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Otp from "./components/Home/Otp.jsx";
import ForgetPassword from "./components/Home/ForgetPassword.jsx";
import Registration from "./components/Registration/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/otp/:email",
        element: <Otp />,
      },
      {
        path: '/forgetPassword',
        element: <ForgetPassword />
      },
      {
        path: '/registration',
        element: <Registration />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
