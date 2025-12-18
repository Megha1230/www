(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lost-document-request-lost-document-request-module"],{

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

/***/ "65AU":
/*!******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtcGFzc2Jvb2tzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "FRI3":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1kb2N1bWVudC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "GFeT":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onChange($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "HbOp":
/*!*******************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PsAccountsListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsAccountsListComponentModule", function() { return PsAccountsListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-accounts-list.component */ "OVQh");






let PsAccountsListComponentModule = class PsAccountsListComponentModule {
};
PsAccountsListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]
        ],
        exports: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        entryComponents: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsAccountsListComponentModule);



/***/ }),

/***/ "OOCE":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/lost-document-request/lost-document-request.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LostDocumentRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostDocumentRequestPageModule", function() { return LostDocumentRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module */ "HbOp");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component.module */ "tk/0");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component.module */ "YqnD");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.module */ "wQfO");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */ "vRU4");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_chequebooks_ps_lookup_chequebooks_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.module */ "Dzb9");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_credit_cards_ps_lookup_credit_cards_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-credit-cards/ps-lookup-credit-cards.component.module */ "hyzP");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_debit_cards_ps_lookup_debit_cards_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-debit-cards/ps-lookup-debit-cards.component.module */ "ikzk");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */ "xB6I");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_passbooks_ps_lookup_passbooks_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.module */ "uq2j");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-account-types/ps-dropdown-account-types.component.module */ "H9gP");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_card_types_ps_dropdown_card_types_component_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-card-types/ps-dropdown-card-types.component.module */ "MJzT");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_core_reasons_ps_dropdown_core_reasons_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.module */ "qUS5");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_document_types_ps_dropdown_document_types_component_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.module */ "T9TP");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_card_types_ps_lov_card_types_component_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-card-types/ps-lov-card-types.component.module */ "rrI9");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _lost_document_request_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lost-document-request.page */ "XxTl");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */ "Uxj/");


























