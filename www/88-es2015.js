(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "J2PC":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ipn-money-transfer/ipn-money-transfer.page.ts ***!
  \*********************************************************************/
/*! exports provided: IPNMoneyTransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPNMoneyTransferPage", function() { return IPNMoneyTransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ipn_money_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ipn-money-transfer.page.html */ "rqRg");
/* harmony import */ var _ipn_money_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipn-money-transfer.page.scss */ "dsgx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");











let IPNMoneyTransferPage = class IPNMoneyTransferPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(commonService, omniPull) {
        super();
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.IPNMonyTransferVO = {};
        this.stepperOptions = {
            stepperName: 'IPN_money_transfer_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: [
                'IPN_money_transfer_step1',
            ],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.fundstransferEndPoint,
                group: this.formGroup,
            },
            requestObject: this.IPNMonyTransferVO,
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'IPN_money_transfer_details_key',
            iconName: 'crop',
            expanded: true,
        };
        this.fromAccountOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.IPNMonyTransferVO
        };
        this.beneficiaryAccountTypeOptions = {
            group: this.formGroup,
            fcName: 'beneficiaryAccountType',
        };
        this.cardNumberOptions = {
            group: this.formGroup,
            labelKey: 'card_number_key',
            placeHolder: 'enter_card_number_key',
            fcName: 'cardNumber'
        };
        this.mobileWalletNumberOptions = {
            placeHolder: 'enter_mobile_wallet_number_key',
            labelKey: 'mobile_wallet_number_key',
            group: this.formGroup,
            fcName: 'mobileWalletNumber',
            validate: false
        };
        this.phoneNumberOptions = {
            group: this.formGroup,
            labelKey: 'mobile_number_key',
            placeHolder: 'mobile_key',
            fcName: 'mobileNumber',
            validate: false
        };
        this.beneficiaryNameOptions = {
            group: this.formGroup,
            labelKey: 'beneficiary_name_key',
            placeHolder: 'defaulted_label_key',
            fcName: 'beneficiaryName'
        };
        this.receiverNameOptions = {
            group: this.formGroup,
            labelKey: 'receiver_name_key',
            placeHolder: 'receiver_name_label_key',
            fcName: 'receiverName'
        };
        this.instantPayAddressOptions = {
            addressOptions: {
                group: this.formGroup,
                labelKey: 'ipa_instant_pay_adress_key',
                placeHolder: 'enter_ipa_instant_pay_address_key',
                fcName: 'address'
            },
            pspHandlerOptions: {
                labelKey: 'psp_handler_key',
                placeHolder: 'select_psp_handler_key',
                fcName: 'pspHandler',
                group: this.formGroup
            },
            group: this.formGroup
        };
        this.accountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'account_number_key',
            placeHolder: 'enter_account_no_key',
            group: this.formGroup
        };
        this.banksOptions = {
            categoryLabelKey: 'bank_key',
            categoryPlaceholderKey: 'select_bank_key',
            categoryFcName: 'bank',
            subCategoryLabelKey: 'branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: this.formGroup,
            requestObject: this.IPNMonyTransferVO
        };
        this.amountOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'currency'
            },
            amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'amount',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3
            },
            requestObject: this.IPNMonyTransferVO,
            showLimitLabel: false
        };
        this.purposeOptions = {
            labelKey: 'purpose_key',
            placeHolder: 'enter_purpose_key',
            group: this.formGroup,
            fcName: 'purpose'
        };
        this.feesLabelOptions = { fcName: 'fees' };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
    }
    //TODO: will be modified when returnChargesDetails returns a response 
    checkFees(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.formGroup.controls[this.amountOptions.amountOptions.fcName].value
                && this.formGroup.controls[this.beneficiaryAccountTypeOptions.fcName].value) {
                const feesReqParam = {
                    amount: this.formGroup.controls[this.amountOptions.amountOptions.fcName].value,
                    beneficiaryAccountType: this.formGroup.controls[this.beneficiaryAccountTypeOptions.fcName].value
                };
                yield this.omniPull.returnChargesDetails(feesReqParam).then(result => {
                    this.feesLabelOptions.labelKey = this.commonService.translate('your_fees_is_20_LE_key');
                }, (err) => {
                    console.log(err);
                });
            }
        });
    }
    validateBeneficiary(event, benefType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = {};
            switch (benefType) {
                case ('phoneNumber'):
                    params = {
                        commonParametersList: {
                            mobileNumber: event.newValue
                        }
                    };
                    break;
                case ('cardNumber'):
                    params = {
                        commonParametersList: {
                            cardNumber: event.newValue
                        }
                    };
                    break;
                case ('address'):
                    params = this.formGroup.controls[this.instantPayAddressOptions.pspHandlerOptions.fcName].value ?
                        {
                            commonParametersList: {
                                address: event.value + this.formGroup.controls.formData[this.instantPayAddressOptions.pspHandlerOptions.fcName].description
                            }
                        } : {};
                    break;
                case ('handler'):
                    params = this.formGroup.controls[this.instantPayAddressOptions.addressOptions.fcName].value ?
                        {
                            commonParametersList: {
                                address: this.formGroup.controls[this.instantPayAddressOptions.addressOptions.fcName].value + event.description
                            }
                        } : {};
                    break;
            }
            if (Object.keys(params).length > 0) {
                yield this.omniPull.validateIPA(params).then(result => {
                    //TODO: will be modefied to set beneficiary name when result is available
                    this.commonService.setValInsideNestedObj(this.beneficiaryNameOptions.fcName, "name", this.IPNMonyTransferVO);
                });
            }
        });
    }
    handleFromAccountChange(account) {
        this.amountOptions.currency = account.currencyBriefNameEnglish;
        this.amountOptions.currencyCode = account.currency;
        this.commonService.setValInsideNestedObj(this.amountOptions.currenciesOptions.fcName, account.currency, this.IPNMonyTransferVO);
        this.commonService.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.amountOptions.currenciesOptions.fcName], 1);
    }
    isAccountType(controlName, accountType) {
        var _a, _b;
        return ((_b = (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.controls[controlName]) === null || _b === void 0 ? void 0 : _b.value) === accountType;
    }
};
//Added By OmarTalaat BUG:AZDB-2020 For ben account type == Account Number  Named constant for readability
IPNMoneyTransferPage.AccountType = {
    AN: 'AN',
    MWN: 'MWN',
};
IPNMoneyTransferPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
IPNMoneyTransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ipn-money-transfer',
        template: _raw_loader_ipn_money_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ipn_money_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], IPNMoneyTransferPage);



