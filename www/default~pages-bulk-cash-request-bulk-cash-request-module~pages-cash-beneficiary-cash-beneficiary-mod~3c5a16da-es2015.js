(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-bulk-cash-request-bulk-cash-request-module~pages-cash-beneficiary-cash-beneficiary-mod~3c5a16da"],{

/***/ "+BRL":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PsInputFreeTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponent", function() { return PsInputFreeTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-free-text.component.html */ "wsER");
/* harmony import */ var _ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-free-text.component.scss */ "+jbq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");







/**
 * @author Aftab.Ali
 * @since 24/10/2019
 *
 * <p> PsInputFreeTextComponent is a simple component base on ps-keyin-input and have free text field</p>
 */
let PsInputFreeTextComponent = class PsInputFreeTextComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.defaultOptions = {};
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
    }
    onInputChanged(event) {
        this.onPsChange.emit(event);
    }
};
PsInputFreeTextComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }
];
PsInputFreeTextComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputFreeTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-free-text',
        template: _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
], PsInputFreeTextComponent);



/***/ }),

/***/ "+jbq":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1mcmVlLXRleHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "0nN4":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1wb3N0YWwtY29kZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2A9y":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PsInputFreeTextComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponentModule", function() { return PsInputFreeTextComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-input-free-text.component */ "+BRL");





let PsInputFreeTextComponentModule = class PsInputFreeTextComponentModule {
};
PsInputFreeTextComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]
        ],
        entryComponents: [
            _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputFreeTextComponentModule);



/***/ }),

/***/ "3znj":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-address/ps-complex-address.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex>\n  <!-- <ps-dropdown-country id=\"input_country\" [options]=\"defaultOptions.countriesOptions\"\n      (onPsChange)=\"countryChanged($event)\"></ps-dropdown-country> -->\n  <ps-complex-country-regions-cities [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"onRegionDDChanged($event)\">\n  </ps-complex-country-regions-cities>\n\n  <!-- Author: GRadwan 16/01/2020 -->\n  <!-- \n    <ps-dropdown-regions  id=\"input_region\" [options]=\"defaultOptions.regionOptions\"\n      (onPsChange)=\"regionChanged($event)\">\n    </ps-dropdown-regions>\n   -->\n\n  <!-- Author: GRadwan 16/01/2020 -->\n  <!--\n    <ps-dropdown-cities id=\"input_city\" [options]=\"defaultOptions.cityOptions\">\n    </ps-dropdown-cities>\n  -->\n  <ps-input-free-text id=\"input_free_text\" [options]=\"defaultOptions.streetOptions\">\n  </ps-input-free-text>\n\n  <!-- \n    <ps-input-free-text id=\"input_free_text\" [options]=\"defaultOptions.areaOptions\">\n    </ps-input-free-text>\n   -->\n\n  <ps-input-free-text id=\"input_free_text\" [options]=\"defaultOptions.buildingOptions\">\n  </ps-input-free-text>\n\n  <!-- <ps-complex-po-box  [options]=\"defaultOptions.poBoxOptions\"></ps-complex-po-box> -->\n  <ps-input-varchar [options]=\"defaultOptions.poBoxInputOptions\"></ps-input-varchar>\n\n\n  <ps-dropdown-postal-codes *ngIf=\"defaultOptions.postalCodesOptions\" [options]=\"defaultOptions.postalCodesOptions\">\n  </ps-dropdown-postal-codes>\n\n\n</ps-container-complex>");

/***/ }),

/***/ "CgZH":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-po-box/ps-complex-po-box.component.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PsComplexPoBoxComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPoBoxComponentModule", function() { return PsComplexPoBoxComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_regions_ps_dropdown_regions_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-regions/ps-dropdown-regions.component.module */ "R1EH");
/* harmony import */ var _ps_complex_po_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-complex-po-box.component */ "ejBJ");







let PsComplexPoBoxComponentModule = class PsComplexPoBoxComponentModule {
};
PsComplexPoBoxComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_po_box_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexPoBoxComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_select_dropdown_ps_dropdown_regions_ps_dropdown_regions_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDropdownRegionsComponentModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputVarcharComponentModule"],
        ],
        exports: [_ps_complex_po_box_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexPoBoxComponent"]],
        entryComponents: [_ps_complex_po_box_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexPoBoxComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexPoBoxComponentModule);



/***/ }),

