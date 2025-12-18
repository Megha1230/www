(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "WvFu":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/personalize-my-quick-links/personalize-my-quick-links.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbGl6ZS1teS1xdWljay1saW5rcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "gKqT":
/*!***************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
  \***************************************************/
/*! exports provided: OmniBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniBasePage", function() { return OmniBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./omni-base.page.html */ "mVVo");
/* harmony import */ var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omni-base.page.scss */ "s2T5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/customization/psServices/util/common-cust-utils */ "oS+F");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");











let OmniBasePage = class OmniBasePage {
    constructor() {
        this.isPageDisabled = false;
        this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
        this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]);
        // this.getScreenTranslations();
    }
    init() {
        this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
        this.customizationMap = this.commonProv.returnOperCustomization();
        const navParams = this.navigationServices.getAllParams();
        const formDisObj = {};
        // let oper = PsCommonSettings.oper_ID;
        // PsCommonSettings.currentListOfSteps = {};
        if (navParams && navParams.readOnlypage === true) {
            formDisObj.IS_READONLY = 1;
            // Modified by Richie for #BUG 1259353
            if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            }
        }
        else if (this.customizationMap) {
            formDisObj.IS_READONLY = 0;
            this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
        }
        // End Richie
        // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
        this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];
        if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
            this.getScreenTranslations(this.currentOperID);
        }
        // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
    }
    ngOnInit() {
        this.init();
    }
    ionViewDidEnter() {
        this.viewDidEnter();
    }
    ionViewWillLeave() {
        this.viewWillLeave();
    }
    ionViewWillEnter() {
        this.viewWillEnter();
    }
    viewWillEnter() {
    }
    disableForm(formGroup) {
        // Modified by Richie for #BUG 1259353
        if (formGroup !== undefined && this.customizationMap) {
            const formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY);
            // End Richie
            if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach((key) => {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
            }
        }
    }
    viewDidEnter() {
        this.commonProv.checkViewBS.next({ value: true, page: this, didEnter: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, didEnter: true });
        this.commonProv.dismissLoading();
        this.disableForm(this.baseFormGroup);
        src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
        this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
    }
    viewWillLeave() {
        this.commonProv.checkViewBS.next({ value: true, page: this, willLeave: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, willLeave: true });
    }
    // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
    // added after all the changeEvents are finished to disable the form 
    ngAfterViewChecked() {
        if (!this.isPageDisabled) {
            setTimeout(() => {
                this.disableForm(this.baseFormGroup);
                this.isPageDisabled = true;
            }, 300);
        }
    }
    // AZDB-7529 - Start - AMANAOI250035
    getScreenTranslations(screenOperId) {
        const operationId = screenOperId ? screenOperId : 2222;
        const activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';
        if (operationId && activeLanguage) {
            this.commonProv.language.getOperTranslation(activeLanguage, operationId);
        }
    }
};
OmniBasePage.ctorParameters = () => [];
OmniBasePage.propDecorators = {
    psClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
};
OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OmniBasePage);



/***/ }),

/***/ "mVVo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "s2T5":
/*!*****************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "vZnc":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/personalize-my-quick-links/personalize-my-quick-links.page.ts ***!
  \*************************************************************************************/
/*! exports provided: PersonalizeMyQuickLinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizeMyQuickLinksPage", function() { return PersonalizeMyQuickLinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personalize_my_quick_links_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personalize-my-quick-links.page.html */ "xqXA");
/* harmony import */ var _personalize_my_quick_links_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personalize-my-quick-links.page.scss */ "WvFu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");














