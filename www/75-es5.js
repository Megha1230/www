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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75], {
    /***/
    "5zfx":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.page.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: AccountOpeningFixedMaturityAccountPage */

    /***/
    function zfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountOpeningFixedMaturityAccountPage", function () {
        return AccountOpeningFixedMaturityAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_opening_fixed_maturity_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-opening-fixed-maturity-account.page.html */
      "P6WB");
      /* harmony import */


      var _account_opening_fixed_maturity_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-opening-fixed-maturity-account.page.scss */
      "sk4y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var AccountOpeningFixedMaturityAccountPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function AccountOpeningFixedMaturityAccountPage(commonProv, loggerP, omniPull, datePipe, eventEmitterService, commonService, navService) {
          var _this;

          _classCallCheck(this, AccountOpeningFixedMaturityAccountPage);

          _this = _callSuper(this, AccountOpeningFixedMaturityAccountPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.datePipe = datePipe;
          _this.eventEmitterService = eventEmitterService;
          _this.commonService = commonService;
          _this.navService = navService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
          _this.defaultVO = {};
          _this.showstepper = false;
          _this.stepperOptions = {
            stepperName: 'fixed_mat_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['acc_open_fixed_step1', 'acc_open_fixed_step2'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.defaultVO
          };
          _this.mainOptions = {
            toggleOptions: {
              labelKey: 'renew_key',
              placeHolder: 'renew_key',
              group: _this.formGroup,
              fcName: 'renew',
              psClass: 'toggleColor'
            },
            toggleProfitOptions: {
              labelKey: 'post_profit_to_same_account_key',
              placeHolder: 'post_profit_to_same_account_key',
              group: _this.formGroup,
              fcName: 'renewWithSame',
              psClass: 'toggleColor'
            }
          };
          _this.lblOptions = {
            labelKey: 'branch_key'
          };
          _this.lblPeriodicityOptions = {
            labelKey: 'Term: 5 Years'
          };
          _this.cifBranchOtpions = {};
          _this.accountTypeOptions = {
            allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
            accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACC_TYPE_T,
            group: _this.formGroup,
            fcName: 'accountTypes'
          };
          _this.amountOptions = {
            labelKey: 'amount_key',
            placeHolder: '0',
            group: _this.formGroup,
            fcName: 'amount'
          };
          _this.accountNameOptions = {
            labelKey: 'name_key',
            placeHolder: 'name_key',
            group: _this.formGroup,
            fcName: 'accountName'
          };
          _this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'currency',
            group: _this.formGroup,
            fcName: 'currency'
          };
          _this.lbMaturityDateOptions = {
            labelKey: 'maturity_date_key',
            placeHolder: 'maturity_date_key'
          };
          _this.lbMaturityTransferOptions = {
            labelKey: 'maturity_transfer_key'
          };
          _this.lblProfitOptions = {
            labelKey: 'profit_account_key'
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
          _this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'maturity_instructions_key',
            iconName: 'document'
          };
          _this.branchOptions = {
            placeHolder: 'get cif branch from session',
            labelKey: 'branch_key',
            group: _this.formGroup,
            fcName: 'branch'
          };
          _this.profitRateOptions = {
            placeHolder: 'profit_rate_key',
            labelKey: 'profit_rate_key',
            group: _this.formGroup,
            fcName: 'profitRate'
          };
          _this.containerItemOptions1 = {
            hideImageAndIconIfNotPresent: true
          };
          _this.containerItemOptions = {
            hideImageAndIconIfNotPresent: true
          };
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.accountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            currency: 'USD',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.defaultVO
          };
          _this.maturityTransferOptions = {
            labelKey: 'on_maturity_transfer_balance_to_key',
            placeHolder: 'select_maturity_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'maturityAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.defaultVO
          };
          _this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.defaultVO
          };
          _this.lblAmountOptions = {
            labelKey: 'Renewal Instructions: New Balance Renewed in same Account'
          };
          _this.termsAndConditionsOptions = {
            checkBoxOptions: {
              group: _this.formGroup,
              fcName: 'checkboxConfirm',
              labelKey: 'i_agree_key'
            },
            htmlViewerOptions: {
              fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonBusinessSettings"].accountOpeningTermsAndConditionsFileName
            }
          };
          _this.inputAmountOptions = {
            labelKey: 'Amount',
            placeHolder: 'enter_your_amount_key',
            fcName: 'inputAmount',
            group: _this.formGroup,
            type: 'amount',
            decimalPoints: 3
          }; // start

          _this.lbMaturityTransferToggleOptions = {
            labelKey: 'renew_account_on_maturity_key'
          };
          _this.maturityDateOptions = {
            labelKey: _this.datePipe.transform(new Date(), 'dd-MM-yyyy')
          };
          _this.lblAccountListOptions = {
            labelKey: 'account_list_key'
          }; // end

          _this.psComplexAmountOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'opening_balance_key',
              placeHolder: 'enter_opening_balance_key',
              fcName: 'inputAmount',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            },
            requestObject: _this.defaultVO,
            showLimitLabel: false
          };
          _this.accountTypesOptions = {
            accountTypesOptions: {
              allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
              accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACC_TYPE_T,
              group: _this.formGroup,
              fcName: 'accountTypes'
            },
            periodicity: {
              group: _this.formGroup,
              fcName: 'periodiCity'
            },
            minimumBalance: {
              group: _this.formGroup,
              fcName: 'minBalance'
            },
            group: _this.formGroup,
            requestObject: _this.defaultVO
          };
          _this.instructMsgLabelOptions = {
            labelKey: 'account_type_informative_msg_key',
            fcName: 'instrcutions'
          };
          _this.minimumBalErr = {
            labelKey: 'the_entered_amount_is_below_minimum_range_key',
            fcName: 'minimumBalErrLbl'
          };
          _this.actionImageOptions = {
            imageName: 'account_Deactivation_Remark_icon.png'
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup,
            branchesOptions: {
              placeHolder: 'term_opening_branch_key',
              labelKey: 'label_term_opening_branch_key',
              group: _this.formGroup,
              fcName: 'default_branch'
            }
          };
          _this.enablePeriodicity = false;
          _this.enableCss = false;
          _this.showAccTypeInformativeLabel = false;
          _this.showFromAccount = false;
          _this.balanceAmount = '';
          _this.showBalErr = false;

          _this.fetchParameter();

          return _this;
        }

        _inherits(AccountOpeningFixedMaturityAccountPage, _omni_base_omni_base_);

        return _createClass(AccountOpeningFixedMaturityAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(AccountOpeningFixedMaturityAccountPage, "ngOnInit", this, 3)([]);

            this.baseFormGroup = this.formGroup; // this.cd.detectChanges();

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.maturityTransferOptions.fcName, this.profitAccOptions.fcName], 0);
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].USERINFO); // this.stepperOptions.submitOptions.extraParams = {branch : this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : 1};

            this.mapAtmBranchesOptions = {
              group: this.formGroup,
              fcName: 'mapAtmBranches',
              labelKey: 'map_atm_branch_key',
              mapOptions: {
                labelKey: 'map'
              },
              showSegments: false,
              mapTypesInclude: '\'B\'',
              branchIds: '1,3,5',
              parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AcntOpenBranchesMatAcc,
              requestVO: this.defaultVO
            };
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(AccountOpeningFixedMaturityAccountPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.psComplexAmountOptions.currenciesOptions.fcName, this.psComplexAmountOptions.amountOptions.fcName], 1);
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
          key: "onRenewContractToggleChange",
          value: function onRenewContractToggleChange(values) {
            values.newValue = typeof values.newValue === 'string' ? values.newValue === 'true' : values.newValue; //Modified by ghada, AZDB-4868 to handel the case oh having component's value sent as a string (from service)

            var toggleCust = this.commonProv.getElementValidations(this.mainOptions.toggleOptions.fcName);

            if (toggleCust.IS_VISIBLE) {
              if (values.newValue == false) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.maturityTransferOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.mainOptions.toggleProfitOptions.fcName, this.profitAccOptions.fcName], 0);
                this.mainOptions.toggleProfitOptions.disablePreview = true;
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.maturityTransferOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.mainOptions.toggleProfitOptions.fcName], 1);
                this.onProfitChange({
                  newValue: this.defaultVO.renewWithSame
                });
                this.mainOptions.toggleProfitOptions.disablePreview = false;
                this.formGroup.controls[this.maturityTransferOptions.fcName].reset();
              }
            }
          }
        }, {
          key: "onProfitChange",
          value: function onProfitChange(values1) {
            values1.newValue = typeof values1.newValue === 'string' ? values1.newValue === 'true' : values1.newValue;
            var toggleCust = this.commonProv.getElementValidations(this.mainOptions.toggleProfitOptions.fcName);

            if (toggleCust.IS_VISIBLE) {
              if (values1.newValue == false) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.profitAccOptions.fcName], 1);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.profitAccOptions.fcName], 0);
                this.formGroup.controls[this.profitAccOptions.fcName].reset();
              }
            }
          }
        }, {
          key: "onChangeEvent",
          value: function onChangeEvent(values) {
            if (values.newValue === false) {
              this.enablePeriodicity = true;
            } else {
              this.enablePeriodicity = false;
            }
          }
        }, {
          key: "onChangeFromAccount",
          value: function onChangeFromAccount(values) {
            if (values.newValue === false) {
              this.enableCss = true;
            } else {
              this.enableCss = false;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a, _b;

            var sysParamScreenDispList = this.commonProv.initialScreenDisplayParams.get(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].oper_ID) ? this.commonProv.initialScreenDisplayParams.get(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].oper_ID) : new Map();

            if (((_a = sysParamScreenDispList.get(this.mainOptions.toggleOptions.fcName)) === null || _a === void 0 ? void 0 : _a.DEFAULT_VALUE) === null || ((_b = sysParamScreenDispList.get(this.mainOptions.toggleOptions.fcName)) === null || _b === void 0 ? void 0 : _b.DEFAULT_VALUE) === undefined) {
              this.defaultVO[this.mainOptions.toggleOptions.fcName] = true;
            } // this.loadBranch();

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
                  _this2.formGroup.controls[_this2.branchOptions.fcName].setValue(_this2.cifInfo.cifBranch ? result.gridModel[0].longDesc : '');
                } else {
                  _this2.loggerP.warn(result, 'empty response');
                }
              })["catch"](function (error) {});
            } catch (error) {}
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(values) {
            var _this3 = this;

            if (values) {
              this.showAccTypeInformativeLabel = true;
              this.defaultVO[this.profitRateOptions.fcName] = '';

              if (values.briefDesc) {
                this.loadProfitRate();
              } else {
                this.profitRate = '';
              } //Added by Marina AZDB-1208; to get allowed currenies for specific account type only


              if (values.genLedgerId) {
                this.psComplexAmountOptions.currenciesOptions.accountTypesGLIds = values.genLedgerId;
                this.amountRef.reloadCurrencies().then(function (response) {
                  //Makki: Jira #5247, Wait for the new currencies to be loaded before validating minimum balance to avoid validating on the old currencies list.          
                  _this3.ValidateMinimumBal();
                })["catch"](function (error) {});
              }
            } else {
              this.showAccTypeInformativeLabel = false;
            }
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this4 = this;

              var result, aBranch;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AcntOpenBranchesMatAcc, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AllowedBranches, src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].AllowedFixedMaturityAccountsTypes, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AllowedCurrencies, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AllAllowedBranches)["catch"](function (error) {
                      _this4.showstepper = true;
                      _this4.showFromAccount = true;
                    });

                  case 1:
                    result = _context.v;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.selectBranchOptions.branchesOptions.fcName], 0);

                    if (result !== -1 && result.AcntOpenBranchesMatAcc === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].cifBranch) {
                      this.enableCifBranch = true;
                      this.commonService.branchSelectionAndMapControl(0, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: this.mapAtmBranchesOptions.fcName
                      }, {
                        fcName: 'acc_open_fix_mat_acc_panel2'
                      }], true);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchOptions.fcName], 1);
                      this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
                        branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : ''
                      }, false, true);
                      this.showstepper = true;
                      aBranch = result.allowedBranches ? result.allowedBranches.toString().split(',') : result.AllAllowedBranches.split(',');

                      if (result.AcntOpenBranchesMatAcc === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].cifBranch && aBranch.toString().indexOf(this.cifInfo.cifBranch.toString()) === -1) {
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__["CommonUtils"].presentFatalAlert('Cannot_open_Term_Account_in_your_CIF_Branch._Please_contact_our_call_center_key');
                        this.navService.navigateBackward();
                      } else {
                        setTimeout(function () {
                          _this4.defaultVO[_this4.branchOptions.fcName] = _this4.cifInfo.cifBranch ? _this4.cifInfo.customerInfoCO.branchBriefDesc : ''; // this.formGroup.controls[this.branchOptions.fcName].disable();
                        }, 300);
                      }
                    } else {
                      this.enableCifBranch = false;
                      this.commonService.branchSelectionAndMapControl(1, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: this.mapAtmBranchesOptions.fcName,
                        mandatory: 1
                      }, {
                        fcName: 'acc_open_fix_mat_acc_panel2'
                      }]);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchOptions.fcName], 0);
                    }

                    if (result !== -1 && result.AllowedAccountType) {
                      this.commonProv.copyObject(this.accountListOptions.accountAllowedTypes, result.AllowedAccountType.split(','), false, true);
                    }

                    if (result !== -1 && result.AllowedCurrencies) {
                      this.commonProv.copyObject(this.accountListOptions.accountAllowedCurrencies, result.AllowedCurrencies.split(','), false, true);
                    }

                    setTimeout(function () {
                      _this4.showFromAccount = true;
                    }, 300);

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadProfitRate",
          value: function loadProfitRate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var requestParams, result;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (!(this.defaultVO.currency && typeof this.defaultVO.currency == 'object' && this.defaultVO.inputAmount && this.defaultVO.accountTypes && typeof this.defaultVO.accountTypes == 'object')) {
                      _context2.n = 2;
                      break;
                    }

                    requestParams = {
                      currency: this.defaultVO.currency,
                      amount: this.defaultVO.inputAmount,
                      accountType: this.defaultVO.accountTypes
                    };
                    _context2.n = 1;
                    return this.omniPull.returnProfitRate(requestParams)["catch"](function (error) {
                      _this5.commonProv.logger.error('Error: while fetcing data from returnProfitRate  :', error);
                    });

                  case 1:
                    result = _context2.v;

                    if (result && result.gridModel && result.gridModel.length > 0) {
                      this.profitRate = result.gridModel[0].profitRate;
                      setTimeout(function () {
                        _this5.defaultVO[_this5.profitRateOptions.fcName] = _this5.profitRate.toString();
                      }, 1);
                    } else {
                      this.defaultVO[this.profitRateOptions.fcName] = '';
                      this.profitRate = '';
                    }

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onBalancAmountChange",
          value: function onBalancAmountChange(balanceAmount) {
            if (balanceAmount.amount < 0) {
              this.commonProv.setValInsideNestedObj(this.psComplexAmountOptions.amountOptions.fcName, null, this.defaultVO);
            }

            this.defaultVO[this.profitRateOptions.fcName] = '';
            this.loadProfitRate();
            this.ValidateMinimumBal(balanceAmount.amount);
          }
        }, {
          key: "onCurrencyChange",
          value: function onCurrencyChange(currency) {
            this.callCurrencyCombinationValidateService();
            this.loadProfitRate();
            this.ValidateMinimumBal();
          }
        }, {
          key: "onFromAccountChange",
          value: function onFromAccountChange(fromAccount) {
            if (fromAccount && fromAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].VALIDATE_COMBINATION]) {
              this.callCurrencyCombinationValidateService();
            }
          }
        }, {
          key: "ValidateMinimumBal",
          value: function ValidateMinimumBal(userInputAmount) {
            var _a, _b, _c, _d; //Skip validation of minimum balance in form is readonly (e.g. Checker)


            var operCustomization = this.commonProv.returnOperCustomization();

            if (((_a = operCustomization.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].FORM_READONLY)) === null || _a === void 0 ? void 0 : _a.IS_READONLY) === 1) {
              return;
            }

            var selectedCurrency = (_b = this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName]) === null || _b === void 0 ? void 0 : _b.itemValue;
            var selectedAccountTypeObj = (_c = this.defaultVO[this.accountTypesOptions.accountTypesOptions.fcName]) === null || _c === void 0 ? void 0 : _c.selectedObj;

            if (selectedAccountTypeObj) {
              if (!((_d = selectedAccountTypeObj.allowedCurrency) === null || _d === void 0 ? void 0 : _d.some(function (curr) {
                return curr.currencyCode == selectedCurrency;
              }))) {
                this.setMinmumAmount(userInputAmount, selectedAccountTypeObj.minimumOpeningBalance);
              } else {
                var currencyObj = selectedAccountTypeObj.allowedCurrency.find(function (curr) {
                  return curr.currencyCode == selectedCurrency;
                });
                this.setMinmumAmount(userInputAmount, currencyObj.minimumBalance);
              }
            }
          }
        }, {
          key: "setMinmumAmount",
          value: function setMinmumAmount(enteredAmount, minimumAmount) {
            if (minimumAmount) {
              if (!enteredAmount || enteredAmount && enteredAmount < minimumAmount) {
                this.commonProv.setValInsideNestedObj(this.psComplexAmountOptions.amountOptions.fcName, minimumAmount, this.stepperOptions.requestObject); //Jira #5247 Probably set the value using setValInsideNestedObj

                var inputElement = document.querySelector("[psfcname=\"".concat(this.psComplexAmountOptions.amountOptions.fcName, "\"]"));

                if (inputElement) {
                  //Jira #5247 Delay the force emit of focusout till the value is probably set accross all framework
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(500).subscribe(function () {
                    var focusOutEvent = new FocusEvent('focusout', {
                      bubbles: true,
                      relatedTarget: inputElement
                    });
                    inputElement.dispatchEvent(focusOutEvent);
                  });
                }
              }

              this.showBalErr = enteredAmount < minimumAmount;
            }
          }
        }, {
          key: "callCurrencyCombinationValidateService",
          value: function callCurrencyCombinationValidateService() {
            var _a;

            if (((_a = this.defaultVO[this.accountListOptions.fcName]) === null || _a === void 0 ? void 0 : _a.currency) && this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName]) {
              var validationRequest = {
                fromCurrency: +this.defaultVO[this.accountListOptions.fcName].currency,
                listOfAffectedFields: [this.psComplexAmountOptions.currenciesOptions.fcName],
                screenVO: this.defaultVO,
                listOfAccounts: [this.fromAccountRef],
                toCurrency: +this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName].itemValue || this.defaultVO[this.psComplexAmountOptions.currenciesOptions.fcName]
              };
              this.omniPull.validateCurrencyCombination(validationRequest);
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_19__["OmniBasePage"]);

      AccountOpeningFixedMaturityAccountPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_18__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__["PsNavigatorService"]
        }];
      };

      AccountOpeningFixedMaturityAccountPage.propDecorators = {
        fromAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['fromAccountRef']
        }],
        amountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['amountRef']
        }]
      };
      AccountOpeningFixedMaturityAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'account-opening-fixed-maturity-account',
        template: _raw_loader_account_opening_fixed_maturity_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_opening_fixed_maturity_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_18__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__["PsNavigatorService"]])], AccountOpeningFixedMaturityAccountPage);
      /***/
    },

    /***/
    "P6WB":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.page.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P6WB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"acc_open_fix_mat_acc_panel1\">\n\n\n      <ps-input-display-only *ngIf=\"enableCifBranch\" id=\"'accountCifBranch' + id\" [options]=\"branchOptions\">\n\n      </ps-input-display-only>\n\n\n      <ps-complex-account-types [options]=\"accountTypesOptions\" (onPsChange)='onChangeItem($event)'>\n      </ps-complex-account-types>\n\n\n      <ps-label-input *ngIf=\"enablePeriodicity\" [options]=\"lblPeriodicityOptions\"></ps-label-input>\n\n\n      <ps-complex-amount #amountRef [options]=\"psComplexAmountOptions\" (onAmountChanged)=\"onBalancAmountChange($event)\"\n        (onCurrencyChange)=\"onCurrencyChange($event)\"></ps-complex-amount>\n      <ps-label *ngIf=\"showBalErr\" class=\"validation-message\" [options]=\"minimumBalErr\"></ps-label>\n\n\n\n      <!-- <ps-label [options]=\"{labelKey: 'profit_rate_key'}\"></ps-label> : <span>{{profitRate}}</span> -->\n      <ps-input-display-only *ngIf=\"profitRate\" id=\"'profitRate' + id\" [options]=\"profitRateOptions\">\n      </ps-input-display-only>\n\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountListOptions\" #fromAccountRef\n        (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n\n\n\n      <ps-select-toggle [id]=\"'accOpenFMid'\" [options]=\"mainOptions.toggleOptions\"\n        (onPsChange)=\"onRenewContractToggleChange($event)\" class=\"ps-toggle-acc-open fixed-maturity-account-toggle\">\n      </ps-select-toggle>\n\n\n      <ps-lookup-own-accounts id=\"'maturitrytransfer'+ id\" [options]=\"maturityTransferOptions\">\n      </ps-lookup-own-accounts>\n\n\n      <ps-select-toggle [id]=\"'accprofitFMid'\" [options]=\"mainOptions.toggleProfitOptions\"\n        (onPsChange)=\"onProfitChange($event)\" class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n\n\n      <ps-lookup-own-accounts id=\"'profitAccount'+ id\" [options]=\"profitAccOptions\"></ps-lookup-own-accounts>\n\n      <ps-label *ngIf=\"showAccTypeInformativeLabel\" class=\"text-warinsg-account-dactivation\"\n        [options]=\"instructMsgLabelOptions\"></ps-label>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"acc_open_fix_mat_acc_panel2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    },

    /***/
    "sk4y":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/account-opening-fixed-maturity-account/account-opening-fixed-maturity-account.page.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sk4y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LW9wZW5pbmctZml4ZWQtbWF0dXJpdHktYWNjb3VudC5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=75-es5.js.map