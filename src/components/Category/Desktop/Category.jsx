import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import CategoryScene from "./CategoryScene";

const { QActionFlow } = componentsMap;

export const Category = () => {
  const [scene, setScene] = useState("CategoryScene");
  

  return (
    <>
      {
        scene === "CategoryScene" ? (
          <CategoryScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default Category;
