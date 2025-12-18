(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "Z6pj":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsDropdownDenominationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownDenominationComponent", function() { return PsDropdownDenominationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_denomination_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-denomination.component.html */ "ozAa");
/* harmony import */ var _ps_dropdown_denomination_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-denomination.component.scss */ "ptKa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








let PsDropdownDenominationComponent = class PsDropdownDenominationComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.omniPull = omniPull;
        this.defaultSelectOptions = {
            labelKey: '',
            placeHolder: 'select_denomination_key'
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
        this.getDenomination();
    }
    getDenomination() {
        const paramData = {};
        this.omniPull.returnDenominationList(paramData).then((result) => {
            this.defaultSelectOptions.listOfOptions = [];
            if (result && result.gridModel != null && result.gridModel.length > 0) {
                for (const item of result.gridModel) {
                    const acctype = {
                        itemValue: item.value,
                        description: item.description,
                        selectedObj: item
                    };
                    this.defaultSelectOptions.listOfOptions.push(acctype);
                }
            }
            else {
                this.logger.warn(result, 'empty response');
            }
        }).catch((error) => { });
    }
    onChange(values) {
        this.loggerP.log('onCategory' + values);
        this.onPsChange.emit(values);
    }
};
PsDropdownDenominationComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsDropdownDenominationComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownDenominationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-denomination',
        template: _raw_loader_ps_dropdown_denomination_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_denomination_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsDropdownDenominationComponent);



/***/ }),

/***/ "gYxe":
/*!*********************************************************************!*\
  !*** ./src/app/pages/bulk-cash-request/bulk-cash-request.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWxrLWNhc2gtcmVxdWVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "ozAa":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChange($event)\"    (onPsInit)=\"this.onInit($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "ptKa":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1kZW5vbWluYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "sXM2":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bulk-cash-request/bulk-cash-request.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n    <ps-container-panel [options]=\"panelOptionStep1\" id=\"bulk_cash_request_panel1\">\n      <ps-lookup-own-accounts id=\"'fromAccount'\" [options]=\"fromAccOptions\"\n        (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onFromCurrencyChanged)=\"onFromCurrencyChanged($event)\"></ps-complex-exchange>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep5\" id=\"bulk_cash_request_panel5\">\n      <ps-ag-grid [options]=\"denominationGridOptions\"></ps-ag-grid>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep2\" id=\"bulk_cash_request_panel2\">\n      <ps-lov-mode-of-collection id=\"modeOfCollection\" [options]='collectionOptions'\n        (onPsChange)=\"onModeOfCollectioneLov($event)\"></ps-lov-mode-of-collection>\n      <ps-lov-address id=\"address\" [options]='addressOptions' (onPsChange)='onAddressChanged($event)'>\n      </ps-lov-address>\n      <ps-input-free-text *ngIf='showAddress' id=\"addressDetails\" [options]=\"addressDetailsOptions\">\n      </ps-input-free-text>\n\n      <ps-date-day-month-year-future id=\"deliveryDate\" [options]=\"deliveryDateOptions\">\n      </ps-date-day-month-year-future>\n      <ps-complex-time-range [options]='rangeOptions'></ps-complex-time-range>\n      <ps-input-varchar id=\"keyin_textarea\" [options]=\"addCommentsOptions\">\n      </ps-input-varchar>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep3\" id=\"bulk_cash_request_panel3\">\n\n      <ps-select-toggle [id]=\"'receivingAmountToggle'\" [options]=\"toggleOptions\"\n        (onPsChange)=\"onReceivingToggleChange($event)\" class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n      <div *ngIf=\"showCollectorDetails\">\n        <ps-input-free-text id=\"receiverName\" [options]=\"receiverNameOptions\"></ps-input-free-text>\n\n        <ps-complex-id-details id=\"complex_id_details1\" [options]=\"complexIdDetailsOptions\"\n          (onPsChange)=\"onItemChange($event)\">\n        </ps-complex-id-details>\n      </div>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep4\" id=\"bulk_cash_request_panel4\">\n      <ps-file-upload-bs id=\"ps-complex-file-upload\" [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"bulk_cash_request_panel6\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "tevm":
/*!*******************************************************************!*\
  !*** ./src/app/pages/bulk-cash-request/bulk-cash-request.page.ts ***!
  \*******************************************************************/
/*! exports provided: BulkCashRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkCashRequestPage", function() { return BulkCashRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bulk_cash_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bulk-cash-request.page.html */ "sXM2");
/* harmony import */ var _bulk_cash_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk-cash-request.page.scss */ "gYxe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component */ "Z6pj");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");



















