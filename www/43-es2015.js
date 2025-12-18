(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "3APC":
/*!*****************************************************************!*\
  !*** ./src/app/pages/facilities-list/facilities-list.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWNpbGl0aWVzLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "3Doi":
/*!***************************************************************!*\
  !*** ./src/app/pages/facilities-list/facilities-list.page.ts ***!
  \***************************************************************/
/*! exports provided: facilitiesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facilitiesListPage", function() { return facilitiesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_facilities_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./facilities-list.page.html */ "bXO7");
/* harmony import */ var _facilities_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facilities-list.page.scss */ "3APC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */ "EIUR");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");












let facilitiesListPage = class facilitiesListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, datepipe) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.datepipe = datepipe;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["PsCurrencyPipe"]();
        this.activeFacilityOptions = {};
        this.closedFacilityOptions = {};
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.showActiveFacilities = false;
        this.showClosedFacilities = false;
        this.cardTypeFlagResponse = [];
        this.complexSegmentOptions = {
            group: this.formGroup,
            segmentOptions: {
                segmentList: []
            },
            segmentContainerOptions: {
                numberOfSegments: 2,
                namesofSegments: ['active_facilities_segment', 'closed_facilities_segment'],
            }
        };
        this.activeFacilityLabelOptions = {
            labelKey: 'no_active_facility_available_key'
        };
        this.closedFacilityLabelOptions = {
            labelKey: 'no_closed_facility_available_key'
        };
        this.activeFacilityList = [];
        this.closedFacilityList = [];
        this.showTotalHeader = false;
        this.noDataFound = false;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.activeFacilityOptions = {
            group: this.formGroup,
            isEditable: true
        };
        this.closedFacilityOptions = {
            group: this.formGroup,
            isEditable: true
        };
        this.complexSegmentOptions.segmentOptions = {
            fcName: 'facilitySegment',
            segmentList: [{
                    selected: true,
                    itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME,
                    description: this.commonProv.translate('active_facilities_key')
                }, {
                    selected: true,
                    itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CLOSED_FACILITY_SEGMENT_NAME,
                    description: this.commonProv.translate('closed_facilities_key')
                }],
        };
        this.loadFacilityList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME);
    }
    onClickSegment(selectedSegment) {
        this.showTotalHeader = false;
        if (selectedSegment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME) {
            this.loadFacilityList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME);
        }
        else {
            this.loadFacilityList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CLOSED_FACILITY_SEGMENT_NAME);
        }
    }
    loadFacilityList(segment) {
        const paramData = {};
        this.omniPull.reutrnFacilityDetails(paramData).then((result) => {
            if (result) {
                if (segment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME) {
                    if (result.activeFacilitiesList && result.activeFacilitiesList.length > 0) {
                        this.activeFacilityOptions.listOfOptions = [];
                        this.activeFacilityOptions.listOfOptions = this.populateFacilities(result.activeFacilitiesList, 'A');
                        this.totalAmount = this.psCurrency.parse(result.totalActiveAmount);
                        this.totalUtilized = this.psCurrency.parse(result.totalActiveUtilizedAmount);
                        this.totalUnUtilized = this.psCurrency.parse(result.totalActiveUnUtilizedAmount);
                        this.totalOutstanding = this.psCurrency.parse(result.totalActiveOutAmount); //
                        this.showActiveFacilities = true;
                        this.showClosedFacilities = false;
                    }
                    else {
                        this.noDataFound = true;
                        return;
                    }
                }
                else {
                    if (result.closedFacilitiesList && result.closedFacilitiesList.length > 0) {
                        this.closedFacilityOptions.listOfOptions = [];
                        this.closedFacilityOptions.listOfOptions = this.populateFacilities(result.closedFacilitiesList, 'C');
                        this.totalAmount = this.psCurrency.parse(result.totalClosedAmount);
                        this.totalUtilized = this.psCurrency.parse(result.totalClosedUtilizedAmount);
                        this.totalUnUtilized = this.psCurrency.parse(result.totalClosedUnUtilizedAmount);
                        this.showActiveFacilities = false;
                        this.showClosedFacilities = true;
                    }
                    else {
                        this.noDataFound = true;
                        return;
                    }
                }
                this.noDataFound = false;
            }
            else {
                this.noDataFound = true;
            }
        }).catch(error => {
            this.loggerP.error('Error: While fetching facility list :', error);
        });
    }
    populateFacilities(facilities, status) {
        var _a, _b;
        let facilityList = [];
        for (const iterator of facilities) {
            const facility = {
                facilityNumber: iterator.facilityNumber || iterator.facilityCode,
                facilityAmount: this.psCurrency.transform((iterator.facilityValue || 0).toString(), 2) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                utilizedAmount: iterator.utilizedAmount ? this.psCurrency.transform((iterator.utilizedAmount || 0).toString(), 2) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish) : null,
                unutilizedAmount: iterator.unUtilizedAmount ? this.psCurrency.transform((iterator.unUtilizedAmount || 0).toString(), 2) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish) : null,
                facilityType: iterator.facilityType,
                facilityTypeDesc: iterator.facilityTypeDesc,
                revolvingOneOff: iterator.revolvingOneOff,
                revolvingOneOffDesc: iterator.revolvingOneOffDesc,
                branchName: iterator.facilityBranch,
                expiryDate: iterator.expiryDate,
                outstanding: this.psCurrency.transform((iterator.outstandingAmount || 0).toString(), 2),
                isEligibleLC: (_a = iterator.limitDetails) === null || _a === void 0 ? void 0 : _a.some(f => f.isEligibleLC == true),
                isEligibleLG: (_b = iterator.limitDetails) === null || _b === void 0 ? void 0 : _b.some(f => f.isEligibleLG == true),
                facilityStatus: status,
                statusDesc: iterator.status,
                currency: iterator.currency || iterator.transactionCurrency,
                currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                currencyBriefName: iterator.currencyBriefName,
                lookupKey: iterator.facilityCode,
            };
            facilityList.push(facility);
        }
        this.showHeader(facilityList);
        return facilityList;
    }
    showHeader(list) {
        // this.showTotalHeader = !list.some(i => list.some(item => item.currency !== i.currency))
    }
};
facilitiesListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
facilitiesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'facilities-list',
        template: _raw_loader_facilities_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_facilities_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
], facilitiesListPage);



