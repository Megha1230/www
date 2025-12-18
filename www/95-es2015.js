(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "2UoO":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personalize-accounts/personalize-accounts.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptionStep1\" id=\"personalization_panel1\">\n      <ps-lookup-own-accounts #generalAccountsRef id=\"'transferFrom'+ id\" [options]=\"generalAccountOptions\"\n        (onAccountDeleted)=\"deleteAccount($event,'G')\" (onAccountChange)=\"onAccountsChanged($event, 'G')\">\n      </ps-lookup-own-accounts>\n      <ps-lookup-own-accounts #termAccountsRef id=\"'payment'+ id\" [options]=\"termAccountOptions\"\n        (onAccountDeleted)=\"deleteAccount($event,'T')\" (onAccountChange)=\"onAccountsChanged($event, 'T')\">\n      </ps-lookup-own-accounts>\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"transferAccountOptions\"></ps-lookup-own-accounts>\n      <ps-lookup-own-accounts id=\"'payment'+ id\" [options]=\"paymentAccountOptions\"></ps-lookup-own-accounts>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "Y4JH":
/*!***************************************************************************!*\
  !*** ./src/app/pages/personalize-accounts/personalize-accounts.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbGl6ZS1hY2NvdW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cCdF":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalize-accounts/personalize-accounts.page.ts ***!
  \*************************************************************************/
/*! exports provided: PersonalizeAccountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizeAccountsPage", function() { return PersonalizeAccountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personalize_accounts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personalize-accounts.page.html */ "2UoO");
/* harmony import */ var _personalize_accounts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personalize-accounts.page.scss */ "Y4JH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");













