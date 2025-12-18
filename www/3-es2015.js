(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "drlE":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  [ngClass]=\"{'lookup-dropdown-content-show' : options.showSelectedCard,'lookup-dropdown-content' : !options.showSelectedCard,\n 'lookup-dropdown-content-show-popup' : dynamicComponentOptions.itemList == dynamicComponentOptions.listOfOptions, 'lookup-dropdown-content-show-multiple': options.multiple === true }\" (scroll)=\"onScroll($event)\">\n  <div\n    [ngClass]=\"{'select-item-card': itemArraySize === 1,'lookup-dropdown-content-show lookup-dropdown-content': itemArraySize > 1, 'lookup-dropdown-content-multiple': options.multiple === true}\">\n    <div id=\"scrollableContent\"\n      class=\"fixed-keyin-multiple-container-selected fixed-keyin-multiple-container ps-container-lookup-option-details lookup-card-margin-bottom\"\n      *ngIf=\"options.multiple && itemArraySize > 1\">\n      <div *ngIf=\"options.multiple\">\n        <div class=\"selected-items-label\">{{labelSelectedItems}}</div>\n        <div class=\"selected-items-values multiSelectSingleItemInAnimation\" id=\"{{ 'multi-select-single-item-' + i }}\"\n          *ngFor='let item of options.selectedItems; let i = index;'>\n          <span>{{item.item}}</span>\n          <ps-action-icon class=\"single-item-delete-buttons\" [options]=\"deleteSingleItemOptions\" [id]=\"id + '_stat'\"\n            (onClick)=\"deleteSingleItem(item,i,'multi-select-single-item-'+i)\">\n          </ps-action-icon>\n        </div>\n      </div>\n      <div class=\"inline-buttons-group\">\n        <ps-action-icon class=\"inline-multiple-buttons\" *ngIf=\"options.multiple\" [options]=\"saveMultipleOptions\"\n          [id]=\"id + '_stat'\" (onClick)=\"confirmMultipleSelection()\">\n        </ps-action-icon>\n        <ps-action-icon class=\"inline-multiple-buttons\" *ngIf=\"options.multiple\" [options]=\"resetMultipleOptions\"\n          [id]=\"id + '_stat'\" (onClick)=\"resetMultipleSelection()\">\n        </ps-action-icon>\n      </div>\n    </div>\n    <div id='ps-option-list-component-dropdown' class=\"ps-option-list-component-dropdown\"\n      [ngClass]=\"{'fixed-keyin-multiple-container': options.multiple === true, 'ps-container-lookup-option-details lookup-card-margin-bottom': true}\"\n      *ngIf=\"itemArraySize > 1\">\n      <ps-keyin-input [options]=\"disableSelectDropdownOptions\" *ngIf=\"enableEmptyOpt\"></ps-keyin-input>\n    </div>\n    <ps-dynamic-component-loader [options]=\"dynamicComponentOptions\" (onClickCard)=\"onClickCard($event)\">\n    </ps-dynamic-component-loader>\n  </div>\n</div>");

/***/ }),

/***/ "h3P/":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PsSelectLookupOptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSelectLookupOptionListComponent", function() { return PsSelectLookupOptionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_select_lookup_option_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-select-lookup-option-list.component.html */ "drlE");
/* harmony import */ var _ps_select_lookup_option_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-select-lookup-option-list.component.scss */ "uYq5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");










/**
 * @author Aftab.Ali
 * @since 09/12/2019
 *
 * <p> PsSelectLookupOptionListComponent </p>
 */
