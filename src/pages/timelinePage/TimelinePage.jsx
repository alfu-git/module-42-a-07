import React, { useContext } from "react";
import TimelineHeader from "../../components/timelinePage/TimelineHeading";
import ConnectHistory from "../../components/timelinePage/ConnectHistory";
import { FriendsContext } from "../../context/FriendsContextProvider";
import EmptyHistoryState from "../../components/timelinePage/EmptyHistoryState";

const TimelinePage = () => {
  const { connectList } = useContext(FriendsContext);
  const isEmpty = connectList.length === 0;

  return (
    <div>
      {isEmpty ? (
        <EmptyHistoryState />
      ) : (
        <>
          <TimelineHeader />
          <ConnectHistory />
        </>
      )}
    </div>
  );
};

export default TimelinePage;
