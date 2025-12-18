(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "2V5f":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/supplementary-card-request/supplementary-card-request.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGVtZW50YXJ5LWNhcmQtcmVxdWVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Z2pP":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/supplementary-card-request/supplementary-card-request.page.ts ***!
  \*************************************************************************************/
/*! exports provided: SupplementaryCardRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplementaryCardRequestPage", function() { return SupplementaryCardRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_supplementary_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./supplementary-card-request.page.html */ "q5NM");
/* harmony import */ var _supplementary_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supplementary-card-request.page.scss */ "2V5f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");














let SupplementaryCardRequestPage = class SupplementaryCardRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__["OmniBasePage"] {
    constructor(navService, commonProv, omniPull, loggerP, omniCommon) {
        super();
        this.navService = navService;
        this.commonProv = commonProv;
        this.omniPull = omniPull;
        this.loggerP = loggerP;
        this.omniCommon = omniCommon;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.supplementaryCardRequestVO = {};
        this.stepperOptions = {
            stepperName: 'supplementary_card_request_stepper',
            numberOfSteps: 1,
            group: this.formGroup,
            submitOptions: {
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.cardActionRequestEndPoint,
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateScreenVO());
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
                group: this.formGroup,
            },
            requestObject: this.supplementaryCardRequestVO,
            isHorizontalStepper: true,
            namesofSteps: ['cardManagement']
        };
        this.mainCardPanelOptions = {
            isExpandable: true,
            labelKey: 'main_card_information_key',
            iconName: 'cards',
            expanded: true
        };
        this.supplementaryCardPanelOptions = {
            isExpandable: true,
            labelKey: 'supplementary_card_key',
            iconName: 'cards',
            expanded: true
        };
        this.mapBranchPanelOptions = {
            isExpandable: true,
            labelKey: 'select_map_branch_key',
            iconName: 'location-pin',
            expanded: true
        };
        this.cifBranchPanelOptions = {
            isExpandable: true,
            labelKey: 'request_branch_key',
            iconName: 'location-pin',
            expanded: true
        };
        this.cifrequestBranchOptions = {
            placeHolder: 'request_branch_key',
            labelKey: 'request_branch_key',
            group: this.formGroup,
            fcName: 'branch',
        };
        this.cardHolderNameOptions = {
            placeHolder: 'cardholder_name_key',
            labelKey: 'cardholder_name_key',
            group: this.formGroup,
            fcName: 'cardHolderName',
        };
        this.deliveryAddressDetails = {
            collectionModeOptions: {
                group: this.formGroup,
                fcName: 'deliveryLoc',
            },
            branchLocationOptions: {
                fcName: 'destinationBranchesDropdown',
                group: this.formGroup,
                countryRegionCityOptions: {
                    countriesOptions: {
                        fcName: 'destinationBranchCountry'
                    },
                    regionOptions: {
                        fcName: 'destinationBranchRegion'
                    },
                    cityOptions: {
                        fcName: 'destinationBranchCity'
                    }
                },
                branchesOptions: {
                    fcName: 'destinationBranch'
                }
            },
            homeAddressOptions: {
                placeHolder: 'home_address_key',
                labelKey: 'home_address_key',
                group: this.formGroup,
                fcName: 'homeAddress',
                requestVO: this.supplementaryCardRequestVO,
            },
            workAddressOptions: {
                placeHolder: 'work_address_key',
                labelKey: 'work_address_key',
                group: this.formGroup,
                fcName: 'workAddress',
                requestVO: this.supplementaryCardRequestVO,
            },
            otherAddressOptions: {
                labelKey: 'address_details_key',
                rows: '3',
                cols: '10',
                fcName: 'otherAddressDetails',
                group: this.formGroup,
            },
            branchCifOptions: {
                placeHolder: 'request_branch_key',
                labelKey: 'request_branch_key',
                group: this.formGroup,
                fcName: 'branchName',
            },
            cifBranchChecking: true
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup,
        };
        this.itemCard = {};
        this.cardOptions = {};
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        //this.supplementaryCardRequestVO = this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {};
        this.itemCard = this.supplementaryCardRequestVO;
        this.cardOptions.formGroup = this.formGroup;
        this.cardOptions.labelsValueMap = this.navigationServices.getParamKey('labelsValueMap');
        this.cardOptions.headerMap = this.navigationServices.getParamKey('headerMap');
        this.cardOptions.showInitialCardValues = this.navigationServices.getParamKey('showInitialCardValues');
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.fetchParameter();
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
            const result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)
                .catch((error) => {
                this.loggerP.error(error);
            });
            if (result !== -1 && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: 'cif_branch_panel' }]);
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: 'branch_map_panel' }]);
            }
            else {
                if (result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                    this.cifrequestBranchOptions.labelKey = "account_branch_key";
                    this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, cifInfo.cifBranch ? cifInfo.customerInfoCO.branchCode : '', this.supplementaryCardRequestVO);
                }
                else {
                    this.cifrequestBranchOptions.labelKey = "cif_branch_key";
                    this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, cifInfo.cifBranch ? cifInfo.customerInfoCO.branchBriefDesc : '', this.supplementaryCardRequestVO);
                }
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: 'cif_branch_panel' }]);
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: 'branch_map_panel' }]);
            }
        });
    }
    onSelectBranch(event) {
        if (event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.supplementaryCardRequestVO);
        }
    }
    updateScreenVO() {
        this.supplementaryCardRequestVO['primarySupplementary'] = 'Supplementary';
        this.supplementaryCardRequestVO['primaryCard'] = this.supplementaryCardRequestVO['cardNumber'];
        delete this.supplementaryCardRequestVO['ownerName'];
        delete this.supplementaryCardRequestVO['key'];
    }
};
SupplementaryCardRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__["PsNavigatorService"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"] }
];
SupplementaryCardRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'supplementary-card-request',
        template: _raw_loader_supplementary_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_supplementary_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__["PsNavigatorService"],
        src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])
], SupplementaryCardRequestPage);



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

/***/ "q5NM":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/supplementary-card-request/supplementary-card-request.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"mainCardPanelOptions\" id=\"main_card_info_panel\">\n      <ps-container-lookup-option [options]=\"cardOptions\" [itemCard]=\"itemCard\"></ps-container-lookup-option>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"supplementaryCardPanelOptions\" id=\"supplementary_card_info_panel\">\n      <ps-input-varchar id=\"card_holder_name\" [options]=\"cardHolderNameOptions\">\n      </ps-input-varchar>\n      <ps-complex-location [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"mapBranchPanelOptions\" id=\"branch_map_panel\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"cifBranchPanelOptions\" id=\"cif_branch_panel\">\n      <ps-input-display-only id=\"accountCifBranch\" [options]=\"cifrequestBranchOptions\">\n      </ps-input-display-only>\n    </ps-container-panel>\n\n  </ps-form-step>\n</ps-template-stepper>");

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

/***/ })

}]);
//# sourceMappingURL=60-es2015.js.map