(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "8hG0":
/*!**************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1hY2NvdW50cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "D491":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n   <div *ngIf=\"options?.itemList?.length > 0\" class=\"account-list\">\n      <div *ngFor=\"let itemOption of options.itemList\">\n         <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions(itemOption)\"\n            [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n         </ps-container-lookup-option>\n      </div>\n   </div>\n</ps-template-list>");

/***/ }),

/***/ "OVQh":
/*!************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PsAccountsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsAccountsListComponent", function() { return PsAccountsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_accounts_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-accounts-list.component.html */ "D491");
/* harmony import */ var _ps_accounts_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-accounts-list.component.scss */ "8hG0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_icon_ps_icon_social_sharing_ps_icon_social_sharing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-action/ps-action-icon/ps-icon-social-sharing/ps-icon-social-sharing.component */ "MfpM");
/* harmony import */ var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/Event/event.service */ "r40+");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");
/* harmony import */ var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");













/**
 * @author Aftab.Ali
 * @since 31/12/2019
 *
 * <p> PsAccountsListComponent </p>
 */
let PsAccountsListComponent = class PsAccountsListComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateListPage"] {
    constructor(commonServices, cdRef, event, omniPull) {
        super();
        this.commonServices = commonServices;
        this.cdRef = cdRef;
        this.event = event;
        this.omniPull = omniPull;
        this.options = {};
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.showSingleAccount = false;
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.businessProfileMap = [];
        this.lookUpOptions = [];
        this.lookUpDetailsOptionsDict = {};
        this.lookUpDetailsOptions = null; //Jira 7846 - Makki -Cache the options of the lookup details
        this.eventSub = this.event.subscribe('refreshList', (list) => {
        });
    }
    // Added by Richie #TP 1105083
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.eventSub) {
            this.eventSub.unsubscribe();
        }
    }
    // end Richie
    ngOnInit() {
        super.init();
        this.businessProfileMap = this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].BUSINESS_PROFILE_MAP);
        let operation;
        if (this.businessProfileMap)
            operation = this.businessProfileMap.filter(operVO => operVO.OPER_ID === _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__["PsCommonSettings"].oper_ID).shift();
        let emailSubject = '';
        if (operation && operation.DESCRIPTION) {
            emailSubject = operation.DESCRIPTION + '-' + 'accountnumber';
        }
        if (!this.options.enableListPagination) {
            this.options.itemList = this.options.listOfOptions;
        }
        this.populateAccountsMap();
    }
    getContainerLookUpOptions(val) {
        if (this.lookUpDetailsOptionsDict[val.rowIndex] !== undefined) {
            return this.lookUpDetailsOptionsDict[val.rowIndex];
        }
        this.lookUpDetailsOptionsDict[val.rowIndex] = this.prepareLookUp(val);
        return this.lookUpDetailsOptionsDict[val.rowIndex];
    }
    prepareLookUp(card) {
        let lookupDetails = {};
        lookupDetails.translateSubTitle = false;
        lookupDetails.labelKey = this.options.labelKey;
        lookupDetails.fcName = this.options.fcName;
        lookupDetails.currencyDescription = 'currencyBriefName';
        lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.group = this.options.group;
        lookupDetails.balanceMapping = this.balanceMapping();
        lookupDetails.balanceFcNames = this.options.balanceFcNames ? this.options.balanceFcNames : [];
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.editActionUrl = _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        lookupDetails.showInitialCardValues = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].VISIBLE_FIELD;
        if (this.options.refreshTermDepositList) {
            lookupDetails.detailServiceUrl = [
                {
                    url: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.maturityAccountDetailsRestEndPoint,
                    paramsKeyLabels: [
                        { key: 'accountNumber', value: 'accountNumber' },
                        { key: 'accountType', staticValue: 'F' }
                    ],
                    responseKeyLabel: [
                        { key: 'investmentCapital', value: 'investmentCapital' },
                        { key: 'tenor', value: 'tenor' },
                        { key: 'maturityDateStr', value: 'maturityDateStr' },
                        { key: 'profitRate', value: 'profitRate' },
                        { key: 'accruedDividends', value: 'accruedDividends' },
                        { key: 'dividendsPaid', value: 'dividendsPaid' },
                        { key: 'renew', value: 'renew' },
                        { key: 'renewWithSame', value: 'renewWithSame' }
                    ]
                }
            ];
        }
        //edited by Marina Jira-AZDB-1202 pending transfer link should be only available for general accounts
        lookupDetails.actionDetailsOptions = [
            ((this.options.type == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].GENERAL_ACCOUNT_TYPE) ? {
                id: 'pending_transfers',
                label: 'pending_transfers_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'pending-transfers',
                        labelOptions: {
                            labelKey: 'pending_transfers_key'
                        }
                    },
                    route: 'pending-transfers-report',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].PENDING_TRANSFERS_REPORT_OPER_ID,
                        iconName: 'pending-transfers',
                        title: 'pending_transfers_key'
                    },
                    psClass: 'pending-transfers-action'
                }
            } : {}),
            ((this.commonProv.hasAccessOnOperation(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].REQUEST_HARD_COPY_STATEMENT_OPER_ID)) ? {
                id: 'request_hard',
                label: 'request_hard_copy_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'hard-copy-statement-request-icon',
                        labelOptions: {
                            labelKey: 'request_hard_copy_key'
                        }
                    },
                    route: 'hard-copy-statement-request',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].REQUEST_HARD_COPY_STATEMENT_OPER_ID,
                        iconName: 'hard-copy-statement-request-icon',
                        title: 'request_hard_copy_key'
                    },
                    psClass: 'hard-copy-statement-request'
                }
            } : {}),
            ((this.commonProv.isNativeMobile() || _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__["PsCommonSettings"].custMode) ?
                {
                    id: 'share',
                    //label: 'share_key',
                    labelOptions: {
                        labelKey: 'share_key'
                    },
                    component: src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_icon_ps_icon_social_sharing_ps_icon_social_sharing_component__WEBPACK_IMPORTED_MODULE_5__["PsIconSocialSharingComponent"],
                    componentOptions: {
                        message: card === null || card === void 0 ? void 0 : card.sharedMessage
                    },
                } : {}),
        ];
        if (this.options.refreshTermDepositList && this.commonProv.hasAccessOnOperation(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CHANGE_MATURITY_ACCOUNT_OPER_ID)) {
            lookupDetails.actionDetailsOptions.push({
                id: 'change_maturity',
                label: 'change_maturity_instructions_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'document',
                        labelOptions: {
                            labelKey: 'change_maturity_instructions_key'
                        }
                    },
                    route: 'change-maturity-instructions',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CHANGE_MATURITY_ACCOUNT_OPER_ID,
                        iconName: 'document',
                        title: 'change_maturity_instructions_key'
                    },
                    preCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.prepareMaturityAccountInfo(lookupDetails.actionDetailsOptions[3].actionHyperlink));
                            });
                        },
                        executionClass: this,
                        params: []
                    },
                    // operId: ConstantCommon.AccountOpeningFixedMaturityAccountPage_OPER_ID
                    psClass: 'change-maturity-instructions'
                },
            });
            lookupDetails.actionDetailsOptions.push({
                fcName: 'break',
                label: 'break_key',
                id: 'break',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'pending-transfers',
                        labelOptions: {
                            labelKey: 'break_key'
                        }
                    },
                    route: 'break-term-deposit-account',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BREAK_TERM_DEPOSIT_ACCOUNT_OPER_ID,
                        iconName: 'pending-transfers',
                        title: 'break_key'
                    },
                    psClass: 'break-term-deposit-account'
                }
            });
        }
        if (card && card.statusCode === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].ACCOUNTS_STATE_ACTIVE && this.commonProv.hasAccessOnOperation(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].E_STATEMENT_REQUEST_OPER_ID)) {
            lookupDetails.actionDetailsOptions.push({
                id: 'statement_request',
                label: 'e_statement_request_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'paper-plane',
                        labelOptions: {
                            labelKey: 'e_statement_request_key'
                        }
                    },
                    route: 'e-statement-request',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].E_STATEMENT_REQUEST_OPER_ID,
                        iconName: 'paper-plane',
                        title: 'e_statement_request_key'
                    },
                    psClass: 'e-statement-request'
                }
            });
        }
        lookupDetails.listOfStatementOptions = [
            {
                buttonIcon: 'account-statement',
                redirectUrl: 'account-statement-report',
                operId: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].VIEW_STATEMENT_OF_TRANSACTIONS,
                title: 'accounts_report_key'
            },
        ];
        if (this.options.generatedToQR) {
            if (lookupDetails.actionDetailsOptions == undefined) {
                lookupDetails.actionDetailsOptions = [];
            }
            lookupDetails.actionDetailsOptions.push({
                id: 'qr_code',
                buttonIcon: 'qr_code_2',
                actionUrl: _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__["PsCommonSettings"].serviceUrl.commonSubmitAction,
                cssClass: 'qr-code-account-list fab-edit-button',
                iconName: 'qr_code_2',
                labelOptions: {
                    labelKey: 'qr_code_key'
                },
                actionType: 'QR',
                label: 'qr_code_key',
                alertType: 'QR',
                qrData: {
                    AdditionalRef: 'AddRef-' + card.additionalRef,
                    IBAN: 'IBAN-' + card.ibanAccNo,
                    AccountRef: card.accountFormat + '-' + card.formattedAccount,
                    briefName: card.briefName
                }
            });
        }
        return lookupDetails;
    }
    prepareMaturityAccountInfo(actionCard) {
        return new Promise((resolve, reject) => {
            const requestParams = {
                accountNumber: actionCard.navigationOptions.queryParams.accountNumber,
                accountType: 'F'
            };
            this.omniPull.returnMaturityAccountInformation(requestParams).then(result => {
                if (result) {
                    const data = {
                        renew: result.renew === 'yes' ? true : false,
                        renewWithSame: result.renewWithSame === 'yes' ? true : false,
                        maturityAccount: result.renew === 'yes' ? null : result.transferAccount.additionalRef,
                        maturityAccount_lookupKey: result.renew === 'yes' ? null : result.transferAccount.additionalRef,
                        profitAccount: result.renewWithSame === 'yes' ? null : result.profitAccount.additionalRef,
                        profitAccount_lookupKey: result.renewWithSame === 'yes' ? null : result.profitAccount.additionalRef,
                    };
                    this.commonProv.copyObject(actionCard.navigationOptions.queryParams, { 'MaturityInfo': data }, false);
                    actionCard.navigationOptions.queryParams = Object.assign({}, actionCard.navigationOptions.queryParams);
                    resolve(actionCard.navigationOptions.queryParams);
                }
            }).catch(error => {
                this.commonProv.logger.error('Error: While fetching returnMaturityAccountInformation in change maturity page:', error);
            });
        });
    }
    generateSharedMessage(itemCard) {
        let message = '';
        if (itemCard.cifShortNameEnglish != null && itemCard.cifShortNameEnglish != undefined) {
            message = this.commonServices.translate('account_holder_name_key') + ': ' + itemCard.cifShortNameEnglish;
        }
        if (itemCard.briefName != null && itemCard.briefName != undefined) {
            message = (message != '' ? message + ' - ' : '') + this.commonServices.translate('account_name_key') + ': ' + itemCard.briefName;
        }
        if (itemCard.accountNumber != null && itemCard.accountNumber != undefined) {
            message = (message != '' ? message + ' - ' : '') + this.commonServices.translate('account_number_key') + ': ' + itemCard.accountNumber;
        }
        if (itemCard.additionalRef != null && itemCard.additionalRef != undefined) {
            message = (message != '' ? message + ' - ' : '') + this.commonServices.translate('account_ref_key') + ': ' + itemCard.additionalRef;
        }
        if (itemCard.ibanAccNo != null && itemCard.ibanAccNo != undefined) {
            message = (message != '' ? message + ' - ' : '') + this.commonServices.translate('iban_key') + ': ' + itemCard.ibanAccNo;
        }
        message = (message != '' ? message + ' - ' : '') + this.commonServices.translate('bank_name_key') + ': ' + this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).companySettingsCO.briefDesc;
        if (itemCard.branchDescription != null && itemCard.branchDescription != undefined) {
            message = (message != '' ? message + ' - ' : '') + this.commonServices.translate('branch_name_key') + ': ' + itemCard.branchDescription;
        }
        return message;
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    updateCard(account) {
        if (account && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === account);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            //this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
    populateAccountsMap() {
        let accountNumberMap = {};
        let accountBalanceMap = {};
        let accountAvailableBalanceMap = {};
        let investMentCapitalMap = {};
        let profitRateMap = {};
        let tenorMap = {};
        let maturityDateMap = {};
        let dividendsPaidMap = {};
        let accruedDividendsMap = {};
        let renewMap = {};
        let renewWithSameMap = {};
        let maturityInstructionsMap = {};
        let overDraftActualAmountMap = {};
        let overDraftOutstandingAmountMap = {};
        let overDraftAccumulatedAmountMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        accountNumberMap = {
            key: 'formattedAccount',
            value: '--- --- --- ---',
            isEdit: false,
        };
        accountBalanceMap = {
            key: 'balance',
            value: '0.0',
            isEdit: false,
        };
        accountAvailableBalanceMap = {
            key: 'availableBalance',
            value: '0.0',
            isEdit: false
        };
        investMentCapitalMap = {
            key: 'investmentCapital',
            value: '0',
            isEdit: false
        };
        profitRateMap = {
            key: 'profitRate',
            value: '0',
            isEdit: false
        };
        tenorMap = {
            key: 'tenor',
            value: '0',
            isEdit: false
        };
        maturityDateMap = {
            key: 'maturityDateStr',
            value: '0',
            isEdit: false
        };
        dividendsPaidMap = {
            key: 'dividendsPaid',
            value: '0',
            isEdit: false
        };
        accruedDividendsMap = {
            key: 'accruedDividends',
            value: '0',
            isEdit: false
        };
        renewMap = {
            key: 'renew',
            value: '0',
            isEdit: false
        };
        renewWithSameMap = {
            key: 'renewWithSame',
            value: '0',
            isEdit: false
        };
        maturityInstructionsMap = {
            key: 'maturityInstructions',
            value: '0',
            isEdit: false
        };
        // salah added for AGIB160025 - Overdraft Interpretation and Narration
        overDraftActualAmountMap = {
            key: 'actualAmount',
            value: '0',
            isEdit: false,
            showMappingOnNoValue: true
        };
        overDraftOutstandingAmountMap = {
            key: 'outstandingAmount',
            value: '0',
            isEdit: false,
            showMappingOnNoValue: true
        };
        overDraftAccumulatedAmountMap = {
            key: 'accumulatedAmount',
            value: '0',
            isEdit: false,
            showMappingOnNoValue: true
        };
        headerTitleMap = {
            key: 'title',
            value: 'accountTypeDesc',
            isEdit: false,
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'briefName',
            isEdit: true,
            formGroupMap: {
                placeHolder: 'enter_account_nick',
                fcName: 'briefName',
            }
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('account_key', accountNumberMap);
        /* this.labelValuesMap.set('balance_key', accountBalanceMap);
        this.labelValuesMap.set('available_balance_key', accountAvailableBalanceMap); */
        if (this.options.refreshTermDepositList) {
            this.labelValuesMap.set('investment_capital_key', investMentCapitalMap);
            this.labelValuesMap.set('profit_rate_key', profitRateMap);
            this.labelValuesMap.set('tenor_key', tenorMap);
            this.labelValuesMap.set('maturity_date_key', maturityDateMap);
            this.labelValuesMap.set('dividends_paid_key', dividendsPaidMap);
            this.labelValuesMap.set('accrued_dividends_key', accruedDividendsMap);
            // this.labelValuesMap.set('maturity_instructions_key', maturityInstructionsMap);
            this.labelValuesMap.set('renew_key', renewMap);
            this.labelValuesMap.set('renew_new_balance_within_same_account_key', renewWithSameMap);
        }
        if (this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].GENERAL_ACCOUNT_TYPE) {
            this.labelValuesMap.set('overdraft_actual_key', overDraftActualAmountMap);
            this.labelValuesMap.set('overdraft_outstand_key', overDraftOutstandingAmountMap);
            this.labelValuesMap.set('overdraft_accumulated_key', overDraftAccumulatedAmountMap);
        }
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
        this.requestMap.set('nickNameNumber', 'personalizeKey');
        this.requestMap.set('oldNickName', 'briefName');
        this.editRequestMap.set('newNickName', 'briefName');
        this.editRequestMap.set('type', 'A');
        /* this.requestMap.set('newNickName', 'accountNumber'); */
    }
    /**
     *
     */
    balanceMapping() {
        const balanceMappingList = [
            {
                key: 'current_balance_key',
                value: 'balance'
            },
            {
                key: 'available_balance_key',
                value: 'availableBalance'
            },
            {
                key: 'currency_iso_key',
                value: 'currencyBriefName'
            }
        ];
        return balanceMappingList;
    }
};
PsAccountsListComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] }
];
PsAccountsListComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsAccountsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-accounts-list',
        template: _raw_loader_ps_accounts_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_ps_accounts_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__["Events"], _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])
], PsAccountsListComponent);



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
//# sourceMappingURL=2-es2015.js.map