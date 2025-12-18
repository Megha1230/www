(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76], {
    /***/
    "LWj+":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-opening/account-opening.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LWj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content > -->\n\n<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"account_opening_panel_1\">\n\n      <ps-input-display-only *ngIf=\"enableCifBranch\" id=\"'accountCifBranch' + id\" [options]=\"branchLabelOptions\">\n\n      </ps-input-display-only>\n\n\n      <ps-dropdown-account-types id=\"'accountType' + id\" [options]=\"accountTypeOptions\"\n        (onPsChange)='onAccountTypeChanged($event)'>\n      </ps-dropdown-account-types>\n\n      <ps-select-toggle [id]=\"'addOpeningBalance'\" [options]=\"openingBalanceToggleOptions\"\n        (onPsChange)=\"onAddOpeningBalanceChange($event)\">\n      </ps-select-toggle>\n\n      <ps-dropdown-currencies id=\"'currency' + id\" #currenciesRef [options]=\"currencyOptions\"\n        (onPsChange)=\"onCurrencyChanged($event)\">\n      </ps-dropdown-currencies>\n\n      <ng-container *ngIf=\"addOpeningBal\">\n\n        <ps-input-display-only id=\"MinimumOpeningBalance\" [options]=\"minOpeningBalOptions\">\n        </ps-input-display-only>\n\n        <ps-lookup-own-accounts id=\"'fromAccount'\" #fromAccountRef [options]=\"fromAccOptions\"\n          (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n\n        <ps-complex-exchange id=\"exchangeComponent\" #exchangeRef\n          [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n      </ng-container>\n\n      <!-- \n              <ps-input-varchar id=\"'accountName' + id\" [options]=\"accountNameOptions\"></ps-input-varchar>\n             -->\n      <!-- </div> -->\n\n      <ps-select-toggle *ngIf=\"showProfitToggle\" [id]=\"'accprofitFMid'\" [options]=\"toggleProfitOptions\"\n        class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n\n      <ps-lookup-own-accounts *ngIf=\"showProfitAccount\" id=\"profitAccount\"\n        [options]=\"profitAccOptions\"></ps-lookup-own-accounts>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"account_opening_panel_2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n\n</ps-template-stepper>\n<!-- </ion-content> -->";
      /***/
    },

    /***/
    "QmEf":
    /*!***************************************************************!*\
      !*** ./src/app/pages/account-opening/account-opening.page.ts ***!
      \***************************************************************/

    /*! exports provided: AccountOpeningPage */

    /***/
    function QmEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountOpeningPage", function () {
        return AccountOpeningPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_opening_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-opening.page.html */
      "LWj+");
      /* harmony import */


      var _account_opening_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-opening.page.scss */
      "Xaki");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var inputmask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! inputmask */
      "I9E9");
      /* harmony import */


      var inputmask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var AccountOpeningPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function AccountOpeningPage(commonProv, loggerP, eventEmitterService, omniPull, commonService, navService) {
          var _this;

          _classCallCheck(this, AccountOpeningPage);

          _this = _callSuper(this, AccountOpeningPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.eventEmitterService = eventEmitterService;
          _this.omniPull = omniPull;
          _this.commonService = commonService;
          _this.navService = navService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.defaultVO = {};
          _this.mapAtmBranchesOptions = {
            group: _this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
              labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].RequestBranch,
            requestVO: _this.defaultVO
          };
          _this.mask = {
            groupSeparator: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].THOUSANDS_SEPARATOR,
            alias: 'currency',
            autoGroup: true,
            placeholder: '0',
            greedy: false,
            digits: 2,
            radixPoint: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].DECIMAL_SEPARATOR
          };
          _this.stepperOptions = {
            stepperName: 'acc_open_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['acc_open_step1', 'acc_open_step2'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.defaultVO
          };
          _this.accountTypeOptions = {
            allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AllowedGeneralAccountTypes,
            accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACC_TYPE_D,
            group: _this.formGroup,
            fcName: 'accountTypes'
          };
          _this.openingBalanceToggleOptions = {
            labelKey: 'add_opening_balance_key',
            placeHolder: 'add_opening_balance_key',
            group: _this.formGroup,
            fcName: 'addOpeningBalance',
            psClass: 'toggleColor'
          };
          _this.minOpeningBalOptions = {
            placeHolder: 'minimum_opening_balance_key',
            labelKey: 'minimum_opening_balance_key',
            group: _this.formGroup,
            fcName: 'minOpenBalance'
          };
          _this.fromAccOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.defaultVO
          };
          _this.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'exchange_currency_key',
                fcName: 'fromCurrency',
                group: _this.formGroup,
                revertToOldValue: false
              },
              amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                group: _this.formGroup,
                decimalPoints: 2
              }
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'toCurrency',
                group: _this.formGroup
              },
              amountOptions: {
                labelKey: 'exchange_amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'toAmount',
                group: _this.formGroup,
                decimalPoints: 2
              }
            },
            requestObject: _this.defaultVO,
            group: _this.formGroup
          };
          _this.accountNameOptions = {
            labelKey: 'name_key',
            placeHolder: 'name_key',
            group: _this.formGroup,
            fcName: 'accountName'
          };
          _this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'select_currency_key',
            group: _this.formGroup,
            fcName: 'currency',
            revertToOldValue: false
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'account_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this.branchLabelOptions = {
            placeHolder: 'user_branch_key',
            labelKey: 'branch_key',
            group: _this.formGroup,
            fcName: 'branch_type'
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup,
            branchesOptions: {
              placeHolder: 'acc_opening_branch_key',
              labelKey: 'label_acc_opening_branch_key',
              group: _this.formGroup,
              fcName: 'default_branch'
            }
          };
          _this.toggleProfitOptions = {
            labelKey: 'post_profit_to_same_account_key',
            placeHolder: 'post_profit_to_same_account_key',
            group: _this.formGroup,
            fcName: 'renewWithSame',
            psClass: 'toggleColor'
          };
          _this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.defaultVO
          };
          _this.selectedBranchObj = {};
          _this.addOpeningBal = false;
          _this.showProfitToggle = false;
          _this.showProfitAccount = false;

          _this.fetchParameter();

          return _this;
        }

        _inherits(AccountOpeningPage, _omni_base_omni_base_);

        return _createClass(AccountOpeningPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            _superPropGet(AccountOpeningPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
            var defVal = (_a = this.commonProv.getElementValidations(this.openingBalanceToggleOptions.fcName)) === null || _a === void 0 ? void 0 : _a.DEFAULT_VALUE;

            if (defVal) {
              try {
                var parsed = JSON.parse(defVal);

                if (parsed.value === true) {
                  this.addOpeningBal = true;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.minOpeningBalOptions.fcName], 1);
                }
              } catch (e) {
                console.warn("Invalid DEFAULT_VALUE:", defVal, e);
              }
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(AccountOpeningPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.openingBalanceToggleOptions.fcName], 0);
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.defaultVO);
            }
          }
        }, {
          key: "loadBranch",
          value: function loadBranch() {
            var _this2 = this;

            try {
              var paramData = {
                branchesIdList: this.cifInfo.cifBranch ? this.cifInfo.cifBranch : ''
              };
              this.omniPull.returnBranchesList(paramData).then(function (result) {
                if (result && result.gridModel != null && result.gridModel.length > 0) {
                  _this2.formGroup.controls[_this2.branchLabelOptions.fcName].setValue(_this2.cifInfo.cifBranch ? result.gridModel[0].longDesc : '');
                } else {
                  _this2.loggerP.warn(result, 'empty response');
                }
              })["catch"](function (error) {});
            } catch (error) {}
          }
        }, {
          key: "getBranch",
          get: function get() {
            return this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : 1;
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.getParamValOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].RequestBranch, _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].AllowedBranches).then(function (result) {
                      var _a;

                      if (result !== -1 && result.RequestBranch == null || result.RequestBranch === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].cifBranch) {
                        _this3.enableCifBranch = true;

                        _this3.commonService.branchSelectionAndMapControl(0, [{
                          fcName: _this3.stepperOptions.namesofSteps[1]
                        }, {
                          fcName: _this3.mapAtmBranchesOptions.fcName
                        }, {
                          fcName: 'account_opening_panel_2'
                        }], true);

                        _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [_this3.branchLabelOptions.fcName], 1); //set user default branch code and show user branch in label 


                        _this3.commonProv.setValInsideNestedObj('branchCode', ((_a = _this3.cifInfo.customerInfoCO) === null || _a === void 0 ? void 0 : _a.branchCode) || "", _this3.formGroup.controls['formData'].value);

                        var aBranch = result.allowedBranches ? result.allowedBranches.toString().split(',') : result.AllAllowedBranches.split(',');

                        if (result.RequestBranch === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].cifBranch && aBranch.toString().indexOf(_this3.cifInfo.cifBranch.toString()) === -1) {
                          src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].presentFatalAlert('Cannot_open_General_Account_in_your_CIF_Branch._Please_contact_our_call_center_key');

                          _this3.navService.navigateBackward();
                        } else {
                          setTimeout(function () {
                            _this3.commonProv.setValInsideNestedObj(_this3.branchLabelOptions.fcName, _this3.cifInfo.cifBranch ? _this3.cifInfo.customerInfoCO.branchBriefDesc : '', _this3.defaultVO);
                          }, 300);
                        }
                      } else {
                        _this3.enableCifBranch = false;

                        _this3.commonService.branchSelectionAndMapControl(1, [{
                          fcName: _this3.stepperOptions.namesofSteps[1]
                        }, {
                          fcName: _this3.mapAtmBranchesOptions.fcName,
                          mandatory: 1
                        }, {
                          fcName: 'account_opening_panel_2'
                        }]); //hide banch label


                        _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [_this3.branchLabelOptions.fcName], 0);
                      }
                    })["catch"](function (error) {});

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onAddOpeningBalanceChange",
          value: function onAddOpeningBalanceChange(event) {
            if (event && event !== undefined) {
              if (event.newValue === true || event.newValue === "true") {
                this.addOpeningBal = true;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
              } else {
                this.addOpeningBal = false;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 0);
              }
            }
          }
        }, {
          key: "onFromAccountCombinationValidation",
          value: function onFromAccountCombinationValidation(fromAccount) {
            if (fromAccount && fromAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].VALIDATE_COMBINATION]) {
              if (this.defaultVO[this.currencyOptions.fcName] instanceof Object) {
                this.validateCurrencyCombination();
              }
            }
          }
        }, {
          key: "onFromAccountChange",
          value: function onFromAccountChange(fromAccount) {
            var _this4 = this;

            this.onFromAccountCombinationValidation(fromAccount);
            this.complexExchangeOptions.fromAmountOptions.currency = fromAccount.currencyBriefNameEnglish;
            this.complexExchangeOptions.fromAmountOptions.currencyCode = fromAccount.currency;
            setTimeout(function () {
              _this4.stepperOptions.requestObject[_this4.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = fromAccount.currency;
            }, 1);
          }
        }, {
          key: "onCurrencyChanged",
          value: function onCurrencyChanged(currency) {
            this.onCurrencyCombinationValidation();
            this.complexExchangeOptions.toAmountOptions.currency = currency.selectedObj.briefDescription;
            this.complexExchangeOptions.toAmountOptions.currencyCode = currency.itemValue;
            this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = currency.itemValue;
          }
        }, {
          key: "onAccountTypeChanged",
          value: function onAccountTypeChanged(event) {
            var _a;

            if (event) {
              if (event.minOpenBal) {
                this.commonProv.setValInsideNestedObj(this.minOpeningBalOptions.fcName, ((_a = this.cifInfo.companySettingsCO) === null || _a === void 0 ? void 0 : _a.briefDesc) + ' ' + inputmask__WEBPACK_IMPORTED_MODULE_5___default.a.format(event.minOpenBal, this.mask).toString(), this.defaultVO);
              }

              var profitToggleCust = this.commonProv.getElementValidations(this.toggleProfitOptions.fcName);
              var profitAccountCust = this.commonProv.getElementValidations(this.profitAccOptions.fcName);

              if (event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_DEPOSITE_ACCOUNT || event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_PROFIT_ACCOUNT) {
                this.showProfitToggle = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].custMode || profitToggleCust.IS_VISIBLE ? true : false;
                this.showProfitAccount = (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].custMode || profitAccountCust.IS_VISIBLE) && event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_PROFIT_ACCOUNT;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.toggleProfitOptions.fcName], 1);
                this.commonProv.setValInsideNestedObj(this.toggleProfitOptions.fcName, event.postProfitTo == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_17__["CommonBussinessConstant"].POST_PROFIT_TO_DEPOSITE_ACCOUNT, this.defaultVO);
              } else {
                this.showProfitToggle = this.showProfitAccount = false;
              } //Added by Marina AZDB-1208; to get allowed currenies for this account type only


              if (event.genLedgerId) {
                this.currencyOptions.accountTypesGLIds = event.genLedgerId;
                this.currenciesRef.loadCurrencies();
              }
            }
          }
        }, {
          key: "onCurrencyCombinationValidation",
          value: function onCurrencyCombinationValidation() {
            if (this.defaultVO[this.fromAccOptions.fcName] instanceof Object) {
              //added by MichelHabib, tp#1583589 in order to check if the fromAccount is an object to be able to make the validation(in case of checker user on initialization of the screen fromAccount has a string value)
              this.validateCurrencyCombination();
            }
          }
        }, {
          key: "validateCurrencyCombination",
          value: function validateCurrencyCombination() {
            var validationRequest = {
              fromCurrency: +this.defaultVO[this.fromAccOptions.fcName].currency,
              listOfAffectedFields: [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.currencyOptions.fcName],
              screenVO: this.defaultVO,
              listOfAccounts: [this.fromAccountRef, this.exchangeRef],
              toCurrency: +this.defaultVO[this.currencyOptions.fcName].itemValue
            };
            this.omniPull.validateCurrencyCombination(validationRequest);
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_18__["OmniBasePage"]);

      AccountOpeningPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"]
        }];
      };

      AccountOpeningPage.propDecorators = {
        fromAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fromAccountRef']
        }],
        exchangeRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['exchangeRef']
        }],
        currenciesRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['currenciesRef']
        }]
      };
      AccountOpeningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'account-opening',
        template: _raw_loader_account_opening_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_opening_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"]])], AccountOpeningPage);
      /***/
    },

    /***/
    "Xaki":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/account-opening/account-opening.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Xaki(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW9wZW5pbmcucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=76-es5.js.map