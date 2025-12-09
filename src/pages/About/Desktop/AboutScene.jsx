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



export const AboutScene = () => {
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




              const navigateToLandingPage = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/LandingPage");
              }, [navigate]);

            
const actions = {
      navigateToLandingPage,
  };


return (
<>
      <QSection
       widgetId="1763832987872200"
       tailwaindClasses="w-full min-h-[400px] h-auto relative"
     >
         <QSection
          widgetId="1763832995107485"
          bgColor="rgba(255, 255, 255, 1.00)"
          tailwaindClasses="w-full min-h-[100%vh] h-auto relative block"
        >
            <QSection
             widgetId="1763832995116603"
             tailwaindClasses="w-full min-h-[400px] h-auto relative block"
           >
               <QSection
                widgetId="1764068727117628"
                bgColor="rgba(255, 255, 255, 1.00)"
                tailwaindClasses="w-full min-h-[100%vh] h-auto relative block"
              >
                  <QSection
                   widgetId="1764068727131336"
                   bgColor="var(--innerpagebreadcrumbbg)"
                   tailwaindClasses="w-full h-auto relative flex flex-row justify-center items-start"
                 >
                     <QFlex
                      widgetId="1764068727134444"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-col justify-center items-start"
                    >
                        <QTextH2
                         widgetId="1764068727127895"
                         headerText="About us"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-semibold text-[#000000] text-left"
                       />
                        <QFullWidth
                         widgetId="1764068727127390"
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
                             widgetId="1764068727129165"
                             headerText="Home"
                             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#9CA3AFFF] text-left"
                           />
</QActionFlow>

                            <QImage
                             widgetId="1764068727134573"
                             bgUrl="https://imgcdn.kuick.com/cms-designer/erp/breadcrum-grey.svg"
                             backgroundSize="cover"
                             headerText="Add Widgets Vertically"
                             tailwaindClasses="w-[16px] h-auto mt-[2px] static object-cover"
                           />
                            <QTextH5
                             widgetId="1764068727135484"
                             headerText="About us"
                             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#FB2E86FF] text-left"
                           />

                        </QFullWidth>

                     </QFlex>

                  </QSection>
                  <QSection
                   widgetId="1764068814424701"
                   tailwaindClasses="w-full min-h-[400px] h-auto pt-[60px] relative flex flex-row justify-center items-start"
                 >
                     <QFlex
                      widgetId="1764069004913652"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[90%] h-auto static flex flex-row justify-between items-center"
                    >
                        <QFullWidth
                         widgetId="1764069004920752"
                         backgroundSize="fill"
                         headerText="Add Widgets"
                         tailwaindClasses="w-[39%] min-h-[100px] h-[518.75px] static object-fill rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-row justify-start items-start"
                       >
                            <QImage
                             widgetId="1764236835330169"
                             bgUrl="https://imgcdn.kuick.com/cms-testing-images/fashion.jpg"
                             backgroundSize="cover"
                             headerText="Add Widgets Vertically"
                             tailwaindClasses="w-full h-[460px] static object-cover rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
                           />

                        </QFullWidth>
                        <QFullWidth
                         widgetId="1764069004915379"
                         headerText="Add Widgets"
                         tailwaindClasses="w-[55%] h-auto static flex flex-col justify-start items-start"
                       >
                            <QFullWidth
                             widgetId="1764069004918100"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start"
                           >
                                <QTextH4
                                 widgetId="1764069004916641"
                                 headerText="Our Experience"
                                 tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-lg font-semibold text-[#F85E9FFF] text-left"
                               />
                                <QTextH3
                                 widgetId="1764069004916766"
                                 headerText="Crafting Stories Through Timeless Fashion"
                                 tailwaindClasses="w-[auto] h-auto static font-[Inter] text-3xl font-semibold text-[#2D3134FF] text-left"
                               />

                            </QFullWidth>
                            <QParagraph
                             widgetId="1764069004921560"
                             headerText="We specialize in creating clothing that transforms wardrobes into expressions of you. With years of craftsmanship, premium fabrics, and thoughtful design, we bring comfort, elegance, and lasting quality to every outfit. Explore our collections and begin your style journey today—your dream wardrobe is calling."
                             tailwaindClasses="w-[auto] h-auto pb-[20px] static font-[Inter] text-base font-normal text-[#5B5F62FF] text-left"
                           />
                            <QFullWidth
                             widgetId="1764069004920579"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static flex flex-col justify-between items-start gap-y-[15px] gap-x-[15px]"
                           >
                                <QFlex
                                 widgetId="1764069004916874"
                                 tailwaindClasses="w-full h-auto static flex flex-row justify-between items-start"
                               >
                                   <QFlex
                                    widgetId="1764069004913119"
                                    bgColor="rgba(244, 175, 156, 0.20)"
                                    headerText="Add Widgets"
                                    tailwaindClasses="w-[200px] min-h-[100px] h-[177px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#D2CDCD01] border-r-[#D2CDCD01] border-b-[#D2CDCD01] border-l-[#D2CDCD01] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] flex flex-col justify-center items-center"
                                  >
                                      <QTextH2
                                       widgetId="1764069004920657"
                                       headerText="12K+"
                                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-[40px] font-bold text-[#F66F4DFF] text-left"
                                     />
                                      <QTextH4
                                       widgetId="1764069004922484"
                                       headerText="Happy 
Customers"
                                       tailwaindClasses="w-[auto] h-auto pt-[5px] static font-[Poppins] text-lg font-normal text-[#939597FF] text-center"
                                     />

                                   </QFlex>
                                   <QFlex
                                    widgetId="1764069004914011"
                                    bgColor="rgba(244, 175, 156, 0.20)"
                                    headerText="Add Widgets"
                                    tailwaindClasses="w-[200px] min-h-[100px] h-[177px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#D2CDCD01] border-r-[#D2CDCD01] border-b-[#D2CDCD01] border-l-[#D2CDCD01] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] flex flex-col justify-center items-center"
                                  >
                                      <QTextH2
                                       widgetId="1764069004913617"
                                       headerText="16+"
                                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-[40px] font-bold text-[#F66F4DFF] text-left"
                                     />
                                      <QTextH4
                                       widgetId="1764069004916903"
                                       headerText="Awards 
Winning"
                                       tailwaindClasses="w-[auto] h-auto pt-[5px] static font-[Poppins] text-lg font-normal text-[#939597FF] text-center"
                                     />

                                   </QFlex>
                                   <QFlex
                                    widgetId="1764069004921208"
                                    bgColor="rgba(244, 175, 156, 0.20)"
                                    headerText="Add Widgets"
                                    tailwaindClasses="w-[200px] min-h-[100px] h-[177px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#D2CDCD01] border-r-[#D2CDCD01] border-b-[#D2CDCD01] border-l-[#D2CDCD01] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] flex flex-col justify-center items-center"
                                  >
                                      <QTextH2
                                       widgetId="1764069004919993"
                                       headerText="20+"
                                       tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-[40px] font-bold text-[#F66F4DFF] text-left"
                                     />
                                      <QTextH4
                                       widgetId="1764069004922869"
                                       headerText="Years of Craftsmanship"
                                       tailwaindClasses="w-[auto] h-auto pt-[5px] static font-[Poppins] text-lg font-normal text-[#939597FF] text-center"
                                     />

                                   </QFlex>

                                </QFlex>

                            </QFullWidth>

                        </QFullWidth>

                     </QFlex>

                  </QSection>
                  <QSection
                   widgetId="1764073527706866"
                   tailwaindClasses="w-full min-h-[400px] h-auto pb-[60px] relative flex flex-row justify-center items-start"
                 >
                     <QFlex
                      widgetId="1764073530436683"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[90%] h-auto static block"
                    >
                        <QFullWidth
                         widgetId="1764073530431020"
                         headerText="Add Widgets"
                         tailwaindClasses="w-full h-auto static flex flex-col justify-center items-center"
                       >
                            <QTextH2
                             widgetId="1764073530436037"
                             headerText="Our Features"
                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[35px] font-extrabold text-[#000000] text-left"
                           />

                        </QFullWidth>
                        <QFullWidth
                         widgetId="1764073530438408"
                         headerText="Add Widgets"
                         tailwaindClasses="w-full min-h-[100px] h-auto pt-[45px] static flex flex-row justify-between items-center"
                       >
                            <QFullWidth
                             widgetId="1764073530435695"
                             bgColor="rgba(244, 244, 244, 0.00)"
                             headerText="Add Widgets"
                             tailwaindClasses="w-[24%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
                           >
                                <QImage
                                 widgetId="1764073530433712"
                                 bgUrl="https://cdn-icons-png.flaticon.com/128/9326/9326180.png"
                                 backgroundSize="cover"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[70px] h-auto static object-cover"
                               />
                                <QTextH4
                                 widgetId="1764073530433149"
                                 headerText="Free Delivery"
                                 tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-[21px] font-bold text-[#000000] text-left"
                               />
                                <QTextH3
                                 widgetId="1764073530439880"
                                 headerText="Sapien dignissim rhoncus cubilia urna viverra consectetur curae nec. Turpis tempor amet phasellus vitae eleifend senectus."
                                 tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                               />
                                <QFlex
                                 widgetId="1764073530435140"
                                 tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                               >

                                </QFlex>

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764073530435902"
                             bgColor="rgba(244, 244, 244, 0.00)"
                             headerText="Add Widgets"
                             tailwaindClasses="w-[24%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
                           >
                                <QImage
                                 widgetId="1764073530438770"
                                 bgUrl="https://cdn-icons-png.flaticon.com/128/9449/9449681.png"
                                 backgroundSize="cover"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[70px] h-auto static object-cover"
                               />
                                <QTextH4
                                 widgetId="1764073530438886"
                                 headerText="100% Cash Back"
                                 tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-[21px] font-bold text-[#000000] text-left"
                               />
                                <QTextH3
                                 widgetId="1764073530441779"
                                 headerText="Sapien dignissim rhoncus cubilia urna viverra consectetur curae nec. Turpis tempor amet phasellus vitae eleifend senectus."
                                 tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                               />
                                <QFlex
                                 widgetId="1764073530435839"
                                 tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                               >

                                </QFlex>

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764073530440268"
                             bgColor="rgba(244, 244, 244, 0.00)"
                             headerText="Add Widgets"
                             tailwaindClasses="w-[24%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
                           >
                                <QImage
                                 widgetId="1764073530434233"
                                 bgUrl="https://cdn-icons-png.flaticon.com/128/1534/1534214.png"
                                 backgroundSize="cover"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[70px] h-auto static object-cover"
                               />
                                <QTextH4
                                 widgetId="1764073530435188"
                                 headerText="Quality Product"
                                 tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-[21px] font-bold text-[#000000] text-left"
                               />
                                <QTextH3
                                 widgetId="1764073530436954"
                                 headerText="Sapien dignissim rhoncus cubilia urna viverra consectetur curae nec. Turpis tempor amet phasellus vitae eleifend senectus."
                                 tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                               />
                                <QFlex
                                 widgetId="1764073530435152"
                                 tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                               >

                                </QFlex>

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764073530442932"
                             bgColor="rgba(244, 244, 244, 0.00)"
                             headerText="Add Widgets"
                             tailwaindClasses="w-[24%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
                           >
                                <QImage
                                 widgetId="1764073530439827"
                                 bgUrl="https://cdn-icons-png.flaticon.com/128/834/834060.png"
                                 backgroundSize="cover"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[70px] h-auto static object-cover"
                               />
                                <QTextH4
                                 widgetId="1764073530441200"
                                 headerText="24/7 Support"
                                 tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-[21px] font-bold text-[#000000] text-left"
                               />
                                <QTextH3
                                 widgetId="1764073530440067"
                                 headerText="Sapien dignissim rhoncus cubilia urna viverra consectetur curae nec. Turpis tempor amet phasellus vitae eleifend senectus."
                                 tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                               />
                                <QFlex
                                 widgetId="1764073530442875"
                                 tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                               >

                                </QFlex>

                            </QFullWidth>

                        </QFullWidth>

                     </QFlex>

                  </QSection>
                  <QSection
                   widgetId="1764077280262876"
                   bgColor="var(--innerpagebreadcrumbbg)"
                   tailwaindClasses="w-full min-h-[400px] h-auto pt-[30px] pb-[50px] relative flex flex-row justify-center items-start"
                 >
                     <QFlex
                      widgetId="1764077283184774"
                      bgColor="rgba(241, 223, 213, 0.00)"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[90%] min-h-[100px] h-auto pt-[20px] pr-[20px] pb-[20px] pl-[20px] static block"
                    >
                        <QFullWidth
                         widgetId="1764077283181936"
                         headerText="Add Widgets"
                         tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-center items-center"
                       >
                            <QTextH2
                             widgetId="1764077283181956"
                             headerText="What our customers say"
                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-4xl font-black text-[#000000FF] text-center"
                           />
                            <QParagraph
                             widgetId="1764077283182186"
                             headerText="&quot;Invest in your company&apos;s future with our comprehensive financial solution. Contact us for pricing details
and see how we can help you streamline your finances and reach your business goals."
                             tailwaindClasses="w-[auto] h-auto pt-[20px] pb-[30px] static font-[DMSans] text-sm font-normal text-[#000000] text-center"
                           />

                        </QFullWidth>
                        <QFullWidth
                         widgetId="1764077283182424"
                         headerText="Add Widgets"
                         tailwaindClasses="w-full min-h-[100px] h-auto pt-[10px] static flex flex-row justify-between items-center"
                       >
                            <QFlex
                             widgetId="1764077283180918"
                             tailwaindClasses="w-[32%] h-auto static flex flex-col justify-center items-start gap-y-5 gap-x-5"
                           >
                               <QFullWidth
                                widgetId="1764077283178680"
                                bgColor="rgba(251, 251, 251, 1.00)"
                                headerText="Add Widgets"
                                tailwaindClasses="w-full h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start gap-y-[18px] gap-x-[18px]"
                              >
                                   <QTextH3
                                    widgetId="1764077283180970"
                                    headerText="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable."
                                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764077283179719"
                                    tailwaindClasses="h-auto pt-[30px] static flex flex-row justify-between items-center"
                                  >
                                      <QFlex
                                       widgetId="1764077283185773"
                                       tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                                     >
                                         <QImage
                                          widgetId="1764077283182087"
                                          bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                                          backgroundSize="cover"
                                          headerText="Add Widgets Vertically"
                                          tailwaindClasses="w-[40px] h-auto static object-cover"
                                        />
                                         <QFlex
                                          widgetId="1764077283184218"
                                          tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                                        >
                                            <QTextH4
                                             widgetId="1764077283182592"
                                             headerText="Joew Harbert"
                                             tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000FF] text-left"
                                           />
                                            <QTextH4
                                             widgetId="1764077283184245"
                                             headerText="CEO, NoonBrew"
                                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                                           />

                                         </QFlex>

                                      </QFlex>

                                   </QFlex>

                               </QFullWidth>
                               <QFullWidth
                                widgetId="1764077283180783"
                                bgColor="rgba(251, 251, 251, 1.00)"
                                headerText="Add Widgets"
                                tailwaindClasses="w-full h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-between items-start"
                              >
                                   <QTextH3
                                    widgetId="1764077283182650"
                                    headerText="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable."
                                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764077283179035"
                                    tailwaindClasses="h-auto pt-[30px] static flex flex-row justify-between items-center"
                                  >
                                      <QFlex
                                       widgetId="1764077283180649"
                                       tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                                     >
                                         <QImage
                                          widgetId="1764077283182560"
                                          bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                                          backgroundSize="cover"
                                          headerText="Add Widgets Vertically"
                                          tailwaindClasses="w-[40px] h-auto static object-cover"
                                        />
                                         <QFlex
                                          widgetId="1764077283184495"
                                          tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                                        >
                                            <QTextH4
                                             widgetId="1764077283187490"
                                             headerText="Joew Harbert"
                                             tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000FF] text-left"
                                           />
                                            <QTextH4
                                             widgetId="1764077283181246"
                                             headerText="CEO, NoonBrew"
                                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                                           />

                                         </QFlex>

                                      </QFlex>

                                   </QFlex>

                               </QFullWidth>

                            </QFlex>
                            <QFlex
                             widgetId="1764077283184845"
                             tailwaindClasses="w-[32%] h-auto static flex flex-col gap-y-5 gap-x-5"
                           >
                               <QFullWidth
                                widgetId="1764077283186726"
                                bgColor="rgba(251, 251, 251, 1.00)"
                                headerText="Add Widgets"
                                tailwaindClasses="w-full h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-between items-start"
                              >
                                   <QTextH3
                                    widgetId="1764077283186668"
                                    headerText="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. "
                                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764077283182401"
                                    tailwaindClasses="h-auto pt-[30px] static flex flex-row justify-start items-center"
                                  >
                                      <QFlex
                                       widgetId="1764077283180871"
                                       tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                                     >
                                         <QImage
                                          widgetId="1764077283188096"
                                          bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                                          backgroundSize="cover"
                                          headerText="Add Widgets Vertically"
                                          tailwaindClasses="w-[40px] h-auto static object-cover"
                                        />
                                         <QFlex
                                          widgetId="1764077283185811"
                                          tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                                        >
                                            <QTextH4
                                             widgetId="1764077283183242"
                                             headerText="Joew Harbert"
                                             tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000FF] text-left"
                                           />
                                            <QTextH4
                                             widgetId="1764077283187819"
                                             headerText="CEO, NoonBrew"
                                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                                           />

                                         </QFlex>

                                      </QFlex>

                                   </QFlex>

                               </QFullWidth>
                               <QFullWidth
                                widgetId="1764077283180539"
                                bgColor="rgba(251, 251, 251, 1.00)"
                                headerText="Add Widgets"
                                tailwaindClasses="w-full h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-between items-start"
                              >
                                   <QTextH3
                                    widgetId="1764077283181661"
                                    headerText="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. "
                                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764077283179696"
                                    tailwaindClasses="h-auto pt-[30px] static flex flex-row justify-between items-center"
                                  >
                                      <QFlex
                                       widgetId="1764077283181048"
                                       tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                                     >
                                         <QImage
                                          widgetId="1764077283187714"
                                          bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                                          backgroundSize="cover"
                                          headerText="Add Widgets Vertically"
                                          tailwaindClasses="w-[40px] h-auto static object-cover"
                                        />
                                         <QFlex
                                          widgetId="1764077283180160"
                                          tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                                        >
                                            <QTextH4
                                             widgetId="1764077283183659"
                                             headerText="Joew Harbert"
                                             tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000FF] text-left"
                                           />
                                            <QTextH4
                                             widgetId="1764077283180700"
                                             headerText="CEO, NoonBrew"
                                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                                           />

                                         </QFlex>

                                      </QFlex>

                                   </QFlex>

                               </QFullWidth>

                            </QFlex>
                            <QFlex
                             widgetId="1764077283188916"
                             tailwaindClasses="w-[32%] h-auto static flex flex-col gap-y-5 gap-x-5"
                           >
                               <QFullWidth
                                widgetId="1764077283183163"
                                bgColor="rgba(251, 251, 251, 1.00)"
                                headerText="Add Widgets"
                                tailwaindClasses="w-full h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-between items-start"
                              >
                                   <QTextH3
                                    widgetId="1764077283188403"
                                    headerText="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable."
                                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764077283184410"
                                    tailwaindClasses="h-auto pt-[30px] static flex flex-row justify-between items-center"
                                  >
                                      <QFlex
                                       widgetId="1764077283181409"
                                       tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                                     >
                                         <QImage
                                          widgetId="1764077283188991"
                                          bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                                          backgroundSize="cover"
                                          headerText="Add Widgets Vertically"
                                          tailwaindClasses="w-[40px] h-auto static object-cover"
                                        />
                                         <QFlex
                                          widgetId="1764077283188031"
                                          tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                                        >
                                            <QTextH4
                                             widgetId="1764077283185230"
                                             headerText="Joew Harbert"
                                             tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000FF] text-left"
                                           />
                                            <QTextH4
                                             widgetId="1764077283188400"
                                             headerText="CEO, NoonBrew"
                                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                                           />

                                         </QFlex>

                                      </QFlex>

                                   </QFlex>

                               </QFullWidth>
                               <QFullWidth
                                widgetId="1764077283183062"
                                bgColor="rgba(251, 251, 251, 1.00)"
                                headerText="Add Widgets"
                                tailwaindClasses="w-full h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-between items-start"
                              >
                                   <QTextH3
                                    widgetId="1764077283183920"
                                    headerText="Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable."
                                    tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                                  />
                                   <QFlex
                                    widgetId="1764077283187110"
                                    tailwaindClasses="h-auto pt-[30px] static flex flex-row justify-between items-center"
                                  >
                                      <QFlex
                                       widgetId="1764077283192045"
                                       tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                                     >
                                         <QImage
                                          widgetId="1764077283187661"
                                          bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                                          backgroundSize="cover"
                                          headerText="Add Widgets Vertically"
                                          tailwaindClasses="w-[40px] h-auto static object-cover"
                                        />
                                         <QFlex
                                          widgetId="1764077283189476"
                                          tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                                        >
                                            <QTextH4
                                             widgetId="1764077283191143"
                                             headerText="Joew Harbert"
                                             tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000FF] text-left"
                                           />
                                            <QTextH4
                                             widgetId="1764077283189409"
                                             headerText="CEO, NoonBrew"
                                             tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                                           />

                                         </QFlex>

                                      </QFlex>

                                   </QFlex>

                               </QFullWidth>

                            </QFlex>

                        </QFullWidth>

                     </QFlex>

                  </QSection>

               </QSection>

            </QSection>

         </QSection>

      </QSection>
</> );
};

export default AboutScene;