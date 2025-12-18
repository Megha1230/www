(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "4lGw":
/*!****************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psServices/accounts/accounts.service.ts ***!
  \****************************************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../omni-common/omni-pull.service */ "ZyuK");




/*
Created by Waleed Aly 03 April 2023 to encapsulated repeated code needed in different cards components "debit,credit,prepaid"
*/
let AccountsService = class AccountsService {
    constructor(omniPull, logger) {
        this.omniPull = omniPull;
        this.logger = logger;
        this.getAccountAsIBAN();
    }
    getAccountAsIBAN() {
        if (this.accountAsIBAN === undefined) {
            this.omniPull.getParamValOf('AccountsAsIBAN').then(res => {
                this.accountAsIBAN = res.AccountsAsIBAN;
            }).catch(err => this.logger.log(err));
        }
    }
    returnFormattedAccount(account) {
        let formattedAccount;
        let accountFormat;
        if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 1) {
            formattedAccount = account.ibanAccNo === null || account.ibanAccNo === undefined ? '' : account.ibanAccNo;
            accountFormat = 'IBAN';
        }
        else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 2) {
            formattedAccount = account.additionalRef === null || account.additionalRef === undefined ? '' : account.additionalRef;
            accountFormat = 'AddRef';
        }
        else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 3) {
            formattedAccount = account.branch + '-' + account.currency + '-' + account.accGl + '-' + account.cif + '-' + account.serialNo;
            accountFormat = 'iMAL';
        }
        else {
            formattedAccount = account.additionalRef === null || account.additionalRef === undefined ? '' : account.accountNumber;
            accountFormat = 'ACCNO';
        }
        return {
            formattedAccount: formattedAccount,
            accountFormat: accountFormat,
        };
    }
};
AccountsService.ctorParameters = () => [
    { type: _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }
];
AccountsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
], AccountsService);



/***/ }),

/***/ "K3GF":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtb3duLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VEWP":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PsLookupOwnAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupOwnAccountsComponent", function() { return PsLookupOwnAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_own_accounts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-own-accounts.component.html */ "XDJu");
/* harmony import */ var _ps_lookup_own_accounts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-own-accounts.component.scss */ "K3GF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/accounts/accounts.service */ "4lGw");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */ "EIUR");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");












/**
 * @author Aftab.Ali
 * @since 03/02/2020
 *
 * <p> PsComplexOwnAccountComponent is complex component to show accounts list fetched from server, balance and available balance</p>
 */