let BulkCashRequestPage = class BulkCashRequestPage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_17__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, datePipe, eventEmitterService, commonService, navService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.datePipe = datePipe;
        this.eventEmitterService = eventEmitterService;
        this.commonService = commonService;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.bulkCashRequestVO = {};
        this.bulkCashRequestType = '3';
        this.stepperOptions = {
            stepperName: 'bulk_cash-request_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['bulk_cash_request_step1', 'bulk_cash_request_step2'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_18__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
                group: this.formGroup
            },
            requestObject: this.bulkCashRequestVO
        };
        this.panelOptionStep1 = {
            isExpandable: true,
            labelKey: 'bulk_cash_request_details_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptionStep2 = {
            isExpandable: true,
            labelKey: 'collection_delivery_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep3 = {
            isExpandable: true,
            labelKey: 'receiver_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep4 = {
            isExpandable: true,
            labelKey: 'attachments_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep5 = {
            isExpandable: true,
            labelKey: 'preferred_denomination_key',
            iconName: 'document',
            expanded: false
        };
        this.denominationGridOptions = {
            fcName: 'denomination',
            group: this.formGroup,
            gridOptions: {
                defaultColDef: {
                    flex: 1,
                    minWidth: 150,
                    sortable: true,
                    resizable: true,
                },
                rowSelection: 'multiple',
                applyPagination: false,
                paginationPageSize: 5,
                cacheBlockSize: 1,
                cacheOverflowSize: 10,
                maxConcurrentDatasourceRequests: 2,
                infiniteInitialRowCount: 500,
                maxBlocksInCache: 200
            },
            enableEdit: true,
            enableDelete: true
        };
        this.fromAccOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.bulkCashRequestVO
        };
        this.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'currency_key',
                    labelKey: 'exchange_currency_key',
                    fcName: 'currency',
                    group: this.formGroup
                },
                amountOptions: {
                    labelKey: 'amount_key',
                    placeHolder: 'enter_amount_key',
                    fcName: 'transactionAmount',
                    group: this.formGroup,
                    decimalPoints: 2
                }
            },
            toAmountOptions: {
                currency: '',
                currenciesOptions: {
                    placeHolder: 'currency_key',
                    labelKey: 'currency_key',
                    fcName: 'toCurrency',
                    group: this.formGroup
                },
                amountOptions: {
                    labelKey: 'exchange_amount_key',
                    placeHolder: 'enter_amount_key',
                    fcName: 'toAmount',
                    group: this.formGroup,
                    decimalPoints: 2
                }
            },
            requestObject: this.bulkCashRequestVO,
            group: this.formGroup
        };
        this.addCommentsOptions = {
            labelKey: 'additional_comments_key',
            placeHolder: 'enter_additional_comments_key',
            fcName: 'additionalComments',
            group: this.formGroup
        };
        this.deliveryDateOptions = {
            labelKey: 'delivery_date_key',
            placeHolder: 'select_delivery_date_key',
            fcName: 'collectionDate',
            group: this.formGroup,
        };
        this.collectionOptions = {
            fcName: 'collectionMode',
            group: this.formGroup
        };
        this.addressOptions = {
            fcName: 'collectionLocation',
            group: this.formGroup
        };
        this.toggleOptions = {
            labelKey: 'i_will_be_collecting_receiving_personally_the_amount_key',
            group: this.formGroup,
            fcName: 'isAmountCollectedByCif',
            psClass: 'toggleColor',
        };
        this.receiverNameOptions = {
            labelKey: 'collector_or_receiver_name_key',
            placeHolder: 'enter_name_key',
            fcName: 'collectorName',
            group: this.formGroup
        };
        this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
                fcName: 'idType',
                group: this.formGroup,
            },
            idNumberOptions: {
                labelKey: 'id_number_key',
                placeHolder: 'enter_id_number_key',
                fcName: 'idNumber',
                group: this.formGroup
            },
            dateExpiryOptions: {
                labelKey: 'expiry_date_key',
                placeHolder: 'enter_expiry_date_key',
                fcName: 'idExpiryDate',
                group: this.formGroup,
            },
            countriesOptions: {
                placeHolder: 'country_of_issuance_key',
                labelKey: 'country_of_issuance_key',
                fcName: 'idCountry',
                group: this.formGroup,
            },
            issueDateOptions: {
                labelKey: 'issue_date_key',
                placeHolder: 'issue_date_key',
                fcName: 'idIssueDate',
                group: this.formGroup
            }
        };
        this.fileUploadOptions = {
            multiple: true,
            fcName: 'uploadedFiles',
            group: this.formGroup
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'collection_delivery_branch_key',
            iconName: 'document',
            expanded: true
        };
        this.addressDetailsOptions = {
            group: this.formGroup,
            placeHolder: 'enter_address_details_key',
            labelKey: 'address_details_key',
            fcName: 'collectionLocationDesc',
        };
        this.rangeOptions = {
            fromTime: {
                fcName: 'deliveryTimeFrom',
                labelKey: 'from_time_key',
                placeHolder: 'from_time_key',
                group: this.formGroup
            },
            toTime: {
                fcName: 'deliveryTimeTo',
                labelKey: 'to_time_key',
                placeHolder: 'to_time_key',
                group: this.formGroup
            },
            group: this.formGroup
        };
        this.showBranch = false;
        this.showAddress = false;
        this.showCollectorDetails = false;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.commonProv.copyObject(this.bulkCashRequestVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
        // PBSDB230029 -  Changed By Omar Talaat,Cloned By Makki Jira #363 To set inital Value for request Type to makr the request as Cash request.
        this.bulkCashRequestVO.depositorRequestType = this.bulkCashRequestType;
        // this.commonProv.copyObject(this.stepperOptions.requestObject, this.bulkCashRequestVO, true, false);
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].USERINFO);
        this.mapAtmBranchesOptions = {
            group: this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
                labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AcntOpenBranchesMatAcc,
            requestVO: this.bulkCashRequestVO
        };
        this.denominationGridOptions.columnComponents = [
            {
                columnNameKey: 'denomination_key',
                propertyName: 'denomination',
                component: src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_7__["PsDropdownDenominationComponent"],
                componentOptions: {
                    listOfOptions: []
                },
                componentType: 'select'
            }, ,
            {
                columnNameKey: 'no_of_bills_key',
                propertyName: 'noOfBills',
                component: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_11__["PsKeyinInputComponent"],
                componentOptions: {},
                componentType: 'input'
            }
        ];
        this.bulkCashRequestVO[this.toggleOptions.fcName] = true;
        if (this.navService.getAllParams().readOnlypage) {
            this.denominationGridOptions.enableEdit = false;
            this.denominationGridOptions.enableDelete = false;
        }
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        if (!this.bulkCashRequestVO.collectionMode) {
            this.adjustBranchControlCust(0);
        }
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.addressOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.addCommentsOptions.fcName], 0);
        //moved by ghada, tp tp1478243, for fixing the issue of 'to currency'being mandatory while it shouldn'n't be for being readonly
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
    }
    onSelectBranch($event) {
        if ($event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.bulkCashRequestVO);
        }
    }
    onFromAccountChange(account) {
        if (account) {
            this.accountCurrency = account.currency;
            if (this.bulkCashRequestVO.currency === undefined) {
                this.complexExchangeOptions.fromAmountOptions.currency = account.currencyBriefNameEnglish;
                this.complexExchangeOptions.fromAmountOptions.currencyCode = account.currency;
                setTimeout(() => {
                    this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = account.currency;
                }, 1);
            }
            else {
                this.complexExchangeOptions.fromAmountOptions.currencyCode = this.bulkCashRequestVO.currency;
                setTimeout(() => {
                    this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = this.bulkCashRequestVO.currency;
                }, 1);
                this.onFromCurrencyChanged(this.bulkCashRequestVO.currency);
            }
        }
    }
    onModeOfCollectioneLov(event) {
        if (event) {
            if (event.itemValue === '1') {
                //this.showBranch = true;
                this.adjustBranchControlCust(1);
            }
            else {
                //this.showBranch = false;
                this.adjustBranchControlCust(0);
            }
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.addressOptions.fcName], event.itemValue === '1' ? 0 : 1);
        }
    }
    onAddressChanged(values) {
        if (values) {
            this.showAddress = true;
            if (values.itemValue === '1') {
                const address = [this.cifInfo.customerInfoCO.streetDetails, this.cifInfo.customerInfoCO.cityName, this.cifInfo.customerInfoCO.country];
                this.bulkCashRequestVO[this.addressDetailsOptions.fcName] = address.filter(x => x !== undefined).join(',');
            }
            else if (values.itemValue === '2') {
                this.formGroup.controls[this.addressDetailsOptions.fcName].reset();
            }
        }
    }
    onReceivingToggleChange(event) {
        if (event && event.newValue === false) {
            this.showCollectorDetails = true;
        }
        else {
            this.showCollectorDetails = false;
        }
    }
    onItemChange(type) {
    }
    onFromCurrencyChanged(event) {
        event = event ? (event.itemValue ? event.itemValue : event) : undefined;
        this.accountCurrency = this.accountCurrency === undefined ? event : this.accountCurrency;
        if (event) {
            if (this.accountCurrency !== undefined && event !== this.accountCurrency) {
                this.complexExchangeOptions.toAmountOptions.currencyCode = this.accountCurrency;
                setTimeout(() => {
                    this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = this.accountCurrency;
                }, 1);
            }
        }
    }
    adjustBranchControlCust(visibility) {
        this.commonService.branchSelectionAndMapControl(visibility, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: this.mapAtmBranchesOptions.fcName }], true);
        this.commonService.branchSelectionAndMapControl(visibility, [{ fcName: 'bulk_cash_request_panel6' }]);
    }
};
BulkCashRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"] }
];
BulkCashRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bulk-cash-request',
        template: _raw_loader_bulk_cash_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bulk_cash_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"]])
], BulkCashRequestPage);



/***/ })

}]);
//# sourceMappingURL=26-es2015.js.map