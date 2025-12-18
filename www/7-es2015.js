(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "+85s":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXNlbGVjdC1icmFuY2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "+odD":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: PsDropdownBranchesComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownBranchesComponentModule", function() { return PsDropdownBranchesComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-branches.component */ "wTrn");





let PsDropdownBranchesComponentModule = class PsDropdownBranchesComponentModule {
};
PsDropdownBranchesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownBranchesComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [_ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownBranchesComponent"]],
        entryComponents: [_ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownBranchesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownBranchesComponentModule);



/***/ }),

/***/ "9vDO":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onBranchChange($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "ULj9":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PsComplexSelectBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSelectBranchComponent", function() { return PsComplexSelectBranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_select_branch_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-select-branch.component.html */ "mblX");
/* harmony import */ var _ps_complex_select_branch_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-select-branch.component.scss */ "+85s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../psServices/models/ps-common-bussiness-constant */ "V0Fi");










let PsComplexSelectBranchComponent = class PsComplexSelectBranchComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull) {
        super(commonService, logger);
        this.omniPull = omniPull;
        this.defaultOptions = {};
    }
    ngOnInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.defaultOptions = {
                countryRegionCityOptions: {
                    countriesOptions: {
                        labelKey: 'country__key',
                        placeHolder: 'select_country_key',
                        fcName: this.options.countryRegionCityOptions ? this.options.countryRegionCityOptions.countriesOptions.fcName : 'branch_country',
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'clipboard'
                        }
                    },
                    regionOptions: {
                        labelKey: 'region_key',
                        placeHolder: 'region_key',
                        fcName: this.options.countryRegionCityOptions ? this.options.countryRegionCityOptions.regionOptions.fcName : 'branch_region',
                        group: this.options.group
                    },
                    cityOptions: {
                        labelKey: 'city_key',
                        placeHolder: 'select_city_key',
                        fcName: this.options.countryRegionCityOptions ? this.options.countryRegionCityOptions.cityOptions.fcName : 'branch_city',
                        group: this.options.group,
                    }
                },
            };
            this.defaultOptions.branchesOptions = {
                group: this.options.group,
                fcName: this.options.branchesOptions ? this.options.branchesOptions.fcName : 'default_branch',
                placeHolder: ((_a = this.options.branchesOptions) === null || _a === void 0 ? void 0 : _a.placeHolder) ? this.options.branchesOptions.placeHolder : 'branch_key',
                labelKey: ((_b = this.options.branchesOptions) === null || _b === void 0 ? void 0 : _b.labelKey) ? this.options.branchesOptions.labelKey : 'label_branch_key',
            };
            this.commonProv.copyObject(this.defaultOptions, this.options);
            let optionsFcNameValidations = this.commonProv.getElementValidations(this.defaultOptions.branchesOptions.fcName);
            if (this.options.parameterToCheck) {
                const result = yield this.omniPull.checkBranch(this.options.parameterToCheck);
                optionsFcNameValidations = this.commonProv.getElementValidations(this.defaultOptions.branchesOptions.fcName);
                if (result.enableCifBranch || (this.defaultOptions.branchesOptions.fcName && !optionsFcNameValidations.IS_VISIBLE)) {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultOptions.branchesOptions.fcName], 0);
                }
                else {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultOptions.branchesOptions.fcName], optionsFcNameValidations.IS_MANDATORY);
                }
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultOptions.branchesOptions.fcName], optionsFcNameValidations.IS_MANDATORY);
            }
        });
    }
    onSelectBranch($event) {
        this.onPsChange.emit($event);
    }
    /**
     * event for city change
     * @param event
     */
    onChildDropdownSelected(event) {
        if (event[_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].SELECTED_DROPDOWN]) {
            const dropdownType = event[_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].SELECTED_DROPDOWN];
            if (dropdownType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].COUNTRY_DROPDOWN) {
                this.defaultOptions.branchesOptions.selectedCountryCode = event.selectedObj !== undefined ? event.selectedObj.countriesID : event.newValue != undefined ? event.newValue : null;
                this.defaultOptions.branchesOptions.selectedRegionCode = null;
                this.defaultOptions.branchesOptions.selectedCityCode = null;
            }
            else if (dropdownType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].REGION_DROPDOWN) {
                this.defaultOptions.branchesOptions.selectedRegionCode = event.selectedObj !== undefined ? event.selectedObj.countriesRegionID : event.newValue != undefined ? event.newValue : null;
                this.defaultOptions.branchesOptions.selectedCityCode = null;
            }
            else if (dropdownType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CITY_DROPDOWN) {
                this.defaultOptions.branchesOptions.selectedCityCode = event.selectedObj !== undefined ? event.selectedObj.citiesId : event.newValue != undefined ? event.newValue : null;
            }
        }
        this.defaultOptions.branchesOptions = Object.assign({}, this.defaultOptions.branchesOptions);
    }
};
PsComplexSelectBranchComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsComplexSelectBranchComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexSelectBranchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-select-branch',
        template: _raw_loader_ps_complex_select_branch_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_select_branch_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsComplexSelectBranchComponent);



