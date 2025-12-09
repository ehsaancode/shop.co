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



export const CartItemScene = () => {
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
          widgetId="1764420953030401"
          tailwaindClasses="w-full min-h-[400px] h-auto relative block"
        >
            <QFlex
             widgetId="1764420958238506"
             headerText="Add Widgets"
             tailwaindClasses="w-[600px] min-h-[100px] h-auto static flex flex-row justify-start items-start"
           >
               <QImage
                widgetId="1764420958237323"
                bgUrl="https://i.postimg.cc/52wMM4ms/Mask-Group.png"
                backgroundSize="cover"
                headerText="Add Widgets Vertically"
                tailwaindClasses="w-[100px] min-h-[100px] h-[100px] static object-cover rounded-tr-[15px] rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]"
              />
               <QFullWidth
                widgetId="1764420958243947"
                headerText="Add Widgets"
                tailwaindClasses="w-[70%] min-h-[100px] h-[100px] pl-[20px] static flex flex-col justify-start items-start"
              >
                   <QTextH2
                    widgetId="1764420958239026"
                    headerText="DuoComfort Sofa Premium"
                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-bold text-[#000000] text-left"
                  />
                   <QParagraph
                    widgetId="1764420958237628"
                    headerText="Size: L"
                    tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#060606FF] text-left"
                  />
                   <QFlex
                    widgetId="1764420958240255"
                    tailwaindClasses="w-full h-auto static flex flex-row justify-between items-center"
                  >
                      <QParagraph
                       widgetId="1764420958238130"
                       headerText="Quantity: 1"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#000000FF] text-left"
                     />

                   </QFlex>
                   <QFlex
                    widgetId="1764420958244719"
                    tailwaindClasses="w-[460px] h-auto static flex flex-row justify-between items-end"
                  >
                      <QTextH3
                       widgetId="1764420958242346"
                       headerText="$20.00"
                       tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-bold text-[#000000] text-left"
                     />
                      <QImage
                       widgetId="1764420958243767"
                       bgUrl="https://i.postimg.cc/Fz9RTm7f/trash.png"
                       headerText="Add Widgets Vertically"
                       tailwaindClasses="w-[20px] h-auto static"
                     />

                   </QFlex>

               </QFullWidth>

            </QFlex>

         </QSection>
</> );
};

export default CartItemScene;