(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cif-opening-cif-opening-module~pages-onboarding-onboarding-module~pages-personal-detai~cf42c052"],{

/***/ "++mf":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [options]=\"options\" (onPsChange)=\"onChange($event)\" ></ps-select-dropdown>");

/***/ }),

/***/ "+Gku":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: PsDropdownMaritalStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownMaritalStatusComponent", function() { return PsDropdownMaritalStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_marital_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-marital-status.component.html */ "qRHe");
/* harmony import */ var _ps_dropdown_marital_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-marital-status.component.scss */ "OnhY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");










let PsDropdownMaritalStatusComponent = class PsDropdownMaritalStatusComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.omniPull = omniPull;
        this.options = {};
        this.maritalstatus = [];
        this.defalultOptions = {};
    }
    ngOnInit() {
        this.loadMaritalStatus();
        this.commonProv.copyObject(this.defalultOptions, this.options, false);
    }
    loadMaritalStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const paramData = {
                language: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].activeLanguge,
                lovTypeId: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].MARITAL_STATUS_LOV_TYPE_ID,
            };
            const result = yield this.omniPull.returnLovTypesValues(paramData).catch(error => {
                this.logger.error('Error: While fetching LOV types in PsDropdownLovComponent :', error);
            });
            this.defalultOptions.listOfOptions = [];
            if (result && result.length > 0) {
                for (const iterator of result) {
                    const lovDropDown = {
                        itemValue: iterator.itemValue,
                        description: iterator.description,
                        selectedObj: iterator
                    };
                    this.defalultOptions.listOfOptions.push(lovDropDown);
                }
            }
        });
    }
};
PsDropdownMaritalStatusComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsDropdownMaritalStatusComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownMaritalStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-marital-status',
        template: _raw_loader_ps_dropdown_marital_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_marital_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsDropdownMaritalStatusComponent);



/***/ }),

/***/ "4GcI":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1uYXRpb25hbGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5eGu":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXBlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "E18k":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.module.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: PsComplexCifDetailsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexCifDetailsComponentModule", function() { return PsComplexCifDetailsComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */ "Hy46");
/* harmony import */ var _ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-email/ps-input-email.module */ "OzHP");
/* harmony import */ var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ps-complex-address/ps-complex-address.component.module */ "dqMd");
/* harmony import */ var _ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ps-complex-cif-details.component */ "sV6Y");











let PsComplexCifDetailsComponentModule = class PsComplexCifDetailsComponentModule {
};
PsComplexCifDetailsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexCifDetailsComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputFreeTextComponentModule"],
            _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInputNumericComponentModule"],
            _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexAddressComponentModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputVarcharComponentModule"],
            _ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_5__["PsInputEmailComponentModule"],
            _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__["PsEntityPhoneNumberComponentModule"]
        ],
        exports: [
            _ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexCifDetailsComponent"]
        ],
        entryComponents: [
            _ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexCifDetailsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexCifDetailsComponentModule);



/***/ }),

/***/ "F0fd":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PsDropdownMaritalStatusComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownMaritalStatusComponentModule", function() { return PsDropdownMaritalStatusComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-marital-status.component */ "+Gku");





let PsDropdownMaritalStatusComponentModule = class PsDropdownMaritalStatusComponentModule {
};
PsDropdownMaritalStatusComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownMaritalStatusComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]
        ],
        exports: [_ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownMaritalStatusComponent"]],
        entryComponents: [_ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownMaritalStatusComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownMaritalStatusComponentModule);



/***/ }),

/***/ "G2u2":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.module.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsDropdownNationalitiesComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownNationalitiesComponentModule", function() { return PsDropdownNationalitiesComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-nationalities.component */ "dUiw");





let PsDropdownNationalitiesComponentModule = class PsDropdownNationalitiesComponentModule {
};
PsDropdownNationalitiesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownNationalitiesComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownNationalitiesComponent"]
        ],
        entryComponents: [
            _ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownNationalitiesComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownNationalitiesComponentModule);



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

/***/ "OnhY":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1tYXJpdGFsLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "SYYf":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.module.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: PsComplexEmploymentDetailsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexEmploymentDetailsComponentModule", function() { return PsComplexEmploymentDetailsComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */ "Hy46");
/* harmony import */ var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */ "vRU4");
/* harmony import */ var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.module */ "Y+Uy");
/* harmony import */ var _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ps-complex-address/ps-complex-address.component.module */ "dqMd");
/* harmony import */ var _ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ps-complex-employment-details.component */ "WyFo");












