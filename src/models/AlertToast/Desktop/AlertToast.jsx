import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import AlertToastScene from "./AlertToastScene";

const { QActionFlow } = componentsMap;

export const AlertToast = () => {
  const [scene, setScene] = useState("AlertToastScene");
  

  return (
    <>
      {
        scene === "AlertToastScene" ? (
          <AlertToastScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default AlertToast;
