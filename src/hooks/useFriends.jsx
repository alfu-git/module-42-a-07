import React, { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    };

    fetchFriends();
  }, []);

  return { friends };
};

export default useFriends;
