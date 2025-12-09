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



export const TotalWidgetScene = () => {
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
          widgetId="1763988829888049"
          bgColor="var(--innerpagebreadcrumbbg)"
          tailwaindClasses="w-full h-auto pt-[30px] pr-[30px] pb-[30px] pl-[30px] relative block"
        >
            <QFlex
             widgetId="1763988834230969"
             headerText="Add Widgets"
             tailwaindClasses="w-full h-auto pt-[40px] static block"
           >
               <QFullWidth
                widgetId="1763988834231449"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
              >
                   <QTextH4
                    widgetId="1763988834231446"
                    headerText="Subtotal"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                  />
                   <QTextH4
                    widgetId="1763988834231228"
                    headerText="$120"
                    tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#000000] text-left"
                  />

               </QFullWidth>
               <QFullWidth
                widgetId="1763988834234201"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
              >
                   <QTextH4
                    widgetId="1763988834239379"
                    headerText="Shipping"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                  />
                   <QTextH4
                    widgetId="1763988834230533"
                    headerText="Calculated at the next step"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                  />

               </QFullWidth>
               <QFullWidth
                widgetId="1763988834230217"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
              >
                   <QTextH4
                    widgetId="1763988834235211"
                    headerText="Total"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-bold text-[#000000] text-left"
                  />
                   <QTextH4
                    widgetId="1763988834231752"
                    headerText="$120"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-bold text-[#000000] text-left"
                  />

               </QFullWidth>
               <QFullWidth
                widgetId="1763988834239704"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
              >
                   <QButton
                    buttonType="button"
                    widgetId="1763988834237700"
                    bgColor="var(--primarybtcolor)"
                    headerText="PAY NOW"
                    tailwaindClasses="w-full h-[60px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-[15px] font-normal text-[#FFFFFFFF]"
                  />

               </QFullWidth>

            </QFlex>

         </QSection>
</> );
};

export default TotalWidgetScene;