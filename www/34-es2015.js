(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "8Bn4":
/*!*****************************************************************!*\
  !*** ./src/app/pages/beneficiary-list/beneficiary-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: BeneficiaryListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryListPage", function() { return BeneficiaryListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_beneficiary_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./beneficiary-list.page.html */ "PHiK");
/* harmony import */ var _beneficiary_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beneficiary-list.page.scss */ "YkfP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */ "tC40");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");













/**
 * @author Aftab.Ali
 * @since 30/1/2020
 *
 * <p> BeneficiaryListPage </p>
 */
let BeneficiaryListPage = class BeneficiaryListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonService, logger, omniPull, beneficiariesService) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.beneficiariesService = beneficiariesService;
        this.internalBeneficiaryOptions = {};
        this.localBeneficiaryOptions = {};
        this.internationalBeneficiaryOptions = {};
        this.cashTransferOptions = {};
        this.bankCardBeneficiaryOptions = {};
        this.localCardBeneficiaryOptions = {};
        this.noInternalBeneficiariesFound = false;
        this.noLocalBeneficiariesFound = false;
        this.noInternationalBeneficiariesFound = false;
        this.noCashTransfersFound = false;
        this.noBankCardBeneficiariesFound = false;
        this.noLocalCardBeneficiariesFound = false;
        this.beneficiariesRequestParam = {};
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.addBeneficiaryButtonOptions = {
            group: this.formGroup
        };
        this.hasAccOnInternalBenef = false;
        this.hasAccOnLocalBenef = false;
        this.hasAccOnInternationalBenef = false;
        this.hasAccOnCashTransfer = false;
        this.hasAccOnBankCardBenef = false;
        this.hasAccOnLocalCardBenef = false; //if the user has access on the local card benef operation 
        this.templateViewOptions = {
            group: this.formGroup,
            disableLoading: true
        };
        this.actionImageOptions = {
            imageName: src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
        };
        this.noInternalOptions = {
            labelKey: 'no_internal_ben_available_key'
        };
        this.noLocalOptions = {
            labelKey: 'no_local_ben_available_key'
        };
        this.noInternationalOptions = {
            labelKey: 'no_internat_ben_available_key'
        };
        this.noCashTransferOptions = {
            labelKey: 'no_cash_transfer_available_key'
        };
        this.noBankCardOptions = {
            labelKey: 'no_bank_card_ben_available_key'
        };
        this.noLocalCardOptions = {
            labelKey: 'no_Local_card_ben_available_key'
        };
        this.requestWasSent = true;
        this.internalBeneficiaryKey = 'internal_beneficiary_key';
        this.localBeneficiaryKey = 'local_beneficiary_key';
        this.internationalBeneficiaryKey = 'international_beneficiary_key';
        this.complexSegmentOptions = {
            segmentOptions: {
                fcName: 'beneficiaryTypesSegment',
                segmentList: [
                    {
                        selected: true,
                        itemValue: this.internalBeneficiaryKey,
                        description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY
                    },
                    {
                        selected: true,
                        itemValue: this.localBeneficiaryKey,
                        description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY
                    },
                    {
                        selected: true,
                        itemValue: this.internationalBeneficiaryKey,
                        description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY
                    },
                    {
                        selected: true,
                        itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
                        description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_DESC
                    },
                    {
                        selected: true,
                        itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_KEY,
                        description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_KEY
                    },
                    {
                        selected: true,
                        itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_KEY,
                        description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_KEY
                    }
                ]
            },
            segmentContainerOptions: {
                numberOfSegments: 6,
                namesofSegments: ['internal_beneficiary_segment', 'local_beneficiary_segment', 'international_beneficiary_segment', 'cash_transfer_segment', 'bank_card_segment', 'local_card_segment']
            }
        };
    }
    //edited by Marina TP:#1447627 separate parts of code into separated functions to follow best practices convetions 
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup; // Added by Zunair For #BUG 1257538
        this.complexSegmentOptions.group = this.formGroup;
        this.initializeBeneficiariesOptions();
        // this.setDefaultSegment();
        this.addBeneficiaryButtonOptions = {
            labelKey: 'add_beneficiary_key',
            group: this.formGroup
        };
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
    }
    initializeBeneficiariesOptions() {
        this.internalBeneficiaryOptions = {
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE,
            isEditable: true,
            hyperLink: {
                route: 'internal-beneficiary',
                labelKey: 'internal_beneficiary_key',
                iconOptions: {
                    iconName: 'add-benef',
                    labelOptions: {
                        labelKey: 'add_internal_benef_key'
                    }
                },
                pageOptions: {
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID,
                    title: 'internal_beneficiary_key',
                    iconName: 'beneficiaries',
                }
            }
        };
        this.localBeneficiaryOptions = {
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE,
            isEditable: true,
            hyperLink: {
                route: 'local-beneficiary',
                labelKey: 'local_beneficiary_key',
                iconOptions: {
                    iconName: 'add-benef',
                    labelOptions: {
                        labelKey: 'add_local_benef_key'
                    }
                },
                pageOptions: {
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID,
                    title: 'local_beneficiary_key',
                    iconName: 'beneficiaries',
                }
            }
        };
        this.internationalBeneficiaryOptions = {
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL,
            isEditable: true
        };
        this.cashTransferOptions = {
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER,
            isEditable: true
        };
        this.bankCardBeneficiaryOptions = {
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_TYPE,
            isEditable: true,
            hyperLink: {
                route: 'internal-card-beneficiary',
                labelKey: 'bank_card_beneficiary_key',
                iconOptions: {
                    iconName: 'add-benef',
                    labelOptions: {
                        labelKey: 'add_bank_card_benef_key'
                    }
                },
                pageOptions: {
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                    title: 'bank_card_beneficiary_key',
                    iconName: 'beneficiaries',
                }
            }
        };
        this.localCardBeneficiaryOptions = {
            group: this.formGroup,
            type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_TYPE,
            isEditable: true,
            hyperLink: {
                route: 'local-card-beneficiary',
                labelKey: 'local_card_beneficiary_key',
                iconOptions: {
                    iconName: 'add-benef',
                    labelOptions: {
                        labelKey: 'add_local_card_benef_key'
                    }
                },
                pageOptions: {
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID,
                    title: 'local_card_beneficiary_key',
                    iconName: 'beneficiaries',
                }
            }
        };
    }
    //This code is commented as all options are already declared above and it doesn't add anything else 
    onClickSegment(selectedSegment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadBeneficiaries(selectedSegment);
        });
    }
    /**
     * fetching beneficiaries
     * @param segment
     */
    loadBeneficiaries(segment) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.requestWasSent = true;
            this.selectedSegment = segment;
            if (segment === this.internalBeneficiaryKey) {
                this.beneficiariesRequestParam = {
                    trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE,
                    filterByOper: true,
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID
                };
                yield this.returnInternalBeneficiaries(this.beneficiariesRequestParam);
            }
            else if (segment === this.localBeneficiaryKey) {
                this.beneficiariesRequestParam = {
                    trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE,
                    filterByOper: true,
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID
                };
                yield this.returnLocalBeneficiaries(this.beneficiariesRequestParam);
            }
            else if (segment === this.internationalBeneficiaryKey) {
                this.beneficiariesRequestParam = {
                    trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL,
                    filterByOper: true,
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID
                };
                yield this.returnInternationalBeneficiaries(this.beneficiariesRequestParam);
            }
            else if (segment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_KEY) {
                this.beneficiariesRequestParam = {
                    trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_TYPE,
                    filterByOper: true,
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID
                };
                yield this.returnBankCardBeneficiaries(this.beneficiariesRequestParam);
            }
            else if (segment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_KEY) {
                this.beneficiariesRequestParam = {
                    trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_TYPE,
                    filterByOper: true,
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID
                };
                yield this.returnLocalCardBeneficiaries(this.beneficiariesRequestParam);
            }
            else {
                this.beneficiariesRequestParam = {
                    trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER,
                    filterByOper: true,
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID
                };
                yield this.returnCashTransfers(this.beneficiariesRequestParam);
            }
            this.requestWasSent = false;
        });
    }
    /**
     * fetching internal beneficiaries
     * @param requestData
     */
    returnInternalBeneficiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching internal beneficiaries in BeneficiaryListPage :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.noInternalBeneficiariesFound = false;
                this.internalBeneficiaryOptions.listOfOptions = [];
                this.internalBeneficiaryOptions.listOfOptions = this.populateCustomInternalBeneficiaries(result.gridModel);
            }
            else {
                this.internalBeneficiaryOptions.listOfOptions = []; // this.populateCustomInternalBeneficiaries([]);
                this.noInternalBeneficiariesFound = true;
            }
        });
    }
    /**
     * fetching local beneficiaries
     * @param requestData
     */
    returnLocalBeneficiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching local beneficiaries in BeneficiaryListPage :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.noLocalBeneficiariesFound = false;
                this.localBeneficiaryOptions.listOfOptions = [];
                this.localBeneficiaryOptions.listOfOptions = this.populateCustomLocalBeneficiaries(result.gridModel);
            }
            else {
                this.localBeneficiaryOptions.listOfOptions = []; // this.populateCustomLocalBeneficiaries([]);
                this.noLocalBeneficiariesFound = true;
            }
        });
    }
    /**
     * fetching international beneficiaries
     * @param requestData
     */
    returnInternationalBeneficiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching international beneficiaries in BeneficiaryListPage :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.noInternationalBeneficiariesFound = false;
                this.internationalBeneficiaryOptions.listOfOptions = [];
                this.internationalBeneficiaryOptions.listOfOptions = this.populateCustomInternationalBeneficiaries(result.gridModel);
            }
            else {
                this.internationalBeneficiaryOptions.listOfOptions = []; // this.populateCustomInternationalBeneficiaries([]);
                this.noInternationalBeneficiariesFound = true;
            }
        });
    }
    returnBankCardBeneficiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching international beneficiaries in BeneficiaryListPage :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.noBankCardBeneficiariesFound = false;
                this.bankCardBeneficiaryOptions.listOfOptions = [];
                this.bankCardBeneficiaryOptions.listOfOptions = this.populateCustomBankCardBeneficiaries(result.gridModel);
            }
            else {
                this.bankCardBeneficiaryOptions.listOfOptions = [];
                this.noBankCardBeneficiariesFound = true;
            }
        });
    }
    returnLocalCardBeneficiaries(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching international beneficiaries in BeneficiaryListPage :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.noLocalCardBeneficiariesFound = false;
                this.localCardBeneficiaryOptions.listOfOptions = [];
                this.localCardBeneficiaryOptions.listOfOptions = this.populateCustomLocalCardBeneficiaries(result.gridModel);
            }
            else {
                this.localCardBeneficiaryOptions.listOfOptions = [];
                this.noLocalCardBeneficiariesFound = true;
            }
        });
    }
    returnCashTransfers(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnBeneficiaries(requestData).catch(error => {
                this.logger.error('Error: While fetching cash transfers in BeneficiaryListPage :', error);
            });
            if (result && result.gridModel.length > 0) {
                this.noCashTransfersFound = false;
                this.cashTransferOptions.listOfOptions = [];
                this.cashTransferOptions.listOfOptions = this.populateCustomCashTransfers(result.gridModel);
            }
            else {
                this.cashTransferOptions.listOfOptions = []; // this.populateCustomCashTransfers([]);
                this.noCashTransfersFound = true;
            }
        });
    }
    updateCard(value) {
    }
    /**
     * customizing internal beneficiary object
     * @param gridModel
     */
    //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization
    populateCustomInternalBeneficiaries(internalBeneficiaries) {
        return this.beneficiariesService.populateInternalBeneficiaries(internalBeneficiaries);
    }
    /**
     * customizing local beneficiary object
     * @param gridModel
     */
    populateCustomLocalBeneficiaries(localBeneficiaries) {
        return this.beneficiariesService.populateLocalBeneficiaries(localBeneficiaries);
    }
    /**
     * customizing international beneficiary object
     * @param gridModel
     */
    populateCustomInternationalBeneficiaries(internationBeneficiaries) {
        return this.beneficiariesService.populateInternationalBeneficiaries(internationBeneficiaries);
    }
    populateCustomBankCardBeneficiaries(bankCardBeneficiaries) {
        return this.beneficiariesService.populateBankCardBeneficiaries(bankCardBeneficiaries);
    }
    populateCustomLocalCardBeneficiaries(LocalCardBeneficiaries) {
        return this.beneficiariesService.populateLocalCardBeneficiaries(LocalCardBeneficiaries);
    }
    populateCustomCashTransfers(cashTransfers) {
        return this.beneficiariesService.populateCashTransfers(cashTransfers);
    }
    //End ghada
    ionViewWillEnter() {
        var _a;
        super.viewWillEnter();
        this.loadBeneficiaries(this.formGroup.controls[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].CONTROLLER_FORM_DATA].value[this.complexSegmentOptions.segmentOptions.fcName] || ((_a = this.complexSegmentOptions.segmentOptions.defaultSegment) === null || _a === void 0 ? void 0 : _a.itemValue));
    }
};
BeneficiaryListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"] }
];
BeneficiaryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-beneficiary-list',
        template: _raw_loader_beneficiary_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beneficiary_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])
], BeneficiaryListPage);