/***/ "Ciov":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-po-box/ps-complex-po-box.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXBvLWJveC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "FFUQ":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-address/ps-complex-address.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FGev":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsDropdownPostalCodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownPostalCodesComponent", function() { return PsDropdownPostalCodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_postal_codes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-postal-codes.component.html */ "iDe/");
/* harmony import */ var _ps_dropdown_postal_codes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-postal-codes.component.scss */ "0nN4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownPostalCodesComponent = class PsDropdownPostalCodesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onPostalCodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.defaultSelectOptions = {
            labelKey: 'postal_codes_key',
            placeHolder: 'postal_codes_key',
            listOfOptions: []
        };
    }
    ngOnChanges() {
        if (this.options.selectedCountryCode && this.options.selectedRegionCode) {
            this.returnPostalCodes();
        }
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options);
        // this.returnPostalCodes();
    }
    returnPostalCodes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const paramData = {
                // eslint-disable-next-line radix
                countriesCode: parseInt(this.options.selectedCountryCode),
                // eslint-disable-next-line radix
                regionsCode: parseInt(this.options.selectedRegionCode),
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].POSTAL_CODE_OPER_ID
            };
            const result = yield this.omniPull.returnPostalCodes(paramData).catch(error => {
                this.logger.error('Error ! while fetching postalCodes in PsDropdownPostalCodesComponent', error);
            });
            if (result && result.gridModel && result.gridModel.length > 0) {
                this.defaultSelectOptions.listOfOptions = [];
                for (const iterator of result.gridModel) {
                    const country = {
                        itemValue: iterator.postalCodeCode,
                        description: iterator.briefDesc ? iterator.postalCodeCode + ' - ' + iterator.briefDesc : iterator.postalCodeCode,
                        selectedObj: iterator
                    };
                    this.defaultSelectOptions.listOfOptions.push(country);
                }
            }
        });
    }
    onChange(value) {
        this.onPsChange.emit(value);
    }
};
PsDropdownPostalCodesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownPostalCodesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onPostalCodeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsDropdownPostalCodesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-postal-codes',
        template: _raw_loader_ps_dropdown_postal_codes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_postal_codes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownPostalCodesComponent);



/***/ }),

/***/ "O90F":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-po-box/ps-complex-po-box.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [id]=\"'po_box' + id\" class=\"ps-entity-phone-number\">\n\n  <ps-dropdown-regions class=\"complex-phone border\" id=\"input_region\" [options]=\"defaultOptions.regionOptions\">\n  </ps-dropdown-regions>\n\n  <ps-input-varchar class=\"complex-phone-number\" [options]=\"defaultOptions.poBoxInputOptions\"></ps-input-varchar>\n\n</ps-container-complex>");

/***/ }),

/***/ "V52E":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-address/ps-complex-address.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PsComplexAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexAddressComponent", function() { return PsComplexAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_address_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-address.component.html */ "3znj");
/* harmony import */ var _ps_complex_address_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-address.component.scss */ "FFUQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");








let PsComplexAddressComponent = class PsComplexAddressComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.defaultOptions = {};
    }
    ngOnInit() {
        super.init();
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
    }
    countryChanged(event) {
        if (event !== undefined) {
            this.defaultOptions.regionOptions.selectedCountryCode = event.itemValue;
            this.defaultOptions.regionOptions = Object.assign({}, this.defaultOptions.regionOptions);
            // this.defaultOptions.poBoxOptions.regionOptions.selectedCountryCode = event.itemValue;
            // this.defaultOptions.poBoxOptions = Object.assign({}, this.defaultOptions.poBoxOptions);
        }
    }
    // AZDB-9931 - returnPostalCodeList is not being called even after selecting both country and region
    onRegionDDChanged(event) {
        var _a;
        if (event !== undefined) {
            if (event.selectedDropdown === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].COUNTRY_DROPDOWN) {
                this.defaultOptions.regionOptions.selectedCountryCode = event.itemValue;
                this.defaultOptions.regionOptions = Object.assign({}, this.defaultOptions.regionOptions);
                if (this.defaultOptions.postalCodesOptions) {
                    this.defaultOptions.postalCodesOptions.selectedCountryCode = event.itemValue;
                    this.defaultOptions.postalCodesOptions = Object.assign({}, this.defaultOptions.postalCodesOptions);
                }
            }
            else if (event.selectedDropdown === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].REGION_DROPDOWN) {
                if (this.defaultOptions.postalCodesOptions) {
                    this.defaultOptions.postalCodesOptions.selectedRegionCode = ((_a = event.selectedObj) === null || _a === void 0 ? void 0 : _a.countriesRegionCode) || event.itemValue;
                    this.defaultOptions.postalCodesOptions = Object.assign({}, this.defaultOptions.postalCodesOptions);
                }
            }
        }
    }
};
PsComplexAddressComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexAddressComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexAddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-address',
        template: _raw_loader_ps_complex_address_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_address_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexAddressComponent);