const routes = [
    {
        path: '',
        component: _lost_document_request_page__WEBPACK_IMPORTED_MODULE_24__["LostDocumentRequestPage"]
    }
];
let LostDocumentRequestPageModule = class LostDocumentRequestPageModule {
};
LostDocumentRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_21__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_22__["PsTemplateStepperModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_16__["PsDropdownAccountTypesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_14__["PsLookupOwnAccountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_10__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_card_types_ps_dropdown_card_types_component_module__WEBPACK_IMPORTED_MODULE_17__["PsDropdownCardTypesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDateDayMonthYearPastComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputFreeTextComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountsListComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_document_types_ps_dropdown_document_types_component_module__WEBPACK_IMPORTED_MODULE_19__["PsDropdownDocumentTypesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component_module__WEBPACK_IMPORTED_MODULE_5__["PsOptionChequebookComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_chequebooks_ps_lookup_chequebooks_component_module__WEBPACK_IMPORTED_MODULE_11__["PsLookupChequebooksComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_debit_cards_ps_lookup_debit_cards_component_module__WEBPACK_IMPORTED_MODULE_13__["PsLookupDebitCardsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_credit_cards_ps_lookup_credit_cards_component_module__WEBPACK_IMPORTED_MODULE_12__["PsLookupCreditCardsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component_module__WEBPACK_IMPORTED_MODULE_4__["PsOptionCardComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_core_reasons_ps_dropdown_core_reasons_component_module__WEBPACK_IMPORTED_MODULE_18__["PsDropdownCoreReasonsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_card_types_ps_lov_card_types_component_module__WEBPACK_IMPORTED_MODULE_20__["PsLovCardTypesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_passbooks_ps_lookup_passbooks_component_module__WEBPACK_IMPORTED_MODULE_15__["PsLookupPassbooksComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component_module__WEBPACK_IMPORTED_MODULE_6__["PsPassbookListComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_9__["PsInputNumericComponentModule"],
            _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_25__["PsComplexAmountComponentModule"]
        ],
        declarations: [_lost_document_request_page__WEBPACK_IMPORTED_MODULE_24__["LostDocumentRequestPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], LostDocumentRequestPageModule);



/***/ }),

/***/ "Oahu":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\">\n  </ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "T9TP":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PsDropdownDocumentTypesComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownDocumentTypesComponentModule", function() { return PsDropdownDocumentTypesComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-document-types.component */ "gdVn");





let PsDropdownDocumentTypesComponentModule = class PsDropdownDocumentTypesComponentModule {
};
PsDropdownDocumentTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownDocumentTypesComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownDocumentTypesComponent"]
        ],
        entryComponents: [
            _ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownDocumentTypesComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownDocumentTypesComponentModule);



/***/ }),

/***/ "gdVn":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: PsDropdownDocumentTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownDocumentTypesComponent", function() { return PsDropdownDocumentTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_document_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-document-types.component.html */ "hoVv");
/* harmony import */ var _ps_dropdown_document_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-document-types.component.scss */ "FRI3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownDocumentTypesComponent = class PsDropdownDocumentTypesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.defaultSelectOptions = {
            labelKey: 'lost_account_types_key',
            placeHolder: 'lost_account_type_key'
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options);
        this.returnLostdocument();
    }
    returnLostdocument() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let paramData = {
                serviceMethod: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ONE,
            };
            this.omniPull.returnLostDocument(paramData).then((result) => {
                this.defaultSelectOptions.listOfOptions = [];
                if (result && result.gridModel && result.gridModel.length > 0) {
                    for (const iterator of result.gridModel) {
                        const documents = {
                            itemValue: iterator.ctsLostDocId,
                            description: iterator.briefDescription,
                            selectedObj: iterator
                        };
                        this.defaultSelectOptions.listOfOptions.push(documents);
                    }
                }
            }, (err) => {
                this.logger.error('Error: While fetching data : ', err);
            });
        });
    }
    onDocTypeChange(value) {
        this.onPsChange.emit(value);
    }
};
PsDropdownDocumentTypesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsDropdownDocumentTypesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownDocumentTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-document-types',
        template: _raw_loader_ps_dropdown_document_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_document_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsDropdownDocumentTypesComponent);



/***/ }),

/***/ "hoVv":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onDocTypeChange($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "l5MZ":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsDropdownCoreReasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownCoreReasonsComponent", function() { return PsDropdownCoreReasonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_core_reasons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-core-reasons.component.html */ "GFeT");
/* harmony import */ var _ps_dropdown_core_reasons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-core-reasons.component.scss */ "ngWu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownCoreReasonsComponent = class PsDropdownCoreReasonsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.omniPull = omniPull;
        this.defaultSelectOptions = {};
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
        this.loadCoreReasons();
    }
    loadCoreReasons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const paramData = {
                reasonType: this.options.reasonType || src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].STOP_REASON_TYPE
            };
            const coreReasons = yield this.omniPull.returnCoreReasons(paramData).catch(error => {
            });
            this.defaultSelectOptions.listOfOptions = [];
            if (coreReasons && coreReasons.gridModel && coreReasons.gridModel.length > 0) {
                for (const iterator of coreReasons.gridModel) {
                    const coreReason = {
                        itemValue: iterator.reasonId,
                        description: iterator.briefDesc,
                        selectedObj: iterator
                    };
                    this.defaultSelectOptions.listOfOptions.push(coreReason);
                }
            }
        });
    }
    onChange(values) {
        this.onPsChange.emit(values);
    }
};
PsDropdownCoreReasonsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownCoreReasonsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownCoreReasonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-core-reasons',
        template: _raw_loader_ps_dropdown_core_reasons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_core_reasons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownCoreReasonsComponent);



/***/ }),

/***/ "ngWu":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1jb3JlLXJlYXNvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "qUS5":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: PsDropdownCoreReasonsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownCoreReasonsComponentModule", function() { return PsDropdownCoreReasonsComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-core-reasons.component */ "l5MZ");





