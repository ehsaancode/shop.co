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



export const CheckoutScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [defaultRepeatState1011, setDefaultRepeatState1011] = useState([{
        "cart_id": 3,
        "item_id": 0,
        "product_id": 0,
        "variant_id": null,
        "quantity": 0,
        "couponId": null,
        "name": "xxxxxxx",
        "thumbnail": "xxxxxxx",
        "brand": "H&M",
        "slug": "hm-cotton-shirt",
        "base_price": "980.90",
        "base_stock_quantity": 45,
        "variant_name": null,
        "sku": null,
        "variant_price": null,
        "variant_mrp": null,
        "variant_inventory": null,
        "variant_colour": null,
        "variant_size": null,
        "variant_image": null,
        "variant_is_active": null,
        "price": "980.90",
        "stock_quantity": 45,
        "coupon_id": null,
        "coupon_code": null,
        "coupon_type": null,
        "coupon_value": null,
        "coupon_min_order": null,
        "coupon_start_date": null,
        "coupon_end_date": null,
        "unit_price": 980.9,
        "line_subtotal": 4904.5,
        "discount_amount": 0,
        "final_line_total": 4904.5,
        "original_price": 980.9,
        "final_price": 980.9
      }]);
const [cartListCheckout, setCartListCheckout] = useState(null);
const [formModel1012, setFormModel1012] = useState({"model":{"fields":{"1763843436403976":{"config":{"inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false}}},"1763843436406923":{"config":{"inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false}}},"1763843436409060":{"config":{"inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false}}},"1763843436413624":{"config":{"inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false}}}},"order":[]},"state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}});
const [formMetaData1013, setFormMetaData1013] = useState({"formData":{"id":"1763843436411601","name":"Sample Form","state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}}});
const [formInputData1014, setFormInputData1014] = useState({});
const [formHeaderData1015, setFormHeaderData1015] = useState({});
const [total, setTotal] = useState(null);
const [cartTotal, setCartTotal] = useState(100);
const [cartSubTotal, setCartSubTotal] = useState(100);

  
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
                       Action1857();
                    }, []);

              const Action1857 = useCallback(async (event) => {
                try {
                  const userData = await ApiUtils.request(
                  {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/get-cart",
                    method: "POST",
                    body: {
  "user_id": get("userdata")?.user_id
},
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                  );

                  setLoading(true);
                  
                  setDefaultRepeatState1011(userData?.data?.items);
                  
                set('undefined',userData?.summary);  
                 
      } catch (error) {
         setLoading(false);
      } finally {
       
      }
    }, []);

    
              const navigateToThankYou = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/ThankYou");
              }, [navigate]);

            
   
            
              
            
const actions = {
      navigateToThankYou,
  };


