(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cheque-confirmation-cheque-confirmation-module"],{

/***/ "AvcC":
/*!*********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PsFileUploadBSComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsFileUploadBSComponentModule", function() { return PsFileUploadBSComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-file-upload-bs.component */ "b23T");





let PsFileUploadBSComponentModule = class PsFileUploadBSComponentModule {
};
PsFileUploadBSComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [_ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponent"]],
        entryComponents: [_ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsFileUploadBSComponentModule);



/***/ }),

/***/ "PhtS":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cheque-confirmation/cheque-confirmation.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChequeConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeConfirmationPageModule", function() { return ChequeConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */ "Uxj/");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module */ "AvcC");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */ "vRU4");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.module */ "iNXY");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_chequebooks_ps_lookup_chequebooks_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.module */ "Dzb9");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _cheque_confirmation_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cheque-confirmation.page */ "Eued");














const routes = [
    {
        path: '',
        component: _cheque_confirmation_page__WEBPACK_IMPORTED_MODULE_13__["ChequeConfirmationPage"]
    }
];
let ChequeConfirmationPageModule = class ChequeConfirmationPageModule {
};
ChequeConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_10__["PsTemplateStepperModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_12__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInputNumericComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_6__["PsInputAccountNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_chequebooks_ps_lookup_chequebooks_component_module__WEBPACK_IMPORTED_MODULE_9__["PsLookupChequebooksComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexAmountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponentModule"]
        ],
        declarations: [_cheque_confirmation_page__WEBPACK_IMPORTED_MODULE_13__["ChequeConfirmationPage"]],
        exports: [_cheque_confirmation_page__WEBPACK_IMPORTED_MODULE_13__["ChequeConfirmationPage"]],
        entryComponents: [_cheque_confirmation_page__WEBPACK_IMPORTED_MODULE_13__["ChequeConfirmationPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ChequeConfirmationPageModule);



/***/ }),

/***/ "Qw6n":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'colAcc' : options.showScannerIcon || custMode}\">\r\n    <ps-keyin-input [id]=\"id\" [options]=\"options\" (onPsChange)=\"onChangeEvent($event)\" (onPsEmpty)=\"onEmpty($event)\">\r\n    </ps-keyin-input>\r\n    <ps-action-icon [id]=\"'QrScannerIcon'\" *ngIf=\"options.showScannerIcon || custMode\" class=\"scanQrIcon\" [ngClass]=\"{'disableContent':isInReadOnlyScreen}\"\r\n        [options]=\"actionOption\" (onClick)=\"getScannedData(true)\"></ps-action-icon>\r\n</div>");

/***/ }),

/***/ "UTjL":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PsInputAccountNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputAccountNumberComponent", function() { return PsInputAccountNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_account_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-account-number.component.html */ "Qw6n");
/* harmony import */ var _ps_input_account_number_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-account-number.component.scss */ "v88X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");











let PsInputAccountNumberComponent = class PsInputAccountNumberComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_5__["PsKeyinInputComponent"] {
    // public format: any = 2;
    // public accountLength: any = 8;
    constructor(commonP, loggerP, omniPull, nav) {
        super(commonP, loggerP);
        this.omniPull = omniPull;
        this.nav = nav;
        this.getScannedQr = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.actionOption = {};
        //   this.omniPull.getParamValOf('AccountsInputFormat', 'AccountAddRefLength').then((result) => {
        //     if (result.AccountsInputFormat) {
        //       this.format = result.AccountsInputFormat;
        //     }
        //     if (result.AccountAddRefLength) {
        //       this.accountLength = result.AccountAddRefLength;
        //     }
        //   }).catch((error) => { });
        if (this.custMode)
            this.options.showScannerIcon = true;
    }
    ngOnInit() {
        var _a;
        // don't remove ngOnInit() it's needed in 
        let operCustomization = this.common.returnOperCustomization();
        this.isInReadOnlyScreen = ((_a = operCustomization.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].FORM_READONLY)) === null || _a === void 0 ? void 0 : _a.IS_READONLY) == 1 ? true : false;
        if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].isNotNull(this.options)) {
            this.options.hideValueOnError = true;
        }
        this.actionOption = {
            iconName: 'qr_code_scanner',
            allowCust: true,
            group: this.options.group
        };
    }
    onChangeEvent(val) {
        this.onPsChange.emit(val);
    }
    getScannedData(buttonClicked) {
        if (!this.custMode) {
            // set force trigger true so that once account is scanned the validation will be triggered to apply the needed validation on account change
            if (this.options.forceTriggerChange == false)
                this.options.forceTriggerChange = true;
            // this.commonProv.presentLoading();
            this.commonProv.scanQRCode().then(result => {
                var _a, _b;
                if (result) {
                    result = JSON.parse(result);
                    this.commonProv.setValInsideNestedObj(this.options.fcName, (_a = result.AccountRef) === null || _a === void 0 ? void 0 : _a.split('-')[1], this.options.requestObject ? this.options.requestObject : {});
                    const data = Object.assign(Object.assign({}, result), { accountNumber: (_b = result.AccountRef) === null || _b === void 0 ? void 0 : _b.split('-')[1] });
                    this.getScannedQr.emit([data, buttonClicked]);
                }
                // this.commonProv.dismissLoading();
            }).catch(error => {
                // this.commonProv.dismissLoading();
                this.logger.error('something went wrong', error);
                this.nav.navigateBackward();
            });
        }
    }
};
PsInputAccountNumberComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] },
    { type: _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"] }
];
PsInputAccountNumberComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    getScannedQr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsInputAccountNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-account-number',
        template: _raw_loader_ps_input_account_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_account_number_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]])
], PsInputAccountNumberComponent);



/***/ }),

/***/ "iNXY":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PsInputAccountNumberComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputAccountNumberComponentModule", function() { return PsInputAccountNumberComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component */ "UTjL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-components.module */ "dqXS");





let PsInputAccountNumberComponentModule = class PsInputAccountNumberComponentModule {
};
PsInputAccountNumberComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_component__WEBPACK_IMPORTED_MODULE_2__["PsInputAccountNumberComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"]
        ],
        exports: [
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_component__WEBPACK_IMPORTED_MODULE_2__["PsInputAccountNumberComponent"]
        ],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_component__WEBPACK_IMPORTED_MODULE_2__["PsInputAccountNumberComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputAccountNumberComponentModule);



/***/ }),

/***/ "v88X":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1hY2NvdW50LW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-cheque-confirmation-cheque-confirmation-module-es2015.js.map