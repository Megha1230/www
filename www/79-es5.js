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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79], {
    /***/
    "0pal":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/card-management/card-management.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function pal(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "G5sy":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-management/card-management.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G5sy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"options\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"options.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1\" id=\"card_management_information\">\n      <ps-container-lookup-option [options]=\"cardOptions\" [itemCard]=\"itemCard\"></ps-container-lookup-option>\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"blockCard\" [options]=\"panelOptions2\" id=\"card_block_options\">\n\n      <ps-dropdown-card-core-reasons id=\"card-block-reason\" [options]=\"cardBlockReason\">\n      </ps-dropdown-card-core-reasons>\n\n\n      <ps-select-toggle class=\"onboarding_toggles\" [options]=\"cardBlockToggleOptions\">\n      </ps-select-toggle>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"renewCard\" [options]=\"panelOptions3\" id=\"card_renew_options\">\n\n      <ps-complex-location (parentFun)=\"hideDestinationMap()\" [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"limitUpdate && showPos\" [options]=\"panelOptions6\" id=\"card_pos_limit_update\">\n      <ps-complex-amount id=\"displayPosCurrentLimit\" [options]=\"currentPosLimitOptions\">\n      </ps-complex-amount>\n      <ng-container *ngIf=\"!isCredit\">\n        <ps-lov-periodicity [id]=\"'POSpriodicity'\" [options]=\"POSpriodicityOptions\">\n        </ps-lov-periodicity>\n        <ps-complex-amount id=\"utilizedPosLimit\" [options]=\"utilizedPosLimitOptions\">\n        </ps-complex-amount>\n        <ps-complex-amount id=\"remainingPostLimit\" [options]=\"remainingPosLimitOptions\">\n        </ps-complex-amount>\n      </ng-container>\n      <ps-input-amount id=\"requestPosLimitUpdate\" [options]=\"limitRequestPosOptions\">\n      </ps-input-amount>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"limitUpdate && showWd\" [options]=\"panelOptions7\" id=\"card_widthrawal_limit_update\">\n      <ps-complex-amount id=\"currentWdtLimit\" [options]=\"currentWdLimitOptions\">\n      </ps-complex-amount>\n      <ng-container *ngIf=\"!isCredit\">\n        <ps-lov-periodicity [id]=\"'WDpriodicity'\" [options]=\"WDpriodicityOptions\">\n        </ps-lov-periodicity>\n        <ps-complex-amount id=\"utilizedWdLimit\" [options]=\"utilizedWdLimitOptions\">\n        </ps-complex-amount>\n        <ps-complex-amount id=\"remainingWdLimit\" [options]=\"remainingWdLimitOptions\">\n        </ps-complex-amount>\n      </ng-container>\n\n      <ps-input-amount id=\"requestWdLimitUpdate\" [options]=\"limitRequestWdOptions\">\n      </ps-input-amount>\n\n    </ps-container-panel>\n    <ps-container-panel *ngIf=\"unblockCard\" [options]=\"panelOptions8\">\n\n      <ps-dropdown-card-core-reasons id=\"card-unblock-reason\" [options]=\"cardUnblockReason\">\n      </ps-dropdown-card-core-reasons>\n\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"cardReplace\" [options]=\"replacementPanelOptions\" id=\"replacement_reason\">\n\n      <ps-dropdown-card-core-reasons [options]=\"cardReplaceReason\">\n      </ps-dropdown-card-core-reasons>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    },

    /***/
    "eXmm":
    /*!***************************************************************!*\
      !*** ./src/app/pages/card-management/card-management.page.ts ***!
      \***************************************************************/

    /*! exports provided: CardManagementPage */

    /***/
    function eXmm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardManagementPage", function () {
        return CardManagementPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_management_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card-management.page.html */
      "G5sy");
      /* harmony import */


      var _card_management_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card-management.page.scss */
      "0pal");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/Cards/cards.service */
      "GIS6");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var CardManagementPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function CardManagementPage(logger, omniPull, navService, crdsSrvce) {
          var _this;

          _classCallCheck(this, CardManagementPage);

          _this = _callSuper(this, CardManagementPage);
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.navService = navService;
          _this.crdsSrvce = crdsSrvce;
          _this.CardManagementVO = {};
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.options = {
            stepperName: 'card_management_stepper',
            numberOfSteps: 1,
            group: _this.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.cardActionRequestEndPoint,
              group: _this.formGroup,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.updateScreenVO(response));
                  });
                },
                executionClass: _this,
                params: [_this]
              }
            },
            requestObject: _this.CardManagementVO,
            isHorizontalStepper: true,
            namesofSteps: ['cardManagement']
          };
          _this.blockCard = false;
          _this.renewCard = false;
          _this.limitUpdate = false;
          _this.unblockCard = false;
          _this.showAddress = false;
          _this.showManualAddress = false;
          _this.showDestinationBranchMap = false;
          _this.enableCifBranch = false;
          _this.enableDeliveryLoc = false;
          _this.showHomeWorkAddress = false;
          _this.showHomeAddress = false;
          _this.cardReplace = false;
          _this.isCredit = false;
          _this.itemCard = {};
          _this.cardOptions = {};
          _this.showPos = false;
          _this.showWd = false;
          _this.panelOptions1 = {
            isExpandable: true,
            labelKey: 'card_information_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions2 = {
            isExpandable: true,
            labelKey: 'card_block_options_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions3 = {
            isExpandable: true,
            labelKey: 'card_renew_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions6 = {
            isExpandable: true,
            labelKey: 'pos_limit_update_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions7 = {
            isExpandable: true,
            labelKey: 'widthrawal_limit_update_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions8 = {
            isExpandable: true,
            labelKey: 'card_unblocking_key',
            iconName: 'document',
            expanded: true
          };
          _this.replacementPanelOptions = {
            isExpandable: true,
            labelKey: 'card_replace_key',
            iconName: 'document',
            expanded: true
          };
          _this.cardReplaceReason = {
            fcName: 'cardReplaceReason',
            group: _this.formGroup,
            labelKey: 'card_replace_reason_key',
            placeHolder: 'select_card_replace_reason_key',
            iconOptions: {
              iconName: 'clipboard'
            },
            reasonType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].REPLACE_REASON_TYPE
          };
          _this.deliveryAddressDetails = {
            collectionModeOptions: {
              group: _this.formGroup,
              fcName: 'deliveryLoc'
            },
            branchLocationOptions: {
              fcName: 'mapAtmBranchesDropdown',
              group: _this.formGroup
            },
            homeAddressOptions: {
              placeHolder: 'address_details_key',
              labelKey: 'address_details_key',
              group: _this.formGroup,
              fcName: 'addressDetails',
              requestVO: _this.CardManagementVO
            },
            workAddressOptions: {
              placeHolder: 'address_details_key',
              labelKey: 'address_details_key',
              group: _this.formGroup,
              fcName: 'addressDetails',
              requestVO: _this.CardManagementVO
            },
            otherAddressOptions: {
              labelKey: 'address_details_key',
              rows: '3',
              cols: '10',
              fcName: 'otherAddressDetails',
              group: _this.formGroup
            },
            branchCifOptions: {
              placeHolder: 'request_branch_key',
              labelKey: 'request_branch_key',
              group: _this.formGroup,
              fcName: 'branchName'
            },
            cifBranchChecking: true
          };
          _this.cardBlockToggleOptions = {
            labelKey: 're_issue_card_key',
            placeHolder: 're_issue_card_key',
            group: _this.formGroup,
            fcName: 'reIssueCard',
            psClass: 'toggleColor'
          };
          _this.cardBlockReason = {
            fcName: 'cardBlockReason',
            group: _this.formGroup,
            labelKey: 'card_block_reason_key',
            placeHolder: 'please_select_card_block_reason_key',
            iconOptions: {
              iconName: 'clipboard'
            },
            reasonType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].BlOCK_REASON_TYPE
          };
          _this.cardUnblockReason = {
            fcName: 'cardUnblockReason',
            group: _this.formGroup,
            labelKey: 'card_unblock_reason_key',
            placeHolder: 'select_card_unblock_reason_key',
            iconOptions: {
              iconName: 'clipboard'
            },
            reasonType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].UNBLOCK_REASON_TYPE
          }; // currentPosLimitOptions: IOptionsPsKeyinInputExposed = {
          //   labelKey: 'current_pos_limit_key',
          //   fcName: 'currentPosLimit',
          //   group: this.formGroup
          // };

          _this.limitRequestPosOptions = {
            fcName: 'requestPosLimit',
            group: _this.formGroup,
            labelKey: 'requested_pos_limit_key',
            placeHolder: 'pls_enter_requested_pos_limit_key'
          };
          _this.currentPosLimitOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              fcName: 'currencyPosCode',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'current_pos_limit_key',
              placeHolder: 'current_pos_limit_key',
              fcName: 'currentPosLimit',
              group: _this.formGroup
            }
          };
          _this.utilizedPosLimitOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              fcName: 'UtilizedCurrencyPos',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'utilized_pos_limit_key',
              placeHolder: 'utilized_pos_limit_key',
              fcName: 'utilizedPosLimit',
              group: _this.formGroup
            }
          };
          _this.remainingPosLimitOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              fcName: 'remainingCurrencyPos',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'remaining_pos_limit_key',
              placeHolder: 'remaining_pos_limit_key',
              fcName: 'remainingPosLimit',
              group: _this.formGroup
            }
          };
          _this.currentWdLimitOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              fcName: 'currencyWdCode',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'current_widthrawal_limit_key',
              placeHolder: 'current_widthrawal_limit_key',
              fcName: 'currentWdLimit',
              group: _this.formGroup
            }
          };
          _this.utilizedWdLimitOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              fcName: 'UtilizedCurrencyWd',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'utilized_wd_limit_key',
              placeHolder: 'utilized_wd_limit_key',
              fcName: 'utilizedWdLimit',
              group: _this.formGroup
            }
          };
          _this.remainingWdLimitOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              fcName: 'remainingCurrencyWd',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'remaining_wd_limit_key',
              placeHolder: 'remaining_wd_limit_key',
              fcName: 'remainingWdLimit',
              group: _this.formGroup
            }
          };
          _this.limitRequestWdOptions = {
            fcName: 'requestWdLimit',
            group: _this.formGroup,
            labelKey: 'requested_widthrawal_limit_key',
            placeHolder: 'pls_enter_requested_widthrawal_limit_key'
          };
          _this.POSpriodicityOptions = {
            labelKey: 'pos_periodicity_key',
            placeHolder: 'pos_periodicity_key',
            fcName: 'posPeriodicity',
            group: _this.formGroup
          };
          _this.WDpriodicityOptions = {
            labelKey: 'wd_periodicity_key',
            placeHolder: 'wd_periodicity_key',
            fcName: 'wdPeriodicity',
            group: _this.formGroup
          };
          _this.TrxLimitTypes = {
            POS: 0,
            WITHDRAWAL: 1
          };
          return _this;
        }

        _inherits(CardManagementPage, _omni_base_omni_base_);

        return _createClass(CardManagementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(CardManagementPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; //Modified by ghada, tp1362045 for fixing the issue of seeting values to screen VO

            this.commonProv.copyObject(this.CardManagementVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
            delete this.options.requestObject.key;
            this.isCredit = this.CardManagementVO.cardType === src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"].CREDIT_CARD_TYPE_NAME;
            this.logger.log('this.CardManagementVO', this.CardManagementVO);
            this.itemCard = this.CardManagementVO;
            this.cardOptions.formGroup = this.formGroup;
            this.cardOptions.labelsValueMap = this.navigationServices.getParamKey('labelsValueMap');
            this.cardOptions.headerMap = this.navigationServices.getParamKey('headerMap');
            this.cardOptions.showInitialCardValues = this.navigationServices.getParamKey('showInitialCardValues');

            switch (this.CardManagementVO.action) {
              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_BLOCK:
                {
                  this.blockCard = true;
                  break;
                }

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_LIMIT_UPDATE:
                {
                  this.limitUpdate = true;
                  break;
                }

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_RENEW:
                {
                  this.renewCard = true;
                  break;
                }

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_UNBLOCK:
                {
                  this.unblockCard = true;
                  break;
                }

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARD_ACTION_TYPE_REPLACE:
                {
                  this.cardReplace = true;
                  break;
                }
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _a, _b, _c;

            _superPropGet(CardManagementPage, "ionViewDidEnter", this, 3)([]);

            this.fetchParameter();

            if (this.blockCard) {
              if (((_a = this.CardManagementVO) === null || _a === void 0 ? void 0 : _a.allowRenew) == '0') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cardBlockToggleOptions.fcName], 0);
              }
            } else if (this.limitUpdate) {
              this.showPos = ((_b = this.CardManagementVO) === null || _b === void 0 ? void 0 : _b.posLimitOverride) === '1' && this.CardManagementVO.posLimitBasedOn != undefined ? true : false;
              this.showWd = ((_c = this.CardManagementVO) === null || _c === void 0 ? void 0 : _c.wdLimitOverride) === '1' ? true : false;
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.currentPosLimitOptions.amountOptions.fcName, this.currentPosLimitOptions.currenciesOptions.fcName, this.utilizedPosLimitOptions.amountOptions.fcName, this.utilizedPosLimitOptions.currenciesOptions.fcName, this.remainingPosLimitOptions.amountOptions.fcName, this.remainingPosLimitOptions.currenciesOptions.fcName, this.POSpriodicityOptions.fcName, this.currentWdLimitOptions.amountOptions.fcName, this.currentWdLimitOptions.currenciesOptions.fcName, this.utilizedWdLimitOptions.amountOptions.fcName, this.utilizedWdLimitOptions.currenciesOptions.fcName, this.remainingWdLimitOptions.amountOptions.fcName, this.remainingWdLimitOptions.currenciesOptions.fcName, this.WDpriodicityOptions.fcName], 1);
              this.setLimitsDetails();
            }
          }
        }, {
          key: "setLimitsDetails",
          value: function setLimitsDetails() {
            if (this.showPos) {
              this.setLimitsCurrency([this.currentPosLimitOptions.currenciesOptions.fcName, this.utilizedPosLimitOptions.currenciesOptions.fcName, this.remainingPosLimitOptions.currenciesOptions.fcName]);
            }

            if (this.showWd) {
              this.setLimitsCurrency([this.currentWdLimitOptions.currenciesOptions.fcName, this.utilizedWdLimitOptions.currenciesOptions.fcName, this.remainingWdLimitOptions.currenciesOptions.fcName]);
            }

            if (!this.isCredit) {
              this.returnTransUtilizedAmount(this.CardManagementVO[this.POSpriodicityOptions.fcName], this.TrxLimitTypes.POS);
              this.returnTransUtilizedAmount(this.CardManagementVO[this.WDpriodicityOptions.fcName], this.TrxLimitTypes.WITHDRAWAL);
            }
          }
        }, {
          key: "onLocChange",
          value: function onLocChange(values) {
            if (values && values.selectedObj) {
              if (values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE) {
                this.showAddress = false;
                this.showManualAddress = false;
                this.enableCifBranch = true;
              } else {
                this.enableCifBranch = false;

                if (values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].HOME_ADDRESS_VALUE || values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].WORK_ADDRESS_VALUE) {
                  this.showAddress = true;
                  this.showManualAddress = false;
                  this.showHomeWorkAddress = values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].HOME_ADDRESS_VALUE;
                } else if (values.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE) {
                  this.showManualAddress = true;
                  this.showAddress = false;
                }
              }
            }
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].COLLECTION_DESTINATION_BRANCH)["catch"](function (error) {
                      _this3.logger.error('Error ! while fetching admin param in card management page ', error);
                    });

                  case 1:
                    result = _context.v;

                    if (result !== -1 && result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.enableDeliveryLoc = true;
                    } else {
                      this.enableDeliveryLoc = false;
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hideDestinationMap",
          value: function hideDestinationMap() {} //Added by ghada,tp#1357661 to fix the issue of being not able to submit a card blocking/Activation "this isa temp fix advised by Doris until Nabil commits a common fix on the issue"

        }, {
          key: "updateScreenVO",
          value: function updateScreenVO() {
            delete this.CardManagementVO['key'];
            delete this.formGroup.controls.formData.value['key'];
          } //added by ghada, tp1362045 for retrieving and setting utilized amounts POS/Withdrawal

        }, {
          key: "returnTransUtilizedAmount",
          value: function returnTransUtilizedAmount(periodicity, trxType) {
            var _this4 = this;

            var requestData = {
              commonParametersList: {
                accountNumber: this.CardManagementVO.primaryAccount,
                fromDate: this.setTranactionsDate(periodicity).from,
                toDate: this.setTranactionsDate(periodicity).to,
                TransactionType: trxType == this.TrxLimitTypes.POS ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].POS_TRANSACTION_TYPE : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].WD_TRANSACTION_TYPE
              }
            };
            this.commonProv.presentLoading();
            this.omniPull.returnTransUtilizedAmount(requestData).then(function (result) {
              // let result = {
              //   apiCode: -1,
              //   appId: 1,
              //   channelId: 1,
              //   cifName: "EL MOUSTAPHA EL WAVY",
              //   compCode: 1,
              //   gridModel: [],
              //   ocUserId: 1,
              //   operAutoApprovalFalg: "Y",
              //   operId: 1592,
              //   operType: "NA",
              //   outputCode: 0,
              //   outputNotification: "No Data Found",
              //   outputType: "S",
              //   posUtilizedAmount: 0,
              //   sessionId: "14657291-69b2-4011-9b34-30ceda68ff03",
              //   transferType: "A",
              //   typeDesc: "REQ",
              //   udid: "web_42f4b5a5bed597356c7c3d4460420c36_fe2729630015de55be5b1e54d1ca16b56db20202f157d01a3fa3ced13796bb7e_1282952613",
              //   userCifNo: "10035314",
              //   userName: "mromani",
              //   withdrawalUtilizedAmount: 0,
              //   workingCif: "10035314"
              // }
              if (result && result.outputCode == 0) {
                if (trxType == _this4.TrxLimitTypes.POS) {
                  _this4.commonProv.setValInsideNestedObj(_this4.utilizedPosLimitOptions.amountOptions.fcName, result.totalUtilizedAmount, _this4.CardManagementVO);

                  var remainingPosLimit = Number(_this4.CardManagementVO[_this4.currentPosLimitOptions.amountOptions.fcName]) - Number(_this4.CardManagementVO[_this4.utilizedPosLimitOptions.amountOptions.fcName]);

                  _this4.commonProv.setValInsideNestedObj(_this4.remainingPosLimitOptions.amountOptions.fcName, remainingPosLimit || 0, _this4.CardManagementVO);
                } else {
                  _this4.commonProv.setValInsideNestedObj(_this4.utilizedWdLimitOptions.amountOptions.fcName, result.totalUtilizedAmount, _this4.CardManagementVO);

                  var remainingWDLimit = Number(_this4.CardManagementVO[_this4.currentWdLimitOptions.amountOptions.fcName]) - Number(_this4.CardManagementVO[_this4.utilizedWdLimitOptions.amountOptions.fcName]);

                  _this4.commonProv.setValInsideNestedObj(_this4.remainingWdLimitOptions.amountOptions.fcName, remainingWDLimit || 0, _this4.CardManagementVO);
                }
              }
            })["catch"](function (error) {
              _this4.logger.error('Error: While fetching scheduled transfers  :', error);
            })["finally"](function () {
              _this4.commonProv.dismissLoading();
            });
          }
        }, {
          key: "setTranactionsDate",
          value: function setTranactionsDate(periodicity) {
            var from;
            var to;
            to = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().endOf('day').toDate());

            switch (periodicity) {
              case 'D':
                {
                  from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().startOf('day').toDate());
                  break;
                }

              case 'W':
                {
                  from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(6, 'days').startOf('day').toDate());
                  break;
                }

              case 'M':
                {
                  from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'month').startOf('day').toDate());
                  break;
                }

              case 'Y':
                {
                  from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'year').startOf('day').toDate());
                  break;
                }

              case 'Q':
                {
                  from = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].toIsoString(moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(3, 'months').startOf('day').toDate());
                  break;
                }
            }

            return {
              from: from,
              to: to
            };
          }
        }, {
          key: "setLimitsCurrency",
          value: function setLimitsCurrency(fieldsList) {
            var _iterator = _createForOfIteratorHelper(fieldsList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var fcName = _step.value;
                this.commonProv.setValInsideNestedObj(fcName, this.CardManagementVO.currencyCode, this.CardManagementVO);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      CardManagementPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"]
        }];
      };

      CardManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'card-management',
        template: _raw_loader_card_management_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_management_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_Cards_cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"]])], CardManagementPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=79-es5.js.map