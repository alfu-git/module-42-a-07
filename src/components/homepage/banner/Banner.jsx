import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 pt-20">
      <div>
        <div className="pb-20 border-b border-[#E9E9E9]">
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-5xl font-bold text-[#1F2937]">
                Friends to keep close in your life
              </h1>
              <p className="text-[#64748B] max-w-150 mx-auto">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
            </div>

            <div>
              <button className="btn px-4 h-11 bg-[#244D3F] rounded-sm text-base-100 font-semibold flex gap-1 items-center">
                <span>
                  <Plus size={16} />
                </span>
                <span>Add a Friend</span>
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <div className="p-8 bg-base-100 rounded-lg shadow text-center">
              <span className="text-[32px] font-semibold text-[#244D3F] flex flex-col gap-y-2 items-center justify-center">
                10
              </span>
              <span className="text-lg text-[#64748B]">Total Friends</span>
            </div>

            <div className="p-8 bg-base-100 rounded-lg shadow text-center flex flex-col gap-y-2 items-center justify-center">
              <span className="text-[32px] font-semibold text-[#244D3F]">
                3
              </span>
              <span className="text-lg text-[#64748B]">On Track</span>
            </div>

            <div className="p-8 bg-base-100 rounded-lg shadow text-center flex flex-col gap-y-2 items-center justify-center">
              <span className="text-[32px] font-semibold text-[#244D3F]">
                6
              </span>
              <span className="text-lg text-[#64748B]">Need Attention</span>
            </div>

            <div className="p-8 bg-base-100 rounded-lg shadow text-center flex flex-col gap-y-2 items-center justify-center">
              <span className="text-[32px] font-semibold text-[#244D3F]">
                12
              </span>
              <span className="text-lg text-[#64748B]">
                Interactions This Month
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
