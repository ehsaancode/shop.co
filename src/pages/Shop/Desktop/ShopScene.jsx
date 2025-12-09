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



export const ShopScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [productData, setProductData] = useState(null);
const [productDataResponse, setProductDataResponse] = useState(null);
const [newProductReturn, setNewProductReturn] = useState(null);
const [product_list_reponse, setProduct_list_reponse] = useState(null);
const [defaultRepeatState894, setDefaultRepeatState894] = useState([{"product_id":"20","category_id":"null","name":"--------","description":"--------","brand":"null","slug":"null","thumbnail":"https://imgcdn.kuick.com/icon/image/placeholder.png","is_active":"1","created_at":"2025-11-23 05:19:59","price":"--","stock_quantity":"--"}]);
const [product_list, setProduct_list] = useState(null);
const [productList, setProductList] = useState(null);
const [cartResp, setCartResp] = useState(null);

  
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
                       Action1412();
                    }, []);

              const Action1412 = useCallback(async (event) => {
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
                  
                  setDefaultRepeatState894(userData?.data?.products);
                   
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              

              const Action1507 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/add-cart",
                    method: "POST",
                    body: {
  "user_id": get("userdata")?.user_id,
  "quantity": "1",
  "product_id": defaultRepeatState894[event.index]?.product_id
},
                    headers: {"Content-Type":"application/json"},
                  }
                  );

                  setLoading(true);
                  
                set('undefined',userData?.data?.count);  
                 
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, [defaultRepeatState894]);

    
                const Action188 = useCallback((event) => {
                  openModal("CartModal");
                }, []);
  
              
              const navigateToLandingPage = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/LandingPage");
              }, [navigate]);

            
              const navigateToProductDetails = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/ProductDetails");
              }, [navigate]);

            
   
            
            
  
              
            
const actions = {
      Action188,
      navigateToLandingPage,
      navigateToProductDetails,
      Action1507,
  };


