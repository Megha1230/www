(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "FMKc":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ps-keyin-input-label-cust\" *ngIf=\"custMode\">\n  <ps-icon-customization [options]=\"custIconOptions\"></ps-icon-customization>\n</div>\n<ps-container-complex class=\"ps-complex-lookup\" [id]=\"id\" *ngIf=\"showDropdownIcon || custMode\">\n  <div class=\"select-card-dropDown\">\n    <div [ngClass]=\"{'label' : selectLookUpOptions?.itemList?.length >= 0, 'labelSelected': selectLookUpOptions?.itemList?.length === 1,\n                  'disableContent' : disableLookup}\">\n      <div class=\"select-lookup-input-wrapper\" (click)=\"presentLoader()\"\n        [ngClass]=\"{'is-expanded':toggleCardList,'item-was-selected':previewList.length>0}\">\n        <ps-keyin-input [ngClass]=\"{'no-value-selected' : !hidePlaceholder() , 'value-selected': hidePlaceholder()}\"\n          [options]=\"lookupOptions\" #inputRef></ps-keyin-input>\n        <div class=\"ps-select-lookup-arrow-wrapper\">\n          <div id=\"dropdonwArrow\" class=\"mat-select-arrow dropdown-arrow\"></div>\n        </div>\n      </div>\n      <ps-select-lookup-option-list [id]=\"id\" #selectLookUpRef (changeItem)=\"emitItemDetails($event)\"\n        (onDeleteItem)=\"deletedItem($event)\" (onPagination)=\"fillPaginationList($event)\" [options]=\"selectLookUpOptions\">\n      </ps-select-lookup-option-list>\n    </div>\n  </div>\n  <ps-label [options]=\"noValidAccountsLabelOptions\" *ngIf=\"!bAccountsFound\" class=\"no-account-found-message\"></ps-label>\n  <div *ngIf=\"showWarning\">\n    <p class=\"validation-message\">\n      {{'selected_value_not_exist_key' | translate}}\n    </p>\n  </div>\n  <!-- #BUG 1077331 -->\n  <ps-keyin-input [options]=\"lookupDropDownOptions\" (onPsChange)=\"onChangeItem($event)\"\n    *ngIf=\"selectLookUpOptions.listOfOptions?.length >0\" [hidden]=\"true\"></ps-keyin-input>\n</ps-container-complex>\n<div *ngIf=\"previewMode && visible\" class=\"ps-custom-component-preview\" psPreviewEngine>\n  <ps-label-input *ngIf=\"selectLookUpOptions.labelKey\" [id]=\"'lbl_'+ id\" [options]=\"selectLookUpOptions\"\n    class=\"ps-lbl-preview\">\n  </ps-label-input>\n  <span [innerHTML]=\"delimiter\"></span>\n  <ps-label-input [id]=\"'value_preview_'+ id \" [options]=\"previewValOptions\" class=\"ps-value-preview\"></ps-label-input>\n</div>");

/***/ }),

/***/ "L0og":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PsComplexLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexLookupComponent", function() { return PsComplexLookupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_lookup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-lookup.component.html */ "FMKc");
/* harmony import */ var _ps_complex_lookup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-lookup.component.scss */ "kHDF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
var PsComplexLookupComponent_1;











/**
 * @author Aftab.Ali
 * @since 04/12/2019
 *
 * <p> PsContainerLookupOptionDetailsComponent -- </p>
 */
