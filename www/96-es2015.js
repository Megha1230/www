(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "2Swi":
/*!***************************************************************************!*\
  !*** ./src/app/pages/prepaid-card-recharge/prepaid-card-recharge.page.ts ***!
  \***************************************************************************/
/*! exports provided: PrepaidCardRechargePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepaidCardRechargePage", function() { return PrepaidCardRechargePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_prepaid_card_recharge_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./prepaid-card-recharge.page.html */ "ej8R");
/* harmony import */ var _prepaid_card_recharge_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prepaid-card-recharge.page.scss */ "VlAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");











let PrepaidCardRechargePage = class PrepaidCardRechargePage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(navService, omniPull) {
        super();
        this.navService = navService;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.rechargeCardVO = {};
        this.stepperOptions = {
            stepperName: 'prepaid_card_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: [
                'prepaid_card_req_step1',
            ],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.creditCardRequest,
                group: this.formGroup,
            },
            requestObject: this.rechargeCardVO,
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'prepaid_card_recharge_details_key',
            expanded: true,
        };
        this.fromCardOptions = {
            labelKey: 'from_card_key',
            placeHolder: 'select_from_card_key',
            group: this.formGroup,
            fcName: 'fromCard',
            requestObject: this.rechargeCardVO,
        };
        this.toCardOptions = {
            labelKey: 'to_card_key',
            placeHolder: 'select_to_card_key',
            group: this.formGroup,
            fcName: 'toCard',
            requestObject: this.rechargeCardVO,
        };
        this.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
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
                    placeHolder: 'exchange_currency_key',
                    labelKey: 'exchange_currency_key',
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
            requestObject: this.rechargeCardVO,
            group: this.formGroup
        };
        this.fromAccountOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.rechargeCardVO
        };
        this.rechargeMethodsOptions = {
            group: this.formGroup,
            fcName: 'rechargeMethods',
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.commonProv.copyObject(this.rechargeCardVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName,
            this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
        if (this.rechargeCardVO && this.rechargeCardVO[this.toCardOptions.fcName]) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.toCardOptions.fcName], 1);
        }
        const rechargeMethodCust = this.commonProv.getElementValidations(this.rechargeMethodsOptions.fcName);
        if (rechargeMethodCust.DEFAULT_VALUE && rechargeMethodCust.IS_VISIBLE == 0) {
            const rechargedMethod = {
                itemValue: JSON.parse(rechargeMethodCust.DEFAULT_VALUE).value
            };
            this.onRechargeMethodsChange(rechargedMethod);
        }
    }
    onFromAccountChange(fromAccount) {
        this.complexExchangeOptions.fromAmountOptions.currency = fromAccount.currencyBriefNameEnglish;
        this.complexExchangeOptions.fromAmountOptions.currencyCode = fromAccount.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = fromAccount.currency;
        }, 1);
    }
    //added by Marina TP:#1542494 to update exchange component from currency
    onFromCardChange(fromCard) {
        this.validateCurrencyCombination(fromCard);
        this.complexExchangeOptions.fromAmountOptions.currency = fromCard.currencyDesc;
        this.complexExchangeOptions.fromAmountOptions.currencyCode = fromCard.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = fromCard.currency;
        }, 1);
    }
    //added by Marina TP:#1542494 to update exchange component to currency
    onToCardChange(toCard) {
        this.validateCurrencyCombination(toCard);
        this.complexExchangeOptions.toAmountOptions.currency = toCard.currencyDesc;
        this.complexExchangeOptions.toAmountOptions.currencyCode = toCard.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = toCard.currency;
        }, 1);
    }
    //added by Marina TP:#1542494 to hide and show from account and from card fields based on recharge method chosen
    onRechargeMethodsChange(rechargeMethod) {
        if (rechargeMethod.itemValue == 'A') {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fromCardOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fromAccountOptions.fcName], 1);
        }
        else {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fromAccountOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fromCardOptions.fcName], 1);
        }
    }
    // Added by Omar Talaat To fix #IDB230103
    validateCurrencyCombination(selectedAccount) {
        if (selectedAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].VALIDATE_CURRENCY_COMBINATION]) {
            if (this.rechargeCardVO[this.fromCardOptions.fcName] && this.rechargeCardVO[this.toCardOptions.fcName]) {
                let validationRequest = {
                    fromCurrency: +this.rechargeCardVO[this.fromCardOptions.fcName].currency,
                    toCurrency: +this.rechargeCardVO[this.toCardOptions.fcName].currency,
                    listOfAccounts: [this.fromCardRef, this.toCardRef],
                    listOfAffectedFields: [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName],
                    screenVO: this.rechargeCardVO
                };
                this.omniPull.validateCurrencyCombination(validationRequest);
            }
        }
    }
    updateScreenVo(resp) {
        this.rechargeCardVO.submitType = '-1'; // Added by: MFawzy - tp: #1542492 - as requested per Doris to get the correct mappingId with the submit service
    }
};
PrepaidCardRechargePage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
PrepaidCardRechargePage.propDecorators = {
    toCardRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['toCardRef',] }],
    fromCardRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fromCardRef',] }]
};
PrepaidCardRechargePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-prepaid-card-recharge',
        template: _raw_loader_prepaid_card_recharge_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_prepaid_card_recharge_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], PrepaidCardRechargePage);



/***/ }),

/***/ "VlAf":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/prepaid-card-recharge/prepaid-card-recharge.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVwYWlkLWNhcmQtcmVjaGFyZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "ej8R":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prepaid-card-recharge/prepaid-card-recharge.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"prepaid_card_req_panel\">\n      <ps-lov-recharge-methods [options]=\"rechargeMethodsOptions\"\n        (onPsChange)=\"onRechargeMethodsChange($event)\"></ps-lov-recharge-methods>\n      <ps-lookup-own-accounts id=\"from-account\" [options]=\"fromAccountOptions\"\n        (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n      <ps-lookup-debit-cards (onDebitCardChange)=\"onFromCardChange($event)\" [options]=\"fromCardOptions\">\n      </ps-lookup-debit-cards>\n      <ps-lookup-prepaid-cards (onPrepaidCardChange)=\"onToCardChange($event)\"\n        [options]=\"toCardOptions\"></ps-lookup-prepaid-cards>\n      <ps-complex-exchange id=\"exchange\" [options]=\"complexExchangeOptions\">\n      </ps-complex-exchange>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=96-es2015.js.map