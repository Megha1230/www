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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78], {
    /***/
    "ATrW":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/break-term-deposit-account/break-term-deposit-account.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ATrW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\">\n  <ps-form-step step1>\n    <ps-container-panel [options]=\"panelOptionsStep1\" id=\"break_term_panel1\">\n\n      <!-- <ps-accounts-list [options]=\"termsAccountListOptions\"></ps-accounts-list> -->\n      <ps-lookup-own-accounts [options]=\"termsAccountListOptions\"></ps-lookup-own-accounts>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptionsStep2\" id=\"break_term_panel2\">\n      <ps-lov-breakage-type id=\"breakageType\" [options]='breakTypeOptions' (onPsChange)='onchange($event)'>\n      </ps-lov-breakage-type>\n      <!-- <ps-complex-amount [options]=\"psComplexAmountOptions\" (onAmountChanged)=\"onBreakageAmountChange($event)\" (onCurrencyChange)=\"onCurrencyChange($event)\"></ps-complex-amount> -->\n      <ps-lookup-own-accounts id=\"'transferTo'+ id\" [options]=\"transferToOptions\"\n        (onAccountChange)=\"onTransferTo($event)\">\n      </ps-lookup-own-accounts>\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onPsChange)=\"onBreakageAmountChange($event)\"></ps-complex-exchange>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "D8t5":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/break-term-deposit-account/break-term-deposit-account.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function D8t5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* break term deposit account css*/\n.test {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JyZWFrLXRlcm0tZGVwb3NpdC1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBQTtBQUVBO0VBQ0ksa0JBQUE7QUFBSiIsImZpbGUiOiJicmVhay10ZXJtLWRlcG9zaXQtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmVhayB0ZXJtIGRlcG9zaXQgYWNjb3VudCBjc3MqL1xyXG5cclxuLnRlc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "Q5h/":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/break-term-deposit-account/break-term-deposit-account.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: BreakTermDepositAccountPage */

    /***/
    function Q5h_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreakTermDepositAccountPage", function () {
        return BreakTermDepositAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_break_term_deposit_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./break-term-deposit-account.page.html */
      "ATrW");
      /* harmony import */


      var _break_term_deposit_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./break-term-deposit-account.page.scss */
      "D8t5");
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


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT");

      var BreakTermDepositAccountPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function BreakTermDepositAccountPage(commonProv, navService, loggerP, eventEmitterService, omniPull) {
          var _this;

          _classCallCheck(this, BreakTermDepositAccountPage);

          _this = _callSuper(this, BreakTermDepositAccountPage);
          _this.commonProv = commonProv;
          _this.navService = navService;
          _this.loggerP = loggerP;
          _this.eventEmitterService = eventEmitterService;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.breakTermDepositVO = {};
          _this.stepperOptions = {
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['break_term_deposit1'],
            group: _this.formGroup,
            requestObject: _this.breakTermDepositVO,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
              group: _this.formGroup,
              postCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.serviceRes(response));
                  });
                },
                params: [_this],
                executionClass: _this
              }
            }
          };
          _this.panelOptionsStep1 = {
            isExpandable: true,
            labelKey: 'account_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'break_account_details_key',
            iconName: 'document',
            expanded: false
          };
          _this.filterDateOptions = {
            fcName: 'date',
            group: _this.formGroup,
            labelKey: 'date_key',
            placeHolder: 'select_date_key'
          };
          _this.transferToOptions = {
            labelKey: 'transfer_to_key',
            placeHolder: 'select_transfer_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.breakTermDepositVO
          };
          _this.psComplexAmountOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'breakage_amount_key',
              placeHolder: 'enter_breakage_amount_key',
              fcName: 'inputAmount',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            }
          };
          _this.psComplexAmountOptions1 = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'accountCurrency'
            },
            amountOptions: {
              labelKey: 'amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'amount',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            }
          };
          _this.breakTypeOptions = {
            fcName: 'brekageType',
            group: _this.formGroup,
            labelKey: 'breakage_type_key',
            placeHolder: 'select_breakage_type_key'
          };
          _this.comAmountOptions = {
            currency: '',
            currenciesOptions: {
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'amount',
              fcName: 'amount',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            }
          };
          _this.fullBreakOptions = {
            labelKey: 'fuller_partial_break_key',
            placeHolder: 'fuller_partial_break_key',
            group: _this.formGroup,
            fcName: 'fullerOrPartialBreakToggle',
            psClass: 'toggleColor'
          };
          _this.showAmt = true;
          _this.accountTypesOptions = {
            accountTypesOptions: {
              allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
              accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACC_TYPE_T,
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
            requestObject: _this.breakTermDepositVO
          };
          _this.lblPeriodicityOptions = {
            labelKey: 'Term: 5 Years'
          };
          _this.profitRateOptions = {
            placeHolder: 'profit_rate_key',
            labelKey: 'profit_rate_key',
            group: _this.formGroup,
            fcName: 'profitRate'
          };
          _this.accountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'transferTo',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.breakTermDepositVO
          };
          _this.maturityTransferOptions = {
            labelKey: 'on_maturity_transfer_balance_to_key',
            placeHolder: 'select_maturity_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'maturityAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.breakTermDepositVO
          };
          _this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.breakTermDepositVO
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
          _this.instructMsgLabelOptions = {
            labelKey: 'Renewal Instructions: New Balance Renewed in Same Account',
            group: _this.formGroup,
            fcName: 'instrcutions'
          };
          _this.actionImageOptions = {
            imageName: 'account_Deactivation_Remark_icon.png'
          }; // termsAccountListOptions: IOptionsPsAccountsListExposed = {
          //   fcName: 'account',
          //   isEditable: false
          // };

          _this.termsAccountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'F',
            fromTo: 'from',
            requestObject: _this.breakTermDepositVO
          };
          _this.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'fromCurrency',
                group: _this.formGroup
              },
              amountOptions: {
                labelKey: 'breakage_amount_key',
                placeHolder: 'breakage_amount_key',
                fcName: 'transactionAmount',
                group: _this.formGroup,
                decimalPoints: 3,
                revertToOldValue: false
              },
              requestObject: _this.breakTermDepositVO
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'exchange_currency_key',
                labelKey: 'exchange_currency_key',
                fcName: 'toCurrency',
                group: _this.formGroup
              },
              amountOptions: {
                labelKey: 'exchange_amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'toAmount',
                group: _this.formGroup,
                decimalPoints: 2
              },
              requestObject: _this.breakTermDepositVO
            },
            requestObject: _this.breakTermDepositVO,
            group: _this.formGroup
          };
          _this.enablePeriodicity = false;
          _this.showLabel = false;
          _this.enableMaturityTransfer = false;
          _this.enableProfit = false;
          return _this;
        }

        _inherits(BreakTermDepositAccountPage, _src_app_pages_omni_b);

        return _createClass(BreakTermDepositAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(BreakTermDepositAccountPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
            this.commonProv.copyObject(this.breakTermDepositVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});

            if (this.breakTermDepositVO) {
              this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
                branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : ''
              }, false, true);
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(BreakTermDepositAccountPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.termsAccountListOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
            this.commonProv.addDefaultValidator(this.formGroup, this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, this.commonProv.prepareValidation(false, null, null, null, null, null, null, null, [this.custAmountValidator()]));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.commonProv.setValInsideNestedObj(this.termsAccountListOptions.fcName, this.breakTermDepositVO.additionalRef, this.breakTermDepositVO);
            this.commonProv.setValInsideNestedObj(this.termsAccountListOptions.fcName + '_lookupKey', this.breakTermDepositVO.additionalRef, this.breakTermDepositVO);
            this.breakTermDepositVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = this.breakTermDepositVO.currency;
            this.complexExchangeOptions.fromAmountOptions.currencyCode = Number(this.breakTermDepositVO.currency);
          }
        }, {
          key: "onBreakageAmountChange",
          value: function onBreakageAmountChange(value) {// const availableBal = this.breakTermDepositVO.availableBalance.split(' ');
            // if (Number(value.amount) > parseFloat(availableBal[0].replace(/,/g, ''))) {
            //   CommonUtils.presentInfoAlert(this.commonProv.translate('amount_should_not_exceed_the_defaulted_value_key'));
            //   this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, parseFloat(availableBal[0].replace(/,/g, '')), this.breakTermDepositVO)
            // }
          }
        }, {
          key: "onchange",
          value: function onchange(val) {
            var _this3 = this;

            this.availableBal = this.breakTermDepositVO.availableBalance.split(' ');

            if (val) {
              //Mohanad AZDB-5887 28102024
              if (val.itemValue == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].FULL_BREAKAGE_TERM_DEPOSIT) {
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, parseFloat(this.availableBal[0].replace(/,/g, '')), this.breakTermDepositVO);
                setTimeout(function () {
                  _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [_this3.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
                }, 1);
              } else if (val.itemValue == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PARTIAL_BREAKAGE_TERM_DEPOSIT) {
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, null, this.breakTermDepositVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 0);
              }
            } //End AZDB-5887

          }
        }, {
          key: "onTransferTo",
          value: function onTransferTo(fromAccount) {
            if (fromAccount) {
              this.breakTermDepositVO[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = fromAccount.currency.toString();
              this.complexExchangeOptions.toAmountOptions.currencyCode = Number(fromAccount.currency);
              this.showExchangeRate();
            }
          }
        }, {
          key: "showExchangeRate",
          value: function showExchangeRate() {
            this.exchangeChild.showToCurrency();
          } //Mohanad AZDB-5887 28102024

        }, {
          key: "custAmountValidator",
          value: function custAmountValidator() {
            var _this4 = this;

            return function (control) {
              if (!_this4.checkFieldControlsValidity(control)) {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].presentInfoAlert(_this4.commonProv.translate('partial_break_amount_cannot_be_greater_or_equal_to_account_balance_key'));

                _this4.formGroup.controls[_this4.complexExchangeOptions.fromAmountOptions.amountOptions.fcName].setValue(null);

                return {
                  'equal or greater than balance': ''
                };
              }

              return null;
            };
          }
        }, {
          key: "checkFieldControlsValidity",
          value: function checkFieldControlsValidity(control) {
            if (!src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(this.availableBal) && (control === null || control === void 0 ? void 0 : control.value) != undefined && (control === null || control === void 0 ? void 0 : control.value) != '' && control.value >= this.availableBal) {
              return false;
            }

            return true;
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_16__["OmniBasePage"]);

      BreakTermDepositAccountPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_15__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_14__["PsNavigatorService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }];
      };

      BreakTermDepositAccountPage.propDecorators = {
        exchangeChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexExchangeComponent"]]
        }]
      };
      BreakTermDepositAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-break-term-deposit-account',
        template: _raw_loader_break_term_deposit_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_break_term_deposit_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_15__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_14__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])], BreakTermDepositAccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=78-es5.js.map