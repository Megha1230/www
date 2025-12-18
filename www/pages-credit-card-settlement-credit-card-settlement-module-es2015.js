(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-credit-card-settlement-credit-card-settlement-module"],{

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

/***/ "vGh+":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/credit-card-settlement/credit-card-settlement.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CreditCardSettlementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardSettlementPageModule", function() { return CreditCardSettlementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module */ "HbOp");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component.module */ "kQrs");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component.module */ "tk/0");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */ "oAvJ");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_credit_cards_ps_lookup_credit_cards_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-credit-cards/ps-lookup-credit-cards.component.module */ "hyzP");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */ "xB6I");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var _credit_card_settlement_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./credit-card-settlement.page */ "1Dkv");















const routes = [
    {
        path: '',
        component: _credit_card_settlement_page__WEBPACK_IMPORTED_MODULE_14__["CreditCardSettlementPage"]
    }
];
let CreditCardSettlementPageModule = class CreditCardSettlementPageModule {
};
CreditCardSettlementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_13__["PsTemplateStepperModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_12__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_credit_cards_ps_lookup_credit_cards_component_module__WEBPACK_IMPORTED_MODULE_10__["PsLookupCreditCardsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_11__["PsLookupOwnAccountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component_module__WEBPACK_IMPORTED_MODULE_7__["PsComplexExchangeComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component_module__WEBPACK_IMPORTED_MODULE_8__["PsOptionCardComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_9__["PsInputNumericComponentModule"],
        ],
        declarations: [_credit_card_settlement_page__WEBPACK_IMPORTED_MODULE_14__["CreditCardSettlementPage"]]
    })
], CreditCardSettlementPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-credit-card-settlement-credit-card-settlement-module-es2015.js.map