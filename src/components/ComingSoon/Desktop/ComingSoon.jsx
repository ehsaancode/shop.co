import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import ComingSoonScene from "./ComingSoonScene";

const { QActionFlow } = componentsMap;

export const ComingSoon = () => {
  const [scene, setScene] = useState("ComingSoonScene");
  

  return (
    <>
      {
        scene === "ComingSoonScene" ? (
          <ComingSoonScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default ComingSoon;
