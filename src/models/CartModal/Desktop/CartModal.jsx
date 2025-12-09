import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import CartModalScene from "./CartModalScene";

const { QActionFlow } = componentsMap;

export const CartModal = () => {
  const [scene, setScene] = useState("CartModalScene");
  

  return (
    <>
      {
        scene === "CartModalScene" ? (
          <CartModalScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default CartModal;
