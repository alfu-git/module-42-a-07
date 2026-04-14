import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="bg-[#F8FAFC] flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
