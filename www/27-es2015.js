(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "+FaT":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/cash-and-cheque-collection/cash-and-cheque-collection.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNoLWFuZC1jaGVxdWUtY29sbGVjdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Gvut":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/cash-and-cheque-collection/cash-and-cheque-collection.page.ts ***!
  \*************************************************************************************/
/*! exports provided: CashAndChequeCollectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAndChequeCollectionPage", function() { return CashAndChequeCollectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cash_and_cheque_collection_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cash-and-cheque-collection.page.html */ "eMpa");
/* harmony import */ var _cash_and_cheque_collection_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash-and-cheque-collection.page.scss */ "+FaT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component */ "Z6pj");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");















// import { IOptionsPsInputVarcharExposed } from 'src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.interfaces';
let CashAndChequeCollectionPage = class CashAndChequeCollectionPage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(commonProv, loggerP, eventEmitterService, navService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.eventEmitterService = eventEmitterService;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.cashAndChequeCollectionVO = {};
        this.stepperOptions = {
            stepperName: 'cash_and_cheque_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['cash_cheq_collection_step1'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
                group: this.formGroup
            },
            requestObject: this.cashAndChequeCollectionVO
        };
        this.panelOptionStep1 = {
            isExpandable: true,
            labelKey: 'depositor_details_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptionStep2 = {
            isExpandable: true,
            labelKey: 'cash_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep3 = {
            isExpandable: true,
            labelKey: 'deposit_denomination_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep4 = {
            isExpandable: true,
            labelKey: 'cheque_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep5 = {
            isExpandable: true,
            labelKey: 'cheque_attachment_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep6 = {
            isExpandable: true,
            labelKey: 'collection_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptionStep8 = {
            isExpandable: true,
            labelKey: 'attachments_key',
            iconName: 'document',
            expanded: false
        };
        this.requestTypeOptions = {
            group: this.formGroup,
            fcName: 'depositorRequestType' // GHada 04042023 RequestType is a reserved keyword and can't be set as fcname for any field 
        };
        this.cashToggleOptions = {
            labelKey: 'deposit_in_my_account_key',
            placeHolder: 'deposit_in_my_account_key',
            group: this.formGroup,
            fcName: 'isMyAccountDeposit',
            psClass: 'toggleColor'
        };
        this.accountListOptions = {
            labelKey: 'account_key',
            placeHolder: 'select_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.cashAndChequeCollectionVO
        };
        this.accountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'account_key',
            placeHolder: 'enter_account_no_key',
            group: this.formGroup
        };
        this.depositorNameOptions = {
            labelKey: 'depositor_name_key',
            placeHolder: 'depositor_name_key',
            fcName: 'depositorName',
            group: this.formGroup
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
            requestObject: this.cashAndChequeCollectionVO,
            group: this.formGroup
        };
        this.reasonOptions = {
            placeHolder: 'deposit_reason_key',
            fcName: 'depositReason',
            group: this.formGroup,
            labelKey: 'deposit_reason_key',
        };
        this.bankNameOptions = {
            labelKey: 'bank_name_key',
            placeHolder: 'bank_name_key',
            fcName: 'chequeBankName',
            group: this.formGroup
        };
        this.chqSerialNoOptions = {
            fcName: 'chequeSerialNo',
            group: this.formGroup,
            labelKey: 'cheque_serial_no_key',
            placeHolder: 'cheque_serial_no_key'
        };
        this.chequeVersoImageOptions = {
            multiple: true,
            fcName: 'selectedFileData_veroImg',
            labelKey: 'cheque_verso_image_key',
            group: this.formGroup,
            hasOpenCameraBtn: true,
            takePhotoLabelKey: 'cheque_verso_image_key'
        };
        this.chequeRectoImageOptions = {
            multiple: true,
            fcName: 'selectedFileData_rectImg',
            labelKey: 'cheque_recto_image_key',
            group: this.formGroup,
            hasOpenCameraBtn: true,
            takePhotoLabelKey: 'cheque_recto_image_key'
        };
        this.attachmentOptions = {
            multiple: true,
            fcName: 'uploadedFiles',
            group: this.formGroup,
        };
        this.fileCommentOptions = {
            group: this.formGroup,
            fcName: 'chequeFileComment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key'
        };
        this.locOptions = {
            fcName: 'collectionLocation',
            group: this.formGroup,
            labelKey: 'collection_location_key'
        };
        this.collectionDateOptions = {
            labelKey: 'collection_date_key',
            placeHolder: 'collection_date_key',
            fcName: 'collectionDate',
            group: this.formGroup,
        };
        this.addressOptions = {
            group: this.formGroup,
            placeHolder: 'enter_address_details_key',
            labelKey: 'collection_address_details_key',
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
        this.showAddress = false;
        this.navParamsExist = false;
    }
    ngOnInit() {
        this.baseFormGroup = this.formGroup;
        this.navParamsExist = JSON.stringify(this.navService.getAllParams()) !== '{}';
        this.commonProv.copyObject(this.cashAndChequeCollectionVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
        // this.commonProv.copyObject(this.stepperOptions.requestObject, this.cashAndChequeCollectionVO, true, false);
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
        this.denominationGridOptions.columnComponents = [
            {
                columnNameKey: 'denomination_key',
                propertyName: 'denomination',
                component: src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_6__["PsDropdownDenominationComponent"],
                componentOptions: {
                    listOfOptions: []
                },
                componentType: 'select'
            },
            {
                columnNameKey: 'no_of_bills_key',
                propertyName: 'noOfBills',
                component: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_8__["PsKeyinInputComponent"],
                componentOptions: {},
                componentType: 'input'
            }
        ];
        this.enableDepositInMyAccToggle();
        if (this.navService.getAllParams().readOnlypage) {
            this.denominationGridOptions.enableEdit = false;
            this.denominationGridOptions.enableDelete = false;
        }
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
    }
    onChangeLov(values) {
        if (values) {
            this.enableDepositInMyAccToggle();
            if (values.itemValue === '1') {
                this.isCash = true;
                this.cashToggleOptions.labelKey = 'deposit_cash_in_my_account_key';
            }
            else {
                this.isCash = false;
                this.cashToggleOptions.labelKey = 'deposit_cheque_in_my_account_key';
            }
            this.cashAndChequeCollectionVO['depositorRequestTypeId'] = values.itemValue;
        }
    }
    onToggleChange(values) {
        if (values.newValue === false) {
            this.depositCashInMyAcc = false;
            if (this.cashAndChequeCollectionVO[this.accountNumberOptions.fcName] !== undefined) {
                this.formGroup.controls[this.accountNumberOptions.fcName].reset();
            }
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountListOptions.fcName], 0);
            this.formGroup.controls[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].reset();
        }
        else {
            this.depositCashInMyAcc = true;
            if (this.cashAndChequeCollectionVO[this.accountListOptions.fcName] !== undefined) {
                this.formGroup.controls[this.accountListOptions.fcName].reset();
            }
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountListOptions.fcName], 1);
            this.formGroup.controls[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].reset();
        }
    }
    onChangeLoc(values) {
        if (values) {
            this.showAddress = true;
            if (values.itemValue === '1') {
                const address = [this.cifInfo.customerInfoCO.streetDetails, this.cifInfo.customerInfoCO.cityName, this.cifInfo.customerInfoCO.country];
                this.cashAndChequeCollectionVO[this.addressOptions.fcName] = address.filter(x => x !== undefined).join(',');
            }
            else if (values.itemValue === '2') {
                this.formGroup.controls[this.addressOptions.fcName].reset();
            }
        }
    }
    onAccountChange(event) {
        if (event) {
            this.accountCurrency = event.currency;
            if (this.navService.getAllParams() && this.navService.getAllParams().currency === undefined) {
                this.complexExchangeOptions.fromAmountOptions.currency = event.currencyBriefNameEnglish;
                this.complexExchangeOptions.fromAmountOptions.currencyCode = event.currency;
                setTimeout(() => {
                    this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = event.currency;
                }, 1);
            }
            else {
                this.complexExchangeOptions.fromAmountOptions.currencyCode = this.navService.getAllParams().currency;
                setTimeout(() => {
                    this.stepperOptions.requestObject[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = this.navService.getAllParams().currency;
                }, 1);
                this.onDepositeAccountCurrencyChanged(this.navService.getAllParams().currency);
            }
        }
    }
    onDepositeAccountCurrencyChanged(event) {
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
    enableDepositInMyAccToggle() {
        if (!this.navParamsExist) {
            this.cashAndChequeCollectionVO[this.cashToggleOptions.fcName] = 'Y';
            this.depositCashInMyAcc = true;
        }
    }
};
CashAndChequeCollectionPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"] }
];
CashAndChequeCollectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cash-and-cheque-collection',
        template: _raw_loader_cash_and_cheque_collection_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cash_and_cheque_collection_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]])
], CashAndChequeCollectionPage);



