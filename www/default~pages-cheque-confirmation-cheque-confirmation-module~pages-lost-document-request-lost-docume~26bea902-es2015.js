(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cheque-confirmation-cheque-confirmation-module~pages-lost-document-request-lost-docume~26bea902"],{

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

/***/ "BcCD":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponent", function() { return PsDateDayMonthYearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-date-day-month-year.component.html */ "Tlgk");
/* harmony import */ var _ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-date-day-month-year.component.scss */ "Lb7B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-date/ps-keyin-date.component */ "JpVU");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/Event/event.service */ "r40+");











let PsDateDayMonthYearComponent = class PsDateDayMonthYearComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__["PsKeyinDateComponent"] {
    constructor(commonProv, loggerP, events) {
        super(commonProv, loggerP, events);
        this.commonProv = commonProv;
        this.dateOptions = {};
        this.omniPull = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].injectionHandler(_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]);
    }
    ngOnInit() {
        this.commonProv.copyObject(this.dateOptions, this.options, false);
        const param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].preLoginResponse).parameters;
        this.dateOptions.displayFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
        this.dateOptions.pickerFormat = this.dateOptions.displayFormat;
    }
    ngOnChanges() {
        if (this.options && this.options.min) {
            this.dateOptions.min = this.options.min;
        }
        if (this.options && this.options.max) {
            this.dateOptions.max = this.options.max;
        }
    }
    dateChanged(value) {
        this.onPsChange.emit(value);
    }
};
PsDateDayMonthYearComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"] }
];
PsDateDayMonthYearComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDateDayMonthYearComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year',
        template: _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]])
], PsDateDayMonthYearComponent);



/***/ }),

/***/ "Dzb9":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PsLookupChequebooksComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupChequebooksComponentModule", function() { return PsLookupChequebooksComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_lookup_chequebooks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-lookup-chequebooks.component */ "HKxJ");






let PsLookupChequebooksComponentModule = class PsLookupChequebooksComponentModule {
};
PsLookupChequebooksComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_chequebooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupChequebooksComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"],
        ],
        exports: [
            _ps_lookup_chequebooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupChequebooksComponent"]
        ],
        entryComponents: [
            _ps_lookup_chequebooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupChequebooksComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupChequebooksComponentModule);



/***/ }),

/***/ "EBce":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLXBhc3QuY29tcG9uZW50LnNjc3MifQ== */");

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

/***/ "HKxJ":
/*!********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: PsLookupChequebooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupChequebooksComponent", function() { return PsLookupChequebooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_chequebooks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-chequebooks.component.html */ "MLGA");
/* harmony import */ var _ps_lookup_chequebooks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-chequebooks.component.scss */ "hRRA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component */ "Ft9U");











let PsLookupChequebooksComponent = class PsLookupChequebooksComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, navService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_chequebook_found_key'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onChequeBookChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.chequebooksListRequest = {};
        this.chequebookOptions = [];
        this.showList = false;
    }
    ngOnInit() {
        this.loadChequeBooks();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192
        this.complexLookupOptions.requestObject = this.options.requestObject;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component__WEBPACK_IMPORTED_MODULE_10__["PsOptionChequebookComponent"];
        }
    }
    /**
     * populating chequebook list - fetching from server
     */
    loadChequeBooks() {
        this.chequebooksListRequest = {};
        this.returnChequeBookList(this.chequebooksListRequest);
    }
    /**
     * fetching Local Benificiaries from server
     * @param requestData IOmniBeneficiaryRequest
     */
    returnChequeBookList(chequebooksListRequest) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnChequebooksList(chequebooksListRequest).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While chequebook list in PsLookupChequebooksComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populateChequebooks(result.gridModel);
            }
            else {
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    /**
     * customizing chequebook object
     * @param chequeBooks
     */
    populateChequebooks(chequeBooks) {
        const chequeBooklist = [];
        for (const iterator of chequeBooks) {
            const chequeBook = {
                fromNumber: iterator.fromNumber,
                printingLocation: iterator.printingLocation,
                chequebookCode: iterator.chequebookCode,
                chequebookStatus: iterator.chequebookStatus,
                toNumber: iterator.toNumber,
                cif: iterator.cif,
                additionalRef: iterator.additionalRef,
                accGl: iterator.accGl,
                currency: iterator.currency,
                branch: iterator.branch,
                serialNo: iterator.serialNo,
                chequeCode: iterator.chequeCode,
                lookupKey: iterator.chequebookCode,
                chequebookStatusDesc: iterator.chequebookStatusDesc,
                previewProperty: 'chequeCode',
                status: iterator.chequebookStatus,
                statusCode: iterator.chequebookStatusCode
            };
            chequeBooklist.push(chequeBook);
        }
        return chequeBooklist;
    }
    onChangeItem(event) {
        this.logger.log('cheq #####', event);
        this.onChequeBookChange.emit(event);
    }
};
PsLookupChequebooksComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_8__["PsNavigatorService"] }
];
PsLookupChequebooksComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onChequeBookChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLookupChequebooksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-chequebooks',
        template: _raw_loader_ps_lookup_chequebooks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_chequebooks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_8__["PsNavigatorService"]])
], PsLookupChequebooksComponent);



