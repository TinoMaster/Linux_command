import React from "react";

const links = [
  {
    name: "Primary",
    link: "/primary",
  },
  {
    name: "Secondary",
    link: "/secondary",
  },
];

export const Principal_Menu = () => {
  return (
    <div className="flex justify-between items-center w-full">
      {/* Logo */}
      <div className="">
        <div className="w-10 h-10 rounded-full bg-primary_detail shadow"></div>
      </div>
      {/* Options */}
      <div className="flex ">
        {links?.map((link) => (
          <p className="link mr-3">{link.name}</p>
        ))}
      </div>
    </div>
  );
};
