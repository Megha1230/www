(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cif-opening-cif-opening-module~pages-onboarding-onboarding-module~pages-personal-detai~cf42c052"], {
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
    "+Gku":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: PsDropdownMaritalStatusComponent */

    /***/
    function Gku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownMaritalStatusComponent", function () {
        return PsDropdownMaritalStatusComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_marital_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-marital-status.component.html */
      "qRHe");
      /* harmony import */


      var _ps_dropdown_marital_status_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-marital-status.component.scss */
      "OnhY");
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


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownMaritalStatusComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsDropdownMaritalStatusComponent(commonProv, loggerP, omniPull) {
          var _this;

          _classCallCheck(this, PsDropdownMaritalStatusComponent);

          _this = _callSuper(this, PsDropdownMaritalStatusComponent, [commonProv, loggerP]);
          _this.omniPull = omniPull;
          _this.options = {};
          _this.maritalstatus = [];
          _this.defalultOptions = {};
          return _this;
        }

        _inherits(PsDropdownMaritalStatusComponent, _src_app_commonSRC_ps);

        return _createClass(PsDropdownMaritalStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMaritalStatus();
            this.commonProv.copyObject(this.defalultOptions, this.options, false);
          }
        }, {
          key: "loadMaritalStatus",
          value: function loadMaritalStatus() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var paramData, result, _iterator, _step, iterator, lovDropDown;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    paramData = {
                      language: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].activeLanguge,
                      lovTypeId: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].MARITAL_STATUS_LOV_TYPE_ID
                    };
                    _context.n = 1;
                    return this.omniPull.returnLovTypesValues(paramData)["catch"](function (error) {
                      _this2.logger.error('Error: While fetching LOV types in PsDropdownLovComponent :', error);
                    });

                  case 1:
                    result = _context.v;
                    this.defalultOptions.listOfOptions = [];

                    if (result && result.length > 0) {
                      _iterator = _createForOfIteratorHelper(result);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          iterator = _step.value;
                          lovDropDown = {
                            itemValue: iterator.itemValue,
                            description: iterator.description,
                            selectedObj: iterator
                          };
                          this.defalultOptions.listOfOptions.push(lovDropDown);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownMaritalStatusComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownMaritalStatusComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownMaritalStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-marital-status',
        template: _raw_loader_ps_dropdown_marital_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_marital_status_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownMaritalStatusComponent);
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
    "5eGu":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.scss ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eGu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXBlcnNvbmFsLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "E18k":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.module.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: PsComplexCifDetailsComponentModule */

    /***/
    function E18k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCifDetailsComponentModule", function () {
        return PsComplexCifDetailsComponentModule;
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


      var _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var _ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-email/ps-input-email.module */
      "OzHP");
      /* harmony import */


      var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");
      /* harmony import */


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../ps-complex-address/ps-complex-address.component.module */
      "dqMd");
      /* harmony import */


      var _ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./ps-complex-cif-details.component */
      "sV6Y");

      var PsComplexCifDetailsComponentModule = /*#__PURE__*/_createClass(function PsComplexCifDetailsComponentModule() {
        _classCallCheck(this, PsComplexCifDetailsComponentModule);
      });

      PsComplexCifDetailsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexCifDetailsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputFreeTextComponentModule"], _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInputNumericComponentModule"], _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexAddressComponentModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputVarcharComponentModule"], _ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_5__["PsInputEmailComponentModule"], _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__["PsEntityPhoneNumberComponentModule"]],
        exports: [_ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexCifDetailsComponent"]],
        entryComponents: [_ps_complex_cif_details_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexCifDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexCifDetailsComponentModule);
      /***/
    },

    /***/
    "F0fd":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.module.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: PsDropdownMaritalStatusComponentModule */

    /***/
    function F0fd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownMaritalStatusComponentModule", function () {
        return PsDropdownMaritalStatusComponentModule;
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


      var _ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-marital-status.component */
      "+Gku");

      var PsDropdownMaritalStatusComponentModule = /*#__PURE__*/_createClass(function PsDropdownMaritalStatusComponentModule() {
        _classCallCheck(this, PsDropdownMaritalStatusComponentModule);
      });

      PsDropdownMaritalStatusComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownMaritalStatusComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]],
        exports: [_ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownMaritalStatusComponent"]],
        entryComponents: [_ps_dropdown_marital_status_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownMaritalStatusComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownMaritalStatusComponentModule);
      /***/
    },

    /***/
    "G2u2":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.module.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsDropdownNationalitiesComponentModule */

    /***/
    function G2u2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownNationalitiesComponentModule", function () {
        return PsDropdownNationalitiesComponentModule;
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


      var _ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-nationalities.component */
      "dUiw");

      var PsDropdownNationalitiesComponentModule = /*#__PURE__*/_createClass(function PsDropdownNationalitiesComponentModule() {
        _classCallCheck(this, PsDropdownNationalitiesComponentModule);
      });

      PsDropdownNationalitiesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownNationalitiesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownNationalitiesComponent"]],
        entryComponents: [_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownNationalitiesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownNationalitiesComponentModule);
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
    "OnhY":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.scss ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OnhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1tYXJpdGFsLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */";
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

      var PsInputEmailComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsInputEmailComponent(commonP, loggerP) {
          var _this3;

          _classCallCheck(this, PsInputEmailComponent);

          _this3 = _callSuper(this, PsInputEmailComponent, [commonP, loggerP]);
          _this3.mainOptions = {};
          return _this3;
        }

        _inherits(PsInputEmailComponent, _src_app_commonSRC_ps2);

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
    "SYYf":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.module.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: PsComplexEmploymentDetailsComponentModule */

    /***/
    function SYYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexEmploymentDetailsComponentModule", function () {
        return PsComplexEmploymentDetailsComponentModule;
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


      var _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");
      /* harmony import */


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.module */
      "Y+Uy");
      /* harmony import */


      var _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../ps-complex-address/ps-complex-address.component.module */
      "dqMd");
      /* harmony import */


      var _ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./ps-complex-employment-details.component */
      "WyFo");

      var PsComplexEmploymentDetailsComponentModule = /*#__PURE__*/_createClass(function PsComplexEmploymentDetailsComponentModule() {
        _classCallCheck(this, PsComplexEmploymentDetailsComponentModule);
      });

      PsComplexEmploymentDetailsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexEmploymentDetailsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputFreeTextComponentModule"], _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_7__["PsInputNumericComponentModule"], _ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_10__["PsComplexAddressComponentModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputVarcharComponentModule"], _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponentModule"], _ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component_module__WEBPACK_IMPORTED_MODULE_9__["PsDropdownOccupationComponentModule"], _ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_4__["PsEntityPhoneNumberComponentModule"]],
        exports: [_ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexEmploymentDetailsComponent"]],
        entryComponents: [_ps_complex_employment_details_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexEmploymentDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexEmploymentDetailsComponentModule);
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

      var PsDropdownOccupationComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PsDropdownOccupationComponent(commonProv, loggerP, omniPull) {
          var _this4;

          _classCallCheck(this, PsDropdownOccupationComponent);

          _this4 = _callSuper(this, PsDropdownOccupationComponent, [commonProv, loggerP]);
          _this4.commonProv = commonProv;
          _this4.loggerP = loggerP;
          _this4.omniPull = omniPull;
          _this4.occupationOptions = {};
          return _this4;
        }

        _inherits(PsDropdownOccupationComponent, _src_app_commonSRC_ps3);

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var params, result, _iterator2, _step2, iterator, country;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    params = {
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].OCCUPATION_OPER_ID
                    };
                    _context2.n = 1;
                    return this.omniPull.reutrnOccupation(params)["catch"](function (error) {
                      _this5.logger.error('Error ! while fetching occupation in PsDropdownOccupationComponent', error);
                    });

                  case 1:
                    result = _context2.v;
                    this.occupationOptions.listOfOptions = [];

                    if (result && result.gridModel && result.gridModel.length > 0) {
                      _iterator2 = _createForOfIteratorHelper(result.gridModel);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          iterator = _step2.value;
                          country = {
                            itemValue: iterator.positionCode,
                            description: iterator.briefDescription,
                            selectedObj: iterator
                          };
                          this.occupationOptions.listOfOptions.push(country);
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
    "WyFo":
    /*!************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: PsComplexEmploymentDetailsComponent */

    /***/
    function WyFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexEmploymentDetailsComponent", function () {
        return PsComplexEmploymentDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_employment_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-employment-details.component.html */
      "gHhM");
      /* harmony import */


      var _ps_complex_employment_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-employment-details.component.scss */
      "ykt3");
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

      var PsComplexEmploymentDetailsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps4) {
        function PsComplexEmploymentDetailsComponent(commonProv, loggerP) {
          var _this6;

          _classCallCheck(this, PsComplexEmploymentDetailsComponent);

          _this6 = _callSuper(this, PsComplexEmploymentDetailsComponent, [commonProv, loggerP]);
          _this6.commonProv = commonProv;
          _this6.loggerP = loggerP;
          return _this6;
        }

        _inherits(PsComplexEmploymentDetailsComponent, _src_app_commonSRC_ps4);

        return _createClass(PsComplexEmploymentDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexEmploymentDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsComplexEmploymentDetailsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexEmploymentDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-employment-details',
        template: _raw_loader_ps_complex_employment_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_employment_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsComplexEmploymentDetailsComponent);
      /***/
    },

    /***/
    "Y+Uy":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.module.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: PsDropdownOccupationComponentModule */

    /***/
    function YUy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownOccupationComponentModule", function () {
        return PsDropdownOccupationComponentModule;
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


      var _ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-occupation.component */
      "WGyA");

      var PsDropdownOccupationComponentModule = /*#__PURE__*/_createClass(function PsDropdownOccupationComponentModule() {
        _classCallCheck(this, PsDropdownOccupationComponentModule);
      });

      PsDropdownOccupationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownOccupationComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownOccupationComponent"]],
        entryComponents: [_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownOccupationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownOccupationComponentModule);
      /***/
    },

    /***/
    "YfFg":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.html ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YfFg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n\n\n  <ps-complex-address [options]=\"options.addressOptions\"></ps-complex-address>\n\n\n  <ps-entity-phone-number [options]=\"options.mobileNumberOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.residentialTelOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.faxOptions\"></ps-entity-phone-number>\n\n\n  <ps-input-email [options]=\"options.emailOptions\"></ps-input-email>\n\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "YgGx":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsComplexPersonalDetailsComponent */

    /***/
    function YgGx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexPersonalDetailsComponent", function () {
        return PsComplexPersonalDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_personal_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-personal-details.component.html */
      "z7wq");
      /* harmony import */


      var _ps_complex_personal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-personal-details.component.scss */
      "5eGu");
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

      var PsComplexPersonalDetailsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps5) {
        function PsComplexPersonalDetailsComponent(commonProv, loggerP) {
          var _this7;

          _classCallCheck(this, PsComplexPersonalDetailsComponent);

          _this7 = _callSuper(this, PsComplexPersonalDetailsComponent, [commonProv, loggerP]);
          _this7.commonProv = commonProv;
          _this7.loggerP = loggerP;
          return _this7;
        }

        _inherits(PsComplexPersonalDetailsComponent, _src_app_commonSRC_ps5);

        return _createClass(PsComplexPersonalDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexPersonalDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsComplexPersonalDetailsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexPersonalDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-personal-details',
        template: _raw_loader_ps_complex_personal_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_personal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsComplexPersonalDetailsComponent);
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

      var PsDropdownNationalitiesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps6) {
        function PsDropdownNationalitiesComponent(commonProv, loggerP, omniPull) {
          var _this8;

          _classCallCheck(this, PsDropdownNationalitiesComponent);

          _this8 = _callSuper(this, PsDropdownNationalitiesComponent, [commonProv, loggerP]);
          _this8.commonProv = commonProv;
          _this8.loggerP = loggerP;
          _this8.omniPull = omniPull;
          _this8.defaultSelectOptions = {};
          return _this8;
        }

        _inherits(PsDropdownNationalitiesComponent, _src_app_commonSRC_ps6);

        return _createClass(PsDropdownNationalitiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.returnNationalities();
          }
        }, {
          key: "returnNationalities",
          value: function returnNationalities() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this9 = this;

              var nationaltiesRequest, nationalitiesResponse, _iterator3, _step3, iterator, documents;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    nationaltiesRequest = {
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].NATIONALITY_OPER_ID
                    }; // No need other than company code as all the nationalities will be retrieved

                    _context3.n = 1;
                    return this.omniPull.returnNationalities(nationaltiesRequest)["catch"](function (error) {
                      _this9.logger.error('Error! while fetching nationalities in PsDropdownNationalitiesComponent', error);
                    });

                  case 1:
                    nationalitiesResponse = _context3.v;
                    this.defaultSelectOptions.listOfOptions = [];

                    if (nationalitiesResponse && nationalitiesResponse.gridModel && nationalitiesResponse.gridModel.length > 0) {
                      _iterator3 = _createForOfIteratorHelper(nationalitiesResponse.gridModel);

                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          iterator = _step3.value;
                          documents = {
                            itemValue: iterator.NATIONALITY_CODE,
                            description: iterator.longDesc,
                            selectedObj: iterator
                          };
                          this.defaultSelectOptions.listOfOptions.push(documents);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }

                      this.options.listOfOptions = [];
                      this.commonProv.copyObject(this.options.listOfOptions, this.defaultSelectOptions.listOfOptions, false);
                    }

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
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
    "gHhM":
    /*!****************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.html ***!
      \****************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gHhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n\n  <ps-input-varchar *ngIf=\"!options.isInstitutionType\" [options]=\"options.employerNameOptions\"></ps-input-varchar>\n\n\n  <ps-dropdown-occupation *ngIf=\"!options.isInstitutionType\" [options]=\"options.occupationOptions\">\n  </ps-dropdown-occupation>\n\n\n  <ps-complex-address [options]=\"options.addressOptions\"></ps-complex-address>\n\n\n  <ps-date-day-month-year-past *ngIf=\"options.isInstitutionType\" [id]=\"id + '_establishment_date'\"\n    [options]=\"options.establishmentDateOptions\">\n  </ps-date-day-month-year-past>\n\n\n  <ps-entity-phone-number [options]=\"options.officeTelPhoneNumberOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.handPhoneNumberOptions\"></ps-entity-phone-number>\n\n\n  <ps-entity-phone-number [options]=\"options.faxOptions\"></ps-entity-phone-number>\n\n\n  <ps-date-day-month-year-past id=\"date_day_month_year_past\" [options]=\"options.dateOfJoiningDivisionOptions\">\n  </ps-date-day-month-year-past>\n\n</ps-container-complex>";
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
    "qRHe":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qRHe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [options]=\"defalultOptions\" ></ps-select-dropdown>";
      /***/
    },

    /***/
    "sV6Y":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: PsComplexCifDetailsComponent */

    /***/
    function sV6Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCifDetailsComponent", function () {
        return PsComplexCifDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_cif_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-cif-details.component.html */
      "YfFg");
      /* harmony import */


      var _ps_complex_cif_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-cif-details.component.scss */
      "wZsD");
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

      var PsComplexCifDetailsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps7) {
        function PsComplexCifDetailsComponent(commonProv, loggerP) {
          var _this0;

          _classCallCheck(this, PsComplexCifDetailsComponent);

          _this0 = _callSuper(this, PsComplexCifDetailsComponent, [commonProv, loggerP]);
          _this0.commonProv = commonProv;
          _this0.loggerP = loggerP;
          return _this0;
        }

        _inherits(PsComplexCifDetailsComponent, _src_app_commonSRC_ps7);

        return _createClass(PsComplexCifDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexCifDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsComplexCifDetailsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexCifDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-cif-details',
        template: _raw_loader_ps_complex_cif_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_cif_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsComplexCifDetailsComponent);
      /***/
    },

    /***/
    "tG32":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.module.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsComplexPersonalDetailsComponentModule */

    /***/
    function tG32(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexPersonalDetailsComponentModule", function () {
        return PsComplexPersonalDetailsComponentModule;
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


      var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_marital_status_ps_dropdown_marital_status_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-marital-status/ps-dropdown-marital-status.component.module */
      "F0fd");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.module */
      "G2u2");
      /* harmony import */


      var _ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ps-complex-personal-details.component */
      "YgGx");

      var PsComplexPersonalDetailsComponentModule = /*#__PURE__*/_createClass(function PsComplexPersonalDetailsComponentModule() {
        _classCallCheck(this, PsComplexPersonalDetailsComponentModule);
      });

      PsComplexPersonalDetailsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputVarcharComponentModule"], _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearPastComponentModule"], _ps_select_dropdown_ps_dropdown_marital_status_ps_dropdown_marital_status_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownMaritalStatusComponentModule"], _ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDropdownNationalitiesComponentModule"]],
        exports: [_ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponent"]],
        entryComponents: [_ps_complex_personal_details_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexPersonalDetailsComponentModule);
      /***/
    },

    /***/
    "wZsD":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.scss ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wZsD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWNpZi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "ykt3":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.scss ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ykt3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWVtcGxveW1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
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
    },

    /***/
    "z7wq":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function z7wq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n\n\n  <ps-input-varchar *ngIf=\"!options.isInstitutionType && options.customerNameOptions\"\n    [options]=\"options.customerNameOptions\"></ps-input-varchar>\n\n  <ps-date-day-month-year-past *ngIf=\"!options.isInstitutionType\" [options]=\"options.psDobOptions\" [id]=\"'dob_' + id\"\n    class=\"ps-date-month-year\">\n  </ps-date-day-month-year-past>\n\n\n  <ps-dropdown-nationalities [options]=\"options.nationalityOptions\" [id]=\"'nationality_' + id\">\n  </ps-dropdown-nationalities>\n\n\n  <ps-dropdown-marital-status *ngIf=\"!options.isInstitutionType\" [options]=\"options.maritalstatusOptions\"\n    [id]=\"'maritalstatus_' + id\"></ps-dropdown-marital-status>\n\n</ps-container-complex>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-cif-opening-cif-opening-module~pages-onboarding-onboarding-module~pages-personal-detai~cf42c052-es5.js.map