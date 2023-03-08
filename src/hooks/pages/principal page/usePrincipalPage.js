import { useState } from "react";

export const usePrincipalPage = () => {
  /* states of button add */
  const [modal_add_category, setModal_add_category] = useState(false);

  const funcAddCategory = (bolean) => {
    setModal_add_category(bolean);
  };

  const states = { modal_add_category };
  const functions = { funcAddCategory };
  return { states, functions };
};