return (
<>
      <QSection
       widgetId="1763812977843393"
       bgColor="rgba(246, 245, 255, 1.00)"
       tailwaindClasses="w-full h-auto relative flex flex-row justify-center items-start"
     >
         <QFlex
          widgetId="1763812981196537"
          headerText="Add Widgets"
          tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-col justify-center items-start"
        >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action188",
                      }}
                    >
                                <QTextH2
             widgetId="1763812987291953"
             headerText="Shop"
             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-semibold text-[#000000] text-left"
           />
</QActionFlow>

            <QFullWidth
             widgetId="1763813147343013"
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
                 widgetId="1763813147339793"
                 headerText="Home"
                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#9CA3AFFF] text-left"
               />
</QActionFlow>

                <QImage
                 widgetId="1763813147345657"
                 bgUrl="https://imgcdn.kuick.com/cms-designer/erp/breadcrum-grey.svg"
                 backgroundSize="cover"
                 headerText="Add Widgets Vertically"
                 tailwaindClasses="w-[16px] h-auto mt-[2px] static object-cover"
               />
                <QTextH5
                 widgetId="1763813147346961"
                 headerText="Shop"
                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#FB2E86FF] text-left"
               />

            </QFullWidth>

         </QFlex>

      </QSection>
      <QSection
       widgetId="1763817139761789"
       tailwaindClasses="w-full min-h-[400px] h-auto pt-[40px] pr-[40px] pb-[40px] pl-[40px] relative flex flex-col justify-start items-center"
     >
         <QFlex
          widgetId="1763817279609984"
          headerText="Add Widgets"
          tailwaindClasses="w-[90%] min-h-[100px] h-auto pt-[20px] pb-[64px] static rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-center gap-y-8 gap-x-8"
        >
            <QFlex
             widgetId="1763817279608309"
             tailwaindClasses="w-[auto] h-auto static flex flex-col justify-start items-center gap-y-2 gap-x-2"
           >
               <QTextH2
                widgetId="1763817279606748"
                headerText="All Products"
                tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-2xl font-extrabold text-[#000000] text-left"
              />
               <QParagraph
                widgetId="1763817279609184"
                headerText="Discover our complete collection crafted for every style and need."
                tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-normal text-[#000000] text-left"
              />

            </QFlex>

         </QFlex>
         <QDiv
          tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-row flex-wrap justify-center items-start gap-y-5 gap-x-5"
        >
        <QRepeat
          repeaterDefaultData={defaultRepeatState894}
          loading={loading}
          widgetId="1763972665470155"
          headerText="Add Widgets"
          tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-row flex-wrap justify-center items-start gap-y-5 gap-x-5"
        >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToProductDetails",
                      }}
                    >
                                 <QFlex
              widgetId="1764057388407082"
              tailwaindClasses="w-[22%] h-auto static flex flex-col justify-center items-center"
            >
                <QFullWidth
                 widgetId="1764057388408502"
                 headerText="Add Widgets"
                 tailwaindClasses="w-full min-h-[100px] h-auto static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DCDCDCFF] border-r-[#DCDCDCFF] border-b-[#DCDCDCFF] border-l-[#DCDCDCFF] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start"
               >
                    <QImage
                     widgetId="1764057388407042"
                     tagKey="thumbnail"
                     bgUrl="https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905074718337-9.jpg"
                     backgroundSize="cover"
                     headerText="Add Widgets Vertically"
                     tailwaindClasses="w-full h-[360px] static object-cover rounded-tr-[20px] rounded-tl-[20px]"
                   />
                    <QFlex
                     widgetId="1764057388409560"
                     tailwaindClasses="w-full h-auto pt-[12px] pr-[12px] pb-[12px] pl-[12px] static flex flex-col justify-start items-start gap-y-1 gap-x-1"
                   >
                       <QTextH2
                        widgetId="1764057388404208"
                        tagKey="name"
                        headerText="Women’s Denim Jacket"
                        tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-xl font-bold text-[#000000] text-left"
                      />
                       <QTextH6
                        widgetId="1764057388412529"
                        tagKey="description"
                        headerText="Women’s Denim Jacket This product is designed with premium materials to ensure long-lasting comfort "
                        tailwaindClasses="w-[auto] h-[40px] mb-[10px] static font-[Poppins] text-xs font-normal text-[#959494FF] text-left"
                      />
                       <QFlex
                        widgetId="1764398210801950"
                        tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center"
                      >
                          <QTextH5
                           widgetId="1764398254449053"
                           headerText="$"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[17px] font-normal text-[#000001FF] text-left"
                         />
                          <QFlex
                           widgetId="1764057388405593"
                           tailwaindClasses="w-[auto] h-auto static flex flex-row justify-start items-center gap-y-1 gap-x-1"
                         >
                             <QTextH2
                              widgetId="1764057388406552"
                              tagKey="price"
                              headerText="60.00"
                              tailwaindClasses="w-[auto] h-auto static font-[Poppins] text-base font-bold text-[#000000] text-left"
                            />
                             <QParagraph
                              widgetId="1764057388411421"
                              headerText="$"
                              tailwaindClasses="w-[auto] h-auto ml-[5px] static font-[Arial] text-xs font-normal text-[#FFFFFFFF]"
                            />

                          </QFlex>

                       </QFlex>

                    </QFlex>
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action1507",
                      }}
                    >
                                        <QFlex
                     widgetId="1764057388404269"
                     width="calc(90% - (20px))"
                     bgColor="rgba(251, 46, 134, 1.00)"
                     tailwaindClasses="h-[45px] mt-[10px] mb-[10px] ml-[20px] static rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg flex flex-row justify-center items-center"
                   >
                       <QImage
                        widgetId="1764057388406574"
                        bgUrl="https://i.postimg.cc/WpncPbzG/plus-svgrepo-com.png"
                        backgroundSize="cover"
                        headerText="Add Widgets Vertically"
                        tailwaindClasses="w-[14px] h-auto mt-[2px] static object-cover"
                      />
                       <QParagraph
                        widgetId="1764057388410136"
                        headerText="Add to Cart"
                        tailwaindClasses="w-[auto] h-auto ml-[5px] static font-[Arial] text-xs font-normal text-[#FFFFFFFF]"
                      />

                    </QFlex>
</QActionFlow>


                </QFullWidth>

             </QFlex>
</QActionFlow>


         </QRepeat></QDiv>

      </QSection>
</> );
};

export default ShopScene;