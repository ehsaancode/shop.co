import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import InnerpageTitleScene from "./InnerpageTitleScene";

const { QActionFlow } = componentsMap;

export const InnerpageTitle = () => {
  const [scene, setScene] = useState("InnerpageTitleScene");
  

  return (
    <>
      {
        scene === "InnerpageTitleScene" ? (
          <InnerpageTitleScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default InnerpageTitle;
