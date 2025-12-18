(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "1Dkv":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/credit-card-settlement/credit-card-settlement.page.ts ***!
  \*****************************************************************************/
/*! exports provided: CreditCardSettlementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardSettlementPage", function() { return CreditCardSettlementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_credit_card_settlement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./credit-card-settlement.page.html */ "KkLL");
/* harmony import */ var _credit_card_settlement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-card-settlement.page.scss */ "Y4UO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component */ "/M2N");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component */ "vbr2");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-constant */ "zngb");

















let CreditCardSettlementPage = class CreditCardSettlementPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"] {
    // public schedulerOptions: IOptionsPSComplexRecurringSchedulerExposed = {
    //   fcName: 'psScheduler',
    //   group: this.formGroup
    // };
    constructor(omniPull, logger, nav, loggerP, commonService, omniCommon, eventEmitterService) {
        super();
        this.omniPull = omniPull;
        this.logger = logger;
        this.nav = nav;
        this.loggerP = loggerP;
        this.commonService = commonService;
        this.omniCommon = omniCommon;
        this.eventEmitterService = eventEmitterService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.creditCardSettlementVO = {};
        this.defaultVO = {};
        this.ownAccountVO = {};
        this.stepperOptions = {
            stepperName: 'credit_card_settlement',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: [
                'credit_card_settlement_step1',
            ],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.creditCardSettlementRequestEndPoint,
                group: this.formGroup,
            },
            requestObject: this.creditCardSettlementVO,
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'credit_card_settlement_key',
            iconName: 'document',
            expanded: true,
        };
        this.creditCardsLookupOptiops = {
            labelKey: 'credit_card_key',
            placeHolder: 'select_credit_card_key',
            group: this.formGroup,
            fcName: 'creditCard',
            requestObject: this.creditCardSettlementVO,
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component__WEBPACK_IMPORTED_MODULE_7__["PsOptionCardComponent"]
        };
        this.settlementAccountListOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'settlement_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'from',
            defaultByPersonalizedAcc: false,
            requestObject: this.creditCardSettlementVO,
        };
        this.complexExchangeOptions = {
            editableMode: false,
            // showToCurrencyOptions: true,
            fromAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'currency_key',
                    labelKey: 'currency_key',
                    fcName: 'fromCurrency',
                    group: this.formGroup
                },
                amountOptions: {
                    labelKey: 'amount_key',
                    placeHolder: 'enter_amount_key',
                    fcName: 'transactionAmount',
                    group: this.formGroup,
                    decimalPoints: 2
                }
            },
            toAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'currency_key',
                    labelKey: 'currency_key',
                    fcName: 'currency',
                    group: this.formGroup
                },
                amountOptions: {
                    labelKey: 'exchange_amount_key',
                    placeHolder: 'enter_amount_key',
                    fcName: 'toAmount',
                    group: this.formGroup,
                    decimalPoints: 2
                }
            },
            requestObject: this.creditCardSettlementVO,
            group: this.formGroup
        };
        this.toAccountComponent = {};
    }
    ngOnInit() {
        super.init();
        this.commonProv.copyObject(this.creditCardSettlementVO, this.nav.getAllParams() ? this.nav.getAllParams().ScreenVO ? this.nav.getAllParams().ScreenVO : this.nav.getAllParams() : {});
        this.baseFormGroup = this.formGroup;
    }
    settlementAccountChange(settlementAccount) {
        if (settlementAccount) {
            this.validateCurrencyCombination(settlementAccount);
            this.complexExchangeOptions.toAmountOptions.currency = settlementAccount.currencyCode;
            this.complexExchangeOptions.toAmountOptions.currencyCode = settlementAccount.currency;
            setTimeout(() => {
                this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = settlementAccount.currency;
            }, 1);
            this.showExchangeRate();
        }
    }
    creditCardListChange(credCardAccount) {
        if (credCardAccount) {
            this.validateCurrencyCombination(credCardAccount);
            this.complexExchangeOptions.fromAmountOptions.currency = credCardAccount.currencyCode;
            this.complexExchangeOptions.fromAmountOptions.currencyCode = credCardAccount.currency;
            setTimeout(() => {
                this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = credCardAccount.currency;
            }, 1);
            this.creditCardSettlementVO.defaultSettlementAccount = this.creditCardSettlementVO.defaultSettlementAccount != undefined ? this.creditCardSettlementVO.defaultSettlementAccount : true;
            if (this.creditCardSettlementVO.defaultSettlementAccount) {
                this.commonProv.setValInsideNestedObj(this.settlementAccountListOptions.fcName, credCardAccount.additionalRef, this.creditCardSettlementVO);
                this.commonProv.setValInsideNestedObj(this.settlementAccountListOptions.fcName + '_lookupKey', credCardAccount.additionalRef, this.creditCardSettlementVO);
            }
        }
    }
    /** to show exchange rate if from and to currencies are different */
    showExchangeRate() {
        this.exchangeChild.showToCurrency();
    }
    validateCurrencyCombination(selectedAccount) {
        if (selectedAccount[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].VALIDATE_COMBINATION]) {
            if (this.creditCardSettlementVO[this.settlementAccountListOptions.fcName] && this.creditCardSettlementVO[this.creditCardsLookupOptiops.fcName] && this.creditCardSettlementVO[this.settlementAccountListOptions.fcName].currency != this.creditCardSettlementVO[this.creditCardsLookupOptiops.fcName].currency) {
                let validationRequest = {
                    fromCurrency: +this.creditCardSettlementVO[this.settlementAccountListOptions.fcName].currency,
                    toCurrency: +this.creditCardSettlementVO[this.creditCardsLookupOptiops.fcName].currency,
                    listOfAccounts: [this.fromAccountRef, this.toAccountRef, this.exchangeRef],
                    listOfAffectedFields: [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName],
                    screenVO: this.creditCardSettlementVO
                };
                this.omniPull.validateCurrencyCombination(validationRequest);
            }
        }
    }
};
CreditCardSettlementPage.ctorParameters = () => [
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__["EventEmitterService"] }
];
CreditCardSettlementPage.propDecorators = {
    exchangeChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexExchangeComponent"],] }],
    toAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['toAccountRef',] }],
    fromAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fromAccountRef',] }],
    exchangeRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['exchangeRef',] }]
};
CreditCardSettlementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'credit-card-settlement',
        template: _raw_loader_credit_card_settlement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_credit_card_settlement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__["EventEmitterService"]])
], CreditCardSettlementPage);



/***/ }),

/***/ "KkLL":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credit-card-settlement/credit-card-settlement.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"credit_card_req_panel\">\n\n      <ps-lookup-credit-cards [options]=\"creditCardsLookupOptiops\" #fromAccountRef\n        (onCreditCardChange)=\"creditCardListChange($event)\">\n      </ps-lookup-credit-cards>\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" #toAccountRef [options]=\"settlementAccountListOptions\"\n        (onAccountChange)=\"settlementAccountChange($event)\"></ps-lookup-own-accounts>\n\n      <!--\n          <ps-lookup-own-accounts id=\"'transferTo'+ id\" #toAccountRef [options]=\"toaccountList\"\n        (onAccountChange)=\"onAccountChange($event)\"></ps-lookup-own-accounts>     \n       -->\n\n      <ps-complex-exchange #exchangeRef [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>");

/***/ }),

/***/ "Y4UO":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/credit-card-settlement/credit-card-settlement.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXQtY2FyZC1zZXR0bGVtZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=84-es2015.js.map