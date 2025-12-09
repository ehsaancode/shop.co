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



export const CategoryScene = () => {
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




const actions = {
  };


return (
<>
         <QSection
          widgetId="1764337238118289"
          tailwaindClasses="w-full min-h-[400px] h-auto relative block"
        >
            <QFullWidth
             widgetId="1764337241152996"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-row justify-between items-start"
           >
                <QFlex
                 widgetId="1764337241149549"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[32%] h-auto relative top-[0px] left-[0px] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337241145636"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337241144438"
                       bgUrl="https://cdn.pixabay.com/photo/2016/08/20/21/37/jaffa-1608610_1280.jpg"
                       backgroundSize="cover"
                       boxShadow="  30px  "
                       headerText="Add Widgets Vertically"
                       textShadow="30px"
                       tailwaindClasses="w-full h-[370px] static object-cover rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337241143556"
                    bgColor="rgba(0, 0, 0, 0.74)"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] absolute bottom-[0px] rounded-bl-[30px] rounded-br-[30px] flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337241152322"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337241151837"
                          headerText="Stylish Jeans"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-[15px] font-semibold text-[#FFFFFFFF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337241146372"
                          headerText="3,584 Products"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-light text-[#FFFFFF85] text-left"
                        />

                      </QFlex>

                   </QFlex>

                </QFlex>
                <QFlex
                 widgetId="1764337241149198"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[32%] h-auto relative top-[0px] left-[0px] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337241152726"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337241151065"
                       bgUrl="https://cdn.pixabay.com/photo/2018/10/13/05/23/shoe-3743507_1280.jpg"
                       backgroundSize="cover"
                       boxShadow="  30px  "
                       headerText="Add Widgets Vertically"
                       textShadow="30px"
                       tailwaindClasses="w-full h-[370px] static object-cover rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337241147749"
                    bgColor="rgba(0, 0, 0, 0.74)"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] absolute bottom-[0px] rounded-bl-[30px] rounded-br-[30px] flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337241147844"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337241148462"
                          headerText="Shoes"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-[15px] font-semibold text-[#FFFFFFFF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337241145453"
                          headerText="3,584 Products"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-light text-[#FFFFFF85] text-left"
                        />

                      </QFlex>

                   </QFlex>

                </QFlex>
                <QFlex
                 widgetId="1764337241158129"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[32%] h-auto relative top-[0px] left-[0px] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337241157097"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337241152293"
                       bgUrl="https://cdn.pixabay.com/photo/2020/01/09/08/49/dress-4752316_1280.jpg"
                       backgroundSize="cover"
                       boxShadow="  30px  "
                       headerText="Add Widgets Vertically"
                       textShadow="30px"
                       tailwaindClasses="w-full h-[370px] static object-cover rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337241150888"
                    bgColor="rgba(0, 0, 0, 0.74)"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] absolute bottom-[0px] rounded-bl-[30px] rounded-br-[30px] flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337241150881"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337241150668"
                          headerText="Casual Shirts"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-[15px] font-semibold text-[#FFFFFFFF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337241152594"
                          headerText="3,584 Products"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-light text-[#FFFFFF85] text-left"
                        />

                      </QFlex>

                   </QFlex>

                </QFlex>

            </QFullWidth>

         </QSection>
</> );
};

export default CategoryScene;