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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92], {
    /***/
    "DgOP":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/online-bill-payment/online-bill-payment.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DgOP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptionsStep1\" id=\"amana_online_bill_pmt_panel1\">\n\n      <ps-dropdown-billers-category id=\"'category' + id\" [options]=\"categoryOptions\"\n        (onPsChange)=\"onCategoryChange($event)\"></ps-dropdown-billers-category>\n\n\n      <ps-dropdown-biller *ngIf=\"showBiller\" id=\"'type' + id\" [options]=\"typeOptions\"\n        (onPsChange)=\"onBillerChange($event)\"></ps-dropdown-biller>\n\n\n      <ps-input-free-text id=\"'hint' + id\" [options]=\"hintOptions\">\n      </ps-input-free-text>\n\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountListOptions\"\n        (onAccountChange)=\"onAccountChange($event)\"></ps-lookup-own-accounts>\n\n\n      <ps-input-free-text id=\"input_free_text\" [options]=\"briefExplanationOptions\" (onPsChange)=\"onRefChange($event)\">\n      </ps-input-free-text>\n\n      <!--<div class= \"col-12\">\n             <ps-complex-amount [options]=\"psComplexAmountOptions\"></ps-complex-amount>\n        </div> -->\n\n      <ps-complex-exchange [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "QPdu":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/online-bill-payment/online-bill-payment.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function QPdu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmxpbmUtYmlsbC1wYXltZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "i0F6":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/online-bill-payment/online-bill-payment.page.ts ***!
      \***********************************************************************/

    /*! exports provided: OnlineBillPaymentPage */

    /***/
    function i0F6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineBillPaymentPage", function () {
        return OnlineBillPaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_online_bill_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./online-bill-payment.page.html */
      "DgOP");
      /* harmony import */


      var _online_bill_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./online-bill-payment.page.scss */
      "QPdu");
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


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT");

      var OnlineBillPaymentPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function OnlineBillPaymentPage(commonProv, loggerP, omniPull, navService) {
          var _this;

          _classCallCheck(this, OnlineBillPaymentPage);

          _this = _callSuper(this, OnlineBillPaymentPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.navService = navService;
          _this.billPaymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.defaultVO = {};
          _this.stepperOptions = {
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['bill_payment_step1'],
            group: _this.billPaymentForm,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.billPaymentEndPoint,
              group: _this.billPaymentForm,
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
            },
            requestObject: _this.defaultVO
          };
          _this.accountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: _this.billPaymentForm,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.defaultVO
          };
          _this.panelOptionsStep1 = {
            isExpandable: true,
            labelKey: 'bill_payment_key',
            iconName: 'document',
            expanded: true
          };
          _this.psComplexAmountOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.billPaymentForm,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'amount',
              group: _this.billPaymentForm,
              type: 'amount',
              decimalPoints: 3
            }
          };
          _this.complexExchangeOptions = {
            editableMode: true,
            showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              group: _this.billPaymentForm,
              // fcName: 'fromAmount',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'fromAccountCurrency',
                group: _this.billPaymentForm
              },
              amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                group: _this.billPaymentForm
              }
            },
            toAmountOptions: {
              group: _this.billPaymentForm,
              // fcName: 'toAmount',
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'currency',
                group: _this.billPaymentForm
              },
              amountOptions: {
                labelKey: 'exchanged_amount_key',
                placeHolder: 'enter_exchanged_amount_key',
                fcName: 'toAmount',
                group: _this.billPaymentForm
              }
            }
          };
          _this.briefExplanationOptions = {
            labelKey: 'bill_reference_key',
            placeHolder: 'enter_bill_reference_key',
            fcName: 'reference',
            group: _this.billPaymentForm,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.hintOptions = {
            placeHolder: 'enter_hint_key',
            labelKey: 'billers_hint_key',
            group: _this.billPaymentForm,
            fcName: 'hint'
          };
          _this.categoryOptions = {
            fcName: 'category',
            group: _this.billPaymentForm
          };
          _this.typeOptions = {
            fcName: 'biller',
            group: _this.billPaymentForm
          };
          _this.showBiller = false;
          _this.billerTypes = [];
          return _this;
        }

        _inherits(OnlineBillPaymentPage, _src_app_pages_omni_b);

        return _createClass(OnlineBillPaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(OnlineBillPaymentPage, "init", this, 3)([]);

            this.baseFormGroup = this.billPaymentForm;
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].BILL_PAYMENTS_OPER_ID;
          }
        }, {
          key: "onAccountChange",
          value: function onAccountChange(fromAccount) {
            if (fromAccount) {
              this.defaultVO[this.complexExchangeOptions.toAmountOptions.amountOptions.fcName] = '';
              this.defaultVO[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = fromAccount.currency.toString();
              this.complexExchangeOptions.toAmountOptions.currencyCode = Number(fromAccount.currency);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);
              this.showExchangeRate();
            }
          }
          /** to show exchange rate if from and to currencies are different */

        }, {
          key: "showExchangeRate",
          value: function showExchangeRate() {
            this.exchangeChild.showToCurrency();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            setTimeout(function () {
              _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [_this3.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);

              _this3.showExchangeRate();
            }, 100);
          }
        }, {
          key: "onCategoryChange",
          value: function onCategoryChange(event) {
            if (event.selectedObj.longDesc) {
              this.showBiller = false;
              this.defaultVO[this.hintOptions.fcName] = event.selectedObj.longDesc;
              this.getBillerTypes(event);
            }
          }
        }, {
          key: "onBillerChange",
          value: function onBillerChange(event) {
            if (event.selectedObj) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);
              this.defaultVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = event.selectedObj.currencyCode.toString();
              this.complexExchangeOptions.fromAmountOptions.currencyCode = Number(event.selectedObj.currencyCode); // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);

              this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
                toAccount: {
                  accountNumber: event.selectedObj.accountNumber
                },
                cifBank: event.selectedObj.accCIF,
                additionalNumber: event.selectedObj.billTypeCode,
                billerCode: event.selectedObj.organizationCode
              }, false, true);
            }
          }
        }, {
          key: "getBillerTypes",
          value: function getBillerTypes(val) {
            var _this4 = this;

            var paramData = {
              commonParametersList: {
                category: val
              }
            };
            this.omniPull.returnBillersList(paramData).then(function (result) {
              _this4.showBiller = false;
              _this4.billerTypes = [];

              if (result && result.gridModel != null && result.gridModel.length > 0) {
                for (var i = 0; i < result.gridModel.length; i++) {
                  var acctype = {
                    itemValue: result.gridModel[i].itemValue,
                    description: result.gridModel[i].description,
                    selectedObj: result.gridModel[i]
                  };

                  _this4.billerTypes.push(acctype);
                }

                _this4.typeOptions.listofItems = _this4.billerTypes;
                _this4.showBiller = true;
              } else {
                _this4.loggerP.warn(result, 'empty response');
              }
            })["catch"](function (error) {});
          }
        }, {
          key: "onRefChange",
          value: function onRefChange(val) {
            if (val) {
              this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
                soReference: val.newValue
              }, false, true);
            }
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"]);

      OnlineBillPaymentPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }];
      };

      OnlineBillPaymentPage.propDecorators = {
        exchangeChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexExchangeComponent"]]
        }]
      };
      OnlineBillPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-online-bill-payment',
        template: _raw_loader_online_bill_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_online_bill_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]])], OnlineBillPaymentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=92-es5.js.map