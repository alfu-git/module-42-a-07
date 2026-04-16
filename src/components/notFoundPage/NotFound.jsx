import { House } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (
    <section className="container mx-auto px-5 py-20">
      <div>
        <div className="flex flex-col gap-y-4 justify-center items-center text-center">
          <h6 className="text-[#244D3F] text-7xl font-bold">404</h6>

          <p className="text-[#244D3F] text-xl font-medium">Page Not Found</p>

          <p className="text-zinc-500 max-w-100">
            Looks like this friendship link is broken. The page you're looking
            for doesn't exist or has been moved.
          </p>

          <button
            onClick={returnHome}
            className="btn border-none shadow-none rounded-lg bg-[#244D3F] text-base-100 flex gap-2 items-center"
          >
            <span>
              <House />
            </span>
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
