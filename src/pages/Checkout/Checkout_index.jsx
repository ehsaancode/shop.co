import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import Checkout_desktop from "./Desktop/Checkout";
import Checkout_mobile from "./Mobile/Checkout";

const Checkout = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <Checkout_desktop/>;
    } else {
      return <Checkout_mobile/>;
    }
};

export default Checkout;
