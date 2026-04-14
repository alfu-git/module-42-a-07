import React from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="container mx-auto px-5 pt-20 pb-7.5 bg-[#244D3F]">
      <div>
        <div>
          <div className="mb-10 text-center">
            <h4 className="mb-4 text-5xl text-base-100 flex justify-center">
              <span className="font-bold">Keen</span>
              <span className="font-medium">Keeper</span>
            </h4>

            <p className="text-base-100 opacity-80">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>

            <div className="mt-6">
              <p className="mb-4 text-2xl text-base-100 font-medium">
                Social Links
              </p>

              <div className="flex gap-3 items-center justify-center">
                <Link
                  to="https://www.instagram.com/_alfaz_76/"
                  target="_blank"
                  className="p-2.5 rounded-full bg-base-100"
                >
                  <RiInstagramFill size={22} />
                </Link>

                <Link
                  to="https://www.facebook.com/m.a.faz.495430"
                  target="_blank"
                  className="p-2.5 rounded-full bg-base-100"
                >
                  <FaSquareFacebook size={20} />
                </Link>

                <Link to="/" className="p-2.5 rounded-full bg-base-100">
                  <FaXTwitter size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-7.5 border-t border-[#1A8862] text-[#FAFAFA] opacity-50 flex flex-col md:flex-row gap-y-4 justify-between items-center">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-4 sm:gap-7.5 items-center">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