let PsComplexLookupComponent = PsComplexLookupComponent_1 = class PsComplexLookupComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonService, logger, elementRef, navigationServices) {
        super(commonService, logger);
        this.elementRef = elementRef;
        this.navigationServices = navigationServices;
        this.options = {
            requestObject: null,
            notFoundMessage: '',
        };
        this.selectLookUpOptions = {};
        this.changeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.clickElsewhere = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.bAccountsFound = true;
        this.lookupOptions = {};
        this.tempLookupDropDownOptions = {};
        this.toggleCardList = false;
        this.noValidAccountsLabelOptions = {};
        this.tempItemList = [];
        this.lookupDropDownMultipleOptions = {};
        this.previewList = [];
        this.labelValueMap = '';
        this.itemLookupKeyArray = [];
    }
    // Added by Richie for #TP 1210739
    get lookupDropDownOptions() {
        if (this.options && this.options.listOfOptions && this.options.listOfOptions.length > 0) {
            const firstOption = this.options.listOfOptions[0];
            if (firstOption) {
                const prefixName = this.options.fcName + '.';
                const extraOptionDetails = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].extractPropertyNames(firstOption, prefixName);
                if (extraOptionDetails && extraOptionDetails.length > 0) {
                    this.options.group.controls[this.options.fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].CONTROLLER_EXTRA_OPTION_DETAILS] = extraOptionDetails;
                }
            }
        }
        return this.tempLookupDropDownOptions;
    }
    // End Richie
    get disableLookup() {
        this.lookupOptions.labelKey = this.options.labelKey;
        this.lookupOptions.placeHolder = this.options.placeHolder;
        this.lookupOptions.allowCust = false;
        const complexLookupOptions = this.commonProv.getElementValidations(this.lookupOptions.fcName);
        // val & condition on val added by Richie for #TP 1128252 since it was generating error when we are trying to get the keys of null value and thus it will stop selecting an account on the screen
        const val = this.lookupOptions.group.controls[this.options.fcName].value;
        if (val && Object.keys(val).length > 0) {
            // this.setInputValueOpacity('0');
        }
        if (complexLookupOptions && complexLookupOptions.IS_READONLY === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    get showDropdownIcon() {
        const complexLookupOptions = this.commonProv.getElementValidations(this.lookupOptions.fcName);
        if (complexLookupOptions && complexLookupOptions.IS_VISIBLE === 0) {
            return false;
        }
        else {
            return src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].showDropdownIcon;
        }
    }
    ngOnInit() {
        this.commonProv.addComponentValidator(this.options.group, this.options.fcName, this.common.prepareValidation(false, null, null, null, null, null, null, null, [this.commonProv.custOnlyObjectAllowed()]));
        super.init();
        this.lookupOptions = {
            labelKey: this.options.labelKey,
            placeHolder: this.options.placeHolder,
            fcName: this.options.fcName,
            group: this.options.group,
            disablePreview: true
        };
        this.tempLookupDropDownOptions = {
            labelKey: this.options.labelKey,
            placeHolder: this.options.placeHolder,
            fcName: this.options.fcName + '_lookupKey',
            group: this.options.group,
            type: this.options.multiple ? undefined : 'true',
            disablePreview: true,
            forceTriggerChange: true
        };
        this.custIconOptions.component = PsComplexLookupComponent_1;
        this.custIconOptions.componentOptions = this.options;
        this.custIconOptions.allowCust = false;
        this.custIconOptions.availableCustomization.IS_MANDATORY = true;
        this.custIconOptions.availableCustomization.PLACEHOLDER_LABEL_ID = true;
        if (this.custMode) {
            this.lookupOptions.allowCust = false;
        }
        else {
            this.lookupOptions.allowCust = true;
        }
        this.noValidAccountsLabelOptions = {
            labelKey: this.options.notFoundMessage !== '' ? this.options.notFoundMessage : 'no_data_found_key',
            translate: true
        };
        this.loadOptions();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.tempLookupDropDownOptions.fcName], 0);
    }
    get previewValOptions() {
        return {
            labelKey: this.fcValueDesc,
            psClass: 'ps-value-preview',
            previewMode: true
        };
    }
    get fcValueDesc() {
        let value = this.labelValueMap;
        return value;
    }
    /**
     *
     * @param object
     */
    popListUp() {
        if (!this.disableLookup) {
            if (this.options && this.options.listOfOptions && this.options.listOfOptions.length > 0 && this.toggleCardList) {
                this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
                this.commonProv.setValInsideNestedObj(this.lookupOptions.fcName, null, this.options.requestObject);
                this.commonProv.setValInsideNestedObj(this.lookupDropDownOptions.fcName, null, this.options.requestObject);
                this.bAccountsFound = true;
                this.selectLookUpOptions = {};
                this.options.showDefaultTemplate = false;
                this.selectLookUpOptions = this.options;
                if (this.options.enableListPagination) {
                    this.resetPagination();
                }
                else {
                    this.selectLookUpOptions.itemList = this.options.listOfOptions;
                }
                this.selectLookUpOptions.showSelectedCard = true;
                this.selectLookUpOptions.multiple = this.options.multiple ? this.options.multiple : false;
                this.selectLookUpRef.showSelectedDiv(true);
                //Added by Michel for JIRA-AZDB-2141 in order to display the search component once lookup dropdown opens
                this.toggleSearchElement();
            }
            else if (this.options && this.options.itemList !== undefined && this.options.itemList.length >= 1) {
                this.commonProv.setValInsideNestedObj(this.lookupOptions.fcName, null, this.options.requestObject);
                this.commonProv.setValInsideNestedObj(this.lookupDropDownOptions.fcName, null, this.options.requestObject);
                this.toggleCardList = !this.toggleCardList;
                if (this.options.enableListPagination) {
                    this.resetPagination();
                }
                else {
                    this.selectLookUpOptions.itemList = this.options.listOfOptions;
                }
            }
            else if (this.toggleCardList && this.options.listOfOptions && this.options.listOfOptions.length === 0) {
                this.bAccountsFound = false;
            }
            this.toggleCardList = !this.toggleCardList;
        }
    }
    toggleSearchElement(onItemChange) {
        if (this.selectLookUpElRef.nativeElement) {
            const searchElement = this.selectLookUpElRef.nativeElement.querySelector('ps-input-search-html');
            if (onItemChange && searchElement) {
                let searchElInput = searchElement.querySelector('*[psFcName]');
                searchElInput.value = "";
                searchElement.classList.add('hide-search-element');
            }
            else if (searchElement) {
                searchElement.classList.remove('hide-search-element');
            }
        }
    }
    resetPagination() {
        this.selectLookUpRef.numberOfItrations = 0;
        this.selectLookUpRef.tempNumberOfItrations = 0;
        this.selectLookUpRef.tempItemList = [];
        this.selectLookUpOptions.itemList = [];
        if (!this.selectLookUpRef.options.itemList || this.selectLookUpRef.options.itemList.length === 0) {
            this.selectLookUpRef.applyPagination(true);
        }
    }
    fillPaginationList(list) {
        this.selectLookUpOptions.itemList = list;
    }
    //edited by Marina-jira-AZDB-241; on click call presentLoader() first then popListUp() to open the list only after the data is returned
    //remove the logic of checking for data in a separate function to present loader only once 
    presentLoader() {
        this.commonProv.presentLoading();
        setTimeout(() => {
            this.checkOnListOfOptions();
        }, 500);
    }
    checkOnListOfOptions() {
        if (this.options && this.options.listOfOptions !== undefined) {
            this.toggleCardList = true;
            this.commonProv.dismissLoading();
            this.popListUp();
            return;
        }
        setTimeout(() => {
            this.checkOnListOfOptions(); //Marina 23082023 only call- the checking on the list and dismissing the loader on the timeout but not the present loader to not present multiple loaders on every tick 
        }, 1000);
    }
    onDocumentClick(event) {
        const targetElement = event.target;
        // Check if the click was outside the element
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement) && targetElement.id !== 'showMore' && targetElement.id !== 'showLess' && !this.options.multiple) {
            if (this.options && this.selectLookUpOptions && this.selectLookUpOptions.itemList && (this.selectLookUpOptions.itemList.length === 1 || this.options.multiple)) {
                this.selectLookUpOptions.showSelectedCard = true;
                this.selectLookUpOptions.showDefaultTemplate = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].showDefaultTemplateOption;
            }
            else {
                this.selectLookUpOptions.showSelectedCard = false;
                this.selectLookUpOptions.showDefaultTemplate = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].showDefaultTemplateOption;
            }
        }
    }
    /**
     *
     * @param event
     */
    emitItemDetails(event) {
        //Added by Michel for JIRA-AZDB-2141 in order to hide the search component and reset its value on card selection
        this.toggleSearchElement(true);
        if (this.options.multiple) {
            if (event && event.confirmMultiple) {
                this.setSelectedItems(event.itemList);
            }
        }
        else {
            if (event && event.item !== undefined) {
                this.commonProv.setValInsideNestedObj(this.tempLookupDropDownOptions.fcName, event.item.lookupKey, this.options.requestObject);
                const changedItem = this.options.listOfOptions.filter(item => item.lookupKey === event.item.lookupKey).shift();
                this.commonProv.setValInsideNestedObj(this.lookupOptions.fcName, changedItem, this.options.requestObject);
                changedItem[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].VALIDATE_COMBINATION] = false;
                //IMAL-7934, Modified by ghada, for handling the case change not being emit due to having the value reset (control won't emit the null and will fall to last entered valid value) with tempLookupDropDownOptions control's oldValue and newValue being the same
                if (!this.options.group.controls[this.tempLookupDropDownOptions.fcName].value && this.options.group.controls[this.tempLookupDropDownOptions.fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OLD_VALUE] == event.item.lookupKey) {
                    changedItem[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].VALIDATE_COMBINATION] = true; //Makki, #6254 Force set the VALIDATE_COMBINATION with true since it was changed
                    this.changeItem.emit(changedItem);
                }
            }
        }
    }
    setSelectedItems(itemList) {
        let lookupArray = [];
        itemList.forEach(element => {
            lookupArray.push(element.lookupKey || element.itemLookup);
        });
        this.commonProv.setValInsideNestedObj(this.tempLookupDropDownOptions.fcName, lookupArray, this.options.requestObject);
    }
    loadOptions() {
        this.options.showDefaultTemplate = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].showDefaultTemplateOption;
        this.selectLookUpOptions = this.options;
        this.selectLookUpOptions.multiple = this.options.multiple ? this.options.multiple : false;
    }
    onChangeItem(event) {
        this.toggleCardList = false;
        if (event !== undefined && this.options.listOfOptions !== undefined) {
            if (!this.selectLookUpOptions.multiple) {
                const changedItem = this.options.listOfOptions.filter(item => item.lookupKey == event.newValue).shift();
                if (changedItem) {
                    this.commonProv.setValInsideNestedObj(this.lookupOptions.fcName, changedItem, this.options.requestObject);
                    this.options.itemList = [];
                    this.previewList = [];
                    this.selectLookUpOptions.itemList[0] = changedItem;
                    this.previewList.push(changedItem[changedItem.previewProperty]);
                    this.selectLookUpRef.onClickCard(this.selectLookUpOptions); // ---> ps-select-lookup-option-list -> onClickCard
                    // this.changeItem.emit(this.options.listOfOptions);
                    changedItem[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].VALIDATE_COMBINATION] = true;
                    this.changeItem.emit(changedItem);
                    this.previewBuilder();
                    //show warning if value not exist any more
                    this.showWarning = false;
                }
                else {
                    this.options.itemList = [];
                    this.showWarning = true;
                }
            }
            else {
                this.multiSelectObject(event);
            }
        }
    }
    multiSelectObject(event) {
        let arrayList = [];
        if (typeof (event.newValue) === 'string') {
            arrayList.push(event.newValue);
        }
        else {
            arrayList = event.newValue;
        }
        this.tempItemList = [];
        this.previewList = [];
        arrayList.forEach(element => {
            const changedItem = this.options.listOfOptions.filter(item => item.lookupKey === element).shift();
            if (changedItem) {
                this.previewList.push(changedItem[changedItem.previewProperty]);
                this.tempItemList.push(changedItem);
            }
        });
        this.options.itemList = this.tempItemList;
        this.selectLookUpOptions.itemList = this.tempItemList;
        this.selectLookUpOptions.showSelectedCard = true;
        this.selectLookUpRef.showSelectedDiv(false);
        this.commonProv.setValInsideNestedObj(this.lookupOptions.fcName, this.tempItemList, this.options.requestObject);
        if (this.tempItemList.length > 0) {
            this.showWarning = false;
            this.changeItem.emit(this.tempItemList);
        }
        else {
            this.options.itemList = [];
            this.showWarning = true;
        }
        this.previewBuilder();
    }
    previewBuilder() {
        this.labelValueMap = '';
        if (!this.selectLookUpOptions.multiple) {
            this.labelValueMap = this.previewList[0];
        }
        else if (this.previewList.length >= 1) {
            for (let index = 0; index < this.previewList.length; index++) {
                const element = this.previewList[index];
                if ((index + 1) === this.previewList.length) {
                    this.labelValueMap += element;
                }
                else {
                    this.labelValueMap += element + ', ';
                }
            }
        }
    }
    deletedItem(item) {
        if (item && item !== undefined) {
            this.onDeleteItem.emit(item);
        }
    }
    resetLookUp() {
        var _a;
        this.options.selectedItems = [];
        this.options.itemList = null;
        this.common.setValInsideNestedObj(this.options.fcName, null, this.options.requestObject);
        this.common.setValInsideNestedObj(this.lookupDropDownOptions.fcName, null, this.options.requestObject);
        (_a = this.options.group.controls[this.lookupDropDownOptions.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
    }
    //Added by ghada, AZDB-4685 for fixing/refactoring the condition of showing/hiding the component (ps-kein-input) responsible for the issue of showing value [object object] and placeholder on selecting value 
    hidePlaceholder() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return ((_b = (_a = this.selectLookUpOptions) === null || _a === void 0 ? void 0 : _a.itemList) === null || _b === void 0 ? void 0 : _b.length) >= 1 ?
            (Array.isArray((_c = this.options) === null || _c === void 0 ? void 0 : _c.requestObject[this.lookupDropDownOptions.fcName]) ? ((_e = (_d = this.options) === null || _d === void 0 ? void 0 : _d.requestObject[this.lookupDropDownOptions.fcName]) === null || _e === void 0 ? void 0 : _e.length) == ((_g = (_f = this.selectLookUpOptions) === null || _f === void 0 ? void 0 : _f.itemList) === null || _g === void 0 ? void 0 : _g.length)
                : ((_h = this.options) === null || _h === void 0 ? void 0 : _h.requestObject[this.lookupDropDownOptions.fcName]) == ((_j = this.selectLookUpOptions) === null || _j === void 0 ? void 0 : _j.itemList[0].lookupKey))
            : 0;
    }
};
PsComplexLookupComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"] }
];
PsComplexLookupComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    changeItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDeleteItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    clickElsewhere: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    selectLookUpRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectLookUpRef',] }],
    selectLookUpElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectLookUpRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }],
    onDocumentClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['document:click', ['$event'],] }]
};
PsComplexLookupComponent = PsComplexLookupComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-lookup',
        template: _raw_loader_ps_complex_lookup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_lookup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]])
], PsComplexLookupComponent);



/***/ }),

/***/ "kHDF":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWxvb2t1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "t+iT":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PsComplexLookupComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexLookupComponentModule", function() { return PsComplexLookupComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */ "yvgy");
/* harmony import */ var _ps_complex_lookup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-complex-lookup.component */ "L0og");






let PsComplexLookupComponentModule = class PsComplexLookupComponentModule {
};
PsComplexLookupComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_lookup_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_4__["PsSelectLookupOptionListComponentModule"]
        ],
        exports: [_ps_complex_lookup_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponent"]],
        entryComponents: [_ps_complex_lookup_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexLookupComponentModule);



/***/ })

}]);
//# sourceMappingURL=4-es2015.js.map