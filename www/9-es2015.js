(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "06es":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.module.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: PsInputDisplayOnlyCIFAddressWorkComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressWorkComponentModule", function() { return PsInputDisplayOnlyCIFAddressWorkComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component */ "xmAG");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");





let PsInputDisplayOnlyCIFAddressWorkComponentModule = class PsInputDisplayOnlyCIFAddressWorkComponentModule {
};
PsInputDisplayOnlyCIFAddressWorkComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__["PsInputDisplayOnlyCIFAddressWorkComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"]
        ],
        exports: [
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__["PsInputDisplayOnlyCIFAddressWorkComponent"]
        ],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__["PsInputDisplayOnlyCIFAddressWorkComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputDisplayOnlyCIFAddressWorkComponentModule);



/***/ }),

/***/ "3Wus":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1kaXNwbGF5LW9ubHktY2lmLWFkZHJlc3Mtd29yay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "9tyk":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PsLovDeliveryLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLovDeliveryLocationComponent", function() { return PsLovDeliveryLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lov_delivery_location_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lov-delivery-location.component.html */ "sb3I");
/* harmony import */ var _ps_lov_delivery_location_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lov-delivery-location.component.scss */ "IF1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-lov.component */ "41l2");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");









let PsLovDeliveryLocationComponent = class PsLovDeliveryLocationComponent extends src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponent"] {
    constructor(commonProvService, logger) {
        super(commonProvService, logger);
        this.defaultSelectOptions = {
            iconLocation: src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.IMGS_FOLDER_URL,
            lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].DELIVERY_LOC_LOV_ID,
            iconExtension: '.svg'
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
        this.defaultSelectOptions.labelKey = this.commonProv.translate('delivery_location_key');
        this.defaultSelectOptions.placeHolder = this.commonProv.translate('select_delivery_location_key');
    }
    onChangeLov(values) {
        this.onPsChange.emit(values);
    }
};
PsLovDeliveryLocationComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsLovDeliveryLocationComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsLovDeliveryLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lov-delivery-location',
        template: _raw_loader_ps_lov_delivery_location_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lov_delivery_location_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsLovDeliveryLocationComponent);



/***/ }),

/***/ "IF1x":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb3YtZGVsaXZlcnktbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "KBTb":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.module.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: PsInputDisplayOnlyCIFAddressHomeComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressHomeComponentModule", function() { return PsInputDisplayOnlyCIFAddressHomeComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-input-display-only-cif-address-home.component */ "gmKe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");





let PsInputDisplayOnlyCIFAddressHomeComponentModule = class PsInputDisplayOnlyCIFAddressHomeComponentModule {
};
PsInputDisplayOnlyCIFAddressHomeComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__["PsInputDisplayOnlyCIFAddressHomeComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"]
        ],
        exports: [
            _ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__["PsInputDisplayOnlyCIFAddressHomeComponent"]
        ],
        entryComponents: [_ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__["PsInputDisplayOnlyCIFAddressHomeComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputDisplayOnlyCIFAddressHomeComponentModule);



/***/ }),

/***/ "Nd4l":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-input-display-only  id=\"displayOnlyCifWorkAddress\" [options]=\"defaultOptions\">\r\n</ps-input-display-only>");

/***/ }),

/***/ "SB9p":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-location/ps-complex-location.component.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsComplexLocationComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexLocationComponentModule", function() { return PsComplexLocationComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_keyin_input_ps_input_display_only_cif_address_home_ps_input_display_only_cif_address_home_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.module */ "KBTb");
/* harmony import */ var _ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.module */ "06es");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.module */ "ZNic");
/* harmony import */ var _ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ps-complex-select-branch/ps-complex-select-branch.component.module */ "ohDU");
/* harmony import */ var _ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ps-complex-location.component */ "pvj/");









let PsComplexLocationComponentModule = class PsComplexLocationComponentModule {
};
PsComplexLocationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexLocationComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__["PsLovDeliveryLocationComponentModule"],
            _ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_7__["PsComplexSelectBranchComponentModule"],
            _ps_keyin_input_ps_input_display_only_cif_address_home_ps_input_display_only_cif_address_home_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputDisplayOnlyCIFAddressHomeComponentModule"],
            _ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputDisplayOnlyCIFAddressWorkComponentModule"]
        ],
        exports: [
            _ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexLocationComponent"]
        ],
        entryComponents: [
            _ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexLocationComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexLocationComponentModule);



/***/ }),

/***/ "ZNic":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.module.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: PsLovDeliveryLocationComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLovDeliveryLocationComponentModule", function() { return PsLovDeliveryLocationComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-dropdown-lov.component.module */ "LhaX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component */ "9tyk");






let PsLovDeliveryLocationComponentModule = class PsLovDeliveryLocationComponentModule {
};
PsLovDeliveryLocationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__["PsLovDeliveryLocationComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponentModule"]
        ],
        exports: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__["PsLovDeliveryLocationComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__["PsLovDeliveryLocationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLovDeliveryLocationComponentModule);



/***/ }),

