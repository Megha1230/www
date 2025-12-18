(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "1L8/":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [id]=\"'terms_and_conditions' + id\" class=\"ps-complex-terms-and-conditions\">\r\n    <div class=\"ps-terms-cond-file\">\r\n        <ps-container-html-viewer [options]=\"options.htmlViewerOptions\">\r\n        </ps-container-html-viewer>\r\n        <div class=\"ps-terms-cond-checkbox\">\r\n            <ps-select-checkbox [id]=\"'terms_and_conditions' + id\" [options]=\"options.checkBoxOptions\"\r\n                (onPsChange)=\"onChange($event)\">\r\n            </ps-select-checkbox>\r\n        </div>\r\n    </div>\r\n</ps-container-complex>");

/***/ }),

/***/ "6eaE":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PsComplexTermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexTermsAndConditionsComponent", function() { return PsComplexTermsAndConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_terms_and_conditions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-terms-and-conditions.component.html */ "1L8/");
/* harmony import */ var _ps_complex_terms_and_conditions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-terms-and-conditions.component.scss */ "fyCU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base.component */ "wYHK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








/*
Author: H.Hassan
Date: 21Oct2019
WI: #915289
ps-template-terms-and-conditions
*/
let PsComplexTermsAndConditionsComponent = class PsComplexTermsAndConditionsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.onPsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
    }
    ngOnInit() {
        this.options.checkBoxOptions.labelKey = this.options.chargesAmount ? this.options.chargesAmount + this.options.checkBoxOptions.labelKey : this.options.checkBoxOptions.labelKey;
        if (this.options && !(this.options.htmlViewerOptions && this.options.htmlViewerOptions.fileName)) {
            this.options.htmlViewerOptions = {
                fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].defaultTermsAndConditions,
                parseHtmlFromFile: true
            };
        }
        // this.options.checkBoxOptions.labelKey = this.options.checkBoxOptions.labelKey;
    }
    // handle checkbox change
    //edited by Marina jira-AZDB-1294; terms and conditions checkbox shouldn't have a false value
    onChange(event) {
        if (event.newValue == false || event.newValue == "false") {
            this.options.checkBoxOptions.group.controls[this.options.checkBoxOptions.fcName].reset();
        }
        this.onPsChange.emit(event);
    }
};
PsComplexTermsAndConditionsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsComplexTermsAndConditionsComponent.propDecorators = {
    onPsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexTermsAndConditionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-terms-and-conditions',
        template: _raw_loader_ps_complex_terms_and_conditions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_terms_and_conditions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsComplexTermsAndConditionsComponent);



/***/ }),

/***/ "CU0Q":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-drafts-reports-loader/ps-complex-drafts-reports-loader.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container saveAsDraftButton>\n  <div class=\"saveAsDraftButton\" (click)='loadDrafts()'>\n    <ps-action-icon class=\"save-as-draft\" [options]='headerIconOptions'>\n    </ps-action-icon>\n  </div>\n</ng-container>\n<ng-container extraHeader *ngIf=\"showReport\">\n  <!-- <div class=\"row draftReportModal\"> -->\n  <ps-drafts-report (onPsChange)=\"loadDrafts()\" [options]=\"draftsOptions\"\n    [ngClass]=\"(showReportFlag)?'isOpened':'isClosed'\" #report>\n  </ps-drafts-report>\n  <!-- </div> -->\n</ng-container>");

/***/ }),

/***/ "DWLG":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-drafts-reports-loader/ps-complex-drafts-reports-loader.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: PsComplexDraftsReportsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexDraftsReportsLoader", function() { return PsComplexDraftsReportsLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_drafts_reports_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-drafts-reports-loader.component.html */ "CU0Q");
/* harmony import */ var _ps_complex_drafts_reports_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-drafts-reports-loader.component.scss */ "vx0f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_drafts_report_ps_drafts_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ps-drafts-report/ps-drafts-report.component */ "Nt3t");









