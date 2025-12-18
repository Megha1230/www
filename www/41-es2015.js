(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "DLu+":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-screen>\n    <ps-container-panel [options]=\"panelOptions1\" id=\"documents_panel_1\" class=\"ps-container-panel-doc\">\n        <ps-container-lookup-option #productDetails [options]=\"cardOptions\" [itemCard]=\"itemCard\">\n        </ps-container-lookup-option>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2\" id=\"documents_panel_2\" class=\"ps-container-panel-doc\">\n        <div class=\"documentsDropdown\">\n            <ps-complex-widget-dropdowns #documentsDropdownWidget [options]=\"widgetDropdownsOptions\" id=\"documents_list_dropdown\">\n            </ps-complex-widget-dropdowns>\n        </div>\n        <ps-complex-date-filter id=\"filterDate\" [options]=\"filterDate\"></ps-complex-date-filter>\n        <div class=\"documents-actions\">\n            <div class=\"reset-documents-button\">\n                <ps-button-reset [options]=\"resetOptions\" (onClick)=\"resetFilter()\"></ps-button-reset>\n            </div>\n            <div class=\"filter-documents-button\">\n                <ps-button-standard [options]=\"filterOptions\" (onClick)=\"filterDocuments()\"></ps-button-standard>\n            </div>\n        </div>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3\" id=\"documents_panel_3\" class=\"ps-container-panel-doc\">\n        <ps-documents-list [options]=\"documentListOptions\"></ps-documents-list>\n    </ps-container-panel>\n</ps-template-screen>");

/***/ }),

/***/ "KEkL":
/*!*****************************************************!*\
  !*** ./src/app/pages/documents/documents.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "gKqT":
/*!***************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
  \***************************************************/
/*! exports provided: OmniBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniBasePage", function() { return OmniBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./omni-base.page.html */ "mVVo");
/* harmony import */ var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omni-base.page.scss */ "s2T5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/customization/psServices/util/common-cust-utils */ "oS+F");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");











let OmniBasePage = class OmniBasePage {
    constructor() {
        this.isPageDisabled = false;
        this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
        this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]);
        // this.getScreenTranslations();
    }
    init() {
        this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
        this.customizationMap = this.commonProv.returnOperCustomization();
        const navParams = this.navigationServices.getAllParams();
        const formDisObj = {};
        // let oper = PsCommonSettings.oper_ID;
        // PsCommonSettings.currentListOfSteps = {};
        if (navParams && navParams.readOnlypage === true) {
            formDisObj.IS_READONLY = 1;
            // Modified by Richie for #BUG 1259353
            if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            }
        }
        else if (this.customizationMap) {
            formDisObj.IS_READONLY = 0;
            this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
        }
        // End Richie
        // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
        this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];
        if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
            this.getScreenTranslations(this.currentOperID);
        }
        // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
    }
    ngOnInit() {
        this.init();
    }
    ionViewDidEnter() {
        this.viewDidEnter();
    }
    ionViewWillLeave() {
        this.viewWillLeave();
    }
    ionViewWillEnter() {
        this.viewWillEnter();
    }
    viewWillEnter() {
    }
    disableForm(formGroup) {
        // Modified by Richie for #BUG 1259353
        if (formGroup !== undefined && this.customizationMap) {
            const formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY);
            // End Richie
            if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach((key) => {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
            }
        }
    }
    viewDidEnter() {
        this.commonProv.checkViewBS.next({ value: true, page: this, didEnter: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, didEnter: true });
        this.commonProv.dismissLoading();
        this.disableForm(this.baseFormGroup);
        src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
        this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
    }
    viewWillLeave() {
        this.commonProv.checkViewBS.next({ value: true, page: this, willLeave: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, willLeave: true });
    }
    // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
    // added after all the changeEvents are finished to disable the form 
    ngAfterViewChecked() {
        if (!this.isPageDisabled) {
            setTimeout(() => {
                this.disableForm(this.baseFormGroup);
                this.isPageDisabled = true;
            }, 300);
        }
    }
    // AZDB-7529 - Start - AMANAOI250035
    getScreenTranslations(screenOperId) {
        const operationId = screenOperId ? screenOperId : 2222;
        const activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';
        if (operationId && activeLanguage) {
            this.commonProv.language.getOperTranslation(activeLanguage, operationId);
        }
    }
};
OmniBasePage.ctorParameters = () => [];
OmniBasePage.propDecorators = {
    psClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
};
OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OmniBasePage);



/***/ }),

/***/ "kAgI":
/*!***************************************************!*\
  !*** ./src/app/pages/documents/documents.page.ts ***!
  \***************************************************/
/*! exports provided: DocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPage", function() { return DocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_documents_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./documents.page.html */ "DLu+");
/* harmony import */ var _documents_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents.page.scss */ "KEkL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_widget_dropdowns_ps_complex_widget_dropdowns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component */ "Sx1r");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_container_ps_container_lookup_option_ps_container_lookup_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../commonSRC/psComponents/ps-base/ps-base-container/ps-container-lookup-option/ps-container-lookup-option.component */ "BygU");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonSRC/psServices/models/ps-common-interface */ "DUM0");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-utils */ "qEF5");














