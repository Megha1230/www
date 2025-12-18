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

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-credentials-forgot-credentials-module"], {
    /***/
    "Jfh7":
    /*!******************************************************************************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions-online-registration/ps-complex-terms-and-conditions-online-registration.component.scss ***!
      \******************************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jfh7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXRlcm1zLWFuZC1jb25kaXRpb25zLW9ubGluZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "SIKQ":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/forgot-credentials/forgot-credentials.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ForgotCredentialsPageModule */

    /***/
    function SIKQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotCredentialsPageModule", function () {
        return ForgotCredentialsPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_action_gallery_ps_gallery_verification_images_ps_gallery_verification_images_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-action-gallery/ps-gallery-verification-images/ps-gallery-verification-images.module */
      "pIP6");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_bank_authentication_ps_complex_bank_authentication_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-bank-authentication/ps-complex-bank-authentication.module */
      "v5TM");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module */
      "F9YD");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_password_confirm_ps_confirm_pin_ps_confirm_pin_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-confirm-pin/ps-confirm-pin.component.module */
      "9WyK");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_security_questions_ps_complex_security_questions_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.module */
      "87mA");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_online_registration_ps_complex_terms_and_conditions_online_registration_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions-online-registration/ps-complex-terms-and-conditions-online-registration.component.module */
      "l8T2");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_credentials_ps_complex_user_credentials_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-user-credentials/ps-complex-user-credentials.component.module */
      "fwS1");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var _forgot_credentials_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./forgot-credentials.page */
      "BVQX");

      var routes = [{
        path: '',
        component: _forgot_credentials_page__WEBPACK_IMPORTED_MODULE_15__["ForgotCredentialsPage"]
      }];

      var ForgotCredentialsPageModule = /*#__PURE__*/_createClass(function ForgotCredentialsPageModule() {
        _classCallCheck(this, ForgotCredentialsPageModule);
      });

      ForgotCredentialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_11__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_12__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_online_registration_ps_complex_terms_and_conditions_online_registration_component_module__WEBPACK_IMPORTED_MODULE_8__["PsComplexTermsAndConditionsOnlineRegistrationModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexIdDetailsModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_bank_authentication_ps_complex_bank_authentication_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexBankAuthenticationComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_credentials_ps_complex_user_credentials_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexUserCredentialsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_action_gallery_ps_gallery_verification_images_ps_gallery_verification_images_module__WEBPACK_IMPORTED_MODULE_3__["PsGalleryVerificationImagesModule"], _commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_14__["PsDateDayMonthYearPastComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_security_questions_ps_complex_security_questions_component_module__WEBPACK_IMPORTED_MODULE_7__["PsComplexSecurityQuestionComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_password_confirm_ps_confirm_pin_ps_confirm_pin_component_module__WEBPACK_IMPORTED_MODULE_6__["PsConfirmPinModule"], src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_10__["PsEntityPhoneNumberComponentModule"]],
        declarations: [_forgot_credentials_page__WEBPACK_IMPORTED_MODULE_15__["ForgotCredentialsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], ForgotCredentialsPageModule);
      /***/
    },

    /***/
    "l8T2":
    /*!***********************************************************************************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions-online-registration/ps-complex-terms-and-conditions-online-registration.component.module.ts ***!
      \***********************************************************************************************************************************************************************************************************************************/

    /*! exports provided: PsComplexTermsAndConditionsOnlineRegistrationModule */

    /***/
    function l8T2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexTermsAndConditionsOnlineRegistrationModule", function () {
        return PsComplexTermsAndConditionsOnlineRegistrationModule;
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


      var _ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ps-complex-terms-and-conditions.module */
      "rSht");
      /* harmony import */


      var _ps_complex_terms_and_conditions_online_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-complex-terms-and-conditions-online-registration.component */
      "zV9Q");

      var PsComplexTermsAndConditionsOnlineRegistrationModule = /*#__PURE__*/_createClass(function PsComplexTermsAndConditionsOnlineRegistrationModule() {
        _classCallCheck(this, PsComplexTermsAndConditionsOnlineRegistrationModule);
      });

      PsComplexTermsAndConditionsOnlineRegistrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_terms_and_conditions_online_registration_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexTermsAndConditionsOnlineRegistrationComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _ps_complex_terms_and_conditions_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexTermsAndConditionsModule"]],
        exports: [_ps_complex_terms_and_conditions_online_registration_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexTermsAndConditionsOnlineRegistrationComponent"]],
        entryComponents: [_ps_complex_terms_and_conditions_online_registration_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexTermsAndConditionsOnlineRegistrationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexTermsAndConditionsOnlineRegistrationModule);
      /***/
    },

    /***/
    "rKOw":
    /*!********************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions-online-registration/ps-complex-terms-and-conditions-online-registration.component.html ***!
      \********************************************************************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rKOw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-complex-terms-and-conditions [options]=\"mainOptions\">\n\n</ps-complex-terms-and-conditions>";
      /***/
    },

    /***/
    "zV9Q":
    /*!****************************************************************************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions-online-registration/ps-complex-terms-and-conditions-online-registration.component.ts ***!
      \****************************************************************************************************************************************************************************************************************************/

    /*! exports provided: PsComplexTermsAndConditionsOnlineRegistrationComponent */

    /***/
    function zV9Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexTermsAndConditionsOnlineRegistrationComponent", function () {
        return PsComplexTermsAndConditionsOnlineRegistrationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_terms_and_conditions_online_registration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-terms-and-conditions-online-registration.component.html */
      "rKOw");
      /* harmony import */


      var _ps_complex_terms_and_conditions_online_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-terms-and-conditions-online-registration.component.scss */
      "Jfh7");
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

      var PsComplexTermsAndConditionsOnlineRegistrationComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexTermsAndConditionsOnlineRegistrationComponent(commonProv, loggerP) {
          var _this;

          _classCallCheck(this, PsComplexTermsAndConditionsOnlineRegistrationComponent);

          _this = _callSuper(this, PsComplexTermsAndConditionsOnlineRegistrationComponent, [commonProv, loggerP]);
          _this.mainOptions = {};
          return _this;
        }

        _inherits(PsComplexTermsAndConditionsOnlineRegistrationComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexTermsAndConditionsOnlineRegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexTermsAndConditionsOnlineRegistrationComponent, "init", this, 3)([]);

            if (this.options) {
              this.commonProv.copyObject(this.mainOptions, this.options, false, true);
              this.commonProv.setValInsideNestedObj('htmlViewerOptions.fileName', 'TermsAndConditions.html', this.mainOptions);
              this.commonProv.setValInsideNestedObj('checkBoxOptions.labelKey', 'I_agree_key', this.mainOptions);
            }
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexTermsAndConditionsOnlineRegistrationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsComplexTermsAndConditionsOnlineRegistrationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexTermsAndConditionsOnlineRegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-terms-and-conditions-online-registration',
        template: _raw_loader_ps_complex_terms_and_conditions_online_registration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_terms_and_conditions_online_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsComplexTermsAndConditionsOnlineRegistrationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forgot-credentials-forgot-credentials-module-es5.js.map