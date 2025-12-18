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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99], {
    /***/
    "Evj/":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/request-qr-payment/request-qr-payment.page.ts ***!
      \*********************************************************************/

    /*! exports provided: RequestQrPaymentPage */

    /***/
    function Evj_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestQrPaymentPage", function () {
        return RequestQrPaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_request_qr_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./request-qr-payment.page.html */
      "wlo7");
      /* harmony import */


      var _request_qr_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./request-qr-payment.page.scss */
      "cgDh");
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


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var RequestQrPaymentPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function RequestQrPaymentPage(commonService, logger, omniPull) {
          var _this;

          _classCallCheck(this, RequestQrPaymentPage);

          _this = _callSuper(this, RequestQrPaymentPage);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.qrCodeVO = {};
          _this.stepperOptions = {
            stepperName: 'request_qr_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['request_qr_code_step1'],
            group: _this.formGroup,
            submitOptions: {
              group: _this.formGroup,
              submitServiceUrl: '',
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.generateQRCode(response));
                  });
                },
                executionClass: _this,
                params: [_this]
              },
              extraParams: {
                actionType: 'save'
              }
            },
            requestObject: _this.qrCodeVO
          };
          _this.qrCodeDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'qr_code_details_key',
            //iconName: 'document',
            expanded: true
          };
          _this.qrCodeChargesPanelOptions = {
            isExpandable: true,
            labelKey: 'qr_code_charges_key',
            //iconName: 'document',
            expanded: true
          };
          _this.accountNoOptions = {
            labelKey: 'account_no_key',
            placeHolder: 'select_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            purpose: 'QR',
            requestObject: _this.qrCodeVO
          };
          _this.qrComplexAmountOption = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'qrCurrency'
            },
            amountOptions: {
              labelKey: 'amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'transactionAmount',
              group: _this.formGroup,
              decimalPoints: 3
            }
          };
          _this.purposeOptions = {
            labelKey: 'purpose_key',
            placeHolder: 'enter_purpose_key',
            group: _this.formGroup,
            fcName: 'purpose'
          };
          _this.chargesAccountListOptions = {
            labelKey: 'charges_account_key',
            placeHolder: 'select_charges_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'chargesAccount',
            accountType: 'G',
            fromTo: null,
            requestObject: _this.qrCodeVO,
            currency: ''
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
                labelKey: 'charges_amount_key',
                placeHolder: 'enter_charges_amount_key',
                fcName: 'chargesAmount',
                group: _this.formGroup,
                decimalPoints: 2
              }
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'exchange_currency_key',
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
            requestObject: _this.qrCodeVO,
            group: _this.formGroup
          };
          return _this;
        }

        _inherits(RequestQrPaymentPage, _omni_base_omni_base_);

        return _createClass(RequestQrPaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            _superPropGet(RequestQrPaymentPage, "init", this, 3)([]);

            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
            this.commonProv.cancelClicked.next(false);
            this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT).then(function (result) {
              if (result && result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT]) {
                _this3.commonProv.setValInsideNestedObj(_this3.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT], _this3.qrCodeVO);

                _this3.stepperOptions.requestObject[_this3.complexExchangeOptions.fromAmountOptions.amountOptions.fcName] = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CHARGES_AMOUNT];
              }
            });
            this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.cifInfo.companySettingsCO.baseCurrency, this.qrCodeVO);
            setTimeout(function () {
              _this3.stepperOptions.requestObject[_this3.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = _this3.cifInfo.companySettingsCO.baseCurrency;
            }, 1); //added by ghada, AZDB-332 for closing the screen on clicking cancel button

            this.commonProv.cancelClicked.subscribe(function (result) {
              if (result) {
                _this3.navigationServices.navigateBackward();
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(RequestQrPaymentPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
          }
        }, {
          key: "onChargesAccountChange",
          value: function onChargesAccountChange(account) {
            var _this4 = this;

            this.complexExchangeOptions.toAmountOptions.currency = account.currencyBriefNameEnglish;
            this.complexExchangeOptions.toAmountOptions.currencyCode = account.currency;
            setTimeout(function () {
              _this4.stepperOptions.requestObject[_this4.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = account.currency;
            }, 1);
          }
        }, {
          key: "generateQRCode",
          value: function generateQRCode(resp) {
            var data = {
              AccountRef: this.formGroup.controls[this.accountNoOptions.fcName].value.accountFormat + '-' + this.formGroup.controls[this.accountNoOptions.fcName].value.formattedAccount,
              AddtionalRef: 'AddRef-' + this.formGroup.controls[this.accountNoOptions.fcName].value.additionalRef,
              purposeTxtDesc: this.formGroup.controls[this.purposeOptions.fcName].value,
              transactionAmount: this.formGroup.controls[this.qrComplexAmountOption.amountOptions.fcName].value,
              currency: this.formGroup.controls[this.qrComplexAmountOption.currenciesOptions.fcName].value,
              showToOtherDetails: true,
              toAccountType: 'companyAccountTransfer',
              changeScannedDataToRO: true
            };
            this.logger.log('this.stepperOptions.requestObject', this.stepperOptions.requestObject);
            this.commonService.generateQRCode(data, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CODE_GENERATION_OPER_ID);
          }
        }, {
          key: "updateVO",
          value: function updateVO(resp) {
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QR_CODE_GENERATION_OPER_ID;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      RequestQrPaymentPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      RequestQrPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request-qr-payment',
        template: _raw_loader_request_qr_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_request_qr_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], RequestQrPaymentPage);
      /***/
    },

    /***/
    "cgDh":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/request-qr-payment/request-qr-payment.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function cgDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1ZXN0LXFyLXBheW1lbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "wlo7":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-qr-payment/request-qr-payment.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wlo7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"qrCodeDetailsPanelOptions\" id=\"qrCode_details_panel\">\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountNoOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-complex-amount id=\"charges\" [options]=\"qrComplexAmountOption\">\n      </ps-complex-amount>\n\n      <ps-input-varchar id=\"'purpose' + id\" [options]=\"purposeOptions\">\n      </ps-input-varchar>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"qrCodeChargesPanelOptions\" id=\"qrCode_charges_panel\">\n\n      <ps-complex-exchange id=\"exchange\" [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n      <ps-lookup-own-accounts id=\"chargesAccount\" [options]=\"chargesAccountListOptions\"\n        (onAccountChange)=\"onChargesAccountChange($event)\">\n      </ps-lookup-own-accounts>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=99-es5.js.map