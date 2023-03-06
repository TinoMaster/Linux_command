import React from "react";
import { Route, Routes } from "react-router-dom";
import { Principal_Page } from "../principal page";

export const Container = () => {
  return (
    <div
      /* onScroll={(e) => console.log(e.target.scrollTop)} */
      className="w-full h-full overflow-auto"
    >
      <Routes>
        <Route path="/" element={<Principal_Page />} />
      </Routes>
    </div>
  );
};