/***/ }),

/***/ "jtkp":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1icmFuY2hlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "mblX":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-swift-benef-creation\">\n\n  <ps-complex-country-regions-cities [id]=\"id\" [options]=\"defaultOptions.countryRegionCityOptions\"\n    (onPsChange)=\"onChildDropdownSelected($event)\"></ps-complex-country-regions-cities>\n\n\n  <ps-dropdown-branches [id]=\"id\" [options]=\"defaultOptions.branchesOptions\" (onPsChange)=\"onSelectBranch($event)\">\n  </ps-dropdown-branches>\n\n\n</ps-container-complex>");

/***/ }),

/***/ "ohDU":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: PsComplexSelectBranchComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSelectBranchComponentModule", function() { return PsComplexSelectBranchComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-select-branch.component */ "ULj9");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_complex_country_regions_cities_ps_complex_country_regions_cities_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ps-complex-country-regions-cities/ps-complex-country-regions-cities.component.module */ "X7AV");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_branches_ps_dropdown_branches_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.module */ "+odD");







let PsComplexSelectBranchComponentModule = class PsComplexSelectBranchComponentModule {
};
PsComplexSelectBranchComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexSelectBranchComponent"]
        ],
        imports: [
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            _ps_select_dropdown_ps_dropdown_branches_ps_dropdown_branches_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownBranchesComponentModule"],
            _ps_complex_country_regions_cities_ps_complex_country_regions_cities_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexCountryRegionsCitiesComponentModule"]
        ],
        exports: [
            _ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexSelectBranchComponent"]
        ],
        entryComponents: [_ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexSelectBranchComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexSelectBranchComponentModule);



/***/ }),

/***/ "wTrn":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PsDropdownBranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownBranchesComponent", function() { return PsDropdownBranchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_branches_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-branches.component.html */ "9vDO");
/* harmony import */ var _ps_dropdown_branches_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-branches.component.scss */ "jtkp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








let PsDropdownBranchesComponent = class PsDropdownBranchesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.omniPull = omniPull;
        this.defaultSelectOptions = {
            labelKey: 'label_branch_key',
            placeHolder: 'branch_key'
        };
        this.branches = [];
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options);
    }
    ngOnChanges() {
        this.getBranches();
    }
    getBranches() {
        const paramData = {
            // eslint-disable-next-line radix
            countryId: this.options.selectedCountryCode ? parseInt(this.options.selectedCountryCode) : null,
            regionId: this.options.selectedRegionCode ? parseInt(this.options.selectedRegionCode) : null,
            cityId: this.options.selectedCityCode ? parseInt(this.options.selectedCityCode) : null,
            mapTypesInclude: "'B'"
        };
        this.branches = [];
        this.omniPull.returnMapAtmBranches(paramData).then((result) => {
            this.defaultSelectOptions.listOfOptions = [];
            if (result && result.gridModel != null && result.gridModel.length > 0) {
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < result.gridModel.length; i++) {
                    const acctype = {
                        itemValue: result.gridModel[i].vsBranchCode,
                        description: result.gridModel[i].briefDesc,
                        selectedObj: result.gridModel[i]
                    };
                    this.branches.push(acctype);
                }
                this.defaultSelectOptions.listOfOptions = this.branches;
                const defaultBranchSelected = this.defaultSelectOptions.group.controls[this.defaultSelectOptions.fcName].value;
                if (defaultBranchSelected && !this.defaultSelectOptions.listOfOptions.some(e => e.itemValue === defaultBranchSelected)) {
                    this.defaultSelectOptions.group.controls[this.defaultSelectOptions.fcName].setValue(null);
                }
            }
            else {
                this.defaultSelectOptions.listOfOptions = [];
                this.defaultSelectOptions.group.controls[this.defaultSelectOptions.fcName].setValue(null);
                this.logger.warn(result, 'empty response');
            }
        }).catch((error) => { });
    }
    onBranchChange(values) {
        this.loggerP.log('onBranchChange' + values);
        this.onPsChange.emit(values);
    }
};
PsDropdownBranchesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsDropdownBranchesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownBranchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-branches',
        template: _raw_loader_ps_dropdown_branches_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_branches_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsDropdownBranchesComponent);



/***/ })

}]);
//# sourceMappingURL=7-es2015.js.map