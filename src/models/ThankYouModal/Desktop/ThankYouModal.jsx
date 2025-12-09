import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import ThankYouModalScene from "./ThankYouModalScene";

const { QActionFlow } = componentsMap;

export const ThankYouModal = () => {
  const [scene, setScene] = useState("ThankYouModalScene");
  

  return (
    <>
      {
        scene === "ThankYouModalScene" ? (
          <ThankYouModalScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default ThankYouModal;
