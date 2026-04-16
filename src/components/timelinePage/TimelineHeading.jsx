import { ChevronDown } from "lucide-react";
import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContextProvider";

const TimelineHeading = () => {
  const { sortTypeText, handleSortBtn } = useContext(FriendsContext);

  return (
    <section className="pt-20 container mx-auto px-5">
      <div>
        <div>
          <h2 className="pb-6 text-[#1F2937] text-5xl font-bold">Timeline</h2>

          <div className="dropdown dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 flex sm:gap-30 items-center text-[#64748B]"
            >
              <span>{sortTypeText}</span>
              <span>
                <ChevronDown size={20} />
              </span>
            </div>

            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleSortBtn("Call")}>
                <a>Call</a>
              </li>

              <li onClick={() => handleSortBtn("Text")}>
                <a>Text</a>
              </li>

              <li onClick={() => handleSortBtn("Video")}>
                <a>Video</a>
              </li>

              <li onClick={() => handleSortBtn("Date")}>
                <a>Date</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineHeading;
