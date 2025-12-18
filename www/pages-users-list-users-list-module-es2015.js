(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-list-users-list-module"],{

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

/***/ "7jT/":
/*!*************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: PsUsersListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsUsersListComponentModule", function() { return PsUsersListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */ "yvgy");
/* harmony import */ var _ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-users-list.component */ "Cuzk");







let PsUsersListComponentModule = class PsUsersListComponentModule {
};
PsUsersListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__["PsUsersListComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_5__["PsSelectLookupOptionListComponentModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]
        ],
        exports: [_ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__["PsUsersListComponent"]],
        entryComponents: [_ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__["PsUsersListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsUsersListComponentModule);



/***/ }),

/***/ "Cuzk":
/*!******************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PsUsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsUsersListComponent", function() { return PsUsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_users_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-users-list.component.html */ "pF22");
/* harmony import */ var _ps_users_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-users-list.component.scss */ "QPBS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/models/ps-commonBusiness.settings */ "fOh1");







let PsUsersListComponent = class PsUsersListComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateListPage"] {
    constructor() {
        super();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
        // tslint:disable-next-line: no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.bRefresh = false;
    }
    ngOnInit() {
        super.init();
        this.populateUsersListMap();
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
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
    prepareLookUp(user) {
        const lookupDetails = {};
        lookupDetails.labelKey = this.options.labelKey;
        lookupDetails.fcName = this.options.fcName;
        lookupDetails.currencyFlag = '';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.translateSubTitle = false;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.actionDetailsOptions = [];
        lookupDetails.reloadFunction = {
            func() {
                return new Promise((resolve, reject) => {
                    resolve(this.executionClass.reloadList());
                });
            },
            executionClass: this,
            params: []
        };
        // if (this.commonProv.getPageByOperId(CommonBussinessConstant.ACTIVATE_END_USERS_REGISTRATION) !== undefined) { // ACTIVATE_END_USERS_REGISTRATION
        if (this.options.allowedActions.activate) {
            if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_SUSPEND) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'activate',
                    labelOptions: {
                        labelKey: 'activate_key'
                    },
                    buttonIcon: 'paper-plane',
                    actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.activateCorporateUserEndpoint,
                    cssClass: 'fab-edit-button',
                    label: 'activate_key',
                    iconName: 'paper-plane',
                    actionType: 'activate',
                    alertType: 'input',
                    fcName: 'reasonDetails',
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].ACTIVATE_END_USERS_REGISTRATION,
                });
            }
        }
        // if (this.commonProv.getPageByOperId(CommonBussinessConstant.SUSPEND_END_USERS_REGISTRATION) !== undefined) { // SUSPEND_END_USERS_REGISTRATION
        if (this.options.allowedActions.suspend) {
            if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_ACTIVE) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'suspend',
                    labelOptions: {
                        labelKey: 'suspend_key'
                    },
                    label: 'suspend_key',
                    buttonIcon: 'information-circle-outline',
                    actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.suspendCorporateUserEndpoint,
                    cssClass: 'fab-edit-button',
                    iconName: 'information-circle-outline',
                    actionType: 'suspend',
                    alertType: 'input',
                    fcName: 'reasonDetails',
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].SUSPEND_END_USERS_REGISTRATION,
                });
            }
        }
        // if (this.commonProv.getPageByOperId(CommonBussinessConstant.DELETE_END_USERS_REGISTRATION) !== undefined) { // DELETE_END_USERS_REGISTRATION
        if (this.options.allowedActions.delete) {
            lookupDetails.actionDetailsOptions.push({
                id: 'delete',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                buttonIcon: 'delete',
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.deleteCorporateUserEndpoint,
                cssClass: 'fab-edit-button',
                label: 'delete_key',
                iconName: 'trash',
                actionType: 'delete',
                alertType: 'input',
                fcName: 'reasonDetails',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].DELETE_END_USERS_REGISTRATION,
            });
        }
        // if (this.commonProv.getPageByOperId(CommonBussinessConstant.EDIT_END_USERS_REGISTRATION) !== undefined) { // EDIT_END_USERS_REGISTRATION
        if (this.options.allowedActions.edit) {
            if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_ACTIVE) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'edit',
                    label: 'edit_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'paper',
                            labelOptions: {
                                labelKey: 'edit_key'
                            }
                        },
                        route: 'register-user',
                        pageOptions: {
                            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EDIT_END_USERS_REGISTRATION,
                            iconName: 'paper',
                            title: 'edit_key',
                        }
                    }
                });
            }
        }
        if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_EXPIRED && this.options.allowedActions.restore) {
            lookupDetails.actionDetailsOptions.push({
                id: 'restore',
                label: 'restore_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'restore-user',
                        labelOptions: {
                            labelKey: 'restore_key'
                        }
                    },
                    route: 'register-user',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].RESTORE_END_USERS_REGISTRATION,
                        iconName: 'register-user',
                        title: 'restore_key'
                    },
                    navigationOptions: {
                        queryParams: { restore: true },
                    },
                }
            });
        }
        lookupDetails.statementOptions = {};
        return lookupDetails;
    }
    reloadList() {
        this.reloadFct.emit();
    }
    populateUsersListMap() {
        let userPhoneMap = {};
        let userNameMap = {};
        let userEmailMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        let alertLangMap = {};
        let allowedAccounts = {};
        let userStatusMap = {};
        let regSourceMap = {};
        let reasonMap = {};
        let userIndividualCifNoMap = {};
        let expiryDateMap = {};
        let includeLoginTimeYN = {};
        let arabicNameMap = {};
        let idTypeMap = {};
        let idNumberMap = {};
        userEmailMap = {
            key: 'email',
            value: '',
            isEdit: false,
        };
        userPhoneMap = {
            key: 'mobileNumber',
            value: '',
            isEdit: false,
        };
        userNameMap = {
            key: 'newUserName',
            value: '',
            isEdit: false
        };
        allowedAccounts = {
            key: 'allowedAccounts',
            value: '',
            isEdit: false
        };
        userStatusMap = {
            key: 'userStatus',
            value: '',
            isEdit: false
        };
        alertLangMap = {
            key: 'alertLanguage',
            value: '',
            isEdit: false
        };
        reasonMap = {
            key: 'reason',
            value: '',
            isEdit: false
        };
        regSourceMap = {
            key: 'onlineRegYN',
            value: '',
            isEdit: false
        };
        headerTitleMap = {
            key: 'title',
            value: 'newName',
            isEdit: false,
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'businessProfileDescription',
            isEdit: false
        };
        userIndividualCifNoMap = {
            key: 'userIndividualCifNo',
            value: 'userIndividualCifNo',
            isEdit: false,
        };
        expiryDateMap = {
            key: 'expiryDateStr',
            value: '--/---/---',
            isDetailOption: true
        };
        includeLoginTimeYN = {
            key: 'includeLoginTimeYNDesc',
            value: 'includeLoginTimeYNDesc',
            showMappingOnNoValue: true,
            isEdit: false,
        };
        arabicNameMap = {
            key: 'arabicName',
            value: '',
            isEdit: false
        };
        idTypeMap = {
            key: 'corporateIdTypeDesc',
            value: '',
            isEdit: false
        };
        idNumberMap = {
            key: 'corporateIdNumber',
            value: '',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('user_name_key', userNameMap);
        this.labelValuesMap.set('email_key', userEmailMap);
        this.labelValuesMap.set('phone_number_key', userPhoneMap);
        this.labelValuesMap.set('individual_cif_noâ€?', userIndividualCifNoMap);
        // this.labelValuesMap.set('status_description_key', statusDescriptionMap);
        this.labelValuesMap.set('reason_key', reasonMap);
        this.labelValuesMap.set('alert_language_key', alertLangMap);
        this.labelValuesMap.set('source_key', regSourceMap);
        this.labelValuesMap.set('accounts_key', allowedAccounts);
        this.labelValuesMap.set('expiry_date_key', expiryDateMap);
        this.labelValuesMap.set('include_in_login_time_frame_key', includeLoginTimeYN);
        this.labelValuesMap.set('arabic_name_key', arabicNameMap);
        this.labelValuesMap.set('id_type_key', idTypeMap);
        this.labelValuesMap.set('id_number_key', idNumberMap);
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
    }
    updateCard(item) {
        this.onClickCard.emit(this.options);
    }
};
PsUsersListComponent.ctorParameters = () => [];
PsUsersListComponent.propDecorators = {
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsUsersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-users-list',
        template: _raw_loader_ps_users_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_ps_users_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsUsersListComponent);



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

