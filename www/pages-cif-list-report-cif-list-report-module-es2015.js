(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cif-list-report-cif-list-report-module"],{

/***/ "2ery":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-screen>\n    <ps-action-image class=\"inline-loading-image\" *ngIf=\"!options.disableLoading && spinner\"\n        [options]=\"actionImageOptions\">\n    </ps-action-image>\n    <ng-content>\n    </ng-content>\n    <ng-container psFooter>\n        <ng-content select=[footer]></ng-content>\n        <ps-button-cancel (click)=\"onFooterClick()\" [id]=\"id + 'temp_btn_cancel'\" [options]=\"cancelOptions\">\n        </ps-button-cancel>\n\n    </ng-container>\n</ps-template-screen>");

/***/ }),

/***/ "82RF":
/*!*****************************************************************!*\
  !*** ./src/app/pages/cif-list-report/cif-list-report.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReportCIFListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCIFListPageModule", function() { return ReportCIFListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _cif_list_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cif-list-report.page */ "m0f4");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_cif_list_ps_cif_list_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.module */ "wLyJ");








const routes = [
    {
        path: '',
        component: _cif_list_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportCIFListPage"]
    }
];
let ReportCIFListPageModule = class ReportCIFListPageModule {
};
ReportCIFListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_cif_list_ps_cif_list_component_module__WEBPACK_IMPORTED_MODULE_7__["PsOptionCifReportListComponentModule"]
        ],
        declarations: [_cif_list_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportCIFListPage"]],
    })
], ReportCIFListPageModule);



/***/ }),

/***/ "C7pM":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PsOptionCifReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOptionCifReportListComponent", function() { return PsOptionCifReportListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_cif_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-cif-list.component.html */ "kpj1");
/* harmony import */ var _ps_cif_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-cif-list.component.scss */ "vfPx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../psServices/models/ps-commonBusiness.settings */ "fOh1");









