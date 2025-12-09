import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import CheckOutScene from "./CheckOutScene";

const { QActionFlow } = componentsMap;

export const CheckOut = () => {
  const [scene, setScene] = useState("CheckOutScene");
  

  return (
    <>
      {
        scene === "CheckOutScene" ? (
          <CheckOutScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default CheckOut;
