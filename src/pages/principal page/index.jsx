import React from "react";

const links = [
  {
    name: "first",
    link: "/first",
    color: "#ffffff",
  },
  {
    name: "second",
    link: "/second",
    color: "#000000",
  },
];

export const Principal_Page = () => {
  return (
    <div className="container">
      {links?.map((category) => (
        <div /* style={{ background: category.color }} */ className="flex flex-col w-5/12 h-[180px] bg-gradient-to-bl from-secondary to-primary rounded-md shadow-lg">
          <div className="h-full"></div>
          <h3 className="w-full text-center py-1 font-semibold">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};
