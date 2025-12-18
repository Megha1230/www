(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45], {
    /***/
    "PrBY":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financial-calculator/financial-calculator.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PrBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n        <ps-container-panel [options]=\"panelOptions1Step2\" id=\"financial_calc_panel1\">\n            <ps-complex-financial-calculator [options]=\"financialCalculatorOptions\"\n                (productTypeChange)=\"onProductChange($event)\" (amountChange)=\"onAmountChange($event)\"\n                (currencyChange)=\"currencyChange($event)\">\n            </ps-complex-financial-calculator>\n\n\n\n        </ps-container-panel>\n\n    </ps-form-step>\n    <ps-form-step step2 *ngIf=\"preLoginCalc\" [id]=\"stepperOptions.namesofSteps[1]\">\n        <ng-container *psStep=\"'step2'\">\n            <ps-container-panel [options]=\"panelOptionsStep1\" id=\"financial_calc_panel2\">\n                <ps-complex-contact-info id=\"ps-complex-contact-info\" [options]=\"contactInfoOptions\">\n                </ps-complex-contact-info>\n            </ps-container-panel>\n        </ng-container>\n    </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "ZWsR":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/financial-calculator/financial-calculator.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function ZWsR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbmFuY2lhbC1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJmaW5hbmNpYWwtY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */";
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
            var _this = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this2 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this2.disableForm(_this2.baseFormGroup);

                _this2.isPageDisabled = true;
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
    "nvBi":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/financial-calculator/financial-calculator.page.ts ***!
      \*************************************************************************/

    /*! exports provided: FinancialCalculatorPage */

    /***/
    function nvBi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinancialCalculatorPage", function () {
        return FinancialCalculatorPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_financial_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./financial-calculator.page.html */
      "PrBY");
      /* harmony import */


      var _financial_calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./financial-calculator.page.scss */
      "ZWsR");
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


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
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


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /** @name financial-calculator
       *  @author Heba.Hassan
       *  @description Display the financial calculator in pre login an post login
       */


      var FinancialCalculatorPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function FinancialCalculatorPage(datepipe, common, omniPull, logger, navService) {
          var _this3;

          _classCallCheck(this, FinancialCalculatorPage);

          _this3 = _callSuper(this, FinancialCalculatorPage);
          _this3.datepipe = datepipe;
          _this3.common = common;
          _this3.omniPull = omniPull;
          _this3.logger = logger;
          _this3.navService = navService;
          _this3.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
          _this3.productClass = {};
          _this3.amountValue = 0;
          _this3.ownFinancialCalculatorVO = {};
          _this3.oldSelectedProduct = null;
          return _this3;
        }

        _inherits(FinancialCalculatorPage, _omni_base_omni_base_);

        return _createClass(FinancialCalculatorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(FinancialCalculatorPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; //this.cifInfo = this.common.session.getValueOf(ConstantCommon.USERINFO);

            this.screenOperId = _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].oper_ID;
            this.screenOperId == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].PRE_LOGIN_FINANCIAL_CALCULATOR_OPER ? this.preLoginCalc = true : false;
            this.loadOptions();
          }
        }, {
          key: "loadOptions",
          value: function loadOptions() {
            this.panelOptionsStep1 = {
              isExpandable: true,
              labelKey: 'contact_information_key',
              iconName: 'contact',
              expanded: true
            };
            this.panelOptions1Step2 = {
              isExpandable: true,
              labelKey: 'financing_calculator_key',
              iconName: 'calculator',
              expanded: true
            };
            this.contactInfoOptions = {
              emailOptions: {
                group: this.formGroup,
                fcName: 'email',
                labelKey: 'email_key',
                placeHolder: 'enter_email_key'
              },
              fullNameOptions: {
                labelKey: 'full_name_key',
                placeHolder: 'full_name_key',
                group: this.formGroup,
                fcName: 'fullName',
                iconOptions: {
                  iconName: 'user3'
                }
              },
              phoneNumberOptions: {
                labelKey: 'phone_number_key',
                fcName: 'phoneNumber',
                placeHolder: 'phone_number_key',
                group: this.formGroup
              }
            };
            this.financialCalculatorOptions = {
              productTypesOptions: {
                labelKey: 'product_type_key',
                placeHolder: 'product_type_key',
                fcName: 'productType',
                group: this.formGroup
              },
              group: this.formGroup,
              complexAmountOptions: {
                showLimitLabel: false,
                currency: '',
                currenciesOptions: {
                  labelKey: 'currency_key',
                  placeHolder: 'select_currency_key',
                  fcName: 'dealCurrency',
                  group: this.formGroup
                },
                amountOptions: {
                  labelKey: 'amount_key',
                  placeHolder: 'enter_amount_key',
                  fcName: 'dealAmount',
                  group: this.formGroup,
                  decimalPoints: 3
                }
              },
              downPaymentOptions: {
                fcName: 'downPayment',
                group: this.formGroup,
                labelKey: 'down_payment_key',
                placeHolder: 'enter_down_payment_key',
                decimalPoints: 2
              },
              numberOfInstallmentsCountOptions: {
                fcName: 'numberOfPayments',
                group: this.formGroup,
                labelKey: 'no_of_installments_key',
                forceTriggerChange: true
              },
              paymentsLabelOptions: {
                previewMode: true
              },
              amountLabelOptions: {
                previewMode: true
              }
            };
            this.stepperOptions = {
              stepperName: 'finan_calc_stepper',
              isHorizontalStepper: true,
              numberOfSteps: this.preLoginCalc ? 2 : 1,
              namesofSteps: ['financing_calculator_key', 'contact_information_key'],
              group: this.formGroup,
              requestObject: this.ownFinancialCalculatorVO,
              submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.FinancialCalculator,
                postCallFunction: {
                  func: function func(response) {
                    var _this4 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this4.executionClass.navigateToReport(response));
                    });
                  },
                  executionClass: this,
                  params: [this]
                },
                preCallFunction: {
                  func: function func(response) {
                    var _this5 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this5.executionClass.updateCalculatorVO(response));
                    });
                  },
                  executionClass: this,
                  params: [this]
                }
              }
            };
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(FinancialCalculatorPage, "ionViewDidEnter", this, 3)([]);
          }
        }, {
          key: "navigateToReport",
          value: function navigateToReport(params) {
            var pram = params.commonResponseList;

            if (_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].oper_ID === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].DEAL_REQUEST_OPER) {
              pram['dynamicOperId'] = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].DEAL_REQUEST_OPER;
            } //Makki: #6269 if Coming from Prelogin Calc, Override operId of login screen. 


            if (this.preLoginCalc) {
              pram['overrideOperId'] = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].FINANCING_CALC_REPORT;
            }

            var page = {
              operID: this.screenOperId,
              component: 'financing-calculator-report',
              param: pram
            };
            this.navService.openPage(page);
          }
        }, {
          key: "onProductChange",
          value: function onProductChange(value) {
            if (value && value.selectedObj && value.selectedObj.productClassCode !== this.productClass.productClassCode) {
              this.productClass = value.selectedObj;
              this.formGroup.controls[this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName].setValue(this.productClass.noOfPayment ? this.productClass.noOfPayment.toString() : '0');
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.minNoOfRepayments);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.minNoOfRepayments);
              this.financialCalculatorOptions.paymentsLabelOptions.labelKey = this.common.translate('down_payment_key') + ' ' + value.selectedObj.downPayment + '%';

              if (this.productClass.minFinancingAmt !== undefined && this.productClass.minFinancingAmt > 0) {
                this.financialCalculatorOptions.amountLabelOptions.labelKey = this.common.translate('min_amount_key') + ' ' + this.productClass.minFinancingAmt;
              }

              if (this.productClass.maxFinancingAmt !== undefined && this.productClass.maxFinancingAmt < 999999999999) {
                this.financialCalculatorOptions.amountLabelOptions.labelKey += ' ' + this.common.translate('max_amount_key') + ' ' + this.productClass.maxFinancingAmt;
              }

              this.financialCalculatorOptions.downPaymentExists = value.selectedObj.downPayment && value.selectedObj.downPayment > 0 ? true : false; // set validation form no of installments

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.maxNoOfRepayments);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.minNoOfRepayments); // set validation for min/max financing amount

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName], this.productClass.maxFinancingAmt);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName], this.productClass.minFinancingAmt);
              /* To clear fields when product class changed */
              // Edited by ahmed regarding TP#1402866 check on oldSelectedProduct
              //to prevent clearing amount field if it is entered before selecting any product type
              //and in case opening deal request from saved drafts

              if (this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName] && this.oldSelectedProduct) {
                this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName].setValue('');
                this.amountValue = 0;
              }

              if (this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName]) {
                this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName].setValue(0);
              }

              if (this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.currenciesOptions.fcName]) {
                this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.currenciesOptions.fcName].setValue(null);
              }
            }

            this.oldSelectedProduct = this.formGroup.controls[this.financialCalculatorOptions.productTypesOptions.fcName].value;
          } // the event trigger when change the amount to validate the financing Amount and the downpayment value

        }, {
          key: "onAmountChange",
          value: function onAmountChange(event) {
            if (event && event.amount && this.amountValue != event.amount) {
              this.amountValue = event.amount;

              if (event.amount && this.productClass && this.productClass.downPayment > 0) {
                var minDownPayment = event.amount * this.productClass.downPayment / 100;

                if (this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName]) {
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.downPaymentOptions.fcName], event.amount);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.downPaymentOptions.fcName], minDownPayment);
                  this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName].setValue(minDownPayment.toString());
                }
              }
            }
          } // event trigger when currancy change to add the select surruncy id to the VO object
          // temporary added till the issue of financial calc service fixed

        }, {
          key: "currencyChange",
          value: function currencyChange(event) {
            if (event && event.itemValue) {
              // set decimalpoins per currency
              if (this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName]) {
                this.financialCalculatorOptions.downPaymentOptions.decimalPoints = this.financialCalculatorOptions.complexAmountOptions.amountOptions.decimalPoints;
              }
            }
          }
        }, {
          key: "updateCalculatorVO",
          value: function updateCalculatorVO() {
            //Mohanad AZDB-6448 - 19112024
            if (this.ownFinancialCalculatorVO[this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName] == this.commonProv.translate('unlimited_key')) {
              this.commonProv.setValInsideNestedObj(this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName, 'Unlimited', this.ownFinancialCalculatorVO);
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      FinancialCalculatorPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]
        }];
      };

      FinancialCalculatorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-financial-calculator',
        template: _raw_loader_financial_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_financial_calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]])], FinancialCalculatorPage);
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
    }
  }]);
})();
//# sourceMappingURL=45-es5.js.map