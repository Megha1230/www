(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "7XXa":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PsComplexCifIdTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexCifIdTypesComponent", function() { return PsComplexCifIdTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_cif_id_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-cif-id-types.component.html */ "NcWP");
/* harmony import */ var _ps_complex_cif_id_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-cif-id-types.component.scss */ "zhiz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_complex_id_details_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../ps-complex-id-details/ps-complex-id-details.component */ "y70R");












let PsComplexCifIdTypesComponent = class PsComplexCifIdTypesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull) {
        super(commonService, logger);
        this.omniPull = omniPull;
        this.onIdTypesGetLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.defaultOptions = {
            cifTypeOptions: {
                labelKey: 'cif_key',
                placeHolder: 'select_cif_type_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            complexIdDetailsOptions: {
                dropdownIdTypesOptions: {
                    fcName: 'idType1',
                    labelKey: 'national_id_type_key',
                    placeHolder: 'enter_national_id_type_key',
                },
                idNumberOptions: {
                    labelKey: 'id_number_key',
                    placeHolder: 'enter_id_number_key',
                    fcName: 'idNumber1',
                },
                dateExpiryOptions: {
                    labelKey: 'expiry_date_key',
                    placeHolder: 'enter_expiry_date_key',
                    fcName: 'expiryDate1',
                },
                countriesOptions: {
                    labelKey: 'country_of_issuance_key',
                    placeHolder: 'select_country_of_issuance_key',
                    fcName: 'issuanceCountry1',
                    iconOptions: {
                        iconName: 'clipboard'
                    },
                },
                issueDateOptions: {
                    labelKey: 'issue_date_key',
                    placeHolder: 'issue_date_key',
                    fcName: 'issueDate1',
                }
            },
            complexIdDetailsOptions1: {
                dropdownIdTypesOptions: {
                    fcName: 'idType1',
                    labelKey: 'national_id_type_key',
                    placeHolder: 'enter_national_id_type_key',
                },
                idNumberOptions: {
                    labelKey: 'id_number_key',
                    placeHolder: 'enter_id_number_key',
                    fcName: 'idNumber1',
                },
                dateExpiryOptions: {
                    labelKey: 'expiry_date_key',
                    placeHolder: 'enter_expiry_date_key',
                    fcName: 'expiryDate1',
                },
                countriesOptions: {
                    labelKey: 'country_of_issuance_key',
                    placeHolder: 'select_country_of_issuance_key',
                    fcName: 'issuanceCountry1',
                    iconOptions: {
                        iconName: 'clipboard'
                    },
                },
                issueDateOptions: {
                    labelKey: 'issue_date_key',
                    placeHolder: 'issue_date_key',
                    fcName: 'issueDate1',
                }
            },
            showCifType: true
        };
        this.showBG = false;
        this.mandatoryIdTypes = [];
        this.optionalIdTypes = [];
        this.showIdDropDown = false;
        this.mandatoryIdThere = false;
        this.gridModelItemLength = 0;
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options);
        this.defaultOptions.requestObject = this.options.requestObject;
        super.init();
        if (this.defaultOptions.showCifType == false) {
            this.returnIDTypes(null);
        }
        // PsCommonSettings.oper_ID = 1481;
    }
    onChange(event) {
        if (this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName] !== undefined) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 0);
            this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName].setValue(null);
        }
        if (this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.fcName] !== undefined) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.fcName], 0);
            this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.fcName].setValue(null);
        }
        if (event && event.selectedObj) {
            this.returnIDTypes(event.selectedObj);
            this.onPsChange.emit(event);
        }
    }
    returnIDTypes(selectedObj) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const paramData = {
                cifType: {
                    selectedObj
                },
                param: (_a = this.options) === null || _a === void 0 ? void 0 : _a.param //Mohanad 08042024-AZDB-2532
            };
            this.omniPull.returnIdTypesList(paramData).then((result) => {
                var _a;
                this.mandatoryIdTypes = [];
                this.optionalIdTypes = [];
                let optionalIdType;
                if (result && result.gridModel && result.gridModel.length > 0) {
                    this.removeIdDetailControls();
                    this.showIdDropDown = false;
                    let num = 1;
                    /*
                      #DN GilbertAndary #BUG 1096926
                    */
                    const mandatoryList = result.gridModel.filter((val => val.mandatory === true));
                    this.gridModelItemLength = mandatoryList.length;
                    this.mandatoryIdThere = mandatoryList.length > 0 ? true : false;
                    for (const iterator of result.gridModel) {
                        const obj = {
                            group: this.options.group,
                            dropdownIdTypesOptions: {
                                labelKey: 'national_id_type_key',
                                placeHolder: 'enter_national_id_type_key',
                                group: this.options.group
                            },
                            idNumberOptions: {
                                labelKey: 'id_number_key',
                                placeHolder: 'enter_id_number_key',
                                group: this.options.group
                            },
                            dateExpiryOptions: {
                                labelKey: 'expiry_date_key',
                                placeHolder: 'enter_expiry_date_key',
                                group: this.options.group
                            },
                            countriesOptions: {
                                labelKey: 'country_of_issuance_key',
                                placeHolder: 'select_country_of_issuance_key',
                                iconOptions: {
                                    iconName: 'clipboard'
                                },
                                group: this.options.group
                            },
                            issueDateOptions: {
                                labelKey: 'issue_date_key',
                                placeHolder: 'issue_date_key',
                                group: this.options.group
                            }
                        };
                        if (iterator.mandatory === true) {
                            obj.dropdownIdTypesOptions.fcName = 'idType' + num;
                            obj.idNumberOptions.fcName = 'idNumber' + num;
                            obj.dateExpiryOptions.fcName = 'expiryDate' + num;
                            obj.countriesOptions.fcName = 'issuanceCountry' + num;
                            obj.issueDateOptions.fcName = 'issueDate' + num;
                            this.showBG = true;
                            const list = [{
                                    itemValue: iterator.CODE.toString(),
                                    description: iterator.briefDesc,
                                    selectedObj: iterator
                                }];
                            obj.dropdownIdTypesOptions.listOfOptions = list;
                            this.mandatoryIdTypes.push(obj);
                            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [obj.dropdownIdTypesOptions.fcName], 1);
                            this.options.group.addControl(obj.dropdownIdTypesOptions.fcName, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]());
                            this.commonProv.setValInsideNestedObj(obj.dropdownIdTypesOptions.fcName, iterator.CODE.toString(), this.options.requestObject);
                            if (iterator.fromLen) {
                                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [obj.idNumberOptions.fcName], iterator.fromLen);
                            }
                            if (iterator.toLen) {
                                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXLENGTH, [obj.idNumberOptions.fcName], iterator.toLen);
                            }
                            if (iterator.DATA_TYPE) {
                                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_PATTERN, [obj.idNumberOptions.fcName], this.getDataType(iterator.DATA_TYPE));
                            }
                            num = num + 1;
                        }
                        else if (iterator.mandatory === false && !this.mandatoryIdThere) {
                            this.showBG = true;
                            const list = {
                                itemValue: iterator.CODE.toString(),
                                description: iterator.briefDesc,
                                selectedObj: iterator
                            };
                            optionalIdType = '';
                            optionalIdType = iterator.CODE.toString();
                            this.optionalIdTypes.push(list);
                        }
                    }
                    if (this.optionalIdTypes && this.optionalIdTypes.length > 0 /* #DN GilbertAndary #BUG 1096926*/ && !this.mandatoryIdThere) {
                        this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions = this.optionalIdTypes;
                        (_a = this.options.group.controls[this.defaultOptions.complexIdDetailsOptions1.idNumberOptions.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
                    }
                }
                else {
                    this.showIdDropDown = true;
                    this.showBG = true;
                    this.mandatoryIdTypes = [];
                    this.optionalIdTypes = [];
                    this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions = [];
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 0);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], this.getDataType(0));
                    //   this.options.group.controls[this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName].reset();
                    if (this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName]) {
                        this.commonProv.setValInsideNestedObj(this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName, null, this.options.requestObject);
                    }
                }
            }, (err) => {
                this.logger.error('Error: While fetching data : ', err);
            }).finally(() => {
                this.onIdTypesGetLoaded.emit(true);
            });
        });
    }
    getDataType(val) {
        let patrn;
        switch (val) {
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DEFAULT_DATA_TYPE:
                return patrn = { expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].numericRegex, errorMsg: 'field_should_contain_numeric_characters_key' };
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ALPHA_DATA_TYPE:
                return patrn = { expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].alphaRegex, errorMsg: 'field_should_contain_alphabetic_characters_key' };
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].NUMERIC_DATA_TYPE:
                return patrn = { expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].numericRegex, errorMsg: 'field_should_contain_numeric_characters_key' };
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ALPHA_NUMERIC_DATA_TYPE:
                return patrn = { expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].alphaNumericRegex, errorMsg: 'field_should_contain_alpha_numeric_characters_key' };
            default:
                return patrn = { expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].numericRegex, errorMsg: 'field_should_contain_numeric_characters_key' };
        }
    }
    removeIdDetailControls() {
        if (this.gridModelItemLength > 0) {
            for (let i = 1; i < this.gridModelItemLength + 1; i++) {
                this.defaultOptions.group.removeControl('idType' + i);
                this.defaultOptions.group.removeControl('idNumber' + i);
                this.defaultOptions.group.removeControl('expiryDate' + i);
                this.defaultOptions.group.removeControl('issuanceCountry' + i);
                this.defaultOptions.group.removeControl('issueDate' + i);
            }
        }
    }
    onItemChange(values) {
        //this.options.group.controls[this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName].reset();
        if (values && values.selectedObj) {
            const patrn = this.getDataType(values.selectedObj.DATA_TYPE);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], patrn);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], values.selectedObj.FROM_LEN);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXLENGTH, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], values.selectedObj.TO_LEN);
        }
    }
};
PsComplexCifIdTypesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"] }
];
PsComplexCifIdTypesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onIdTypesGetLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    idDetailsComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['idDetailsComp',] }]
};
PsComplexCifIdTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-cif-id-types',
        template: _raw_loader_ps_complex_cif_id_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_cif_id_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]])
], PsComplexCifIdTypesComponent);



