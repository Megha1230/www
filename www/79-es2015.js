(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "0pal":
/*!*****************************************************************!*\
  !*** ./src/app/pages/card-management/card-management.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "G5sy":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-management/card-management.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"options\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"options.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1\" id=\"card_management_information\">\n      <ps-container-lookup-option [options]=\"cardOptions\" [itemCard]=\"itemCard\"></ps-container-lookup-option>\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"blockCard\" [options]=\"panelOptions2\" id=\"card_block_options\">\n\n      <ps-dropdown-card-core-reasons id=\"card-block-reason\" [options]=\"cardBlockReason\">\n      </ps-dropdown-card-core-reasons>\n\n\n      <ps-select-toggle class=\"onboarding_toggles\" [options]=\"cardBlockToggleOptions\">\n      </ps-select-toggle>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"renewCard\" [options]=\"panelOptions3\" id=\"card_renew_options\">\n\n      <ps-complex-location (parentFun)=\"hideDestinationMap()\" [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"limitUpdate && showPos\" [options]=\"panelOptions6\" id=\"card_pos_limit_update\">\n      <ps-complex-amount id=\"displayPosCurrentLimit\" [options]=\"currentPosLimitOptions\">\n      </ps-complex-amount>\n      <ng-container *ngIf=\"!isCredit\">\n        <ps-lov-periodicity [id]=\"'POSpriodicity'\" [options]=\"POSpriodicityOptions\">\n        </ps-lov-periodicity>\n        <ps-complex-amount id=\"utilizedPosLimit\" [options]=\"utilizedPosLimitOptions\">\n        </ps-complex-amount>\n        <ps-complex-amount id=\"remainingPostLimit\" [options]=\"remainingPosLimitOptions\">\n        </ps-complex-amount>\n      </ng-container>\n      <ps-input-amount id=\"requestPosLimitUpdate\" [options]=\"limitRequestPosOptions\">\n      </ps-input-amount>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"limitUpdate && showWd\" [options]=\"panelOptions7\" id=\"card_widthrawal_limit_update\">\n      <ps-complex-amount id=\"currentWdtLimit\" [options]=\"currentWdLimitOptions\">\n      </ps-complex-amount>\n      <ng-container *ngIf=\"!isCredit\">\n        <ps-lov-periodicity [id]=\"'WDpriodicity'\" [options]=\"WDpriodicityOptions\">\n        </ps-lov-periodicity>\n        <ps-complex-amount id=\"utilizedWdLimit\" [options]=\"utilizedWdLimitOptions\">\n        </ps-complex-amount>\n        <ps-complex-amount id=\"remainingWdLimit\" [options]=\"remainingWdLimitOptions\">\n        </ps-complex-amount>\n      </ng-container>\n\n      <ps-input-amount id=\"requestWdLimitUpdate\" [options]=\"limitRequestWdOptions\">\n      </ps-input-amount>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"unblockCard\" [options]=\"panelOptions8\">\n\n      <ps-dropdown-card-core-reasons id=\"card-unblock-reason\" [options]=\"cardUnblockReason\">\n      </ps-dropdown-card-core-reasons>\n\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"cardReplace\" [options]=\"replacementPanelOptions\" id=\"replacement_reason\">\n\n      <ps-dropdown-card-core-reasons [options]=\"cardReplaceReason\">\n      </ps-dropdown-card-core-reasons>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>");

/***/ }),

/***/ "eXmm":
/*!***************************************************************!*\
  !*** ./src/app/pages/card-management/card-management.page.ts ***!
  \***************************************************************/
/*! exports provided: CardManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardManagementPage", function() { return CardManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_management_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-management.page.html */ "G5sy");
/* harmony import */ var _card_management_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-management.page.scss */ "0pal");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/Cards/cards.service */ "GIS6");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");