let PsComplexDraftsReportsLoader = class PsComplexDraftsReportsLoader extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonP, loggerC) {
        super(commonP, loggerC);
        this.commonP = commonP;
        this.loggerC = loggerC;
        this.showReport = false;
        this.showReportFlag = false;
        this.headerIconOptions = {
            iconName: 'bookmark'
        };
        this.draftsOptions = {};
    }
    ngOnInit() {
        super.init();
        this.commonProv.copyObject(this.draftsOptions, this.options, false, true);
    }
    loadDrafts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let animationDuration;
            if (this.report) {
                animationDuration = parseFloat(src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].getElementStyle(this.report.hostElement.nativeElement, 'animationDuration')) * 1000;
            }
            this.showReportFlag = !this.showReportFlag;
            if (this.showReport) {
                setTimeout(() => {
                    this.showReport = !this.showReport;
                }, animationDuration);
            }
            else {
                this.showReport = !this.showReport;
            }
            // this.ref.detectChanges();
        });
    }
};
PsComplexDraftsReportsLoader.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexDraftsReportsLoader.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['report', { static: false },] }]
};
PsComplexDraftsReportsLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-drafts-reports-loader',
        template: _raw_loader_ps_complex_drafts_reports_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_drafts_reports_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexDraftsReportsLoader);



/***/ }),

/***/ "EcWv":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-drafts-reports-loader/ps-complex-drafts-reports-loader.component.module.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: PsComplexDraftsReportsLoaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexDraftsReportsLoaderPageModule", function() { return PsComplexDraftsReportsLoaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_drafts_report_ps_drafts_report_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-drafts-report/ps-drafts-report.component.module */ "mKXM");
/* harmony import */ var _ps_complex_drafts_reports_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-complex-drafts-reports-loader.component */ "DWLG");






let PsComplexDraftsReportsLoaderPageModule = class PsComplexDraftsReportsLoaderPageModule {
};
PsComplexDraftsReportsLoaderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_drafts_report_ps_drafts_report_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDraftsReportPageModule"]
        ],
        declarations: [_ps_complex_drafts_reports_loader_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexDraftsReportsLoader"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [_ps_complex_drafts_reports_loader_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexDraftsReportsLoader"]],
        entryComponents: [_ps_complex_drafts_reports_loader_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexDraftsReportsLoader"]],
    })
], PsComplexDraftsReportsLoaderPageModule);



/***/ }),

/***/ "EqcK":
/*!******************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-preview/ps-complex-preview.template.ts ***!
  \******************************************************************************************/
/*! exports provided: PsComplexPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPreview", function() { return PsComplexPreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_preview_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-preview.template.html */ "eMf3");
/* harmony import */ var _ps_complex_preview_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-preview.template.scss */ "vlXk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../psServices/models/common-constant */ "zngb");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../psServices/ps-common/ps-common.service */ "Q0Ba");