/***/ "aaLF":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.html ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-input-display-only  id=\"displayOnlyCifHomeAddress\" [options]=\"defaultOptions\">\r\n</ps-input-display-only>");

/***/ }),

/***/ "gmKe":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: PsInputDisplayOnlyCIFAddressHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressHomeComponent", function() { return PsInputDisplayOnlyCIFAddressHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_display_only_cif_address_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-display-only-cif-address-home.component.html */ "aaLF");
/* harmony import */ var _ps_input_display_only_cif_address_home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-display-only-cif-address-home.component.scss */ "lhfv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-display-only/ps-input-display-only.component */ "ggmK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");









let PsInputDisplayOnlyCIFAddressHomeComponent = class PsInputDisplayOnlyCIFAddressHomeComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_7__["PsInputDisplayOnlyComponent"] {
    constructor(commonP, loggerP, translateSrv) {
        super(commonP, loggerP);
        this.translateSrv = translateSrv;
        this.defaultOptions = {};
    }
    ngOnInit() {
        super.ngOnInit();
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
        this.address = [];
        if (this.cifInfo.customerInfoCO) {
            if (this.translateSrv.currentLang.toLocaleLowerCase() === 'ar') {
                this.address = [this.cifInfo.customerInfoCO.countryDescriptionArabic,
                    this.cifInfo.customerInfoCO.regionDescriptionArabic,
                    this.cifInfo.customerInfoCO.cityDescriptionArabic,
                    this.cifInfo.customerInfoCO.streetDetailsArabic];
            }
            else {
                this.address = [this.cifInfo.customerInfoCO.country,
                    this.cifInfo.customerInfoCO.regionName,
                    this.cifInfo.customerInfoCO.cityName,
                    this.cifInfo.customerInfoCO.streetDetails];
            }
            this.address = this.address.concat([this.cifInfo.customerInfoCO.buildingOrHouse,
                this.cifInfo.customerInfoCO.poBox]);
        }
        this.commonProv.setValInsideNestedObj(this.options.fcName, this.address.filter(x => x !== undefined).join('-'), this.options.requestVO);
    }
};
PsInputDisplayOnlyCIFAddressHomeComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
PsInputDisplayOnlyCIFAddressHomeComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputDisplayOnlyCIFAddressHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-display-only-cif-address-home',
        template: _raw_loader_ps_input_display_only_cif_address_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_display_only_cif_address_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
], PsInputDisplayOnlyCIFAddressHomeComponent);



/***/ }),

/***/ "lhfv":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1kaXNwbGF5LW9ubHktY2lmLWFkZHJlc3MtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pvj/":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-location/ps-complex-location.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PsComplexLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexLocationComponent", function() { return PsComplexLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_location_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-location.component.html */ "xkGR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsComplexLocationComponent = class PsComplexLocationComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(omniPull, commonProv, loggerP) {
        super(commonProv, loggerP);
        this.omniPull = omniPull;
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.branch = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE;
        this.home = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].HOME_ADDRESS_VALUE;
        this.work = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].WORK_ADDRESS_VALUE;
        this.other = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE;
        this.collectionType = null;
    }
    ngOnInit() {
        this.requestVO = this.options.homeAddressOptions.requestVO;
        if (this.options.cifBranchChecking == true) {
            this.fetchParameter();
        }
    }
    onCollectionModeChanged(data) {
        if (data && data.selectedObj) {
            this.collectionType = data.selectedObj.itemValue;
            this.resetOldData(data.selectedObj.itemValue);
            this.parentFun.emit();
        }
    }
    resetOldData(type) {
        if (type == this.home) {
            this.commonProv.setValInsideNestedObj(this.options.workAddressOptions.fcName, '', this.requestVO);
            this.commonProv.setValInsideNestedObj(this.options.otherAddressOptions.fcName, '', this.requestVO);
        }
        else if (type == this.work) {
            this.commonProv.setValInsideNestedObj(this.options.homeAddressOptions.fcName, '', this.requestVO);
            this.commonProv.setValInsideNestedObj(this.options.otherAddressOptions.fcName, '', this.requestVO);
        }
        else if (type == this.other) {
            this.commonProv.setValInsideNestedObj(this.options.homeAddressOptions.fcName, '', this.requestVO);
            this.commonProv.setValInsideNestedObj(this.options.workAddressOptions.fcName, '', this.requestVO);
        }
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USERINFO);
            const result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].COLLECTION_DESTINATION_BRANCH)
                .catch((error) => {
                this.logger.log(error);
            });
            if (result !== -1 && result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.enableCifBranch = 0;
            }
            else {
                if (result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                    this.options.branchCifOptions.labelKey = "delivery_account_branch_key";
                    this.commonProv.setValInsideNestedObj(this.options.branchCifOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchCode : '', this.requestVO);
                }
                else {
                    this.options.branchCifOptions.labelKey = "delivery_cif_branch_key";
                    this.commonProv.setValInsideNestedObj(this.options.branchCifOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.requestVO);
                }
                this.enableCifBranch = 1;
            }
            this.hideShowDeliveryBranch();
            this.parentFun.emit();
        });
    }
    hideShowDeliveryBranch() {
        var _a;
        let enablelocation = this.enableCifBranch == 1 ? 0 : 1;
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_VISIBLE, [(_a = this.options) === null || _a === void 0 ? void 0 : _a.branchCifOptions.fcName], this.enableCifBranch);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.options.otherAddressOptions.fcName,
            this.options.workAddressOptions.fcName, this.options.homeAddressOptions.fcName,
            this.options.collectionModeOptions.fcName, this.options.branchLocationOptions.fcName], enablelocation);
    }
};
PsComplexLocationComponent.ctorParameters = () => [
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsComplexLocationComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    parentFun: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ["parentFun",] }]
};
PsComplexLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-location',
        template: _raw_loader_ps_complex_location_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsComplexLocationComponent);



