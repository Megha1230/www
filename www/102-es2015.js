(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "CEmr":
/*!***********************************************************!*\
  !*** ./src/app/pages/upgrade-card/upgrade-card.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWRlLWNhcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "VfvS":
/*!*********************************************************!*\
  !*** ./src/app/pages/upgrade-card/upgrade-card.page.ts ***!
  \*********************************************************/
/*! exports provided: UpgradeCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeCardPage", function() { return UpgradeCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upgrade_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upgrade-card.page.html */ "xR1C");
/* harmony import */ var _upgrade_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upgrade-card.page.scss */ "CEmr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");















let UpgradeCardPage = class UpgradeCardPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(loggerP, nav, omniPull, translateSrv) {
        super();
        this.loggerP = loggerP;
        this.nav = nav;
        this.omniPull = omniPull;
        this.translateSrv = translateSrv;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.upgradeCardVO = {};
        this.showDebitCard = false;
        this.enableRequestCifBranch = false;
        this.cifInfo = {};
        this.stepperOptions = {
            stepperName: 'upgrade_card_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['upgrade_card_step1'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__["PsCommonSettings"].serviceUrl.commonSubmitAction,
                group: this.formGroup,
                postCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.checkUnsettledBalance(response));
                        });
                    },
                    params: [this],
                    executionClass: this
                },
            },
            requestObject: this.upgradeCardVO,
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'card_details_key',
            iconName: 'document',
            expanded: true
        };
        this.cardHolderNameOptions = {
            labelKey: 'card_holder_name_key',
            placeHolder: 'card_holder_name_key',
            group: this.formGroup,
            fcName: 'cardHolderName'
        };
        this.primaryAccountOptions = {
            labelKey: 'primary_account_key',
            placeHolder: 'primary_account_key',
            currency: '',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            fcName: 'primaryAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            requestObject: this.upgradeCardVO,
        };
        this.secondaryAccountOptions = {
            labelKey: 'secondary_account_key',
            placeHolder: 'secondary_account_key',
            currency: '',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            fcName: 'secondaryAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            requestObject: this.upgradeCardVO,
        };
        this.debitCardTypeOptions = {
            labelKey: 'debit_card_type_key',
            placeHolder: 'select_card_type_key',
            group: this.formGroup,
            fcName: 'debitCardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CARDTYPE_D
        };
        this.creditCardTypeOptions = {
            labelKey: 'credit_card_type_key',
            placeHolder: 'select_card_type_key',
            group: this.formGroup,
            fcName: 'creditCardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CARDTYPE_C
        };
        this.settlementAccountOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'settlement_account_key',
            currency: '',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            fcName: 'settlementAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            requestObject: this.upgradeCardVO,
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_map_branch_key',
            iconName: 'location-pin',
            expanded: true,
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup,
        };
        this.deliveryAddressDetails = {
            collectionModeOptions: {
                group: this.formGroup,
                fcName: 'deliveryLoc'
            },
            branchLocationOptions: {
                fcName: 'destinationBranchesDropdown',
                group: this.formGroup,
                countryRegionCityOptions: {
                    countriesOptions: {
                        fcName: 'destinationBranchCountry'
                    },
                    regionOptions: {
                        fcName: 'destinationBranchRegion'
                    },
                    cityOptions: {
                        fcName: 'destinationBranchCity'
                    }
                },
                branchesOptions: {
                    fcName: 'destinationBranch'
                }
            },
            homeAddressOptions: {
                placeHolder: 'home_address_key',
                labelKey: 'home_address_key',
                group: this.formGroup,
                fcName: 'homeAddress',
                requestVO: this.upgradeCardVO,
            },
            workAddressOptions: {
                placeHolder: 'work_address_key',
                labelKey: 'work_address_key',
                group: this.formGroup,
                fcName: 'workAddress',
                requestVO: this.upgradeCardVO,
            },
            otherAddressOptions: {
                labelKey: 'address_details_key',
                rows: '3',
                cols: '10',
                fcName: 'otherAddressDetails',
                group: this.formGroup,
            },
            branchCifOptions: {
                labelKey: 'account_branch_key',
                group: this.formGroup,
                fcName: 'branchName',
            },
            cifBranchChecking: true
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.showDebitCard = this.commonProv.activePage.value.operID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].UPGRADE_CREDIT_CARD ? false : true;
        if (this.showDebitCard) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardTypeOptions.fcName, this.cardHolderNameOptions.fcName, this.settlementAccountOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardTypeOptions.fcName, this.primaryAccountOptions.fcName, this.secondaryAccountOptions.fcName], 1);
        }
        else {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardTypeOptions.fcName, this.cardHolderNameOptions.fcName, this.settlementAccountOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardTypeOptions.fcName, this.primaryAccountOptions.fcName, this.secondaryAccountOptions.fcName], 0);
        }
    }
    ionViewDidEnter() {
        var _a, _b;
        super.ionViewDidEnter();
        this.fetchParameter();
        this.defaultCardAccount = this.nav.getAllParams().primaryAccount;
        if (this.showDebitCard) {
            const secondaryAccount = this.nav.getAllParams().secondaryAccount;
            this.commonProv.setValInsideNestedObj(this.primaryAccountOptions.fcName, this.defaultCardAccount, this.upgradeCardVO);
            this.commonProv.setValInsideNestedObj(this.primaryAccountOptions.fcName + "_lookupKey", this.defaultCardAccount, this.upgradeCardVO);
            if (secondaryAccount) {
                this.commonProv.setValInsideNestedObj(this.secondaryAccountOptions.fcName, secondaryAccount, this.upgradeCardVO);
                this.commonProv.setValInsideNestedObj(this.secondaryAccountOptions.fcName + "_lookupKey", secondaryAccount, this.upgradeCardVO);
            }
        }
        else {
            const defaultCardHolderName = this.translateSrv.currentLang.toLocaleLowerCase() === 'ar' ? (_a = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).customerInfoCO) === null || _a === void 0 ? void 0 : _a.longNameArabic : (_b = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).customerInfoCO) === null || _b === void 0 ? void 0 : _b.longName;
            this.commonProv.setValInsideNestedObj(this.cardHolderNameOptions.fcName, defaultCardHolderName, this.upgradeCardVO);
            this.commonProv.setValInsideNestedObj(this.settlementAccountOptions.fcName, this.defaultCardAccount, this.upgradeCardVO);
            this.commonProv.setValInsideNestedObj(this.settlementAccountOptions.fcName + "_lookupKey", this.defaultCardAccount, this.upgradeCardVO);
        }
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
            const result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)
                .catch((error) => {
                this.loggerP.error(error);
            });
            if (result !== -1 && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.enableRequestCifBranch = false;
            }
            else {
                this.enableRequestCifBranch = true;
            }
            this.hideShowRequestBranch();
        });
    }
    onSelectBranch(event) {
        if (event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.upgradeCardVO);
        }
    }
    hideMap() {
        let modeOfCollection = this.upgradeCardVO ? this.upgradeCardVO[this.deliveryAddressDetails.collectionModeOptions.fcName] : {};
        if ((modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE) {
            if (this.deliveryAddressDetails.enableCifBranch == 1) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 1, true);
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['destBranch'], 1, true);
            }
        }
        else {
            if (this.deliveryAddressDetails.enableCifBranch == 1) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 0, true);
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['destBranch'], 0, true);
            }
        }
    }
    hideShowRequestBranch() {
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['upgrade_card_req_panel2'], !this.enableRequestCifBranch);
    }
    checkUnsettledBalance(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.showDebitCard) {
                // TODO: check for any unsettled balance on the current ((credit)) card  --> Call web service
                if (response && response.outputCode === -1) {
                    const settleBalanceAlertController = {
                        cssClass: 'cronto-code',
                        id: 'settle-balance',
                        header: 'please_settle_oustanding_balance_in_order_to_proceed_key',
                        headerImageOptions: {
                            imageName: '',
                            imageBase64Url: ''
                        },
                        buttons: [
                            {
                                role: 'cancel',
                                options: {
                                    labelKey: 'cancel_key',
                                    psClass: 'ps-drafts-report-cancel-button',
                                    group: null
                                },
                                handler: () => {
                                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].dismissAllModals();
                                }
                            },
                            {
                                role: 'cancel',
                                options: {
                                    labelKey: 'ok_key',
                                    iconName: '',
                                    psClass: 'ps-drafts-report-submit-button',
                                    group: null
                                },
                                handler: () => {
                                    let settlementPage = {
                                        operID: 51,
                                        title: 'CREDIT_CARD_SETTLEMENT_REQ',
                                        component: 'credit-card-settlement',
                                        icon: "card-status-report",
                                        param: {
                                            accountNumber: this.defaultCardAccount,
                                        }
                                    };
                                    this.nav.openPage(settlementPage);
                                }
                            }
                        ]
                    };
                    this.commonProv.presentPsAlert(settleBalanceAlertController, 'settle-balance');
                }
            }
        });
    }
};
UpgradeCardPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
UpgradeCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upgrade-card',
        template: _raw_loader_upgrade_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upgrade_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], UpgradeCardPage);



/***/ }),

/***/ "xR1C":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upgrade-card/upgrade-card.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"upgrade_card_req_panel\">\n\n      <ps-input-varchar id=\"cardHolderName\" [options]=\"cardHolderNameOptions\"></ps-input-varchar>\n\n      <ps-lookup-own-accounts id=\"'primaryAccount'+ id\" [options]=\"primaryAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-dropdown-card-types id=\"debitCardType\" [options]=\"debitCardTypeOptions\">\n      </ps-dropdown-card-types>\n      <ps-dropdown-card-types id=\"creditCardType\" [options]=\"creditCardTypeOptions\">\n      </ps-dropdown-card-types>\n\n      <ps-lookup-own-accounts id=\"'secondaryAccount'+ id\" [options]=\"secondaryAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-lookup-own-accounts id=\"settlementAccountid\" [options]=\"settlementAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-complex-location (parentFun)=\"hideMap()\" [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"upgrade_card_req_panel2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n\n  </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=102-es2015.js.map