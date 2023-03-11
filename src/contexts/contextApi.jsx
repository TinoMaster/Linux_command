import { createContext } from "react";

const ApiContext = createContext();
const ApiProvider = ({ children }) => {
  const states = {};
  const functions = {};

  const data = { states, functions };
  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export { ApiProvider };
export default ApiContext;
