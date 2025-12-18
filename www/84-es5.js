(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84], {
    /***/
    "1Dkv":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/credit-card-settlement/credit-card-settlement.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: CreditCardSettlementPage */

    /***/
    function Dkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreditCardSettlementPage", function () {
        return CreditCardSettlementPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_credit_card_settlement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./credit-card-settlement.page.html */
      "KkLL");
      /* harmony import */


      var _credit_card_settlement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./credit-card-settlement.page.scss */
      "Y4UO");
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component */
      "/M2N");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component */
      "vbr2");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-constant */
      "zngb");

      var CreditCardSettlementPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        // public schedulerOptions: IOptionsPSComplexRecurringSchedulerExposed = {
        //   fcName: 'psScheduler',
        //   group: this.formGroup
        // };
        function CreditCardSettlementPage(omniPull, logger, nav, loggerP, commonService, omniCommon, eventEmitterService) {
          var _this;

          _classCallCheck(this, CreditCardSettlementPage);

          _this = _callSuper(this, CreditCardSettlementPage);
          _this.omniPull = omniPull;
          _this.logger = logger;
          _this.nav = nav;
          _this.loggerP = loggerP;
          _this.commonService = commonService;
          _this.omniCommon = omniCommon;
          _this.eventEmitterService = eventEmitterService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.creditCardSettlementVO = {};
          _this.defaultVO = {};
          _this.ownAccountVO = {};
          _this.stepperOptions = {
            stepperName: 'credit_card_settlement',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['credit_card_settlement_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.creditCardSettlementRequestEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.creditCardSettlementVO
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'credit_card_settlement_key',
            iconName: 'document',
            expanded: true
          };
          _this.creditCardsLookupOptiops = {
            labelKey: 'credit_card_key',
            placeHolder: 'select_credit_card_key',
            group: _this.formGroup,
            fcName: 'creditCard',
            requestObject: _this.creditCardSettlementVO,
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component__WEBPACK_IMPORTED_MODULE_7__["PsOptionCardComponent"]
          };
          _this.settlementAccountListOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'settlement_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'from',
            defaultByPersonalizedAcc: false,
            requestObject: _this.creditCardSettlementVO
          };
          _this.complexExchangeOptions = {
            editableMode: false,
            // showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'fromCurrency',
                group: _this.formGroup
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
                fcName: 'currency',
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
            requestObject: _this.creditCardSettlementVO,
            group: _this.formGroup
          };
          _this.toAccountComponent = {};
          return _this;
        }

        _inherits(CreditCardSettlementPage, _omni_base_omni_base_);

        return _createClass(CreditCardSettlementPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(CreditCardSettlementPage, "init", this, 3)([]);

            this.commonProv.copyObject(this.creditCardSettlementVO, this.nav.getAllParams() ? this.nav.getAllParams().ScreenVO ? this.nav.getAllParams().ScreenVO : this.nav.getAllParams() : {});
            this.baseFormGroup = this.formGroup;
          }
        }, {
          key: "settlementAccountChange",
          value: function settlementAccountChange(settlementAccount) {
            var _this2 = this;

            if (settlementAccount) {
              this.validateCurrencyCombination(settlementAccount);
              this.complexExchangeOptions.toAmountOptions.currency = settlementAccount.currencyCode;
              this.complexExchangeOptions.toAmountOptions.currencyCode = settlementAccount.currency;
              setTimeout(function () {
                _this2.stepperOptions.requestObject[_this2.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = settlementAccount.currency;
              }, 1);
              this.showExchangeRate();
            }
          }
        }, {
          key: "creditCardListChange",
          value: function creditCardListChange(credCardAccount) {
            var _this3 = this;

            if (credCardAccount) {
              this.validateCurrencyCombination(credCardAccount);
              this.complexExchangeOptions.fromAmountOptions.currency = credCardAccount.currencyCode;
              this.complexExchangeOptions.fromAmountOptions.currencyCode = credCardAccount.currency;
              setTimeout(function () {
                _this3.stepperOptions.requestObject[_this3.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = credCardAccount.currency;
              }, 1);
              this.creditCardSettlementVO.defaultSettlementAccount = this.creditCardSettlementVO.defaultSettlementAccount != undefined ? this.creditCardSettlementVO.defaultSettlementAccount : true;

              if (this.creditCardSettlementVO.defaultSettlementAccount) {
                this.commonProv.setValInsideNestedObj(this.settlementAccountListOptions.fcName, credCardAccount.additionalRef, this.creditCardSettlementVO);
                this.commonProv.setValInsideNestedObj(this.settlementAccountListOptions.fcName + '_lookupKey', credCardAccount.additionalRef, this.creditCardSettlementVO);
              }
            }
          }
          /** to show exchange rate if from and to currencies are different */

        }, {
          key: "showExchangeRate",
          value: function showExchangeRate() {
            this.exchangeChild.showToCurrency();
          }
        }, {
          key: "validateCurrencyCombination",
          value: function validateCurrencyCombination(selectedAccount) {
            if (selectedAccount[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].VALIDATE_COMBINATION]) {
              if (this.creditCardSettlementVO[this.settlementAccountListOptions.fcName] && this.creditCardSettlementVO[this.creditCardsLookupOptiops.fcName] && this.creditCardSettlementVO[this.settlementAccountListOptions.fcName].currency != this.creditCardSettlementVO[this.creditCardsLookupOptiops.fcName].currency) {
                var validationRequest = {
                  fromCurrency: +this.creditCardSettlementVO[this.settlementAccountListOptions.fcName].currency,
                  toCurrency: +this.creditCardSettlementVO[this.creditCardsLookupOptiops.fcName].currency,
                  listOfAccounts: [this.fromAccountRef, this.toAccountRef, this.exchangeRef],
                  listOfAffectedFields: [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName],
                  screenVO: this.creditCardSettlementVO
                };
                this.omniPull.validateCurrencyCombination(validationRequest);
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"]);

      CreditCardSettlementPage.ctorParameters = function () {
        return [{
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__["EventEmitterService"]
        }];
      };

      CreditCardSettlementPage.propDecorators = {
        exchangeChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexExchangeComponent"]]
        }],
        toAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['toAccountRef']
        }],
        fromAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fromAccountRef']
        }],
        exchangeRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['exchangeRef']
        }]
      };
      CreditCardSettlementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'credit-card-settlement',
        template: _raw_loader_credit_card_settlement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_credit_card_settlement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_12__["LoggerService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_11__["EventEmitterService"]])], CreditCardSettlementPage);
      /***/
    },

    /***/
    "KkLL":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credit-card-settlement/credit-card-settlement.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KkLL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"credit_card_req_panel\">\n\n      <ps-lookup-credit-cards [options]=\"creditCardsLookupOptiops\" #fromAccountRef\n        (onCreditCardChange)=\"creditCardListChange($event)\">\n      </ps-lookup-credit-cards>\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" #toAccountRef [options]=\"settlementAccountListOptions\"\n        (onAccountChange)=\"settlementAccountChange($event)\"></ps-lookup-own-accounts>\n\n      <!--\n          <ps-lookup-own-accounts id=\"'transferTo'+ id\" #toAccountRef [options]=\"toaccountList\"\n        (onAccountChange)=\"onAccountChange($event)\"></ps-lookup-own-accounts>     \n       -->\n\n      <ps-complex-exchange #exchangeRef [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    },

    /***/
    "Y4UO":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/credit-card-settlement/credit-card-settlement.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Y4UO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXQtY2FyZC1zZXR0bGVtZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=84-es5.js.map