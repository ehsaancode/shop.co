import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ApiUtils, UIUtils, NavigationUtils } from "../../../utils/actionUtils";
import componentsMap from "../../../qlib/componentsMap";
import { useLocation } from "react-router-dom";
import { renderComponent } from "../../../qlib/renderComponent";
import { Outlet } from "react-router-dom";
import { get, setFormErrorSet, set, subscribe } from "../../../store/index";
import { QFormSubmit } from "../../../qlib/qform/QFormSubmit";
import { useModal } from "../../../qlib/qmodal/QModalProvider";




const {
  QFullWidth,
  QRow,
  QDiv,
  QParagraph,
  QTextH6,
  QTextH5,
  QTextH4,
  QTextH3,
  QTextH2,
  QTextH1,
  QImage,
  QButton,
  QParallax,
  QMarquee,
  QStack,
  QIncrementCounter,
  QSlider,
  QAccordion,
  QAccordionItem,
  QAccordionBody,
  QWrap,
  QHorizontalParallax,
  QTabBar,
  QTab,
  QTabBody,
  QTabHeader,
  QFloatingButton,
  QDrawer,
  QDrawerBody,
  QStickyHeader,
  QHeaderBar,
  QForm,
  QFormInputElement,
  QInputText,
  QTextArea,
  QNSection,
  QMenuBar,
  QHMenuItem,
  QMenu,
  QSubMenu,
  QInputEmail,
  QInputNumber,
  QRadio,
  QCheckBox,
  QDropDown,
  QTableData,
  QTableWrapper,
  QRepeat,
  QTableSearch,
  QInputSearch,
  QIcon,
  QTablePagination,
  QTablePaginationButton,
  QPageIndicator,
  QTablePaginationInfo,
  QTablePaginationRPP,
  QTableSort,
  QTableFilter,
  QMap,
  QBottomMenu,
  QFlex,
  QVideo,
  QSection,
  QNavbar,
  QCustom,
  QGallery,
  QMasonary,
  QProgressbarWithPercentage,
  QProgressbarWithStepper,
  QDashedProgressbar,
  QProgressbarWithSlider,
  QBackDrop,
  QCarousel,
  QErrorMessage,
  QDatePicker,
  QTimePicker,
  QDateRangePicker,
   QTable,
  QColumnHeaders,
  QColumnHeader,
  QTableRows,
  QTableRow,
  QTableCell,
  QMultiSelectDropdown,
  QActionFlow,
  QModalContainer,
   QColumnChart,
  QAreaChart,
  QLineChart,
  QBarChart,
  QPieChart
} = componentsMap;



export const CartModalScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [cartList, setCartList] = useState(null);
const [defaultRepeatState1035, setDefaultRepeatState1035] = useState([{
        "cart_id": 3,
        "item_id": 5,
        "product_id": 8,
        "variant_id": null,
        "quantity": 1,
        "couponId": 0,
        "name": "Tailored Formal Blazer",
        "thumbnail": "https://assets.myntassets.com/w_412%2Cq_30%2Cdpr_3%2Cfl_progressive%2Cf_webp/assets/images/18589514/2022/8/2/ab60f1d6-f584-454b-a823-a330d985f8b91659450461047-Arrow-Men-Green--Black-Checked-Tailored-Fit-Single-Breasted--1.jpg",
        "brand": "Puma",
        "slug": "puma-rs-x3-puzzle",
        "base_price": "300.00",
        "base_stock_quantity": 21,
        "variant_name": null,
        "sku": null,
        "variant_price": null,
        "variant_mrp": null,
        "variant_inventory": null,
        "variant_colour": null,
        "variant_size": null,
        "variant_image": null,
        "variant_is_active": null,
        "price": "300.00",
        "stock_quantity": 21,
        "coupon_id": null,
        "coupon_code": null,
        "coupon_type": null,
        "coupon_value": null,
        "coupon_min_order": null,
        "coupon_start_date": null,
        "coupon_end_date": null,
        "unit_price": 300,
        "line_subtotal": 300,
        "discount_amount": 0,
        "final_line_total": 300,
        "original_price": 300,
        "final_price": 300
      }]);
