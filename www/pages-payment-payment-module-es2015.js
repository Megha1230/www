(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

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

/***/ "0GVO":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesInternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternalComponent", function() { return PsLookupBeneficiariesInternalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_beneficiaries_internal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-beneficiaries-internal.component.html */ "Rok/");
/* harmony import */ var _ps_lookup_beneficiaries_internal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-internal.component.scss */ "aSGy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */ "Zrkw");












/**
 * @author Aftab.Ali
 * @since 04/02/2020
 *
 * <p> PsLookupBeneficiariesInternalComponent is a lookup component to show internal Benificiaries list fetched from the server</p>
 */
let PsLookupBeneficiariesInternalComponent = class PsLookupBeneficiariesInternalComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_internal_benef_found_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.beneficiariesRequestParam = {};
        this.populateInternalBenificiaryMap();
    }
    ngOnInit() {
        super.init();
        this.loadInternalBenificiaries();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192
        this.complexLookupOptions.requestObject = this.options.requestObject;
        this.complexLookupOptions.type = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternalBeneficiaryComponent"];
        }
    }
    /**
     * populating Benificiaries - fetching from server
     */
    loadInternalBenificiaries() {
        this.options.listOfBenificiaries = [];
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE,
            filterByOper: true
        };
        this.returnInternalBenificiaries(this.beneficiariesRequestParam);
    }
    /**
     * fetching Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnInternalBenificiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching internal beneficiaries in PsLookupBeneficiariesInternalComponent: ', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateCustomInternalBeneficiaries(result.gridModel);
            }
            else {
                this.listOfBenificiaries = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populateInternalBenificiaryMap() {
        let beneficiaryAccountNumberMap = {};
        let beneficiaryBankNameMap = {};
        beneficiaryAccountNumberMap = {
            key: 'beneficiaryAccountNumber',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryBankNameMap = {
            key: 'beneficiaryBankName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('beneficiary_key', beneficiaryAccountNumberMap);
        this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
    }
    onChangeItem(event) {
        this.onBenificiaryChange.emit(event);
    }
    /**
     * customizing internal beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomInternalBeneficiaries(internalBeneficiaries) {
        return this.beneficiariesService.populateInternalBeneficiaries(internalBeneficiaries);
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
};
PsLookupBeneficiariesInternalComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
PsLookupBeneficiariesInternalComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }],
    onBenificiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupBeneficiariesInternalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-internal',
        template: _raw_loader_ps_lookup_beneficiaries_internal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_internal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], PsLookupBeneficiariesInternalComponent);



/***/ }),

/***/ "1wDr":
/*!*******************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PsPurposeComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsPurposeComponentModule", function() { return PsPurposeComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-purpose.component */ "fVca");





let PsPurposeComponentModule = class PsPurposeComponentModule {
};
PsPurposeComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__["PsPurposeComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__["PsPurposeComponent"]
        ],
        entryComponents: [
            _ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__["PsPurposeComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsPurposeComponentModule);



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

/***/ "32Le":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.module.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesLocalComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalComponentModule", function() { return PsLookupBeneficiariesLocalComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-local.component */ "PMli");






let PsLookupBeneficiariesLocalComponentModule = class PsLookupBeneficiariesLocalComponentModule {
};
PsLookupBeneficiariesLocalComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]
        ],
        exports: [
            _ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalComponent"]
        ],
        entryComponents: [
            _ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupBeneficiariesLocalComponentModule);



/***/ }),

/***/ "3lU2":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1pbnRlcm5hdGlvbmFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5F0I":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesLocalCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalCardComponent", function() { return PsLookupBeneficiariesLocalCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_beneficiaries_local_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-beneficiaries-local-card.component.html */ "62QG");
/* harmony import */ var _ps_lookup_beneficiaries_local_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-local-card.component.scss */ "XvIo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */ "Zrkw");












let PsLookupBeneficiariesLocalCardComponent = class PsLookupBeneficiariesLocalCardComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_local_card_beneficiary_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.beneficiariesRequestParam = {};
        this.populateLocalCardBenificiaryMap();
    }
    ngOnInit() {
        super.init();
        this.loadLocalCardBenificiaries();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
        this.complexLookupOptions.requestObject = this.options.requestObject;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternalBeneficiaryComponent"];
        }
    }
    /**
     * populating Local Card Benificiaries - fetching from server
     */
    loadLocalCardBenificiaries() {
        this.options.listOfBenificiaries = [];
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_TYPE,
            filterByOper: true
        };
        this.returnLocalCardBenificiaries(this.beneficiariesRequestParam);
    }
    /**
     * fetching Local Card Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnLocalCardBenificiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching local card beneficiaries in PsLookupBeneficiariesLocalCardComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateCustomLocalCardBeneficiaries(result.gridModel);
            }
            else {
                this.listOfBenificiaries = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populateLocalCardBenificiaryMap() {
        let beneficiaryCardNumberMap = {};
        let beneficiaryLocalNameMap = {};
        beneficiaryCardNumberMap = {
            key: 'beneficiaryCardNumber',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryLocalNameMap = {
            key: 'beneficiaryLocalName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('beneficiary_key', beneficiaryCardNumberMap);
        this.labelValuesMap.set('local_name_key', beneficiaryLocalNameMap);
    }
    onChangeItem(event) {
        this.onBenificiaryChange.emit(event);
    }
    /**
     * customizing local card beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomLocalCardBeneficiaries(localCardBeneficiaries) {
        return this.beneficiariesService.populateLocalCardBeneficiaries(localCardBeneficiaries);
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
};
PsLookupBeneficiariesLocalCardComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
PsLookupBeneficiariesLocalCardComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }],
    onBenificiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupBeneficiariesLocalCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-local-card',
        template: _raw_loader_ps_lookup_beneficiaries_local_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_local_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], PsLookupBeneficiariesLocalCardComponent);



/***/ }),