/***/ }),

/***/ "sb3I":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-dropdown-lov [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChangeLov($event)\"></ps-dropdown-lov>");

/***/ }),

/***/ "xkGR":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-location/ps-complex-location.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex>\n    <ng-container>\n        <ps-lov-delivery-location id=\"collection-mode\" [options]=\"options?.collectionModeOptions\"\n            (onPsChange)=\"onCollectionModeChanged($event)\">\n        </ps-lov-delivery-location>\n        <ps-complex-select-branch\n            *ngIf=\"(collectionType && collectionType === branch) || !collectionType\"\n            [options]=\"options?.branchLocationOptions\"\n        >\n        </ps-complex-select-branch>\n        <ps-input-display-only-cif-address-home\n            *ngIf=\"collectionType && collectionType === home\"\n            id=\"HomeAddressDetails\" \n            [options]=\"options?.homeAddressOptions\"\n        >\n        </ps-input-display-only-cif-address-home>\n        <ps-input-display-only-cif-address-work\n            *ngIf=\"collectionType && collectionType === work\"\n            id=\"workAddressDetails\" \n            [options]=\"options?.workAddressOptions\"\n        >\n        </ps-input-display-only-cif-address-work>\n        <ps-keyin-textarea \n            *ngIf=\"collectionType && collectionType === other\"\n            id=\"keyin_textarea\" \n            [options]=\"options?.otherAddressOptions\"\n        >\n        </ps-keyin-textarea>\n    </ng-container>\n    <ng-container>\n        <ps-input-display-only id=\"accountCifBranch\" *ngIf=\"options.cifBranchChecking\"\n            [options]=\"options?.branchCifOptions\">\n        </ps-input-display-only>\n    </ng-container>\n\n\n</ps-container-complex>");

/***/ }),

/***/ "xmAG":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: PsInputDisplayOnlyCIFAddressWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressWorkComponent", function() { return PsInputDisplayOnlyCIFAddressWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_display_only_cif_address_work_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-display-only-cif-address-work.component.html */ "Nd4l");
/* harmony import */ var _ps_input_display_only_cif_address_work_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-display-only-cif-address-work.component.scss */ "3Wus");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-display-only/ps-input-display-only.component */ "ggmK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsInputDisplayOnlyCIFAddressWorkComponent = class PsInputDisplayOnlyCIFAddressWorkComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_5__["PsInputDisplayOnlyComponent"] {
    constructor(commonP, loggerP, translateSrv) {
        super(commonP, loggerP);
        this.translateSrv = translateSrv;
        this.defaultOptions = {};
    }
    ngOnInit() {
        super.ngOnInit();
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USERINFO);
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
        this.address = [];
        if (this.cifInfo.customerInfoCO) {
            if (this.translateSrv.currentLang.toLocaleLowerCase() === 'ar') {
                this.address = [
                    this.cifInfo.customerInfoCO.institutionNameArabic,
                    this.cifInfo.customerInfoCO.countryDescriptionArabic,
                    this.cifInfo.customerInfoCO.regionDescriptionArabic,
                    this.cifInfo.customerInfoCO.cityDescriptionArabic,
                    this.cifInfo.customerInfoCO.streetDetailsArabic
                ];
            }
            else {
                this.address = [
                    this.cifInfo.customerInfoCO.institutionName,
                    this.cifInfo.customerInfoCO.country,
                    this.cifInfo.customerInfoCO.regionName,
                    this.cifInfo.customerInfoCO.cityName,
                    this.cifInfo.customerInfoCO.streetDetails
                ];
            }
            this.address = this.address.concat([this.cifInfo.customerInfoCO.employerpoBox]);
        }
        this.commonProv.setValInsideNestedObj(this.options.fcName, this.address.filter(x => x !== undefined).join('-'), this.options.requestVO);
    }
};
PsInputDisplayOnlyCIFAddressWorkComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
PsInputDisplayOnlyCIFAddressWorkComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputDisplayOnlyCIFAddressWorkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-display-only-cif-address-work',
        template: _raw_loader_ps_input_display_only_cif_address_work_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_display_only_cif_address_work_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], PsInputDisplayOnlyCIFAddressWorkComponent);



/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map