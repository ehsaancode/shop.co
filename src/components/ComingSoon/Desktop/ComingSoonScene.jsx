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



export const ComingSoonScene = () => {
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
          widgetId="1763832854354637"
          tailwaindClasses="w-full min-h-[400px] h-auto relative block"
        >
            <QFlex
             widgetId="1763832858922214"
             bgColor="rgba(246, 245, 255, 1.00)"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-[100.26vh] static flex flex-col justify-center items-center"
           >
               <QFullWidth
                widgetId="1763832858926428"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-center items-center"
              >
                   <QFlex
                    widgetId="1763832858925580"
                    bgColor="rgba(255, 255, 255, 1.00)"
                    headerText="Add Widgets"
                    tailwaindClasses="w-[96px] min-h-[100px] h-[100px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#E1E1E1FF] border-r-[#E1E1E1FF] border-b-[#E1E1E1FF] border-l-[#E1E1E1FF] rounded-tr-[600px] rounded-tl-[600px] rounded-bl-[600px] rounded-br-[600px] flex flex-row justify-center items-center"
                  >
                      <QImage
                       widgetId="1763832858921936"
                       bgUrl="https://i.postimg.cc/vBKNMzD2/Groupffgv-1.png"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[40px] h-auto static"
                     />

                   </QFlex>

               </QFullWidth>
               <QFullWidth
                widgetId="1763832858924815"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-center items-center"
              >
                   <QTextH4
                    widgetId="1763832858929323"
                    headerText="Coming Soon"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-2xl font-bold text-[#312F2FFF] text-left"
                  />

               </QFullWidth>
               <QFullWidth
                widgetId="1763832858928653"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] pb-[20px] static flex flex-row justify-center items-center"
              >
                   <QParagraph
                    widgetId="1763832858923946"
                    headerText="We’re working on something exciting for this page.
Stay tuned for updates—we’ll be live shortly."
                    tailwaindClasses="w-[44.69%] h-auto static font-[Inter] text-sm font-medium text-[#858585FF] text-center"
                  />

               </QFullWidth>
               <QButton
                buttonType="button"
                widgetId="1763832858924103"
                bgColor="rgba(251, 46, 134, 1.00)"
                headerText="Notify Me"
                tailwaindClasses="w-[130px] h-[45px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-xs font-normal text-[#FFFFFFFF]"
              />

            </QFlex>

         </QSection>
</> );
};

export default ComingSoonScene;