import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
