(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "9K5J":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PsPassbookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsPassbookListComponent", function() { return PsPassbookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_passbook_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-passbook-list.component.html */ "wkFC");
/* harmony import */ var _ps_passbook_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-passbook-list.component.scss */ "ezsQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");





let PsPassbookListComponent = class PsPassbookListComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"] {
    constructor(cdRef) {
        super();
        this.cdRef = cdRef;
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.showSingleAccount = false;
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.cardLabelOptions = {
            labelKey: 'passbook_list_not_available'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        super.init();
        this.populateHeaderValueMap();
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        if (this.options.cardAction === null || this.options.cardAction === undefined) {
            this.options.cardAction = false;
        }
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
        if (this.options && this.options.noCardsLabel) {
            this.cardLabelOptions.labelKey = this.options.noCardsLabel;
        }
    }
    getContainerLookUpOptions(val) {
        return this.prepareLookUp(val);
    }
    prepareLookUp(card) {
        const lookupDetails = {};
        lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.translateSubTitle = this.options.translate;
        lookupDetails.pageData = {};
        lookupDetails.actionDetailsOptions = [];
        lookupDetails.statementOptions = {};
        return lookupDetails;
    }
    populateHeaderValueMap() {
        let accountNumberMap = {};
        let currencyMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        accountNumberMap = {
            key: 'accGl',
            value: '--- --- --- ---',
            isEdit: false,
        };
        currencyMap = {
            key: 'currency',
            value: '---',
            isEdit: false,
        };
        headerTitleMap = {
            key: 'title',
            value: 'additionalRef',
            isEdit: false,
            formGroupMap: {
                placeHolder: 'enter_passbook_type',
                fcName: 'additionalRef',
            }
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'passbookCode',
            isEdit: true,
            formGroupMap: {
                placeHolder: 'enter_passbookCode',
                fcName: 'passbookCode',
            }
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('account_key', accountNumberMap);
        this.labelValuesMap.set('currency_key', currencyMap);
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
    }
    updateCard(card) {
        if (card && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === card);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngAfterViewChecked() {
        this.cdRef.markForCheck();
    }
};
PsPassbookListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PsPassbookListComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsPassbookListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-passbook-list',
        template: _raw_loader_ps_passbook_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_passbook_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PsPassbookListComponent);



/***/ }),

/***/ "ANVv":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lost-document-request/lost-document-request.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"lostDocumentPanelOptions\" id=\"local_benef_panel\">\n            <ps-dropdown-document-types id=\"lost_document_types\" [options]=\"lostDocumentTypesOptions\" (onPsChange)=\"onDocTypeChange($event)\"></ps-dropdown-document-types>\n            <ps-lookup-chequebooks [options]=\"chequeBookLookupOptions\" (onChequeBookChange)=\"onLookupChange($event)\"></ps-lookup-chequebooks>\n            <ps-lov-card-types [options]=\"cardsLookupOptiops\" (onPsChange)=\"onChange($event)\">\n            </ps-lov-card-types>\n            <ps-lookup-debit-cards *ngIf=\"showDebitCardlookup\" [options]=\"debitCardsLookupOptiops\" (onDebitCardChange)=\"onLookupChange($event)\"></ps-lookup-debit-cards>\n            <ps-lookup-credit-cards *ngIf=\"showCreditCardlookup\" [options]=\"creditCardsLookupOptiops\" (onCreditCardChange)=\"onLookupChange($event)\">\n            </ps-lookup-credit-cards>\n            <ps-lookup-passbooks *ngIf=\"showPassbookslookup\" [options]=\"passbooksLookupOptions\" (onPassbookChange)=\"onLookupChange($event)\"></ps-lookup-passbooks>\n            <ps-input-numeric [options]=\"documentNumberOptions\"></ps-input-numeric>\n            <ps-input-numeric [options]=\"fromDocumentNumberOptions\"></ps-input-numeric>\n            <ps-input-numeric [options]=\"toDocumentNumberOptions\"></ps-input-numeric>\n            <ps-input-varchar [options]=\"passcodeCommentOptions\"></ps-input-varchar>\n            <ps-dropdown-core-reasons id=\"keyin_select_dropdown\" [options]=\"stopReasonsOptions\">\n            </ps-dropdown-core-reasons>\n            <ps-input-free-text id=\"input_free_text\" [options]=\"briefExplanationOptions\">\n            </ps-input-free-text>\n            <ps-complex-amount [hidden]=\"isCurrAmountHidden\" [options]=\"complexChargesOptions\"></ps-complex-amount>\n        </ps-container-panel>\n    </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "RhpE":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/lost-document-request/lost-document-request.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3N0LWRvY3VtZW50LXJlcXVlc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "XxTl":
/*!***************************************************************************!*\
  !*** ./src/app/pages/lost-document-request/lost-document-request.page.ts ***!
  \***************************************************************************/
/*! exports provided: LostDocumentRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostDocumentRequestPage", function() { return LostDocumentRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lost_document_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lost-document-request.page.html */ "ANVv");
/* harmony import */ var _lost_document_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lost-document-request.page.scss */ "RhpE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component */ "9K5J");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-constant */ "zngb");












