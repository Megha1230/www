(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

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



/***/ })

}]);
//# sourceMappingURL=161-es2015.js.map