/***/ "62QG":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "6DQR":
/*!******************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PsRemittanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsRemittanceComponent", function() { return PsRemittanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_remittance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-remittance.component.html */ "oj4Y");
/* harmony import */ var _ps_remittance_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-remittance.component.scss */ "OLRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsRemittanceComponent = class PsRemittanceComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.categoriesOptions = {};
    }
    ngOnInit() {
        this.categoriesOptions = {
            defaultLoad: true,
            category: {
                labelKey: this.options.categoryLabelKey,
                placeHolder: this.options.categoryPlaceholderKey,
                fcName: this.options.categoryFcName,
                group: this.options.group
            },
            subCategory: {
                labelKey: this.options.subCategoryLabelKey,
                placeHolder: this.options.subCategoryPlaceholderKey,
                fcName: this.options.subCategoryFcName,
                group: this.options.group
            },
            requestObject: this.options.requestObject
        };
    }
};
PsRemittanceComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsRemittanceComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsRemittanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-remittance',
        template: _raw_loader_ps_remittance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_remittance_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsRemittanceComponent);



/***/ }),

/***/ "6H8u":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1sb2NhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6Ozt":
/*!**********************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1iYW5rcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6nht":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesInternationalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternationalComponent", function() { return PsLookupBeneficiariesInternationalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_beneficiaries_international_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-beneficiaries-international.component.html */ "CurX");
/* harmony import */ var _ps_lookup_beneficiaries_international_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-international.component.scss */ "3lU2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component */ "ZI0R");












/**
 * @author Aftab.Ali
 * @since 04/02/2020
 *
 * <p> PsLookupBeneficiariesInternationalComponent is a lookup component to show international benificiaries list fetched from server</p>
 */
let PsLookupBeneficiariesInternationalComponent = class PsLookupBeneficiariesInternationalComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_international_benf_found_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.beneficiariesRequestParam = {};
        this.populateInternationalBenificiaryMap();
    }
    ngOnInit() {
        super.init();
        this.loadInternationalBenificiaries();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
        this.complexLookupOptions.requestObject = this.options.requestObject;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternationalBeneficiaryComponent"];
        }
    }
    /**
     * populating loadInternational Benificiaries - fetching from server
     */
    loadInternationalBenificiaries() {
        this.options.listOfBenificiaries = [];
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL,
            filterByOper: true
        };
        this.returnInternationalBenificiaries(this.beneficiariesRequestParam);
    }
    /**
     * fetching Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnInternationalBenificiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching international beneficiaries in PsLookupBeneficiariesInternationalComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateCustomInternationalBeneficiaries(result.gridModel);
            }
            else {
                this.listOfBenificiaries = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populateInternationalBenificiaryMap() {
        let beneficiaryAccountNumberMap = {};
        let beneficiaryBankNameMap = {};
        beneficiaryAccountNumberMap = {
            key: 'beneficiaryAccountNumber',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryBankNameMap = {
            key: 'bankName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('beneficiary_key', beneficiaryAccountNumberMap);
        this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
    }
    onChangeItem(event) {
        this.onBenificiaryChange.emit(event);
    }
    /**
     * customizing international beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomInternationalBeneficiaries(internationBeneficiaries) {
        return this.beneficiariesService.populateInternationalBeneficiaries(internationBeneficiaries);
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
};
PsLookupBeneficiariesInternationalComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
PsLookupBeneficiariesInternationalComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }],
    onBenificiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupBeneficiariesInternationalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-international',
        template: _raw_loader_ps_lookup_beneficiaries_international_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_international_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], PsLookupBeneficiariesInternationalComponent);



/***/ }),

/***/ "9oYr":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXN3aWZ0LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "CurX":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "D2J3":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-category-sub-category [options]=\"categoriesOptions\" (onPsChange)=\"onBankChanged($event)\"></ps-category-sub-category>");

/***/ }),

/***/ "F9YD":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PsComplexIdDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexIdDetailsModule", function() { return PsComplexIdDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */ "vRU4");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component.module */ "jjhr");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.module */ "j6t5");
/* harmony import */ var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.module */ "GNGv");
/* harmony import */ var _ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ps-complex-id-details.component */ "y70R");










let PsComplexIdDetailsModule = class PsComplexIdDetailsModule {
};
PsComplexIdDetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputFreeTextComponentModule"],
            _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDropDownIdTypesComponentModule"],
            _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_8__["PsDateDayMonthYearFutureComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_2__["PsDateDayMonthYearPastComponentModule"],
            _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownCountryComponentModule"]
        ],
        exports: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        entryComponents: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexIdDetailsModule);



/***/ }),

/***/ "GYV1":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.module.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesInternalComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternalComponentModule", function() { return PsLookupBeneficiariesInternalComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-internal.component */ "0GVO");






let PsLookupBeneficiariesInternalComponentModule = class PsLookupBeneficiariesInternalComponentModule {
};
PsLookupBeneficiariesInternalComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternalComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]
        ],
        exports: [
            _ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternalComponent"]
        ],
        entryComponents: [
            _ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternalComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupBeneficiariesInternalComponentModule);



/***/ }),