let DocumentsPage = class DocumentsPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(omniPull, omniCommonService) {
        super();
        this.omniPull = omniPull;
        this.omniCommonService = omniCommonService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.documentsPageData = {};
        this.panelOptions1 = {
            isExpandable: true,
            iconName: 'document',
            expanded: true
        };
        this.panelOptions2 = {
            isExpandable: true,
            labelKey: 'documents_filter_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions3 = {
            isExpandable: true,
            labelKey: 'documents_key',
            iconName: 'document',
            expanded: true,
        };
        this.filterDate = {};
        this.resetOptions = {
            labelKey: 'reset_key',
            group: this.formGroup
        };
        this.filterOptions = {
            labelKey: 'filter_key',
            group: this.formGroup,
        };
        this.widgetDropdownsOptions = {
            group: this.formGroup,
            requestObject: this.documentsPageData,
            dropdowns: [
                {
                    group: this.formGroup,
                    fcName: 'documentsDropdown',
                    enablePagination: false,
                    requestObject: this.documentsPageData
                },
            ]
        };
        this.documentListOptions = {
            itemList: []
        };
    }
    ngOnInit() {
        this.baseFormGroup = this.formGroup;
        const param = this.omniPull.omniCommon.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].preLoginResponse).parameters;
        const defaultFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
        this.filterDate = {
            fromDate: {
                group: this.formGroup,
                fcName: 'fromDate',
                displayFormat: defaultFormat,
                placeHolder: 'from_date_key',
            },
            toDate: {
                group: this.formGroup,
                fcName: 'toDate',
                displayFormat: defaultFormat,
                placeHolder: 'to_date_key',
            }
        };
        this.lookup.showDocuments = false;
        this.cardOptions = this.navigationServices.getParamKey('options');
        this.cardOptions.isEditable = false;
        this.cardOptions.actionDetailsOptions = null;
        this.cardOptions.listOfStatementOptions = null;
        this.itemCard = this.navigationServices.getParamKey('itemCard');
        let fromOperName = this.navigationServices.getParamKey('fromOperName');
        let panel1Name = fromOperName;
        if (panel1Name.startsWith("My")) {
            panel1Name = panel1Name.replace("My ", "");
        }
        panel1Name = panel1Name.replace(" Documents", "");
        if (fromOperName.startsWith("My") && panel1Name.endsWith('s')) {
            panel1Name = panel1Name.replace("s", "");
        }
        this.panelOptions1.labelKey = panel1Name + " Details";
        this.parentDocuments = this.getParentDocumentsList();
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        //moved here by ghada, AZDB-4624 to eliminate repetition of getting date controls format
        this.fromDateCtrlFormat = this.formGroup.controls[this.filterDate.fromDate.fcName][_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CONTROLLER_DATE_FORMAT];
        this.toDateCtrlFormat = this.formGroup.controls[this.filterDate.toDate.fcName][_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CONTROLLER_DATE_FORMAT];
    }
    resetFilter() {
        this.documentsComplexWidget.resetSelections();
        this.formGroup.get(this.filterDate.fromDate.fcName).setValue("");
        this.formGroup.get(this.filterDate.toDate.fcName).setValue("");
        this.formGroup.controls[this.filterDate.fromDate.fcName].markAsTouched();
        this.formGroup.controls[this.filterDate.toDate.fcName].markAsTouched();
    }
    getParentDocumentsList() {
        const parentOper = this.navigationServices.getParamKey('fromOper');
        const listOptions = this.omniCommonService.getParentDocumentsList(parentOper);
        this.widgetDropdownsOptions.dropdowns[0].listOfOptions = listOptions;
    }
    filterDocuments() {
        const filteredDocs = this.documentsComplexWidget.selectedItemsList;
        const fromDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.formGroup.get(this.filterDate.fromDate.fcName).value).format(this.fromDateCtrlFormat);
        const toDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.formGroup.get(this.filterDate.toDate.fcName).value).format(this.toDateCtrlFormat);
        if (this.formGroup.valid) {
            if (filteredDocs.length > 0) {
                this.documentListOptions.fromDate = fromDate;
                this.documentListOptions.toDate = toDate;
                const operIdsList = [];
                filteredDocs.forEach(element => {
                    operIdsList.push(element.itemValue);
                });
                const params = {
                    reportType: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].REPORT_TYPE,
                    reportFormat: _commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_11__["IFileFormat"].HTML,
                    reportParametersList: {
                        operIds: operIdsList,
                        fromDate: fromDate,
                        toDate: toDate
                    }
                };
                this.commonProv.presentLoading();
                this.omniPull.returnFilteredDocuments(params).then(result => {
                    if (result && result.gridModel && result.gridModel.length > 0) {
                        const grid = result.gridModel;
                        const docList = [];
                        grid.forEach(item => {
                            docList.push({
                                documentName: item.operName,
                                operId: item.operChildId,
                                showExports: item.hasData,
                            });
                        });
                        this.documentListOptions.itemList = docList;
                        this.documentListOptions.itemCard = this.itemCard;
                    }
                    else {
                        if (filteredDocs.length == 0) {
                            this.documentsComplexWidget.selectReportsError = true;
                        }
                        _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].presentInfoAlert(this.commonProv.translate('no_data_found_key'));
                    }
                }).catch(error => this.commonProv.logger.log(error)).finally(() => {
                    this.commonProv.dismissLoading();
                });
            }
        }
        else {
            for (const control of Object.keys(this.formGroup.controls)) {
                if (this.formGroup.controls[control].errors) {
                    this.formGroup.get(control).setValue("");
                    this.formGroup.controls[control].markAsTouched();
                }
            }
        }
    }
};
DocumentsPage.ctorParameters = () => [
    { type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] },
    { type: _commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"] }
];
DocumentsPage.propDecorators = {
    lookup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['productDetails', { static: true },] }],
    documentsComplexWidget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['documentsDropdownWidget', { static: true },] }]
};
DocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'documents',
        template: _raw_loader_documents_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documents_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], _commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])
], DocumentsPage);



/***/ }),

/***/ "mVVo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "s2T5":
/*!*****************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=41-es2015.js.map