let PersonalizeAccountsPage = class PersonalizeAccountsPage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonService, logger, router, omniPull) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.router = router;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.personalizeVO = {};
        this.stepperOptions = {
            stepperName: 'cash_and_cheque_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['cash_cheq_collection_step1'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.updateUserInfoProfile,
                group: this.formGroup,
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateScreenVO(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
            },
            requestObject: this.personalizeVO
        };
        this.panelOptionStep1 = {
            isExpandable: true,
            labelKey: 'my_accounts_key',
            iconName: 'document',
            expanded: true
        };
        this.generalAccountOptions = {
            labelKey: 'general_accounts_key',
            placeHolder: 'select_general_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'generalAccounts',
            accountType: 'G',
            fromTo: 'to',
            multiple: true,
            requestObject: this.personalizeVO,
            setAllAccountsAsSelecetd: true
        };
        this.termAccountOptions = {
            labelKey: 'term_deposit_accounts_key',
            placeHolder: 'select_term_deposit_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'termAccounts',
            accountType: 'F',
            fromTo: 'to',
            multiple: true,
            requestObject: this.personalizeVO,
            setAllAccountsAsSelecetd: true
        };
        this.excludedTermAccounts = [];
        this.excludedTermAccounts_lookupKey = [];
        this.excludedGeneralAccounts = [];
        this.excludedGeneralAccounts_lookupKey = [];
        this.selectedAccountList = [];
        this.selectedTermAccountList = [];
        this.transferAccountOptions = {
            labelKey: 'my_default_transfer_account_key',
            placeHolder: 'select_my_default_transfer_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'defaultAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.personalizeVO
        };
        this.paymentAccountOptions = {
            labelKey: 'my_default_qr_code_payment_account_key',
            placeHolder: 'select_my_default_qr_code_payment_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'defaultQrAccount',
            accountType: 'G',
            fromTo: 'from',
            purpose: 'QR',
            requestObject: this.personalizeVO
        };
    }
    ngOnInit() {
        super.init();
    }
    //edited by Marina TP:#1433069; no need to update the excluded list on each delete as it will be updated once before
    //submit depending on the chosen values
    deleteAccount(account, type) {
        // if (account && account !== undefined) {
        //   if (type === 'G') {
        //     if (this.excludedGeneralAccounts.find(item => item.accountNumber === account.accountNumber) === undefined) {
        //       delete account['excludeType']  //added by Marina TP:#1433069 to avoid sending unnecessary property with account object
        //       this.excludedGeneralAccounts.push(account);
        //       this.excludedGeneralAccounts_lookupKey.push(account.lookupKey);
        //     }
        //   } else {
        //     if (this.excludedTermAccounts.find(item => item.accountNumber === account.accountNumber) === undefined) {
        //       delete account['excludeType'] //added by Marina TP:#1433069 to avoid sending unnecessary property with account object
        //       this.excludedTermAccounts.push(account);
        //       this.excludedTermAccounts_lookupKey.push(account.lookupKey);
        //     }
        //   }
        // }
    }
    updateScreenVO(resp) {
        this.filterExcludedAccounts();
        this.updateSession();
        // Added By MFawzy TP:#1433069 - Requested by OSRV team to allow the [updateUserInfo] service to save the excluded accounts in DB
        this.personalizeVO['type'] = 'A';
    }
    //added by Marina TP:#1433069 to avoid not sending any excluded accounts in case user submitted without change his previous choices 
    filterExcludedAccounts() {
        //loop on list of accounts and return the account that is not included in the screen VO values (chosen accounts)
        this.excludedGeneralAccounts = this.generalAccountsRef.complexLookupOptions.listOfOptions.filter(account => { var _a; return !((_a = this.personalizeVO[this.generalAccountOptions.fcName]) === null || _a === void 0 ? void 0 : _a.includes(account)); });
        this.excludedGeneralAccounts_lookupKey = this.excludedGeneralAccounts.map(account => account.lookupKey);
        this.excludedTermAccounts = this.termAccountsRef.complexLookupOptions.listOfOptions.filter(account => { var _a; return !((_a = this.personalizeVO[this.termAccountOptions.fcName]) === null || _a === void 0 ? void 0 : _a.includes(account)); });
        this.excludedTermAccounts_lookupKey = this.excludedTermAccounts.map(account => account.lookupKey);
        //delete the chosen accounts from the screen VO because OSRV team saves the excluded ones not the chosen
        this.deleteFromScreenVO([this.generalAccountOptions.fcName, this.generalAccountOptions.fcName + '_lookupKey', this.termAccountOptions.fcName, this.termAccountOptions.fcName + '_lookupKey']);
        //remove escludedType property from accounts objects as it is not needed to be sent 
        this.personalizeVO['excludedGeneralAccounts'] = this.excludedGeneralAccounts.map(account => { delete account.excludeType; return account; });
        this.personalizeVO['excludedGeneralAccounts_lookupKey'] = this.excludedGeneralAccounts_lookupKey;
        this.personalizeVO['excludedTermAccounts'] = this.excludedTermAccounts.map(account => { delete account.excludeType; return account; });
        this.personalizeVO['excludedTermAccounts_lookupKey'] = this.excludedTermAccounts_lookupKey;
    }
    //edited by Marina TP:#1433069; no need to update the excluded list on each change as it will be updated once before
    //submit depending on the chosen values
    onAccountsChanged(accounts, type) {
        // if (accounts && accounts) {
        //   this.selectedAccountList = accounts;
        //   const excludedAccountList = type === 'G' ? this.excludedGeneralAccounts : this.excludedTermAccounts;
        //   const excludedAccountList_lookupKey = type === 'G' ? this.excludedGeneralAccounts_lookupKey : this.excludedTermAccounts_lookupKey;
        //   if (excludedAccountList.length !== 0) {
        //     for (const acc of this.selectedAccountList) {
        //       if (excludedAccountList.find(item => item.accountNumber === acc.accountNumber)) {
        //         excludedAccountList.splice(excludedAccountList.findIndex(item => item.accountNumber === acc.accountNumber), 1);
        //         excludedAccountList_lookupKey.splice(excludedAccountList_lookupKey.findIndex(item => item === acc.accountNumber), 1);
        //       }
        //     }
        //   }
        // }
    }
    updateSession() {
        const personalization = this.commonService.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PERSONALIZATION_CO) || {}; //Modified by ghada, tp1583585 for handling the case when user have no personalization 
        personalization.defaultTransferAccKey = this.formGroup.controls[this.transferAccountOptions.fcName].value['personalizeKey'];
        personalization.defaultQrPaymentAccKey = this.formGroup.controls[this.paymentAccountOptions.fcName].value['personalizeKey'];
        this.commonService.session.remove(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PERSONALIZATION_CO);
        this.commonService.session.append(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PERSONALIZATION_CO, personalization);
    }
    //Added by ghada, tp1582982 for cleaner code by removing duplicatations
    deleteFromScreenVO(fcnamesList) {
        for (const fcname of fcnamesList) {
            delete this.personalizeVO[fcname];
        }
    }
};
PersonalizeAccountsPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] }
];
PersonalizeAccountsPage.propDecorators = {
    generalAccountsRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['generalAccountsRef',] }],
    termAccountsRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['termAccountsRef',] }]
};
PersonalizeAccountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personalize-accounts',
        template: _raw_loader_personalize_accounts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personalize_accounts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])
], PersonalizeAccountsPage);



/***/ })

}]);
//# sourceMappingURL=95-es2015.js.map