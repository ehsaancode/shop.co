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



export const FeaturedProductListScene = () => {
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
          widgetId="1764337286938969"
          tailwaindClasses="w-full min-h-[400px] h-auto relative block"
        >
            <QFullWidth
             widgetId="1764337296722791"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto pb-[60px] static flex flex-row justify-between items-start"
           >
                <QFlex
                 widgetId="1764337296726922"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[24%] h-auto static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337296729533"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337296729631"
                       bgUrl="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428615_1280.jpg"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-full h-[234px] static object-cover rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-xl"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337296730333"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] static flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337296726852"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337296729937"
                          headerText="Buggy Jeans"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-xs font-semibold text-[#007580FF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337296725626"
                          headerText="$20"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-semibold text-[#000000FF] text-left"
                        />

                      </QFlex>
                      <QImage
                       widgetId="1764337296731120"
                       bgUrl="https://api.imghippo.com/files/klNr5985GKM.png"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[33px] h-auto static"
                     />

                   </QFlex>

                </QFlex>
                <QFlex
                 widgetId="1764337296724141"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[24%] h-auto static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337296722008"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337296724972"
                       bgUrl="https://i.postimg.cc/2Ss85W45/17520.jpg"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-full h-[234px] static object-cover rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-xl"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337296725756"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] static flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337296732196"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337296728974"
                          headerText="Wrappers"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-xs font-semibold text-[#007580FF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337296727507"
                          headerText="$20"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-semibold text-[#000000FF] text-left"
                        />

                      </QFlex>
                      <QImage
                       widgetId="1764337296730280"
                       bgUrl="https://api.imghippo.com/files/klNr5985GKM.png"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[33px] h-auto static"
                     />

                   </QFlex>

                </QFlex>
                <QFlex
                 widgetId="1764337296726547"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[24%] h-auto static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337296726109"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337296723250"
                       bgUrl="https://i.postimg.cc/9FvjPhrV/pretty-blonde-woman-wearing-floral-dress-posing-near-yellow-wall.jpg"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-full h-[234px] static object-cover rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-xl"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337296728148"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] static flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337296730885"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337296731089"
                          headerText="One Piece"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-xs font-semibold text-[#007580FF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337296733977"
                          headerText="$20"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-semibold text-[#000000FF] text-left"
                        />

                      </QFlex>
                      <QImage
                       widgetId="1764337296725935"
                       bgUrl="https://api.imghippo.com/files/klNr5985GKM.png"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[33px] h-auto static"
                     />

                   </QFlex>

                </QFlex>
                <QFlex
                 widgetId="1764337296732591"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 headerText="Add Widgets"
                 textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                 tailwaindClasses="w-[24%] h-auto static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
               >
                   <QFlex
                    widgetId="1764337296726068"
                    tailwaindClasses="w-full h-auto static block"
                  >
                      <QImage
                       widgetId="1764337296728090"
                       bgUrl="https://i.postimg.cc/nrjPMXKn/20268.jpg"
                       backgroundSize="cover"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-full h-[234px] static object-cover rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-xl"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764337296735553"
                    tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] static flex flex-row justify-between items-center"
                  >
                      <QFlex
                       widgetId="1764337296733574"
                       tailwaindClasses="w-[60%] h-auto static block"
                     >
                         <QTextH3
                          widgetId="1764337296728885"
                          headerText="Library Stool Chair"
                          tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-xs font-semibold text-[#007580FF] text-left"
                        />
                         <QTextH3
                          widgetId="1764337296733389"
                          headerText="$20"
                          tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-semibold text-[#000000FF] text-left"
                        />

                      </QFlex>
                      <QImage
                       widgetId="1764337296728155"
                       bgUrl="https://api.imghippo.com/files/klNr5985GKM.png"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[33px] h-auto static"
                     />

                   </QFlex>

                </QFlex>

            </QFullWidth>

         </QSection>
</> );
};

export default FeaturedProductListScene;