(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "mYQ2":
/*!***************************************************************************!*\
  !*** ./src/app/pages/sweeping-and-pooling/sweeping-and-pooling.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2VlcGluZy1hbmQtcG9vbGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "vWqj":
/*!*************************************************************************!*\
  !*** ./src/app/pages/sweeping-and-pooling/sweeping-and-pooling.page.ts ***!
  \*************************************************************************/
/*! exports provided: SweepingAndPoolingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweepingAndPoolingPage", function() { return SweepingAndPoolingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sweeping_and_pooling_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sweeping-and-pooling.page.html */ "yN2N");
/* harmony import */ var _sweeping_and_pooling_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweeping-and-pooling.page.scss */ "mYQ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component */ "/M2N");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");















let SweepingAndPoolingPage = class SweepingAndPoolingPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(commonService, logger, omniPull, navService) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.sweepingAndPoolingVO = {};
        this.exchangeRate = '0.00';
        this.amountInToAccountAmount = '0.00';
        this.stepperOptions = {
            stepperName: 'sweeping_and_pooling_key',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: [
                'sweeping_and_pooling_step1_key',
                'periodicity_step2_key',
            ],
            group: this.formGroup,
            submitOptions: {
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.sweepingAndPoolingRequestEndPoint,
                group: this.formGroup,
            },
            requestObject: this.sweepingAndPoolingVO,
        };
        this.panelSweepingOptions = {
            isExpandable: true,
            labelKey: 'sweeping_and_pooling_main_details_key',
            expanded: true
        };
        this.panelPeriodicityOptions = {
            isExpandable: true,
            labelKey: 'periodicity_details_key',
            expanded: true
        };
        this.instructionMethodOptions = {
            group: this.formGroup,
            fcName: 'instructionMethod',
        };
        this.instructionTypeOptions = {
            group: this.formGroup,
            fcName: 'instructionType',
        };
        this.targetAccountListOptions = {
            labelKey: 'target_account_key',
            placeHolder: 'target_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.sweepingAndPoolingVO,
        };
        this.coveringAccountListOptions = {
            labelKey: 'covering_account_key',
            placeHolder: 'covering_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.sweepingAndPoolingVO,
        };
        this.receivingAccountListOptions = {
            labelKey: 'receiving_account_key',
            placeHolder: 'receiving_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.sweepingAndPoolingVO,
        };
        this.schedulerOptions = {
            fcName: 'psScheduler',
            group: this.formGroup,
            periodaicityInputCountOptions: {
                fcName: 'noOfPayments',
            },
            requestObject: this.sweepingAndPoolingVO,
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
            requestObject: this.sweepingAndPoolingVO,
            group: this.formGroup
        };
        this.showIsMinimumOrMax = false;
        this.hideDates = true;
        this.defaultFormat = 'MM/DD/YYYY';
        this.filterDate = {
            fromDate: {
                group: this.formGroup,
                fcName: 'filterFromDate',
                displayFormat: this.defaultFormat,
                placeHolder: 'from_date_key',
            },
            toDate: {
                group: this.formGroup,
                fcName: 'filterToDate',
                displayFormat: this.defaultFormat,
                placeHolder: 'to_date_key',
            }
        };
        this.toAccountComponent = {};
        this.showDate = false;
        this.showMinimumtoAccount = false;
        this.showReceivingAccount = false;
        this.showCoveringAccount = false;
        this.showsheduler = false;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        const navParams = this.navService.getAllParams();
        this.commonProv.copyObject(this.sweepingAndPoolingVO, (navParams === null || navParams === void 0 ? void 0 : navParams.ScreenVO) ? navParams.ScreenVO : navParams);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 0, true);
    }
    ngAfterViewInit() {
        var _a, _b, _c;
        if (this.stepperOptions.requestObject && this.stepperOptions.requestObject.isEditScreen === true) {
            this.commonProv.setValInsideNestedObj(this.instructionMethodOptions.fcName, this.sweepingAndPoolingVO.instructionMethodCode, this.stepperOptions.requestObject);
            this.commonProv.setValInsideNestedObj(this.instructionTypeOptions.fcName, this.sweepingAndPoolingVO.instructionTypeCode, this.stepperOptions.requestObject);
            if (this.sweepingAndPoolingVO.instructionTypeCode === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].INSTRUCTION_TYPE_MIN || this.sweepingAndPoolingVO.instructionTypeCode === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].INSTRUCTION_TYPE_AUTO) {
                this.commonProv.setValInsideNestedObj(this.coveringAccountListOptions.fcName, (_a = this.sweepingAndPoolingVO) === null || _a === void 0 ? void 0 : _a.toAccount, this.stepperOptions.requestObject);
            }
            else {
                this.commonProv.setValInsideNestedObj(this.receivingAccountListOptions.fcName, (_b = this.sweepingAndPoolingVO) === null || _b === void 0 ? void 0 : _b.toAccount, this.stepperOptions.requestObject);
            }
            this.commonProv.setValInsideNestedObj('toAccount_lookupKey', this.sweepingAndPoolingVO.toAccount, this.stepperOptions.requestObject);
            this.commonProv.setValInsideNestedObj(this.targetAccountListOptions.fcName, (_c = this.sweepingAndPoolingVO) === null || _c === void 0 ? void 0 : _c.targetAccAdditonalRef, this.stepperOptions.requestObject);
            this.commonProv.setValInsideNestedObj('fromAccount_lookupKey', this.sweepingAndPoolingVO.targetAccAdditonalRef, this.stepperOptions.requestObject);
        }
    }
    onFromAccountChange(fromAccount) {
        this.complexExchangeOptions.fromAmountOptions.currencyCode = fromAccount.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = fromAccount.currency;
        }, 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
        if (this.showReceivingAccount) {
            this.receivingAccountListOptions.accountNumber = fromAccount.accountNumber;
            this.toAccountRef.refreshAcounts(this.receivingAccountListOptions);
        }
        else if (this.showCoveringAccount) {
            this.coveringAccountListOptions.accountNumber = fromAccount.accountNumber;
            this.fromAccountRef.refreshAcounts(this.coveringAccountListOptions);
        }
        this.callCurrencyCombinationValidateService(fromAccount);
    }
    onToAccountChange(toAccount) {
        this.complexExchangeOptions.toAmountOptions.currencyCode = toAccount.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = toAccount.currency;
        }, 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
        if (this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName] == null ||
            this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName] == undefined)
            this.targetAccountListOptions.accountNumber = toAccount.accountNumber;
        this.targetAccountRef.refreshAcounts(this.targetAccountListOptions);
        this.callCurrencyCombinationValidateService(toAccount);
    }
    onChangeSchedule(value) {
        let stateDay;
        if (this.navService.getAllParams().ScreenVO === undefined) {
            if (value !== undefined) {
                if (value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SINGLE_FUTURE_DATE || value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].RECURRING_MONTHLY) {
                    stateDay = value.startDate.getDay() + 1;
                    if (value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SINGLE_FUTURE_DATE) {
                        this.sweepingAndPoolingVO['submitType'] = '4';
                    }
                    else {
                        stateDay = value.startDate.getDate();
                        this.sweepingAndPoolingVO['submitType'] = '5';
                    }
                }
                if (value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].RECURRING_WEEKLY) {
                    stateDay = value.startDate.getDay() + 1;
                    this.sweepingAndPoolingVO['submitType'] = '5';
                }
            }
            this.sweepingAndPoolingVO['day'] = stateDay;
        }
    }
    onInstructionChange(event) {
        var _a, _b, _c, _d;
        if (event != null && event !== undefined) {
            if (this.sweepingAndPoolingVO[this.coveringAccountListOptions.fcName] || this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName]) {
                (_a = this.targetAccountRef) === null || _a === void 0 ? void 0 : _a.reset();
                (_b = this.toAccountRef) === null || _b === void 0 ? void 0 : _b.reset();
                (_c = this.fromAccountRef) === null || _c === void 0 ? void 0 : _c.reset();
                (_d = this.exchangeRateRef) === null || _d === void 0 ? void 0 : _d.reset();
                this.targetAccountListOptions.accountNumber = null;
                this.coveringAccountListOptions.accountNumber = null;
                this.receivingAccountListOptions.accountNumber = null;
            }
            if (event.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].INSTRUCTION_TYPE_MIN || event.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].INSTRUCTION_TYPE_AUTO) {
                this.commonProv.copyObject(this.targetAccountListOptions, {
                    fromTo: 'to',
                }, false);
                if (this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName] !== undefined && this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName] != null) {
                    this.coveringAccountListOptions.accountNumber = this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName].accountNumber;
                }
                this.showCoveringAccount = true;
                this.showReceivingAccount = false;
                this.showIsMinimumOrMax = event.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].INSTRUCTION_TYPE_MIN;
            }
            else {
                this.commonProv.copyObject(this.targetAccountListOptions, {
                    fromTo: 'from',
                }, false);
                if (this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName] !== undefined
                    && this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName] != null) {
                    this.receivingAccountListOptions.accountNumber = this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName].accountNumber;
                }
                this.showReceivingAccount = true;
                this.showCoveringAccount = false;
                this.showIsMinimumOrMax = true;
            }
        }
    }
    onInstructionMethodChange(event) {
        if (event.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].INSTRUCTION_METHOD_OFFLINE_CODE) {
            this.stepperOptions.numberOfSteps = 2;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 1, true);
            this.showDate = false;
            this.showsheduler = true;
            this.schedulerOptions.requestObject = this.sweepingAndPoolingVO;
        }
        else {
            this.showDate = true;
            this.stepperOptions.numberOfSteps = 1;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 0, true);
            this.showsheduler = false;
        }
    }
    //added by Marina-Jira-AZDB-252; to check currency combination validation
    callCurrencyCombinationValidateService(account) {
        if (account[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].VALIDATE_COMBINATION]) {
            //check if both from account and to account are defined to avoid unnecessary service calls
            if (this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName]
                && (this.sweepingAndPoolingVO[this.receivingAccountListOptions.fcName] || this.sweepingAndPoolingVO[this.coveringAccountListOptions.fcName])) {
                let validationRequest = {
                    fromCurrency: this.sweepingAndPoolingVO[this.targetAccountListOptions.fcName].currency,
                    listOfAffectedFields: [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName],
                    screenVO: this.sweepingAndPoolingVO,
                    listOfAccounts: [this.targetAccountRef]
                };
                //in case of receiving account, add receiving account data to request
                if (this.showReceivingAccount) {
                    validationRequest.toCurrency = this.sweepingAndPoolingVO[this.receivingAccountListOptions.fcName].currency;
                    validationRequest.listOfAffectedFields.push(this.receivingAccountListOptions.fcName);
                    validationRequest.listOfAccounts.push(this.toAccountRef);
                }
                //else, add covering account data to request
                else {
                    validationRequest.toCurrency = this.sweepingAndPoolingVO[this.coveringAccountListOptions.fcName].currency;
                    validationRequest.listOfAffectedFields.push(this.coveringAccountListOptions.fcName);
                    validationRequest.listOfAccounts.push(this.fromAccountRef);
                }
                //check that both from and to currencies are defined before calling validation service
                if (validationRequest.fromCurrency && validationRequest.toCurrency) {
                    if (this.exchangeRateRef) {
                        validationRequest.listOfAccounts.push(this.exchangeRateRef);
                    }
                    this.omniPull.validateCurrencyCombination(validationRequest);
                }
            }
            //Added by ghada, AZDB-1666 for fixing the issue of having from date and to date controls being invalid on submit although they 're not exist on the screen
            const fromDateCust = this.commonProv.getElementValidations(this.filterDate.fromDate.fcName);
            const toDateCust = this.commonProv.getElementValidations(this.filterDate.toDate.fcName);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.filterDate.fromDate.fcName], this.showDate && fromDateCust.IS_MANDATORY);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.filterDate.toDate.fcName], this.showDate && toDateCust.IS_MANDATORY);
        }
    }
};
SweepingAndPoolingPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"] }
];
SweepingAndPoolingPage.propDecorators = {
    exchangeChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexExchangeComponent"],] }],
    toAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['toAccountRef',] }],
    fromAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fromAccountRef',] }],
    targetAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['targetAccountRef',] }],
    exchangeRateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['exchangeRateRef',] }]
};
SweepingAndPoolingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sweeping-and-pooling',
        template: _raw_loader_sweeping_and_pooling_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sweeping_and_pooling_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]])
], SweepingAndPoolingPage);



