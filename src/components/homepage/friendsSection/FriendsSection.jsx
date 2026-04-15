import React, { useContext } from "react";
import FriendCard from "./friendCard/FriendCard";
import Loading from "../../shared/loading/Loading";
import { FriendsContext } from "../../../context/FriendsContextProvider";

const FriendsSection = () => {
  const { friends, loading } = useContext(FriendsContext);

  return (
    <section className="mt-10 pb-20 container mx-auto px-5">
      <div>
        <div>
          <h2 className="mb-4 text-[#1F2937] text-2xl font-semibold">
            Your Friends
          </h2>

          {loading ? (
            <Loading />
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;
