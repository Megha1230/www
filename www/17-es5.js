(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17], {
    /***/
    "tC40":
    /*!**************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: BeneficiariesService */

    /***/
    function tC40(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeneficiariesService", function () {
        return BeneficiariesService;
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


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var BeneficiariesService = /*#__PURE__*/function () {
        function BeneficiariesService(commonService) {
          _classCallCheck(this, BeneficiariesService);

          this.commonService = commonService;
        }

        return _createClass(BeneficiariesService, [{
          key: "populateInternalBeneficiaries",
          value: function populateInternalBeneficiaries(internalBeneficiaries) {
            var _a;

            var internalBeneficiariesList = [];

            var _iterator = _createForOfIteratorHelper(internalBeneficiaries),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;

                if (iterator && iterator.submitFieldValueMap) {
                  var internalBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    benefBankName: iterator.submitFieldValueMap.benefBankName,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    currency: iterator.submitFieldValueMap.currency,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: 'active_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'benefName',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: ((_a = iterator.submitFieldValueMap.accountObject) === null || _a === void 0 ? void 0 : _a.accountNumber) || iterator.submitFieldValueMap.accountNumber,
                    //lookup shown keys
                    bankAccountNumberKey: iterator.submitFieldValueMap.accountNumber,
                    bankBenefNameKey: iterator.submitFieldValueMap.benefName,
                    bankPurposeKey: iterator.submitFieldValueMap.purpose,
                    bankBenefPhoneKey: iterator.submitFieldValueMap.benefPhone,
                    bankTitleKey: iterator.submitFieldValueMap.accountNumber
                  };
                  internalBeneficiariesList.push(internalBeneficiary);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return internalBeneficiariesList;
          }
          /**
           * customizing local beneficiary object
           * @param gridModel
           */

        }, {
          key: "populateLocalBeneficiaries",
          value: function populateLocalBeneficiaries(localBeneficiaries) {
            var localBeneficiariesList = [];

            var _iterator2 = _createForOfIteratorHelper(localBeneficiaries),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var iterator = _step2.value;

                if (iterator && iterator.submitFieldValueMap) {
                  var localBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    benefBankName: iterator.submitFieldValueMap.bankDescriptionConcat,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: iterator.status == 'A' ? 'active_key' : 'pending_for_approval_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefBankId: iterator.submitFieldValueMap.bank,
                    benefBranchId: iterator.submitFieldValueMap.branch,
                    currency: iterator.submitFieldValueMap.currency,
                    bank: iterator.submitFieldValueMap.bank,
                    branch: iterator.submitFieldValueMap.branch,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    benefBranchTxt: iterator.submitFieldValueMap.benefBranchTxt,
                    previewProperty: 'benefName',
                    benefBvn: iterator.submitFieldValueMap.benefBvn,
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.accountNumber,
                    //lookups keys
                    localBenefNameKey: iterator.submitFieldValueMap.benefName,
                    localAccountNumberKey: iterator.submitFieldValueMap.accountNumber,
                    localBenefBankNameKey: iterator.submitFieldValueMap.bankDescriptionConcat,
                    benefBvnKey: iterator.submitFieldValueMap.benefBvn,
                    localTitleKey: iterator.submitFieldValueMap.accountNumber
                  };
                  localBeneficiariesList.push(localBeneficiary);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return localBeneficiariesList;
          }
          /**
           * customizing international beneficiary object
           * @param gridModel
           */

        }, {
          key: "populateInternationalBeneficiaries",
          value: function populateInternationalBeneficiaries(internationBeneficiaries) {
            var internationalBeneficiariesList = [];

            var _iterator3 = _createForOfIteratorHelper(internationBeneficiaries),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var iterator = _step3.value;

                if (iterator && iterator.submitFieldValueMap) {
                  var internationalBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    benefBankName: iterator.submitFieldValueMap.bankName,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    benefReason: iterator.submitFieldValueMap.benefReason,
                    status: iterator.status == 'A' ? 'active_key' : 'pending_for_approval_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    currency: iterator.submitFieldValueMap.currency,
                    bank: iterator.submitFieldValueMap.bank,
                    branch: iterator.submitFieldValueMap.branch,
                    country: iterator.submitFieldValueMap.country,
                    swiftCode: iterator.submitFieldValueMap.swiftCode,
                    bankName: iterator.submitFieldValueMap.bankName,
                    region: iterator.submitFieldValueMap.region,
                    cityDetails: iterator.submitFieldValueMap.cityDetails,
                    city: iterator.submitFieldValueMap.city,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'benefName',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.accountNumber,
                    //lookups keys
                    swiftBenefNameKey: iterator.submitFieldValueMap.benefName,
                    swiftAccountNumberKey: iterator.submitFieldValueMap.accountNumber,
                    swiftBenefBankNameKey: iterator.submitFieldValueMap.bankName,
                    swiftTitleKey: iterator.submitFieldValueMap.accountNumber
                  };
                  internationalBeneficiariesList.push(internationalBeneficiary);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return internationalBeneficiariesList;
          }
        }, {
          key: "populateBankCardBeneficiaries",
          value: function populateBankCardBeneficiaries(bankCardBeneficiaries) {
            var bankCardBeneficiariesList = [];

            var _iterator4 = _createForOfIteratorHelper(bankCardBeneficiaries),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var iterator = _step4.value;

                if (iterator && iterator.submitFieldValueMap) {
                  var bankCardBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    cardNumber: iterator.submitFieldValueMap.cardNumber,
                    benefBankName: iterator.submitFieldValueMap.benefBankName,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: 'active_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'cardNumber',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.cardNumber,
                    //lookup keys
                    bankCardBenefNameKey: iterator.submitFieldValueMap.benefName,
                    bankCardNumberKey: iterator.submitFieldValueMap.cardNumber,
                    bankCardPurposeKey: iterator.submitFieldValueMap.purpose,
                    bankCardBenefPhoneKey: iterator.submitFieldValueMap.benefPhone,
                    bankCardtitleKey: iterator.submitFieldValueMap.cardNumber
                  };
                  bankCardBeneficiariesList.push(bankCardBeneficiary);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return bankCardBeneficiariesList;
          }
        }, {
          key: "populateLocalCardBeneficiaries",
          value: function populateLocalCardBeneficiaries(LocalCardBeneficiaries) {
            var localCardBeneficiariesList = [];

            var _iterator5 = _createForOfIteratorHelper(LocalCardBeneficiaries),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var iterator = _step5.value;

                if (iterator && iterator.submitFieldValueMap) {
                  var LocalCardBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    cardNumber: iterator.submitFieldValueMap.cardNumber,
                    benefBankName: iterator.submitFieldValueMap.bankDescriptionConcat,
                    bank: iterator.submitFieldValueMap.bank,
                    benefBranchTxt: iterator.submitFieldValueMap.benefBranchTxt,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    currency: iterator.submitFieldValueMap.currency,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: 'active_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'cardNumber',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.cardNumber,
                    //lookup keys
                    localCardBenefNameKey: iterator.submitFieldValueMap.benefName,
                    localCardNumberKey: iterator.submitFieldValueMap.cardNumber,
                    localCardBenefBankNameKey: iterator.submitFieldValueMap.bankDescriptionConcat,
                    localCardBenefBranchTxtKey: iterator.submitFieldValueMap.benefBranchTxt,
                    localCardTitleKey: iterator.submitFieldValueMap.cardNumber
                  };
                  localCardBeneficiariesList.push(LocalCardBeneficiary);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return localCardBeneficiariesList;
          }
        }, {
          key: "populateCashTransfers",
          value: function populateCashTransfers(cashTransfers) {
            var cashTransfersList = [];

            var _iterator6 = _createForOfIteratorHelper(cashTransfers),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var iterator = _step6.value;

                if (iterator && iterator.submitFieldValueMap) {
                  var transfer = {
                    idType: iterator.submitFieldValueMap.idType,
                    idNumber: iterator.submitFieldValueMap.idNumber,
                    idTypeDescriptionConcat: iterator.submitFieldValueMap.idTypeDescriptionConcat,
                    benefName: iterator.submitFieldValueMap.benefName,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    status: 'active_key',
                    statusCode: iterator.status,
                    purpose: iterator.submitFieldValueMap.purpose,
                    dataSaveId: iterator.dataSaveId,
                    previewProperty: 'benefName',
                    nickNameNumber: iterator.dataSaveId,
                    lookupKey: iterator.submitFieldValueMap.idNumber,
                    //lookup keys
                    cashBenefNameKey: iterator.submitFieldValueMap.benefName,
                    cashBenefPhoneKey: iterator.submitFieldValueMap.benefPhone,
                    cashPurposeKey: iterator.submitFieldValueMap.purpose,
                    cashTitleKey: iterator.submitFieldValueMap.benefName
                  };
                  cashTransfersList.push(transfer);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return cashTransfersList;
          }
        }]);
      }();

      BeneficiariesService.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_2__["PsCommonService"]
        }];
      };

      BeneficiariesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_2__["PsCommonService"]])], BeneficiariesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=17-es5.js.map