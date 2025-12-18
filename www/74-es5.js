(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74], {
    /***/
    "4lGw":
    /*!****************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psServices/accounts/accounts.service.ts ***!
      \****************************************************************************/

    /*! exports provided: AccountsService */

    /***/
    function lGw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
        return AccountsService;
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


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../omni-common/omni-pull.service */
      "ZyuK");
      /*
      Created by Waleed Aly 03 April 2023 to encapsulated repeated code needed in different cards components "debit,credit,prepaid"
      */


      var AccountsService = /*#__PURE__*/function () {
        function AccountsService(omniPull, logger) {
          _classCallCheck(this, AccountsService);

          this.omniPull = omniPull;
          this.logger = logger;
          this.getAccountAsIBAN();
        }

        return _createClass(AccountsService, [{
          key: "getAccountAsIBAN",
          value: function getAccountAsIBAN() {
            var _this = this;

            if (this.accountAsIBAN === undefined) {
              this.omniPull.getParamValOf('AccountsAsIBAN').then(function (res) {
                _this.accountAsIBAN = res.AccountsAsIBAN;
              })["catch"](function (err) {
                return _this.logger.log(err);
              });
            }
          }
        }, {
          key: "returnFormattedAccount",
          value: function returnFormattedAccount(account) {
            var formattedAccount;
            var accountFormat;

            if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 1) {
              formattedAccount = account.ibanAccNo === null || account.ibanAccNo === undefined ? '' : account.ibanAccNo;
              accountFormat = 'IBAN';
            } else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 2) {
              formattedAccount = account.additionalRef === null || account.additionalRef === undefined ? '' : account.additionalRef;
              accountFormat = 'AddRef';
            } else if (this.accountAsIBAN !== null && this.accountAsIBAN !== undefined && this.accountAsIBAN === 3) {
              formattedAccount = account.branch + '-' + account.currency + '-' + account.accGl + '-' + account.cif + '-' + account.serialNo;
              accountFormat = 'iMAL';
            } else {
              formattedAccount = account.additionalRef === null || account.additionalRef === undefined ? '' : account.accountNumber;
              accountFormat = 'ACCNO';
            }

            return {
              formattedAccount: formattedAccount,
              accountFormat: accountFormat
            };
          }
        }]);
      }();

      AccountsService.ctorParameters = function () {
        return [{
          type: _omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
        }];
      };

      AccountsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])], AccountsService);
      /***/
    },

    /***/
    "7hi+":
    /*!*************************************************************!*\
      !*** ./src/app/pages/accounts-list/accounts-list.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function hi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LgaR":
    /*!***********************************************************!*\
      !*** ./src/app/pages/accounts-list/accounts-list.page.ts ***!
      \***********************************************************/

    /*! exports provided: AccountsListPage */

    /***/
    function LgaR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsListPage", function () {
        return AccountsListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_accounts_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./accounts-list.page.html */
      "M1YT");
      /* harmony import */


      var _accounts_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accounts-list.page.scss */
      "7hi+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/accounts/accounts.service */
      "4lGw");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */
      "EIUR");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var AccountsListPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function AccountsListPage(commonService, logger, omniPull, accountsService) {
          var _this2;

          _classCallCheck(this, AccountsListPage);

          _this2 = _callSuper(this, AccountsListPage);
          _this2.commonService = commonService;
          _this2.logger = logger;
          _this2.omniPull = omniPull;
          _this2.accountsService = accountsService;
          _this2.generalLabelValuesMap = new Map();
          _this2.generalHeaderMap = new Map();
          _this2.termsLabelValuesMap = new Map();
          _this2.termsHeaderMap = new Map();
          _this2.showGeneralAccounts = true;
          _this2.showTermsAccounts = false;
          _this2.noGeneralAccountFound = false;
          _this2.noTermsAccountFound = false;
          _this2.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["PsCurrencyPipe"]();
          _this2.noTermsRecordFoundOptions = {
            labelKey: 'no_terms_records_found_key',
            previewMode: false
          };
          _this2.noGenRecordFoundOptions = {
            labelKey: 'no_general_records_found_key',
            previewMode: false
          };
          _this2.complexSegmentOptions = {
            segmentOptions: {
              segmentList: []
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['general_account_segment', 'term_account_segment']
            }
          };
          _this2.generalAccountsKey = 'general_accounts_key';
          _this2.termsAccountsKey = 'terms_accounts_key';
          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this2.templateViewOptions = {
            group: _this2.formGroup
          }; //this.populateHeaderValueMap();

          return _this2;
        }

        _inherits(AccountsListPage, _omni_base_omni_base_);

        return _createClass(AccountsListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(AccountsListPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; // Added by Zunair For #BUG 1257538

            this.complexSegmentOptions.group = this.formGroup;
            this.complexSegmentOptions.segmentOptions = {
              fcName: 'accountsSegment',
              segmentList: [{
                selected: true,
                itemValue: this.generalAccountsKey,
                description: this.commonProv.translate(this.generalAccountsKey)
              }, {
                selected: true,
                itemValue: this.termsAccountsKey,
                description: this.commonProv.translate(this.termsAccountsKey)
              }]
            };
            this.generalAccountListOptions = {
              isEditable: true,
              generatedToQR: true,
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].GENERAL_ACCOUNT_TYPE,
              balanceFcNames: ['generalCurrentBalance', 'generalAvailableBalance']
            };
            this.termsAccountListOptions = {
              isEditable: true,
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].TERM_ACCOUNT_TYPE,
              balanceFcNames: ['termCurrentBalance', 'termAvailableBalance']
            };
          }
        }, {
          key: "onClickSegment",
          value: function onClickSegment(selectedSegment) {
            if (selectedSegment === this.generalAccountsKey) {
              this.termsAccountListOptions.refreshTermDepositList = false;
              this.showTermsAccounts = false;
              this.showGeneralAccounts = true;
            } else {
              this.termsAccountListOptions.refreshTermDepositList = true;
              this.showTermsAccounts = true;
              this.showGeneralAccounts = false;
            }

            this.selectedAccountSegment = this.commonProv.translate(selectedSegment);
            ;
            this.loadAccounts(selectedSegment);
          }
          /**
           * populating account - fetching from server
           */

        }, {
          key: "loadAccounts",
          value: function loadAccounts(segment) {
            // TODO: when the service is ready : we will get the account list based on cif number from server. service will take the cif number -- options.cifNumber will provide the cif number
            var cifInfo = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);

            if (segment === this.generalAccountsKey) {
              var generalRequestData = {
                userCifNo: cifInfo === null || cifInfo === void 0 ? void 0 : cifInfo.omniUserVO.CIF_NO,
                permittedGls: 'G',
                accountType: 'G'
              };
              this.returnGeneralAccountList(generalRequestData);
            } else if (segment === this.termsAccountsKey) {
              var termsRequestData = {
                userCifNo: cifInfo.omniUserVO.CIF_NO,
                permittedGls: 'F',
                accountType: 'F'
              };
              this.returnTermsAccountList(termsRequestData);
            }
          }
          /**
           * fetching general account list from server
           * @param requestData IOmniAccountRequest
           */

        }, {
          key: "returnGeneralAccountList",
          value: function returnGeneralAccountList(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.generalAccountListOptions.listOfOptions = [];
                    _context.n = 1;
                    return this.omniPull.returnAccounts(requestData)["catch"](function (error) {
                      _this3.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
                    });

                  case 1:
                    result = _context.v;

                    if (result && result.gridModel.length > 0) {
                      this.accountsService.getAccountAsIBAN();
                      this.noGeneralAccountFound = false;
                      this.generalAccountListOptions.listOfOptions = this.populateCustomAccounts(result.gridModel);
                    } else {
                      this.generalAccountListOptions.listOfOptions = [];
                      this.noGeneralAccountFound = true;
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
          /**
           * fetching terms account list from server
           * @param requestData IOmniAccountRequest
           */

        }, {
          key: "returnTermsAccountList",
          value: function returnTermsAccountList(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this4 = this;

              var result;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.termsAccountListOptions.listOfOptions = [];
                    _context2.n = 1;
                    return this.omniPull.returnAccounts(requestData)["catch"](function (error) {
                      _this4.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
                    });

                  case 1:
                    result = _context2.v;

                    if (result && result.gridModel.length > 0) {
                      this.accountsService.getAccountAsIBAN();
                      this.noTermsAccountFound = false;
                      this.termsAccountListOptions.listOfOptions = this.populateCustomAccounts(result.gridModel);
                    } else {
                      this.termsAccountListOptions.listOfOptions = [];
                      this.noTermsAccountFound = true;
                    }

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
          /**
           *
           * @param listOfOptions
           */

        }, {
          key: "populateCustomAccounts",
          value: function populateCustomAccounts(listOfOptions) {
            var accountsList = [];

            var _iterator = _createForOfIteratorHelper(listOfOptions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;
                var account = {
                  briefNameEnglish: iterator.briefNameEnglish,
                  cifShortNameEnglish: iterator.cifShortNameEnglish,
                  accountNumber: iterator.accountNumber,
                  balance: this.psCurrency.transform(iterator.balance === null || iterator.balance === undefined ? '0.0' : iterator.balance, iterator.currencyDecimalPoints) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                  availableBalance: this.psCurrency.transform(iterator.availableBalance === null || iterator.availableBalance === undefined ? '0.0' : iterator.availableBalance, iterator.currencyDecimalPoints) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                  currencyBriefName: iterator.currencyBriefName || iterator.currencyBriefNameEnglish,
                  currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                  currency: iterator.currency,
                  additionalRef: iterator.additionalRef,
                  ibanAccNo: iterator.ibanAccNo,
                  accGl: iterator.accGl,
                  serialNo: iterator.serialNo,
                  branch: iterator.branch,
                  cif: iterator.cif,
                  formattedAccount: this.accountsService.returnFormattedAccount(iterator).formattedAccount,
                  personalizeKey: iterator.personalizeKey,
                  nickName: iterator.nickName,
                  briefName: iterator.briefName,
                  generalLedgerBriefNameEng: iterator.generalLedgerBriefNameEng,
                  accountTypeDesc: iterator.accountTypeDesc,
                  status: iterator.statusDescription,
                  statusCode: iterator.status,
                  branchDescription: iterator.branchDescription,
                  sharedMessage: this.generateSharedMessage(iterator),
                  // salah
                  actualAmount: iterator.actualAmount,
                  outstandingAmount: iterator.outstandingAmount,
                  accumulatedAmount: iterator.accumulatedAmount,
                  accountFormat: this.accountsService.returnFormattedAccount(iterator).accountFormat
                };
                accountsList.push(account);
              } //AZDB-2360, Moved here by ghada from ps-accounts-list in order to reasure that data is retured from service to assign rowIndex for each record

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            accountsList.map(function (element, index) {
              return element['rowIndex'] = index;
            });
            return accountsList;
          }
        }, {
          key: "updateCard",
          value: function updateCard(value) {} // Edited by ghada tp#1246612 for fixing the format as amana requested and to remove aacount name, ref and iban info from shared message

        }, {
          key: "generateSharedMessage",
          value: function generateSharedMessage(itemCard) {
            var _a;

            var message = '';
            message = this.commonProv.translate('account_holder_name_key') + ': ' + ((_a = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).customerInfoCO.longName) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());

            if (itemCard.accountNumber != null && itemCard.accountNumber != undefined) {
              message = (message != '' ? message + '\n' : '') + this.commonProv.translate('account_number_key') + ': ' + itemCard.accountNumber;
            }

            message = (message != '' ? message + '\n' : '') + this.commonProv.translate('bank_name_key') + ': ' + this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).companySettingsCO.companyBriefDesc;

            if (itemCard.branchDescription != null && itemCard.branchDescription != undefined) {
              message = (message != '' ? message + '\n' : '') + this.commonProv.translate('branch_name_key') + ': ' + itemCard.branchDescription;
            }

            return message;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            _superPropGet(AccountsListPage, "viewWillEnter", this, 3)([]); // added by salah AZDB-5042 to check on the selected segment on first initialization takes the default segment, 
            // else when sumbitting from the segment to send the selected segment


            var segmentData = this.complexSegmentOptions.segmentOptions.group.controls.formData.value.accountsSegment || this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue;
            this.loadAccounts(segmentData);
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      AccountsListPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
        }];
      };

      AccountsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accounts-list',
        template: _raw_loader_accounts_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accounts_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])], AccountsListPage);
      /***/
    },

    /***/
    "M1YT":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts-list/accounts-list.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M1YT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\">\n\n  <ps-complex-segment id=\"accountsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-accounts-list id=\"general_acc\" [options]=\"generalAccountListOptions\"\n        *ngIf=\"generalAccountListOptions?.listOfOptions?.length>0\"></ps-accounts-list>\n      <ps-label [options]=\"noGenRecordFoundOptions\" *ngIf=\"noGeneralAccountFound \" class=\"no-account-text\"></ps-label>\n    </ps-content-segment>\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-accounts-list id=\"term_acc\" [options]=\"termsAccountListOptions\"\n        *ngIf=\"termsAccountListOptions?.listOfOptions?.length>0\"></ps-accounts-list>\n      <ps-label [options]=\"noTermsRecordFoundOptions\" *ngIf=\"noTermsAccountFound \" class=\"no-account-text\"></ps-label>\n    </ps-content-segment>\n\n  </ps-complex-segment>\n\n</ps-template-view>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=74-es5.js.map