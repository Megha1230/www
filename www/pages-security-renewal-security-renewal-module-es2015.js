(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-security-renewal-security-renewal-module"],{

/***/ "BYOB":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-input-display-only/ps-display-only-today-date/ps-display-only-today-date.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PsDisplayOnlyTodayDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDisplayOnlyTodayDateComponent", function() { return PsDisplayOnlyTodayDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_display_only_today_date_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-display-only-today-date.component.html */ "MEk7");
/* harmony import */ var _ps_display_only_today_date_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-display-only-today-date.component.scss */ "LBHf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");










let PsDisplayOnlyTodayDateComponent = class PsDisplayOnlyTodayDateComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_7__["PsKeyinInputComponent"] {
    constructor(commonP, loggerP, omniPull) {
        super(commonP, loggerP);
        this.omniPull = omniPull;
        this.defaultConf = {
            psClass: 'ps-disabled'
        };
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
    }
    ngOnInit() {
        this.commonProv.copyObject(this.options, this.defaultConf);
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngAfterViewInit() {
        this.options.group.controls[this.options.fcName].setValue((new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["PsDateFormatPipe"]().transform(new Date(), 'MM/DD/YYYY'))); // TODO: fixed after the report is fixed. since this is not used anywhere else
    }
};
PsDisplayOnlyTodayDateComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] }
];
PsDisplayOnlyTodayDateComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDisplayOnlyTodayDateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-display-only-today-date',
        template: _raw_loader_ps_display_only_today_date_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_display_only_today_date_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])
], PsDisplayOnlyTodayDateComponent);



/***/ }),

/***/ "LBHf":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-input-display-only/ps-display-only-today-date/ps-display-only-today-date.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kaXNwbGF5LW9ubHktdG9kYXktZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "MEk7":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-input-display-only/ps-display-only-today-date/ps-display-only-today-date.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-input-display-only [id]=\"id\" [options]=\"options\">\n  </ps-input-display-only>");

/***/ }),

/***/ "PctH":
/*!*******************************************************************!*\
  !*** ./src/app/pages/security-renewal/security-renewal.module.ts ***!
  \*******************************************************************/
/*! exports provided: SecurityRenewalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRenewalPageModule", function() { return SecurityRenewalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */ "Uxj/");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_expired_security_ps_option_expired_security_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-expired-security/ps-option-expired-security.component.module */ "HS2C");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_input_display_only_ps_display_only_today_date_ps_display_only_today_date_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-input-display-only/ps-display-only-today-date/ps-display-only-today-date.component.module */ "X2+J");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _security_renewal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security-renewal.page */ "cL+G");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");











const routes = [
    {
        path: '',
        component: _security_renewal_page__WEBPACK_IMPORTED_MODULE_9__["SecurityRenewalPage"]
    }
];
let SecurityRenewalPageModule = class SecurityRenewalPageModule {
};
SecurityRenewalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateStepperModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexAmountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_input_display_only_ps_display_only_today_date_ps_display_only_today_date_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDisplayOnlyTodayDateComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_expired_security_ps_option_expired_security_component_module__WEBPACK_IMPORTED_MODULE_4__["PsOptionExpiredSecurityComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_10__["PsInputNumericComponentModule"]
        ],
        declarations: [_security_renewal_page__WEBPACK_IMPORTED_MODULE_9__["SecurityRenewalPage"]]
    })
], SecurityRenewalPageModule);



/***/ }),

/***/ "X2+J":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-input-display-only/ps-display-only-today-date/ps-display-only-today-date.component.module.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PsDisplayOnlyTodayDateComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDisplayOnlyTodayDateComponentModule", function() { return PsDisplayOnlyTodayDateComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_display_only_today_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-display-only-today-date.component */ "BYOB");





let PsDisplayOnlyTodayDateComponentModule = class PsDisplayOnlyTodayDateComponentModule {
};
PsDisplayOnlyTodayDateComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_display_only_today_date_component__WEBPACK_IMPORTED_MODULE_4__["PsDisplayOnlyTodayDateComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
        ],
        exports: [
            _ps_display_only_today_date_component__WEBPACK_IMPORTED_MODULE_4__["PsDisplayOnlyTodayDateComponent"]
        ],
        entryComponents: [
            _ps_display_only_today_date_component__WEBPACK_IMPORTED_MODULE_4__["PsDisplayOnlyTodayDateComponent"]
        ],
    })
], PsDisplayOnlyTodayDateComponentModule);



/***/ })

}]);
//# sourceMappingURL=pages-security-renewal-security-renewal-module-es2015.js.map