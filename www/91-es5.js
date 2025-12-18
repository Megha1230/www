(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91], {
    /***/
    "40Vc":
    /*!*******************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Vc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmJvYXJkaW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Fxwi":
    /*!*****************************************************!*\
      !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
      \*****************************************************/

    /*! exports provided: OnBoardingPage */

    /***/
    function Fxwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardingPage", function () {
        return OnBoardingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./onboarding.page.html */
      "cwH1");
      /* harmony import */


      var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding.page.scss */
      "40Vc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _regulaforensics_ionic_native_document_reader_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @regulaforensics/ionic-native-document-reader/ngx */
      "KDpp");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_id_types_ps_complex_cif_id_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component */
      "7XXa");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */
      "nipE");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common-interface */
      "DUM0");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./../../commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template */
      "kRg/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_23__);

      var OnBoardingPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function OnBoardingPage(commonProv, loggerP, omniPull, toastController, eventEmitterService, events, ref, omniCommon) {
          var _this;

          _classCallCheck(this, OnBoardingPage);

          var _a, _b;

          _this = _callSuper(this, OnBoardingPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.toastController = toastController;
          _this.eventEmitterService = eventEmitterService;
          _this.events = events;
          _this.ref = ref;
          _this.omniCommon = omniCommon;
          _this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.draftsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
          _this.draftsObservable = _this.draftsSubject.asObservable();
          _this.isRequireTransactionPassword = true;
          _this.enableSecurityQuestion = true;
          _this.whiteSpaceValueForHtml = "&nbsp;";
          _this.whiteSpaceValueForPDF = "";
          _this.emptyImageForPDF = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsAAAAGMAQMAAADuk4YmAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADlJREFUeF7twDEBAAAAwiD7p7bGDlgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAGJrAABgPqdWQAAAABJRU5ErkJggg==';
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.enableCifBranch = false;
          _this.onBoardingVO = {};
          _this.isCorporate = false;
          _this.stepperOptions = {
            widgetStepper: ((_a = _this.commonProv.activePage.value.param) === null || _a === void 0 ? void 0 : _a.widgetStepper) ? true : false,
            stepperName: 'create_account_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 22,
            namesofSteps: ['pre_terms_and_condition_step', 'main_info_step', 'company_details_step', 'user_credential_step', 'identity_verification_step', 'personal_details_step', 'selfie_image_step', 'selfie_video_step', 'speciment_upload_step', 'select_branch_step', 'products_step', 'call_schedule_step', 'contract_signing_step', 'attachment_details', 'owner_kyc', 'liveness_detection', 'company_address_details', 'company_ekyc', 'regula_doc_reader_step', 'regula_selfie_video_step', 'kyc_contract_step', 'account_contract_step'],
            group: _this.formGroup,
            submitOptions: {
              group: _this.formGroup,
              submitServiceUrl: ((_b = _this.commonProv.activePage.value.param) === null || _b === void 0 ? void 0 : _b.CIFOnboarding) ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].serviceUrl.commonSubmitAction : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].serviceUrl.SubmitOutsideAction,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.updateScreenVO());
                  });
                },
                executionClass: _this,
                params: [_this]
              },
              postCallFunction: {
                func: function func(response) {
                  var _this3 = this;

                  return new Promise(function (resolve, reject) {
                    //Jira #5211 Force user to log out if successfully completed his  onboarding journey
                    if (_this3.executionClass.isPostLogin && response.actionType.toLowerCase() == "submit" && response.outputType.toLowerCase() == "s") {
                      resolve(_this3.executionClass.logUserOut(response));
                      return;
                    }

                    resolve(true);
                  });
                },
                executionClass: _this,
                params: [_this]
              }
            },
            requestObject: _this.onBoardingVO,
            showReport: false
          };
          _this.showCardToggle = false;
          _this.showChequeBookToggle = false;
          _this.panelUserCredentials = {
            isExpandable: true,
            labelKey: 'credentials_key',
            iconName: 'clipboard',
            expanded: true
          };
          _this.panelIdDetailsOptions = {
            isExpandable: true,
            labelKey: 'id_details_key',
            expanded: true
          };
          _this.panelPersonalDetailsOptions = {
            isExpandable: true,
            labelKey: 'personal_details_key',
            expanded: true
          };
          _this.panelAdditionalDetailsOptions = {
            isExpandable: true,
            labelKey: 'additional_details_key',
            expanded: true
          };
          _this.panelAddressDetailsOptions = {
            isExpandable: true,
            labelKey: 'address_details_key',
            expanded: true
          };
          _this.panelEmploymentDetailsOptions = {
            isExpandable: true,
            labelKey: 'employment_details_key',
            expanded: true
          };
          _this.panelEmployementDetailsOptions = {
            isExpandable: true,
            labelKey: 'employement_details_key',
            expanded: true
          };
          _this.panelAttachmentOptions = {
            isExpandable: true,
            labelKey: 'attachment_details_key',
            expanded: true
          };
          _this.panelProductsOptions = {
            isExpandable: true,
            labelKey: 'products_key',
            expanded: true
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'personal_details_key',
            iconName: 'user',
            expanded: true
          };
          _this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'identification_details_key',
            iconName: 'finger-print',
            expanded: false
          };
          _this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'address_details_key',
            iconName: 'compass',
            expanded: true
          };
          _this.panelOptions1Step4 = {
            isExpandable: true,
            labelKey: 'products_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelAccountOptions = {
            isExpandable: true,
            labelKey: 'account_request_key',
            expanded: false
          };
          _this.panelAttachementOptions = {
            isExpandable: true,
            labelKey: 'attachment_details_key',
            expanded: false
          };
          _this.panelCifInformationOptions = {
            isExpandable: true,
            labelKey: 'cif_information_key',
            expanded: false
          };
          _this.atmBranchesPanelOptions = {
            isExpandable: true,
            labelKey: 'atm_branches_key',
            expanded: false
          };
          _this.panelCifAddressOptions = {
            isExpandable: true,
            labelKey: 'address_details_key',
            expanded: false
          };
          _this.selectBranchPanelOptions = {
            isExpandable: true,
            labelKey: 'branch_details_key',
            expanded: true
          }; // selectFinBranchLocPanelOptions: IOptionsPsContainerPanel = {
          //   isExpandable: true,
          //   labelKey: 'financing_branch_locator_key',
          //   expanded: true
          // };

          _this.selectBranchLocPanelOptions = {
            isExpandable: true,
            labelKey: 'branch_locator_key',
            expanded: true
          }; ////////////////////////////////////////////////////////////////

          _this.specimenOptions = {
            group: _this.formGroup,
            fcName: 'onb_specimen',
            labelKey: 'specimen_key',
            dataObservable: _this.draftsObservable
          };
          _this.selfieOptions = {
            group: _this.formGroup,
            fcName: 'onb_selfie',
            labelKey: 'selfie_key',
            mediaButton: {
              group: _this.formGroup,
              labelKey: 'selfie_key'
            },
            numberOfImages: 1
          };
          _this.callSlotOptions = {
            group: _this.formGroup,
            fcName: 'onb_call_schedule',
            labelKey: 'call_schedule_key'
          };
          _this.nickNameOptions = {
            group: _this.formGroup,
            fcName: 'onb_nickName',
            labelKey: 'nickname_key',
            placeHolder: 'enter_nickname_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.phoneNumberOptions = {
            group: _this.formGroup,
            labelKey: 'mobile_number_key',
            placeHolder: 'mobile_key',
            fcName: 'onb_accountMobile',
            validate: true
          };
          _this.emailOptions = {
            group: _this.formGroup,
            fcName: 'onb_accountEmail',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key'
          };
          _this.userCredentialsOptions = {
            requestObject: _this.stepperOptions.requestObject,
            fcName: 'onb_complexUserCredentials',
            group: _this.formGroup,
            userNameOption: {
              fcName: 'onb_accountUsername',
              group: _this.formGroup,
              validateUserName: true //Ghada &Waleed 18052013 TP: 1578107

            },
            passwordConfirmOptions: {
              group: _this.formGroup,
              password: {
                labelKey: 'password_key',
                placeHolder: 'enter_password_key',
                fcName: 'onb_accountPass',
                group: _this.formGroup
              },
              confirmPassword: {
                labelKey: 'confirm_password_key',
                placeHolder: 'enter_confirm_password_key',
                fcName: 'onb_accountConfirmPass',
                group: _this.formGroup
              }
            }
          };
          _this.personalInfoFileUploadOptions = {
            multiple: true,
            group: _this.formGroup,
            uploadIconName: 'attach',
            fcName: 'personalInfoFileData'
          };
          _this.idDetailsFileUploadOptions = {
            multiple: true,
            group: _this.formGroup,
            uploadIconName: 'attach',
            fcName: 'idDetailsFileData'
          };
          _this.addressOptions2 = {
            areaOptions: {
              labelKey: 'area_key',
              placeHolder: 'enter_area_key',
              fcName: 'onb_accountArea',
              group: _this.formGroup
            },
            wayOptions: {
              labelKey: 'way_key',
              placeHolder: 'enter_way_key',
              fcName: 'onb_accountWay',
              group: _this.formGroup
            },
            buildingOptions: {
              labelKey: 'building_no_key',
              placeHolder: 'enter_building_no_key',
              fcName: 'onb_accountOccupationBuilding',
              group: _this.formGroup
            },
            streetOptions: {
              labelKey: 'street_key',
              placeHolder: 'enter_street_key',
              fcName: 'onb_accountStreet',
              group: _this.formGroup
            },
            countriesOptions: {
              labelKey: 'country_key',
              placeHolder: 'select_country_key',
              fcName: 'onb_accountCountryCode',
              group: _this.formGroup
            },
            regionOptions: {
              labelKey: 'region_key',
              placeHolder: 'select_region_key',
              fcName: 'onb_accountRegionCode',
              group: _this.formGroup
            },
            cityOptions: {
              labelKey: 'city_key',
              placeHolder: 'select_city_key',
              fcName: 'onb_accountCityCode',
              group: _this.formGroup
            },
            poBoxInputOptions: {
              group: _this.formGroup,
              fcName: 'onb_accountPoBox',
              labelKey: 'pobox_key',
              placeHolder: 'enter_pobox_key'
            },
            postalCodesOptions: {
              labelKey: 'postal_code',
              placeHolder: 'select_postal_code_key',
              fcName: 'onb_postalCode',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'clipboard'
              }
            }
          };
          _this.fileUploadLabelDescription = {
            labelKey: 'onboarding_label_upload_description_key'
          };
          _this.defaultCifIdTypesOptions = {
            showCifType: false,
            group: _this.formGroup,
            cifTypeOptions: {
              group: _this.formGroup,
              fcName: 'onb_cifType'
            },
            complexIdDetailsOptions: {
              dropdownIdTypesOptions: {
                group: _this.formGroup
              },
              idNumberOptions: {
                group: _this.formGroup
              },
              dateExpiryOptions: {
                group: _this.formGroup
              },
              countriesOptions: {
                group: _this.formGroup
              },
              issueDateOptions: {
                group: _this.formGroup
              },
              group: _this.formGroup
            },
            complexIdDetailsOptions1: {
              dropdownIdTypesOptions: {
                group: _this.formGroup
              },
              idNumberOptions: {
                group: _this.formGroup
              },
              dateExpiryOptions: {
                group: _this.formGroup
              },
              countriesOptions: {
                group: _this.formGroup
              },
              issueDateOptions: {
                group: _this.formGroup
              },
              group: _this.formGroup
            },
            requestObject: _this.onBoardingVO
          };
          _this.representativeCifIdTypesOptions = {
            showCifType: false,
            group: _this.formGroup,
            cifTypeOptions: {
              group: _this.formGroup,
              fcName: 'rep_cifType'
            },
            complexIdDetailsOptions: {
              dropdownIdTypesOptions: {
                group: _this.formGroup,
                fcName: "idType1"
              },
              idNumberOptions: {
                group: _this.formGroup,
                fcName: "idNumber1"
              },
              dateExpiryOptions: {
                group: _this.formGroup,
                fcName: "expiryDate1"
              },
              countriesOptions: {
                group: _this.formGroup,
                fcName: "rep_place"
              },
              issueDateOptions: {
                group: _this.formGroup,
                fcName: "rep_issueDate"
              }
            },
            complexIdDetailsOptions1: {
              dropdownIdTypesOptions: {
                group: _this.formGroup,
                fcName: "idType1"
              },
              idNumberOptions: {
                group: _this.formGroup,
                fcName: "idNumber1"
              },
              dateExpiryOptions: {
                group: _this.formGroup,
                fcName: "expiryDate1"
              },
              countriesOptions: {
                group: _this.formGroup,
                fcName: "rep_place"
              },
              issueDateOptions: {
                group: _this.formGroup,
                fcName: "rep_issueDate"
              }
            },
            requestObject: _this.onBoardingVO
          };
          _this.firstNameOptions = {
            group: _this.formGroup,
            fcName: 'onb_firstname',
            labelKey: 'english_first_name_key',
            placeHolder: 'enter_english_first_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.middleNameOptions = {
            group: _this.formGroup,
            fcName: 'onb_middleName',
            labelKey: 'english_middle_name_key',
            placeHolder: 'enter_english_middle_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.lastNameOptions = {
            group: _this.formGroup,
            fcName: 'onb_lastName',
            labelKey: 'english_last_name_key',
            placeHolder: 'enter_english_last_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.shortArabicNameOptions = {
            group: _this.formGroup,
            fcName: 'briefNameArabic',
            labelKey: 'arabic_brief_name_key',
            placeHolder: 'enter_arabic_brief_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.longArabicNameOptions = {
            group: _this.formGroup,
            fcName: 'longNameArabic',
            labelKey: 'arabic_long_name_key',
            placeHolder: 'enter_arabic_long_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.defaultPersonalDetailsOptions = {
            customerNameOptions: {
              group: _this.formGroup,
              fcName: 'onb_customername',
              labelKey: 'customer_name_key',
              placeHolder: 'enter_customer_name_key',
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            psDobOptions: {
              group: _this.formGroup,
              fcName: 'onb_birthDate',
              labelKey: 'date_of_birth_key',
              placeHolder: 'select_date_of_birth_key'
            },
            nationalityOptions: {
              labelKey: 'select_nationality_key',
              placeHolder: 'please_select_nationality_key',
              fcName: 'onb_nationality',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            maritalstatusOptions: {
              labelKey: 'marital_status_key',
              // placeHolder: 'select_maritial_status_key',
              fcName: 'onb_martialStatus',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'clipboard'
              }
            }
          };
          _this.postalCodeOptions = {
            labelKey: 'select_postal_code_key',
            placeHolder: 'please_select_postal_code_key',
            fcName: 'onb_postalCode',
            group: _this.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.genderOptions = {
            group: _this.formGroup,
            fcName: 'onb_gender'
          };
          _this.lstatusOptions = {
            labelKey: 'legal_status_key',
            placeHolder: 'legal_status_key',
            group: _this.formGroup,
            fcName: 'onb_lstatus',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.accountTypeOptions = {
            allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].AllowedGeneralAccountTypes,
            accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACC_TYPE_D,
            group: _this.formGroup,
            fcName: 'onb_accountTypes'
          };
          _this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'select_currency_key',
            group: _this.formGroup,
            fcName: 'onb_currency'
          };
          _this.cardsLookupOptiops = {
            fcName: 'onb_card',
            group: _this.formGroup
          };
          _this.cardcheckboxOptions = {
            group: _this.formGroup,
            fcName: 'onb_card_checkbox',
            labelKey: 'i_want_a_card_key',
            allowCust: false
          };
          _this.chequeBookcheckboxOptions = {
            group: _this.formGroup,
            fcName: 'onb_chequebook_checkbox',
            labelKey: 'i_want_a_cheque_book_key',
            allowCust: false
          };
          _this.chequebookTypeOptions = {
            group: _this.formGroup,
            fcName: 'onb_chequeBookTypes'
          };
          _this.debitCardTypeOptions = {
            labelKey: 'debit_card_type_key',
            placeHolder: 'debit_card_type_key',
            group: _this.formGroup,
            fcName: 'onb_debitcardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CARDTYPE_D
          };
          _this.creditCardTypeOptions = {
            labelKey: 'credit_card_type_key',
            placeHolder: 'credit_card_type_key',
            group: _this.formGroup,
            fcName: 'onb_creditCardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CARDTYPE_C
          };
          _this.personalInfoCommentOptions = {
            group: _this.formGroup,
            fcName: 'onb_personal_info_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.attachementDetCommentOptions = {
            group: _this.formGroup,
            fcName: 'onb_attachement_det_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.corpAttachementDetCommentOptions = {
            group: _this.formGroup,
            fcName: 'onb_corp_attachement_det_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.tinNumberOptions = {
            fcName: 'onb_tinNumber',
            group: _this.formGroup,
            labelKey: 'tin_number_key',
            placeHolder: 'enter_tin_number_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.countriesOptions = {
            labelKey: 'country_of_birth_key',
            placeHolder: 'select_country_key',
            fcName: 'onb_country',
            group: _this.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.branchOptions = {
            placeHolder: 'get cif branch from session',
            labelKey: 'branch_key',
            group: _this.formGroup,
            fcName: 'onb_branch_name'
          };
          _this.defaultEmployeeOptions = {
            employerNameOptions: {
              group: _this.formGroup,
              fcName: 'onb_employeename',
              labelKey: 'company_name_key',
              placeHolder: 'enter_company_name_key',
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            occupationOptions: {
              group: _this.formGroup,
              fcName: 'onb_occupation',
              labelKey: 'occupation_key',
              placeHolder: 'enter_occupation_key',
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            dateOfJoiningDivisionOptions: {
              group: _this.formGroup,
              fcName: 'onb_dateofjoining',
              labelKey: 'date_of_joining_key',
              placeHolder: 'enter_date_of_joining_key'
            },
            addressOptions: {
              areaOptions: {
                labelKey: 'area_key',
                placeHolder: 'enter_area_key',
                fcName: 'onb_employeearea',
                group: _this.formGroup
              },
              wayOptions: {
                labelKey: 'way_key',
                placeHolder: 'enter_way_key',
                fcName: 'onb_employeeway',
                group: _this.formGroup
              },
              buildingOptions: {
                labelKey: 'building_no_key',
                placeHolder: 'enter_building_no_key',
                fcName: 'onb_employeebuilding',
                group: _this.formGroup
              },
              // poBoxOptions: {
              //   regionOptions: {
              //     labelKey: 'region_key',
              //     placeHolder: 'region_key',
              //     fcName: 'region',
              //     selectedCountryCode: '',
              //     group: this.formGroup,
              //     iconOptions: {
              //       iconName: 'clipboard'
              //     }
              //   }, poBoxInputOptions: {
              //     labelKey: 'pobox_key',
              //     placeHolder: 'enter_pobox_key',
              //     fcName: 'poboxinput',
              //     group: this.formGroup,
              //   }
              // },
              postalCodesOptions: {
                labelKey: 'postal_code',
                placeHolder: 'select_postal_code_key',
                fcName: 'onb_employeePostalcode',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              streetOptions: {
                labelKey: 'street_key',
                placeHolder: 'enter_street_key',
                fcName: 'onb_employeestreet',
                group: _this.formGroup
              },
              countriesOptions: {
                labelKey: 'country_key',
                placeHolder: 'select_country_key',
                fcName: 'onb_employeecountry',
                group: _this.formGroup
              },
              regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'select_region_key',
                fcName: 'onb_employeeregion',
                group: _this.formGroup
              },
              cityOptions: {
                labelKey: 'city_key',
                placeHolder: 'select_city_key',
                fcName: 'onb_employeecity',
                group: _this.formGroup
              },
              poBoxInputOptions: {
                group: _this.formGroup,
                fcName: 'onb_employeepobox',
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
                iconOptions: {
                  iconName: 'clipboard'
                }
              }
            },
            officeTelPhoneNumberOptions: {
              fcName: 'onb_empOfficeTelPhoneNumber',
              group: _this.formGroup,
              labelKey: 'office_tel_key'
            },
            handPhoneNumberOptions: {
              fcName: 'onb_empHandPhoneNumber',
              group: _this.formGroup,
              labelKey: 'hand_phone_number_key'
            },
            faxOptions: {
              fcName: 'onb_empFaxNumber',
              group: _this.formGroup,
              labelKey: 'fax_key'
            }
          };
          _this.lostDocumentRequestVO = {};
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this.productClassOptions = {
            labelKey: 'product_class_key',
            placeHolder: 'product_class_key',
            fcName: 'productType',
            group: _this.formGroup
          };
          _this.productCategoryOptions = {
            group: _this.formGroup,
            placeHolder: 'select_product_category_key',
            labelKey: 'product_category_key',
            fcName: 'productCategory'
          };
          _this.assetDescriptionOptions = {
            group: _this.formGroup,
            placeHolder: 'select_asset_description_key',
            labelKey: 'item_assets_description_key',
            fcName: 'assetDescription'
          };
          _this.ownerCheckboxOptions = [{
            labelKey: 'owner_key',
            group: _this.formGroup,
            fcName: 'owner'
          }, {
            labelKey: 'applying_on_behalf_of_owner_key',
            group: _this.formGroup,
            fcName: 'behalfOfOwner'
          }]; //Company Details

          _this.companyMainDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'company_main_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.legalEntityNameOptions = {
            group: _this.formGroup,
            fcName: 'legalEntityName',
            labelKey: 'legal_entity_name_key',
            placeHolder: 'enter_legal_entity_name_key'
          };
          _this.taxNumberOptions = {
            fcName: 'taxNumber',
            group: _this.formGroup,
            labelKey: 'tax_identification_number_key',
            placeHolder: 'enter_tax_identification_number_key'
          };
          _this.estabCountryOptions = {
            labelKey: 'country_of_establishment_key',
            placeHolder: 'select_country_of_establishment_key',
            fcName: 'estabCountry',
            group: _this.formGroup
          };
          _this.estabDateOptions = {
            fcName: 'estabDate',
            group: _this.formGroup,
            labelKey: 'date_establishment_key',
            placeHolder: 'enter_date_establishment_key'
          };
          _this.registNumberOptions = {
            placeHolder: 'enter_registration_number_key',
            labelKey: 'registration_number_key',
            group: _this.formGroup,
            fcName: 'registNumber'
          };
          _this.currentEmpOptions = {
            placeHolder: 'current_employment_key',
            labelKey: 'current_employment_key',
            group: _this.formGroup,
            fcName: 'currentEmp'
          }; //Ownership Details

          _this.ownershipDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'ownership_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.entityTypeLovOptiops = {
            group: _this.formGroup,
            fcName: 'entityType'
          };
          _this.existingCustomerOptions = {
            labelKey: 'existing_customer_key',
            placeHolder: 'existing_customer_key',
            group: _this.formGroup,
            fcName: 'existingCustomer',
            psClass: 'toggleColor'
          };
          _this.cifNumberOptions = {
            placeHolder: 'enter_cif_number_key',
            labelKey: 'cif_number_key',
            group: _this.formGroup,
            fcName: 'cifNumber'
          };
          _this.designationeLovOptiops = {
            group: _this.formGroup,
            labelKey: 'designation_key',
            placeHolder: 'select_designation_key',
            fcName: 'designation',
            listOfOptions: [{
              itemValue: 'S',
              description: 'Shareholder',
              selectedObj: {
                itemValue: 'S',
                description: 'Shareholder'
              }
            }, {
              itemValue: 'D',
              description: 'Director',
              selectedObj: {
                itemValue: 'D',
                description: 'Director'
              }
            }]
          };
          _this.ownershipPercentageOptions = {
            fcName: 'ownershipPercentage',
            group: _this.formGroup,
            labelKey: 'ownership_percentage_key',
            placeHolder: 'enter_ownership_percentage_key'
          };
          _this.AuthSignerOptions = {
            labelKey: 'authorized_signer_key',
            placeHolder: 'authorized_signer_key',
            group: _this.formGroup,
            fcName: 'authSigner',
            psClass: 'toggleColor'
          };
          _this.authPowerofAttorneyOptions = {
            labelKey: 'authorized_power_of_attorney_key',
            placeHolder: 'authorized_power_of_attorney_key',
            group: _this.formGroup,
            fcName: 'authPowerofAttorney',
            psClass: 'toggleColor'
          };
          _this.panelPinOptions = {
            isExpandable: true,
            labelKey: 'pin_key',
            iconName: 'contact',
            expanded: true
          };
          _this.pinConfirmOptions = {
            group: _this.formGroup,
            password: {
              labelKey: 'pin_key',
              placeHolder: 'enter_pin_key',
              fcName: 'onb_pin',
              group: _this.formGroup
            },
            confirmPassword: {
              labelKey: 'confirm_pin_key',
              placeHolder: 'enter_confirm_pin_key',
              fcName: 'onb_confirm_pin',
              group: _this.formGroup
            },
            showPasswordHint: false,
            requestObject: _this.onBoardingVO
          };
          _this.panelSecurityQuestion = {
            isExpandable: true,
            labelKey: 'security_question_key',
            iconName: 'lock'
          };
          _this.securityQuestionOptions = {
            group: _this.formGroup,
            securityQuestionOptions: {
              fcName: 'onb_security_question',
              group: _this.formGroup
            },
            securityAnswerOptions: {
              labelKey: 'security_answer_key',
              placeHolder: 'enter_your_security_answer_key',
              fcName: 'onb_security_question_answer',
              group: _this.formGroup
            }
          };
          _this.showCifDetails = false;
          _this.showChequebooklookup = false;
          _this.showCardTypelookup = false;
          _this.showCreditCardTypes = false;
          _this.showDebitCardTypes = false;
          _this.complexEcoSectorOptions = {
            fcName: 'ecoSector',
            group: _this.formGroup
          };
          _this.finanacingFileUploadOptions = {
            multiple: true,
            fcName: 'financingFileData',
            group: _this.formGroup,
            uploadIconName: 'attach'
          };
          _this.financingFileUploadLabelDescription = {
            labelKey: 'financing_upload_description_key'
          };
          _this.financingToggleOptions = {
            fcName: 'onb_financing_toggle',
            group: _this.formGroup,
            labelKey: 'financing_toggle_key'
          };
          _this.financingSelectBranchOptions = {
            fcName: 'finanicingMapAtmBranchesDropdown',
            group: _this.formGroup,
            countryRegionCityOptions: {
              countriesOptions: {
                fcName: 'finnacingBranchCountry'
              },
              regionOptions: {
                fcName: 'finnacingBranchRegion'
              },
              cityOptions: {
                fcName: 'finnacingBranchCity'
              }
            },
            branchesOptions: {
              labelKey: 'financing_branch_key',
              fcName: 'finnacingBranch'
            }
          };
          _this.onbSelectBranchOptions = {
            fcName: 'onbMapAtmBranchesDropdown',
            group: _this.formGroup,
            countryRegionCityOptions: {
              countriesOptions: {
                fcName: 'onbBranchCountry'
              },
              regionOptions: {
                fcName: 'onbBranchRegion'
              },
              cityOptions: {
                fcName: 'onbBranchCity'
              }
            },
            branchesOptions: {
              labelKey: 'financing_branch_key',
              fcName: 'onbBranch'
            }
          };
          _this.facilityTypeOptions = {
            group: _this.formGroup,
            placeHolder: 'select_facility_types_key',
            labelKey: 'facility_types_key',
            fcName: 'facilityType'
          };
          _this.downPaymentOptions = {
            fcName: 'downPayment',
            group: _this.formGroup,
            labelKey: 'down_payment_key',
            placeHolder: 'enter_down_payment_key',
            decimalPoints: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].DEFAULT_DECIMAL_POINTS
          };
          _this.initialAmountOptions = {
            fcName: 'initialAmount',
            group: _this.formGroup,
            labelKey: 'initial_amount_key',
            placeHolder: 'enter_initial_amount_key',
            decimalPoints: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].DEFAULT_DECIMAL_POINTS
          };
          _this.complexAmountOptions = {
            showLimitLabel: false,
            currenciesOptions: {
              labelKey: 'financing_currency_key',
              placeHolder: 'select_financing_currency_key',
              group: _this.formGroup,
              fcName: 'financing_currency',
              currencyType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].FINANCING_CURRENCY_TYPE
            },
            amountOptions: {
              labelKey: 'financing_amount_key',
              placeHolder: 'enter_financing_amount_key',
              fcName: 'inputAmount',
              group: _this.formGroup,
              type: 'financing_amount'
            }
          };
          _this.monthlyInAmountOptions = {
            showLimitLabel: false,
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'monthlyIncomeCurrency'
            },
            amountOptions: {
              labelKey: 'monthly_income_amount_key',
              placeHolder: 'enter_monthly_income_amount_key',
              fcName: 'monthlyIncome',
              group: _this.formGroup,
              type: 'amount'
            }
          };
          _this.showFinancingSection = false; // financingMapAtmBranchesOptions: IOptionsPsMapAtmBranchesExposed;

          _this.onbCifBranchOptions = {
            fcName: 'financingCifBranchLable',
            labelKey: 'financing_branch_key',
            group: _this.formGroup
          };
          _this.tenorFinancingOptions = {
            fcName: 'financingTenor',
            labelKey: 'financing_tenor_key',
            placeHolder: 'tenor_placeholder_key',
            group: _this.formGroup
          };
          _this.profitRateOptions = {
            placeHolder: 'select_yield_profit_rate_key',
            labelKey: 'yield_profit_rate_key',
            group: _this.formGroup,
            fcName: 'profitRate'
          };
          _this.noOfPaymentsOptions = {
            fcName: 'noOfPayments',
            group: _this.formGroup,
            labelKey: 'no_of_payments_key',
            placeHolder: 'enter_no_of_payments_key'
          };
          _this.payEveryOptions = {
            labelKey: 'pay_every_key',
            placeHolder: 'select_to_pay_every_key',
            fcName: 'payEvery',
            group: _this.formGroup
          };
          _this.isPostLogin = false;
          _this.defaultFormat = src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].PREV_DATE_FORMAT;
          _this.companyAdditionalDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'company_additional_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.corpTypeOptions = {
            group: _this.formGroup,
            fcName: 'onb_corpType'
          };
          _this.rankingOptions = {
            labelKey: 'ranking_key',
            placeHolder: 'ranking_key',
            fcName: 'ranking',
            group: _this.formGroup
          };
          _this.corpEmailOptions = {
            group: _this.formGroup,
            fcName: 'companyEmail',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key'
          };
          _this.corpAddressOptions = {
            areaOptions: {
              labelKey: 'area_key',
              placeHolder: 'enter_area_key',
              fcName: 'corp_onb_accountArea',
              group: _this.formGroup
            },
            wayOptions: {
              labelKey: 'way_key',
              placeHolder: 'enter_way_key',
              fcName: 'corp_onb_accountWay',
              group: _this.formGroup
            },
            buildingOptions: {
              labelKey: 'building_no_key',
              placeHolder: 'enter_building_no_key',
              fcName: 'corp_onb_accountOccupationBuilding',
              group: _this.formGroup
            },
            streetOptions: {
              labelKey: 'street_key',
              placeHolder: 'enter_street_key',
              fcName: 'corp_onb_accountStreet',
              group: _this.formGroup
            },
            countriesOptions: {
              labelKey: 'country_key',
              placeHolder: 'select_country_key',
              fcName: 'corp_onb_accountCountryCode',
              group: _this.formGroup
            },
            regionOptions: {
              labelKey: 'region_key',
              placeHolder: 'select_region_key',
              fcName: 'corp_onb_accountRegionCode',
              group: _this.formGroup
            },
            cityOptions: {
              labelKey: 'city_key',
              placeHolder: 'select_city_key',
              fcName: 'corp_onb_accountCityCode',
              group: _this.formGroup
            },
            poBoxInputOptions: {
              group: _this.formGroup,
              fcName: 'corp_onb_accountPoBox',
              labelKey: 'pobox_key',
              placeHolder: 'enter_pobox_key'
            }
          };
          _this.isOwnerToggleOptions = {
            labelKey: 'is_owner_key',
            group: _this.formGroup,
            fcName: 'isOwnerToggle',
            psClass: 'toggleColor'
          };
          _this.corpFileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: _this.formGroup,
            uploadIconName: 'attach'
          };
          _this.addFileUploadLabelDescription = {
            labelKey: 'onboarding_label_upload_description_key'
          };
          _this.addFileUploadOptions = {
            multiple: true,
            group: _this.formGroup,
            uploadIconName: 'attach',
            fcName: 'additionalFileUpload'
          };
          _this.addCommentOptions = {
            group: _this.formGroup,
            fcName: 'onb_additional_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.termsAndConditionsOptions = {
            checkBoxOptions: {
              group: _this.formGroup,
              fcName: 'checkboxConfirm',
              labelKey: 'agree_terms_and_conditions_key',
              //applyValueValidation: true // Added by ghada, tp#1383050  a custom validator will be applied to validate if component's value if true to mark it as valid
              allowDefaultValue: false //Added by Marina jira-AZDB-1294; terms and conditions shouldn't have a false value it is either empty or true 

            },
            htmlViewerOptions: {}
          };
          _this.reportKYCShow = false;
          _this.reportAccountShow = false;
          _this.kycReportBase64 = 'onb_kyc_uploadedFiles';
          _this.accountReportBase64 = 'onb_accopen_uploadedFiles';
          _this.mandatoryFlagValuesDic = {};
          _this.reportKYCTemplateOptions = {
            showReport: true,
            allowHorizontalScroll: true,
            group: _this.formGroup,
            reportParametersList: {}
          };
          _this.reportAccountTemplateOptions = {
            showReport: true,
            allowHorizontalScroll: true,
            group: _this.formGroup,
            reportParametersList: {}
          };
          _this.kycReportPanelOptions = {
            isExpandable: true,
            labelKey: 'kyc_contract_key',
            iconName: 'report',
            expanded: true
          };
          _this.accountReportPanelOptions = {
            isExpandable: true,
            labelKey: 'generate_account_contract_key',
            iconName: 'report',
            expanded: true
          };
          _this.kycReportCheckBoxOptions = {
            group: _this.formGroup,
            fcName: 'kycCheckbox',
            labelKey: 'i_accept_kyc_contract_step_key'
          };
          _this.accountReportCheckBoxOptions = {
            group: _this.formGroup,
            fcName: 'accountCheckbox',
            labelKey: 'i_accept_account_contract_step_key'
          };
          _this.exportButtonOptions = {
            iconName: 'document',
            labelKey: 'download_as_pdf_key',
            group: _this.formGroup
          };
          return _this;
        }

        _inherits(OnBoardingPage, _omni_base_omni_base_);

        return _createClass(OnBoardingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            _superPropGet(OnBoardingPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.isCorporate = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].APP_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CORPORATE_APP_ID;
            this.isPostLogin = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_ONBOARDING_OPER;
            this.sessionData = this.commonProv.session.getValueOf(this.isPostLogin ? src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].USERINFO : src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].preLoginResponse);

            if (this.isCorporate) {
              this.stepperOptions.namesofSteps[1] = 'representative_details_step';
              this.panelOptions1Step1.labelKey = 'representative_details_key';
              this.stepperOptions.namesofSteps[11] = 'video_call_schedule_step';
              this.firstNameOptions.fcName = "onb_representativeFirstname";
              this.lastNameOptions.fcName = "onb_representativeLastName";
              this.phoneNumberOptions.fcName = "onb_representativeAccountMobile";
              this.emailOptions.fcName = "onb_representativeAccountEmail";
              this.representativeCifIdTypesOptions.param = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].ALLOWED_CROP_INSTITUTION_ID_TYPE; // Mohanad 08042024 - that this was added as per the request of AZDB-2532 

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[5], this.stepperOptions.namesofSteps[6], this.stepperOptions.namesofSteps[7], this.stepperOptions.namesofSteps[8]], 0);

              if (!this.isPostLogin) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[4], this.stepperOptions.namesofSteps[9], this.stepperOptions.namesofSteps[11], this.stepperOptions.namesofSteps[12], this.stepperOptions.namesofSteps[14], this.stepperOptions.namesofSteps[15], this.stepperOptions.namesofSteps[16], this.stepperOptions.namesofSteps[17]], 0);
              }
            } else {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[2], this.stepperOptions.namesofSteps[14], this.stepperOptions.namesofSteps[15], this.stepperOptions.namesofSteps[16], this.stepperOptions.namesofSteps[17]], 0);
            }

            this.mapAtmBranchesOptions = {
              group: this.formGroup,
              fcName: 'onb_mapAtmBranches',
              labelKey: 'map_branch_key',
              mapOptions: {
                labelKey: 'map'
              },
              showSegments: false,
              mapTypesInclude: '\'B\'',
              requestVO: this.onBoardingVO
            }; // this.financingMapAtmBranchesOptions = {
            //   group: this.formGroup,
            //   fcName: 'finnancing_mapAtmBranches',
            //   labelKey: 'financing_map_atm_branch_key',
            //   mapOptions: {
            //     labelKey: 'map'
            //   },
            //   showSegments: false,
            //   mapTypesInclude: '\'B\'',
            //   parameterToCheck: CommonBussinessConstant.FACILITY_CIF_BRANCH,
            //   requestVO: this.onBoardingVO
            // };

            this.mapFinancingStepvalidation = this.commonProv.getInitialState(this.stepperOptions.namesofSteps[this.stepperOptions.namesofSteps.length - 1]);
            this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS).then(function (result) {
              if (result) {
                _this4.personalInfoFileUploadOptions.maxNbFiles = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS];
                _this4.idDetailsFileUploadOptions.maxNbFiles = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS];
              }
            }); // this.fetchParameter();

            this.omniPull.getParamValOf('RequireTransactionPassword').then(function (res) {
              _this4.isRequireTransactionPassword = res ? res.RequireTransactionPassword : true;
            })["catch"](function (err) {
              return _this4.loggerP.log(err);
            }); //Makki - #6800 Init Default Settings for Pre T&C Step

            this.termsAndConditionsOptions.checkBoxOptions.group = this.formGroup;
            this.termsAndConditionsOptions.htmlViewerOptions.fileName = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].oper_ID + "-TermsAndConditions.html";
            this.termsAndConditionsOptions.htmlViewerOptions.defaultFileName = "TermsAndConditions.html";
            this.termsAndConditionsOptions.htmlViewerOptions.parseHtmlFromFile = true;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.termsAndConditionsOptions.checkBoxOptions.fcName], 1);
            this.omniPull.getParamValOf('EnableSecurityQuestion').then(function (res) {
              _this4.enableSecurityQuestion = res ? res.EnableSecurityQuestion : true;
            })["catch"](function (err) {
              return _this4.loggerP.log(err);
            });
          }
        }, {
          key: "onSelectFinancingBranch",
          value: function onSelectFinancingBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.financingSelectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.financingSelectBranchOptions.fcName, $event.selectedObj, this.onBoardingVO);
            }
          }
        }, {
          key: "onSelectCprporateType",
          value: function onSelectCprporateType(event) {
            this.cifIdTypesComp.idDetailsComp.idTypeComp.loadIdTypes(event.itemValue);
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].FACILITY_CIF_BRANCH)["catch"](function (error) {
                      return _this5.loggerP.log(error);
                    });

                  case 1:
                    result = _context.v;
                    result = {
                      RequestBranch: 'R'
                    };

                    if (result && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].FACILITY_USER_INPUT_VALUE) {
                      this.enableCifBranch = false;
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: this.stepperOptions.namesofSteps[10]
                      }, {
                        fcName: 'onb_branch_panel'
                      }, {
                        fcName: 'onb_map_panel'
                      }], true);
                    } else {
                      this.enableCifBranch = true;

                      if (this.onBoardingVO[this.mapAtmBranchesOptions.fcName]) {
                        this.commonProv.setValInsideNestedObj(this.onbCifBranchOptions.fcName, this.onBoardingVO[this.mapAtmBranchesOptions.fcName].briefDesc, this.onBoardingVO);
                      }

                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: this.stepperOptions.namesofSteps[10]
                      }, {
                        fcName: 'onb_branch_panel'
                      }, {
                        fcName: 'onb_map_panel'
                      }], true);
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
            _superPropGet(OnBoardingPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cardcheckboxOptions.fcName, this.productClassOptions.fcName, this.productCategoryOptions.fcName, this.assetDescriptionOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapBranchInput'], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifNumberOptions.fcName, this.ownershipPercentageOptions.fcName, 'financing_branch_panel', 'financing_map_panel'], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_READONLY, [this.profitRateOptions.fcName, this.initialAmountOptions.fcName], 1);

            if (this.isPostLogin) {
              this.reportKYCTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].POSTLOGIN_ONBOARDING_KYC_OPER_ID;
              this.reportAccountTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].POSTLOGIN_ONBOARDING_ACCOUNT_OPER_ID;
            } else {
              this.reportKYCTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].PRELOGIN_ONBOARDING_KYC_OPER_ID;
              this.reportAccountTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].PRELOGIN_ONBOARDING_ACCOUNT_OPER_ID;
            }
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.onBoardingVO);
            }
          }
        }, {
          key: "mapValueChanged",
          value: function mapValueChanged(event) {
            if (this.enableCifBranch && event.newValue) {
              this.commonProv.setValInsideNestedObj(this.onbCifBranchOptions.fcName, event.newValue.briefDesc, this.onBoardingVO);
            }
          } //Edited by ghada, tp#1345713 for fixing the issue of location panels to be shown based on financing toggle

        }, {
          key: "financingToggleChecking",
          value: function financingToggleChecking(event) {
            if (event.newValue != undefined) {
              this.showFinancingSection = event.newValue == false || event.newValue == 'false' ? false : true; //Muhnd AZDB-6980 - 16012025

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['financing_branch_panel', 'financing_map_panel'], event.newValue);
            }
          }
        }, {
          key: "loadOnBoardingData",
          value: function loadOnBoardingData() {
            var _this6 = this;

            this.omniPull.returnSubmitDataList({
              filterByOper: true,
              status: 'A'
            }).then(function (val) {
              var data = val.gridModel;

              _this6.commonProv.dismissLoading();

              if (data.length > 0) {
                var VO = data[0];
                VO.submitFieldValueMap.actionType = 'save';
                VO.submitFieldValueMap.dataSaveId = Number(VO.dataSaveId);

                _this6.events.publish('draft:navigation', VO.submitFieldValueMap);

                _this6.commonProv.dismissLoading(); //pass the drafts to the complex specimen component to set the values


                _this6.draftsSubject.next(Object.assign({}, VO.submitFieldValueMap));
              }
            })["catch"](function (err) {
              _this6.commonProv.dismissLoading();
            });
          }
        }, {
          key: "resetVisibility",
          value: function resetVisibility() {
            this.showCardToggle = false;
            this.showChequeBookToggle = false;
            this.showCardTypelookup = false;
            this.showChequebooklookup = false;
            this.resetCardsVisibility();
          }
        }, {
          key: "resetCardsVisibility",
          value: function resetCardsVisibility() {
            this.showDebitCardTypes = false;
            this.showCreditCardTypes = false;
          }
        }, {
          key: "cardChecking",
          value: function cardChecking(event) {
            if (event.newValue != undefined) {
              if (event.newValue == 'true' || event.newValue == true) {
                this.showCardTypelookup = true;
              } else {
                this.showCardTypelookup = false;
                this.resetCardsVisibility();
              }
            }
          }
        }, {
          key: "chequeBookChecking",
          value: function chequeBookChecking(event) {
            if (event.newValue != undefined) {
              if (event.newValue == 'true' || event.newValue == true) {
                this.showChequebooklookup = true;
              } else {
                this.showChequebooklookup = false;
              }
            }
          }
        }, {
          key: "cardTypeChecking",
          value: function cardTypeChecking(event) {
            if (event.newValue != undefined || event.itemValue != undefined) {
              if (event.newValue === 'D' || event.itemValue === 'D') {
                this.showDebitCardTypes = true;
                this.showCreditCardTypes = false;
              } else if (event.newValue === 'C' || event.itemValue === 'C') {
                this.showCreditCardTypes = true;
                this.showDebitCardTypes = false;
              }
            }
          }
        }, {
          key: "accountTypeChecking",
          value: function accountTypeChecking(event) {
            this.resetVisibility();

            if (event.affectCard != undefined) {
              if (event.affectCard === '1') {
                this.showCardToggle = true;
              }

              if (event.affection === '2') {
                this.showChequeBookToggle = true;
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.onBoardingVO[this.cardcheckboxOptions.fcName] === undefined) {
              this.onBoardingVO[this.cardcheckboxOptions.fcName] = false;
            }

            if (this.onBoardingVO[this.chequeBookcheckboxOptions.fcName] === undefined) {
              this.onBoardingVO[this.chequeBookcheckboxOptions.fcName] = false;
            }

            if (this.sessionData.companySettingsCO) {
              this.commonProv.setValInsideNestedObj(this.monthlyInAmountOptions.currenciesOptions.fcName, this.sessionData.companySettingsCO.baseCurrency, this.onBoardingVO);
            }
            /*Moved by ghada, AZDB-4632 to speed the process of defaulting the fields with previously selected values
            and since the issue of id types ddl got fixed, there 's no need to wait for it's service to return data*/


            if (this.isPostLogin) {
              /*Makki: AZDB-4690 Adding Post-login condition in order to avoid security error  */
              this.loadOnBoardingData();
            }
          } //reset data of financiing if toggle  is desiabled on submit

        }, {
          key: "updateScreenVO",
          value: function updateScreenVO() {
            if (!this.onBoardingVO[this.financingToggleOptions.fcName]) {
              delete this.onBoardingVO[this.complexAmountOptions.amountOptions.fcName];
              delete this.onBoardingVO[this.complexAmountOptions.currenciesOptions.fcName];
              delete this.onBoardingVO[this.facilityTypeOptions.fcName];
              delete this.onBoardingVO[this.downPaymentOptions.fcName];
              delete this.onBoardingVO[this.financingSelectBranchOptions.fcName];
              delete this.onBoardingVO[this.financingSelectBranchOptions.countryRegionCityOptions.countriesOptions.fcName];
              delete this.onBoardingVO[this.financingSelectBranchOptions.countryRegionCityOptions.regionOptions.fcName];
              delete this.onBoardingVO[this.financingSelectBranchOptions.countryRegionCityOptions.cityOptions.fcName];
              delete this.onBoardingVO[this.financingSelectBranchOptions.branchesOptions.fcName]; //  delete this.onBoardingVO[this.financingMapAtmBranchesOptions.fcName];
            } //add by Marina TP:#1486207 add mobileNo and email properties to VO in order to be able to read it in authentication-matrix component


            this.commonProv.setValInsideNestedObj('mobileNo', this.formGroup.controls[this.phoneNumberOptions.fcName].value, this.onBoardingVO);
            this.commonProv.setValInsideNestedObj('email', this.formGroup.controls[this.emailOptions.fcName].value, this.onBoardingVO); //Temp: Delete Key Of Tin if it is empty

            if (this.onBoardingVO[this.tinNumberOptions.fcName] == "" || this.onBoardingVO[this.tinNumberOptions.fcName] == null) {
              delete this.onBoardingVO[this.tinNumberOptions.fcName];
            }
          }
        }, {
          key: "changeDownPaymentDecimalPoints",
          value: function changeDownPaymentDecimalPoints(event) {
            if (this.complexAmountOptions.amountOptions.decimalPoints) {
              this.downPaymentOptions.decimalPoints = this.complexAmountOptions.amountOptions.decimalPoints;
            }
          }
        }, {
          key: "onOwnerChanged",
          value: function onOwnerChanged(event, owner) {
            if (event != null && event != undefined) {
              if (event.newValue === true) {
                var otherOwners = this.ownerCheckboxOptions.filter(function (i) {
                  return i.fcName !== owner.fcName;
                });

                var _iterator = _createForOfIteratorHelper(otherOwners),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    owner = _step.value;
                    this.commonProv.setValInsideNestedObj(owner.fcName, false, this.onBoardingVO);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [owner.fcName], 0);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }
          }
        }, {
          key: "onExistingCustomerToggleChange",
          value: function onExistingCustomerToggleChange(event) {
            if (event && event.newValue != undefined) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifNumberOptions.fcName], event.newValue);
            }
          }
        }, {
          key: "designationChanged",
          value: function designationChanged(event) {
            if (event && event.itemValue) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.ownershipPercentageOptions.fcName], event.itemValue === 'S' ? 1 : 0);
            }
          }
        }, {
          key: "onProductClassChange",
          value: function onProductClassChange(event) {
            if (event && event.selectedObj) {
              this.commonProv.setValInsideNestedObj(this.noOfPaymentsOptions.fcName, event.selectedObj.noOfPayment, this.onBoardingVO);
              this.commonProv.setValInsideNestedObj(this.payEveryOptions.fcName, event.selectedObj.periodicityType, this.onBoardingVO);
              this.commonProv.setValInsideNestedObj(this.profitRateOptions.fcName, 10, this.onBoardingVO);
            }
          }
        }, {
          key: "onDownPaymentChange",
          value: function onDownPaymentChange(event) {
            if (event && event.newValue && this.formGroup.controls[this.complexAmountOptions.amountOptions.fcName].value) {
              this.commonProv.setValInsideNestedObj(this.initialAmountOptions.fcName, this.formGroup.controls[this.complexAmountOptions.amountOptions.fcName].value - event.newValue, this.onBoardingVO);
            }
          }
        }, {
          key: "onAmountChanged",
          value: function onAmountChanged(event) {
            if (event && event.amount && this.formGroup.controls[this.downPaymentOptions.fcName].value) {
              this.commonProv.setValInsideNestedObj(this.initialAmountOptions.fcName, event.amount - this.formGroup.controls[this.downPaymentOptions.fcName].value, this.onBoardingVO);
            }
          }
        }, {
          key: "addData",
          value: function addData(OCRResults, fieldNameFromOCR, fieldNameFromRequestObject, value) {
            var fieldValue = OCRResults.getTextFieldValueByType({
              fieldType: _regulaforensics_ionic_native_document_reader_ngx__WEBPACK_IMPORTED_MODULE_6__["Enum"].eVisualFieldType[fieldNameFromOCR]
            });

            if (fieldValue) {
              this.stepperOptions.requestObject[fieldNameFromRequestObject] = fieldValue;
            }
          }
        }, {
          key: "setFileValController",
          value: function setFileValController(base64, fcName) {
            if (base64) {
              var file = {
                fileExt: "png",
                fileName: fcName + ".png",
                isImage: true,
                file: base64,
                status: "N",
                imageUrl: "data:image/png;base64," + base64
              };

              if (!this.stepperOptions.group.controls[fcName]) {
                this.stepperOptions.group.addControl(fcName, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]());
              }

              if (!Array.isArray(this.stepperOptions.requestObject[fcName + "_uploadedFiles"])) {
                this.stepperOptions.requestObject[fcName + "_uploadedFiles"] = [];
              }

              this.stepperOptions.group.controls[fcName].setValue(file);
              this.stepperOptions.group.controls[fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CONTROLLER_CALLED_AFTER_CHANGE] = true;
              this.stepperOptions.group.controls[fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CONTROLLER_CALL_VALIDATE_SERVICE] = false; // this.stepperOptions.requestObject[fcName] = file;

              this.stepperOptions.requestObject[fcName + "_uploadedFiles"].push(file);
            }
          }
        }, {
          key: "onIdTypesLoaded",
          value: function onIdTypesLoaded(event) {
            if (event) {
              if (this.commonProv.activePage.value.operID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_ONBOARDING_OPER) {
                this.showCifDetails = true;
              }
            }
          }
        }, {
          key: "onIsOwnerSelect",
          value: function onIsOwnerSelect(event) {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.draftsSubject.unsubscribe();
          } //Jira #5211 Force user to log out if successfully completed his  onboarding journey

        }, {
          key: "logUserOut",
          value: function logUserOut() {
            var _this7 = this;

            this.omniCommon.logout(7).then(function () {
              _this7.commonProv.dismissLoading();
            });
          }
        }, {
          key: "onChangeCheckboxKyc",
          value: function onChangeCheckboxKyc(event) {
            if (event.newValue == false || event.newValue == "false") {
              this.kycReportCheckBoxOptions.group.controls[this.kycReportCheckBoxOptions.fcName].reset();
            }
          }
        }, {
          key: "onChangeCheckboxAccount",
          value: function onChangeCheckboxAccount(event) {
            if (event.newValue == false || event.newValue == "false") {
              this.accountReportCheckBoxOptions.group.controls[this.accountReportCheckBoxOptions.fcName].reset();
            }
          }
        }, {
          key: "onKYCButtonClicked",
          value: function onKYCButtonClicked(event) {
            this.omniCommon.exportData(src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF, this.handleKYCReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF), this.reportKYCTemplateOptions.operId, this.commonProv.translate(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].KYC_REPORT_KEY));
          }
        }, {
          key: "onAccountButtonClicked",
          value: function onAccountButtonClicked(event) {
            this.omniCommon.exportData(src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF, this.handleAccountReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF), this.reportAccountTemplateOptions.operId, this.commonProv.translate(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].ACCOUNT_OPENING_REPORT_KEY));
          }
        }, {
          key: "onOpenStepWidget",
          value: function onOpenStepWidget(widgetStep) {
            var stepName = widgetStep.stepName,
                wasStepLoaded = widgetStep.wasStepLoaded; //Added by Michel to handle unloaded widgets

            if (!wasStepLoaded) {
              console.log('Step Widget isnt Loaded: ', stepName);
              this.templateStepper.containerStepper.dismissPopover(true);
            } else {
              this.manageStepMandatoryFlag(stepName, true);
            }
          }
        }, {
          key: "onInitStepWidget",
          value: function onInitStepWidget(stepName) {
            this.manageStepMandatoryFlag(stepName, this.isPostLogin ? false : true);
          }
        }, {
          key: "manageStepMandatoryFlag",
          value: function manageStepMandatoryFlag(stepName, stepWidgetIsOpen) {
            var _this8 = this;

            this.reportKYCShow = false;
            this.reportAccountShow = false;

            switch (stepName) {
              case 'kyc_contract_step':
                this._fetchCheckBoxMandatoryFlag('MandatoryKycContract', this.kycReportCheckBoxOptions.fcName).then(function (isMandatory) {
                  if (!stepWidgetIsOpen) {
                    return;
                  }

                  if (_this8.isPostLogin && isMandatory && !_this8.templateStepper.containerStepper.checkOtherWidgetsStatus(['kyc_contract_step', 'account_contract_step'])) {
                    _this8.showFinishOtherStepsFirstWarning();

                    _this8.reportKYCShow = false;
                    return;
                  }

                  _this8.reportKYCTemplateOptions.reportParametersList = _this8.handleKYCReportParam(_this8.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML);
                  _this8.reportKYCShow = true;

                  _this8.saveAsBase64(_this8.reportKYCTemplateOptions, stepName, _this8.kycReportBase64);
                });

                break;

              case 'account_contract_step':
                this._fetchCheckBoxMandatoryFlag('MandatoryAccountOpeningContract', this.accountReportCheckBoxOptions.fcName).then(function (isMandatory) {
                  if (!stepWidgetIsOpen) {
                    return;
                  }

                  if (_this8.isPostLogin && isMandatory && !_this8.templateStepper.containerStepper.checkOtherWidgetsStatus(['account_contract_step'])) {
                    _this8.showFinishOtherStepsFirstWarning();

                    _this8.reportAccountShow = false;
                    return;
                  }

                  _this8.reportAccountTemplateOptions.reportParametersList = _this8.handleAccountReportParam(_this8.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML);
                  _this8.reportAccountShow = true;

                  _this8.saveAsBase64(_this8.reportAccountTemplateOptions, stepName, _this8.accountReportBase64);
                });

                break;
            }
          }
        }, {
          key: "_fetchCheckBoxMandatoryFlag",
          value: function _fetchCheckBoxMandatoryFlag(adminParameter, fcName) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              if (_this9.mandatoryFlagValuesDic[adminParameter] !== undefined) {
                var isMandatory = _this9.mandatoryFlagValuesDic[adminParameter];

                _this9.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [fcName], isMandatory);

                resolve(isMandatory);
              } else {
                _this9.omniPull.getParamValOf(adminParameter).then(function (res) {
                  var isMandatory = res ? res[adminParameter] ? 1 : 0 : 0;
                  _this9.mandatoryFlagValuesDic[adminParameter] = isMandatory;

                  _this9.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [fcName], isMandatory);

                  resolve(isMandatory);
                })["catch"](function (error) {
                  return resolve(1);
                });
              }
            });
          }
        }, {
          key: "showFinishOtherStepsFirstWarning",
          value: function showFinishOtherStepsFirstWarning() {
            var _this0 = this;

            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].presentInfoAlert(this.commonProv.translate('you_must_complete_other_steps_first_key'), {
              title: this.commonProv.translate('warning_key'),
              message: this.commonProv.translate('you_must_complete_other_steps_first_key'),
              autoHide: false,
              displayImageOrIcon: false,
              buttonsArray: [{
                group: null,
                labelKey: 'ok_key',
                handler: function handler() {
                  _this0.templateStepper.containerStepper.dismissPopover(true);

                  src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].dismissAllModals();
                }
              }]
            });
          }
        }, {
          key: "handleKYCReportParam",
          value: function handleKYCReportParam(screenVO, target) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

            var whiteSpaceValue = null;

            if (target === src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML) {
              whiteSpaceValue = this.whiteSpaceValueForHtml;
            } else {
              whiteSpaceValue = this.whiteSpaceValueForPDF;
            }

            var reportParametersList = {};
            reportParametersList = {
              customerName: "".concat(screenVO[this.firstNameOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.middleNameOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.lastNameOptions.fcName] || whiteSpaceValue),
              gender: ((_a = screenVO[this.genderOptions.fcName]) === null || _a === void 0 ? void 0 : _a.description) || whiteSpaceValue,
              nationality: ((_b = screenVO[this.defaultPersonalDetailsOptions.nationalityOptions.fcName]) === null || _b === void 0 ? void 0 : _b.description) || whiteSpaceValue,
              dateOfbirth: screenVO[this.defaultPersonalDetailsOptions.psDobOptions.fcName] || whiteSpaceValue,
              martialStatus: ((_c = screenVO[this.defaultPersonalDetailsOptions.maritalstatusOptions.fcName]) === null || _c === void 0 ? void 0 : _c.description) || whiteSpaceValue,
              qualification: ((_d = screenVO === null || screenVO === void 0 ? void 0 : screenVO.EducationLevel) === null || _d === void 0 ? void 0 : _d.description) || whiteSpaceValue,
              idType: ((_e = screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName]) === null || _e === void 0 ? void 0 : _e.description) || whiteSpaceValue,
              idNo: screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.idNumberOptions.fcName] || whiteSpaceValue,
              placeOfIssue: ((_f = screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.countriesOptions.fcName]) === null || _f === void 0 ? void 0 : _f.description) || whiteSpaceValue,
              dataOfIssue: screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.issueDateOptions.fcName] ? moment__WEBPACK_IMPORTED_MODULE_23___default()(screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.issueDateOptions.fcName]).format("DD/MM/YYYY") : whiteSpaceValue,
              expiryDate: screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.dateExpiryOptions.fcName] || whiteSpaceValue,
              country: ((_g = screenVO[this.addressOptions2.countriesOptions.fcName]) === null || _g === void 0 ? void 0 : _g.description) || whiteSpaceValue,
              city: ((_h = screenVO[this.addressOptions2.cityOptions.fcName]) === null || _h === void 0 ? void 0 : _h.description) || whiteSpaceValue,
              street: screenVO[this.addressOptions2.streetOptions.fcName] || whiteSpaceValue,
              remark: screenVO[this.addressOptions2.buildingOptions.fcName] || whiteSpaceValue,
              cellPhone: screenVO[this.phoneNumberOptions.fcName] || whiteSpaceValue,
              email: screenVO[this.emailOptions.fcName] || whiteSpaceValue,
              jobTitle: ((_j = screenVO[this.defaultEmployeeOptions.occupationOptions.fcName]) === null || _j === void 0 ? void 0 : _j.description) || whiteSpaceValue,
              employer: screenVO[this.defaultEmployeeOptions.employerNameOptions.fcName] || whiteSpaceValue,
              workAdress: "".concat(((_k = screenVO[this.defaultEmployeeOptions.addressOptions.countriesOptions.fcName]) === null || _k === void 0 ? void 0 : _k.description) || whiteSpaceValue, " ").concat(((_l = screenVO[this.defaultEmployeeOptions.addressOptions.regionOptions.fcName]) === null || _l === void 0 ? void 0 : _l.description) || whiteSpaceValue, " ").concat(((_m = screenVO[this.defaultEmployeeOptions.addressOptions.cityOptions.fcName]) === null || _m === void 0 ? void 0 : _m.description) || whiteSpaceValue, " ").concat(screenVO[this.defaultEmployeeOptions.addressOptions.streetOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.defaultEmployeeOptions.addressOptions.buildingOptions.fcName] || whiteSpaceValue, " ").concat(((_o = screenVO[this.defaultEmployeeOptions.addressOptions.poBoxInputOptions.fcName]) === null || _o === void 0 ? void 0 : _o.description) || whiteSpaceValue),
              workPhone: screenVO[this.defaultEmployeeOptions.officeTelPhoneNumberOptions.fcName] || whiteSpaceValue,
              monthlyIncome: screenVO[this.monthlyInAmountOptions.amountOptions.fcName] ? screenVO[this.monthlyInAmountOptions.amountOptions.fcName] + ' ' + ((_p = screenVO[this.monthlyInAmountOptions.currenciesOptions.fcName]) === null || _p === void 0 ? void 0 : _p.description) : whiteSpaceValue,
              TINNo: screenVO[this.tinNumberOptions.fcName] || whiteSpaceValue,
              clientName: "".concat(screenVO[this.firstNameOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.middleNameOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.lastNameOptions.fcName] || whiteSpaceValue),
              clientSignature: this.extractSignatureDataUri(screenVO, target) || this.emptyImageForPDF
            };

            for (var _i = 0, _Object$entries = Object.entries(screenVO); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (reportParametersList[key] == undefined) {
                if (typeof value === 'string') {
                  if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].isDate(value)) {
                    reportParametersList[key] = moment__WEBPACK_IMPORTED_MODULE_23___default()(value).format("DD/MM/YYYY");
                  } else {
                    reportParametersList[key] = value;
                  }
                } else if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].isObject(value) && (value === null || value === void 0 ? void 0 : value['description'])) {
                  reportParametersList[key] = value === null || value === void 0 ? void 0 : value['description'];
                }
              }
            }

            return reportParametersList;
          }
        }, {
          key: "extractSignatureDataUri",
          value: function extractSignatureDataUri(screenVO, target) {
            var signatureObjectKey = null;
            /*
              if (this.stepSpecimenOptions !== undefined && screenVO[this.stepSpecimenOptions.fcName] && screenVO[this.stepSpecimenOptions.fcName].length > 0) {
                signatureObjectKey = this.stepSpecimenOptions.fcName;
              }
              if (this.panelSpecimenOptions !== undefined && screenVO[this.panelSpecimenOptions.fcName] && screenVO[this.panelSpecimenOptions.fcName].length > 0) {
                signatureObjectKey = this.panelSpecimenOptions.fcName;
              }*/

            if (screenVO[this.specimenOptions.fcName] && screenVO[this.specimenOptions.fcName].length > 0) {
              signatureObjectKey = this.specimenOptions.fcName;
            }

            if (signatureObjectKey == null) {
              return null;
            }

            if (target === src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML) {
              return screenVO[signatureObjectKey][0].imageUrl;
            }

            return screenVO[signatureObjectKey][0].imageUrl.replace("data:image/png;base64,", "").trim();
          }
        }, {
          key: "handleAccountReportParam",
          value: function handleAccountReportParam(screenVO, target) {
            var _a, _b, _c, _d, _e;

            var whiteSpaceValue = null;

            if (target === src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML) {
              whiteSpaceValue = this.whiteSpaceValueForHtml;
            } else {
              whiteSpaceValue = this.whiteSpaceValueForPDF;
            }

            var param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].preLoginResponse).parameters;
            var currentDateDefaultFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
            return {
              customerName: "".concat(screenVO[this.firstNameOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.middleNameOptions.fcName] || whiteSpaceValue, " ").concat(screenVO[this.lastNameOptions.fcName] || whiteSpaceValue),
              clientSignature: this.extractSignatureDataUri(screenVO, target) || this.emptyImageForPDF,
              banchName: ((_a = screenVO[this.mapAtmBranchesOptions.fcName]) === null || _a === void 0 ? void 0 : _a.briefDesc) || screenVO[this.onbSelectBranchOptions.branchesOptions.fcName + 'DescriptionConcat'] || ((_b = screenVO[this.onbSelectBranchOptions.branchesOptions.fcName]) === null || _b === void 0 ? void 0 : _b.description) || whiteSpaceValue,
              branchName: ((_c = screenVO[this.mapAtmBranchesOptions.fcName]) === null || _c === void 0 ? void 0 : _c.briefDesc) || screenVO[this.onbSelectBranchOptions.branchesOptions.fcName + 'DescriptionConcat'] || ((_d = screenVO[this.onbSelectBranchOptions.branchesOptions.fcName]) === null || _d === void 0 ? void 0 : _d.description) || whiteSpaceValue,
              customerServicesName: whiteSpaceValue,
              customerServicesSignature: whiteSpaceValue,
              branchManagerName: whiteSpaceValue,
              branchManagerSignature: whiteSpaceValue,
              cellPhone: screenVO[this.phoneNumberOptions.fcName] || whiteSpaceValue,
              accountType: ((_e = screenVO[this.accountTypeOptions.fcName]) === null || _e === void 0 ? void 0 : _e.description) || whiteSpaceValue,
              todayDate: new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_12__["PsDateFormatPipe"]().transform(new Date(), currentDateDefaultFormat) || whiteSpaceValue
            };
          }
        }, {
          key: "saveAsBase64",
          value: function saveAsBase64(reportOptions, stepName, fcName) {
            var _this1 = this;

            var reportRequest = {
              operId: reportOptions.operId,
              reportFormat: src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF,
              reportType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].EXPORT_REPORT_TYPE,
              reportParametersList: stepName === "kyc_contract_step" ? this.handleKYCReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF) : this.handleAccountReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF)
            };
            this.commonProv.presentLoading();
            this.commonProv.returnReportDetails(reportRequest).then(function (result) {
              if (result) {
                var fileObject = {
                  fileExt: result['data']['reportFormat'],
                  fileName: stepName === "kyc_contract_step" ? "Customer_KYC.pdf" : "Account_Contract.pdf",
                  status: "N",
                  isImage: false,
                  file: result['data']['base64Data'],
                  fileSize: result['data']['fileSize'],
                  imageUrl: "data:application/pdf;base64," + result['data']['base64Data']
                };

                _this1.commonProv.setValInsideNestedObj(fcName, [fileObject], _this1.onBoardingVO);

                _this1.commonProv.dismissLoading();
              }
            })["catch"](function (error) {
              _this1.commonProv.dismissLoading();

              _this1.commonProv.logger.log(error);
            });
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_21__["OmniBasePage"]);

      OnBoardingPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_20__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_15__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__["EventEmitterService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_13__["Events"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"]
        }];
      };

      OnBoardingPage.propDecorators = {
        fileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cifIdTypesComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cifIdTypesComp']
        }],
        templateStepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['templateStepper', {
            "static": false
          }]
        }]
      };
      OnBoardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'on-boarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_20__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_15__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__["EventEmitterService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_13__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"]])], OnBoardingPage);
      /***/
    },

    /***/
    "cwH1":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/onboarding.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function cwH1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper #templateStepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\"\n  (onTemplateStepWidgetOpen)=\"onOpenStepWidget($event)\" (onTemplateStepWidgetInit)=\"onInitStepWidget($event)\">\n  <!-- New T&C Step/Widget to appear first -->\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">    \n    <ps-complex-terms-and-conditions [options]=\"termsAndConditionsOptions\" [id]=\"stepperOptions.namesofSteps[0] + '_pre_terms_and_conditions'\">\n    </ps-complex-terms-and-conditions>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"personal_info_panel\">\n      <ps-keyin-input id=\"first_name\" [options]=\"firstNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"middle_name\" [options]=\"middleNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input id=\"last_name\" [options]=\"lastNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"short_arabic_name\" [options]=\"shortArabicNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"long_arabic_name\" [options]=\"longArabicNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"nick_name\" [options]=\"nickNameOptions\">\n      </ps-keyin-input>\n      <ps-date-day-month-year-past *ngIf=\"!isPostLogin && !isCorporate\"\n        [options]=\"defaultPersonalDetailsOptions.psDobOptions\" id=\"dateOfBirth\" class=\"ps-date-month-year\">\n      </ps-date-day-month-year-past>\n      <ps-entity-phone-number id=\"phone_number\" [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\n      <ps-input-email id=\"email\" [options]=\"emailOptions\">\n      </ps-input-email>\n      <ng-container *ngIf=\"!isPostLogin && !isCorporate\">\n        <ps-input-free-text id=\"currentEmp\" [options]=\"currentEmpOptions\">\n        </ps-input-free-text>\n        <ps-complex-amount [options]=\"monthlyInAmountOptions\" id=\"monthlyInAmount\">\n        </ps-complex-amount>\n      </ng-container>\n      <ps-select-toggle *ngIf=\"isCorporate\" [options]=\"isOwnerToggleOptions\" (click)=\"onIsOwnerSelect($event)\">\n      </ps-select-toggle>\n      <ps-label *ngIf=\"isCorporate\" class=\"upload-title\" [options]=\"fileUploadLabelDescription\"\n        id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs *ngIf=\"isCorporate\" [options]=\"personalInfoFileUploadOptions\" id=\"ps-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar *ngIf=\"isCorporate\" [options]=\"personalInfoCommentOptions\" id=\"comments\"></ps-input-varchar>\n\n    \n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelIdDetailsOptions\" id=\"main_id_details_panel\">\n      <!-- *ngIf=\"showCifDetails\" -->\n      <ps-complex-cif-id-types [options]=\"representativeCifIdTypesOptions\"\n        (onIdTypesGetLoaded)=\"onIdTypesLoaded($event)\">\n      </ps-complex-cif-id-types>\n      <ps-input-numeric id=\"input_free_text\" [options]=\"tinNumberOptions\">\n      </ps-input-numeric>\n    </ps-container-panel>\n    <ps-container-panel *ngIF=\"!isCorporate\" [options]=\"panelAttachmentOptions\" id=\"attachment_details_panel\">\n      <ps-label class=\"upload-title\" [options]=\"fileUploadLabelDescription\" id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs [options]=\"idDetailsFileUploadOptions\" id=\"ps-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar [options]=\"attachementDetCommentOptions\" id=\"comments\"></ps-input-varchar>\n    </ps-container-panel>\n\n    <!-- \n    <ps-container-panel [options]=\"panelAditionalInformationOptions\" id=\"additional_info_panel\">\n   \n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n\n    </ps-container-panel> -->\n\n  </ps-form-step>\n\n  <!--  company details-->\n  <ps-form-step *psStep=\"'step3'\" step3 [id]=\"stepperOptions.namesofSteps[2]\">\n    <ps-container-panel [options]=\"companyMainDetailsPanelOptions\" id=\"company_details_panel\">\n      <ps-lov-corporate-type  id=\"'corpType' + id\" [options]=\"corpTypeOptions\"\n        (onPsChange)=\"onSelectCprporateType($event)\">\n      </ps-lov-corporate-type>\n      <!-- <ps-lov-entity-type [options]=\"entityTypeLovOptiops\" id=\"corporate_type\"></ps-lov-entity-type> -->\n      <ps-keyin-input [options]=\"legalEntityNameOptions\" id=\"legalEntityName\"></ps-keyin-input>\n      <ps-dropdown-legal-status id=\"'lstatus' + id\" [options]=\"lstatusOptions\"></ps-dropdown-legal-status>\n      <ps-input-numeric id=\"taxNumber\" [options]=\"taxNumberOptions\">\n      </ps-input-numeric>\n      <ps-dropdown-country id=\"estabCountry\" [options]=\"estabCountryOptions\">\n      </ps-dropdown-country>\n      <ps-date-day-month-year-past id=\"estabDate\" [options]=\"estabDateOptions\">\n      </ps-date-day-month-year-past>\n      <ps-complex-cif-id-types #cifIdTypesComp [options]=\"defaultCifIdTypesOptions\"></ps-complex-cif-id-types>\n      <!-- <ps-input-numeric id=\"input_free_text\" [options]=\"tinNumberOptions\">\n      </ps-input-numeric> -->\n      <ps-input-free-text id=\"registNumber\" [options]=\"registNumberOptions\">\n      </ps-input-free-text>\n      <!-- <ps-complex-eco-sector *ngIf=\"!isCorporate\" id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector> -->\n    </ps-container-panel>\n    <ps-container-panel  [options]=\"companyAdditionalDetailsPanelOptions\"\n      id=\"company_additional_details_panel\">\n      <ps-input-email id=\"corpEmail\" [options]=\"corpEmailOptions\">\n      </ps-input-email>\n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n      <ps-dropdown-ranking [options]=\"rankingOptions\"></ps-dropdown-ranking>\n      <ps-label class=\"upload-title\" [options]=\"addFileUploadLabelDescription\" id=\"add_file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs [options]=\"addFileUploadOptions\" id=\"add-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar [options]=\"addCommentOptions\" id=\"comments\"></ps-input-varchar>\n    </ps-container-panel>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step4'\" step4 [id]=\"stepperOptions.namesofSteps[3]\">\n    <ps-container-panel [options]=\"panelUserCredentials\" id=\"user_credentials_panel\">\n\n      <ps-complex-user-credentials [options]=\"userCredentialsOptions\" id=\"user_credential\">\n      </ps-complex-user-credentials>\n\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"isRequireTransactionPassword\" [options]=\"panelPinOptions\" id=\"pin_panel\">\n      <ps-confirm-pin id=\"complex_pin_confirm\" [options]=\"pinConfirmOptions\">\n      </ps-confirm-pin>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"enableSecurityQuestion\" [options]=\"panelSecurityQuestion\" id=\"security_question_panel\">\n      <ps-complex-security-questions id=\"complex_security_question\" [options]=\"securityQuestionOptions\">\n      </ps-complex-security-questions>\n    </ps-container-panel>\n\n  </ps-form-step>\n\n  <!-- Identity verification -->\n  <ps-form-step *psStep=\"'step5'\" step5 [id]=\"stepperOptions.namesofSteps[4]\">\n    <!-- <ps-container-panel [options]=\"panelIdDetailsOptions\" id=\"id_details_panel\">\n      <ps-complex-cif-id-types *ngIf=\"showCifDetails\" [options]=\"defaultCifIdTypesOptions\"></ps-complex-cif-id-types>\n    </ps-container-panel> -->\n\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step6'\" step6 [id]=\"stepperOptions.namesofSteps[5]\">\n    <ps-container-panel [options]=\"panelAdditionalDetailsOptions\" id=\"additional_info_panel\">\n      <ps-complex-personal-details [options]=\"defaultPersonalDetailsOptions\"></ps-complex-personal-details>\n      <ps-lov-gender [options]=\"genderOptions\" id=\"gender\"></ps-lov-gender>\n      <ps-dropdown-legal-status id=\"'lstatus' + id\" [options]=\"lstatusOptions\"></ps-dropdown-legal-status>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"!isCorporate\" [options]=\"panelAddressDetailsOptions\" id=\"address_details_panel\">\n      <ps-complex-address [options]=\"addressOptions2\"></ps-complex-address>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelEmploymentDetailsOptions\" id=\"employment_details_panel\">\n      <ps-complex-employment-details [options]=\"defaultEmployeeOptions\" id=\"employment_details_panel\">\n      </ps-complex-employment-details>\n      <ps-input-free-text id=\"currentEmp\" [options]=\"currentEmpOptions\">\n      </ps-input-free-text>\n\n      <ps-complex-amount [options]=\"monthlyInAmountOptions\" id=\"monthlyInAmount\">\n      </ps-complex-amount>\n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n    </ps-container-panel>\n    <!-- <div *ngIf=\"isCorporate\" class=\"owners\">\n      <ps-select-checkbox class=\"owner\" *ngFor=\"let owner of ownerCheckboxOptions; let idx=\n    index\" [id]=\"owner.fcName\" [options]=\"owner\" (onPsChange)=\"onOwnerChanged($event,owner)\">\n      </ps-select-checkbox>\n    </div> -->\n  </ps-form-step>\n\n  <!-- Ownership Details (panel 2 in widget 1)\n  <ps-form-step *psStep=\"'step6'\" step6 [id]=\"stepperOptions.namesofSteps[5]\">\n\n    <ps-container-panel [options]=\"ownershipDetailsPanelOptions\" id=\"ownership_details_panel\">\n      <ps-lov-entity-type [options]=\"entityTypeLovOptiops\" id=\"entity_type\"></ps-lov-entity-type>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'existingCustomer'\" [options]=\"existingCustomerOptions\"\n        (onPsChange)=\"onExistingCustomerToggleChange($event)\">\n      </ps-select-toggle>\n      <ps-input-numeric [options]=\"cifNumberOptions\" id=\"cifNumber\"></ps-input-numeric>\n      <ps-keyin-input id=\"full_name\" [options]=\"firstNameOptions\"></ps-keyin-input>\n      <ps-entity-phone-number id=\"phone_number\" [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\n\n      <ps-input-email id=\"email\" [options]=\"emailOptions\"> </ps-input-email>\n\n\n\n      <ps-lov-designation [options]=\"designationeLovOptiops\" id=\"designation\" (onPsChange)=\"designationChanged($event)\">\n      </ps-lov-designation>\n\n      <ps-input-numeric id=\"ownershipPercentage\" [options]=\"ownershipPercentageOptions\">\n      </ps-input-numeric>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'AuthSigner'\" [options]=\"AuthSignerOptions\">\n      </ps-select-toggle>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'authPowerofAttorney'\" [options]=\"authPowerofAttorneyOptions\">\n      </ps-select-toggle>\n    </ps-container-panel>\n  </ps-form-step> -->\n\n  <!--  selfie Picture-->\n  <ps-form-step *psStep=\"'step7'\" step7 [id]=\"stepperOptions.namesofSteps[6]\">\n    <ps-complex-media-capture [options]=\"selfieOptions\"></ps-complex-media-capture>\n\n  </ps-form-step>\n\n  <!-- video selfie -->\n  <ps-form-step *psStep=\"'step8'\" step8 [id]=\"stepperOptions.namesofSteps[7]\">\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step9'\" step9 [id]=\"stepperOptions.namesofSteps[8]\">\n\n    <ps-complex-specimen [options]=\"specimenOptions\">\n\n    </ps-complex-specimen>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step10'\" step10 [id]=\"stepperOptions.namesofSteps[9]\">\n    <ps-container-panel [options]=\"selectBranchPanelOptions\" id=\"onb_branch_panel\">\n      <ps-complex-select-branch [options]=\"onbSelectBranchOptions\"\n        (onPsChange)=\"onSelectFinancingBranch($event)\">\n      </ps-complex-select-branch>\n      <!-- <ps-input-display-only [options]=\"onbCifBranchOptions\" *ngIf=\"enableCifBranch\">\n      </ps-input-display-only> -->\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"selectBranchLocPanelOptions\" id=\"onb_map_panel\">\n      <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\" id=\"map_atm_branches\"\n        (onPsChange)=\"mapValueChanged($event)\">\n      </ps-map-atm-branches>\n    </ps-container-panel>\n  </ps-form-step>\n\n  <!-- Product details -->\n  <ps-form-step *psStep=\"'step11'\" step11 [id]=\"stepperOptions.namesofSteps[10]\">\n    <ps-container-panel [options]=\"panelProductsOptions\" id=\"product_details_panel\">\n\n      <ps-dropdown-account-types id='accountType' [options]=\"accountTypeOptions\"\n        (onPsChange)=\"accountTypeChecking($event)\"></ps-dropdown-account-types>\n\n      <ps-dropdown-currencies id='currency' [options]=\"currencyOptions\"></ps-dropdown-currencies>\n\n      <ps-select-toggle *ngIf=\"showCardToggle\" class=\"onboarding_toggles\" id='card_flag' [options]=\"cardcheckboxOptions\"\n        (onPsChange)=\"cardChecking($event)\">\n      </ps-select-toggle>\n\n      <ps-lov-card-types *ngIf=\"showCardTypelookup\" [options]=\"cardsLookupOptiops\" id=\"card_type\"\n        (onPsChange)=\"cardTypeChecking($event)\">\n      </ps-lov-card-types>\n\n      <ps-dropdown-card-types *ngIf=\"showDebitCardTypes\" id=\"debitCardType\" [options]=\"debitCardTypeOptions\">\n      </ps-dropdown-card-types>\n\n      <ps-dropdown-card-types *ngIf=\"showCreditCardTypes\" id=\"creditCardType\" [options]=\"creditCardTypeOptions\">\n      </ps-dropdown-card-types>\n\n      <ps-select-toggle class=\"onboarding_toggles\" *ngIf=\"showChequeBookToggle\" id='chequebook_flag'\n        [options]=\"chequeBookcheckboxOptions\" (onPsChange)=\"chequeBookChecking($event)\"></ps-select-toggle>\n\n      <ps-dropdown-chequebook-types *ngIf=\"showChequebooklookup\" id=\"'cheq_req_transfer_to\"\n        [options]=\"chequebookTypeOptions\">\n      </ps-dropdown-chequebook-types>\n      <ps-select-toggle class=\"onboarding_toggles\" [options]=\"financingToggleOptions\" id=\"financing_toggle\"\n        (onPsChange)=\"financingToggleChecking($event)\">\n      </ps-select-toggle>\n      <ng-container *ngIf=\"showFinancingSection\">\n\n        <ps-dropdown-facility-types [options]=\"facilityTypeOptions\">\n        </ps-dropdown-facility-types>\n\n        <ps-dropdown-product-types id=\"productClass\" [options]=\"productClassOptions\"\n          (onPsChange)=\"onProductClassChange($event)\">\n        </ps-dropdown-product-types>\n\n        <ps-dropdown-product-category [options]=\"productCategoryOptions\"></ps-dropdown-product-category>\n\n        <ps-dropdown-assets-description id=\"assetDescription\" [options]=\"assetDescriptionOptions\">\n        </ps-dropdown-assets-description>\n\n\n        <ps-complex-amount [options]=\"complexAmountOptions\" id=\"financingComplexAmount\"\n          (onCurrencyChange)=\"changeDownPaymentDecimalPoints($event)\" (onAmountChanged)=\"onAmountChanged($event)\">\n        </ps-complex-amount>\n\n        <ps-keyin-input [options]=\"tenorFinancingOptions\">\n\n        </ps-keyin-input>\n\n        <ps-input-amount id=\"down_payment\" [options]=\"downPaymentOptions\" (onPsChange)='onDownPaymentChange($event)'>\n        </ps-input-amount>\n\n        <ps-keyin-input [options]=\"profitRateOptions\">\n        </ps-keyin-input>\n\n        <ps-input-amount id=\"initial_amount\" [options]=\"initialAmountOptions\">\n        </ps-input-amount>\n\n        <ps-input-numeric id=\"noOfPayments\" [options]=\"noOfPaymentsOptions\">\n        </ps-input-numeric>\n\n        <ps-lov-periodicity id=\"payEvery\" [options]=\"payEveryOptions\">\n        </ps-lov-periodicity>\n\n        <ps-label class=\"upload-title\" [options]=\"financingFileUploadLabelDescription\" id=\"file_upload_label_desc\">\n        </ps-label>\n        <ps-file-upload-bs [options]=\"finanacingFileUploadOptions\" id=\"ps-file-upload\"></ps-file-upload-bs>\n      </ng-container>\n    </ps-container-panel>\n    <!-- <ps-container-panel [options]=\"selectBranchPanelOptions\" id=\"financing_branch_panel\">\n      <ps-complex-select-branch [options]=\"financingSelectBranchOptions\" (onPsChange)=\"onSelectFinancingBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel> -->\n    <!-- <ps-container-panel [options]=\"selectFinBranchLocPanelOptions\" id=\"financing_map_panel\">\n      <ps-map-atm-branches class=\"component-map-container\" [options]=\"financingMapAtmBranchesOptions\"\n        id=\"financing_map_atm_branches\">\n      </ps-map-atm-branches>\n    </ps-container-panel> -->\n  </ps-form-step>\n\n  <!--    Video Call Scheduling -->\n  <ps-form-step *psStep=\"'step12'\" step12 [id]=\"stepperOptions.namesofSteps[11]\">\n    <!-- <ps-complex-call-slot [options]=\"callSlotOptions\"></ps-complex-call-slot> -->\n  </ps-form-step>\n\n  <!-- Contract Signing -->\n  <ps-form-step *psStep=\"'step13'\" step13 [id]=\"stepperOptions.namesofSteps[12]\">\n\n  </ps-form-step>\n\n  <!-- attachment details -->\n  <ps-form-step *psStep=\"'step14'\" step14 [id]=\"stepperOptions.namesofSteps[13]\">\n\n    <ps-container-panel [options]=\"panelAttachmentOptions\" id=\"corp_attachment_details_panel\">\n      <ps-label class=\"upload-title\" [options]=\"fileUploadLabelDescription\" id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs [options]=\"corpFileUploadOptions\" id=\"ps-corp-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar [options]=\"corpAttachementDetCommentOptions\" id=\"comments\"></ps-input-varchar>\n    </ps-container-panel>\n  </ps-form-step>\n  <!-- ownerKYC -->\n  <ps-form-step *psStep=\"'step15'\" step15 [id]=\"stepperOptions.namesofSteps[14]\">\n  </ps-form-step>\n  <!-- live ness detection -->\n  <ps-form-step *psStep=\"'step16'\" step16 [id]=\"stepperOptions.namesofSteps[15]\"></ps-form-step>\n  <ps-form-step *psStep=\"'step17'\" step17 [id]=\"stepperOptions.namesofSteps[16]\">\n    <ps-container-panel [options]=\"panelAddressDetailsOptions\" id=\"corp_address_details_panel\">\n      <ps-complex-address [options]=\"addressOptions2\"></ps-complex-address>\n    </ps-container-panel>\n  </ps-form-step>\n  <!--company eKYC -->\n  <ps-form-step *psStep=\"'step18'\" step18 [id]=\"stepperOptions.namesofSteps[17]\">\n  </ps-form-step>\n\n\n  <ps-form-step *psStep=\"'step19'\" step19 [id]=\"stepperOptions.namesofSteps[18]\">\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step20'\" step20 [id]=\"stepperOptions.namesofSteps[19]\">\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step21'\" step21 [id]=\"stepperOptions.namesofSteps[20]\">\n    <ps-container-panel [options]=\"kycReportPanelOptions\" id=\"kyc_report_panel\">\n      <div class=\"ps-template-report-viewer\">\n        <ps-container-report-viewer *ngIf=\"reportKYCShow\" [options]=\"reportKYCTemplateOptions\"\n          id=\"report_page\"></ps-container-report-viewer>\n        <ps-select-checkbox [id]=\"'kyc_report_checkbox'\" [options]=\"kycReportCheckBoxOptions\"\n          (onPsChange)=\"onChangeCheckboxKyc($event)\">\n        </ps-select-checkbox>\n        <ps-action-button [options]=\"exportButtonOptions\" (onClick)=\"onKYCButtonClicked($event)\"></ps-action-button>\n      </div>\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step22'\" step22 [id]=\"stepperOptions.namesofSteps[21]\">\n    <ps-container-panel [options]=\"accountReportPanelOptions\" id=\"account_report_panel\">\n      <div class=\"ps-template-report-viewer\">\n        <ps-container-report-viewer *ngIf=\"reportAccountShow\" [options]=\"reportAccountTemplateOptions\"\n          id=\"report_page\"></ps-container-report-viewer>\n        <ps-select-checkbox [id]=\"'account_report_checkbox'\" [options]=\"accountReportCheckBoxOptions\"\n          (onPsChange)=\"onChangeCheckboxAccount($event)\">\n        </ps-select-checkbox>\n        <ps-action-button [options]=\"exportButtonOptions\" (onClick)=\"onAccountButtonClicked($event)\"></ps-action-button>\n\n      </div>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=91-es5.js.map