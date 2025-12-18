(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "GIS6":
/*!**********************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psServices/Cards/cards.service.ts ***!
  \**********************************************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../omni-common/omni-pull.service */ "ZyuK");
var CardsService_1;




/*
Created by Waleed Aly 03 April 2023 to encapsulated repeated code needed in different cards components "debit,credit,prepaid"
*/
let CardsService = CardsService_1 = class CardsService {
    constructor(OmniPull) {
        this.OmniPull = OmniPull;
    }
    populateCards(Cards, _cardTypeName) {
        let listOfCards = [];
        for (const iterator of Cards) {
            if (iterator.cardNo) {
                const cardItem = {
                    cardNumber: iterator.cardNo,
                    cardName: iterator.cardName,
                    oldCardName: iterator.oldCardName,
                    cardType: iterator.cardType,
                    cardTypeName: _cardTypeName,
                    //  cardTypeName: iterator.cardType === CommonBussinessConstant.DEBIT_CARD_TYPE ? CommonBussinessConstant.DEBIT_CARD_TYPE_NAME : CommonBussinessConstant.CREDIT_CARD_TYPE_NAME,
                    posLimitAmount: iterator.posLimitAmount,
                    withdrawalLimit: iterator.cardWdLimitAmount,
                    status: iterator.status,
                    statusCode: iterator.statusCode,
                    limitCheckingBy: iterator.limitCheckingBy,
                    currencyBriefName: iterator.currencyBriefName || iterator.currencyBriefNameEnglish,
                    currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                    expiryDate: iterator.expiryDate,
                    currencyCountryFlag: iterator.currencyCountryFlag,
                    cardNumberMask: iterator.cardNumberMask,
                    primaryAccount: iterator.primaryAccount,
                    cardLimit: iterator.cardLimit,
                    remainingBalance: iterator.remainingBalance,
                    settlementRate: iterator.settlementRate,
                    debitOrCredit: (_cardTypeName == CardsService_1.CREDIT_CARD_TYPE_NAME || _cardTypeName == CardsService_1.DEBIT_CARD_TYPE_NAME) ? iterator.debitOrCredit : undefined,
                    outstandingBalance: iterator.outstandingBalance,
                    ownerName: iterator.cardHolderName,
                    loyaltyPoint: iterator.loyaltyPoint,
                    lookupKey: iterator.cardNo,
                    applicationId: iterator.applicationId,
                    additionalRef: iterator.additionalRef,
                    accGl: iterator.accGl,
                    branch: iterator.branch,
                    cif: iterator.cif,
                    currency: iterator.currency,
                    serialNo: iterator.serialNo,
                    previewProperty: 'cardName',
                    primarySupplementary: iterator.primarySupplementary,
                    title: iterator.cardName + " - " + ((_cardTypeName == CardsService_1.CREDIT_CARD_TYPE_NAME || CardsService_1.DEBIT_CARD_TYPE_NAME) ? (iterator.cardNumberMask || iterator.cardNo) : iterator.cardNo),
                    referenceCard: (_cardTypeName == CardsService_1.PREPAID_CARD_TYPE_NAME) ? iterator.referenceCard : undefined,
                    issueDate: (_cardTypeName == CardsService_1.PREPAID_CARD_TYPE_NAME) ? iterator.issueDate : undefined,
                    defaultAcc: iterator.defaultAcc,
                    accnumbs: iterator.accnumbs,
                    cardCode: iterator.cardCode,
                    cardRefnum: iterator.cardRefnum
                };
                listOfCards.push(cardItem);
            }
        }
        return listOfCards;
    }
    /*
      /*
            Params:
        IOmniCardsRequest
       Returns:
         IOmniCardItem
       Description:
         used to get cardList
     */
    returnCardList(parameter) {
        parameter.apiCode = -1;
        return new Promise((resolve, reject) => {
            this.OmniPull.commonRequestAjax(parameter.cardType === _models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_2__["CommonBussinessConstant"].CARD_SEGMENT_NAME_PREPAID
                ? CardsService_1.prepaidCardListEndPoint : CardsService_1.cardListEndPoint, parameter) //the prepaid part added by Marina 06 Dec 2022 for IDB IDB210116 
                .then((result) => {
                const list = result.data
                    .gridModel;
                resolve({
                    gridModel: list,
                    totalNbRec: result.data.totalNbRec,
                });
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
};
CardsService.cardListEndPoint = "rest/omniCorePull/cardList";
CardsService.prepaidCardListEndPoint = "rest/omniCorePull/returnPrePaidCardsList";
CardsService.CREDIT_CARD_TYPE_NAME = "CREDIT";
CardsService.DEBIT_CARD_TYPE_NAME = "DEBIT";
CardsService.PREPAID_CARD_TYPE_NAME = "PREPAID";
CardsService.ctorParameters = () => [
    { type: _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"] }
];
CardsService = CardsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"]])
], CardsService);



/***/ }),

/***/ "TjcP":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1vcHRpb24tY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pC30":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div class=\"ps-options-card\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\"\n        [options]=\"getContainerLookUpOptions(itemOption)\" [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n  <div class=\"no-account-text\" *ngIf=\"!options || !options.itemList || options.itemList.length === 0\">\n    <ps-label [options]=\"cardLabelOptions\"></ps-label>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "vbr2":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PsOptionCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsOptionCardComponent", function() { return PsOptionCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_option_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-option-card.component.html */ "pC30");
/* harmony import */ var _ps_option_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-option-card.component.scss */ "TjcP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/Cards/cards.service */ "GIS6");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");










let PsOptionCardComponent = class PsOptionCardComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_9__["PsTemplateListPage"] {
    constructor(crdsSrvce, cdRef) {
        super();
        this.crdsSrvce = crdsSrvce;
        this.cdRef = cdRef;
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.showSingleAccount = false;
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.cardLabelOptions = {
            labelKey: 'card_list_not_available'
        };
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
    //edited by Marina to avoid action links continous reload caused by ngOnChanges() in ps-container-lookup-option component on having empty objects in lookupDetails.actionDetailsOptions[] 
    prepareLookUp(card) {
        var _a;
        const lookupDetails = {};
        lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
        lookupDetails.currencyDescription = 'currencyBriefName';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.balanceMapping = this.balanceMapping();
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.translateSubTitle = this.options.translate;
        lookupDetails.matCardCssSelectors = card.matCardCssSelectors;
        lookupDetails.showInitialCardValues = 4; // added by Marina TP:#1578052 to include primary/settlement account number in the fields visible in debit/credit card lookup
        lookupDetails.fcName = (_a = this.options) === null || _a === void 0 ? void 0 : _a.fcName; //Add by Mohanad AZDB-5369-22072024 to fix issue of overiding fcnames when lookup in same screen
        if (!this.options.cardAction) {
            lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
            lookupDetails.requestMap = this.requestMap;
            lookupDetails.editRequestMap = this.editRequestMap;
            lookupDetails.pageData = {
                operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATEMENT,
                title: 'card_report_key'
            };
            lookupDetails.actionDetailsOptions = [
                {
                    id: 'pin_change',
                    label: 'pin_change_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'pin-change',
                            labelOptions: {
                                labelKey: 'pin_change_key'
                            }
                        },
                        route: 'card-pin-request',
                        pageOptions: {
                            operId: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CHANGE_CREDIT_CARD_PIN : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CHANGE_DEBIT_CARD_PIN,
                            iconName: 'pin-change',
                            title: 'card_pin_change_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_PIN_CHANGE },
                        },
                    }
                }, {
                    id: 'pin_reset',
                    label: 'pin_reset_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'pin-reset',
                            labelOptions: {
                                labelKey: 'pin_reset_key'
                            }
                        },
                        route: 'reset-pin-request',
                        pageOptions: {
                            operId: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RESET_CREDIT_CARD_PIN : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RESET_DEBIT_CARD_PIN,
                            iconName: 'pin-reset',
                            title: 'card_pin_reset_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_PIN_RESET },
                        },
                    }
                },
                {
                    id: 'deactivate',
                    labelOptions: {
                        labelKey: 'deactivate_key'
                    },
                    buttonIcon: 'deactivate',
                    actionUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].serviceUrl.commonSubmitAction,
                    label: 'deactivate_key',
                    iconName: 'square-outline',
                    actionType: 'Submit',
                    operId: this.options.type == src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].DEBIT_CARD_TYPE_NAME ?
                        src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DEACTIVATE_DEBIT_CARD
                        : this.options.type == src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ?
                            src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DEACTIVATE_CREDIT_CARD : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DEACTIVATE_PREPAID_CARD,
                    postCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.reloadList());
                            });
                        },
                        executionClass: this,
                        params: []
                    },
                }
            ];
            const renewOption = {
                id: 'renew_card',
                label: 'renew_card_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'renew-card',
                        labelOptions: {
                            labelKey: 'renew_card_key'
                        }
                    },
                    route: 'card-management',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RENEW_DEBIT_CARD,
                        iconName: 'renew-card',
                        title: 'renew_card_key',
                    },
                    navigationOptions: {
                        queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_RENEW },
                    },
                }
            };
            const settleOption = {
                id: 'settle_card',
                label: 'settle_card_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'settle',
                        labelOptions: {
                            labelKey: 'settle_card_key'
                        }
                    },
                    route: 'credit-card-settlement',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CREDIT_CARD_SETTLEMENT,
                        iconName: 'settle',
                        title: 'settle_card_key',
                    },
                    preCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.preparesettleScreenData(lookupDetails.actionDetailsOptions.find(card => card.id == 'settle_card').actionHyperlink));
                            });
                        },
                        executionClass: this,
                        params: []
                    },
                    navigationOptions: {
                        queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_SETTLE },
                    },
                }
            };
            const requestPrepaidCardOption = {
                id: 'prepaid_card_request',
                label: 'prepaid_card_request_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'new-card-request',
                        labelOptions: {
                            labelKey: 'prepaid_card_request_key'
                        }
                    },
                    route: 'prepaid-card-request',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PREPAID_CARD_REQ,
                        iconName: 'new-card-request',
                        title: 'prepaid_card_request_key',
                    },
                    navigationOptions: {
                        queryParams: {
                            referenceCard: card.cardNumber,
                            referenceCard_lookupKey: card.cardNumber
                        },
                    }
                },
            };
            const rechargeOption = {
                id: 'recharge_card',
                label: 'recharge_card_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'transfers',
                        labelOptions: {
                            labelKey: 'recharge_card_key'
                        }
                    },
                    route: 'prepaid-card-recharge',
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PREPAID_CARD_RECHARGE,
                        iconName: 'transfers',
                        title: 'prepaid_card_recharge_key',
                    },
                    navigationOptions: {
                        queryParams: {
                            toCard: card.cardNumber,
                            toCard_lookupKey: card.cardNumber
                        },
                    }
                }
            };
            if (card.wdLimitOverride === '1' || (card.posLimitOverride === '1')) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'limit_update',
                    label: 'limit_update_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'sync',
                            labelOptions: {
                                labelKey: 'limit_update_key'
                            }
                        },
                        route: 'card-management',
                        pageOptions: {
                            operId: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].UPDATE_CREDIT_CARD_LIMIT : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].UPDATE_DEBIT_CARD_LIMIT,
                            iconName: 'sync',
                            title: 'card_limit_update_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_LIMIT_UPDATE, cardType: this.options.type },
                        },
                    }
                }, {
                    id: 'upgrade_card',
                    label: 'upgrade_card_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'upgrade-card',
                            labelOptions: {
                                labelKey: 'upgrade_card_key'
                            }
                        },
                        route: 'upgrade-card',
                        pageOptions: {
                            operId: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].UPGRADE_CREDIT_CARD : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].UPGRADE_DEBIT_CARD,
                            iconName: 'upgrade-card',
                            title: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? 'upgrade_credit_card_request_key' : 'upgrade_debit_card_request_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_UPGRADE },
                        },
                    }
                });
            }
            if (card.status === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_ACTIVE || card.statusCode == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_ACTIVE_CODE) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'replace_card',
                    label: 'replace_card_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'edit1',
                            labelOptions: {
                                labelKey: 'replace_card_key'
                            }
                        },
                        route: 'card-management',
                        pageOptions: {
                            operId: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].REPLACE_CREDIT_CARD : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].REPLACE_DEBIT_CARD,
                            iconName: 'edit1',
                            title: 'replace_card_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_REPLACE },
                        },
                    }
                });
            }
            if (card.status === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_BLOCKED || card.statusCode === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_BLOCKED_CODE) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'unblock',
                    label: 'unblock_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'activate-card',
                            labelOptions: {
                                labelKey: 'unblock_key'
                            }
                        },
                        route: 'card-management',
                        pageOptions: {
                            operId: this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].UNBLOCK_CREDIT_CARD : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].UNBLOCK_DEBIT_CARD,
                            iconName: 'activate-card',
                            title: 'unblock_card_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_UNBLOCK },
                        },
                    }
                });
            }
            if (card.status === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_ACTIVE || card.statusCode == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_ACTIVE_CODE) {
                lookupDetails.actionDetailsOptions.push({
                    id: 'block',
                    label: 'block_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'block-card',
                            labelOptions: {
                                labelKey: 'block_key'
                            }
                        },
                        route: 'card-management',
                        pageOptions: {
                            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].BLOCK_DEBIT_CARD,
                            iconName: 'block-card',
                            title: 'block_card_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_BLOCK },
                        },
                    }
                });
            }
            if (card.primarySupplementary === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_PRIMARY_TYPE && card.allowSuppCard === '1') {
                lookupDetails.actionDetailsOptions.push({
                    id: 'add_on_card',
                    label: 'add_on_card_key',
                    actionHyperlink: {
                        group: this.options.group,
                        iconOptions: {
                            iconName: 'edit1',
                            labelOptions: {
                                labelKey: 'add_on_card_key' // needs to be registered
                            }
                        },
                        route: 'supplementary-card-request',
                        pageOptions: {
                            operId: this.options.type == src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ?
                                src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SUPPLEMENTARY_CREDIT_CARD_REQ_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SUPPLEMENTARY_DEBIT_CARD_REQ_OPER_ID,
                            iconName: 'card-input',
                            title: this.options.type == src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME ? 'supplementary_credit_card_request_key' : 'supplementary_debit_card_request_key',
                        },
                        navigationOptions: {
                            queryParams: { action: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_ACTION_TYPE_ADD_ON },
                        },
                    }
                });
            }
            if (this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].DEBIT_CARD_TYPE_NAME) {
                if (this.commonProv.hasAccessOnOperation(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PREPAID_CARD_REQ))
                    lookupDetails.actionDetailsOptions.push(requestPrepaidCardOption);
            }
            else if (this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME) {
                if (card.statusCode == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARD_STATUS_ACTIVE_CODE) {
                    lookupDetails.actionDetailsOptions.push(settleOption);
                }
            }
            else {
                lookupDetails.actionDetailsOptions.push(rechargeOption);
            }
            const dateToBeCheckOut = new Date(card.expiryDate);
            const expiryDate = new Date(card.expiryDate);
            const today = new Date();
            if (card.maxRenewPeriod) {
                dateToBeCheckOut.setMonth(dateToBeCheckOut.getMonth() + card.maxRenewPeriod);
            }
            if (today > expiryDate && card.allowRenew === '1') {
                if (Number(card.maxRenewPeriod) > 0 && today <= dateToBeCheckOut) {
                    lookupDetails.actionDetailsOptions.push(renewOption);
                }
                else {
                    // lookupDetails.actionDetailsOptions.push(renewOption);
                }
            }
            lookupDetails.statementOptions = {
                buttonIcon: 'list-box',
                redirectUrl: 'card-statement-report'
            };
        }
        else {
            lookupDetails.pageData = {};
            lookupDetails.actionDetailsOptions = [];
            lookupDetails.statementOptions = {};
        }
        //AZDB-8846 AIBIRQI250160 - 204612 - when submit a request added by dynamic action button, theres no success or failure msg showing
        lookupDetails.reloadFunction = {
            func() {
                return new Promise((resolve, reject) => {
                    resolve(this.executionClass.reloadList());
                });
            },
            executionClass: this,
            params: []
        };
        return lookupDetails;
    }
    reloadList() {
        this.reloadFct.emit();
    }
    populateHeaderValueMap() {
        let expiryDateMap = {};
        let holderNameMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        let currencyMap = {};
        let primaryAccountMap = {};
        let settlementAccountMap = {};
        let withdrawLimitMap = {};
        let remainingWithlimitMap = {};
        let posLimitsMap = {};
        let remainingPosLimitMap = {};
        let paymentPercentMap = {};
        let billingCycleMap = {};
        let loyaltyPtsMap = {};
        let availableBalanceMap = {};
        let outStandingMap = {};
        let primarySupplementaryMap = {};
        let primaryCardMap = {};
        expiryDateMap = {
            key: 'expiryDate',
            value: ''
        };
        holderNameMap = {
            key: 'ownerName',
            value: ''
        };
        currencyMap = {
            key: 'currencyBriefNameEnglish',
            value: ''
        };
        primaryAccountMap = {
            key: 'primaryAccount',
            value: ''
        };
        settlementAccountMap = {
            key: 'primaryAccount',
            value: ''
        };
        withdrawLimitMap = {
            key: 'currentWdLimit',
            value: ''
        };
        remainingWithlimitMap = {
            key: 'remainingWithdrawLimit',
            value: ''
        };
        posLimitsMap = {
            key: 'posLimitAmount',
            value: ''
        };
        remainingPosLimitMap = {
            key: 'remainingPosLimit',
            value: ''
        };
        paymentPercentMap = {
            key: 'paymentPercentage',
            value: ''
        };
        billingCycleMap = {
            key: 'billingCycle',
            value: ''
        };
        loyaltyPtsMap = {
            key: 'loyaltyPts',
            value: ''
        };
        availableBalanceMap = {
            key: 'remainingBalance',
            value: ''
        };
        outStandingMap = {
            key: 'outStanding',
            value: ''
        };
        primarySupplementaryMap = {
            key: 'primarySupplementary',
            value: ''
        };
        primaryCardMap = {
            key: 'primaryCard',
            value: '',
            showMappingOnNoValue: true
        };
        headerTitleMap = {
            key: 'title',
            value: 'title',
            isEdit: false,
            formGroupMap: {
                placeHolder: 'enter_card_type',
                fcName: 'cardType',
            }
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'ownerName',
            isEdit: true,
            formGroupMap: {
                placeHolder: 'enter_cardName',
                fcName: 'cardName',
            }
        };
        // key here will be used as label in look up details component
        //this.labelValuesMap.set('card_number_key', cardNumberMap); --- Marina TP:#1242912 card number is added to title 
        this.labelValuesMap.set('primary_supplementary_key', primarySupplementaryMap);
        this.labelValuesMap.set('primary_card_key', primaryCardMap);
        this.labelValuesMap.set('currency_key', currencyMap);
        //this.labelValuesMap.set('name_on_card_key', holderNameMap); ---Marina TP:#1578094 as confirmed by PM nameOnCard should be removed from card body as it is already available in sublitlte 
        this.requestMap.set('nickNameNumber', 'key');
        this.requestMap.set('oldNickName', 'ownerName');
        this.editRequestMap.set('newNickName', 'ownerName');
        this.editRequestMap.set('type', 'C');
        if (this.options.type === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"].CREDIT_CARD_TYPE_NAME) {
            this.labelValuesMap.set('settlement_account_key', settlementAccountMap);
            this.labelValuesMap.set('withdrawal_limit_key', withdrawLimitMap);
            this.labelValuesMap.set('remaining_withdrawal_limit_key', remainingWithlimitMap);
            this.labelValuesMap.set('pos_limit_key', posLimitsMap);
            this.labelValuesMap.set('remaining_pos_limit_key', remainingPosLimitMap);
            this.labelValuesMap.set('payment_percentage_key', paymentPercentMap);
            this.labelValuesMap.set('billing_cycle_key', billingCycleMap);
            this.labelValuesMap.set('loyalty_points_key', loyaltyPtsMap);
            this.labelValuesMap.set('available_balance_key', availableBalanceMap);
            this.labelValuesMap.set('outstanding_balance_key', outStandingMap);
        }
        else {
            this.labelValuesMap.set('primary_account_key', primaryAccountMap);
        }
        this.labelValuesMap.set('expiry_date_key', expiryDateMap);
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
    balanceMapping() {
        const balanceMappingList = [
            {
                key: 'outstanding_balance_key',
                value: 'outstandingBalance'
            },
            {
                key: 'available_balance_key',
                value: 'remainingBalance'
            }
        ];
        return balanceMappingList;
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngAfterViewChecked() {
        this.cdRef.markForCheck();
    }
    preparesettleScreenData(actionCard) {
        var _a, _b, _c;
        const creditCardSettlementSec = (_a = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USERINFO).businessProfiles.find((i) => i.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARDS_SEC_OPER_ID)) === null || _a === void 0 ? void 0 : _a.children.find(c => c.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CREDIT_CARD_SETTLEMENT_SEC_OPER_ID);
        const creditCardSettleScreen = creditCardSettlementSec === null || creditCardSettlementSec === void 0 ? void 0 : creditCardSettlementSec.children.find(c => c.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CREDIT_CARD_SETTLEMENT);
        actionCard.navigationOptions.queryParams.ScreenVO = {
            creditCard: actionCard.navigationOptions.queryParams.cardNumber,
            creditCard_lookupKey: actionCard.navigationOptions.queryParams.cardNumber,
            defaultSettlementAccount: ((_b = creditCardSettleScreen === null || creditCardSettleScreen === void 0 ? void 0 : creditCardSettleScreen.operAppChnlVO) === null || _b === void 0 ? void 0 : _b.PARAM) ? (_c = JSON.parse(creditCardSettleScreen.operAppChnlVO.PARAM)) === null || _c === void 0 ? void 0 : _c.defaultSettlementAccount : true
        };
    }
};
PsOptionCardComponent.ctorParameters = () => [
    { type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
PsOptionCardComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsOptionCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-option-card',
        template: _raw_loader_ps_option_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_option_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], PsOptionCardComponent);



/***/ })

}]);
//# sourceMappingURL=8-es2015.js.map