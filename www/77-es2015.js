(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "5Cxq":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/account-statement-list/account-statement-list.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXN0YXRlbWVudC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ENT/":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-statement-list/account-statement-list.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-report-filter-criteria (onPsChange)=\"filterCriteria($event)\" [options]=\"reportFilterOptions\"\n    [id]=\"'filter_criteria'\">\n  </ps-complex-report-filter-criteria>\n  <ng-container *ngIf=\"!requestWasSent\">\n    <ps-account-statement-list [options]=\"accountStatementListOptions\" (reloadFct)=\"loadAccountStatement()\">\n    </ps-account-statement-list>\n    <div *ngIf=\"noTransactionsFound\" class=\"no-transfers-text\">\n      <ps-label [options]=\"noTransactionsFound\"></ps-label>\n    </div>\n  </ng-container>\n\n  <ng-container footer>\n    <ps-button-send-email class=\"footer-buttons\" [options]=\"sendOptions\" [id]=\"'rep_send_' + id\">\n    </ps-button-send-email>\n    <ps-button-export class=\"footer-buttons\" [options]=\"exportOptions\" [id]=\"'rep_export_' + id\"></ps-button-export>\n  </ng-container>\n\n</ps-template-view>");

/***/ }),

/***/ "OkPl":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/account-statement-list/account-statement-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AccountStatementListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStatementListPage", function() { return AccountStatementListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_statement_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-statement-list.page.html */ "ENT/");
/* harmony import */ var _account_statement_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-statement-list.page.scss */ "5Cxq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");