const [subTotalSt, setSubTotalSt] = useState("0");
const [totalSt, setTotalSt] = useState("0");

  
useEffect(() => {
  Object.values(hoverTimeouts).forEach(clearTimeout);
  return () => {
    Object.values(hoverTimeouts).forEach(clearTimeout);
  };
}, [hoverTimeouts]);

useEffect(() => {
  setOpenMenus({});
}, [lastSegment]);

const handleMouseEnter = (menuId, parentIds = []) => {
  setOpenMenus((prev) => {
    let newMenus = { ...prev, [menuId]: true };
    // Ensure all parent menus in the array remain open
    parentIds.forEach((parent) => {
      newMenus[parent] = true;
    });

    const timeout = setTimeout(() => {
      // Close only sibling menus (menus at the same level)
      Object.keys(prev).forEach((key) => {
        if (key !== menuId && !parentIds.includes(key)) {
          delete newMenus[key];
        }
      });
    }, 1500);

    return newMenus;
  });
};

const handleMouseLeave = (menuId) => {
  // Set a timeout to close the menu with a delay (prevents flickering)
  const timeout = setTimeout(() => {
    setOpenMenus((prev) => {
      const updatedMenus = { ...prev };
      delete updatedMenus[menuId]; // Close only this menu
      return updatedMenus;
    });
  }, 1500);

  setHoverTimeouts((prev) => ({
    ...prev,
    [menuId]: timeout,
  }));
};

// CLOSE ALL MENUS WHEN MOVING TO A NEW TOP-LEVEL MENU
const handleTopMenuEnter = (menuId) => {
  // Clear all open submenus except the one being hovered
  setOpenMenus({});
  // Clear any timeout preventing closure
  if (hoverTimeouts[menuId]) {
    clearTimeout(hoverTimeouts[menuId]);
  }
};

useEffect(() => {
  return () => {
    // Cleanup all timeouts when component unmounts
    Object.values(hoverTimeouts).forEach(clearTimeout);
  };
}, [hoverTimeouts]);




              useEffect(() => {
                       Action1840();
                    }, []);

              const Action1840 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/get-cart",
                    method: "POST",
                    body: {
  "user_id": get("userdata")?.user_id
},
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                  );

                  setLoading(true);
                  
                  setDefaultRepeatState1035(userData?.data?.items);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              

              const Action1845 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/add-cart",
                    method: "POST",
                    body: {
  "product_id": defaultRepeatState1035[event.index]?.product_id,
  "quantity": "-1",
  "user_id": get("userdata")?.user_id
},
                    headers: {"Content-Type":"application/json"},
                  }
                  );

                  setLoading(true);
                  
                  setDefaultRepeatState1035(userData?.data?.items);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, [defaultRepeatState1035]);

    
              

              const Action1841 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/add-cart",
                    method: "POST",
                    body: {
  "product_id": defaultRepeatState1035[event.index]?.product_id,
  "quantity": "1",
  "user_id": get("userdata")?.user_id
},
                    headers: {"Content-Type":"application/json"},
                  }
                  );

                  setLoading(true);
                  
                  setDefaultRepeatState1035(userData?.data?.items);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, [defaultRepeatState1035]);

    
              

              const Action1852 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/add-cart",
                    method: "POST",
                    body: {
  "product_id": defaultRepeatState1035[event.index]?.product_id,
  "quantity": "0",
  "user_id": get("userdata")?.user_id
},
                    headers: {"Content-Type":"application/json"},
                  }
                  );

                  setLoading(true);
                  
                  setDefaultRepeatState1035(userData?.data?.items);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, [defaultRepeatState1035]);

    
              const navigateToCheckout = useCallback((event) => {
                closeModal('CartModal')
                NavigationUtils.navigateTo(navigate, "/Checkout");
              }, [navigate]);

            
  
              
            
  
              
            
  
              
            
  
              
            
const actions = {
      navigateToCheckout,
      Action1845,
      Action1841,
      Action1852,
  };


