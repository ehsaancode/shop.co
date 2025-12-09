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



export const HomeScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [formHeaderData106, setFormHeaderData106] = useState({});
const [formInputData107, setFormInputData107] = useState({"email":"","password":""});
const [formModel108, setFormModel108] = useState({"model":{"fields":{"1763801109155296":{"config":{"id":"email","type":"email","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763801109153150":{"config":{"id":"password","type":"password","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}}},"order":[]},"state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}});
const [formMetaData109, setFormMetaData109] = useState({"formData":{"id":"1763801104061267","name":"Sample Form","state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}},"formId":"865"}});
const [responseData, setResponseData] = useState(null);
const [login_response, setLogin_response] = useState(null);
const [reponseData, setReponseData] = useState(null);
const [authResponseData, setAuthResponseData] = useState(null);

  
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




              const Action1855 = useCallback(async (event) => {
                const { formsubmitValidation, formValue, apiResponse } = await 
                QFormSubmit({
                  cms_form_Id: "1763801104061267",
                  apiInfo: {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/login",
                    method: "POST",
                    body: "{\"email\":\"test@surya.com\",\"password\":\"123456\"}",
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                });
                  console.log('formValue', formValue)
                  if (formsubmitValidation) {
                    if (apiResponse && Array.isArray(apiResponse) ? apiResponse.length > 0 : Object.keys(apiResponse).length > 0) {
                      console.log("✅ Form is valid and API success:", apiResponse);

              
                set('userdata',apiResponse.data?.user);  
                
                set('undefined',apiResponse);  
                
                  NavigationUtils.navigateTo(navigate, "/Shop");

              
               
                    } 
                    else {
                      console.log("✅ Form is valid but API not called or returned empty:", apiResponse);
                    }
                  } else {
                    console.log("❌ Form invalid or API failed:", apiResponse);
                  }
              }, []);

              
              const Action158 = useCallback(async (event) => {
                Action1855();
              }, []);

              
              const navigateToRegister = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Register");
              }, [navigate]);

            
            
            
             
             
            
            
const actions = {
      Action158,
      navigateToRegister,
      Action1855,
  };


return (
<>
         <QSection
          widgetId="1763800671549326"
          tailwaindClasses="w-full h-auto relative block"
        >

         </QSection>
         <QSection
          widgetId="1763801100818671"
          bgUrl="https://imgcdn.kuick.com/cms-testing-images/9701606.jpg"
          backgroundSize="cover"
          boxShadow="    rgba(220, 220, 220, 1.00)"
          textShadow="rgba(220, 220, 220, 1.00)"
          tailwaindClasses="w-full min-h-[850px] max-h-[100vh] pt-[60px] pb-[60px] pl-[80px] relative object-cover flex flex-col justify-center items-end"
        >
            <QFlex
             widgetId="1763801138676118"
             bgColor="rgba(255, 255, 255, 0.84)"
             boxShadow="    rgba(232, 232, 232, 1.00)"
             textShadow="rgba(232, 232, 232, 1.00)"
             tailwaindClasses="w-[540px] h-auto pt-[60px] pr-[60px] pb-[60px] pl-[60px] mt-[30px] mr-[60px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DBDBDBFF] border-r-[#DBDBDBFF] border-b-[#DBDBDBFF] border-l-[#DBDBDBFF] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
           >
               <QTextH2
                widgetId="1763802250648024"
                headerText="LOGIN"
                tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[35px] font-black text-[#211E1EFF] text-left"
              />
               <QParagraph
                widgetId="1763802347305837"
                headerText="Please login using account detail bellow."
                tailwaindClasses="w-[auto] h-auto pb-[50px] static font-[Inter] text-[17px] font-normal text-[#353232FF] text-left"
              />
               <QForm
                cms_form_Id="1763801104061267"
                apiUrl="https://jsonplaceholder.typicode.com/posts"
                widgetId="1763801104061267"
                headerText="Form"
                tailwaindClasses="w-full h-auto static"
              >
                  <QFormInputElement
                   widgetId="1763801109155296"
                   headerText="Email"
                   tailwaindClasses="w-full h-auto pb-[30px] relative block"
                 >
                     <QFlex
                      widgetId="1763801110219153"
                      tailwaindClasses="w-full h-auto static"
                    >
                        <QParagraph
                         widgetId="1763801110220005"
                         headerText="Email"
                         tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1763801110221832"
                      tailwaindClasses="w-full h-auto relative"
                    >
                        <QInputText
                         readOnly="false"
                         disabled="false"
                         cms_form_Id="1763801104061267"
                         cmsFormInputLabel="1763801109155296"
                         errorSet={{"cms_form_input_Id":"1763801109155296","cms_form_Id":"1763801104061267","cms_form_input_Name":"email","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"1","cms_form_input_Required_Msg":"Please enter your email address","cms_form_input_Regex":"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$","cms_form_input_Regex_Msg":"Please enter a valid email address.","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"1"}}
                         textInputType="email"
                         placeHolder="email"
                         placeHolderFontSize="14px"
                         placeHolderFontWeight="400"
                         leftPadding="20"
                         fontSize="14"
                         placeHolderTextColor="rgba(0, 0, 0, 1.00)"
                         widgetId="1763801110221567"
                         headerText="email"
                         tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#000000FF] border-r-[#000000FF] border-b-[#000000FF] border-l-[#000000FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                       >

                        </QInputText>

                     </QFlex>
                     <QErrorMessage
                      cms_form_Id="1763801104061267"
                      cms_form_input_Id="1763801109155296"
                      textInputType="email"
                      widgetId="1763801110220429"
                      headerText="Please enter your email address"
                      tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] font-[Arial] text-xl font-normal text-[#FF0000]"
                    />

                  </QFormInputElement>
                  <QFormInputElement
                   widgetId="1763801109153150"
                   headerText="Password"
                   tailwaindClasses="w-full h-auto relative block"
                 >
                     <QFlex
                      widgetId="1763801111944923"
                      tailwaindClasses="w-full h-auto static"
                    >
                        <QParagraph
                         widgetId="1763801111941009"
                         headerText="Password"
                         tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1763801111945335"
                      tailwaindClasses="w-full h-auto relative"
                    >
                        <QInputText
                         readOnly="false"
                         disabled="false"
                         cms_form_Id="1763801104061267"
                         cmsFormInputLabel="1763801109153150"
                         errorSet={{"cms_form_input_Id":"1763801109153150","cms_form_Id":"1763801104061267","cms_form_input_Name":"password","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"1","cms_form_input_Required_Msg":"Please enter your password","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"6","cms_form_input_Min_Msg":"Password must be at least 6 characters.","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0","trailingIconEnabled":true,"trailingIconAction":"Toggle password"}}
                         textInputType="password"
                         placeHolder="password"
                         placeHolderFontSize="14px"
                         placeHolderFontWeight="400"
                         leftPadding="20"
                         fontSize="14"
                         placeHolderTextColor="rgba(3, 3, 3, 1.00)"
                         widgetId="1763801111944761"
                         headerText="password"
                         tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#050505FF] border-r-[#050505FF] border-b-[#050505FF] border-l-[#050505FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                       >

                        </QInputText>

                     </QFlex>
                     <QIcon
                      useCase="trailingIcon"
                      cms_form_Id="1763801104061267"
                      cms_form_input_Id="1763801109153150"
                      textInputType="password"
                      iconLink="https://imgcdn.kuick.com/cms/icon/quick-studio-icon-library/interface/outline/eye.svg"
                      widgetId="1763815710005293"
                      tailwaindClasses="w-[5%] h-[60px] absolute right-[10px] bottom-[0px] text-[#FFFFFFFF]"
                    />
                     <QErrorMessage
                      cms_form_Id="1763801104061267"
                      cms_form_input_Id="1763801109153150"
                      textInputType="password"
                      widgetId="1763801111941442"
                      headerText="Password must be at least 8 characters."
                      tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] font-[Arial] text-xl font-normal text-[#FF0000]"
                    />

                  </QFormInputElement>

               </QForm>
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action158",
                      }}
                    >
                                   <QButton
                buttonType="button"
                widgetId="1763802792220626"
                bgColor="var(--primarybtcolor)"
                headerText="LOGIN"
                tailwaindClasses="w-full h-[60px] mt-[30px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-base font-bold text-[#FFFFFFFF] uppercase"
              />
</QActionFlow>

               <QFlex
                widgetId="1763802880768601"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] static flex flex-row justify-center items-start"
              >
                  <QParagraph
                   widgetId="1763802889176682"
                   headerText="Don’t have an Account?"
                   tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#00000095] text-left"
                 />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToRegister",
                      }}
                    >
                                      <QButton
                   buttonType="button"
                   widgetId="1763818362536325"
                   bgColor="rgba(54, 54, 54, 0.00)"
                   headerText="Create an account"
                   tailwaindClasses="w-[auto] h-auto pl-[6px] static font-[Inter] text-xs font-bold text-[#050404FF]"
                 />
</QActionFlow>


               </QFlex>

            </QFlex>
            <QImage
             widgetId="1764516922491281"
             bgUrl="https://imgcdn.kuick.com/cms-testing-images/logo-white.png"
             headerText="Add Widgets Vertically"
             tailwaindClasses="w-[200px] h-auto absolute top-[30px] left-[30px]"
           />

         </QSection>
</> );
};

export default HomeScene;