import { ChartLine, Clock3, House } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn shadow-none border-none bg-[#244D3F] rounded-sm px-3 h-9 text-base-100 font-semibold"
              : "px-3 h-9 flex gap-1 items-center text-[#64748B] font-medium"
          }
        >
          <House size={20} /> <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/time-line-page"
          className={({ isActive }) =>
            isActive
              ? "btn shadow-none border-none bg-[#244D3F] rounded-sm px-3 h-9 text-base-100 font-semibold"
              : "px-3 h-9 flex gap-1 items-center text-[#64748B] font-medium"
          }
        >
          <Clock3 size={20} /> Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to="stats-page"
          className={({ isActive }) =>
            isActive
              ? "btn shadow-none border-none bg-[#244D3F] rounded-sm px-3 h-9 text-base-100 font-semibold"
              : "px-3 h-9 flex gap-1 items-center text-[#64748B] font-medium"
          }
        >
          <ChartLine size={20} /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <section className="container mx-auto px-5 border-b border-[#E9E9E9]">
      <div>
        <div className="navbar bg-base-100 py-4 flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-1"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? " bg-[#244D3F] rounded-sm px-3 text-base-100 font-semibold"
                        : "px-3 text-[#64748B] font-medium"
                    }
                  >
                    <House size={20} /> <span>Home</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/time-line-page"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#244D3F] rounded-sm px-3 text-base-100 font-semibold"
                        : "px-3 flex gap-1 items-center text-[#64748B] font-medium"
                    }
                  >
                    <Clock3 size={20} /> Timeline
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="stats-page"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#244D3F] rounded-sm px-3 text-base-100 font-semibold"
                        : "px-3 flex gap-1 text-[#64748B] font-medium"
                    }
                  >
                    <ChartLine size={20} /> Stats
                  </NavLink>
                </li>
              </ul>
            </div>

            <Link to="/" className="text-2xl font-semibold">
              <span className="text-[#1F2937]">Keen</span>
              <span className="text-[#244D3F]">Keeper</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className=" flex items-center">{links}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
