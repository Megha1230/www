(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "ATrW":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/break-term-deposit-account/break-term-deposit-account.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\">\n  <ps-form-step step1>\n    <ps-container-panel [options]=\"panelOptionsStep1\" id=\"break_term_panel1\">\n\n      <!-- <ps-accounts-list [options]=\"termsAccountListOptions\"></ps-accounts-list> -->\n      <ps-lookup-own-accounts [options]=\"termsAccountListOptions\"></ps-lookup-own-accounts>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptionsStep2\" id=\"break_term_panel2\">\n      <ps-lov-breakage-type id=\"breakageType\" [options]='breakTypeOptions' (onPsChange)='onchange($event)'>\n      </ps-lov-breakage-type>\n      <!-- <ps-complex-amount [options]=\"psComplexAmountOptions\" (onAmountChanged)=\"onBreakageAmountChange($event)\" (onCurrencyChange)=\"onCurrencyChange($event)\"></ps-complex-amount> -->\n      <ps-lookup-own-accounts id=\"'transferTo'+ id\" [options]=\"transferToOptions\"\n        (onAccountChange)=\"onTransferTo($event)\">\n      </ps-lookup-own-accounts>\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onPsChange)=\"onBreakageAmountChange($event)\"></ps-complex-exchange>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "D8t5":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/break-term-deposit-account/break-term-deposit-account.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* break term deposit account css*/\n.test {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JyZWFrLXRlcm0tZGVwb3NpdC1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBQTtBQUVBO0VBQ0ksa0JBQUE7QUFBSiIsImZpbGUiOiJicmVhay10ZXJtLWRlcG9zaXQtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmVhayB0ZXJtIGRlcG9zaXQgYWNjb3VudCBjc3MqL1xyXG5cclxuLnRlc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "Q5h/":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/break-term-deposit-account/break-term-deposit-account.page.ts ***!
  \*************************************************************************************/
/*! exports provided: BreakTermDepositAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakTermDepositAccountPage", function() { return BreakTermDepositAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_break_term_deposit_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./break-term-deposit-account.page.html */ "ATrW");
/* harmony import */ var _break_term_deposit_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./break-term-deposit-account.page.scss */ "D8t5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component */ "/M2N");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");

















