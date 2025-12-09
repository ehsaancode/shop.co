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



export const HeaderScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [cartHeaderCount, setCartHeaderCount] = useState("0");
const [signInBtnState, setSignInBtnState] = useState("SIGN IN");

  
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




              const navigateToShop = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Shop");
              }, [navigate]);

            
              const navigateToLandingPage = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/LandingPage");
              }, [navigate]);

            
              const navigateToAbout = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/About");
              }, [navigate]);

            
              const navigateToContact = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Contact");
              }, [navigate]);

            
                const Action1136 = useCallback((event) => {
                  openModal("CartModal");
                }, []);
  
              
              const navigateToLogin = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Login");
              }, [navigate]);

            
const actions = {
      navigateToShop,
      navigateToLandingPage,
      navigateToAbout,
      navigateToContact,
      Action1136,
      navigateToLogin,
  };


return (
<>
         <QSection
          widgetId="1763815930433980"
          tailwaindClasses="w-full h-auto relative flex flex-col justify-start items-center"
        >
            <QFlex
             widgetId="1763815932632292"
             bgColor="rgba(37, 38, 84, 0.00)"
             headerText="Add Widgets"
             tailwaindClasses="w-[90%] h-[96px] static flex flex-row justify-between items-center"
           >
               <QFullWidth
                widgetId="1763815932634174"
                headerText="Add Widgets"
                tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center gap-y-12 gap-x-12"
              >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToShop",
                      }}
                    >
                                       <QImage
                    widgetId="1763815932636238"
                    bgUrl="https://i.postimg.cc/PqhKsZfp/SHOP-CO.png"
                    headerText="Add Widgets Vertically"
                    tailwaindClasses="w-[auto] h-[32px] static"
                  />
</QActionFlow>


               </QFullWidth>
               <QFullWidth
                widgetId="1763815932632168"
                headerText="Add Widgets"
                tailwaindClasses="w-[auto] min-h-[100px] h-auto static flex flex-row justify-start items-center gap-y-6 gap-x-6"
              >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToLandingPage",
                      }}
                    >
                                      <QHMenuItem

        onMouseEnter={() => handleTopMenuEnter("")}
    
                    isAbsoluteValue="false"
                    bgColor="rgba(9, 9, 9, 0.00)"
                    tailwaindClasses="w-[auto] h-auto pt-[8px] pr-[8px] pb-[8px] pl-[8px] static flex flex-row justify-center items-center"
>
  <QMenu 
    id="1763815932630095"
    
            onMouseEnter={() => handleMouseEnter("1763815932630095",[1763815932630095])}

    
    >
                        <QTextH2
                       widgetId="1763815932635362"
                       headerText="Home"
                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-sm font-semibold text-[#000000FF] text-left"
                     />
                  </QMenu>

                   </QHMenuItem>
</QActionFlow>

<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToAbout",
                      }}
                    >
                                      <QHMenuItem

        onMouseEnter={() => handleTopMenuEnter("")}
    
                    isAbsoluteValue="false"
                    tailwaindClasses="w-[auto] h-auto pt-[8px] pr-[8px] pb-[8px] pl-[8px] static flex flex-row justify-center items-center"
>
  <QMenu 
    id="1763815932631781"
    
            onMouseEnter={() => handleMouseEnter("1763815932631781",[1763815932630095,1763815932631781])}

    
    >
                        <QTextH2
                       widgetId="1763815932634611"
                       headerText="About"
                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-sm font-semibold text-[#120000FF] text-left"
                     />
                  </QMenu>

                   </QHMenuItem>
</QActionFlow>

<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToShop",
                      }}
                    >
                                      <QHMenuItem

        onMouseEnter={() => handleTopMenuEnter("")}
    
                    isAbsoluteValue="false"
                    tailwaindClasses="w-[auto] h-auto pt-[8px] pr-[8px] pb-[8px] pl-[8px] static flex flex-row justify-center items-center"
>
  <QMenu 
    id="1763815932630112"
    
            onMouseEnter={() => handleMouseEnter("1763815932630112",[1763815932630095,1763815932631781,1763815932630112])}

    
    >
                        <QTextH2
                       widgetId="1763815932629442"
                       headerText="Shop"
                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-sm font-semibold text-[#0E0000FF] text-left"
                     />
                  </QMenu>

                   </QHMenuItem>
</QActionFlow>

<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToContact",
                      }}
                    >
                                      <QHMenuItem

        onMouseEnter={() => handleTopMenuEnter("")}
    
                    isAbsoluteValue="false"
                    tailwaindClasses="w-[auto] h-auto pt-[8px] pr-[8px] pb-[8px] pl-[8px] static flex flex-row justify-center items-center"
