(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "C4nf":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cards-list/cards-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n    <ps-complex-segment id=\"cardsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n        [options]=\"complexSegmentOptions\">\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n            <ps-action-hyperlink id=\"addDebitReq\" *ngIf=\"selectedSegment == 'Debit' && hasAccOnDebitCard\"\n                [options]=\"debitCardOptions.hyperLink\" class=\"add-beneficiary-button\">\n            </ps-action-hyperlink>\n            <ps-option-card id=\"ps-option-cards-list\" [options]=\"debitCardOptions\" (reloadFct)=\"loadCardList(selectedSegment)\"\n                *ngIf=\"debitCardOptions.listOfOptions?.length > 0\">\n            </ps-option-card>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n            <ps-action-hyperlink id=\"addCreditReq\" *ngIf=\"selectedSegment == 'Credit' && hasAccOnCreditCard\"\n                [options]=\"creditCardOptions.hyperLink\" class=\"add-beneficiary-button\">\n            </ps-action-hyperlink>\n            <ps-option-card id=\"ps-option-cards-list\" [options]=\"creditCardOptions\" (reloadFct)=\"loadCardList(selectedSegment)\"\n                *ngIf=\"creditCardOptions.listOfOptions?.length > 0\">\n            </ps-option-card>\n        </ps-content-segment>\n        <ps-content-segment segment3 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[2]\">\n            <ps-action-hyperlink id=\"addPrepaidReq\" *ngIf=\"selectedSegment == 'Prepaid' && hasAccOnPrepaidCard\"\n                [options]=\"prepaidCardOptions.hyperLink\" class=\"add-beneficiary-button\">\n            </ps-action-hyperlink>\n            <ps-option-card id=\"ps-option-cards-list\" *ngIf=\"prepaidCardOptions.listOfOptions?.length > 0\" (reloadFct)=\"loadCardList(selectedSegment)\"\n                [options]=\"prepaidCardOptions\">\n            </ps-option-card>\n        </ps-content-segment>\n    </ps-complex-segment>\n</ps-template-view>");

/***/ }),

/***/ "RLQV":
/*!*******************************************************!*\
  !*** ./src/app/pages/cards-list/cards-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "dJzL":
/*!*****************************************************!*\
  !*** ./src/app/pages/cards-list/cards-list.page.ts ***!
  \*****************************************************/
/*! exports provided: CardsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsListPage", function() { return CardsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cards_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cards-list.page.html */ "C4nf");
/* harmony import */ var _cards_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards-list.page.scss */ "RLQV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/Cards/cards.service */ "GIS6");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");














