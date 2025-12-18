(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authorized-signatory-authorized-signatory-module"],{

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

/***/ "7xTI":
/*!***************************************************************************!*\
  !*** ./src/app/pages/authorized-signatory/authorized-signatory.module.ts ***!
  \***************************************************************************/
/*! exports provided: AuthorizedSignatoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedSignatoryPageModule", function() { return AuthorizedSignatoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_signatory_card_ps_signatory_card_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-signatory-card/ps-signatory-card.component.module */ "MuUt");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var _authorized_signatory_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authorized-signatory.page */ "bj35");








const routes = [
    {
        path: '',
        component: _authorized_signatory_page__WEBPACK_IMPORTED_MODULE_7__["AuthorizedSignatoryPage"]
    }
];
let AuthorizedSignatoryPageModule = class AuthorizedSignatoryPageModule {
};
AuthorizedSignatoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_6__["PsTemplateViewModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__["PsComponentsModule"],
            _commonBussinessSRC_psComponents_ps_signatory_card_ps_signatory_card_component_module__WEBPACK_IMPORTED_MODULE_4__["PsSignatoryCardComponentModule"]
        ],
        declarations: [_authorized_signatory_page__WEBPACK_IMPORTED_MODULE_7__["AuthorizedSignatoryPage"]]
    })
], AuthorizedSignatoryPageModule);



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

/***/ "JRp3":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-signatory-card/ps-signatory-card.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div class=\"ps-signatory-card\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_'\" [options]=\"getContainerLookUpOptions(itemOption)\"\n        [itemCard]=\"itemOption\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n  <div class=\"no-account-text\" *ngIf=\"!options || !options.itemList || options.itemList.length === 0\">\n    <ps-label [options]=\"signatoryLabelOptions\"></ps-label>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "MuUt":
/*!*********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-signatory-card/ps-signatory-card.component.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PsSignatoryCardComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSignatoryCardComponentModule", function() { return PsSignatoryCardComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */ "os9x");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_signatory_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-signatory-card.component */ "N4Ji");






let PsSignatoryCardComponentModule = class PsSignatoryCardComponentModule {
};
PsSignatoryCardComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_signatory_card_component__WEBPACK_IMPORTED_MODULE_5__["PsSignatoryCardComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]
        ],
        exports: [_ps_signatory_card_component__WEBPACK_IMPORTED_MODULE_5__["PsSignatoryCardComponent"]],
        entryComponents: [_ps_signatory_card_component__WEBPACK_IMPORTED_MODULE_5__["PsSignatoryCardComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsSignatoryCardComponentModule);



/***/ }),

/***/ "N4Ji":
/*!**************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-signatory-card/ps-signatory-card.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PsSignatoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSignatoryCardComponent", function() { return PsSignatoryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_signatory_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-signatory-card.component.html */ "JRp3");
/* harmony import */ var _ps_signatory_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-signatory-card.component.scss */ "gmaK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../psServices/models/ps-common-bussiness-constant */ "V0Fi");







let PsSignatoryCardComponent = class PsSignatoryCardComponent extends _commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateListPage"] {
    constructor(logger, cdRef) {
        super();
        this.logger = logger;
        this.cdRef = cdRef;
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.signatoryLabelOptions = {
            labelKey: 'signatory_list_not_available'
        };
    }
    ngOnInit() {
        super.init();
        this.populateHeaderValueMap(this.options.signatoryType);
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
        if (this.options && this.options.noSignatoriesLabel) {
            this.signatoryLabelOptions.labelKey = this.options.noSignatoriesLabel;
        }
    }
    getContainerLookUpOptions(val) {
        return this.prepareLookUp(val);
    }
    prepareLookUp(signatoryCard) {
        const lookupDetails = {};
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.showInitialCardValues = 4;
        return lookupDetails;
    }
    populateHeaderValueMap(signatoryType) {
        let cifNameMap = {};
        let cifNumberMap = {};
        let idNumberMap = {};
        let idTypeMap = {};
        let nationalityMap = {};
        let addressMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        cifNameMap = {
            key: 'cifName',
            value: '',
            formGroupMap: {
                fcName: 'cifName',
            }
        };
        cifNumberMap = {
            key: 'cifNumber',
            value: '',
            formGroupMap: {
                fcName: 'cifNumber',
            }
        };
        idNumberMap = {
            key: 'idNumber',
            value: '',
            formGroupMap: {
                fcName: 'idNumber',
            }
        };
        idTypeMap = {
            key: 'idType',
            value: '',
            formGroupMap: {
                fcName: 'idType',
            }
        };
        nationalityMap = {
            key: 'nationality',
            value: ''
        };
        addressMap = {
            key: 'address',
            value: ''
        };
        headerTitleMap = {
            key: 'cifName',
            value: 'cifName',
            isEdit: false,
            formGroupMap: {
                fcName: 'cifName',
            }
        };
        headerSubtitleMap = {
            key: 'cifNumber',
            value: 'cifNumber',
            isEdit: true,
            formGroupMap: {
                fcName: 'cifNumber',
            }
        };
        // key here will be used as label in look up details component
        // this.labelValuesMap.set('cif_name_key', cifNameMap);
        // this.labelValuesMap.set('cif_number_key', cifNumberMap);
        if (signatoryType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZED) {
            this.labelValuesMap.set('id_number_key', idNumberMap);
            this.labelValuesMap.set('id_type_key', idTypeMap);
            this.labelValuesMap.set('nationality_key', nationalityMap);
            this.labelValuesMap.set('address_key', addressMap);
        }
        // will be used as header to template card in look up details component
        this.headerMap.set('cifName', headerTitleMap);
        this.headerMap.set('cifNumber', headerSubtitleMap);
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngAfterViewChecked() {
        this.cdRef.markForCheck();
    }
};
PsSignatoryCardComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PsSignatoryCardComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsSignatoryCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-signatory-card',
        template: _raw_loader_ps_signatory_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_signatory_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PsSignatoryCardComponent);



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

/***/ "gmaK":
/*!****************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-signatory-card/ps-signatory-card.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1zaWduYXRvcnktY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-authorized-signatory-authorized-signatory-module-es2015.js.map