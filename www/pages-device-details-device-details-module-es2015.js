(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-details-device-details-module"],{

/***/ "96AI":
/*!***************************************************************!*\
  !*** ./src/app/pages/device-details/device-details.module.ts ***!
  \***************************************************************/
/*! exports provided: DeviceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsPageModule", function() { return DeviceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */ "YBCg");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _device_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-details.page */ "hWqT");







const routes = [
    {
        path: '',
        component: _device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]
    }
];
let DeviceDetailsPageModule = class DeviceDetailsPageModule {
};
DeviceDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateFormModule"],
        ],
        declarations: [_device_details_page__WEBPACK_IMPORTED_MODULE_6__["DeviceDetailsPage"]],
    })
], DeviceDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-device-details-device-details-module-es2015.js.map