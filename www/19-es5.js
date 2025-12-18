(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
    /***/
    "BcCD":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearComponent */

    /***/
    function BcCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponent", function () {
        return PsDateDayMonthYearComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-date-day-month-year.component.html */
      "Tlgk");
      /* harmony import */


      var _ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-date-day-month-year.component.scss */
      "Lb7B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-date/ps-keyin-date.component */
      "JpVU");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");

      var PsDateDayMonthYearComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsDateDayMonthYearComponent(commonProv, loggerP, events) {
          var _this;

          _classCallCheck(this, PsDateDayMonthYearComponent);

          _this = _callSuper(this, PsDateDayMonthYearComponent, [commonProv, loggerP, events]);
          _this.commonProv = commonProv;
          _this.dateOptions = {};
          _this.omniPull = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].injectionHandler(_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]);
          return _this;
        }

        _inherits(PsDateDayMonthYearComponent, _commonSRC_psComponen);

        return _createClass(PsDateDayMonthYearComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.dateOptions, this.options, false);
            var param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].preLoginResponse).parameters;
            this.dateOptions.displayFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
            this.dateOptions.pickerFormat = this.dateOptions.displayFormat;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.options && this.options.min) {
              this.dateOptions.min = this.options.min;
            }

            if (this.options && this.options.max) {
              this.dateOptions.max = this.options.max;
            }
          }
        }, {
          key: "dateChanged",
          value: function dateChanged(value) {
            this.onPsChange.emit(value);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__["PsKeyinDateComponent"]);

      PsDateDayMonthYearComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]
        }];
      };

      PsDateDayMonthYearComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDateDayMonthYearComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year',
        template: _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]])], PsDateDayMonthYearComponent);
      /***/
    },

    /***/
    "JsQt":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JsQt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n   <ng-container *ngIf=\"options?.itemList?.length > 0\">\n      <ng-container *ngFor=\"let item of options.itemList\">\n         <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions()\" [itemCard]=\"item\"\n            (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n      </ng-container>\n   </ng-container>\n</ps-template-list>";
      /***/
    },

    /***/
    "Lb7B":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lb7B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "O0aa":
    /*!****************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O0aa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1mYXYtcGF5ZWUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "RzDK":
    /*!*********************************************************!*\
      !*** ./src/app/pages/bill-payment/bill-payment.page.ts ***!
      \*********************************************************/

    /*! exports provided: BillPaymentPage */

    /***/
    function RzDK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillPaymentPage", function () {
        return BillPaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bill_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bill-payment.page.html */
      "dFa0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component */
      "/M2N");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_fav_payee_list_ps_fav_payee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component */
      "ltde");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component */
      "WAnK");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component */
      "BcCD");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");

      var BillPaymentPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function BillPaymentPage(navService, omniPull) {
          var _this2;

          _classCallCheck(this, BillPaymentPage);

          _this2 = _callSuper(this, BillPaymentPage);
          _this2.navService = navService;
          _this2.omniPull = omniPull;
          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
          _this2.billPaymentVO = {};
          _this2.selectedBillsRows = [];
          _this2.showErrorMsg = false;
          _this2.invalidBills = [];
          _this2.isStep2ComplexComponentEnabled = false;
          _this2.isNewRequest = false; // AZDB-7618 - AMANAOI250045

          _this2.isFromFavManagement = false; // AZDB-7618 - AMANAOI250045

          _this2.stepperOptions = {
            stepperName: 'bill_payment_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 3,
            namesofSteps: ['bill_payment_step1', 'bill_payment_step2', 'bill_payment_step3'],
            group: _this2.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].serviceUrl.integratedBillPaymentEndPoint,
              group: _this2.formGroup,
              preCallFunction: {
                func: function func(response) {
                  var _this3 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this3.executionClass.handleSubmitRequest(response));
                  });
                },
                params: [_this2],
                executionClass: _this2
              }
            },
            requestObject: _this2.billPaymentVO
          };
          _this2.billpaymentDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'bill_payment_details_key',
            iconName: 'document',
            expanded: true
          };
          _this2.widgetDropdownsOptions = {
            group: _this2.formGroup,
            requestObject: _this2.billPaymentVO,
            dropdowns: [{
              group: _this2.formGroup,
              fcName: 'category',
              labelKey: 'category_key',
              asyncURL: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].serviceUrl.billTypeListEndPoint,
              mapResponseProperties: {
                itemValue: 'ctsBillTypeId',
                description: 'refFieldType',
                iconName: 'refFieldType'
              },
              enablePagination: false,
              listOfOptions: [],
              requestObject: _this2.billPaymentVO
            }, {
              group: _this2.formGroup,
              fcName: 'biller',
              labelKey: 'biller_key',
              asyncURL: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].serviceUrl.billersListEndPoint,
              mapResponseProperties: {
                itemValue: 'billerCode',
                description: 'cifBillerName',
                iconName: 'providerImage'
              },
              enablePagination: false,
              listOfOptions: [],
              requestObject: _this2.billPaymentVO
            }]
          };
          _this2.headerLabelOptions = {
            translate: false
          };
          _this2.billerAccNumberOptions = {
            placeHolder: 'enter_reference_number_key',
            labelKey: 'reference_number_key',
            group: _this2.formGroup,
            fcName: 'billerAccount'
          };
          _this2.toOtherKey = 'to_other_key';
          _this2.toFavoriteKey = 'to_fav_payee_key';
          _this2.complexSegmentOptions = {
            // TP#1334175 - Pass the form group to the options object of the segment
            group: _this2.formGroup,
            segmentOptions: {
              group: _this2.formGroup,
              fcName: 'segmentBillPay',
              segmentList: [{
                selected: true,
                itemValue: _this2.toFavoriteKey,
                description: _this2.commonProv.translate(_this2.toFavoriteKey)
              }, {
                selected: true,
                itemValue: _this2.toOtherKey,
                description: _this2.commonProv.translate(_this2.toOtherKey)
              }]
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['fav_payee_segment', 'other_segment']
            }
          };
          _this2.paymentAccountListOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: _commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_8__["PsAccountsListComponent"],
            currency: 'USD',
            group: _this2.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this2.billPaymentVO
          };
          _this2.complexExchangeOptions2 = {
            editableMode: false,
            showToCurrencyOptions: false,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'fromAccountCurrency2',
                group: _this2.formGroup
              },
              amountOptions: {
                labelKey: 'bill_amount_key',
                placeHolder: 'bill_amount_key',
                fcName: 'transactionAmount2',
                group: _this2.formGroup,
                decimalPoints: 2
              }
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'currency2',
                group: _this2.formGroup
              },
              amountOptions: {
                labelKey: 'exchanged_amount_key',
                placeHolder: 'enter_exchanged_amount_key',
                fcName: 'toAmount2',
                group: _this2.formGroup,
                decimalPoints: 2
              }
            },
            requestObject: _this2.billPaymentVO,
            group: _this2.formGroup
          };
          _this2.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'fromAccountCurrency',
                group: _this2.formGroup
              },
              amountOptions: {
                labelKey: 'bill_amount_key',
                placeHolder: 'bill_amount_key',
                fcName: 'transactionAmount',
                group: _this2.formGroup,
                decimalPoints: 2
              }
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'currency',
                group: _this2.formGroup
              },
              amountOptions: {
                labelKey: 'exchanged_amount_key',
                placeHolder: 'enter_exchanged_amount_key',
                fcName: 'toAmount',
                group: _this2.formGroup,
                decimalPoints: 2
              }
            },
            requestObject: _this2.billPaymentVO,
            group: _this2.formGroup
          };
          _this2.purposeOptions = {
            labelKey: 'purpose_key',
            placeHolder: 'enter_purpose_key',
            fcName: 'purpose',
            group: _this2.formGroup
          };
          _this2.favPayeeLookupOptions = {
            fcName: 'favPayee',
            group: _this2.formGroup,
            labelKey: 'favorite_key',
            placeHolder: 'select_favorite_key',
            requestObject: _this2.billPaymentVO,
            component: src_app_commonBussinessSRC_psComponents_ps_fav_payee_list_ps_fav_payee_list_component__WEBPACK_IMPORTED_MODULE_5__["PsFavPayeeListComponent"]
          };
          _this2.gridOptions = {
            group: _this2.formGroup,
            labelKey: 'due_bills_key',
            fcName: 'multiSelectGrid',
            gridOptions: {
              url: 'rest/omniCorePull/returnBillsList',
              //url: 'rest/omniCommon/returnGridData_service',
              urlParams: {},
              defaultColDef: {
                flex: 1,
                minWidth: 180,
                sortable: false,
                resizable: true
              },
              rowSelection: 'multiple',
              applyPagination: false,
              paginationPageSize: -1,
              cacheBlockSize: 1,
              cacheOverflowSize: 10,
              maxConcurrentDatasourceRequests: 2,
              infiniteInitialRowCount: 500,
              maxBlocksInCache: 200
            },
            enableEdit: true,
            disableAddNew: true,
            enableDelete: false,
            enableSort: false,
            enableFilter: false,
            checkboxSelection: true,
            columnComponents: [{
              columnNameKey: 'bill_date_key',
              propertyName: 'BILL_DATE',
              component: _commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_9__["PsDateDayMonthYearComponent"],
              componentOptions: {},
              componentType: 'date',
              editable: false
            }, {
              columnNameKey: 'bill_number_key',
              propertyName: 'BILL_NUMBER',
              component: _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_12__["PsKeyinInputComponent"],
              componentOptions: {},
              componentType: 'input',
              editable: false
            }, {
              columnNameKey: 'product_key',
              propertyName: 'PRODUCT',
              component: _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_12__["PsKeyinInputComponent"],
              componentOptions: {},
              componentType: 'input',
              editable: false
            }, {
              columnNameKey: 'charges_key',
              propertyName: 'CHARGES',
              component: src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_6__["PsInputNumericComponent"],
              componentOptions: {},
              componentType: 'number',
              editable: false
            }, {
              columnNameKey: 'bill_amount_key',
              propertyName: 'BILL_AMOUNT',
              component: src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_6__["PsInputNumericComponent"],
              componentOptions: {},
              componentType: 'number',
              editable: true,
              onPsChange: function onPsChange(val) {
                console.log('GTest: amount value', val);

                _this2.onRowSelectionChange(val);
              }
            }]
          };
          _this2.labelChargesOptions = {
            placeHolder: 'charges_key',
            labelKey: 'charges_key',
            group: _this2.formGroup,
            fcName: 'charges'
          };
          _this2.labelTAmountOptions = {
            labelKey: 'total_bill_amount_key',
            placeHolder: 'total_bill_amount_key',
            group: _this2.formGroup,
            fcName: 'totalAmount'
          };
          _this2.billpaymentGridPanelOptions = {
            isExpandable: true,
            labelKey: 'due_bills_key',
            iconName: 'document',
            expanded: true
          };
          _this2.showFav = true;
          _this2.showGrid = false;
          _this2.nextButtonClick = 0;
          _this2.amountInfoHintOptions = {
            labelKey: 'amount_info_key',
            position: "fixed"
          };
          return _this2;
        }

        _inherits(BillPaymentPage, _omni_base_omni_base_);

        return _createClass(BillPaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c;

            _superPropGet(BillPaymentPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; //TP#1244649 - navigate to specific step

            var navigationStep = this.navService.getParamKey('navigationIndex');

            if (navigationStep !== undefined) {
              this.stepperOptions.navigationStep = navigationStep;
            }

            if (((_a = this.commonProv.getElementValidations('bill_payment_step3')) === null || _a === void 0 ? void 0 : _a.IS_VISIBLE) !== 1) {
              // AZDB-6910 - The submitServiceUrl is updated to 'submitAction' as for Grid, we are calling 'submitGrid' and 
              // the step3 was added to select due bills in Grid
              this.stepperOptions.submitOptions.submitServiceUrl = _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].serviceUrl.billPaymentEndPoint;
            }

            if (((_b = this.commonProv.getElementValidations(this.complexExchangeOptions2.fromAmountOptions.amountOptions.fcName)) === null || _b === void 0 ? void 0 : _b.IS_VISIBLE) === 1 && ((_c = this.commonProv.getElementValidations(this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName)) === null || _c === void 0 ? void 0 : _c.IS_VISIBLE) === 1) {
              this.isStep2ComplexComponentEnabled = true;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(BillPaymentPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName, this.labelChargesOptions.fcName, this.labelTAmountOptions.fcName], 1); // AZDB-6910 - Start

            if (this.isStep2ComplexComponentEnabled) {
              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions2.toAmountOptions.currenciesOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions2.toAmountOptions.amountOptions.fcName], 1); // AZDB-7588 - Start - AMANAOI250042 - 201380 - The system is not displaying the bill amount for checkers users

              if (Object.keys(this.billPaymentVO).length > 0 && (_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].isMaker || _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].isChecker)) {
                this.updateStep2AmountAndCurrency();
              } // AZDB-7588 - End - AMANAOI250042 - 201380 - The system is not displaying the bill amount for checkers users

            } // AZDB-6910 - End

          }
        }, {
          key: "onAccountChange",
          value: function onAccountChange(fromAccount) {
            if (fromAccount) {
              this.selectedFromAccount = fromAccount; // Added by Muzammil AZDB-6910 - Start

              if (this.isStep2ComplexComponentEnabled) {
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName, fromAccount.currency.toString(), this.billPaymentVO);
                this.complexExchangeOptions2.fromAmountOptions.currencyCode = Number(fromAccount.currency);
                this.complexExchangeOptions2.toAmountOptions.currencyCode = Number(fromAccount.currency);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName], 1);
              } // Added by Muzammil AZDB-6910 - End
              else {
                this.prepareGridQueryParamsAndValidations();
                this.billPaymentVO[this.complexExchangeOptions.toAmountOptions.amountOptions.fcName] = '';
                this.billPaymentVO[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = fromAccount.currency.toString();
                this.complexExchangeOptions.toAmountOptions.currencyCode = Number(fromAccount.currency);
              }
            }
          }
        }, {
          key: "showExchangeRate",
          value: function showExchangeRate() {
            var _a;

            (_a = this.exchangeChild) === null || _a === void 0 ? void 0 : _a.showToCurrency();
          }
        }, {
          key: "widgetCompleted",
          value: function widgetCompleted(event) {
            this.headerLabelOptions.labelKey = event[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].HEADER_LABEL];
            this.favPayeeLookupOptions.queryParams = {
              biller: event[this.widgetDropdownsOptions.dropdowns[1].fcName]
            };
            this.stepperOptions.stepperInstance.next.onNextClicked(event);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var sessionData = this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].preLoginResponse); // AZDB-7618 - Start- AMANAOI250045 - Dev => Muzammil Arif

            this.isFromFavManagement = this.billPaymentVO['dataSaveId'] && this.billPaymentVO[this.favPayeeLookupOptions.fcName] ? true : false;
            this.isNewRequest = this.billPaymentVO != undefined && src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__["CommonUtils"].isEmptyObject(this.billPaymentVO) ? true : false; // AZDB-7618 - End - AMANAOI250045 

            if (sessionData.companySettingsCO) {
              this.baseCurrency = sessionData.companySettingsCO.briefDesc;
              this.currencyCode = sessionData.companySettingsCO.baseCurrency;
              this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.currencyCode.toString(), this.billPaymentVO);
              this.complexExchangeOptions.fromAmountOptions.currencyCode = Number(this.currencyCode);
              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName], 1); // AZDB-6910 - Start

              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName], 1); // AZDB-6910 - End
            }
          }
        }, {
          key: "onClickSegment",
          value: function onClickSegment(event) {
            var _a;

            this.showFav = !this.showFav;

            if (event === this.toFavoriteKey && this.billPaymentVO[this.billerAccNumberOptions.fcName]) {
              this.commonProv.setValInsideNestedObj(this.billerAccNumberOptions.fcName, null, this.billPaymentVO);
            } else {
              if (this.billPaymentVO[this.favPayeeLookupOptions.fcName]) {
                (_a = this.favLookupComponentObj) === null || _a === void 0 ? void 0 : _a.reset();
              }
            }

            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.favPayeeLookupOptions.fcName, this.favPayeeLookupOptions.fcName + '_lookupKey'], event === this.toFavoriteKey ? 1 : 0);
          }
        }, {
          key: "onRowSelectionChange",
          value: function onRowSelectionChange(row) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this4 = this;

              var selectedRowFilter, unSelectedRowIndex, chargesReqParam, newCharges;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.billCharges = 0;
                    this.billTotalAmount = 0; // this.errorMsg = this.commonProv.translate('kindly_to_enter_a_valid_bill_amount_for_key');

                    selectedRowFilter = this.selectedBillsRows.filter(function (selectedRow) {
                      var _a;

                      if (selectedRow.rowIndex === (((_a = row.rowNode) === null || _a === void 0 ? void 0 : _a.data.rowIndex) || row.rowIndex)) {
                        selectedRow.BILL_AMOUNT = row.newValue || selectedRow.BILL_AMOUNT;
                        selectedRow.selected = row.selected;

                        _this4.validateBillAmount(selectedRow);

                        return selectedRow;
                      }
                    }); //in case row is newly selected, it should be added to selectedBillsRows

                    if (selectedRowFilter.length === 0 && (row.selected || ((_a = row.rowNode) === null || _a === void 0 ? void 0 : _a.selected))) {
                      this.selectedBillsRows.push(row);
                      this.validateBillAmount(row);
                    } else {
                      // in unselect case, this row should be removed from selectedBillsRows if row.selected is false
                      unSelectedRowIndex = this.selectedBillsRows.findIndex(function (item) {
                        return item.rowIndex == row.rowIndex;
                      });

                      if (unSelectedRowIndex != -1) {
                        // added by ghada, tp1544109 to handle the case where row is editted and not selected
                        this.selectedBillsRows.splice(unSelectedRowIndex, 1);
                      }
                    }

                    if (!(row.newValue && row.newValue != 0)) {
                      _context.n = 2;
                      break;
                    }

                    chargesReqParam = {
                      commonParametersList: {
                        fromAccount: this.selectedFromAccount,
                        trxAmount: row.newValue
                      }
                    };
                    this.commonProv.presentLoading();
                    _context.n = 1;
                    return this.omniPull.returnChargesDetails(chargesReqParam)["catch"](function (err) {
                      _this4.commonProv.logger.error('something went wrong', err);

                      _this4.commonProv.dismissLoading();
                    });

                  case 1:
                    newCharges = _context.v;

                    if (newCharges) {
                      //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_VALUE,['CHARGES-'+row.rowIndex], 50)
                      this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_13__["ConstantCommon"].ACTION_TYPE_VALUE, ['CHARGES-' + row.rowIndex], newCharges.totalCharge);
                      this.selectedBillsRows.filter(function (row) {
                        var _a;

                        return row.BILL_NUMBER == ((_a = selectedRowFilter[0]) === null || _a === void 0 ? void 0 : _a.BILL_NUMBER);
                      })[0] ? this.selectedBillsRows.filter(function (row) {
                        var _a;

                        return row.BILL_NUMBER == ((_a = selectedRowFilter[0]) === null || _a === void 0 ? void 0 : _a.BILL_NUMBER);
                      })[0].CHARGES = newCharges.totalCharge || 0 : null;
                    }

                    this.commonProv.dismissLoading();

                  case 2:
                    this.selectedBillsRows.forEach(function (value) {
                      if (value.selected && value.BILL_AMOUNT > 0) {
                        _this4.billCharges += Number(_this4.commonProv.valFromNestedObj('CHARGES', value));
                        _this4.billTotalAmount += Number(_this4.commonProv.valFromNestedObj('BILL_AMOUNT', value));
                      }
                    });

                    if (!_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].isChecker) {
                      //Added by ghada, BPM240065 for showig the amount as maker user entered it and not as by sent from the service in case checker 
                      this.setChargesAmount(this.billCharges, this.billTotalAmount);
                    }

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setChargesAmount",
          value: function setChargesAmount(charges, amount) {
            var totalAmount = amount !== undefined ? amount + charges : 0;
            this.commonProv.setValInsideNestedObj(this.labelChargesOptions.fcName, charges, this.billPaymentVO);
            this.commonProv.setValInsideNestedObj(this.labelTAmountOptions.fcName, amount, this.billPaymentVO);
            this.commonProv.setValInsideNestedObj(this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName, totalAmount, this.billPaymentVO);
          }
        }, {
          key: "showGridValidation",
          value: function showGridValidation(event) {
            var _this5 = this;

            this.nextButtonClick = this.nextButtonClick + 1;
            var dueBillsCtrl = this.formGroup.controls[this.gridOptions.fcName];

            if (!this.checkGridControlsValidity(dueBillsCtrl)) {
              this.validationMsg(this.nextButtonClick > 2 && event._selectedIndex >= 2);
            } else {
              this.validationMsg(false);
            } //TP#1442590 - to call exchange rate when the step 3 is loaded


            if (event._selectedIndex === 2) {
              // AZDB-6910 - below condition is added for step2 Validation - Added Complex exchange component 
              if (!this.isStep2ComplexComponentEnabled) {
                setTimeout(function () {
                  _this5.showExchangeRate();
                }, 500);
              } // AZDB-6910 - End

            }
          }
        }, {
          key: "custGridValidator",
          value: function custGridValidator() {
            var _this6 = this;

            return function (control) {
              if (!_this6.checkGridControlsValidity(control)) {
                _this6.validationMsg(control.value != null && !control.value.some(function (r) {
                  return r.BILL_NUMBER === "";
                }));

                return {
                  'equal or less than 0': true
                };
              }

              _this6.validationMsg(false);

              return null;
            };
          }
        }, {
          key: "checkGridControlsValidity",
          value: function checkGridControlsValidity(control) {
            if (this.selectedBillsRows.length == 0 || this.selectedBillsRows.some(function (r) {
              return r.BILL_AMOUNT == 0;
            }) || this.selectedBillsRows.length == 1 && this.selectedBillsRows.some(function (row) {
              return row.selected == false;
            })) {
              return false;
            }

            return true;
          }
        }, {
          key: "validationMsg",
          value: function validationMsg(showMsg) {
            this.showErrorMsg = showMsg;

            if (this.invalidBills.length > 0) {
              return this.commonProv.translate('kindly_to_enter_a_valid_amount_for_bills_key') + ': ' + this.invalidBills.filter(function (x) {
                return x !== undefined;
              }).join(',');
            } else if (this.selectedBillsRows.length == 0 || this.selectedBillsRows.length == 1 && this.selectedBillsRows.some(function (row) {
              return row.selected == false;
            })) {
              return this.commonProv.translate('value_is_missing_key');
            }

            return '';
          }
        }, {
          key: "handleSubmitRequest",
          value: function handleSubmitRequest() {
            // AZDB-7618 - Start- AMANAOI250045 - Dev => Muzammil Arif
            if (this.billPaymentVO && !src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_15__["CommonUtils"].isEmptyObject(this.billPaymentVO) && _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].isMaker) {
              if (this.isFromFavManagement && this.billPaymentVO['dataSaveId'] === this.billPaymentVO[this.favPayeeLookupOptions.fcName]['dataSaveId']) {
                delete this.billPaymentVO['dataSaveId'];
              }
            } // AZDB-7618 - End- AMANAOI250045 


            if (!this.isStep2ComplexComponentEnabled) {
              delete this.billPaymentVO["gridValue"];
              this.billPaymentVO["submitType"] = 3;
            } else {
              this.billPaymentVO["submitType"] = 1;

              if (this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.amountOptions.fcName]) {
                this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName] = this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.amountOptions.fcName];
                delete this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.amountOptions.fcName];
              }

              if (this.billPaymentVO[this.complexExchangeOptions2.toAmountOptions.amountOptions.fcName] != null && this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName]) {
                this.billPaymentVO[this.complexExchangeOptions.toAmountOptions.amountOptions.fcName] = this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName];
                delete this.billPaymentVO[this.complexExchangeOptions2.toAmountOptions.amountOptions.fcName];
              }

              if (this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName]) {
                this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName];
                this.billPaymentVO[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName];
                delete this.billPaymentVO[this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName];
              }

              if (this.billPaymentVO[this.complexExchangeOptions2.toAmountOptions.currenciesOptions.fcName]) {
                delete this.billPaymentVO[this.complexExchangeOptions2.toAmountOptions.currenciesOptions.fcName];
              }
            }
          }
        }, {
          key: "validateBillAmount",
          value: function validateBillAmount(billRow) {
            var _this7 = this;

            if (billRow.selected) {
              if (billRow.BILL_AMOUNT > 0) {
                this.invalidBills.forEach(function (billNumber, i) {
                  if (billNumber === billRow.BILL_NUMBER) _this7.invalidBills.splice(i, 1);
                });
              } else {
                this.invalidBills.some(function (billNumber) {
                  return billNumber === billRow.BILL_NUMBER;
                }) ? null : this.invalidBills.push(billRow.BILL_NUMBER);
              }
            }
          }
        }, {
          key: "onFavPayeeChange",
          value: function onFavPayeeChange(account) {
            if (account) {
              this.assignSelectedToAccount(account);
            }
          }
        }, {
          key: "onBillerAccNumberChanged",
          value: function onBillerAccNumberChanged(biilerAccount) {
            if (biilerAccount) {
              var billerDetails = {
                billerAccount: biilerAccount.newValue
              };
              this.assignSelectedToAccount(billerDetails);
            }
          }
        }, {
          key: "assignSelectedToAccount",
          value: function assignSelectedToAccount(account) {
            this.selectedToAccount = account;
            this.prepareGridQueryParamsAndValidations();
          } //added by ghada, AZDB-204 for separating the logic of handling returnBillsList service's query params with grid validations to be reused in the two cases of segment on toAccount change

        }, {
          key: "prepareGridQueryParamsAndValidations",
          value: function prepareGridQueryParamsAndValidations() {
            var _this8 = this;

            this.showGrid = false;

            if (this.selectedFromAccount && this.selectedToAccount) {
              this.gridOptions.gridOptions.urlParams = {
                submitType: 2,
                commonParametersList: {
                  fromAccount: this.selectedFromAccount,
                  toAccount: this.selectedToAccount,
                  billerId: this.formGroup.controls[this.widgetDropdownsOptions.dropdowns[1].fcName].value,
                  toFav: this.showFav
                }
              };
              this.commonProv.presentLoading();
              setTimeout(function () {
                _this8.showGrid = true;

                _this8.commonProv.addDefaultValidator(_this8.formGroup, _this8.gridOptions.fcName, _this8.commonProv.prepareValidation(false, null, null, null, null, null, null, null, [_this8.custGridValidator()]));

                _this8.commonProv.dismissLoading();
              }, 1000);
            }
          } // AZDB-7588 - Added by Muzammil

        }, {
          key: "updateStep2AmountAndCurrency",
          value: function updateStep2AmountAndCurrency() {
            if (!this.isFromFavManagement && !this.isNewRequest) {
              if (this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName] != null && this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName] != undefined) {
                var billAmount = this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName];
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions2.fromAmountOptions.amountOptions.fcName, billAmount, this.billPaymentVO);
              }

              if (this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] != null && this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] != undefined) {
                var currencyValue = this.billPaymentVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName];
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions2.fromAmountOptions.currenciesOptions.fcName, currencyValue, this.billPaymentVO);
                this.commonProv.setValInsideNestedObj(this.complexExchangeOptions2.toAmountOptions.currenciesOptions.fcName, currencyValue, this.billPaymentVO);
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      BillPaymentPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]
        }, {
          type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"]
        }];
      };

      BillPaymentPage.propDecorators = {
        exchangeChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexExchangeComponent"]]
        }],
        favLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['favLookupComponentObj']
        }]
      };
      BillPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'bill-payment',
        template: _raw_loader_bill_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"], _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"]])], BillPaymentPage);
      /***/
    },

    /***/
    "Tlgk":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tlgk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-date [options]=\"dateOptions\" [id]=\"id\" class=\"ps-day-month-year\" (onPsChange)=\"dateChanged($event)\" (onPsInit)=\"this.onInit($event)\"></ps-keyin-date>";
      /***/
    },

    /***/
    "dFa0":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bill-payment/bill-payment.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dFa0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\"\r\n    (onNextPreviousStepper)=\"showGridValidation($event)\">\r\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\r\n        <ps-complex-widget-dropdowns (onSecondValueChange)=\"widgetCompleted($event)\" [options]=\"widgetDropdownsOptions\"\r\n            id=\"category_biller_widgets\">\r\n        </ps-complex-widget-dropdowns>\r\n    </ps-form-step>\r\n    <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\r\n        <div class=\"category_biller_header\">\r\n            <ps-label [options]=\"headerLabelOptions\"></ps-label>\r\n        </div>\r\n        <ps-container-panel [options]=\"billpaymentDetailsPanelOptions\" id=\"bill_payment_details_panel\">\r\n            <ps-lookup-own-accounts id=\"payment_account_list\" [options]=\"paymentAccountListOptions\"\r\n                (onAccountChange)=\"onAccountChange($event)\"></ps-lookup-own-accounts>\r\n\r\n            <ps-complex-segment class=\"biller-type-select-segment\" id=\"billPaymentSegment\"\r\n                (complexSegmentButtonClicked)=\"onClickSegment($event)\" [options]=\"complexSegmentOptions\">\r\n                <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\r\n                    <ps-lookup-fav-payee #favLookupComponentObj [options]=\"favPayeeLookupOptions\"\r\n                        (onFavPayeeChange)=\"onFavPayeeChange($event)\">\r\n                    </ps-lookup-fav-payee>\r\n                </ps-content-segment>\r\n\r\n                <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\r\n                    <ps-input-free-text id=\"biller_account_number\" [options]=\"billerAccNumberOptions\"\r\n                        (onPsChange)=\"onBillerAccNumberChanged($event)\">\r\n                    </ps-input-free-text>\r\n                </ps-content-segment>\r\n            </ps-complex-segment>\r\n\r\n            <!-- Added by Muzammil AZDB-6910 - Start-->\r\n            <ps-complex-exchange [options]=\"complexExchangeOptions2\"></ps-complex-exchange>\r\n            <!-- Added by Muzammil AZDB-6910 - End -->\r\n            <ps-input-free-text id=\"payment_purpose\" [options]=\"purposeOptions\">\r\n            </ps-input-free-text>\r\n\r\n        </ps-container-panel>\r\n    </ps-form-step>\r\n    <ps-form-step *psStep=\"'step3'\" step3 [id]=\"stepperOptions.namesofSteps[2]\">\r\n        <ps-container-panel [options]=\"billpaymentGridPanelOptions\" id=\"bill_payment_grid_panel\">\r\n            <ng-container *ngIf=\"showGrid\">\r\n                <ps-ag-grid class=\"onboarding_toggles\" [options]=\"gridOptions\"\r\n                    (onRowSelectionChange)=\"onRowSelectionChange($event)\">\r\n                </ps-ag-grid>\r\n\r\n                <p *ngIf=\"showErrorMsg\" class=\"validation-message requested-product\">\r\n                    <ps-label [options]=\"{labelKey: validationMsg(true)}\"></ps-label>\r\n                </p>\r\n            </ng-container>\r\n            <ps-input-free-text [options]=\"labelChargesOptions\">\r\n            </ps-input-free-text>\r\n\r\n            <ps-input-free-text [options]=\"labelTAmountOptions\">\r\n            </ps-input-free-text>\r\n            <ps-label class=\"amount-info\" [options]=\"amountInfoHintOptions\"></ps-label>\r\n            <ps-complex-exchange id=\"exchange\" [options]=\"complexExchangeOptions\">\r\n            </ps-complex-exchange>\r\n        </ps-container-panel>\r\n    </ps-form-step>\r\n</ps-template-stepper>";
      /***/
    },

    /***/
    "ltde":
    /*!**************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: PsFavPayeeListComponent */

    /***/
    function ltde(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsFavPayeeListComponent", function () {
        return PsFavPayeeListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_fav_payee_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-fav-payee-list.component.html */
      "JsQt");
      /* harmony import */


      var _ps_fav_payee_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-fav-payee-list.component.scss */
      "O0aa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /* harmony import */


      var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /**
       * @author Ammar.Ahmed
       * @since 22/06/2021
       *
       * <p> PsInternalBeneficiaryComponent is business component contains mapping for for container-lookup component to load internal beneficiaries</p>
       */


      var PsFavPayeeListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsFavPayeeListComponent() {
          var _this9;

          _classCallCheck(this, PsFavPayeeListComponent);

          _this9 = _callSuper(this, PsFavPayeeListComponent);
          _this9.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this9.options = {}; // tslint:disable-next-line: no-output-on-prefix

          _this9.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this9.labelValuesMap = new Map();
          _this9.headerMap = new Map();
          _this9.requestMap = new Map();
          _this9.editRequestMap = new Map();
          _this9.bRefresh = false;
          _this9.postFct = {
            func: function func() {
              var _this0 = this;

              return new Promise(function (resolve, reject) {
                resolve(_this0.executionClass.reloadList());
              });
            },
            executionClass: _this9,
            params: []
          };
          return _this9;
        }

        _inherits(PsFavPayeeListComponent, _src_app_commonSRC_ps);

        return _createClass(PsFavPayeeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsFavPayeeListComponent, "init", this, 3)([]);

            this.pupulateFavPayeeMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }
          }
        }, {
          key: "getContainerLookUpOptions",
          value: function getContainerLookUpOptions() {
            return this.prepareLookUp();
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp() {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.actionDetailsOptions = [{
              id: 'pay',
              label: 'pay_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'paper-plane',
                  labelOptions: {
                    labelKey: 'pay_key'
                  }
                },
                pageOptions: {
                  operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].WIDGET_BILL_PAYMENTS_OPER_ID
                },
                navigationOptions: {
                  queryParams: {
                    navigationIndex: 1
                  }
                }
              }
            }, {
              id: 'delete',
              labelOptions: {
                labelKey: 'delete_key'
              },
              buttonIcon: 'delete',
              actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
              cssClass: 'fab-edit-button',
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              alertStyle: 'warning',
              alertType: 'prompt',
              alertMessage: 'confirm_delete_this_favorite_key',
              operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DELETE_FAV_PAYEE_OPER_ID
            }, {
              id: 'edit',
              label: 'edit_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'paper',
                  labelOptions: {
                    labelKey: 'edit_key'
                  }
                },
                pageOptions: {
                  operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].EDIT_FAV_PAYEE_OPER_ID
                }
              }
            }];
            lookupDetails.statementOptions = {};
            lookupDetails.reloadFunction = {
              func: function func() {
                var _this1 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this1.executionClass.reloadList());
                });
              },
              executionClass: this,
              params: []
            };
            return lookupDetails;
          }
        }, {
          key: "reloadList",
          value: function reloadList() {
            this.reloadFct.emit();
          }
        }, {
          key: "pupulateFavPayeeMap",
          value: function pupulateFavPayeeMap() {
            var billerMap = {};
            var categoryMap = {};
            var referenceMap = {};
            var headerTitleMap = {};
            billerMap = {
              key: 'billerDescriptionConcat',
              value: '',
              isEdit: false
            };
            categoryMap = {
              key: 'categoryDescriptionConcat',
              value: '',
              isEdit: false
            };
            referenceMap = {
              key: 'billerAccount',
              value: '',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'nickName',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('biller_key', billerMap);
            this.labelValuesMap.set('category_key', categoryMap);
            this.labelValuesMap.set('reference_key', referenceMap);
            this.headerMap.set('title', headerTitleMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(item) {
            if (item && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === item;
              });
              this.options.item = this.options.itemList[0];
              this.options.showItemPopUp = !this.options.showItemPopUp;
            }

            this.onClickCard.emit(this.options);
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"]);

      PsFavPayeeListComponent.ctorParameters = function () {
        return [];
      };

      PsFavPayeeListComponent.propDecorators = {
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsFavPayeeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-fav-payee-list',
        template: _raw_loader_ps_fav_payee_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_fav_payee_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PsFavPayeeListComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=19-es5.js.map