/***/ "Gxq1":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesCashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesCashComponent", function() { return PsLookupBeneficiariesCashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_beneficiaries_cash_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-beneficiaries-cash.component.html */ "cm1V");
/* harmony import */ var _ps_lookup_beneficiaries_cash_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-cash.component.scss */ "rNEQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component */ "YaLh");












/**
 * @author G.Radwan
 * @since 05/06/2021
 *
 * <p> PsLookupBeneficiariesCashComponent is a lookup component to show local benificiaries list fetched from server</p>
 */
let PsLookupBeneficiariesCashComponent = class PsLookupBeneficiariesCashComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_cash_beneficiary_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.beneficiariesRequestParam = {};
        this.populateCashBenificiaryMap();
    }
    ngOnInit() {
        super.init();
        this.loadCashBenificiaries();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192
        this.complexLookupOptions.requestObject = this.options.requestObject;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component__WEBPACK_IMPORTED_MODULE_11__["PsCashTransferComponent"];
        }
    }
    /**
     * populating Local Benificiaries - fetching from server
     */
    loadCashBenificiaries() {
        this.options.listOfBenificiaries = [];
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER,
            filterByOper: true
        };
        this.returnCashBenificiaries(this.beneficiariesRequestParam);
    }
    /**
     * fetching Local Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnCashBenificiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching cash beneficiaries in PsLookupBeneficiariesCashComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateCustomCashBeneficiaries(result.gridModel);
            }
            else {
                this.listOfBenificiaries = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populateCashBenificiaryMap() {
        let beneficiaryIdNumberMap = {};
        let beneficiaryNameMap = {};
        beneficiaryIdNumberMap = {
            key: 'idNumber',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryNameMap = {
            key: 'benefName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('beneficiary_key', beneficiaryNameMap);
        this.labelValuesMap.set('bank_name_key', beneficiaryIdNumberMap);
    }
    onChangeItem(event) {
        this.onBenificiaryChange.emit(event);
    }
    /**
     * customizing local beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomCashBeneficiaries(localBeneficiaries) {
        return this.beneficiariesService.populateCashTransfers(localBeneficiaries);
    }
};
PsLookupBeneficiariesCashComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
PsLookupBeneficiariesCashComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onBenificiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupBeneficiariesCashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-cash',
        template: _raw_loader_ps_lookup_beneficiaries_cash_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_cash_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], PsLookupBeneficiariesCashComponent);



/***/ }),

/***/ "IRv+":
/*!*************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: PsRemittanceComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsRemittanceComponentModule", function() { return PsRemittanceComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-remittance.component */ "6DQR");





let PsRemittanceComponentModule = class PsRemittanceComponentModule {
};
PsRemittanceComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__["PsRemittanceComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__["PsRemittanceComponent"]
        ],
        entryComponents: [
            _ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__["PsRemittanceComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsRemittanceComponentModule);



/***/ }),

/***/ "JEks":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "KjSF":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesBankCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesBankCardComponent", function() { return PsLookupBeneficiariesBankCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_beneficiaries_bank_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-beneficiaries-bank-card.component.html */ "Zewi");
/* harmony import */ var _ps_lookup_beneficiaries_bank_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-bank-card.component.scss */ "vgQz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */ "Zrkw");












let PsLookupBeneficiariesBankCardComponent = class PsLookupBeneficiariesBankCardComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_bank_card_beneficiary_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.beneficiariesRequestParam = {};
        this.populateBankCardBenificiaryMap();
    }
    ngOnInit() {
        super.init();
        this.loadBankCardBenificiaries();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
        this.complexLookupOptions.requestObject = this.options.requestObject;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternalBeneficiaryComponent"];
        }
    }
    /**
     * populating Bank Card Benificiaries - fetching from server
     */
    loadBankCardBenificiaries() {
        this.options.listOfBenificiaries = [];
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_TYPE,
            filterByOper: true
        };
        this.returnBankCardBenificiaries(this.beneficiariesRequestParam);
    }
    /**
     * fetching Bank Card Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnBankCardBenificiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching bank card beneficiaries in PsLookupBeneficiariesBankCardComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateCustomBankCardBeneficiaries(result.gridModel);
            }
            else {
                this.listOfBenificiaries = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populateBankCardBenificiaryMap() {
        let beneficiaryCardNumberMap = {};
        let beneficiaryBankNameMap = {};
        beneficiaryCardNumberMap = {
            key: 'beneficiaryCardNumber',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryBankNameMap = {
            key: 'beneficiaryBankName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('beneficiary_key', beneficiaryCardNumberMap);
        this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
    }
    onChangeItem(event) {
        this.onBenificiaryChange.emit(event);
    }
    /**
     * customizing bank card beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomBankCardBeneficiaries(bankCardBeneficiaries) {
        return this.beneficiariesService.populateBankCardBeneficiaries(bankCardBeneficiaries);
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
};
PsLookupBeneficiariesBankCardComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
PsLookupBeneficiariesBankCardComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }],
    onBenificiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupBeneficiariesBankCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-bank-card',
        template: _raw_loader_ps_lookup_beneficiaries_bank_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_bank_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], PsLookupBeneficiariesBankCardComponent);



/***/ }),

/***/ "Le12":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.module.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesInternationalComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternationalComponentModule", function() { return PsLookupBeneficiariesInternationalComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-international.component */ "6nht");






let PsLookupBeneficiariesInternationalComponentModule = class PsLookupBeneficiariesInternationalComponentModule {
};
PsLookupBeneficiariesInternationalComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternationalComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]
        ],
        exports: [
            _ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternationalComponent"]
        ],
        entryComponents: [
            _ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternationalComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupBeneficiariesInternationalComponentModule);



