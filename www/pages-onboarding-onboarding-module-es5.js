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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-onboarding-module"], {
    /***/
    "F/Sk":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-designation/ps-lov-designation.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: PsLovDesignationComponent */

    /***/
    function F_Sk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLovDesignationComponent", function () {
        return PsLovDesignationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lov_designation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lov-designation.component.html */
      "SS9d");
      /* harmony import */


      var _ps_lov_designation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lov-designation.component.scss */
      "p6Fv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-lov.component */
      "41l2");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsLovDesignationComponent = /*#__PURE__*/function (_src_app_commonBussin) {
        function PsLovDesignationComponent(commonProvService, logger) {
          var _this;

          _classCallCheck(this, PsLovDesignationComponent);

          _this = _callSuper(this, PsLovDesignationComponent, [commonProvService, logger]);
          _this.defaultSelectOptions = {
            lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DESIGNATION_LOV_TYPE_ID
          };
          return _this;
        }

        _inherits(PsLovDesignationComponent, _src_app_commonBussin);

        return _createClass(PsLovDesignationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.defaultSelectOptions.labelKey = this.options.labelKey ? this.commonProv.translate(this.options.labelKey) : this.commonProv.translate('designation_key');
            this.defaultSelectOptions.placeHolder = this.options.placeHolder ? this.commonProv.translate(this.options.placeHolder) : this.commonProv.translate('select_designation_key');
          }
        }, {
          key: "onChangeLov",
          value: function onChangeLov(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponent"]);

      PsLovDesignationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsLovDesignationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsLovDesignationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lov-designation',
        template: _raw_loader_ps_lov_designation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lov_designation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsLovDesignationComponent);
      /***/
    },

    /***/
    "Gy3l":
    /*!*************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-assets-description/ps-dropdown-assets-description.component.scss ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gy3l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1hc3NldHMtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "L7Uo":
    /*!*******************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding.module.ts ***!
      \*******************************************************/

    /*! exports provided: OnBoardingPageModule */

    /***/
    function L7Uo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingPageModule", function () {
        return OnBoardingPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-address/ps-complex-address.component.module */
      "dqMd");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */
      "Uxj/");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module */
      "Aju7");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_details_ps_complex_cif_details_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.module */
      "E18k");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_id_types_ps_complex_cif_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.module */
      "Y6U6");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_eco_sector_ps_complex_eco_sector_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-eco-sector/ps-complex-eco-sector.component.module */
      "RsoY");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_employment_details_ps_complex_employment_details_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.module */
      "SYYf");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module */
      "F9YD");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module */
      "dz/v");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_password_confirm_ps_confirm_pin_ps_confirm_pin_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-confirm-pin/ps-confirm-pin.component.module */
      "9WyK");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_personal_details_ps_complex_personal_details_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.module */
      "tG32");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module */
      "ohDU");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_specimen_ps_complex_specimen_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-specimen/ps-complex-specimen.component.module */
      "DtgQ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_contact_ps_complex_user_contact_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-user-contact/ps-complex-user-contact.component.module */
      "J7JR");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_credentials_ps_complex_user_credentials_component_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-user-credentials/ps-complex-user-credentials.component.module */
      "fwS1");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module */
      "AvcC");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module */
      "OzHP");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_map_atm_branches_ps_map_atm_branches_component_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-map-atm-branches/ps-map-atm-branches.component.module */
      "0uR4");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-account-types/ps-dropdown-account-types.component.module */
      "H9gP");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_card_types_ps_dropdown_card_types_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-card-types/ps-dropdown-card-types.component.module */
      "MJzT");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_chequebook_types_ps_dropdown_chequebook_types_component_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-chequebook-types/ps-dropdown-chequebook-types.component.module */
      "etOl");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component.module */
      "jjhr");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-currencies/ps-dropdown-currencies.component.module */
      "SiC0");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_facility_types_ps_dropdown_facility_types_component_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-facility-types/ps-dropdown-facility-types.component.module */
      "0R67");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_legal_status_ps_dropdown_legal_status_component_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-legal-status/ps-dropdown-legal-status.component.module */
      "rBpG");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_corporate_types_ps_dropdown_corporate_types_component_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-corporate-types/ps-dropdown-corporate-types.component.module */
      "S3bG");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_card_types_ps_lov_card_types_component_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-card-types/ps-lov-card-types.component.module */
      "rrI9");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_designation_ps_lov_designation_component_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-designation/ps-lov-designation.component.module */
      "Ucmm");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_gender_ps_lov_gender_component_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-gender/ps-lov-gender.component.module */
      "X8pM");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_periodicity_ps_lov_periodicity_component_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-periodicity/ps-lov-periodicity.component.module */
      "Oc64");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_postal_codes_ps_dropdown_postal_codes_component_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.module */
      "xLgG");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_product_category_ps_dropdown_product_category_component_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-product-category/ps-dropdown-product-category.component.module */
      "IcfS");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_ranking_ps_dropdown_ranking_component_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-ranking/ps-dropdown-ranking.component.module */
      "SqNI");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_security_questions_ps_complex_security_questions_component_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.module */
      "87mA");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_assets_description_ps_dropdown_assets_description_component_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-assets-description/ps-dropdown-assets-description.component.module */
      "v9xZ");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_entity_type_ps_lov_entity_type_component_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-entity-type/ps-lov-entity-type.component.module */
      "oboa");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_product_types_ps_dropdown_product_types_component_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-product-types/ps-dropdown-product-types.component.module */
      "kq2N");
      /* harmony import */


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./onboarding.page */
      "Fxwi");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.module */
      "rSht");

      var routes = [{
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_49__["OnBoardingPage"]
      }];

      var OnBoardingPageModule = /*#__PURE__*/_createClass(function OnBoardingPageModule() {
        _classCallCheck(this, OnBoardingPageModule);
      });

      OnBoardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_42__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_39__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_40__["PsTemplateFormModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_41__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_20__["PsInputEmailComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexAddressComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_personal_details_ps_complex_personal_details_component_module__WEBPACK_IMPORTED_MODULE_13__["PsComplexPersonalDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_22__["PsInputVarcharComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_postal_codes_ps_dropdown_postal_codes_component_module__WEBPACK_IMPORTED_MODULE_36__["PsDropdownPostalCodesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_gender_ps_lov_gender_component_module__WEBPACK_IMPORTED_MODULE_34__["PsLovGenderComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_legal_status_ps_dropdown_legal_status_component_module__WEBPACK_IMPORTED_MODULE_30__["PsDropdownLegalStatusComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_ranking_ps_dropdown_ranking_component_module__WEBPACK_IMPORTED_MODULE_38__["PsDropdownRankingComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_contact_ps_complex_user_contact_component_module__WEBPACK_IMPORTED_MODULE_16__["PsComplexUserContactComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_eco_sector_ps_complex_eco_sector_component_module__WEBPACK_IMPORTED_MODULE_8__["PsComplexEcoSectorModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_21__["PsInputNumericComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_27__["PsDropdownCountryComponentModule"], src_app_commonBussinessSRC_psComponents_ps_map_atm_branches_ps_map_atm_branches_component_module__WEBPACK_IMPORTED_MODULE_23__["PsMapAtmBranchesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_details_ps_complex_cif_details_component_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexCifDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_employment_details_ps_complex_employment_details_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexEmploymentDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_credentials_ps_complex_user_credentials_component_module__WEBPACK_IMPORTED_MODULE_17__["PsComplexUserCredentialsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_account_types_ps_dropdown_account_types_component_module__WEBPACK_IMPORTED_MODULE_24__["PsDropdownAccountTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_currencies_ps_dropdown_currencies_component_module__WEBPACK_IMPORTED_MODULE_28__["PsDropdownCurrenciesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_card_types_ps_lov_card_types_component_module__WEBPACK_IMPORTED_MODULE_32__["PsLovCardTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_chequebook_types_ps_dropdown_chequebook_types_component_module__WEBPACK_IMPORTED_MODULE_26__["PsDropdownChequebookTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_14__["PsComplexSelectBranchComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_card_types_ps_dropdown_card_types_component_module__WEBPACK_IMPORTED_MODULE_25__["PsDropdownCardTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_id_types_ps_complex_cif_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__["PsComplexCifIdTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_18__["PsEntityPhoneNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_11__["PsComplexMediaCaptureComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexCallSlotComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_10__["PsComplexIdDetailsModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_specimen_ps_complex_specimen_component_module__WEBPACK_IMPORTED_MODULE_15__["PsComplexSpecimenComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_facility_types_ps_dropdown_facility_types_component_module__WEBPACK_IMPORTED_MODULE_29__["PsDropdownFacilityTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexAmountComponentModule"], _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_product_types_ps_dropdown_product_types_component_module__WEBPACK_IMPORTED_MODULE_48__["PsDropdownProductTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_product_category_ps_dropdown_product_category_component_module__WEBPACK_IMPORTED_MODULE_37__["PsDropdownProductCategoryComponentModule"], _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_assets_description_ps_dropdown_assets_description_component_module__WEBPACK_IMPORTED_MODULE_46__["PsDropdownAssetDescriptionComponentModule"], _commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_44__["PsDateDayMonthYearPastComponentModule"], _commonBussinessSRC_psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_45__["PsInputFreeTextComponentModule"], _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_entity_type_ps_lov_entity_type_component_module__WEBPACK_IMPORTED_MODULE_47__["PsLovEntityTypeComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_designation_ps_lov_designation_component_module__WEBPACK_IMPORTED_MODULE_33__["PsLovDesignationComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_periodicity_ps_lov_periodicity_component_module__WEBPACK_IMPORTED_MODULE_35__["PsLovPeriodicityOptionsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_password_confirm_ps_confirm_pin_ps_confirm_pin_component_module__WEBPACK_IMPORTED_MODULE_12__["PsConfirmPinModule"], _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_security_questions_ps_complex_security_questions_component_module__WEBPACK_IMPORTED_MODULE_43__["PsComplexSecurityQuestionComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_ranking_ps_dropdown_ranking_component_module__WEBPACK_IMPORTED_MODULE_38__["PsDropdownRankingComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_corporate_types_ps_dropdown_corporate_types_component_module__WEBPACK_IMPORTED_MODULE_31__["PsDropdownCorporateTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_19__["PsFileUploadBSComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_50__["PsComplexTermsAndConditionsModule"]],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_49__["OnBoardingPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], OnBoardingPageModule);
      /***/
    },

    /***/
    "N3U2":
    /*!***************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-assets-description/ps-dropdown-assets-description.component.html ***!
      \***************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N3U2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"selectDropDownChange($event)\">\r\n</ps-select-dropdown>";
      /***/
    },

    /***/
    "Rj8c":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-corporate-types/ps-dropdown-corporate-types.component.scss ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rj8c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1jb3Jwb3JhdGUtdHlwZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "S3bG":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-corporate-types/ps-dropdown-corporate-types.component.module.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: PsDropdownCorporateTypesComponentModule */

    /***/
    function S3bG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownCorporateTypesComponentModule", function () {
        return PsDropdownCorporateTypesComponentModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_corporate_types_ps_dropdown_corporate_types_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-corporate-types/ps-dropdown-corporate-types.component */
      "iifA");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ps-dropdown-lov.component.module */
      "LhaX");

      var PsDropdownCorporateTypesComponentModule = /*#__PURE__*/_createClass(function PsDropdownCorporateTypesComponentModule() {
        _classCallCheck(this, PsDropdownCorporateTypesComponentModule);
      });

      PsDropdownCorporateTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_corporate_types_ps_dropdown_corporate_types_component__WEBPACK_IMPORTED_MODULE_2__["PsDropdownCorporateTypesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDropdownLovComponentModule"]],
        exports: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_corporate_types_ps_dropdown_corporate_types_component__WEBPACK_IMPORTED_MODULE_2__["PsDropdownCorporateTypesComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_corporate_types_ps_dropdown_corporate_types_component__WEBPACK_IMPORTED_MODULE_2__["PsDropdownCorporateTypesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownCorporateTypesComponentModule);
      /***/
    },

    /***/
    "SS9d":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-designation/ps-lov-designation.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SS9d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-dropdown-lov [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChangeLov($event)\"></ps-dropdown-lov>";
      /***/
    },

    /***/
    "Ucmm":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-designation/ps-lov-designation.component.module.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: PsLovDesignationComponentModule */

    /***/
    function Ucmm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLovDesignationComponentModule", function () {
        return PsLovDesignationComponentModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_designation_ps_lov_designation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-designation/ps-lov-designation.component */
      "F/Sk");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ps-dropdown-lov.component.module */
      "LhaX");

      var PsLovDesignationComponentModule = /*#__PURE__*/_createClass(function PsLovDesignationComponentModule() {
        _classCallCheck(this, PsLovDesignationComponentModule);
      });

      PsLovDesignationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_designation_ps_lov_designation_component__WEBPACK_IMPORTED_MODULE_2__["PsLovDesignationComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDropdownLovComponentModule"]],
        exports: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_designation_ps_lov_designation_component__WEBPACK_IMPORTED_MODULE_2__["PsLovDesignationComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_designation_ps_lov_designation_component__WEBPACK_IMPORTED_MODULE_2__["PsLovDesignationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLovDesignationComponentModule);
      /***/
    },

    /***/
    "gf5W":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-assets-description/ps-dropdown-assets-description.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: PsDropdownAssetDescriptionComponent */

    /***/
    function gf5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownAssetDescriptionComponent", function () {
        return PsDropdownAssetDescriptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_assets_description_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-assets-description.component.html */
      "N3U2");
      /* harmony import */


      var _ps_dropdown_assets_description_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-assets-description.component.scss */
      "Gy3l");
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


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author G.Radwan
       * @since 02/03/2021
       *
       * <p> PsDropdownproductCategoriesComponent will fetch the list of product categories from server</p>
       */


      var PsDropdownAssetDescriptionComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsDropdownAssetDescriptionComponent(commonService, logger, omniPullService) {
          var _this2;

          _classCallCheck(this, PsDropdownAssetDescriptionComponent);

          _this2 = _callSuper(this, PsDropdownAssetDescriptionComponent, [commonService, logger]);
          _this2.omniPullService = omniPullService;
          _this2.options = {};
          _this2.defaultOptions = {
            listOfOptions: []
          };
          return _this2;
        }

        _inherits(PsDropdownAssetDescriptionComponent, _src_app_commonSRC_ps);

        return _createClass(PsDropdownAssetDescriptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.loadAssestsDescription();
          }
          /**
           * populating assets fetched from server
           */

        }, {
          key: "loadAssestsDescription",
          value: function loadAssestsDescription() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var assestsList, _iterator, _step, iterator, assest;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    //  const assestsList = await this.omniPullService.returnAssetsList({}).catch(error => {
                    //   this.logger.error('Error: While fetching Product types in PsDropdownAssetDescriptionComponent : ', error);
                    // });
                    assestsList = {
                      gridModel: [{
                        categoryCode: '1',
                        description: 'asset 1'
                      }, {
                        categoryCode: '2',
                        description: 'asset 2'
                      }]
                    };

                    if (assestsList && assestsList.gridModel && assestsList.gridModel.length > 0) {
                      _iterator = _createForOfIteratorHelper(assestsList.gridModel);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          iterator = _step.value;
                          assest = {
                            itemValue: iterator.categoryCode,
                            description: iterator.description,
                            selectedObj: iterator
                          };
                          this.defaultOptions.listOfOptions.push(assest);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                    }

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "selectDropDownChange",
          value: function selectDropDownChange(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownAssetDescriptionComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownAssetDescriptionComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownAssetDescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-assets-description',
        template: _raw_loader_ps_dropdown_assets_description_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_assets_description_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownAssetDescriptionComponent);
      /***/
    },

    /***/
    "iifA":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-corporate-types/ps-dropdown-corporate-types.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: PsDropdownCorporateTypesComponent */

    /***/
    function iifA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownCorporateTypesComponent", function () {
        return PsDropdownCorporateTypesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_corporate_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-corporate-types.component.html */
      "pUBq");
      /* harmony import */


      var _ps_dropdown_corporate_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-corporate-types.component.scss */
      "Rj8c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-lov.component */
      "41l2");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownCorporateTypesComponent = /*#__PURE__*/function (_src_app_commonBussin2) {
        function PsDropdownCorporateTypesComponent(commonProvService, logger) {
          var _this3;

          _classCallCheck(this, PsDropdownCorporateTypesComponent);

          _this3 = _callSuper(this, PsDropdownCorporateTypesComponent, [commonProvService, logger]);
          _this3.defaultSelectOptions = {
            lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CORPORATE_TYPE_LOV_TYPE_ID
          };
          return _this3;
        }

        _inherits(PsDropdownCorporateTypesComponent, _src_app_commonBussin2);

        return _createClass(PsDropdownCorporateTypesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.defaultSelectOptions.labelKey = this.commonProv.translate('corporate_type_key');
            this.defaultSelectOptions.placeHolder = this.commonProv.translate('select_corporate_type_key');
          }
        }, {
          key: "onChangeLov",
          value: function onChangeLov(values) {
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponent"]);

      PsDropdownCorporateTypesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsDropdownCorporateTypesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownCorporateTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lov-corporate-type',
        template: _raw_loader_ps_dropdown_corporate_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_corporate_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsDropdownCorporateTypesComponent);
      /***/
    },

    /***/
    "p6Fv":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-designation/ps-lov-designation.component.scss ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function p6Fv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb3YtZGVzaWduYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "pUBq":
    /*!*************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-corporate-types/ps-dropdown-corporate-types.component.html ***!
      \*************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pUBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-dropdown-lov [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChangeLov($event)\"></ps-dropdown-lov>";
      /***/
    },

    /***/
    "v9xZ":
    /*!******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-assets-description/ps-dropdown-assets-description.component.module.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: PsDropdownAssetDescriptionComponentModule */

    /***/
    function v9xZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownAssetDescriptionComponentModule", function () {
        return PsDropdownAssetDescriptionComponentModule;
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


      var _ps_dropdown_assets_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-assets-description.component */
      "gf5W");

      var PsDropdownAssetDescriptionComponentModule = /*#__PURE__*/_createClass(function PsDropdownAssetDescriptionComponentModule() {
        _classCallCheck(this, PsDropdownAssetDescriptionComponentModule);
      });

      PsDropdownAssetDescriptionComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_assets_description_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownAssetDescriptionComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]],
        exports: [_ps_dropdown_assets_description_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownAssetDescriptionComponent"]],
        entryComponents: [_ps_dropdown_assets_description_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownAssetDescriptionComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownAssetDescriptionComponentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-onboarding-onboarding-module-es5.js.map