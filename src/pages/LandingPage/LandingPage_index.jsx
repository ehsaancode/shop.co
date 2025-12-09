import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import LandingPage_desktop from "./Desktop/LandingPage";
import LandingPage_mobile from "./Mobile/LandingPage";

const LandingPage = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <LandingPage_desktop/>;
    } else {
      return <LandingPage_mobile/>;
    }
};

export default LandingPage;