let BreakTermDepositAccountPage = class BreakTermDepositAccountPage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_16__["OmniBasePage"] {
    constructor(commonProv, navService, loggerP, eventEmitterService, omniPull) {
        super();
        this.commonProv = commonProv;
        this.navService = navService;
        this.loggerP = loggerP;
        this.eventEmitterService = eventEmitterService;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.breakTermDepositVO = {};
        this.stepperOptions = {
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['break_term_deposit1'],
            group: this.formGroup,
            requestObject: this.breakTermDepositVO,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
                group: this.formGroup,
                postCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.serviceRes(response));
                        });
                    },
                    params: [this],
                    executionClass: this
                },
            }
        };
        this.panelOptionsStep1 = {
            isExpandable: true,
            labelKey: 'account_details_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'break_account_details_key',
            iconName: 'document',
            expanded: false
        };
        this.filterDateOptions = {
            fcName: 'date',
            group: this.formGroup,
            labelKey: 'date_key',
            placeHolder: 'select_date_key',
        };
        this.transferToOptions = {
            labelKey: 'transfer_to_key',
            placeHolder: 'select_transfer_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.breakTermDepositVO
        };
        this.psComplexAmountOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'currency'
            },
            amountOptions: {
                labelKey: 'breakage_amount_key',
                placeHolder: 'enter_breakage_amount_key',
                fcName: 'inputAmount',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3
            }
        };
        this.psComplexAmountOptions1 = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'accountCurrency'
            },
            amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'amount',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3
            }
        };
        this.breakTypeOptions = {
            fcName: 'brekageType',
            group: this.formGroup,
            labelKey: 'breakage_type_key',
            placeHolder: 'select_breakage_type_key'
        };
        this.comAmountOptions = {
            currency: '',
            currenciesOptions: {
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'currency'
            },
            amountOptions: {
                labelKey: 'amount',
                fcName: 'amount',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3,
            }
        };
        this.fullBreakOptions = {
            labelKey: 'fuller_partial_break_key',
            placeHolder: 'fuller_partial_break_key',
            group: this.formGroup,
            fcName: 'fullerOrPartialBreakToggle',
            psClass: 'toggleColor'
        };
        this.showAmt = true;
        this.accountTypesOptions = {
            accountTypesOptions: {
                allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
                accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACC_TYPE_T,
                group: this.formGroup,
                fcName: 'accountTypes'
            },
            periodicity: {
                group: this.formGroup,
                fcName: 'periodiCity'
            },
            minimumBalance: {
                group: this.formGroup,
                fcName: 'minBalance'
            },
            group: this.formGroup,
            requestObject: this.breakTermDepositVO
        };
        this.lblPeriodicityOptions = {
            labelKey: 'Term: 5 Years'
        };
        this.profitRateOptions = {
            placeHolder: 'profit_rate_key',
            labelKey: 'profit_rate_key',
            group: this.formGroup,
            fcName: 'profitRate'
        };
        this.accountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'transferTo',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.breakTermDepositVO
        };
        this.maturityTransferOptions = {
            labelKey: 'on_maturity_transfer_balance_to_key',
            placeHolder: 'select_maturity_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'maturityAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.breakTermDepositVO
        };
        this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.breakTermDepositVO
        };
        this.mainOptions = {
            toggleOptions: {
                labelKey: 'renew_key',
                placeHolder: 'renew_key',
                group: this.formGroup,
                fcName: 'renew',
                psClass: 'toggleColor'
            },
            toggleProfitOptions: {
                labelKey: 'post_profit_to_same_account_key',
                placeHolder: 'post_profit_to_same_account_key',
                group: this.formGroup,
                fcName: 'renewWithSame',
                psClass: 'toggleColor',
            }
        };
        this.instructMsgLabelOptions = {
            labelKey: 'Renewal Instructions: New Balance Renewed in Same Account',
            group: this.formGroup,
            fcName: 'instrcutions'
        };
        this.actionImageOptions = {
            imageName: 'account_Deactivation_Remark_icon.png'
        };
        // termsAccountListOptions: IOptionsPsAccountsListExposed = {
        //   fcName: 'account',
        //   isEditable: false
        // };
        this.termsAccountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'F',
            fromTo: 'from',
            requestObject: this.breakTermDepositVO
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
                    labelKey: 'breakage_amount_key',
                    placeHolder: 'breakage_amount_key',
                    fcName: 'transactionAmount',
                    group: this.formGroup,
                    decimalPoints: 3,
                    revertToOldValue: false,
                },
                requestObject: this.breakTermDepositVO
            },
            toAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'exchange_currency_key',
                    labelKey: 'exchange_currency_key',
                    fcName: 'toCurrency',
                    group: this.formGroup
                },
                amountOptions: {
                    labelKey: 'exchange_amount_key',
                    placeHolder: 'enter_amount_key',
                    fcName: 'toAmount',
                    group: this.formGroup,
                    decimalPoints: 2
                },
                requestObject: this.breakTermDepositVO
            },
            requestObject: this.breakTermDepositVO,
            group: this.formGroup
        };
        this.enablePeriodicity = false;
        this.showLabel = false;
        this.enableMaturityTransfer = false;
        this.enableProfit = false;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
        this.commonProv.copyObject(this.breakTermDepositVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
        if (this.breakTermDepositVO) {
            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : '' }, false, true);
        }
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.termsAccountListOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
        this.commonProv.addDefaultValidator(this.formGroup, this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, this.commonProv.prepareValidation(false, null, null, null, null, null, null, null, [this.custAmountValidator()]));
    }
    ngAfterViewInit() {
        this.commonProv.setValInsideNestedObj(this.termsAccountListOptions.fcName, this.breakTermDepositVO.additionalRef, this.breakTermDepositVO);
        this.commonProv.setValInsideNestedObj(this.termsAccountListOptions.fcName + '_lookupKey', this.breakTermDepositVO.additionalRef, this.breakTermDepositVO);
        this.breakTermDepositVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = this.breakTermDepositVO.currency;
        this.complexExchangeOptions.fromAmountOptions.currencyCode = Number(this.breakTermDepositVO.currency);
    }
    onBreakageAmountChange(value) {
        // const availableBal = this.breakTermDepositVO.availableBalance.split(' ');
        // if (Number(value.amount) > parseFloat(availableBal[0].replace(/,/g, ''))) {
        //   CommonUtils.presentInfoAlert(this.commonProv.translate('amount_should_not_exceed_the_defaulted_value_key'));
        //   this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, parseFloat(availableBal[0].replace(/,/g, '')), this.breakTermDepositVO)
        // }
    }
    onchange(val) {
        this.availableBal = this.breakTermDepositVO.availableBalance.split(' ');
        if (val) {
            //Mohanad AZDB-5887 28102024
            if (val.itemValue == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].FULL_BREAKAGE_TERM_DEPOSIT) {
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, parseFloat(this.availableBal[0].replace(/,/g, '')), this.breakTermDepositVO);
                setTimeout(() => {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
                }, 1);
            }
            else if (val.itemValue == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PARTIAL_BREAKAGE_TERM_DEPOSIT) {
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, null, this.breakTermDepositVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 0);
            }
        }
        //End AZDB-5887
    }
    onTransferTo(fromAccount) {
        if (fromAccount) {
            this.breakTermDepositVO[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = fromAccount.currency.toString();
            this.complexExchangeOptions.toAmountOptions.currencyCode = Number(fromAccount.currency);
            this.showExchangeRate();
        }
    }
    showExchangeRate() {
        this.exchangeChild.showToCurrency();
    }
    //Mohanad AZDB-5887 28102024
    custAmountValidator() {
        return (control) => {
            if (!this.checkFieldControlsValidity(control)) {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].presentInfoAlert(this.commonProv.translate('partial_break_amount_cannot_be_greater_or_equal_to_account_balance_key'));
                this.formGroup.controls[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName].setValue(null);
                return { 'equal or greater than balance': '' };
            }
            return null;
        };
    }
    checkFieldControlsValidity(control) {
        if (!src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(this.availableBal) && (control === null || control === void 0 ? void 0 : control.value) != undefined && (control === null || control === void 0 ? void 0 : control.value) != '' && control.value >= this.availableBal) {
            return false;
        }
        return true;
    }
};
BreakTermDepositAccountPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_15__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_14__["PsNavigatorService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] }
];
BreakTermDepositAccountPage.propDecorators = {
    exchangeChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexExchangeComponent"],] }]
};
BreakTermDepositAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-break-term-deposit-account',
        template: _raw_loader_break_term_deposit_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_break_term_deposit_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_15__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_14__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])
], BreakTermDepositAccountPage);



/***/ })

}]);
//# sourceMappingURL=78-es2015.js.map