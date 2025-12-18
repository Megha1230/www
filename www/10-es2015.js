(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "Sx1r":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsComplexWidgetDropdownsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexWidgetDropdownsComponent", function() { return PsComplexWidgetDropdownsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_widget_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-widget-dropdowns.component.html */ "qxlB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








let PsComplexWidgetDropdownsComponent = class PsComplexWidgetDropdownsComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP, modalController) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.modalController = modalController;
        this.onSecondValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.numberOfDropdowns = 0;
        this.currentDropdownPosition = 0;
        this.selectedItemsList = [];
        this.selectReportsError = false;
        this.selectionErrorMessage = "no_selected_reports_key";
        this.headerLabelOptions = {};
        this.backIconOptions = {
            iconName: 'arrow-back'
        };
        this.backClicked = false;
        this.showIcon = false;
        this.isPreviouslySelected = false; // AZDB-7715 - AMANAOI250051 - 201633 - The system is displaying wrong billers - Dev: Muzammil Arif
    }
    ngOnInit() {
        if (this.options.dropdowns && this.options.dropdowns.length > 0) {
            this.numberOfDropdowns = this.options.dropdowns.length;
            this.options.dropdowns[0].renderDropdown = true;
            this.currentDropdownPosition = 1;
            this.headerLabelOptions.labelKey = this.options.dropdowns[0].labelKey;
        }
    }
    onItemSelected(data) {
        /* The cases that will go through the IF condition :
         * Opening a draft screen
         * Navigating to next widget level where its list of options are filled from the business screen (Not Async call).
        */
        if (this.options.requestObject &&
            this.options.requestObject[this.options.dropdowns[this.currentDropdownPosition - 1].fcName] &&
            data.itemValue === this.options.requestObject[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].itemValue
            && this.options.dropdowns[this.currentDropdownPosition] && this.options.dropdowns[this.currentDropdownPosition].listOfOptions && this.options.dropdowns[this.currentDropdownPosition].listOfOptions.length > 0) {
            if (this.options.dropdowns.length > this.currentDropdownPosition) {
                this.options.dropdowns[this.currentDropdownPosition - 1].psClass = 'hide-dropdown';
                this.options.dropdowns[this.currentDropdownPosition].psClass = 'show-dropdown';
                this.currentDropdownPosition++;
                this.showIcon = true;
            }
        }
        else {
            if (this.options.dropdowns.length > 1 || (this.options.dropdowns.length == 1 && this.options.dropdowns[0].asyncURL)) {
                // AZDB-7715 - AMANAOI250051 - 201633 - The system is displaying wrong billers - Dev: Muzammil Arif
                this.isPreviouslySelected = this.options.requestObject[this.options.dropdowns[this.currentDropdownPosition - 1].fcName] && this.options.requestObject[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].HEADER_LABEL] ? true : false;
                this.commonProv.setValInsideNestedObj(this.options.dropdowns[this.currentDropdownPosition - 1].fcName, data, this.options.requestObject);
                if (this.options.dropdowns.length > this.currentDropdownPosition) {
                    if (this.backClicked) {
                        this.commonProv.setValInsideNestedObj(this.options.dropdowns[this.currentDropdownPosition].fcName, null, this.options.requestObject);
                        this.options.dropdowns[this.currentDropdownPosition].renderDropdown = false;
                        this.options.dropdowns[this.currentDropdownPosition] = {
                            group: this.options.dropdowns[this.currentDropdownPosition].group,
                            fcName: this.options.dropdowns[this.currentDropdownPosition].fcName,
                            labelKey: this.options.dropdowns[this.currentDropdownPosition].labelKey,
                            asyncURL: this.options.dropdowns[this.currentDropdownPosition].asyncURL,
                            mapResponseProperties: this.options.dropdowns[this.currentDropdownPosition].mapResponseProperties,
                            enablePagination: this.options.dropdowns[this.currentDropdownPosition].enablePagination,
                            listOfOptions: [],
                            componentInstance: this.options.dropdowns[this.currentDropdownPosition].componentInstance
                        };
                        this.headerLabelOptions.labelKey = this.options.dropdowns[this.currentDropdownPosition - 1].labelKey;
                    }
                    // If we define request parameters in the options of the next widget list, then we append the clicked widget data to them
                    if (this.options.dropdowns[this.currentDropdownPosition].serviceRequestObj) {
                        this.options.dropdowns[this.currentDropdownPosition].serviceRequestObj.commonParametersList = data.selectedObj;
                    }
                    else {
                        this.options.dropdowns[this.currentDropdownPosition].serviceRequestObj = { 'commonParametersList': data.selectedObj };
                    }
                    this.options.dropdowns[this.currentDropdownPosition].renderDropdown = true;
                    this.options.dropdowns[this.currentDropdownPosition - 1].psClass = 'hide-dropdown';
                    if (this.headerLabelOptions.labelKey.indexOf('-') !== -1) {
                        this.headerLabelOptions.labelKey = this.headerLabelOptions.labelKey.slice(0, this.headerLabelOptions.labelKey.lastIndexOf('-') + 1);
                        this.headerLabelOptions.labelKey.replace(this.commonProv.translate(this.options.dropdowns[this.currentDropdownPosition - 1].fcName), data.description);
                        if (this.headerLabelOptions.labelKey.endsWith('-')) {
                            this.headerLabelOptions.labelKey = this.headerLabelOptions.labelKey.slice(0, -1); //Jira #7587 - Double checking if there is a dash after replacement
                        }
                        this.headerLabelOptions.labelKey += ' - ' + this.options.dropdowns[this.currentDropdownPosition].fcName;
                    }
                    else {
                        this.headerLabelOptions.labelKey = data.description;
                        this.headerLabelOptions.labelKey += ' - ' + this.options.dropdowns[this.currentDropdownPosition].fcName;
                    }
                    this.showIcon = true;
                    this.currentDropdownPosition++;
                    this.options.group.controls[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].reset();
                    this.options.dropdowns[this.currentDropdownPosition - 1].componentInstance.callService();
                }
                else if (this.options.dropdowns.length === this.currentDropdownPosition) {
                    // AZDB-7715 - AMANAOI250051 - 201633 - The system is displaying wrong billers - Dev: Muzammil Arif
                    this.headerLabelOptions.labelKey = this.isPreviouslySelected ? this.headerLabelOptions.labelKey.slice(0, this.headerLabelOptions.labelKey.indexOf('-') + 1) : this.headerLabelOptions.labelKey.slice(0, this.headerLabelOptions.labelKey.lastIndexOf('-') + 1);
                    this.headerLabelOptions.labelKey += data.description;
                    this.options.requestObject[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].HEADER_LABEL] = this.headerLabelOptions.labelKey;
                    this.common.presentLoading();
                    setTimeout(() => {
                        this.onSecondValueChange.emit(this.options.requestObject);
                        this.common.dismissLoading();
                    }, 500);
                    this.showDescriptionModal(data);
                }
            }
            else if (this.options.dropdowns.length == 1 && !this.options.dropdowns[0].asyncURL) {
                let exist = false;
                this.selectReportsError = false;
                const widgetFcname = this.options.dropdowns[0].fcName;
                this.selectedItemsList.forEach((value, index) => {
                    if (value.itemValue == data.itemValue) {
                        exist = true;
                        value.selected = false;
                        this.selectedItemsList.splice(index, 1);
                    }
                });
                if (!exist) {
                    this.selectedItemsList.push(data);
                }
                if (this.selectedItemsList.length == 0) {
                    this.selectReportsError = true;
                    this.options.group.controls[widgetFcname].setValue([]);
                    this.options.group.get(widgetFcname).setValue([]);
                }
                this.selectedItemsList.forEach(element => {
                    element.selected = true;
                });
                this.options.group.controls[widgetFcname].setValue(this.selectedItemsList);
                this.options.group.get(widgetFcname).setValue(this.selectedItemsList);
                this.commonProv.setValInsideNestedObj(this.options.dropdowns[0].fcName, this.selectedItemsList, this.options.requestObject);
            }
        }
    }
    showDescriptionModal(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.options.detailsObject) {
                const modalId = this.options.detailsObject.detailsModalId;
                const detailsModal = yield this.modalController.create({
                    component: this.options.detailsObject.detailsModal,
                    componentProps: { data: Object.assign({}, data.selectedObj), actions: this.options.detailsObject.detailsActionsList },
                    cssClass: this.options.detailsObject.detailsModalClass,
                    animated: false,
                    id: modalId
                });
                yield detailsModal.present();
            }
        });
    }
    onBackIconClicked() {
        this.backClicked = true;
        const inValid = this.options.group.controls[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].invalid;
        if (inValid) {
            this.options.group.controls[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].reset();
        }
        this.options.dropdowns[this.currentDropdownPosition - 1].psClass = 'hide-dropdown';
        this.options.dropdowns[this.currentDropdownPosition - 2].psClass = 'show-dropdown';
        this.currentDropdownPosition--;
        if (this.currentDropdownPosition === 1) {
            this.showIcon = false;
        }
    }
    resetSelections() {
        const widgetFcname = this.options.dropdowns[0].fcName;
        this.selectedItemsList.forEach(element => {
            element.selected = false;
        });
        this.selectedItemsList = [];
        this.options.group.controls[widgetFcname].setValue([]);
        this.options.group.get(widgetFcname).setValue(this.selectedItemsList);
        this.commonProv.setValInsideNestedObj(this.options.dropdowns[0].fcName, this.selectedItemsList, this.options.requestObject);
        this.selectReportsError = true;
    }
};
PsComplexWidgetDropdownsComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
PsComplexWidgetDropdownsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onSecondValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
PsComplexWidgetDropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-widget-dropdowns',
        template: _raw_loader_ps_complex_widget_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], PsComplexWidgetDropdownsComponent);



