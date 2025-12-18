(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "NmkT":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility/ps-option-facility.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div class=\"ps-options-facility\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let item of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\" [options]=\"getContainerLookUpOptions(item)\"\n        [itemCard]=\"item\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "PCz6":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility/ps-option-facility.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PsOptionFacilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOptionFacilityComponent", function() { return PsOptionFacilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_option_facility_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-option-facility.component.html */ "NmkT");
/* harmony import */ var _ps_option_facility_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-option-facility.component.scss */ "p25+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");









let PsOptionFacilityComponent = class PsOptionFacilityComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_8__["PsTemplateListPage"] {
    constructor(commonProv, cdRef) {
        super();
        this.cdRef = cdRef;
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.containerLookUpOptions = {};
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.showSingleAccount = false;
        this.requestMap = new Map();
        this.editRequestMap = new Map();
    }
    ngOnInit() {
        var _a;
        super.init();
        this.populateHeaderValueMap();
        this.userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO);
        this.tradeFinSec = (_a = this.userInformation) === null || _a === void 0 ? void 0 : _a.businessProfiles.find((i) => i.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].TRADE_FIN_OPER_ID);
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
    }
    getContainerLookUpOptions(item) {
        var _a, _b;
        const lookupDetails = {};
        lookupDetails.currencyDescription = 'currencyBriefName';
        lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.balanceMapping = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID !== src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].MY_FACILITIES_OPER_ID ? this.balanceMapping() : null;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        //lookupDetails.showInitialCardValues = 6; // added to show all card values
        lookupDetails.itemList = this.options.itemList;
        if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].MY_FACILITIES_OPER_ID && item.facilityStatus === 'A') {
            lookupDetails.actionDetailsOptions = [
                {
                    id: 'facility_statement_key',
                    label: 'facility_statement_key',
                    actionHyperlink: {
                        iconOptions: {
                            iconName: 'document',
                            labelOptions: {
                                labelKey: 'facility_statement_key'
                            }
                        },
                        route: 'facility-statement',
                        pageOptions: {
                            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].FACILITY_STATEMENT_OPER_ID,
                            iconName: 'edit1',
                            title: 'facility_statement_key'
                        },
                        navigationOptions: {
                            queryParams: {},
                        },
                    }
                },
                {
                    id: 'settlement_schedule_key',
                    label: 'settlement_schedule_key',
                    actionHyperlink: {
                        iconOptions: {
                            iconName: 'document',
                            labelOptions: {
                                labelKey: 'settlement_schedule_key'
                            }
                        },
                        route: 'repayment-schedule-report',
                        pageOptions: {
                            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].SETTLEMENT_SCHEDULE_OPER_ID,
                            iconName: 'document',
                            title: 'settlement_schedule_key'
                        },
                        navigationOptions: {
                            queryParams: {},
                        },
                    }
                },
                ((((_a = this.tradeFinSec) === null || _a === void 0 ? void 0 : _a.children.some((i) => i.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LC_REQ_OPER_ID)) && item.isEligibleLC) ? {
                    label: 'request_new_lc_key',
                    actionHyperlink: {
                        iconOptions: {
                            iconName: 'edit1',
                            labelOptions: {
                                labelKey: 'request_new_lc_key'
                            }
                        },
                        route: 'letter-of-credit-request',
                        pageOptions: {
                            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LC_REQ_OPER_ID,
                            iconName: 'document',
                            title: 'request_new_lc_key'
                        },
                        navigationOptions: {
                            queryParams: {
                                disableCustomComponents: true,
                                settlementMethod: 'I',
                                facilityDetails: item.facilityNumber,
                                facilityDetails_lookupKey: item.facilityNumber
                            },
                        },
                    }
                } : {}),
                ((((_b = this.tradeFinSec) === null || _b === void 0 ? void 0 : _b.children.some((i) => i.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LG_REQ_OPER_ID)) && item.isEligibleLG) ? {
                    label: 'request_new_lg_key',
                    actionHyperlink: {
                        iconOptions: {
                            iconName: 'edit1',
                            labelOptions: {
                                labelKey: 'request_new_lg_key'
                            }
                        },
                        route: 'letter-of-guarantee',
                        pageOptions: {
                            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LG_REQ_OPER_ID,
                            iconName: 'document',
                            title: 'request_new_lg_key'
                        },
                        navigationOptions: {
                            queryParams: {
                                disableCustomComponents: true,
                                facilityDetails: item.facilityNumber,
                                facilityDetails_lookupKey: item.facilityNumber
                            },
                        },
                    }
                } : {})
            ];
        }
        this.containerLookUpOptions.statementOptions = {
            buttonIcon: 'list-box',
            redirectUrl: 'facility-statement-report'
        };
        return lookupDetails;
    }
    populateHeaderValueMap() {
        let amountMap = {};
        let expiryDateMap = {};
        let utilizedAmountMap = {};
        let unutilizedAmountMap = {};
        let branchNameMap = {};
        let outstandingMap = {};
        let facilityTypeMap = {};
        let facilityTypeDescMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        let statusDescMap = {};
        amountMap = {
            key: 'facilityAmount',
            value: '0.0'
        };
        facilityTypeMap = {
            key: 'facilityType',
            value: '',
            isDetailOption: false
        };
        facilityTypeDescMap = {
            key: 'facilityTypeDesc',
            value: '',
            isDetailOption: false
        };
        utilizedAmountMap = {
            key: 'utilizedAmount',
            value: ''
        };
        unutilizedAmountMap = {
            key: 'unutilizedAmount',
            value: '0.0'
        };
        outstandingMap = {
            key: 'outstanding',
            value: '',
            isDetailOption: false
        };
        expiryDateMap = {
            key: 'expiryDate',
            value: '--/--/----',
            isDetailOption: false
        };
        branchNameMap = {
            key: 'branchName',
            value: '',
            showMappingOnNoValue: true
        };
        statusDescMap = {
            key: 'statusDesc',
            value: '',
            showMappingOnNoValue: true
        };
        headerTitleMap = {
            key: 'title',
            value: 'facilityNumber',
            isEdit: false,
            formGroupMap: {
                placeHolder: 'facilityNumber',
                fcName: 'facilityNoTitle',
            }
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'revolvingOneOffDesc',
            isEdit: false,
        };
        this.labelValuesMap.set('facility_amount_key', amountMap);
        this.labelValuesMap.set('utilized_key', utilizedAmountMap);
        this.labelValuesMap.set('unutilized_key', unutilizedAmountMap);
        if (this.options.isFacilityActive) {
            this.labelValuesMap.set('outstanding_key', outstandingMap);
        }
        this.labelValuesMap.set('type_key', facilityTypeDescMap);
        this.labelValuesMap.set('expiry_date_key', expiryDateMap);
        this.labelValuesMap.set('branch_key', branchNameMap);
        this.labelValuesMap.set('status_key', statusDescMap);
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
    }
    updateCard(facility) {
        if (facility && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === facility);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
    balanceMapping() {
        const balanceMappingList = [
            {
                key: 'facility_amount_key',
                value: 'facilityAmount'
            },
            {
                key: 'unutilized_amount_key',
                value: 'unutilizedAmount'
            }
        ];
        return balanceMappingList;
    }
    ngAfterViewChecked() {
        this.cdRef.markForCheck();
        // if (this.options && (this.options.itemList === null || this.options.itemList === undefined)) {
        //   this.options.itemList = this.options.listOfOptions;
        //   this.showSingleAccount = false;
        // } else if (this.options && this.options.itemList && this.options.itemList.length === 1 && this.showSingleAccount === false) {
        //   this.options.itemList = this.options.listOfOptions;
        // } else if (this.options && this.options.showItemPopUp === undefined) {
        //   this.options.itemList = this.options.listOfOptions;
        // }
    }
};
PsOptionFacilityComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PsOptionFacilityComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsOptionFacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-option-facility',
        template: _raw_loader_ps_option_facility_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_option_facility_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PsOptionFacilityComponent);



/***/ }),

/***/ "p25+":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility/ps-option-facility.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1vcHRpb24tZmFjaWxpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=14-es2015.js.map