let AccountStatementListPage = class AccountStatementListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"] {
    constructor(commonService, logger, navService, omniPull) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.navService = navService;
        this.omniPull = omniPull;
        this.id = 'default_stepper_id';
        this.requestWasSent = true;
        this.noTransactionsFound = false;
        this.paramList = {};
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__["PsDateFormatPipe"]();
        this.accountStatementListOptions = {};
        this.reportFilterOptions = {};
        this.noTransactionsOptions = {
            labelKey: 'no_transactions_available_key'
        };
        this.exportOptions = {
            group: this.formGroup
        };
        this.sendOptions = {
            group: this.formGroup
        };
    }
    //commented code are for demo purposes till the required services are done
    ngOnInit() {
        super.init();
        this.paramList = this.navService.getAllParams() ? this.navService.getAllParams() : null;
        this.exportOptions.reportParametersList = this.paramList;
        this.sendOptions.reportParametersList = this.paramList;
        this.accountStatementListOptions = {
            isEditable: true,
            group: this.formGroup
        };
        src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = 63;
        this.loadAccountStatement();
    }
    //prepare service request data
    loadAccountStatement(appliedFilters) {
        const generalRequestData = {
            commonParametersList: {
                status: "A",
                accountNumber: this.paramList.accountNumber,
                additionalRef: this.paramList.additionalRef,
            },
            accountCategory: this.paramList.accountTypeCategory,
            ibanAccNo: this.paramList.ibanAccNo,
            accGl: this.paramList.accGl,
            dateFrom: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltfilterFromDate,
            dateTo: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltfilterToDate,
            minAmount: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltfromAmount,
            maxAmount: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFlttoAmount,
            referenceNo: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltReferenceNumber,
            transactionTypeIndicator: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFlttrsTypeInd,
        };
        this.returnAccountStatement(generalRequestData);
    }
    //fetching account statement data
    returnAccountStatement(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.requestWasSent = true;
            // await this.omniPull.returnTransactionsList({
            //   commonParametersList: {
            //     status: "A",
            //   }
            // },).catch(error => {
            //   this.logger.error('Error: While fetching account statement  :', error);
            // });
            // dummy data for demo should be removed
            const result = {
                gridModel: [
                    {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purchase Jpay*Jumia",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        startDate: '22/11/2022',
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "3",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purchase Jpay*Jumia",
                        merchantLogo: "jumia",
                        merchantName: "Jumia",
                        branch: 'Perth'
                    }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purchase google youtube music",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        startDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "2",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purchase google youtube music",
                        merchantLogo: "youtube",
                        merchantName: "youtube",
                        branch: 'Sydney'
                    }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purchase zara",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        startDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "1",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purchase zara",
                        merchantLogo: "zara",
                        merchantName: "zara",
                        branch: 'Gold Coast'
                    },
                    {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Local transfer to Peter John",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        valueDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "4",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Local transfer to Peter John",
                        chequeNo: "123456",
                        payeeName: "Peter John",
                        chequeDate: 1665435600000,
                    }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purches from TND",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        valueDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "6",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purches from TND",
                        chequeNo: "123456",
                        payeeName: "TND",
                        chequeDate: 1665435600000,
                    }
                ]
            };
            if (result && result.gridModel.length > 0) {
                this.accountStatementListOptions.listOfOptions = this.populateAccountTransactions(result.gridModel);
            }
            else {
                this.accountStatementListOptions.listOfOptions = [];
            }
            this.requestWasSent = false;
        });
    }
    populateAccountTransactions(transactionslist) {
        const transactions = [];
        for (const iterator of transactionslist) {
            const trans = {
                transactionDate: this.psDatePipe.transform(iterator.transactionDate, 'DD/MM/YYYY').toString(),
                transactionName: iterator.transactionTypeShortNameEnglish,
                reference: iterator.soReference,
                transactionAmount: iterator.amount + ' ' + iterator.currencyBriefNameEnglish,
                valueDate: this.psDatePipe.transform(iterator.valueDate, 'DD/MM/YYYY').toString(),
                branch: iterator.bankCifShortNameEng,
                fromAccount: iterator.fromAccountAdditionalRef ? iterator.fromAccountAdditionalRef : iterator.fromAccountAccGl,
                fromAccount_lookupKey: iterator.fromAccountAdditionalRef ? iterator.fromAccountAdditionalRef : iterator.fromAccountAccGl,
                toAccount: iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                toAccount_lookupKey: iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                chequeNo: iterator.chequeNo,
                chequeDate: iterator.chequeDate,
                payeeName: iterator.payeeName,
                description: iterator.description,
                merchantName: iterator.merchantName,
                merchantLogo: iterator.merchantLogo
            };
            //if the transaction related to a merchant check on his logo if it's not returned set default logo from admin
            if (iterator.merchantName) {
                if (!iterator.merchantLogo) {
                    this.omniPull.getParamValOf('DefaultLogo').then(res => {
                        trans.merchantLogo = res.gridModel.defaultLogo;
                    }).catch(err => this.logger.log(err));
                }
            }
            //leave only reqired data for each transaction type
            if (iterator.transactionType == "1") {
                delete trans.toAccount;
                delete trans.toAccount_lookupKey;
                delete trans.chequeNo;
                delete trans.chequeDate;
                delete trans.payeeName;
            }
            else if (iterator.transactionType == "2") {
                delete trans.fromAccount;
                delete trans.fromAccount_lookupKey;
                delete trans.chequeNo;
                delete trans.chequeDate;
                delete trans.payeeName;
            }
            else if (iterator.transactionType == "3") {
                delete trans.chequeNo;
                delete trans.chequeDate;
                delete trans.payeeName;
            }
            else if (iterator.transactionType == "4") {
                delete trans.toAccount;
                delete trans.toAccount_lookupKey;
            }
            else if (iterator.transactionType == "5") {
                delete trans.fromAccount;
                delete trans.fromAccount_lookupKey;
            }
            transactions.push(trans);
        }
        return transactions;
    }
    filterCriteria(filterData) {
        this.sendOptions.fromDate = filterData.repFltfilterFromDate;
        this.sendOptions.todate = filterData.repFltfilterToDate;
        this.loadAccountStatement(filterData);
    }
};
AccountStatementListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
AccountStatementListPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AccountStatementListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-statement-list',
        template: _raw_loader_account_statement_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_statement_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], AccountStatementListPage);



/***/ })

}]);
//# sourceMappingURL=77-es2015.js.map