import React, { useState } from "react";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import SignupScene from "./SignupScene";

const { QActionFlow } = componentsMap;

export const Register = () => {
  const [scene, setScene] = useState("SignupScene");
  

  return (
    <>
      {
        scene === "SignupScene" ? (
          <SignupScene/>
        ) :
       (
        <></>
      )}
    </>
  );
};

export default Register;
