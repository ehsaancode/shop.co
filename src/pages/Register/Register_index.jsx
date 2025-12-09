import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import Register_desktop from "./Desktop/Register";
import Register_mobile from "./Mobile/Register";

const Register = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <Register_desktop/>;
    } else {
      return <Register_mobile/>;
    }
};

export default Register;