let PersonalizeMyQuickLinksPage = class PersonalizeMyQuickLinksPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__["OmniBasePage"] {
    constructor(commonService, logger, omniPull) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.operationsArray = [];
        this.selectedOperationsList = [];
        this.quickLinksList = [];
        this.personalizationQuickLinksPages = [];
        this.operArrayList = [];
        this.options = {
            group: this.formGroup,
            submitOptions: {
                extraParams: {
                    quickLinks: []
                },
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.updateUserInfoProfile,
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateSubmitQueryParams(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
                postCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateQuickLinksSession(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                }
            }
        };
        this.defaultQuickLinksList = [];
    }
    ngOnInit() {
        src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PERSONALIZE_MY_QUICK_LINK_OPER_ID;
        this.userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
        if (this.userInformation && this.userInformation.businessProfiles.length > 0) {
            this.prepareToggleOperations(this.userInformation.businessProfiles);
        }
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        for (let i = 0; i < this.operationsArray.length; i++) {
            if (this.operationsArray[i].isSelected) {
                this.formGroup.controls[this.operationsArray[i].fcName].setValue(true);
            }
        }
    }
    updateQuickLinksSession(response) {
        if (response.outputType === 'S') {
            this.commonProv.session.remove(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].QUICK_LINKS_MENUS);
            this.commonProv.session.append(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].QUICK_LINKS_MENUS, this.quickLinksList.length > 0 ? this.quickLinksList : []);
            if (this.personalizationQuickLinksPages.length !== 0) {
                this.omniPull.omniCommon.quickLinksMenuPages = this.personalizationQuickLinksPages;
            }
            else {
                this.omniPull.omniCommon.quickLinksMenuPages = [];
                this.defaultQuickLinksList = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU : [];
                if (this.userInformation && this.userInformation.businessProfiles.length > 0) {
                    for (let i = 0; i < this.defaultQuickLinksList.length; i++) {
                        const row = this.defaultQuickLinksList[i];
                        this.addQuickLinkPage(row);
                    }
                    this.omniPull.omniCommon.quickLinksMenuPages = this.personalizationQuickLinksPages;
                }
            }
        }
    }
    disableToggleValidation() {
        for (let i = 0; i < this.operationsArray.length; i++) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.operationsArray[i].fcName], 0);
        }
    }
    prepareToggleOperations(list) {
        this.operationsArray = [];
        this.quickLinksList = this.commonProv.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].QUICK_LINKS_MENUS) || [];
        //If incase the quicklin list is empty it should set with defaultQuicklink menu values fetching from ps-config.json
        if (this.userInformation && this.userInformation.businessProfiles.length > 0) {
            if (this.quickLinksList.length == 0) {
                let defaultQuickLinkOperations = [];
                let defaultQuickLinkArray = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU : [];
                for (let i = 0; i < defaultQuickLinkArray.length; i++) {
                    defaultQuickLinkOperations.push({ "operId": defaultQuickLinkArray[i] });
                }
                this.quickLinksList = defaultQuickLinkOperations;
            }
            for (let i = 0; i < list.length; i++) {
                const row = list[i];
                const busProfile = row.operVO;
                if (row.operVO.BUSINESS_PROFILE_YN !== 'N' && row.operAppChnlVO.CATEG === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CATEGORY_MENU) {
                    const userOperation = this.quickLinksList ? this.quickLinksList.find((obj) => obj.operId === row.operVO.OPER_ID) : undefined;
                    let operation = {
                        labelKey: row.operVO.OPER_NAME ? row.operVO.OPER_NAME : row.operVO.DESCRIPTION,
                        group: this.formGroup,
                        fcName: row.operVO.OPER_NAME ? row.operVO.OPER_NAME : row.operVO.DESCRIPTION,
                        psClass: 'toggleColor',
                        isSelected: userOperation ? true : false,
                        iconName: row.operAppChnlVO.ICON_NAME
                    };
                    this.operationsArray.push(operation);
                    this.operArrayList.push(row.operVO);
                    if (operation.isSelected) {
                        this.addQuickLinkPage(row.operVO.OPER_ID);
                    }
                }
            }
        }
    }
    onToggleChanged(event, itemOption) {
        var _a;
        if (event.newValue === true) {
            if (itemOption) {
                const result = this.operArrayList.find((e) => e.OPER_NAME === itemOption.labelKey);
                this.selectedOperationsList.push(result);
                const quickLinkresult = (_a = this.quickLinksList) === null || _a === void 0 ? void 0 : _a.findIndex((e) => e.operId === result.OPER_ID);
                if (quickLinkresult == -1) {
                    this.quickLinksList.push({ operId: result.OPER_ID });
                }
                const page = this.omniPull.omniCommon.quickLinksMenuPages.find((e) => e.operID === result.OPER_ID);
                const checkOperExistOnArrayPersonalizationQuickLinksPages = this.personalizationQuickLinksPages.find((e) => e.operID === result.OPER_ID);
                if (!page || !checkOperExistOnArrayPersonalizationQuickLinksPages) {
                    this.addQuickLinkPage(result.OPER_ID);
                }
            }
            this.disableToggleValidation();
        }
        else {
            if (this.selectedOperationsList) {
                const result = this.selectedOperationsList.find((e) => e.OPER_NAME === itemOption.labelKey);
                const selectedItem = this.selectedOperationsList.indexOf(result);
                if (selectedItem !== -1) {
                    this.selectedOperationsList.splice(selectedItem, 1);
                }
                const quickLinkItemIndex = this.quickLinksList.findIndex((e) => e.operId === result.OPER_ID);
                if (quickLinkItemIndex !== -1) {
                    this.quickLinksList.splice(quickLinkItemIndex, 1);
                }
                const pageIndex = this.personalizationQuickLinksPages.findIndex((e) => e.operID === result.OPER_ID);
                if (selectedItem !== -1) {
                    this.personalizationQuickLinksPages.splice(pageIndex, 1);
                }
            }
        }
    }
    updateSubmitQueryParams(req) {
        this.commonProv.copyObject(this.options.submitOptions.extraParams, {
            quickLinks: this.selectedOperationsList
        }, false, true);
    }
    addQuickLinkPage(operId) {
        const row = this.userInformation.businessProfiles.find((e) => e.operVO.OPER_ID === operId);
        let childrenArray = [];
        if (row.operAppChnlVO.CATEG === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CATEGORY_MENU && row.operVO.BUSINESS_PROFILE_YN !== 'N') { //  id: #1272236 -  Details :Updated by neethu  - Date:21/10/2021 - Desc:Chceking the operation catergory=M before adding to  array personalizationQuickLinksPages
            if (row.children !== undefined) {
                if (row.children.length > 0) {
                    for (let i = 0; i < row.children.length; i++) {
                        const child = row.children[i];
                        if (child.operVO.BUSINESS_PROFILE_YN !== 'N') {
                            let childpage;
                            childpage = {
                                title: child.operVO.OPER_NAME ? child.operVO.OPER_NAME : child.operVO.DESCRIPTION,
                                icon: child.operAppChnlVO.ICON_NAME,
                                component: child.operAppChnlVO.PAGE_HREF != null ? child.operAppChnlVO.PAGE_HREF : src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].HASH_INPUT,
                                children: [],
                                hasParent: false,
                                operID: child.operVO.OPER_ID,
                                collapse: true,
                                hide: true,
                                param: child.operAppChnlVO.PARAM !== undefined ? JSON.parse(child.operAppChnlVO.PARAM) : child.operAppChnlVO.PARAM,
                                isMaker: child.businessProfileOperVO ? (child.businessProfileOperVO.MAKER_YN == 'Y' ? true : false) : false,
                                isChecker: child.businessProfileOperVO ? (child.businessProfileOperVO.CHECKER_YN == 'Y' ? true : false) : false,
                            };
                            child.children ? childpage.isParent = true : childpage.isChildLeaf = true;
                            childrenArray.push(childpage);
                        }
                    }
                }
            }
            let page;
            page = {
                title: row.operVO.OPER_NAME ? row.operVO.OPER_NAME : row.operVO.DESCRIPTION,
                icon: row.operAppChnlVO.ICON_NAME,
                component: row.operAppChnlVO.PAGE_HREF != null ? row.operAppChnlVO.PAGE_HREF : src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].HASH_INPUT,
                children: childrenArray,
                hasParent: false,
                operID: row.operVO.OPER_ID,
                collapse: true,
                hide: true,
                param: row.operAppChnlVO.PARAM !== undefined ? JSON.parse(row.operAppChnlVO.PARAM) : row.operAppChnlVO.PARAM,
                isMaker: row.businessProfileOperVO ? (row.businessProfileOperVO.MAKER_YN == 'Y' ? true : false) : false,
                isChecker: row.businessProfileOperVO ? (row.businessProfileOperVO.CHECKER_YN == 'Y' ? true : false) : false,
            };
            row.children ? page.isParent = true : page.isChildLeaf = true;
            const isDuplicateOperation = this.personalizationQuickLinksPages.find((e) => e.operID === page.operID);
            if (!isDuplicateOperation) {
                this.personalizationQuickLinksPages.push(page);
            }
        }
    }
};
PersonalizeMyQuickLinksPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
PersonalizeMyQuickLinksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'personalize-my-quick-links',
        template: _raw_loader_personalize_my_quick_links_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personalize_my_quick_links_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], PersonalizeMyQuickLinksPage);



/***/ }),

/***/ "xqXA":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personalize-my-quick-links/personalize-my-quick-links.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-form [options]=\"options\">\n\n  <ng-container *ngFor=\"let itemOption of operationsArray; let idx=index\">\n    <div class=\"ps-quick-link-item-container\">\n      <ps-action-icon class=\"ps-quick-link-item-icon\" [options]=\"{ iconName:itemOption.iconName }\">\n      </ps-action-icon>\n      <ps-select-toggle class=\"ps-quick-link-item-toogle\" [options]=\"itemOption\"\n        (onPsChange)=\"onToggleChanged($event,itemOption)\">\n      </ps-select-toggle>\n    </div>\n  </ng-container>\n</ps-template-form>");

/***/ })

}]);
//# sourceMappingURL=55-es2015.js.map