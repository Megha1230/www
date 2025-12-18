(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "LcjX":
/*!*******************************************************************!*\
  !*** ./src/app/pages/security-renewal/security-renewal.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1cml0eS1yZW5ld2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VLY3":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/security-renewal/security-renewal.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"sec_renewal_panel\">\n      <ps-option-expired-security id=\"ps-option-security-list\" *ngFor=\"let security of securityOptions\"\n        [options]=\"security\" click=\"onclick\"></ps-option-expired-security>\n\n      <ps-input-display-only id=\"'newIsdaraNumber' + id\" [options]=\"newIsdaraNumberOptions\">\n      </ps-input-display-only>\n\n\n      <ps-input-numeric *ngIf=\"showAvailableBal\" id=\"'availableBal' + id\" [options]=\"availableBalOptions\"></ps-input-numeric>\n\n\n      <ps-input-numeric id=\"'sukukLiquidation' + id\" (onPsChange)=\"onsukukLiquidationAmountChange($event)\"\n        [options]=\"sukukLiquidationOptions\"></ps-input-numeric>\n\n\n      <ps-input-numeric id=\"'sukukRenewal' + id\" (onPsChange)=\"onsukukRenewalAmountChange($event)\"\n        [options]=\"sukukRenewalOptions\"></ps-input-numeric>\n\n\n      <ps-input-numeric id=\"'remaining' + id\" [options]=\"remainingOptions\"></ps-input-numeric>\n\n      <ps-complex-amount id=\"'valueOfLiquidation' + id\" [options]=\"valueOfLiquidationOptions\">\n      </ps-complex-amount>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "cL+G":
/*!*****************************************************************!*\
  !*** ./src/app/pages/security-renewal/security-renewal.page.ts ***!
  \*****************************************************************/
/*! exports provided: SecurityRenewalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRenewalPage", function() { return SecurityRenewalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_security_renewal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./security-renewal.page.html */ "VLY3");
/* harmony import */ var _security_renewal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-renewal.page.scss */ "LcjX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");