let PsDropdownCoreReasonsComponentModule = class PsDropdownCoreReasonsComponentModule {
};
PsDropdownCoreReasonsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownCoreReasonsComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownCoreReasonsComponent"]
        ],
        entryComponents: [
            _ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownCoreReasonsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownCoreReasonsComponentModule);



/***/ }),

/***/ "uq2j":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PsLookupPassbooksComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupPassbooksComponentModule", function() { return PsLookupPassbooksComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-passbooks.component */ "wz8/");






let PsLookupPassbooksComponentModule = class PsLookupPassbooksComponentModule {
};
PsLookupPassbooksComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupPassbooksComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]
        ],
        exports: [
            _ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupPassbooksComponent"]
        ],
        entryComponents: [
            _ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupPassbooksComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupPassbooksComponentModule);



/***/ }),

/***/ "wQfO":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: PsPassbookListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsPassbookListComponentModule", function() { return PsPassbookListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-passbook-list.component */ "9K5J");






let PsPassbookListComponentModule = class PsPassbookListComponentModule {
};
PsPassbookListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_2__["PsTemplateListModule"]
        ],
        exports: [_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"]],
        entryComponents: [_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsPassbookListComponentModule);



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

/***/ "wz8/":
/*!****************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PsLookupPassbooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupPassbooksComponent", function() { return PsLookupPassbooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_passbooks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-passbooks.component.html */ "Oahu");
/* harmony import */ var _ps_lookup_passbooks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-passbooks.component.scss */ "65AU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */ "EIUR");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









/**
 * @author Zunair.Zakir
 * @since 09/06/2021
 *
 * <p> PsComplexOwnAccountComponent is complex component to show passcodes list fetched from server, balance and available balance</p>
 */
let PsLookupPassbooksComponent = class PsLookupPassbooksComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.options = {
            requestObject: null,
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_valid_passbook_found_key',
            multiple: this.options.multiple ? this.options.multiple : false
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onPassbookChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_6__["PsCurrencyPipe"]();
        this.labelOptions = {};
        this.allType = false;
    }
    ngOnInit() {
        super.init();
        this.returnPassbookList();
        this.complexLookupOptions.labelKey = this.options.labelKey;
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.allType = this.options.allType ? this.options.allType : false;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
        this.complexLookupOptions.requestObject = this.options.requestObject;
    }
    /**
     * fetching passbook list from server
     */
    returnPassbookList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.complexLookupOptions.listOfOptions = undefined;
            const params = {};
            const result = yield this.omniPull.returnPassbooks(params).catch(error => {
                this.logger.error('Error: While fetching PassbookList :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.options.listOfPassbook = result.gridModel;
                this.complexLookupOptions.listOfOptions = this.populateCustomPassbooks(result.gridModel);
            }
            else {
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    /**
     *
     * @param listOfOptions
     */
    populateCustomPassbooks(listOfOptions) {
        const passbooksList = [];
        for (const iterator of listOfOptions) {
            const passcode = {
                accGl: iterator.account.accGl,
                branch: iterator.account.branch,
                currency: iterator.account.currency,
                serialNo: iterator.account.serialNo,
                cif: iterator.account.cif,
                additionalRef: iterator.account.additionalRef,
                lookupKey: iterator.account.accGl,
                passbookCode: iterator.passbookCode,
                previewProperty: 'accGl'
            };
            passbooksList.push(passcode);
        }
        return passbooksList;
    }
    onChangeItem(event) {
        this.onPassbookChange.emit(event);
    }
};
PsLookupPassbooksComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsLookupPassbooksComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onPassbookChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupPassbooksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-passbooks',
        template: _raw_loader_ps_lookup_passbooks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_passbooks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsLookupPassbooksComponent);



/***/ })

}]);
//# sourceMappingURL=pages-lost-document-request-lost-document-request-module-es2015.js.map