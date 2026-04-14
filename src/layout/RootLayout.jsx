import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-5 bg-[#F8FAFC]">
          <Outlet />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