return (
<>
         <QSection
          widgetId="1763819209133802"
          tailwaindClasses="w-[auto] max-h-[500px] h-auto relative rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-center"
        >
            <QFlex
             widgetId="1763819943409715"
             headerText="Add Widgets"
             tailwaindClasses="w-[683px] h-[700px] pt-[30px] pr-[30px] pb-[30px] pl-[30px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#C8C8C804] border-r-[#C8C8C804] border-b-[#C8C8C804] border-l-[#C8C8C804] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] flex flex-col justify-between items-start"
           >
               <QFullWidth
                widgetId="1763819943407096"
                headerText="Add Widgets"
                tailwaindClasses="w-[623px] h-auto static flex flex-col justify-start items-start"
              >
                   <QFullWidth
                    widgetId="1763819943407092"
                    bgColor="rgba(255, 255, 255, 1.00)"
                    headerText="Add Widgets"
                    tailwaindClasses="w-full min-h-[100px] h-auto static top-[0px] left-[30px] flex flex-col justify-start items-start"
                  >
                       <QTextH4
                        widgetId="1763819943408739"
                        headerText="Your cart"
                        tailwaindClasses="w-[auto] h-auto static font-[Inter] text-2xl font-semibold text-[#000000] text-left"
                      />
                       <QTextH4
                        widgetId="1763819943411000"
                        headerText="Not ready to checkout? Continue Shopping"
                        tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-medium text-[#000000] text-left"
                      />

                   </QFullWidth>

               </QFullWidth>
               <QFlex
                widgetId="1764443051834163"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QDiv
                   tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-5 gap-x-5"
                 >
                 <QRepeat
                   repeaterDefaultData={defaultRepeatState1035}
                   loading={loading}
                   widgetId="1764525498343830"
                   headerText="Add Widgets"
                   tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-5 gap-x-5"
                 >
                      <QFlex
                       widgetId="1764525498441037"
                       tailwaindClasses="h-auto static flex flex-col justify-start items-start"
                     >
                         <QFlex
                          widgetId="1764525506144956"
                          headerText="Add Widgets"
                          tailwaindClasses="w-[600px] min-h-[100px] h-auto static flex flex-row justify-center items-start"
                        >
                            <QImage
                             widgetId="1764525506144320"
                             tagKey="thumbnail"
                             bgUrl="https://i.postimg.cc/52wMM4ms/Mask-Group.png"
                             backgroundSize="cover"
                             headerText="Add Widgets Vertically"
                             tailwaindClasses="w-[100px] min-h-[100px] h-auto static object-cover rounded-tr-[15px] rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]"
                           />
                            <QFullWidth
                             widgetId="1764525506151072"
                             headerText="Add Widgets"
                             tailwaindClasses="w-[480px] min-h-[100px] h-auto pl-[20px] static flex flex-col justify-start items-start"
                           >
                                <QTextH2
                                 widgetId="1764525506150873"
                                 tagKey="name"
                                 headerText="DuoComfort Sofa Premium"
                                 tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-bold text-[#000000] text-left"
                               />
                                <QParagraph
                                 widgetId="1764525506145347"
                                 headerText="Size: L"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#060606FF] text-left"
                               />
                                <QFlex
                                 widgetId="1764525506146356"
                                 tailwaindClasses="w-full h-auto static flex flex-row justify-between items-center"
                               >
                                   <QParagraph
                                    widgetId="1764525506150390"
                                    tagKey="quantity"
                                    headerText="Quantity: 1"
                                    tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#000000FF] text-left"
                                  />

                                </QFlex>
                                <QFlex
                                 widgetId="1764525506146718"
                                 tailwaindClasses="w-[460px] h-auto static flex flex-row justify-between items-end"
                               >
                                   <QTextH3
                                    widgetId="1764525506152006"
                                    tagKey="price"
                                    headerText="$20.00"
                                    tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-bold text-[#000000] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764525506151999"
                                    bgColor="rgba(125, 73, 248, 0.00)"
                                    tailwaindClasses="w-[auto] h-[30px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#B3B3B3FF] border-r-[#B3B3B3FF] border-b-[#B3B3B3FF] border-l-[#B3B3B3FF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg text-[#000000FF] flex flex-row justify-center items-center"
                                  >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action1845",
                      }}
                    >
                                                          <QIcon
                                       cms_form_Id="1764525506151999"
                                       iconLink="https://imgcdn.kuick.com/cms/icon/quick-studio-icon-library/interface/outline/minus.svg"
                                       widgetId="1764525506152975"
                                       tailwaindClasses="w-[25px] h-[20px] static text-[#050000FF]"
                                     />
</QActionFlow>

                                      <QParagraph
                                       widgetId="1764525506150455"
                                       tagKey="quantity"
                                       headerText="0"
                                       tailwaindClasses="w-[auto] h-auto mr-[5px] ml-[5px] static font-[Arial] text-xl font-normal text-[#000000FF]"
                                     />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action1841",
                      }}
                    >
                                                          <QIcon
                                       cms_form_Id="1764525506151999"
                                       iconLink="https://imgcdn.kuick.com/cms/icon/quick-studio-icon-library/interface/outline/plus.svg"
                                       widgetId="1764525506148093"
                                       tailwaindClasses="w-[25px] h-[20px] static text-[#050000FF]"
                                     />