/***/ }),

/***/ "PHiK":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/beneficiary-list/beneficiary-list.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-segment id=\"accountsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-internal-beneficiary [options]=\"internalBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'internal_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('internal_beneficiary_key')\"></ps-internal-beneficiary>\n      <div *ngIf=\"noInternalBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noInternalOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-local-beneficiary [options]=\"localBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'local_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('local_beneficiary_key')\"></ps-local-beneficiary>\n      <div *ngIf=\"noLocalBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noLocalOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment3 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[2]\">\n      <ps-international-beneficiary [options]=\"internationalBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'international_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('international_beneficiary_key')\">\n      </ps-international-beneficiary>\n      <div *ngIf=\"noInternationalBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noInternationalOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment4 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[3]\">\n      <ps-cash-transfer [options]=\"cashTransferOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'cash_transfer_key'\"\n        (reloadFct)=\"loadBeneficiaries('cash_transfer_key')\">\n      </ps-cash-transfer>\n      <div *ngIf=\"noCashTransfersFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noCashTransferOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n    <ps-content-segment segment5 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[4]\">\n      <ps-internal-beneficiary [options]=\"bankCardBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'bank_card_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('bank_card_beneficiary_key')\"></ps-internal-beneficiary>\n      <div *ngIf=\"noBankCardBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noBankCardOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment6 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[5]\">\n      <ps-local-beneficiary [options]=\"localCardBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'local_card_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('local_card_beneficiary_key')\"></ps-local-beneficiary>\n      <div *ngIf=\"noLocalCardBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noLocalCardOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n  </ps-complex-segment>\n\n  <ng-container *ngIf=\"requestWasSent\">\n    <div class=\"inline-loading-image\">\n      <ps-action-image [options]=\"actionImageOptions\"></ps-action-image>\n    </div>\n  </ng-container>\n</ps-template-view>");

