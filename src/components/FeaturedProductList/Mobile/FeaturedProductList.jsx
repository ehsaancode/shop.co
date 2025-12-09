import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import FeaturedProductListScene from "./FeaturedProductListScene";

const { QActionFlow } = componentsMap;

export const FeaturedProductList = () => {
  const [scene, setScene] = useState("FeaturedProductListScene");
  

  return (
    <>
      {
        scene === "FeaturedProductListScene" ? (
          <FeaturedProductListScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default FeaturedProductList;
