(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "Evj/":
/*!*********************************************************************!*\
  !*** ./src/app/pages/request-qr-payment/request-qr-payment.page.ts ***!
  \*********************************************************************/
/*! exports provided: RequestQrPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestQrPaymentPage", function() { return RequestQrPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_request_qr_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./request-qr-payment.page.html */ "wlo7");
/* harmony import */ var _request_qr_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-qr-payment.page.scss */ "cgDh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");













let RequestQrPaymentPage = class RequestQrPaymentPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonService, logger, omniPull) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.qrCodeVO = {};
        this.stepperOptions = {
            stepperName: 'request_qr_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['request_qr_code_step1'],
            group: this.formGroup,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: '',
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.generateQRCode(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
                extraParams: {
                    actionType: 'save'
                }
            },
            requestObject: this.qrCodeVO
        };
        this.qrCodeDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'qr_code_details_key',
            //iconName: 'document',
            expanded: true
        };
        this.qrCodeChargesPanelOptions = {
            isExpandable: true,
            labelKey: 'qr_code_charges_key',
            //iconName: 'document',
            expanded: true
        };
        this.accountNoOptions = {
            labelKey: 'account_no_key',
            placeHolder: 'select_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            purpose: 'QR',
            requestObject: this.qrCodeVO
        };
        this.qrComplexAmountOption = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'qrCurrency'
            },
            amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                group: this.formGroup,
                decimalPoints: 3
            }
        };
        this.purposeOptions = {
            labelKey: 'purpose_key',
            placeHolder: 'enter_purpose_key',
            group: this.formGroup,
            fcName: 'purpose'
        };
        this.chargesAccountListOptions = {
            labelKey: 'charges_account_key',
            placeHolder: 'select_charges_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'chargesAccount',
            accountType: 'G',
            fromTo: null,
            requestObject: this.qrCodeVO,
            currency: '',
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
                    labelKey: 'charges_amount_key',
                    placeHolder: 'enter_charges_amount_key',
                    fcName: 'chargesAmount',
                    group: this.formGroup,
                    decimalPoints: 2
                }
            },
            toAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'currency_key',
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
            requestObject: this.qrCodeVO,
            group: this.formGroup
        };
    }
    ngOnInit() {
        super.init();
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
        this.commonProv.cancelClicked.next(false);
        this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT).then(result => {
            if (result && result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT]) {
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT], this.qrCodeVO);
                this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName] = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT];
            }
        });
        this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.cifInfo.companySettingsCO.baseCurrency, this.qrCodeVO);
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = this.cifInfo.companySettingsCO.baseCurrency;
        }, 1);
        //added by ghada, AZDB-332 for closing the screen on clicking cancel button
        this.commonProv.cancelClicked.subscribe(result => {
            if (result) {
                this.navigationServices.navigateBackward();
            }
        });
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
    }
    onChargesAccountChange(account) {
        this.complexExchangeOptions.toAmountOptions.currency = account.currencyBriefNameEnglish;
        this.complexExchangeOptions.toAmountOptions.currencyCode = account.currency;
        setTimeout(() => {
            this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = account.currency;
        }, 1);
    }
    generateQRCode(resp) {
        const data = {
            AccountRef: this.formGroup.controls[this.accountNoOptions.fcName].value.accountFormat + '-' + this.formGroup.controls[this.accountNoOptions.fcName].value.formattedAccount,
            AddtionalRef: 'AddRef-' + this.formGroup.controls[this.accountNoOptions.fcName].value.additionalRef,
            purposeTxtDesc: this.formGroup.controls[this.purposeOptions.fcName].value,
            transactionAmount: this.formGroup.controls[this.qrComplexAmountOption.amountOptions.fcName].value,
            currency: this.formGroup.controls[this.qrComplexAmountOption.currenciesOptions.fcName].value,
            showToOtherDetails: true,
            toAccountType: 'companyAccountTransfer',
            changeScannedDataToRO: true
        };
        this.logger.log('this.stepperOptions.requestObject', this.stepperOptions.requestObject);
        this.commonService.generateQRCode(data, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CODE_GENERATION_OPER_ID);
    }
    updateVO(resp) {
        src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CODE_GENERATION_OPER_ID;
    }
};
RequestQrPaymentPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
RequestQrPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request-qr-payment',
        template: _raw_loader_request_qr_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_request_qr_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], RequestQrPaymentPage);



/***/ }),

/***/ "cgDh":
/*!***********************************************************************!*\
  !*** ./src/app/pages/request-qr-payment/request-qr-payment.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LXFyLXBheW1lbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "wlo7":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-qr-payment/request-qr-payment.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"qrCodeDetailsPanelOptions\" id=\"qrCode_details_panel\">\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountNoOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-complex-amount id=\"charges\" [options]=\"qrComplexAmountOption\">\n      </ps-complex-amount>\n\n      <ps-input-varchar id=\"'purpose' + id\" [options]=\"purposeOptions\">\n      </ps-input-varchar>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"qrCodeChargesPanelOptions\" id=\"qrCode_charges_panel\">\n\n      <ps-complex-exchange id=\"exchange\" [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n      <ps-lookup-own-accounts id=\"chargesAccount\" [options]=\"chargesAccountListOptions\"\n        (onAccountChange)=\"onChargesAccountChange($event)\">\n      </ps-lookup-own-accounts>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=99-es2015.js.map