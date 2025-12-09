import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import ThankYouScene from "./ThankYouScene";

const { QActionFlow } = componentsMap;

export const ThankYou = () => {
  const [scene, setScene] = useState("ThankYouScene");
  

  return (
    <>
      {
        scene === "ThankYouScene" ? (
          <ThankYouScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default ThankYou;