/***/ }),

/***/ "dqMd":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-address/ps-complex-address.component.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PsComplexAddressComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexAddressComponentModule", function() { return PsComplexAddressComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_cities_ps_dropdown_cities_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-cities/ps-dropdown-cities.component.module */ "cTi5");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component.module */ "jjhr");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_postal_codes_ps_dropdown_postal_codes_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.module */ "xLgG");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_regions_ps_dropdown_regions_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-regions/ps-dropdown-regions.component.module */ "R1EH");
/* harmony import */ var _ps_complex_po_box_ps_complex_po_box_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ps-complex-po-box/ps-complex-po-box.component.module */ "CgZH");
/* harmony import */ var _ps_complex_address_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ps-complex-address.component */ "V52E");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_country_regions_cities_ps_complex_country_regions_cities_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-country-regions-cities/ps-complex-country-regions-cities.component.module */ "X7AV");














let PsComplexAddressComponentModule = class PsComplexAddressComponentModule {
};
PsComplexAddressComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_address_component__WEBPACK_IMPORTED_MODULE_12__["PsComplexAddressComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponentModule"],
            _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_8__["PsDropdownCountryComponentModule"],
            _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputNumericComponentModule"],
            _ps_select_dropdown_ps_dropdown_regions_ps_dropdown_regions_component_module__WEBPACK_IMPORTED_MODULE_10__["PsDropdownRegionsComponentModule"],
            _ps_select_dropdown_ps_dropdown_cities_ps_dropdown_cities_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDropdownCitiesComponentModule"],
            _ps_select_dropdown_ps_dropdown_postal_codes_ps_dropdown_postal_codes_component_module__WEBPACK_IMPORTED_MODULE_9__["PsDropdownPostalCodesComponentModule"],
            _ps_complex_po_box_ps_complex_po_box_component_module__WEBPACK_IMPORTED_MODULE_11__["PsComplexPoBoxComponentModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_country_regions_cities_ps_complex_country_regions_cities_component_module__WEBPACK_IMPORTED_MODULE_13__["PsComplexCountryRegionsCitiesComponentModule"]
        ],
        exports: [
            _ps_complex_address_component__WEBPACK_IMPORTED_MODULE_12__["PsComplexAddressComponent"]
        ],
        entryComponents: [
            _ps_complex_address_component__WEBPACK_IMPORTED_MODULE_12__["PsComplexAddressComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
    // Author: GRadwan 16/01/2020
], PsComplexAddressComponentModule);



/***/ }),

/***/ "ejBJ":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-po-box/ps-complex-po-box.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PsComplexPoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPoBoxComponent", function() { return PsComplexPoBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_po_box_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-po-box.component.html */ "O90F");
/* harmony import */ var _ps_complex_po_box_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-po-box.component.scss */ "Ciov");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexPoBoxComponent = class PsComplexPoBoxComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.defaultOptions = {
            regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'region_key',
                fcName: 'region',
                selectedCountryCode: '',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            poBoxInputOptions: {
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
                fcName: 'poboxinput',
            }
        };
    }
    ngOnInit() {
        super.init();
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
    }
};
PsComplexPoBoxComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexPoBoxComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexPoBoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-po-box',
        template: _raw_loader_ps_complex_po_box_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_po_box_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexPoBoxComponent);



/***/ }),

/***/ "iDe/":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onChange($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "jSSe":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponentModule", function() { return PsDateDayMonthYearComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-date-day-month-year.component */ "BcCD");





let PsDateDayMonthYearComponentModule = class PsDateDayMonthYearComponentModule {
};
PsDateDayMonthYearComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]
        ],
        exports: [
            _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]
        ],
        entryComponents: [
            _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDateDayMonthYearComponentModule);



/***/ }),

/***/ "wsER":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"onInputChanged($event)\"></ps-keyin-input>");

/***/ }),

/***/ "xLgG":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PsDropdownPostalCodesComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownPostalCodesComponentModule", function() { return PsDropdownPostalCodesComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_postal_codes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-postal-codes.component */ "FGev");





let PsDropdownPostalCodesComponentModule = class PsDropdownPostalCodesComponentModule {
};
PsDropdownPostalCodesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_dropdown_postal_codes_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownPostalCodesComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_dropdown_postal_codes_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownPostalCodesComponent"]
        ],
        entryComponents: [
            _ps_dropdown_postal_codes_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownPostalCodesComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownPostalCodesComponentModule);



/***/ })

}]);
//# sourceMappingURL=default~pages-bulk-cash-request-bulk-cash-request-module~pages-cash-beneficiary-cash-beneficiary-mod~3c5a16da-es2015.js.map