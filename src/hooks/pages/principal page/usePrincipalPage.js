import { useContext, useState } from "react";
import { apiConfig } from "../../../config/api.config";
import ApiContext from "../../../contexts/contextApi";
import { httpHelper } from "../../../helpers/http-helper";

export const usePrincipalPage = () => {
  /* ContextApi */
  const { functions_ApiContext } = useContext(ApiContext);
  const { funcAddNewCategory } = functions_ApiContext;
  /* states of button add */
  const [modal_add_category, setModal_add_category] = useState(false);
  const [new_category, setNew_category] = useState("");
  const [error_new_category, setError_new_category] = useState({});

  const funcModalCategory = (bolean) => {
    setModal_add_category(bolean);
  };

  const handlerChangeAddCategory = (e) => {
    setError_new_category({});
    setNew_category(e.target.value);
  };

  const funcValidarNewCategory = () => {
    if (new_category.length === 0) {
      setError_new_category({
        error: true,
        message: "El campo no puede ir vacio",
      });
      return false;
    } else if (new_category.length > 0 && new_category.length < 2) {
      setError_new_category({
        error: true,
        message: "Nombre muy corto",
      });
      return false;
    }
    return true;
  };

  const funcAddCategory = () => {
    if (funcValidarNewCategory()) {
      const options = {
        body: { name: new_category },
        headers: { "content-type": "application/json" },
      };
      console.log(new_category);

      httpHelper()
        .post(
          `${apiConfig.host}/${apiConfig.api}/${apiConfig.categories}`,
          options
        )
        .then((res) => {
          if (res.error) {
            setError_new_category(res);
          } else if (res.success) {
            funcAddNewCategory(res.data);
            setModal_add_category(false);
          } else {
            setError_new_category({
              error: true,
              message: "Revise su conexion a internet",
            });
          }
        });
    }
  };

  const states_usePrincipalPage = { modal_add_category, error_new_category };
  const functions_usePrincipalPage = {
    funcModalCategory,
    funcAddCategory,
    handlerChangeAddCategory,
  };
  return { states_usePrincipalPage, functions_usePrincipalPage };
};
