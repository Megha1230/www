(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-bank-contact-bank-module"],{

/***/ "43Kv":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-bank/contact-bank.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactBankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBankPageModule", function() { return ContactBankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */ "Hy46");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module */ "AvcC");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module */ "OzHP");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _contact_bank_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-bank.page */ "2sGz");











const routes = [
    {
        path: '',
        component: _contact_bank_page__WEBPACK_IMPORTED_MODULE_10__["ContactBankPage"]
    }
];
let ContactBankPageModule = class ContactBankPageModule {
};
ContactBankPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateStepperModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_5__["PsInputEmailComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_3__["PsEntityPhoneNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponentModule"]
        ],
        declarations: [_contact_bank_page__WEBPACK_IMPORTED_MODULE_10__["ContactBankPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ContactBankPageModule);



/***/ }),

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

/***/ "Ngnl":
/*!*************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "OzHP":
/*!********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: PsInputEmailComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputEmailComponentModule", function() { return PsInputEmailComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-input-email.component */ "P7Z/");





let PsInputEmailComponentModule = class PsInputEmailComponentModule {
};
PsInputEmailComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]
        ],
        entryComponents: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputEmailComponentModule);



/***/ }),

/***/ "P7Z/":
/*!***********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PsInputEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputEmailComponent", function() { return PsInputEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-email.component.html */ "gSeR");
/* harmony import */ var _ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-email.component.scss */ "Ngnl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsInputEmailComponent = class PsInputEmailComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"] {
    constructor(commonP, loggerP) {
        super(commonP, loggerP);
        this.mainOptions = {};
    }
    ngOnInit() {
        this.mainOptions = this.options;
        this.mainOptions.type = 'email';
        this.mainOptions.iconOptions = {
            iconName: 'input-mail'
        };
    }
    onChangeEmail($event) {
        this.onPsChange.emit($event);
    }
};
PsInputEmailComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsInputEmailComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-email',
        template: _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsInputEmailComponent);



/***/ }),

/***/ "gSeR":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" [options]=\"mainOptions\"  (onPsChange)=\"onChangeEmail($event)\"></ps-keyin-input>\n");

/***/ })

}]);
//# sourceMappingURL=pages-contact-bank-contact-bank-module-es2015.js.map