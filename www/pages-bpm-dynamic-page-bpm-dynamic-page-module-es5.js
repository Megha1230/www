(function () {
  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bpm-dynamic-page-bpm-dynamic-page-module"], {
    /***/
    "++mf":
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.html ***!
      \*****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [options]=\"options\" (onPsChange)=\"onChange($event)\" ></ps-select-dropdown>";
      /***/
    },

    /***/
    "+9nY":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"selectDropDownChange($event)\">\n</ps-select-dropdown>";
      /***/
    },

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
    "1L8/":
    /*!********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.html ***!
      \********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L8_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex [id]=\"'terms_and_conditions' + id\" class=\"ps-complex-terms-and-conditions\">\r\n    <div class=\"ps-terms-cond-file\">\r\n        <ps-container-html-viewer [options]=\"options.htmlViewerOptions\">\r\n        </ps-container-html-viewer>\r\n        <div class=\"ps-terms-cond-checkbox\">\r\n            <ps-select-checkbox [id]=\"'terms_and_conditions' + id\" [options]=\"options.checkBoxOptions\"\r\n                (onPsChange)=\"onChange($event)\">\r\n            </ps-select-checkbox>\r\n        </div>\r\n    </div>\r\n</ps-container-complex>";
      /***/
    },

    /***/
    "4GcI":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.scss ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1uYXRpb25hbGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "4X+U":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component.scss ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1mdW5kLXNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "6Nlt":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component.scss ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nlt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi13ZWFsdGgtc291cmNlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "6eaE":
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: PsComplexTermsAndConditionsComponent */

    /***/
    function eaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexTermsAndConditionsComponent", function () {
        return PsComplexTermsAndConditionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_terms_and_conditions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-terms-and-conditions.component.html */
      "1L8/");
      /* harmony import */


      var _ps_complex_terms_and_conditions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-terms-and-conditions.component.scss */
      "fyCU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base.component */
      "wYHK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /*
      Author: H.Hassan
      Date: 21Oct2019
      WI: #915289
      ps-template-terms-and-conditions
      */


      var PsComplexTermsAndConditionsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexTermsAndConditionsComponent(commonProv, loggerP) {
          var _this2;

          _classCallCheck(this, PsComplexTermsAndConditionsComponent);

          _this2 = _callSuper(this, PsComplexTermsAndConditionsComponent, [commonProv, loggerP]);
          _this2.commonProv = commonProv;
          _this2.onPsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.options = {};
          return _this2;
        }

        _inherits(PsComplexTermsAndConditionsComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexTermsAndConditionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.options.checkBoxOptions.labelKey = this.options.chargesAmount ? this.options.chargesAmount + this.options.checkBoxOptions.labelKey : this.options.checkBoxOptions.labelKey;

            if (this.options && !(this.options.htmlViewerOptions && this.options.htmlViewerOptions.fileName)) {
              this.options.htmlViewerOptions = {
                fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].defaultTermsAndConditions,
                parseHtmlFromFile: true
              };
            } // this.options.checkBoxOptions.labelKey = this.options.checkBoxOptions.labelKey;

          } // handle checkbox change
          //edited by Marina jira-AZDB-1294; terms and conditions checkbox shouldn't have a false value

        }, {
          key: "onChange",
          value: function onChange(event) {
            if (event.newValue == false || event.newValue == "false") {
              this.options.checkBoxOptions.group.controls[this.options.checkBoxOptions.fcName].reset();
            }

            this.onPsChange.emit(event);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseComponent"]);

      PsComplexTermsAndConditionsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsComplexTermsAndConditionsComponent.propDecorators = {
        onPsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexTermsAndConditionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-terms-and-conditions',
        template: _raw_loader_ps_complex_terms_and_conditions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_terms_and_conditions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsComplexTermsAndConditionsComponent);
      /***/
    },

    /***/
    "8WI6":
    /*!*********************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PsTemplateBPMFlow */

    /***/
    function WI6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateBPMFlow", function () {
        return PsTemplateBPMFlow;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_template_bpm_flow_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-template-bpm-flow.template.html */
      "AFXa");
      /* harmony import */


      var _ps_template_bpm_flow_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-template-bpm-flow.template.scss */
      "jHwt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_integration_JBPM_jbpm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/integration/JBPM/jbpm.service */
      "c8v/");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_business_mapping_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-business-mapping-constants */
      "FUl9");
      /* harmony import */


      var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../psServices/Event/event.service */
      "r40+");
      /* harmony import */


      var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../ps-template-base/ps-template-base.page */
      "uqA0"); // import { PsComplexMediaCaptureComponent } from 'src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component';


      var PsTemplateBPMFlow = /*#__PURE__*/function (_ps_template_base_ps_) {
        function PsTemplateBPMFlow(bpmService, events) {
          var _this3;

          _classCallCheck(this, PsTemplateBPMFlow);

          _this3 = _callSuper(this, PsTemplateBPMFlow);
          _this3.bpmService = bpmService;
          _this3.events = events;
          _this3.mainComponentList = [];
          _this3.mainComponentListToIterateOver = [];
          _this3.keysToCheck = ["fcName", "id"];
          _this3.nextDefaultLabelKey = 'next_key';
          _this3.nextOptions = {
            labelKey: _this3.nextDefaultLabelKey,
            group: _this3.options.group
          };
          _this3.previousOptions = {
            labelKey: 'previous_key',
            group: _this3.options.group
          };
          _this3.currentIndex = 0;
          _this3.animationListForward = ["flipInX"];
          _this3.animationListBackward = ["slideInLeft"
          /* , "slide-bottom", "slide-right" */
          ];
          _this3.flowDirection = "forward";
          _this3.arrowIconOptios = {
            iconName: 'arrow-back',
            allowCust: true
          };
          return _this3;
        }

        _inherits(PsTemplateBPMFlow, _ps_template_base_ps_);

        return _createClass(PsTemplateBPMFlow, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.options.group) {
                      if (_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].isEmptyObject(this.options.requestObject)) {
                        this.options.requestObject = {};
                      }

                      this.commonProv.setFormData(this.options.group, this.options.requestObject);

                      if (this.options && this.options.bpmTemplate && this.options.bpmTemplate.taskTemplate) {
                        this.createListFromTemplate(this.options.bpmTemplate.taskTemplate, this.options.bpmTemplate.JBPM);
                      }

                      if (this.options.requestObject.activeStep) {
                        this.currentIndex = this.options.requestObject.activeStep;
                      }

                      this.generateStep();
                    }

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "totalNumberOfSteps",
          value: function totalNumberOfSteps() {
            return this.mainComponentList.length;
          }
        }, {
          key: "createGroupIfFcnameIsPresent",
          value: function createGroupIfFcnameIsPresent(object) {
            this.createGroupIfFcnameIsPresentMain(object);
            return object;
          }
        }, {
          key: "createGroupIfFcnameIsPresentMain",
          value: function createGroupIfFcnameIsPresentMain(object) {
            var _this4 = this;

            Object.keys(object).forEach(function (key) {
              if (_this4.keysToCheck.includes(key)) {
                object.group = _this4.options.group;
              }

              if (typeof object[key] === 'object' && object[key] !== null) {
                _this4.createGroupIfFcnameIsPresentMain(object[key]);
              }
            });
          }
        }, {
          key: "createListFromTemplate",
          value: function createListFromTemplate(taskTemplate, JBPM) {
            var _this5 = this;

            taskTemplate.forEach(function (step) {
              step.JBPM = JBPM;
              step.dynamicComponents.forEach(function (element) {
                var comp = element.component;
                comp = src_app_commonBussinessSRC_psServices_models_ps_common_business_mapping_constants__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinesstMappingConstants"].getComponent(comp);
                element.component = comp;

                var options = _this5.createGroupIfFcnameIsPresent(element.componentOptions);

                element.componentOptions = options;
              });

              _this5.mainComponentList.push(step);
            });
          }
        }, {
          key: "nextWasClicked",
          value: function nextWasClicked() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var validationResult, response, completeParams, newParams, finalParams, bpmResponse, step, JBPM;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (!this.mainWrapper) {
                      _context2.n = 5;
                      break;
                    }

                    validationResult = this.getStepValidations(true);

                    if (!validationResult.isValid) {
                      _context2.n = 5;
                      break;
                    }

                    response = {};

                    if (!this.currentStep.serviceToCall) {
                      _context2.n = 2;
                      break;
                    }

                    this.commonProv.presentLoading();
                    _context2.n = 1;
                    return this.commonProv.http.commonRequestAjax(this.currentStep.serviceToCall, this.options.requestObject);

                  case 1:
                    response = _context2.v;
                    this.commonProv.dismissLoading();

                  case 2:
                    if (!this.currentStep.shouldCallComplete) {
                      _context2.n = 4;
                      break;
                    }

                    this.commonProv.presentLoading();
                    completeParams = _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].valFromNestedObj('screenMarkup.completeParams', this.currentStep.JBPM);
                    newParams = _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].createBPMParams(completeParams, this.options.requestObject, this.commonProv.session, 'out');
                    finalParams = Object.assign(Object.assign({}, this.currentStep.JBPM.taskInfo), {
                      bpmStepFlow: true,
                      bpmParametersMap: Object.assign({}, newParams)
                    });
                    finalParams.bpmProcessInstanceId = finalParams.processInstanceId; // to be done from backend side

                    _context2.n = 3;
                    return this.bpmService.completeBpmTask(finalParams);

                  case 3:
                    bpmResponse = _context2.v;
                    this.commonProv.dismissLoading();

                    if (bpmResponse && bpmResponse.screenMarkup && bpmResponse.screenMarkup.taskTemplate) {
                      step = JSON.parse(bpmResponse.screenMarkup.taskTemplate);

                      if (bpmResponse.taskTemplateIndex) {
                        JBPM = bpmResponse.gridModel[bpmResponse.screenMarkup.taskTemplateIndex];
                      }

                      this.createListFromTemplate(step, JBPM);
                    }

                  case 4:
                    if (this.currentIndex + 1 < this.totalNumberOfSteps()) {
                      this.flowDirection = "forward";
                      this.commonNavigationFlow();
                      this.currentIndex++;
                      this.generateStep();
                    }

                  case 5:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "previousWasClicked",
          value: function previousWasClicked() {
            var _this6 = this;

            if (this.mainWrapper) {
              this.getStepValidations();

              if (this.currentStep.clearStepData && this.currentStep.validationResult.mapOfControls && Object.keys(this.currentStep.validationResult.mapOfControls).length > 0) {
                var keys = Object.keys(this.currentStep.validationResult.mapOfControls);
                keys.forEach(function (element) {
                  _this6.removeControl(element);
                });
              }

              this.flowDirection = "backward";
              this.commonNavigationFlow();
              this.currentIndex--;
              this.generateStep();

              if (this.currentStep.isDecisionMaker) {
                for (var index = this.currentIndex + 1; index < this.mainComponentList.length; index++) {
                  var removedStep = this.mainComponentList[index];

                  if (removedStep && removedStep.validationResult && removedStep.validationResult.mapOfControls) {
                    var _keys = Object.keys(removedStep.validationResult.mapOfControls);

                    _keys.forEach(function (element) {
                      _this6.removeControl(element);
                    });
                  }
                }

                this.mainComponentList.splice(this.currentIndex + 1);
              }
            }
          }
        }, {
          key: "removeControl",
          value: function removeControl(element) {
            this.options.group.removeControl(element);

            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].deletePropFromObj(this.options.group.controls['formData'].value, element);
          }
        }, {
          key: "getStepValidations",
          value: function getStepValidations() {
            var validation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var validationResult = this.commonProv.returnElementFormControlsAsAbstractFC(this.options.group, this.mainWrapper.nativeElement, validation);
            this.currentStep.validationResult = validationResult;
            return validationResult;
          }
        }, {
          key: "generateStep",
          value: function generateStep() {
            this.currentStep = this.mainComponentList[this.currentIndex];
            this.mainComponentListToIterateOver.push(this.currentStep);

            if (this.currentStep.serviceToCall) {
              this.nextOptions.labelKey = 'validate_and_proceed_key';
            } else {
              this.nextOptions.labelKey = this.nextDefaultLabelKey;
            }

            this.options.requestObject[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].LAST_ACTIVE_STEP] = this.currentIndex;
          }
        }, {
          key: "commonNavigationFlow",
          value: function commonNavigationFlow() {
            this.previousStep = this.mainComponentListToIterateOver.pop();
            delete this.previousStep.stepAnimation;
          }
        }, {
          key: "getRandomAnimation",
          value: function getRandomAnimation(component) {
            if (this.flowDirection == "forward") {
              component.stepAnimation = this.animationListForward[Math.floor(Math.random() * this.animationListForward.length)];
            } else {
              component.stepAnimation = this.animationListBackward[Math.floor(Math.random() * this.animationListBackward.length)];
            }
          }
        }, {
          key: "getNextOptions",
          value: function getNextOptions() {
            return {
              labelKey: this.currentStep.customNextLabel ? this.currentStep.customNextLabel : this.nextOptions.labelKey,
              group: this.options.group
            };
          }
        }, {
          key: "onCompChange",
          value: function onCompChange(value, compOptions) {
            this.triggerNextAutomatically(compOptions);
          }
        }, {
          key: "onCompClick",
          value: function onCompClick(value, compOptions) {
            this.triggerNextAutomatically(compOptions);
          }
        }, {
          key: "triggerNextAutomatically",
          value: function triggerNextAutomatically(compOptions) {
            if (compOptions.triggerNextAutomatically) {
              this.nextWasClicked();
            }
          }
        }]);
      }(_ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_9__["PsTemplateBasePage"]);

      PsTemplateBPMFlow.ctorParameters = function () {
        return [{
          type: src_app_commonBussinessSRC_psServices_integration_JBPM_jbpm_service__WEBPACK_IMPORTED_MODULE_4__["JBPMService"]
        }, {
          type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__["Events"]
        }];
      };

      PsTemplateBPMFlow.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dynamicComponentReference: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ["dynamicComponentReference"]
        }],
        mainWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mainWrapper', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }]
      };
      PsTemplateBPMFlow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-bpm-flow',
        template: _raw_loader_ps_template_bpm_flow_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_bpm_flow_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_integration_JBPM_jbpm_service__WEBPACK_IMPORTED_MODULE_4__["JBPMService"], _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__["Events"]])], PsTemplateBPMFlow);
      /***/
    },

    /***/
    "AFXa":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AFXa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-screen>\n  <ps-action-icon *ngIf=\"currentIndex>0\" class=\"previous-step\" id=\"back_icon\" [options]='arrowIconOptios'\n    (onClick)=\"previousWasClicked()\">\n  </ps-action-icon>\n  <ng-container *ngIf=\"mainComponentListToIterateOver && mainComponentListToIterateOver.length>0\">\n    <ng-container *ngFor=\"let rootComponent of mainComponentListToIterateOver; let i = index\">\n      <div #mainWrapper class=\"main-wrapper ps-animation\"\n        [ngClass]=\"rootComponent.stepAnimation?rootComponent.stepAnimation: getRandomAnimation(rootComponent)\">\n\n        <ps-label-header class=\"header-title\" [options]=\"rootComponent.headerLabel\" [ngClass]=\"'header-title-'+i\">\n        </ps-label-header>\n\n        <ng-container *ngFor=\"let compOptions of rootComponent.dynamicComponents; let j = index\">\n          <div class=\"component-wrapper\" [ngClass]=\"'component-wrapper-'+i+'-'+j\">\n            <ps-dynamic-component-loader [options]='compOptions' #dynamicComponentReference\n              (onPsCompChange)=\"onCompChange($event,compOptions)\" (onClick)=\"onCompClick($event,compOptions)\">\n            </ps-dynamic-component-loader>\n          </div>\n        </ng-container>\n\n      </div>\n    </ng-container>\n  </ng-container>\n  <ng-container psFooter>\n    <ps-button-next [id]=\"id + '_next_btn'\" class=\"next-step\"\n      *ngIf=\" (!currentStep.hideNextButton && !currentStep.isFinalStep)\" [options]=\"getNextOptions()\"\n      (onClick)=\"nextWasClicked()\">\n    </ps-button-next>\n  </ng-container>\n</ps-template-screen>";
      /***/
    },

    /***/
    "AGta":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: PsDropdownWealthSourcesComponent */

    /***/
    function AGta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownWealthSourcesComponent", function () {
        return PsDropdownWealthSourcesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_wealth_sources_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-wealth-sources.component.html */
      "OfGH");
      /* harmony import */


      var _ps_dropdown_wealth_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-wealth-sources.component.scss */
      "6Nlt");
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

      var PsDropdownWealthSourcesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsDropdownWealthSourcesComponent(commonService, logger, omniPullService) {
          var _this7;

          _classCallCheck(this, PsDropdownWealthSourcesComponent);

          _this7 = _callSuper(this, PsDropdownWealthSourcesComponent, [commonService, logger]);
          _this7.omniPullService = omniPullService;
          _this7.options = {};
          _this7.defaultOptions = {
            listOfOptions: []
          };
          return _this7;
        }

        _inherits(PsDropdownWealthSourcesComponent, _src_app_commonSRC_ps2);

        return _createClass(PsDropdownWealthSourcesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.loadFundSources();
          }
        }, {
          key: "loadFundSources",
          value: function loadFundSources() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var wealthSources, _iterator, _step, iterator, wealthSource;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    wealthSources = {
                      gridModel: [{
                        briefDesc: "Employment Earnings",
                        longDesc: "Employment Earnings",
                        code: "248"
                      }, {
                        briefDesc: "Commisions",
                        longDesc: "Commisions",
                        code: "268"
                      }, {
                        briefDesc: "Business Income",
                        longDesc: "Business Income",
                        code: "278"
                      }, {
                        briefDesc: "Business Earnings",
                        longDesc: "Business Earnings",
                        code: "898"
                      }, {
                        briefDesc: "Investment Earning",
                        longDesc: "Investment Earning",
                        code: "874"
                      }, {
                        briefDesc: "Centrelink Funds",
                        longDesc: "Centrelink Funds",
                        code: "894"
                      }]
                    };

                    if (wealthSources && wealthSources.gridModel && wealthSources.gridModel.length > 0) {
                      _iterator = _createForOfIteratorHelper(wealthSources.gridModel);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          iterator = _step.value;
                          wealthSource = {
                            itemValue: iterator.code,
                            description: iterator.briefDesc,
                            selectedObj: iterator
                          };
                          this.defaultOptions.listOfOptions.push(wealthSource);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                    }

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "selectDropDownChange",
          value: function selectDropDownChange(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownWealthSourcesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownWealthSourcesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownWealthSourcesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-wealth-sources',
        template: _raw_loader_ps_dropdown_wealth_sources_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_wealth_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownWealthSourcesComponent);
      /***/
    },

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

      var PsDateDayMonthYearComponent = /*#__PURE__*/function (_commonSRC_psComponen2) {
        function PsDateDayMonthYearComponent(commonProv, loggerP, events) {
          var _this8;

          _classCallCheck(this, PsDateDayMonthYearComponent);

          _this8 = _callSuper(this, PsDateDayMonthYearComponent, [commonProv, loggerP, events]);
          _this8.commonProv = commonProv;
          _this8.dateOptions = {};
          _this8.omniPull = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].injectionHandler(_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]);
          return _this8;
        }

        _inherits(PsDateDayMonthYearComponent, _commonSRC_psComponen2);

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
    "EBce":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.scss ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EBce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLXBhc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "FUl9":
    /*!**********************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psServices/models/ps-common-business-mapping-constants.ts ***!
      \**********************************************************************************************/

    /*! exports provided: PsCommonBusinesstMappingConstants */

    /***/
    function FUl9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsCommonBusinesstMappingConstants", function () {
        return PsCommonBusinesstMappingConstants;
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


      var src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_button_ps_button_next_ps_button_next_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-action/ps-action-button/ps-button-next/ps-button-next.component */
      "WmIV");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_icon_ps_action_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-action/ps-action-icon/ps-action-icon.component */
      "ilDp");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template */
      "gkmT");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template */
      "kRg/");
      /* harmony import */


      var _psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component */
      "Aoll");
      /* harmony import */


      var _psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component */
      "xdyT");
      /* harmony import */


      var _psComponents_ps_complex_components_ps_complex_password_confirm_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component */
      "jedr");
      /* harmony import */


      var _psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component */
      "6eaE");
      /* harmony import */


      var _psComponents_ps_complex_components_ps_complex_widget_dropdowns_ps_complex_widget_dropdowns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component */
      "Sx1r");
      /* harmony import */


      var _psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component */
      "7Cko");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component */
      "ngfJ");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component */
      "x3b/");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_input_email_ps_input_email_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-input-email/ps-input-email.component */
      "P7Z/");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component */
      "+BRL");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component */
      "WAnK");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_input_passcode_ps_input_passcode_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component */
      "RW5F");
      /* harmony import */


      var _psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component */
      "/QlS");
      /* harmony import */


      var _psComponents_ps_label_ps_label_header_description_ps_label_header_description_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../psComponents/ps-label/ps-label-header-description/ps-label-header-description.component */
      "AYhJ");
      /* harmony import */


      var _psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../psComponents/ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component */
      "7/W0");
      /* harmony import */


      var _psComponents_ps_select_dropdown_ps_dropdown_fund_sources_ps_dropdown_fund_sources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component */
      "TqLw");
      /* harmony import */


      var _psComponents_ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component */
      "dUiw");
      /* harmony import */


      var _psComponents_ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component */
      "WGyA");
      /* harmony import */


      var _psComponents_ps_select_dropdown_ps_dropdown_wealth_sources_ps_dropdown_wealth_sources_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component */
      "AGta");

      var PsCommonBusinesstMappingConstants = /*#__PURE__*/function () {
        function PsCommonBusinesstMappingConstants() {// this.componentsList[IComponentNameMapping.PsComplexCallSlotComponent] = PsComplexCallSlotComponent;
          // this.componentsList[IComponentNameMapping.PsActionIconComponent] = PsActionIconComponent;
          // this.componentsList[IComponentNameMapping.PsComplexMediaCaptureComponent] = PsComplexMediaCaptureComponent;
          // this.componentsList[IComponentNameMapping.PsSelectDropdownComponent] = PsSelectDropdownComponent;
          // this.componentsList[IComponentNameMapping.PsComplexPasswordConfirmComponent] = PsComplexPasswordConfirmComponent;

          _classCallCheck(this, PsCommonBusinesstMappingConstants);
        }

        return _createClass(PsCommonBusinesstMappingConstants, null, [{
          key: "getComponent",
          value: function getComponent(componentName) {
            return this.componentsList[componentName];
          }
        }]);
      }();

      PsCommonBusinesstMappingConstants.componentsList = {
        PsActionIconComponent: src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_icon_ps_action_icon_component__WEBPACK_IMPORTED_MODULE_3__["PsActionIconComponent"],
        PsComplexCallSlotComponent: _psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexCallSlotComponent"],
        PsComplexMediaCaptureComponent: _psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexMediaCaptureComponent"],
        PsComplexPasswordConfirmComponent: _psComponents_ps_complex_components_ps_complex_password_confirm_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexPasswordConfirmComponent"],
        PsSelectDropdownComponent: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"],
        PsKeyinInputComponent: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"],
        PsTemplateForm: src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateForm"],
        PsTemplateStepper: src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateStepper"],
        PsComplexWidgetDropdownsComponent: _psComponents_ps_complex_components_ps_complex_widget_dropdowns_ps_complex_widget_dropdowns_component__WEBPACK_IMPORTED_MODULE_12__["PsComplexWidgetDropdownsComponent"],
        PsComplexTermsAndConditionsComponent: _psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexTermsAndConditionsComponent"],
        PsInputPasscodeComponent: _psComponents_ps_keyin_input_ps_input_passcode_ps_input_passcode_component__WEBPACK_IMPORTED_MODULE_19__["PsInputPasscodeComponent"],
        PsEntityPhoneNumberComponent: _psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component__WEBPACK_IMPORTED_MODULE_13__["PsEntityPhoneNumberComponent"],
        PsLabelHeaderDescriptionComponent: _psComponents_ps_label_ps_label_header_description_ps_label_header_description_component__WEBPACK_IMPORTED_MODULE_21__["PsLabelHeaderDescriptionComponent"],
        PsInputEmailComponent: _psComponents_ps_keyin_input_ps_input_email_ps_input_email_component__WEBPACK_IMPORTED_MODULE_16__["PsInputEmailComponent"],
        PsInputNumericComponent: _psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_18__["PsInputNumericComponent"],
        PsDropdownNationalitiesComponent: _psComponents_ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_24__["PsDropdownNationalitiesComponent"],
        PsDropdownOccupationComponent: _psComponents_ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_25__["PsDropdownOccupationComponent"],
        PsDateDayMonthYearPastComponent: _psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_14__["PsDateDayMonthYearPastComponent"],
        PsInputFreeTextComponent: _psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_17__["PsInputFreeTextComponent"],
        PsInputVarcharComponent: _psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component__WEBPACK_IMPORTED_MODULE_20__["PsInputVarcharComponent"],
        PsInputCardNumberComponent: _psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_15__["PsInputCardNumberComponent"],
        PsDropdownFundSourcesComponent: _psComponents_ps_select_dropdown_ps_dropdown_fund_sources_ps_dropdown_fund_sources_component__WEBPACK_IMPORTED_MODULE_23__["PsDropdownFundSourcesComponent"],
        PsDropdownWealthSourcesComponent: _psComponents_ps_select_dropdown_ps_dropdown_wealth_sources_ps_dropdown_wealth_sources_component__WEBPACK_IMPORTED_MODULE_26__["PsDropdownWealthSourcesComponent"],
        PsDropdownCountryComponent: _psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component__WEBPACK_IMPORTED_MODULE_22__["PsDropdownCountryComponent"],
        PsButtonNextComponent: src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_button_ps_button_next_ps_button_next_component__WEBPACK_IMPORTED_MODULE_2__["PsButtonNextComponent"]
      };

      PsCommonBusinesstMappingConstants.ctorParameters = function () {
        return [];
      };

      PsCommonBusinesstMappingConstants = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PsCommonBusinesstMappingConstants);
      /***/
    },

    /***/
    "GlqB":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/bpm-dynamic-page/bpm-dynamic-page.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BpmDynamicPagePageModule */

    /***/
    function GlqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BpmDynamicPagePageModule", function () {
        return BpmDynamicPagePageModule;
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


      var src_app_commonSRC_psTemplates_ps_template_bpm_flow_ps_template_bpm_flow_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.module */
      "jUhy");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _bpm_dynamic_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bpm-dynamic-page.page */
      "dlXr");

      var routes = [{
        path: '',
        component: _bpm_dynamic_page_page__WEBPACK_IMPORTED_MODULE_5__["BpmDynamicPagePage"]
      }];

      var BpmDynamicPagePageModule = /*#__PURE__*/_createClass(function BpmDynamicPagePageModule() {
        _classCallCheck(this, BpmDynamicPagePageModule);
      });

      BpmDynamicPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psTemplates_ps_template_bpm_flow_ps_template_bpm_flow_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateBPMFlowModule"]],
        declarations: [_bpm_dynamic_page_page__WEBPACK_IMPORTED_MODULE_5__["BpmDynamicPagePage"]]
      })], BpmDynamicPagePageModule);
      /***/
    },

    /***/
    "Iq5Ni":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Iq5Ni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1wYXNzY29kZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LaLV":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LaLV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-input [id]=\"id\" class=\"ps-input-card-number\" [options]=\"defaultOptions\" (keyup)=\"changeCardIcon($event)\">\r\n</ps-keyin-input>";
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
    "OfGH":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OfGH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"selectDropDownChange($event)\">\n</ps-select-dropdown>";
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

      var PsInputEmailComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PsInputEmailComponent(commonP, loggerP) {
          var _this9;

          _classCallCheck(this, PsInputEmailComponent);

          _this9 = _callSuper(this, PsInputEmailComponent, [commonP, loggerP]);
          _this9.mainOptions = {};
          return _this9;
        }

        _inherits(PsInputEmailComponent, _src_app_commonSRC_ps3);

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
    "RW5F":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PsInputPasscodeComponent */

    /***/
    function RW5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputPasscodeComponent", function () {
        return PsInputPasscodeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_passcode_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-passcode.component.html */
      "ps3I");
      /* harmony import */


      var _ps_input_passcode_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-passcode.component.scss */
      "Iq5Ni");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_entity_ps_field_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-entity/ps-field-entity.component */
      "k3/b");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsInputPasscodeComponent = /*#__PURE__*/function (_src_app_commonSRC_ps4) {
        function PsInputPasscodeComponent(common, logger) {
          var _this0;

          _classCallCheck(this, PsInputPasscodeComponent);

          _this0 = _callSuper(this, PsInputPasscodeComponent, [common, logger]);
          _this0.common = common;
          _this0.logger = logger;
          _this0.onPsKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this0.defaultOptions = {
            type: 'number',
            mask: {
              regex: '^[0-9]$'
            }
          };
          _this0.passcodeItemOptions = {
            psClass: 'ps-input-passcode'
          };
          _this0.codeDigitsOptions = [];
          return _this0;
        }

        _inherits(PsInputPasscodeComponent, _src_app_commonSRC_ps4);

        return _createClass(PsInputPasscodeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);

            for (var index = 0; index < 4; index++) {
              var digit = {
                fcName: this.defaultOptions.fcName + index,
                group: this.defaultOptions.group,
                mask: {
                  regex: this.defaultOptions.mask.regex
                }
              };
              this.codeDigitsOptions.push(digit);
            }

            this.commonProv.setFormData(this.entityFormGroup, this.options.requestObject);
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(event) {
            var _a, _b;

            if (event) {
              var inputValue = '';

              var _iterator2 = _createForOfIteratorHelper(this.codeDigitsOptions),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var digit = _step2.value;

                  if ((_a = this.options.group.controls[digit.fcName]) === null || _a === void 0 ? void 0 : _a.value) {
                    inputValue += (_b = this.options.group.controls[digit.fcName]) === null || _b === void 0 ? void 0 : _b.value;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.setEntityValue(parseInt(inputValue));
            }
          }
        }, {
          key: "moveToNextDigit",
          value: function moveToNextDigit(field) {
            this.onPsKeyUp.emit(field);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_entity_ps_field_entity_component__WEBPACK_IMPORTED_MODULE_4__["PsFieldEntityComponent"]);

      PsInputPasscodeComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsInputPasscodeComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onPsKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsInputPasscodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-passcode',
        template: _raw_loader_ps_input_passcode_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_passcode_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsInputPasscodeComponent);
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
    "TqLw":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: PsDropdownFundSourcesComponent */

    /***/
    function TqLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownFundSourcesComponent", function () {
        return PsDropdownFundSourcesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_fund_sources_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-fund-sources.component.html */
      "+9nY");
      /* harmony import */


      var _ps_dropdown_fund_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-fund-sources.component.scss */
      "4X+U");
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

      var PsDropdownFundSourcesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps5) {
        function PsDropdownFundSourcesComponent(commonService, logger, omniPullService) {
          var _this1;

          _classCallCheck(this, PsDropdownFundSourcesComponent);

          _this1 = _callSuper(this, PsDropdownFundSourcesComponent, [commonService, logger]);
          _this1.omniPullService = omniPullService;
          _this1.options = {};
          _this1.defaultOptions = {
            listOfOptions: []
          };
          return _this1;
        }

        _inherits(PsDropdownFundSourcesComponent, _src_app_commonSRC_ps5);

        return _createClass(PsDropdownFundSourcesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.loadFundSources();
          }
          /**
           * populating Facility types fetched from server
           */

        }, {
          key: "loadFundSources",
          value: function loadFundSources() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var fundSources, _iterator3, _step3, iterator, fundSource;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    fundSources = {
                      gridModel: [{
                        briefDesc: "Salary And Wages",
                        longDesc: "Salary And Wages",
                        code: "248"
                      }, {
                        briefDesc: "Bonus And Commission",
                        longDesc: "Bonus And Commission",
                        code: "268"
                      }, {
                        briefDesc: "Business Income",
                        longDesc: "Business Income",
                        code: "278"
                      }, {
                        briefDesc: "Investment Return",
                        longDesc: "Investment Return",
                        code: "898"
                      }, {
                        briefDesc: "Centrelink Payments",
                        longDesc: "Centrelink Payments",
                        code: "874"
                      }]
                    };

                    if (fundSources && fundSources.gridModel && fundSources.gridModel.length > 0) {
                      _iterator3 = _createForOfIteratorHelper(fundSources.gridModel);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          iterator = _step3.value;
                          fundSource = {
                            itemValue: iterator.code,
                            description: iterator.briefDesc,
                            selectedObj: iterator
                          };
                          this.defaultOptions.listOfOptions.push(fundSource);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                    }

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "selectDropDownChange",
          value: function selectDropDownChange(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownFundSourcesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownFundSourcesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownFundSourcesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-fund-sources',
        template: _raw_loader_ps_dropdown_fund_sources_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_fund_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownFundSourcesComponent);
      /***/
    },

    /***/
    "WGyA":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: PsDropdownOccupationComponent */

    /***/
    function WGyA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownOccupationComponent", function () {
        return PsDropdownOccupationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_occupation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-occupation.component.html */
      "doD4");
      /* harmony import */


      var _ps_dropdown_occupation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-occupation.component.scss */
      "ywvj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownOccupationComponent = /*#__PURE__*/function (_src_app_commonSRC_ps6) {
        function PsDropdownOccupationComponent(commonProv, loggerP, omniPull) {
          var _this10;

          _classCallCheck(this, PsDropdownOccupationComponent);

          _this10 = _callSuper(this, PsDropdownOccupationComponent, [commonProv, loggerP]);
          _this10.commonProv = commonProv;
          _this10.loggerP = loggerP;
          _this10.omniPull = omniPull;
          _this10.occupationOptions = {};
          return _this10;
        }

        _inherits(PsDropdownOccupationComponent, _src_app_commonSRC_ps6);

        return _createClass(PsDropdownOccupationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadOccupation();
            this.commonProv.copyObject(this.occupationOptions, this.options);
          }
        }, {
          key: "onChangeOccupation",
          value: function onChangeOccupation(value) {
            this.onPsChange.emit(value);
          }
        }, {
          key: "loadOccupation",
          value: function loadOccupation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this11 = this;

              var params, result, _iterator4, _step4, iterator, country;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    params = {
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].OCCUPATION_OPER_ID
                    };
                    _context5.n = 1;
                    return this.omniPull.reutrnOccupation(params)["catch"](function (error) {
                      _this11.logger.error('Error ! while fetching occupation in PsDropdownOccupationComponent', error);
                    });

                  case 1:
                    result = _context5.v;
                    this.occupationOptions.listOfOptions = [];

                    if (result && result.gridModel && result.gridModel.length > 0) {
                      _iterator4 = _createForOfIteratorHelper(result.gridModel);

                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          iterator = _step4.value;
                          country = {
                            itemValue: iterator.positionCode,
                            description: iterator.briefDescription,
                            selectedObj: iterator
                          };
                          this.occupationOptions.listOfOptions.push(country);
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                    }

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"]);

      PsDropdownOccupationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsDropdownOccupationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownOccupationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-occupation',
        template: _raw_loader_ps_dropdown_occupation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_occupation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsDropdownOccupationComponent);
      /***/
    },

    /***/
    "dUiw":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: PsDropdownNationalitiesComponent */

    /***/
    function dUiw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownNationalitiesComponent", function () {
        return PsDropdownNationalitiesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_nationalities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-nationalities.component.html */
      "++mf");
      /* harmony import */


      var _ps_dropdown_nationalities_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-nationalities.component.scss */
      "4GcI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownNationalitiesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps7) {
        function PsDropdownNationalitiesComponent(commonProv, loggerP, omniPull) {
          var _this12;

          _classCallCheck(this, PsDropdownNationalitiesComponent);

          _this12 = _callSuper(this, PsDropdownNationalitiesComponent, [commonProv, loggerP]);
          _this12.commonProv = commonProv;
          _this12.loggerP = loggerP;
          _this12.omniPull = omniPull;
          _this12.defaultSelectOptions = {};
          return _this12;
        }

        _inherits(PsDropdownNationalitiesComponent, _src_app_commonSRC_ps7);

        return _createClass(PsDropdownNationalitiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.returnNationalities();
          }
        }, {
          key: "returnNationalities",
          value: function returnNationalities() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this13 = this;

              var nationaltiesRequest, nationalitiesResponse, _iterator5, _step5, iterator, documents;

              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    nationaltiesRequest = {
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].NATIONALITY_OPER_ID
                    }; // No need other than company code as all the nationalities will be retrieved

                    _context6.n = 1;
                    return this.omniPull.returnNationalities(nationaltiesRequest)["catch"](function (error) {
                      _this13.logger.error('Error! while fetching nationalities in PsDropdownNationalitiesComponent', error);
                    });

                  case 1:
                    nationalitiesResponse = _context6.v;
                    this.defaultSelectOptions.listOfOptions = [];

                    if (nationalitiesResponse && nationalitiesResponse.gridModel && nationalitiesResponse.gridModel.length > 0) {
                      _iterator5 = _createForOfIteratorHelper(nationalitiesResponse.gridModel);

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          iterator = _step5.value;
                          documents = {
                            itemValue: iterator.NATIONALITY_CODE,
                            description: iterator.longDesc,
                            selectedObj: iterator
                          };
                          this.defaultSelectOptions.listOfOptions.push(documents);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                      this.options.listOfOptions = [];
                      this.commonProv.copyObject(this.options.listOfOptions, this.defaultSelectOptions.listOfOptions, false);
                    }

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange(value) {
            this.onPsChange.emit(value);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"]);

      PsDropdownNationalitiesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsDropdownNationalitiesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownNationalitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-nationalities',
        template: _raw_loader_ps_dropdown_nationalities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_nationalities_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsDropdownNationalitiesComponent);
      /***/
    },

    /***/
    "doD4":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function doD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\"  [options]=\"occupationOptions\" (onPsChange)=\"onChangeOccupation($event)\"></ps-select-dropdown>";
      /***/
    },

    /***/
    "fyCU":
    /*!******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.scss ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fyCU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
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
    "jEzM":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jEzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1jYXJkLW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "jHwt":
    /*!***********************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jHwt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS1icG0tZmxvdy50ZW1wbGF0ZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "jUhy":
    /*!****************************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: PsTemplateBPMFlowModule */

    /***/
    function jUhy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateBPMFlowModule", function () {
        return PsTemplateBPMFlowModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module */
      "Aju7");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module */
      "dz/v");
      /* harmony import */


      var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared.module */
      "rlZq");
      /* harmony import */


      var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-template-screen/ps-template-screen.template.module */
      "63Vm");
      /* harmony import */


      var _ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ps-template-bpm-flow.template */
      "8WI6");

      var PsTemplateBPMFlowModule = /*#__PURE__*/_createClass(function PsTemplateBPMFlowModule() {
        _classCallCheck(this, PsTemplateBPMFlowModule);
      });

      PsTemplateBPMFlowModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBPMFlow"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_6__["PsTemplateScreenPageModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_2__["PsComplexCallSlotComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexMediaCaptureComponentModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBPMFlow"]],
        exports: [_ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBPMFlow"]]
      })], PsTemplateBPMFlowModule);
      /***/
    },

    /***/
    "jmNg":
    /*!***********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.html ***!
      \***********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jmNg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-date-day-month-year [options]=\"dateDayMonthYearOptions\" [id]=\"id\" (onPsChange)=\"onChange($event)\">\n</ps-date-day-month-year>";
      /***/
    },

    /***/
    "ngfJ":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearPastComponent */

    /***/
    function ngfJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponent", function () {
        return PsDateDayMonthYearPastComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-date-day-month-year-past.component.html */
      "jmNg");
      /* harmony import */


      var _ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-date-day-month-year-past.component.scss */
      "EBce");
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


      var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-date-day-month-year.component */
      "BcCD");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");

      var PsDateDayMonthYearPastComponent = /*#__PURE__*/function (_ps_date_day_month_ye) {
        function PsDateDayMonthYearPastComponent(commonProv, loggerP, events) {
          var _this14;

          _classCallCheck(this, PsDateDayMonthYearPastComponent);

          _this14 = _callSuper(this, PsDateDayMonthYearPastComponent, [commonProv, loggerP, events]);
          _this14.commonProv = commonProv;
          _this14.dateDayMonthYearOptions = {
            max: new Date()
          };
          return _this14;
        }

        _inherits(PsDateDayMonthYearPastComponent, _ps_date_day_month_ye);

        return _createClass(PsDateDayMonthYearPastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.dateDayMonthYearOptions, this.options, false);
          }
        }, {
          key: "superWriteValue",
          value: function superWriteValue(val) {
            _superPropGet(PsDateDayMonthYearPastComponent, "writeValue", this, 3)([val]);
          }
        }]);
      }(_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__["PsDateDayMonthYearComponent"]);

      PsDateDayMonthYearPastComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]
        }];
      };

      PsDateDayMonthYearPastComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDateDayMonthYearPastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year-past',
        template: _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]])], PsDateDayMonthYearPastComponent);
      /***/
    },

    /***/
    "ps3I":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ps3I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-field-entity [options]=\"options\">\n  <ps-container-item class=\"ps-field-item-wrapper main-container ps-container-passcode\" [options]=\"passcodeItemOptions\">\n    <ps-keyin-input *ngFor=\"let digitOption of codeDigitsOptions\" class=\"ps-input-passcode-digit\" #digit\n      [id]=\"digitOption.fcName\" [options]=\"digitOption\" (onPsChange)=\"inputChanged($event)\"\n      (onPsEmpty)=\"onEmpty($event)\" (onPsKeyUp)=\"moveToNextDigit(digit)\"></ps-keyin-input>\n  </ps-container-item>\n</ps-field-entity>";
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
    },

    /***/
    "x3b/":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: PsInputCardNumberComponent */

    /***/
    function x3b_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputCardNumberComponent", function () {
        return PsInputCardNumberComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_card_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-card-number.component.html */
      "LaLV");
      /* harmony import */


      var _ps_input_card_number_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-card-number.component.scss */
      "jEzM");
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
       * @author Zunair Zakir
       * @since 01/11/2019
       *
       * <p> PsInputCardNumberComponent is a simple component base on ps-keyin-input and have free text field</p>
       */


      var PsInputCardNumberComponent = /*#__PURE__*/function (_commonSRC_psComponen3) {
        function PsInputCardNumberComponent(commonService, logger) {
          var _this15;

          _classCallCheck(this, PsInputCardNumberComponent);

          _this15 = _callSuper(this, PsInputCardNumberComponent, [commonService, logger]);
          _this15.options = {};
          _this15.defaultOptions = {
            mask: {
              mask: '9999 9999 9999 9999'
            },
            labelKey: 'card_number_key',
            placeHolder: 'enter_your_card_number_key',
            type: 'tel',
            imageOptions: {
              imageName: '',
              psClass: 'card-action-image'
            }
          };
          return _this15;
        }

        _inherits(PsInputCardNumberComponent, _commonSRC_psComponen3);

        return _createClass(PsInputCardNumberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
          }
        }, {
          key: "changeCardIcon",
          value: function changeCardIcon(event) {
            var currentValue = event.target.value;

            if (currentValue.startsWith('4')) {
              this.defaultOptions.imageOptions.imageName = 'Visa-Curved.png';
            } else if (this.checkCard(52, 55, currentValue) || this.checkCard(2221, 2720, currentValue)) {
              this.defaultOptions.imageOptions.imageName = 'Mastercard-Curved.png';
            } else if (currentValue.startsWith('34') || currentValue.startsWith('37')) {
              this.defaultOptions.imageOptions.imageName = 'American-Express-Curved.png';
            } else if (currentValue.startsWith('6011') || currentValue.startsWith('65')) {
              this.defaultOptions.imageOptions.imageName = 'Discover-Straight.png';
            } else if (currentValue.startsWith('36') || currentValue.startsWith('38') || this.checkCard(300, 305, currentValue)) {
              this.defaultOptions.imageOptions.imageName = 'DinerClub.png';
            } else if (currentValue.startsWith('35') || currentValue.startsWith('2131') || currentValue.startsWith('1800')) {
              this.defaultOptions.imageOptions.imageName = 'jbc-card.jpg';
            } else {
              this.defaultOptions.imageOptions.imageName = '';
            }
          }
        }, {
          key: "checkCard",
          value: function checkCard(start, end, value) {
            var found = false;

            if (value && start && end) {
              for (var i = start; i <= end; i++) {
                if (value.startsWith(i.toString())) {
                  found = true;
                  break;
                }
              }
            }

            return found;
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"]);

      PsInputCardNumberComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }];
      };

      PsInputCardNumberComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputCardNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-card-number',
        template: _raw_loader_ps_input_card_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_card_number_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])], PsInputCardNumberComponent);
      /***/
    },

    /***/
    "ywvj":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.scss ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ywvj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1vY2N1cGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-bpm-dynamic-page-bpm-dynamic-page-module-es5.js.map