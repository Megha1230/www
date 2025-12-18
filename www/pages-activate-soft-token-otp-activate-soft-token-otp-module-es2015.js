(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activate-soft-token-otp-activate-soft-token-otp-module"],{

/***/ "46tt":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/activate-soft-token-otp/activate-soft-token-otp.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ActivateSoftTokenOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateSoftTokenOtpPageModule", function() { return ActivateSoftTokenOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_vasco_soft_token_ps_complex_vasco_soft_token_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.module */ "CQzC");
/* harmony import */ var _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _activate_soft_token_otp_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activate-soft-token-otp.page */ "3otj");








const routes = [
    {
        path: '',
        component: _activate_soft_token_otp_page__WEBPACK_IMPORTED_MODULE_7__["ActivateSoftTokenOtpPage"]
    }
];
let ActivateSoftTokenOtpPageModule = class ActivateSoftTokenOtpPageModule {
};
ActivateSoftTokenOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateStepperModule"],
            _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_vasco_soft_token_ps_complex_vasco_soft_token_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexVascoSoftTokenComponentModule"],
        ],
        declarations: [_activate_soft_token_otp_page__WEBPACK_IMPORTED_MODULE_7__["ActivateSoftTokenOtpPage"]]
    })
], ActivateSoftTokenOtpPageModule);



/***/ }),

/***/ "CQzC":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.module.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PsComplexVascoSoftTokenComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexVascoSoftTokenComponentModule", function() { return PsComplexVascoSoftTokenComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-complex-vasco-soft-token.component */ "E/cP");






let PsComplexVascoSoftTokenComponentModule = class PsComplexVascoSoftTokenComponentModule {
};
PsComplexVascoSoftTokenComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexVascoSoftTokenComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputVarcharComponentModule"]
        ],
        exports: [_ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexVascoSoftTokenComponent"]],
        entryComponents: [_ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexVascoSoftTokenComponent"]]
    })
], PsComplexVascoSoftTokenComponentModule);



/***/ }),

/***/ "E/cP":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsComplexVascoSoftTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexVascoSoftTokenComponent", function() { return PsComplexVascoSoftTokenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_vasco_soft_token_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-vasco-soft-token.component.html */ "q2xR");
/* harmony import */ var _ps_complex_vasco_soft_token_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-vasco-soft-token.component.scss */ "YjhT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_authentication_matrix_ps_authentication_matrix_component_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-authentication-matrix/ps-authentication-matrix.component.interface */ "dwZw");
/* harmony import */ var src_app_commonBussinessSRC_psServices_authentication_matrix_authentication_matrix_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/authentication-matrix/authentication-matrix.service */ "7upn");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");












let PsComplexVascoSoftTokenComponent = class PsComplexVascoSoftTokenComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_9__["PsBaseFieldComponent"] {
    constructor(commonProv, logger, omniAuthService, omniPull) {
        super(commonProv, logger);
        this.commonProv = commonProv;
        this.logger = logger;
        this.omniAuthService = omniAuthService;
        this.omniPull = omniPull;
        this.defaultOptions = {
            crontoImageOptions: {
                imageName: ''
            }
        };
        this.softTokenDisabledHintLblOptions = {
            labelKey: 'enable_soft_token_param_in_order_to_proceed_key'
        };
        this.showCrontoDetails = false;
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
        this.userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
    }
    onActivationButtonClicked(event) {
        this.common.presentLoading();
        this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ENABLE_OTP_GENARATION).then(res => {
            var _a, _b;
            if (res[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ENABLE_OTP_GENARATION]) {
                let userInfo = {
                    userName: (_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.omniUserVO.NAME,
                    userCifNo: (_b = this.userInfo) === null || _b === void 0 ? void 0 : _b.omniUserVO.CIF_NO
                };
                let otpAuth = {
                    data: [{
                            authentionTypesEnabled: "SmsOTP",
                            authenticationTypesDesc: "otp_key",
                        }],
                    success: true
                };
                this.omniAuthService.showAndManageValidations(otpAuth, src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_authentication_matrix_ps_authentication_matrix_component_interface__WEBPACK_IMPORTED_MODULE_4__["AuthMatrixViewer"].MODAL, userInfo).then(result => {
                    if (result && result.success) {
                        this.callVascoCrontoWS();
                    }
                }).catch((error) => {
                    this.commonProv.logger.error(error + " : error while validating otp authentication in ActivateSoftTokenOtpPage");
                    this.common.dismissLoading();
                });
            }
            else {
                this.callVascoCrontoWS();
            }
        });
    }
    callVascoCrontoWS() {
        this.common.presentLoading();
        this.omniPull.generateVascoCrontoImage({}).then((data) => {
            if (data) {
                this.showCrontoDetails = true;
                this.defaultOptions.crontoImageOptions.imageBase64Url = data.imageBytesbase64;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, ['activate_soft_token_btn'], 1);
            }
        }).finally(() => {
            this.common.dismissLoading();
        });
    }
};
PsComplexVascoSoftTokenComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_authentication_matrix_authentication_matrix_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMatrixService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
PsComplexVascoSoftTokenComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexVascoSoftTokenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-vasco-soft-token',
        template: _raw_loader_ps_complex_vasco_soft_token_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_vasco_soft_token_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonBussinessSRC_psServices_authentication_matrix_authentication_matrix_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMatrixService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], PsComplexVascoSoftTokenComponent);



/***/ }),

/***/ "YjhT":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXZhc2NvLXNvZnQtdG9rZW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "q2xR":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-vasco-soft-token\">\n\n  <ps-action-button id=\"activate_soft_token_btn\" [options]=\"defaultOptions.activateSoftTokenOptions\"\n    [ngClass]=\"{'soft-token-btn': options.disableSoftTokenBtn}\" (onClick)=\" onActivationButtonClicked($event)\">\n  </ps-action-button>\n\n  <div class=\"soft-token-hint\" *ngIf=\"options.disableSoftTokenBtn\">\n    <ps-label [options]=\"softTokenDisabledHintLblOptions\">\n    </ps-label>\n  </div>\n\n  <ng-container *ngIf=\"showCrontoDetails\" id=\"cronto_details_panel\">\n    <ps-action-image [options]=\"defaultOptions.crontoImageOptions\"></ps-action-image>\n    <ps-input-varchar id=\"cronto-code\" [options]=\"defaultOptions.crontoCodeOptions\">\n    </ps-input-varchar>\n  </ng-container>\n\n</ps-container-complex>");

/***/ })

}]);
//# sourceMappingURL=pages-activate-soft-token-otp-activate-soft-token-otp-module-es2015.js.map