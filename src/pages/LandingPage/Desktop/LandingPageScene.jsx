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



export const LandingPageScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [defaultRepeatState990, setDefaultRepeatState990] = useState([{
        "product_id": 0,
        "category_id": 0,
        "name": "",
        "description": "",
        "brand": "",
        "slug": "",
        "thumbnail": "sssssss",
        "is_active": 0,
        "created_at": "",
        "price": 0,
        "stock_quantity": 0,
        "is_Featured": 0
      }]);
const [productsResp, setProductsResp] = useState(null);
const [categoriesResp, setCategoriesResp] = useState(null);
const [categories, setCategories] = useState(null);
const [defaultRepeatState1010, setDefaultRepeatState1010] = useState([{
      "category_id": 0,
      "name": "xxxxx",
      "parent_id": 0,
      "slug": "xxxx",
      "created_at": "xxxxxx",
      "image": "xxxxx",
      "productsCount": 0
    }]);
const [defaultRepeatState1031, setDefaultRepeatState1031] = useState([]);
const [countData, setCountData] = useState(null);

  
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
                       Action1865();
                    }, []);

              const Action1865 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/get-cart-count",
                    method: "POST",
                    body: {
  "user_id": "2"
},
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                  );

                  setLoading(true);
                  
                set('undefined',userData?.data?.count);  
                 
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              useEffect(() => {
                       Action1632();
                    }, []);

              const Action1632 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/get-products",
                    method: "POST",
                    body: {},
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                  );

                  setLoading(true);
                  
                  setDefaultRepeatState990(userData?.data?.products);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              

              const Action1928 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://dummyjson.com/products/1",
                    method: "GET",
                    body: {},
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                  );

                  setLoading(true);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              const navigateToShop = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Shop");
              }, [navigate]);

            
  
            
  
              
            
   
            
            
const actions = {
      navigateToShop,
      Action1928,
  };


return (
<>
      <QSection
       widgetId="1764313200078294"
       tailwaindClasses="w-full min-h-[400px] h-auto relative"
     >
         <QSlider
          sliderIndicatorType="circle"
          sliderArrowVisible="true"
          indicatorActiveColor="rgba(251, 46, 134, 1.00)"
          indicatorPositionType="overlay"
          sliderAutoPlay="false"
          widgetId="1764313365622033"
          headerText="Add Widgets"
          tailwaindClasses="w-full h-[650px] static"
        >
            <QFlex
             widgetId="1764313366710143"
             bgColor="rgba(226, 243, 255, 1.00)"
             headerText="Add Widgets"
             tailwaindClasses="w-full h-[650px] pt-[40px] pl-[40px] static flex flex-col flex-wrap justify-start items-center"
           >
               <QFlex
                widgetId="1764314469547085"
                headerText="Add Widgets"
                tailwaindClasses="w-[50%] min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-6 gap-x-6"
              >
                  <QTextH1
                   widgetId="1764314469554444"
                   headerText="FIND CLOTHES THAT MATCHES YOUR STYLE"
                   tailwaindClasses="w-full h-auto static font-[Besley] text-6xl font-black text-[#000000] text-left leading-[1.3] uppercase"
                 />
                  <QParagraph
                   widgetId="1764314469550478"
                   headerText="Browse through our diverse range of meticulously crafted 
garments, designed to bring out your individuality 
and cater to your sense of style."
                   tailwaindClasses="w-full h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                 />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToShop",
                      }}
                    >
                                      <QButton
                   buttonType="button"
                   widgetId="1764314469553950"
                   bgColor="var(--primarybtcolor)"
                   headerText="Shop Now"
                   tailwaindClasses="w-[auto] h-auto pt-[16px] pr-[32px] pb-[16px] pl-[32px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Inter] text-sm font-normal text-[#FFFFFFFF]"
                 />
