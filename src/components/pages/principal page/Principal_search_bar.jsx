import React from "react";
import { BiSearch } from "react-icons/bi";

export const Principal_Search_Bar = ({ scroll_pages_y }) => {
  return (
    <div
      className={`flex justify-center w-11/12 m-auto md:w-8/12 lg:w-full ${
        scroll_pages_y > 0 && "sticky top-0 z-10"
      } `}
    >
      <div
        className={`flex items-center w-full border-2 p-2 rounded-full focus-within:border-primary_detail/50 ${
          scroll_pages_y > 0 && "bg-gradient-to-bl from-primary to-secondary"
        }`}
      >
        <BiSearch className="text-2xl" />
        <input
          className={`w-full bg-transparent focus:outline-none pl-3`}
          type="text"
        />
      </div>
    </div>
  );
};