/***/ }),

/***/ "YkfP":
/*!*******************************************************************!*\
  !*** ./src/app/pages/beneficiary-list/beneficiary-list.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5lZmljaWFyeS1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gKqT":
/*!***************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
  \***************************************************/
/*! exports provided: OmniBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniBasePage", function() { return OmniBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./omni-base.page.html */ "mVVo");
/* harmony import */ var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omni-base.page.scss */ "s2T5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/customization/psServices/util/common-cust-utils */ "oS+F");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");











let OmniBasePage = class OmniBasePage {
    constructor() {
        this.isPageDisabled = false;
        this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
        this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]);
        // this.getScreenTranslations();
    }
    init() {
        this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
        this.customizationMap = this.commonProv.returnOperCustomization();
        const navParams = this.navigationServices.getAllParams();
        const formDisObj = {};
        // let oper = PsCommonSettings.oper_ID;
        // PsCommonSettings.currentListOfSteps = {};
        if (navParams && navParams.readOnlypage === true) {
            formDisObj.IS_READONLY = 1;
            // Modified by Richie for #BUG 1259353
            if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            }
        }
        else if (this.customizationMap) {
            formDisObj.IS_READONLY = 0;
            this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
        }
        // End Richie
        // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
        this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];
        if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
            this.getScreenTranslations(this.currentOperID);
        }
        // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
    }
    ngOnInit() {
        this.init();
    }
    ionViewDidEnter() {
        this.viewDidEnter();
    }
    ionViewWillLeave() {
        this.viewWillLeave();
    }
    ionViewWillEnter() {
        this.viewWillEnter();
    }
    viewWillEnter() {
    }
    disableForm(formGroup) {
        // Modified by Richie for #BUG 1259353
        if (formGroup !== undefined && this.customizationMap) {
            const formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY);
            // End Richie
            if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach((key) => {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
            }
        }
    }
    viewDidEnter() {
        this.commonProv.checkViewBS.next({ value: true, page: this, didEnter: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, didEnter: true });
        this.commonProv.dismissLoading();
        this.disableForm(this.baseFormGroup);
        src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
        this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
    }
    viewWillLeave() {
        this.commonProv.checkViewBS.next({ value: true, page: this, willLeave: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, willLeave: true });
    }
    // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
    // added after all the changeEvents are finished to disable the form 
    ngAfterViewChecked() {
        if (!this.isPageDisabled) {
            setTimeout(() => {
                this.disableForm(this.baseFormGroup);
                this.isPageDisabled = true;
            }, 300);
        }
    }
    // AZDB-7529 - Start - AMANAOI250035
    getScreenTranslations(screenOperId) {
        const operationId = screenOperId ? screenOperId : 2222;
        const activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';
        if (operationId && activeLanguage) {
            this.commonProv.language.getOperTranslation(activeLanguage, operationId);
        }
    }
};
OmniBasePage.ctorParameters = () => [];
OmniBasePage.propDecorators = {
    psClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
};
OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OmniBasePage);



/***/ }),

/***/ "mVVo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "s2T5":
/*!*****************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=34-es2015.js.map