</QActionFlow>

                  <QFlex
                   widgetId="1764314469554931"
                   tailwaindClasses="w-[auto] h-auto static flex flex-row gap-y-6 gap-x-6"
                 >
                     <QFlex
                      widgetId="1764314469548019"
                      tailwaindClasses="w-[auto] h-auto static flex flex-col gap-y-1 gap-x-1"
                    >
                        <QTextH4
                         widgetId="1764314469549393"
                         headerText="200+"
                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-5xl font-extrabold text-[#000000] text-left"
                       />
                        <QParagraph
                         widgetId="1764314469550146"
                         headerText="International Brands"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                       />

                     </QFlex>
                     <QImage
                      widgetId="1764314469550300"
                      bgUrl="https://i.postimg.cc/DzPY0zxt/Line-9.png"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-auto static"
                    />
                     <QFlex
                      widgetId="1764314469553718"
                      tailwaindClasses="w-[auto] h-auto static flex flex-col gap-y-1 gap-x-1"
                    >
                        <QTextH4
                         widgetId="1764314469552625"
                         headerText="2,000+"
                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-5xl font-extrabold text-[#000000] text-left"
                       />
                        <QParagraph
                         widgetId="1764314469554765"
                         headerText="High-Quality Products"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                       />

                     </QFlex>
                     <QImage
                      widgetId="1764314469556078"
                      bgUrl="https://i.postimg.cc/DzPY0zxt/Line-9.png"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-auto static"
                    />
                     <QFlex
                      widgetId="1764314469553744"
                      tailwaindClasses="w-[auto] h-auto static flex flex-col gap-y-1 gap-x-1"
                    >
                        <QTextH4
                         widgetId="1764314469556461"
                         headerText="30,000+"
                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-5xl font-extrabold text-[#000000] text-left"
                       />
                        <QParagraph
                         widgetId="1764314469550345"
                         headerText="Happy Customers"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                       />

                     </QFlex>

                  </QFlex>

               </QFlex>
               <QFlex
                widgetId="1764315643104562"
                headerText="Add Widgets"
                tailwaindClasses="w-[50%] min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-6 gap-x-6"
              >
                  <QImage
                   widgetId="1764315662753297"
                   bgUrl="https://i.postimg.cc/SRhfRQ6s/Frame-126-1-removebg-preview-(1).png"
                   backgroundSize="contain"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[610px] static object-contain"
                 />

               </QFlex>

            </QFlex>
            <QFlex
             widgetId="1764426713638548"
             bgColor="rgba(226, 243, 255, 1.00)"
             headerText="Add Widgets"
             tailwaindClasses="w-full h-[650px] pt-[40px] pl-[40px] static flex flex-col flex-wrap justify-start items-center"
           >
               <QFlex
                widgetId="1764426713644667"
                headerText="Add Widgets"
                tailwaindClasses="w-[50%] min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-6 gap-x-6"
              >
                  <QTextH1
                   widgetId="1764426713640172"
                   headerText="FASHION THAT SPEAKS YOUR PERSONALITY"
                   tailwaindClasses="w-full h-auto static font-[Besley] text-6xl font-black text-[#000000] text-left leading-[1.3] uppercase"
                 />
                  <QParagraph
                   widgetId="1764426713646095"
                   headerText="Discover a wide selection of finely crafted outfits, created to reflect your individuality 
and match your fashion preferences."
                   tailwaindClasses="w-full h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                 />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToShop",
                      }}
                    >
                                      <QButton
                   buttonType="button"
                   widgetId="1764426713639056"
                   bgColor="var(--primarybtcolor)"
                   headerText="Shop Now"
                   tailwaindClasses="w-[auto] h-auto pt-[16px] pr-[32px] pb-[16px] pl-[32px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Inter] text-sm font-normal text-[#FFFFFFFF]"
                 />
</QActionFlow>

                  <QFlex
                   widgetId="1764426713637748"
                   tailwaindClasses="w-[auto] h-auto static flex flex-row gap-y-6 gap-x-6"
                 >
                     <QFlex
                      widgetId="1764426713639861"
                      tailwaindClasses="w-[auto] h-auto static flex flex-col gap-y-1 gap-x-1"
                    >
                        <QTextH4
                         widgetId="1764426713637802"
                         headerText="200+"
                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-5xl font-extrabold text-[#000000] text-left"
                       />
                        <QParagraph
                         widgetId="1764426713646590"
                         headerText="International Brands"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                       />

                     </QFlex>
                     <QImage
                      widgetId="1764426713637730"
                      bgUrl="https://i.postimg.cc/DzPY0zxt/Line-9.png"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-auto static"
                    />
                     <QFlex
                      widgetId="1764426713643019"
                      tailwaindClasses="w-[auto] h-auto static flex flex-col gap-y-1 gap-x-1"
                    >
                        <QTextH4
                         widgetId="1764426713641718"
                         headerText="2,000+"
                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-5xl font-extrabold text-[#000000] text-left"
                       />
                        <QParagraph
                         widgetId="1764426713638019"
                         headerText="High-Quality Products"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                       />

                     </QFlex>
                     <QImage
                      widgetId="1764426713645793"
                      bgUrl="https://i.postimg.cc/DzPY0zxt/Line-9.png"
                      headerText="Add Widgets Vertically"
                      tailwaindClasses="w-[auto] h-auto static"
                    />
                     <QFlex
                      widgetId="1764426713643216"
                      tailwaindClasses="w-[auto] h-auto static flex flex-col gap-y-1 gap-x-1"
                    >
                        <QTextH4
                         widgetId="1764426713646568"
                         headerText="30,000+"
                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-5xl font-extrabold text-[#000000] text-left"
                       />
                        <QParagraph
                         widgetId="1764426713643889"
                         headerText="Happy Customers"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                       />

                     </QFlex>

                  </QFlex>

               </QFlex>
               <QFlex
                widgetId="1764426713639144"
                headerText="Add Widgets"
                tailwaindClasses="w-[50%] min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-6 gap-x-6"
              >
                  <QImage
                   widgetId="1764426713641891"
                   bgUrl="https://imgcdn.kuick.com/cms-testing-images/final-img%20(1).png"
                   backgroundSize="contain"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[610px] static object-contain"
                 />

               </QFlex>

            </QFlex>

         </QSlider>

      </QSection>
      <QSection
       widgetId="1764318761335884"
       tailwaindClasses="w-full h-auto relative block"
     >
         <QFlex
          widgetId="1764318765872155"
          bgColor="rgba(3, 3, 3, 1.00)"
          headerText="Add Widgets"
          tailwaindClasses="w-full min-h-[100px] h-auto static block"
        >
            <QMarquee
             widgetId="1764318902027184"
             tailwaindClasses="w-full h-[100px] static"
           >
               <QFlex
                widgetId="1764318902022307"
                tailwaindClasses="w-[16.666666666666668%] h-full static flex flex-col justify-center items-center"
              >
                  <QImage
                   widgetId="1764318942943906"
                   bgUrl="https://i.postimg.cc/T3J3dVXG/Group.png"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[25px] static"
                 />

               </QFlex>
               <QFlex
                widgetId="1764319512410582"
                tailwaindClasses="w-[16.666666666666668%] h-full static flex flex-col justify-center items-center"
              >
                  <QImage
                   widgetId="1764319512409016"
                   bgUrl="https://i.postimg.cc/B6kqYN25/zara-logo-1-1.png"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[25px] static"
                 />

               </QFlex>
               <QFlex
                widgetId="1764319518353115"
                tailwaindClasses="w-[16.666666666666668%] h-full static flex flex-col justify-center items-center"
              >
                  <QImage
                   widgetId="1764319518347755"
                   bgUrl="https://i.postimg.cc/LXn93Gg6/gucci-logo-1-1.png"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[25px] static"
                 />

               </QFlex>
               <QFlex
                widgetId="1764319524250480"
                tailwaindClasses="w-[16.666666666666668%] h-full static flex flex-col justify-center items-center"
              >
                  <QImage
                   widgetId="1764319524247063"
                   bgUrl="https://i.postimg.cc/hGC4xKj5/prada-logo-1-1.png"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[22px] static"
                 />

               </QFlex>
               <QFlex
                widgetId="1764319529895060"
                tailwaindClasses="w-[16.666666666666668%] h-full static flex flex-col justify-center items-center"
              >
                  <QImage
                   widgetId="1764319529897546"
                   bgUrl="https://i.postimg.cc/7LPYf5xz/Group-1.png"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[25px] static"
                 />

               </QFlex>
               <QFlex
                widgetId="1764319998731894"
                tailwaindClasses="w-[16.666666666666668%] h-full static flex flex-col justify-center items-center"
              >
                  <QImage
                   widgetId="1764319998739430"
                   bgUrl="https://i.postimg.cc/2jPSqHXH/logo-ladspa-svgrepo-com.png"
                   headerText="Add Widgets Vertically"
                   tailwaindClasses="w-full h-[100px] static"
                 />

               </QFlex>

            </QMarquee>

         </QFlex>

      </QSection>
      <QSection
       widgetId="1764321273542969"
       tailwaindClasses="w-full min-h-[400px] h-auto pt-[60px] relative flex flex-row justify-center items-start"
     >
         <QFlex
          widgetId="1764321752867083"
          headerText="Add Widgets"
          tailwaindClasses="w-[90%] h-auto static block"
        >
            <QFullWidth
             widgetId="1764321752870672"
             headerText="Add Widgets"
             tailwaindClasses="w-full h-auto static flex flex-col justify-center items-center"
           >
                <QTextH3
                 widgetId="1764322025518943"
                 headerText="BEST SERVICE"
                 tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[3px] static font-[Inter] text-sm font-normal text-[#ADADADFF] text-center"
               />
                <QTextH2
                 widgetId="1764321752866752"
                 headerText="Here to make 
your style better & easier"
                 tailwaindClasses="w-[auto] h-auto static font-[Bebas Neue] text-[45px] font-extrabold text-[#000000] text-center leading-[1.3]"
               />

            </QFullWidth>
            <QFullWidth
             widgetId="1764321752872521"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto pt-[45px] static flex flex-row justify-between items-center"
           >
                <QFullWidth
                 widgetId="1764321752868750"
                 bgColor="rgba(244, 244, 244, 0.00)"
                 headerText="Add Widgets"
                 tailwaindClasses="w-[30%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
               >
                    <QImage
                     widgetId="1764321752870156"
                     bgUrl="https://imgcdn.kuick.com/icon/graphics/quick_support.svg"
                     backgroundSize="cover"
                     headerText="Add Widgets Vertically"
                     tailwaindClasses="w-[auto] h-[100px] static object-cover"
                   />
                    <QTextH4
                     widgetId="1764321752865966"
                     headerText="Quick Support"
                     tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-2xl font-bold text-[#000000] text-left"
                   />
                    <QTextH3
                     widgetId="1764321752864019"
                     headerText="Get instant help anytime you need. Our team is always ready to guide you with sizes, orders, and styling tips."
                     tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                   />
                    <QFlex
                     widgetId="1764321752873944"
                     tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                   >

                    </QFlex>

                </QFullWidth>
                <QFullWidth
                 widgetId="1764321752867198"
                 bgColor="rgba(244, 244, 244, 0.00)"
                 headerText="Add Widgets"
                 tailwaindClasses="w-[30%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
               >
                    <QImage
                     widgetId="1764321752868760"
                     bgUrl="https://imgcdn.kuick.com/icon/graphics/best_value.svg"
                     backgroundSize="cover"
                     headerText="Add Widgets Vertically"
                     tailwaindClasses="w-[auto] h-[100px] static object-cover"
                   />
                    <QTextH4
                     widgetId="1764321752874602"
                     headerText="Best Value"
                     tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-2xl font-bold text-[#000000] text-left"
                   />
                    <QTextH3
                     widgetId="1764321752868601"
                     headerText="Shop the latest trends at the best prices. Exclusive deals, premium quality, and offers you’ll love—every day."
                     tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                   />
                    <QFlex
                     widgetId="1764321752868947"
                     tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                   >

                    </QFlex>

                </QFullWidth>
                <QFullWidth
                 widgetId="1764321752867497"
                 bgColor="rgba(244, 244, 244, 0.00)"
                 headerText="Add Widgets"
                 tailwaindClasses="w-[30%] h-auto pt-[35px] pr-[25px] pb-[25px] pl-[25px] static border-t-[#DBDFD0FF] border-r-[#DBDFD0FF] border-b-[#DBDFD0FF] border-l-[#DBDFD0FF] rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[10px] flex flex-col justify-center items-center"
               >
                    <QImage
                     widgetId="1764321752874863"
                     bgUrl="https://imgcdn.kuick.com/icon/graphics/reward.svg"
                     backgroundSize="cover"
                     headerText="Add Widgets Vertically"
                     tailwaindClasses="w-[auto] h-[100px] static object-cover"
                   />
                    <QTextH4
                     widgetId="1764321752872776"
                     headerText="Cash-Back Rewards"
                     tailwaindClasses="w-[auto] h-auto pt-[24px] static font-[Poppins] text-2xl font-bold text-[#000000] text-left"
                   />
                    <QTextH3
                     widgetId="1764321752865118"
                     headerText="Earn rewards every time you shop. Collect points and enjoy exciting cashback on your favourite outfits."
                     tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[24px] static font-[Inter] text-sm font-normal text-[#12141DFF] text-center"
                   />
                    <QFlex
                     widgetId="1764321752872433"
                     tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                   >

                    </QFlex>

                </QFullWidth>

            </QFullWidth>

         </QFlex>

      </QSection>
      <QSection
       widgetId="1764320772850847"
       tailwaindClasses="w-full min-h-[400px] h-auto relative block"
     >
         <QParallax
          type="Vertical"
          widgetId="1764320792315304"
          bgUrl="https://i.postimg.cc/j5Cr0s8g/andrey-zvyagintsev-EQj1-ZMpq-VM-unsplash-1-1.png"
          backgroundSize="cover"
          tailwaindClasses="w-full min-h-[100px] h-[660px] static object-cover flex flex-col justify-center items-end"
        >
            <QFullWidth
             widgetId="1764326220303713"
             headerText="Add Widgets"
             tailwaindClasses="w-[683px] h-[665px] pt-[50px] pb-[50px] pl-[70px] static flex flex-col justify-center items-start"
           >
                <QImage
                 widgetId="1764326220296050"
                 bgUrl="https://i.postimg.cc/bvDDR2br/1024px-Zara-Logo-2.png"
                 backgroundSize="contain"
                 headerText="Add Widgets Vertically"
                 tailwaindClasses="w-[200px] h-auto static object-contain"
               />
                <QParagraph
                 widgetId="1764326220300585"
                 headerText="Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles."
                 tailwaindClasses="w-[auto] h-auto pt-[40px] pb-[40px] static font-[Arial] text-[17px] font-normal text-[#FFFFFFFF] text-left"
               />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToShop",
                      }}
                    >
                                    <QButton
                 buttonType="button"
                 widgetId="1764326220303528"
                 bgColor="var(--primarybtcolor)"
                 headerText="See Collection"
                 tailwaindClasses="w-[150px] h-[45px] pr-[18px] pl-[18px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#010000FF] border-r-[#010000FF] border-b-[#010000FF] border-l-[#010000FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Poppins] text-sm font-bold text-[#FFFFFFFF]"
               />
</QActionFlow>


            </QFullWidth>

         </QParallax>

      </QSection>
      <QSection
       widgetId="1764324555863436"
       bgColor="var(--innerpagebreadcrumbbg)"
       tailwaindClasses="w-full min-h-[400px] h-auto pt-[60px] pb-[30px] relative flex flex-row justify-center items-start"
     >
         <QFlex
          widgetId="1764324789119526"
          headerText="Add Widgets"
          tailwaindClasses="w-[90%] h-auto static block"
        >
            <QFullWidth
             widgetId="1764324789118714"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto pb-[30px] static flex flex-row justify-center items-start"
           >
                <QTextH2
                 widgetId="1764325426877469"
                 headerText="FEATURED PRODUCTS"
                 tailwaindClasses="w-[auto] h-auto static font-[Bebas Neue] text-[45px] font-extrabold text-[#000000] text-center leading-[1.3]"
               />

            </QFullWidth>
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action1928",
                      }}
                    >
                                <QDiv
             tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-row flex-wrap justify-center items-center gap-y-5 gap-x-5"
           >
           <QRepeat
             repeaterDefaultData={defaultRepeatState990}
             loading={loading}
             widgetId="1764337023306045"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-row flex-wrap justify-center items-center gap-y-5 gap-x-5"
           >
                <QFlex
                 widgetId="1764337023303755"
                 tailwaindClasses="w-[20%] h-auto static flex flex-col justify-start items-start"
               >
                   <QFlex
                    widgetId="1764337023309308"
                    bgColor="rgba(255, 255, 255, 1.00)"
                    boxShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                    headerText="Add Widgets"
                    textShadow="2px 3px 22px 1px rgba(0, 0, 0, 0.07)"
                    tailwaindClasses="w-full h-auto static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
                  >
                      <QFlex
                       widgetId="1764337023311110"
                       tailwaindClasses="w-full h-auto static block"
                     >
                         <QImage
                          widgetId="1764337023307809"
                          tagKey="thumbnail"
                          bgUrl="https://imgcdn.kuick.com/icon/image/womens_denim_jacket.png"
                          backgroundSize="cover"
                          headerText="Add Widgets Vertically"
                          tailwaindClasses="w-full h-[234px] static object-cover rounded-tr-xl rounded-tl-xl rounded-bl-xl rounded-br-xl"
                        />

                      </QFlex>
                      <QFlex
                       widgetId="1764337023310081"
                       tailwaindClasses="w-full h-auto pt-[10px] pr-[20px] pb-[10px] pl-[20px] static flex flex-row justify-between items-center"
                     >
                         <QFlex
                          widgetId="1764337023311324"
                          tailwaindClasses="w-[60%] h-auto static block"
                        >
                            <QTextH3
                             widgetId="1764337023308675"
                             tagKey="name"
                             headerText="Women’s Denim Jacket"
                             tailwaindClasses="w-full h-auto pt-[8px] pb-[8px] static font-[Poppins] text-xs font-semibold text-[#007580FF] text-left"
                           />
                            <QTextH3
                             widgetId="1764337023315158"
                             tagKey="price"
                             headerText="60.00"
                             tailwaindClasses="w-full h-auto static font-[Poppins] text-xs font-semibold text-[#000000FF] text-left"
                           />

                         </QFlex>
                         <QImage
                          widgetId="1764337023310223"
                          bgUrl="https://api.imghippo.com/files/klNr5985GKM.png"
                          headerText="Add Widgets Vertically"
                          tailwaindClasses="w-[33px] h-auto static"
                        />

                      </QFlex>

                   </QFlex>

                </QFlex>

            </QRepeat></QDiv>
</QActionFlow>


         </QFlex>

      </QSection>
      <QSection
       widgetId="1764329998887583"
       bgColor="rgba(226, 243, 255, 1.00)"
       tailwaindClasses="w-full min-h-[400px] h-auto pb-[60px] relative flex flex-row justify-center items-start"
     >
         <QFlex
          widgetId="1764330003555850"
          bgColor="rgba(250, 250, 250, 0.00)"
          headerText="Add Widgets"
          tailwaindClasses="w-[90%] min-h-[100px] h-auto pt-[20px] pr-[20px] pb-[20px] pl-[20px] static block"
        >
            <QFullWidth
             widgetId="1764330003549644"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-center items-center"
           >
                <QFullWidth
                 widgetId="1764330131496182"
                 headerText="Add Widgets"
                 tailwaindClasses="w-full h-auto static flex flex-col justify-center items-center"
               >
                    <QTextH3
                     widgetId="1764330131500133"
                     headerText="TESTIMONIALS"
                     tailwaindClasses="w-[auto] h-auto pt-[15px] pb-[3px] static font-[Inter] text-sm font-normal text-[#333333FF] text-center"
                   />
                    <QTextH2
                     widgetId="1764330131503875"
                     headerText="Give our users a 
great experience"
                     tailwaindClasses="w-[auto] h-auto static font-[Bebas Neue] text-[45px] font-extrabold text-[#000000FF] text-center leading-[1.3]"
                   />

                </QFullWidth>

            </QFullWidth>
            <QFullWidth
             widgetId="1764330003552181"
             headerText="Add Widgets"
             tailwaindClasses="w-full min-h-[100px] h-auto pt-[50px] static flex flex-row justify-between items-center"
           >
                <QFullWidth
                 widgetId="1764330003557939"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 headerText="Add Widgets"
                 tailwaindClasses="w-[32%] h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-y-[18px] gap-x-[18px]"
               >
                    <QFlex
                     widgetId="1764330003556246"
                     tailwaindClasses="h-auto static flex flex-row justify-start items-center"
                   >
                       <QFlex
                        widgetId="1764330003554324"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >

                       </QFlex>
                       <QImage
                        widgetId="1764330003550823"
                        bgUrl="https://i.postimg.cc/cLL082JL/stars.png"
                        backgroundSize="cover"
                        headerText="Add Widgets Vertically"
                        tailwaindClasses="w-[auto] h-[20px] static object-cover"
                      />

                    </QFlex>
                    <QTextH3
                     widgetId="1764330003556837"
                     headerText="&quot;They are able to help a startup like mine scale and are very responsive to all of our unique needs.&quot;"
                     tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                   />
                    <QFlex
                     widgetId="1764330003557907"
                     tailwaindClasses="h-auto static flex flex-row justify-start items-center"
                   >
                       <QFlex
                        widgetId="1764330003551266"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >
                          <QImage
                           widgetId="1764330003550698"
                           bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                           backgroundSize="cover"
                           headerText="Add Widgets Vertically"
                           tailwaindClasses="w-[40px] h-auto static object-cover"
                         />
                          <QFlex
                           widgetId="1764330003552932"
                           tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                         >
                             <QTextH4
                              widgetId="1764330003557052"
                              headerText="Joew Harbert"
                              tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-bold text-[#000000FF] text-left"
                            />
                             <QTextH4
                              widgetId="1764330003556166"
                              headerText="CEO, NoonBrew"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                            />

                          </QFlex>

                       </QFlex>

                    </QFlex>

                </QFullWidth>
                <QFullWidth
                 widgetId="1764429877858467"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 headerText="Add Widgets"
                 tailwaindClasses="w-[32%] h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-y-[18px] gap-x-[18px]"
               >
                    <QFlex
                     widgetId="1764429877855151"
                     tailwaindClasses="h-auto static flex flex-row justify-start items-center"
                   >
                       <QFlex
                        widgetId="1764429877864220"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >

                       </QFlex>
                       <QImage
                        widgetId="1764429877859343"
                        bgUrl="https://i.postimg.cc/cLL082JL/stars.png"
                        backgroundSize="cover"
                        headerText="Add Widgets Vertically"
                        tailwaindClasses="w-[auto] h-[20px] static object-cover"
                      />

                    </QFlex>
                    <QTextH3
                     widgetId="1764429877863870"
                     headerText="&quot;They are able to help a startup like mine scale and are very responsive to all of our unique needs.&quot;"
                     tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                   />
                    <QFlex
                     widgetId="1764429877860457"
                     tailwaindClasses="h-auto static flex flex-row justify-start items-center"
                   >
                       <QFlex
                        widgetId="1764429877863709"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >
                          <QImage
                           widgetId="1764429877864307"
                           bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                           backgroundSize="cover"
                           headerText="Add Widgets Vertically"
                           tailwaindClasses="w-[40px] h-auto static object-cover"
                         />
                          <QFlex
                           widgetId="1764429877864586"
                           tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                         >
                             <QTextH4
                              widgetId="1764429877865465"
                              headerText="Joew Harbert"
                              tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-bold text-[#000000FF] text-left"
                            />
                             <QTextH4
                              widgetId="1764429877864379"
                              headerText="CEO, NoonBrew"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                            />

                          </QFlex>

                       </QFlex>

                    </QFlex>

                </QFullWidth>
                <QFullWidth
                 widgetId="1764429893279488"
                 bgColor="rgba(255, 255, 255, 1.00)"
                 headerText="Add Widgets"
                 tailwaindClasses="w-[32%] h-auto pt-[20px] pr-[25px] pb-[20px] pl-[25px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-y-[18px] gap-x-[18px]"
               >
                    <QFlex
                     widgetId="1764429893276343"
                     tailwaindClasses="h-auto static flex flex-row justify-start items-center"
                   >
                       <QFlex
                        widgetId="1764429893285320"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >

                       </QFlex>
                       <QImage
                        widgetId="1764429893285536"
                        bgUrl="https://i.postimg.cc/cLL082JL/stars.png"
                        backgroundSize="cover"
                        headerText="Add Widgets Vertically"
                        tailwaindClasses="w-[auto] h-[20px] static object-cover"
                      />

                    </QFlex>
                    <QTextH3
                     widgetId="1764429893276960"
                     headerText="&quot;They are able to help a startup like mine scale and are very responsive to all of our unique needs.&quot;"
                     tailwaindClasses="w-[auto] h-auto static font-[Inter] text-sm font-medium text-[#090909FF] text-left"
                   />
                    <QFlex
                     widgetId="1764429893283656"
                     tailwaindClasses="h-auto static flex flex-row justify-start items-center"
                   >
                       <QFlex
                        widgetId="1764429893279978"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >
                          <QImage
                           widgetId="1764429893276236"
                           bgUrl="https://i.postimg.cc/SRfHpzWq/avatar.png"
                           backgroundSize="cover"
                           headerText="Add Widgets Vertically"
                           tailwaindClasses="w-[40px] h-auto static object-cover"
                         />
                          <QFlex
                           widgetId="1764429893284428"
                           tailwaindClasses="w-[auto] h-auto pl-[10px] static block"
                         >
                             <QTextH4
                              widgetId="1764429893278605"
                              headerText="Joew Harbert"
                              tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-bold text-[#000000FF] text-left"
                            />
                             <QTextH4
                              widgetId="1764429893283829"
                              headerText="CEO, NoonBrew"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xs font-normal text-[#12141DFF] text-left"
                            />

                          </QFlex>

                       </QFlex>

                    </QFlex>

                </QFullWidth>

            </QFullWidth>

         </QFlex>

      </QSection>
      <QSection
       widgetId="1764327292877683"
       tailwaindClasses="w-full min-h-[400px] h-auto relative block"
     >
         <QFlex
          widgetId="1764327296293294"
          headerText="Add Widgets"
          tailwaindClasses="w-full min-h-[100px] h-auto pt-[64px] static flex flex-col justify-start items-center gap-y-8 gap-x-8"
        >
            <QFlex
             widgetId="1764327296293408"
             tailwaindClasses="w-[auto] h-auto static flex flex-col justify-start items-center gap-y-2 gap-x-2"
           >
               <QParagraph
                widgetId="1764327296295985"
                headerText="Show your look with"
                tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000] text-left"
              />
               <QTextH2
                widgetId="1764327296299789"
                headerText="#YourBrandLook"
                tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-[32px] font-black text-[#000000] text-left"
              />

            </QFlex>
            <QMasonary
             column="4"
             vSpace="10px"
             hSpace="10px"
             widgetId="1764327296302164"
             tailwaindClasses="w-full min-h-[100px] h-auto static"
           >
               <QFlex
                widgetId="1764327296294422"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296302008"
                   bgUrl="https://cdn.pixabay.com/photo/2024/12/13/10/23/woman-9264738_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[350px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296297726"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296297907"
                   bgUrl="https://cdn.pixabay.com/photo/2021/04/03/02/52/ao-dai-6146369_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[250px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296293028"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296293006"
                   bgUrl="https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[350px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296301878"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296298127"
                   bgUrl="https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[250px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296293658"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296299274"
                   bgUrl="https://cdn.pixabay.com/photo/2024/11/05/20/59/artistic-9176859_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[250px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296293128"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296294997"
                   bgUrl="https://cdn.pixabay.com/photo/2024/11/08/05/28/man-9182458_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[350px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296302760"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296299255"
                   bgUrl="https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_1280.jpg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[250px] static object-cover"
                 />

               </QFlex>
               <QFlex
                widgetId="1764327296295007"
                tailwaindClasses="w-full h-auto static flex flex-col"
              >
                  <QImage
                   widgetId="1764327296296839"
                   bgUrl="https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg"
                   backgroundSize="cover"
                   tailwaindClasses="w-full h-[350px] static object-cover"
                 />

               </QFlex>
               <QBackDrop
                widgetId="1764327296295319"
                tailwaindClasses="w-[1366px] h-auto static"
              >
                  <QCarousel
                   widgetId="1764327296298522"
                   tailwaindClasses="w-full h-auto static"
                 >
                     <QFlex
                      widgetId="1764327296298065"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296297318"
                         bgUrl="https://cdn.pixabay.com/photo/2017/08/07/11/57/furniture-2603068_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[350px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296294408"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296296892"
                         bgUrl="https://cdn.pixabay.com/photo/2017/08/07/21/55/armchair-2608301_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[250px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296297223"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296300620"
                         bgUrl="https://cdn.pixabay.com/photo/2017/06/27/07/57/armchair-2446596_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[350px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296296023"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296295266"
                         bgUrl="https://cdn.pixabay.com/photo/2017/06/27/07/57/armchair-2446595_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[250px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296295695"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296300599"
                         bgUrl="https://cdn.pixabay.com/photo/2016/08/12/06/18/rocking-1587795_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[250px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296299124"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296302284"
                         bgUrl="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[350px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296299081"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296299788"
                         bgUrl="https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[250px] static object-cover"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1764327296302013"
                      tailwaindClasses="w-full h-auto static flex flex-col"
                    >
                        <QImage
                         widgetId="1764327296295013"
                         bgUrl="https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_1280.jpg"
                         backgroundSize="cover"
                         tailwaindClasses="w-full h-[350px] static object-cover"
                       />

                     </QFlex>

                  </QCarousel>
                  <QIcon
                   cms_form_Id="0"
                   clickableWidget="close_icon"
                   iconLink="https://imgcdn.kuick.com/cms/icon/quick-studio-icon-library/interface/solid/remove.svg"
                   widgetId="1764833294487651"
                   tailwaindClasses="min-w-[50px] w-[50px] min-h-[50px] static"
                 />
                  <QIcon
                   cms_form_Id="0"
                   clickableWidget="right_icon"
                   iconLink="https://imgcdn.kuick.com/cms-designer/cms_icon_set/kuick_studio_icon/dark/gallery/right-white-arrow.svg"
                   widgetId="1764833294482029"
                   tailwaindClasses="min-w-[50px] w-[50px] min-h-[50px] static"
                 />
                  <QIcon
                   cms_form_Id="0"
                   clickableWidget="left_icon"
                   iconLink="https://imgcdn.kuick.com/cms-designer/cms_icon_set/kuick_studio_icon/dark/gallery/left-white-arrow.svg"
                   widgetId="1764833294480768"
                   tailwaindClasses="min-w-[50px] w-[50px] min-h-[50px] static"
                 />

               </QBackDrop>

            </QMasonary>

         </QFlex>

      </QSection>
</> );
};

export default LandingPageScene;