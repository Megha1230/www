(function () {
  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lost-document-request-lost-document-request-module"], {
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
    "65AU":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtcGFzc2Jvb2tzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "FRI3":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.scss ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FRI3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1kb2N1bWVudC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "GFeT":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GFeT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onChange($event)\"></ps-select-dropdown>";
      /***/
    },

    /***/
    "HbOp":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PsAccountsListComponentModule */

    /***/
    function HbOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsAccountsListComponentModule", function () {
        return PsAccountsListComponentModule;
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


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */
      "os9x");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-accounts-list.component */
      "OVQh");

      var PsAccountsListComponentModule = /*#__PURE__*/_createClass(function PsAccountsListComponentModule() {
        _classCallCheck(this, PsAccountsListComponentModule);
      });

      PsAccountsListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        entryComponents: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsAccountsListComponentModule);
      /***/
    },

    /***/
    "OOCE":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/lost-document-request/lost-document-request.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: LostDocumentRequestPageModule */

    /***/
    function OOCE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LostDocumentRequestPageModule", function () {
        return LostDocumentRequestPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-card/ps-option-card.component.module */
      "tk/0");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-chequebook/ps-option-chequebook.component.module */
      "YqnD");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.module */
      "wQfO");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_chequebooks_ps_lookup_chequebooks_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-chequebooks/ps-lookup-chequebooks.component.module */
      "Dzb9");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_credit_cards_ps_lookup_credit_cards_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-credit-cards/ps-lookup-credit-cards.component.module */
      "hyzP");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_debit_cards_ps_lookup_debit_cards_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-debit-cards/ps-lookup-debit-cards.component.module */
      "ikzk");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */
      "xB6I");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_passbooks_ps_lookup_passbooks_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.module */
      "uq2j");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-account-types/ps-dropdown-account-types.component.module */
      "H9gP");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_card_types_ps_dropdown_card_types_component_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-card-types/ps-dropdown-card-types.component.module */
      "MJzT");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_core_reasons_ps_dropdown_core_reasons_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.module */
      "qUS5");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_document_types_ps_dropdown_document_types_component_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.module */
      "T9TP");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_card_types_ps_lov_card_types_component_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-card-types/ps-lov-card-types.component.module */
      "rrI9");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _lost_document_request_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./lost-document-request.page */
      "XxTl");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */
      "Uxj/");

      var routes = [{
        path: '',
        component: _lost_document_request_page__WEBPACK_IMPORTED_MODULE_24__["LostDocumentRequestPage"]
      }];

      var LostDocumentRequestPageModule = /*#__PURE__*/_createClass(function LostDocumentRequestPageModule() {
        _classCallCheck(this, LostDocumentRequestPageModule);
      });

      LostDocumentRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_21__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_22__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_16__["PsDropdownAccountTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_14__["PsLookupOwnAccountComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_10__["PsInputVarcharComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_card_types_ps_dropdown_card_types_component_module__WEBPACK_IMPORTED_MODULE_17__["PsDropdownCardTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDateDayMonthYearPastComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputFreeTextComponentModule"], src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountsListComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_document_types_ps_dropdown_document_types_component_module__WEBPACK_IMPORTED_MODULE_19__["PsDropdownDocumentTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_chequebook_ps_option_chequebook_component_module__WEBPACK_IMPORTED_MODULE_5__["PsOptionChequebookComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_chequebooks_ps_lookup_chequebooks_component_module__WEBPACK_IMPORTED_MODULE_11__["PsLookupChequebooksComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_debit_cards_ps_lookup_debit_cards_component_module__WEBPACK_IMPORTED_MODULE_13__["PsLookupDebitCardsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_credit_cards_ps_lookup_credit_cards_component_module__WEBPACK_IMPORTED_MODULE_12__["PsLookupCreditCardsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_card_ps_option_card_component_module__WEBPACK_IMPORTED_MODULE_4__["PsOptionCardComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_core_reasons_ps_dropdown_core_reasons_component_module__WEBPACK_IMPORTED_MODULE_18__["PsDropdownCoreReasonsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_card_types_ps_lov_card_types_component_module__WEBPACK_IMPORTED_MODULE_20__["PsLovCardTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_passbooks_ps_lookup_passbooks_component_module__WEBPACK_IMPORTED_MODULE_15__["PsLookupPassbooksComponentModule"], src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component_module__WEBPACK_IMPORTED_MODULE_6__["PsPassbookListComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_9__["PsInputNumericComponentModule"], _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_25__["PsComplexAmountComponentModule"]],
        declarations: [_lost_document_request_page__WEBPACK_IMPORTED_MODULE_24__["LostDocumentRequestPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], LostDocumentRequestPageModule);
      /***/
    },

    /***/
    "Oahu":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Oahu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-account\">\n\n  <ps-complex-lookup [id]=\"id\" #complexLookupComponentObj (changeItem)=\"onChangeItem($event)\"\n    [options]=\"complexLookupOptions\">\n  </ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "T9TP":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.module.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: PsDropdownDocumentTypesComponentModule */

    /***/
    function T9TP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownDocumentTypesComponentModule", function () {
        return PsDropdownDocumentTypesComponentModule;
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


      var _ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-document-types.component */
      "gdVn");

      var PsDropdownDocumentTypesComponentModule = /*#__PURE__*/_createClass(function PsDropdownDocumentTypesComponentModule() {
        _classCallCheck(this, PsDropdownDocumentTypesComponentModule);
      });

      PsDropdownDocumentTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownDocumentTypesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownDocumentTypesComponent"]],
        entryComponents: [_ps_dropdown_document_types_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownDocumentTypesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownDocumentTypesComponentModule);
      /***/
    },

    /***/
    "gdVn":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: PsDropdownDocumentTypesComponent */

    /***/
    function gdVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownDocumentTypesComponent", function () {
        return PsDropdownDocumentTypesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_document_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-document-types.component.html */
      "hoVv");
      /* harmony import */


      var _ps_dropdown_document_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-document-types.component.scss */
      "FRI3");
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


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownDocumentTypesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsDropdownDocumentTypesComponent(commonProv, loggerP, omniPull) {
          var _this2;

          _classCallCheck(this, PsDropdownDocumentTypesComponent);

          _this2 = _callSuper(this, PsDropdownDocumentTypesComponent, [commonProv, loggerP]);
          _this2.commonProv = commonProv;
          _this2.loggerP = loggerP;
          _this2.omniPull = omniPull;
          _this2.defaultSelectOptions = {
            labelKey: 'lost_account_types_key',
            placeHolder: 'lost_account_type_key'
          };
          return _this2;
        }

        _inherits(PsDropdownDocumentTypesComponent, _src_app_commonSRC_ps);

        return _createClass(PsDropdownDocumentTypesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options);
            this.returnLostdocument();
          }
        }, {
          key: "returnLostdocument",
          value: function returnLostdocument() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var paramData;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    paramData = {
                      serviceMethod: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ONE
                    };
                    this.omniPull.returnLostDocument(paramData).then(function (result) {
                      _this3.defaultSelectOptions.listOfOptions = [];

                      if (result && result.gridModel && result.gridModel.length > 0) {
                        var _iterator = _createForOfIteratorHelper(result.gridModel),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var iterator = _step.value;
                            var documents = {
                              itemValue: iterator.ctsLostDocId,
                              description: iterator.briefDescription,
                              selectedObj: iterator
                            };

                            _this3.defaultSelectOptions.listOfOptions.push(documents);
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                      }
                    }, function (err) {
                      _this3.logger.error('Error: While fetching data : ', err);
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onDocTypeChange",
          value: function onDocTypeChange(value) {
            this.onPsChange.emit(value);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownDocumentTypesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownDocumentTypesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownDocumentTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-document-types',
        template: _raw_loader_ps_dropdown_document_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_document_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownDocumentTypesComponent);
      /***/
    },

    /***/
    "hoVv":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-document-types/ps-dropdown-document-types.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hoVv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onDocTypeChange($event)\"></ps-select-dropdown>";
      /***/
    },

    /***/
    "l5MZ":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: PsDropdownCoreReasonsComponent */

    /***/
    function l5MZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownCoreReasonsComponent", function () {
        return PsDropdownCoreReasonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_core_reasons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-core-reasons.component.html */
      "GFeT");
      /* harmony import */


      var _ps_dropdown_core_reasons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-core-reasons.component.scss */
      "ngWu");
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

      var PsDropdownCoreReasonsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsDropdownCoreReasonsComponent(commonProv, loggerP, omniPull) {
          var _this4;

          _classCallCheck(this, PsDropdownCoreReasonsComponent);

          _this4 = _callSuper(this, PsDropdownCoreReasonsComponent, [commonProv, loggerP]);
          _this4.omniPull = omniPull;
          _this4.defaultSelectOptions = {};
          return _this4;
        }

        _inherits(PsDropdownCoreReasonsComponent, _src_app_commonSRC_ps2);

        return _createClass(PsDropdownCoreReasonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.loadCoreReasons();
          }
        }, {
          key: "loadCoreReasons",
          value: function loadCoreReasons() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var paramData, coreReasons, _iterator2, _step2, iterator, coreReason;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    paramData = {
                      reasonType: this.options.reasonType || src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].STOP_REASON_TYPE
                    };
                    _context2.n = 1;
                    return this.omniPull.returnCoreReasons(paramData)["catch"](function (error) {});

                  case 1:
                    coreReasons = _context2.v;
                    this.defaultSelectOptions.listOfOptions = [];

                    if (coreReasons && coreReasons.gridModel && coreReasons.gridModel.length > 0) {
                      _iterator2 = _createForOfIteratorHelper(coreReasons.gridModel);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          iterator = _step2.value;
                          coreReason = {
                            itemValue: iterator.reasonId,
                            description: iterator.briefDesc,
                            selectedObj: iterator
                          };
                          this.defaultSelectOptions.listOfOptions.push(coreReason);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                    }

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onChange",
          value: function onChange(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"]);

      PsDropdownCoreReasonsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsDropdownCoreReasonsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownCoreReasonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-core-reasons',
        template: _raw_loader_ps_dropdown_core_reasons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_core_reasons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsDropdownCoreReasonsComponent);
      /***/
    },

    /***/
    "ngWu":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.scss ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ngWu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1jb3JlLXJlYXNvbnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "qUS5":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-core-reasons/ps-dropdown-core-reasons.component.module.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: PsDropdownCoreReasonsComponentModule */

    /***/
    function qUS5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownCoreReasonsComponentModule", function () {
        return PsDropdownCoreReasonsComponentModule;
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


      var _ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-core-reasons.component */
      "l5MZ");

      var PsDropdownCoreReasonsComponentModule = /*#__PURE__*/_createClass(function PsDropdownCoreReasonsComponentModule() {
        _classCallCheck(this, PsDropdownCoreReasonsComponentModule);
      });

      PsDropdownCoreReasonsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownCoreReasonsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownCoreReasonsComponent"]],
        entryComponents: [_ps_dropdown_core_reasons_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownCoreReasonsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownCoreReasonsComponentModule);
      /***/
    },

    /***/
    "uq2j":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.module.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: PsLookupPassbooksComponentModule */

    /***/
    function uq2j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupPassbooksComponentModule", function () {
        return PsLookupPassbooksComponentModule;
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


      var _ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-lookup-passbooks.component */
      "wz8/");

      var PsLookupPassbooksComponentModule = /*#__PURE__*/_createClass(function PsLookupPassbooksComponentModule() {
        _classCallCheck(this, PsLookupPassbooksComponentModule);
      });

      PsLookupPassbooksComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupPassbooksComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"]],
        exports: [_ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupPassbooksComponent"]],
        entryComponents: [_ps_lookup_passbooks_component__WEBPACK_IMPORTED_MODULE_5__["PsLookupPassbooksComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupPassbooksComponentModule);
      /***/
    },

    /***/
    "wQfO":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.module.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: PsPassbookListComponentModule */

    /***/
    function wQfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsPassbookListComponentModule", function () {
        return PsPassbookListComponentModule;
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


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */
      "os9x");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-passbook-list.component */
      "9K5J");

      var PsPassbookListComponentModule = /*#__PURE__*/_createClass(function PsPassbookListComponentModule() {
        _classCallCheck(this, PsPassbookListComponentModule);
      });

      PsPassbookListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_2__["PsTemplateListModule"]],
        exports: [_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"]],
        entryComponents: [_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsPassbookListComponentModule);
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
    "wz8/":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-passbooks/ps-lookup-passbooks.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: PsLookupPassbooksComponent */

    /***/
    function wz8_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupPassbooksComponent", function () {
        return PsLookupPassbooksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_passbooks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-passbooks.component.html */
      "Oahu");
      /* harmony import */


      var _ps_lookup_passbooks_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-passbooks.component.scss */
      "65AU");
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


      var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */
      "EIUR");
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
       * @since 09/06/2021
       *
       * <p> PsComplexOwnAccountComponent is complex component to show passcodes list fetched from server, balance and available balance</p>
       */


      var PsLookupPassbooksComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PsLookupPassbooksComponent(commonService, logger, omniPull) {
          var _this5;

          _classCallCheck(this, PsLookupPassbooksComponent);

          _this5 = _callSuper(this, PsLookupPassbooksComponent, [commonService, logger]);
          _this5.commonService = commonService;
          _this5.omniPull = omniPull;
          _this5.options = {
            requestObject: null
          };
          _this5.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_valid_passbook_found_key',
            multiple: _this5.options.multiple ? _this5.options.multiple : false
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this5.onPassbookChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this5.labelValuesMap = new Map();
          _this5.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_6__["PsCurrencyPipe"]();
          _this5.labelOptions = {};
          _this5.allType = false;
          return _this5;
        }

        _inherits(PsLookupPassbooksComponent, _src_app_commonSRC_ps3);

        return _createClass(PsLookupPassbooksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupPassbooksComponent, "init", this, 3)([]);

            this.returnPassbookList();
            this.complexLookupOptions.labelKey = this.options.labelKey;
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.allType = this.options.allType ? this.options.allType : false;
            this.commonProv.copyObject(this.complexLookupOptions, this.options, false);
            this.complexLookupOptions.requestObject = this.options.requestObject;
          }
          /**
           * fetching passbook list from server
           */

        }, {
          key: "returnPassbookList",
          value: function returnPassbookList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this6 = this;

              var params, result;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.complexLookupOptions.listOfOptions = undefined;
                    params = {};
                    _context3.n = 1;
                    return this.omniPull.returnPassbooks(params)["catch"](function (error) {
                      _this6.logger.error('Error: While fetching PassbookList :', error);
                    });

                  case 1:
                    result = _context3.v;

                    if (result && result.gridModel.length > 0) {
                      this.options.listOfPassbook = result.gridModel;
                      this.complexLookupOptions.listOfOptions = this.populateCustomPassbooks(result.gridModel);
                    } else {
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
          /**
           *
           * @param listOfOptions
           */

        }, {
          key: "populateCustomPassbooks",
          value: function populateCustomPassbooks(listOfOptions) {
            var passbooksList = [];

            var _iterator3 = _createForOfIteratorHelper(listOfOptions),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var iterator = _step3.value;
                var passcode = {
                  accGl: iterator.account.accGl,
                  branch: iterator.account.branch,
                  currency: iterator.account.currency,
                  serialNo: iterator.account.serialNo,
                  cif: iterator.account.cif,
                  additionalRef: iterator.account.additionalRef,
                  lookupKey: iterator.account.accGl,
                  passbookCode: iterator.passbookCode,
                  previewProperty: 'accGl'
                };
                passbooksList.push(passcode);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return passbooksList;
          }
        }, {
          key: "onChangeItem",
          value: function onChangeItem(event) {
            this.onPassbookChange.emit(event);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsLookupPassbooksComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsLookupPassbooksComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onPassbookChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsLookupPassbooksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-passbooks',
        template: _raw_loader_ps_lookup_passbooks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_passbooks_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsLookupPassbooksComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-lost-document-request-lost-document-request-module-es5.js.map