let PsComplexEmploymentDetailsComponentModule = class PsComplexEmploymentDetailsComponentModule {
};
PsComplexEmploymentDetailsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexEmploymentDetailsComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputFreeTextComponentModule"],
            _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInputNumericComponentModule"],
            _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_10__["PsComplexAddressComponentModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputVarcharComponentModule"],
            _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponentModule"],
            _ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component_module__WEBPACK_IMPORTED_MODULE_9__["PsDropdownOccupationComponentModule"],
            _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__["PsEntityPhoneNumberComponentModule"]
        ],
        exports: [
            _ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexEmploymentDetailsComponent"]
        ],
        entryComponents: [
            _ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexEmploymentDetailsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexEmploymentDetailsComponentModule);



/***/ }),

/***/ "WGyA":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PsDropdownOccupationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownOccupationComponent", function() { return PsDropdownOccupationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_occupation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-occupation.component.html */ "doD4");
/* harmony import */ var _ps_dropdown_occupation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-occupation.component.scss */ "ywvj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownOccupationComponent = class PsDropdownOccupationComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.occupationOptions = {};
    }
    ngOnInit() {
        this.loadOccupation();
        this.commonProv.copyObject(this.occupationOptions, this.options);
    }
    onChangeOccupation(value) {
        this.onPsChange.emit(value);
    }
    loadOccupation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = {
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].OCCUPATION_OPER_ID
            };
            const result = yield this.omniPull.reutrnOccupation(params).catch(error => {
                this.logger.error('Error ! while fetching occupation in PsDropdownOccupationComponent', error);
            });
            this.occupationOptions.listOfOptions = [];
            if (result && result.gridModel && result.gridModel.length > 0) {
                for (const iterator of result.gridModel) {
                    const country = {
                        itemValue: iterator.positionCode,
                        description: iterator.briefDescription,
                        selectedObj: iterator
                    };
                    this.occupationOptions.listOfOptions.push(country);
                }
            }
        });
    }
};
PsDropdownOccupationComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownOccupationComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownOccupationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-occupation',
        template: _raw_loader_ps_dropdown_occupation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_occupation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownOccupationComponent);



/***/ }),

/***/ "WyFo":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: PsComplexEmploymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexEmploymentDetailsComponent", function() { return PsComplexEmploymentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_employment_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-employment-details.component.html */ "gHhM");
/* harmony import */ var _ps_complex_employment_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-employment-details.component.scss */ "ykt3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexEmploymentDetailsComponent = class PsComplexEmploymentDetailsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
    }
    ngOnInit() {
    }
};
PsComplexEmploymentDetailsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexEmploymentDetailsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexEmploymentDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-employment-details',
        template: _raw_loader_ps_complex_employment_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_employment_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexEmploymentDetailsComponent);



/***/ }),

/***/ "Y+Uy":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PsDropdownOccupationComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownOccupationComponentModule", function() { return PsDropdownOccupationComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-occupation.component */ "WGyA");





let PsDropdownOccupationComponentModule = class PsDropdownOccupationComponentModule {
};
PsDropdownOccupationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownOccupationComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownOccupationComponent"]
        ],
        entryComponents: [
            _ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownOccupationComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownOccupationComponentModule);



/***/ }),

/***/ "YfFg":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex>\n\n\n  <ps-complex-address [options]=\"options.addressOptions\"></ps-complex-address>\n\n\n  <ps-entity-phone-number [options]=\"options.mobileNumberOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.residentialTelOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.faxOptions\"></ps-entity-phone-number>\n\n\n  <ps-input-email [options]=\"options.emailOptions\"></ps-input-email>\n\n\n</ps-container-complex>");

/***/ }),

/***/ "YgGx":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsComplexPersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPersonalDetailsComponent", function() { return PsComplexPersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_personal_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-personal-details.component.html */ "z7wq");
/* harmony import */ var _ps_complex_personal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-personal-details.component.scss */ "5eGu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexPersonalDetailsComponent = class PsComplexPersonalDetailsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
    }
    ngOnInit() {
    }
};
PsComplexPersonalDetailsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexPersonalDetailsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexPersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-personal-details',
        template: _raw_loader_ps_complex_personal_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_personal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexPersonalDetailsComponent);



/***/ }),

/***/ "dUiw":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: PsDropdownNationalitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownNationalitiesComponent", function() { return PsDropdownNationalitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_nationalities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-nationalities.component.html */ "++mf");
/* harmony import */ var _ps_dropdown_nationalities_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-nationalities.component.scss */ "4GcI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownNationalitiesComponent = class PsDropdownNationalitiesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.defaultSelectOptions = {};
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
        this.returnNationalities();
    }
    returnNationalities() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nationaltiesRequest = {
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].NATIONALITY_OPER_ID
            }; // No need other than company code as all the nationalities will be retrieved
            const nationalitiesResponse = yield this.omniPull.returnNationalities(nationaltiesRequest).catch(error => {
                this.logger.error('Error! while fetching nationalities in PsDropdownNationalitiesComponent', error);
            });
            this.defaultSelectOptions.listOfOptions = [];
            if (nationalitiesResponse && nationalitiesResponse.gridModel && nationalitiesResponse.gridModel.length > 0) {
                for (const iterator of nationalitiesResponse.gridModel) {
                    const documents = {
                        itemValue: iterator.NATIONALITY_CODE,
                        description: iterator.longDesc,
                        selectedObj: iterator
                    };
                    this.defaultSelectOptions.listOfOptions.push(documents);
                }
                this.options.listOfOptions = [];
                this.commonProv.copyObject(this.options.listOfOptions, this.defaultSelectOptions.listOfOptions, false);
            }
        });
    }
    onChange(value) {
        this.onPsChange.emit(value);
    }
};
PsDropdownNationalitiesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownNationalitiesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownNationalitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-nationalities',
        template: _raw_loader_ps_dropdown_nationalities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_nationalities_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownNationalitiesComponent);



