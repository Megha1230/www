(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "LWj+":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-opening/account-opening.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-content > -->\n\n<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"account_opening_panel_1\">\n\n      <ps-input-display-only *ngIf=\"enableCifBranch\" id=\"'accountCifBranch' + id\" [options]=\"branchLabelOptions\">\n\n      </ps-input-display-only>\n\n\n      <ps-dropdown-account-types id=\"'accountType' + id\" [options]=\"accountTypeOptions\"\n        (onPsChange)='onAccountTypeChanged($event)'>\n      </ps-dropdown-account-types>\n\n      <ps-select-toggle [id]=\"'addOpeningBalance'\" [options]=\"openingBalanceToggleOptions\"\n        (onPsChange)=\"onAddOpeningBalanceChange($event)\">\n      </ps-select-toggle>\n\n      <ps-dropdown-currencies id=\"'currency' + id\" #currenciesRef [options]=\"currencyOptions\"\n        (onPsChange)=\"onCurrencyChanged($event)\">\n      </ps-dropdown-currencies>\n\n      <ng-container *ngIf=\"addOpeningBal\">\n\n        <ps-input-display-only id=\"MinimumOpeningBalance\" [options]=\"minOpeningBalOptions\">\n        </ps-input-display-only>\n\n        <ps-lookup-own-accounts id=\"'fromAccount'\" #fromAccountRef [options]=\"fromAccOptions\"\n          (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n\n        <ps-complex-exchange id=\"exchangeComponent\" #exchangeRef\n          [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n      </ng-container>\n\n      <!-- \n              <ps-input-varchar id=\"'accountName' + id\" [options]=\"accountNameOptions\"></ps-input-varchar>\n             -->\n      <!-- </div> -->\n\n      <ps-select-toggle *ngIf=\"showProfitToggle\" [id]=\"'accprofitFMid'\" [options]=\"toggleProfitOptions\"\n        class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n\n      <ps-lookup-own-accounts *ngIf=\"showProfitAccount\" id=\"profitAccount\"\n        [options]=\"profitAccOptions\"></ps-lookup-own-accounts>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"account_opening_panel_2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n\n</ps-template-stepper>\n<!-- </ion-content> -->");

/***/ }),

/***/ "QmEf":
/*!***************************************************************!*\
  !*** ./src/app/pages/account-opening/account-opening.page.ts ***!
  \***************************************************************/
/*! exports provided: AccountOpeningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOpeningPage", function() { return AccountOpeningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_opening_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-opening.page.html */ "LWj+");
/* harmony import */ var _account_opening_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-opening.page.scss */ "Xaki");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inputmask */ "I9E9");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");



















