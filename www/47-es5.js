(function () {
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

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47], {
    /***/
    "QZb8":
    /*!*********************************************************!*\
      !*** ./src/app/pages/ipo-request/ipo-request.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function QZb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpcG8tcmVxdWVzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "cCV5":
    /*!*******************************************************!*\
      !*** ./src/app/pages/ipo-request/ipo-request.page.ts ***!
      \*******************************************************/

    /*! exports provided: IpoRequestPage */

    /***/
    function cCV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IpoRequestPage", function () {
        return IpoRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ipo_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ipo-request.page.html */
      "eK7+");
      /* harmony import */


      var _ipo_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ipo-request.page.scss */
      "QZb8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */
      "nipE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var IpoRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function IpoRequestPage(commonProv, loggerP, omniCommon, nav, omniCommonService) {
          var _this;

          _classCallCheck(this, IpoRequestPage);

          _this = _callSuper(this, IpoRequestPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniCommon = omniCommon;
          _this.nav = nav;
          _this.omniCommonService = omniCommonService;
          _this.formData = {};
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.ipoRequestVO = {};
          _this.stepperOptions = {
            stepperName: 'ipo_req_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['ipo_req_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.securityRenewal,
              group: _this.formGroup
            },
            requestObject: _this.ipoRequestVO // submitServiceUrl: ,

          };
          _this.termsAndConditionsOptions = {
            checkBoxOptions: {
              group: _this.formGroup,
              fcName: 'checkboxConfirm',
              labelKey: 'agree_terms_and_conditions_key'
            },
            htmlViewerOptions: {
              fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].onlineRegistrationTermsAndConditionsFileName
            }
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'portfolio_and_sukuk_key',
            iconName: 'portfolio-and-sukuk',
            expanded: true
          };
          _this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'ipo_related_file_key',
            iconName: 'ipo-file',
            expanded: true
          };
          _this.sukukOptions = {
            fcName: 'quantity',
            group: _this.formGroup,
            min: 1,
            labelKey: 'number_of_sukuk_key',
            placeHolder: 'number_of_sukuk_key'
          };
          _this.portfolioOptions = {
            fcName: 'portfolioNumber',
            group: _this.formGroup,
            labelKey: 'portfolio_key',
            placeHolder: 'select_portfolio_key'
          };
          _this.paymentMethodOptions = {
            fcName: 'paymentMethodAgent',
            group: _this.formGroup
          };
          _this.paymentMethodIndividualOptions = {
            fcName: 'paymentMethodIndividual',
            group: _this.formGroup
          };
          _this.sukukValueOptions = {
            currency: '',
            currenciesOptions: {
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'sukuk_value_key',
              fcName: 'sukukValue',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            }
          };
          _this.fileCommentOptions = {
            fcName: 'fileComments',
            group: _this.formGroup,
            labelKey: 'enter_comments_on_uploaded_file_key',
            rows: '4'
          };
          _this.fileLabel = {
            labelKey: 'ipo_file_upload_key',
            position: 'floating'
          };
          _this.fileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: _this.formGroup
          };
          _this.itemCard = {};
          _this.cardOptions = {};
          _this.noIpoSecuritiesListFound = false;
          return _this;
        }

        _inherits(IpoRequestPage, _omni_base_omni_base_);

        return _createClass(IpoRequestPage, [{
          key: "countChange",
          value: function countChange(val) {
            var sukukControl = this.formGroup.controls[this.sukukValueOptions.amountOptions.fcName];

            if (sukukControl !== undefined) {
              sukukControl.setValue(this.toIPORequestComponent.calculatedSukukPrice * val.newValue);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            _superPropGet(IpoRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            var prevFormat = 'YYYY-MM-DD';
            var psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["PsDateFormatPipe"]();
            var userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
            var workingCif = this.omniCommonService.common.session.getValueOf('WORKINGCIF');

            if (this.omniCommon.isAgent()) {
              this.isUserAgent = true;
            } else {
              this.isUserAgent = false;
            }

            try {
              this.toIPORequestComponent = this.nav.getAllParams();
            } catch (error) {
              this.loggerP.error('IPORequest Screen Error ! ', error);
            }

            setTimeout(function () {
              if (_this2.toIPORequestComponent !== undefined) {
                _this2.formGroup.controls[_this2.sukukValueOptions.amountOptions.fcName].setValue(_this2.toIPORequestComponent.calculatedSukukPrice);

                _this2.formGroup.controls[_this2.sukukValueOptions.currenciesOptions.fcName].setValue(_this2.toIPORequestComponent.tradingCurrencyCode);
              } else {
                _this2.formGroup.controls[_this2.sukukValueOptions.amountOptions.fcName].setValue(0);
              }
            }, 100);
            this.ipoRequestVO[this.sukukValueOptions.amountOptions.fcName] = this.toIPORequestComponent.calculatedSukukPrice;
            this.ipoRequestVO[this.sukukValueOptions.currenciesOptions.fcName] = this.toIPORequestComponent.tradingCurrencyCode;
            this.itemCard = this.toIPORequestComponent !== undefined ? this.toIPORequestComponent : this.ipoRequestVO;
            this.cardOptions.formGroup = this.formGroup;
            this.cardOptions.labelsValueMap = this.navigationServices.getParamKey('labelsValueMap');
            this.cardOptions.headerMap = this.navigationServices.getParamKey('headerMap');
            this.cardOptions.showInitialCardValues = this.navigationServices.getParamKey('showInitialCardValues');
            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
              securityCode1: this.toIPORequestComponent.securityCode1,
              securityCode2: this.toIPORequestComponent.securityCode2,
              workingCif: workingCif ? workingCif : userInfo.omniUserVO.CIF_NO,
              price: this.toIPORequestComponent.calculatedSukukPrice,
              tradeDate: psDatePipe.transform(new Date(), prevFormat)
            }, false, true);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(IpoRequestPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.sukukValueOptions.amountOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.sukukValueOptions.amountOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.sukukValueOptions.currenciesOptions.fcName], 1);
          }
        }, {
          key: "onFileSelect",
          value: function onFileSelect(val) {
            this.uploadedFiles = [];
            this.uploadedFiles = val;
            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
              uploadedFiles: this.uploadedFiles
            }, false, true);
          }
        }, {
          key: "onFileDeleted",
          value: function onFileDeleted(val) {
            var _iterator = _createForOfIteratorHelper(this.uploadedFiles),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var uploadedFile = _step.value;

                if (val.selectedFile.name === uploadedFile.selectedFile.name) {
                  this.uploadedFiles.splice(this.uploadedFiles.indexOf(uploadedFile), 1);
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
              uploadedFiles: this.uploadedFiles
            }, false, true);
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      IpoRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"]
        }];
      };

      IpoRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ipo-request',
        template: _raw_loader_ipo_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ipo_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"]])], IpoRequestPage);
      /***/
    },

    /***/
    "eK7+":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ipo-request/ipo-request.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function eK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"ipo_req_panel\">\n\n      <ps-container-lookup-option [options]=\"cardOptions\" [itemCard]=\"itemCard\"></ps-container-lookup-option>\n\n\n      <ps-dropdown-portfolio id=\"portfolio_id\" [options]=\"portfolioOptions\"></ps-dropdown-portfolio>\n\n\n      <ps-input-numeric id=\"sukuk_count\" (onPsChange)=\"countChange($event)\" [options]=\"sukukOptions\"></ps-input-numeric>\n\n\n      <ps-complex-amount id=\"sukuk_value\" [options]=\"sukukValueOptions\"></ps-complex-amount>\n\n\n      <ps-lov-payment-method-agent *ngIf=\"isUserAgent\" id=\"payment_method\" [options]=\"paymentMethodOptions\">\n      </ps-lov-payment-method-agent>\n\n\n      <ps-lov-payment-method-individual *ngIf=\"!isUserAgent\" id=\"payment_method\"\n        [options]=\"paymentMethodIndividualOptions\">\n      </ps-lov-payment-method-individual>\n\n\n      <ps-file-upload-bs id=\"ps-file-upload\" [options]=\"fileUploadOptions\" (onPsFileSelect)='onFileSelect($event)'\n        (onPsFileDelete)='onFileDeleted($event)'></ps-file-upload-bs>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "gKqT":
    /*!***************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
      \***************************************************/

    /*! exports provided: OmniBasePage */

    /***/
    function gKqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OmniBasePage", function () {
        return OmniBasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./omni-base.page.html */
      "mVVo");
      /* harmony import */


      var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./omni-base.page.scss */
      "s2T5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/customization/psServices/util/common-cust-utils */
      "oS+F");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");

      var OmniBasePage = /*#__PURE__*/function () {
        function OmniBasePage() {
          _classCallCheck(this, OmniBasePage);

          this.isPageDisabled = false;
          this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
          this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]); // this.getScreenTranslations();
        }

        return _createClass(OmniBasePage, [{
          key: "init",
          value: function init() {
            this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
            this.customizationMap = this.commonProv.returnOperCustomization();
            var navParams = this.navigationServices.getAllParams();
            var formDisObj = {}; // let oper = PsCommonSettings.oper_ID;
            // PsCommonSettings.currentListOfSteps = {};

            if (navParams && navParams.readOnlypage === true) {
              formDisObj.IS_READONLY = 1; // Modified by Richie for #BUG 1259353

              if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
              }
            } else if (this.customizationMap) {
              formDisObj.IS_READONLY = 0;
              this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            } // End Richie
            // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif


            this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];

            if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
              this.getScreenTranslations(this.currentOperID);
            } // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif

          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.viewDidEnter();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.viewWillLeave();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.viewWillEnter();
          }
        }, {
          key: "viewWillEnter",
          value: function viewWillEnter() {}
        }, {
          key: "disableForm",
          value: function disableForm(formGroup) {
            var _this3 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
              }
            }
          }
        }, {
          key: "viewDidEnter",
          value: function viewDidEnter() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.dismissLoading();
            this.disableForm(this.baseFormGroup);
            src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
            this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
          }
        }, {
          key: "viewWillLeave",
          value: function viewWillLeave() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              willLeave: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              willLeave: true
            });
          } // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
          // added after all the changeEvents are finished to disable the form 

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this4 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this4.disableForm(_this4.baseFormGroup);

                _this4.isPageDisabled = true;
              }, 300);
            }
          } // AZDB-7529 - Start - AMANAOI250035

        }, {
          key: "getScreenTranslations",
          value: function getScreenTranslations(screenOperId) {
            var operationId = screenOperId ? screenOperId : 2222;
            var activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';

            if (operationId && activeLanguage) {
              this.commonProv.language.getOperTranslation(activeLanguage, operationId);
            }
          }
        }]);
      }();

      OmniBasePage.ctorParameters = function () {
        return [];
      };

      OmniBasePage.propDecorators = {
        psClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class']
        }]
      };
      OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], OmniBasePage);
      /***/
    },

    /***/
    "mVVo":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mVVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n";
      /***/
    },

    /***/
    "s2T5":
    /*!*****************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function s2T5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=47-es5.js.map