/***/ }),

/***/ "OLRL":
/*!********************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1yZW1pdHRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "PMli":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesLocalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalComponent", function() { return PsLookupBeneficiariesLocalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_beneficiaries_local_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-beneficiaries-local.component.html */ "Vzk6");
/* harmony import */ var _ps_lookup_beneficiaries_local_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-local.component.scss */ "6H8u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component */ "jXvJ");












/**
 * @author Aftab.Ali
 * @since 04/02/2020
 *
 * <p> PsLookupBeneficiariesLocalComponent is a lookup component to show local benificiaries list fetched from server</p>
 */
let PsLookupBeneficiariesLocalComponent = class PsLookupBeneficiariesLocalComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_local_benef_found_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.beneficiariesRequestParam = {};
        this.populateLocalBenificiaryMap();
    }
    ngOnInit() {
        super.init();
        this.loadLocalBenificiaries();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192
        this.complexLookupOptions.requestObject = this.options.requestObject;
        this.complexLookupOptions.type = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsLocalBeneficiaryComponent"];
        }
    }
    /**
     * populating Local Benificiaries - fetching from server
     */
    loadLocalBenificiaries() {
        this.options.listOfBenificiaries = [];
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE,
            filterByOper: true
        };
        this.returnLocalBenificiaries(this.beneficiariesRequestParam);
    }
    /**
     * fetching Local Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnLocalBenificiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching local beneficiaries in PsLookupBeneficiariesLocalComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateCustomLocalBeneficiaries(result.gridModel);
            }
            else {
                this.listOfBenificiaries = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populateLocalBenificiaryMap() {
        let beneficiaryAccountNumberMap = {};
        let beneficiaryBankNameMap = {};
        beneficiaryAccountNumberMap = {
            key: 'beneficiaryAccountNumber',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryBankNameMap = {
            key: 'beneficiaryBankName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('beneficiary_key', beneficiaryAccountNumberMap);
        this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
    }
    onChangeItem(event) {
        this.onBenificiaryChange.emit(event);
    }
    /**
     * customizing local beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomLocalBeneficiaries(localBeneficiaries) {
        return this.beneficiariesService.populateLocalBeneficiaries(localBeneficiaries);
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
};
PsLookupBeneficiariesLocalComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
PsLookupBeneficiariesLocalComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onBenificiaryChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }]
};
PsLookupBeneficiariesLocalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-local',
        template: _raw_loader_ps_lookup_beneficiaries_local_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_local_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], PsLookupBeneficiariesLocalComponent);



/***/ }),

/***/ "PhZC":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [id]=\"'purpose_select' + id\">\n\n  <ps-dropdown-purpose [options]=\"purpose\" (onPsChange)=\"onChangePurpose($event)\"></ps-dropdown-purpose>\n\n\n\n  <ps-dropdown-purpose [options]=\"subPurpose\" (onPsChange)=\"onChangeSubPurpose($event)\"></ps-dropdown-purpose>\n\n</ps-container-complex>");

/***/ }),

/***/ "Rok/":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup #complexLookupComponentObj [id]=\"id\" (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "SUTO":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PsComplexPurposeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPurposeModule", function() { return PsComplexPurposeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_purpose_ps_dropdown_purpose_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-purpose/ps-dropdown-purpose.component.module */ "Xqz5");
/* harmony import */ var _ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-complex-purpose.component */ "WrI8");






let PsComplexPurposeModule = class PsComplexPurposeModule {
};
PsComplexPurposeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexPurposeComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_select_dropdown_ps_dropdown_purpose_ps_dropdown_purpose_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownPurposeComponentModule"]
        ],
        exports: [_ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexPurposeComponent"]],
        entryComponents: [_ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexPurposeComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexPurposeModule);



/***/ }),

/***/ "VYJj":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.module.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesCashComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesCashComponentModule", function() { return PsLookupBeneficiariesCashComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.module */ "AR24");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-cash.component */ "Gxq1");







let PsLookupBeneficiariesCashComponentModule = class PsLookupBeneficiariesCashComponentModule {
};
PsLookupBeneficiariesCashComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupBeneficiariesCashComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponentModule"],
            _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_4__["PsCashTransferComponentModule"]
        ],
        exports: [
            _ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupBeneficiariesCashComponent"]
        ],
        entryComponents: [
            _ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupBeneficiariesCashComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupBeneficiariesCashComponentModule);



/***/ }),

/***/ "Vzk6":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "WrI8":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PsComplexPurposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPurposeComponent", function() { return PsComplexPurposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-purpose.component.html */ "PhZC");
/* harmony import */ var _ps_complex_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-purpose.component.scss */ "fZPo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








/**
 * @author Ammar.Ahmed
 * @since 30/01/2020
 *
 * <p> PsComplexPurposeComponent is a complex component base on ps-dropdown-purpose component</p>
 */