/***/ }),

/***/ "dsgx":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ipn-money-transfer/ipn-money-transfer.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpcG4tbW9uZXktdHJhbnNmZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "rqRg":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ipn-money-transfer/ipn-money-transfer.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"IPN_money_transfer_details\">\n      <ps-lookup-own-accounts id=\"fromAccount\" [options]=\"fromAccountOptions\"\n        (onAccountChange)=\"handleFromAccountChange($event)\"> </ps-lookup-own-accounts>\n      <ps-lov-beneficiary-account-type [options]=\"beneficiaryAccountTypeOptions\"\n        (onPsChange)=\"checkFees($event)\"></ps-lov-beneficiary-account-type>\n      <ps-entity-phone-number id=\"phoneNumber\" [options]='phoneNumberOptions'\n        (onPsChange)=\"validateBeneficiary($event,'phoneNumber')\"></ps-entity-phone-number>\n      <ps-entity-phone-number id=\"mobileWalletNumber\" [options]='mobileWalletNumberOptions'></ps-entity-phone-number>\n      <ps-complex-instant-pay-address [options]=\"instantPayAddressOptions\"\n        (onAddressChange)=\"validateBeneficiary($event,'address')\"\n        (onHandlerChange)=\"validateBeneficiary($event,'handler')\"></ps-complex-instant-pay-address>\n      <ps-input-card-number id=\"cardNumber\" [options]=\"cardNumberOptions\"\n        (onPsChange)=\"validateBeneficiary($event,'cardNumber')\">\n      </ps-input-card-number>\n      <ps-banks id=\"banks\" [options]=\"banksOptions\"> </ps-banks>\n      <ps-input-account-number id=\"accountNumber\" [options]=\"accountNumberOptions\"></ps-input-account-number>\n      <ps-input-varchar id=\"beneficiaryName\" [options]=\"beneficiaryNameOptions\"></ps-input-varchar>\n      <ps-input-varchar id=\"receiverName\" [options]=\"receiverNameOptions\">\n      </ps-input-varchar>\n      <ps-complex-amount id=\"amount\" [options]=\"amountOptions\"\n        (onAmountChanged)=\"checkFees($event)\"></ps-complex-amount>\n      <ps-label id=\"fees\" [options]=\"feesLabelOptions\"> </ps-label>\n      <ps-input-varchar id=\"purpose\" [options]=\"purposeOptions\"> </ps-input-varchar>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=88-es2015.js.map