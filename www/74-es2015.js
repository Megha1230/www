(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

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

/***/ "7hi+":
/*!*************************************************************!*\
  !*** ./src/app/pages/accounts-list/accounts-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "LgaR":
/*!***********************************************************!*\
  !*** ./src/app/pages/accounts-list/accounts-list.page.ts ***!
  \***********************************************************/
/*! exports provided: AccountsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsListPage", function() { return AccountsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accounts_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accounts-list.page.html */ "M1YT");
/* harmony import */ var _accounts_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts-list.page.scss */ "7hi+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/accounts/accounts.service */ "4lGw");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */ "EIUR");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");













let AccountsListPage = class AccountsListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonService, logger, omniPull, accountsService) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.accountsService = accountsService;
        this.generalLabelValuesMap = new Map();
        this.generalHeaderMap = new Map();
        this.termsLabelValuesMap = new Map();
        this.termsHeaderMap = new Map();
        this.showGeneralAccounts = true;
        this.showTermsAccounts = false;
        this.noGeneralAccountFound = false;
        this.noTermsAccountFound = false;
        this.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["PsCurrencyPipe"]();
        this.noTermsRecordFoundOptions = {
            labelKey: 'no_terms_records_found_key',
            previewMode: false
        };
        this.noGenRecordFoundOptions = {
            labelKey: 'no_general_records_found_key',
            previewMode: false
        };
        this.complexSegmentOptions = {
            segmentOptions: {
                segmentList: []
            },
            segmentContainerOptions: {
                numberOfSegments: 2,
                namesofSegments: ['general_account_segment', 'term_account_segment'],
            }
        };
        this.generalAccountsKey = 'general_accounts_key';
        this.termsAccountsKey = 'terms_accounts_key';
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.templateViewOptions = {
            group: this.formGroup
        };
        //this.populateHeaderValueMap();
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup; // Added by Zunair For #BUG 1257538
        this.complexSegmentOptions.group = this.formGroup;
        this.complexSegmentOptions.segmentOptions = {
            fcName: 'accountsSegment',
            segmentList: [{
                    selected: true,
                    itemValue: this.generalAccountsKey,
                    description: this.commonProv.translate(this.generalAccountsKey)
                }, {
                    selected: true,
                    itemValue: this.termsAccountsKey,
                    description: this.commonProv.translate(this.termsAccountsKey)
                }],
        };
        this.generalAccountListOptions = {
            isEditable: true,
            generatedToQR: true,
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].GENERAL_ACCOUNT_TYPE,
            balanceFcNames: ['generalCurrentBalance', 'generalAvailableBalance']
        };
        this.termsAccountListOptions = {
            isEditable: true,
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].TERM_ACCOUNT_TYPE,
            balanceFcNames: ['termCurrentBalance', 'termAvailableBalance']
        };
    }
    onClickSegment(selectedSegment) {
        if (selectedSegment === this.generalAccountsKey) {
            this.termsAccountListOptions.refreshTermDepositList = false;
            this.showTermsAccounts = false;
            this.showGeneralAccounts = true;
        }
        else {
            this.termsAccountListOptions.refreshTermDepositList = true;
            this.showTermsAccounts = true;
            this.showGeneralAccounts = false;
        }
        this.selectedAccountSegment = this.commonProv.translate(selectedSegment);
        ;
        this.loadAccounts(selectedSegment);
    }
    /**
     * populating account - fetching from server
     */
    loadAccounts(segment) {
        // TODO: when the service is ready : we will get the account list based on cif number from server. service will take the cif number -- options.cifNumber will provide the cif number
        const cifInfo = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
        if (segment === this.generalAccountsKey) {
            const generalRequestData = {
                userCifNo: cifInfo === null || cifInfo === void 0 ? void 0 : cifInfo.omniUserVO.CIF_NO,
                permittedGls: 'G',
                accountType: 'G'
            };
            this.returnGeneralAccountList(generalRequestData);
        }
        else if (segment === this.termsAccountsKey) {
            const termsRequestData = {
                userCifNo: cifInfo.omniUserVO.CIF_NO,
                permittedGls: 'F',
                accountType: 'F'
            };
            this.returnTermsAccountList(termsRequestData);
        }
    }
    /**
     * fetching general account list from server
     * @param requestData IOmniAccountRequest
     */
    returnGeneralAccountList(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.generalAccountListOptions.listOfOptions = [];
            const result = yield this.omniPull.returnAccounts(requestData).catch(error => {
                this.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.accountsService.getAccountAsIBAN();
                this.noGeneralAccountFound = false;
                this.generalAccountListOptions.listOfOptions = this.populateCustomAccounts(result.gridModel);
            }
            else {
                this.generalAccountListOptions.listOfOptions = [];
                this.noGeneralAccountFound = true;
            }
        });
    }
    /**
     * fetching terms account list from server
     * @param requestData IOmniAccountRequest
     */
    returnTermsAccountList(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.termsAccountListOptions.listOfOptions = [];
            const result = yield this.omniPull.returnAccounts(requestData).catch(error => {
                this.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.accountsService.getAccountAsIBAN();
                this.noTermsAccountFound = false;
                this.termsAccountListOptions.listOfOptions = this.populateCustomAccounts(result.gridModel);
            }
            else {
                this.termsAccountListOptions.listOfOptions = [];
                this.noTermsAccountFound = true;
            }
        });
    }
    /**
     *
     * @param listOfOptions
     */
    populateCustomAccounts(listOfOptions) {
        const accountsList = [];
        for (const iterator of listOfOptions) {
            const account = {
                briefNameEnglish: iterator.briefNameEnglish,
                cifShortNameEnglish: iterator.cifShortNameEnglish,
                accountNumber: iterator.accountNumber,
                balance: this.psCurrency.transform(iterator.balance === null || iterator.balance === undefined ? '0.0' : iterator.balance, iterator.currencyDecimalPoints) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                availableBalance: this.psCurrency.transform(iterator.availableBalance === null || iterator.availableBalance === undefined ? '0.0' : iterator.availableBalance, iterator.currencyDecimalPoints) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                currencyBriefName: iterator.currencyBriefName || iterator.currencyBriefNameEnglish,
                currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                currency: iterator.currency,
                additionalRef: iterator.additionalRef,
                ibanAccNo: iterator.ibanAccNo,
                accGl: iterator.accGl,
                serialNo: iterator.serialNo,
                branch: iterator.branch,
                cif: iterator.cif,
                formattedAccount: this.accountsService.returnFormattedAccount(iterator).formattedAccount,
                personalizeKey: iterator.personalizeKey,
                nickName: iterator.nickName,
                briefName: iterator.briefName,
                generalLedgerBriefNameEng: iterator.generalLedgerBriefNameEng,
                accountTypeDesc: iterator.accountTypeDesc,
                status: iterator.statusDescription,
                statusCode: iterator.status,
                branchDescription: iterator.branchDescription,
                sharedMessage: this.generateSharedMessage(iterator),
                // salah
                actualAmount: iterator.actualAmount,
                outstandingAmount: iterator.outstandingAmount,
                accumulatedAmount: iterator.accumulatedAmount,
                accountFormat: this.accountsService.returnFormattedAccount(iterator).accountFormat,
            };
            accountsList.push(account);
        }
        //AZDB-2360, Moved here by ghada from ps-accounts-list in order to reasure that data is retured from service to assign rowIndex for each record
        accountsList.map((element, index) => element['rowIndex'] = index);
        return accountsList;
    }
    updateCard(value) {
    }
    // Edited by ghada tp#1246612 for fixing the format as amana requested and to remove aacount name, ref and iban info from shared message
    generateSharedMessage(itemCard) {
        var _a;
        let message = '';
        message = this.commonProv.translate('account_holder_name_key') + ': ' + ((_a = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).customerInfoCO.longName) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
        if (itemCard.accountNumber != null && itemCard.accountNumber != undefined) {
            message = (message != '' ? message + '\n' : '') + this.commonProv.translate('account_number_key') + ': ' + itemCard.accountNumber;
        }
        message = (message != '' ? message + '\n' : '') + this.commonProv.translate('bank_name_key') + ': ' + this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).companySettingsCO.companyBriefDesc;
        if (itemCard.branchDescription != null && itemCard.branchDescription != undefined) {
            message = (message != '' ? message + '\n' : '') + this.commonProv.translate('branch_name_key') + ': ' + itemCard.branchDescription;
        }
        return message;
    }
    ionViewWillEnter() {
        super.viewWillEnter();
        // added by salah AZDB-5042 to check on the selected segment on first initialization takes the default segment, 
        // else when sumbitting from the segment to send the selected segment
        const segmentData = this.complexSegmentOptions.segmentOptions.group.controls.formData.value.accountsSegment
            || this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue;
        this.loadAccounts(segmentData);
    }
};
AccountsListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] }
];
AccountsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accounts-list',
        template: _raw_loader_accounts_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accounts_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])
], AccountsListPage);



/***/ }),

/***/ "M1YT":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts-list/accounts-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n\n  <ps-complex-segment id=\"accountsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-accounts-list id=\"general_acc\" [options]=\"generalAccountListOptions\"\n        *ngIf=\"generalAccountListOptions?.listOfOptions?.length>0\"></ps-accounts-list>\n      <ps-label [options]=\"noGenRecordFoundOptions\" *ngIf=\"noGeneralAccountFound \" class=\"no-account-text\"></ps-label>\n    </ps-content-segment>\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-accounts-list id=\"term_acc\" [options]=\"termsAccountListOptions\"\n        *ngIf=\"termsAccountListOptions?.listOfOptions?.length>0\"></ps-accounts-list>\n      <ps-label [options]=\"noTermsRecordFoundOptions\" *ngIf=\"noTermsAccountFound \" class=\"no-account-text\"></ps-label>\n    </ps-content-segment>\n\n  </ps-complex-segment>\n\n</ps-template-view>");

/***/ })

}]);
//# sourceMappingURL=74-es2015.js.map