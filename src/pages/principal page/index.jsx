import React from "react";
import { Button_add_category } from "../../components/pages/principal page/Button_add_category";
import { List_categories } from "../../components/pages/principal page/List_categories";
import { Modal_add_category } from "../../components/pages/principal page/Modal_add_category";
import { Principal_Search_Bar } from "../../components/pages/principal page/Principal_search_bar";
import { usePrincipalPage } from "../../hooks/pages/principal page/usePrincipalPage";

export const Principal_Page = ({ scroll_pages_y }) => {
  const { states, functions } = usePrincipalPage();
  return (
    <div className="container">
      {/* Modal add category */}
      {states.modal_add_category && (
        <Modal_add_category addCategory={functions.funcModalCategory} />
      )}
      {/* Search bar */}
      <Principal_Search_Bar scroll_pages_y={scroll_pages_y} />
      {/* Button add category */}
      <Button_add_category addCategory={functions.funcModalCategory} />
      {/* Categories */}
      <List_categories />
    </div>
  );
};
