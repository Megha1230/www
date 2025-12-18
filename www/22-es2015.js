(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "4lGw":
/*!****************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psServices/accounts/accounts.service.ts ***!
  \****************************************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../omni-common/omni-pull.service */ "ZyuK");




/*
Created by Waleed Aly 03 April 2023 to encapsulated repeated code needed in different cards components "debit,credit,prepaid"
*/
let AccountsService = class AccountsService {
    constructor(omniPull, logger) {
        this.omniPull = omniPull;
        this.logger = logger;
        this.getAccountAsIBAN();
    }
    getAccountAsIBAN() {
        if (this.accountAsIBAN === undefined) {
            this.omniPull.getParamValOf('AccountsAsIBAN').then(res => {
                this.accountAsIBAN = res.AccountsAsIBAN;
            }).catch(err => this.logger.log(err));
        }
    }
    returnFormattedAccount(account) {
        let formattedAccount;
        let accountFormat;
        if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 1) {
            formattedAccount = account.ibanAccNo === null || account.ibanAccNo === undefined ? '' : account.ibanAccNo;
            accountFormat = 'IBAN';
        }
        else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 2) {
            formattedAccount = account.additionalRef === null || account.additionalRef === undefined ? '' : account.additionalRef;
            accountFormat = 'AddRef';
        }
        else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 3) {
            formattedAccount = account.branch + '-' + account.currency + '-' + account.accGl + '-' + account.cif + '-' + account.serialNo;
            accountFormat = 'iMAL';
        }
        else {
            formattedAccount = account.additionalRef === null || account.additionalRef === undefined ? '' : account.accountNumber;
            accountFormat = 'ACCNO';
        }
        return {
            formattedAccount: formattedAccount,
            accountFormat: accountFormat,
        };
    }
};
AccountsService.ctorParameters = () => [
    { type: _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }
];
AccountsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
], AccountsService);



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

/***/ "i0Mm":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n   <ng-container *ngIf=\"!requestWasSent\">\n         <ps-scheduled-transfers-list [options]=\"sheduledTransferListOptions\" (reloadFct)=\"loadScheduledTransfers()\">\n         </ps-scheduled-transfers-list>\n         <div *ngIf=\"noTransfersFound\" class=\"no-transfers-text\">\n            <ps-label [options]=\"noTransfersOptions\"></ps-label>\n          </div>\n   </ng-container>\n</ps-template-view>\n");

/***/ }),

/***/ "kFG2":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ScheduledTransfersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledTransfersListPage", function() { return ScheduledTransfersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_scheduled_transfers_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./scheduled-transfers-list.page.html */ "i0Mm");
/* harmony import */ var _scheduled_transfers_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduled-transfers-list.page.scss */ "zrTz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/accounts/accounts.service */ "4lGw");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");












