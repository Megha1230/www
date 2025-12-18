(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "AX8P":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/sweeping-and-pooling-list/sweeping-and-pooling-list.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2VlcGluZy1hbmQtcG9vbGluZy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "OhnO":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sweeping-and-pooling-list/sweeping-and-pooling-list.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <ps-sweeping-and-pooling-list [options]=\"sweepingPoolingOptions\"  *ngIf=\"sweepingPoolingOptions?.listOfOptions?.length>0\" (reloadFct)=\"reloadList()\"></ps-sweeping-and-pooling-list>\n  <ps-label [options]=\"noSweepingAndPolingOptions\" *ngIf=\"noSweepingPoolingRecords\" ></ps-label>\n</ps-template-view>");

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

/***/ "gsUF":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sweeping-and-pooling-list/sweeping-and-pooling-list.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SweepingAndPoolingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweepingAndPoolingListPage", function() { return SweepingAndPoolingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sweeping_and_pooling_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sweeping-and-pooling-list.page.html */ "OhnO");
/* harmony import */ var _sweeping_and_pooling_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweeping-and-pooling-list.page.scss */ "AX8P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");









let SweepingAndPoolingListPage = class SweepingAndPoolingListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_8__["OmniBasePage"] {
    constructor(omniPull, logger) {
        super();
        this.omniPull = omniPull;
        this.logger = logger;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.noSweepingAndPolingOptions = {
            labelKey: 'no_sweeping_and_pooling_found_key',
            previewMode: false
        };
        this.sweepingPoolingOptions = {};
        this.sweepingPoolingRequest = {};
        this.noSweepingPoolingRecords = false;
    }
    ngOnInit() {
        this.sweepingPoolingOptions = {
            isEditable: true,
            group: this.formGroup
        };
        this.getAccountAsIBAN();
    }
    ionViewWillEnter() {
        this.logger.log('ionViewWillEnter: SweepingAndPoolingListPage');
        this.loadSSweepingPoolingList();
    }
    loadSSweepingPoolingList() {
        this.sweepingPoolingRequest = {
            commonParametersList: {
                status: 'T,B,S'
            }
        };
        this.returnSweepingPoolingList(this.sweepingPoolingRequest);
    }
    returnSweepingPoolingList(sweepingPoolingListRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sweepingPoolingOptions.listOfOptions = this.populateSweepingPoolingList([]);
            const result = yield this.omniPull.returnSweepingPoolingList(sweepingPoolingListRequest).catch(error => {
                this.logger.error('Error: While Loading Sweeping and Pooling list in PsSweepingAndPoolingListComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.sweepingPoolingOptions.listOfOptions = this.populateSweepingPoolingList(result.gridModel);
                this.noSweepingPoolingRecords = false;
            }
            else {
                this.sweepingPoolingOptions.listOfOptions = [];
                this.noSweepingPoolingRecords = true;
            }
        });
    }
    populateSweepingPoolingList(sweepingPooling) {
        var _a, _b;
        const sweepingPoolinglist = [];
        const psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__["PsDateFormatPipe"]();
        for (const iterator of sweepingPooling) {
            const sweepPoolList = {
                transactionNumber: iterator.transactionNo,
                transactionAmount: iterator.amount,
                coveringReceivingAcc: this.getFormatedAccount(iterator),
                toAccount: iterator.fromAccountAdditionalRef,
                instructMethod: iterator.soProcessDesc,
                instructionMethodCode: iterator.soProcess,
                instructionType: iterator.soTypeDesc,
                instructionTypeCode: iterator.soType,
                noOfPayments: iterator.soNumPay,
                periodicity: iterator.soPeriodicity,
                periodicityDesc: iterator.soPeriodicity === 'M' ? this.commonProv.translate('recurring_monthly_key') : iterator.soPeriodicity === 'W' ? this.commonProv.translate('recurring_weekly_key') : iterator.soPeriodicity === 'S' ? this.commonProv.translate('single_future_date_key') : iterator.soPeriodicity,
                scheduledDates: (iterator.soPeriodicity == 'M' || iterator.soPeriodicity == 'W') ? iterator.valueDateStr + ' | ' + iterator.releaseDateStr : iterator.transactionDateStr,
                status: iterator.statusDescription || ((iterator.status === 'A' || iterator.status === 'B' || iterator.status === 'T') ? this.commonProv.translate('active_key') : iterator.status === 'S' ? this.commonProv.translate('stopped_key') : iterator.status),
                statusCode: iterator.status,
                targetAcc: iterator.beneficiaryAcc,
                targetAccAdditonalRef: iterator.beneficiaryAccountAdditionalRef,
                accGl: iterator.fromAccountAccGl,
                currency: iterator.fromAccountCurrency,
                fromCurrency: iterator.fromAccountCurrency,
                workingCif: iterator.fromAccountCif,
                serialNo: iterator.fromAccountSerialNo,
                filterFromDate: (_a = psDatePipe.transform(iterator.valueDate, 'DD/MM/YYYY')) === null || _a === void 0 ? void 0 : _a.toString(),
                filterToDate: (_b = psDatePipe.transform(iterator.releaseDate, 'DD/MM/YYYY')) === null || _b === void 0 ? void 0 : _b.toString(),
                startDate: iterator.valueDateStr,
                endDate: iterator.releaseDateStr,
            };
            sweepingPoolinglist.push(sweepPoolList);
        }
        return sweepingPoolinglist;
    }
    reloadList() {
        this.loadSSweepingPoolingList();
    }
    getAccountAsIBAN() {
        if (this.accountAsIBAN === undefined) {
            this.omniPull.getParamValOf('AccountsAsIBAN').then(res => {
                this.accountAsIBAN = res.AccountsAsIBAN;
            }).catch(err => this.logger.log(err));
        }
    }
    getFormatedAccount(account) {
        let fromAccountFormat;
        if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 1) {
            fromAccountFormat = account.fromAccountIbanAccNo;
        }
        else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 2) {
            fromAccountFormat = account.fromAccountAdditionalRef === null || account.fromAccountAdditionalRef === undefined ? '' : account.fromAccountAdditionalRef;
        }
        else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 3) {
            fromAccountFormat = account.fromAccountBranch + '-' + account.fromAccountCurrency + '-' + account.fromAccountAccGl + '-' + account.fromAccountCif + '-' + account.fromAccountSerialNo;
        }
        return fromAccountFormat;
    }
};
SweepingAndPoolingListPage.ctorParameters = () => [
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] }
];
SweepingAndPoolingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sweeping-and-pooling-list',
        template: _raw_loader_sweeping_and_pooling_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sweeping_and_pooling_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])
], SweepingAndPoolingListPage);



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
//# sourceMappingURL=101-es2015.js.map