(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dynamic-component-page-loader-dynamic-component-page-loader-module"],{

/***/ "2ZGv":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: PsComplexInappUrlComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexInappUrlComponentModule", function() { return PsComplexInappUrlComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-complex-inapp-url.component */ "2eY9");





let PsComplexInappUrlComponentModule = class PsComplexInappUrlComponentModule {
};
PsComplexInappUrlComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [_ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponent"]],
        entryComponents: [_ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexInappUrlComponentModule);



/***/ }),

/***/ "2eY9":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PsComplexInappUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexInappUrlComponent", function() { return PsComplexInappUrlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_inapp_url_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-inapp-url.component.html */ "APAi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexInappUrlComponent = class PsComplexInappUrlComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_3__["PsBaseFieldComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.htmlViewerOptions = {};
    }
    ngOnInit() {
        // super.init();
        this.htmlViewerOptions.directURL = this.options.url;
        if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].isEmptyOrNull(this.options.type)) {
            this.options.type = 'iframe';
        }
        if (this.options.type == 'inapp' && this.options.url) {
            const browser = this.common.inAppBrowser.create(this.options.url);
            browser.show();
        }
    }
};
PsComplexInappUrlComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }
];
PsComplexInappUrlComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PsComplexInappUrlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-inapp-url',
        template: _raw_loader_ps_complex_inapp_url_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
], PsComplexInappUrlComponent);



/***/ }),

/***/ "APAi":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"options?.url\">\n  <ps-action-button *ngIf=\"options?.customRefresh && options?.customRefresh.func\">\n\n  </ps-action-button>\n\n  <ps-container-html-viewer *ngIf=\"options.type == 'iframe' \" [options]=\"htmlViewerOptions\" [id]=\"id\">\n  </ps-container-html-viewer>\n</ng-container>");

/***/ }),

/***/ "Gt6D":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dynamic-component-page-loader/dynamic-component-page-loader.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: DynamicComponentPageLoaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentPageLoaderPageModule", function() { return DynamicComponentPageLoaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module */ "Aju7");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_inapp_url_ps_complex_inapp_url_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.module */ "2ZGv");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module */ "dz/v");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_specimen_ps_complex_specimen_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-specimen/ps-complex-specimen.component.module */ "DtgQ");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */ "YBCg");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _dynamic_component_page_loader_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-component-page-loader.page */ "eThR");











const routes = [
    {
        path: '',
        component: _dynamic_component_page_loader_page__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentPageLoaderPage"]
    }
];
let DynamicComponentPageLoaderPageModule = class DynamicComponentPageLoaderPageModule {
};
DynamicComponentPageLoaderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__["PsComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexCallSlotComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_specimen_ps_complex_specimen_component_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexSpecimenComponentModule"],
            src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateFormModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_inapp_url_ps_complex_inapp_url_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponentModule"]
        ],
        declarations: [_dynamic_component_page_loader_page__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentPageLoaderPage"]]
    })
], DynamicComponentPageLoaderPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-dynamic-component-page-loader-dynamic-component-page-loader-module-es2015.js.map