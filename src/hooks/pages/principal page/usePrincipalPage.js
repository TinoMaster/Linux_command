import { useState } from "react";

export const usePrincipalPage = () => {
  /* states of button add */
  const [modal_add_category, setModal_add_category] = useState(false);
  const [new_category, setNew_category] = useState({});

  const funcModalCategory = (bolean) => {
    setModal_add_category(bolean);
  };

  const funcAddCategory = () => {
    
  };

  const states = { modal_add_category };
  const functions = { funcModalCategory };
  return { states, functions };
};
