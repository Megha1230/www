(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-todo-approve-reject-todo-approve-reject-module"],{

/***/ "BDF1":
/*!***************************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PsTemplateApproveRejectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateApproveRejectData", function() { return PsTemplateApproveRejectData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_template_approve_reject_data_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-template-approve-reject-data.page.html */ "fPKs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_integration_ps_integration_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/integration/ps-integration-constants */ "MNPF");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.page */ "uqA0");







let PsTemplateApproveRejectData = class PsTemplateApproveRejectData extends _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__["PsTemplateBasePage"] {
    constructor(common) {
        super();
        this.common = common;
        this.approveOptions = {
            labelKey: 'approve_key',
            group: this.options.group,
            postCallFunction: {
                func(returnedData) {
                    return new Promise((resolve, reject) => {
                        this.executionClass.refreshList(returnedData);
                        resolve(true);
                    });
                },
                executionClass: this,
                params: []
            }
        };
        this.rejectOptions = {
            labelKey: 'reject_key',
            group: this.options.group,
            preCallFunction: {
                func() {
                    return new Promise((resolve, reject) => {
                        this.executionClass.confirm().then(() => {
                            resolve(true);
                        }).catch(() => {
                            reject();
                        });
                    });
                },
                executionClass: this,
                params: []
            },
            postCallFunction: {
                func(returnedData) {
                    return new Promise((resolve, reject) => {
                        this.executionClass.refreshList(returnedData);
                        resolve(true);
                    });
                },
                executionClass: this,
                params: []
            }
        };
        this.previewPanelOptions = {
            isExpandable: true,
            labelKey: this.common.translate('summary_key'),
            iconName: 'keypad',
            expanded: true
        };
    }
    refreshList(returnedData) {
        //added by ghada, AZDB-5485 for refreshing whole draft list not just JBPM since the template now is being opened from other draft records
        this.common.events.publish('draft:refresh');
    }
    get operId() {
        for (const item of this.options.data) {
            if (item.labelkey == "operId")
                return item.value;
        }
    }
    ngOnInit() {
        this.oper_Id = 'operId_' + this.operId;
        this.enableTranslation = this.options.isPendingDeletion ? true : false;
        this.approveOptions.group = this.options.group;
        this.approveOptions.submitServiceUrl = this.options.isPendingDeletion ? "" : src_app_commonBussinessSRC_psServices_integration_ps_integration_constants__WEBPACK_IMPORTED_MODULE_3__["IntegrationConstants"].JBPM.serviceUrl.completeBpmTaskFromInterceptor;
        this.rejectOptions.group = this.options.group;
        this.rejectOptions.submitServiceUrl = this.options.isPendingDeletion ? "" : src_app_commonBussinessSRC_psServices_integration_ps_integration_constants__WEBPACK_IMPORTED_MODULE_3__["IntegrationConstants"].JBPM.serviceUrl.completeBpmTaskFromInterceptor;
        if (this.options.data) {
            this.approveOptions.extraParams = Object.assign(Object.assign({ data: this.options.data }, this.options.extraParams), { isActionButton: true });
            this.rejectOptions.extraParams = Object.assign(Object.assign({ data: this.options.data }, this.options.extraParams), { isActionButton: true });
        }
        this.commonProv.setFormData(this.options.group, this.options.requestObject);
    }
    confirm() {
        let modalID = 'user-confirmation-popup';
        return new Promise((resolve, reject) => {
            const alertController = {
                cssClass: modalID,
                header: 'enter_reason_key',
                inputs: [
                    {
                        type: 'keyin',
                        options: {
                            placeHolder: 'reason_key',
                            fcName: 'rejectionReason',
                            group: this.options.group,
                            forceShowOnPreview: true
                        }
                    }
                ],
                buttons: [
                    {
                        role: 'cancel',
                        options: {
                            labelKey: 'cancel_key',
                            psClass: 'user-confirmation-popup-cancel-button',
                            group: this.options.group
                        },
                        handler: () => {
                            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_4__["CommonUtils"].dismissAllModals(null, null, modalID);
                            reject();
                        }
                    },
                    {
                        options: {
                            labelKey: 'submit_key',
                            psClass: 'user-confirmation-popup-submit-button',
                            group: this.options.group
                        },
                        handler: () => {
                            this.rejectOptions.extraParams = Object.assign(Object.assign({}, this.rejectOptions.extraParams), { bpmParametersMap: {
                                    reject_reason_out: this.options.requestObject.reason
                                } });
                            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_4__["CommonUtils"].dismissAllModals(null, null, modalID);
                            resolve();
                        }
                    }
                ]
            };
            this.commonProv.presentPsAlert(alertController, modalID);
        });
    }
};
PsTemplateApproveRejectData.ctorParameters = () => [
    { type: _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] }
];
PsTemplateApproveRejectData.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    oper_Id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class',] }]
};
PsTemplateApproveRejectData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-template-approve-reject-data',
        template: _raw_loader_ps_template_approve_reject_data_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]])
], PsTemplateApproveRejectData);



