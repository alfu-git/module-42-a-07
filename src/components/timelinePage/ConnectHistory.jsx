import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContextProvider";
import CallPng from "../../assets/call.png";
import TextPng from "../../assets/text.png";
import VideoPng from "../../assets/video.png";

const ConnectHistory = () => {
  const { connectList } = useContext(FriendsContext);
  console.log(connectList);

  return (
    <section className="mt-6 pb-20 container mx-auto px-5">
      <div>
        <div className="space-y-6">
          {connectList.map((list) => (
            <div
              key={list.id}
              className="p-4 bg-base-100 border border-[#E9E9E9] rounded-lg shadow flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <div className="flex justify-end sm:block">
                <img
                  src={`
                ${
                  list.connectType === "Call"
                    ? CallPng
                    : list.connectType === "Text"
                      ? TextPng
                      : VideoPng
                }
                  `}
                  alt={`${list.connectType} png`}
                />
              </div>

              <div>
                <p className="mb-1 flex gap-1 items-center">
                  <span className="text-[#244D3F] text-xl font-bold">
                    {list.connectType}
                  </span>

                  <span className="text-[#64748B] text-lg">
                    with {list.name}
                  </span>
                </p>

                <span className="text-[#64748B] font-medium">
                  {list.connectedAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectHistory;
