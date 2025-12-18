(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ownership-list-ownership-list-module"],{

/***/ "+Chi":
/*!*********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PsOwnershipListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOwnershipListComponentModule", function() { return PsOwnershipListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-ownership-list.component */ "F/zg");






let PsOwnershipListComponentModule = class PsOwnershipListComponentModule {
};
PsOwnershipListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOwnershipListComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]
        ],
        exports: [_ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOwnershipListComponent"]],
        entryComponents: [_ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOwnershipListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsOwnershipListComponentModule);



/***/ }),

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

/***/ "F/zg":
/*!**************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PsOwnershipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOwnershipListComponent", function() { return PsOwnershipListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_ownership_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-ownership-list.component.html */ "OBBF");
/* harmony import */ var _ps_ownership_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-ownership-list.component.scss */ "Nk4t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/models/ps-commonBusiness.settings */ "fOh1");







/**
 * @author Ahmed.Elfkhrany
 * @since 27/09/2022
 *
 */
let PsOwnershipListComponent = class PsOwnershipListComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"] {
    constructor(cdRef) {
        super();
        this.cdRef = cdRef;
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.showSingleAccount = false;
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.addOwnerOptions = {
            route: 'add-owner',
            labelKey: 'add_owner_key',
            iconOptions: {
                iconName: 'owner',
                labelOptions: {
                    labelKey: 'add_owner_key'
                }
            },
            pageOptions: {
                operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ADD_OWNER_OPER_ID,
                title: 'add_owner_key',
                iconName: 'owners',
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
        lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.isEditable = true;
        lookupDetails.translateSubTitle = this.options.translate;
        lookupDetails.matCardCssSelectors = card.matCardCssSelectors;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.pageData = {
            operID: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].OWNERS_LIST_OPER_ID,
            title: 'owners_list_report_key'
        };
        lookupDetails.actionDetailsOptions = [
            {
                id: 'delete',
                buttonIcon: 'delete',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.deleteOwnerEndPoint,
                cssClass: 'delete-benef fab-edit-button',
                label: 'delete_key',
                iconName: 'trash',
                actionType: 'delete',
                alertType: 'prompt',
                alertStyle: 'warning',
                alertLabel: 'are_you_sure_you_want_to_delete_the_related_owner_key',
                reloadList: true
            },
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
                    route: 'add-owner',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ADD_OWNER_OPER_ID,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                },
                cssClass: 'edit-owner'
            },
        ];
        //Added by Marina TP:#1533524 to be able to reload owners list after delete
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
        let entityTypeMap = {};
        let idTypeMap = {};
        let idNumberMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        let designationMap = {};
        let ownershipPercentageMap = {};
        let statusMap = {};
        entityTypeMap = {
            key: 'entityTypeDescriptionConcat',
            value: '',
        };
        idTypeMap = {
            key: 'idTypeDescriptionConcat',
            value: ''
        };
        idNumberMap = {
            key: 'idNumber',
            value: ''
        };
        designationMap = {
            key: 'designationDescriptionConcat',
            value: ''
        };
        ownershipPercentageMap = {
            key: 'ownershipPercentage',
            value: ''
        };
        statusMap = {
            key: 'statusDesc',
            value: ''
        };
        headerTitleMap = {
            key: 'title',
            value: 'title',
            isEdit: false,
        };
        // headerSubtitleMap = {
        //   key: 'subTitle',
        //   value: 'cifNumber',
        //   isEdit: false,
        // };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('entity_type_key', entityTypeMap);
        // this.labelValuesMap.set('currency_key', designationMap);
        this.labelValuesMap.set('id_type_key', idTypeMap);
        this.labelValuesMap.set('id_number_key', idNumberMap);
        this.labelValuesMap.set('designation_key', designationMap);
        this.labelValuesMap.set('ownershipPercentage', ownershipPercentageMap);
        this.labelValuesMap.set('status', statusMap);
        this.headerMap.set('title', headerTitleMap);
        // this.headerMap.set('subTitle', headerSubtitleMap);
    }
    updateCard(card) {
        if (card && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === card);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
        }
        this.onClickCard.emit(this.options);
    }
    ngAfterViewChecked() {
        this.cdRef.markForCheck();
    }
};
PsOwnershipListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PsOwnershipListComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsOwnershipListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-ownership-list',
        template: _raw_loader_ps_ownership_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_ownership_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PsOwnershipListComponent);



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

/***/ "Nk4t":
/*!****************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1vd25lcnNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "OBBF":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div>\n    <ps-action-hyperlink [options]=\"addOwnerOptions\" class=\"add-owner-button\">\n    </ps-action-hyperlink>\n  </div>\n  <div class=\"ps-options-owner\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\"\n        [options]=\"getContainerLookUpOptions(itemOption)\" [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

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

/***/ "hlCU":
/*!***************************************************************!*\
  !*** ./src/app/pages/ownership-list/ownership-list.module.ts ***!
  \***************************************************************/
/*! exports provided: OwnershipListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnershipListPageModule", function() { return OwnershipListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_ownership_list_ps_ownership_list_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.module */ "+Chi");
/* harmony import */ var _ownership_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ownership-list.page */ "GpOE");








const routes = [
    {
        path: '',
        component: _ownership_list_page__WEBPACK_IMPORTED_MODULE_7__["OwnershipListPage"]
    }
];
let OwnershipListPageModule = class OwnershipListPageModule {
};
OwnershipListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _commonBussinessSRC_psComponents_ps_ownership_list_ps_ownership_list_component_module__WEBPACK_IMPORTED_MODULE_6__["PsOwnershipListComponentModule"]
        ],
        declarations: [_ownership_list_page__WEBPACK_IMPORTED_MODULE_7__["OwnershipListPage"]]
    })
], OwnershipListPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-ownership-list-ownership-list-module-es2015.js.map