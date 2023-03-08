import React from "react";

export const Modal_add_category = ({ addCategory }) => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-black/20 z-30 absolute">
      <div className="flex flex-col items-center justify-center w-10/12 h-[250px] bg-gradient-to-bl from-primary to-secondary rounded-md shadow-lg">
        <h3 className="text-primary_detail font-semibold text-xl pb-4">
          Agregue una categoria:
        </h3>
        {/* input */}
        <div className="">
          <input className="input" type="text" />
        </div>
        {/* Buttons */}
        <div className="mt-5">
          <button className="btn hover:bg-green-500/30 mr-1">Aceptar</button>
          <button
            onClick={() => addCategory(false)}
            className="btn hover:bg-red-500/30 ml-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
