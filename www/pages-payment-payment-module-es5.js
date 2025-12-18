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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"], {
    /***/
    "+BRL":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: PsInputFreeTextComponent */

    /***/
    function BRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponent", function () {
        return PsInputFreeTextComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-free-text.component.html */
      "wsER");
      /* harmony import */


      var _ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-free-text.component.scss */
      "+jbq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /**
       * @author Aftab.Ali
       * @since 24/10/2019
       *
       * <p> PsInputFreeTextComponent is a simple component base on ps-keyin-input and have free text field</p>
       */


      var PsInputFreeTextComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsInputFreeTextComponent(commonService, logger) {
          var _this;

          _classCallCheck(this, PsInputFreeTextComponent);

          _this = _callSuper(this, PsInputFreeTextComponent, [commonService, logger]);
          _this.options = {};
          _this.defaultOptions = {};
          return _this;
        }

        _inherits(PsInputFreeTextComponent, _commonSRC_psComponen);

        return _createClass(PsInputFreeTextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
          }
        }, {
          key: "onInputChanged",
          value: function onInputChanged(event) {
            this.onPsChange.emit(event);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"]);

      PsInputFreeTextComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }];
      };

      PsInputFreeTextComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputFreeTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-free-text',
        template: _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])], PsInputFreeTextComponent);
      /***/
    },

    /***/
    "+jbq":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1mcmVlLXRleHQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "0GVO":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesInternalComponent */

    /***/
    function GVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternalComponent", function () {
        return PsLookupBeneficiariesInternalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_beneficiaries_internal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-beneficiaries-internal.component.html */
      "Rok/");
      /* harmony import */


      var _ps_lookup_beneficiaries_internal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-internal.component.scss */
      "aSGy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */
      "Zrkw");
      /**
       * @author Aftab.Ali
       * @since 04/02/2020
       *
       * <p> PsLookupBeneficiariesInternalComponent is a lookup component to show internal Benificiaries list fetched from the server</p>
       */


      var PsLookupBeneficiariesInternalComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsLookupBeneficiariesInternalComponent(commonService, logger, omniPull, beneficiariesService) {
          var _this2;

          _classCallCheck(this, PsLookupBeneficiariesInternalComponent);

          _this2 = _callSuper(this, PsLookupBeneficiariesInternalComponent, [commonService, logger]);
          _this2.commonService = commonService;
          _this2.omniPull = omniPull;
          _this2.beneficiariesService = beneficiariesService;
          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this2.options = {
            requestObject: null
          };
          _this2.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_internal_benef_found_key'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this2.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.labelValuesMap = new Map();
          _this2.beneficiariesRequestParam = {};

          _this2.populateInternalBenificiaryMap();

          return _this2;
        }

        _inherits(PsLookupBeneficiariesInternalComponent, _src_app_commonSRC_ps);

        return _createClass(PsLookupBeneficiariesInternalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupBeneficiariesInternalComponent, "init", this, 3)([]);

            this.loadInternalBenificiaries();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192

            this.complexLookupOptions.requestObject = this.options.requestObject;
            this.complexLookupOptions.type = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternalBeneficiaryComponent"];
            }
          }
          /**
           * populating Benificiaries - fetching from server
           */

        }, {
          key: "loadInternalBenificiaries",
          value: function loadInternalBenificiaries() {
            this.options.listOfBenificiaries = [];
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE,
              filterByOper: true
            };
            this.returnInternalBenificiaries(this.beneficiariesRequestParam);
          }
          /**
           * fetching Benificiaries from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnInternalBenificiaries",
          value: function returnInternalBenificiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this3.complexLookupOptions.listOfOptions = [];

                      _this3.logger.error('Error: While fetching internal beneficiaries in PsLookupBeneficiariesInternalComponent: ', error);
                    });

                  case 1:
                    result = _context.v;

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populateCustomInternalBeneficiaries(result.gridModel);
                    } else {
                      this.listOfBenificiaries = [];
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "populateInternalBenificiaryMap",
          value: function populateInternalBenificiaryMap() {
            var beneficiaryAccountNumberMap = {};
            var beneficiaryBankNameMap = {};
            beneficiaryAccountNumberMap = {
              key: 'beneficiaryAccountNumber',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryBankNameMap = {
              key: 'beneficiaryBankName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('beneficiary_key', beneficiaryAccountNumberMap);
            this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onBenificiaryChange.emit(event);
          }
          /**
           * customizing internal beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomInternalBeneficiaries",
          value: function populateCustomInternalBeneficiaries(internalBeneficiaries) {
            return this.beneficiariesService.populateInternalBeneficiaries(internalBeneficiaries);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"]);

      PsLookupBeneficiariesInternalComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      PsLookupBeneficiariesInternalComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }],
        onBenificiaryChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsLookupBeneficiariesInternalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-internal',
        template: _raw_loader_ps_lookup_beneficiaries_internal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_internal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], PsLookupBeneficiariesInternalComponent);
      /***/
    },

    /***/
    "1wDr":
    /*!*******************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PsPurposeComponentModule */

    /***/
    function wDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsPurposeComponentModule", function () {
        return PsPurposeComponentModule;
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


      var _ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-purpose.component */
      "fVca");

      var PsPurposeComponentModule = /*#__PURE__*/_createClass(function PsPurposeComponentModule() {
        _classCallCheck(this, PsPurposeComponentModule);
      });

      PsPurposeComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__["PsPurposeComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__["PsPurposeComponent"]],
        entryComponents: [_ps_purpose_component__WEBPACK_IMPORTED_MODULE_4__["PsPurposeComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsPurposeComponentModule);
      /***/
    },

    /***/
    "2A9y":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: PsInputFreeTextComponentModule */

    /***/
    function A9y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponentModule", function () {
        return PsInputFreeTextComponentModule;
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


      var _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-input-free-text.component */
      "+BRL");

      var PsInputFreeTextComponentModule = /*#__PURE__*/_createClass(function PsInputFreeTextComponentModule() {
        _classCallCheck(this, PsInputFreeTextComponentModule);
      });

      PsInputFreeTextComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]],
        entryComponents: [_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputFreeTextComponentModule);
      /***/
    },

    /***/
    "32Le":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.module.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesLocalComponentModule */

    /***/
    function Le(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalComponentModule", function () {
        return PsLookupBeneficiariesLocalComponentModule;
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


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-local.component */
      "PMli");

      var PsLookupBeneficiariesLocalComponentModule = /*#__PURE__*/_createClass(function PsLookupBeneficiariesLocalComponentModule() {
        _classCallCheck(this, PsLookupBeneficiariesLocalComponentModule);
      });

      PsLookupBeneficiariesLocalComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalComponent"]],
        entryComponents: [_ps_lookup_beneficiaries_local_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupBeneficiariesLocalComponentModule);
      /***/
    },

    /***/
    "3lU2":
    /*!******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.scss ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lU2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1pbnRlcm5hdGlvbmFsLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "5F0I":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesLocalCardComponent */

    /***/
    function F0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalCardComponent", function () {
        return PsLookupBeneficiariesLocalCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_beneficiaries_local_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-beneficiaries-local-card.component.html */
      "62QG");
      /* harmony import */


      var _ps_lookup_beneficiaries_local_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-local-card.component.scss */
      "XvIo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */
      "Zrkw");

      var PsLookupBeneficiariesLocalCardComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsLookupBeneficiariesLocalCardComponent(commonService, logger, omniPull, beneficiariesService) {
          var _this4;

          _classCallCheck(this, PsLookupBeneficiariesLocalCardComponent);

          _this4 = _callSuper(this, PsLookupBeneficiariesLocalCardComponent, [commonService, logger]);
          _this4.commonService = commonService;
          _this4.omniPull = omniPull;
          _this4.beneficiariesService = beneficiariesService;
          _this4.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this4.options = {
            requestObject: null
          };
          _this4.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_local_card_beneficiary_key'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this4.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this4.labelValuesMap = new Map();
          _this4.beneficiariesRequestParam = {};

          _this4.populateLocalCardBenificiaryMap();

          return _this4;
        }

        _inherits(PsLookupBeneficiariesLocalCardComponent, _src_app_commonSRC_ps2);

        return _createClass(PsLookupBeneficiariesLocalCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupBeneficiariesLocalCardComponent, "init", this, 3)([]);

            this.loadLocalCardBenificiaries();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
            this.complexLookupOptions.requestObject = this.options.requestObject;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternalBeneficiaryComponent"];
            }
          }
          /**
           * populating Local Card Benificiaries - fetching from server
           */

        }, {
          key: "loadLocalCardBenificiaries",
          value: function loadLocalCardBenificiaries() {
            this.options.listOfBenificiaries = [];
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_TYPE,
              filterByOper: true
            };
            this.returnLocalCardBenificiaries(this.beneficiariesRequestParam);
          }
          /**
           * fetching Local Card Benificiaries from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnLocalCardBenificiaries",
          value: function returnLocalCardBenificiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var result;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this5.complexLookupOptions.listOfOptions = [];

                      _this5.logger.error('Error: While fetching local card beneficiaries in PsLookupBeneficiariesLocalCardComponent :', error);
                    });

                  case 1:
                    result = _context2.v;

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populateCustomLocalCardBeneficiaries(result.gridModel);
                    } else {
                      this.listOfBenificiaries = [];
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "populateLocalCardBenificiaryMap",
          value: function populateLocalCardBenificiaryMap() {
            var beneficiaryCardNumberMap = {};
            var beneficiaryLocalNameMap = {};
            beneficiaryCardNumberMap = {
              key: 'beneficiaryCardNumber',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryLocalNameMap = {
              key: 'beneficiaryLocalName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('beneficiary_key', beneficiaryCardNumberMap);
            this.labelValuesMap.set('local_name_key', beneficiaryLocalNameMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onBenificiaryChange.emit(event);
          }
          /**
           * customizing local card beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomLocalCardBeneficiaries",
          value: function populateCustomLocalCardBeneficiaries(localCardBeneficiaries) {
            return this.beneficiariesService.populateLocalCardBeneficiaries(localCardBeneficiaries);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"]);

      PsLookupBeneficiariesLocalCardComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      PsLookupBeneficiariesLocalCardComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }],
        onBenificiaryChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsLookupBeneficiariesLocalCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-local-card',
        template: _raw_loader_ps_lookup_beneficiaries_local_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_local_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], PsLookupBeneficiariesLocalCardComponent);
      /***/
    },

    /***/
    "62QG":
    /*!**************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.html ***!
      \**************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "6DQR":
    /*!******************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: PsRemittanceComponent */

    /***/
    function DQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsRemittanceComponent", function () {
        return PsRemittanceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_remittance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-remittance.component.html */
      "oj4Y");
      /* harmony import */


      var _ps_remittance_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-remittance.component.scss */
      "OLRL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsRemittanceComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PsRemittanceComponent(commonService, logger) {
          var _this6;

          _classCallCheck(this, PsRemittanceComponent);

          _this6 = _callSuper(this, PsRemittanceComponent, [commonService, logger]);
          _this6.options = {};
          _this6.categoriesOptions = {};
          return _this6;
        }

        _inherits(PsRemittanceComponent, _src_app_commonSRC_ps3);

        return _createClass(PsRemittanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoriesOptions = {
              defaultLoad: true,
              category: {
                labelKey: this.options.categoryLabelKey,
                placeHolder: this.options.categoryPlaceholderKey,
                fcName: this.options.categoryFcName,
                group: this.options.group
              },
              subCategory: {
                labelKey: this.options.subCategoryLabelKey,
                placeHolder: this.options.subCategoryPlaceholderKey,
                fcName: this.options.subCategoryFcName,
                group: this.options.group
              },
              requestObject: this.options.requestObject
            };
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsRemittanceComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsRemittanceComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsRemittanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-remittance',
        template: _raw_loader_ps_remittance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_remittance_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsRemittanceComponent);
      /***/
    },

    /***/
    "6H8u":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1sb2NhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "6Ozt":
    /*!**********************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function Ozt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1iYW5rcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "6nht":
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesInternationalComponent */

    /***/
    function nht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternationalComponent", function () {
        return PsLookupBeneficiariesInternationalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_beneficiaries_international_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-beneficiaries-international.component.html */
      "CurX");
      /* harmony import */


      var _ps_lookup_beneficiaries_international_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-international.component.scss */
      "3lU2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component */
      "ZI0R");
      /**
       * @author Aftab.Ali
       * @since 04/02/2020
       *
       * <p> PsLookupBeneficiariesInternationalComponent is a lookup component to show international benificiaries list fetched from server</p>
       */


      var PsLookupBeneficiariesInternationalComponent = /*#__PURE__*/function (_src_app_commonSRC_ps4) {
        function PsLookupBeneficiariesInternationalComponent(commonService, logger, omniPull, beneficiariesService) {
          var _this7;

          _classCallCheck(this, PsLookupBeneficiariesInternationalComponent);

          _this7 = _callSuper(this, PsLookupBeneficiariesInternationalComponent, [commonService, logger]);
          _this7.commonService = commonService;
          _this7.omniPull = omniPull;
          _this7.beneficiariesService = beneficiariesService;
          _this7.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this7.options = {
            requestObject: null
          };
          _this7.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_international_benf_found_key'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this7.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this7.labelValuesMap = new Map();
          _this7.beneficiariesRequestParam = {};

          _this7.populateInternationalBenificiaryMap();

          return _this7;
        }

        _inherits(PsLookupBeneficiariesInternationalComponent, _src_app_commonSRC_ps4);

        return _createClass(PsLookupBeneficiariesInternationalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupBeneficiariesInternationalComponent, "init", this, 3)([]);

            this.loadInternationalBenificiaries();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
            this.complexLookupOptions.requestObject = this.options.requestObject;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternationalBeneficiaryComponent"];
            }
          }
          /**
           * populating loadInternational Benificiaries - fetching from server
           */

        }, {
          key: "loadInternationalBenificiaries",
          value: function loadInternationalBenificiaries() {
            this.options.listOfBenificiaries = [];
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL,
              filterByOper: true
            };
            this.returnInternationalBenificiaries(this.beneficiariesRequestParam);
          }
          /**
           * fetching Benificiaries from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnInternationalBenificiaries",
          value: function returnInternationalBenificiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this8 = this;

              var result;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this8.complexLookupOptions.listOfOptions = [];

                      _this8.logger.error('Error: While fetching international beneficiaries in PsLookupBeneficiariesInternationalComponent :', error);
                    });

                  case 1:
                    result = _context3.v;

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populateCustomInternationalBeneficiaries(result.gridModel);
                    } else {
                      this.listOfBenificiaries = [];
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "populateInternationalBenificiaryMap",
          value: function populateInternationalBenificiaryMap() {
            var beneficiaryAccountNumberMap = {};
            var beneficiaryBankNameMap = {};
            beneficiaryAccountNumberMap = {
              key: 'beneficiaryAccountNumber',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryBankNameMap = {
              key: 'bankName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('beneficiary_key', beneficiaryAccountNumberMap);
            this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onBenificiaryChange.emit(event);
          }
          /**
           * customizing international beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomInternationalBeneficiaries",
          value: function populateCustomInternationalBeneficiaries(internationBeneficiaries) {
            return this.beneficiariesService.populateInternationalBeneficiaries(internationBeneficiaries);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"]);

      PsLookupBeneficiariesInternationalComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      PsLookupBeneficiariesInternationalComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }],
        onBenificiaryChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsLookupBeneficiariesInternationalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-international',
        template: _raw_loader_ps_lookup_beneficiaries_international_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_international_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], PsLookupBeneficiariesInternationalComponent);
      /***/
    },

    /***/
    "9oYr":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.scss ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oYr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXN3aWZ0LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "AvcC":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: PsFileUploadBSComponentModule */

    /***/
    function AvcC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsFileUploadBSComponentModule", function () {
        return PsFileUploadBSComponentModule;
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


      var _ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-file-upload-bs.component */
      "b23T");

      var PsFileUploadBSComponentModule = /*#__PURE__*/_createClass(function PsFileUploadBSComponentModule() {
        _classCallCheck(this, PsFileUploadBSComponentModule);
      });

      PsFileUploadBSComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponent"]],
        entryComponents: [_ps_file_upload_bs_component__WEBPACK_IMPORTED_MODULE_4__["PsFileUploadBSComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsFileUploadBSComponentModule);
      /***/
    },

    /***/
    "CurX":
    /*!********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.html ***!
      \********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CurX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "D2J3":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D2J3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-category-sub-category [options]=\"categoriesOptions\" (onPsChange)=\"onBankChanged($event)\"></ps-category-sub-category>";
      /***/
    },

    /***/
    "F9YD":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsComplexIdDetailsModule */

    /***/
    function F9YD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexIdDetailsModule", function () {
        return PsComplexIdDetailsModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component.module */
      "jjhr");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.module */
      "j6t5");
      /* harmony import */


      var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.module */
      "GNGv");
      /* harmony import */


      var _ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ps-complex-id-details.component */
      "y70R");

      var PsComplexIdDetailsModule = /*#__PURE__*/_createClass(function PsComplexIdDetailsModule() {
        _classCallCheck(this, PsComplexIdDetailsModule);
      });

      PsComplexIdDetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputFreeTextComponentModule"], _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDropDownIdTypesComponentModule"], _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_8__["PsDateDayMonthYearFutureComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_2__["PsDateDayMonthYearPastComponentModule"], _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownCountryComponentModule"]],
        exports: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        entryComponents: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexIdDetailsModule);
      /***/
    },

    /***/
    "GYV1":
    /*!*************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.module.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesInternalComponentModule */

    /***/
    function GYV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternalComponentModule", function () {
        return PsLookupBeneficiariesInternalComponentModule;
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


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-internal.component */
      "0GVO");

      var PsLookupBeneficiariesInternalComponentModule = /*#__PURE__*/_createClass(function PsLookupBeneficiariesInternalComponentModule() {
        _classCallCheck(this, PsLookupBeneficiariesInternalComponentModule);
      });

      PsLookupBeneficiariesInternalComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternalComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternalComponent"]],
        entryComponents: [_ps_lookup_beneficiaries_internal_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternalComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupBeneficiariesInternalComponentModule);
      /***/
    },

    /***/
    "Gxq1":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesCashComponent */

    /***/
    function Gxq1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesCashComponent", function () {
        return PsLookupBeneficiariesCashComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_beneficiaries_cash_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-beneficiaries-cash.component.html */
      "cm1V");
      /* harmony import */


      var _ps_lookup_beneficiaries_cash_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-cash.component.scss */
      "rNEQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component */
      "YaLh");
      /**
       * @author G.Radwan
       * @since 05/06/2021
       *
       * <p> PsLookupBeneficiariesCashComponent is a lookup component to show local benificiaries list fetched from server</p>
       */


      var PsLookupBeneficiariesCashComponent = /*#__PURE__*/function (_src_app_commonSRC_ps5) {
        function PsLookupBeneficiariesCashComponent(commonService, logger, omniPull, beneficiariesService) {
          var _this9;

          _classCallCheck(this, PsLookupBeneficiariesCashComponent);

          _this9 = _callSuper(this, PsLookupBeneficiariesCashComponent, [commonService, logger]);
          _this9.commonService = commonService;
          _this9.omniPull = omniPull;
          _this9.beneficiariesService = beneficiariesService;
          _this9.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this9.options = {
            requestObject: null
          };
          _this9.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_cash_beneficiary_key'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this9.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this9.labelValuesMap = new Map();
          _this9.beneficiariesRequestParam = {};

          _this9.populateCashBenificiaryMap();

          return _this9;
        }

        _inherits(PsLookupBeneficiariesCashComponent, _src_app_commonSRC_ps5);

        return _createClass(PsLookupBeneficiariesCashComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupBeneficiariesCashComponent, "init", this, 3)([]);

            this.loadCashBenificiaries();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192

            this.complexLookupOptions.requestObject = this.options.requestObject;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component__WEBPACK_IMPORTED_MODULE_11__["PsCashTransferComponent"];
            }
          }
          /**
           * populating Local Benificiaries - fetching from server
           */

        }, {
          key: "loadCashBenificiaries",
          value: function loadCashBenificiaries() {
            this.options.listOfBenificiaries = [];
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER,
              filterByOper: true
            };
            this.returnCashBenificiaries(this.beneficiariesRequestParam);
          }
          /**
           * fetching Local Benificiaries from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnCashBenificiaries",
          value: function returnCashBenificiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this0 = this;

              var result;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this0.complexLookupOptions.listOfOptions = [];

                      _this0.logger.error('Error: While fetching cash beneficiaries in PsLookupBeneficiariesCashComponent :', error);
                    });

                  case 1:
                    result = _context4.v;

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populateCustomCashBeneficiaries(result.gridModel);
                    } else {
                      this.listOfBenificiaries = [];
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "populateCashBenificiaryMap",
          value: function populateCashBenificiaryMap() {
            var beneficiaryIdNumberMap = {};
            var beneficiaryNameMap = {};
            beneficiaryIdNumberMap = {
              key: 'idNumber',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryNameMap = {
              key: 'benefName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('beneficiary_key', beneficiaryNameMap);
            this.labelValuesMap.set('bank_name_key', beneficiaryIdNumberMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onBenificiaryChange.emit(event);
          }
          /**
           * customizing local beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomCashBeneficiaries",
          value: function populateCustomCashBeneficiaries(localBeneficiaries) {
            return this.beneficiariesService.populateCashTransfers(localBeneficiaries);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"]);

      PsLookupBeneficiariesCashComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      PsLookupBeneficiariesCashComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onBenificiaryChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsLookupBeneficiariesCashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-cash',
        template: _raw_loader_ps_lookup_beneficiaries_cash_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_cash_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], PsLookupBeneficiariesCashComponent);
      /***/
    },

    /***/
    "IRv+":
    /*!*************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PsRemittanceComponentModule */

    /***/
    function IRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsRemittanceComponentModule", function () {
        return PsRemittanceComponentModule;
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


      var _ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-remittance.component */
      "6DQR");

      var PsRemittanceComponentModule = /*#__PURE__*/_createClass(function PsRemittanceComponentModule() {
        _classCallCheck(this, PsRemittanceComponentModule);
      });

      PsRemittanceComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__["PsRemittanceComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__["PsRemittanceComponent"]],
        entryComponents: [_ps_remittance_component__WEBPACK_IMPORTED_MODULE_4__["PsRemittanceComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsRemittanceComponentModule);
      /***/
    },

    /***/
    "JEks":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.html ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JEks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "KjSF":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesBankCardComponent */

    /***/
    function KjSF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesBankCardComponent", function () {
        return PsLookupBeneficiariesBankCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_beneficiaries_bank_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-beneficiaries-bank-card.component.html */
      "Zewi");
      /* harmony import */


      var _ps_lookup_beneficiaries_bank_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-bank-card.component.scss */
      "vgQz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */
      "Zrkw");

      var PsLookupBeneficiariesBankCardComponent = /*#__PURE__*/function (_src_app_commonSRC_ps6) {
        function PsLookupBeneficiariesBankCardComponent(commonService, logger, omniPull, beneficiariesService) {
          var _this1;

          _classCallCheck(this, PsLookupBeneficiariesBankCardComponent);

          _this1 = _callSuper(this, PsLookupBeneficiariesBankCardComponent, [commonService, logger]);
          _this1.commonService = commonService;
          _this1.omniPull = omniPull;
          _this1.beneficiariesService = beneficiariesService;
          _this1.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this1.options = {
            requestObject: null
          };
          _this1.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_bank_card_beneficiary_key'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this1.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this1.labelValuesMap = new Map();
          _this1.beneficiariesRequestParam = {};

          _this1.populateBankCardBenificiaryMap();

          return _this1;
        }

        _inherits(PsLookupBeneficiariesBankCardComponent, _src_app_commonSRC_ps6);

        return _createClass(PsLookupBeneficiariesBankCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupBeneficiariesBankCardComponent, "init", this, 3)([]);

            this.loadBankCardBenificiaries();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
            this.complexLookupOptions.requestObject = this.options.requestObject;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsInternalBeneficiaryComponent"];
            }
          }
          /**
           * populating Bank Card Benificiaries - fetching from server
           */

        }, {
          key: "loadBankCardBenificiaries",
          value: function loadBankCardBenificiaries() {
            this.options.listOfBenificiaries = [];
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_TYPE,
              filterByOper: true
            };
            this.returnBankCardBenificiaries(this.beneficiariesRequestParam);
          }
          /**
           * fetching Bank Card Benificiaries from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnBankCardBenificiaries",
          value: function returnBankCardBenificiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this10 = this;

              var result;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this10.complexLookupOptions.listOfOptions = [];

                      _this10.logger.error('Error: While fetching bank card beneficiaries in PsLookupBeneficiariesBankCardComponent :', error);
                    });

                  case 1:
                    result = _context5.v;

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populateCustomBankCardBeneficiaries(result.gridModel);
                    } else {
                      this.listOfBenificiaries = [];
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "populateBankCardBenificiaryMap",
          value: function populateBankCardBenificiaryMap() {
            var beneficiaryCardNumberMap = {};
            var beneficiaryBankNameMap = {};
            beneficiaryCardNumberMap = {
              key: 'beneficiaryCardNumber',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryBankNameMap = {
              key: 'beneficiaryBankName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('beneficiary_key', beneficiaryCardNumberMap);
            this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onBenificiaryChange.emit(event);
          }
          /**
           * customizing bank card beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomBankCardBeneficiaries",
          value: function populateCustomBankCardBeneficiaries(bankCardBeneficiaries) {
            return this.beneficiariesService.populateBankCardBeneficiaries(bankCardBeneficiaries);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"]);

      PsLookupBeneficiariesBankCardComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      PsLookupBeneficiariesBankCardComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }],
        onBenificiaryChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsLookupBeneficiariesBankCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-bank-card',
        template: _raw_loader_ps_lookup_beneficiaries_bank_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_bank_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], PsLookupBeneficiariesBankCardComponent);
      /***/
    },

    /***/
    "Le12":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.module.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesInternationalComponentModule */

    /***/
    function Le12(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesInternationalComponentModule", function () {
        return PsLookupBeneficiariesInternationalComponentModule;
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


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-international.component */
      "6nht");

      var PsLookupBeneficiariesInternationalComponentModule = /*#__PURE__*/_createClass(function PsLookupBeneficiariesInternationalComponentModule() {
        _classCallCheck(this, PsLookupBeneficiariesInternationalComponentModule);
      });

      PsLookupBeneficiariesInternationalComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternationalComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternationalComponent"]],
        entryComponents: [_ps_lookup_beneficiaries_international_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesInternationalComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupBeneficiariesInternationalComponentModule);
      /***/
    },

    /***/
    "OLRL":
    /*!********************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OLRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1yZW1pdHRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "PMli":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesLocalComponent */

    /***/
    function PMli(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalComponent", function () {
        return PsLookupBeneficiariesLocalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_beneficiaries_local_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-beneficiaries-local.component.html */
      "Vzk6");
      /* harmony import */


      var _ps_lookup_beneficiaries_local_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-local.component.scss */
      "6H8u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component */
      "jXvJ");
      /**
       * @author Aftab.Ali
       * @since 04/02/2020
       *
       * <p> PsLookupBeneficiariesLocalComponent is a lookup component to show local benificiaries list fetched from server</p>
       */


      var PsLookupBeneficiariesLocalComponent = /*#__PURE__*/function (_src_app_commonSRC_ps7) {
        function PsLookupBeneficiariesLocalComponent(commonService, logger, omniPull, beneficiariesService) {
          var _this11;

          _classCallCheck(this, PsLookupBeneficiariesLocalComponent);

          _this11 = _callSuper(this, PsLookupBeneficiariesLocalComponent, [commonService, logger]);
          _this11.commonService = commonService;
          _this11.omniPull = omniPull;
          _this11.beneficiariesService = beneficiariesService;
          _this11.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this11.options = {
            requestObject: null
          };
          _this11.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_local_benef_found_key'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this11.onBenificiaryChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this11.labelValuesMap = new Map();
          _this11.beneficiariesRequestParam = {};

          _this11.populateLocalBenificiaryMap();

          return _this11;
        }

        _inherits(PsLookupBeneficiariesLocalComponent, _src_app_commonSRC_ps7);

        return _createClass(PsLookupBeneficiariesLocalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupBeneficiariesLocalComponent, "init", this, 3)([]);

            this.loadLocalBenificiaries();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false); // Moved here by Richie for #BUG 1141192

            this.complexLookupOptions.requestObject = this.options.requestObject;
            this.complexLookupOptions.type = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_11__["PsLocalBeneficiaryComponent"];
            }
          }
          /**
           * populating Local Benificiaries - fetching from server
           */

        }, {
          key: "loadLocalBenificiaries",
          value: function loadLocalBenificiaries() {
            this.options.listOfBenificiaries = [];
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE,
              filterByOper: true
            };
            this.returnLocalBenificiaries(this.beneficiariesRequestParam);
          }
          /**
           * fetching Local Benificiaries from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnLocalBenificiaries",
          value: function returnLocalBenificiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this12 = this;

              var result;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this12.complexLookupOptions.listOfOptions = [];

                      _this12.logger.error('Error: While fetching local beneficiaries in PsLookupBeneficiariesLocalComponent :', error);
                    });

                  case 1:
                    result = _context6.v;

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populateCustomLocalBeneficiaries(result.gridModel);
                    } else {
                      this.listOfBenificiaries = [];
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "populateLocalBenificiaryMap",
          value: function populateLocalBenificiaryMap() {
            var beneficiaryAccountNumberMap = {};
            var beneficiaryBankNameMap = {};
            beneficiaryAccountNumberMap = {
              key: 'beneficiaryAccountNumber',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryBankNameMap = {
              key: 'beneficiaryBankName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('beneficiary_key', beneficiaryAccountNumberMap);
            this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onBenificiaryChange.emit(event);
          }
          /**
           * customizing local beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomLocalBeneficiaries",
          value: function populateCustomLocalBeneficiaries(localBeneficiaries) {
            return this.beneficiariesService.populateLocalBeneficiaries(localBeneficiaries);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_8__["PsBaseFieldComponent"]);

      PsLookupBeneficiariesLocalComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      PsLookupBeneficiariesLocalComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onBenificiaryChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }]
      };
      PsLookupBeneficiariesLocalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-beneficiaries-local',
        template: _raw_loader_ps_lookup_beneficiaries_local_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_beneficiaries_local_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], PsLookupBeneficiariesLocalComponent);
      /***/
    },

    /***/
    "PhZC":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PhZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex [id]=\"'purpose_select' + id\">\n\n  <ps-dropdown-purpose [options]=\"purpose\" (onPsChange)=\"onChangePurpose($event)\"></ps-dropdown-purpose>\n\n\n\n  <ps-dropdown-purpose [options]=\"subPurpose\" (onPsChange)=\"onChangeSubPurpose($event)\"></ps-dropdown-purpose>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "Rok/":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.html ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rok_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup #complexLookupComponentObj [id]=\"id\" (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "SUTO":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.module.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: PsComplexPurposeModule */

    /***/
    function SUTO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexPurposeModule", function () {
        return PsComplexPurposeModule;
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


      var _ps_select_dropdown_ps_dropdown_purpose_ps_dropdown_purpose_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-purpose/ps-dropdown-purpose.component.module */
      "Xqz5");
      /* harmony import */


      var _ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-complex-purpose.component */
      "WrI8");

      var PsComplexPurposeModule = /*#__PURE__*/_createClass(function PsComplexPurposeModule() {
        _classCallCheck(this, PsComplexPurposeModule);
      });

      PsComplexPurposeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexPurposeComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_select_dropdown_ps_dropdown_purpose_ps_dropdown_purpose_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownPurposeComponentModule"]],
        exports: [_ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexPurposeComponent"]],
        entryComponents: [_ps_complex_purpose_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexPurposeComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexPurposeModule);
      /***/
    },

    /***/
    "VYJj":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.module.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesCashComponentModule */

    /***/
    function VYJj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesCashComponentModule", function () {
        return PsLookupBeneficiariesCashComponentModule;
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


      var _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.module */
      "AR24");
      /* harmony import */


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-cash.component */
      "Gxq1");

      var PsLookupBeneficiariesCashComponentModule = /*#__PURE__*/_createClass(function PsLookupBeneficiariesCashComponentModule() {
        _classCallCheck(this, PsLookupBeneficiariesCashComponentModule);
      });

      PsLookupBeneficiariesCashComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupBeneficiariesCashComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponentModule"], _ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_4__["PsCashTransferComponentModule"]],
        exports: [_ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupBeneficiariesCashComponent"]],
        entryComponents: [_ps_lookup_beneficiaries_cash_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupBeneficiariesCashComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupBeneficiariesCashComponentModule);
      /***/
    },

    /***/
    "Vzk6":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vzk6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "WrI8":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: PsComplexPurposeComponent */

    /***/
    function WrI8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexPurposeComponent", function () {
        return PsComplexPurposeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-purpose.component.html */
      "PhZC");
      /* harmony import */


      var _ps_complex_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-purpose.component.scss */
      "fZPo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author Ammar.Ahmed
       * @since 30/01/2020
       *
       * <p> PsComplexPurposeComponent is a complex component base on ps-dropdown-purpose component</p>
       */


      var PsComplexPurposeComponent = /*#__PURE__*/function (_src_app_commonSRC_ps8) {
        function PsComplexPurposeComponent(commonProv, loggerP, omniPull) {
          var _this13;

          _classCallCheck(this, PsComplexPurposeComponent);

          _this13 = _callSuper(this, PsComplexPurposeComponent, [commonProv, loggerP]);
          _this13.commonProv = commonProv;
          _this13.loggerP = loggerP;
          _this13.omniPull = omniPull;
          _this13.selectedPurpose = null;
          _this13.purpose = {};
          _this13.subPurpose = {};
          _this13.subPurposeShow = false;
          return _this13;
        }

        _inherits(PsComplexPurposeComponent, _src_app_commonSRC_ps8);

        return _createClass(PsComplexPurposeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.purpose = {
              fcName: this.options.fcName,
              group: this.options.group,
              labelKey: 'purpose_key',
              placeHolder: 'purpose_key',
              listOfOptions: []
            };
            this.subPurpose = {
              fcName: 'sub' + this.options.fcName,
              group: this.options.group,
              labelKey: 'sub_purpose_key',
              placeHolder: 'sub_purpose_key',
              listOfOptions: []
            };
            this.loadPurposeData();
          }
        }, {
          key: "onChangePurpose",
          value: function onChangePurpose(value) {
            if (value !== undefined) {
              this.subPurposeShow = true;
              this.selectedPurpose = value;
              this.subPurpose = {
                fcName: 'sub' + this.options.fcName,
                group: this.options.group,
                labelKey: 'sub_purpose_key',
                placeHolder: 'sub_purpose_key',
                listOfOptions: this.selectedPurpose.selectedObj
              };
              this.onPsChange.emit(value);
            }
          }
        }, {
          key: "onChangeSubPurpose",
          value: function onChangeSubPurpose(value) {
            this.onPsChange.emit(value);
          }
        }, {
          key: "loadPurposeData",
          value: function loadPurposeData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this14 = this;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.omniPull.returnCategorySubCategory({
                      type: 'Purpose'
                    }).then(function (result) {
                      if (result && result.gridModel && result.gridModel.length > 0) {
                        var resultList = [];
                        result.gridModel.forEach(function (values, ind) {
                          var obj = {};
                          obj['itemValue'] = values.categoriesId;
                          obj['description'] = values.categoriesDescription;
                          obj['selectedObj'] = [];
                          values.subCategories.forEach(function (element) {
                            var subObj = {};
                            subObj['itemValue'] = element.subCategoriesId;
                            subObj['description'] = element.subCategoriesDescription;
                            obj['selectedObj'].push(subObj);
                          });
                          resultList.push(obj); // const purposeDropdown: IPsSelect = {
                          //   itemValue: values.categoriesId,
                          //   description: values.categoriesDescription,
                          //   selectedObj: values
                          // };
                          // resultList.push(purposeDropdown);
                        });
                        _this14.purpose = {
                          fcName: 'purpose',
                          group: _this14.options.group,
                          labelKey: 'purpose_key',
                          placeHolder: 'purpose_key',
                          listOfOptions: resultList
                        };
                      } else {
                        _this14.logger.info('info_key', 'purpose_not_available_key');
                      }
                    }, function (err) {
                      _this14.logger.error('error_key', 'network_problem_key');
                    });

                  case 1:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsComplexPurposeComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsComplexPurposeComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexPurposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-purpose',
        template: _raw_loader_ps_complex_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsComplexPurposeComponent);
      /***/
    },

    /***/
    "XvIo":
    /*!************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.scss ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XvIo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1sb2NhbC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "YLwl":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.module.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesLocalCardComponentModule */

    /***/
    function YLwl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesLocalCardComponentModule", function () {
        return PsLookupBeneficiariesLocalCardComponentModule;
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


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-local-card.component */
      "5F0I");

      var PsLookupBeneficiariesLocalCardComponentModule = /*#__PURE__*/_createClass(function PsLookupBeneficiariesLocalCardComponentModule() {
        _classCallCheck(this, PsLookupBeneficiariesLocalCardComponentModule);
      });

      PsLookupBeneficiariesLocalCardComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalCardComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalCardComponent"]],
        entryComponents: [_ps_lookup_beneficiaries_local_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesLocalCardComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupBeneficiariesLocalCardComponentModule);
      /***/
    },

    /***/
    "Zewi":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zewi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "aSGy":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.scss ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aSGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1pbnRlcm5hbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "bH40":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.module.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsLookupBeneficiariesBankCardComponentModule */

    /***/
    function bH40(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupBeneficiariesBankCardComponentModule", function () {
        return PsLookupBeneficiariesBankCardComponentModule;
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


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-lookup-beneficiaries-bank-card.component */
      "KjSF");

      var PsLookupBeneficiariesBankCardComponentModule = /*#__PURE__*/_createClass(function PsLookupBeneficiariesBankCardComponentModule() {
        _classCallCheck(this, PsLookupBeneficiariesBankCardComponentModule);
      });

      PsLookupBeneficiariesBankCardComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesBankCardComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesBankCardComponent"]],
        entryComponents: [_ps_lookup_beneficiaries_bank_card_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupBeneficiariesBankCardComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupBeneficiariesBankCardComponentModule);
      /***/
    },

    /***/
    "cm1V":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.html ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cm1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onChangeItem($event)\" [options]=\"complexLookupOptions\"></ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "d4kQ":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PsSwiftAccountListComponentModule */

    /***/
    function d4kQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsSwiftAccountListComponentModule", function () {
        return PsSwiftAccountListComponentModule;
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


      var _ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-swift-account-list.component */
      "yh/l");

      var PsSwiftAccountListComponentModule = /*#__PURE__*/_createClass(function PsSwiftAccountListComponentModule() {
        _classCallCheck(this, PsSwiftAccountListComponentModule);
      });

      PsSwiftAccountListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSwiftAccountListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSwiftAccountListComponent"]],
        entryComponents: [_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_4__["PsSwiftAccountListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsSwiftAccountListComponentModule);
      /***/
    },

    /***/
    "fVca":
    /*!************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.ts ***!
      \************************************************************************************/

    /*! exports provided: PsPurposeComponent */

    /***/
    function fVca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsPurposeComponent", function () {
        return PsPurposeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-purpose.component.html */
      "musz");
      /* harmony import */


      var _ps_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-purpose.component.scss */
      "pY1p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author Aftab.Ali
       * @since 14/03/2020
       *
       * <p> PsPurposeComponent will be using ps-category-sub-category component and pass type as Purpose</p>
       */


      var PsPurposeComponent = /*#__PURE__*/function (_src_app_commonSRC_ps9) {
        function PsPurposeComponent(commonService, logger) {
          var _this15;

          _classCallCheck(this, PsPurposeComponent);

          _this15 = _callSuper(this, PsPurposeComponent, [commonService, logger]);
          _this15.options = {};
          _this15.categoriesOptions = {};
          return _this15;
        }

        _inherits(PsPurposeComponent, _src_app_commonSRC_ps9);

        return _createClass(PsPurposeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoriesOptions = {
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CATEGORY_PURPSE,
              defaultLoad: true,
              category: {
                labelKey: this.options.categoryLabelKey,
                placeHolder: this.options.categoryPlaceholderKey,
                fcName: this.options.categoryFcName,
                group: this.options.group
              },
              subCategory: {
                labelKey: this.options.subCategoryLabelKey,
                placeHolder: this.options.subCategoryPlaceholderKey,
                fcName: this.options.subCategoryFcName,
                group: this.options.group
              },
              requestObject: this.options.requestObject
            };
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsPurposeComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsPurposeComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsPurposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-purpose',
        template: _raw_loader_ps_purpose_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_purpose_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsPurposeComponent);
      /***/
    },

    /***/
    "fZPo":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.scss ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fZPo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXB1cnBvc2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "j6t5":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.module.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: PsDropDownIdTypesComponentModule */

    /***/
    function j6t5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropDownIdTypesComponentModule", function () {
        return PsDropDownIdTypesComponentModule;
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
      /*! ../../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-dropdown-lov.component.module */
      "LhaX");
      /* harmony import */


      var _ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-dropdown-id-types.component */
      "J8wZ");

      var PsDropDownIdTypesComponentModule = /*#__PURE__*/_createClass(function PsDropDownIdTypesComponentModule() {
        _classCallCheck(this, PsDropDownIdTypesComponentModule);
      });

      PsDropDownIdTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponentModule"]],
        exports: [_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]],
        entryComponents: [_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropDownIdTypesComponentModule);
      /***/
    },

    /***/
    "j8e8":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.module.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: PsComplexSwiftTransferComponentModule */

    /***/
    function j8e8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexSwiftTransferComponentModule", function () {
        return PsComplexSwiftTransferComponentModule;
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


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ps-complex-swift-transfer.component */
      "rh9r");

      var PsComplexSwiftTransferComponentModule = /*#__PURE__*/_createClass(function PsComplexSwiftTransferComponentModule() {
        _classCallCheck(this, PsComplexSwiftTransferComponentModule);
      });

      PsComplexSwiftTransferComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSwiftTransferComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputVarcharComponentModule"], _ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexLookupComponentModule"]],
        exports: [_ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSwiftTransferComponent"]],
        entryComponents: [_ps_complex_swift_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSwiftTransferComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexSwiftTransferComponentModule);
      /***/
    },

    /***/
    "jZF4":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: PsComplexCifAccountComponentModule */

    /***/
    function jZF4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCifAccountComponentModule", function () {
        return PsComplexCifAccountComponentModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.module */
      "iNXY");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.module */
      "gByX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component */
      "+R6y");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");

      var PsComplexCifAccountComponentModule = /*#__PURE__*/_createClass(function PsComplexCifAccountComponentModule() {
        _classCallCheck(this, PsComplexCifAccountComponentModule);
      });

      PsComplexCifAccountComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifAccountComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_4__["PsInputAccountNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputCardNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputNumericComponentModule"]],
        exports: [src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifAccountComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifAccountComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexCifAccountComponentModule);
      /***/
    },

    /***/
    "mDHw":
    /*!*************************************************!*\
      !*** ./src/app/pages/payment/payment.module.ts ***!
      \*************************************************/

    /*! exports provided: PaymentPageModule */

    /***/
    function mDHw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
        return PaymentPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module */
      "HbOp");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_banks_ps_banks_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.module */
      "sUWf");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.module */
      "AR24");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.module */
      "rALU");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.module */
      "+PMX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component.module */
      "r5OZ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */
      "Uxj/");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component.module */
      "kQrs");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module */
      "F9YD");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_purpose_ps_complex_purpose_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-purpose/ps-complex-purpose.component.module */
      "SUTO");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_recurring_scheduler_ps_complex_recurring_scheduler_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-recurring-scheduler/ps-complex-recurring-scheduler.component.module */
      "yj1Z");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_swift_transfer_ps_complex_swift_transfer_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.module */
      "j8e8");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.module */
      "GNGv");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.module */
      "iNXY");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.module */
      "gByX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_bank_card_ps_lookup_beneficiaries_bank_card_component_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.module */
      "bH40");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_cash_ps_lookup_beneficiaries_cash_component_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.module */
      "VYJj");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_internal_ps_lookup_beneficiaries_internal_component_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-internal/ps-lookup-beneficiaries-internal.component.module */
      "GYV1");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_international_ps_lookup_beneficiaries_international_component_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-international/ps-lookup-beneficiaries-international.component.module */
      "Le12");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_card_ps_lookup_beneficiaries_local_card_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local-card/ps-lookup-beneficiaries-local-card.component.module */
      "YLwl");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_ps_lookup_beneficiaries_local_component_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-local/ps-lookup-beneficiaries-local.component.module */
      "32Le");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */
      "xB6I");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_purpose_ps_purpose_component_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.module */
      "1wDr");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_remittance_ps_remittance_component_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.module */
      "IRv+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-currencies/ps-dropdown-currencies.component.module */
      "SiC0");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_swift_account_list_ps_swift_account_list_component_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.module */
      "d4kQ");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./payment.page */
      "uV3x");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module */
      "AvcC");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_bank_details_ps_complex_beneficiary_bank_details_component_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-beneficiary-bank-details/ps-complex-beneficiary-bank-details.component.module */
      "UeDB");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.module */
      "jZF4");

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_35__["PaymentPage"]
      }];

      var PaymentPageModule = /*#__PURE__*/_createClass(function PaymentPageModule() {
        _classCallCheck(this, PaymentPageModule);
      });

      PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_34__["SharedModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_33__["PsTemplateStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_32__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_27__["PsLookupOwnAccountComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_30__["PsDropdownCurrenciesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_19__["PsInputVarcharComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_20__["PsInputFreeTextComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component_module__WEBPACK_IMPORTED_MODULE_10__["PsComplexExchangeComponentModule"], src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountsListComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_recurring_scheduler_ps_complex_recurring_scheduler_component_module__WEBPACK_IMPORTED_MODULE_13__["PsComplexRecurringSchedulerComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_17__["PsInputAccountNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexAmountComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_swift_transfer_ps_complex_swift_transfer_component_module__WEBPACK_IMPORTED_MODULE_14__["PsComplexSwiftTransferComponentModule"], src_app_commonBussinessSRC_psComponents_ps_swift_account_list_ps_swift_account_list_component_module__WEBPACK_IMPORTED_MODULE_31__["PsSwiftAccountListComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_internal_ps_lookup_beneficiaries_internal_component_module__WEBPACK_IMPORTED_MODULE_23__["PsLookupBeneficiariesInternalComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_international_ps_lookup_beneficiaries_international_component_module__WEBPACK_IMPORTED_MODULE_24__["PsLookupBeneficiariesInternationalComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_ps_lookup_beneficiaries_local_component_module__WEBPACK_IMPORTED_MODULE_26__["PsLookupBeneficiariesLocalComponentModule"], src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInternalBeneficiaryComponentModule"], src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInternationalBeneficiaryComponentModule"], src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_8__["PsLocalBeneficiaryComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_purpose_ps_complex_purpose_component_module__WEBPACK_IMPORTED_MODULE_12__["PsComplexPurposeModule"], src_app_commonBussinessSRC_psComponents_ps_purpose_ps_purpose_component_module__WEBPACK_IMPORTED_MODULE_28__["PsPurposeComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_16__["PsDateDayMonthYearFutureComponentModule"], src_app_commonBussinessSRC_psComponents_ps_banks_ps_banks_component_module__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponentModule"], src_app_commonBussinessSRC_psComponents_ps_remittance_ps_remittance_component_module__WEBPACK_IMPORTED_MODULE_29__["PsRemittanceComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_cash_ps_lookup_beneficiaries_cash_component_module__WEBPACK_IMPORTED_MODULE_22__["PsLookupBeneficiariesCashComponentModule"], src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component_module__WEBPACK_IMPORTED_MODULE_5__["PsCashTransferComponentModule"], src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_15__["PsEntityPhoneNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_11__["PsComplexIdDetailsModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_bank_card_ps_lookup_beneficiaries_bank_card_component_module__WEBPACK_IMPORTED_MODULE_21__["PsLookupBeneficiariesBankCardComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_beneficiaries_local_card_ps_lookup_beneficiaries_local_card_component_module__WEBPACK_IMPORTED_MODULE_25__["PsLookupBeneficiariesLocalCardComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_18__["PsInputCardNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_36__["PsFileUploadBSComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_bank_details_ps_complex_beneficiary_bank_details_component_module__WEBPACK_IMPORTED_MODULE_37__["PsComplexBeneficiaryBankDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component_module__WEBPACK_IMPORTED_MODULE_38__["PsComplexCifAccountComponentModule"]],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_35__["PaymentPage"]]
      })], PaymentPageModule);
      /***/
    },

    /***/
    "mpNL":
    /*!********************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.ts ***!
      \********************************************************************************/

    /*! exports provided: PsBanksComponent */

    /***/
    function mpNL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsBanksComponent", function () {
        return PsBanksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_banks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-banks.component.html */
      "D2J3");
      /* harmony import */


      var _ps_banks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-banks.component.scss */
      "6Ozt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsBanksComponent = /*#__PURE__*/function (_src_app_commonSRC_ps0) {
        function PsBanksComponent(commonService, logger) {
          var _this16;

          _classCallCheck(this, PsBanksComponent);

          _this16 = _callSuper(this, PsBanksComponent, [commonService, logger]);
          _this16.options = {};
          _this16.categoriesOptions = {};
          return _this16;
        }

        _inherits(PsBanksComponent, _src_app_commonSRC_ps0);

        return _createClass(PsBanksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoriesOptions = {
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CATEGORY_BANK,
              defaultLoad: true,
              category: {
                labelKey: this.options.categoryLabelKey,
                placeHolder: this.options.categoryPlaceholderKey,
                fcName: this.options.categoryFcName,
                group: this.options.group
              },
              subCategory: {
                labelKey: this.options.subCategoryLabelKey,
                placeHolder: this.options.subCategoryPlaceholderKey,
                fcName: this.options.subCategoryFcName,
                group: this.options.group
              },
              requestObject: this.options.requestObject
            };
          }
        }, {
          key: "onBankChanged",
          value: function onBankChanged(event) {
            this.onPsChange.emit(event);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsBanksComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsBanksComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsBanksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-banks',
        template: _raw_loader_ps_banks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_banks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsBanksComponent);
      /***/
    },

    /***/
    "musz":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function musz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-category-sub-category [options]=\"categoriesOptions\"></ps-category-sub-category>";
      /***/
    },

    /***/
    "oj4Y":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-remittance/ps-remittance.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oj4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-category-sub-category [options]=\"categoriesOptions\"></ps-category-sub-category>";
      /***/
    },

    /***/
    "pY1p":
    /*!**************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-purpose/ps-purpose.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function pY1p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1wdXJwb3NlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "rNEQ":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-cash/ps-lookup-beneficiaries-cash.component.scss ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rNEQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1jYXNoLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "rh9r":
    /*!****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-swift-transfer/ps-complex-swift-transfer.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: PsComplexSwiftTransferComponent */

    /***/
    function rh9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexSwiftTransferComponent", function () {
        return PsComplexSwiftTransferComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_swift_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-swift-transfer.component.html */
      "JEks");
      /* harmony import */


      var _ps_complex_swift_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-swift-transfer.component.scss */
      "9oYr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author Zunair.Zakir
       * @since 29/01/2020
       *
       * <p> PsComplexSwiftTransferComponent is complex component to show Swift list fetched from server</p>
       */


      var PsComplexSwiftTransferComponent = /*#__PURE__*/function (_src_app_commonSRC_ps1) {
        function PsComplexSwiftTransferComponent(commonService, logger, omniPull) {
          var _this17;

          _classCallCheck(this, PsComplexSwiftTransferComponent);

          _this17 = _callSuper(this, PsComplexSwiftTransferComponent, [commonService, logger]);
          _this17.commonService = commonService;
          _this17.omniPull = omniPull;
          _this17.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this17.options = {};
          _this17.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_swift_account_found_kay'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this17.onSwifttChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this17.labelValuesMap = new Map();

          _this17.populateSwiftMap();

          return _this17;
        }

        _inherits(PsComplexSwiftTransferComponent, _src_app_commonSRC_ps1);

        return _createClass(PsComplexSwiftTransferComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexSwiftTransferComponent, "init", this, 3)([]);

            this.loadSwiftAccounts();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
          }
          /**
           * populating SwiftAccounts - fetching from server
           */

        }, {
          key: "loadSwiftAccounts",
          value: function loadSwiftAccounts() {
            this.options.listOfSwiftAccounts = [];
            var requestData = {};
            this.returnSwiftAccounts(requestData);
          }
          /**
           * fetching SwiftAccounts from server
           * @param requestData IOmniBeneficiaryRequest
           */

        }, {
          key: "returnSwiftAccounts",
          value: function returnSwiftAccounts(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this18 = this;

              var result, data;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this18.logger.error('Error: While fetching accounts in PsComplexSwiftTransferComponent :', error);
                    });

                  case 1:
                    result = _context8.v;

                    if (result && result.gridModel.length > 0) {} else {
                      this.listOfSwiftAccounts = [];
                      data = [{
                        swiftAccountNumber: '5422345234',
                        swiftBankName: 'iMAL Islamic core banking',
                        swiftName: 'Zunair',
                        swiftNameSub: 'Zakir Hussain'
                      }, {
                        swiftAccountNumber: '23434234324',
                        swiftBankName: 'iMAL Platform',
                        swiftName: 'Test User',
                        swiftNameSub: 'Sub name'
                      }];
                      this.complexLookupOptions.listOfOptions = data;
                      this.options.listOfSwiftAccounts = data;
                      this.listOfSwiftAccounts = data;
                    }

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
          /**
           * preparing request data
           * @param cifInfo: any
           */
          // private prepareRequestData(cifInfo: any): IOmniAccountRequest {
          //   let requestData: IOmniAccountRequest = {};
          //   if (cifInfo && cifInfo.omniUserVO) {
          //     requestData = {
          //       // vsBranchCode: cifInfo.branchCode,
          //       userCifNo: cifInfo.omniUserVO.CIF_NO
          //     };
          //   }
          //   if (this.options.glTypes != null && this.options.glTypes !== undefined && this.options.glTypes !== '') {
          //     requestData.permittedGls = this.options.glTypes;
          //   }
          //   if (this.options.accountAllowedCurrencies != null && this.options.accountAllowedCurrencies !== undefined) {
          //     if (typeof this.options.accountAllowedCurrencies === 'string') {
          //       requestData.accountAllowedCurrencies = this.options.accountAllowedCurrencies;
          //     } else {
          //       let temp = '';
          // eslint-disable-next-line , guard-for-in
          //       for (const val in this.options.accountAllowedCurrencies) {
          //         const value = this.options.accountAllowedCurrencies[val].itemValue;
          //         temp += value + ',';
          //       }
          //       temp = temp.slice(0, temp.lastIndexOf(','));
          //       requestData.accountAllowedCurrencies = temp;
          //     }
          //   }
          //   if (this.options.accountAllowedTypes != null && this.options.accountAllowedTypes !== undefined) {
          //     if (typeof this.options.accountAllowedTypes === 'string') {
          //       requestData.accountAllowedTypes = this.options.accountAllowedTypes;
          //     } else {
          //       let temp = '';
          // eslint-disable-next-line guard-for-in
          //       for (const val in this.options.accountAllowedTypes) {
          //         const value = this.options.accountAllowedTypes[val].itemValue;
          //         temp += value + ',';
          //       }
          //       temp = temp.slice(0, temp.lastIndexOf(','));
          //       requestData.accountAllowedTypes = temp;
          //     }
          //   }
          //   return requestData;
          // }

          /**
           * will fetch the list of accounts from server based currecy filter
           */

        }, {
          key: "fetchAccountBasedOnCurrency",
          value: function fetchAccountBasedOnCurrency(currency) {
            // TODO: when service is available: account list will be fetched from server based on currency if passed any
            return this.options.listOfSwiftAccounts;
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.logger.log(event); // TODO: get the updated data from server
          }
        }, {
          key: "populateSwiftMap",
          value: function populateSwiftMap() {
            var swiftAccountNumberMap = {};
            var swiftBankNameMap = {};
            swiftAccountNumberMap = {
              key: 'swiftAccountNumber',
              value: '--- --- ---',
              isEdit: false
            };
            swiftBankNameMap = {
              key: 'swiftBankName',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('swift_account_key', swiftAccountNumberMap);
            this.labelValuesMap.set('bank_name_key', swiftBankNameMap);
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.logger.log('Swift Account Item', event.item);
            this.onSwifttChange.emit(event.item);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"]);

      PsComplexSwiftTransferComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsComplexSwiftTransferComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onSwifttChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsComplexSwiftTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-swift-transfer',
        template: _raw_loader_ps_complex_swift_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_swift_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsComplexSwiftTransferComponent);
      /***/
    },

    /***/
    "sUWf":
    /*!***************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-banks/ps-banks.component.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: PsBanksComponentModule */

    /***/
    function sUWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsBanksComponentModule", function () {
        return PsBanksComponentModule;
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


      var _ps_banks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-banks.component */
      "mpNL");

      var PsBanksComponentModule = /*#__PURE__*/_createClass(function PsBanksComponentModule() {
        _classCallCheck(this, PsBanksComponentModule);
      });

      PsBanksComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_banks_component__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_banks_component__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponent"]],
        entryComponents: [_ps_banks_component__WEBPACK_IMPORTED_MODULE_4__["PsBanksComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsBanksComponentModule);
      /***/
    },

    /***/
    "vRU4":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearPastComponentModule */

    /***/
    function vRU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponentModule", function () {
        return PsDateDayMonthYearPastComponentModule;
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
      /*! ../../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-date-day-month-year.component.module */
      "jSSe");
      /* harmony import */


      var _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-date-day-month-year-past.component */
      "ngfJ");

      var PsDateDayMonthYearPastComponentModule = /*#__PURE__*/_createClass(function PsDateDayMonthYearPastComponentModule() {
        _classCallCheck(this, PsDateDayMonthYearPastComponentModule);
      });

      PsDateDayMonthYearPastComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponentModule"]],
        exports: [_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]],
        entryComponents: [_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDateDayMonthYearPastComponentModule);
      /***/
    },

    /***/
    "vgQz":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-beneficiaries-bank-card/ps-lookup-beneficiaries-bank-card.component.scss ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vgQz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtYmVuZWZpY2lhcmllcy1iYW5rLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "wsER":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wsER(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-input [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"onInputChanged($event)\"></ps-keyin-input>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment-payment-module-es5.js.map