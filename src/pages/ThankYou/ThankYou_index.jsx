import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import ThankYou_desktop from "./Desktop/ThankYou";
import ThankYou_mobile from "./Mobile/ThankYou";

const ThankYou = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <ThankYou_desktop/>;
    } else {
      return <ThankYou_mobile/>;
    }
};

export default ThankYou;
