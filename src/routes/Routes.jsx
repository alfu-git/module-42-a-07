import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import TimelinePage from "../pages/timelinePage/TimelinePage";
import StatsPage from "../pages/statsPage/StatsPage";
import FriendDetailsPage from "../pages/friendDetailsPage/FriendDetailsPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "friend/:id",
        element: <FriendDetailsPage />,
      },
      {
        path: "time-line-page",
        element: <TimelinePage />,
      },
      {
        path: "stats-page",
        element: <StatsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
