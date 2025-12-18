(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-opening-fixed-maturity-account-account-opening-fixed-maturity-account-module"],{

/***/ "dv/G":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AccountOpeningFixedMaturityAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOpeningFixedMaturityAccountPageModule", function() { return AccountOpeningFixedMaturityAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module */ "HbOp");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_account_types_ps_complex_account_types_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-account-types/ps-complex-account-types.component.module */ "IXML");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */ "Uxj/");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_label_ps_label_cif_branch_ps_label_cif_branch_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-label/ps-label-cif-branch/ps-label-cif-branch.component.module */ "HQvY");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */ "xB6I");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_map_atm_branches_ps_map_atm_branches_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-map-atm-branches/ps-map-atm-branches.component.module */ "0uR4");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-account-types/ps-dropdown-account-types.component.module */ "H9gP");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-currencies/ps-dropdown-currencies.component.module */ "SiC0");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.module */ "rSht");
/* harmony import */ var _account_opening_fixed_maturity_account_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account-opening-fixed-maturity-account.page */ "5zfx");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module */ "ohDU");



















const routes = [
    {
        path: '',
        component: _account_opening_fixed_maturity_account_page__WEBPACK_IMPORTED_MODULE_17__["AccountOpeningFixedMaturityAccountPage"]
    }
];
let AccountOpeningFixedMaturityAccountPageModule = class AccountOpeningFixedMaturityAccountPageModule {
};
AccountOpeningFixedMaturityAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_13__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_14__["PsTemplateStepperModule"],
            src_app_commonBussinessSRC_psComponents_ps_label_ps_label_cif_branch_ps_label_cif_branch_component_module__WEBPACK_IMPORTED_MODULE_8__["PsLabelCifBranchComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_11__["PsDropdownAccountTypesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInputVarcharComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_12__["PsDropdownCurrenciesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_9__["PsLookupOwnAccountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_map_atm_branches_ps_map_atm_branches_component_module__WEBPACK_IMPORTED_MODULE_10__["PsMapAtmBranchesComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputNumericComponentModule"],
            _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_16__["PsComplexTermsAndConditionsModule"],
            src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountsListComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexAmountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_18__["PsComplexSelectBranchComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_account_types_ps_complex_account_types_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexAccountTypesComponentModule"]
        ],
        declarations: [_account_opening_fixed_maturity_account_page__WEBPACK_IMPORTED_MODULE_17__["AccountOpeningFixedMaturityAccountPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], AccountOpeningFixedMaturityAccountPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-account-opening-fixed-maturity-account-account-opening-fixed-maturity-account-module-es2015.js.map