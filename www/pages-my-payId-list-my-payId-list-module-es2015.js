(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-payId-list-my-payId-list-module"],{

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

/***/ "9D5V":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-my-payId/ps-my-payId.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div>\n    <ps-action-hyperlink [options]=\"addPayIdOptions\" class=\"add-owner-button\">\n    </ps-action-hyperlink>\n  </div>\n  <div class=\"ps-options-owner\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\"\n        [options]=\"getContainerLookUpOptions(itemOption)\" [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

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

/***/ "JBYc":
/*!****************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-my-payId/ps-my-payId.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1teS1wYXlJZC5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "T067":
/*!*********************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-my-payId/ps-my-payId.component.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: PsMyPayIdComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsMyPayIdComponentModule", function() { return PsMyPayIdComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_my_payId_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-my-payId.component */ "Z+yR");






let PsMyPayIdComponentModule = class PsMyPayIdComponentModule {
};
PsMyPayIdComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_my_payId_component__WEBPACK_IMPORTED_MODULE_5__["PsMyPayIdComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]
        ],
        exports: [_ps_my_payId_component__WEBPACK_IMPORTED_MODULE_5__["PsMyPayIdComponent"]],
        entryComponents: [_ps_my_payId_component__WEBPACK_IMPORTED_MODULE_5__["PsMyPayIdComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsMyPayIdComponentModule);



/***/ }),

/***/ "Z+yR":
/*!**************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-my-payId/ps-my-payId.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PsMyPayIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsMyPayIdComponent", function() { return PsMyPayIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_my_payId_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-my-payId.component.html */ "9D5V");
/* harmony import */ var _ps_my_payId_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-my-payId.component.scss */ "JBYc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/models/ps-commonBusiness.settings */ "fOh1");







