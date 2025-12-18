(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
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
    "K3GF":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K3GF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtb3duLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "VEWP":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: PsLookupOwnAccountsComponent */

    /***/
    function VEWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupOwnAccountsComponent", function () {
        return PsLookupOwnAccountsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_own_accounts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-own-accounts.component.html */
      "XDJu");
      /* harmony import */


      var _ps_lookup_own_accounts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-own-accounts.component.scss */
      "K3GF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/accounts/accounts.service */
      "4lGw");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
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
      /**
       * @author Aftab.Ali
       * @since 03/02/2020
       *
       * <p> PsComplexOwnAccountComponent is complex component to show accounts list fetched from server, balance and available balance</p>
       */


      var PsLookupOwnAccountsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsLookupOwnAccountsComponent(commonService, logger, omniPull, accountsService) {
          var _this2;

          _classCallCheck(this, PsLookupOwnAccountsComponent);

          _this2 = _callSuper(this, PsLookupOwnAccountsComponent, [commonService, logger]);
          _this2.commonService = commonService;
          _this2.omniPull = omniPull;
          _this2.accountsService = accountsService;
          _this2.options = {
            fromTo: '',
            requestObject: null
          };
          _this2.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_valid_account_found_key',
            multiple: _this2.options.multiple ? _this2.options.multiple : false
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this2.onAccountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.onAccountDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.labelValuesMap = new Map();
          _this2.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_8__["PsCurrencyPipe"]();
          _this2.labelOptions = {};
          _this2.allType = false;
          return _this2;
        }

        _inherits(PsLookupOwnAccountsComponent, _src_app_commonSRC_ps);

        return _createClass(PsLookupOwnAccountsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadAccounts(null);
            this.complexLookupOptions.labelKey = this.options.labelKey;
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.allType = this.options.allType ? this.options.allType : false;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
            this.complexLookupOptions.requestObject = this.options.requestObject;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(change) {
            this.complexLookupOptions.labelKey = this.options.labelKey;
            this.complexLookupOptions.placeHolder = this.options.placeHolder; // if (this.options.accountNumber !== undefined) {
            //   this.loadAccounts(null);
            // }
          }
          /**
           * populating account - fetching from server
           */

        }, {
          key: "loadAccounts",
          value: function loadAccounts(reloadOptions) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var cifInfo, requestData;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (reloadOptions !== null && reloadOptions !== undefined) {
                      this.options = reloadOptions;
                    }

                    this.options.listOfAccounts = []; // TODO: when the service is ready : we will get the account list based on cif number from server. service will take the cif number -- options.cifNumber will provide the cif number

                    if (!(this.options.fromTo === undefined || this.options.fromTo === '')) {
                      _context.n = 1;
                      break;
                    }

                    this.logger.error('lookup_from_to_missing_key');
                    return _context.a(2);

                  case 1:
                    cifInfo = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
                    requestData = this.prepareRequestData(cifInfo);
                    this.returnAccountList(requestData);

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
          /**
           * fetching account list from server
           * @param requestData IOmniAccountRequest
           */

        }, {
          key: "returnAccountList",
          value: function returnAccountList(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this3 = this;

              var personalizationCO, result, result1, personalizationKeyToCheck;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    personalizationCO = this.commonProv.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PERSONALIZATION_CO);
                    this.complexLookupOptions.listOfOptions = undefined;
                    _context2.n = 1;
                    return this.omniPull.returnAccounts(requestData)["catch"](function (error) {
                      _this3.complexLookupOptions.listOfOptions = [];

                      _this3.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
                    });

                  case 1:
                    result = _context2.v;

                    if (!(result && result.gridModel.length > 0)) {
                      _context2.n = 4;
                      break;
                    }

                    if (!this.allType) {
                      _context2.n = 3;
                      break;
                    }

                    requestData.accountType = 'F';
                    requestData.permittedGls = 'F';
                    _context2.n = 2;
                    return this.omniPull.returnAccounts(requestData)["catch"](function (error) {
                      _this3.logger.error('Error: While fetching accounts in PsComplexOwnAccountComponent :', error);
                    });

                  case 2:
                    result1 = _context2.v;

                    if (result1 && result1.gridModel.length > 0) {
                      result.gridModel = [].concat(_toConsumableArray(result.gridModel), _toConsumableArray(result1.gridModel)); //Jira #7129 The correct way to merge two arrays 
                    }

                  case 3:
                    this.options.listOfAccounts = result.gridModel;

                    if (this.options.accountNumber && this.options.accountNumber !== '') {
                      this.complexLookupOptions.listOfOptions = this.options.listOfAccounts.filter(function (account) {
                        return account.accountNumber !== _this3.options.accountNumber;
                      });
                    }

                    if (this.options.currency && this.options.currency !== '') {
                      this.complexLookupOptions.listOfOptions = this.fetchAccountBasedOnCurrency(this.options.currency);

                      if (this.options.accountNumber && this.options.accountNumber !== '') {
                        this.complexLookupOptions.listOfOptions = this.options.listOfAccounts.filter(function (account) {
                          return account.accountNumber !== _this3.options.accountNumber;
                        });
                      }
                    }

                    if (this.options.accountNumber === null || this.options.accountNumber === undefined || this.options.accountNumber === '') {
                      this.complexLookupOptions.listOfOptions = this.options.listOfAccounts;
                    }

                    this.complexLookupOptions.listOfOptions = this.populateCustomAccounts(this.complexLookupOptions.listOfOptions); //AZDB-1203, Moved here by ghada from ps-accounts-list in order to reasure that data is retured from service to assign rowIndex for each record

                    this.complexLookupOptions.listOfOptions.map(function (element, index) {
                      return element['rowIndex'] = index;
                    });
                    this.allAccounts = Object.assign([], this.complexLookupOptions.listOfOptions);

                    if (this.complexLookupOptions.selectedItems == undefined) {
                      this.complexLookupOptions.selectedItems = [];
                    }

                    if (this.complexLookupOptions.multiple) {
                      this.handleMultipleSelection();
                    } //added by Marina for TP:#1433069 to default any from account field to the account chosen by the user in personalization settings
                    //loop on listOfOptions instead of accountsList to be able to use lookup property of the account because
                    //it is the property used by ps-complex-lookup component to set the lookup value    


                    if (!this.options.requestObject[this.options.fcName]) {
                      this.options.defaultByPersonalizedAcc = this.options.defaultByPersonalizedAcc != undefined ? this.options.defaultByPersonalizedAcc : true;

                      if (this.options.fromTo === 'from' && this.options.defaultByPersonalizedAcc) {
                        personalizationKeyToCheck = this.options.purpose === 'QR' ? personalizationCO === null || personalizationCO === void 0 ? void 0 : personalizationCO.defaultQrPaymentAccKey : personalizationCO === null || personalizationCO === void 0 ? void 0 : personalizationCO.defaultTransferAccKey;
                        this.complexLookupOptions.listOfOptions.map(function (account) {
                          //Makki: Jira #5578, Having two undefined values doesn't mean the condition is fulfilled, need to check personalizeKey is not 'undefined'
                          if (account.personalizeKey) {
                            if (account.personalizeKey === personalizationKeyToCheck) {
                              _this3.common.setValInsideNestedObj(_this3.options.fcName, account.lookupKey, _this3.options.requestObject);

                              _this3.common.setValInsideNestedObj(_this3.options.fcName + '_lookupKey', account.lookupKey, _this3.options.requestObject);
                            }
                          }
                        });
                      }
                    }

                    _context2.n = 5;
                    break;

                  case 4:
                    this.listOfAccounts = [];
                    this.complexLookupOptions.listOfOptions = [];

                  case 5:
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
                  accountTypeDesc: iterator.accountTypeDesc,
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
                  lookupKey: iterator.additionalRef,
                  branchDescription: iterator.branchDescription ? iterator.branchDescription : '',
                  generalLedgerBriefNameEng: iterator.generalLedgerBriefNameEng ? iterator.generalLedgerBriefNameEng : '',
                  previewProperty: 'accountNumber',
                  status: iterator.statusDescription,
                  statusCode: iterator.status,
                  accountFormat: this.accountsService.returnFormattedAccount(iterator).accountFormat
                }; //added by Marina TP:#1433069 to include the excludeType property with each account if the lookup is multiselect

                if (this.options.multiple) {
                  account.excludeType = iterator.excludeType;
                }

                accountsList.push(account);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return accountsList;
          }
          /**
           * preparing request data
           * @param cifInfo: any
           */

        }, {
          key: "prepareRequestData",
          value: function prepareRequestData(cifInfo) {
            var requestData = {};

            if (cifInfo && cifInfo.omniUserVO) {
              requestData = {
                // vsBranchCode: cifInfo.branchCode,
                userCifNo: cifInfo.omniUserVO.CIF_NO,
                type: 'A'
              };
            }

            if (this.options.queryParams != null && this.options.queryParams !== undefined && this.options.queryParams !== '') {
              requestData = {
                commonParametersList: this.options.queryParams
              };
            }

            if (this.options.accountType != null && this.options.accountType !== undefined && this.options.accountType !== '') {
              requestData.accountType = this.options.accountType;
            }

            if (this.options.glTypes != null && this.options.glTypes !== undefined && this.options.glTypes !== '') {
              requestData.permittedGls = this.options.glTypes;
            }

            if (this.options.fromTo !== null && this.options.fromTo !== undefined && this.options.fromTo !== '') {
              requestData.fromTo = this.options.fromTo;
            }

            if (this.options.endUserId !== null && this.options.endUserId !== undefined && this.options.endUserId !== '') {
              requestData.endUserId = this.options.endUserId;
            }

            if (this.options.fromCurrency !== null && this.options.fromCurrency !== undefined) {
              requestData.fromCurrency = this.options.fromCurrency;
            } else if (this.options.toCurrency !== null && this.options.toCurrency !== undefined) {
              requestData.toCurrency = this.options.toCurrency;
            }

            if (this.options.accountAllowedCurrencies != null && this.options.accountAllowedCurrencies !== undefined) {
              if (typeof this.options.accountAllowedCurrencies === 'string') {
                requestData.accountAllowedCurrencies = this.options.accountAllowedCurrencies;
              } else {
                var temp = ''; // eslint-disable-next-line guard-for-in

                for (var val in this.options.accountAllowedCurrencies) {
                  var value = this.options.accountAllowedCurrencies[val];
                  temp += value + ',';
                }

                temp = temp.slice(0, temp.lastIndexOf(','));
                requestData.accountAllowedCurrencies = temp;
              }
            }

            if (this.options.accountAllowedTypes != null && this.options.accountAllowedTypes !== undefined) {
              if (typeof this.options.accountAllowedTypes === 'string') {
                requestData.accountAllowedTypes = this.options.accountAllowedTypes;
              } else {
                var _temp = ''; // eslint-disable-next-line guard-for-in

                for (var _val in this.options.accountAllowedTypes) {
                  var _value = this.options.accountAllowedTypes[_val];
                  _temp += _value + ',';
                }

                _temp = _temp.slice(0, _temp.lastIndexOf(','));
                requestData.accountAllowedTypes = _temp;
              }
            }

            return requestData;
          }
          /**
           * will fetch the list of accounts from server based currecy filter
           */

        }, {
          key: "fetchAccountBasedOnCurrency",
          value: function fetchAccountBasedOnCurrency(currency) {
            // TODO: when service is available: account list will be fetched from server based on currency if passed any
            return this.options.listOfAccounts;
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.logger.log(event); // TODO: get the updated data from server
          }
        }, {
          key: "populateOwnAccountMap",
          value: function populateOwnAccountMap() {
            var accountNumberMap = {};
            var accountBalanceMap = {};
            var accountAvailableBalanceMap = {};
            accountNumberMap = {
              key: 'accountNumber',
              value: '--- --- --- ---',
              isEdit: false
            };
            accountBalanceMap = {
              key: 'currentBalance',
              value: '0.0',
              isEdit: false
            };
            accountAvailableBalanceMap = {
              key: 'availableBalance',
              value: '0.0',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('account_key', accountNumberMap);
            this.labelValuesMap.set('balance_key', accountBalanceMap);
            this.labelValuesMap.set('available_balance_key', accountAvailableBalanceMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onAccountChange.emit(event);
          }
        }, {
          key: "onDeleteItem",
          value: function onDeleteItem(account) {
            if (account) {
              this.onAccountDeleted.emit(account);
            }
          }
        }, {
          key: "handleMultipleSelection",
          value: function handleMultipleSelection() {
            var _this4 = this;

            var accountList = this.options.setAllAccountsAsSelecetd ? this.complexLookupOptions.listOfOptions : this.options.requestObject[this.options.fcName] ? this.complexLookupOptions.listOfOptions.filter(function (item) {
              return _this4.options.requestObject[_this4.options.fcName].some(function (item1) {
                return item1.accountNumber == item.accountNumber;
              });
            }) : []; //edited by Marina TP:#1433069 to avoid adding excluded general or term accounts with the selected items

            this.complexLookupOptions.selectedItems = accountList.filter(function (element) {
              return _this4.options.setAllAccountsAsSelecetd && (!element.excludeType || !(element.excludeType.includes(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].GENERAL_ACCOUNT_EXCLUDE_TYPE) || element.excludeType.includes(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].TERM_ACCOUNT_EXCLUDE_TYPE))) || !_this4.options.setAllAccountsAsSelecetd;
            }).map(function (element) {
              return Object.assign(Object.assign({
                item: element[element.previewProperty]
              }, element), {
                itemLookup: element.lookupKey
              });
            });
            if (this.complexLookupOptions.selectedItems.length > 0) this.complexLookupComponentObj.setSelectedItems(this.complexLookupOptions.selectedItems);
          }
        }, {
          key: "removeAccount",
          value: function removeAccount(account) {
            if (account) {
              if (this.allAccounts !== undefined) {
                this.complexLookupOptions.listOfOptions = this.allAccounts ? this.allAccounts.filter(function (item) {
                  return account.accountNumber != item.accountNumber;
                }) : [];
              }
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }, {
          key: "refreshAcounts",
          value: function refreshAcounts(accountOptions) {
            this.complexLookupOptions.listOfOptions = Object.assign([], this.allAccounts);
            this.removeAccount(accountOptions);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__["PsBaseFieldComponent"]);

      PsLookupOwnAccountsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
        }];
      };

      PsLookupOwnAccountsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onAccountChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onAccountDeleted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }]
      };
      PsLookupOwnAccountsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-own-accounts',
        template: _raw_loader_ps_lookup_own_accounts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_own_accounts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"], src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]])], PsLookupOwnAccountsComponent);
      /***/
    },

    /***/
    "XDJu":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XDJu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    (onDeleteItem)=\"onDeleteItem($event)\" [options]=\"complexLookupOptions\">\n  </ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "xB6I":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsLookupOwnAccountComponentModule */

    /***/
    function xB6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupOwnAccountComponentModule", function () {
        return PsLookupOwnAccountComponentModule;
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


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ps-lookup-own-accounts.component */
      "VEWP");

      var PsLookupOwnAccountComponentModule = /*#__PURE__*/_createClass(function PsLookupOwnAccountComponentModule() {
        _classCallCheck(this, PsLookupOwnAccountComponentModule);
      });

      PsLookupOwnAccountComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnAccountsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputVarcharComponentModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnAccountsComponent"]],
        entryComponents: [_ps_lookup_own_accounts_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnAccountsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupOwnAccountComponentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=5-es5.js.map