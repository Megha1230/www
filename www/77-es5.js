(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77], {
    /***/
    "5Cxq":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/account-statement-list/account-statement-list.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Cxq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXN0YXRlbWVudC1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ENT/":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-statement-list/account-statement-list.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ENT_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-report-filter-criteria (onPsChange)=\"filterCriteria($event)\" [options]=\"reportFilterOptions\"\n    [id]=\"'filter_criteria'\">\n  </ps-complex-report-filter-criteria>\n  <ng-container *ngIf=\"!requestWasSent\">\n    <ps-account-statement-list [options]=\"accountStatementListOptions\" (reloadFct)=\"loadAccountStatement()\">\n    </ps-account-statement-list>\n    <div *ngIf=\"noTransactionsFound\" class=\"no-transfers-text\">\n      <ps-label [options]=\"noTransactionsFound\"></ps-label>\n    </div>\n  </ng-container>\n\n  <ng-container footer>\n    <ps-button-send-email class=\"footer-buttons\" [options]=\"sendOptions\" [id]=\"'rep_send_' + id\">\n    </ps-button-send-email>\n    <ps-button-export class=\"footer-buttons\" [options]=\"exportOptions\" [id]=\"'rep_export_' + id\"></ps-button-export>\n  </ng-container>\n\n</ps-template-view>";
      /***/
    },

    /***/
    "OkPl":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/account-statement-list/account-statement-list.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: AccountStatementListPage */

    /***/
    function OkPl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountStatementListPage", function () {
        return AccountStatementListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_statement_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-statement-list.page.html */
      "ENT/");
      /* harmony import */


      var _account_statement_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-statement-list.page.scss */
      "5Cxq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */
      "nipE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var AccountStatementListPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function AccountStatementListPage(commonService, logger, navService, omniPull) {
          var _this;

          _classCallCheck(this, AccountStatementListPage);

          _this = _callSuper(this, AccountStatementListPage);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.navService = navService;
          _this.omniPull = omniPull;
          _this.id = 'default_stepper_id';
          _this.requestWasSent = true;
          _this.noTransactionsFound = false;
          _this.paramList = {};
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.templateViewOptions = {
            group: _this.formGroup
          };
          _this.psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_6__["PsDateFormatPipe"]();
          _this.accountStatementListOptions = {};
          _this.reportFilterOptions = {};
          _this.noTransactionsOptions = {
            labelKey: 'no_transactions_available_key'
          };
          _this.exportOptions = {
            group: _this.formGroup
          };
          _this.sendOptions = {
            group: _this.formGroup
          };
          return _this;
        } //commented code are for demo purposes till the required services are done


        _inherits(AccountStatementListPage, _omni_base_omni_base_);

        return _createClass(AccountStatementListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(AccountStatementListPage, "init", this, 3)([]);

            this.paramList = this.navService.getAllParams() ? this.navService.getAllParams() : null;
            this.exportOptions.reportParametersList = this.paramList;
            this.sendOptions.reportParametersList = this.paramList;
            this.accountStatementListOptions = {
              isEditable: true,
              group: this.formGroup
            };
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = 63;
            this.loadAccountStatement();
          } //prepare service request data

        }, {
          key: "loadAccountStatement",
          value: function loadAccountStatement(appliedFilters) {
            var generalRequestData = {
              commonParametersList: {
                status: "A",
                accountNumber: this.paramList.accountNumber,
                additionalRef: this.paramList.additionalRef
              },
              accountCategory: this.paramList.accountTypeCategory,
              ibanAccNo: this.paramList.ibanAccNo,
              accGl: this.paramList.accGl,
              dateFrom: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltfilterFromDate,
              dateTo: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltfilterToDate,
              minAmount: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltfromAmount,
              maxAmount: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFlttoAmount,
              referenceNo: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFltReferenceNumber,
              transactionTypeIndicator: appliedFilters === null || appliedFilters === void 0 ? void 0 : appliedFilters.repFlttrsTypeInd
            };
            this.returnAccountStatement(generalRequestData);
          } //fetching account statement data

        }, {
          key: "returnAccountStatement",
          value: function returnAccountStatement(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.requestWasSent = true; // await this.omniPull.returnTransactionsList({
                    //   commonParametersList: {
                    //     status: "A",
                    //   }
                    // },).catch(error => {
                    //   this.logger.error('Error: While fetching account statement  :', error);
                    // });
                    // dummy data for demo should be removed

                    result = {
                      gridModel: [{
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purchase Jpay*Jumia",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        startDate: '22/11/2022',
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "3",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purchase Jpay*Jumia",
                        merchantLogo: "jumia",
                        merchantName: "Jumia",
                        branch: 'Perth'
                      }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purchase google youtube music",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        startDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "2",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purchase google youtube music",
                        merchantLogo: "youtube",
                        merchantName: "youtube",
                        branch: 'Sydney'
                      }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purchase zara",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        startDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "1",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purchase zara",
                        merchantLogo: "zara",
                        merchantName: "zara",
                        branch: 'Gold Coast'
                      }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Local transfer to Peter John",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        valueDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "4",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Local transfer to Peter John",
                        chequeNo: "123456",
                        payeeName: "Peter John",
                        chequeDate: 1665435600000
                      }, {
                        transactionNo: "2317524",
                        toAccountAccGl: "47004000000004259078",
                        fromAccountCif: "1000087",
                        fromAccountAccGl: "272101",
                        transactionTypeShortNameEnglish: "Purches from TND",
                        fromAccountCurrency: "788",
                        cifShortName: "FARAJ",
                        fromAccountAdditionalRef: "47004000000003180923",
                        transactionCurrency: "788",
                        amount: "10",
                        valueDate: 1665435600000,
                        transactionDate: 1665435600000,
                        currencyBriefNameEnglish: "TND",
                        transactionType: "6",
                        toAccountBranch: "1004",
                        statusDescription: "Approved",
                        toAccountCif: "1000087",
                        cvAmount: "10",
                        status: "P",
                        description: "Purches from TND",
                        chequeNo: "123456",
                        payeeName: "TND",
                        chequeDate: 1665435600000
                      }]
                    };

                    if (result && result.gridModel.length > 0) {
                      this.accountStatementListOptions.listOfOptions = this.populateAccountTransactions(result.gridModel);
                    } else {
                      this.accountStatementListOptions.listOfOptions = [];
                    }

                    this.requestWasSent = false;

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "populateAccountTransactions",
          value: function populateAccountTransactions(transactionslist) {
            var _this2 = this;

            var transactions = [];

            var _iterator = _createForOfIteratorHelper(transactionslist),
                _step;

            try {
              var _loop = function _loop() {
                var iterator = _step.value;
                var trans = {
                  transactionDate: _this2.psDatePipe.transform(iterator.transactionDate, 'DD/MM/YYYY').toString(),
                  transactionName: iterator.transactionTypeShortNameEnglish,
                  reference: iterator.soReference,
                  transactionAmount: iterator.amount + ' ' + iterator.currencyBriefNameEnglish,
                  valueDate: _this2.psDatePipe.transform(iterator.valueDate, 'DD/MM/YYYY').toString(),
                  branch: iterator.bankCifShortNameEng,
                  fromAccount: iterator.fromAccountAdditionalRef ? iterator.fromAccountAdditionalRef : iterator.fromAccountAccGl,
                  fromAccount_lookupKey: iterator.fromAccountAdditionalRef ? iterator.fromAccountAdditionalRef : iterator.fromAccountAccGl,
                  toAccount: iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                  toAccount_lookupKey: iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                  chequeNo: iterator.chequeNo,
                  chequeDate: iterator.chequeDate,
                  payeeName: iterator.payeeName,
                  description: iterator.description,
                  merchantName: iterator.merchantName,
                  merchantLogo: iterator.merchantLogo
                }; //if the transaction related to a merchant check on his logo if it's not returned set default logo from admin

                if (iterator.merchantName) {
                  if (!iterator.merchantLogo) {
                    _this2.omniPull.getParamValOf('DefaultLogo').then(function (res) {
                      trans.merchantLogo = res.gridModel.defaultLogo;
                    })["catch"](function (err) {
                      return _this2.logger.log(err);
                    });
                  }
                } //leave only reqired data for each transaction type


                if (iterator.transactionType == "1") {
                  delete trans.toAccount;
                  delete trans.toAccount_lookupKey;
                  delete trans.chequeNo;
                  delete trans.chequeDate;
                  delete trans.payeeName;
                } else if (iterator.transactionType == "2") {
                  delete trans.fromAccount;
                  delete trans.fromAccount_lookupKey;
                  delete trans.chequeNo;
                  delete trans.chequeDate;
                  delete trans.payeeName;
                } else if (iterator.transactionType == "3") {
                  delete trans.chequeNo;
                  delete trans.chequeDate;
                  delete trans.payeeName;
                } else if (iterator.transactionType == "4") {
                  delete trans.toAccount;
                  delete trans.toAccount_lookupKey;
                } else if (iterator.transactionType == "5") {
                  delete trans.fromAccount;
                  delete trans.fromAccount_lookupKey;
                }

                transactions.push(trans);
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return transactions;
          }
        }, {
          key: "filterCriteria",
          value: function filterCriteria(filterData) {
            this.sendOptions.fromDate = filterData.repFltfilterFromDate;
            this.sendOptions.todate = filterData.repFltfilterToDate;
            this.loadAccountStatement(filterData);
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      AccountStatementListPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      AccountStatementListPage.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AccountStatementListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-statement-list',
        template: _raw_loader_account_statement_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_statement_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], AccountStatementListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=77-es5.js.map