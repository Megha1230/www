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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102], {
    /***/
    "CEmr":
    /*!***********************************************************!*\
      !*** ./src/app/pages/upgrade-card/upgrade-card.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function CEmr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWRlLWNhcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "VfvS":
    /*!*********************************************************!*\
      !*** ./src/app/pages/upgrade-card/upgrade-card.page.ts ***!
      \*********************************************************/

    /*! exports provided: UpgradeCardPage */

    /***/
    function VfvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpgradeCardPage", function () {
        return UpgradeCardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_upgrade_card_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./upgrade-card.page.html */
      "xR1C");
      /* harmony import */


      var _upgrade_card_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./upgrade-card.page.scss */
      "CEmr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var UpgradeCardPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function UpgradeCardPage(loggerP, nav, omniPull, translateSrv) {
          var _this;

          _classCallCheck(this, UpgradeCardPage);

          _this = _callSuper(this, UpgradeCardPage);
          _this.loggerP = loggerP;
          _this.nav = nav;
          _this.omniPull = omniPull;
          _this.translateSrv = translateSrv;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.upgradeCardVO = {};
          _this.showDebitCard = false;
          _this.enableRequestCifBranch = false;
          _this.cifInfo = {};
          _this.stepperOptions = {
            stepperName: 'upgrade_card_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['upgrade_card_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__["PsCommonSettings"].serviceUrl.commonSubmitAction,
              group: _this.formGroup,
              postCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.checkUnsettledBalance(response));
                  });
                },
                params: [_this],
                executionClass: _this
              }
            },
            requestObject: _this.upgradeCardVO
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'card_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.cardHolderNameOptions = {
            labelKey: 'card_holder_name_key',
            placeHolder: 'card_holder_name_key',
            group: _this.formGroup,
            fcName: 'cardHolderName'
          };
          _this.primaryAccountOptions = {
            labelKey: 'primary_account_key',
            placeHolder: 'primary_account_key',
            currency: '',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            fcName: 'primaryAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            requestObject: _this.upgradeCardVO
          };
          _this.secondaryAccountOptions = {
            labelKey: 'secondary_account_key',
            placeHolder: 'secondary_account_key',
            currency: '',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            fcName: 'secondaryAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            requestObject: _this.upgradeCardVO
          };
          _this.debitCardTypeOptions = {
            labelKey: 'debit_card_type_key',
            placeHolder: 'select_card_type_key',
            group: _this.formGroup,
            fcName: 'debitCardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CARDTYPE_D
          };
          _this.creditCardTypeOptions = {
            labelKey: 'credit_card_type_key',
            placeHolder: 'select_card_type_key',
            group: _this.formGroup,
            fcName: 'creditCardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CARDTYPE_C
          };
          _this.settlementAccountOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'settlement_account_key',
            currency: '',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            fcName: 'settlementAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].GeneralType,
            requestObject: _this.upgradeCardVO
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_map_branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup
          };
          _this.deliveryAddressDetails = {
            collectionModeOptions: {
              group: _this.formGroup,
              fcName: 'deliveryLoc'
            },
            branchLocationOptions: {
              fcName: 'destinationBranchesDropdown',
              group: _this.formGroup,
              countryRegionCityOptions: {
                countriesOptions: {
                  fcName: 'destinationBranchCountry'
                },
                regionOptions: {
                  fcName: 'destinationBranchRegion'
                },
                cityOptions: {
                  fcName: 'destinationBranchCity'
                }
              },
              branchesOptions: {
                fcName: 'destinationBranch'
              }
            },
            homeAddressOptions: {
              placeHolder: 'home_address_key',
              labelKey: 'home_address_key',
              group: _this.formGroup,
              fcName: 'homeAddress',
              requestVO: _this.upgradeCardVO
            },
            workAddressOptions: {
              placeHolder: 'work_address_key',
              labelKey: 'work_address_key',
              group: _this.formGroup,
              fcName: 'workAddress',
              requestVO: _this.upgradeCardVO
            },
            otherAddressOptions: {
              labelKey: 'address_details_key',
              rows: '3',
              cols: '10',
              fcName: 'otherAddressDetails',
              group: _this.formGroup
            },
            branchCifOptions: {
              labelKey: 'account_branch_key',
              group: _this.formGroup,
              fcName: 'branchName'
            },
            cifBranchChecking: true
          };
          return _this;
        }

        _inherits(UpgradeCardPage, _omni_base_omni_base_);

        return _createClass(UpgradeCardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(UpgradeCardPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.showDebitCard = this.commonProv.activePage.value.operID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].UPGRADE_CREDIT_CARD ? false : true;

            if (this.showDebitCard) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardTypeOptions.fcName, this.cardHolderNameOptions.fcName, this.settlementAccountOptions.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardTypeOptions.fcName, this.primaryAccountOptions.fcName, this.secondaryAccountOptions.fcName], 1);
            } else {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardTypeOptions.fcName, this.cardHolderNameOptions.fcName, this.settlementAccountOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardTypeOptions.fcName, this.primaryAccountOptions.fcName, this.secondaryAccountOptions.fcName], 0);
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _a, _b;

            _superPropGet(UpgradeCardPage, "ionViewDidEnter", this, 3)([]);

            this.fetchParameter();
            this.defaultCardAccount = this.nav.getAllParams().primaryAccount;

            if (this.showDebitCard) {
              var secondaryAccount = this.nav.getAllParams().secondaryAccount;
              this.commonProv.setValInsideNestedObj(this.primaryAccountOptions.fcName, this.defaultCardAccount, this.upgradeCardVO);
              this.commonProv.setValInsideNestedObj(this.primaryAccountOptions.fcName + "_lookupKey", this.defaultCardAccount, this.upgradeCardVO);

              if (secondaryAccount) {
                this.commonProv.setValInsideNestedObj(this.secondaryAccountOptions.fcName, secondaryAccount, this.upgradeCardVO);
                this.commonProv.setValInsideNestedObj(this.secondaryAccountOptions.fcName + "_lookupKey", secondaryAccount, this.upgradeCardVO);
              }
            } else {
              var defaultCardHolderName = this.translateSrv.currentLang.toLocaleLowerCase() === 'ar' ? (_a = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).customerInfoCO) === null || _a === void 0 ? void 0 : _a.longNameArabic : (_b = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).customerInfoCO) === null || _b === void 0 ? void 0 : _b.longName;
              this.commonProv.setValInsideNestedObj(this.cardHolderNameOptions.fcName, defaultCardHolderName, this.upgradeCardVO);
              this.commonProv.setValInsideNestedObj(this.settlementAccountOptions.fcName, this.defaultCardAccount, this.upgradeCardVO);
              this.commonProv.setValInsideNestedObj(this.settlementAccountOptions.fcName + "_lookupKey", this.defaultCardAccount, this.upgradeCardVO);
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
                    this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)["catch"](function (error) {
                      _this3.loggerP.error(error);
                    });

                  case 1:
                    result = _context.v;

                    if (result !== -1 && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.enableRequestCifBranch = false;
                    } else {
                      this.enableRequestCifBranch = true;
                    }

                    this.hideShowRequestBranch();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch(event) {
            if (event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.upgradeCardVO);
            }
          }
        }, {
          key: "hideMap",
          value: function hideMap() {
            var modeOfCollection = this.upgradeCardVO ? this.upgradeCardVO[this.deliveryAddressDetails.collectionModeOptions.fcName] : {};

            if ((modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE) {
              if (this.deliveryAddressDetails.enableCifBranch == 1) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 1, true);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['destBranch'], 1, true);
              }
            } else {
              if (this.deliveryAddressDetails.enableCifBranch == 1) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[1]], 0, true);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['destBranch'], 0, true);
              }
            }
          }
        }, {
          key: "hideShowRequestBranch",
          value: function hideShowRequestBranch() {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['upgrade_card_req_panel2'], !this.enableRequestCifBranch);
          }
        }, {
          key: "checkUnsettledBalance",
          value: function checkUnsettledBalance(response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this4 = this;

              var settleBalanceAlertController;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (!this.showDebitCard) {
                      // TODO: check for any unsettled balance on the current ((credit)) card  --> Call web service
                      if (response && response.outputCode === -1) {
                        settleBalanceAlertController = {
                          cssClass: 'cronto-code',
                          id: 'settle-balance',
                          header: 'please_settle_oustanding_balance_in_order_to_proceed_key',
                          headerImageOptions: {
                            imageName: '',
                            imageBase64Url: ''
                          },
                          buttons: [{
                            role: 'cancel',
                            options: {
                              labelKey: 'cancel_key',
                              psClass: 'ps-drafts-report-cancel-button',
                              group: null
                            },
                            handler: function handler() {
                              src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].dismissAllModals();
                            }
                          }, {
                            role: 'cancel',
                            options: {
                              labelKey: 'ok_key',
                              iconName: '',
                              psClass: 'ps-drafts-report-submit-button',
                              group: null
                            },
                            handler: function handler() {
                              var settlementPage = {
                                operID: 51,
                                title: 'CREDIT_CARD_SETTLEMENT_REQ',
                                component: 'credit-card-settlement',
                                icon: "card-status-report",
                                param: {
                                  accountNumber: _this4.defaultCardAccount
                                }
                              };

                              _this4.nav.openPage(settlementPage);
                            }
                          }]
                        };
                        this.commonProv.presentPsAlert(settleBalanceAlertController, 'settle-balance');
                      }
                    }

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      UpgradeCardPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      UpgradeCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upgrade-card',
        template: _raw_loader_upgrade_card_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upgrade_card_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], UpgradeCardPage);
      /***/
    },

    /***/
    "xR1C":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upgrade-card/upgrade-card.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xR1C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"upgrade_card_req_panel\">\n\n      <ps-input-varchar id=\"cardHolderName\" [options]=\"cardHolderNameOptions\"></ps-input-varchar>\n\n      <ps-lookup-own-accounts id=\"'primaryAccount'+ id\" [options]=\"primaryAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-dropdown-card-types id=\"debitCardType\" [options]=\"debitCardTypeOptions\">\n      </ps-dropdown-card-types>\n      <ps-dropdown-card-types id=\"creditCardType\" [options]=\"creditCardTypeOptions\">\n      </ps-dropdown-card-types>\n\n      <ps-lookup-own-accounts id=\"'secondaryAccount'+ id\" [options]=\"secondaryAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-lookup-own-accounts id=\"settlementAccountid\" [options]=\"settlementAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-complex-location (parentFun)=\"hideMap()\" [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"upgrade_card_req_panel2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=102-es5.js.map