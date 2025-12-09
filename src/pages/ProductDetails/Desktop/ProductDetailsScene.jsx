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



export const ProductDetailsScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();



  
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
                       Action1864();
                    }, []);

              const Action1864 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "undefined",
                    method: "undefined",
                    body: {},
                    headers: undefined,
                  }
                  );

                  setLoading(true);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              const navigateToLandingPage = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/LandingPage");
              }, [navigate]);

            
              const navigateToShop = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Shop");
              }, [navigate]);

            
  
            
const actions = {
      navigateToLandingPage,
      navigateToShop,
  };


return (
<>
      <QSection
       widgetId="1764313963274373"
       tailwaindClasses="w-full min-h-[400px] h-auto relative"
     >
         <QSection
          widgetId="1764313981065445"
          bgColor="rgba(255, 255, 255, 1.00)"
          tailwaindClasses="w-full min-h-[100%vh] h-auto relative block"
        >
            <QSection
             widgetId="1764313981072453"
             bgColor="rgba(246, 245, 255, 1.00)"
             tailwaindClasses="w-full h-auto relative flex flex-row justify-center items-start"
           >
               <QFlex
                widgetId="1764313981072328"
                headerText="Add Widgets"
                tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-col justify-center items-start"
              >
                  <QTextH2
                   widgetId="1764313981075846"
                   headerText="Checkout"
                   tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-semibold text-[#000000] text-left"
                 />
                  <QFullWidth
                   widgetId="1764313981079861"
                   headerText="Add Widgets"
                   tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-start"
                 >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToLandingPage",
                      }}
                    >
                                          <QTextH5
                       widgetId="1764313981077136"
                       headerText="Home"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#9CA3AFFF] text-left"
                     />
</QActionFlow>

                      <QImage
                       widgetId="1764313981077103"
                       bgUrl="https://imgcdn.kuick.com/cms-designer/erp/breadcrum-grey.svg"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[16px] h-auto mt-[2px] static object-cover"
                     />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToShop",
                      }}
                    >
                                          <QTextH5
                       widgetId="1764314229266644"
                       headerText="Shop"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#9CA3AFFF] text-left"
                     />
