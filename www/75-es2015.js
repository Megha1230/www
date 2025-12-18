(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "5zfx":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AccountOpeningFixedMaturityAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOpeningFixedMaturityAccountPage", function() { return AccountOpeningFixedMaturityAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_opening_fixed_maturity_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-opening-fixed-maturity-account.page.html */ "P6WB");
/* harmony import */ var _account_opening_fixed_maturity_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-opening-fixed-maturity-account.page.scss */ "sk4y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");




















let AccountOpeningFixedMaturityAccountPage = class AccountOpeningFixedMaturityAccountPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_19__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, datePipe, eventEmitterService, commonService, navService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.datePipe = datePipe;
        this.eventEmitterService = eventEmitterService;
        this.commonService = commonService;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.defaultVO = {};
        this.showstepper = false;
        this.stepperOptions = {
            stepperName: 'fixed_mat_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['acc_open_fixed_step1', 'acc_open_fixed_step2'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
                group: this.formGroup
            },
            requestObject: this.defaultVO
        };
        this.mainOptions = {
            toggleOptions: {
                labelKey: 'renew_key',
                placeHolder: 'renew_key',
                group: this.formGroup,
                fcName: 'renew',
                psClass: 'toggleColor',
            },
            toggleProfitOptions: {
                labelKey: 'post_profit_to_same_account_key',
                placeHolder: 'post_profit_to_same_account_key',
                group: this.formGroup,
                fcName: 'renewWithSame',
                psClass: 'toggleColor',
            }
        };
        this.lblOptions = {
            labelKey: 'branch_key'
        };
        this.lblPeriodicityOptions = {
            labelKey: 'Term: 5 Years'
        };
        this.cifBranchOtpions = {};
        this.accountTypeOptions = {
            allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
            accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACC_TYPE_T,
            group: this.formGroup,
            fcName: 'accountTypes'
        };
        this.amountOptions = {
            labelKey: 'amount_key',
            placeHolder: '0',
            group: this.formGroup,
            fcName: 'amount'
        };
        this.accountNameOptions = {
            labelKey: 'name_key',
            placeHolder: 'name_key',
            group: this.formGroup,
            fcName: 'accountName'
        };
        this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'currency',
            group: this.formGroup,
            fcName: 'currency'
        };
        this.lbMaturityDateOptions = {
            labelKey: 'maturity_date_key',
            placeHolder: 'maturity_date_key'
        };
        this.lbMaturityTransferOptions = {
            labelKey: 'maturity_transfer_key',
        };
        this.lblProfitOptions = {
            labelKey: 'profit_account_key',
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
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'maturity_instructions_key',
            iconName: 'document'
        };
        this.branchOptions = {
            placeHolder: 'get cif branch from session',
            labelKey: 'branch_key',
            group: this.formGroup,
            fcName: 'branch'
        };
        this.profitRateOptions = {
            placeHolder: 'profit_rate_key',
            labelKey: 'profit_rate_key',
            group: this.formGroup,
            fcName: 'profitRate'
        };
        this.containerItemOptions1 = {
            hideImageAndIconIfNotPresent: true
        };
        this.containerItemOptions = {
            hideImageAndIconIfNotPresent: true
        };
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.accountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            currency: 'USD',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.defaultVO
        };
        this.maturityTransferOptions = {
            labelKey: 'on_maturity_transfer_balance_to_key',
            placeHolder: 'select_maturity_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'maturityAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.defaultVO
        };
        this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: this.defaultVO
        };
        this.lblAmountOptions = {
            labelKey: 'Renewal Instructions: New Balance Renewed in same Account'
        };
        this.termsAndConditionsOptions = {
            checkBoxOptions: {
                group: this.formGroup,
                fcName: 'checkboxConfirm',
                labelKey: 'i_agree_key'
            },
            htmlViewerOptions: {
                fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonBusinessSettings"].accountOpeningTermsAndConditionsFileName
            }
        };
        this.inputAmountOptions = {
            labelKey: 'Amount',
            placeHolder: 'enter_your_amount_key',
            fcName: 'inputAmount',
            group: this.formGroup,
            type: 'amount',
            decimalPoints: 3
        };
        // start
        this.lbMaturityTransferToggleOptions = {
            labelKey: 'renew_account_on_maturity_key',
        };
        this.maturityDateOptions = {
            labelKey: this.datePipe.transform(new Date(), 'dd-MM-yyyy')
        };
        this.lblAccountListOptions = {
            labelKey: 'account_list_key',
        };
        // end
        this.psComplexAmountOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'currency'
            },
            amountOptions: {
                labelKey: 'opening_balance_key',
                placeHolder: 'enter_opening_balance_key',
                fcName: 'inputAmount',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3
            },
            requestObject: this.defaultVO,
            showLimitLabel: false
        };
        this.accountTypesOptions = {
            accountTypesOptions: {
                allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
                accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACC_TYPE_T,
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
            requestObject: this.defaultVO
        };
        this.instructMsgLabelOptions = {
            labelKey: 'account_type_informative_msg_key',
            fcName: 'instrcutions'
        };
        this.minimumBalErr = {
            labelKey: 'the_entered_amount_is_below_minimum_range_key',
            fcName: 'minimumBalErrLbl'
        };
        this.actionImageOptions = {
            imageName: 'account_Deactivation_Remark_icon.png'
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup,
            branchesOptions: {
                placeHolder: 'term_opening_branch_key',
                labelKey: 'label_term_opening_branch_key',
                group: this.formGroup,
                fcName: 'default_branch'
            }
        };
        this.enablePeriodicity = false;
        this.enableCss = false;
        this.showAccTypeInformativeLabel = false;
        this.showFromAccount = false;
        this.balanceAmount = '';
        this.showBalErr = false;
        this.fetchParameter();
    }
    ngOnInit() {
        super.ngOnInit();
        this.baseFormGroup = this.formGroup;
        // this.cd.detectChanges();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.maturityTransferOptions.fcName, this.profitAccOptions.fcName], 0);
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].USERINFO);
        // this.stepperOptions.submitOptions.extraParams = {branch : this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : 1};
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
            parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AcntOpenBranchesMatAcc,
            requestVO: this.defaultVO
        };
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.psComplexAmountOptions.currenciesOptions.fcName, this.psComplexAmountOptions.amountOptions.fcName], 1);
    }
    onSelectBranch($event) {
        if ($event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.defaultVO);
        }
    }
    onRenewContractToggleChange(values) {
        values.newValue = (typeof values.newValue === 'string') ? values.newValue === 'true' : values.newValue; //Modified by ghada, AZDB-4868 to handel the case oh having component's value sent as a string (from service)
        const toggleCust = this.commonProv.getElementValidations(this.mainOptions.toggleOptions.fcName);
        if (toggleCust.IS_VISIBLE) {
            if (values.newValue == false) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.maturityTransferOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.mainOptions.toggleProfitOptions.fcName, this.profitAccOptions.fcName], 0);
                this.mainOptions.toggleProfitOptions.disablePreview = true;
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.maturityTransferOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.mainOptions.toggleProfitOptions.fcName], 1);
                this.onProfitChange({ newValue: this.defaultVO.renewWithSame });
                this.mainOptions.toggleProfitOptions.disablePreview = false;
                this.formGroup.controls[this.maturityTransferOptions.fcName].reset();
            }
        }
    }
    onProfitChange(values1) {
        values1.newValue = (typeof values1.newValue === 'string') ? values1.newValue === 'true' : values1.newValue;
        const toggleCust = this.commonProv.getElementValidations(this.mainOptions.toggleProfitOptions.fcName);
        if (toggleCust.IS_VISIBLE) {
            if (values1.newValue == false) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.profitAccOptions.fcName], 1);
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.profitAccOptions.fcName], 0);
                this.formGroup.controls[this.profitAccOptions.fcName].reset();
            }
        }
    }
    onChangeEvent(values) {
        if (values.newValue === false) {
            this.enablePeriodicity = true;
        }
        else {
            this.enablePeriodicity = false;
        }
    }
    onChangeFromAccount(values) {
        if (values.newValue === false) {
            this.enableCss = true;
        }
        else {
            this.enableCss = false;
        }
    }
    ngAfterViewInit() {
        var _a, _b;
        const sysParamScreenDispList = this.commonProv.initialScreenDisplayParams.get(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].oper_ID) ? this.commonProv.initialScreenDisplayParams.get(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].oper_ID) : new Map();
        if (((_a = sysParamScreenDispList.get(this.mainOptions.toggleOptions.fcName)) === null || _a === void 0 ? void 0 : _a.DEFAULT_VALUE) === null || ((_b = sysParamScreenDispList.get(this.mainOptions.toggleOptions.fcName)) === null || _b === void 0 ? void 0 : _b.DEFAULT_VALUE) === undefined) {
            this.defaultVO[this.mainOptions.toggleOptions.fcName] = true;
        }
        // this.loadBranch();
    }
    loadBranch() {
        try {
            const paramData = {
                branchesIdList: this.cifInfo.cifBranch ? this.cifInfo.cifBranch : ''
            };
            this.omniPull.returnBranchesList(paramData).then((result) => {
                if (result && result.gridModel != null && result.gridModel.length > 0) {
                    this.formGroup.controls[this.branchOptions.fcName].setValue(this.cifInfo.cifBranch ? result.gridModel[0].longDesc : '');
                }
                else {
                    this.loggerP.warn(result, 'empty response');
                }
            }).catch((error) => { });
        }
        catch (error) { }
    }
    onChangeItem(values) {
        if (values) {
            this.showAccTypeInformativeLabel = true;
            this.defaultVO[this.profitRateOptions.fcName] = '';
            if (values.briefDesc) {
                this.loadProfitRate();
            }
            else {
                this.profitRate = '';
            }
            //Added by Marina AZDB-1208; to get allowed currenies for specific account type only
            if (values.genLedgerId) {
                this.psComplexAmountOptions.currenciesOptions.accountTypesGLIds = values.genLedgerId;
                this.amountRef.reloadCurrencies().then((response) => {
                    //Makki: Jira #5247, Wait for the new currencies to be loaded before validating minimum balance to avoid validating on the old currencies list.          
                    this.ValidateMinimumBal();
                }).catch(error => { });
            }
        }
        else {
            this.showAccTypeInformativeLabel = false;
        }
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AcntOpenBranchesMatAcc, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AllowedBranches, src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].AllowedFixedMaturityAccountsTypes, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AllowedCurrencies, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AllAllowedBranches).catch((error) => { this.showstepper = true; this.showFromAccount = true; });
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.selectBranchOptions.branchesOptions.fcName], 0);
            if (result !== -1 && result.AcntOpenBranchesMatAcc === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].cifBranch) {
                this.enableCifBranch = true;
                this.commonService.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: this.mapAtmBranchesOptions.fcName },
                    { fcName: 'acc_open_fix_mat_acc_panel2' }], true);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchOptions.fcName], 1);
                this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : '' }, false, true);
                this.showstepper = true;
                const aBranch = result.allowedBranches ? result.allowedBranches.toString().split(',') : result.AllAllowedBranches.split(',');
                if (result.AcntOpenBranchesMatAcc === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].cifBranch && aBranch.toString().indexOf(this.cifInfo.cifBranch.toString()) === -1) {
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__["CommonUtils"].presentFatalAlert('Cannot_open_Term_Account_in_your_CIF_Branch._Please_contact_our_call_center_key');
                    this.navService.navigateBackward();
                }
                else {
                    setTimeout(() => {
                        this.defaultVO[this.branchOptions.fcName] = this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '';
                        // this.formGroup.controls[this.branchOptions.fcName].disable();
                    }, 300);
                }
            }
            else {
                this.enableCifBranch = false;
                this.commonService.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: this.mapAtmBranchesOptions.fcName, mandatory: 1 },
                    { fcName: 'acc_open_fix_mat_acc_panel2' }]);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchOptions.fcName], 0);
            }
            if (result !== -1 && result.AllowedAccountType) {
                this.commonProv.copyObject(this.accountListOptions.accountAllowedTypes, result.AllowedAccountType.split(','), false, true);
            }
            if (result !== -1 && result.AllowedCurrencies) {
                this.commonProv.copyObject(this.accountListOptions.accountAllowedCurrencies, result.AllowedCurrencies.split(','), false, true);
            }
            setTimeout(() => {
                this.showFromAccount = true;
            }, 300);
        });
    }
    loadProfitRate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.defaultVO.currency && typeof this.defaultVO.currency == 'object' && this.defaultVO.inputAmount && this.defaultVO.accountTypes && typeof this.defaultVO.accountTypes == 'object') {
                const requestParams = {
                    currency: this.defaultVO.currency,
                    amount: this.defaultVO.inputAmount,
                    accountType: this.defaultVO.accountTypes
                };
                const result = yield this.omniPull.returnProfitRate(requestParams).catch(error => {
                    this.commonProv.logger.error('Error: while fetcing data from returnProfitRate  :', error);
                });
                if (result && result.gridModel && result.gridModel.length > 0) {
                    this.profitRate = result.gridModel[0].profitRate;
                    setTimeout(() => {
                        this.defaultVO[this.profitRateOptions.fcName] = this.profitRate.toString();
                    }, 1);
                }
                else {
                    this.defaultVO[this.profitRateOptions.fcName] = '';
                    this.profitRate = '';
                }
            }
        });
    }
    onBalancAmountChange(balanceAmount) {
        if (balanceAmount.amount < 0) {
            this.commonProv.setValInsideNestedObj(this.psComplexAmountOptions.amountOptions.fcName, null, this.defaultVO);
        }
        this.defaultVO[this.profitRateOptions.fcName] = '';
        this.loadProfitRate();
        this.ValidateMinimumBal(balanceAmount.amount);
    }
    onCurrencyChange(currency) {
        this.callCurrencyCombinationValidateService();
        this.loadProfitRate();
        this.ValidateMinimumBal();
    }
    onFromAccountChange(fromAccount) {
        if (fromAccount && fromAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].VALIDATE_COMBINATION]) {
            this.callCurrencyCombinationValidateService();
        }
    }
    ValidateMinimumBal(userInputAmount) {
        var _a, _b, _c, _d;
        //Skip validation of minimum balance in form is readonly (e.g. Checker)
        let operCustomization = this.commonProv.returnOperCustomization();
        if (((_a = operCustomization.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].FORM_READONLY)) === null || _a === void 0 ? void 0 : _a.IS_READONLY) === 1) {
            return;
        }
        const selectedCurrency = (_b = this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName]) === null || _b === void 0 ? void 0 : _b.itemValue;
        const selectedAccountTypeObj = (_c = this.defaultVO[this.accountTypesOptions.accountTypesOptions.fcName]) === null || _c === void 0 ? void 0 : _c.selectedObj;
        if (selectedAccountTypeObj) {
            if (!((_d = selectedAccountTypeObj.allowedCurrency) === null || _d === void 0 ? void 0 : _d.some(curr => curr.currencyCode == selectedCurrency))) {
                this.setMinmumAmount(userInputAmount, selectedAccountTypeObj.minimumOpeningBalance);
            }
            else {
                const currencyObj = selectedAccountTypeObj.allowedCurrency.find(curr => curr.currencyCode == selectedCurrency);
                this.setMinmumAmount(userInputAmount, currencyObj.minimumBalance);
            }
        }
    }
    setMinmumAmount(enteredAmount, minimumAmount) {
        if (minimumAmount) {
            if (!enteredAmount || (enteredAmount && enteredAmount < minimumAmount)) {
                this.commonProv.setValInsideNestedObj(this.psComplexAmountOptions.amountOptions.fcName, minimumAmount, this.stepperOptions.requestObject); //Jira #5247 Probably set the value using setValInsideNestedObj
                const inputElement = document.querySelector(`[psfcname="${this.psComplexAmountOptions.amountOptions.fcName}"]`);
                if (inputElement) {
                    //Jira #5247 Delay the force emit of focusout till the value is probably set accross all framework
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(500).subscribe(() => {
                        const focusOutEvent = new FocusEvent('focusout', { bubbles: true, relatedTarget: inputElement });
                        inputElement.dispatchEvent(focusOutEvent);
                    });
                }
            }
            this.showBalErr = enteredAmount < minimumAmount;
        }
    }
    callCurrencyCombinationValidateService() {
        var _a;
        if (((_a = this.defaultVO[this.accountListOptions.fcName]) === null || _a === void 0 ? void 0 : _a.currency) && this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName]) {
            let validationRequest = {
                fromCurrency: +this.defaultVO[this.accountListOptions.fcName].currency,
                listOfAffectedFields: [this.psComplexAmountOptions.currenciesOptions.fcName],
                screenVO: this.defaultVO,
                listOfAccounts: [this.fromAccountRef],
                toCurrency: +this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName].itemValue || this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName]
            };
            this.omniPull.validateCurrencyCombination(validationRequest);
        }
    }
};
AccountOpeningFixedMaturityAccountPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_18__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__["PsNavigatorService"] }
];
AccountOpeningFixedMaturityAccountPage.propDecorators = {
    fromAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['fromAccountRef',] }],
    amountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['amountRef',] }]
};
AccountOpeningFixedMaturityAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'account-opening-fixed-maturity-account',
        template: _raw_loader_account_opening_fixed_maturity_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_opening_fixed_maturity_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_18__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__["PsNavigatorService"]])
], AccountOpeningFixedMaturityAccountPage);