/***/ }),

/***/ "Lb7B":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "MLGA":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "Tlgk":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-date [options]=\"dateOptions\" [id]=\"id\" class=\"ps-day-month-year\" (onPsChange)=\"dateChanged($event)\" (onPsInit)=\"this.onInit($event)\"></ps-keyin-date>");

/***/ }),

/***/ "hRRA":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtY2hlcXVlYm9va3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jSSe":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponentModule", function() { return PsDateDayMonthYearComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-date-day-month-year.component */ "BcCD");





let PsDateDayMonthYearComponentModule = class PsDateDayMonthYearComponentModule {
};
PsDateDayMonthYearComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]
        ],
        exports: [
            _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]
        ],
        entryComponents: [
            _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDateDayMonthYearComponentModule);



/***/ }),

/***/ "jmNg":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-date-day-month-year [options]=\"dateDayMonthYearOptions\" [id]=\"id\" (onPsChange)=\"onChange($event)\">\n</ps-date-day-month-year>");

/***/ }),

/***/ "ngfJ":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearPastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponent", function() { return PsDateDayMonthYearPastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-date-day-month-year-past.component.html */ "jmNg");
/* harmony import */ var _ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-date-day-month-year-past.component.scss */ "EBce");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ps-date-day-month-year.component */ "BcCD");
/* harmony import */ var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/Event/event.service */ "r40+");








let PsDateDayMonthYearPastComponent = class PsDateDayMonthYearPastComponent extends _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__["PsDateDayMonthYearComponent"] {
    constructor(commonProv, loggerP, events) {
        super(commonProv, loggerP, events);
        this.commonProv = commonProv;
        this.dateDayMonthYearOptions = {
            max: new Date()
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.dateDayMonthYearOptions, this.options, false);
    }
    superWriteValue(val) {
        super.writeValue(val);
    }
};
PsDateDayMonthYearPastComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"] }
];
PsDateDayMonthYearPastComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDateDayMonthYearPastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year-past',
        template: _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]])
], PsDateDayMonthYearPastComponent);



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

/***/ }),

/***/ "vRU4":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearPastComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponentModule", function() { return PsDateDayMonthYearPastComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-date-day-month-year.component.module */ "jSSe");
/* harmony import */ var _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-date-day-month-year-past.component */ "ngfJ");






let PsDateDayMonthYearPastComponentModule = class PsDateDayMonthYearPastComponentModule {
};
PsDateDayMonthYearPastComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"],
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponentModule"]
        ],
        exports: [
            _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]
        ],
        entryComponents: [
            _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDateDayMonthYearPastComponentModule);



/***/ })

}]);
//# sourceMappingURL=default~pages-cheque-confirmation-cheque-confirmation-module~pages-lost-document-request-lost-docume~26bea902-es2015.js.map