let AccountOpeningPage = class AccountOpeningPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_18__["OmniBasePage"] {
    constructor(commonProv, loggerP, eventEmitterService, omniPull, commonService, navService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.eventEmitterService = eventEmitterService;
        this.omniPull = omniPull;
        this.commonService = commonService;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.defaultVO = {};
        this.mapAtmBranchesOptions = {
            group: this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
                labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].RequestBranch,
            requestVO: this.defaultVO
        };
        this.mask = {
            groupSeparator: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].THOUSANDS_SEPARATOR,
            alias: 'currency',
            autoGroup: true,
            placeholder: '0',
            greedy: false,
            digits: 2,
            radixPoint: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].DECIMAL_SEPARATOR
        };
        this.stepperOptions = {
            stepperName: 'acc_open_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['acc_open_step1', 'acc_open_step2'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
                group: this.formGroup
            },
            requestObject: this.defaultVO
        };
        this.accountTypeOptions = {
            allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AllowedGeneralAccountTypes,
            accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACC_TYPE_D,
            group: this.formGroup,
            fcName: 'accountTypes'
        };
        this.openingBalanceToggleOptions = {
            labelKey: 'add_opening_balance_key',
            placeHolder: 'add_opening_balance_key',
            group: this.formGroup,
            fcName: 'addOpeningBalance',
            psClass: 'toggleColor'
        };
        this.minOpeningBalOptions = {
            placeHolder: 'minimum_opening_balance_key',
            labelKey: 'minimum_opening_balance_key',
            group: this.formGroup,
            fcName: 'minOpenBalance'
        };
        this.fromAccOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.defaultVO
        };
        this.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'currency_key',
                    labelKey: 'exchange_currency_key',
                    fcName: 'fromCurrency',
                    group: this.formGroup,
                    revertToOldValue: false
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
                    fcName: 'toCurrency',
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
            requestObject: this.defaultVO,
            group: this.formGroup
        };
        this.accountNameOptions = {
            labelKey: 'name_key',
            placeHolder: 'name_key',
            group: this.formGroup,
            fcName: 'accountName'
        };
        this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'select_currency_key',
            group: this.formGroup,
            fcName: 'currency',
            revertToOldValue: false
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'account_details_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
        };
        this.branchLabelOptions = {
            placeHolder: 'user_branch_key',
            labelKey: 'branch_key',
            group: this.formGroup,
            fcName: 'branch_type'
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup,
            branchesOptions: {
                placeHolder: 'acc_opening_branch_key',
                labelKey: 'label_acc_opening_branch_key',
                group: this.formGroup,
                fcName: 'default_branch'
            }
        };
        this.toggleProfitOptions = {
            labelKey: 'post_profit_to_same_account_key',
            placeHolder: 'post_profit_to_same_account_key',
            group: this.formGroup,
            fcName: 'renewWithSame',
            psClass: 'toggleColor',
        };
        this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.defaultVO
        };
        this.selectedBranchObj = {};
        this.addOpeningBal = false;
        this.showProfitToggle = false;
        this.showProfitAccount = false;
        this.fetchParameter();
    }
    ngOnInit() {
        var _a;
        super.init();
        this.baseFormGroup = this.formGroup;
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
        const defVal = (_a = this.commonProv.getElementValidations(this.openingBalanceToggleOptions.fcName)) === null || _a === void 0 ? void 0 : _a.DEFAULT_VALUE;
        if (defVal) {
            try {
                const parsed = JSON.parse(defVal);
                if (parsed.value === true) {
                    this.addOpeningBal = true;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.minOpeningBalOptions.fcName], 1);
                }
            }
            catch (e) {
                console.warn("Invalid DEFAULT_VALUE:", defVal, e);
            }
        }
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.openingBalanceToggleOptions.fcName], 0);
    }
    onSelectBranch($event) {
        if ($event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.defaultVO);
        }
    }
    loadBranch() {
        try {
            const paramData = {
                branchesIdList: this.cifInfo.cifBranch ? this.cifInfo.cifBranch : ''
            };
            this.omniPull.returnBranchesList(paramData).then((result) => {
                if (result && result.gridModel != null && result.gridModel.length > 0) {
                    this.formGroup.controls[this.branchLabelOptions.fcName].setValue(this.cifInfo.cifBranch ? result.gridModel[0].longDesc : '');
                }
                else {
                    this.loggerP.warn(result, 'empty response');
                }
            }).catch((error) => { });
        }
        catch (error) { }
    }
    get getBranch() {
        return this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : 1;
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.omniPull.getParamValOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].RequestBranch, _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].AllowedBranches).then((result) => {
                var _a;
                if (result !== -1 && result.RequestBranch == null || result.RequestBranch === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].cifBranch) {
                    this.enableCifBranch = true;
                    this.commonService.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: this.mapAtmBranchesOptions.fcName },
                        { fcName: 'account_opening_panel_2' }], true);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchLabelOptions.fcName], 1);
                    //set user default branch code and show user branch in label 
                    this.commonProv.setValInsideNestedObj('branchCode', ((_a = this.cifInfo.customerInfoCO) === null || _a === void 0 ? void 0 : _a.branchCode) || "", this.formGroup.controls['formData'].value);
                    const aBranch = result.allowedBranches ? result.allowedBranches.toString().split(',') : result.AllAllowedBranches.split(',');
                    if (result.RequestBranch === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].cifBranch && aBranch.toString().indexOf(this.cifInfo.cifBranch.toString()) === -1) {
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].presentFatalAlert('Cannot_open_General_Account_in_your_CIF_Branch._Please_contact_our_call_center_key');
                        this.navService.navigateBackward();
                    }
                    else {
                        setTimeout(() => {
                            this.commonProv.setValInsideNestedObj(this.branchLabelOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.defaultVO);
                        }, 300);
                    }
                }
                else {
                    this.enableCifBranch = false;
                    this.commonService.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] },
                        { fcName: this.mapAtmBranchesOptions.fcName, mandatory: 1 },
                        { fcName: 'account_opening_panel_2' }]);
                    //hide banch label
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchLabelOptions.fcName], 0);
                }
            }).catch((error) => {
            });
        });
    }
    onAddOpeningBalanceChange(event) {
        if (event && event !== undefined) {
            if (event.newValue === true || event.newValue === "true") {
                this.addOpeningBal = true;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
            }
            else {
                this.addOpeningBal = false;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 0);
            }
        }
    }
    onFromAccountCombinationValidation(fromAccount) {
        if (fromAccount && fromAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].VALIDATE_COMBINATION]) {
            if (this.defaultVO[this.currencyOptions.fcName] instanceof Object) {
                this.validateCurrencyCombination();
            }
        }
    }
    onFromAccountChange(fromAccount) {
        this.onFromAccountCombinationValidation(fromAccount);
        this.complexExchangeOptions.fromAmountOptions.currency = fromAccount.currencyBriefNameEnglish;
        this.complexExchangeOptions.fromAmountOptions.currencyCode = fromAccount.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = fromAccount.currency;
        }, 1);
    }
    onCurrencyChanged(currency) {
        this.onCurrencyCombinationValidation();
        this.complexExchangeOptions.toAmountOptions.currency = currency.selectedObj.briefDescription;
        this.complexExchangeOptions.toAmountOptions.currencyCode = currency.itemValue;
        this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = currency.itemValue;
    }
    onAccountTypeChanged(event) {
        var _a;
        if (event) {
            if (event.minOpenBal) {
                this.commonProv.setValInsideNestedObj(this.minOpeningBalOptions.fcName, ((_a = this.cifInfo.companySettingsCO) === null || _a === void 0 ? void 0 : _a.briefDesc) + ' ' + inputmask__WEBPACK_IMPORTED_MODULE_5___default.a.format(event.minOpenBal, this.mask).toString(), this.defaultVO);
            }
            const profitToggleCust = this.commonProv.getElementValidations(this.toggleProfitOptions.fcName);
            const profitAccountCust = this.commonProv.getElementValidations(this.profitAccOptions.fcName);
            if (event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_DEPOSITE_ACCOUNT || event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_PROFIT_ACCOUNT) {
                this.showProfitToggle = (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].custMode || profitToggleCust.IS_VISIBLE) ? true : false;
                this.showProfitAccount = (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].custMode || profitAccountCust.IS_VISIBLE) && event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_PROFIT_ACCOUNT;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.toggleProfitOptions.fcName], 1);
                this.commonProv.setValInsideNestedObj(this.toggleProfitOptions.fcName, event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_DEPOSITE_ACCOUNT, this.defaultVO);
            }
            else {
                this.showProfitToggle = this.showProfitAccount = false;
            }
            //Added by Marina AZDB-1208; to get allowed currenies for this account type only
            if (event.genLedgerId) {
                this.currencyOptions.accountTypesGLIds = event.genLedgerId;
                this.currenciesRef.loadCurrencies();
            }
        }
    }
    onCurrencyCombinationValidation() {
        if (this.defaultVO[this.fromAccOptions.fcName] instanceof Object) { //added by MichelHabib, tp#1583589 in order to check if the fromAccount is an object to be able to make the validation(in case of checker user on initialization of the screen fromAccount has a string value)
            this.validateCurrencyCombination();
        }
    }
    validateCurrencyCombination() {
        let validationRequest = {
            fromCurrency: +this.defaultVO[this.fromAccOptions.fcName].currency,
            listOfAffectedFields: [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.currencyOptions.fcName],
            screenVO: this.defaultVO,
            listOfAccounts: [this.fromAccountRef, this.exchangeRef],
            toCurrency: +this.defaultVO[this.currencyOptions.fcName].itemValue,
        };
        this.omniPull.validateCurrencyCombination(validationRequest);
    }
};
AccountOpeningPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"] }
];
AccountOpeningPage.propDecorators = {
    fromAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fromAccountRef',] }],
    exchangeRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['exchangeRef',] }],
    currenciesRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['currenciesRef',] }]
};
AccountOpeningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'account-opening',
        template: _raw_loader_account_opening_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_opening_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"],
        src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"]])
], AccountOpeningPage);



/***/ }),

/***/ "Xaki":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-opening/account-opening.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW9wZW5pbmcucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=76-es2015.js.map