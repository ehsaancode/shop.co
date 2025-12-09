import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import Shop_desktop from "./Desktop/Shop";
import Shop_mobile from "./Mobile/Shop";

const Shop = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <Shop_desktop/>;
    } else {
      return <Shop_mobile/>;
    }
};

export default Shop;