/***/ }),

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

/***/ "eMpa":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cash-and-cheque-collection/cash-and-cheque-collection.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptionStep1\" id=\"cash_and_cheque_collection_panel1\">\n      <ps-lov-cash-request-type id=\"requestType\" [options]=\"requestTypeOptions\" (onPsChange)=\"onChangeLov($event)\">\n      </ps-lov-cash-request-type>\n      <ps-select-toggle [id]=\"'cashId'\" [options]=\"cashToggleOptions\" (onPsChange)=\"onToggleChange($event)\"\n        class=\"ps-toggle-acc-open fixed-maturity-account-toggle\">\n      </ps-select-toggle>\n      <ps-lookup-own-accounts id=\"'account'+ id\" [options]=\"accountListOptions\"\n        (onAccountChange)=\"onAccountChange($event)\" *ngIf=\"depositCashInMyAcc\"></ps-lookup-own-accounts>\n\n      <div *ngIf=\"!depositCashInMyAcc && depositCashInMyAcc!== undefined\">\n        <ps-input-account-number [options]=\"accountNumberOptions\">\n        </ps-input-account-number>\n        <ps-input-varchar id=\"depositorName\" [options]=\"depositorNameOptions\"></ps-input-varchar>\n      </div>\n\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"isCash\" [options]=\"panelOptionStep2\" id=\"cash_and_cheque_collection_panel2\">\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onFromCurrencyChanged)=\"onDepositeAccountCurrencyChanged($event)\">\n      </ps-complex-exchange>\n      <ps-container-panel [options]=\"panelOptionStep3\" id=\"cash_and_cheque_collection_panel3\">\n        <ps-ag-grid [options]=\"denominationGridOptions\"></ps-ag-grid>\n      </ps-container-panel>\n      <ps-input-varchar id=\"reason\" [options]=\"reasonOptions\"></ps-input-varchar>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"!isCash && isCash !== undefined\" [options]=\"panelOptionStep4\"\n      id=\"cash_and_cheque_collection_panel5\">\n      <ps-input-varchar id=\"bankName\" [options]=\"bankNameOptions\"></ps-input-varchar>\n      <ps-input-numeric id=\"chqSerialNo\" [options]=\"chqSerialNoOptions\">\n      </ps-input-numeric>\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onFromCurrencyChanged)=\"onDepositeAccountCurrencyChanged($event)\"></ps-complex-exchange>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"!isCash && isCash !== undefined\" [options]=\"panelOptionStep5\"\n      id=\"cash_and_cheque_collection_panel6\">\n      <ps-file-upload-bs id=\"chqVersoImage\" [options]=\"chequeVersoImageOptions\"></ps-file-upload-bs>\n      <ps-file-upload-bs id=\"chqRectoImage\" [options]=\"chequeRectoImageOptions\"></ps-file-upload-bs>\n      <ps-input-free-text id=\"fileComment\" [options]=\"fileCommentOptions\"></ps-input-free-text>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep6\" id=\"cash_and_cheque_collection_panel7\">\n      <ps-lov-address id=\"collectionLoc\" [options]='locOptions' (onPsChange)='onChangeLoc($event)'></ps-lov-address>\n      <ps-input-free-text *ngIf=\"showAddress\" id=\"address\" [options]=\"addressOptions\">\n      </ps-input-free-text>\n      <ps-date-day-month-year-future id=\"collectionDate\" [options]=\"collectionDateOptions\">\n      </ps-date-day-month-year-future>\n      <ps-complex-time-range [options]='rangeOptions'></ps-complex-time-range>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep8\" id=\"cash_and_cheque_collection_panel8\">\n      <ps-file-upload-bs id=\"attachment\" [options]=\"attachmentOptions\"></ps-file-upload-bs>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

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

/***/ })

}]);
//# sourceMappingURL=27-es2015.js.map