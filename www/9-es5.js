(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
    /***/
    "06es":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.module.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: PsInputDisplayOnlyCIFAddressWorkComponentModule */

    /***/
    function es(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressWorkComponentModule", function () {
        return PsInputDisplayOnlyCIFAddressWorkComponentModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component */
      "xmAG");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");

      var PsInputDisplayOnlyCIFAddressWorkComponentModule = /*#__PURE__*/_createClass(function PsInputDisplayOnlyCIFAddressWorkComponentModule() {
        _classCallCheck(this, PsInputDisplayOnlyCIFAddressWorkComponentModule);
      });

      PsInputDisplayOnlyCIFAddressWorkComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__["PsInputDisplayOnlyCIFAddressWorkComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"]],
        exports: [src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__["PsInputDisplayOnlyCIFAddressWorkComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component__WEBPACK_IMPORTED_MODULE_2__["PsInputDisplayOnlyCIFAddressWorkComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputDisplayOnlyCIFAddressWorkComponentModule);
      /***/
    },

    /***/
    "3Wus":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.scss ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wus(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1kaXNwbGF5LW9ubHktY2lmLWFkZHJlc3Mtd29yay5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "9tyk":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsLovDeliveryLocationComponent */

    /***/
    function tyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLovDeliveryLocationComponent", function () {
        return PsLovDeliveryLocationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lov_delivery_location_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lov-delivery-location.component.html */
      "sb3I");
      /* harmony import */


      var _ps_lov_delivery_location_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lov-delivery-location.component.scss */
      "IF1x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-lov.component */
      "41l2");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");

      var PsLovDeliveryLocationComponent = /*#__PURE__*/function (_src_app_commonBussin) {
        function PsLovDeliveryLocationComponent(commonProvService, logger) {
          var _this;

          _classCallCheck(this, PsLovDeliveryLocationComponent);

          _this = _callSuper(this, PsLovDeliveryLocationComponent, [commonProvService, logger]);
          _this.defaultSelectOptions = {
            iconLocation: src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.IMGS_FOLDER_URL,
            lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].DELIVERY_LOC_LOV_ID,
            iconExtension: '.svg'
          };
          return _this;
        }

        _inherits(PsLovDeliveryLocationComponent, _src_app_commonBussin);

        return _createClass(PsLovDeliveryLocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.defaultSelectOptions.labelKey = this.commonProv.translate('delivery_location_key');
            this.defaultSelectOptions.placeHolder = this.commonProv.translate('select_delivery_location_key');
          }
        }, {
          key: "onChangeLov",
          value: function onChangeLov(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponent"]);

      PsLovDeliveryLocationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsLovDeliveryLocationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsLovDeliveryLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lov-delivery-location',
        template: _raw_loader_ps_lov_delivery_location_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lov_delivery_location_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsLovDeliveryLocationComponent);
      /***/
    },

    /***/
    "IF1x":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component.scss ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IF1x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb3YtZGVsaXZlcnktbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "KBTb":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.module.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: PsInputDisplayOnlyCIFAddressHomeComponentModule */

    /***/
    function KBTb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressHomeComponentModule", function () {
        return PsInputDisplayOnlyCIFAddressHomeComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ps-input-display-only-cif-address-home.component */
      "gmKe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");

      var PsInputDisplayOnlyCIFAddressHomeComponentModule = /*#__PURE__*/_createClass(function PsInputDisplayOnlyCIFAddressHomeComponentModule() {
        _classCallCheck(this, PsInputDisplayOnlyCIFAddressHomeComponentModule);
      });

      PsInputDisplayOnlyCIFAddressHomeComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__["PsInputDisplayOnlyCIFAddressHomeComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"]],
        exports: [_ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__["PsInputDisplayOnlyCIFAddressHomeComponent"]],
        entryComponents: [_ps_input_display_only_cif_address_home_component__WEBPACK_IMPORTED_MODULE_1__["PsInputDisplayOnlyCIFAddressHomeComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputDisplayOnlyCIFAddressHomeComponentModule);
      /***/
    },

    /***/
    "Nd4l":
    /*!***************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.html ***!
      \***************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nd4l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-input-display-only  id=\"displayOnlyCifWorkAddress\" [options]=\"defaultOptions\">\r\n</ps-input-display-only>";
      /***/
    },

    /***/
    "SB9p":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-location/ps-complex-location.component.module.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: PsComplexLocationComponentModule */

    /***/
    function SB9p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexLocationComponentModule", function () {
        return PsComplexLocationComponentModule;
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


      var _ps_keyin_input_ps_input_display_only_cif_address_home_ps_input_display_only_cif_address_home_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.module */
      "KBTb");
      /* harmony import */


      var _ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.module */
      "06es");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.module */
      "ZNic");
      /* harmony import */


      var _ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ps-complex-select-branch/ps-complex-select-branch.component.module */
      "ohDU");
      /* harmony import */


      var _ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ps-complex-location.component */
      "pvj/");

      var PsComplexLocationComponentModule = /*#__PURE__*/_createClass(function PsComplexLocationComponentModule() {
        _classCallCheck(this, PsComplexLocationComponentModule);
      });

      PsComplexLocationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexLocationComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__["PsLovDeliveryLocationComponentModule"], _ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_7__["PsComplexSelectBranchComponentModule"], _ps_keyin_input_ps_input_display_only_cif_address_home_ps_input_display_only_cif_address_home_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputDisplayOnlyCIFAddressHomeComponentModule"], _ps_keyin_input_ps_input_display_only_cif_address_work_ps_input_display_only_cif_address_work_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputDisplayOnlyCIFAddressWorkComponentModule"]],
        exports: [_ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexLocationComponent"]],
        entryComponents: [_ps_complex_location_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexLocationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexLocationComponentModule);
      /***/
    },

    /***/
    "ZNic":
    /*!************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.module.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: PsLovDeliveryLocationComponentModule */

    /***/
    function ZNic(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLovDeliveryLocationComponentModule", function () {
        return PsLovDeliveryLocationComponentModule;
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


      var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-dropdown-lov.component.module */
      "LhaX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component */
      "9tyk");

      var PsLovDeliveryLocationComponentModule = /*#__PURE__*/_createClass(function PsLovDeliveryLocationComponentModule() {
        _classCallCheck(this, PsLovDeliveryLocationComponentModule);
      });

      PsLovDeliveryLocationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__["PsLovDeliveryLocationComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponentModule"]],
        exports: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__["PsLovDeliveryLocationComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_delivery_location_ps_lov_delivery_location_component__WEBPACK_IMPORTED_MODULE_5__["PsLovDeliveryLocationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLovDeliveryLocationComponentModule);
      /***/
    },

    /***/
    "aaLF":
    /*!***************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.html ***!
      \***************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aaLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-input-display-only  id=\"displayOnlyCifHomeAddress\" [options]=\"defaultOptions\">\r\n</ps-input-display-only>";
      /***/
    },

    /***/
    "gmKe":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: PsInputDisplayOnlyCIFAddressHomeComponent */

    /***/
    function gmKe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressHomeComponent", function () {
        return PsInputDisplayOnlyCIFAddressHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_display_only_cif_address_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-display-only-cif-address-home.component.html */
      "aaLF");
      /* harmony import */


      var _ps_input_display_only_cif_address_home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-display-only-cif-address-home.component.scss */
      "lhfv");
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-display-only/ps-input-display-only.component */
      "ggmK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");

      var PsInputDisplayOnlyCIFAddressHomeComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsInputDisplayOnlyCIFAddressHomeComponent(commonP, loggerP, translateSrv) {
          var _this2;

          _classCallCheck(this, PsInputDisplayOnlyCIFAddressHomeComponent);

          _this2 = _callSuper(this, PsInputDisplayOnlyCIFAddressHomeComponent, [commonP, loggerP]);
          _this2.translateSrv = translateSrv;
          _this2.defaultOptions = {};
          return _this2;
        }

        _inherits(PsInputDisplayOnlyCIFAddressHomeComponent, _src_app_commonSRC_ps);

        return _createClass(PsInputDisplayOnlyCIFAddressHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsInputDisplayOnlyCIFAddressHomeComponent, "ngOnInit", this, 3)([]);

            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.address = [];

            if (this.cifInfo.customerInfoCO) {
              if (this.translateSrv.currentLang.toLocaleLowerCase() === 'ar') {
                this.address = [this.cifInfo.customerInfoCO.countryDescriptionArabic, this.cifInfo.customerInfoCO.regionDescriptionArabic, this.cifInfo.customerInfoCO.cityDescriptionArabic, this.cifInfo.customerInfoCO.streetDetailsArabic];
              } else {
                this.address = [this.cifInfo.customerInfoCO.country, this.cifInfo.customerInfoCO.regionName, this.cifInfo.customerInfoCO.cityName, this.cifInfo.customerInfoCO.streetDetails];
              }

              this.address = this.address.concat([this.cifInfo.customerInfoCO.buildingOrHouse, this.cifInfo.customerInfoCO.poBox]);
            }

            this.commonProv.setValInsideNestedObj(this.options.fcName, this.address.filter(function (x) {
              return x !== undefined;
            }).join('-'), this.options.requestVO);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_7__["PsInputDisplayOnlyComponent"]);

      PsInputDisplayOnlyCIFAddressHomeComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      PsInputDisplayOnlyCIFAddressHomeComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputDisplayOnlyCIFAddressHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-display-only-cif-address-home',
        template: _raw_loader_ps_input_display_only_cif_address_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_display_only_cif_address_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])], PsInputDisplayOnlyCIFAddressHomeComponent);
      /***/
    },

    /***/
    "lhfv":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-home/ps-input-display-only-cif-address-home.component.scss ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lhfv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1kaXNwbGF5LW9ubHktY2lmLWFkZHJlc3MtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "pvj/":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-location/ps-complex-location.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: PsComplexLocationComponent */

    /***/
    function pvj_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexLocationComponent", function () {
        return PsComplexLocationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_location_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-location.component.html */
      "xkGR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
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

      var PsComplexLocationComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsComplexLocationComponent(omniPull, commonProv, loggerP) {
          var _this3;

          _classCallCheck(this, PsComplexLocationComponent);

          _this3 = _callSuper(this, PsComplexLocationComponent, [commonProv, loggerP]);
          _this3.omniPull = omniPull;
          _this3.commonProv = commonProv;
          _this3.loggerP = loggerP;
          _this3.parentFun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this3.branch = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE;
          _this3.home = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].HOME_ADDRESS_VALUE;
          _this3.work = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].WORK_ADDRESS_VALUE;
          _this3.other = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE;
          _this3.collectionType = null;
          return _this3;
        }

        _inherits(PsComplexLocationComponent, _src_app_commonSRC_ps2);

        return _createClass(PsComplexLocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.requestVO = this.options.homeAddressOptions.requestVO;

            if (this.options.cifBranchChecking == true) {
              this.fetchParameter();
            }
          }
        }, {
          key: "onCollectionModeChanged",
          value: function onCollectionModeChanged(data) {
            if (data && data.selectedObj) {
              this.collectionType = data.selectedObj.itemValue;
              this.resetOldData(data.selectedObj.itemValue);
              this.parentFun.emit();
            }
          }
        }, {
          key: "resetOldData",
          value: function resetOldData(type) {
            if (type == this.home) {
              this.commonProv.setValInsideNestedObj(this.options.workAddressOptions.fcName, '', this.requestVO);
              this.commonProv.setValInsideNestedObj(this.options.otherAddressOptions.fcName, '', this.requestVO);
            } else if (type == this.work) {
              this.commonProv.setValInsideNestedObj(this.options.homeAddressOptions.fcName, '', this.requestVO);
              this.commonProv.setValInsideNestedObj(this.options.otherAddressOptions.fcName, '', this.requestVO);
            } else if (type == this.other) {
              this.commonProv.setValInsideNestedObj(this.options.homeAddressOptions.fcName, '', this.requestVO);
              this.commonProv.setValInsideNestedObj(this.options.workAddressOptions.fcName, '', this.requestVO);
            }
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this4 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USERINFO);
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].COLLECTION_DESTINATION_BRANCH)["catch"](function (error) {
                      _this4.logger.log(error);
                    });

                  case 1:
                    result = _context.v;

                    if (result !== -1 && result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.enableCifBranch = 0;
                    } else {
                      if (result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_3__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                        this.options.branchCifOptions.labelKey = "delivery_account_branch_key";
                        this.commonProv.setValInsideNestedObj(this.options.branchCifOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchCode : '', this.requestVO);
                      } else {
                        this.options.branchCifOptions.labelKey = "delivery_cif_branch_key";
                        this.commonProv.setValInsideNestedObj(this.options.branchCifOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.requestVO);
                      }

                      this.enableCifBranch = 1;
                    }

                    this.hideShowDeliveryBranch();
                    this.parentFun.emit();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hideShowDeliveryBranch",
          value: function hideShowDeliveryBranch() {
            var _a;

            var enablelocation = this.enableCifBranch == 1 ? 0 : 1;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_VISIBLE, [(_a = this.options) === null || _a === void 0 ? void 0 : _a.branchCifOptions.fcName], this.enableCifBranch);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.options.otherAddressOptions.fcName, this.options.workAddressOptions.fcName, this.options.homeAddressOptions.fcName, this.options.collectionModeOptions.fcName, this.options.branchLocationOptions.fcName], enablelocation);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsComplexLocationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsComplexLocationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        parentFun: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ["parentFun"]
        }]
      };
      PsComplexLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-location',
        template: _raw_loader_ps_complex_location_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsComplexLocationComponent);
      /***/
    },

    /***/
    "sb3I":
    /*!*******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-delivery-location/ps-lov-delivery-location.component.html ***!
      \*******************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sb3I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-dropdown-lov [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChangeLov($event)\"></ps-dropdown-lov>";
      /***/
    },

    /***/
    "xkGR":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-location/ps-complex-location.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xkGR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n    <ng-container>\n        <ps-lov-delivery-location id=\"collection-mode\" [options]=\"options?.collectionModeOptions\"\n            (onPsChange)=\"onCollectionModeChanged($event)\">\n        </ps-lov-delivery-location>\n        <ps-complex-select-branch\n            *ngIf=\"(collectionType && collectionType === branch) || !collectionType\"\n            [options]=\"options?.branchLocationOptions\"\n        >\n        </ps-complex-select-branch>\n        <ps-input-display-only-cif-address-home\n            *ngIf=\"collectionType && collectionType === home\"\n            id=\"HomeAddressDetails\" \n            [options]=\"options?.homeAddressOptions\"\n        >\n        </ps-input-display-only-cif-address-home>\n        <ps-input-display-only-cif-address-work\n            *ngIf=\"collectionType && collectionType === work\"\n            id=\"workAddressDetails\" \n            [options]=\"options?.workAddressOptions\"\n        >\n        </ps-input-display-only-cif-address-work>\n        <ps-keyin-textarea \n            *ngIf=\"collectionType && collectionType === other\"\n            id=\"keyin_textarea\" \n            [options]=\"options?.otherAddressOptions\"\n        >\n        </ps-keyin-textarea>\n    </ng-container>\n    <ng-container>\n        <ps-input-display-only id=\"accountCifBranch\" *ngIf=\"options.cifBranchChecking\"\n            [options]=\"options?.branchCifOptions\">\n        </ps-input-display-only>\n    </ng-container>\n\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "xmAG":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-display-only-cif-address-work/ps-input-display-only-cif-address-work.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: PsInputDisplayOnlyCIFAddressWorkComponent */

    /***/
    function xmAG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputDisplayOnlyCIFAddressWorkComponent", function () {
        return PsInputDisplayOnlyCIFAddressWorkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_display_only_cif_address_work_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-display-only-cif-address-work.component.html */
      "Nd4l");
      /* harmony import */


      var _ps_input_display_only_cif_address_work_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-display-only-cif-address-work.component.scss */
      "3Wus");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-display-only/ps-input-display-only.component */
      "ggmK");
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

      var PsInputDisplayOnlyCIFAddressWorkComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PsInputDisplayOnlyCIFAddressWorkComponent(commonP, loggerP, translateSrv) {
          var _this5;

          _classCallCheck(this, PsInputDisplayOnlyCIFAddressWorkComponent);

          _this5 = _callSuper(this, PsInputDisplayOnlyCIFAddressWorkComponent, [commonP, loggerP]);
          _this5.translateSrv = translateSrv;
          _this5.defaultOptions = {};
          return _this5;
        }

        _inherits(PsInputDisplayOnlyCIFAddressWorkComponent, _src_app_commonSRC_ps3);

        return _createClass(PsInputDisplayOnlyCIFAddressWorkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsInputDisplayOnlyCIFAddressWorkComponent, "ngOnInit", this, 3)([]);

            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USERINFO);
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.address = [];

            if (this.cifInfo.customerInfoCO) {
              if (this.translateSrv.currentLang.toLocaleLowerCase() === 'ar') {
                this.address = [this.cifInfo.customerInfoCO.institutionNameArabic, this.cifInfo.customerInfoCO.countryDescriptionArabic, this.cifInfo.customerInfoCO.regionDescriptionArabic, this.cifInfo.customerInfoCO.cityDescriptionArabic, this.cifInfo.customerInfoCO.streetDetailsArabic];
              } else {
                this.address = [this.cifInfo.customerInfoCO.institutionName, this.cifInfo.customerInfoCO.country, this.cifInfo.customerInfoCO.regionName, this.cifInfo.customerInfoCO.cityName, this.cifInfo.customerInfoCO.streetDetails];
              }

              this.address = this.address.concat([this.cifInfo.customerInfoCO.employerpoBox]);
            }

            this.commonProv.setValInsideNestedObj(this.options.fcName, this.address.filter(function (x) {
              return x !== undefined;
            }).join('-'), this.options.requestVO);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_display_only_ps_input_display_only_component__WEBPACK_IMPORTED_MODULE_5__["PsInputDisplayOnlyComponent"]);

      PsInputDisplayOnlyCIFAddressWorkComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      PsInputDisplayOnlyCIFAddressWorkComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputDisplayOnlyCIFAddressWorkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-display-only-cif-address-work',
        template: _raw_loader_ps_input_display_only_cif_address_work_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_display_only_cif_address_work_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], PsInputDisplayOnlyCIFAddressWorkComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=9-es5.js.map