let PsOptionCifReportListComponent = class PsOptionCifReportListComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateListPage"] {
    constructor(commonProv, omniPull) {
        super();
        this.omniPull = omniPull;
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // tslint:disable-next-line: no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cifReportLabelValuesMap = new Map();
        this.cifReportHeaderMap = new Map();
        this.noCifListFound = false;
        this.firstNameKey = 'first_name_key';
        this.lastNameKey = 'last_name_key';
        this.motherfirstNameKey = 'mother_first_name_key';
        this.motherlastNameKey = 'mother_last_name_key';
        this.shortNameKey = 'short_name_key';
        this.longNameKey = 'long_name_key';
    }
    ngOnInit() {
        super.init();
        this.populateCifListMap();
        if (this.options.showOnlyList === null ||
            this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
    }
    getContainerLookUpOptions(val) {
        return this.prepareLookUp(val);
    }
    prepareLookUp(val) {
        const lookupDetails = {};
        lookupDetails.labelKey = this.options.labelKey;
        lookupDetails.fcName = this.options.fcName;
        lookupDetails.currencyFlag = "";
        lookupDetails.labelsValueMap = new Map([...this.cifReportLabelValuesMap]);
        lookupDetails.headerMap = this.cifReportHeaderMap;
        if (val.cifType == 'T') {
            lookupDetails.labelsValueMap.delete(this.firstNameKey);
            lookupDetails.labelsValueMap.delete(this.lastNameKey);
            lookupDetails.labelsValueMap.delete(this.motherlastNameKey);
            lookupDetails.labelsValueMap.delete(this.motherfirstNameKey);
        }
        else if (val.cifType == 'V') {
            lookupDetails.labelsValueMap.delete(this.shortNameKey);
            lookupDetails.labelsValueMap.delete(this.longNameKey);
        }
        lookupDetails.formGroup = this.options.group;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.translateSubTitle = false;
        lookupDetails.actionDetailsOptions = [];
        lookupDetails.itemList = this.options.itemList;
        if (val.statusCode === null ||
            val.statusCode === "DR" ||
            val.statusCode === "I") {
            lookupDetails.actionDetailsOptions.push({
                id: 'delete',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                buttonIcon: "delete",
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.deleteSubmitData,
                cssClass: "fab-edit-button",
                label: "delete_key",
                iconName: "trash",
                actionType: "Submit",
                alertMessage: "alert_delete_cif_request_key",
                alertType: "prompt",
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CIF_OPENING_DELETE_OPER_ID,
                detailServiceUrl: "rest/omniCorePull/returnCifInformation",
                detailServiceCallOnAction: true,
                postCallFunction: {
                    func() {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.reloadList());
                        });
                    },
                    executionClass: this,
                    params: [],
                },
            }, {
                id: 'edit',
                label: "edit_key",
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: "paper",
                        labelOptions: {
                            labelKey: 'edit_key'
                        }
                    },
                    route: "cif-opening",
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CIF_OPENING_EDIT_OPER_ID,
                        iconName: "paper",
                        title: "edit_key",
                    },
                    preCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.prepareCIFDetails(lookupDetails.actionDetailsOptions[1].actionHyperlink));
                            });
                        },
                        executionClass: this,
                        params: [],
                    },
                },
            });
        }
        lookupDetails.statementOptions = {};
        return lookupDetails;
    }
    reloadList() {
        this.reloadFct.emit();
    }
    populateCifListMap() {
        let branchCodeMap = {};
        let cifNameMap = {};
        let cifTypeDescMap = {};
        let dateCreationMap = {};
        let firstNameMap = {};
        let lastNameMap = {};
        let motherFirstNameMap = {};
        let motherLastNameMap = {};
        let mobileMap = {};
        let statusMap = {};
        let telMap = {};
        let userCifNoMap = {};
        let shortNameMap = {};
        let longNameMap = {};
        branchCodeMap = {
            key: "branchCode",
            value: "",
        };
        cifNameMap = {
            key: "title",
            value: "cifName",
            isEdit: false,
            formGroupMap: {
                labelKey: "",
                placeHolder: "",
                fcName: "title",
            },
        };
        cifTypeDescMap = {
            key: "cifTypeDesc",
            value: "",
        };
        dateCreationMap = {
            key: "dateCreation",
            value: "",
        };
        firstNameMap = {
            key: "firstName",
            value: "",
        };
        lastNameMap = {
            key: "lastName",
            value: "",
        };
        shortNameMap = {
            key: "shortName",
            value: "",
        };
        longNameMap = {
            key: "longName",
            value: "",
        };
        motherFirstNameMap = {
            key: "motherFirstName",
            value: "",
        };
        motherLastNameMap = {
            key: "motherLastName",
            value: "",
        };
        mobileMap = {
            key: "mobile",
            value: "",
        };
        userCifNoMap = {
            key: "subTitle",
            value: "userCifNo",
            isEdit: false,
            formGroupMap: {
                labelKey: "",
                placeHolder: "",
                fcName: "subTitle",
            },
        };
        statusMap = {
            key: "status",
            value: "",
        };
        telMap = {
            key: "tel",
            value: "",
        };
        this.cifReportLabelValuesMap.set("branch_key", branchCodeMap);
        this.cifReportLabelValuesMap.set("status_key", statusMap);
        this.cifReportLabelValuesMap.set("cif_key", cifTypeDescMap);
        this.cifReportLabelValuesMap.set("creation_date_key", dateCreationMap);
        this.cifReportLabelValuesMap.set(this.shortNameKey, shortNameMap);
        this.cifReportLabelValuesMap.set(this.longNameKey, longNameMap);
        this.cifReportLabelValuesMap.set(this.firstNameKey, firstNameMap);
        this.cifReportLabelValuesMap.set(this.lastNameKey, lastNameMap);
        this.cifReportLabelValuesMap.set(this.motherfirstNameKey, motherFirstNameMap);
        this.cifReportLabelValuesMap.set(this.motherlastNameKey, motherLastNameMap);
        this.cifReportLabelValuesMap.set("mobile_key", mobileMap);
        this.cifReportLabelValuesMap.set("telephone_key", telMap);
        this.cifReportHeaderMap.set("title", cifNameMap);
        this.cifReportHeaderMap.set("subTitle", userCifNoMap);
    }
    updateCard(item) {
        this.onClickCard.emit(this.options);
    }
    prepareCIFDetails(actionCard) {
        return new Promise((resolve, reject) => {
            const generalRequestData = {
                commonParametersList: {
                    userCifNo: actionCard.navigationOptions.queryParams.userCifNo,
                },
            };
            this.omniPull.returnCIFDetails(generalRequestData).then((result) => {
                this.commonProv.copyObject(actionCard.navigationOptions.queryParams, result.data, false);
                const data = result.data;
                actionCard.navigationOptions.queryParams = Object.assign({ ScreenVO: Object.assign({ data }, actionCard.navigationOptions.queryParams) }, actionCard.navigationOptions.queryParams);
                this.commonProv.prepareResult(actionCard.navigationOptions.queryParams.ScreenVO, true);
                resolve(true);
            });
        });
    }
};
PsOptionCifReportListComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsOptionCifReportListComponent.propDecorators = {
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsOptionCifReportListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "ps-cif-list",
        template: _raw_loader_ps_cif_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_ps_cif_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsOptionCifReportListComponent);



