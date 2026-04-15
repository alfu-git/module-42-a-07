import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="my-10 flex justify-center">
      <RingLoader color="#244D3F" />
    </div>
  );
};

export default Loading;