/***/ }),

/***/ "NcWP":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [options]=\"defaultOptions\">\n\n  <ps-dropdown-cif-types *ngIf=\"defaultOptions.showCifType\" [options]=\"defaultOptions.cifTypeOptions\"\n    (onPsChange)=\"onChange($event)\">\n  </ps-dropdown-cif-types>\n\n  <div class=\"cifIdTypes\" *ngIf=\"showBG\">\n    <ng-container *ngIf=\"mandatoryIdTypes && mandatoryIdTypes.length > 0 && !showIdDropDown\">\n\n      <ps-complex-id-details #idDetailsComp *ngFor=\"let item of mandatoryIdTypes\" id=\"complex_id_details\"\n        [options]=\"item\">\n      </ps-complex-id-details>\n\n    </ng-container>\n\n\n    <ps-complex-id-details #idDetailsComp\n      *ngIf=\"mandatoryIdTypes.length == 0 && defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions  && defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions.length>0 && !showIdDropDown && !mandatoryIdThere\"\n      id=\"complex_id_details1\" [options]=\"defaultOptions.complexIdDetailsOptions1\" (onPsChange)=\"onItemChange($event)\">\n    </ps-complex-id-details>\n\n\n    <ps-complex-id-details #idDetailsComp\n      *ngIf=\"mandatoryIdTypes.length == 0 && optionalIdTypes.length ==  0 && showIdDropDown\" id=\"complex_id_details2\"\n      [options]=\"defaultOptions.complexIdDetailsOptions\" (onPsChange)=\"onItemChange($event)\">\n    </ps-complex-id-details>\n\n  </div>\n</ps-container-complex>");

/***/ }),

/***/ "zhiz":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWNpZi1pZC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=12-es2015.js.map