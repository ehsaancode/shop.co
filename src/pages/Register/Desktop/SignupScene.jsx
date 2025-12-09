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



export const SignupScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [formMetaData115, setFormMetaData115] = useState({"formData":{"id":"1763806032413396","name":"Sample Form","state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}},"formId":"866"}});
const [formInputData116, setFormInputData116] = useState({"name":"","email":"","mobile":"","password":"","confirm_password":""});
const [formModel117, setFormModel117] = useState({"model":{"fields":{"1763806129064575":{"config":{"id":"name","type":"text","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763806129062116":{"config":{"id":"email","type":"email","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763806129069144":{"config":{"id":"mobile","type":"number","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763806129069905":{"config":{"id":"password","type":"password","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1763806129067789":{"config":{"id":"confirm_password","type":"password","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}}},"order":[]},"state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}});
const [formHeaderData118, setFormHeaderData118] = useState({});
const [reponseData, setReponseData] = useState(null);
const [responseData, setResponseData] = useState(null);

  
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




              const Action153 = useCallback(async (event) => {
                const { formsubmitValidation, formValue, apiResponse } = await 
                QFormSubmit({
                  cms_form_Id: "1763806032413396",
                  apiInfo: {
                    url: "https://prasun.nodejs.erpbuilder.redoq.host/api/builder/register",
                    method: "POST",
                    body: "{\"name\":\"Test User\",\"email\":\"tes0s@example.com\",\"mobile\":\"9876503260\",\"password\":\"12345s6\",\"role\":\"customer\"}",
                    headers: {"Content-Type":"application/json","Authorization":"Bearer <token>"},
                  }
                });
                  console.log('formValue', formValue)
                  if (formsubmitValidation) {
                    if (apiResponse && Array.isArray(apiResponse) ? apiResponse.length > 0 : Object.keys(apiResponse).length > 0) {
                      console.log("✅ Form is valid and API success:", apiResponse);

              
                  NavigationUtils.navigateTo(navigate, "/Login");

              
               
                    } 
                    else {
                      console.log("✅ Form is valid but API not called or returned empty:", apiResponse);
                    }
                  } else {
                    console.log("❌ Form invalid or API failed:", apiResponse);
                  }
              }, []);

              
              const Action168 = useCallback(async (event) => {
                Action153();
              }, []);

              
              const navigateToLogin = useCallback((event) => {
                
                NavigationUtils.navigateTo(navigate, "/Login");
              }, [navigate]);

            
            
            
            
            
const actions = {
      Action168,
      navigateToLogin,
      Action153,
  };


return (
<>
         <QSection
          widgetId="1763805259332761"
          tailwaindClasses="w-full h-auto relative block"
        >

         </QSection>
         <QSection
          widgetId="1763805283878588"
          bgUrl="https://imgcdn.kuick.com/cms-testing-images/9701606.jpg"
          backgroundSize="cover"
          tailwaindClasses="w-full max-h-[100vh] h-[768px] relative object-cover flex flex-col justify-start items-end"
        >
            <QFlex
             widgetId="1763805286463111"
             bgColor="rgba(255, 255, 255, 0.83)"
             boxShadow="    rgba(232, 232, 232, 1.00)"
             textShadow="rgba(232, 232, 232, 1.00)"
             tailwaindClasses="w-[600px] h-auto pt-[40px] pr-[60px] pb-[40px] pl-[60px] mt-[10px] mr-[60px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#DBDBDBFF] border-r-[#DBDBDBFF] border-b-[#DBDBDBFF] border-l-[#DBDBDBFF] rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-center items-start"
           >
               <QTextH2
                widgetId="1763805286459094"
                headerText="REGISTER"
                tailwaindClasses="w-[auto] h-auto static font-[Inter] text-[35px] font-bold text-[#000000] text-left"
              />
               <QParagraph
                widgetId="1763805286462161"
                headerText="Please register using account detail bellow."
                tailwaindClasses="w-[auto] h-auto pb-[20px] static font-[Inter] text-[17px] font-normal text-[#0C0C0CFF] text-left"
              />
               <QForm
                cms_form_Id="1763806032413396"
                apiUrl="https://jsonplaceholder.typicode.com/posts"
                widgetId="1763806032413396"
                headerText="Form"
                tailwaindClasses="w-full min-h-[200px] h-auto static"
              >
                  <QFormInputElement
                   widgetId="1763806129064575"
                   headerText="Name"
                   tailwaindClasses="w-full h-auto pb-[20px] relative block"
                 >
                     <QFlex
                      widgetId="1763806130715849"
                      tailwaindClasses="w-full h-auto pb-[10px] static"
                    >
                        <QParagraph
                         widgetId="1763806130709135"
                         headerText="Name"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-normal text-[#000000FF]"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1763806130713746"
                      tailwaindClasses="w-full h-auto relative"
                    >
                        <QInputText
                         readOnly="false"
                         disabled="false"
                         cms_form_Id="1763806032413396"
                         cmsFormInputLabel="1763806129064575"
                         errorSet={{"cms_form_input_Id":"1763806129064575","cms_form_Id":"1763806032413396","cms_form_input_Name":"name","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"1","cms_form_input_Required_Msg":"Please enter Name","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                         textInputType="text"
                         placeHolder="name"
                         placeHolderFontSize="14px"
                         placeHolderFontWeight="400"
                         leftPadding="20"
                         fontSize="12"
                         placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                         widgetId="1763806130707233"
                         headerText="name"
                         tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#000000FF] border-r-[#000000FF] border-b-[#000000FF] border-l-[#000000FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-xs"
                       >

                        </QInputText>

                     </QFlex>
                     <QErrorMessage
                      cms_form_Id="1763806032413396"
                      cms_form_input_Id="1763806129064575"
                      textInputType="text"
                      widgetId="1763806130712134"
                      headerText="Please enter Name"
                      tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] font-[Arial] text-xl font-normal text-[#FF0000]"
                    />

                  </QFormInputElement>
                  <QFormInputElement
                   widgetId="1763806129062116"
                   headerText="Email"
                   tailwaindClasses="w-full h-auto pb-[20px] relative block"
                 >
                     <QFlex
                      widgetId="1763806132703465"
                      tailwaindClasses="w-full h-auto pb-[10px] static"
                    >
                        <QParagraph
                         widgetId="1763806132704530"
                         headerText="Email"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-normal text-[#000000FF]"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1763806132696821"
                      tailwaindClasses="w-full h-auto relative"
                    >
                        <QInputText
                         readOnly="false"
                         disabled="false"
                         cms_form_Id="1763806032413396"
                         cmsFormInputLabel="1763806129062116"
                         errorSet={{"cms_form_input_Id":"1763806129062116","cms_form_Id":"1763806032413396","cms_form_input_Name":"email","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"1","cms_form_input_Required_Msg":"Please enter Email","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"1"}}
                         textInputType="email"
                         placeHolder="email"
                         placeHolderFontSize="14px"
                         placeHolderFontWeight="400"
                         leftPadding="20"
                         fontSize="14"
                         placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                         widgetId="1763806132700017"
                         headerText="email"
                         tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#000000FF] border-r-[#000000FF] border-b-[#000000FF] border-l-[#000000FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                       >

                        </QInputText>

                     </QFlex>
                     <QErrorMessage
                      cms_form_Id="1763806032413396"
                      cms_form_input_Id="1763806129062116"
                      textInputType="email"
                      widgetId="1763806132699975"
                      headerText="Please enter Email"
                      tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] font-[Arial] text-xl font-normal text-[#FF0000]"
                    />

                  </QFormInputElement>
                  <QFormInputElement
                   widgetId="1763806129069144"
                   headerText="Mobile"
                   tailwaindClasses="w-full h-auto pb-[20px] relative block"
                 >
                     <QFlex
                      widgetId="1763806134583038"
                      tailwaindClasses="w-full h-auto pb-[10px] static"
                    >
                        <QParagraph
                         widgetId="1763806134585236"
                         headerText="Mobile"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-normal text-[#000000FF]"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1763806134580436"
                      tailwaindClasses="w-full h-auto relative"
                    >
                        <QInputText
                         readOnly="false"
                         disabled="false"
                         cms_form_Id="1763806032413396"
                         cmsFormInputLabel="1763806129069144"
                         errorSet={{"cms_form_input_Id":"1763806129069144","cms_form_Id":"1763806032413396","cms_form_input_Name":"mobile","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"1","cms_form_input_Required_Msg":"Please enter mobile number","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"10","cms_form_input_Min_Msg":"Please enter a valid mobile number","cms_form_input_Max":"10","cms_form_input_Max_Msg":"Please enter a valid mobile number","cms_form_input_On_Change_Validation":"1"}}
                         textInputType="number"
                         placeHolder="mobile"
                         placeHolderFontSize="14px"
                         placeHolderFontWeight="400"
                         leftPadding="20"
                         fontSize="14"
                         placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                         widgetId="1763806134585820"
                         headerText="mobile"
                         tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#070707FF] border-r-[#070707FF] border-b-[#070707FF] border-l-[#070707FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                       >

                        </QInputText>

                     </QFlex>
                     <QErrorMessage
                      cms_form_Id="1763806032413396"
                      cms_form_input_Id="1763806129069144"
                      textInputType="number"
                      widgetId="1763806134583047"
                      headerText="Please enter mobile number"
                      tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] font-[Arial] text-xl font-normal text-[#FF0000]"
                    />

                  </QFormInputElement>
                  <QFormInputElement
                   widgetId="1763806129069905"
                   headerText="Password"
                   tailwaindClasses="w-full h-auto pb-[20px] relative block"
                 >
                     <QFlex
                      widgetId="1763806136519117"
                      tailwaindClasses="w-full h-auto pb-[10px] static"
                    >
                        <QParagraph
                         widgetId="1763806136522893"
                         headerText="Password"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-base font-normal text-[#000000FF]"
                       />

                     </QFlex>
                     <QFlex
                      widgetId="1763806136522215"
                      tailwaindClasses="w-full h-auto relative"
                    >
                        <QInputText
                         readOnly="false"
                         disabled="false"
                         cms_form_Id="1763806032413396"
                         cmsFormInputLabel="1763806129069905"
                         errorSet={{"cms_form_input_Id":"1763806129069905","cms_form_Id":"1763806032413396","cms_form_input_Name":"password","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"1","cms_form_input_Required_Msg":"Please enter password","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"8","cms_form_input_Min_Msg":"Minimum length is 8","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0","trailingIconEnabled":true,"trailingIconAction":"Toggle password"}}
                         textInputType="password"
                         placeHolder="password"
                         placeHolderFontSize="14px"
                         placeHolderFontWeight="400"
                         leftPadding="20"
                         fontSize="14"
                         placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                         widgetId="1763806136524175"
                         headerText="password"
                         tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#010101FF] border-r-[#010101FF] border-b-[#010101FF] border-l-[#010101FF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                       >

                        </QInputText>

                     </QFlex>
                     <QIcon
                      useCase="trailingIcon"
                      cms_form_Id="1763806032413396"
                      cms_form_input_Id="1763806129069905"
                      textInputType="password"
                      iconLink="https://imgcdn.kuick.com/cms/icon/quick-studio-icon-library/interface/outline/eye.svg"
                      widgetId="1763815930064115"
                      tailwaindClasses="w-[5%] h-[60px] absolute right-[10px] bottom-[20px]"
                    />
                     <QErrorMessage
                      cms_form_Id="1763806032413396"
                      cms_form_input_Id="1763806129069905"
                      textInputType="password"
                      widgetId="1763806136520355"
                      headerText="Please enter password"
                      tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] font-[Arial] text-xl font-normal text-[#FF0000]"
                    />

                  </QFormInputElement>

               </QForm>
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "Action168",
                      }}
                    >
                                   <QButton
                buttonType="button"
                widgetId="1763805286463443"
                bgColor="rgba(251, 46, 134, 1.00)"
                headerText="CREATE ACCOUNT"
                tailwaindClasses="w-full h-[60px] mt-[30px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-base font-bold text-[#FFFFFFFF] uppercase"
              />
</QActionFlow>

               <QFlex
                widgetId="1763805286461257"
                headerText="Add Widgets"
                tailwaindClasses="w-full h-auto pt-[10px] static flex flex-row justify-center items-start"
              >
                  <QParagraph
                   widgetId="1763805286466152"
                   headerText="Already have an Account?"
                   tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#03030394] text-left"
                 />
<QActionFlow
          actions={actions}
            triggers={{
      onClick: "navigateToLogin",
                      }}
                    >
                                      <QButton
                   buttonType="button"
                   widgetId="1763818563890478"
                   bgColor="rgba(54, 54, 54, 0.00)"
                   headerText="Login"
                   tailwaindClasses="w-[auto] h-auto pl-[6px] static font-[Inter] text-xs font-bold text-[#050404FF]"
                 />
</QActionFlow>


               </QFlex>
               <QImage
                widgetId="1764565909550919"
                bgUrl="https://imgcdn.kuick.com/cms-testing-images/logo-white.png"
                headerText="Add Widgets Vertically"
                tailwaindClasses="w-[200px] h-auto absolute top-[30px] left-[30px]"
              />

            </QFlex>

         </QSection>
</> );
};

export default SignupScene;