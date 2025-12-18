(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

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

/***/ "S12b":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-sweeping-and-pooling-list/ps-sweeping-and-pooling-list.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PsSweepingAndPoolingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSweepingAndPoolingListComponent", function() { return PsSweepingAndPoolingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_sweeping_and_pooling_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-sweeping-and-pooling-list.component.html */ "ifN8");
/* harmony import */ var _ps_sweeping_and_pooling_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-sweeping-and-pooling-list.component.scss */ "UDqJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../psServices/models/ps-commonBusiness.settings */ "fOh1");








let PsSweepingAndPoolingListComponent = class PsSweepingAndPoolingListComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateListPage"] {
    constructor() {
        super();
        this.headerMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        super.init();
        if (this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
    }
    getContainerLookUpOptions(val) {
        return this.prepareLookUp(val);
    }
    prepareLookUp(card) {
        let lookupDetails = {};
        lookupDetails.labelsValueMap = this.populateSweepingAndPoolingMap(card);
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.labelKey = this.options.labelKey;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.fcName = this.options.fcName;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.actionDetailsOptions = [];
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.reloadFunction = {
            func() {
                return new Promise((resolve, reject) => {
                    resolve(this.executionClass.reloadList());
                });
            },
            executionClass: this,
            params: []
        };
        if (card.instructionTypeCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INSTRUCTION_TYPE_MIN) {
            lookupDetails.showInitialCardValues = 6;
        }
        else {
            lookupDetails.showInitialCardValues = 5;
        }
        lookupDetails.showInitialCardValues = card.instructionMethodCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INSTRUCTION_METHOD_OFFLINE_CODE ? lookupDetails.showInitialCardValues + 1 : lookupDetails.showInitialCardValues;
        lookupDetails.actionDetailsOptions = [];
        // salah to see the link change the if to true
        if ((card.statusCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_STATE_ACTIVE) || (card.statusCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_STATE_APPROVED) || (card.statusCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_STATE_TO_BE_STOPPED)) {
            lookupDetails.pageData = {
                operID: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].VIEW_STATEMENT_OF_TRANSACTIONS,
                title: 'sweeping_and_pooling_report_key'
            };
            lookupDetails.statementOptions = {
                buttonIcon: 'account-statement',
                redirectUrl: 'sweeping-list'
            };
            lookupDetails.actionDetailsOptions.push({
                id: 'edit',
                label: 'edit_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'edit1',
                        labelOptions: {
                            labelKey: 'edit_key'
                        }
                    },
                    route: 'sweeping-and-pooling',
                    navigationOptions: {
                        queryParams: {
                            readOnlypage: false,
                            instructionType: card.instructionType,
                            instructionMethod: card.instructionMethod,
                            isEditScreen: true
                        },
                    },
                    pageOptions: {
                        operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_LIST_EDIT_OPER_ID,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                },
                cssClass: 'edit-benef local-trasnfer-actions',
            }, {
                id: 'stop',
                buttonIcon: 'square-outline',
                labelOptions: {
                    labelKey: 'stop_key'
                },
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.stopSweepPoolEndPoint,
                cssClass: 'close-sweep fab-edit-button',
                label: 'stop_key',
                iconName: 'square-outline',
                actionType: 'delete',
                alertType: 'prompt',
                alertStyle: 'info',
                alertLabel: 'are_you_sure_you_want_to_stop_this_sweeping_and_pooling_record_key',
                reloadList: true,
                rquestParam: [],
                operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_LIST_STOP_OPER_ID
            });
        }
        // salah to see the link change the if to true
        if (card.statusCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_STATE_STOPPED) {
            lookupDetails.actionDetailsOptions.push({
                id: 'close',
                buttonIcon: 'close',
                labelOptions: {
                    labelKey: 'close_key'
                },
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.closeSweepPoolEndPoint,
                cssClass: 'close-sweep fab-edit-button',
                label: 'close_key',
                iconName: 'close',
                actionType: 'delete',
                alertType: 'prompt',
                alertStyle: 'info',
                alertLabel: 'are_you_sure_you_want_to_delete_this_sweeping_and_pooling_record_key',
                reloadList: true,
                rquestParam: [],
                operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_LIST_CLOSE_OPER_ID
            }, {
                id: 'resume',
                buttonIcon: 'play',
                labelOptions: {
                    labelKey: 'resume_key'
                },
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.resumeSweepPoolEndPoint,
                cssClass: 'close-sweep fab-edit-button',
                label: 'resume_key',
                iconName: 'play',
                actionType: 'submit',
                alertType: 'prompt',
                alertStyle: 'info',
                alertLabel: 'are_you_sure_you_want_to_resume_this_sweeping_and_pooling_record_key',
                reloadList: true,
                rquestParam: [],
                operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SWEEPING_AND_POOLING_LIST_RESUME_OPER_ID
            });
        }
        return lookupDetails;
    }
    reloadList() {
        this.reloadFct.emit();
    }
    populateSweepingAndPoolingMap(card) {
        let labelValuesMap = new Map();
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        // main details
        let instructionMethodMap = {};
        let instructionTypeMap = {};
        let targetAccountMap = {};
        let coveringReceivingAccountMap = {};
        let amountMap = {};
        let periodicityMap = {};
        // additional fields
        let numberOfPaymentsMap = {};
        let scheduledDateMap = {};
        instructionMethodMap = {
            key: 'instructMethod',
            value: '------',
            isEdit: false,
        };
        instructionTypeMap = {
            key: 'instructionType',
            value: '------',
            isEdit: false,
        };
        targetAccountMap = {
            key: 'targetAcc',
            value: '--- --- --- ---',
            isEdit: false,
        };
        coveringReceivingAccountMap = {
            key: 'coveringReceivingAcc',
            value: '--- --- --- ---',
            isEdit: false,
        };
        amountMap = {
            key: 'transactionAmount',
            value: '----',
            isEdit: false,
        };
        periodicityMap = {
            key: 'periodicityDesc',
            value: '----',
            isEdit: false,
        };
        numberOfPaymentsMap = {
            key: 'noOfPayments',
            value: '-',
            isEdit: false,
        };
        scheduledDateMap = {
            key: 'scheduledDates',
            value: '--/--/----',
            isEdit: false,
        };
        headerTitleMap = {
            key: 'title',
            value: 'transactionNumber',
            isEdit: false,
        };
        labelValuesMap.set('instruction_method_key', instructionMethodMap);
        labelValuesMap.set('instruction_type_key', instructionTypeMap);
        labelValuesMap.set('target_account_key', targetAccountMap);
        labelValuesMap.set('convering_receiving_account_key', coveringReceivingAccountMap);
        if (card.instructionTypeCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INSTRUCTION_TYPE_MIN || card.instructionTypeCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INSTRUCTION_TYPE_MAX) {
            labelValuesMap.set('amount_key', amountMap);
        }
        if (card.instructionMethodCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INSTRUCTION_METHOD_OFFLINE_CODE) {
            labelValuesMap.set('periodicity_key', periodicityMap);
            labelValuesMap.set('no_of_payments_key', numberOfPaymentsMap);
        }
        labelValuesMap.set('scheduled_date_key', scheduledDateMap);
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
        return labelValuesMap;
    }
    updateCard(card) {
        if (card && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === card);
            this.options.item = this.options.itemList[0];
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
};
PsSweepingAndPoolingListComponent.ctorParameters = () => [];
PsSweepingAndPoolingListComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsSweepingAndPoolingListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-sweeping-and-pooling-list',
        template: _raw_loader_ps_sweeping_and_pooling_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_sweeping_and_pooling_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsSweepingAndPoolingListComponent);



