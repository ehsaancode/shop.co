import React, { useState, useEffect, createContext } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { get, set, subscribe } from "../store/index";
import QModalContainer from "../qlib/qmodal/QModalContainer";
import QSeo from "../qlib/qseo/QSeo";
import { seoArray } from "../utils/SeoArray.jsx";

// ✅ Create context here (no separate file)
export const ScreenWidthContext = createContext();

// ✅ Layouts
import Header from "../layouts/Header/Header_index";
import DefaultLayout from "../layouts/defaultlayout/index";


// ✅ Pages
import Login from "../pages/Login/Login_index";
import Register from "../pages/Register/Register_index";
import Shop from "../pages/Shop/Shop_index";
import About from "../pages/About/About_index";
import Contact from "../pages/Contact/Contact_index";
import Checkout from "../pages/Checkout/Checkout_index";
import LandingPage from "../pages/LandingPage/LandingPage_index";
import ProductDetails from "../pages/ProductDetails/ProductDetails_index";
import ThankYou from "../pages/ThankYou/ThankYou_index";

// ✅ Model
import CartModal from "../models/CartModal/CartModal_index";
import ThankYouModal from "../models/ThankYouModal/ThankYouModal_index";
import AlertToast from "../models/AlertToast/AlertToast_index";

function AppRoutes() {
  const location = useLocation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    set("userdata", {
            "user_id": 0,
            "full_name": "",
            "email": "",
            "phone": "",
            "role": "",
            "status": ""
        });
    set("authTextFinal", "SIGN IN");
    set("authBG", "#FB2E86");
    set("authTextSignOut", "SIGN OUT");
    set("authTextSignIn", "SIGN IN");
    set("Nstate", "NNN");
    set("productId", "");
    set("aTF", "SIGN IN");
    set("aTSIN", "SIGN IN");
    set("aTSO", "SIGN OUT");
    set("cartSummary", {
      "subtotal": 0,
      "discount_total": 0,
      "net_subtotal": 0,
      "delivery_charges": 0,
      "grand_total": 0
    });
    set("cartCount", "");
    
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  
  }, []);

  const routes = useRoutes([
      {
        element: <DefaultLayout />,
        children: [{ path: "/", element: <Login /> }],
      },
      {
        element: <DefaultLayout />,
        children: [{ path: "/Login", element: <Login /> }],
      },
      {
        element: <DefaultLayout />,
        children: [{ path: "/Register", element: <Register /> }],
      },
      {
        element: <Header />,
        children: [{ path: "/Shop", element: <Shop /> }],
      },
      {
        element: <Header />,
        children: [{ path: "/About", element: <About /> }],
      },
      {
        element: <Header />,
        children: [{ path: "/Contact", element: <Contact /> }],
      },
      {
        element: <Header />,
        children: [{ path: "/Checkout", element: <Checkout /> }],
      },
      {
        element: <Header />,
        children: [{ path: "/LandingPage", element: <LandingPage /> }],
      },
      {
        element: <Header />,
        children: [{ path: "/ProductDetails", element: <ProductDetails /> }],
      },
      {
        element: <DefaultLayout />,
        children: [{ path: "/ThankYou", element: <ThankYou /> }],
      },
  ]);


  //SEO
  const seoContentValues = Object.fromEntries(
  seoArray.map(item => [item.route_path, item])
  );

  // Normalize path: remove trailing slash unless it's just "/"
  const normalizedPath = location.pathname.length > 1 && location.pathname.endsWith("/") ? location.pathname.slice(0, -1)
  : location.pathname;

  const currentSEO = seoContentValues[normalizedPath] || seoContentValues["/"] || {};

  return (
    <>
    <QSeo {...currentSEO} />
    <ScreenWidthContext.Provider value={screenWidth}>
      {routes}
      <QModalContainer name="CartModal">
        <CartModal />
      </QModalContainer>
      <QModalContainer name="ThankYouModal">
        <ThankYouModal />
      </QModalContainer>
      <QModalContainer name="AlertToast">
        <AlertToast />
      </QModalContainer>
    </ScreenWidthContext.Provider>
    </>
  );
}

export default AppRoutes;