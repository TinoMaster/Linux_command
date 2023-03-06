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
    <div className="flex justify-between items-center w-full p-2 shadow rounded-md">
      {/* Logo */}
      <div className="">
        <div className="w-10 h-10 rounded-full bg-primary_detail shadow"></div>
      </div>
      {/* Options */}
      <div className="flex ">
        {links?.map((link) => (
          <p key={link.name} className="link mr-3">
            {link.name}
          </p>
        ))}
      </div>
    </div>
  );
};
