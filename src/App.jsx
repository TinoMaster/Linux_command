import React from "react";
import { Principal_Menu } from "./components/principal menu";
import { Principal_Search_Bar } from "./components/principal search bar";
import { Principal_Page } from "./pages/principal page";

function App() {
  return (
    <div className="main_container font-inter w-screen h-screen bg-gradient-to-bl transition-all delay-300 from-primary to-secondary text-slate-200">
       <Principal_Menu /> 
       <Principal_Search_Bar />
       <Principal_Page />
    </div>
  );
}

export default App;