/***/ }),

/***/ "bXO7":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/facilities-list/facilities-list.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n    <div class=\"total-header\" *ngIf=\"showTotalHeader\">\n        <div class='total-element'>\n            <ps-label [options]=\"{labelKey:'total_amount_key'}\"></ps-label>:\n            {{totalAmount}}\n        </div>\n        <div class='total-element'>\n            <ps-label [options]=\"{labelKey:'total_utilized_key'}\"></ps-label>:\n            {{totalUtilized}}\n        </div>\n        <div class='total-element'>\n            <ps-label [options]=\"{labelKey:'total_unutilized_key'}\"></ps-label>:\n            {{totalUnUtilized}}\n        </div>\n        <div class='total-element' *ngIf=\"this.showActiveFacilities\">\n            <ps-label [options]=\"{labelKey:'total_outstanding_key'}\"></ps-label>:\n            {{totalOutstanding}}\n        </div>\n    </div>\n    <ps-complex-segment id=\"accountsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n        [options]=\"complexSegmentOptions\">\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n            <ps-option-facility id=\"ps-option-facility-list\" [options]=\"activeFacilityOptions\"\n                *ngIf=\"showActiveFacilities\">\n            </ps-option-facility>\n            <ps-label *ngIf=\"noDataFound\" class=\"validation-message\" [options]=\"activeFacilityLabelOptions\"></ps-label>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n            <ps-option-facility id=\"ps-option-facility-list\" [options]=\"closedFacilityOptions\"\n                *ngIf=\"showClosedFacilities\">\n            </ps-option-facility>\n            <ps-label *ngIf=\"noDataFound\" class=\"validation-message\" [options]=\"closedFacilityLabelOptions\"></ps-label>\n        </ps-content-segment>\n    </ps-complex-segment>\n</ps-template-view>");

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

/***/ })

}]);
//# sourceMappingURL=43-es2015.js.map