let CardsListPage = class CardsListPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, datepipe, crdsSrvce) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.datepipe = datepipe;
        this.crdsSrvce = crdsSrvce;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.debitCardOptions = {};
        this.creditCardOptions = {};
        this.prepaidCardOptions = {};
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.hasAccOnCreditCard = false;
        this.hasAccOnDebitCard = false;
        this.hasAccOnPrepaidCard = false;
        this.cardTypeFlagResponse = [];
        this.complexSegmentOptions = {
            segmentOptions: {
                fcName: 'cardsSegment',
                segmentList: [{
                        selected: true,
                        itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_DEBIT,
                        description: this.commonProv.translate('debit_cards_key')
                    }, {
                        selected: true,
                        itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_CREDIT,
                        description: this.commonProv.translate('credit_cards_key')
                    },
                    {
                        selected: true,
                        itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_PREPAID,
                        description: this.commonProv.translate('prepaid_cards_key')
                    }
                ]
            },
            segmentContainerOptions: {
                numberOfSegments: 3,
                namesofSegments: ['debit_card_segment', 'credit_card_segment', 'prepaid_card_segment'],
            }
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup; // Added by Zunair For #BUG 1257538
        this.complexSegmentOptions.group = this.formGroup;
        this.checkUserOperationsAccessibility();
        this.creditCardOptions = {
            group: this.formGroup,
            noCardsLabel: 'credit_card_list_not_available',
            type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"].CREDIT_CARD_TYPE_NAME,
            isEditable: true,
            translate: false,
            hyperLink: {
                route: 'credit-card-request',
                labelKey: 'credit_card_request_key',
                iconOptions: {
                    iconName: 'add',
                    labelOptions: {
                        labelKey: 'request_credit_card_key'
                    }
                },
                pageOptions: {
                    operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CREDIT_CARD_REQ,
                    title: 'credit_card_request_key',
                    iconName: 'card',
                }
            }
        };
        this.debitCardOptions = {
            group: this.formGroup,
            noCardsLabel: 'debit_card_list_not_available',
            type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"].DEBIT_CARD_TYPE_NAME,
            isEditable: true,
            translate: false,
            hyperLink: {
                route: 'debit-card-request',
                labelKey: 'debit_card_request_key',
                iconOptions: {
                    iconName: 'add',
                    labelOptions: {
                        labelKey: 'request_debit_card_key'
                    }
                },
                pageOptions: {
                    operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].DEBIT_CARD_REQ,
                    title: 'debit_card_request_key',
                    iconName: 'card',
                }
            }
        };
        this.prepaidCardOptions = {
            group: this.formGroup,
            noCardsLabel: 'prepaid_card_list_not_available',
            type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"].PREPAID_CARD_TYPE_NAME,
            isEditable: true,
            translate: false,
            hyperLink: {
                route: 'prepaid-card-request',
                labelKey: 'prepaid_card_request_key',
                iconOptions: {
                    iconName: 'add',
                    labelOptions: {
                        labelKey: 'request_prepaid_card_key'
                    }
                },
                pageOptions: {
                    operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].PREPAID_CARD_REQ,
                    title: 'prepaid_card_request_key',
                    iconName: 'card',
                }
            }
        };
    }
    //edited by Marina jira-AZDB-914; check on segment visiblity before user accessibility to avoid showing a hidden segment
    checkUserOperationsAccessibility() {
        this.hasAccOnCreditCard = this.commonProv.hasAccessOnOperation(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CREDIT_CARD_REQ);
        this.hasAccOnDebitCard = this.commonProv.hasAccessOnOperation(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].DEBIT_CARD_REQ);
        this.hasAccOnPrepaidCard = this.commonProv.hasAccessOnOperation(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].PREPAID_CARD_REQ);
    }
    onClickSegment(selectedSegment) {
        if (selectedSegment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_CREDIT) {
            this.loadCardList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_CREDIT);
        }
        else if (selectedSegment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_DEBIT) {
            this.loadCardList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_DEBIT);
        }
        else
            this.loadCardList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_PREPAID);
    }
    loadCardList(segment) {
        const paramData = {
            // language: 'EN',
            cardType: segment == 'Prepaid' ? _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARDTYPE_P : segment
        };
        this.debitCardOptions.listOfOptions = [];
        this.creditCardOptions.listOfOptions = [];
        this.prepaidCardOptions.listOfOptions = [];
        this.selectedSegment = segment;
        this.crdsSrvce.returnCardList(paramData).then((result) => {
            if (result && result.gridModel.length > 0) {
                if (segment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_CREDIT) {
                    this.creditCardOptions.listOfOptions = this.populateCards(result.gridModel, segment);
                }
                else if (segment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_DEBIT) {
                    this.debitCardOptions.listOfOptions = this.populateCards(result.gridModel, segment);
                }
                else {
                    this.prepaidCardOptions.listOfOptions = this.populateCards(result.gridModel, segment);
                }
            }
        }).catch(error => {
            this.loggerP.error('Error: While fetching credit cards list :', error);
        });
    }
    populateCards(card, segment) {
        var _a;
        const cardList = [];
        const psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["PsDateFormatPipe"]();
        for (const iterator of card) {
            // const limitFlagObject = ;
            // eslint-disable-next-line no-shadow
            const card = {
                cardType: iterator.cardType,
                cardNumber: iterator.cardNo,
                primaryAccount: iterator.primaryAccount,
                expiryDate: iterator.expiryDate ? psDatePipe.transform((iterator.expiryDate), _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARDS_LIST_MONTH_YEAR_DATE_FORMAT) : '--/--',
                cardName: iterator.cardName,
                status: iterator.status,
                statusCode: iterator.statusCode,
                key: iterator.key || iterator.personalizeKey,
                nickName: iterator.nickName,
                ownerName: iterator.cardHolderName,
                currentWdLimit: iterator.cardWdLimitAmount || iterator.wdLimitAmount,
                applicationId: iterator.applicationId,
                posLimitAmount: iterator.posLimitAmount,
                currencyCode: iterator.currency,
                posLimitOverride: iterator.posLimitOverride,
                wdLimitOverride: iterator.wdLimitOverride,
                posLimitBasedOn: iterator.posLimitBasedOn,
                maxRenewPeriod: iterator.maxRenewPeriod,
                allowRenew: iterator.allowRenew,
                currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                currencyBriefName: iterator.currencyBriefName || iterator.currencyBriefNameEnglish,
                previewProperty: 'cardName',
                matCardCssSelectors: ((_a = iterator.cardBriefName) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) + ' ' + (segment === null || segment === void 0 ? void 0 : segment.toLowerCase()),
                branch: iterator.branch,
                cardBranchCode: iterator.cardBranchCode,
                referenceCard: iterator.referenceCard,
                issueDate: iterator.issueDate,
                remainingBalance: iterator.remainingBalance,
                primarySupplementary: iterator.primarySupplementary,
                primaryCard: iterator.primaryCard,
                allowSuppCard: iterator.allowSuppCard,
                currentPosLimit: iterator.posLimitAmount,
                posPeriodicity: iterator.limitCheckPeriod,
                wdPeriodicity: iterator.wdLimitCheckPeriod,
                cardNumberMask: iterator.cardNumberMask,
                title: iterator.cardName + " - " + ((segment == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_CREDIT || _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].CARD_SEGMENT_NAME_DEBIT) ? (iterator.cardNumberMask || iterator.cardNo) : iterator.cardNo),
                cardRefnum: iterator.cardRefnum,
                cardCode: iterator.cardCode,
                defaultAcc: iterator.defaultAcc,
                accnumbs: iterator.accnumbs
            };
            cardList.push(card);
        }
        return cardList;
    }
    /* as it's confirmed with services team on bug #1402629 "TO DO" saved drafts opening error in screen
   the same data of card type aready returns in service "cardList" so no need to call "returnCardTypeList" anymore */
    // private async getCardTypeFlags(cardTypeCode: string) {
    //   this.creditCardOptions.listOfOptions = [];
    //   this.debitCardOptions.listOfOptions = [];
    //   const cardTypeParams: ICardTypeRequest = {
    //     cardType: cardTypeCode
    //   };
    //   const cardTypes = await this.omniPull.returnCardTypes(cardTypeParams).catch(error => {
    //     this.loggerP.error('Error: While fetching Card types in PsDropdownCardTypesComponent : ', error);
    //   });
    //   if (cardTypes && cardTypes.gridModel && cardTypes.gridModel.length > 0) {
    //     for (const iterator of cardTypes.gridModel) {
    //       this.cardTypeFlagResponse.push({
    //         cardTypeId: iterator.ctsCode,
    //         posLimitOverride: iterator.posLimitOverride,
    //         wdLimitOverride: iterator.wdLimitOverride,
    //         posLimitAmount: iterator.posLimitAmount,
    //         wdLimitAmount: iterator.wdLimitAmount,
    //         cardTypeObject: iterator
    //       });
    //     }
    //   }
    // }
    // private checkLimit(cardId) {
    //   const result = this.cardTypeFlagResponse.find((e) => e.cardTypeId === cardId);
    //   return result;
    // }
    ionViewWillEnter() {
        super.viewWillEnter();
        //Modified by ghada, ABEOI240001 for fixing the issue of relodaing card list on the default segment instead of the selected segment 
        const currentSegment = this.formGroup.controls[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CONTROLLER_FORM_DATA].value[this.complexSegmentOptions.segmentOptions.fcName] || this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue;
        this.loadCardList(currentSegment);
    }
};
CardsListPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"] }
];
CardsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'cards-list',
        template: _raw_loader_cards_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cards_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"]])
], CardsListPage);



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
//# sourceMappingURL=35-es2015.js.map