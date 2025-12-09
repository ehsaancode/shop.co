import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import SingleCategoryScene from "./SingleCategoryScene";

const { QActionFlow } = componentsMap;

export const SingleCategory = () => {
  const [scene, setScene] = useState("SingleCategoryScene");
  

  return (
    <>
      {
        scene === "SingleCategoryScene" ? (
          <SingleCategoryScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default SingleCategory;
