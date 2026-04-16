import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FriendsContext = createContext();

const FriendsContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connectList, setConnectList] = useState([]);
  const [sortTypeText, setSortTypeText] = useState("Filter timeline");

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  const handleConnectBtn = (friend, connectType) => {

    setConnectList([
      ...connectList,
      { ...friend, connectType, connectedAt: new Date() },
    ]);

    toast(
      <p className="bg-linear-to-r from-blue-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent font-bold text-lg">
        {connectType} with {friend.name}
      </p>,
    );
  };

  const handleSortBtn = (sortType) => {
    setSortTypeText(sortType);
  };

  const data = {
    friends,
    setFriends,
    loading,
    connectList,
    setConnectList,
    handleConnectBtn,
    sortTypeText,
    handleSortBtn,
  };

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