let LostDocumentRequestPage = class LostDocumentRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(commonProv, logger, omniPullService) {
        super();
        this.commonProv = commonProv;
        this.logger = logger;
        this.omniPullService = omniPullService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.lostDocumentRequestVO = {};
        this.stepperOptions = {
            stepperName: 'lost_doc_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['lost_doc_req_step1'],
            group: this.formGroup,
            requestObject: this.lostDocumentRequestVO,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.debitCardRequest,
                group: this.formGroup,
            }
        };
        this.lostDocumentTypesOptions = {
            labelKey: 'lost_document_type_key',
            placeHolder: 'please_slct_lost_doc_type_key',
            fcName: 'documentType',
            group: this.formGroup,
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.serialNumberOptions = {
            group: this.formGroup,
            fcName: 'serialNo',
            labelKey: 'serial_no_key',
            placeHolder: 'enter_serial_no_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.documentCurrencyOptions = {
            placeHolder: 'document_currency_key',
            labelKey: 'document_currency_key',
            group: this.formGroup,
            fcName: 'documentCurrency'
        };
        this.documentNumberOptions = {
            group: this.formGroup,
            fcName: 'documentNumber',
            labelKey: 'document_number_key',
            placeHolder: 'enter_document_number_key',
            iconOptions: {
                iconName: 'clipboard'
            },
        };
        this.fromDocumentNumberOptions = {
            group: this.formGroup,
            fcName: 'fromdocumentNumber',
            labelKey: 'from_document_number_key',
            placeHolder: 'enter_from_document_number_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.toDocumentNumberOptions = {
            group: this.formGroup,
            fcName: 'todocumentNumber',
            labelKey: 'to_document_number_key',
            placeHolder: 'enter_to_document_number_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.passcodeCommentOptions = {
            group: this.formGroup,
            fcName: 'passcodeComment',
            labelKey: 'comment_key',
            placeHolder: 'enter_comment_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.stopReasonOptions = {
            labelKey: 'stop_reason_key',
            placeHolder: 'please_select_stop_reason_key',
            fcName: 'stopReason',
            group: this.formGroup,
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.stopReasonsOptions = {
            labelKey: 'stop_reason_key',
            placeHolder: 'please_select_stop_reason_key',
            fcName: 'stopReason',
            group: this.formGroup,
            iconOptions: {
                iconName: 'clipboard'
            },
        };
        this.briefExplanationOptions = {
            labelKey: 'brief_explanation_key',
            placeHolder: 'enter_brief_explanation_key',
            fcName: 'briefExplanation',
            group: this.formGroup,
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.lostDocumentPanelOptions = {
            isExpandable: true,
            labelKey: 'lost_document_key',
            iconName: 'document',
            expanded: true
        };
        this.showDocCurrency = false;
        this.showDocSINo = false;
        this.showDebitCardlookup = false;
        this.showCreditCardlookup = false;
        this.showChequebooklookup = false;
        this.showPassbookslookup = false;
        this.showCardTypelookup = false;
        this.lostDocNoRequired = '';
        this.requestedBranch = '';
        this.chequeBookLookupOptions = {
            labelKey: 'chequebook_key',
            placeHolder: 'select_chequebook_key',
            group: this.formGroup,
            fcName: 'chequebook',
            requestObject: this.lostDocumentRequestVO
        };
        this.debitCardsLookupOptiops = {
            labelKey: 'debit_card_key',
            placeHolder: 'select_debit_card_key',
            group: this.formGroup,
            fcName: 'debitCard',
            requestObject: this.lostDocumentRequestVO,
            submitType: 0,
        };
        this.creditCardsLookupOptiops = {
            labelKey: 'credit_card_key',
            placeHolder: 'select_credit_card_key',
            group: this.formGroup,
            fcName: 'creditCard',
            requestObject: this.lostDocumentRequestVO,
            submitType: 0,
        };
        this.passbooksLookupOptions = {
            labelKey: 'passbook_key',
            placeHolder: 'select_passbook_key',
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"],
            group: this.formGroup,
            fcName: 'passbook',
            requestObject: this.lostDocumentRequestVO
        };
        this.cardsLookupOptiops = {
            fcName: 'cardType',
            group: this.formGroup,
        };
        this.complexChargesOptions = {
            currency: '',
            disablePreview: true,
            requestObject: this.lostDocumentRequestVO,
            showLimitLabel: false,
            amountOptions: {
                fcName: 'chargesAmount',
                group: this.formGroup,
                labelKey: 'amount_key',
                placeHolder: 'amount_key'
            },
            currenciesOptions: {
                fcName: 'chargesCurrency',
                group: this.formGroup,
                labelKey: 'currency_key',
                placeHolder: 'currency_key'
            }
        };
    }
    ngOnInit() {
        super.init();
        this.resetVisibility();
        const pattern = "^[0-9]*$";
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.documentNumberOptions.fcName], pattern);
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.toDocumentNumberOptions.fcName], pattern);
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.fromDocumentNumberOptions.fcName], pattern);
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexChargesOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexChargesOptions.amountOptions.fcName], 1);
        this.baseFormGroup = this.formGroup;
        this.commonProv.setFormData(this.formGroup, this.lostDocumentRequestVO);
        const baseCurrency = this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO).companySettingsCO.baseCurrencyISO;
        this.commonProv.setValInsideNestedObj(this.complexChargesOptions.currenciesOptions.fcName, baseCurrency, this.lostDocumentRequestVO);
        const amountFieldCust = this.commonProv.getElementValidations(this.complexChargesOptions.amountOptions.fcName);
        const currenciesFieldCust = this.commonProv.getElementValidations(this.complexChargesOptions.currenciesOptions.fcName);
        if (amountFieldCust.IS_VISIBLE === 0 || currenciesFieldCust.IS_VISIBLE === 0) {
            this.isCurrAmountHidden = true;
        }
        else {
            this.isCurrAmountHidden = false;
        }
    }
    resetVisibility() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showDebitCardlookup = false;
            //  this.showCardTypelookup = false;
            this.showCreditCardlookup = false;
            this.showChequebooklookup = false;
            this.showPassbookslookup = false;
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [
                this.documentNumberOptions.fcName, this.cardsLookupOptiops.fcName, this.creditCardsLookupOptiops.fcName, this.debitCardsLookupOptiops.fcName, this.chequeBookLookupOptions.fcName, this.passbooksLookupOptions.fcName,
                this.fromDocumentNumberOptions.fcName, this.toDocumentNumberOptions.fcName, this.passcodeCommentOptions.fcName
            ], 0);
        });
    }
    onDocTypeChange(event) {
        this.resetVisibility().then(() => this.applyCustAfterSelectDoc(event));
        this.commonProv.setValInsideNestedObj(this.complexChargesOptions.amountOptions.fcName, "", this.lostDocumentRequestVO);
    }
    onLookupChange(event) {
        var _a, _b;
        const chargesReqParam = {
            "commonParametersList": {
                "itemCard": event
            },
            "entityType": (_a = this.lostDocumentRequestVO.documentType) === null || _a === void 0 ? void 0 : _a.description,
            "entityTypeCode": (_b = this.lostDocumentRequestVO.documentType) === null || _b === void 0 ? void 0 : _b.selectedObj.docCode
        };
        this.commonProv.presentLoading();
        this.omniPullService.returnDocumentCharges(chargesReqParam).then((res) => {
            if (res) {
                this.commonProv.setValInsideNestedObj(this.complexChargesOptions.amountOptions.fcName, res.totalCharge, this.lostDocumentRequestVO);
                this.commonProv.dismissLoading();
            }
        }).catch(error => {
            this.commonProv.logger.error(error);
            this.commonProv.dismissLoading();
        });
    }
    applyCustAfterSelectDoc(event) {
        if (event != null && event !== undefined && event.selectedObj) {
            const docType = event.selectedObj.docCard;
            this.documentTypeCategory = docType;
            switch (docType) {
                case 'C':
                    this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.documentNumberOptions.fcName, this.chequeBookLookupOptions.fcName], 1);
                    this.lostDocumentRequestVO['submitType'] = '2';
                    break;
                case 'Q':
                    this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fromDocumentNumberOptions.fcName, this.chequeBookLookupOptions.fcName, this.toDocumentNumberOptions.fcName], 1);
                    this.lostDocumentRequestVO['submitType'] = '1';
                    break;
                case 'D':
                    this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cardsLookupOptiops.fcName], 1);
                    this.lostDocumentRequestVO['submitType'] = '3';
                    break;
                case 'P':
                    this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.passbooksLookupOptions.fcName], 1);
                    this.showPassbookslookup = true;
                    this.lostDocumentRequestVO['submitType'] = '4';
                    break;
            }
        }
    }
    onChange(values) {
        if (values !== undefined) {
            if (values.itemValue === 'D') {
                this.showDebitCardlookup = true;
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardsLookupOptiops.fcName], 0);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardsLookupOptiops.fcName], 1);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.creditCardsLookupOptiops.fcName], 0);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.debitCardsLookupOptiops.fcName], 1);
            }
            else if (values.itemValue === 'C') {
                this.showCreditCardlookup = true;
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardsLookupOptiops.fcName], 1);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardsLookupOptiops.fcName], 0);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.creditCardsLookupOptiops.fcName], 1);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.debitCardsLookupOptiops.fcName], 0);
            }
        }
    }
};
LostDocumentRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
LostDocumentRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lost-document-request',
        template: _raw_loader_lost_document_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lost_document_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], LostDocumentRequestPage);



/***/ }),

/***/ "ezsQ":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1wYXNzYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "wkFC":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div class=\"ps-options-card\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\"\n        [options]=\"getContainerLookUpOptions(itemOption)\" [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n  <div class=\"no-account-text\" *ngIf=\"!options || !options.itemList || options.itemList.length === 0\">\n    <ps-label [options]=\"cardLabelOptions\"></ps-label>\n  </div>\n</ps-template-list>");

/***/ })

}]);
//# sourceMappingURL=25-es2015.js.map