/***/ }),

/***/ "yN2N":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sweeping-and-pooling/sweeping-and-pooling.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelSweepingOptions\" id=\"sweeping_panel\">\n      <ps-lov-instruction-method [options]=\"instructionMethodOptions\" (onPsChange)=\"onInstructionMethodChange($event)\">\n      </ps-lov-instruction-method>\n\n      <ps-lov-instruction-type [options]=\"instructionTypeOptions\" (onPsChange)=\"onInstructionChange($event)\">\n      </ps-lov-instruction-type>\n\n        <ng-container *ngIf=\"showCoveringAccount\">\n          <ps-lookup-own-accounts  #targetAccountRef id=\"'transferFrom'+ id\" [options]=\"targetAccountListOptions\"\n          (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n          <ps-lookup-own-accounts  id=\"'transferTo'+ id\" #fromAccountRef\n          [options]=\"coveringAccountListOptions\" (onAccountChange)=\"onToAccountChange($event)\">\n        </ps-lookup-own-accounts>\n        </ng-container>\n        <ng-container *ngIf=\"showReceivingAccount\">\n          <ps-lookup-own-accounts  #targetAccountRef id=\"'transferFrom'+ id\" [options]=\"targetAccountListOptions\"\n          (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n          <ps-lookup-own-accounts id=\"'transferTo'+ id\" #toAccountRef\n          [options]=\"receivingAccountListOptions\" (onAccountChange)=\"onToAccountChange($event)\">\n        </ps-lookup-own-accounts>\n\n        </ng-container>\n\n    <ps-complex-exchange *ngIf=\"showIsMinimumOrMax\" #exchangeRateRef [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n      <ps-complex-date-filter id=\"filterDate\" [options]=\"filterDate\" *ngIf=\"showDate\"></ps-complex-date-filter>\n\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"panelPeriodicityOptions\" id=\"periodicity_panel\">\n      <ps-complex-recurring-scheduler *ngIf=\"showsheduler\" [options]=\"schedulerOptions\"\n        (onPsChange)=\"onChangeSchedule($event)\">\n      </ps-complex-recurring-scheduler>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=100-es2015.js.map