/***/ }),

/***/ "qxlB":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-widget-dropdowns\">\r\n    <ng-container *ngIf=\"options?.dropdowns.length > 0\">\r\n        <div class=\"ps-complex-widget-dropdowns_header\">\r\n            <div class=\"ps-complex-widget-dropdowns_header-back\" *ngIf=\"showIcon\">\r\n                <ps-action-icon [options]=\"backIconOptions\" (onClick)=\"onBackIconClicked()\"></ps-action-icon>\r\n            </div>\r\n            <div class=\"ps-complex-widget-dropdowns_header-label\">\r\n                <ps-label [options]=\"headerLabelOptions\"></ps-label>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngFor=\"let dropdownOptions of options.dropdowns; let i = index\">\r\n            <ps-select-dropdown-widget (onPsChange)=\"onItemSelected($event)\" [options]=\"dropdownOptions\"\r\n                [ngClass]=\"[dropdownOptions && dropdownOptions.psClass?dropdownOptions.psClass:'','level-'+i]\">\r\n            </ps-select-dropdown-widget>\r\n        </ng-container>\r\n    </ng-container>\r\n    <p *ngIf=\"selectReportsError\" class=\"select-documents-validation-message\">{{selectionErrorMessage | translate}}</p>\r\n</ps-container-complex>");

/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map