let PsComplexPurposeComponent = class PsComplexPurposeComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.selectedPurpose = null;
        this.purpose = {};
        this.subPurpose = {};
        this.subPurposeShow = false;
    }
    ngOnInit() {
        this.purpose = {
            fcName: this.options.fcName,
            group: this.options.group,
            labelKey: 'purpose_key',
            placeHolder: 'purpose_key',
            listOfOptions: []
        };
        this.subPurpose = {
            fcName: 'sub' + this.options.fcName,
            group: this.options.group,
            labelKey: 'sub_purpose_key',
            placeHolder: 'sub_purpose_key',
            listOfOptions: []
        };
        this.loadPurposeData();
    }
    onChangePurpose(value) {
        if (value !== undefined) {
            this.subPurposeShow = true;
            this.selectedPurpose = value;
            this.subPurpose = {
                fcName: 'sub' + this.options.fcName,
                group: this.options.group,
                labelKey: 'sub_purpose_key',
                placeHolder: 'sub_purpose_key',
                listOfOptions: this.selectedPurpose.selectedObj
            };
            this.onPsChange.emit(value);
        }
    }
    onChangeSubPurpose(value) {
        this.onPsChange.emit(value);
    }
    loadPurposeData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.omniPull.returnCategorySubCategory({ type: 'Purpose' }).then((result) => {
                if (result && result.gridModel && result.gridModel.length > 0) {
                    const resultList = [];
                    result.gridModel.forEach((values, ind) => {
                        const obj = {};
                        obj['itemValue'] = values.categoriesId;
                        obj['description'] = values.categoriesDescription;
                        obj['selectedObj'] = [];
                        values.subCategories.forEach(element => {
                            const subObj = {};
                            subObj['itemValue'] = element.subCategoriesId;
                            subObj['description'] = element.subCategoriesDescription;
                            obj['selectedObj'].push(subObj);
                        });
                        resultList.push(obj);
                        // const purposeDropdown: IPsSelect = {
                        //   itemValue: values.categoriesId,
                        //   description: values.categoriesDescription,
                        //   selectedObj: values
                        // };
                        // resultList.push(purposeDropdown);
                    });
                    this.purpose = {
                        fcName: 'purpose',
                        group: this.options.group,
                        labelKey: 'purpose_key',
                        placeHolder: 'purpose_key',
                        listOfOptions: resultList
                    };
                }
                else {
                    this.logger.info('info_key', 'purpose_not_available_key');
                }
            }, (err) => {
                this.logger.error('error_key', 'network_problem_key');
            });
            // const                                                                                                                                                                                                                             result = [
            //   {
            //     itemValue: 'Purpose One', description: 'Purpose One',
            //     selectedObj: [{ itemValue: 'Sub One Purpose One', description: 'Sub One Purpose One' }, { itemValue: 'Sub One Purpose Two', description: 'Sub One Purpose Two' }, { itemValue: 'Sub One Purpose Three', description: 'Sub One Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Two', description: 'Purpose Two',
            //     selectedObj: [{ itemValue: 'Sub Two Purpose One', description: 'Sub Two Purpose One' }, { itemValue: 'Sub Two Purpose Two', description: 'Sub Two Purpose Two' }, { itemValue: 'Sub Two Purpose Three', description: 'Sub Two Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Three', description: 'Purpose Three',
            //     selectedObj: [{ itemValue: 'Sub Three Purpose One', description: 'Sub Three Purpose One' }, { itemValue: 'Sub Three Purpose Two', description: 'Sub Three Purpose Two' }, { itemValue: 'Sub Three Purpose Three', description: 'Sub Three Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Four', description: 'Purpose Four',
            //     selectedObj: [{ itemValue: 'Sub Four Purpose One', description: 'Sub Four Purpose One' }, { itemValue: 'Sub Four Purpose Two', description: 'Sub Four Purpose Two' }, { itemValue: 'Sub Four Purpose Three', description: 'Sub Four Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Five', description: 'Purpose Five',
            //     selectedObj: [{ itemValue: 'Sub Five Purpose One', description: 'Sub Five Purpose One' }, { itemValue: 'Sub Five Purpose Two', description: 'Sub Five Purpose Two' }, { itemValue: 'Sub Five Purpose Three', description: 'Sub Five Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Six', description: 'Purpose Six',
            //     selectedObj: [{ itemValue: 'Sub Six Purpose One', description: 'Sub Six Purpose One' }, { itemValue: 'Sub Six Purpose Two', description: 'Sub Six Purpose Two' }, { itemValue: 'Sub Six Purpose Three', description: 'Sub Six Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Seven', description: 'Purpose Seven',
            //     selectedObj: [{ itemValue: 'Sub Seven Purpose One', description: 'Sub Seven Purpose One' }, { itemValue: 'Sub Seven Purpose Two', description: 'Sub Seven Purpose Two' }, { itemValue: 'Sub Seven Purpose Three', description: 'Sub Seven Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Eight', description: 'Purpose Eight',
            //     selectedObj: [{ itemValue: 'Sub Eight Purpose One', description: 'Sub Eight Purpose One' }, { itemValue: 'Sub Eight Purpose Two', description: 'Sub Eight Purpose Two' }, { itemValue: 'Sub Eight Purpose Three', description: 'Sub Eight Purpose Three' }]
            //   }, {
            //     itemValue: 'Purpose Nine', description: 'Purpose Nine',
            //     selectedObj: [{ itemValue: 'Sub Nine Purpose One', description: 'Sub Nine Purpose One' }, { itemValue: 'Sub Nine Purpose Two', description: 'Sub Nine Purpose Two' }, { itemValue: 'Sub Nine Purpose Three', description: 'Sub Nine Purpose Three' }]
            //   }
            // ];
            // this.purpose.listOfOptions = result;
        });
    }
};
PsComplexPurposeComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsComplexPurposeComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexPurposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-purpose',
        template: _raw_loader_ps_complex_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsComplexPurposeComponent);



/***/ }),

/***/ "XvIo":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1sb2NhbC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "YLwl":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.module.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesLocalCardComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalCardComponentModule", function() { return PsLookupBeneficiariesLocalCardComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-local-card.component */ "5F0I");