>
  <QMenu 
    id="1763815932631386"
    
            onMouseEnter={() => handleMouseEnter("1763815932631386",[1763815932630095,1763815932631781,1763815932630112,1763815932631386])}

    
    >
                        <QTextH2
                       widgetId="1763815932636800"
                       headerText="Contact"
                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-sm font-semibold text-[#120000FF] text-left"
                     />
                  </QMenu>

                   </QHMenuItem>
</QActionFlow>


               </QFullWidth>
               <QFullWidth
                widgetId="1763815932638351"
                headerText="Add Widgets"
                tailwaindClasses="w-[auto] min-h-[100px] h-auto static text-[#190041FF] flex flex-row justify-center items-center"
              >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action1136",
                      }}
                    >
                                       <QFlex
                    widgetId="1763815932631697"
                    bgColor="rgba(125, 73, 248, 0.00)"
                    tailwaindClasses="w-[60px] h-[45px] relative border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#FFFFFFFF] border-r-[#FFFFFFFF] border-b-[#FFFFFFFF] border-l-[#FFFFFFFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                  >
                      <QIcon
                       cms_form_Id="1763815932631697"
                       iconLink="https://imgcdn.kuick.com/cms/icon/quick-studio-icon-library/interface/outline/shopping-bag.svg"
                       widgetId="1763815932636228"
                       tailwaindClasses="w-[25px] h-[25px] static text-[#010101FF]"
                     />
                      <QFullWidth
                       widgetId="1764417626447572"
                       bgColor="rgba(255, 9, 9, 1.00)"
                       headerText="Add Widgets"
                       tailwaindClasses="w-[20px] h-[20px] absolute top-[4px] right-[8px] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] flex flex-row justify-center items-center"
                     >
                          <QTextH5
                           widgetId="1764417646654361"
                           headerText={cartHeaderCount}
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[10px] font-normal text-[#FFFFFFFF] text-center"
                         />

                      </QFullWidth>

                   </QFlex>
</QActionFlow>

<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToLogin",
                      }}
                    >
                                       <QFlex
                    widgetId="1764566155230609"
                    bgColor="var(--primarybtcolor)"
                    headerText="Add Widgets"
                    tailwaindClasses="w-[auto] min-h-[45px] h-auto pr-[18px] pl-[18px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] flex flex-col justify-center items-center"
                  >
                      <QTextH3
                       widgetId="1764566177558123"
                       headerText={signInBtnState}
                       tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-bold text-[#FFFFFFFF] text-left"
                     />

                   </QFlex>
</QActionFlow>


               </QFullWidth>

            </QFlex>

         </QSection>
         <QSection
          widgetId="1763816011370769"
          tailwaindClasses="w-full min-h-[400px] h-auto relative block"
        >

            <Outlet />

         </QSection>
         <QSection
          widgetId="1764328064047334"
          tailwaindClasses="w-full min-h-[400px] h-auto pt-[60px] relative flex flex-row justify-center items-start"
        >
            <QFlex
             widgetId="1764328066216477"
             tailwaindClasses="w-full h-auto static flex flex-col justify-start items-center"
           >
               <QFlex
                widgetId="1764328066223287"
                headerText="Add Widgets"
                tailwaindClasses="w-[90%] h-auto pb-[50px] static border-b-[#6F6C90FF] flex flex-row justify-between items-start"
              >
                  <QFullWidth
                   widgetId="1764328066217472"
                   headerText="Add Widgets"
                   tailwaindClasses="w-[30%] min-h-[100px] h-auto static flex flex-col justify-start items-start"
                 >
                      <QImage
                       widgetId="1764328066218436"
                       bgUrl="https://i.postimg.cc/PqhKsZfp/SHOP-CO.png"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[auto] h-[24px] static object-cover"
                     />
                      <QParagraph
                       widgetId="1764328066218592"
                       headerText="We have clothes that suits your style and which you’re proud to wear. From women to men."
                       tailwaindClasses="w-[85.82%] h-auto pt-[20px] pb-[15px] static font-[Poppins] text-sm font-extralight text-[#6F6C90FF] text-left"
                     />

                  </QFullWidth>
                  <QFlex
                   widgetId="1764328066218961"
                   tailwaindClasses="w-[70%] h-auto mt-[5px] static flex flex-row justify-end items-start"
                 >
                     <QFullWidth
                      widgetId="1764328066223971"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[25%] h-auto static flex flex-col justify-start items-start"
                    >
                         <QTextH3
                          widgetId="1764328066215574"
                          headerText="COMPANY"
                          tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-semibold text-[#000000FF] text-left"
                        />
                         <QFlex
                          widgetId="1764328066223696"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[15px] static flex flex-col justify-start items-start gap-y-[10px] gap-x-[10px]"
                        >
                            <QTextH5
                             widgetId="1764328066220312"
                             headerText="Home"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066223732"
                             headerText="About"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066221788"
                             headerText="Shop"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066223953"
                             headerText="Contact"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />

                         </QFlex>

                     </QFullWidth>
                     <QFullWidth
                      widgetId="1764328066219100"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[25%] h-auto static flex flex-col justify-start items-start"
                    >
                         <QTextH3
                          widgetId="1764328066219354"
                          headerText="HELP"
                          tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-semibold text-[#000000FF] text-left"
                        />
                         <QFlex
                          widgetId="1764328066222413"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[15px] static flex flex-col justify-start items-start gap-y-[10px] gap-x-[10px]"
                        >
                            <QTextH5
                             widgetId="1764328066222425"
                             headerText="Customer Support"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066216875"
                             headerText="Delivery Details"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066217011"
                             headerText="Reviews"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066223052"
                             headerText="Privacy Policy"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />

                         </QFlex>

                     </QFullWidth>
                     <QFullWidth
                      widgetId="1764328066225099"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[25%] h-auto static flex flex-col justify-start items-start"
                    >
                         <QTextH3
                          widgetId="1764328066222335"
                          headerText="FAQ"
                          tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-semibold text-[#000000FF] text-left"
                        />
                         <QFlex
                          widgetId="1764328066227007"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[15px] static flex flex-col justify-start items-start gap-y-[10px] gap-x-[10px]"
                        >
                            <QTextH5
                             widgetId="1764328066225243"
                             headerText="Account"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066225031"
                             headerText="Manage Deliveries"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066220327"
                             headerText="Orders"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066227437"
                             headerText="Payments"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />

                         </QFlex>

                     </QFullWidth>
                     <QFullWidth
                      widgetId="1764328066220289"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[25%] h-auto static flex flex-col justify-start items-start"
                    >
                         <QTextH3
                          widgetId="1764328066222761"
                          headerText="RESOURCES"
                          tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-semibold text-[#000000FF] text-left"
                        />
                         <QFlex
                          widgetId="1764328066224970"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[15px] static flex flex-col justify-start items-start gap-y-[10px] gap-x-[10px]"
                        >
                            <QTextH5
                             widgetId="1764328066228191"
                             headerText="Free eBooks"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066226581"
                             headerText="Development Tutorial"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066221651"
                             headerText="How to - Blog"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />
                            <QTextH5
                             widgetId="1764328066222220"
                             headerText="Youtube Playlist"
                             tailwaindClasses="w-[auto] h-auto pt-[10px] static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                           />

                         </QFlex>

                     </QFullWidth>

                  </QFlex>

               </QFlex>
               <QFlex
                widgetId="1764328066226049"
                headerText="Add Widgets"
                tailwaindClasses="w-[90%] h-auto pt-[24px] pr-[16px] pl-[16px] static border-t-[1px] border-t-[#0000001A] flex flex-row justify-between items-center"
              >
                  <QTextH5
                   widgetId="1764328066223836"
                   headerText="Shop.co © 2025-2026, All Rights Reserved"
                   tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-xs font-light text-[#6F6C90FF] text-left"
                 />
                  <QFlex
                   widgetId="1764328066224664"
                   tailwaindClasses="w-[60%] h-auto static flex flex-row justify-end items-center gap-y-5 gap-x-5"
                 >
                     <QImage
                      widgetId="1764328066222384"
                      bgUrl="https://i.postimg.cc/XYyHqHT5/Badge.png"
                      backgroundSize="cover"
                      boxShadow="    rgba(94, 57, 57, 0.00)"
                      headerText="Add Widgets Vertically"
                      textShadow="rgba(94, 57, 57, 0.00)"
                      tailwaindClasses="w-[auto] h-[48px] static object-cover"
                    />
                     <QImage
                      widgetId="1764328066224031"
                      bgUrl="https://i.postimg.cc/43k89vgS/Badge-1.png"
                      backgroundSize="cover"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-[48px] static object-cover"
                    />
                     <QImage
                      widgetId="1764328066227239"
                      bgUrl="https://i.postimg.cc/GpFXJB3h/Badge-2.png"
                      backgroundSize="cover"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-[48px] static object-cover"
                    />
                     <QImage
                      widgetId="1764328066225088"
                      bgUrl="https://i.postimg.cc/zBq0dJ3w/Badge-3.png"
                      backgroundSize="cover"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-[48px] static object-cover"
                    />
                     <QImage
                      widgetId="1764328066227093"
                      bgUrl="https://i.postimg.cc/RFGGyjnk/Badge-4.png"
                      backgroundSize="cover"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-[48px] static object-cover"
                    />

                  </QFlex>

               </QFlex>

            </QFlex>

         </QSection>
</> );
};

export default HeaderScene;