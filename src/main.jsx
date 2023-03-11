import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "./contexts/contextApi";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <App />
  </ApiProvider>
);
