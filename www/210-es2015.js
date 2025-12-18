(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[210],{

/***/ "TtBp":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.page */ "TxZw");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_menu_header_container_ps_complex_menu_header_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-menu-header-container/ps-complex-menu-header-container.module */ "ab+Q");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_base_ps_template_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-base/ps-template-base.module */ "IH4Z");








const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_2__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_base_ps_template_base_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBasePageModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_menu_header_container_ps_complex_menu_header_container_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexMenuHeaderContainerModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_2__["WelcomePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], WelcomePageModule);



/***/ })

}]);
//# sourceMappingURL=210-es2015.js.map