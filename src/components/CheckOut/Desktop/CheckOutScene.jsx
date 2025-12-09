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



export const CheckOutScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [formInputData206, setFormInputData206] = useState({"full_name":"","email":"","phone_no.":"","address":""});
const [formModel207, setFormModel207] = useState({"model":{"fields":{"1763842614473529":{"config":{"id":"full_name","type":"text","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763842614476488":{"config":{"id":"email","type":"email","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763842639408652":{"config":{"id":"phone_no.","type":"number","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763842639412815":{"config":{"id":"address","type":"textarea","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}}},"order":[]},"state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}});
const [formHeaderData208, setFormHeaderData208] = useState({});
const [formMetaData209, setFormMetaData209] = useState({"formData":{"id":"1763842606275990","name":"Sample Form","state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}},"formId":"872"}});

  
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
          widgetId="1763838605514712"
          tailwaindClasses="w-full min-h-[400px] h-auto relative block"
        >
            <QFlex
             widgetId="1763838608482716"
             headerText="Add Widgets"
             tailwaindClasses="w-full h-auto pt-[30px] pr-[30px] pb-[30px] pl-[30px] static border-t-[#C8C8C8FF] border-r-[#C8C8C8FF] border-b-[#C8C8C8FF] border-l-[#C8C8C8FF] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] flex flex-row justify-between items-start"
           >
               <QFullWidth
                widgetId="1763838608478704"
                headerText="Add Widgets"
                tailwaindClasses="w-[45%] h-auto static flex flex-col justify-start items-start"
              >
                   <QFullWidth
                    widgetId="1763838608485514"
                    headerText="Add Widgets"
                    tailwaindClasses="w-full min-h-[100px] h-auto static flex flex-col justify-start items-start"
                  >
                       <QTextH4
                        widgetId="1763838608479215"
                        headerText="Shiping information"
                        tailwaindClasses="w-[auto] h-auto static font-[Inter] text-2xl font-semibold text-[#000000] text-left"
                      />
                       <QTextH4
                        widgetId="1763838608484973"
                        headerText="Not ready to checkout? Continue Shopping"
                        tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-medium text-[#000000] text-left"
                      />
                       <QForm
                        cms_form_Id="1763842606275990"
                        apiUrl="https://jsonplaceholder.typicode.com/posts"
                        widgetId="1763842606275990"
                        height="calc(100% - (20px))"
                        headerText="Form"
                        tailwaindClasses="w-full min-h-[600px] mt-[20px] static"
                      >
                          <QFormInputElement
                           widgetId="1763842614473529"
                           headerText="Full name"
                           tailwaindClasses="w-full h-auto pb-[20px] relative block"
                         >
                             <QFlex
                              widgetId="1763842616205365"
                              tailwaindClasses="w-full h-auto static"
                            >
                                <QParagraph
                                 widgetId="1763842616202799"
                                 headerText="Full name"
                                 tailwaindClasses="pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                               />

                             </QFlex>
                             <QFlex
                              widgetId="1763842616198953"
                              tailwaindClasses="w-full h-auto relative"
                            >
                                <QInputText
                                 readOnly="false"
                                 disabled="false"
                                 cms_form_Id="1763842606275990"
                                 cmsFormInputLabel="1763842614473529"
                                 errorSet={{"cms_form_input_Id":"1763842614473529","cms_form_Id":"1763842606275990","cms_form_input_Name":"full_name","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                 textInputType="text"
                                 placeHolder="Full name"
                                 placeHolderFontSize="14px"
                                 placeHolderFontWeight="400"
                                 leftPadding="20"
                                 fontSize="14"
                                 placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                 widgetId="1763842616198915"
                                 headerText="full_name"
                                 tailwaindClasses="w-full pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-md rounded-tl-md rounded-bl-md rounded-br-md text-sm"
                               >

                                </QInputText>

                             </QFlex>
                             <QErrorMessage
                              cms_form_Id="1763842606275990"
                              cms_form_input_Id="1763842614473529"
                              textInputType="text"
                              widgetId="1763842616198703"
                              tailwaindClasses="absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                            />

                          </QFormInputElement>
                          <QFormInputElement
                           widgetId="1763842614476488"
                           headerText="Email"
                           tailwaindClasses="w-full h-auto pb-[20px] relative block"
                         >
                             <QFlex
                              widgetId="1763842622079968"
                              tailwaindClasses="w-full h-auto static"
                            >
                                <QParagraph
                                 widgetId="1763842622081645"
                                 headerText="Email"
                                 tailwaindClasses="pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                               />

                             </QFlex>
                             <QFlex
                              widgetId="1763842622083089"
                              tailwaindClasses="w-full h-auto relative"
                            >
                                <QInputText
                                 readOnly="false"
                                 disabled="false"
                                 cms_form_Id="1763842606275990"
                                 cmsFormInputLabel="1763842614476488"
                                 errorSet={{"cms_form_input_Id":"1763842614476488","cms_form_Id":"1763842606275990","cms_form_input_Name":"email","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                 textInputType="email"
                                 placeHolder="Email"
                                 placeHolderFontSize="14px"
                                 placeHolderFontWeight="400"
                                 leftPadding="20"
                                 fontSize="14"
                                 placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                 widgetId="1763842622075690"
                                 headerText="email"
                                 tailwaindClasses="w-full pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-md rounded-tl-md rounded-bl-md rounded-br-md text-sm"
                               >

                                </QInputText>

                             </QFlex>
                             <QErrorMessage
                              cms_form_Id="1763842606275990"
                              cms_form_input_Id="1763842614476488"
                              textInputType="email"
                              widgetId="1763842622077838"
                              tailwaindClasses="absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                            />

                          </QFormInputElement>
                          <QFormInputElement
                           widgetId="1763842639408652"
                           headerText="Phone No."
                           tailwaindClasses="w-full h-auto pb-[20px] relative block"
                         >
                             <QFlex
                              widgetId="1763842641508222"
                              tailwaindClasses="w-full h-auto static"
                            >
                                <QParagraph
                                 widgetId="1763842641517400"
                                 headerText="Phone No."
                                 tailwaindClasses="pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                               />

                             </QFlex>
                             <QFlex
                              widgetId="1763842641517486"
                              tailwaindClasses="w-full h-auto relative"
                            >
                                <QInputText
                                 readOnly="false"
                                 disabled="false"
                                 cms_form_Id="1763842606275990"
                                 cmsFormInputLabel="1763842639408652"
                                 errorSet={{"cms_form_input_Id":"1763842639408652","cms_form_Id":"1763842606275990","cms_form_input_Name":"phone_no.","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                 textInputType="number"
                                 placeHolder="Phone No."
                                 placeHolderFontSize="14px"
                                 placeHolderFontWeight="400"
                                 leftPadding="20"
                                 fontSize="30px"
                                 placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                 widgetId="1763842641510028"
                                 headerText="phone_no."
                                 tailwaindClasses="w-full pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-md rounded-tl-md rounded-bl-md rounded-br-md"
                               >

                                </QInputText>

                             </QFlex>
                             <QErrorMessage
                              cms_form_Id="1763842606275990"
                              cms_form_input_Id="1763842639408652"
                              textInputType="number"
                              widgetId="1763842641512283"
                              tailwaindClasses="absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                            />

                          </QFormInputElement>
                          <QFormInputElement
                           widgetId="1763842639412815"
                           headerText="Address"
                           tailwaindClasses="w-full h-auto relative block"
                         >
                             <QFlex
                              widgetId="1763842644135867"
                              tailwaindClasses="w-[auto] h-auto static"
                            >
                                <QParagraph
                                 widgetId="1763842644133790"
                                 headerText="Address"
                                 tailwaindClasses="pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                               />

                             </QFlex>
                             <QFlex
                              widgetId="1763842644141155"
                              tailwaindClasses="w-full h-auto static"
                            >
                                <QTextArea
                                 errorSet={{}}
                                 placeHolder="Address"
                                 maxWords="1000"
                                 showNumberCount="0"
                                 showResizeButton="0"
                                 widgetId="1763842644135275"
                                 headerText="address"
                                 tailwaindClasses="w-full h-[200px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[5px] rounded-tl-[5px] rounded-bl-[5px] rounded-br-[5px]"
                               >

                                </QTextArea>

                             </QFlex>
                             <QErrorMessage
                              cms_form_Id="1763842606275990"
                              cms_form_input_Id="1763842639412815"
                              textInputType="textarea"
                              widgetId="1763842644137591"
                              tailwaindClasses="absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                            />

                          </QFormInputElement>

                       </QForm>

                   </QFullWidth>

               </QFullWidth>
               <QFullWidth
                widgetId="1763838608494948"
                headerText="Add Widgets"
                tailwaindClasses="w-[45%] h-auto static flex flex-col justify-start items-start"
              >
                   <QFullWidth
                    widgetId="1763838608489466"
                    headerText="Add Widgets"
                    tailwaindClasses="w-full h-auto pb-[15px] static flex flex-col justify-start items-start"
                  >
                       <QTextH4
                        widgetId="1763838608493436"
                        headerText="Review your cart"
                        tailwaindClasses="w-[auto] h-auto static font-[Arial] text-2xl font-semibold text-[#000000] text-left"
                      />

                   </QFullWidth>
                   <QFlex
                    widgetId="1763840834156571"
                    tailwaindClasses="w-[623px] h-auto pb-[15px] static flex flex-col gap-y-2 gap-x-2"
                  >
                      <QFlex
                       widgetId="1763840834151034"
                       headerText="Add Widgets"
                       tailwaindClasses="w-[600px] min-h-[100px] h-auto static flex flex-row justify-start items-start"
                     >
                         <QImage
                          widgetId="1763840834164866"
                          bgUrl="https://i.postimg.cc/52wMM4ms/Mask-Group.png"
                          backgroundSize="cover"
                          headerText="Add Widgets Vertically"
                          tailwaindClasses="w-[100px] min-h-[100px] h-auto static object-cover rounded-tr-[15px] rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]"
                        />
                         <QFullWidth
                          widgetId="1763840834161173"
                          headerText="Add Widgets"
                          tailwaindClasses="w-[70%] min-h-[100px] h-[100px] pl-[20px] static flex flex-col justify-start items-start"
                        >
                             <QTextH2
                              widgetId="1763840834161882"
                              headerText="DuoComfort Sofa Premium"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-bold text-[#000000] text-left"
                            />
                             <QParagraph
                              widgetId="1763840834165227"
                              headerText="Size: L"
                              tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#060606FF] text-left"
                            />
                             <QFlex
                              widgetId="1763840834165200"
                              tailwaindClasses="w-full h-auto static flex flex-row justify-between items-center"
                            >
                                <QParagraph
                                 widgetId="1763840834158140"
                                 headerText="Quantity: 1"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#000000FF] text-left"
                               />

                             </QFlex>
                             <QFlex
                              widgetId="1763840834164771"
                              tailwaindClasses="w-[460px] h-auto static flex flex-row justify-between items-end"
                            >
                                <QTextH3
                                 widgetId="1763840834163117"
                                 headerText="$20.00"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-bold text-[#000000] text-left"
                               />
                                <QImage
                                 widgetId="1763840834161713"
                                 bgUrl="https://i.postimg.cc/Fz9RTm7f/trash.png"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[20px] h-auto static"
                               />

                             </QFlex>

                         </QFullWidth>

                      </QFlex>

                   </QFlex>
                   <QFlex
                    widgetId="1763840828852302"
                    tailwaindClasses="w-[623px] h-auto static flex flex-col gap-y-2 gap-x-2"
                  >
                      <QFlex
                       widgetId="1763840828856222"
                       headerText="Add Widgets"
                       tailwaindClasses="w-[600px] min-h-[100px] h-auto static flex flex-row justify-start items-start"
                     >
                         <QImage
                          widgetId="1763840828855008"
                          bgUrl="https://i.postimg.cc/52wMM4ms/Mask-Group.png"
                          backgroundSize="cover"
                          headerText="Add Widgets Vertically"
                          tailwaindClasses="w-[100px] min-h-[100px] h-auto static object-cover rounded-tr-[15px] rounded-tl-[15px] rounded-bl-[15px] rounded-br-[15px]"
                        />
                         <QFullWidth
                          widgetId="1763840828860382"
                          headerText="Add Widgets"
                          tailwaindClasses="w-[70%] min-h-[100px] h-[100px] pl-[20px] static flex flex-col justify-start items-start"
                        >
                             <QTextH2
                              widgetId="1763840828861891"
                              headerText="DuoComfort Sofa Premium"
                              tailwaindClasses="w-[auto] h-auto static font-[Inter] text-xl font-bold text-[#000000] text-left"
                            />
                             <QParagraph
                              widgetId="1763840828853069"
                              headerText="Size: L"
                              tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#060606FF] text-left"
                            />
                             <QFlex
                              widgetId="1763840828853699"
                              tailwaindClasses="w-full h-auto static flex flex-row justify-between items-center"
                            >
                                <QParagraph
                                 widgetId="1763840828854846"
                                 headerText="Quantity: 1"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#000000FF] text-left"
                               />

                             </QFlex>
                             <QFlex
                              widgetId="1763840828858718"
                              tailwaindClasses="w-[460px] h-auto static flex flex-row justify-between items-end"
                            >
                                <QTextH3
                                 widgetId="1763840828855322"
                                 headerText="$20.00"
                                 tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-bold text-[#000000] text-left"
                               />
                                <QImage
                                 widgetId="1763840828856425"
                                 bgUrl="https://i.postimg.cc/Fz9RTm7f/trash.png"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[20px] h-auto static"
                               />

                             </QFlex>

                         </QFullWidth>

                      </QFlex>

                   </QFlex>
                   <QFlex
                    widgetId="1763838608490075"
                    headerText="Add Widgets"
                    tailwaindClasses="w-full h-auto pt-[40px] static block"
                  >
                      <QFullWidth
                       widgetId="1763838608490122"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                     >
                          <QTextH4
                           widgetId="1763838608494857"
                           headerText="Subtotal"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#000000] text-left"
                         />
                          <QTextH4
                           widgetId="1763838608492184"
                           headerText="$120"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#000000] text-left"
                         />

                      </QFullWidth>
                      <QFullWidth
                       widgetId="1763838608497170"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                     >
                          <QTextH4
                           widgetId="1763838608494994"
                           headerText="Shipping"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#000000] text-left"
                         />
                          <QTextH4
                           widgetId="1763838608491174"
                           headerText="Calculated at the next step"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-lg font-medium text-[#000000] text-left"
                         />

                      </QFullWidth>
                      <QFullWidth
                       widgetId="1763838608496159"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                     >
                          <QTextH4
                           widgetId="1763838608493044"
                           headerText="Total"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[25px] font-bold text-[#000000] text-left"
                         />
                          <QTextH4
                           widgetId="1763838608494805"
                           headerText="$120"
                           tailwaindClasses="w-[auto] h-auto static font-[Arial] text-[25px] font-bold text-[#000000] text-left"
                         />

                      </QFullWidth>
                      <QFullWidth
                       widgetId="1763838608494304"
                       headerText="Add Widgets"
                       tailwaindClasses="w-full h-auto pt-[10px] pb-[10px] static flex flex-row justify-between items-start"
                     >
                          <QButton
                           buttonType="button"
                           widgetId="1763838608491711"
                           bgColor="rgba(251, 46, 134, 1.00)"
                           headerText="Continue to checkout"
                           tailwaindClasses="w-full h-[60px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-[15px] font-normal text-[#FFFFFFFF]"
                         />

                      </QFullWidth>

                   </QFlex>

               </QFullWidth>

            </QFlex>

         </QSection>
</> );
};

export default CheckOutScene;