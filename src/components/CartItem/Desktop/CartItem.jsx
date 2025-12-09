import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import CartItemScene from "./CartItemScene";

const { QActionFlow } = componentsMap;

export const CartItem = () => {
  const [scene, setScene] = useState("CartItemScene");
  

  return (
    <>
      {
        scene === "CartItemScene" ? (
          <CartItemScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default CartItem;
