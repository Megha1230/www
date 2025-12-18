(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "3z+t":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/expired-securities-list/expired-securities-list.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <div class=\"chequebook-list-div\" *ngIf=\"showList\">\n    <ps-option-expired-security id=\"ps-option-security-list\" *ngFor=\"let security of securityOptions\"\n      [options]=\"security\" click=\"onclick\"></ps-option-expired-security>\n  </div>\n  <div *ngIf=\"!showList\" class=\"no-account-text\">\n    <ps-label [options]=\"{labelKey: 'no_securities_found_key'}\"></ps-label>\n  </div>\n</ps-template-view>");

/***/ }),

/***/ "Qr3S":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/expired-securities-list/expired-securities-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpiredSecuritiesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiredSecuritiesListPage", function() { return ExpiredSecuritiesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_expired_securities_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./expired-securities-list.page.html */ "3z+t");
/* harmony import */ var _expired_securities_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expired-securities-list.page.scss */ "kzgv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */ "EIUR");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");












let ExpiredSecuritiesListPage = class ExpiredSecuritiesListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"] {
    constructor(commonService, omniPull, navService) {
        super();
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.security = {};
        this.securityOptions = [];
        this.showList = false;
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_6__["PsCurrencyPipe"]();
        this.psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["PsDateFormatPipe"]();
        this.prevFormat = 'DD/MM/YYYY';
    }
    ionViewWillEnter() {
        super.init();
        super.viewWillEnter();
        this.security.group = this.formGroup;
        this.userInformation = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
        const workingCif = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].WORKINGCIF);
        let securityListRequest = {};
        securityListRequest = {
            inRenewalPeriod: 'Y',
            securityPriceDetails: 'N',
            portfolioCif: workingCif ? workingCif : this.userInformation.omniUserVO.CIF_NO,
            nbRec: '0',
            recToskip: '0',
        };
        this.loadExpiredHoldingList(securityListRequest);
    }
    /**
     *
     * @param securityListRequest
     */
    loadExpiredHoldingList(securityListRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.securityOptions = [];
            const result = yield this.omniPull.returnExpiredHoldingList(securityListRequest).catch(error => {
                this.commonProv.logger.error('Error: While fetching returnExpiredHoldingList in expired securites page :', error);
            });
            if (result && result.gridModel.length > 0) {
                for (const security of result.gridModel) {
                    const eachSecurity = {
                        securityInformation: security
                    };
                    eachSecurity.securityInformation.title = eachSecurity.securityInformation.portfolioCif + ' - ' + eachSecurity.securityInformation.sukukType;
                    eachSecurity.securityInformation.subTitle = eachSecurity.securityInformation.isdaraNumber;
                    eachSecurity.securityInformation.balanceStr = this.psCurrency.transform(eachSecurity.securityInformation.balance === null || eachSecurity.securityInformation.balance === undefined ? '0.0' : eachSecurity.securityInformation.balance.toString(), 0);
                    eachSecurity.securityInformation.totalNumberOfSukukStr = this.psCurrency.transform(eachSecurity.securityInformation.totalNumberOfSukuk === null || eachSecurity.securityInformation.totalNumberOfSukuk === undefined ? '0.0' : eachSecurity.securityInformation.totalNumberOfSukuk.toString(), 0);
                    eachSecurity.securityInformation.maturityDate = eachSecurity.securityInformation.maturityDate ? eachSecurity.securityInformation.maturityDate : '--/--/----';
                    eachSecurity.securityInformation.issueDate = eachSecurity.securityInformation.issueDate ? eachSecurity.securityInformation.issueDate : '--/--/----';
                    this.securityOptions.push(eachSecurity);
                }
                this.showList = true;
            }
            else {
                this.showList = false;
            }
        });
    }
};
ExpiredSecuritiesListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"] }
];
ExpiredSecuritiesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'expired-securities-list',
        template: _raw_loader_expired_securities_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expired_securities_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]])
], ExpiredSecuritiesListPage);



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

/***/ "kzgv":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/expired-securities-list/expired-securities-list.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBpcmVkLXNlY3VyaXRpZXMtbGlzdC5wYWdlLnNjc3MifQ== */");

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
//# sourceMappingURL=42-es2015.js.map