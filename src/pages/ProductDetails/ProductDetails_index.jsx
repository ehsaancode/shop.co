import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ScreenWidthContext } from "../../routes/index";
import ProductDetails_desktop from "./Desktop/ProductDetails";
import ProductDetails_mobile from "./Mobile/ProductDetails";

const ProductDetails = () => {
   const screenWidth = useContext(ScreenWidthContext);
   if (screenWidth >= 800) {
      return <ProductDetails_desktop/>;
    } else {
      return <ProductDetails_mobile/>;
    }
};

export default ProductDetails;
