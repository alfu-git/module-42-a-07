import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import ScrollToTop from "../components/shared/scrollToTop/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <section className="bg-[#F8FAFC]">
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
