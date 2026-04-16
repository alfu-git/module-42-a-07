import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { id, picture, name, days_since_contact, tags, status } = friend;

  const tagColors = {
    neighbor: "bg-blue-100 text-blue-700",
    local: "bg-sky-100 text-sky-700",
    "close friend": "bg-pink-100 text-pink-700",
    "old friend": "bg-purple-100 text-purple-700",
    buddy: "bg-indigo-100 text-indigo-700",
    friendly: "bg-emerald-100 text-emerald-700",
    school: "bg-yellow-100 text-yellow-800",
    college: "bg-orange-100 text-orange-700",
    senior: "bg-gray-200 text-gray-800",
    guider: "bg-teal-100 text-teal-700",
    teacher: "bg-red-100 text-red-700",
  };

  const formatStatus = (status) => {
    return status
      .split(" ")
      .map((word) =>
        word
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-"),
      )
      .join(" ");
  };

  return (
    <Link to={`friend/${id}`} className="p-6 bg-base-100 rounded-lg shadow">
      <div className=" flex flex-col justify-center items-center">
        <div className="mb-3 w-20 h-20 object-cover rounded-full">
          <figure>
            <img className="rounded-full h-20" src={picture} alt={name} />
          </figure>
        </div>

        <div className="text-center">
          <h3 className="mb-2 text-[#1F2937] text-xl font-semibold">{name}</h3>
          <span className="text-[#64748B] text-xs">
            {days_since_contact}d ago
          </span>

          <div className="mt-2 mb-3 flex gap-1 items-center justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`
                  py-1.5 px-2 rounded-full text-xs font-medium
                  ${tagColors[tag]}
                `}
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <span
            className={`
                  py-1.5 px-2 rounded-full text-base-100 text-xs font-medium 
                  ${
                    status === "overdue"
                      ? "bg-[#EF4444]"
                      : status === "almost due"
                        ? "bg-[#EFAD44]"
                        : "bg-[#244D3F]"
                  }
                `}
          >
            {formatStatus(status)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