let PsLookupOwnAccountsComponent = class PsLookupOwnAccountsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__["PsBaseFieldComponent"] {
    constructor(commonService, logger, omniPull, accountsService) {
        super(commonService, logger);
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.accountsService = accountsService;
        this.options = {
            fromTo: '',
            requestObject: null,
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_valid_account_found_key',
            multiple: this.options.multiple ? this.options.multiple : false
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onAccountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onAccountDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["PsCurrencyPipe"]();
        this.labelOptions = {};
        this.allType = false;
    }
    ngOnInit() {
        this.loadAccounts(null);
        this.complexLookupOptions.labelKey = this.options.labelKey;
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.allType = this.options.allType ? this.options.allType : false;
        this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
        this.complexLookupOptions.requestObject = this.options.requestObject;
    }
    ngOnChanges(change) {
        this.complexLookupOptions.labelKey = this.options.labelKey;
        this.complexLookupOptions.placeHolder = this.options.placeHolder;
        // if (this.options.accountNumber !== undefined) {
        //   this.loadAccounts(null);
        // }
    }
    /**
     * populating account - fetching from server
     */
    loadAccounts(reloadOptions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (reloadOptions !== null && reloadOptions !== undefined) {
                this.options = reloadOptions;
            }
            this.options.listOfAccounts = [];
            // TODO: when the service is ready : we will get the account list based on cif number from server. service will take the cif number -- options.cifNumber will provide the cif number
            if (this.options.fromTo === undefined || this.options.fromTo === '') {
                this.logger.error('lookup_from_to_missing_key');
                return;
            }
            const cifInfo = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
            const requestData = this.prepareRequestData(cifInfo);
            this.returnAccountList(requestData);
        });
    }
    /**
     * fetching account list from server
     * @param requestData IOmniAccountRequest
     */
    returnAccountList(requestData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const personalizationCO = this.commonProv.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PERSONALIZATION_CO);
            this.complexLookupOptions.listOfOptions = undefined;
            const result = yield this.omniPull.returnAccounts(requestData).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
            });
            if (result && result.gridModel.length > 0) {
                /**
                 * for fetching all the account types if allType flag is passed
                 */
                if (this.allType) {
                    requestData.accountType = 'F';
                    requestData.permittedGls = 'F';
                    const result1 = yield this.omniPull.returnAccounts(requestData).catch(error => {
                        this.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
                    });
                    if (result1 && result1.gridModel.length > 0) {
                        result.gridModel = [...result.gridModel, ...result1.gridModel]; //Jira #7129 The correct way to merge two arrays 
                    }
                }
                this.options.listOfAccounts = result.gridModel;
                if (this.options.accountNumber && this.options.accountNumber !== '') {
                    this.complexLookupOptions.listOfOptions = this.options.listOfAccounts.filter(account => account.accountNumber !== this.options.accountNumber);
                }
                if (this.options.currency && this.options.currency !== '') {
                    this.complexLookupOptions.listOfOptions = this.fetchAccountBasedOnCurrency(this.options.currency);
                    if (this.options.accountNumber && this.options.accountNumber !== '') {
                        this.complexLookupOptions.listOfOptions = this.options.listOfAccounts.filter(account => account.accountNumber !== this.options.accountNumber);
                    }
                }
                if ((this.options.accountNumber === null || this.options.accountNumber === undefined || this.options.accountNumber === '')) {
                    this.complexLookupOptions.listOfOptions = this.options.listOfAccounts;
                }
                this.complexLookupOptions.listOfOptions = this.populateCustomAccounts(this.complexLookupOptions.listOfOptions);
                //AZDB-1203, Moved here by ghada from ps-accounts-list in order to reasure that data is retured from service to assign rowIndex for each record
                this.complexLookupOptions.listOfOptions.map((element, index) => element['rowIndex'] = index);
                this.allAccounts = Object.assign([], this.complexLookupOptions.listOfOptions);
                if (this.complexLookupOptions.selectedItems == undefined) {
                    this.complexLookupOptions.selectedItems = [];
                }
                if (this.complexLookupOptions.multiple) {
                    this.handleMultipleSelection();
                }
                //added by Marina for TP:#1433069 to default any from account field to the account chosen by the user in personalization settings
                //loop on listOfOptions instead of accountsList to be able to use lookup property of the account because
                //it is the property used by ps-complex-lookup component to set the lookup value    
                if (!this.options.requestObject[this.options.fcName]) {
                    this.options.defaultByPersonalizedAcc = this.options.defaultByPersonalizedAcc != undefined ? this.options.defaultByPersonalizedAcc : true;
                    if (this.options.fromTo === 'from' && this.options.defaultByPersonalizedAcc) {
                        let personalizationKeyToCheck = this.options.purpose === 'QR' ? personalizationCO === null || personalizationCO === void 0 ? void 0 : personalizationCO.defaultQrPaymentAccKey : personalizationCO === null || personalizationCO === void 0 ? void 0 : personalizationCO.defaultTransferAccKey;
                        this.complexLookupOptions.listOfOptions.map(account => {
                            //Makki: Jira #5578, Having two undefined values doesn't mean the condition is fulfilled, need to check personalizeKey is not 'undefined'
                            if (account.personalizeKey) {
                                if (account.personalizeKey === personalizationKeyToCheck) {
                                    this.common.setValInsideNestedObj(this.options.fcName, account.lookupKey, this.options.requestObject);
                                    this.common.setValInsideNestedObj(this.options.fcName + '_lookupKey', account.lookupKey, this.options.requestObject);
                                }
                            }
                        });
                    }
                }
            }
            else {
                this.listOfAccounts = [];
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    /**
     *
     * @param listOfOptions
     */
    populateCustomAccounts(listOfOptions) {
        const accountsList = [];
        for (const iterator of listOfOptions) {
            const account = {
                briefNameEnglish: iterator.briefNameEnglish,
                cifShortNameEnglish: iterator.cifShortNameEnglish,
                accountNumber: iterator.accountNumber,
                balance: this.psCurrency.transform(iterator.balance === null || iterator.balance === undefined ? '0.0' : iterator.balance, iterator.currencyDecimalPoints) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                availableBalance: this.psCurrency.transform(iterator.availableBalance === null || iterator.availableBalance === undefined ? '0.0' : iterator.availableBalance, iterator.currencyDecimalPoints) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                currencyBriefName: iterator.currencyBriefName || iterator.currencyBriefNameEnglish,
                currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                currency: iterator.currency,
                accountTypeDesc: iterator.accountTypeDesc,
                additionalRef: iterator.additionalRef,
                ibanAccNo: iterator.ibanAccNo,
                accGl: iterator.accGl,
                serialNo: iterator.serialNo,
                branch: iterator.branch,
                cif: iterator.cif,
                formattedAccount: this.accountsService.returnFormattedAccount(iterator).formattedAccount,
                personalizeKey: iterator.personalizeKey,
                nickName: iterator.nickName,
                briefName: iterator.briefName,
                lookupKey: iterator.additionalRef,
                branchDescription: iterator.branchDescription ? iterator.branchDescription : '',
                generalLedgerBriefNameEng: iterator.generalLedgerBriefNameEng ? iterator.generalLedgerBriefNameEng : '',
                previewProperty: 'accountNumber',
                status: iterator.statusDescription,
                statusCode: iterator.status,
                accountFormat: this.accountsService.returnFormattedAccount(iterator).accountFormat
            };
            //added by Marina TP:#1433069 to include the excludeType property with each account if the lookup is multiselect
            if (this.options.multiple) {
                account.excludeType = iterator.excludeType;
            }
            accountsList.push(account);
        }
        return accountsList;
    }
    /**
     * preparing request data
     * @param cifInfo: any
     */
    prepareRequestData(cifInfo) {
        let requestData = {};
        if (cifInfo && cifInfo.omniUserVO) {
            requestData = {
                // vsBranchCode: cifInfo.branchCode,
                userCifNo: cifInfo.omniUserVO.CIF_NO,
                type: 'A'
            };
        }
        if (this.options.queryParams != null && this.options.queryParams !== undefined && this.options.queryParams !== '') {
            requestData = {
                commonParametersList: this.options.queryParams
            };
        }
        if (this.options.accountType != null && this.options.accountType !== undefined && this.options.accountType !== '') {
            requestData.accountType = this.options.accountType;
        }
        if (this.options.glTypes != null && this.options.glTypes !== undefined && this.options.glTypes !== '') {
            requestData.permittedGls = this.options.glTypes;
        }
        if (this.options.fromTo !== null && this.options.fromTo !== undefined && this.options.fromTo !== '') {
            requestData.fromTo = this.options.fromTo;
        }
        if (this.options.endUserId !== null && this.options.endUserId !== undefined && this.options.endUserId !== '') {
            requestData.endUserId = this.options.endUserId;
        }
        if (this.options.fromCurrency !== null && this.options.fromCurrency !== undefined) {
            requestData.fromCurrency = this.options.fromCurrency;
        }
        else if (this.options.toCurrency !== null && this.options.toCurrency !== undefined) {
            requestData.toCurrency = this.options.toCurrency;
        }
        if (this.options.accountAllowedCurrencies != null && this.options.accountAllowedCurrencies !== undefined) {
            if (typeof this.options.accountAllowedCurrencies === 'string') {
                requestData.accountAllowedCurrencies = this.options.accountAllowedCurrencies;
            }
            else {
                let temp = '';
                // eslint-disable-next-line guard-for-in
                for (const val in this.options.accountAllowedCurrencies) {
                    const value = this.options.accountAllowedCurrencies[val];
                    temp += value + ',';
                }
                temp = temp.slice(0, temp.lastIndexOf(','));
                requestData.accountAllowedCurrencies = temp;
            }
        }
        if (this.options.accountAllowedTypes != null && this.options.accountAllowedTypes !== undefined) {
            if (typeof this.options.accountAllowedTypes === 'string') {
                requestData.accountAllowedTypes = this.options.accountAllowedTypes;
            }
            else {
                let temp = '';
                // eslint-disable-next-line guard-for-in
                for (const val in this.options.accountAllowedTypes) {
                    const value = this.options.accountAllowedTypes[val];
                    temp += value + ',';
                }
                temp = temp.slice(0, temp.lastIndexOf(','));
                requestData.accountAllowedTypes = temp;
            }
        }
        return requestData;
    }
    /**
     * will fetch the list of accounts from server based currecy filter
     */
    fetchAccountBasedOnCurrency(currency) {
        // TODO: when service is available: account list will be fetched from server based on currency if passed any
        return this.options.listOfAccounts;
    }
    onChange(event) {
        this.logger.log(event);
        // TODO: get the updated data from server
    }
    populateOwnAccountMap() {
        let accountNumberMap = {};
        let accountBalanceMap = {};
        let accountAvailableBalanceMap = {};
        accountNumberMap = {
            key: 'accountNumber',
            value: '--- --- --- ---',
            isEdit: false,
        };
        accountBalanceMap = {
            key: 'currentBalance',
            value: '0.0',
            isEdit: false,
        };
        accountAvailableBalanceMap = {
            key: 'availableBalance',
            value: '0.0',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('account_key', accountNumberMap);
        this.labelValuesMap.set('balance_key', accountBalanceMap);
        this.labelValuesMap.set('available_balance_key', accountAvailableBalanceMap);
    }
    onChangeItem(event) {
        this.onAccountChange.emit(event);
    }
    onDeleteItem(account) {
        if (account) {
            this.onAccountDeleted.emit(account);
        }
    }
    handleMultipleSelection() {
        const accountList = this.options.setAllAccountsAsSelecetd ? this.complexLookupOptions.listOfOptions :
            (this.options.requestObject[this.options.fcName] ?
                this.complexLookupOptions.listOfOptions.filter(item => this.options.requestObject[this.options.fcName].some(item1 => item1.accountNumber == item.accountNumber)) : []);
        //edited by Marina TP:#1433069 to avoid adding excluded general or term accounts with the selected items
        this.complexLookupOptions.selectedItems = accountList.filter(element => (this.options.setAllAccountsAsSelecetd
            && (!element.excludeType || !(element.excludeType.includes(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].GENERAL_ACCOUNT_EXCLUDE_TYPE)
                || element.excludeType.includes(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].TERM_ACCOUNT_EXCLUDE_TYPE))))
            || !this.options.setAllAccountsAsSelecetd).map(element => {
            return Object.assign(Object.assign({ item: element[element.previewProperty] }, element), { itemLookup: element.lookupKey });
        });
        if (this.complexLookupOptions.selectedItems.length > 0)
            this.complexLookupComponentObj.setSelectedItems(this.complexLookupOptions.selectedItems);
    }
    removeAccount(account) {
        if (account) {
            if (this.allAccounts !== undefined) {
                this.complexLookupOptions.listOfOptions = this.allAccounts ? this.allAccounts.filter(item => account.accountNumber != item.accountNumber) : [];
            }
        }
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
    refreshAcounts(accountOptions) {
        this.complexLookupOptions.listOfOptions = Object.assign([], this.allAccounts);
        this.removeAccount(accountOptions);
    }
};
PsLookupOwnAccountsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] }
];
PsLookupOwnAccountsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onAccountChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onAccountDeleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }]
};
PsLookupOwnAccountsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-own-accounts',
        template: _raw_loader_ps_lookup_own_accounts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_own_accounts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]])
], PsLookupOwnAccountsComponent);



/***/ }),

/***/ "XDJu":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    (onDeleteItem)=\"onDeleteItem($event)\" [options]=\"complexLookupOptions\">\n  </ps-complex-lookup>\n\n</ps-container-complex>");

/***/ }),

/***/ "xB6I":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PsLookupOwnAccountComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupOwnAccountComponentModule", function() { return PsLookupOwnAccountComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var _ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-lookup-own-accounts.component */ "VEWP");







let PsLookupOwnAccountComponentModule = class PsLookupOwnAccountComponentModule {
};
PsLookupOwnAccountComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnAccountsComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputVarcharComponentModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]
        ],
        exports: [
            _ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnAccountsComponent"]
        ],
        entryComponents: [
            _ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnAccountsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupOwnAccountComponentModule);



/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map