let PsComplexPreview = class PsComplexPreview {
    constructor(common) {
        this.common = common;
        this.isMultiple = false;
        this.columnHeaderPreview = [];
        this.edittedRows = [];
        this.PreviewWasLoaded = false;
        // TP # 888440
        /*  @Input('group') set _group(grp: Array<FormGroup>) {
           this.group = grp;
           for (const group of this.group) {
             this.common.previewMode(group);
           }
           setTimeout(() => {
             this.selectData();
           }, 0);
         } */
        this.previewPanelOptions = {
            isExpandable: true,
            labelKey: this.common.translate('summary_key'),
            iconName: 'keypad',
            expanded: true
        };
        this.gridData = {};
        this.multiView = false;
        this.spinner = false;
        this.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
        };
        this.sysParamScreenDispList = this.common.initialScreenDisplayParams.get(_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.custKeys = Array.from(this.sysParamScreenDispList.keys());
    }
    get previewData() {
        return this.allData;
    }
    set _data(param) {
        if (param) {
            this.enableTranslation = true; // Added for Approval List Case where I need to translate the Keys in details screen 821619
            this.allData = param;
        }
    }
    set options(opt) {
        this.group = opt.group;
        if (this.custKeys.findIndex(v => v.includes("_preview")) > -1) {
            if (this.sysParamScreenDispList.get(this.custKeys[this.custKeys.findIndex(v => v.includes("_preview"))]).IS_VISIBLE === 1) {
                this.handlePreviewData();
            }
        }
        else {
            this.handlePreviewData();
        }
    }
    selectData() {
        this.spinner = true;
        this.allData = new Array();
        const delimiter = _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].PREVIEW_COMPONENT_DELIMITER_HEX;
        const page = document.querySelectorAll(".operId_" + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        const elements = page[page.length - 1].querySelectorAll('[psPreviewEngine]');
        if (elements && elements.length > 0) {
            for (let i = 0; i < elements.length; i++) {
                const component = elements[i];
                const children = Array.prototype.slice.call(component.children);
                const psPreviewLabel = children.find(o => o.hasAttribute('psPreviewLabel'));
                const psPreviewHTML = children.find(o => o.hasAttribute('psPreviewHTML'));
                const psPreviewGrid = children.find(o => o.hasAttribute('psPreviewGrid'));
                const psPreviewMultiTemplate = children.find(o => o.hasAttribute('psPreviewMultiTemplate'));
                if (psPreviewGrid !== undefined) {
                    this.showGridPreview = true;
                }
                if ((psPreviewMultiTemplate && psPreviewMultiTemplate.textContent
                    && !_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].isEmptyString(psPreviewMultiTemplate.textContent.replace(/ /g, '')))) {
                    this.allData.push({ key: psPreviewMultiTemplate ? psPreviewMultiTemplate.textContent : '', value: false });
                    this.multiView = true;
                }
                if ((psPreviewLabel && psPreviewLabel.textContent
                    && !_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].isEmptyString(psPreviewLabel.textContent.replace(/ /g, ''))) || psPreviewHTML) {
                    //TP#1331866 - pass the gridViewPreview boolean to the allData array for the needed records only
                    this.allData.push({ key: psPreviewLabel ? psPreviewLabel.textContent : '', value: psPreviewHTML ? psPreviewHTML.outerHTML : '', innerHTML: psPreviewHTML ? true : false, showGridPreview: this.showGridPreview });
                }
                else {
                    const text = component.textContent;
                    if (text.indexOf(delimiter) == -1) {
                        continue;
                    }
                    let splited, key, value;
                    splited = text.trim().split(delimiter);
                    key = splited[0];
                    value = splited[1];
                    this.showGridPreview = false;
                    if (value == undefined && /\d/.test(splited[0])) {
                        value = splited[0].replace(/[^0-9]/g, '');
                    }
                    if (!key || !value) {
                        continue;
                    }
                    //TP#1331866 - pass the gridViewPreview boolean to the allData array for the needed records only
                    this.allData.push({ key: key.trim(), value: value.trim(), showGridPreview: this.showGridPreview });
                }
            }
            // TP # 888440
            if (this.allData.length == 1) {
                this.colStr = 'col-12';
            }
            else {
                this.colStr = 'col-6';
            }
            // TP # 888440
        }
        this.spinner = false;
    }
    ngOnDestroy() {
        this.common.editMode(this.group);
    }
    handlePreviewData() {
        this.common.previewMode(this.group);
        setTimeout(() => {
            this.selectData();
        }, 0);
    }
};
PsComplexPreview.ctorParameters = () => [
    { type: _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] }
];
PsComplexPreview.propDecorators = {
    _data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['data',] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['options',] }]
};
PsComplexPreview = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-preview',
        template: _raw_loader_ps_complex_preview_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_preview_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]])
], PsComplexPreview);



/***/ }),

/***/ "TrpJ":
/*!*************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-preview/ps-complex-preview.template.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: PsComplexPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPreviewModule", function() { return PsComplexPreviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_complex_preview_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-complex-preview.template */ "EqcK");





let PsComplexPreviewModule = class PsComplexPreviewModule {
};
PsComplexPreviewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        declarations: [_ps_complex_preview_template__WEBPACK_IMPORTED_MODULE_4__["PsComplexPreview"]],
        exports: [_ps_complex_preview_template__WEBPACK_IMPORTED_MODULE_4__["PsComplexPreview"]],
        entryComponents: [_ps_complex_preview_template__WEBPACK_IMPORTED_MODULE_4__["PsComplexPreview"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], PsComplexPreviewModule);



/***/ }),