return (
<>
      <QSection
       widgetId="1763844150826433"
       bgColor="var(--innerpagebreadcrumbbg)"
       tailwaindClasses="w-full h-auto relative flex flex-row justify-center items-start"
     >
         <QFlex
          widgetId="1763844156353882"
          headerText="Add Widgets"
          tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-col justify-center items-start"
        >
            <QTextH2
             widgetId="1763844156359083"
             headerText="Checkout"
             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-semibold text-[#000000] text-left"
           />
            <QFullWidth
             widgetId="1763844156351410"
             headerText="Add Widgets"
             tailwaindClasses="w-full h-auto static flex flex-row justify-start items-start"
           >
                <QTextH5
                 widgetId="1763844156355202"
                 headerText="Home"
                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#9CA3AFFF] text-left"
               />
                <QImage
                 widgetId="1763844156358872"
                 bgUrl="https://imgcdn.kuick.com/cms-designer/erp/breadcrum-grey.svg"
                 backgroundSize="cover"
                 headerText="Add Widgets Vertically"
                 tailwaindClasses="w-[16px] h-auto mt-[2px] static object-cover"
               />
                <QTextH5
                 widgetId="1763844156356163"
                 headerText="Checkout"
                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#FB2E86FF] text-left"
               />

            </QFullWidth>

         </QFlex>

      </QSection>
      <QSection
       widgetId="1763843428040290"
       tailwaindClasses="w-full min-h-[400px] h-auto pr-[50px] pl-[50px] relative"
     >
         <QSection
          widgetId="1763843436395394"
          bgColor="rgba(255, 255, 255, 1.00)"
          tailwaindClasses="w-full min-h-[100%vh] h-auto relative block"
        >
            <QSection
             widgetId="1763843436403844"
             tailwaindClasses="w-full min-h-[400px] h-auto relative block"
           >
               <QFlex
                widgetId="1763843436403394"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[30px] pr-[30px] pb-[60px] pl-[30px] static border-t-[#C8C8C8FF] border-r-[#C8C8C8FF] border-b-[#C8C8C8FF] border-l-[#C8C8C8FF] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] flex flex-row justify-between items-start"
              >
                  <QFullWidth
                   widgetId="1763843436409994"
                   headerText="Add Widgets"
                   tailwaindClasses="w-[45%] h-auto static flex flex-col justify-start items-start"
                 >
                      <QFullWidth
                       widgetId="1763843436401566"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start"
                     >
                          <QTextH4
                           widgetId="1763843436410850"
                           headerText="Shiping information"
                           tailwaindClasses="w-[auto] h-auto static font-[Inter] text-2xl font-semibold text-[#000000] text-left"
                         />
                          <QTextH4
                           widgetId="1763843436403487"
                           headerText="Not ready to checkout? Continue Shopping"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-medium text-[#000000] text-left"
                         />
                          <QForm
                           cms_form_Id="1763843436411601"
                           apiUrl="https://jsonplaceholder.typicode.com/posts"
                           widgetId="1763843436411601"
                           height="calc(30.7% - (20px))"
                           headerText="Form"
                           tailwaindClasses="w-full min-h-[500px] mt-[20px] static"
                         >
                             <QFormInputElement
                              widgetId="1763843436403976"
                              headerText="Full name"
                              tailwaindClasses="w-full h-auto pb-[20px] relative block"
                            >
                                <QFlex
                                 widgetId="1763843436411964"
                                 tailwaindClasses="w-full h-auto static"
                               >
                                   <QParagraph
                                    widgetId="1763843436408069"
                                    headerText="Full name"
                                    tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                  />

                                </QFlex>
                                <QFlex
                                 widgetId="1763843436406824"
                                 tailwaindClasses="w-full h-auto relative"
                               >
                                   <QInputText
                                    readOnly="false"
                                    cms_form_Id="1763843436411601"
                                    cmsFormInputLabel="1763843436403976"
                                    errorSet={{"cms_form_input_Id":"1763843436403976","cms_form_Id":"1763843436411601","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                    placeHolder="Full name"
                                    placeHolderFontSize="14px"
                                    placeHolderFontWeight="400"
                                    leftPadding="20"
                                    fontSize="14"
                                    placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                    widgetId="1763843436408234"
                                    headerText="full_name"
                                    tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                                  >

                                   </QInputText>

                                </QFlex>
                                <QErrorMessage
                                 cms_form_Id="1763843436411601"
                                 cms_form_input_Id="1763843436403976"
                                 widgetId="1763843436407483"
                                 tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                               />

                             </QFormInputElement>
                             <QFormInputElement
                              widgetId="1763843436406923"
                              headerText="Email"
                              tailwaindClasses="w-full h-auto pb-[20px] relative block"
                            >
                                <QFlex
                                 widgetId="1763843436409495"
                                 tailwaindClasses="w-full h-auto static"
                               >
                                   <QParagraph
                                    widgetId="1763843436408001"
                                    headerText="Email"
                                    tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                  />

                                </QFlex>
                                <QFlex
                                 widgetId="1763843436411938"
                                 tailwaindClasses="w-full h-auto relative"
                               >
                                   <QInputText
                                    readOnly="false"
                                    cms_form_Id="1763843436411601"
                                    cmsFormInputLabel="1763843436406923"
                                    errorSet={{"cms_form_input_Id":"1763843436406923","cms_form_Id":"1763843436411601","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                    placeHolder="Email"
                                    placeHolderFontSize="14px"
                                    placeHolderFontWeight="400"
                                    leftPadding="20"
                                    fontSize="14"
                                    placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                    widgetId="1763843436409682"
                                    headerText="email"
                                    tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                                  >

                                   </QInputText>

                                </QFlex>
                                <QErrorMessage
                                 cms_form_Id="1763843436411601"
                                 cms_form_input_Id="1763843436406923"
                                 widgetId="1763843436411273"
                                 tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                               />

                             </QFormInputElement>
                             <QFormInputElement
                              widgetId="1763843436409060"
                              headerText="Phone No."
                              tailwaindClasses="w-full h-auto pb-[20px] relative block"
                            >
                                <QFlex
                                 widgetId="1763843436407686"
                                 tailwaindClasses="w-full h-auto static"
                               >
                                   <QParagraph
                                    widgetId="1763843436408707"
                                    headerText="Phone No."
                                    tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                  />

                                </QFlex>
                                <QFlex
                                 widgetId="1763843436404718"
                                 tailwaindClasses="w-full h-auto relative"
                               >
                                   <QInputText
                                    readOnly="false"
                                    cms_form_Id="1763843436411601"
                                    cmsFormInputLabel="1763843436409060"
                                    errorSet={{"cms_form_input_Id":"1763843436409060","cms_form_Id":"1763843436411601","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                    placeHolder="Phone No."
                                    placeHolderFontSize="14px"
                                    placeHolderFontWeight="400"
                                    leftPadding="20"
                                    fontSize="14"
                                    placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                    widgetId="1763843436409955"
                                    headerText="phone_no."
                                    tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                                  >

                                   </QInputText>

                                </QFlex>
                                <QErrorMessage
                                 cms_form_Id="1763843436411601"
                                 cms_form_input_Id="1763843436409060"
                                 widgetId="1763843436409055"
                                 tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                               />

                             </QFormInputElement>
                             <QFormInputElement
                              widgetId="1763843436413624"
                              headerText="Address"
                              tailwaindClasses="w-full h-auto relative block"
                            >
                                <QFlex
                                 widgetId="1763843436405762"
                                 tailwaindClasses="w-[auto] h-auto static"
                               >
                                   <QParagraph
                                    widgetId="1763843436411103"
                                    headerText="Address"
                                    tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                  />

                                </QFlex>
                                <QFlex
                                 widgetId="1763843436413893"
                                 tailwaindClasses="w-full h-auto static"
                               >
                                   <QTextArea
                                    errorSet={{}}
                                    placeHolder="address"
                                    maxWords="1000"
                                    showNumberCount="0"
                                    showResizeButton="0"
                                    widgetId="1763843436406561"
                                    headerText="address"
                                    tailwaindClasses="w-full h-[100px] pt-[20px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[5px] rounded-tl-[5px] rounded-bl-[5px] rounded-br-[5px]"
                                  >

                                   </QTextArea>

                                </QFlex>
                                <QErrorMessage
                                 cms_form_Id="1763843436411601"
                                 cms_form_input_Id="1763843436413624"
                                 widgetId="1763843436407473"
                                 tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                               />

                             </QFormInputElement>

                          </QForm>
                          <QFullWidth
                           widgetId="1764423359325841"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                         >
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToThankYou",
                      }}
                    >
                                                  <QButton
                               buttonType="button"
                               widgetId="1764423359322622"
                               bgColor="var(--primarybtcolor)"
                               headerText="FINISH ORDER"
                               tailwaindClasses="w-full h-[60px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-[15px] font-normal text-[#FFFFFFFF]"
                             />
</QActionFlow>


                          </QFullWidth>

                      </QFullWidth>

                  </QFullWidth>
                  <QFullWidth
                   widgetId="1763843436412517"
                   headerText="Add Widgets"
                   tailwaindClasses="w-[45%] h-auto static flex flex-col justify-start items-start"
                 >
                      <QFullWidth
                       widgetId="1763843436407113"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pb-[15px] static flex flex-col justify-start items-start"
                     >
                          <QTextH4
                           widgetId="1763843436407833"
                           headerText="Review your cart"
                           tailwaindClasses="w-[auto] h-auto pb-[20px] static font-[Arial] text-2xl font-semibold text-[#000000] text-left"
                         />
                          <QDiv
                           tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-5 gap-x-5"
                         >
                         <QRepeat
                           repeaterDefaultData={defaultRepeatState1011}
                           loading={loading}
                           targetKey="user_id"
                           widgetId="1764420877022939"
                           headerText="Add Widgets"
                           tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start gap-y-5 gap-x-5"
                         >
                              <QFlex
                               widgetId="1764420877255246"
                               tailwaindClasses="h-auto static flex flex-col justify-start items-start"
                             >
                                 <QFlex
                                  widgetId="1764420908138257"
                                  headerText="Add Widgets"
                                  tailwaindClasses="w-[600px] min-h-[100px] h-auto static flex flex-row justify-start items-start"
                                >
                                    <QImage
                                     widgetId="1764420908142588"
                                     tagKey="thumbnail"
                                     bgUrl="https://i.postimg.cc/52wMM4ms/Mask-Group.png"
                                     backgroundSize="cover"
                                     headerText="Add Widgets Vertically"
                                     tailwaindClasses="w-[100px] min-h-[100px] h-[100px] static object-cover rounded-tr-[15px] rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]"
                                   />
                                    <QFullWidth
                                     widgetId="1764420908137238"
                                     headerText="Add Widgets"
                                     tailwaindClasses="w-[70%] min-h-[100px] h-[100px] pl-[20px] static flex flex-col justify-start items-start"
                                   >
                                        <QTextH2
                                         widgetId="1764420908142161"
                                         tagKey="name"
                                         headerText="DuoComfort Sofa Premium"
                                         tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-bold text-[#000000] text-left"
                                       />
                                        <QParagraph
                                         widgetId="1764420908141530"
                                         headerText="Size: L"
                                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#060606FF] text-left"
                                       />
                                        <QFlex
                                         widgetId="1764420908140944"
                                         tailwaindClasses="w-full h-auto static flex flex-row justify-between items-center"
                                       >
                                           <QParagraph
                                            widgetId="1764420908143853"
                                            tagKey="quantity"
                                            headerText="Quantity: 1"
                                            tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#000000FF] text-left"
                                          />

                                        </QFlex>
                                        <QFlex
                                         widgetId="1764420908140143"
                                         tailwaindClasses="w-[460px] h-auto static flex flex-row justify-between items-end"
                                       >
                                           <QTextH3
                                            widgetId="1764420908141320"
                                            tagKey="price"
                                            headerText="$20.00"
                                            tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-bold text-[#000000] text-left"
                                          />
                                           <QImage
                                            widgetId="1764420908143577"
                                            bgUrl="https://i.postimg.cc/Fz9RTm7f/trash.png"
                                            headerText="Add Widgets Vertically"
                                            tailwaindClasses="w-[20px] h-auto static"
                                          />

                                        </QFlex>

                                    </QFullWidth>

                                 </QFlex>

                              </QFlex>

                          </QRepeat></QDiv>

                      </QFullWidth>
                      <QFlex
                       widgetId="1763843436413965"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[40px] static block"
                     >
                         <QFullWidth
                          widgetId="1763843436416097"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                        >
                             <QTextH4
                              widgetId="1763843436418500"
                              headerText="Subtotal"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                            />
                             <QFlex
                              widgetId="1764575891191279"
                              tailwaindClasses="w-[auto] static flex flex-row"
                            >
                                <QTextH4
                                 widgetId="1764575917021945"
                                 headerText="$"
                                 tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                               />
                                <QTextH4
                                 widgetId="1763843436411212"
                                 headerText={cartSubTotal}
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#000000] text-left"
                               />

                             </QFlex>

                         </QFullWidth>
                         <QFullWidth
                          widgetId="1763843436417443"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                        >
                             <QTextH4
                              widgetId="1763843436411331"
                              headerText="Shipping"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                            />
                             <QTextH4
                              widgetId="1763843436412218"
                              headerText="Calculated at the next step"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-lg font-medium text-[#000000] text-left"
                            />

                         </QFullWidth>
                         <QFullWidth
                          widgetId="1763843436412456"
                          headerText="Add Widgets"
                          tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                        >
                             <QTextH4
                              widgetId="1763843436414789"
                              headerText="Total"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-bold text-[#000000] text-left"
                            />
                             <QFlex
                              widgetId="1764575715202994"
                              tailwaindClasses="w-[auto] static flex flex-row"
                            >
                                <QTextH4
                                 widgetId="1764575731559815"
                                 headerText="$"
                                 tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-bold text-[#000000] text-left"
                               />
                                <QTextH4
                                 widgetId="1763843436412550"
                                 headerText={cartTotal}
                                 tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[25px] font-bold text-[#000000] text-left"
                               />

                             </QFlex>

                         </QFullWidth>

                      </QFlex>

                  </QFullWidth>

               </QFlex>

            </QSection>

         </QSection>

      </QSection>
</> );
};

export default CheckoutScene;