let PsLookupBeneficiariesLocalCardComponentModule = class PsLookupBeneficiariesLocalCardComponentModule {
};
PsLookupBeneficiariesLocalCardComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalCardComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"],
        ],
        exports: [
            _ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalCardComponent"]
        ],
        entryComponents: [
            _ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalCardComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupBeneficiariesLocalCardComponentModule);



/***/ }),

/***/ "Zewi":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "aSGy":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1pbnRlcm5hbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "bH40":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.module.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PsLookupBeneficiariesBankCardComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesBankCardComponentModule", function() { return PsLookupBeneficiariesBankCardComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-beneficiaries-bank-card.component */ "KjSF");






let PsLookupBeneficiariesBankCardComponentModule = class PsLookupBeneficiariesBankCardComponentModule {
};
PsLookupBeneficiariesBankCardComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesBankCardComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"],
        ],
        exports: [
            _ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesBankCardComponent"]
        ],
        entryComponents: [
            _ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesBankCardComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupBeneficiariesBankCardComponentModule);



/***/ }),

/***/ "cm1V":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "d4kQ":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PsSwiftAccountListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSwiftAccountListComponentModule", function() { return PsSwiftAccountListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-swift-account-list.component */ "yh/l");





let PsSwiftAccountListComponentModule = class PsSwiftAccountListComponentModule {
};
PsSwiftAccountListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSwiftAccountListComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSwiftAccountListComponent"]],
        entryComponents: [_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSwiftAccountListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsSwiftAccountListComponentModule);



/***/ }),

/***/ "fVca":
/*!************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.ts ***!
  \************************************************************************************/
/*! exports provided: PsPurposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsPurposeComponent", function() { return PsPurposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-purpose.component.html */ "musz");
/* harmony import */ var _ps_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-purpose.component.scss */ "pY1p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








/**
 * @author Aftab.Ali
 * @since 14/03/2020
 *
 * <p> PsPurposeComponent will be using ps-category-sub-category component and pass type as Purpose</p>
 */
let PsPurposeComponent = class PsPurposeComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.categoriesOptions = {};
    }
    ngOnInit() {
        this.categoriesOptions = {
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CATEGORY_PURPSE,
            defaultLoad: true,
            category: {
                labelKey: this.options.categoryLabelKey,
                placeHolder: this.options.categoryPlaceholderKey,
                fcName: this.options.categoryFcName,
                group: this.options.group
            },
            subCategory: {
                labelKey: this.options.subCategoryLabelKey,
                placeHolder: this.options.subCategoryPlaceholderKey,
                fcName: this.options.subCategoryFcName,
                group: this.options.group
            },
            requestObject: this.options.requestObject,
        };
    }
};
PsPurposeComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsPurposeComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsPurposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-purpose',
        template: _raw_loader_ps_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsPurposeComponent);



/***/ }),

/***/ "fZPo":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXB1cnBvc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "j6t5":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.module.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: PsDropDownIdTypesComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropDownIdTypesComponentModule", function() { return PsDropDownIdTypesComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-dropdown-lov.component.module */ "LhaX");
/* harmony import */ var _ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-dropdown-id-types.component */ "J8wZ");






let PsDropDownIdTypesComponentModule = class PsDropDownIdTypesComponentModule {
};
PsDropDownIdTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponentModule"]
        ],
        exports: [
            _ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]
        ],
        entryComponents: [
            _ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropDownIdTypesComponentModule);



/***/ }),

/***/ "j8e8":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: PsComplexSwiftTransferComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSwiftTransferComponentModule", function() { return PsComplexSwiftTransferComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-complex-swift-transfer.component */ "rh9r");







let PsComplexSwiftTransferComponentModule = class PsComplexSwiftTransferComponentModule {
};
PsComplexSwiftTransferComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSwiftTransferComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputVarcharComponentModule"],
            _ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponentModule"]
        ],
        exports: [
            _ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSwiftTransferComponent"]
        ],
        entryComponents: [
            _ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSwiftTransferComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexSwiftTransferComponentModule);



/***/ }),

/***/ "jZF4":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PsComplexCifAccountComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexCifAccountComponentModule", function() { return PsComplexCifAccountComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.module */ "iNXY");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.module */ "gByX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component */ "+R6y");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");









let PsComplexCifAccountComponentModule = class PsComplexCifAccountComponentModule {
};
PsComplexCifAccountComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifAccountComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_4__["PsInputAccountNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputCardNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputNumericComponentModule"]
        ],
        exports: [
            src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifAccountComponent"]
        ],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifAccountComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexCifAccountComponentModule);



/***/ }),

/***/ "mDHw":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module */ "HbOp");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_banks_ps_banks_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.module */ "sUWf");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.module */ "AR24");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.module */ "rALU");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.module */ "+PMX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component.module */ "r5OZ");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */ "Uxj/");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component.module */ "kQrs");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module */ "F9YD");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_purpose_ps_complex_purpose_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.module */ "SUTO");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_recurring_scheduler_ps_complex_recurring_scheduler_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-recurring-scheduler/ps-complex-recurring-scheduler.component.module */ "yj1Z");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_swift_transfer_ps_complex_swift_transfer_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.module */ "j8e8");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */ "Hy46");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.module */ "GNGv");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.module */ "iNXY");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.module */ "gByX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_bank_card_ps_lookup_beneficiaries_bank_card_component_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.module */ "bH40");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_cash_ps_lookup_beneficiaries_cash_component_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.module */ "VYJj");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_internal_ps_lookup_beneficiaries_internal_component_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.module */ "GYV1");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_international_ps_lookup_beneficiaries_international_component_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.module */ "Le12");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_card_ps_lookup_beneficiaries_local_card_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.module */ "YLwl");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_ps_lookup_beneficiaries_local_component_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.module */ "32Le");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */ "xB6I");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_purpose_ps_purpose_component_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.module */ "1wDr");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_remittance_ps_remittance_component_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.module */ "IRv+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-currencies/ps-dropdown-currencies.component.module */ "SiC0");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_swift_account_list_ps_swift_account_list_component_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.module */ "d4kQ");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./payment.page */ "uV3x");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module */ "AvcC");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_bank_details_ps_complex_beneficiary_bank_details_component_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-beneficiary-bank-details/ps-complex-beneficiary-bank-details.component.module */ "UeDB");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.module */ "jZF4");







