let CardManagementPage = class CardManagementPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(logger, omniPull, navService, crdsSrvce) {
        super();
        this.logger = logger;
        this.omniPull = omniPull;
        this.navService = navService;
        this.crdsSrvce = crdsSrvce;
        this.CardManagementVO = {};
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            stepperName: 'card_management_stepper',
            numberOfSteps: 1,
            group: this.formGroup,
            submitOptions: {
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.cardActionRequestEndPoint,
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
            requestObject: this.CardManagementVO,
            isHorizontalStepper: true,
            namesofSteps: ['cardManagement']
        };
        this.blockCard = false;
        this.renewCard = false;
        this.limitUpdate = false;
        this.unblockCard = false;
        this.showAddress = false;
        this.showManualAddress = false;
        this.showDestinationBranchMap = false;
        this.enableCifBranch = false;
        this.enableDeliveryLoc = false;
        this.showHomeWorkAddress = false;
        this.showHomeAddress = false;
        this.cardReplace = false;
        this.isCredit = false;
        this.itemCard = {};
        this.cardOptions = {};
        this.showPos = false;
        this.showWd = false;
        this.panelOptions1 = {
            isExpandable: true,
            labelKey: 'card_information_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions2 = {
            isExpandable: true,
            labelKey: 'card_block_options_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions3 = {
            isExpandable: true,
            labelKey: 'card_renew_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions6 = {
            isExpandable: true,
            labelKey: 'pos_limit_update_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions7 = {
            isExpandable: true,
            labelKey: 'widthrawal_limit_update_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions8 = {
            isExpandable: true,
            labelKey: 'card_unblocking_key',
            iconName: 'document',
            expanded: true
        };
        this.replacementPanelOptions = {
            isExpandable: true,
            labelKey: 'card_replace_key',
            iconName: 'document',
            expanded: true
        };
        this.cardReplaceReason = {
            fcName: 'cardReplaceReason',
            group: this.formGroup,
            labelKey: 'card_replace_reason_key',
            placeHolder: 'select_card_replace_reason_key',
            iconOptions: {
                iconName: 'clipboard'
            },
            reasonType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].REPLACE_REASON_TYPE
        };
        this.deliveryAddressDetails = {
            collectionModeOptions: {
                group: this.formGroup,
                fcName: 'deliveryLoc'
            },
            branchLocationOptions: {
                fcName: 'mapAtmBranchesDropdown',
                group: this.formGroup,
            },
            homeAddressOptions: {
                placeHolder: 'address_details_key',
                labelKey: 'address_details_key',
                group: this.formGroup,
                fcName: 'addressDetails',
                requestVO: this.CardManagementVO
            },
            workAddressOptions: {
                placeHolder: 'address_details_key',
                labelKey: 'address_details_key',
                group: this.formGroup,
                fcName: 'addressDetails',
                requestVO: this.CardManagementVO
            },
            otherAddressOptions: {
                labelKey: 'address_details_key',
                rows: '3',
                cols: '10',
                fcName: 'otherAddressDetails',
                group: this.formGroup,
            },
            branchCifOptions: {
                placeHolder: 'request_branch_key',
                labelKey: 'request_branch_key',
                group: this.formGroup,
                fcName: 'branchName',
            },
            cifBranchChecking: true
        };
        this.cardBlockToggleOptions = {
            labelKey: 're_issue_card_key',
            placeHolder: 're_issue_card_key',
            group: this.formGroup,
            fcName: 'reIssueCard',
            psClass: 'toggleColor'
        };
        this.cardBlockReason = {
            fcName: 'cardBlockReason',
            group: this.formGroup,
            labelKey: 'card_block_reason_key',
            placeHolder: 'please_select_card_block_reason_key',
            iconOptions: {
                iconName: 'clipboard'
            },
            reasonType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].BlOCK_REASON_TYPE
        };
        this.cardUnblockReason = {
            fcName: 'cardUnblockReason',
            group: this.formGroup,
            labelKey: 'card_unblock_reason_key',
            placeHolder: 'select_card_unblock_reason_key',
            iconOptions: {
                iconName: 'clipboard'
            },
            reasonType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].UNBLOCK_REASON_TYPE
        };
        // currentPosLimitOptions: IOptionsPsKeyinInputExposed = {
        //   labelKey: 'current_pos_limit_key',
        //   fcName: 'currentPosLimit',
        //   group: this.formGroup
        // };
        this.limitRequestPosOptions = {
            fcName: 'requestPosLimit',
            group: this.formGroup,
            labelKey: 'requested_pos_limit_key',
            placeHolder: 'pls_enter_requested_pos_limit_key'
        };
        this.currentPosLimitOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                fcName: 'currencyPosCode',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'current_pos_limit_key',
                placeHolder: 'current_pos_limit_key',
                fcName: 'currentPosLimit',
                group: this.formGroup
            }
        };
        this.utilizedPosLimitOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                fcName: 'UtilizedCurrencyPos',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'utilized_pos_limit_key',
                placeHolder: 'utilized_pos_limit_key',
                fcName: 'utilizedPosLimit',
                group: this.formGroup
            }
        };
        this.remainingPosLimitOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                fcName: 'remainingCurrencyPos',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'remaining_pos_limit_key',
                placeHolder: 'remaining_pos_limit_key',
                fcName: 'remainingPosLimit',
                group: this.formGroup
            }
        };
        this.currentWdLimitOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                fcName: 'currencyWdCode',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'current_widthrawal_limit_key',
                placeHolder: 'current_widthrawal_limit_key',
                fcName: 'currentWdLimit',
                group: this.formGroup
            }
        };
        this.utilizedWdLimitOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                fcName: 'UtilizedCurrencyWd',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'utilized_wd_limit_key',
                placeHolder: 'utilized_wd_limit_key',
                fcName: 'utilizedWdLimit',
                group: this.formGroup
            }
        };
        this.remainingWdLimitOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                fcName: 'remainingCurrencyWd',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'remaining_wd_limit_key',
                placeHolder: 'remaining_wd_limit_key',
                fcName: 'remainingWdLimit',
                group: this.formGroup
            }
        };
        this.limitRequestWdOptions = {
            fcName: 'requestWdLimit',
            group: this.formGroup,
            labelKey: 'requested_widthrawal_limit_key',
            placeHolder: 'pls_enter_requested_widthrawal_limit_key'
        };
        this.POSpriodicityOptions = {
            labelKey: 'pos_periodicity_key',
            placeHolder: 'pos_periodicity_key',
            fcName: 'posPeriodicity',
            group: this.formGroup
        };
        this.WDpriodicityOptions = {
            labelKey: 'wd_periodicity_key',
            placeHolder: 'wd_periodicity_key',
            fcName: 'wdPeriodicity',
            group: this.formGroup
        };
        this.TrxLimitTypes = {
            POS: 0,
            WITHDRAWAL: 1
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        //Modified by ghada, tp1362045 for fixing the issue of seeting values to screen VO
        this.commonProv.copyObject(this.CardManagementVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
        delete this.options.requestObject.key;
        this.isCredit = this.CardManagementVO.cardType === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"].CREDIT_CARD_TYPE_NAME;
        this.logger.log('this.CardManagementVO', this.CardManagementVO);
        this.itemCard = this.CardManagementVO;
        this.cardOptions.formGroup = this.formGroup;
        this.cardOptions.labelsValueMap = this.navigationServices.getParamKey('labelsValueMap');
        this.cardOptions.headerMap = this.navigationServices.getParamKey('headerMap');
        this.cardOptions.showInitialCardValues = this.navigationServices.getParamKey('showInitialCardValues');
        switch (this.CardManagementVO.action) {
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_BLOCK: {
                this.blockCard = true;
                break;
            }
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_LIMIT_UPDATE: {
                this.limitUpdate = true;
                break;
            }
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_RENEW: {
                this.renewCard = true;
                break;
            }
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_UNBLOCK: {
                this.unblockCard = true;
                break;
            }
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_REPLACE: {
                this.cardReplace = true;
                break;
            }
        }
    }
    ionViewDidEnter() {
        var _a, _b, _c;
        super.ionViewDidEnter();
        this.fetchParameter();
        if (this.blockCard) {
            if (((_a = this.CardManagementVO) === null || _a === void 0 ? void 0 : _a.allowRenew) == '0') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cardBlockToggleOptions.fcName], 0);
            }
        }
        else if (this.limitUpdate) {
            this.showPos = (((_b = this.CardManagementVO) === null || _b === void 0 ? void 0 : _b.posLimitOverride) === '1' && this.CardManagementVO.posLimitBasedOn != undefined) ? true : false;
            this.showWd = ((_c = this.CardManagementVO) === null || _c === void 0 ? void 0 : _c.wdLimitOverride) === '1' ? true : false;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.currentPosLimitOptions.amountOptions.fcName,
                this.currentPosLimitOptions.currenciesOptions.fcName, this.utilizedPosLimitOptions.amountOptions.fcName,
                this.utilizedPosLimitOptions.currenciesOptions.fcName, this.remainingPosLimitOptions.amountOptions.fcName,
                this.remainingPosLimitOptions.currenciesOptions.fcName, this.POSpriodicityOptions.fcName, this.currentWdLimitOptions.amountOptions.fcName,
                this.currentWdLimitOptions.currenciesOptions.fcName, this.utilizedWdLimitOptions.amountOptions.fcName, this.utilizedWdLimitOptions.currenciesOptions.fcName,
                this.remainingWdLimitOptions.amountOptions.fcName, this.remainingWdLimitOptions.currenciesOptions.fcName, this.WDpriodicityOptions.fcName], 1);
            this.setLimitsDetails();
        }
    }
    setLimitsDetails() {
        if (this.showPos) {
            this.setLimitsCurrency([this.currentPosLimitOptions.currenciesOptions.fcName, this.utilizedPosLimitOptions.currenciesOptions.fcName, this.remainingPosLimitOptions.currenciesOptions.fcName]);
        }
        if (this.showWd) {
            this.setLimitsCurrency([this.currentWdLimitOptions.currenciesOptions.fcName, this.utilizedWdLimitOptions.currenciesOptions.fcName, this.remainingWdLimitOptions.currenciesOptions.fcName]);
        }
        if (!this.isCredit) {
            this.returnTransUtilizedAmount(this.CardManagementVO[this.POSpriodicityOptions.fcName], this.TrxLimitTypes.POS);
            this.returnTransUtilizedAmount(this.CardManagementVO[this.WDpriodicityOptions.fcName], this.TrxLimitTypes.WITHDRAWAL);
        }
    }
    onLocChange(values) {
        if (values && values.selectedObj) {
            if (values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE) {
                this.showAddress = false;
                this.showManualAddress = false;
                this.enableCifBranch = true;
            }
            else {
                this.enableCifBranch = false;
                if (values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].HOME_ADDRESS_VALUE || values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].WORK_ADDRESS_VALUE) {
                    this.showAddress = true;
                    this.showManualAddress = false;
                    this.showHomeWorkAddress = values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].HOME_ADDRESS_VALUE;
                }
                else if (values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE) {
                    this.showManualAddress = true;
                    this.showAddress = false;
                }
            }
        }
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].COLLECTION_DESTINATION_BRANCH).catch((error) => {
                this.logger.error('Error ! while fetching admin param in card management page ', error);
            });
            if (result !== -1 && result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.enableDeliveryLoc = true;
            }
            else {
                this.enableDeliveryLoc = false;
            }
        });
    }
    hideDestinationMap() { }
    //Added by ghada,tp#1357661 to fix the issue of being not able to submit a card blocking/Activation "this isa temp fix advised by Doris until Nabil commits a common fix on the issue"
    updateScreenVO() {
        delete this.CardManagementVO['key'];
        delete this.formGroup.controls.formData.value['key'];
    }
    //added by ghada, tp1362045 for retrieving and setting utilized amounts POS/Withdrawal
    returnTransUtilizedAmount(periodicity, trxType) {
        let requestData = {
            commonParametersList: {
                accountNumber: this.CardManagementVO.primaryAccount,
                fromDate: this.setTranactionsDate(periodicity).from,
                toDate: this.setTranactionsDate(periodicity).to,
                TransactionType: trxType == this.TrxLimitTypes.POS ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].POS_TRANSACTION_TYPE : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].WD_TRANSACTION_TYPE
            },
        };
        this.commonProv.presentLoading();
        this.omniPull.returnTransUtilizedAmount(requestData).then((result) => {
            // let result = {
            //   apiCode: -1,
            //   appId: 1,
            //   channelId: 1,
            //   cifName: "EL MOUSTAPHA EL WAVY",
            //   compCode: 1,
            //   gridModel: [],
            //   ocUserId: 1,
            //   operAutoApprovalFalg: "Y",
            //   operId: 1592,
            //   operType: "NA",
            //   outputCode: 0,
            //   outputNotification: "No Data Found",
            //   outputType: "S",
            //   posUtilizedAmount: 0,
            //   sessionId: "14657291-69b2-4011-9b34-30ceda68ff03",
            //   transferType: "A",
            //   typeDesc: "REQ",
            //   udid: "web_42f4b5a5bed597356c7c3d4460420c36_fe2729630015de55be5b1e54d1ca16b56db20202f157d01a3fa3ced13796bb7e_1282952613",
            //   userCifNo: "10035314",
            //   userName: "mromani",
            //   withdrawalUtilizedAmount: 0,
            //   workingCif: "10035314"
            // }
            if (result && result.outputCode == 0) {
                if (trxType == this.TrxLimitTypes.POS) {
                    this.commonProv.setValInsideNestedObj(this.utilizedPosLimitOptions.amountOptions.fcName, result.totalUtilizedAmount, this.CardManagementVO);
                    let remainingPosLimit = Number(this.CardManagementVO[this.currentPosLimitOptions.amountOptions.fcName]) - Number(this.CardManagementVO[this.utilizedPosLimitOptions.amountOptions.fcName]);
                    this.commonProv.setValInsideNestedObj(this.remainingPosLimitOptions.amountOptions.fcName, (remainingPosLimit || 0), this.CardManagementVO);
                }
                else {
                    this.commonProv.setValInsideNestedObj(this.utilizedWdLimitOptions.amountOptions.fcName, result.totalUtilizedAmount, this.CardManagementVO);
                    let remainingWDLimit = Number(this.CardManagementVO[this.currentWdLimitOptions.amountOptions.fcName]) - Number(this.CardManagementVO[this.utilizedWdLimitOptions.amountOptions.fcName]);
                    this.commonProv.setValInsideNestedObj(this.remainingWdLimitOptions.amountOptions.fcName, (remainingWDLimit || 0), this.CardManagementVO);
                }
            }
        }).catch(error => {
            this.logger.error('Error: While fetching scheduled transfers  :', error);
        }).finally(() => {
            this.commonProv.dismissLoading();
        });
    }
    setTranactionsDate(periodicity) {
        let from;
        let to;
        to = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().endOf('day').toDate());
        switch (periodicity) {
            case 'D': {
                from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().startOf('day').toDate());
                break;
            }
            case 'W': {
                from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(6, 'days').startOf('day').toDate());
                break;
            }
            case 'M': {
                from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'month').startOf('day').toDate());
                break;
            }
            case 'Y': {
                from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'year').startOf('day').toDate());
                break;
            }
            case 'Q': {
                from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(3, 'months').startOf('day').toDate());
                break;
            }
        }
        return { from, to };
    }
    setLimitsCurrency(fieldsList) {
        for (const fcName of fieldsList) {
            this.commonProv.setValInsideNestedObj(fcName, this.CardManagementVO.currencyCode, this.CardManagementVO);
        }
    }
};
CardManagementPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"] },
    { type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"] }
];
CardManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-management',
        template: _raw_loader_card_management_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_management_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"]])
], CardManagementPage);



/***/ })

}]);
//# sourceMappingURL=79-es2015.js.map