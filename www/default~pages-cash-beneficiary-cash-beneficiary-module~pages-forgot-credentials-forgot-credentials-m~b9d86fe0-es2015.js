(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cash-beneficiary-cash-beneficiary-module~pages-forgot-credentials-forgot-credentials-m~b9d86fe0"],{

/***/ "LaLV":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" class=\"ps-input-card-number\" [options]=\"defaultOptions\" (keyup)=\"changeCardIcon($event)\">\r\n</ps-keyin-input>");

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

/***/ "gByX":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PsInputCardNumberComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputCardNumberComponentModule", function() { return PsInputCardNumberComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-input-card-number.component */ "x3b/");





let PsInputCardNumberComponentModule = class PsInputCardNumberComponentModule {
};
PsInputCardNumberComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_4__["PsInputCardNumberComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_4__["PsInputCardNumberComponent"]
        ],
        entryComponents: [
            _ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_4__["PsInputCardNumberComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputCardNumberComponentModule);



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

/***/ "jEzM":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1jYXJkLW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ }),

/***/ "x3b/":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PsInputCardNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputCardNumberComponent", function() { return PsInputCardNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_card_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-card-number.component.html */ "LaLV");
/* harmony import */ var _ps_input_card_number_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-card-number.component.scss */ "jEzM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");







/**
 * @author Zunair Zakir
 * @since 01/11/2019
 *
 * <p> PsInputCardNumberComponent is a simple component base on ps-keyin-input and have free text field</p>
 */
let PsInputCardNumberComponent = class PsInputCardNumberComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.defaultOptions = {
            mask: { mask: '9999 9999 9999 9999' },
            labelKey: 'card_number_key',
            placeHolder: 'enter_your_card_number_key',
            type: 'tel',
            imageOptions: {
                imageName: '',
                psClass: 'card-action-image'
            }
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
    }
    changeCardIcon(event) {
        const currentValue = event.target.value;
        if (currentValue.startsWith('4')) {
            this.defaultOptions.imageOptions.imageName = 'Visa-Curved.png';
        }
        else if (this.checkCard(52, 55, currentValue) || this.checkCard(2221, 2720, currentValue)) {
            this.defaultOptions.imageOptions.imageName = 'Mastercard-Curved.png';
        }
        else if (currentValue.startsWith('34') || currentValue.startsWith('37')) {
            this.defaultOptions.imageOptions.imageName = 'American-Express-Curved.png';
        }
        else if (currentValue.startsWith('6011') || currentValue.startsWith('65')) {
            this.defaultOptions.imageOptions.imageName = 'Discover-Straight.png';
        }
        else if (currentValue.startsWith('36') || currentValue.startsWith('38') || this.checkCard(300, 305, currentValue)) {
            this.defaultOptions.imageOptions.imageName = 'DinerClub.png';
        }
        else if (currentValue.startsWith('35') || currentValue.startsWith('2131') || currentValue.startsWith('1800')) {
            this.defaultOptions.imageOptions.imageName = 'jbc-card.jpg';
        }
        else {
            this.defaultOptions.imageOptions.imageName = '';
        }
    }
    checkCard(start, end, value) {
        let found = false;
        if (value && start && end) {
            for (let i = start; i <= end; i++) {
                if (value.startsWith(i.toString())) {
                    found = true;
                    break;
                }
            }
        }
        return found;
    }
};
PsInputCardNumberComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }
];
PsInputCardNumberComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputCardNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-card-number',
        template: _raw_loader_ps_input_card_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_card_number_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
], PsInputCardNumberComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-cash-beneficiary-cash-beneficiary-module~pages-forgot-credentials-forgot-credentials-m~b9d86fe0-es2015.js.map