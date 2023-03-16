import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Principal_Page } from "../principal page";

export const Container = () => {
  const [scroll_pages_y, setScroll_pages_y] = useState(0);

  return (
    <div
      onScroll={(e) => setScroll_pages_y(e.target.scrollTop)}
      className="w-full h-full overflow-auto pb-10"
    >
      <Routes>
        <Route
          path="/"
          element={<Principal_Page scroll_pages_y={scroll_pages_y} />}
        />
      </Routes>
    </div>
  );
};
