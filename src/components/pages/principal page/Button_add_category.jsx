import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export const Button_add_category = ({ addCategory }) => {
  return (
    <div className="w-full absolute bottom-0 flex justify-end ">
      <button
        onClick={() => addCategory(true)}
        className="p-3 mr-5 mb-3 rounded-full bg-primary_detail shadow-lg shadow-black/30 hover:cursor-pointer hover:bg-primary_detail/90 transition-all z-20"
      >
        <AiOutlineAppstoreAdd />
      </button>
    </div>
  );
};
