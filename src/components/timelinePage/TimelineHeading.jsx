import { ChevronDown } from "lucide-react";
import React from "react";

const TimelineHeading = () => {
  return (
    <section className="pt-20 container mx-auto px-5">
      <div>
        <div>
          <h2 className="pb-6 text-[#1F2937] text-5xl font-bold">Timeline</h2>

          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1 flex gap-30 items-center text-[#64748B]">
              <span>Filter timeline</span>
              <span><ChevronDown size={20} /></span>
            </div>
            
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Call</a>
              </li>

              <li>
                <a>Text</a>
              </li>

              <li>
                <a>Video</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineHeading;