</QActionFlow>

                      <QImage
                       widgetId="1764314285496846"
                       bgUrl="https://imgcdn.kuick.com/cms-designer/erp/breadcrum-grey.svg"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[16px] h-auto mt-[2px] static object-cover"
                     />
                      <QTextH5
                       widgetId="1764313981081798"
                       headerText="Long Sleeve Overshirt, Khaki, 6"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#FB2E86FF] text-left"
                     />

                  </QFullWidth>

               </QFlex>

            </QSection>
            <QSection
             widgetId="1764314478170380"
             tailwaindClasses="w-full h-auto pt-[40px] pb-[40px] relative flex flex-row justify-center items-start"
           >
               <QFlex
                widgetId="1764323077234778"
                headerText="Add Widgets"
                tailwaindClasses="w-[90%] h-auto static flex flex-row justify-start items-start"
              >
                  <QFullWidth
                   widgetId="1764323077232813"
                   bgColor="rgba(255, 255, 255, 1.00)"
                   headerText="Add Widgets"
                   tailwaindClasses="w-[50%] min-h-[100px] h-[500px] static flex flex-row justify-start items-start"
                 >
                      <QSlider
                       widgetId="1764328750816479"
                       width="calc(100% - ( + 30px))"
                       headerText="Add Widgets"
                       tailwaindClasses="h-[600px] mr-[30px] static"
                     >
                         <QFlex
                          widgetId="1764328755475105"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-[600px] static flex flex-col justify-start items-start"
                        >
                            <QImage
                             widgetId="1764328777298053"
                             bgUrl="https://imgcdn.kuick.com/icon/image/oversize_sweashirt.png"
                             backgroundSize="none"
                             headerText="Add Widgets Vertically"
                             tailwaindClasses="w-full h-auto static object-none rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
                           />

                         </QFlex>

                      </QSlider>

                  </QFullWidth>
                  <QFullWidth
                   widgetId="1764323077233169"
                   headerText="Add Widgets"
                   tailwaindClasses="w-[50%] min-h-[600px] h-auto pb-[10px] static flex flex-col justify-start items-start"
                 >
                      <QTextH2
                       widgetId="1764323077237954"
                       headerText="Black Oversized Sweatshirt"
                       tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[35px] font-black text-[#3C3C3CFF] text-left"
                     />
                      <QFullWidth
                       widgetId="1764323077240059"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto static flex flex-col justify-start items-start"
                     >
                          <QFullWidth
                           widgetId="1764323077242905"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto pb-[10px] static flex flex-row justify-start items-start gap-y-[15px] gap-x-[15px]"
                         >
                              <QImage
                               widgetId="1764323077235778"
                               bgUrl="https://i.postimg.cc/t4ffTy8G/stars.png"
                               headerText="Add Widgets Vertically"
                               tailwaindClasses="w-[auto] h-auto static"
                             />
                              <QTextH5
                               widgetId="1764323077242657"
                               headerText="4.5 (212 reviews)"
                               tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[15px] font-semibold text-[#9E9393FF] text-left"
                             />

                          </QFullWidth>
                          <QFullWidth
                           widgetId="1764323077238619"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto mb-[30px] static flex flex-row justify-between items-center"
                         >
                              <QFullWidth
                               widgetId="1764323077243257"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[40%] h-auto static flex flex-row justify-start items-start gap-y-[5px] gap-x-[5px]"
                             >
                                  <QTextH5
                                   widgetId="1764323077244769"
                                   headerText="$ 215.00"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-black text-[#000000FF] text-left"
                                 />
                                  <QTextH5
                                   widgetId="1764323077238684"
                                   headerText="$ 290.00"
                                   textDecorationLine="line-through"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-black text-[#B5ABABFF] text-left"
                                 />

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077247682"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[50%] h-auto static flex flex-row justify-end items-start gap-y-[5px] gap-x-[5px]"
                             >
                                  <QImage
                                   widgetId="1764323077249807"
                                   bgUrl="https://i.postimg.cc/t4WRtXWX/start-icon.png"
                                   headerText="Add Widgets Vertically"
                                   tailwaindClasses="w-[auto] h-auto static"
                                 />
                                  <QTextH5
                                   widgetId="1764323077243687"
                                   headerText="Add to Wish List"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-semibold text-[#000000FF] text-left"
                                 />

                              </QFullWidth>

                          </QFullWidth>
                          <QFullWidth
                           widgetId="1764323077246452"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto pb-[15px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[5px] gap-x-[5px]"
                         >
                              <QTextH5
                               widgetId="1764323077249398"
                               headerText="Color:"
                               tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[23px] font-black text-[#8B8A8AFF] text-left"
                             />
                              <QTextH5
                               widgetId="1764323077245441"
                               headerText="Royal Brown"
                               tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-extrabold text-[#000000FF] text-left"
                             />

                          </QFullWidth>
                          <QFullWidth
                           widgetId="1764323077247723"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto pb-[20px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                         >
                              <QFullWidth
                               widgetId="1764323077250701"
                               bgColor="rgba(83, 64, 41, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-start items-start"
                             >

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077248417"
                               bgColor="rgba(235, 235, 235, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-start items-start"
                             >

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077249501"
                               bgColor="rgba(58, 106, 144, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-start items-start"
                             >

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077247087"
                               bgColor="rgba(17, 23, 29, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-start items-start"
                             >

                              </QFullWidth>

                          </QFullWidth>
                          <QFullWidth
                           widgetId="1764323077248700"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto pb-[15px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[5px] gap-x-[5px]"
                         >
                              <QTextH5
                               widgetId="1764323077250139"
                               headerText="Size:"
                               tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[23px] font-black text-[#8B8A8AFF] text-left"
                             />
                              <QTextH5
                               widgetId="1764323077251355"
                               headerText="6"
                               tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-extrabold text-[#000000FF] text-left"
                             />

                          </QFullWidth>
                          <QFullWidth
                           widgetId="1764323077257147"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto pb-[50px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                         >
                              <QFullWidth
                               widgetId="1764323077255806"
                               bgColor="rgba(190, 187, 187, 0.35)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                             >
                                  <QTextH5
                                   widgetId="1764323077257204"
                                   headerText="6"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-extrabold text-[#000000FF] text-left"
                                 />

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077253694"
                               bgColor="rgba(255, 255, 255, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                             >
                                  <QTextH5
                                   widgetId="1764323077259146"
                                   headerText="8"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-extrabold text-[#000000FF] text-left"
                                 />

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077257975"
                               bgColor="rgba(255, 255, 255, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                             >
                                  <QTextH5
                                   widgetId="1764323077254374"
                                   headerText="10"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-extrabold text-[#000000FF] text-left"
                                 />

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077258513"
                               bgColor="rgba(255, 255, 255, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                             >
                                  <QTextH5
                                   widgetId="1764323077263232"
                                   headerText="12"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-extrabold text-[#000000FF] text-left"
                                 />

                              </QFullWidth>
                              <QFullWidth
                               widgetId="1764323077258490"
                               bgColor="rgba(255, 255, 255, 1.00)"
                               headerText="Add Widgets"
                               tailwaindClasses="w-[100px] min-h-[50px] h-auto static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                             >
                                  <QTextH5
                                   widgetId="1764323077262600"
                                   headerText="14"
                                   tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-extrabold text-[#000000FF] text-left"
                                 />

                              </QFullWidth>

                          </QFullWidth>

                      </QFullWidth>
                      <QFlex
                       widgetId="1764323077262715"
                       tailwaindClasses="w-[auto] h-auto pb-[20px] static flex flex-row gap-y-[10px] gap-x-[10px]"
                     >
<QActionFlow
          actions={actions}
            triggers={{
      
                      }}
                    >
                                             <QButton
                          buttonType="button"
                          widgetId="1764323077270067"
                          bgColor="rgba(251, 46, 134, 1.00)"
                          headerText="Add To Cart"
                          tailwaindClasses="w-[auto] h-[45px] pr-[18px] pl-[18px] static border-t-[#010000FF] border-r-[#010000FF] border-b-[#010000FF] border-l-[#010000FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Poppins] text-xs font-bold text-[#FFFFFFFF]"
                        />
</QActionFlow>

                         <QButton
                          buttonType="button"
                          widgetId="1764323077264435"
                          bgColor="rgba(255, 255, 255, 1.00)"
                          headerText="Checkout Now"
                          tailwaindClasses="w-[auto] h-[45px] pr-[18px] pl-[18px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#010000FF] border-r-[#010000FF] border-b-[#010000FF] border-l-[#010000FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Poppins] text-xs font-bold text-[#020202FF]"
                        />

                      </QFlex>
                      <QFullWidth
                       widgetId="1764323309119380"
                       bgColor="rgba(235, 235, 235, 0.45)"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[20px] pr-[10px] pb-[20px] pl-[10px] static flex flex-row justify-start items-start"
                     >
                          <QTextH5
                           widgetId="1764323408639521"
                           headerText="Enjoy FREE express & Free Kindly place your order by
 6pm on December 22nd for expedited processing on orders over £35! "
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-normal text-[#000000] text-left"
                         />

                      </QFullWidth>
                      <QFullWidth
                       widgetId="1764323808461641"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[15px] pb-[10px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[5px] gap-x-[5px]"
                     >
                          <QTextH5
                           widgetId="1764323808459157"
                           headerText="Payment method"
                           tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[23px] font-black text-[#8B8A8AFF] text-left"
                         />

                      </QFullWidth>
                      <QFullWidth
                       widgetId="1764323891296989"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[15px] pb-[10px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[15px] gap-x-[15px]"
                     >
                          <QImage
                           widgetId="1764323910368231"
                           bgUrl="https://i.postimg.cc/vHBv0t7Y/image-11-(1).png"
                           backgroundSize="contain"
                           headerText="Add Widgets Vertically"
                           tailwaindClasses="w-[auto] h-auto static object-contain"
                         />
                          <QImage
                           widgetId="1764324051616929"
                           bgUrl="https://i.postimg.cc/PNsrv4TD/image-12-(1).png"
                           backgroundSize="contain"
                           headerText="Add Widgets Vertically"
                           tailwaindClasses="w-[auto] h-auto static object-contain"
                         />
                          <QImage
                           widgetId="1764324056638555"
                           bgUrl="https://i.postimg.cc/vBC6X5Gy/image-13.png"
                           backgroundSize="contain"
                           headerText="Add Widgets Vertically"
                           tailwaindClasses="w-[auto] h-auto static object-contain"
                         />
                          <QTextH6
                           widgetId="1764324303719218"
                           headerText="Learn more"
                           textDecorationLine="underline"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                         />

                      </QFullWidth>

                  </QFullWidth>

               </QFlex>

            </QSection>
            <QSection
             widgetId="1764324516806895"
             tailwaindClasses="w-full min-h-[400px] h-auto relative flex flex-row justify-center items-start"
           >
               <QFullWidth
                widgetId="1764324780330416"
                headerText="Add Widgets"
                tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-row justify-start items-start"
              >
                   <QTabBar
                    widgetId="1764324803231297"
                    tailwaindClasses="w-full h-auto static"
                  >
                      <QTab
                       widgetId="1764324803822123"
                       tailwaindClasses="w-[auto] h-auto static"
                     >
                         <QTabHeader
                          widgetId="1764324803823617"
                          tailwaindClasses="h-[46px] static"
                        >
                            <QTextH2
                             widgetId="1764325062121717"
                             headerText="Product Details"
                             tailwaindClasses="w-[auto] h-auto mr-[60px] static font-[Arial] text-2xl font-bold text-[#000000] text-left"
                           />

                         </QTabHeader>
                         <QTabBody
                          widgetId="1764324804741477"
                          tailwaindClasses="w-[1229.4px] min-h-[200px] h-auto pb-[50px] static"
                        >
                            <QParagraph
                             widgetId="1764325065839170"
                             headerText="Step into a realm of unparalleled off-duty style with these grey acid wash joggers that effortlessly marry fashion with comfort. Crafted for those committed to style even on their days off, these joggers feature a chic drawstring waist and a wide leg cut. The distinctive acid wash adds a touch of urban edge, making these joggers a versatile choice for leisurely pursuits and relaxed outings. Elevate your casual wardrobe with the perfect blend of fashion-forward design and comfort-driven details, redefining off-duty elegance with every step."
                             tailwaindClasses="w-[auto] h-auto pt-[20px] pb-[30px] static font-[Arial] text-sm font-normal text-[#786666FF] text-left"
                           />
                            <QParagraph
                             widgetId="1764325376227600"
                             headerText="Step into a realm of unparalleled off-duty style with these grey acid wash joggers that effortlessly marry fashion with comfort. Crafted for those committed to style even on their days off, these joggers feature a chic drawstring waist and a wide leg cut. The distinctive acid wash adds a touch of urban edge, making these joggers a versatile choice for leisurely pursuits and relaxed outings. Elevate your casual wardrobe with the perfect blend of fashion-forward design and comfort-driven details, redefining off-duty elegance with every step."
                             tailwaindClasses="w-[auto] h-auto pb-[30px] static font-[Arial] text-sm font-normal text-[#786666FF] text-left"
                           />
                            <QFullWidth
                             widgetId="1764325472642436"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325540696529"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325612241968"
                                 headerText="Dark grey"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325766666735"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325766662480"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325766661745"
                                 headerText=" Acid wash finish"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325830593130"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325830586657"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325830589736"
                                 headerText="Drawstring waist"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325836595501"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325836593113"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325836594845"
                                 headerText="Side slit pockets"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325842701070"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325842707408"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325842708674"
                                 headerText="Model is 5&apos;9&quot;/175cm and wears UK 10/EU 38/US 6"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325848828751"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325848833251"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325848831523"
                                 headerText="  Product Code: 891545603 finish"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>

                         </QTabBody>

                      </QTab>
                      <QTab
                       widgetId="1764325992132717"
                       tailwaindClasses="w-[auto] h-auto static"
                     >
                         <QTabHeader
                          widgetId="1764325992130210"
                          tailwaindClasses="h-[46px] static"
                        >
                            <QTextH2
                             widgetId="1764325992136293"
                             headerText="Care Guide"
                             tailwaindClasses="w-[auto] h-auto mr-[60px] static font-[Arial] text-2xl font-bold text-[#000000] text-left"
                           />

                         </QTabHeader>
                         <QTabBody
                          widgetId="1764325992136576"
                          tailwaindClasses="w-[1229.4px] min-h-[200px] h-auto pb-[50px] static"
                        >
                            <QParagraph
                             widgetId="1764325992133332"
                             headerText="Non aenean libero morbi phasellus gravida platea maecenas nibh vestibulum mollis nostra. Fames natoque imperdiet eget sollicitudin libero est lacus purus nisl. Felis habitasse nulla condimentum commodo a litora accumsan euismod orci purus morbi. Penatibus erat montes dictum neque vulputate. At pede justo suspendisse mattis tortor. Nulla ut mauris egestas tempus ante nullam interdum cubilia scelerisque ac iaculis. Euismod nec nunc odio bibendum faucibus. Vestibulum leo lobortis viverra pretium per adipiscing arcu semper sodales nascetur risus."
                             tailwaindClasses="w-[auto] h-auto pt-[20px] pb-[30px] static font-[Arial] text-sm font-normal text-[#786666FF] text-left"
                           />
                            <QParagraph
                             widgetId="1764325992129478"
                             headerText="Himenaeos faucibus ultrices mus dis fusce suspendisse auctor. Diam venenatis potenti dignissim sagittis aenean. Arcu hac nascetur ex aliquam felis. Enim conubia at ridiculus molestie fames. Dictum ullamcorper potenti sagittis elit phasellus est. Consectetur lacinia nec taciti dui potenti egestas a."
                             tailwaindClasses="w-[auto] h-auto pb-[30px] static font-[Arial] text-sm font-normal text-[#786666FF] text-left"
                           />
                            <QFullWidth
                             widgetId="1764325992132225"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325992137856"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325992131663"
                                 headerText="Dark grey"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325992128571"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325992135429"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325992130927"
                                 headerText=" Acid wash finish"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325992131429"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325992130699"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325992130418"
                                 headerText="Drawstring waist"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325992131498"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325992132487"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325992129304"
                                 headerText="Side slit pockets"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325992135737"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325992136673"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325992137751"
                                 headerText="Model is 5&apos;9&quot;/175cm and wears UK 10/EU 38/US 6"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764325992137434"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764325992131086"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764325992136699"
                                 headerText="  Product Code: 891545603 finish"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>

                         </QTabBody>

                      </QTab>
                      <QTab
                       widgetId="1764326006322776"
                       tailwaindClasses="w-[auto] h-auto static"
                     >
                         <QTabHeader
                          widgetId="1764326006326143"
                          tailwaindClasses="h-[46px] static"
                        >
                            <QTextH2
                             widgetId="1764326006319010"
                             headerText="Reviews"
                             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-2xl font-bold text-[#000000] text-left"
                           />

                         </QTabHeader>
                         <QTabBody
                          widgetId="1764326006326250"
                          tailwaindClasses="w-[1229.4px] min-h-[200px] h-auto pb-[50px] static"
                        >
                            <QParagraph
                             widgetId="1764326006319152"
                             bgColor="rgba(255, 255, 255, 1.00)"
                             headerText="Step into a realm of unparalleled off-duty style with these grey acid wash joggers that effortlessly marry fashion with comfort. Crafted for those committed to style even on their days off, these joggers feature a chic drawstring waist and a wide leg cut. The distinctive acid wash adds a touch of urban edge, making these joggers a versatile choice for leisurely pursuits and relaxed outings. Elevate your casual wardrobe with the perfect blend of fashion-forward design and comfort-driven details, redefining off-duty elegance with every step."
                             tailwaindClasses="w-[auto] h-auto pt-[20px] pb-[30px] static font-[Arial] text-sm font-normal text-[#756F6FFF] text-left"
                           />
                            <QParagraph
                             widgetId="1764326006320857"
                             headerText="Step into a realm of unparalleled off-duty style with these grey acid wash joggers that effortlessly marry fashion with comfort. Crafted for those committed to style even on their days off, these joggers feature a chic drawstring waist and a wide leg cut. The distinctive acid wash adds a touch of urban edge, making these joggers a versatile choice for leisurely pursuits and relaxed outings. Elevate your casual wardrobe with the perfect blend of fashion-forward design and comfort-driven details, redefining off-duty elegance with every step."
                             tailwaindClasses="w-[auto] h-auto pb-[30px] static font-[Arial] text-sm font-normal text-[#786666FF] text-left"
                           />
                            <QFullWidth
                             widgetId="1764326006327214"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764326006318284"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764326006325200"
                                 headerText="Dark grey"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764326006321424"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764326006323746"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764326006321427"
                                 headerText=" Acid wash finish"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764326006325219"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764326006323112"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764326006325673"
                                 headerText="Drawstring waist"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764326006325255"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764326006324311"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764326006325550"
                                 headerText="Side slit pockets"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764326006322880"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764326006326546"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764326006323578"
                                 headerText="Model is 5&apos;9&quot;/175cm and wears UK 10/EU 38/US 6"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764326006319191"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pb-[5px] pl-[20px] static flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                           >
                                <QFullWidth
                                 widgetId="1764326006326554"
                                 bgColor="rgba(0, 0, 0, 1.00)"
                                 headerText="Add Widgets"
                                 tailwaindClasses="w-[10px] h-[10px] static rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] flex flex-row justify-start items-start"
                               >

                                </QFullWidth>
                                <QTextH4
                                 widgetId="1764326006325245"
                                 headerText="  Product Code: 891545603 finish"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#756F6FFF] text-left"
                               />

                            </QFullWidth>

                         </QTabBody>

                      </QTab>

                   </QTabBar>

               </QFullWidth>

            </QSection>
            <QSection
             widgetId="1764327512833827"
             tailwaindClasses="w-full h-auto pb-[50px] relative flex flex-row justify-center items-start"
           >
               <QFullWidth
                widgetId="1764327570032608"
                headerText="Add Widgets"
                tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-col justify-start items-start"
              >
                   <QTextH2
                    widgetId="1764327623947523"
                    headerText="More Faves This Way"
                    tailwaindClasses="w-[auto] h-auto pb-[20px] static font-[Inter] text-2xl font-semibold text-[#999696FF] text-left"
                  />
                   <QFullWidth
                    widgetId="1764327709058990"
                    headerText="Add Widgets"
                    tailwaindClasses="w-full h-auto pb-[50px] static border-b-[#CCCCCCFF] flex flex-row justify-start items-center gap-y-[10px] gap-x-[10px]"
                  >
                       <QFullWidth
                        widgetId="1764327709054419"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764327709054648"
                            headerText="Black Loungewear"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>
                       <QFullWidth
                        widgetId="1764327924728572"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764327924726310"
                            headerText="Womens Nightwear"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>
                       <QFullWidth
                        widgetId="1764327933692795"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764327933691167"
                            headerText="Hoodies & Sweatshirts"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>
                       <QFullWidth
                        widgetId="1764328285605683"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764328285605496"
                            headerText="Blanket Hoodies"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>
                       <QFullWidth
                        widgetId="1764328291454421"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764328291452003"
                            headerText="Knitwear"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>
                       <QFullWidth
                        widgetId="1764328303999635"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764328304000933"
                            headerText="Womens T-shirt"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>
                       <QFullWidth
                        widgetId="1764328488352644"
                        bgColor="rgba(190, 187, 187, 0.35)"
                        headerText="Add Widgets"
                        tailwaindClasses="w-[auto] min-h-[40px] h-auto pr-[10px] pl-[10px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#CCCCCCFF] border-r-[#CCCCCCFF] border-b-[#CCCCCCFF] border-l-[#CCCCCCFF] rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                      >
                           <QTextH5
                            widgetId="1764328488354121"
                            headerText=" Dress-shirt"
                            tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[15px] font-light text-[#645555FF] text-left"
                          />

                       </QFullWidth>

                   </QFullWidth>

               </QFullWidth>

            </QSection>

         </QSection>

      </QSection>
</> );
};

export default ProductDetailsScene;