/***/ }),

/***/ "UDqJ":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-sweeping-and-pooling-list/ps-sweeping-and-pooling-list.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1zd2VlcGluZy1hbmQtcG9vbGluZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ab5c":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/sweeping-and-pooling-list/sweeping-and-pooling-list.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SweepingAndPoolingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweepingAndPoolingListPageModule", function() { return SweepingAndPoolingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sweeping_and_pooling_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sweeping-and-pooling-list.page */ "gsUF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */ "YBCg");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_sweeping_and_pooling_list_ps_sweeping_and_pooling_list_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-sweeping-and-pooling-list/ps-sweeping-and-pooling-list.component.module */ "pac9");









const routes = [
    {
        path: '',
        component: _sweeping_and_pooling_list_page__WEBPACK_IMPORTED_MODULE_2__["SweepingAndPoolingListPage"]
    }
];
let SweepingAndPoolingListPageModule = class SweepingAndPoolingListPageModule {
};
SweepingAndPoolingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateFormModule"],
            src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_6__["PsTemplateViewModule"],
            src_app_commonBussinessSRC_psComponents_ps_sweeping_and_pooling_list_ps_sweeping_and_pooling_list_component_module__WEBPACK_IMPORTED_MODULE_8__["PsSweepingAndPoolingListComponentModule"]
        ],
        declarations: [_sweeping_and_pooling_list_page__WEBPACK_IMPORTED_MODULE_2__["SweepingAndPoolingListPage"]],
    })
], SweepingAndPoolingListPageModule);



/***/ }),

/***/ "ifN8":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-sweeping-and-pooling-list/ps-sweeping-and-pooling-list.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div *ngIf=\"options?.itemList?.length > 0\" class=\"sweeping-and-pooling-list\">\n     <div *ngFor=\"let itemOption of options.itemList\">\n        <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions(itemOption)\"\n           [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n        </ps-container-lookup-option>\n     </div>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "pac9":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-sweeping-and-pooling-list/ps-sweeping-and-pooling-list.component.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PsSweepingAndPoolingListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSweepingAndPoolingListComponentModule", function() { return PsSweepingAndPoolingListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_sweeping_and_pooling_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-sweeping-and-pooling-list.component */ "S12b");






let PsSweepingAndPoolingListComponentModule = class PsSweepingAndPoolingListComponentModule {
};
PsSweepingAndPoolingListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_sweeping_and_pooling_list_component__WEBPACK_IMPORTED_MODULE_5__["PsSweepingAndPoolingListComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]
        ],
        exports: [_ps_sweeping_and_pooling_list_component__WEBPACK_IMPORTED_MODULE_5__["PsSweepingAndPoolingListComponent"]],
        entryComponents: [_ps_sweeping_and_pooling_list_component__WEBPACK_IMPORTED_MODULE_5__["PsSweepingAndPoolingListComponent"]],
    })
], PsSweepingAndPoolingListComponentModule);



/***/ })

}]);
//# sourceMappingURL=103-es2015.js.map