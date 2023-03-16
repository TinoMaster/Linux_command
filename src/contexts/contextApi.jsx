import { createContext, useEffect, useState } from "react";
import { apiConfig } from "../config/api.config";
import { httpHelper } from "../helpers/http-helper";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  /* categories states */
  const [categories, setCategories] = useState([]);
  const [category_errors, setCategory_errors] = useState({});
  const [category_loader, setCategory_loader] = useState(false);
  const [render_categories, setRender_categories] = useState(false);

  useEffect(() => {
    setCategory_loader(true);
    httpHelper()
      .get(`${apiConfig.host}/${apiConfig.api}/${apiConfig.categories}`)
      .then((res) => {
        setCategory_loader(false);
        if (res.error) {
          setCategories([]);
          setCategory_errors(res);
        } else if (res.success) {
          setCategories({});
          setCategories(res.data);
        } else {
          setCategory_errors({
            error: true,
            message: "Revise su conexion a internet",
          });
        }
      });
  }, [render_categories]);

  const funcAddNewCategory = (category) => {
    setCategories([...categories, category]);
  };

  const funcDeleteCategoryFromArray = (id) => {
    setCategories(categories.filter((objeto) => objeto.id !== id));
    setRender_categories((previous) => !previous);
  };

  const states_ApiContext = {
    categories,
    setCategories,
    category_errors,
    category_loader,
  };
  const functions_ApiContext = {
    funcAddNewCategory,
    funcDeleteCategoryFromArray,
  };

  const data = { states_ApiContext, functions_ApiContext };
  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export { ApiProvider };
export default ApiContext;
