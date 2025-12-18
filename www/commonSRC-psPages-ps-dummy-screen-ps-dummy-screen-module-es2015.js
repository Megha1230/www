(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commonSRC-psPages-ps-dummy-screen-ps-dummy-screen-module"],{

/***/ "VcoQ":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psPages/ps-dummy-screen/ps-dummy-screen.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ps-custom-spinner-wrapper absolute-center\" id=\"ps-loader-controller\">\r\n    <!-- <ps-action-image class=\"ps-custom-spinner absolute-center\" [options]=\"loaderOptions\">\r\n    </ps-action-image> -->\r\n</div>");

/***/ }),

/***/ "VpVl":
/*!***************************************************************************!*\
  !*** ./src/app/commonSRC/psPages/ps-dummy-screen/ps-dummy-screen.page.ts ***!
  \***************************************************************************/
/*! exports provided: PsDummyScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDummyScreenPage", function() { return PsDummyScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dummy_screen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dummy-screen.page.html */ "VcoQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");




let PsDummyScreenPage = class PsDummyScreenPage {
    constructor() { }
    ngOnInit() {
        this.loaderOptions = {
            imageName: unescape(_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_3__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')),
            allowCust: false
        };
    }
};
PsDummyScreenPage.ctorParameters = () => [];
PsDummyScreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_ps_dummy_screen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        selector: 'ps-dummy-screen'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsDummyScreenPage);



/***/ }),

/***/ "zuQ4":
/*!*****************************************************************************!*\
  !*** ./src/app/commonSRC/psPages/ps-dummy-screen/ps-dummy-screen.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PsDummyScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDummyScreenPageModule", function() { return PsDummyScreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_dummy_screen_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-dummy-screen.page */ "VpVl");






const routes = [
    {
        path: '',
        component: _ps_dummy_screen_page__WEBPACK_IMPORTED_MODULE_5__["PsDummyScreenPage"]
    }
];
let PsDummyScreenPageModule = class PsDummyScreenPageModule {
};
PsDummyScreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]
        ],
        declarations: [_ps_dummy_screen_page__WEBPACK_IMPORTED_MODULE_5__["PsDummyScreenPage"]]
    })
], PsDummyScreenPageModule);



/***/ })

}]);
//# sourceMappingURL=commonSRC-psPages-ps-dummy-screen-ps-dummy-screen-module-es2015.js.map