const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_35__["PaymentPage"]
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_34__["SharedModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_33__["PsTemplateStepperModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_32__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_27__["PsLookupOwnAccountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_30__["PsDropdownCurrenciesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_19__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_20__["PsInputFreeTextComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component_module__WEBPACK_IMPORTED_MODULE_10__["PsComplexExchangeComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountsListComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_recurring_scheduler_ps_complex_recurring_scheduler_component_module__WEBPACK_IMPORTED_MODULE_13__["PsComplexRecurringSchedulerComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_17__["PsInputAccountNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexAmountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_swift_transfer_ps_complex_swift_transfer_component_module__WEBPACK_IMPORTED_MODULE_14__["PsComplexSwiftTransferComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_swift_account_list_ps_swift_account_list_component_module__WEBPACK_IMPORTED_MODULE_31__["PsSwiftAccountListComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_internal_ps_lookup_beneficiaries_internal_component_module__WEBPACK_IMPORTED_MODULE_23__["PsLookupBeneficiariesInternalComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_international_ps_lookup_beneficiaries_international_component_module__WEBPACK_IMPORTED_MODULE_24__["PsLookupBeneficiariesInternationalComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_ps_lookup_beneficiaries_local_component_module__WEBPACK_IMPORTED_MODULE_26__["PsLookupBeneficiariesLocalComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInternalBeneficiaryComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInternationalBeneficiaryComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_8__["PsLocalBeneficiaryComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_purpose_ps_complex_purpose_component_module__WEBPACK_IMPORTED_MODULE_12__["PsComplexPurposeModule"],
            src_app_commonBussinessSRC_psComponents_ps_purpose_ps_purpose_component_module__WEBPACK_IMPORTED_MODULE_28__["PsPurposeComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_16__["PsDateDayMonthYearFutureComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_banks_ps_banks_component_module__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_remittance_ps_remittance_component_module__WEBPACK_IMPORTED_MODULE_29__["PsRemittanceComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_cash_ps_lookup_beneficiaries_cash_component_module__WEBPACK_IMPORTED_MODULE_22__["PsLookupBeneficiariesCashComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_5__["PsCashTransferComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_15__["PsEntityPhoneNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_11__["PsComplexIdDetailsModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_bank_card_ps_lookup_beneficiaries_bank_card_component_module__WEBPACK_IMPORTED_MODULE_21__["PsLookupBeneficiariesBankCardComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_card_ps_lookup_beneficiaries_local_card_component_module__WEBPACK_IMPORTED_MODULE_25__["PsLookupBeneficiariesLocalCardComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_18__["PsInputCardNumberComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_36__["PsFileUploadBSComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_bank_details_ps_complex_beneficiary_bank_details_component_module__WEBPACK_IMPORTED_MODULE_37__["PsComplexBeneficiaryBankDetailsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component_module__WEBPACK_IMPORTED_MODULE_38__["PsComplexCifAccountComponentModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_35__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "mpNL":
/*!********************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.ts ***!
  \********************************************************************************/
/*! exports provided: PsBanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsBanksComponent", function() { return PsBanksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_banks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-banks.component.html */ "D2J3");
/* harmony import */ var _ps_banks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-banks.component.scss */ "6Ozt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








let PsBanksComponent = class PsBanksComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.categoriesOptions = {};
    }
    ngOnInit() {
        this.categoriesOptions = {
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CATEGORY_BANK,
            defaultLoad: true,
            category: {
                labelKey: this.options.categoryLabelKey,
                placeHolder: this.options.categoryPlaceholderKey,
                fcName: this.options.categoryFcName,
                group: this.options.group
            },
            subCategory: {
                labelKey: this.options.subCategoryLabelKey,
                placeHolder: this.options.subCategoryPlaceholderKey,
                fcName: this.options.subCategoryFcName,
                group: this.options.group
            },
            requestObject: this.options.requestObject
        };
    }
    onBankChanged(event) {
        this.onPsChange.emit(event);
    }
};
PsBanksComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsBanksComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsBanksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-banks',
        template: _raw_loader_ps_banks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_banks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsBanksComponent);



/***/ }),

/***/ "musz":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-category-sub-category [options]=\"categoriesOptions\"></ps-category-sub-category>");

/***/ }),

/***/ "oj4Y":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-category-sub-category [options]=\"categoriesOptions\"></ps-category-sub-category>");

/***/ }),

/***/ "pY1p":
/*!**************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1wdXJwb3NlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rNEQ":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1jYXNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rh9r":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: PsComplexSwiftTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSwiftTransferComponent", function() { return PsComplexSwiftTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_swift_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-swift-transfer.component.html */ "JEks");
/* harmony import */ var _ps_complex_swift_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-swift-transfer.component.scss */ "9oYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









/**
 * @author Zunair.Zakir
 * @since 29/01/2020
 *
 * <p> PsComplexSwiftTransferComponent is complex component to show Swift list fetched from server</p>
 */
let PsComplexSwiftTransferComponent = class PsComplexSwiftTransferComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {};
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_swift_account_found_kay'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onSwifttChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.populateSwiftMap();
    }
    ngOnInit() {
        super.init();
        this.loadSwiftAccounts();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
    }
    /**
     * populating SwiftAccounts - fetching from server
     */
    loadSwiftAccounts() {
        this.options.listOfSwiftAccounts = [];
        const requestData = {};
        this.returnSwiftAccounts(requestData);
    }
    /**
     * fetching SwiftAccounts from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnSwiftAccounts(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching accounts in PsComplexSwiftTransferComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
            }
            else {
                this.listOfSwiftAccounts = [];
                const data = [{
                        swiftAccountNumber: '5422345234',
                        swiftBankName: 'iMAL Islamic core banking',
                        swiftName: 'Zunair',
                        swiftNameSub: 'Zakir Hussain'
                    },
                    {
                        swiftAccountNumber: '23434234324',
                        swiftBankName: 'iMAL Platform',
                        swiftName: 'Test User',
                        swiftNameSub: 'Sub name'
                    }];
                this.complexLookupOptions.listOfOptions = data;
                this.options.listOfSwiftAccounts = data;
                this.listOfSwiftAccounts = data;
            }
        });
    }
    /**
     * preparing request data
     * @param cifInfo: any
     */
    // private prepareRequestData(cifInfo: any): IOmniAccountRequest {
    //   let requestData: IOmniAccountRequest = {};
    //   if (cifInfo && cifInfo.omniUserVO) {
    //     requestData = {
    //       // vsBranchCode: cifInfo.branchCode,
    //       userCifNo: cifInfo.omniUserVO.CIF_NO
    //     };
    //   }
    //   if (this.options.glTypes != null && this.options.glTypes !== undefined && this.options.glTypes !== '') {
    //     requestData.permittedGls = this.options.glTypes;
    //   }
    //   if (this.options.accountAllowedCurrencies != null && this.options.accountAllowedCurrencies !== undefined) {
    //     if (typeof this.options.accountAllowedCurrencies === 'string') {
    //       requestData.accountAllowedCurrencies = this.options.accountAllowedCurrencies;
    //     } else {
    //       let temp = '';
    // eslint-disable-next-line , guard-for-in
    //       for (const val in this.options.accountAllowedCurrencies) {
    //         const value = this.options.accountAllowedCurrencies[val].itemValue;
    //         temp += value + ',';
    //       }
    //       temp = temp.slice(0, temp.lastIndexOf(','));
    //       requestData.accountAllowedCurrencies = temp;
    //     }
    //   }
    //   if (this.options.accountAllowedTypes != null && this.options.accountAllowedTypes !== undefined) {
    //     if (typeof this.options.accountAllowedTypes === 'string') {
    //       requestData.accountAllowedTypes = this.options.accountAllowedTypes;
    //     } else {
    //       let temp = '';
    // eslint-disable-next-line guard-for-in
    //       for (const val in this.options.accountAllowedTypes) {
    //         const value = this.options.accountAllowedTypes[val].itemValue;
    //         temp += value + ',';
    //       }
    //       temp = temp.slice(0, temp.lastIndexOf(','));
    //       requestData.accountAllowedTypes = temp;
    //     }
    //   }
    //   return requestData;
    // }
    /**
     * will fetch the list of accounts from server based currecy filter
     */
    fetchAccountBasedOnCurrency(currency) {
        // TODO: when service is available: account list will be fetched from server based on currency if passed any
        return this.options.listOfSwiftAccounts;
    }
    onChange(event) {
        this.logger.log(event);
        // TODO: get the updated data from server
    }
    populateSwiftMap() {
        let swiftAccountNumberMap = {};
        let swiftBankNameMap = {};
        swiftAccountNumberMap = {
            key: 'swiftAccountNumber',
            value: '--- --- ---',
            isEdit: false
        };
        swiftBankNameMap = {
            key: 'swiftBankName',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('swift_account_key', swiftAccountNumberMap);
        this.labelValuesMap.set('bank_name_key', swiftBankNameMap);
    }
    onChangeItem(event) {
        this.logger.log('Swift Account Item', event.item);
        this.onSwifttChange.emit(event.item);
    }
};
PsComplexSwiftTransferComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsComplexSwiftTransferComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSwifttChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsComplexSwiftTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-swift-transfer',
        template: _raw_loader_ps_complex_swift_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_swift_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsComplexSwiftTransferComponent);



/***/ }),

/***/ "sUWf":
/*!***************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PsBanksComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsBanksComponentModule", function() { return PsBanksComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_banks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-banks.component */ "mpNL");





let PsBanksComponentModule = class PsBanksComponentModule {
};
PsBanksComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_banks_component__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_banks_component__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponent"]
        ],
        entryComponents: [
            _ps_banks_component__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsBanksComponentModule);



/***/ }),

/***/ "vRU4":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearPastComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponentModule", function() { return PsDateDayMonthYearPastComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-date-day-month-year.component.module */ "jSSe");
/* harmony import */ var _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-date-day-month-year-past.component */ "ngfJ");






let PsDateDayMonthYearPastComponentModule = class PsDateDayMonthYearPastComponentModule {
};
PsDateDayMonthYearPastComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"],
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponentModule"]
        ],
        exports: [
            _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]
        ],
        entryComponents: [
            _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDateDayMonthYearPastComponentModule);



/***/ }),

/***/ "vgQz":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1iYW5rLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");

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

/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map