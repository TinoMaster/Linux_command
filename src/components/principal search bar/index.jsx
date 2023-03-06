import React from "react";

export const Principal_Search_Bar = () => {
  return (
    <div className={`flex justify-center container sticky top-0 z-10`}>
      <div className="flex w-full border-2 p-2 rounded-full">
        <p className="w-5">l</p>
        <input
          className="w-full bg-transparent focus:outline-none"
          type="text"
        />
      </div>
    </div>
  );
};