/***/ }),

/***/ "doD4":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\"  [options]=\"occupationOptions\" (onPsChange)=\"onChangeOccupation($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "gHhM":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex>\n\n  <ps-input-varchar *ngIf=\"!options.isInstitutionType\" [options]=\"options.employerNameOptions\"></ps-input-varchar>\n\n\n  <ps-dropdown-occupation *ngIf=\"!options.isInstitutionType\" [options]=\"options.occupationOptions\">\n  </ps-dropdown-occupation>\n\n\n  <ps-complex-address [options]=\"options.addressOptions\"></ps-complex-address>\n\n\n  <ps-date-day-month-year-past *ngIf=\"options.isInstitutionType\" [id]=\"id + '_establishment_date'\"\n    [options]=\"options.establishmentDateOptions\">\n  </ps-date-day-month-year-past>\n\n\n  <ps-entity-phone-number [options]=\"options.officeTelPhoneNumberOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.handPhoneNumberOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.faxOptions\"></ps-entity-phone-number>\n\n\n  <ps-date-day-month-year-past id=\"date_day_month_year_past\" [options]=\"options.dateOfJoiningDivisionOptions\">\n  </ps-date-day-month-year-past>\n\n</ps-container-complex>");

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

/***/ }),

/***/ "qRHe":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [options]=\"defalultOptions\" ></ps-select-dropdown>");

/***/ }),

/***/ "sV6Y":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: PsComplexCifDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexCifDetailsComponent", function() { return PsComplexCifDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_cif_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-cif-details.component.html */ "YfFg");
/* harmony import */ var _ps_complex_cif_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-cif-details.component.scss */ "wZsD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexCifDetailsComponent = class PsComplexCifDetailsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
    }
    ngOnInit() {
    }
};
PsComplexCifDetailsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexCifDetailsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexCifDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-cif-details',
        template: _raw_loader_ps_complex_cif_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_cif_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexCifDetailsComponent);



/***/ }),

/***/ "tG32":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.module.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PsComplexPersonalDetailsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPersonalDetailsComponentModule", function() { return PsComplexPersonalDetailsComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */ "vRU4");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_marital_status_ps_dropdown_marital_status_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.module */ "F0fd");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.module */ "G2u2");
/* harmony import */ var _ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ps-complex-personal-details.component */ "YgGx");









let PsComplexPersonalDetailsComponentModule = class PsComplexPersonalDetailsComponentModule {
};
PsComplexPersonalDetailsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputVarcharComponentModule"],
            _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearPastComponentModule"],
            _ps_select_dropdown_ps_dropdown_marital_status_ps_dropdown_marital_status_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownMaritalStatusComponentModule"],
            _ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDropdownNationalitiesComponentModule"]
        ],
        exports: [
            _ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponent"]
        ],
        entryComponents: [
            _ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexPersonalDetailsComponentModule);



/***/ }),

/***/ "wZsD":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWNpZi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ykt3":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWVtcGxveW1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ywvj":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1vY2N1cGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "z7wq":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex>\n\n\n  <ps-input-varchar *ngIf=\"!options.isInstitutionType && options.customerNameOptions\"\n    [options]=\"options.customerNameOptions\"></ps-input-varchar>\n\n  <ps-date-day-month-year-past *ngIf=\"!options.isInstitutionType\" [options]=\"options.psDobOptions\" [id]=\"'dob_' + id\"\n    class=\"ps-date-month-year\">\n  </ps-date-day-month-year-past>\n\n\n  <ps-dropdown-nationalities [options]=\"options.nationalityOptions\" [id]=\"'nationality_' + id\">\n  </ps-dropdown-nationalities>\n\n\n  <ps-dropdown-marital-status *ngIf=\"!options.isInstitutionType\" [options]=\"options.maritalstatusOptions\"\n    [id]=\"'maritalstatus_' + id\"></ps-dropdown-marital-status>\n\n</ps-container-complex>");

/***/ })

}]);
//# sourceMappingURL=default~pages-cif-opening-cif-opening-module~pages-onboarding-onboarding-module~pages-personal-detai~cf42c052-es2015.js.map