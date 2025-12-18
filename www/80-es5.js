(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80], {
    /***/
    "NS8m":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.page.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: CashAndChequeCollectionRequestReportPage */

    /***/
    function NS8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashAndChequeCollectionRequestReportPage", function () {
        return CashAndChequeCollectionRequestReportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cash_and_cheque_collection_request_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cash-and-cheque-collection-request-report.page.html */
      "w3x6");
      /* harmony import */


      var _cash_and_cheque_collection_request_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cash-and-cheque-collection-request-report.page.scss */
      "a/Dz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */
      "nipE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT");

      var CashAndChequeCollectionRequestReportPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function CashAndChequeCollectionRequestReportPage(commonService, logger, omniPull) {
          var _this;

          _classCallCheck(this, CashAndChequeCollectionRequestReportPage);

          _this = _callSuper(this, CashAndChequeCollectionRequestReportPage);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.cashCollectionOptions = {};
          _this.chequeCollectionOptions = {};
          _this.templateViewOptions = {
            group: _this.formGroup
          };
          _this.complexSegmentOptions = {
            segmentOptions: {
              segmentList: []
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['cash-collection_segment', 'cheque_collection_segment']
            }
          };
          _this.segmentOptions = {
            segmentList: []
          };
          _this.cardTypeFlagResponse = [];
          _this.chqCardLabelOptions = {
            labelKey: 'no_cheque_collection_request_available_key'
          };
          _this.debitCardLabelOptions = {
            labelKey: 'no_cash_collection_request_available_key'
          };
          _this.cashKey = 'cash';
          _this.chequeKey = 'cheque';
          _this.showChqCards = false;
          _this.showCashCards = false;
          _this.nochqcards = false;
          _this.nocashcards = false;
          _this.cashReqType = "1";
          _this.chequeReqType = "2";
          return _this;
        }

        _inherits(CashAndChequeCollectionRequestReportPage, _src_app_pages_omni_b);

        return _createClass(CashAndChequeCollectionRequestReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(CashAndChequeCollectionRequestReportPage, "init", this, 3)([]);

            this.cashCollectionOptions.group = this.formGroup;
            this.cashCollectionOptions.isEditable = true;
            this.cashCollectionOptions.translate = true;
            this.chequeCollectionOptions.group = this.formGroup;
            this.chequeCollectionOptions.isEditable = true;
            this.chequeCollectionOptions.translate = true;
            this.chequeCollectionOptions.operation = 'cashandchequereq';
            this.cashCollectionOptions.operation = 'cashandchequereq';
            this.complexSegmentOptions.group = this.formGroup;
            this.complexSegmentOptions.segmentOptions = {
              fcName: 'cardsSegment',
              segmentList: [{
                selected: true,
                itemValue: this.cashKey,
                description: this.commonProv.translate('cash_collection_key')
              }, {
                selected: true,
                itemValue: this.chequeKey,
                description: this.commonProv.translate('cheque_collection_key')
              }]
            };
          }
        }, {
          key: "onClickSegment",
          value: function onClickSegment(selectedSegment) {
            this.chequeCollectionOptions.listOfOptions = undefined;
            this.cashCollectionOptions.listOfOptions = undefined;

            if (selectedSegment === this.chequeKey) {
              this.chequeCollectionOptions.isCash = false;
              this.cashCollectionOptions.isCash = true;
              this.loadList(this.chequeKey);
            } else {
              this.chequeCollectionOptions.isCash = true;
              this.cashCollectionOptions.isCash = true;
              this.loadList(this.cashKey);
            }
          }
        }, {
          key: "loadList",
          value: function loadList(segment) {
            this.returnList(segment);
          }
        }, {
          key: "returnList",
          value: function returnList(segment) {
            var _this2 = this;

            var paramData = {
              language: 'EN',
              cardType: segment,
              filterByOper: true,
              depositorRequestTypeId: segment == "cash" ? this.cashReqType : this.chequeReqType,
              operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CASH_AND_CHEQUE_REQ_OPER_ID
            };
            this.omniPull.returnCashManagementCardList(paramData).then(function (result) {
              if (result && result.gridModel && result.gridModel.length > 0) {
                if (segment === _this2.chequeKey) {
                  _this2.chequeCollectionOptions.listOfOptions = [];
                  _this2.chequeCollectionOptions.listOfOptions = _this2.populateCards(result.gridModel);
                } else {
                  _this2.cashCollectionOptions.listOfOptions = [];
                  _this2.cashCollectionOptions.listOfOptions = _this2.populateCards(result.gridModel);
                }
              }
            })["catch"](function (error) {
              _this2.logger.error('Error: While fetching cards list :', error);
            });
          }
        }, {
          key: "populateCards",
          value: function populateCards(card) {
            var cardList = [];
            var psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["PsDateFormatPipe"]();

            var _iterator = _createForOfIteratorHelper(card),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;

                // const limitFlagObject = ;
                // eslint-disable-next-line no-shadow
                if (iterator && iterator.submitFieldValueMap) {
                  var item = {
                    depositorRequestType: iterator.submitFieldValueMap.requestType || iterator.submitFieldValueMap.depositorRequestType || iterator.submitFieldValueMap.depositorRequestTypeId,
                    requestTypeDesc: iterator.submitFieldValueMap.requestType === '1' || iterator.submitFieldValueMap.depositorRequestType === '1' || iterator.submitFieldValueMap.depositorRequestTypeId ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('cash_collection_key') : src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('cheque_collection_key'),
                    status: iterator.status == 'N' ? 'new_key' : iterator.status == 'PD' || iterator.status == 'TD' || iterator.status == 'TP' ? 'in_process_key' : iterator.status == 'R' ? 'rejected_key' : iterator.status == 'CL' ? 'closed_key' : iterator.status == 'C' ? 'canceled_key' : iterator.status == 'A' ? 'active_key' : iterator.status,
                    statusCode: iterator.status,
                    isMyAccountDeposit: iterator.submitFieldValueMap.isMyAccountDeposit,
                    depositCash: iterator.submitFieldValueMap.isMyAccountDeposit === 'Y' ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cash_in_my_account_key') : src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cash_in_other_account_key'),
                    depositCheque: iterator.submitFieldValueMap.isMyAccountDeposit === 'Y' ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cheque_in_my_account_key') : src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cheque_in_other_account_key'),
                    fromAccount: iterator.submitFieldValueMap.fromAccount,
                    fromAccount_lookupKey: iterator.submitFieldValueMap.fromAccount_lookupKey,
                    depositorName: iterator.submitFieldValueMap.depositorName,
                    transactionAmount: iterator.submitFieldValueMap.transactionAmount,
                    currency: iterator.submitFieldValueMap.currency,
                    currencyDescription: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    collectionDate: iterator.submitFieldValueMap.collectionDate,
                    collectionLocationDesc: iterator.submitFieldValueMap.collectionLocationDesc,
                    collectionLocation: iterator.submitFieldValueMap.collectionLocation,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    chequeBankName: iterator.submitFieldValueMap.chequeBankName,
                    chequeSerialNo: iterator.submitFieldValueMap.chequeSerialNo,
                    selectedFileData_rectImg_uploadedFiles: iterator.submitFieldValueMap.selectedFileData_rectImg_uploadedFiles,
                    selectedFileData_veroImg_uploadedFiles: iterator.submitFieldValueMap.selectedFileData_veroImg_uploadedFiles,
                    uploadedFiles: iterator.submitFieldValueMap.uploadedFiles,
                    chequeFileComment: iterator.submitFieldValueMap.chequeFileComment,
                    depositReason: iterator.submitFieldValueMap.depositReason,
                    operId: iterator.operId,
                    dataSaveId: iterator.dataSaveId
                  };
                  cardList.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return cardList;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            _superPropGet(CashAndChequeCollectionRequestReportPage, "viewWillEnter", this, 3)([]);

            this.loadList(this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue);
            this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue == this.cashKey ? this.cashCollectionOptions.isCash = true : this.cashCollectionOptions.isCash = false;
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      CashAndChequeCollectionRequestReportPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]
        }];
      };

      CashAndChequeCollectionRequestReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cash-and-cheque-collection-request-report',
        template: _raw_loader_cash_and_cheque_collection_request_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cash_and_cheque_collection_request_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]])], CashAndChequeCollectionRequestReportPage);
      /***/
    },

    /***/
    "a/Dz":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.page.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a_Dz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNoLWFuZC1jaGVxdWUtY29sbGVjdGlvbi1yZXF1ZXN0LXJlcG9ydC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "w3x6":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.page.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w3x6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-segment id=\"cashSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-option-cash-and-cheque *ngIf=\"cashCollectionOptions?.listOfOptions?.length > 0\" id=\"ps-option-cash-list\"\n        [options]=\"cashCollectionOptions\" (reloadFct)=\"onClickSegment('cash')\"></ps-option-cash-and-cheque>\n      <div *ngIf=\"cashCollectionOptions?.listOfOptions?.length ==0\" class=\"no-account-text\">\n        <ps-label [options]=\"debitCardLabelOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-option-cash-and-cheque *ngIf=\"chequeCollectionOptions?.listOfOptions?.length > 0\" id=\"ps-option-cheque-list\"\n        [options]=\"chequeCollectionOptions\"  (reloadFct)=\"onClickSegment('cheque')\">\n      </ps-option-cash-and-cheque>\n      <div *ngIf=\"chequeCollectionOptions?.listOfOptions?.length ==0\" class=\"no-account-text\">\n        <ps-label [options]=\"chqCardLabelOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n  </ps-complex-segment>\n</ps-template-view>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=80-es5.js.map