/***/ }),

/***/ "d75m":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PsTemplateApproveRejectDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateApproveRejectDataModule", function() { return PsTemplateApproveRejectDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-template-screen/ps-template-screen.template.module */ "63Vm");
/* harmony import */ var _ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-template-approve-reject-data.page */ "BDF1");






let PsTemplateApproveRejectDataModule = class PsTemplateApproveRejectDataModule {
};
PsTemplateApproveRejectDataModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateScreenPageModule"]
        ],
        declarations: [_ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__["PsTemplateApproveRejectData"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__["PsTemplateApproveRejectData"]],
        exports: [_ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__["PsTemplateApproveRejectData"]]
    })
], PsTemplateApproveRejectDataModule);



/***/ }),

/***/ "fPKs":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.page.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ps-template-screen>\n  <ng-container *ngIf=\"options?.data\">\n    <ps-container-panel [options]=\"previewPanelOptions\">\n      <div\n        *ngFor=\"let item of options.data\"\n        class=\"preview-wrapper\"\n        [class]=\"'preview-label-' + item.labelkey\"\n      >\n      <ng-conatiner *ngIf=\"item.value\">\n        <ps-label        \n        *ngIf=\"enableTranslation\" \n          class=\"preview-label\"\n          [options]=\"{labelKey:item.labelkey+'_key',translate:true}\"\n        >\n        </ps-label>\n        <ps-label\n        *ngIf=\"!enableTranslation\"\n        class=\"preview-label\"\n        [options]=\"{labelKey:item.labelkey+'_key',translate:false}\"\n      >\n      </ps-label>\n        <ps-label\n          class=\"preview-value\"\n          [options]=\"{labelKey:item.value, translate:false}\"\n        >\n        </ps-label>\n      </ng-conatiner>\n      </div>\n    </ps-container-panel>\n  </ng-container>\n  <ng-container psFooter>\n    <ps-button-cancel\n      class=\"footer-buttons\"\n      [id]=\"'todo_cancel'\"\n    ></ps-button-cancel>\n    <ps-button-approve\n      class=\"footer-buttons\"\n      [options]=\"approveOptions\"\n      id=\"todo_approve\"\n    >\n    </ps-button-approve>\n    <ps-button-reject\n      class=\"footer-buttons\"\n      [options]=\"rejectOptions\"\n      id=\"todo_reject\"\n    >\n    </ps-button-reject>\n  </ng-container>\n</ps-template-screen>\n");

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

/***/ "irmf":
/*!*************************************************************************!*\
  !*** ./src/app/pages/todo-approve-reject/todo-approve-reject.module.ts ***!
  \*************************************************************************/
/*! exports provided: TodoApproveRejectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoApproveRejectPageModule", function() { return TodoApproveRejectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_approve_reject_data_ps_template_approve_reject_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.module */ "d75m");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _todo_approve_reject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-approve-reject.page */ "Tgbh");







const routes = [
    {
        path: '',
        component: _todo_approve_reject_page__WEBPACK_IMPORTED_MODULE_6__["TodoApproveRejectPage"]
    }
];
let TodoApproveRejectPageModule = class TodoApproveRejectPageModule {
};
TodoApproveRejectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_approve_reject_data_ps_template_approve_reject_data_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateApproveRejectDataModule"]
        ],
        declarations: [_todo_approve_reject_page__WEBPACK_IMPORTED_MODULE_6__["TodoApproveRejectPage"]]
    })
], TodoApproveRejectPageModule);



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
//# sourceMappingURL=pages-todo-approve-reject-todo-approve-reject-module-es2015.js.map