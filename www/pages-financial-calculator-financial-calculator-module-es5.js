(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-financial-calculator-financial-calculator-module"], {
    /***/
    "/gCj":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-count/ps-input-count.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: PsInputCountComponent */

    /***/
    function _gCj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputCountComponent", function () {
        return PsInputCountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_count_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-count.component.html */
      "p2Op");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsInputCountComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsInputCountComponent(commonP, loggerP) {
          var _this;

          _classCallCheck(this, PsInputCountComponent);

          _this = _callSuper(this, PsInputCountComponent, [commonP, loggerP]);
          _this.defaultOptions = {};
          _this.decrementIconOptions = {
            iconName: 'arrow-dropdown-circle',
            iconPosition: 'end'
          };
          _this.incrementIconOptions = {
            iconName: 'arrow-dropup-circle',
            iconPosition: 'end'
          };
          _this.containerItemOptions = {// hideImageAndIconIfNotPresent: true
          };
          return _this;
        }

        _inherits(PsInputCountComponent, _src_app_commonSRC_ps);

        return _createClass(PsInputCountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.unlimitedValue = this.commonProv.translate('unlimited_key'); //Mohanad AZDB-6448 - 19112024

            this.filedCust = this.commonProv.getElementValidations(this.options.fcName);
            this.commonProv.copyObject(this.defaultOptions, this.options, false);

            if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].custMode) {
              this.defaultOptions.type = 'number';
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a, _b;

            this.checkMinMax();

            if (this.defaultValue || ((_a = this.defaultOptions.group.controls[this.defaultOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) && ((_b = this.defaultOptions.group.controls[this.defaultOptions.fcName]) === null || _b === void 0 ? void 0 : _b.value) !== this.unlimitedValue) {
              this.unSetDefaultValues();
            } else {
              this.setDefaultValues();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.options.previousValue !== undefined) {
              this.defaultOptions = changes.options.currentValue;
              this.checkMinMax();
            }
          }
        }, {
          key: "doCrements",
          value: function doCrements(type) {
            var _a, _b;

            var countValue = type === 'decrement' ? this.currentInputValue - 1 : this.currentInputValue + 1;

            if (!this.hideDefaultOptions) {
              if (this.defaultValue !== undefined && src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].parseInt(JSON.parse(this.defaultValue).value) !== 0) {
                this.currentInputValue = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].parseInt(JSON.parse(this.defaultValue).value);
                countValue = type === 'decrement' ? this.currentInputValue - 1 : this.currentInputValue + 1;
              }

              this.unSetDefaultValues();
            }

            if (typeof countValue === 'number' && countValue >= this.minValue && countValue <= this.maxValue) {
              this.currentInputValue = countValue;

              if (this.currentInputValue === this.minValue) {
                this.decrementIconOptions.isDisabled = true;
              }

              if (this.currentInputValue === this.maxValue) {
                this.incrementIconOptions.isDisabled = true;
              }

              (_a = this.defaultOptions.group.controls[this.options.fcName]) === null || _a === void 0 ? void 0 : _a.setValue(this.currentInputValue);
            } else if (typeof countValue === 'number') {
              if (countValue >= this.maxValue) {
                this.currentInputValue = this.maxValue;
                this.decrementIconOptions.isDisabled = false;
                this.incrementIconOptions.isDisabled = true;
              } else {
                this.currentInputValue = this.minValue;
                this.decrementIconOptions.isDisabled = true;
                this.incrementIconOptions.isDisabled = false;
              }

              (_b = this.defaultOptions.group.controls[this.options.fcName]) === null || _b === void 0 ? void 0 : _b.setValue(this.currentInputValue);
            }
          }
        }, {
          key: "onEmptyCounter",
          value: function onEmptyCounter(value) {
            if (value === '') {
              this.setDefaultValues();
            }
          }
        }, {
          key: "checkMinMax",
          value: function checkMinMax() {
            var _a, _b, _c;

            this.defaultValue = (_a = this.filedCust) === null || _a === void 0 ? void 0 : _a.DEFAULT_VALUE;
            this.minValue = ((_b = this.filedCust) === null || _b === void 0 ? void 0 : _b.MIN_VALUE) || 0;
            this.maxValue = ((_c = this.filedCust) === null || _c === void 0 ? void 0 : _c.MAX_VALUE) || Infinity;
          }
        }, {
          key: "handleValuesDisplay",
          value: function handleValuesDisplay() {
            var _a, _b;

            this.currentInputValue = +((_a = this.defaultOptions.group.controls[this.defaultOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) || (this.defaultValue ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].parseInt(JSON.parse(this.defaultValue).value) : this.minValue);
            (_b = this.defaultOptions.group.controls[this.defaultOptions.fcName]) === null || _b === void 0 ? void 0 : _b.setValue(this.hideDefaultOptions ? this.currentInputValue : this.defaultValue ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].parseInt(JSON.parse(this.defaultValue).value) : this.unlimitedValue);
          }
        }, {
          key: "setDefaultValues",
          value: function setDefaultValues() {
            var _this2 = this;

            this.hideDefaultOptions = false;
            this.defaultOptions.type = '';
            this.handleValuesDisplay(); //Jira #9444 - Wait for Angular to change the type before setting the new value of new type

            Promise.resolve().then(function () {
              _this2.handleValuesDisplay();
            });
          }
        }, {
          key: "unSetDefaultValues",
          value: function unSetDefaultValues() {
            var _this3 = this;

            this.hideDefaultOptions = true;
            this.defaultOptions.type = 'number'; //Jira #9444 - Wait for Angular to change the type before setting the new value of new type

            Promise.resolve().then(function () {
              _this3.handleValuesDisplay();
            });
          }
        }, {
          key: "onDefaultValueChange",
          value: function onDefaultValueChange(val) {
            if (this.hideDefaultOptions && val.newValue === this.unlimitedValue) {
              this.setDefaultValues();
            } else if (typeof val.newValue === 'number') {
              this.unSetDefaultValues();
            }

            this.onPsChange.emit(val.newValue);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_3__["PsKeyinInputComponent"]);

      PsInputCountComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }];
      };

      PsInputCountComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PsInputCountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-input-count',
        template: _raw_loader_ps_input_count_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])], PsInputCountComponent);
      /***/
    },

    /***/
    "Adfr":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-count/ps-input-count.component.module.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: PsInputCountComponentModule */

    /***/
    function Adfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputCountComponentModule", function () {
        return PsInputCountComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_input_count_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-input-count.component */
      "/gCj");

      var PsInputCountComponentModule = /*#__PURE__*/_createClass(function PsInputCountComponentModule() {
        _classCallCheck(this, PsInputCountComponentModule);
      });

      PsInputCountComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_input_count_component__WEBPACK_IMPORTED_MODULE_4__["PsInputCountComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]],
        exports: [_ps_input_count_component__WEBPACK_IMPORTED_MODULE_4__["PsInputCountComponent"]],
        entryComponents: [_ps_input_count_component__WEBPACK_IMPORTED_MODULE_4__["PsInputCountComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputCountComponentModule);
      /***/
    },

    /***/
    "G8Iw":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-facility-amounts/ps-complex-facility-amounts.component.scss ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G8Iw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWZhY2lsaXR5LWFtb3VudHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "KcKZ":
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-product-types/ps-dropdown-product-types.component.html ***!
      \*****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KcKZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"selectDropDownChange($event)\">\r\n</ps-select-dropdown>";
      /***/
    },

    /***/
    "MulX":
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-financial-calculator/ps-complex-financial-calculator.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: PsComplexFinancialCalculatorComponent */

    /***/
    function MulX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexFinancialCalculatorComponent", function () {
        return PsComplexFinancialCalculatorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_financial_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-financial-calculator.component.html */
      "PmAu");
      /* harmony import */


      var _ps_complex_financial_calculator_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-financial-calculator.component.scss */
      "ebse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author Aftab.Ali
       * @since 20/11/2019
       * @edited Heba.Hassan
       *
       * <p> PsComplexFinancialCalculatorComponent is a complex component composed for financial calculations</p>
       */


      var PsComplexFinancialCalculatorComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsComplexFinancialCalculatorComponent(commonService, omniPull, logger) {
          var _this4;

          _classCallCheck(this, PsComplexFinancialCalculatorComponent);

          _this4 = _callSuper(this, PsComplexFinancialCalculatorComponent, [commonService, logger]);
          _this4.omniPull = omniPull;
          _this4.productTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this4.currencyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this4.amountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          return _this4;
        }

        _inherits(PsComplexFinancialCalculatorComponent, _src_app_commonSRC_ps2);

        return _createClass(PsComplexFinancialCalculatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexFinancialCalculatorComponent, "ngOnInit", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.options.numberOfInstallmentsCountOptions.fcName], 0);
          }
        }, {
          key: "onProductChange",
          value: function onProductChange(value) {
            if (value && value.selectedObj) {
              this.productTypeChange.emit(value);
            }
          }
        }, {
          key: "onAmountChanged",
          value: function onAmountChanged(value) {
            if (value) {
              this.amountChange.emit(value);
            }
          }
        }, {
          key: "onCurrencyChange",
          value: function onCurrencyChange(value) {
            if (value) {
              this.currencyChange.emit(value);
            }
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsComplexFinancialCalculatorComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsComplexFinancialCalculatorComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        productTypeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        currencyChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        amountChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsComplexFinancialCalculatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-financial-calculator',
        template: _raw_loader_ps_complex_financial_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_financial_calculator_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsComplexFinancialCalculatorComponent);
      /***/
    },

    /***/
    "Ngnl":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ngnl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OAwJ":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-contact-info/ps-complex-contact-info.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: PscomplexContactInfoComponent */

    /***/
    function OAwJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PscomplexContactInfoComponent", function () {
        return PscomplexContactInfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_contact_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-contact-info.component.html */
      "ufxe");
      /* harmony import */


      var _ps_complex_contact_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-contact-info.component.scss */
      "yJHV");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PscomplexContactInfoComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PscomplexContactInfoComponent() {
          _classCallCheck(this, PscomplexContactInfoComponent);

          return _callSuper(this, PscomplexContactInfoComponent, arguments);
        }

        _inherits(PscomplexContactInfoComponent, _src_app_commonSRC_ps3);

        return _createClass(PscomplexContactInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_3__["PsBaseFieldComponent"]);

      PscomplexContactInfoComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      PscomplexContactInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'ps-complex-contact-info',
        template: _raw_loader_ps_complex_contact_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_contact_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PscomplexContactInfoComponent);
      /***/
    },

    /***/
    "OEFQ":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-facility-amounts/ps-complex-facility-amounts.component.module.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsComplexFacilityAmountsComponentModule */

    /***/
    function OEFQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexFacilityAmountsComponentModule", function () {
        return PsComplexFacilityAmountsComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_complex_facility_amounts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-complex-facility-amounts.component */
      "wKLI");

      var PsComplexFacilityAmountsComponentModule = /*#__PURE__*/_createClass(function PsComplexFacilityAmountsComponentModule() {
        _classCallCheck(this, PsComplexFacilityAmountsComponentModule);
      });

      PsComplexFacilityAmountsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_facility_amounts_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexFacilityAmountsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_complex_facility_amounts_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexFacilityAmountsComponent"]],
        entryComponents: [_ps_complex_facility_amounts_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexFacilityAmountsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexFacilityAmountsComponentModule);
      /***/
    },

    /***/
    "OzHP":
    /*!********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: PsInputEmailComponentModule */

    /***/
    function OzHP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputEmailComponentModule", function () {
        return PsInputEmailComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-input-email.component */
      "P7Z/");

      var PsInputEmailComponentModule = /*#__PURE__*/_createClass(function PsInputEmailComponentModule() {
        _classCallCheck(this, PsInputEmailComponentModule);
      });

      PsInputEmailComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        entryComponents: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputEmailComponentModule);
      /***/
    },

    /***/
    "P7Z/":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: PsInputEmailComponent */

    /***/
    function P7Z_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputEmailComponent", function () {
        return PsInputEmailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-email.component.html */
      "gSeR");
      /* harmony import */


      var _ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-email.component.scss */
      "Ngnl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsInputEmailComponent = /*#__PURE__*/function (_src_app_commonSRC_ps4) {
        function PsInputEmailComponent(commonP, loggerP) {
          var _this5;

          _classCallCheck(this, PsInputEmailComponent);

          _this5 = _callSuper(this, PsInputEmailComponent, [commonP, loggerP]);
          _this5.mainOptions = {};
          return _this5;
        }

        _inherits(PsInputEmailComponent, _src_app_commonSRC_ps4);

        return _createClass(PsInputEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mainOptions = this.options;
            this.mainOptions.type = 'email';
            this.mainOptions.iconOptions = {
              iconName: 'input-mail'
            };
          }
        }, {
          key: "onChangeEmail",
          value: function onChangeEmail($event) {
            this.onPsChange.emit($event);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"]);

      PsInputEmailComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsInputEmailComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-email',
        template: _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsInputEmailComponent);
      /***/
    },

    /***/
    "PmAu":
    /*!********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-financial-calculator/ps-complex-financial-calculator.component.html ***!
      \********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PmAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-financial-calculator\">\n\n    <ps-dropdown-product-types [id]=\"id\" [options]=\"options.productTypesOptions\" (onPsChange)=\"onProductChange($event)\">\n    </ps-dropdown-product-types>\n\n\n\n    <ps-complex-amount [options]=\"options.complexAmountOptions\" (onCurrencyChange)=\"onCurrencyChange($event)\"\n        (onAmountChanged)=\"onAmountChanged($event) \"></ps-complex-amount>\n    <ps-label [options]=\" options.amountLabelOptions\"></ps-label>\n\n\n    <ps-input-amount *ngIf=\"options.downPaymentExists\" [id]=\"id + '_amount'\" [options]=\"options.downPaymentOptions\">\n    </ps-input-amount>\n    <ps-label [options]=\" options.paymentsLabelOptions \"></ps-label>\n\n\n\n    <ps-input-count [options]=\"options.numberOfInstallmentsCountOptions\"></ps-input-count>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "XQ+3":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-contact-info/ps-complex-contact-info.component.module.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: PscomplexContactInfoComponentModule */

    /***/
    function XQ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PscomplexContactInfoComponentModule", function () {
        return PscomplexContactInfoComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var _ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-email/ps-input-email.module */
      "OzHP");
      /* harmony import */


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_complex_contact_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ps-complex-contact-info.component */
      "OAwJ");

      var PscomplexContactInfoComponentModule = /*#__PURE__*/_createClass(function PscomplexContactInfoComponentModule() {
        _classCallCheck(this, PscomplexContactInfoComponentModule);
      });

      PscomplexContactInfoComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_ps_complex_contact_info_component__WEBPACK_IMPORTED_MODULE_7__["PscomplexContactInfoComponent"]],
        exports: [_ps_complex_contact_info_component__WEBPACK_IMPORTED_MODULE_7__["PscomplexContactInfoComponent"]],
        entryComponents: [_ps_complex_contact_info_component__WEBPACK_IMPORTED_MODULE_7__["PscomplexContactInfoComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], _ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponentModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputVarcharComponentModule"], _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_3__["PsEntityPhoneNumberComponentModule"]]
      })], PscomplexContactInfoComponentModule);
      /***/
    },

    /***/
    "bBwV":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-financial-calculator/ps-complex-financial-calculator.component.module.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: PsComplexFinancialCalculatorComponentModule */

    /***/
    function bBwV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexFinancialCalculatorComponentModule", function () {
        return PsComplexFinancialCalculatorComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_keyin_input_ps_input_count_ps_input_count_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-count/ps-input-count.component.module */
      "Adfr");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_product_types_ps_dropdown_product_types_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-product-types/ps-dropdown-product-types.component.module */
      "kq2N");
      /* harmony import */


      var _ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../ps-complex-amount/ps-complex-amount.component.module */
      "Uxj/");
      /* harmony import */


      var _ps_complex_financial_calculator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ps-complex-financial-calculator.component */
      "MulX");

      var PsComplexFinancialCalculatorComponentModule = /*#__PURE__*/_createClass(function PsComplexFinancialCalculatorComponentModule() {
        _classCallCheck(this, PsComplexFinancialCalculatorComponentModule);
      });

      PsComplexFinancialCalculatorComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_financial_calculator_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexFinancialCalculatorComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_select_dropdown_ps_dropdown_product_types_ps_dropdown_product_types_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDropdownProductTypesComponentModule"], _ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexAmountComponentModule"], _ps_keyin_input_ps_input_count_ps_input_count_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputCountComponentModule"]],
        exports: [_ps_complex_financial_calculator_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexFinancialCalculatorComponent"]],
        entryComponents: [_ps_complex_financial_calculator_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexFinancialCalculatorComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexFinancialCalculatorComponentModule);
      /***/
    },

    /***/
    "bSSb":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-product-types/ps-dropdown-product-types.component.scss ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bSSb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1wcm9kdWN0LXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "d120":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/financial-calculator/financial-calculator.module.ts ***!
      \***************************************************************************/

    /*! exports provided: FinancialCalculatorPageModule */

    /***/
    function d120(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinancialCalculatorPageModule", function () {
        return FinancialCalculatorPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_contact_info_ps_complex_contact_info_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-contact-info/ps-complex-contact-info.component.module */
      "XQ+3");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_facility_amounts_ps_complex_facility_amounts_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-facility-amounts/ps-complex-facility-amounts.component.module */
      "OEFQ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_financial_calculator_ps_complex_financial_calculator_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-financial-calculator/ps-complex-financial-calculator.component.module */
      "bBwV");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _financial_calculator_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./financial-calculator.page */
      "nvBi");

      var routes = [{
        path: '',
        component: _financial_calculator_page__WEBPACK_IMPORTED_MODULE_10__["FinancialCalculatorPage"]
      }];

      var FinancialCalculatorPageModule = /*#__PURE__*/_createClass(function FinancialCalculatorPageModule() {
        _classCallCheck(this, FinancialCalculatorPageModule);
      });

      FinancialCalculatorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_financial_calculator_ps_complex_financial_calculator_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexFinancialCalculatorComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_facility_amounts_ps_complex_facility_amounts_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexFacilityAmountsComponentModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateFormModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_contact_info_ps_complex_contact_info_component_module__WEBPACK_IMPORTED_MODULE_3__["PscomplexContactInfoComponentModule"]],
        declarations: [_financial_calculator_page__WEBPACK_IMPORTED_MODULE_10__["FinancialCalculatorPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], FinancialCalculatorPageModule);
      /***/
    },

    /***/
    "ebse":
    /*!******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-financial-calculator/ps-complex-financial-calculator.component.scss ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ebse(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWZpbmFuY2lhbC1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "gSeR":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gSeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-input [id]=\"id\" [options]=\"mainOptions\"  (onPsChange)=\"onChangeEmail($event)\"></ps-keyin-input>\n";
      /***/
    },

    /***/
    "kq2N":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-product-types/ps-dropdown-product-types.component.module.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsDropdownProductTypesComponentModule */

    /***/
    function kq2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownProductTypesComponentModule", function () {
        return PsDropdownProductTypesComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_dropdown_product_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-product-types.component */
      "xLEv");

      var PsDropdownProductTypesComponentModule = /*#__PURE__*/_createClass(function PsDropdownProductTypesComponentModule() {
        _classCallCheck(this, PsDropdownProductTypesComponentModule);
      });

      PsDropdownProductTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_product_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownProductTypesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]],
        exports: [_ps_dropdown_product_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownProductTypesComponent"]],
        entryComponents: [_ps_dropdown_product_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownProductTypesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownProductTypesComponentModule);
      /***/
    },

    /***/
    "p2Op":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-count/ps-input-count.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function p2Op(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-item class=\"ps-field-item-wrapper main-container col-12\" *ngIf=\"(filedCust.IS_VISIBLE != 0 || custMode)\"\r\n    [options]=\"containerItemOptions\">\r\n\r\n    <div class=\"inputDefaultOptions\" (click)=\"unSetDefaultValues()\"\r\n        [ngClass]=\"{'showDefaultValue':!hideDefaultOptions, 'showCountInput': hideDefaultOptions}\">\r\n        <ps-keyin-input [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"onDefaultValueChange($event)\"\r\n            (onPsEmpty)=\"onEmptyCounter($event)\" onwheel=\"return false;\">\r\n        </ps-keyin-input>\r\n    </div>\r\n\r\n    <div class=\"count-span\">\r\n        <ps-action-icon id=\"countMinus\" name=\"arrow-dropdown-circle\" [options]=\"decrementIconOptions\"\r\n            class=\"count-minus\" (click)=\"doCrements('decrement')\"></ps-action-icon>\r\n        <ps-action-icon id=\"countAdd\" name=\"arrow-dropup-circle\" [options]=\"incrementIconOptions\" class=\"count-add\"\r\n            (click)=\"doCrements('increment')\"></ps-action-icon>\r\n    </div>\r\n\r\n</ps-container-item>";
      /***/
    },

    /***/
    "rfAc":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-facility-amounts/ps-complex-facility-amounts.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rfAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"6\" size=\"12\">\n        <ps-input-amount [id]=\"id + '_amount1'\" [options]=\"options.downPaymentOptions\" (focusout)=\"onChangeFacilityAmount()\"></ps-input-amount>\n      </ion-col>\n      <ion-col size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-sm=\"6\" size=\"12\">\n        <ps-input-amount [id]=\"id + '_amount2'\" [options]=\"options.financeAmountOptions\"></ps-input-amount>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ps-container-complex>";
      /***/
    },

    /***/
    "ufxe":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-contact-info/ps-complex-contact-info.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ufxe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-contact-info\">\r\n\r\n    <ps-input-varchar [options]=\"options.fullNameOptions\"></ps-input-varchar>\r\n\r\n\r\n    <ps-input-email [options]=\"options.emailOptions\"></ps-input-email>\r\n\r\n\r\n    <ps-entity-phone-number [options]=\"options.phoneNumberOptions\"></ps-entity-phone-number>\r\n\r\n</ps-container-complex>";
      /***/
    },

    /***/
    "wKLI":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-facility-amounts/ps-complex-facility-amounts.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsComplexFacilityAmountsComponent */

    /***/
    function wKLI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexFacilityAmountsComponent", function () {
        return PsComplexFacilityAmountsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_facility_amounts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-facility-amounts.component.html */
      "rfAc");
      /* harmony import */


      var _ps_complex_facility_amounts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-facility-amounts.component.scss */
      "G8Iw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /**
       * @author Aftab.Ali
       * @since 07/11/2019
       *
       * <p> PsComplexFacilityAmountsComponent is a complex component composed of three other components (ps-input-amount)</p>
       */


      var PsComplexFacilityAmountsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps5) {
        function PsComplexFacilityAmountsComponent(commonService, logger) {
          var _this6;

          _classCallCheck(this, PsComplexFacilityAmountsComponent);

          _this6 = _callSuper(this, PsComplexFacilityAmountsComponent, [commonService, logger]);
          _this6.options = {
            downPaymentOptions: {},
            financeAmountOptions: {}
          };
          return _this6;
        }

        _inherits(PsComplexFacilityAmountsComponent, _src_app_commonSRC_ps5);

        return _createClass(PsComplexFacilityAmountsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexFacilityAmountsComponent, "ngOnInit", this, 3)([]);
          }
        }, {
          key: "onChangeFacilityAmount",
          value: function onChangeFacilityAmount() {}
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexFacilityAmountsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsComplexFacilityAmountsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexFacilityAmountsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-facility-amounts',
        template: _raw_loader_ps_complex_facility_amounts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_facility_amounts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsComplexFacilityAmountsComponent);
      /***/
    },

    /***/
    "xLEv":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-product-types/ps-dropdown-product-types.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: PsDropdownProductTypesComponent */

    /***/
    function xLEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownProductTypesComponent", function () {
        return PsDropdownProductTypesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_product_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-product-types.component.html */
      "KcKZ");
      /* harmony import */


      var _ps_dropdown_product_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-product-types.component.scss */
      "bSSb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author Aftab.Ali
       * @since 07/11/2019
       *
       * <p> PsDropdownProductTypesComponent will fetch the list of product types from server</p>
       */


      var PsDropdownProductTypesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps6) {
        function PsDropdownProductTypesComponent(commonService, logger, omniPullService) {
          var _this7;

          _classCallCheck(this, PsDropdownProductTypesComponent);

          _this7 = _callSuper(this, PsDropdownProductTypesComponent, [commonService, logger]);
          _this7.omniPullService = omniPullService;
          _this7.options = {};
          _this7.defaultOptions = {};
          _this7.cancelPreviousRequest = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          return _this7;
        }

        _inherits(PsDropdownProductTypesComponent, _src_app_commonSRC_ps6);

        return _createClass(PsDropdownProductTypesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.loadProductTypes();
          }
          /**
           * populating product types fetched from server
           */

        }, {
          key: "loadProductTypes",
          value: function loadProductTypes(dataSrc, appType) {
            var _this8 = this;

            var productClassesList = [];
            var paramData = {}; // Cancel the previous request

            this.cancelPreviousRequest.next(); // Create a new Subject for the current request

            this.cancelPreviousRequest = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();

            if (appType) {
              paramData = {
                appType: appType
              };
            }

            if (dataSrc) {
              this.defaultOptions.listOfOptions = this.defaultOptions.listOfOptions || [];
              productClassesList = dataSrc;
              this.populateProductTypes(productClassesList);
            } else {
              this.omniPullService.returnProductClasses(paramData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelPreviousRequest)).subscribe(function (productTypes) {
                _this8.defaultOptions.listOfOptions = [];

                if (productTypes && productTypes.gridModel && productTypes.gridModel.length > 0) {
                  productClassesList = productTypes.gridModel;
                }

                _this8.populateProductTypes(productClassesList);
              }, function (error) {
                _this8.logger.error('Error: While fetching Product types in PsDropdownProductTypesComponent : ', error);
              });
            }
          }
        }, {
          key: "populateProductTypes",
          value: function populateProductTypes(productClassesList) {
            var _iterator = _createForOfIteratorHelper(productClassesList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;
                var productType = {
                  itemValue: iterator.productClassCode,
                  description: iterator.briefName,
                  selectedObj: iterator
                };
                this.defaultOptions.listOfOptions.push(productType);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "selectDropDownChange",
          value: function selectDropDownChange(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["PsSelectDropdownComponent"]);

      PsDropdownProductTypesComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]
        }];
      };

      PsDropdownProductTypesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownProductTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-product-types',
        template: _raw_loader_ps_dropdown_product_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_product_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]])], PsDropdownProductTypesComponent);
      /***/
    },

    /***/
    "yJHV":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-contact-info/ps-complex-contact-info.component.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yJHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWNvbnRhY3QtaW5mby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-financial-calculator-financial-calculator-module-es5.js.map