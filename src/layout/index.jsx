import React from "react";
import { Principal_Menu } from "../components/principal menu";
import { Container } from "../pages/container";

export const Layout = () => {
  return (
    <div className="main_container font-inter w-screen h-screen bg-gradient-to-bl transition-all delay-300 from-primary to-secondary text-slate-200">
      <Principal_Menu />
      <Container />
    </div>
  );
};
