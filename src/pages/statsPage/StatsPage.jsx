import React, { useContext } from "react";
import Analytics from "../../components/statsPage/analytics/Analytics";
import { FriendsContext } from "../../context/FriendsContextProvider";
import EmptyState from "../../components/shared/emptyState/EmptyState";

const StatsPage = () => {
  const { connectList } = useContext(FriendsContext);

  return (
    <div>
      {connectList.length === 0 ? (
        <EmptyState text={"Analytics"} />
      ) : (
        <Analytics />
      )}
    </div>
  );
};

export default StatsPage;
