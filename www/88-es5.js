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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88], {
    /***/
    "J2PC":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/ipn-money-transfer/ipn-money-transfer.page.ts ***!
      \*********************************************************************/

    /*! exports provided: IPNMoneyTransferPage */

    /***/
    function J2PC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IPNMoneyTransferPage", function () {
        return IPNMoneyTransferPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ipn_money_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ipn-money-transfer.page.html */
      "rqRg");
      /* harmony import */


      var _ipn_money_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ipn-money-transfer.page.scss */
      "dsgx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var IPNMoneyTransferPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function IPNMoneyTransferPage(commonService, omniPull) {
          var _this;

          _classCallCheck(this, IPNMoneyTransferPage);

          _this = _callSuper(this, IPNMoneyTransferPage);
          _this.commonService = commonService;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.IPNMonyTransferVO = {};
          _this.stepperOptions = {
            stepperName: 'IPN_money_transfer_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['IPN_money_transfer_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.fundstransferEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.IPNMonyTransferVO
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'IPN_money_transfer_details_key',
            iconName: 'crop',
            expanded: true
          };
          _this.fromAccountOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.IPNMonyTransferVO
          };
          _this.beneficiaryAccountTypeOptions = {
            group: _this.formGroup,
            fcName: 'beneficiaryAccountType'
          };
          _this.cardNumberOptions = {
            group: _this.formGroup,
            labelKey: 'card_number_key',
            placeHolder: 'enter_card_number_key',
            fcName: 'cardNumber'
          };
          _this.mobileWalletNumberOptions = {
            placeHolder: 'enter_mobile_wallet_number_key',
            labelKey: 'mobile_wallet_number_key',
            group: _this.formGroup,
            fcName: 'mobileWalletNumber',
            validate: false
          };
          _this.phoneNumberOptions = {
            group: _this.formGroup,
            labelKey: 'mobile_number_key',
            placeHolder: 'mobile_key',
            fcName: 'mobileNumber',
            validate: false
          };
          _this.beneficiaryNameOptions = {
            group: _this.formGroup,
            labelKey: 'beneficiary_name_key',
            placeHolder: 'defaulted_label_key',
            fcName: 'beneficiaryName'
          };
          _this.receiverNameOptions = {
            group: _this.formGroup,
            labelKey: 'receiver_name_key',
            placeHolder: 'receiver_name_label_key',
            fcName: 'receiverName'
          };
          _this.instantPayAddressOptions = {
            addressOptions: {
              group: _this.formGroup,
              labelKey: 'ipa_instant_pay_adress_key',
              placeHolder: 'enter_ipa_instant_pay_address_key',
              fcName: 'address'
            },
            pspHandlerOptions: {
              labelKey: 'psp_handler_key',
              placeHolder: 'select_psp_handler_key',
              fcName: 'pspHandler',
              group: _this.formGroup
            },
            group: _this.formGroup
          };
          _this.accountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'account_number_key',
            placeHolder: 'enter_account_no_key',
            group: _this.formGroup
          };
          _this.banksOptions = {
            categoryLabelKey: 'bank_key',
            categoryPlaceholderKey: 'select_bank_key',
            categoryFcName: 'bank',
            subCategoryLabelKey: 'branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: _this.formGroup,
            requestObject: _this.IPNMonyTransferVO
          };
          _this.amountOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'amount',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            },
            requestObject: _this.IPNMonyTransferVO,
            showLimitLabel: false
          };
          _this.purposeOptions = {
            labelKey: 'purpose_key',
            placeHolder: 'enter_purpose_key',
            group: _this.formGroup,
            fcName: 'purpose'
          };
          _this.feesLabelOptions = {
            fcName: 'fees'
          };
          return _this;
        }

        _inherits(IPNMoneyTransferPage, _omni_base_omni_base_);

        return _createClass(IPNMoneyTransferPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(IPNMoneyTransferPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(IPNMoneyTransferPage, "ionViewDidEnter", this, 3)([]);
          } //TODO: will be modified when returnChargesDetails returns a response 

        }, {
          key: "checkFees",
          value: function checkFees(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var feesReqParam;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!(this.formGroup.controls[this.amountOptions.amountOptions.fcName].value && this.formGroup.controls[this.beneficiaryAccountTypeOptions.fcName].value)) {
                      _context.n = 1;
                      break;
                    }

                    feesReqParam = {
                      amount: this.formGroup.controls[this.amountOptions.amountOptions.fcName].value,
                      beneficiaryAccountType: this.formGroup.controls[this.beneficiaryAccountTypeOptions.fcName].value
                    };
                    _context.n = 1;
                    return this.omniPull.returnChargesDetails(feesReqParam).then(function (result) {
                      _this2.feesLabelOptions.labelKey = _this2.commonService.translate('your_fees_is_20_LE_key');
                    }, function (err) {
                      console.log(err);
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "validateBeneficiary",
          value: function validateBeneficiary(event, benefType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this3 = this;

              var params, _t;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    params = {};
                    _t = benefType;
                    _context2.n = _t === 'phoneNumber' ? 1 : _t === 'cardNumber' ? 2 : _t === 'address' ? 3 : _t === 'handler' ? 4 : 5;
                    break;

                  case 1:
                    params = {
                      commonParametersList: {
                        mobileNumber: event.newValue
                      }
                    };
                    return _context2.a(3, 5);

                  case 2:
                    params = {
                      commonParametersList: {
                        cardNumber: event.newValue
                      }
                    };
                    return _context2.a(3, 5);

                  case 3:
                    params = this.formGroup.controls[this.instantPayAddressOptions.pspHandlerOptions.fcName].value ? {
                      commonParametersList: {
                        address: event.value + this.formGroup.controls.formData[this.instantPayAddressOptions.pspHandlerOptions.fcName].description
                      }
                    } : {};
                    return _context2.a(3, 5);

                  case 4:
                    params = this.formGroup.controls[this.instantPayAddressOptions.addressOptions.fcName].value ? {
                      commonParametersList: {
                        address: this.formGroup.controls[this.instantPayAddressOptions.addressOptions.fcName].value + event.description
                      }
                    } : {};
                    return _context2.a(3, 5);

                  case 5:
                    if (!(Object.keys(params).length > 0)) {
                      _context2.n = 6;
                      break;
                    }

                    _context2.n = 6;
                    return this.omniPull.validateIPA(params).then(function (result) {
                      //TODO: will be modefied to set beneficiary name when result is available
                      _this3.commonService.setValInsideNestedObj(_this3.beneficiaryNameOptions.fcName, "name", _this3.IPNMonyTransferVO);
                    });

                  case 6:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handleFromAccountChange",
          value: function handleFromAccountChange(account) {
            this.amountOptions.currency = account.currencyBriefNameEnglish;
            this.amountOptions.currencyCode = account.currency;
            this.commonService.setValInsideNestedObj(this.amountOptions.currenciesOptions.fcName, account.currency, this.IPNMonyTransferVO);
            this.commonService.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.amountOptions.currenciesOptions.fcName], 1);
          }
        }, {
          key: "isAccountType",
          value: function isAccountType(controlName, accountType) {
            var _a, _b;

            return ((_b = (_a = this.formGroup) === null || _a === void 0 ? void 0 : _a.controls[controlName]) === null || _b === void 0 ? void 0 : _b.value) === accountType;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"]); //Added By OmarTalaat BUG:AZDB-2020 For ben account type == Account Number  Named constant for readability


      IPNMoneyTransferPage.AccountType = {
        AN: 'AN',
        MWN: 'MWN'
      };

      IPNMoneyTransferPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      IPNMoneyTransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ipn-money-transfer',
        template: _raw_loader_ipn_money_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ipn_money_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], IPNMoneyTransferPage);
      /***/
    },

    /***/
    "dsgx":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/ipn-money-transfer/ipn-money-transfer.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function dsgx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpcG4tbW9uZXktdHJhbnNmZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "rqRg":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ipn-money-transfer/ipn-money-transfer.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rqRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"IPN_money_transfer_details\">\n      <ps-lookup-own-accounts id=\"fromAccount\" [options]=\"fromAccountOptions\"\n        (onAccountChange)=\"handleFromAccountChange($event)\"> </ps-lookup-own-accounts>\n      <ps-lov-beneficiary-account-type [options]=\"beneficiaryAccountTypeOptions\"\n        (onPsChange)=\"checkFees($event)\"></ps-lov-beneficiary-account-type>\n      <ps-entity-phone-number id=\"phoneNumber\" [options]='phoneNumberOptions'\n        (onPsChange)=\"validateBeneficiary($event,'phoneNumber')\"></ps-entity-phone-number>\n      <ps-entity-phone-number id=\"mobileWalletNumber\" [options]='mobileWalletNumberOptions'></ps-entity-phone-number>\n      <ps-complex-instant-pay-address [options]=\"instantPayAddressOptions\"\n        (onAddressChange)=\"validateBeneficiary($event,'address')\"\n        (onHandlerChange)=\"validateBeneficiary($event,'handler')\"></ps-complex-instant-pay-address>\n      <ps-input-card-number id=\"cardNumber\" [options]=\"cardNumberOptions\"\n        (onPsChange)=\"validateBeneficiary($event,'cardNumber')\">\n      </ps-input-card-number>\n      <ps-banks id=\"banks\" [options]=\"banksOptions\"> </ps-banks>\n      <ps-input-account-number id=\"accountNumber\" [options]=\"accountNumberOptions\"></ps-input-account-number>\n      <ps-input-varchar id=\"beneficiaryName\" [options]=\"beneficiaryNameOptions\"></ps-input-varchar>\n      <ps-input-varchar id=\"receiverName\" [options]=\"receiverNameOptions\">\n      </ps-input-varchar>\n      <ps-complex-amount id=\"amount\" [options]=\"amountOptions\"\n        (onAmountChanged)=\"checkFees($event)\"></ps-complex-amount>\n      <ps-label id=\"fees\" [options]=\"feesLabelOptions\"> </ps-label>\n      <ps-input-varchar id=\"purpose\" [options]=\"purposeOptions\"> </ps-input-varchar>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=88-es5.js.map