let PsSelectLookupOptionListComponent = class PsSelectLookupOptionListComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.changeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onDeleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onPagination = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.dynamicComponentOptions = {};
        this.templateOptions = [];
        this.cardContentOptions = [];
        this.disableSelectDropdownOptions = {};
        this.enableEmptyOpt = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].enableEmptyOpt;
        this.saveMultipleOptions = {};
        this.resetMultipleOptions = {};
        this.deleteSingleItemOptions = {};
        this.totalNbRec = 0;
        this.numberOfItrations = 0;
        this.loadMoreData = false;
        this.numberOfRowsToShow = 5;
        this.tempItemList = [];
        this.tempNumberOfItrations = 0;
        this.noCardClicked = true;
        this.labelSelectedItems = this.commonProv.translate('selected_items_key');
    }
    ngOnInit() {
        super.ngOnInit();
        this.options.selectedItems = [];
        this.disableSelectDropdownOptions = {
            labelKey: '',
            placeHolder: '',
            fcName: this.options.fcName,
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({}),
            disablePreview: true,
            allowCust: false
        };
        this.saveMultipleOptions = {
            iconName: 'checkmark-circle-outline',
            allowCust: true,
            labelKey: 'Confirm',
        };
        this.resetMultipleOptions = {
            labelKey: 'Reset',
            allowCust: true,
            iconName: 'close-circle'
        };
        this.deleteSingleItemOptions = {
            labelKey: 'delete',
            allowCust: true,
            iconName: 'trash'
        };
        this.dynamicComponentOptions.labelKey = this.options.labelKey;
        this.dynamicComponentOptions.component = this.options.component;
        this.dynamicComponentOptions.listOfOptions = this.options.listOfOptions;
        this.dynamicComponentOptions.group = this.options.group;
        this.dynamicComponentOptions = this.options;
        this.loadLabelsValueMap();
        if (this.options.itemList === null || this.options.itemList === undefined) {
            this.itemArraySize = 2;
        }
    }
    onScroll(event) {
        var _a, _b;
        if (this.options.enableListPagination === true) {
            const showingOnlySelected = ((_a = this.options.selectedItems) === null || _a === void 0 ? void 0 : _a.length) > 1 &&
                ((_b = this.options.itemList) === null || _b === void 0 ? void 0 : _b.length) === this.options.selectedItems.length;
            if (!this.totalNbRec || showingOnlySelected) {
                return;
            }
            const element = event.target;
            const reachedBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 5;
            const hasMoreToLoad = this.options.itemList.length !== this.options.listOfOptions.length ||
                this.options.itemList.length < this.totalNbRec;
            const loadedItemsCount = this.tempItemList ? this.tempItemList.length : 0;
            const isLastClickedLastItem = this.lastClickedIndex === (loadedItemsCount - 1);
            if (reachedBottom && hasMoreToLoad && (this.noCardClicked || isLastClickedLastItem)) {
                this.numberOfItrations++;
                this.tempNumberOfItrations = this.numberOfItrations;
                this.loadData();
            }
        }
    }
    loadData(refreshArray = false) {
        if (!this.loadMoreData) {
            this.loadMoreData = true;
            this.applyPagination(refreshArray);
        }
    }
    applyPagination(refreshArray = false) {
        this.totalNbRec = this.options.listOfOptions ? this.options.listOfOptions.length : 0;
        if (this.totalNbRec > 0) {
            this.noCardClicked = true;
            if (refreshArray) {
                this.options.itemList = [];
            }
            if (this.options.enableListPagination) {
                let start;
                if (this.numberOfItrations == 0)
                    start = this.numberOfItrations * this.numberOfRowsToShow;
                else
                    start = this.tempNumberOfItrations * this.numberOfRowsToShow;
                const end = start + this.numberOfRowsToShow;
                const nextChunk = this.options.listOfOptions.slice(start, end);
                if (this.tempItemList.length > 0) {
                    this.tempItemList.push(...nextChunk);
                    this.options.itemList = this.tempItemList;
                }
                else {
                    this.options.itemList.push(...nextChunk);
                    this.tempItemList = this.options.itemList;
                }
            }
            else {
                this.options.itemList.push(...this.options.listOfOptions);
            }
            this.onPagination.emit(this.options.itemList);
            this.loadMoreData = false;
        }
    }
    updateLastClickedIndex(item) {
        if (item) {
            const clickedIndex = this.options.itemList.findIndex(i => i.lookupKey === item.lookupKey);
            this.lastClickedIndex = clickedIndex;
        }
    }
    onClickCard(event) {
        if (this.options.enableListPagination) {
            this.options.itemList = this.tempItemList;
            this.updateLastClickedIndex(event === null || event === void 0 ? void 0 : event.item);
        }
        if (!this.options.multiple) {
            if (event && event.itemList) {
                if (!this.options.enableListPagination) {
                    this.options.itemList = event.itemList;
                }
                this.options.showSelectedCard = true;
            }
            if (event && event.itemList && event.itemList.length === 1) {
                this.itemArraySize = 1;
                this.options.showDefaultTemplate = false;
            }
            else if (event && event.itemList && event.itemList.length > 1) {
                this.itemArraySize = 2;
            }
            this.changeItem.emit(event);
        }
        else {
            this.onclickCardMultiple(event);
        }
    }
    onclickCardMultiple(event) {
        if (this.options.multiple) {
            let found = false;
            this.itemArraySize = 2;
            if (!this.options.enableListPagination) {
                this.options.itemList = event.listOfOptions;
            }
            this.options.selectedItems.forEach(element => {
                if (element.itemLookup === event.item.lookupKey) {
                    found = true;
                }
            });
            if (!found) {
                this.options.selectedItems.push({ item: event.item[event.item.previewProperty], itemDetailed: event.item, itemLookup: event.item.lookupKey });
            }
        }
    }
    changeMarginOnItemChange() {
        if (this.options.multiple) {
            const id = 'ps-option-list-component-dropdown';
            const el = document.getElementById(id);
            el.style.marginTop = (this.options.selectedItems.length * 40).toString() + 'px';
        }
    }
    deleteSingleItem(item, index, reportHtmlId) {
        document.getElementById(reportHtmlId).classList.remove('multiSelectSingleItemInAnimation');
        document.getElementById(reportHtmlId).classList.add('multipleSelectSingleItemDeleteAnimation');
        setTimeout(() => {
            this.options.selectedItems.splice(index, 1);
            this.changeMarginOnItemChange();
        }, 600);
        this.onDeleteItem.emit(item);
    }
    showSelectedDiv(show) {
        if (this.options.multiple) {
            if (show) {
                this.itemArraySize = 2;
            }
            else {
                this.itemArraySize = 1;
            }
        }
    }
    /**
     * preparing list for template card and content card from the map passed in options
     */
    loadLabelsValueMap() {
        Array.from(this.options.labelsValueMap).forEach((element) => {
            const tempOption = {
                key: element[0],
                value: element[1].value
            };
            this.templateOptions.push(tempOption);
        });
    }
    confirmMultipleSelection() {
        this.noCardClicked = false;
        if (this.options.selectedItems.length > 0) {
            this.itemArraySize = 1;
            let submitObject = {
                confirmMultiple: true,
                itemList: this.options.selectedItems
            };
            this.changeItem.emit(submitObject);
        }
        else {
            this.itemArraySize = 1;
            this.options.selectedItems = [];
        }
    }
    resetMultipleSelection() {
        // confirmation popup for reseting the selection (Clark)
        const alertController = {
            header: "are_you_sure_key",
            buttons: [
                {
                    options: {
                        labelKey: "no_key",
                        group: null,
                    },
                    handler: () => {
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                    },
                },
                {
                    options: {
                        labelKey: "yes_key",
                        group: null,
                    },
                    handler: () => {
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                        this.options.selectedItems = [];
                        this.itemArraySize = 1;
                        this.options.itemList = null;
                    },
                },
            ],
        };
        this.common.presentPsAlert(alertController, "confirm_reset");
        // end Clark
    }
    ngOnChanges() {
        this.dynamicComponentOptions.component = this.options.component;
        this.dynamicComponentOptions.listOfOptions = this.options.listOfOptions;
        this.dynamicComponentOptions.showItemPopUp = this.options.showItemPopUp;
        this.dynamicComponentOptions.group = this.options.group;
        if (this.options.itemList === null || this.options.itemList === undefined) {
            this.itemArraySize = 2;
        }
        else if (this.options.itemList.length > 0) {
            this.itemArraySize = 2;
        }
        else if (this.options.multiple && this.options.showSelectedCard) {
            this.itemArraySize = 2;
        }
    }
};
PsSelectLookupOptionListComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsSelectLookupOptionListComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    changeItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onDeleteItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsSelectLookupOptionListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-select-lookup-option-list',
        template: _raw_loader_ps_select_lookup_option_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_select_lookup_option_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsSelectLookupOptionListComponent);



/***/ }),

/***/ "uYq5":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1zZWxlY3QtbG9va3VwLW9wdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "yvgy":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: PsSelectLookupOptionListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsSelectLookupOptionListComponentModule", function() { return PsSelectLookupOptionListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_select_lookup_option_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-select-lookup-option-list.component */ "h3P/");





let PsSelectLookupOptionListComponentModule = class PsSelectLookupOptionListComponentModule {
};
PsSelectLookupOptionListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_select_lookup_option_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSelectLookupOptionListComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_select_lookup_option_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSelectLookupOptionListComponent"]
        ],
        entryComponents: [
            _ps_select_lookup_option_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSelectLookupOptionListComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsSelectLookupOptionListComponentModule);



/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map