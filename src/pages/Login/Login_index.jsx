import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import Login_desktop from "./Desktop/Login";
import Login_mobile from "./Mobile/Login";

const Login = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <Login_desktop/>;
    } else {
      return <Login_mobile/>;
    }
};

export default Login;
