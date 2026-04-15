import React from "react";

const EmptyHistoryState = () => {
  return (
    <section className="py-20 container mx-auto px-5">
      <div>
        <div className="py-20 bg-base-100 rounded-lg shadow-sm text-center">
          <p className="text-4xl text-zinc-400 font-bold">
            No History Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmptyHistoryState;
