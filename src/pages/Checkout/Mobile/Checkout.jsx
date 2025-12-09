import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import CheckoutScene from "./CheckoutScene";

const { QActionFlow } = componentsMap;

export const Checkout = () => {
  const [scene, setScene] = useState("CheckoutScene");
  

  return (
    <>
      {
        scene === "CheckoutScene" ? (
          <CheckoutScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default Checkout;
