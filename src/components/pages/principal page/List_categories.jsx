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
  {
    name: "third",
    link: "/second",
    color: "#000000",
  },
  {
    name: "forth",
    link: "/second",
    color: "#000000",
  },
  {
    name: "fifth",
    link: "/second",
    color: "#000000",
  },
  {
    name: "sixth",
    link: "/second",
    color: "#000000",
  },
  {
    name: "seventh",
    link: "/second",
    color: "#000000",
  },
];

export const List_categories = () => {
  return (
    <div className="w-full flex flex-wrap justify-around overflow-auto relative">
      {links?.map((category) => (
        <div
          key={category.name}
          className="flex flex-col my-2 w-5/12 h-[180px] bg-gradient-to-bl from-secondary to-primary rounded-md shadow-lg"
        >
          <div className="h-full bg-white/5 rounded-md"></div>
          <h3 className="w-full text-center text-primary_detail font-serif py-1 font-semibold">
            {category.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
