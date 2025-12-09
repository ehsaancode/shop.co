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



export const ContactScene = () => {
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const lastSegment = location.pathname.split("/").filter(Boolean).pop();
const [openMenus, setOpenMenus] = useState({});
const [hoverTimeouts, setHoverTimeouts] = useState({});
const { openModal, closeModal  } = useModal();


const [formInputData1021, setFormInputData1021] = useState({});
const [formHeaderData1022, setFormHeaderData1022] = useState({});
const [formMetaData1023, setFormMetaData1023] = useState({"formData":{"id":"1764446618126334","name":"Sample Form","state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}},"formId":"876"}});
const [formModel1024, setFormModel1024] = useState({"model":{"fields":{},"order":[]},"state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}});
const [formHeaderData1025, setFormHeaderData1025] = useState({});
const [formInputData1026, setFormInputData1026] = useState({"name":"","email":"","mobile_no.":"","message":""});
const [formModel1027, setFormModel1027] = useState({"model":{"fields":{"1764446638354983":{"config":{"id":"name","type":"text","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1764446638363982":{"config":{"id":"email","type":"email","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1764446638360058":{"config":{"id":"mobile_no.","type":"number","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}},"1764446638363042":{"config":{"id":"message","type":"text","inputProps":{"autocomplete":false,"spellcheck":false,"autocorrect":false,"autoFocus":false,"readOnly":false,"disabled":false,"keyboardType":"text"}},"validation":{"autoValidation":false,"isValid":false,"errors":[],"rules":[]},"value":{"default":"","initial":"","current":""}}},"order":[]},"state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}});
const [formMetaData1028, setFormMetaData1028] = useState({"formData":{"id":"1764446618126334","name":"Sample Form","state":{"isDirty":false,"isValid":false,"touched":{},"errors":{}}}});

  
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
       widgetId="1763833074087737"
       tailwaindClasses="w-full min-h-[400px] h-auto relative"
     >
         <QSection
          widgetId="1763833079137296"
          bgColor="rgba(255, 255, 255, 1.00)"
          tailwaindClasses="w-full min-h-[100%vh] h-auto relative block"
        >
            <QSection
             widgetId="1763833079158409"
             tailwaindClasses="w-full min-h-[400px] h-auto relative block"
           >
               <QSection
                widgetId="1764446152667431"
                bgColor="rgba(255, 255, 255, 1.00)"
                tailwaindClasses="w-full min-h-[100%vh] h-auto relative block"
              >
                  <QSection
                   widgetId="1764446152685306"
                   bgColor="var(--innerpagebreadcrumbbg)"
                   tailwaindClasses="w-full h-auto relative flex flex-row justify-center items-start"
                 >
                     <QFlex
                      widgetId="1764446152692543"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-col justify-center items-start"
                    >
                        <QTextH2
                         widgetId="1764446152687139"
                         headerText="Contact Us"
                         tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xl font-semibold text-[#000000] text-left"
                       />
                        <QFullWidth
                         widgetId="1764446152690442"
                         headerText="Add Widgets"
                         tailwaindClasses="w-full h-auto static flex flex-row justify-start items-start"
                       >
                            <QTextH5
                             widgetId="1764446152689699"
                             headerText="Home"
                             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#9CA3AFFF] text-left"
                           />
                            <QImage
                             widgetId="1764446152695524"
                             bgUrl="https://imgcdn.kuick.com/cms-designer/erp/breadcrum-grey.svg"
                             backgroundSize="cover"
                             headerText="Add Widgets Vertically"
                             tailwaindClasses="w-[16px] h-auto mt-[2px] static object-cover"
                           />
                            <QTextH5
                             widgetId="1764446152695056"
                             headerText="Contact Us"
                             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-xs font-normal text-[#FB2E86FF] text-left"
                           />

                        </QFullWidth>

                     </QFlex>

                  </QSection>
                  <QSection
                   widgetId="1764447851298658"
                   tailwaindClasses="w-full h-[400px] relative block"
                 >
                     <QMap
                      zoomControlsEnabled={true}
                      zoom={10}
                      pathType="straightline"
                      centerMarkers={[{"id":"marker_center","latitude":"48.8584","longitude":"2.2945","title":"48.8584 , 2.2945","snippet":"","icon":"","name":"","tooltip":"","markerIconSize":"","radiusColor":"","markerIconType":"","markerRadiusType":"","markerRadiusValue":"","defaultMarkerIcon":"","markerAccordianValue":"","color":null}]}
                      widgetId="1764447862645563"
                      tailwaindClasses="w-full h-[400px] static"
                    >

                     </QMap>

                  </QSection>
                  <QSection
                   widgetId="1764446353917238"
                   tailwaindClasses="w-full min-h-[400px] h-auto pt-[60px] pb-[60px] relative flex flex-col justify-start items-center"
                 >
                     <QFlex
                      widgetId="1764446356840491"
                      headerText="Add Widgets"
                      tailwaindClasses="w-[90%] min-h-[100px] h-auto static flex flex-row justify-center items-start"
                    >
                        <QFullWidth
                         widgetId="1764446356838734"
                         headerText="Add Widgets"
                         tailwaindClasses="w-[50%] min-h-[100px] h-auto static flex flex-col justify-start items-start"
                       >
                            <QTextH1
                             widgetId="1764446356837095"
                             headerText="Your Next Big Step 
Begins With a Conversation"
                             tailwaindClasses="w-[auto] h-auto pt-[20px] pb-[10px] static font-[Arial] text-[35px] font-extrabold text-[#000000] text-left leading-[1.3]"
                           />
                            <QParagraph
                             widgetId="1764446548330638"
                             headerText="Have questions? Need guidance? Looking to start a project? Connect with us 
and let’s bring your vision to life with smart technology and creative solutions."
                             tailwaindClasses="w-[auto] h-auto static font-[Arial] text-sm font-normal text-[#000000] text-left"
                           />
                            <QFullWidth
                             widgetId="1764495775497438"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pt-[30px] pb-[10px] static flex flex-row justify-start items-center"
                           >
                                <QImage
                                 widgetId="1764495775495969"
                                 bgUrl="https://i.postimg.cc/7ZggNYJm/acall.png"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[40px] h-[40px] static"
                               />
                                <QFlex
                                 widgetId="1764495775496834"
                                 tailwaindClasses="w-[auto] h-[50px] static block"
                               >
                                   <QTextH6
                                    widgetId="1764495775503116"
                                    headerText="Customer Service Number"
                                    tailwaindClasses="w-[auto] h-auto pl-[9px] static font-[Inter] text-sm font-normal text-[#000000] text-left"
                                  />
                                   <QTextH3
                                    widgetId="1764495775496122"
                                    headerText="442039749748"
                                    tailwaindClasses="w-[auto] h-auto pl-[10px] static font-[Inter] text-xl font-semibold text-[#000000] text-left"
                                  />

                                </QFlex>

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764496487450568"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto pt-[10px] pb-[20px] static flex flex-row justify-start items-center"
                           >
                                <QImage
                                 widgetId="1764496487447408"
                                 bgUrl="https://i.postimg.cc/N0RYpZKj/amail.png"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[40px] h-[40px] static"
                               />
                                <QTextH3
                                 widgetId="1764564398899086"
                                 headerText="info@shop.co"
                                 tailwaindClasses="w-[auto] h-auto pl-[10px] static font-[Inter] text-lg font-semibold text-[#000000] text-left"
                               />

                            </QFullWidth>
                            <QFullWidth
                             widgetId="1764497286085592"
                             headerText="Add Widgets"
                             tailwaindClasses="w-full h-auto static flex flex-row justify-start items-center"
                           >
                                <QImage
                                 widgetId="1764497286083313"
                                 bgUrl="https://i.postimg.cc/RhsP4CLc/alocation.png"
                                 headerText="Add Widgets Vertically"
                                 tailwaindClasses="w-[auto] h-[40px] static"
                               />
                                <QTextH3
                                 widgetId="1764497286086654"
                                 headerText="Paris, France"
                                 tailwaindClasses="w-[auto] h-auto pl-[10px] static font-[Inter] text-lg font-semibold text-[#000000] text-left"
                               />

                            </QFullWidth>

                        </QFullWidth>
                        <QFullWidth
                         widgetId="1764446356841791"
                         headerText="Add Widgets"
                         tailwaindClasses="w-[50%] min-h-[100px] h-auto static flex flex-row justify-start items-start"
                       >
                            <QForm
                             cms_form_Id="1764446618126334"
                             apiUrl="https://jsonplaceholder.typicode.com/posts"
                             widgetId="1764446618126334"
                             headerText="Form"
                             tailwaindClasses="w-full min-h-[200px] h-[500px] static"
                           >
                               <QFormInputElement
                                widgetId="1764446638354983"
                                headerText="Name"
                                tailwaindClasses="w-full h-auto pb-[20px] relative block"
                              >
                                  <QFlex
                                   widgetId="1764446641032160"
                                   tailwaindClasses="w-full h-auto static"
                                 >
                                     <QParagraph
                                      widgetId="1764446641032653"
                                      headerText="Name"
                                      tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                    />

                                  </QFlex>
                                  <QFlex
                                   widgetId="1764446641028439"
                                   tailwaindClasses="w-full h-auto relative"
                                 >
                                     <QInputText
                                      readOnly="false"
                                      disabled="false"
                                      cms_form_Id="1764446618126334"
                                      cmsFormInputLabel="1764446638354983"
                                      errorSet={{"cms_form_input_Id":"1764446638354983","cms_form_Id":"1764446618126334","cms_form_input_Name":"name","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                      textInputType="text"
                                      placeHolder="Name"
                                      placeHolderFontSize="14px"
                                      placeHolderFontWeight="400"
                                      leftPadding="30"
                                      fontSize="14"
                                      placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                      widgetId="1764446641036021"
                                      tailwaindClasses="w-full h-[60px] pl-[30px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                                    >

                                     </QInputText>

                                  </QFlex>
                                  <QErrorMessage
                                   cms_form_Id="1764446618126334"
                                   cms_form_input_Id="1764446638354983"
                                   textInputType="text"
                                   widgetId="1764446641033411"
                                   tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                                 />

                               </QFormInputElement>
                               <QFormInputElement
                                widgetId="1764446638363982"
                                headerText="Email"
                                tailwaindClasses="w-full h-auto mb-[20px] relative block"
                              >
                                  <QFlex
                                   widgetId="1764446654704670"
                                   tailwaindClasses="w-full h-auto static"
                                 >
                                     <QParagraph
                                      widgetId="1764446654706271"
                                      headerText="Email"
                                      tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                    />

                                  </QFlex>
                                  <QFlex
                                   widgetId="1764446654706145"
                                   tailwaindClasses="w-full h-auto relative"
                                 >
                                     <QInputText
                                      readOnly="false"
                                      disabled="false"
                                      cms_form_Id="1764446618126334"
                                      cmsFormInputLabel="1764446638363982"
                                      errorSet={{"cms_form_input_Id":"1764446638363982","cms_form_Id":"1764446618126334","cms_form_input_Name":"email","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                      textInputType="email"
                                      placeHolder="Email"
                                      placeHolderFontSize="14px"
                                      placeHolderFontWeight="400"
                                      leftPadding="20"
                                      fontSize="16"
                                      placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                      widgetId="1764446654704228"
                                      tailwaindClasses="w-full h-[60px] pr-[20px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-base"
                                    >

                                     </QInputText>

                                  </QFlex>
                                  <QErrorMessage
                                   cms_form_Id="1764446618126334"
                                   cms_form_input_Id="1764446638363982"
                                   textInputType="email"
                                   widgetId="1764446654712372"
                                   tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                                 />

                               </QFormInputElement>
                               <QFormInputElement
                                widgetId="1764446638360058"
                                headerText="Mobile No."
                                tailwaindClasses="w-full h-auto pb-[20px] relative block"
                              >
                                  <QFlex
                                   widgetId="1764446658437081"
                                   tailwaindClasses="w-full h-auto static"
                                 >
                                     <QParagraph
                                      widgetId="1764446658440716"
                                      headerText="Mobile No."
                                      tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                    />

                                  </QFlex>
                                  <QFlex
                                   widgetId="1764446658435403"
                                   tailwaindClasses="w-full h-auto relative"
                                 >
                                     <QInputText
                                      readOnly="false"
                                      disabled="false"
                                      cms_form_Id="1764446618126334"
                                      cmsFormInputLabel="1764446638360058"
                                      errorSet={{"cms_form_input_Id":"1764446638360058","cms_form_Id":"1764446618126334","cms_form_input_Name":"mobile_no.","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                      textInputType="number"
                                      placeHolder="Mobile No."
                                      placeHolderFontSize="14px"
                                      placeHolderFontWeight="400"
                                      leftPadding="20"
                                      fontSize="30px"
                                      placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                      widgetId="1764446658436032"
                                      tailwaindClasses="w-full h-auto pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px]"
                                    >

                                     </QInputText>

                                  </QFlex>
                                  <QErrorMessage
                                   cms_form_Id="1764446618126334"
                                   cms_form_input_Id="1764446638360058"
                                   textInputType="number"
                                   widgetId="1764446658432904"
                                   tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                                 />

                               </QFormInputElement>
                               <QFormInputElement
                                widgetId="1764446638363042"
                                headerText="Message"
                                tailwaindClasses="w-full h-auto relative block"
                              >
                                  <QFlex
                                   widgetId="1764446664594641"
                                   tailwaindClasses="w-full h-auto static"
                                 >
                                     <QParagraph
                                      widgetId="1764446664591420"
                                      headerText="Message"
                                      tailwaindClasses="w-[auto] h-auto pb-[10px] static font-[Arial] text-base font-normal text-[#000000FF]"
                                    />

                                  </QFlex>
                                  <QFlex
                                   widgetId="1764446664597179"
                                   tailwaindClasses="w-full h-auto relative"
                                 >
                                     <QInputText
                                      readOnly="false"
                                      disabled="false"
                                      cms_form_Id="1764446618126334"
                                      cmsFormInputLabel="1764446638363042"
                                      errorSet={{"cms_form_input_Id":"1764446638363042","cms_form_Id":"1764446618126334","cms_form_input_Name":"message","cms_form_input_Options":{"values":[]},"cms_form_input_Required":"0","cms_form_input_Required_Msg":"","cms_form_input_Regex":"","cms_form_input_Regex_Msg":"","cms_form_input_Min":"","cms_form_input_Min_Msg":"","cms_form_input_Max":"","cms_form_input_Max_Msg":"","cms_form_input_On_Change_Validation":"0"}}
                                      textInputType="text"
                                      placeHolder="Message"
                                      placeHolderFontSize="14px"
                                      placeHolderFontWeight="400"
                                      leftPadding="20"
                                      fontSize="14"
                                      placeHolderTextColor="rgba(142, 138, 138, 1.00)"
                                      widgetId="1764446664590420"
                                      tailwaindClasses="w-full h-[60px] pl-[20px] static border-t-[1px] border-r-[1px] border-b-[1px] border-l-[1px] border-t-[#8E8A8AFF] border-r-[#8E8A8AFF] border-b-[#8E8A8AFF] border-l-[#8E8A8AFF] rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] text-sm"
                                    >

                                     </QInputText>

                                  </QFlex>
                                  <QErrorMessage
                                   cms_form_Id="1764446618126334"
                                   cms_form_input_Id="1764446638363042"
                                   textInputType="text"
                                   widgetId="1764446664588244"
                                   tailwaindClasses="w-[auto] h-auto absolute top-[0px] right-[0px] text-xl font-normal text-[#FF0000]"
                                 />

                               </QFormInputElement>
                               <QButton
                                buttonType="button"
                                widgetId="1764447694099055"
                                bgColor="var(--primarybtcolor)"
                                headerText="Contact Us"
                                tailwaindClasses="w-full h-[60px] mt-[30px] static rounded-tr-[100px] rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] font-[Arial] text-[15px] font-normal text-[#FFFFFFFF]"
                              />

                            </QForm>

                        </QFullWidth>

                     </QFlex>

                  </QSection>

               </QSection>

            </QSection>

         </QSection>

      </QSection>
</> );
};

export default ContactScene;