(function () {
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

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89], {
    /***/
    "60mN":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/letter-of-credit-request/letter-of-credit-request.page.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function mN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXR0ZXItb2YtY3JlZGl0LXJlcXVlc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "CFha":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letter-of-credit-request/letter-of-credit-request.page.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CFha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" id=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"lcPanelOptions\" id=\"lc_request_panel\">\n            <ps-input-display-only id=\"documentInNameRO\" [options]=\"documentInNameReadOnlyOptions\">\n            </ps-input-display-only>\n\n\n            <ps-input-display-only-cif-address-home id=\"applicantAddressDetails\"\n                [options]=\"applicantHomeAddressReadOnlyOptions\">\n            </ps-input-display-only-cif-address-home>\n            <ps-dropdown-tfs-document-type id=\"tfs_document_types\" [options]=\"tfsDocumentTypeOptions\"\n                (onPsChange)=\"onLCTypeChange($event)\"></ps-dropdown-tfs-document-type>\n            <ps-lov-form-of-documentary-credit [options]=\"formOfDocumentaryOptions\">\n            </ps-lov-form-of-documentary-credit>\n\n\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"validityDetailsPanelOptions\" id=\"validity_details_panel\">\n\n\n            <ps-date-day-month-year-past id=\"issueDate\" [options]=\"issueDateOptions\">\n            </ps-date-day-month-year-past>\n\n            <ps-date-day-month-year-future id=\"expiryDate\" [options]=\"lcExpireDateOptions\">\n            </ps-date-day-month-year-future>\n\n            <ps-dropdown-country id=\"placeOfExpiry\" [options]=\"placeOfExpiryOptions\"></ps-dropdown-country>\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"amountDetailsPanelOptions\" id=\"account_details_panel\">\n\n\n            <ps-complex-amount [options]=\"amountDetailsOptions\"></ps-complex-amount>\n            <ps-lov-charges-borne-by [options]=\"chargesBorneByOptions\" (onPsChange)=\"onChargesBorneByChange($event)\">\n            </ps-lov-charges-borne-by>\n\n\n            <ps-input-account-number *ngIf=\"isBeneficiaryChargesAccount\" id=\"'accountName' + id\"\n                [options]=\"accountNumberOptions\">\n            </ps-input-account-number>\n\n\n            <ps-lookup-own-accounts *ngIf=\"isApplicantChargesAccount\" id=\"'chargesAccount'+ id\" #fromAccountRef\n                [options]=\"chargesAccountListOptions\">\n            </ps-lookup-own-accounts>\n\n\n\n            <ps-lov-amount-tolerance [options]=\"amountToleranceOptions\" (onPsChange)=\"onAmountToleranceChange($event)\">\n            </ps-lov-amount-tolerance>\n\n            <ps-label class=\"toleranceLbl\" [options]=\"toleranceValueLbl\"></ps-label>\n\n            <div id=\"toleranceIntervals\" class=\"toleranceIntervals\">\n                <ps-input-numeric id=\"negativeToleranceVal\" [options]=\"negativeToleranceValOptions\">\n                </ps-input-numeric>\n                <span *ngIf=\"showToleranceValue\" class=\"percentage\">%</span>\n                <ps-input-numeric id=\"positiveToleranceVal\" [options]=\"positiveToleranceValOptions\">\n                </ps-input-numeric>\n                <span *ngIf=\"showToleranceValue\" class=\"percentage\">%</span>\n            </div>\n\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"creditDetailsPanelOptions\" id=\"credit_details_panel\">\n\n\n            <ps-complex-credit-availability [options]=\"creditAvailabilityOptions\"></ps-complex-credit-availability>\n            <ps-input-free-text id=\"creditAvailableWith\" [options]=\"creditAvailableWithOptions\">\n            </ps-input-free-text>\n\n\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"settlMethodDetailsPanelOptions\" id=\"settlement_method_details_panel\">\n\n\n            <ps-lov-settlement-method [options]=\"settlementMethodOptions\"\n                (onPsChange)=\"onSettlementMethodChange($event)\">\n            </ps-lov-settlement-method>\n\n\n\n            <ps-lookup-own-accounts class=\"accounts\" id=\"'settelmentMethod'+ id\" #fromAccountRef\n                [options]=\"settlementAccountListOptions\">\n            </ps-lookup-own-accounts>\n\n\n\n            <ps-lookup-facility-details *ngIf=\"showFacility\" [options]=\"facilityDetailsOptions\">\n            </ps-lookup-facility-details>\n\n\n        </ps-container-panel>\n    </ps-form-step>\n\n    <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n        <ps-container-panel [options]=\"benefPanelOptions\" id=\"beneficiaries_panel\">\n\n            <ps-select-toggle [id]=\"'sameBankBenef'\" [options]=\"sameBankToggleOptions\"\n                (onPsChange)=\"onSameBankToggleChange($event)\">\n            </ps-select-toggle>\n            <ps-banks [options]=\"beneficiaryBankCifOptions\">\n            </ps-banks>\n            <ps-input-varchar id=\"benefAccount\" [options]=\"benefAccountOptions\"></ps-input-varchar>\n            <ps-input-varchar id=\"benefName\" [options]=\"benefNameOptions\"></ps-input-varchar>\n            <ps-complex-address [options]=\"benefAddressOptions\"></ps-complex-address>\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"participantAdditionalPanelOptions\" id=\"participant_panel\">\n\n\n            <ps-input-varchar id=\"benefBanker\" [options]=\"benefBankerOptions\"></ps-input-varchar>\n            <ps-input-free-text id=\"benefSwift\" [options]=\"benefSwiftOptions\"></ps-input-free-text>\n            <ps-lov-confirmation-instruction [options]=\"confirmationInstructionOptions\">\n            </ps-lov-confirmation-instruction>\n\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"localInsuranceDetailsPanelOptions\" id=\"local_insurance_details_panel\">\n\n\n            <ps-dropdown-insurance-company [options]=\"insuranceCompanyOptions\"></ps-dropdown-insurance-company>\n            <ps-date-day-month-year-future id=\"insurencePolicyDate\" [options]=\"localInsuranceDateOptions\">\n            </ps-date-day-month-year-future>\n\n\n\n            <ps-input-numeric id=\"localInsuranceNumber\" [options]=\"localInsuranceNumberOptions\">\n            </ps-input-numeric>\n\n        </ps-container-panel>\n    </ps-form-step>\n\n    <ps-form-step *psStep=\"'step3'\" step3 [id]=\"stepperOptions.namesofSteps[2]\">\n        <ps-container-panel [options]=\"shipmentPanelOptions\" id=\"shipment_panel\">\n\n            <ps-lov-partial-shipment id=\"partialShipment\" [options]=\"partialShipmentOptions\">\n            </ps-lov-partial-shipment>\n\n            <ps-lov-transshipment id=\"transShipment\" [options]=\"transShipmentOptions\">\n            </ps-lov-transshipment>\n\n\n            <ps-input-varchar id=\"portLoading\" [options]=\"portLoadingOptions\"></ps-input-varchar>\n            <ps-date-day-month-year-future id=\"lastDateOfShipment\" [options]=\"lastDateOfShipmentOptions\">\n            </ps-date-day-month-year-future>\n\n\n\n            <ps-input-varchar id=\"portDischarge\" [options]=\"portDischargeOptions\"></ps-input-varchar>\n            <ps-lov-incoterms id=\"incotermsLov\" [options]=\"incotermsOptions\" (onPsChange)=\"onIncotermChanged($event)\">\n            </ps-lov-incoterms>\n\n\n            <ps-input-varchar *ngIf=\"showShipmentTerms\" id=\"shipmentTerms\" [options]=\"shipmentTermsOptions\">\n            </ps-input-varchar>\n\n\n\n            <ps-dropdown-country id=\"placeFinalDest\" [options]=\"placeFinalDestOptions\">\n            </ps-dropdown-country>\n\n\n\n            <ps-input-varchar id=\"portShipment\" [options]=\"portShipmentOptions\"></ps-input-varchar>\n            <ps-input-varchar id=\"descriptionGoods1\" [options]=\"descriptionGoodsOptions\"></ps-input-varchar>\n            <ps-input-varchar id=\"descriptionGoods2\" [options]=\"descriptionGoods2Options\"></ps-input-varchar>\n            <ps-label [options]=\"meansOfTransLabelOptions\"></ps-label>\n            <ps-select-checkbox *ngFor=\"let att of meansOfTransArray; let idx=\n                index\" [id]=\"att.fcName\" [options]=\"att\" (onPsChange)=\"onMeansOfTransChanged($event)\">\n            </ps-select-checkbox>\n\n            <ps-keyin-textarea [options]=\"additionalDescriptionOfGoods\">\n            </ps-keyin-textarea>\n            <ps-keyin-textarea [options]=\"additionalDocumentDetails\">\n            </ps-keyin-textarea>\n            <ps-keyin-textarea [options]=\"additionalConditionsShipment\">\n            </ps-keyin-textarea>\n\n        </ps-container-panel>\n        <ps-container-panel [options]=\"documentDetailsPanelOptions\" id=\"document_details_panel\">\n\n\n            <ps-complex-bill-item *ngFor=\"let att of documentDetailsListOptions;\n                let idx= index\" [options]=\"att\" (CheckChange)=\"onDocumentChecked($event,att)\"></ps-complex-bill-item>\n            <ps-select-dropdown id=\"setOfDcument\" [options]=\"SetOfDocumentsSelectOptions\"></ps-select-dropdown>\n            <ps-input-varchar [options]=\"additionalConditions\"></ps-input-varchar>\n\n\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"attachmentPanelOptions\" id=\"attachment_panel\">\n\n\n            <ps-file-upload-bs id=\"ps-complex-file-upload\" [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n            <ps-input-varchar [options]=\"commentOptions\"></ps-input-varchar>\n        </ps-container-panel>\n    </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    },

    /***/
    "rebY":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/letter-of-credit-request/letter-of-credit-request.page.ts ***!
      \*********************************************************************************/

    /*! exports provided: LetterOfCreditRequestPage */

    /***/
    function rebY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LetterOfCreditRequestPage", function () {
        return LetterOfCreditRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_letter_of_credit_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./letter-of-credit-request.page.html */
      "CFha");
      /* harmony import */


      var _letter_of_credit_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./letter-of-credit-request.page.scss */
      "60mN");
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


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_ps_option_facility_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility/ps-option-facility.component */
      "PCz6");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
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

      var LetterOfCreditRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function LetterOfCreditRequestPage(omniPull, commonProv, logger, navService, translateSrv) {
          var _this;

          _classCallCheck(this, LetterOfCreditRequestPage);

          _this = _callSuper(this, LetterOfCreditRequestPage);
          _this.omniPull = omniPull;
          _this.commonProv = commonProv;
          _this.logger = logger;
          _this.navService = navService;
          _this.translateSrv = translateSrv;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.LcRequestVO = {};
          _this.DIRECT_FACILITY_WITHOUT_OUTWARD_LC = 'DirectFacilityWithOutwardLC';
          _this.isApplicantChargesAccount = false;
          _this.isBeneficiaryChargesAccount = false;
          _this.checkedMeans = 0;
          _this.sysParamScreenDispList = new Map(); //object used for storing customization values from OADM

          _this.stepperOptions = {
            stepperName: 'lc_request_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 3,
            namesofSteps: ['letter_of_credit_step1', 'letter_of_credit_step2', 'letter_of_credit_step3'],
            group: _this.formGroup,
            submitOptions: {
              group: _this.formGroup,
              submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__["PsCommonSettings"].serviceUrl.commonSubmitAction
            },
            requestObject: _this.LcRequestVO
          };
          _this.lcPanelOptions = {
            isExpandable: true,
            labelKey: 'lc_details_key',
            iconName: '',
            expanded: true,
            disablePreview: true
          };
          _this.validityDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'validity_details_key',
            iconName: '',
            expanded: false
          };
          _this.amountDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'amount_details_key',
            iconName: '',
            expanded: false
          };
          _this.creditDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'credit_details_key',
            iconName: '',
            expanded: false
          };
          _this.settlMethodDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'settlement_method_details_key',
            iconName: '',
            expanded: false
          };
          _this.benefPanelOptions = {
            isExpandable: true,
            labelKey: 'beneficiary_details_key',
            iconName: '',
            expanded: true
          };
          _this.participantAdditionalPanelOptions = {
            isExpandable: true,
            labelKey: 'participant_additional_details_key',
            iconName: '',
            expanded: false
          };
          _this.localInsuranceDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'local_insurance_details_key',
            iconName: '',
            expanded: false
          };
          _this.shipmentPanelOptions = {
            isExpandable: true,
            labelKey: 'shipment_details_key',
            iconName: '',
            expanded: false
          };
          _this.documentDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'document_details_key',
            iconName: '',
            expanded: false
          };
          _this.attachmentPanelOptions = {
            isExpandable: true,
            labelKey: 'attachment_key',
            iconName: '',
            expanded: false
          };
          _this.formOfDocumentaryOptions = {
            fcName: 'formOfdocumentCredit',
            group: _this.formGroup
          };
          _this.tfsDocumentTypeOptions = {
            labelKey: 'lc_type_key',
            placeHolder: 'select_lc_type_key',
            fcName: 'docType',
            group: _this.formGroup,
            docType: "O"
          };
          _this.documentInNameOptions = {
            fcName: 'documentInNameOf',
            placeHolder: 'enter_required_name_key',
            group: _this.formGroup,
            labelKey: 'document_in_name_of_key'
          };
          _this.documentInNameReadOnlyOptions = {
            fcName: 'documentInNameOfRO',
            labelKey: 'document_in_name_of_key',
            placeHolder: 'document_in_name_of_key',
            group: _this.formGroup
          };
          _this.accountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'beneficiary_account_no_key',
            placeHolder: 'enter_account_no_iban_key',
            group: _this.formGroup
          };
          _this.applicantHomeAddressReadOnlyOptions = {
            fcName: 'applicantAddressDetails',
            labelKey: 'applicant_address_key',
            placeHolder: 'applicant_address_key',
            group: _this.formGroup,
            requestVO: _this.LcRequestVO
          };
          _this.facilityDetailsOptions = {
            labelKey: 'facility_key',
            placeHolder: 'select_from_facilities_key',
            fcName: 'facilityDetails',
            group: _this.formGroup,
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_ps_option_facility_component__WEBPACK_IMPORTED_MODULE_7__["PsOptionFacilityComponent"],
            requestObject: _this.LcRequestVO
          }; // validityDetails

          _this.issueDateOptions = {
            labelKey: 'issue_date_key',
            placeHolder: 'issue_date_key',
            fcName: 'issueDate',
            group: _this.formGroup
          };
          _this.lcExpireDateOptions = {
            labelKey: 'lc_expiry_date_key',
            placeHolder: 'lc_expiry_date_key',
            fcName: 'expiryDate',
            group: _this.formGroup
          };
          _this.placeOfExpiryOptions = {
            labelKey: 'place_of_expiry_key',
            placeHolder: 'select_place_of_expiry_key',
            fcName: 'placeOfExpiry',
            group: _this.formGroup
          }; // amountDetails

          _this.amountDetailsOptions = {
            currency: '',
            currenciesOptions: {
              placeHolder: 'currency_key',
              labelKey: 'currency_key',
              fcName: 'currency',
              group: _this.formGroup
            },
            amountOptions: {
              labelKey: 'amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'transactionAmount',
              group: _this.formGroup,
              decimalPoints: 2
            }
          };
          _this.chargesBorneByOptions = {
            group: _this.formGroup,
            fcName: 'chargesBorneBy'
          };
          _this.chargesAccountListOptions = {
            labelKey: 'applicant_charges_account_key',
            placeHolder: 'select_from_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'chargesAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.LcRequestVO,
            currency: ''
          };
          _this.amountToleranceOptions = {
            group: _this.formGroup,
            fcName: 'amountTolerance'
          }; // creditDetails

          _this.creditAvailabilityOptions = {
            creditAvailabilityOptions: {
              group: _this.formGroup,
              fcName: 'creditAvailability'
            },
            payableAtOptions: {
              labelKey: 'payable_at_key',
              placeHolder: 'payable_at_key',
              fcName: 'payableAt',
              group: _this.formGroup,
              mask: {
                regex: '^[0-9]{3}$'
              }
            },
            daysFromOptions: {
              fcName: 'daysFrom',
              group: _this.formGroup,
              labelKey: 'days_from_key',
              placeHolder: 'enter_days_from_key',
              type: 'text',
              disableSpecChars: true
            }
          };
          _this.creditAvailableWithOptions = {
            labelKey: 'credit_available_with_key',
            placeHolder: 'credit_available_with_key',
            fcName: 'creditAvailableWith',
            group: _this.formGroup
          }; // settlMethodDetails

          _this.settlementMethodOptions = {
            group: _this.formGroup,
            fcName: 'settlementMethod'
          };
          _this.settlementAccountListOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'select_from_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'settlementAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.LcRequestVO
          }; // ------------------step2-------------------
          // beneficiaryDetails

          _this.sameBankToggleOptions = {
            labelKey: 'same_bank_beneficiary_key',
            group: _this.formGroup,
            fcName: 'sameBank',
            psClass: 'toggleColor'
          };
          _this.beneficiaryBankCifOptions = {
            categoryLabelKey: 'beneficiary_bank_cif_key',
            categoryPlaceholderKey: 'select_bank_cif_key',
            categoryFcName: 'beneficiaryBankCif',
            subCategoryLabelKey: 'branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: _this.formGroup,
            requestObject: _this.LcRequestVO
          };
          _this.benefAccountOptions = {
            fcName: 'beneficiaryAccountNo',
            placeHolder: 'enter_beneficiary_account_no_key',
            group: _this.formGroup,
            labelKey: 'beneficiary_account_no_key'
          };
          _this.benefNameOptions = {
            fcName: 'beneficiaryName',
            placeHolder: 'enter_beneficiary_name_key',
            group: _this.formGroup,
            labelKey: 'beneficiary_name_key'
          };
          _this.benefAddressOptions = {
            areaOptions: {
              labelKey: 'beneficiary_area_key',
              placeHolder: 'enter_beneficiary_area_key',
              fcName: 'benefarea',
              group: _this.formGroup
            },
            wayOptions: {
              labelKey: 'beneficiary_way_key',
              placeHolder: 'enter_beneficiary_way_key',
              fcName: 'benefway',
              group: _this.formGroup
            },
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
          }; // participantAdditionalDetails

          _this.benefBankerOptions = {
            fcName: 'beneficiaryBankerName',
            placeHolder: 'enter_beneficiary_banker_key',
            group: _this.formGroup,
            labelKey: 'beneficiary_banker_key'
          };
          _this.benefSwiftOptions = {
            fcName: 'beneficiarySwiftName',
            placeHolder: 'enter_beneficiary_banker_swift_key',
            group: _this.formGroup,
            labelKey: 'beneficiary_banker_swift_code_key',
            mask: {
              regex: '[a-zA-Z0-9]*'
            }
          };
          _this.confirmationInstructionOptions = {
            group: _this.formGroup,
            fcName: 'confirmationInstruction'
          }; // localInsuranceDetails

          _this.insuranceCompanyOptions = {
            labelKey: 'insurance_company_key',
            placeHolder: 'select_insurance_company_key',
            fcName: 'insuranceCompany',
            group: _this.formGroup
          };
          _this.localInsuranceDateOptions = {
            labelKey: 'local_insurance_policy_date_key',
            placeHolder: 'local_insurance_policy_date_key',
            fcName: 'insurancePolicyDate',
            group: _this.formGroup
          };
          _this.localInsuranceNumberOptions = {
            fcName: 'localInsuranceNumber',
            group: _this.formGroup,
            labelKey: 'local_insurance_policy_number_key',
            placeHolder: 'local_insurance_policy_number_key'
          }; // shipmenDetails

          _this.partialShipmentOptions = {
            group: _this.formGroup,
            fcName: 'partialShipment'
          };
          _this.transShipmentOptions = {
            group: _this.formGroup,
            fcName: 'transShipment'
          };
          _this.portLoadingOptions = {
            fcName: 'portOfLoading',
            placeHolder: 'enter_port_of_loading_key',
            group: _this.formGroup,
            labelKey: 'port_of_loading_key'
          };
          _this.lastDateOfShipmentOptions = {
            labelKey: 'last_date_of_shipment_key',
            placeHolder: 'last_date_of_shipment_key',
            fcName: 'lastDateOfShipment',
            group: _this.formGroup
          };
          _this.portDischargeOptions = {
            fcName: 'portOfDischarge',
            placeHolder: 'enter_port_of_discharge_key',
            group: _this.formGroup,
            labelKey: 'port_of_discharge_key'
          };
          _this.shipmentTermsOptions = {
            fcName: 'shipmentTerms',
            placeHolder: 'enter_shipment_terms_key',
            group: _this.formGroup,
            labelKey: 'shipment_terms_key'
          };
          _this.incotermsOptions = {
            group: _this.formGroup,
            fcName: 'incoterms'
          };
          _this.portShipmentOptions = {
            fcName: 'portOfShipment',
            placeHolder: 'enter_port_of_shipment_key',
            group: _this.formGroup,
            labelKey: 'port_of_shipment_key'
          };
          _this.descriptionGoodsOptions = {
            fcName: 'descriptionOfGoods',
            placeHolder: 'enter_description_of_goods_key',
            group: _this.formGroup,
            labelKey: 'description_of_goods_key'
          };
          _this.descriptionGoods2Options = {
            fcName: 'descriptionOfGoods2',
            placeHolder: 'enter_description_of_goods_2_key',
            group: _this.formGroup,
            labelKey: 'description_of_goods2_key'
          };
          _this.placeFinalDestOptions = {
            labelKey: 'place_of_final_destination_delivery_key',
            placeHolder: 'enter_place_of_final_destination_delivery_key',
            fcName: 'placeOfDestination',
            group: _this.formGroup
          };
          _this.meansOfTransLabelOptions = {
            labelKey: 'means_of_transportation_key',
            placeHolder: 'means_of_transportation_key',
            fcName: 'meansOfTransLabel'
          };
          _this.meansOfTransArray = [{
            labelKey: 'vessel_key',
            group: _this.formGroup,
            fcName: 'meansOfTransVess'
          }, {
            labelKey: 'aero_plane_key',
            group: _this.formGroup,
            fcName: 'meansOfTransAP'
          }, {
            labelKey: 'truck_key',
            group: _this.formGroup,
            fcName: 'meansOfTransTruc'
          }, {
            labelKey: 'special_courier_key',
            group: _this.formGroup,
            fcName: 'meansOfTransSpecCour'
          }, {
            labelKey: 'railway_transport_key',
            group: _this.formGroup,
            fcName: 'meansOfTransRailway'
          }, {
            labelKey: 'CMR_key',
            group: _this.formGroup,
            fcName: 'meansOfTransCMR'
          }]; // documentDetails

          _this.documentDetailsListOptions = [{
            checkBoxOptions: {
              labelKey: 'commercial_invoice_key',
              group: _this.formGroup,
              fcName: 'commercialInvoice'
            },
            copyInputOptions: {
              group: _this.formGroup,
              fcName: 'commercialInvoiceCopy',
              labelKey: 'copy_key',
              placeHolder: '0'
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'commercialInvoiceOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'commercialInvoiceDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'airway_bill_key',
              group: _this.formGroup,
              fcName: 'airWayBill'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'airWayBillCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'airWayBillOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'airWayBillDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'full_set_marine_ocean_bill_of_lading_key',
              group: _this.formGroup,
              fcName: 'fullSet'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'fullSetCoby',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'fullSetOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'fullSetDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'delivery_order_key',
              group: _this.formGroup,
              fcName: 'deliveryOrder'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'deliveryOrderCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'deliveryOrderOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'deliveryOrderDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'special_courier_key',
              group: _this.formGroup,
              fcName: 'specialCourier'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'specialCourierCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'specialCourierOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'specialCourierDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'certificate_of_origin_key',
              group: _this.formGroup,
              fcName: 'certOfOrigin'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'certOfOriginCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'certOfOriginOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'certOfOriginDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'parcel_post_receipt_key',
              group: _this.formGroup,
              fcName: 'parcelPostReceipt'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'parcelPostReceiptCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'parcelPostReceiptOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'parcelPostReceiptDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'insurance_(%)_key',
              group: _this.formGroup,
              fcName: 'insurance'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'insuranceCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'insuranceOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'insuranceDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'separate_certificate_of_weight_key',
              group: _this.formGroup,
              fcName: 'sepCertOfWeight'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              fcName: 'sepCertOfWeightCopy',
              group: _this.formGroup,
              placeHolder: '0'
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'sepCertOfWeightOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'sepCertOfWeightDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'health_or_veterinary_certificate_key',
              group: _this.formGroup,
              fcName: 'healthOrVeterinaryCertificat'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'healthOrVeterinaryCertificatCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'healthOrVeterinaryCertificatOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'healthOrVeterinaryCertificatDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'inspection_certificate_key',
              group: _this.formGroup,
              fcName: 'inspectionCertificate'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'inspectionCertificateCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'inspectionCertificateOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'inspectionCertificateDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'certificate_of_surveillance_key',
              group: _this.formGroup,
              fcName: 'certificateOfSurveillance'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'certificateOfSurveillanceCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'certificateOfSurveillanceOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'certificateOfSurveillanceDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'weight_certificate_key',
              group: _this.formGroup,
              fcName: 'weightCertificate'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'airWayBillCTo',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'billOfLandingOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'weightCertificateDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'ISM_and_ISPS_key',
              group: _this.formGroup,
              fcName: 'ISMAndISPS'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'ISMAndISPSCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'ISMAndISPSOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'ISMAndISPSDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }, {
            checkBoxOptions: {
              labelKey: 'packing_list_key',
              group: _this.formGroup,
              fcName: 'packingList'
            },
            copyInputOptions: {
              labelKey: 'copy_key',
              placeHolder: '0',
              fcName: 'packingListCopy',
              group: _this.formGroup
            },
            originalInputOptions: {
              group: _this.formGroup,
              fcName: 'packingListOriginal',
              labelKey: 'original_key',
              placeHolder: '0'
            },
            detailsInputOptions: {
              labelKey: 'details_key',
              placeHolder: 'enter_details_key',
              rows: '3',
              cols: '10',
              fcName: 'packingListDetails',
              group: _this.formGroup,
              maxLength: 500
            },
            BillTypeArray: [],
            group: _this.formGroup
          }];
          _this.SetOfDocumentsSelectOptions = {
            labelKey: 'set_of_documents_key',
            placeHolder: 'select_document_set_key',
            listOfOptions: [{
              description: ' ',
              itemValue: ' '
            }, {
              description: 'In One Set',
              itemValue: 'inOneSet'
            }, {
              description: 'In Two Set',
              itemValue: 'inTwoSet'
            }],
            fcName: 'setOfDocument',
            group: _this.formGroup
          };
          _this.fileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: _this.formGroup
          };
          _this.commentOptions = {
            group: _this.formGroup,
            fcName: 'comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key'
          };
          _this.negativeToleranceValOptions = {
            fcName: 'minTolerance',
            group: _this.formGroup,
            labelKey: 'minus_sign_key',
            placeHolder: 'enter_negative_tolerance_value_key'
          };
          _this.positiveToleranceValOptions = {
            fcName: 'maxTolerance',
            group: _this.formGroup,
            labelKey: 'plus_sign_key',
            placeHolder: 'enter_positive_tolerance_value_key'
          };
          _this.toleranceValueLbl = {
            labelKey: '',
            fcName: 'toleranceValueLbl'
          };
          _this.additionalConditions = {
            group: _this.formGroup,
            fcName: 'additionalCondition',
            labelKey: 'additional_condition_key',
            placeHolder: 'enter_additional_condition_key'
          };
          _this.additionalDescriptionOfGoods = {
            labelKey: 'additional_description_of_goods_key',
            placeHolder: 'enter_additional_description_of_goods_key',
            rows: '3',
            cols: '10',
            fcName: 'additionalDescriptionsOfGoods',
            group: _this.formGroup,
            maxLength: 13000
          };
          _this.additionalDocumentDetails = {
            labelKey: 'additional_document_details_key',
            placeHolder: 'enter_additional_document_details_key',
            rows: '3',
            cols: '10',
            fcName: 'additionalDocumentDetails',
            group: _this.formGroup,
            maxLength: 13000
          };
          _this.additionalConditionsShipment = {
            labelKey: 'additional_conditions_key',
            placeHolder: 'enter_additional_conditions_key',
            rows: '3',
            cols: '10',
            fcName: 'additionalConditionShipment',
            group: _this.formGroup,
            maxLength: 13000
          };
          _this.showToleranceValue = false;
          _this.showShipmentTerms = false;
          _this.showFacility = false;
          return _this;
        }

        _inherits(LetterOfCreditRequestPage, _omni_base_omni_base_);

        return _createClass(LetterOfCreditRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            _superPropGet(LetterOfCreditRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.commonProv.copyObject(this.LcRequestVO, this.navService.getAllParams() ? this.navService.getAllParams() : {});
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
            this.commonProv.setValInsideNestedObj(this.documentInNameReadOnlyOptions.fcName, this.cifInfo.customerInfoCO ? this.translateSrv.currentLang.toLocaleLowerCase() === 'ar' ? this.cifInfo.customerInfoCO.longNameArabic : this.cifInfo.customerInfoCO.longName : '', this.LcRequestVO); // Added by: MFawzy, tp: #1428460 - calling validateFacility method only in case the checkondirectfacilitywithoutwardlc flag is checked on OADM

            this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].DIRECT_FACILITY_WITHOUT_WARD_LC).then(function (result) {
              if (result === null || result === void 0 ? void 0 : result.DirectFacilityWithOutwardLC) {
                _this2.validateFacility();
              }
            })["catch"](function (err) {
              return _this2.logger.log(err);
            });
            this.sysParamScreenDispList = this.commonProv.initialScreenDisplayParams.get(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_12__["PsCommonSettings"].oper_ID);
          }
        }, {
          key: "validateFacility",
          value: function validateFacility() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var facilityDetailsRequestParam, result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    facilityDetailsRequestParam = {
                      submitType: 1
                    };
                    _context.n = 1;
                    return this.omniPull.reutrnFacilityDetails(facilityDetailsRequestParam)["catch"](function (error) {
                      _this3.logger.error('Error: While fetching facilities Details :', error);
                    });

                  case 1:
                    result = _context.v;

                    if (result) {
                      if (result.directFacilitiesOutwardLCCount === 0) {
                        this.navService.navigateBackward();
                        this.omniPull.omniCommon.presentInfoAlert(null, {
                          message: this.omniPull.omniCommon.common.translate('no_valid_facility_with_lc_limit_key')
                        });
                      }
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(LetterOfCreditRequestPage, "ionViewDidEnter", this, 3)([]); // always non-mandatory
            // Added by: MFawzy: TP: #1486391 -- customer requirement


            var settlementMethodCust = this.commonProv.getElementValidations(this.settlementMethodOptions.fcName);

            if (settlementMethodCust.IS_VISIBLE === 0 && settlementMethodCust.DEFAULT_VALUE != undefined) {
              var defaultVal = JSON.parse(settlementMethodCust.DEFAULT_VALUE).value;
              this.onSettlementMethodChange({
                itemValue: defaultVal
              });
            }

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesBorneByOptions.fcName, this.amountToleranceOptions.fcName, this.creditAvailableWithOptions.fcName, this.formOfDocumentaryOptions.fcName, this.benefAddressOptions.fcName, this.benefAddressOptions.streetOptions.fcName, this.benefAddressOptions.streetOptions.fcName, this.benefAddressOptions.areaOptions.fcName, this.benefAddressOptions.wayOptions.fcName, this.benefAddressOptions.regionOptions.fcName, this.benefAddressOptions.cityOptions.fcName, this.benefAddressOptions.countriesOptions.fcName, this.benefAddressOptions.buildingOptions.fcName, this.benefAddressOptions.poBoxInputOptions.fcName, this.benefBankerOptions.fcName, this.benefSwiftOptions.fcName, this.confirmationInstructionOptions.fcName, this.insuranceCompanyOptions.fcName, this.localInsuranceDateOptions.fcName, this.localInsuranceNumberOptions.fcName, this.partialShipmentOptions.fcName, this.transShipmentOptions.fcName, this.shipmentTermsOptions.fcName, this.placeFinalDestOptions.fcName, this.descriptionGoods2Options.fcName, this.SetOfDocumentsSelectOptions.fcName, this.fileUploadOptions.fcName, this.commentOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifOptions.subCategoryFcName, this.creditAvailableWithOptions.fcName, this.positiveToleranceValOptions.fcName, this.negativeToleranceValOptions.fcName, this.toleranceValueLbl.fcName], 0); // mandatory based on conditions of charges borne changed

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0); // mandatory based on conditions of tolarence

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.sameBankToggleOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalConditions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalDescriptionOfGoods.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalDocumentDetails.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalConditionsShipment.fcName], 0);

            if (this.LcRequestVO.disableCustomComponents) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.facilityDetailsOptions.fcName], 1);
            }
          }
        }, {
          key: "onAmountToleranceChange",
          value: function onAmountToleranceChange(event) {
            if (event) {
              var amountToleranceVal = event.itemValue || event;

              switch (amountToleranceVal) {
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].TOLERANCE_TYPE_TOLERANCE:
                  this.showToleranceValue = true;
                  this.handelToleranceFields(1, 1); //AZDB-8664 hide the label in case amout tolerance type selected

                  this.toleranceValueLbl.labelKey = '';
                  break;

                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].TOLERANCE_TYPE_ABOUT:
                  this.handelToleranceFields(0, 1);
                  this.toleranceValueLbl.labelKey = this.translateSrv.instant('about_interval_key');
                  break;

                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].TOLERANCE_TYPE_NOTEXCEEDING:
                  this.handelToleranceFields(0, 1);
                  this.toleranceValueLbl.labelKey = this.translateSrv.instant('not_exceeding_interval_key');
                  break;

                default:
                  this.handelToleranceFields(0, 0);
                  this.toleranceValueLbl.labelKey = '';
                  break;
              }
            }
          }
        }, {
          key: "handelToleranceFields",
          value: function handelToleranceFields(inoutsVisibility, labelVisibility) {
            //AZDB-8668 set the value as null in case user change the amount type to another value except the tolerance valye and aslo make them required in case the value selected is the tolerance
            if (inoutsVisibility === 0) {
              this.formGroup.controls[this.positiveToleranceValOptions.fcName].setValue(undefined);
              this.formGroup.controls[this.negativeToleranceValOptions.fcName].setValue(undefined);
              this.commonProv.setValInsideNestedObj(this.positiveToleranceValOptions.fcName, undefined, this.LcRequestVO);
              this.commonProv.setValInsideNestedObj(this.negativeToleranceValOptions.fcName, undefined, this.LcRequestVO);
            }

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.positiveToleranceValOptions.fcName, this.negativeToleranceValOptions.fcName], inoutsVisibility);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.positiveToleranceValOptions.fcName, this.negativeToleranceValOptions.fcName], inoutsVisibility);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.toleranceValueLbl.fcName], labelVisibility);
            this.showToleranceValue = inoutsVisibility === 1 ? true : false;
          }
        }, {
          key: "onSettlementAccountChange",
          value: function onSettlementAccountChange(event) {
            if (event != null && event !== undefined && event.selectedObj) {}
          }
        }, {
          key: "onSettlementMethodChange",
          value: function onSettlementMethodChange(event) {
            var _a, _b;

            if (event != null && event !== undefined && event.selectedObj) {
              if (event.itemValue === 'I') {
                this.showFacility = true;
                (_a = this.formGroup.controls[this.settlementAccountListOptions.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.facilityDetailsOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.settlementAccountListOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.settlementAccountListOptions.fcName], 0);
              } else {
                this.showFacility = false;
                (_b = this.formGroup.controls[this.facilityDetailsOptions.fcName]) === null || _b === void 0 ? void 0 : _b.reset();
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.facilityDetailsOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.settlementAccountListOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.settlementAccountListOptions.fcName], 1);
              }
            }
          }
        }, {
          key: "onPartialShipmentChecked",
          value: function onPartialShipmentChecked(event) {
            if (event != null && event !== undefined) {
              if (event.newValue === true) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.transShipmentOptions.fcName], 1);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.transShipmentOptions.fcName], 0);
              }
            }
          }
        }, {
          key: "onTransShipmentChecked",
          value: function onTransShipmentChecked(event) {
            if (event != null && event !== undefined) {
              if (event.newValue === true) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.partialShipmentOptions.fcName], 1);
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.partialShipmentOptions.fcName], 0);
              }
            }
          }
        }, {
          key: "onLCTypeChange",
          value: function onLCTypeChange(event) {
            var _a;

            if (event != null && event !== undefined && event.selectedObj) {
              // handle documentary credit
              this.commonProv.setValInsideNestedObj(this.formOfDocumentaryOptions.fcName, event.selectedObj.formOfDocCredit, this.LcRequestVO);

              if (event.selectedObj.sightTime !== undefined && !((_a = this.LcRequestVO[this.creditAvailabilityOptions.creditAvailabilityOptions.fcName]) === null || _a === void 0 ? void 0 : _a.itemValue)) {
                this.commonProv.setValInsideNestedObj(this.creditAvailabilityOptions.creditAvailabilityOptions.fcName, event.selectedObj.sightTime, this.LcRequestVO);
              } //id: #1282331 -  Details :Updated by neethu 


              if (event.selectedObj.modifSightTimeLC !== undefined) {
                if (event.selectedObj.modifSightTimeLC === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].MODIF_SIGHT_TIME_LC_YES && !this.isFieldReadOnlyFromCustomization(this.creditAvailabilityOptions.creditAvailabilityOptions.fcName)) {
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.creditAvailabilityOptions.creditAvailabilityOptions.fcName], 0);
                } else {
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.creditAvailabilityOptions.creditAvailabilityOptions.fcName], 1);
                }
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.creditAvailabilityOptions.creditAvailabilityOptions.fcName], 1);
              }

              if (event.selectedObj.tfsDocTypeId === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].TFSDOCTYPE_ID && event.selectedObj.cashFinance === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].ALPHA_DATA_TYPE) {
                this.setsettlementMethod(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].TFSDOCTYPE_VAL);
              } else {
                this.setsettlementMethod(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].SETTLEMENT_METHOD_APPLICANT_ACCOUNT);
              }
            }
          } //ADDED BY MICHEL FOR AZDB-8212

        }, {
          key: "setsettlementMethod",
          value: function setsettlementMethod(value) {
            this.commonProv.setValInsideNestedObj(this.settlementMethodOptions.fcName, value, this.LcRequestVO);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.settlementMethodOptions.fcName], 1);
          } //edited by Marina for TP #1452414

        }, {
          key: "onMeansOfTransChanged",
          value: function onMeansOfTransChanged(event) {
            var _this4 = this;

            if (event != null && event !== undefined) {
              if (event.newValue === true) {
                this.checkedMeans++;
                this.meansOfTransArray.map(function (mean) {
                  return _this4.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [mean.fcName], 0);
                });
              } else {
                this.checkedMeans--;

                if (this.checkedMeans == 0) {
                  //if there is no remaining checked option make them all mandatory 
                  this.meansOfTransArray.map(function (mean) {
                    return _this4.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [mean.fcName], 1);
                  });
                }
              } //if the user unchecked all options reset them 


              var unCheckedboxes = this.meansOfTransArray.filter(function (m) {
                var _a;

                return ((_a = _this4.formGroup.controls[m.fcName]) === null || _a === void 0 ? void 0 : _a.value) == false;
              });

              if (unCheckedboxes.length == this.meansOfTransArray.length) {
                this.meansOfTransArray.map(function (m) {
                  var _a;

                  return (_a = _this4.formGroup.controls[m.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
                });
              }
            }
          }
        }, {
          key: "onChargesBorneByChange",
          value: function onChargesBorneByChange(event) {
            if (event != null && event !== undefined && event.description) {
              switch (event.itemValue) {
                case 'A':
                  this.isApplicantChargesAccount = true;
                  this.isBeneficiaryChargesAccount = false;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 0);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 1);
                  break;

                case 'B':
                  this.accountNumberOptions.labelKey = 'beneficiary_charges_account_key';
                  this.isApplicantChargesAccount = false;
                  this.isBeneficiaryChargesAccount = true;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 1);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0);
                  break;

                case 'H':
                  this.isApplicantChargesAccount = true;
                  this.isBeneficiaryChargesAccount = true;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 1);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 1);
                  break;

                default:
                  this.isApplicantChargesAccount = false;
                  this.isBeneficiaryChargesAccount = false;
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 0);
                  this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0);
                  break;
              }
            }
          }
        }, {
          key: "onDocumentChecked",
          value: function onDocumentChecked(event, field) {
            var _this5 = this;

            var _a, _b, _c;

            if (event != null && event !== undefined) {
              if (field && ((_b = this.formGroup.controls[(_a = field.checkBoxOptions) === null || _a === void 0 ? void 0 : _a.fcName]) === null || _b === void 0 ? void 0 : _b.touched)) {
                var _iterator = _createForOfIteratorHelper(this.documentDetailsListOptions),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var document = _step.value;

                    if (((_c = this.formGroup.controls[document.checkBoxOptions.fcName]) === null || _c === void 0 ? void 0 : _c.value) === true) {
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.checkBoxOptions.fcName], 1);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.copyInputOptions.fcName], 1);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.originalInputOptions.fcName], 1);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.detailsInputOptions.fcName], 1);
                    } else {
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.checkBoxOptions.fcName], 0);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.copyInputOptions.fcName], 0);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.originalInputOptions.fcName], 0);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [document.detailsInputOptions.fcName], 0);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                var selectItem = this.documentDetailsListOptions.filter(function (item) {
                  var _a;

                  return ((_a = _this5.formGroup.controls[item.checkBoxOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) === true;
                });

                if (selectItem.length === 0) {
                  this.documentDetailsListOptions.forEach(function (x) {
                    _this5.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [x.checkBoxOptions.fcName, x.copyInputOptions.fcName, x.originalInputOptions.fcName, x.detailsInputOptions.fcName], 1);
                  });
                }
              }
            }
          }
        }, {
          key: "onSameBankToggleChange",
          value: function onSameBankToggleChange(event) {
            if (event.newValue === true) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifOptions.categoryFcName], 0);
            } else {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifOptions.categoryFcName], 1);
            }
          }
        }, {
          key: "onIncotermChanged",
          value: function onIncotermChanged($event) {
            if ($event.description === 'OTHER') {
              this.showShipmentTerms = true;
            } else {
              this.showShipmentTerms = false;
            }
          }
        }, {
          key: "isFieldReadOnlyFromCustomization",
          value: function isFieldReadOnlyFromCustomization(fcName) {
            var _a, _b, _c;

            if (((_a = this.sysParamScreenDispList.get(fcName)) === null || _a === void 0 ? void 0 : _a.IS_READONLY) !== null && ((_b = this.sysParamScreenDispList.get(fcName)) === null || _b === void 0 ? void 0 : _b.IS_READONLY) !== undefined && ((_c = this.sysParamScreenDispList.get(fcName)) === null || _c === void 0 ? void 0 : _c.IS_READONLY) == src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ONE) {
              return true;
            }

            return false;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"]);

      LetterOfCreditRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      LetterOfCreditRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-letter-of-credit-request',
        template: _raw_loader_letter_of_credit_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_letter_of_credit_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])], LetterOfCreditRequestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=89-es5.js.map