let PsMyPayIdComponent = class PsMyPayIdComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"] {
    constructor() {
        super(...arguments);
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.showSingleItem = false;
        this.cardLabelOptions = {
            labelKey: 'no_pay_id_available'
        };
        this.addPayIdOptions = {
            route: 'add-payId',
            labelKey: 'add_pay_id_key',
            iconOptions: {
                iconName: 'pay-id',
                labelOptions: {
                    labelKey: 'add_Pay_id_key'
                }
            },
            pageOptions: {
                operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ADD_payId,
                title: 'add_pay_id_key',
                iconName: 'pay_id',
            }
        };
    }
    ngOnInit() {
        super.init();
        this.populateHeaderValueMap();
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
    prepareLookUp(card) {
        const lookupDetails = {};
        lookupDetails.currencyFlag = 'currencyDesc';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.translateSubTitle = this.options.translate;
        lookupDetails.matCardCssSelectors = card.matCardCssSelectors;
        lookupDetails.editActionUrl = _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        lookupDetails.actionDetailsOptions = [
            {
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
                    route: 'add-payId',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ADD_payId,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                },
                cssClass: 'edit-payId'
            },
            ((card.statusCode != _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ACCOUNTS_STATE_ACTIVE) ?
                {
                    id: 'link',
                    buttonIcon: 'arrow-circle-right',
                    actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.linkAccount,
                    cssClass: 'fab-edit-button',
                    labelOptions: {
                        labelKey: 'link_key'
                    },
                    label: 'link_key',
                    iconName: 'arrow-circle-right',
                    actionType: 'link',
                    alertType: 'prompt',
                    alertStyle: 'warning',
                    reloadList: true
                } : {}),
            ((card.statusCode == _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ACCOUNTS_STATE_ACTIVE) ?
                {
                    id: 'delink',
                    label: 'delink_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'arrow-circle-right',
                            labelOptions: {
                                labelKey: 'delink_key'
                            }
                        },
                        route: 'delink-payId',
                        pageOptions: {
                            operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].LINK_OR_DELINK_OPER_ID,
                            iconName: 'arrow-circle-right',
                            title: 'delink_pay_id_key',
                        },
                        navigationOptions: {
                            queryParams: { action: "delink" },
                        },
                    }
                } : {}),
            {
                id: 'transfer_money',
                label: 'transfer_money_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'arrow-circle-right',
                        labelOptions: {
                            labelKey: 'transfer_money_key'
                        }
                    },
                    route: 'payId-transfer',
                    pageOptions: {
                        operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PAYID_TRANSFER_OPER_ID,
                        iconName: 'arrow-circle-right',
                        title: 'transfer_money_key',
                    },
                    preCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[3].actionHyperlink));
                            });
                        },
                        executionClass: this,
                        params: []
                    },
                }
            },
        ];
        lookupDetails.reloadFunction = {
            func() {
                return new Promise((resolve, reject) => {
                    resolve(this.executionClass.reloadList());
                });
            },
            executionClass: this,
            params: []
        };
        return lookupDetails;
    }
    reloadList() {
        this.reloadFct.emit();
    }
    populateHeaderValueMap() {
        let nickNameMap = {};
        let availableBalanceMap = {};
        let linkedAccountMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        let payIdTypeMap = {};
        let mobileNumberMap = {};
        let emailMap = {};
        let phoneNumberMap = {};
        nickNameMap = {
            key: "nickName",
            value: '----',
            formGroupMap: {
                placeHolder: 'enter_card_type',
                fcName: 'nickName',
            }
        };
        availableBalanceMap = {
            key: 'availableBalance',
            value: ''
        };
        linkedAccountMap = {
            key: 'linkedAccount',
            value: ''
        };
        payIdTypeMap = {
            key: 'payIdTypeDescriptionConcat',
            value: ''
        };
        mobileNumberMap = {
            key: 'mobileNumber',
            value: ''
        };
        emailMap = {
            key: 'email',
            value: ''
        };
        phoneNumberMap = {
            key: 'phoneNumber',
            value: ''
        };
        headerTitleMap = {
            key: 'title',
            value: 'nickName',
            isEdit: true,
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('nickName_key', nickNameMap);
        this.labelValuesMap.set('available_balance_key', availableBalanceMap);
        this.labelValuesMap.set('linked_account_key', linkedAccountMap);
        this.labelValuesMap.set('payid_type_key', payIdTypeMap);
        this.labelValuesMap.set('mobile_number_key', mobileNumberMap);
        this.labelValuesMap.set('email_key', emailMap);
        this.labelValuesMap.set('phone_key', phoneNumberMap);
        // will be used as header to template card in look up details component
        // this.headerMap.set('title', headerTitleMap,);
        this.editRequestMap.set('newNickName', 'nickName');
        this.editRequestMap.set('type', 'A');
        ;
    }
    updateCard(item) {
        if (item && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(payId => payId === item);
            this.options.item = this.options.itemList[0];
            this.showSingleItem = !this.showSingleItem;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
    prepareTransaction(actionCard) {
        actionCard.navigationOptions.queryParams.ScreenVO = Object.assign(Object.assign({}, actionCard.navigationOptions.queryParams.ScreenVO), { fromPayId: actionCard.navigationOptions.queryParams.nickName, fromPayId_lookupKey: actionCard.navigationOptions.queryParams.nickName });
    }
};
PsMyPayIdComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsMyPayIdComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-my-payId',
        template: _raw_loader_ps_my_payId_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_my_payId_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PsMyPayIdComponent);



/***/ }),

/***/ "a/3I":
/*!*************************************************************!*\
  !*** ./src/app/pages/my-payId-list/my-payId-list.module.ts ***!
  \*************************************************************/
/*! exports provided: MyPayIdListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPayIdListPageModule", function() { return MyPayIdListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_my_payId_ps_my_payId_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-my-payId/ps-my-payId.component.module */ "T067");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _my_payId_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-payId-list.page */ "4oRk");








const routes = [
    {
        path: '',
        component: _my_payId_list_page__WEBPACK_IMPORTED_MODULE_7__["MyPayIdListPage"]
    }
];
let MyPayIdListPageModule = class MyPayIdListPageModule {
};
MyPayIdListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateViewModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_my_payId_ps_my_payId_component_module__WEBPACK_IMPORTED_MODULE_3__["PsMyPayIdComponentModule"]
        ],
        declarations: [_my_payId_list_page__WEBPACK_IMPORTED_MODULE_7__["MyPayIdListPage"]]
    })
], MyPayIdListPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-my-payId-list-my-payId-list-module-es2015.js.map