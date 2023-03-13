import React, { useContext } from "react";
import ApiContext from "../../../contexts/contextApi";

export const List_categories = () => {
  const { states_ApiContext } = useContext(ApiContext);
  const { categories, category_errors, category_loader } = states_ApiContext;
  return (
    <div className="w-full flex flex-wrap justify-around overflow-auto relative">
      {category_loader && <p>cargando</p>}
      {categories?.length === 0 && !category_errors?.error && (
        <p className="mt-5">No hay categorias disponibles</p>
      )}
      {categories?.length === 0 && category_errors?.error && (
        <p className="mt-5">{category_errors.message}</p>
      )}
      {categories?.map((category) => (
        <div
          key={category?._id}
          className="flex flex-col my-2 w-5/12 h-[180px] bg-gradient-to-bl from-secondary to-primary rounded-md shadow-lg"
        >
          <div className="h-full bg-white/5 rounded-md"></div>
          <h3 className="w-full text-center text-primary_detail font-serif py-1 font-semibold">
            {category?.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