/***/ }),

/***/ "DTk4":
/*!***************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS12aWV3LnRlbXBsYXRlLnNjc3MifQ== */");

/***/ }),

/***/ "FQ9l":
/*!********************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PsTemplateViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateViewModule", function() { return PsTemplateViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-template-screen/ps-template-screen.template.module */ "63Vm");
/* harmony import */ var _ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-template-view.template */ "RkAu");






let PsTemplateViewModule = class PsTemplateViewModule {
};
PsTemplateViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateScreenPageModule"]
        ],
        declarations: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        exports: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        entryComponents: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], PsTemplateViewModule);



/***/ }),

/***/ "RkAu":
/*!*************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.ts ***!
  \*************************************************************************************/
/*! exports provided: PsTemplateView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateView", function() { return PsTemplateView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-template-view.template.html */ "2ery");
/* harmony import */ var _ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-template-view.template.scss */ "DTk4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../psServices/Event/event.service */ "r40+");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.page */ "uqA0");







let PsTemplateView = class PsTemplateView extends _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__["PsTemplateBasePage"] {
    // End Richie
    constructor(events) {
        super();
        this.events = events;
        this.cancelOptions = {
            labelKey: 'cancel_key',
            group: this.options.group
        };
        this.spinner = false;
        this.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
        };
        // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument
        this.reqStartEvent = events.subscribe('network:request:started', (time) => {
            this.spinner = true;
        });
        this.reqCompletEvent = events.subscribe('network:request:completed', (time) => {
            this.spinner = false;
        });
    }
    ngOnInit() {
        this.options.requestObject = this.options.requestObject ? this.options.requestObject : {};
        if (this.options.group) {
            this.commonProv.setFormData(this.options.group, this.options.requestObject);
        }
    }
    onFooterClick() {
        if (document.getElementsByTagName('ion-modal')[0] !== undefined) {
            document.getElementsByTagName('ion-modal')[0].dismiss();
        }
    }
    ngOnDestroy() {
        // modified by Richie #TP 1105083
        super.ngOnDestroy();
        if (this.reqStartEvent) {
            this.reqStartEvent.unsubscribe();
        }
        if (this.reqCompletEvent) {
            this.reqCompletEvent.unsubscribe();
        }
    }
};
PsTemplateView.ctorParameters = () => [
    { type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
PsTemplateView.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsTemplateView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-view',
        template: _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], PsTemplateView);



/***/ }),

/***/ "kpj1":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let item of options.itemList\">\n      <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions(item)\" [itemCard]=\"item\"\n        (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "vfPx":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jaWYtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wLyJ":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PsOptionCifReportListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOptionCifReportListComponentModule", function() { return PsOptionCifReportListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-cif-list.component */ "C7pM");






let PsOptionCifReportListComponentModule = class PsOptionCifReportListComponentModule {
};
PsOptionCifReportListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOptionCifReportListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOptionCifReportListComponent"]],
        entryComponents: [_ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOptionCifReportListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsOptionCifReportListComponentModule);



/***/ })

}]);
//# sourceMappingURL=pages-cif-list-report-cif-list-report-module-es2015.js.map