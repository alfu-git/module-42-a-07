import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import Loading from "../shared/loading/Loading";
import { FriendsContext } from "../../context/FriendsContextProvider";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, setFriends, loading, handleConnectBtn } =
    useContext(FriendsContext);
  const navigate = useNavigate();

  const expectedFriend = friends.find((frd) => frd.id === Number(id)) || {};

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;

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
      ?.split(" ")
      ?.map((word) =>
        word
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-"),
      )
      ?.join(" ");
  };

  const handleDeleteBtn = (expectedFriend) => {
    const filterFriend = friends.filter(
      (frd) => frd.id !== Number(expectedFriend.id),
    );
    setFriends(filterFriend);

    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-20 container mx-auto px-5">
      <div>
        <div className="flex flex-col xl:flex-row items-center gap-x-6 gap-y-10">
          <div className="xl:max-w-100">
            <div className="mb-4 p-6 bg-base-100 rounded-lg shadow">
              <div className=" flex flex-col justify-center items-center">
                <div className="mb-3 w-20 h-20 object-cover rounded-full">
                  <figure>
                    <img
                      className="rounded-full h-20"
                      src={picture}
                      alt={name}
                    />
                  </figure>
                </div>

                <div className="text-center">
                  <h3 className="mb-2 text-[#1F2937] text-xl font-semibold">
                    {name}
                  </h3>

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

                  <div className="mt-3.5 mb-3 flex gap-1 items-center justify-center">
                    {tags?.map((tag, index) => (
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

                  <p className="mb-3 text-[#64748B] font-medium">
                    <em>"{bio}"</em>
                  </p>

                  <p className="text-[#64748B] text-sm">
                    <span>Preferred: </span>
                    <a href={`mailto:${email}`} target="_blank">
                      {email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 font-medium">
              <p className="py-4 bg-base-100 border border-[#E9E9E9] rounded-sm text-[#1F2937] flex gap-2 justify-center items-center">
                <RiNotificationSnoozeLine size={20} />{" "}
                <span>Snooze 2 weeks</span>
              </p>

              <button className="btn shadow-none bg-base-100 border-[#E9E9E9] w-full h-13 text-[#1F2937] flex gap-2 justify-center items-center">
                <FiArchive size={20} />
                Archive
              </button>

              <button
                onClick={() => handleDeleteBtn(expectedFriend)}
                className="btn shadow-none bg-base-100 border-[#E9E9E9] w-full h-13 text-[#EF4444] flex gap-2 justify-center items-center"
              >
                <FaRegTrashAlt size={20} />
                Delete
              </button>
            </div>
          </div>

          <div className="space-y-6 w-full">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="p-8 bg-base-100 rounded-lg shadow flex flex-col justify-center items-center">
                <span className="mb-2 text-[#244D3F] text-[30px] font-semibold">
                  {days_since_contact}
                </span>

                <span className="text-[#64748B] text-lg">
                  Days Since Contact
                </span>
              </div>

              <div className="flex-1 p-8 bg-base-100 rounded-lg shadow flex flex-col justify-center items-center">
                <span className="mb-2 text-[#244D3F] text-[30px] font-semibold">
                  {goal}
                </span>
                <span className="text-[#64748B] text-lg">Goal (Days)</span>
              </div>

              <div className="p-8 bg-base-100 rounded-lg shadow flex flex-col justify-center items-center">
                <span className="mb-2 text-[#244D3F] text-[30px] font-semibold">
                  {next_due_date}
                </span>
                <span className="text-[#64748B] text-lg">Next Due</span>
              </div>
            </div>

            <div className="p-8 bg-base-100 rounded-lg shadow">
              <div className="mb-4 flex flex-col-reverse gap-y-2 sm:flex-row sm:justify-between sm:items-center">
                <span className="text-[#244D3F] text-xl font-bold">
                  Relationship Goal
                </span>

                <button className="btn py-0 shadow-none w-15 sm:w-auto h-8 text-[#1F2937] text-sm font-medium">
                  Edit
                </button>
              </div>

              <p className="text-lg">
                <span className="text-[#64748B]">Connect every </span>
                <span className="text-[#1F2937] font-bold">{goal} days</span>
              </p>
            </div>

            <div className="p-8 bg-base-100 rounded-lg shadow">
              <p className="mb-4 text-[#244D3F] text-xl font-medium">
                Quick Check-In
              </p>

              <div className="flex flex-col lg:flex-row gap-4">
                <button
                  onClick={() => handleConnectBtn(expectedFriend, "call")}
                  className="flex-1 btn py-4 px-23 h-23.75 bg-[#F8FAFC] border-[#E9E9E9] rounded-lg text-[#1F2937] text-lg flex flex-col gap-2 justify-center items-center"
                >
                  <span>
                    <PhoneCall size={32} />
                  </span>
                  <span>Call</span>
                </button>

                <button
                  onClick={() => handleConnectBtn(expectedFriend, "text")}
                  className="flex-1 btn py-4 px-23 h-23.75 bg-[#F8FAFC] border-[#E9E9E9] rounded-lg text-[#1F2937] text-lg flex flex-col gap-2 justify-center items-center"
                >
                  <span>
                    <MessageSquareMore size={32} />
                  </span>
                  <span>Text</span>
                </button>

                <button
                  onClick={() => handleConnectBtn(expectedFriend, "video")}
                  className="flex-1 btn py-4 px-23 h-23.75 bg-[#F8FAFC] border-[#E9E9E9] rounded-lg text-[#1F2937] text-lg flex flex-col gap-2 justify-center items-center"
                >
                  <span>
                    <Video size={32} />
                  </span>
                  <span>Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