let SecurityRenewalPage = class SecurityRenewalPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(commonProv, navService, loggerP, omniCommonService, omniPull) {
        super();
        this.commonProv = commonProv;
        this.navService = navService;
        this.loggerP = loggerP;
        this.omniCommonService = omniCommonService;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.securityRenewalVO = {};
        this.securityOptions = [];
        this.previousSukukRenewal = 0;
        this.previousSukukLiquidation = 0;
        this.stepperOptions = {
            stepperName: 'sec_ren_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['sec_renewal_step1'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.securityRenewal,
                group: this.formGroup
            },
            requestObject: this.securityRenewalVO
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'request_key',
            iconName: 'document',
            expanded: true
        };
        this.sukukOptions = {
            placeHolder: 'renewal_liquidation_of_sukuk_key',
            labelKey: 'renewal_liquidation_of_sukuk_key',
            group: this.formGroup,
            fcName: 'sukukType'
        };
        this.todayDateOptions = {
            placeHolder: 'trx_date_key',
            labelKey: 'trx_date_key',
            type: 'text',
            psClass: 'ps-disabled',
            group: this.formGroup,
            fcName: 'todayDate'
        };
        this.portfolioCifOptions = {
            placeHolder: 'portfolio_key',
            labelKey: 'portfolio_key',
            group: this.formGroup,
            fcName: 'portfolioCif'
        };
        this.sukukBalanceOptions = {
            placeHolder: 'sukuk_balance_key',
            labelKey: 'sukuk_balance_key',
            group: this.formGroup,
            fcName: 'balance'
        };
        this.sukukRenewalOptions = {
            fcName: 'quantity',
            group: this.formGroup,
            labelKey: 'sukuk_renewal_key',
            placeHolder: 'enter_your_amount_key',
        };
        this.sukukLiquidationOptions = {
            fcName: 'sukukLiquidation',
            group: this.formGroup,
            labelKey: 'sukuk_liquidation_key',
            placeHolder: 'enter_your_amount_key',
        };
        this.remainingOptions = {
            fcName: 'remaining',
            group: this.formGroup,
            labelKey: 'remaining_key',
            placeHolder: 'amount_key',
        };
        this.availableBalOptions = {
            fcName: 'availableBal',
            group: this.formGroup,
            labelKey: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isAgent ? 'available_balance_key' : 'sukuk_balance_key',
            placeHolder: 'amount_key',
        };
        this.newIsdaraNumberOptions = {
            labelKey: 'new_isdara_number_key',
            placeHolder: 'new_isdara_number_key',
            fcName: 'newIsdaraNumber',
            group: this.formGroup,
            showEmpty: true,
        };
        this.valueOfLiquidationOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'valueOfLiquidCurrency'
            },
            amountOptions: {
                labelKey: 'value_of_liquidated_shares_key',
                placeHolder: 'amount_key',
                fcName: 'valueOfLiquidation',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3
            }
        };
        this.showAvailableBal = true;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        // if (PsCommonBusinessSettings.isAgent) {
        // this.showAvailableBal = true;
        //  } else {
        // this.showAvailableBal = false;
        // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.availableBalOptions.currenciesOptions.fcName], 0);
        // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.availableBalOptions.fcName], 0);
        //}
        _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].showInitialCardValues = 6;
        const cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
        // this.workingCif = (!this.omniCommonService.common.session.getValueOf('WORKINGCIF') ? cifInfo.omniUserVO.CIF_NO : '');
        this.navResult = this.navService.getAllParams() ? this.navService.getAllParams() : null;
        if (this.navResult) {
            this.securityOptions = [];
            this.securityOptions.push({
                isEditable: false,
                securityInformation: this.navResult
            });
            this.securityRenewalVO = this.navResult;
            this.security = this.navResult;
            this.blockedAmount = this.navResult.blockedQuantity ? this.navResult.blockedQuantity : 0;
            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { securityCode1: this.navResult.securityCode1, securityCode2: this.navResult.securityCode2, portfolioSeq: this.navResult.portfolioSeq }, false, true);
        }
        const defaultValidations = new Map();
        if (!src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isAgent) {
            defaultValidations.set(this.securityRenewalVO[this.sukukLiquidationOptions.fcName], {
                disabled: true
            });
        }
        // defaultValidations.set(this.securityRenewalVO[this.sukukLiquidationOptions.currenciesOptions.fcName], {
        //   disabled: true
        // });
        // this.securityRenewalVO[this.sukukRenewalOptions.fcName] = this.navResult.totalNumberOfSukuk;
        // this.formGroup.controls[this.sukukRenewalOptions.fcName].setValue(this.navResult.totalNumberOfSukuk);
        this.commonProv.setDefaultValidators(defaultValidations, this.sukukLiquidationOptions.group);
    }
    ngAfterViewInit() {
        // this.formGroup.controls[this.sukukRenewalOptions.currenciesOptions.fcName].disable();
        this.securityRenewalVO[this.sukukLiquidationOptions.fcName] = '';
        this.formGroup.controls[this.sukukRenewalOptions.fcName].setValue(this.navResult.totalNumberOfSukuk - this.blockedAmount);
        this.formGroup.controls[this.availableBalOptions.fcName].setValue(this.navResult.totalNumberOfSukuk);
        this.sukuCurrency();
    }
    sukuCurrency() {
        try {
            const paramData = {
                sukukSearch: {
                    securityCode1: this.navResult.securityCode1,
                    securityCode2: this.navResult.securityCode2
                },
                linkToSecurityDetails: 'Y',
            };
            // const paramData: any = {
            //   "workingCif": this.workingCif,
            //   "sukukSearch": {
            //     "securityCode1": this.navResult.securityCode1,
            //     "securityCode2": this.navResult.securityCode2
            //   }
            // };
            this.omniPull.returnSukukCurrency(paramData).then((result) => {
                if (result && result.gridModel != null && result.gridModel.length > 0) {
                    const currencyCode = result.gridModel[0].tradingCurrencyCode; // result.gridModel.find(x => x.branchesId == this.cifInfo.cifBranch);
                    this.selecetdSukukPrice = result.gridModel[0].sukukPrice;
                    this.calculatedSukukPrice = Number(result.gridModel[0].calculatedSukukPrice);
                    if (result.gridModel[0].newIsdaraNumber) {
                        this.formGroup.controls[this.newIsdaraNumberOptions.fcName].setValue(result.gridModel[0].newIsdaraNumber);
                    }
                    this.formGroup.controls[this.valueOfLiquidationOptions.currenciesOptions.fcName].setValue(currencyCode);
                    this.valueOfLiquidationOptions.amountOptions.group.controls[this.valueOfLiquidationOptions.amountOptions.fcName].setValue(this.calculatedSukukPrice * this.securityRenewalVO[this.sukukLiquidationOptions.fcName]);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.availableBalOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.valueOfLiquidationOptions.currenciesOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.valueOfLiquidationOptions.amountOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.remainingOptions.fcName], 1);
                    if (!src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isAgent) {
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.availableBalOptions.fcName], 1);
                    }
                }
                else {
                    this.commonProv.logger.warn(result, 'empty response');
                }
            }).catch((error) => { });
        }
        catch (error) { }
    }
    onsukukRenewalAmountChange(options) {
        this.loggerP.log('onsukukRenewalAmountChange', options.newValue);
        this.securityRenewalVO[this.sukukRenewalOptions.fcName] = options.newValue;
        // will not enter at first call, because available is 0.
        if (Number(this.availableBalOptions.group.controls[this.availableBalOptions.fcName].value) != 0) {
            // this is to set the liquidation update after adding the renewal, so that when check if available is less than the sum, the check will be correct
            // plus, the absolute is added so that when liquidation is negative, that wont affect the summation.
            // example: available 25000, renewal 26000, liquidation will be -1000. condition: 25000 < 26000 - 1000 is false, where this has to be true.
            this.securityRenewalVO[this.sukukLiquidationOptions.fcName] = Math.abs(Number(this.availableBalOptions.group.controls[this.availableBalOptions.fcName].value) - this.blockedAmount - options.newValue);
        }
        if (this.security.totalNumberOfSukuk - this.blockedAmount < (Number(this.securityRenewalVO[this.sukukRenewalOptions.fcName]) + Number(this.securityRenewalVO[this.sukukLiquidationOptions.fcName]))) {
            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__["CommonUtils"].presentInfoAlert(this.commonProv.translate('sum_of_sukuk_liquidation_and_sukuk_renewal_should_be_less_than_sukuk_balance_key'));
            // setting the renewal to its previous amount
            this.formGroup.controls[this.sukukRenewalOptions.fcName].setValue(this.previousSukukRenewal);
            return;
        }
        // keep target of currently added amount
        this.previousSukukRenewal = this.securityRenewalVO[this.sukukRenewalOptions.fcName];
        this.formGroup.controls[this.sukukLiquidationOptions.fcName].setValue(this.securityRenewalVO[this.sukukLiquidationOptions.fcName]);
        const remaining = this.security.totalNumberOfSukuk - (Number(this.securityRenewalVO[this.sukukLiquidationOptions.fcName]) + Number(options.newValue));
        this.remainingOptions.group.controls[this.remainingOptions.fcName].setValue(Math.sign(remaining) === -1 ? '0' : remaining);
    }
    onsukukLiquidationAmountChange(options) {
        this.loggerP.log('onsukukLiquidationAmountChange', options.newValue);
        this.securityRenewalVO[this.sukukLiquidationOptions.fcName] = options.newValue;
        // this is to set the renewal update after adding the liquidation, so that when check if available is less than the sum, the check will be correct
        // plus, the absolute is added so that when renewal is negative, that wont affect the summation.
        // example: available 25000, liquidation 26000, renewal will be -1000. condition: 25000 < 26000 - 1000 is false, where this has to be true.
        this.securityRenewalVO[this.sukukRenewalOptions.fcName] = Math.abs(Number(this.availableBalOptions.group.controls[this.availableBalOptions.fcName].value) - this.blockedAmount - options.newValue);
        if (this.security.totalNumberOfSukuk - this.blockedAmount < (Number(this.securityRenewalVO[this.sukukRenewalOptions.fcName]) + Number(this.securityRenewalVO[this.sukukLiquidationOptions.fcName]))) {
            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__["CommonUtils"].presentInfoAlert(this.commonProv.translate('sum_of_sukuk_liquidation_and_sukuk_renewal_should_be_less_than_sukuk_balance_key'));
            // setting the liquidation to its previous amount
            this.formGroup.controls[this.sukukLiquidationOptions.fcName].setValue(this.previousSukukLiquidation);
            return;
        }
        // keep target of currently added amount
        this.previousSukukLiquidation = this.securityRenewalVO[this.sukukLiquidationOptions.fcName];
        this.formGroup.controls[this.sukukRenewalOptions.fcName].setValue(this.securityRenewalVO[this.sukukRenewalOptions.fcName]);
        const remaining = this.security.totalNumberOfSukuk - (Number(this.availableBalOptions.group.controls[this.availableBalOptions.fcName].value) - this.blockedAmount);
        this.remainingOptions.group.controls[this.remainingOptions.fcName].setValue(remaining);
        this.valueOfLiquidationOptions.amountOptions.group.controls[this.valueOfLiquidationOptions.amountOptions.fcName].setValue(this.calculatedSukukPrice * this.securityRenewalVO[this.sukukLiquidationOptions.fcName]);
    }
    ionViewWillLeave() {
        _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].showInitialCardValues = 3;
    }
};
SecurityRenewalPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__["PsNavigatorService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
SecurityRenewalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-security-renewal',
        template: _raw_loader_security_renewal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_security_renewal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__["PsNavigatorService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], SecurityRenewalPage);



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
//# sourceMappingURL=59-es2015.js.map