/***/ }),

/***/ "P6WB":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.page.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"acc_open_fix_mat_acc_panel1\">\n\n\n      <ps-input-display-only *ngIf=\"enableCifBranch\" id=\"'accountCifBranch' + id\" [options]=\"branchOptions\">\n\n      </ps-input-display-only>\n\n\n      <ps-complex-account-types [options]=\"accountTypesOptions\" (onPsChange)='onChangeItem($event)'>\n      </ps-complex-account-types>\n\n\n      <ps-label-input *ngIf=\"enablePeriodicity\" [options]=\"lblPeriodicityOptions\"></ps-label-input>\n\n\n      <ps-complex-amount #amountRef [options]=\"psComplexAmountOptions\" (onAmountChanged)=\"onBalancAmountChange($event)\"\n        (onCurrencyChange)=\"onCurrencyChange($event)\"></ps-complex-amount>\n      <ps-label *ngIf=\"showBalErr\" class=\"validation-message\" [options]=\"minimumBalErr\"></ps-label>\n\n\n\n      <!-- <ps-label [options]=\"{labelKey: 'profit_rate_key'}\"></ps-label> : <span>{{profitRate}}</span> -->\n      <ps-input-display-only *ngIf=\"profitRate\" id=\"'profitRate' + id\" [options]=\"profitRateOptions\">\n      </ps-input-display-only>\n\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountListOptions\" #fromAccountRef\n        (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n\n\n\n      <ps-select-toggle [id]=\"'accOpenFMid'\" [options]=\"mainOptions.toggleOptions\"\n        (onPsChange)=\"onRenewContractToggleChange($event)\" class=\"ps-toggle-acc-open fixed-maturity-account-toggle\">\n      </ps-select-toggle>\n\n\n      <ps-lookup-own-accounts id=\"'maturitrytransfer'+ id\" [options]=\"maturityTransferOptions\">\n      </ps-lookup-own-accounts>\n\n\n      <ps-select-toggle [id]=\"'accprofitFMid'\" [options]=\"mainOptions.toggleProfitOptions\"\n        (onPsChange)=\"onProfitChange($event)\" class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n\n\n      <ps-lookup-own-accounts id=\"'profitAccount'+ id\" [options]=\"profitAccOptions\"></ps-lookup-own-accounts>\n\n      <ps-label *ngIf=\"showAccTypeInformativeLabel\" class=\"text-warinsg-account-dactivation\"\n        [options]=\"instructMsgLabelOptions\"></ps-label>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"acc_open_fix_mat_acc_panel2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n\n</ps-template-stepper>");

/***/ }),

/***/ "sk4y":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.page.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW9wZW5pbmctZml4ZWQtbWF0dXJpdHktYWNjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=75-es2015.js.map