/***/ "QPBS":
/*!********************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy11c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "ii6P":
/*!*******************************************************!*\
  !*** ./src/app/pages/users-list/users-list.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListPageModule", function() { return UsersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-list.page */ "lAGo");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_users_list_ps_users_list_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.module */ "7jT/");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_alert_controller_ps_template_alert_controller_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-alert-controller/ps-template-alert-controller.template.module */ "p0NE");









const routes = [
    {
        path: '',
        component: _users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"]
    }
];
let UsersListPageModule = class UsersListPageModule {
};
UsersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_users_list_ps_users_list_component_module__WEBPACK_IMPORTED_MODULE_7__["PsUsersListComponentModule"],
            src_app_commonSRC_psTemplates_ps_template_alert_controller_ps_template_alert_controller_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateAlertControllerModule"]
        ],
        declarations: [_users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"]]
    })
], UsersListPageModule);



/***/ }),

/***/ "pF22":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n   <div *ngIf=\"options?.itemList?.length > 0\">\n      <!-- <ps-container-lookup-option [options]=\"containerLookUpOptions\" (clickedCard)=\"updateCard($event)\" [itemCard]=\"getItem(itemOption)\" ></ps-container-lookup-option> -->\n      <div *ngFor=\"let item of options.itemList\">\n         <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions(item)\" [itemCard]=\"item\"\n            (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n      </div>\n   </div>\n</ps-template-list>");

/***/ })

}]);
//# sourceMappingURL=pages-users-list-users-list-module-es2015.js.map