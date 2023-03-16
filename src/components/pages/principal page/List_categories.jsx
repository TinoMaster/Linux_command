import React, { useContext } from "react";
import ApiContext from "../../../contexts/contextApi";
import { BiTrash } from "react-icons/bi";

export const List_categories = ({ funcDeleteCategory }) => {
  const { states_ApiContext } = useContext(ApiContext);
  const { categories, category_errors, category_loader } = states_ApiContext;
  return (
    <div className="w-full flex flex-wrap justify-around overflow-auto relative p-4">
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
          className="flex flex-col my-5 w-5/12 h-[180px] relative bg-gradient-to-bl from-secondary to-primary rounded-md shadow-lg hover:cursor-pointer hover:scale-105   hover:shadow-primary_detail/10 hover:shadow-xl transition-all duration-150 ease-linear"
        >
          <div className="h-full bg-white/5 rounded-md"></div>
          <h3 className="w-full text-center text-primary_detail font-serif py-1 font-semibold">
            {category?.name}
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              funcDeleteCategory(category._id);
            }}
            className="absolute right-2 top-2 p-2 rounded-full bg-black/5 text-slate-400/30 hover:text-slate-400 transition-all"
          >
            {" "}
            <BiTrash />{" "}
          </button>
        </div>
      ))}
    </div>
  );
};
