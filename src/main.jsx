import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import FriendsContextProvider from "./context/FriendsContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsContextProvider>
      <RouterProvider router={router} />
    </FriendsContextProvider>
  </StrictMode>,
);
