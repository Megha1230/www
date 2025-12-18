(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chequebook-list-chequebook-list-module"],{

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

/***/ "BHoC":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"ps-options-chequebook\" *ngIf=\"chequebooksListOptions.itemList && chequebooksListOptions.itemList.length > 0\">\r\n    <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\" [options]=\"chequebooksListOptions\"\r\n        [itemCard]=\"options.chequebookInformation\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\r\n</div> -->\r\n\r\n<div *ngIf=\"options?.itemList?.length > 0\">\r\n    <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\" [options]=\"containerLookUpOptions\"\r\n        (clickedCard)=\"updateCard($event)\" [itemCard]=\"item\" *ngFor=\"let item of options.itemList\">\r\n    </ps-container-lookup-option>\r\n</div>");

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

/***/ "Ft9U":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsOptionChequebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOptionChequebookComponent", function() { return PsOptionChequebookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_option_chequebook_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-option-chequebook.component.html */ "BHoC");
/* harmony import */ var _ps_option_chequebook_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-option-chequebook.component.scss */ "vN5Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../psServices/models/ps-common-bussiness-constant */ "V0Fi");







let PsOptionChequebookComponent = class PsOptionChequebookComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, cdRef) {
        super(commonProv, commonProv.logger);
        this.cdRef = cdRef;
        this.containerLookUpOptions = {};
        this.termsLabelValuesMap = new Map();
        this.termsHeaderMap = new Map();
        this.showSingleAccount = false;
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.populateHeaderValueMap();
    }
    ngOnInit() {
        super.init();
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        this.containerLookUpOptions.currencyFlag = 'currencyDesc';
        this.containerLookUpOptions.labelsValueMap = this.termsLabelValuesMap;
        this.containerLookUpOptions.headerMap = this.termsHeaderMap;
        this.containerLookUpOptions.formGroup = this.options.group;
        this.containerLookUpOptions.balanceMapping = this.balanceMapping();
        this.containerLookUpOptions.isEditable = this.options.isEditable;
        // this.containerLookUpOptions.editActionUrl = 'rest/omniCommonPush/personalizeNickname';
        this.containerLookUpOptions.pageData = {
            operID: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CHEQUEBOOK_REPORT_OPER,
            title: 'chequebook_report_key'
        };
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
        // this.containerLookUpOptions.actionDetailsOptions = [
        //     {
        //         buttonIcon: 'delete',
        //         actionUrl: 'rest/omniCommonPush/beneficiaries',
        //         cssClass: 'fab-edit-button',
        //       label: 'delete_beneficiary_key',
        //       iconName: 'trash'
        //     }
        // ];
        /* this.chequebooksListOptions = {
            bottomPadding: true,
            labelsValueMap: this.termsLabelValuesMap,
            headerMap: this.termsHeaderMap,
            showTemplateCard: false,
            statementOptions: {
                buttonIcon: 'list-box',
                redirectUrl: 'chequebook-report'
            },
            isEditable: true,
            actionDetailsOptions: [
                {
                  buttonIcon: 'delete',
                  actionUrl: 'rest/commonPush/deleteAccount',
                  cssClass: 'fab-edit-button',
                  label: 'delete_key'
                },
                {
                buttonIcon: 'insert_chart_outlined',
                cssClass: 'fab-statement-button',
                redirectUrl: 'chequebook-report',
                label: 'chequebook_report_key'
                }
            ]
        };
        this.chequebooksListOptions.itemList = [this.options.chequebookInformation]; */
        this.containerLookUpOptions.statementOptions = {
            buttonIcon: 'list-box',
            redirectUrl: 'chequebook-statement-report'
        };
        if (this.options && (this.options.itemList === null || this.options.itemList === undefined)) {
            this.options.itemList = this.options.listOfOptions;
            this.showSingleAccount = false;
        }
        else if (this.options && this.options.itemList && this.options.itemList.length === 1 && this.showSingleAccount === false) {
            this.options.itemList = this.options.listOfOptions;
        }
        else if (this.options && this.options.showItemPopUp === undefined) {
            this.options.itemList = this.options.listOfOptions;
        }
        this.containerLookUpOptions.itemList = this.options.itemList;
        this.containerLookUpOptions.formGroup = this.options.group;
    }
    /* ngAfterViewChecked() {
        this.cdRef.detectChanges();

    } */
    updateCard(account) {
        if (account && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === account);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
    populateHeaderValueMap() {
        let accountNumberMap = {};
        let chequeBookNoMap = {};
        let fromNumberMap = {};
        let toNumberMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        accountNumberMap = {
            key: 'formattedAccount',
            value: ''
        };
        chequeBookNoMap = {
            key: 'chequebookCode',
            value: '1'
        };
        fromNumberMap = {
            key: 'fromNumber',
            value: '0'
        };
        toNumberMap = {
            key: 'toNumber',
            value: '10'
        };
        headerTitleMap = {
            key: 'title',
            value: 'chequeTypeName',
            isEdit: false,
            formGroupMap: {
                placeHolder: 'cheque_type_name_key',
                fcName: 'chequeTypeName',
            }
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'formattedAccount',
            isEdit: false,
        };
        this.termsLabelValuesMap.set('chequebook_no_key', chequeBookNoMap);
        this.termsLabelValuesMap.set('from_key', fromNumberMap);
        this.termsLabelValuesMap.set('to_key', toNumberMap);
        this.termsHeaderMap.set('title', headerTitleMap);
        this.termsHeaderMap.set('subTitle', headerSubtitleMap);
        // this.termsHeaderMap.set('account_number_key', accountNumberMap);
    }
    balanceMapping() {
        const balanceMappingList = [
        /* {
            key: 'current_balance_key',
            value: 'currentBalance'
        },
        {
            key: 'available_balance_key',
            value: 'availableBalance'
        },
        {
            key: 'currency_iso_key',
            value: 'currencyDesc'
        } */
        ];
        return balanceMappingList;
    }
};
PsOptionChequebookComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PsOptionChequebookComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsOptionChequebookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-option-chequebook',
        template: _raw_loader_ps_option_chequebook_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_option_chequebook_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PsOptionChequebookComponent);



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

/***/ "uWnS":
/*!*****************************************************************!*\
  !*** ./src/app/pages/chequebook-list/chequebook-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChequebookListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequebookListPageModule", function() { return ChequebookListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component.module */ "YqnD");
/* harmony import */ var _chequebook_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chequebook-list.page */ "7ivm");








const routes = [
    {
        path: '',
        component: _chequebook_list_page__WEBPACK_IMPORTED_MODULE_7__["ChequebookListPage"]
    }
];
let ChequebookListPageModule = class ChequebookListPageModule {
};
ChequebookListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component_module__WEBPACK_IMPORTED_MODULE_6__["PsOptionChequebookComponentModule"]
        ],
        declarations: [_chequebook_list_page__WEBPACK_IMPORTED_MODULE_7__["ChequebookListPage"]]
    })
], ChequebookListPageModule);



/***/ }),

/***/ "vN5Q":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1vcHRpb24tY2hlcXVlYm9vay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-chequebook-list-chequebook-list-module-es2015.js.map