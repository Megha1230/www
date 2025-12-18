(function () {
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

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90], {
    /***/
    "JgMb":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/letter-of-guarantee/letter-of-guarantee.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function JgMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXR0ZXItb2YtZ3VhcmFudGVlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Nshj":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letter-of-guarantee/letter-of-guarantee.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nshj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n        <ps-container-panel [options]=\"panelOptions1Step1\" id=\"lg_details_panel\">\n\n            <ps-input-display-only id=\"documentInNameRO\" [options]=\"documentInNameReadOnlyOptions\">\n            </ps-input-display-only>\n\n            <ps-input-display-only-cif-address-home id=\"applicantAddressDetails\"\n                [options]=\"applicantHomeAddressReadOnlyOptions\">\n            </ps-input-display-only-cif-address-home>\n\n            <ps-date-day-month-year-future [options]=\"effictiveDateOptions\"\n                (onPsChange)=\"onEffectiveDateChange($event)\">\n            </ps-date-day-month-year-future>\n\n            <ps-date-day-month-year-future [options]=\"expiryDateOptions\" (onPsChange)=\"onExpiryDateChange($event)\">\n            </ps-date-day-month-year-future>\n\n            <ps-date-day-month-year-future [options]=\"claimEndDateOptions\" (onPsChange)=\"onclaimEndDateChange($event)\">\n            </ps-date-day-month-year-future>\n\n\n            <ps-input-numeric [options]=\"periodDays\" (onPsChange)=\"onPeriodDaysChange($event)\"></ps-input-numeric>\n\n\n            <ps-dropdown-tfs-document-type [options]=\"tfsOptions\"></ps-dropdown-tfs-document-type>\n\n\n            <ps-complex-amount [options]=\"complexAmountOptions\">\n            </ps-complex-amount>\n\n\n            <ps-lov-charges-borne-by [options]=\"chargesBorneByOptions\" (onPsChange)=\"onchargesBorneByChange($event)\">\n            </ps-lov-charges-borne-by>\n\n\n            <ps-input-varchar *ngIf=\"isBeneficiaryChargesAccount\" id=\"'accountName' + id\"\n                [options]=\"accountNameOptions\"></ps-input-varchar>\n\n            <ps-input-varchar hidden [options]=\"branchOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"currencyOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"glAccountOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"cifNoOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"serialNumberOptions\"></ps-input-varchar>\n\n\n            <ps-lov-form-of-undertaking id=\"form_of_undertaking\" [options]=\"formOfUndertakingOptions\">\n            </ps-lov-form-of-undertaking>\n\n            <ps-lov-settlement-method [options]=\"settlementMethodOptions\"\n                (onPsChange)=\"onSettlementMethodChange($event)\">\n            </ps-lov-settlement-method>\n            \n            <ps-lookup-own-accounts *ngIf=\"isApplicantChargesAccount || isApplicantFundingMethod\" id=\"'chargesAccount'+ id\"\n                [options]=\"chargesAccountListOptions\">\n            </ps-lookup-own-accounts>\n\n            <ps-lookup-own-accounts class=\"accounts\" id=\"'settelmentMethod'+ id\" #fromAccountRef\n                [options]=\"settlementAccountListOptions\">\n            </ps-lookup-own-accounts>\n\n            <ps-lookup-facility-details [options]=\"facilityDetailsOptions\" #facilityRef>\n            </ps-lookup-facility-details>\n\n\n            <ps-lov-type-of-undertaking id=\"type_of_undertaking\" [options]=\"typeOfUndertakingOptions\">\n            </ps-lov-type-of-undertaking>\n\n\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions2Step1\" id=\"validity_panel\">\n            <ps-lov-expiry-type id=\"expiry_type\" [options]=\"expiryTypeOptions\"\n                (onPsChange)=\"onexpirtTypeChange($event)\"></ps-lov-expiry-type>\n            <ps-lov-automatic-extention-period id=\"automatic_extention_period\"\n                [options]=\"automaticExtensionPeriodOptions\" (onPsChange)=\"onautomaticExtentionPeriodChange($event)\">\n            </ps-lov-automatic-extention-period>\n            <ps-date-day-month-year-future [options]=\"daysAutomaticExtensionPeriodOptions\">\n            </ps-date-day-month-year-future>\n            <ps-date-day-month-year-future [options]=\"oneYAutomaticExtensionPeriodOptions\">\n            </ps-date-day-month-year-future>\n            <ps-date-day-month-year-future [options]=\"otherAutomaticExtensionPeriodOptions\">\n            </ps-date-day-month-year-future>\n\n            <ps-select-toggle [id]=\"'sameBankBenef'\" [options]=\"sameBankToggleOptions\"\n                (onPsChange)=\"onSameBankToggleChange($event)\">\n            </ps-select-toggle>\n            <ps-banks [options]=\"beneficiaryBankCifDdlbOptions\">\n            </ps-banks>\n            <ps-input-varchar [options]=\"beneficiaryBankerSwiftCodeOptions\"></ps-input-varchar>\n            <ps-input-account-number [options]=\"accountNumberOptions\">\n            </ps-input-account-number>\n            <ps-input-varchar [options]=\"beneficiaryNameValidityOptions\"></ps-input-varchar>\n            <ps-complex-address [options]=\"benefAddressOptions\"></ps-complex-address>\n        </ps-container-panel>\n\n    </ps-form-step>\n    <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n        <ps-container-panel [options]=\"panel1OptionsStep2\" id=\"lg_panel1\">\n            <ps-input-display-only id=\"'beneficiaryCIF' + id\" [options]=\"beneficiaryBankCifOptions\">\n            </ps-input-display-only>\n\n            <ps-input-varchar id=\"'beneficiaryName' + id\" [options]=\"beneficiaryNameOptions\"></ps-input-varchar>\n\n\n            <ps-dropdown-country [options]=\"beneficiaryCountriesOptions\"></ps-dropdown-country>\n\n\n            <ps-input-varchar id=\"'beneficiaryName' + id\" [options]=\"beneficiaryAddressOptions\"></ps-input-varchar>\n\n\n\n\n\n\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panel2OptionsStep2\" id=\"lg_benef_details_panel\">\n\n            <ps-input-varchar id=\"'purpose1' + id\" [options]=\"purpose1Options\"></ps-input-varchar>\n            <ps-input-varchar id=\"'purpose2' + id\" [options]=\"purpose2Options\"></ps-input-varchar>\n            <ps-input-varchar id=\"'purpose3' + id\" [options]=\"purpose3Options\"></ps-input-varchar>\n            <ps-lov-applicable-rules id=\"applicable_rules\" [options]=\"applicableRulesOptions\">\n            </ps-lov-applicable-rules>\n            <ps-input-varchar id=\"undertaking_termsandconditions\" [options]=\"undertakingTermsAndConditionsOptions\">\n            </ps-input-varchar>\n\n\n            <ps-lov-file-identification [options]=\"fileIdentificationOptions\"></ps-lov-file-identification>\n            <ps-lov-delivery-of-original-undertaking [options]=\"deliveryOfOrginalUndertakingOptions\"\n                (onPsChange)=\"ondeliveryOfOrginalUndertakingChange($event)\">\n            </ps-lov-delivery-of-original-undertaking>\n            <ps-input-varchar [options]=\"additionalInfromation\"></ps-input-varchar>\n            <ps-lov-delivery-to-collection-by [options]=\"deliveryToCollectionBy\"\n                (onPsChange)=\"deliveryToCollectionByChange($event)\"> </ps-lov-delivery-to-collection-by>\n            <ps-input-varchar [options]=\"deliveryToCollectionByName\"></ps-input-varchar>\n            <ps-input-varchar [options]=\"deliveryToCollectionByAddress\"></ps-input-varchar>\n            <ps-input-varchar [options]=\"expiryConditionEvent\"></ps-input-varchar>\n            <ps-lov-confirmation-instruction [options]=\"confirmationInstruction\"></ps-lov-confirmation-instruction>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions3Step2\" id=\"lg_attachment_panel\">\n\n            <ps-file-upload-bs [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n\n\n            <ps-input-free-text id=\"comment_input\" [options]=\"commentOptions\">\n            </ps-input-free-text>\n\n        </ps-container-panel>\n\n\n    </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "Un4n":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/letter-of-guarantee/letter-of-guarantee.page.ts ***!
      \***********************************************************************/

    /*! exports provided: LetterOfGuaranteePage */

    /***/
    function Un4n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LetterOfGuaranteePage", function () {
        return LetterOfGuaranteePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_letter_of_guarantee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./letter-of-guarantee.page.html */
      "Nshj");
      /* harmony import */


      var _letter_of_guarantee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./letter-of-guarantee.page.scss */
      "JgMb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_ps_option_facility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility/ps-option-facility.component */
      "PCz6");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /** @name letter_of-Guarantee
       *  @author Heba.Hassan
       *  @description Display the letter of Guarantee
       */


      var LetterOfGuaranteePage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function LetterOfGuaranteePage(common, logger, omniPull, navService, translateSrv) {
          var _this;

          _classCallCheck(this, LetterOfGuaranteePage);

          _this = _callSuper(this, LetterOfGuaranteePage);
          _this.common = common;
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.navService = navService;
          _this.translateSrv = translateSrv;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.defaultVO = {};
          _this.DAYS_AUTOMATIC_EXTENSTION_PERIOD = 'DaysAutomaticExtensionPeriod';
          _this.OTHER_AUTOMATIC_EXTENSTION_PERIOD = 'OtherAutomaticExtensionPeriod';
          _this.PURPOSE_OF_MESSAGE = 'PurposeOfMessage';
          _this.beneficiariesRequestParam = {};
          _this.isApplicantChargesAccount = false;
          _this.isBeneficiaryChargesAccount = false;
          _this.isApplicantFundingMethod = false;
          _this.chargesBorneByOptions = {
            group: _this.formGroup,
            fcName: 'chargesBorneBy'
          };
          _this.accountNameOptions = {
            labelKey: 'charges_account_key',
            placeHolder: 'charges_account_key',
            group: _this.formGroup,
            fcName: 'otherPartyChargesAccount'
          };
          _this.stepperOptions = {
            stepperName: 'letterOfGuarantee_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['letter_Of_Guarantee_key', 'benefciary_details_key'],
            group: _this.formGroup,
            requestObject: _this.defaultVO,
            submitOptions: {
              group: _this.formGroup,
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].serviceUrl.letterOfGuaranteeEndPoint
            }
          };
          _this.panel1OptionsStep2 = {
            isExpandable: true,
            labelKey: 'benefciary_details_key',
            iconName: 'contact',
            expanded: true
          };
          _this.panel2OptionsStep2 = {
            isExpandable: true,
            labelKey: 'more_details_key',
            iconName: 'contact',
            expanded: true
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'lg_details_key',
            iconName: 'letter',
            expanded: true
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'validity_details_key',
            iconName: 'letter',
            expanded: true
          };
          _this.fileUploadOptions = {
            group: _this.formGroup,
            multiple: true,
            fcName: 'selectedFileData'
          };
          _this.tfsOptions = {
            group: _this.formGroup,
            labelKey: 'lG_types_key',
            placeHolder: 'select_lg_type',
            fcName: 'docType',
            docType: "G"
          };
          _this.periodDays = {
            group: _this.formGroup,
            fcName: 'periodDays',
            placeHolder: 'claim_period_days_key',
            labelKey: 'claim_period_days_key'
          };
          _this.purpose1Options = {
            labelKey: 'purpose_key',
            placeHolder: 'purpose1_key',
            group: _this.formGroup,
            fcName: 'purposeTxtDesc'
          };
          _this.purpose2Options = {
            labelKey: 'second_purpose_key',
            placeHolder: 'purpose2_key',
            group: _this.formGroup,
            fcName: 'purposeTxtDesc2'
          };
          _this.purpose3Options = {
            labelKey: 'third_purpose_key',
            placeHolder: 'purpose3_key',
            group: _this.formGroup,
            fcName: 'purposeTxtDesc3'
          };
          _this.beneficiaryBankCifOptions = {
            labelKey: 'beneficiary_bank_cif_key',
            placeHolder: 'beneficiary_bank_cif_key',
            group: _this.formGroup,
            fcName: 'beneficiaryBankCif'
          };
          _this.beneficiaryNameOptions = {
            labelKey: 'ultimate_beneficiary_name_key',
            placeHolder: 'ultimate_beneficiary_name_key',
            group: _this.formGroup,
            fcName: 'beneficiaryName'
          };
          _this.beneficiaryAddressOptions = {
            labelKey: 'ultimate_beneficiary_address_key',
            placeHolder: 'ultimate_beneficiary_address_key',
            group: _this.formGroup,
            fcName: 'beneficiaryAddress'
          };
          _this.beneficiaryCountriesOptions = {
            labelKey: 'beneficiary_country_key',
            placeHolder: 'select_beneficiary_country_key',
            fcName: 'beneficiaryCountry',
            group: _this.formGroup
          };
          _this.commentOptions = {
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            fcName: 'comment',
            group: _this.formGroup
          };
          _this.effictiveDateOptions = {
            labelKey: 'lG_effective_date_key',
            placeHolder: 'enter_lG_effective_date_key',
            fcName: 'effectiveDate',
            group: _this.formGroup
          };
          _this.expiryDateOptions = {
            labelKey: 'lG_expiry_date_key',
            placeHolder: 'enter_Expiry_date_key',
            fcName: 'expiryDate',
            group: _this.formGroup
          };
          _this.claimEndDateOptions = {
            labelKey: 'claim_end_date_key',
            placeHolder: 'enter_claim_end_date_key',
            fcName: 'claimEndDate',
            group: _this.formGroup
          };
          _this.complexAmountOptions = {
            currency: '',
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'select_currency_key',
              fcName: 'currency',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'total_amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'transactionAmount',
              type: 'amount',
              group: _this.formGroup
            }
          };
          _this.chargesAccountListOptions = {
            labelKey: 'account_number_key',
            placeHolder: 'select_account_number_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.defaultVO,
            currency: ''
          };
          _this.settlementMethodOptions = {
            group: _this.formGroup,
            fcName: 'settlementMethod',
            labelKey: 'funding_method_key',
            placeHolder: 'select_funding_method_key'
          };
          _this.settlementAccountListOptions = {
            labelKey: 'account_number_key',
            placeHolder: 'select_account_number_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'settlementAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.defaultVO
          };
          _this.noLocalOptions = {
            labelKey: 'no_local_ben_available_key'
          };
          _this.panelOptions3Step2 = {
            isExpandable: true,
            labelKey: 'attachment_key',
            iconName: 'document',
            expanded: true
          };
          _this.documentInNameReadOnlyOptions = {
            fcName: 'documentInNameOfRO',
            labelKey: 'document_in_name_of_key',
            placeHolder: 'document_in_name_of_key',
            group: _this.formGroup
          };
          _this.applicantHomeAddressReadOnlyOptions = {
            fcName: 'applicantAddressDetails',
            labelKey: 'applicant_address_key',
            placeHolder: 'applicant_address_key',
            group: _this.formGroup,
            requestVO: _this.defaultVO
          };
          _this.facilityDetailsOptions = {
            labelKey: 'facility_key',
            placeHolder: 'select_from_facilities_key',
            fcName: 'facilityDetails',
            group: _this.formGroup,
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_ps_option_facility_component__WEBPACK_IMPORTED_MODULE_8__["PsOptionFacilityComponent"],
            requestObject: _this.defaultVO
          };
          _this.applicableRulesOptions = {
            group: _this.formGroup,
            fcName: 'applicableRules'
          };
          _this.undertakingTermsAndConditionsOptions = {
            labelKey: 'undertaking_terms_and_conditions_key',
            placeHolder: 'enter_undertaking_terms_and_conditions_key',
            group: _this.formGroup,
            fcName: 'undertakingTermsAndConditions'
          };
          _this.formOfUndertakingOptions = {
            group: _this.formGroup,
            fcName: 'formOfUndertaking'
          };
          _this.typeOfUndertakingOptions = {
            group: _this.formGroup,
            fcName: 'typeOfUndertaking'
          };
          _this.expiryTypeOptions = {
            group: _this.formGroup,
            fcName: 'expiryType'
          };
          _this.automaticExtensionPeriodOptions = {
            group: _this.formGroup,
            fcName: 'automaticExtensionPeriod'
          };
          _this.daysAutomaticExtensionPeriodOptions = {
            labelKey: 'days_automatic_extension_peroid_key',
            placeHolder: 'enter_days_automatic_extension_peroid_key',
            fcName: 'daysAutomaticExtensionPeriod',
            group: _this.formGroup
          };
          _this.oneYAutomaticExtensionPeriodOptions = {
            labelKey: 'oney_automatic_extension_peroid_key',
            placeHolder: 'enter_oney_automatic_extension_peroid_key',
            fcName: 'oneyAutomaticExtensionPeriod',
            group: _this.formGroup
          };
          _this.otherAutomaticExtensionPeriodOptions = {
            labelKey: 'other_automatic_extension_peroid_key',
            placeHolder: 'enter_other_automatic_extension_peroid_key',
            fcName: 'otherAutomaticExtensionPeriod',
            group: _this.formGroup
          };
          _this.sameBankToggleOptions = {
            labelKey: 'same_bank_beneficiary_key',
            group: _this.formGroup,
            fcName: 'sameBank',
            psClass: 'toggleColor'
          };
          _this.beneficiaryBankCifDdlbOptions = {
            categoryLabelKey: 'beneficiary_bank_cif_key',
            categoryPlaceholderKey: 'select_beneficiary_bank_cif_key',
            categoryFcName: 'beneficiaryBankCifCategory',
            subCategoryLabelKey: 'branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: _this.formGroup,
            requestObject: _this.defaultVO
          };
          _this.beneficiaryBankerSwiftCodeOptions = {
            labelKey: 'beneficiary_banker_swift_code',
            placeHolder: 'enter_beneficiary_banker_swift_code',
            group: _this.formGroup,
            fcName: 'beneficiaryBankerSwiftCode'
          };
          _this.accountNumberOptions = {
            fcName: 'beneficiaryBankAccountNumber',
            labelKey: 'beneficiary_bank_account_no_key',
            placeHolder: 'enter_beneficiary_bank_account_no_key',
            group: _this.formGroup
          };
          _this.beneficiaryNameValidityOptions = {
            labelKey: 'beneficiary_name_key',
            placeHolder: 'enter_beneficiary_name_key',
            group: _this.formGroup,
            fcName: 'beneficiaryName'
          };
          _this.benefAddressOptions = {
            buildingOptions: {
              labelKey: 'beneficiary_building_no_key',
              placeHolder: 'enter_beneficiary_building_no_key',
              fcName: 'benefOccupationBuilding',
              group: _this.formGroup
            },
            streetOptions: {
              labelKey: 'beneficiary_street_key',
              placeHolder: 'enter_beneficiary_street_key',
              fcName: 'benefStreet',
              group: _this.formGroup
            },
            countriesOptions: {
              labelKey: 'beneficiary_country_key',
              placeHolder: 'select_beneficiary_country_key',
              fcName: 'benefCountryCode',
              group: _this.formGroup
            },
            regionOptions: {
              labelKey: 'beneficiary_region_key',
              placeHolder: 'select_beneficiary_region_key',
              fcName: 'benefRegionCode',
              group: _this.formGroup
            },
            cityOptions: {
              labelKey: 'beneficiary_city_key',
              placeHolder: 'select_beneficiary_city_key',
              fcName: 'benefCityCode',
              group: _this.formGroup
            },
            poBoxInputOptions: {
              group: _this.formGroup,
              fcName: 'benefpoBox',
              labelKey: 'beneficiary_pobox_key',
              placeHolder: 'enter_beneficiary_pobox_key'
            }
          };
          _this.deliveryOfOrginalUndertakingOptions = {
            group: _this.formGroup,
            fcName: 'deliveryOfOrginalUndertakingOptions'
          };
          _this.additionalInfromation = {
            labelKey: 'additional_information_key',
            placeHolder: 'enter_additional_information_key',
            group: _this.formGroup,
            fcName: 'additionalInformation'
          };
          _this.deliveryToCollectionBy = {
            group: _this.formGroup,
            fcName: 'deliveryToCollectionBy'
          };
          _this.deliveryToCollectionByName = {
            labelKey: 'delivery_to_collection_by_name_key',
            placeHolder: 'enter_delivery_to_collection_by_name_key',
            group: _this.formGroup,
            fcName: 'deliveryToCollectionByName'
          };
          _this.deliveryToCollectionByAddress = {
            labelKey: 'delivery_to_collection_by_address_key',
            placeHolder: 'enter_delivery_to_collection_by_address_key',
            group: _this.formGroup,
            fcName: 'deliveryToCollectionByAddress'
          };
          _this.confirmationInstruction = {
            group: _this.formGroup,
            fcName: 'confirmationInstruction'
          };
          _this.expiryConditionEvent = {
            labelKey: 'expiry_condition_event_key',
            placeHolder: 'enter_expiry_condition_event_key',
            group: _this.formGroup,
            fcName: 'expiryConditionEvent'
          };
          _this.fileIdentificationOptions = {
            group: _this.formGroup,
            fcName: 'fileIdentification',
            lovAdminFilterParamName: 'AllowedFileIdentification'
          };
          _this.branchOptions = {
            group: _this.formGroup,
            fcName: 'branchAcc',
            disablePreview: true
          };
          _this.currencyOptions = {
            group: _this.formGroup,
            fcName: 'currencyAcc',
            disablePreview: true
          };
          _this.glAccountOptions = {
            group: _this.formGroup,
            fcName: 'accountGl',
            disablePreview: true
          };
          _this.cifNoOptions = {
            group: _this.formGroup,
            fcName: 'cifNo',
            disablePreview: true
          };
          _this.serialNumberOptions = {
            group: _this.formGroup,
            fcName: 'serialNumber',
            disablePreview: true
          };
          return _this;
        }

        _inherits(LetterOfGuaranteePage, _omni_base_omni_base_);

        return _createClass(LetterOfGuaranteePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(LetterOfGuaranteePage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.defaultVO = this.navService.getAllParams() ? this.navService.getAllParams() : {};
            this.beneficiariesRequestParam = {
              trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].LOCAL_BENEFICIARY,
              filterByOper: true
            };
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
            this.commonProv.setValInsideNestedObj(this.documentInNameReadOnlyOptions.fcName, this.cifInfo.customerInfoCO ? this.translateSrv.currentLang.toLocaleLowerCase() === 'ar' ? this.cifInfo.customerInfoCO.longNameArabic : this.cifInfo.customerInfoCO.longName : '', this.defaultVO);

            if (this.defaultVO.disableCustomComponents) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.facilityDetailsOptions.fcName], 1);
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(LetterOfGuaranteePage, "ionViewDidEnter", this, 3)([]);

            this.fetchParameter(); // always non-mandatory

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.effictiveDateOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.expiryDateOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.claimEndDateOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.periodDays.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesBorneByOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryCountriesOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryAddressOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purpose2Options.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purpose3Options.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.commentOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [this.branchOptions.fcName, this.currencyOptions.fcName, this.glAccountOptions.fcName, this.cifNoOptions.fcName, this.serialNumberOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.branchOptions.fcName, this.currencyOptions.fcName, this.glAccountOptions.fcName, this.cifNoOptions.fcName, this.serialNumberOptions.fcName], 0); // mandatory based on conditions of charges brone changed

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.applicableRulesOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.undertakingTermsAndConditionsOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.additionalInfromation.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryOfOrginalUndertakingOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByName.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByAddress.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.typeOfUndertakingOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.automaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryBankerSwiftCodeOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.countriesOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.regionOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.cityOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.streetOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.buildingOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.poBoxInputOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.sameBankToggleOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.fileIdentificationOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryOfOrginalUndertakingOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalInfromation.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryToCollectionBy.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryToCollectionByName.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryToCollectionByAddress.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.confirmationInstruction.fcName], 0); // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.formOfUndertakingOptions.fcName], 0);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.expiryTypeOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifDdlbOptions.subCategoryFcName, this.deliveryOfOrginalUndertakingOptions.fcName, this.deliveryToCollectionBy.fcName, this.settlementAccountListOptions.fcName, this.facilityDetailsOptions.fcName], 0);
          }
        }, {
          key: "onclaimEndDateChange",
          value: function onclaimEndDateChange(event) {
            if (event && event.newValue !== undefined && new Date(event.newValue).getTime() !== new Date(event.oldValue).getTime()) {
              this.changePeriodDays();
            }
          }
        }, {
          key: "onEffectiveDateChange",
          value: function onEffectiveDateChange(event) {
            if (event && event.newValue !== undefined && new Date(event.newValue).getTime() !== new Date(event.oldValue).getTime()) {
              this.effectiveDateOldVal = event.oldValue ? event.oldValue : event.newValue;
              this.changePeriodDays(); //this.enableDateChange = false;

              var oneYearFromNow = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.newValue, 'DD-MM-YYYY');
              oneYearFromNow.add(1, 'years').calendar();
              this.formGroup.controls[this.oneYAutomaticExtensionPeriodOptions.fcName].setValue(oneYearFromNow);
            }
          }
        }, {
          key: "onExpiryDateChange",
          value: function onExpiryDateChange(event) {
            if (event && event.newValue !== undefined) {
              if (this.daysAutomaticextPeriodadminCount) {
                var daysAutomaticExtDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.newValue, 'DD-MM-YYYY').add(this.daysAutomaticextPeriodadminCount, 'days');
                this.formGroup.controls[this.daysAutomaticExtensionPeriodOptions.fcName].setValue(daysAutomaticExtDate);
              }

              if (this.otherAutomaticExtentionPeriodAdminCount) {
                var otherAutomaticExtDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.newValue, 'DD-MM-YYYY').add(this.otherAutomaticExtentionPeriodAdminCount, 'days');
                this.formGroup.controls[this.otherAutomaticExtensionPeriodOptions.fcName].setValue(otherAutomaticExtDate);
              }
            }
          }
        }, {
          key: "onPeriodDaysChange",
          value: function onPeriodDaysChange(event) {
            var days = (event.oldValue || 0) - event.newValue;
            var claimDate = new Date(this.formGroup.controls[this.claimEndDateOptions.fcName].value);
            var newDate = new Date(claimDate.setDate(claimDate.getDate() - days));

            if (event.oldValue && days !== 0 && new Date(this.effectiveDateOldVal).getTime() === new Date(this.formGroup.controls[this.effictiveDateOptions.fcName].value).getTime()) {
              this.formGroup.controls[this.claimEndDateOptions.fcName].setValue(newDate);
            }
          }
        }, {
          key: "onchargesBorneByChange",
          value: function onchargesBorneByChange(event) {
            if (event != null && event !== undefined && event.description) {
              switch (event.itemValue) {
                case 'A':
                  //this.isApplicantChargesAccount = true;
                  this.isBeneficiaryChargesAccount = false;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 0); //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 1);

                  break;

                case 'H':
                  //both
                  this.accountNameOptions.labelKey = 'beneficiary_charges_account_key'; //this.isApplicantChargesAccount = true;

                  this.isBeneficiaryChargesAccount = true;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 1); //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 1);

                  break;

                case 'B':
                  //other party
                  this.accountNameOptions.labelKey = 'other_party_charges_account_key'; //this.isApplicantChargesAccount = false;

                  this.isBeneficiaryChargesAccount = true;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 1); //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0);

                  break;

                default:
                  this.accountNameOptions.labelKey = 'other_party_charges_account_key';
                  this.isApplicantChargesAccount = false;
                  this.isBeneficiaryChargesAccount = false;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName
                  /*, this.chargesAccountListOptions.fcName*/
                  ], 0);
                  break;
              }
            }
          }
        }, {
          key: "onSettlementMethodChange",
          value: function onSettlementMethodChange(event) {
            if (!(event === null || event === void 0 ? void 0 : event.selectedObj)) {
              return;
            }

            var showFacility = event.itemValue === 'I'; // Reset the relevant form control

            var controlToReset = showFacility ? this.settlementAccountListOptions.fcName : this.facilityDetailsOptions.fcName;
            var controlCustomization = this.commonProv.getElementValidations(controlToReset);

            if (!controlCustomization.DEFAULT_VALUE) {
              var controlRef = showFacility ? this.fromAccountRef : this.facilityRef;
              controlRef.reset();
            } // Toggle visibility for both controls


            this.isApplicantFundingMethod = !showFacility;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], showFacility ? 0 : 1); // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_VISIBLE, [this.settlementAccountListOptions.fcName], showFacility ? 0 : 1);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.facilityDetailsOptions.fcName], showFacility ? 1 : 0);
          }
        }, {
          key: "dateDiff",
          value: function dateDiff(claimDate, effectiveDate) {
            claimDate = new Date(claimDate);
            effectiveDate = new Date(effectiveDate);
            var diffTime = Math.abs(claimDate - effectiveDate);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var paramData, result, APPLICABLE_DEFAULT_VALUE_ISPR, defaultApplicableValue, paramDataLovExpiryType, lovExpiryTypeDefaultValue, EXPIRY_TYPE_DEFAULT_VALUE_ISPR, defaultExpiryTypeValue;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].BENEFICIARY_BANK_CIF, this.PURPOSE_OF_MESSAGE, this.OTHER_AUTOMATIC_EXTENSTION_PERIOD, this.DAYS_AUTOMATIC_EXTENSTION_PERIOD).then(function (result) {
                      if (result != -1) {
                        if (result.BeneficiaryBankCIF) {
                          _this2.commonProv.setValInsideNestedObj(_this2.beneficiaryBankCifOptions.fcName, result.BeneficiaryBankCIF, _this2.stepperOptions.requestObject);

                          _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [_this2.beneficiaryBankCifOptions.fcName], 1);
                        }

                        if (result.PurposeOfMessage) {
                          if (result.PurposeOfMessage === 'ACNF' || result.PurposeOfMessage === 'ADVI' || result.PurposeOfMessage === 'ISSU') {
                            _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [_this2.deliveryOfOrginalUndertakingOptions.fcName], 1);

                            _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [_this2.deliveryToCollectionBy.fcName], 1);
                          } else {
                            _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [_this2.deliveryOfOrginalUndertakingOptions.fcName], 0);

                            _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [_this2.deliveryToCollectionBy.fcName], 0);
                          }
                        }

                        if (result.DaysAutomaticExtensionPeriod) {
                          _this2.daysAutomaticextPeriodadminCount = result.DaysAutomaticExtensionPeriod;
                        }

                        if (result.OtherAutomaticExtensionPeriod) {
                          _this2.otherAutomaticExtentionPeriodAdminCount = result.OtherAutomaticExtensionPeriod;
                        }
                      }
                    })["catch"](function (error) {});

                  case 1:
                    paramData = {
                      lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].APPLICABLE_RULES_LOV_TYPE_ID
                    };
                    _context.n = 2;
                    return this.omniPull.returnLovTypesValues(paramData)["catch"](function (error) {
                      _this2.logger.error('Error: While fetching LOV types in ApplicableValues :', error);
                    });

                  case 2:
                    result = _context.v;

                    if (result && result.length > 0) {
                      APPLICABLE_DEFAULT_VALUE_ISPR = 'I'; // 'ISPR';

                      defaultApplicableValue = result.find(function (e) {
                        return e.itemValue === APPLICABLE_DEFAULT_VALUE_ISPR;
                      });

                      if (defaultApplicableValue) {
                        this.commonProv.setValInsideNestedObj(this.applicableRulesOptions.fcName, defaultApplicableValue.itemValue, this.defaultVO);
                      }
                    }

                    paramDataLovExpiryType = {
                      lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].EXPIRY_TYPE_LOV_TYPE_ID
                    };
                    _context.n = 3;
                    return this.omniPull.returnLovTypesValues(paramDataLovExpiryType)["catch"](function (error) {
                      _this2.logger.error('Error: While fetching LOV types in expiryType :', error);
                    });

                  case 3:
                    lovExpiryTypeDefaultValue = _context.v;

                    if (lovExpiryTypeDefaultValue && lovExpiryTypeDefaultValue.length > 0) {
                      EXPIRY_TYPE_DEFAULT_VALUE_ISPR = 'FIXD'; // 'ISPR';

                      defaultExpiryTypeValue = lovExpiryTypeDefaultValue.find(function (e) {
                        return e.itemValue === EXPIRY_TYPE_DEFAULT_VALUE_ISPR;
                      });

                      if (defaultExpiryTypeValue) {
                        this.commonProv.setValInsideNestedObj(this.expiryTypeOptions.fcName, defaultExpiryTypeValue.itemValue, this.defaultVO);
                      }
                    }

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "changePeriodDays",
          value: function changePeriodDays() {
            var claimDate = this.formGroup.controls[this.claimEndDateOptions.fcName].value;
            var effectDate = this.formGroup.controls[this.effictiveDateOptions.fcName].value;

            if (claimDate !== undefined && effectDate !== undefined) {
              var diff = this.dateDiff(claimDate, effectDate);

              if (diff != this.formGroup.controls[this.periodDays.fcName].value) {
                this.formGroup.controls[this.periodDays.fcName].setValue(diff);
              }
            }
          }
        }, {
          key: "onSameBankToggleChange",
          value: function onSameBankToggleChange(event) {
            if (event.newValue === true) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifDdlbOptions.categoryFcName], 0);
            } else {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifDdlbOptions.categoryFcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryBankCifDdlbOptions.categoryFcName], 1);
            }
          }
        }, {
          key: "onexpirtTypeChange",
          value: function onexpirtTypeChange(event) {
            if (event != null && event !== undefined && event.description) {
              if (event.itemValue == 'COND' || event.itemValue == 'FIXD') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.automaticExtensionPeriodOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.automaticExtensionPeriodOptions.fcName], 0);

                if (event.itemValue == 'COND') {
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.expiryConditionEvent.fcName], 1);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.expiryConditionEvent.fcName], 0);
                } else {
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.expiryConditionEvent.fcName], 0);
                }
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.automaticExtensionPeriodOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
              }
            }

            if (this.formGroup.controls[this.automaticExtensionPeriodOptions.fcName].value) {
              this.formGroup.controls[this.automaticExtensionPeriodOptions.fcName].setValue('');
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
            }
          }
        }, {
          key: "ondeliveryOfOrginalUndertakingChange",
          value: function ondeliveryOfOrginalUndertakingChange(event) {
            if (event != null && event !== undefined && event.description) {
              if (event.itemValue === 'COUR' || event.itemValue === 'OTHR') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.additionalInfromation.fcName], 1);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.additionalInfromation.fcName], 0);
              }
            }
          }
        }, {
          key: "deliveryToCollectionByChange",
          value: function deliveryToCollectionByChange(event) {
            if (event != null && event !== undefined && event.description) {
              if (event.itemValue === 'OTHR') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByName.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByAddress.fcName], 1);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByName.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByAddress.fcName], 0);
              }
            }
          }
        }, {
          key: "onautomaticExtentionPeriodChange",
          value: function onautomaticExtentionPeriodChange(event) {
            if (event != null && event !== undefined && event.description) {
              if (this.formGroup.controls[this.expiryTypeOptions.fcName].value === "COND" || this.formGroup.controls[this.expiryTypeOptions.fcName].value === "FIXD") {
                switch (event.itemValue) {
                  case 'DAYS':
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.daysAutomaticExtensionPeriodOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
                    break;

                  case 'ONEY':
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.oneYAutomaticExtensionPeriodOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
                    break;

                  case 'OTHR':
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.otherAutomaticExtensionPeriodOptions.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
                    break;

                  default:
                    break;
                }
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"]);

      LetterOfGuaranteePage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_16__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      LetterOfGuaranteePage.propDecorators = {
        fromAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fromAccountRef']
        }],
        facilityRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['facilityRef']
        }]
      };
      LetterOfGuaranteePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-letter-of-guarantee',
        template: _raw_loader_letter_of_guarantee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_letter_of_guarantee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_16__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], LetterOfGuaranteePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=90-es5.js.map