</QActionFlow>


                                   </QFlex>
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action1852",
                      }}
                    >
                                                       <QImage
                                    widgetId="1764525506153828"
                                    bgUrl="https://i.postimg.cc/Fz9RTm7f/trash.png"
                                    headerText="Add Widgets Vertically"
                                    tailwaindClasses="w-[20px] h-auto static"
                                  />
</QActionFlow>


                                </QFlex>

                            </QFullWidth>

                         </QFlex>

                      </QFlex>

                  </QRepeat></QDiv>

               </QFlex>
               <QFlex
                widgetId="1764443513425436"
                tailwaindClasses="w-[auto] h-auto static block"
              >
                  <QFullWidth
                   widgetId="1764443513421114"
                   headerText="Add Widgets"
                   tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                 >
                      <QTextH4
                       widgetId="1764443513423990"
                       headerText="Subtotal"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-normal text-[#000000] text-left"
                     />
                      <QFlex
                       widgetId="1764571514808803"
                       tailwaindClasses="w-[auto] h-auto static flex flex-row"
                     >
                         <QTextH4
                          widgetId="1764571551449827"
                          headerText="$"
                          tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-normal text-[#000000] text-left"
                        />
                         <QTextH4
                          widgetId="1764443513425702"
                          headerText={subTotalSt}
                          tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-normal text-[#000000] text-left"
                        />

                      </QFlex>

                  </QFullWidth>
                  <QFullWidth
                   widgetId="1764570651595136"
                   headerText="Add Widgets"
                   tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                 >
                      <QTextH4
                       widgetId="1764570651599539"
                       headerText="Total"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[25px] font-bold text-[#000000] text-left"
                     />
                      <QFlex
                       widgetId="1764572014140353"
                       tailwaindClasses="w-[auto] h-auto static flex flex-row"
                     >
                         <QTextH4
                          widgetId="1764572081619044"
                          headerText="$"
                          tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[25px] font-bold text-[#000000] text-left"
                        />
                         <QTextH4
                          widgetId="1764570651600776"
                          headerText={totalSt}
                          tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[25px] font-bold text-[#000000] text-left"
                        />

                      </QFlex>

                  </QFullWidth>
                  <QFullWidth
                   widgetId="1764443513424707"
                   headerText="Add Widgets"
                   tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                 >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToCheckout",
                      }}
                    >
                                          <QButton
                       buttonType="button"
                       widgetId="1764443513418431"
                       bgColor="rgba(251, 46, 134, 1.00)"
                       headerText="Continue to checkout"
                       tailwaindClasses="w-[623px] h-[60px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-[15px] font-normal text-[#FFFFFFFF]"
                     />
</QActionFlow>


                  </QFullWidth>

               </QFlex>

            </QFlex>

         </QSection>
</> );
};

export default CartModalScene;