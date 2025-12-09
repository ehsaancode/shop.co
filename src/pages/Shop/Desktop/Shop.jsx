import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import ShopScene from "./ShopScene";

const { QActionFlow } = componentsMap;

export const Shop = () => {
  const [scene, setScene] = useState("ShopScene");
  

  return (
    <>
      {
        scene === "ShopScene" ? (
          <ShopScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default Shop;
