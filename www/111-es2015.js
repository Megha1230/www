(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "S7SP":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-tfs-document-type/ps-dropdown-tfs-document-type.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: PsDropdownTFSDocumentTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownTFSDocumentTypeComponent", function() { return PsDropdownTFSDocumentTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_tfs_document_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-tfs-document-type.component.html */ "nMw8");
/* harmony import */ var _ps_dropdown_tfs_document_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-tfs-document-type.component.scss */ "jtlX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownTFSDocumentTypeComponent = class PsDropdownTFSDocumentTypeComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.defaultSelectOptions = {};
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options);
        this.returnTFSDocumentType();
    }
    returnTFSDocumentType() {
        const paramData = {
            docType: this.options.docType || src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].RETURN_ALL_DOCTYPE_PARAM,
            code: this.options.code
        };
        this.omniPull.returnTFSDocumentType(paramData).then((result) => {
            this.defaultSelectOptions.listOfOptions = [];
            if (result != null && result.gridModel != null && result.gridModel.length > 0) {
                for (const iterator of result.gridModel) {
                    const TFSDocumentType = {
                        itemValue: iterator.code,
                        description: iterator.longName,
                        selectedObj: iterator
                    };
                    this.defaultSelectOptions.listOfOptions.push(TFSDocumentType);
                }
            }
        }, (err) => {
            this.logger.error('Error: While fetching data : ', err);
        });
    }
    onDocTypeChange(value) {
        this.onPsChange.emit(value);
    }
};
PsDropdownTFSDocumentTypeComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownTFSDocumentTypeComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownTFSDocumentTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-tfs-document-type',
        template: _raw_loader_ps_dropdown_tfs_document_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_tfs_document_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownTFSDocumentTypeComponent);



/***/ }),

/***/ "jtlX":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-tfs-document-type/ps-dropdown-tfs-document-type.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi10ZnMtZG9jdW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "nMw8":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-tfs-document-type/ps-dropdown-tfs-document-type.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onDocTypeChange($event)\"    (onPsInit)=\"this.onInit($event)\"></ps-select-dropdown>");

/***/ })

}]);
//# sourceMappingURL=111-es2015.js.map