/***/ "eMf3":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-preview/ps-complex-preview.template.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-panel [options]=\"previewPanelOptions\">\n  <ps-action-image class=\"inline-loading-image\" *ngIf=\"spinner\" [options]=\"actionImageOptions\">\n  </ps-action-image>\n  <div [ngClass]=\"{'preview-wrapper' : !showGridPreview && !multiView, 'multi-preview' : multiView}\"\n    *ngFor=\"let itemData of previewData\">\n    <ps-label-input [ngClass]=\"{'change-object-multi': itemData.value === false}\" class=\"preview-label\"\n      *ngIf=\"!enableTranslation\" [options]=\"{labelKey: itemData.key,  previewMode: false}\"></ps-label-input>\n    <ps-label-input [ngClass]=\"{'change-object-multi': itemData.value === false}\" class=\"preview-label\"\n      *ngIf=\"enableTranslation\" [options]=\"{labelKey: itemData.key, previewMode: true }\">\n    </ps-label-input>\n    <ps-label-input class=\"preview-value\"\n      [options]=\"{labelKey: !itemData.showGridPreview && !itemData.innerHTML? itemData.value : '',  previewMode: true}\">\n    </ps-label-input>\n    <div class=\"preview-value preview-html\" *ngIf=\"itemData.innerHTML\" [innerHTML]=\"itemData.value |PsSafe : 'html'\">\n    </div>\n  </div>\n</ps-container-panel>");

/***/ }),

/***/ "fM+N":
/*!**************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: PsTemplateStepperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateStepperModule", function() { return PsTemplateStepperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-round-progressbar */ "eANF");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_drafts_reports_loader_ps_complex_drafts_reports_loader_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-drafts-reports-loader/ps-complex-drafts-reports-loader.component.module */ "EcWv");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.module */ "rSht");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_drafts_report_ps_drafts_report_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-drafts-report/ps-drafts-report.component.module */ "mKXM");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_integration_JBPM_ps_jbpm_task_list_ps_jbpm_task_list_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-integration/JBPM/ps-jbpm-task-list/ps-jbpm-task-list.component.module */ "vjKY");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_preview_ps_complex_preview_template_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ps-template-preview/ps-complex-preview.template.module */ "TrpJ");
/* harmony import */ var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ps-template-screen/ps-template-screen.template.module */ "63Vm");
/* harmony import */ var _ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ps-template-stepper.template */ "kRg/");












let PsTemplateStepperModule = class PsTemplateStepperModule {
};
PsTemplateStepperModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_11__["PsTemplateStepper"]],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__["PsComponentsModule"],
            _ps_template_preview_ps_complex_preview_template_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexPreviewModule"],
            _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_10__["PsTemplateScreenPageModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexTermsAndConditionsModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_drafts_reports_loader_ps_complex_drafts_reports_loader_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexDraftsReportsLoaderPageModule"],
            src_app_commonBussinessSRC_psComponents_ps_drafts_report_ps_drafts_report_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDraftsReportPageModule"],
            src_app_commonBussinessSRC_psComponents_ps_integration_JBPM_ps_jbpm_task_list_ps_jbpm_task_list_component_module__WEBPACK_IMPORTED_MODULE_6__["PsJbpmTaskListComponentModule"],
            angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__["RoundProgressModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_11__["PsTemplateStepper"]],
        exports: [_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_11__["PsTemplateStepper"]],
    })
], PsTemplateStepperModule);



/***/ }),

/***/ "fyCU":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rSht":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.module.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PsComplexTermsAndConditionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexTermsAndConditionsModule", function() { return PsComplexTermsAndConditionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-terms-and-conditions.component */ "6eaE");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");





let PsComplexTermsAndConditionsModule = class PsComplexTermsAndConditionsModule {
};
PsComplexTermsAndConditionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexTermsAndConditionsComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]
        ],
        exports: [_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexTermsAndConditionsComponent"]],
        entryComponents: [_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexTermsAndConditionsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexTermsAndConditionsModule);



/***/ }),

/***/ "vlXk":
/*!********************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-preview/ps-complex-preview.template.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col p {\n  margin: 0px !important;\n  margin-top: 10px !important;\n}\n\nh2 {\n  text-align: center;\n}\n\n.ps-preview {\n  box-shadow: 1px 1px 8px rgba(0, 90, 66, 0.5);\n  padding: 10px !important;\n  margin: 5px auto;\n}\n\n.ps-preview-title {\n  text-align: center;\n}\n\n.preview-label {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BzLWNvbXBsZXgtcHJldmlldy50ZW1wbGF0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoicHMtY29tcGxleC1wcmV2aWV3LnRlbXBsYXRlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHAge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5wcy1wcmV2aWV3IHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IHJnYmEoMCwgOTAsIDY2LCAwLjUpO1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuLnBzLXByZXZpZXctdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldmlldy1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "vx0f":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-drafts-reports-loader/ps-complex-drafts-reports-loader.component.scss ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWRyYWZ0cy1yZXBvcnRzLWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=1-es2015.js.map