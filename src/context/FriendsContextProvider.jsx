import React, { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

const FriendsContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  const data = {
    friends,
    setFriends,
    loading,
  };
  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