let ScheduledTransfersListPage = class ScheduledTransfersListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"] {
    constructor(logger, omniPull, accountsService) {
        super();
        this.logger = logger;
        this.omniPull = omniPull;
        this.accountsService = accountsService;
        this.requestWasSent = true;
        this.showTransaction = true;
        this.psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["PsDateFormatPipe"]();
        this.noTransfersFound = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.noTransfersOptions = {
            labelKey: 'no_transfers_available_key'
        };
    }
    ngOnInit() {
        super.init();
    }
    ionViewWillEnter() {
        super.viewWillEnter();
        this.sheduledTransferListOptions = {
            isEditable: true,
            group: this.formGroup
        };
        this.loadScheduledTransfers();
    }
    //Modified by ghada, AZDB-5993 as discussed with PM to send the right status for each transactions list cash/scheduled/pending(immediate)
    loadScheduledTransfers() {
        let trxStatus = '';
        switch (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID) {
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID: {
                trxStatus = "P,R,F";
                break;
            }
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID: {
                trxStatus = "A";
                break;
            }
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SCHEDULED_TRANSFERS_OPER_ID: {
                trxStatus = "P,T,A"; //jira #7123 - Aline request to include A status in Sch Transfer list as well
                break;
            }
        }
        const generalRequestData = {
            commonParametersList: {
                status: trxStatus
                //  fromAmount: "1",
                //  toAmount: "100",
            }
        };
        this.returnScheduledTransfers(generalRequestData);
    }
    returnScheduledTransfers(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.requestWasSent = true;
            const result = yield this.omniPull.returnTransactionsList(requestData).catch(error => {
                this.logger.error('Error: While fetching scheduled transfers  :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.sheduledTransferListOptions.listOfOptions = this.populateScheduledTransfers(result.gridModel);
            }
            else {
                this.noTransfersFound = true;
                this.sheduledTransferListOptions.listOfOptions = [];
            }
            this.requestWasSent = false;
        });
    }
    populateScheduledTransfers(transactionslist) {
        var _a, _b, _c, _d;
        const transactions = [];
        const psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["PsDateFormatPipe"]();
        for (const iterator of transactionslist) {
            // if (iterator.transferTypeOperId != undefined) {
            const trans = {
                transferType: (iterator.transferTypeOperId) ? (((_a = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _a === void 0 ? void 0 : _a.OPER_NAME) ? this.commonProv.translate((_b = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _b === void 0 ? void 0 : _b.OPER_NAME) : iterator.transferType ? this.getTransferTypeInfo(iterator.transferType, 2) : '-----') : '---',
                transactionAmount: iterator.amount,
                transactionAmountNCurrency: this.commonProv.amountFormat(iterator.amount, iterator.currencyDecimalPoints || src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DEFAULT_DECIMAL_POINTS) + ' (' + iterator.currencyBriefNameEnglish + ')',
                transactionStatus: iterator.status,
                statusCode: iterator.status,
                status: iterator.statusDescription,
                statusDescription: iterator.statusDescription,
                fromCurrency: iterator.fromAccountCurrency,
                transactionNumber: iterator.transactionNo,
                fromAccount: iterator.fromAccountAdditionalRef,
                fromAccount_lookupKey: iterator.fromAccountAdditionalRef,
                toAccount: iterator.toAccountNumber ? iterator.toAccountNumber : iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                toAccount_lookupKey: iterator.toAccountNumber ? iterator.toAccountNumber : iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                reference: iterator.soReference || '-----',
                title: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID ? iterator.benefName : iterator.fromAccountAdditionalRef,
                subTtile: iterator.amount,
                accGl: iterator.fromAccountAccGl,
                currency: iterator.fromAccountCurrency,
                workingCif: iterator.fromAccountCif,
                serialNo: iterator.fromAccountSerialNo,
                formattedToAccount: this.accountsService.returnFormattedAccount({ additionalRef: (iterator.toAccountAdditionalRef || iterator.toAccountNumber), ibanAccNo: iterator.toAccountIbanAccNo }).formattedAccount,
                formattedFromAccount: this.accountsService.returnFormattedAccount({ additionalRef: iterator.fromAccountAdditionalRef, ibanAccNo: iterator.fromAccountIbanAccNo, currency: iterator.fromAccountCurrency }).formattedAccount,
                toBeneficiary: iterator.toAccountAdditionalRef,
                toBeneficiary_lookupKey: iterator.toAccountAdditionalRef,
                toAccountType: this.getTransferAccountType(iterator),
                // toAccountType: iterator.transferType === '1' ? (iterator.toAccountCif === iterator.fromAccountCif) ? 'ownAccountStandingOrder' : 'companyAccountStandingOrder' : iterator.transferType === '2' ? 'bankLocalStandingOrder' : iterator.transferType === '3' ? 'internationalAccountStandingOrder' : iterator.transferType === '4' ? 'companyAccountTransfer' : 'ownAccountStandingOrder',
                // toAccountType: iterator.transferType == '2' ? ConstantCommon.INTERNAL_TRANSACTION_TYPE : OWN_ACCOUNT_TRANSFER_TYPE == '1' ? (iterator.fromAccountCif == iterator.toAccountCif ? ConstantCommon.OWN_TRANSACTION_TYPE : ConstantCommon.LOCAL_TRANSACTION_TYPE) : iterator.transferType == '3' ? ConstantCommon.INTERNATIONAL_TRANSACTION_TYPE : ConstantCommon.OWN_TRANSACTION_TYPE,
                scheduler: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID ? false : true,
                // scheduler: true, //related to next step in payment
                // operId: iterator.transferTypeOperId ? parseInt(iterator.transferTypeOperId) : iterator.transferType ? this.getTransferTypeInfo(iterator.transferType, 1) : '', // By Mohanad AZDB-6915 - 26012025
                operName: (iterator.transferTypeOperId) ? ((_c = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _c === void 0 ? void 0 : _c.OPER_NAME) ? (_d = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _d === void 0 ? void 0 : _d.OPER_NAME : '' : '',
                transferTypeOperId: iterator.transferTypeOperId ? parseInt(iterator.transferTypeOperId) : iterator.transferType ? this.getTransferTypeInfo(iterator.transferType, 1) : '',
                date: iterator.valueDateStr,
                bankCifShortNameEng: iterator.bankCifShortNameEng || '--------',
                transactionDate: iterator.transactionDateStr,
                branch: iterator.fromAccountBranch,
                benefName: iterator.benefName,
                idTypeNumber: iterator.idTypeNumber,
                purpose: iterator.purpose,
                idNumber: iterator.idNumber,
                idType: iterator.idType,
                idExpiryDate: iterator.idExpiryDate,
                idIssueDate: iterator.idIssueDate,
                idCountry: iterator.idCountry,
                benefPhone: iterator.benefPhone,
                purposeTxtDesc: iterator.purpose,
                toBranch: iterator.toAccountBranch,
                transactionBranch: iterator.transactionBranch ////Jira #5525 On Behalf Of Rakesh, Include transactionBranch in the list
            };
            if (iterator.transferType == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER_TYPE || iterator.transferType == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_TRANSFER_TYPE) {
                delete trans.bankCifShortNameEng;
            }
            transactions.push(trans);
        }
        if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].custMode) {
            const scheduledTransactions = transactions.filter(trans => (trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID));
            const immedTransactions = transactions.filter(trans => (trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER));
            return src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? immedTransactions : scheduledTransactions;
        }
        return transactions;
    }
    getTransferTypeInfo(transferType, type) {
        var _a, _b;
        let transferTypeOperId;
        if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_TRANSFER_TYPE) {
            transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
        }
        else if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_TRANSFER_TYPE) {
            transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
        }
        else if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER_TYPE) {
            transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID;
        }
        else if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_TRANSFER_TYPE) {
            transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
        }
        if (type === 1) {
            return transferTypeOperId;
        }
        else {
            return ((_a = this.commonProv.getPageByOperId(transferTypeOperId)) === null || _a === void 0 ? void 0 : _a.OPER_NAME) ? this.commonProv.translate((_b = this.commonProv.getPageByOperId(transferTypeOperId)) === null || _b === void 0 ? void 0 : _b.OPER_NAME) : '';
        }
    }
    getTransferAccountType(iterator) {
        let toAccountType = '';
        if (iterator.transferTypeOperId) {
            if ((iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID) && iterator.toAccountCif == iterator.fromAccountCif) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER ? 'ownAccountTransfer' : 'ownAccountStandingOrder';
            }
            else if (iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER ? 'companyAccountTransfer' : 'companyAccountStandingOrder';
            }
            else if (iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER ? 'bankLocalTransfer' : 'bankLocalStandingOrder';
            }
            else if (iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER ? 'internationalAccountTransfer' : 'internationalAccountStandingOrder';
            }
            else {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID ? 'cashTransfer' : '';
            }
        }
        return toAccountType;
    }
};
ScheduledTransfersListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] }
];
ScheduledTransfersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scheduled-transfers-list',
        template: _raw_loader_scheduled_transfers_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scheduled_transfers_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])
], ScheduledTransfersListPage);



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

/***/ "zrTz":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZWQtdHJhbnNmZXJzLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=22-es2015.js.map