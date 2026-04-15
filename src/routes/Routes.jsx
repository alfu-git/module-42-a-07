import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/homePage/HomePage';
import TimelinePage from '../pages/timelinePage/TimelinePage';
import StatsPage from '../pages/statsPage/StatsPage';
import FriendDetailsPage from '../pages/friendDetailsPage/FriendDetailsPage';

export let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/:id",
        element: <FriendDetailsPage />
      },
      {
        path: "time-line-page",
        element: <TimelinePage />
      },
      {
        path: "stats-page",
        element: <StatsPage />
      }
    ]
  }
])