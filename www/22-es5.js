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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22], {
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
    "gKqT":
    /*!***************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
      \***************************************************/

    /*! exports provided: OmniBasePage */

    /***/
    function gKqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OmniBasePage", function () {
        return OmniBasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./omni-base.page.html */
      "mVVo");
      /* harmony import */


      var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./omni-base.page.scss */
      "s2T5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/customization/psServices/util/common-cust-utils */
      "oS+F");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");

      var OmniBasePage = /*#__PURE__*/function () {
        function OmniBasePage() {
          _classCallCheck(this, OmniBasePage);

          this.isPageDisabled = false;
          this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
          this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]); // this.getScreenTranslations();
        }

        return _createClass(OmniBasePage, [{
          key: "init",
          value: function init() {
            this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
            this.customizationMap = this.commonProv.returnOperCustomization();
            var navParams = this.navigationServices.getAllParams();
            var formDisObj = {}; // let oper = PsCommonSettings.oper_ID;
            // PsCommonSettings.currentListOfSteps = {};

            if (navParams && navParams.readOnlypage === true) {
              formDisObj.IS_READONLY = 1; // Modified by Richie for #BUG 1259353

              if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
              }
            } else if (this.customizationMap) {
              formDisObj.IS_READONLY = 0;
              this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            } // End Richie
            // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif


            this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];

            if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
              this.getScreenTranslations(this.currentOperID);
            } // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif

          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.viewDidEnter();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.viewWillLeave();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.viewWillEnter();
          }
        }, {
          key: "viewWillEnter",
          value: function viewWillEnter() {}
        }, {
          key: "disableForm",
          value: function disableForm(formGroup) {
            var _this2 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
              }
            }
          }
        }, {
          key: "viewDidEnter",
          value: function viewDidEnter() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.dismissLoading();
            this.disableForm(this.baseFormGroup);
            src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
            this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
          }
        }, {
          key: "viewWillLeave",
          value: function viewWillLeave() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              willLeave: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              willLeave: true
            });
          } // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
          // added after all the changeEvents are finished to disable the form 

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this3 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this3.disableForm(_this3.baseFormGroup);

                _this3.isPageDisabled = true;
              }, 300);
            }
          } // AZDB-7529 - Start - AMANAOI250035

        }, {
          key: "getScreenTranslations",
          value: function getScreenTranslations(screenOperId) {
            var operationId = screenOperId ? screenOperId : 2222;
            var activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';

            if (operationId && activeLanguage) {
              this.commonProv.language.getOperTranslation(activeLanguage, operationId);
            }
          }
        }]);
      }();

      OmniBasePage.ctorParameters = function () {
        return [];
      };

      OmniBasePage.propDecorators = {
        psClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class']
        }]
      };
      OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], OmniBasePage);
      /***/
    },

    /***/
    "i0Mm":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i0Mm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\">\n   <ng-container *ngIf=\"!requestWasSent\">\n         <ps-scheduled-transfers-list [options]=\"sheduledTransferListOptions\" (reloadFct)=\"loadScheduledTransfers()\">\n         </ps-scheduled-transfers-list>\n         <div *ngIf=\"noTransfersFound\" class=\"no-transfers-text\">\n            <ps-label [options]=\"noTransfersOptions\"></ps-label>\n          </div>\n   </ng-container>\n</ps-template-view>\n";
      /***/
    },

    /***/
    "kFG2":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: ScheduledTransfersListPage */

    /***/
    function kFG2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduledTransfersListPage", function () {
        return ScheduledTransfersListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_scheduled_transfers_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./scheduled-transfers-list.page.html */
      "i0Mm");
      /* harmony import */


      var _scheduled_transfers_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scheduled-transfers-list.page.scss */
      "zrTz");
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


      var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */
      "nipE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var ScheduledTransfersListPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function ScheduledTransfersListPage(logger, omniPull, accountsService) {
          var _this4;

          _classCallCheck(this, ScheduledTransfersListPage);

          _this4 = _callSuper(this, ScheduledTransfersListPage);
          _this4.logger = logger;
          _this4.omniPull = omniPull;
          _this4.accountsService = accountsService;
          _this4.requestWasSent = true;
          _this4.showTransaction = true;
          _this4.psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["PsDateFormatPipe"]();
          _this4.noTransfersFound = false;
          _this4.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this4.templateViewOptions = {
            group: _this4.formGroup
          };
          _this4.noTransfersOptions = {
            labelKey: 'no_transfers_available_key'
          };
          return _this4;
        }

        _inherits(ScheduledTransfersListPage, _omni_base_omni_base_);

        return _createClass(ScheduledTransfersListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(ScheduledTransfersListPage, "init", this, 3)([]);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            _superPropGet(ScheduledTransfersListPage, "viewWillEnter", this, 3)([]);

            this.sheduledTransferListOptions = {
              isEditable: true,
              group: this.formGroup
            };
            this.loadScheduledTransfers();
          } //Modified by ghada, AZDB-5993 as discussed with PM to send the right status for each transactions list cash/scheduled/pending(immediate)

        }, {
          key: "loadScheduledTransfers",
          value: function loadScheduledTransfers() {
            var trxStatus = '';

            switch (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID) {
              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID:
                {
                  trxStatus = "P,R,F";
                  break;
                }

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID:
                {
                  trxStatus = "A";
                  break;
                }

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SCHEDULED_TRANSFERS_OPER_ID:
                {
                  trxStatus = "P,T,A"; //jira #7123 - Aline request to include A status in Sch Transfer list as well

                  break;
                }
            }

            var generalRequestData = {
              commonParametersList: {
                status: trxStatus //  fromAmount: "1",
                //  toAmount: "100",

              }
            };
            this.returnScheduledTransfers(generalRequestData);
          }
        }, {
          key: "returnScheduledTransfers",
          value: function returnScheduledTransfers(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.requestWasSent = true;
                    _context.n = 1;
                    return this.omniPull.returnTransactionsList(requestData)["catch"](function (error) {
                      _this5.logger.error('Error: While fetching scheduled transfers  :', error);
                    });

                  case 1:
                    result = _context.v;

                    if (result && result.gridModel.length > 0) {
                      this.sheduledTransferListOptions.listOfOptions = this.populateScheduledTransfers(result.gridModel);
                    } else {
                      this.noTransfersFound = true;
                      this.sheduledTransferListOptions.listOfOptions = [];
                    }

                    this.requestWasSent = false;

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "populateScheduledTransfers",
          value: function populateScheduledTransfers(transactionslist) {
            var _a, _b, _c, _d;

            var transactions = [];
            var psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_8__["PsDateFormatPipe"]();

            var _iterator = _createForOfIteratorHelper(transactionslist),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;
                // if (iterator.transferTypeOperId != undefined) {
                var trans = {
                  transferType: iterator.transferTypeOperId ? ((_a = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _a === void 0 ? void 0 : _a.OPER_NAME) ? this.commonProv.translate((_b = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _b === void 0 ? void 0 : _b.OPER_NAME) : iterator.transferType ? this.getTransferTypeInfo(iterator.transferType, 2) : '-----' : '---',
                  transactionAmount: iterator.amount,
                  transactionAmountNCurrency: this.commonProv.amountFormat(iterator.amount, iterator.currencyDecimalPoints || src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DEFAULT_DECIMAL_POINTS) + ' (' + iterator.currencyBriefNameEnglish + ')',
                  transactionStatus: iterator.status,
                  statusCode: iterator.status,
                  status: iterator.statusDescription,
                  statusDescription: iterator.statusDescription,
                  fromCurrency: iterator.fromAccountCurrency,
                  transactionNumber: iterator.transactionNo,
                  fromAccount: iterator.fromAccountAdditionalRef,
                  fromAccount_lookupKey: iterator.fromAccountAdditionalRef,
                  toAccount: iterator.toAccountNumber ? iterator.toAccountNumber : iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                  toAccount_lookupKey: iterator.toAccountNumber ? iterator.toAccountNumber : iterator.toAccountAdditionalRef ? iterator.toAccountAdditionalRef : iterator.toAccountAccGl,
                  reference: iterator.soReference || '-----',
                  title: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID ? iterator.benefName : iterator.fromAccountAdditionalRef,
                  subTtile: iterator.amount,
                  accGl: iterator.fromAccountAccGl,
                  currency: iterator.fromAccountCurrency,
                  workingCif: iterator.fromAccountCif,
                  serialNo: iterator.fromAccountSerialNo,
                  formattedToAccount: this.accountsService.returnFormattedAccount({
                    additionalRef: iterator.toAccountAdditionalRef || iterator.toAccountNumber,
                    ibanAccNo: iterator.toAccountIbanAccNo
                  }).formattedAccount,
                  formattedFromAccount: this.accountsService.returnFormattedAccount({
                    additionalRef: iterator.fromAccountAdditionalRef,
                    ibanAccNo: iterator.fromAccountIbanAccNo,
                    currency: iterator.fromAccountCurrency
                  }).formattedAccount,
                  toBeneficiary: iterator.toAccountAdditionalRef,
                  toBeneficiary_lookupKey: iterator.toAccountAdditionalRef,
                  toAccountType: this.getTransferAccountType(iterator),
                  // toAccountType: iterator.transferType === '1' ? (iterator.toAccountCif === iterator.fromAccountCif) ? 'ownAccountStandingOrder' : 'companyAccountStandingOrder' : iterator.transferType === '2' ? 'bankLocalStandingOrder' : iterator.transferType === '3' ? 'internationalAccountStandingOrder' : iterator.transferType === '4' ? 'companyAccountTransfer' : 'ownAccountStandingOrder',
                  // toAccountType: iterator.transferType == '2' ? ConstantCommon.INTERNAL_TRANSACTION_TYPE : OWN_ACCOUNT_TRANSFER_TYPE == '1' ? (iterator.fromAccountCif == iterator.toAccountCif ? ConstantCommon.OWN_TRANSACTION_TYPE : ConstantCommon.LOCAL_TRANSACTION_TYPE) : iterator.transferType == '3' ? ConstantCommon.INTERNATIONAL_TRANSACTION_TYPE : ConstantCommon.OWN_TRANSACTION_TYPE,
                  scheduler: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID ? false : true,
                  // scheduler: true, //related to next step in payment
                  // operId: iterator.transferTypeOperId ? parseInt(iterator.transferTypeOperId) : iterator.transferType ? this.getTransferTypeInfo(iterator.transferType, 1) : '', // By Mohanad AZDB-6915 - 26012025
                  operName: iterator.transferTypeOperId ? ((_c = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _c === void 0 ? void 0 : _c.OPER_NAME) ? (_d = this.commonProv.getPageByOperId(iterator.transferTypeOperId)) === null || _d === void 0 ? void 0 : _d.OPER_NAME : '' : '',
                  transferTypeOperId: iterator.transferTypeOperId ? parseInt(iterator.transferTypeOperId) : iterator.transferType ? this.getTransferTypeInfo(iterator.transferType, 1) : '',
                  date: iterator.valueDateStr,
                  bankCifShortNameEng: iterator.bankCifShortNameEng || '--------',
                  transactionDate: iterator.transactionDateStr,
                  branch: iterator.fromAccountBranch,
                  benefName: iterator.benefName,
                  idTypeNumber: iterator.idTypeNumber,
                  purpose: iterator.purpose,
                  idNumber: iterator.idNumber,
                  idType: iterator.idType,
                  idExpiryDate: iterator.idExpiryDate,
                  idIssueDate: iterator.idIssueDate,
                  idCountry: iterator.idCountry,
                  benefPhone: iterator.benefPhone,
                  purposeTxtDesc: iterator.purpose,
                  toBranch: iterator.toAccountBranch,
                  transactionBranch: iterator.transactionBranch ////Jira #5525 On Behalf Of Rakesh, Include transactionBranch in the list

                };

                if (iterator.transferType == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER_TYPE || iterator.transferType == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_TRANSFER_TYPE) {
                  delete trans.bankCifShortNameEng;
                }

                transactions.push(trans);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].custMode) {
              var scheduledTransactions = transactions.filter(function (trans) {
                return trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
              });
              var immedTransactions = transactions.filter(function (trans) {
                return trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER || trans.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER;
              });
              return src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? immedTransactions : scheduledTransactions;
            }

            return transactions;
          }
        }, {
          key: "getTransferTypeInfo",
          value: function getTransferTypeInfo(transferType, type) {
            var _a, _b;

            var transferTypeOperId;

            if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_TRANSFER_TYPE) {
              transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
            } else if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_TRANSFER_TYPE) {
              transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
            } else if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER_TYPE) {
              transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID;
            } else if (transferType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_TRANSFER_TYPE) {
              transferTypeOperId = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
            }

            if (type === 1) {
              return transferTypeOperId;
            } else {
              return ((_a = this.commonProv.getPageByOperId(transferTypeOperId)) === null || _a === void 0 ? void 0 : _a.OPER_NAME) ? this.commonProv.translate((_b = this.commonProv.getPageByOperId(transferTypeOperId)) === null || _b === void 0 ? void 0 : _b.OPER_NAME) : '';
            }
          }
        }, {
          key: "getTransferAccountType",
          value: function getTransferAccountType(iterator) {
            var toAccountType = '';

            if (iterator.transferTypeOperId) {
              if ((iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID) && iterator.toAccountCif == iterator.fromAccountCif) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWN_ACCOUNT_TRANSFER ? 'ownAccountTransfer' : 'ownAccountStandingOrder';
              } else if (iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER ? 'companyAccountTransfer' : 'companyAccountStandingOrder';
              } else if (iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER ? 'bankLocalTransfer' : 'bankLocalStandingOrder';
              } else if (iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER || iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID) {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER ? 'internationalAccountTransfer' : 'internationalAccountStandingOrder';
              } else {
                toAccountType = iterator.transferTypeOperId == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID ? 'cashTransfer' : '';
              }
            }

            return toAccountType;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      ScheduledTransfersListPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
        }];
      };

      ScheduledTransfersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scheduled-transfers-list',
        template: _raw_loader_scheduled_transfers_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scheduled_transfers_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])], ScheduledTransfersListPage);
      /***/
    },

    /***/
    "mVVo":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mVVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n";
      /***/
    },

    /***/
    "s2T5":
    /*!*****************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function s2T5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "zrTz":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function zrTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hlZHVsZWQtdHJhbnNmZXJzLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=22-es5.js.map