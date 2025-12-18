(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161], {
    /***/
    "GIS6":
    /*!**********************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psServices/Cards/cards.service.ts ***!
      \**********************************************************************/

    /*! exports provided: CardsService */

    /***/
    function GIS6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsService", function () {
        return CardsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../omni-common/omni-pull.service */
      "ZyuK");

      var CardsService_1;
      /*
      Created by Waleed Aly 03 April 2023 to encapsulated repeated code needed in different cards components "debit,credit,prepaid"
      */

      var CardsService = CardsService_1 = /*#__PURE__*/function () {
        function CardsService(OmniPull) {
          _classCallCheck(this, CardsService);

          this.OmniPull = OmniPull;
        }

        return _createClass(CardsService, [{
          key: "populateCards",
          value: function populateCards(Cards, _cardTypeName) {
            var listOfCards = [];

            var _iterator = _createForOfIteratorHelper(Cards),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;

                if (iterator.cardNo) {
                  var cardItem = {
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
                    debitOrCredit: _cardTypeName == CardsService_1.CREDIT_CARD_TYPE_NAME || _cardTypeName == CardsService_1.DEBIT_CARD_TYPE_NAME ? iterator.debitOrCredit : undefined,
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
                    title: iterator.cardName + " - " + (_cardTypeName == CardsService_1.CREDIT_CARD_TYPE_NAME || CardsService_1.DEBIT_CARD_TYPE_NAME ? iterator.cardNumberMask || iterator.cardNo : iterator.cardNo),
                    referenceCard: _cardTypeName == CardsService_1.PREPAID_CARD_TYPE_NAME ? iterator.referenceCard : undefined,
                    issueDate: _cardTypeName == CardsService_1.PREPAID_CARD_TYPE_NAME ? iterator.issueDate : undefined,
                    defaultAcc: iterator.defaultAcc,
                    accnumbs: iterator.accnumbs,
                    cardCode: iterator.cardCode,
                    cardRefnum: iterator.cardRefnum
                  };
                  listOfCards.push(cardItem);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
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

        }, {
          key: "returnCardList",
          value: function returnCardList(parameter) {
            var _this = this;

            parameter.apiCode = -1;
            return new Promise(function (resolve, reject) {
              _this.OmniPull.commonRequestAjax(parameter.cardType === _models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_2__["CommonBussinessConstant"].CARD_SEGMENT_NAME_PREPAID ? CardsService_1.prepaidCardListEndPoint : CardsService_1.cardListEndPoint, parameter) //the prepaid part added by Marina 06 Dec 2022 for IDB IDB210116 
              .then(function (result) {
                var list = result.data.gridModel;
                resolve({
                  gridModel: list,
                  totalNbRec: result.data.totalNbRec
                });
              })["catch"](function (error) {
                reject(error);
              });
            });
          }
        }]);
      }();

      CardsService.cardListEndPoint = "rest/omniCorePull/cardList";
      CardsService.prepaidCardListEndPoint = "rest/omniCorePull/returnPrePaidCardsList";
      CardsService.CREDIT_CARD_TYPE_NAME = "CREDIT";
      CardsService.DEBIT_CARD_TYPE_NAME = "DEBIT";
      CardsService.PREPAID_CARD_TYPE_NAME = "PREPAID";

      CardsService.ctorParameters = function () {
        return [{
          type: _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"]
        }];
      };

      CardsService = CardsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"]])], CardsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=161-es5.js.map