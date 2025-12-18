(function () {
  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18], {
    /***/
    "5hBt":
    /*!************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component.html ***!
      \************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hBt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ps-container-complex class=\"ps-complex-visa-applicant-info\"> -->\r\n<ps-container-panel [options]=\"panelOptions2\">\r\n    <ps-input-varchar [options]=\"firstNameOptions\"></ps-input-varchar>\r\n    <ps-input-varchar [options]=\"lastNameOptions\"></ps-input-varchar>\r\n    <ps-input-email [options]=\"userEmailOptions\"></ps-input-email>\r\n    <ps-entity-phone-number [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\r\n    <ps-input-numeric [options]=\"passportNumberOptions\"></ps-input-numeric>\r\n    <ps-input-varchar [options]=\"occupationOptions\"></ps-input-varchar>\r\n    <ps-dropdown-nationalities [options]=\"nationalityOptions\"></ps-dropdown-nationalities>\r\n    <ps-date-day-month-year-future [options]=\"departingDateOptions\"></ps-date-day-month-year-future>\r\n    <ps-date-day-month-year-future [options]=\"returningDateOptions\"></ps-date-day-month-year-future>\r\n    <ps-dropdown-nationalities [options]=\"visaCountryOptions\"></ps-dropdown-nationalities>\r\n    <ps-file-upload-bs [options]=\"passportPhotoUploadOptions\"></ps-file-upload-bs>\r\n</ps-container-panel>\r\n<!-- </ps-container-complex> -->";
      /***/
    },

    /***/
    "7Go/":
    /*!********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component.ts ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: PscomplexVisaApplicantDetailsComponent */

    /***/
    function Go_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PscomplexVisaApplicantDetailsComponent", function () {
        return PscomplexVisaApplicantDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_visa_applicant_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-visa-applicant-details.component.html */
      "5hBt");
      /* harmony import */


      var _ps_complex_visa_applicant_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-visa-applicant-details.component.scss */
      "m/j0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PscomplexVisaApplicantDetailsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PscomplexVisaApplicantDetailsComponent(commonProv) {
          var _this;

          _classCallCheck(this, PscomplexVisaApplicantDetailsComponent);

          _this = _callSuper(this, PscomplexVisaApplicantDetailsComponent, [commonProv, commonProv.logger]);
          _this.commonProv = commonProv;
          _this.visaFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.passportPhotoUploadOptions = {
            fcName: 'passportPhoto',
            group: _this.visaFormGroup,
            multiple: false,
            labelKey: 'passport_photo_key'
          };
          _this.visaCountryOptions = {
            fcName: 'visaCountry',
            group: _this.visaFormGroup,
            labelKey: 'visa_country_key',
            placeHolder: 'visa_country_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.departingDateOptions = {
            fcName: 'departingDate',
            group: _this.visaFormGroup,
            labelKey: 'departing_date_key',
            placeHolder: 'enter_the_departing_date_key'
          };
          _this.returningDateOptions = {
            fcName: 'returningDate',
            group: _this.visaFormGroup,
            labelKey: 'returning_date_key',
            placeHolder: 'enter_the_returning_date_key'
          };
          _this.nationalityOptions = {
            fcName: 'nationality',
            group: _this.visaFormGroup,
            labelKey: 'nationality_key',
            placeHolder: 'enter_nationality_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.firstNameOptions = {
            fcName: 'firstName',
            group: _this.visaFormGroup,
            labelKey: 'first_name_key',
            placeHolder: 'enter_first_name_key'
          };
          _this.lastNameOptions = {
            fcName: 'lastName',
            group: _this.visaFormGroup,
            labelKey: 'last_name_key',
            placeHolder: 'enter_last_name_key'
          };
          _this.occupationOptions = {
            fcName: 'occupation',
            group: _this.visaFormGroup,
            labelKey: 'occupation_key',
            placeHolder: 'enter_occupation_key'
          };
          _this.userEmailOptions = {
            fcName: 'email',
            group: _this.visaFormGroup,
            labelKey: 'email_key',
            placeHolder: 'enter_email_key'
          };
          _this.phoneNumberOptions = {
            fcName: 'phone',
            group: _this.visaFormGroup,
            labelKey: 'phone_number_key',
            placeHolder: 'phone_number_key'
          };
          _this.passportNumberOptions = {
            fcName: 'passportNumber',
            group: _this.visaFormGroup,
            labelKey: 'passport_number_key',
            placeHolder: 'enter_passport_number_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.panelOptions2 = {
            isExpandable: true,
            labelKey: 'visa_applicant_details_key',
            iconName: 'document',
            expanded: true
          };
          return _this;
        }

        _inherits(PscomplexVisaApplicantDetailsComponent, _src_app_commonSRC_ps);

        return _createClass(PscomplexVisaApplicantDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PscomplexVisaApplicantDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }];
      };

      PscomplexVisaApplicantDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-visa-applicant-details',
        template: _raw_loader_ps_complex_visa_applicant_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_visa_applicant_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]])], PscomplexVisaApplicantDetailsComponent);
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
            var _this2 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this3 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this3.disableForm(_this3.baseFormGroup);

                _this3.isPageDisabled = true;
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
    "hZhG":
    /*!*********************************************************!*\
      !*** ./src/app/pages/visa-request/visa-request.page.ts ***!
      \*********************************************************/

    /*! exports provided: VisaRequestPage */

    /***/
    function hZhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisaRequestPage", function () {
        return VisaRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_visa_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./visa-request.page.html */
      "xGir");
      /* harmony import */


      var _visa_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./visa-request.page.scss */
      "xyne");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_visa_applicant_details_ps_complex_visa_applicant_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component */
      "7Go/");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var VisaRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function VisaRequestPage(commonService, logger) {
          var _this4;

          _classCallCheck(this, VisaRequestPage);

          _this4 = _callSuper(this, VisaRequestPage);
          _this4.commonService = commonService;
          _this4.logger = logger;
          _this4.visaRequestVO = {};
          _this4.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this4.options = {
            outletName: 'multi-visa-application',
            requestObject: _this4.visaRequestVO,
            type: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].OUTLET_TYPE_COMPONENT,
            segmentName: 'visa-',
            component: src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_visa_applicant_details_ps_complex_visa_applicant_details_component__WEBPACK_IMPORTED_MODULE_5__["PscomplexVisaApplicantDetailsComponent"],
            group: _this4.formGroup,
            operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MULTI_VISA_REQUEST_OPER_ID
          };
          _this4.panelOptions1 = {
            isExpandable: true,
            labelKey: 'visa_application_details_key',
            iconName: 'document',
            expanded: true
          };
          _this4.applicationType = {
            labelKey: 'application_type_key',
            fcName: 'applicationType',
            group: _this4.formGroup,
            placeHolder: 'please_select_application_type_key',
            selectDefaultItem: {
              itemValue: 'INDIVIDUAL',
              description: 'individual_key',
              selectedObj: {
                itemValue: 'INDIVIDUAL',
                description: 'individual_key'
              }
            },
            listOfOptions: [{
              itemValue: 'INDIVIDUAL',
              description: 'individual_key',
              selectedObj: {
                itemValue: 'INDIVIDUAL',
                description: 'individual_key'
              }
            }, {
              itemValue: 'GROUP',
              description: 'group_key',
              selectedObj: {
                itemValue: 'GROUP',
                description: 'group_key'
              }
            }]
          };
          _this4.transactionAmount = {
            labelKey: 'transaction_amount_key',
            placeHolder: 'transaction_amount_key',
            fcName: 'transactionAmount',
            group: _this4.formGroup,
            type: 'amount',
            decimalPoints: 3
          };
          _this4.currencyOptions = {
            fcName: 'currencyType',
            group: _this4.formGroup,
            labelKey: 'transaction_currency_key',
            placeHolder: 'transaction_currency_key',
            iconOptions: {
              iconName: 'filter-report-icon'
            }
          };
          _this4.transactionReceiptOptions = {
            multiple: false,
            fcName: 'transactionReceipt',
            group: _this4.formGroup,
            labelKey: 'transaction_reciept_key',
            uploadIconName: 'attach'
          };
          _this4.applicantIsMe = {
            fcName: 'applicant_is_me',
            group: _this4.formGroup,
            labelKey: 'applicant_is_me_key'
          };
          _this4.numberOfApplicants = {
            labelKey: 'number_of_applicants_key',
            fcName: 'numberOfApplicants',
            group: _this4.formGroup
          };
          _this4.appType = true;
          _this4.totalApplicants = 1;
          _this4.userInformation = {};
          _this4.defaultUserInfoKeyMapData = [{
            'key': 'nationality',
            'value': null
          }, {
            'key': 'firstName',
            'value': null
          }, {
            'key': 'lastName',
            'value': null
          }, {
            'key': 'occupation',
            'value': null
          }, {
            'key': 'email',
            'value': null
          }, {
            'key': 'phone',
            'value': null
          }];
          return _this4;
        }

        _inherits(VisaRequestPage, _omni_base_omni_base_);

        return _createClass(VisaRequestPage, [{
          key: "onToggleChange",
          value: function onToggleChange(event) {
            if (event.newValue) {
              this.loadUserInformation();
            } else if (!event.newValue && event.oldValue) {
              this.removeUserInformation();
            }
          }
        }, {
          key: "onApplicationTypeChange",
          value: function onApplicationTypeChange(event) {
            if (event.itemValue === 'GROUP') {
              this.appType = false;
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.applicantIsMe.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.numberOfApplicants.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.applicantIsMe.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.numberOfApplicants.fcName], 1);

              if (JSON.stringify(this.userInformation) != '{}') {
                this.removeUserInformation();
              }
            } else {
              this.appType = true;
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.applicantIsMe.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.numberOfApplicants.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.applicantIsMe.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.numberOfApplicants.fcName], 0);
            }

            this.options.appType = event.itemValue;
          }
        }, {
          key: "numberOfApplicantsChange",
          value: function numberOfApplicantsChange(event) {
            if (event === 'unlimited') {
              event = 1;
            }

            if (this.totalApplicants < event) {
              this.totalApplicants = event;
              this.multiTemplate.addNewOutlet();
            }

            if (this.totalApplicants > event) {
              this.totalApplicants = event;
              this.multiTemplate.removePanel();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(VisaRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
          }
        }, {
          key: "loadUserInformation",
          value: function loadUserInformation() {
            this.userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
            var filledUserData = [{
              'key': 'nationality',
              'value': this.userInformation.customerInfoCO.countryCode
            }, {
              'key': 'firstName',
              'value': this.userInformation.customerInfoCO.shortName
            }, {
              'key': 'lastName',
              'value': this.userInformation.customerInfoCO.longName
            }, {
              'key': 'occupation',
              'value': this.userInformation.customerInfoCO.occupation
            }, {
              'key': 'email',
              'value': this.userInformation.customerInfoCO.coreEmail
            }, {
              'key': 'phone',
              'value': this.userInformation.customerInfoCO.userMobileNumber
            }];
            this.multiTemplate.setInfoToVO('visa-1', filledUserData);
          }
        }, {
          key: "removeUserInformation",
          value: function removeUserInformation() {
            this.multiTemplate.setInfoToVO('visa-1', this.defaultUserInfoKeyMapData);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(VisaRequestPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_DEFAULT_VALUE, [this.applicantIsMe.fcName], false);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_DEFAULT_VALUE, [this.applicationType.fcName], 'INDIVIDUAL');
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_DEFAULT_VALUE, ['visaCountry'], '784');
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"]);

      VisaRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }];
      };

      VisaRequestPage.propDecorators = {
        multiTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['multiTemplateRef']
        }]
      };
      VisaRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visa-request',
        template: _raw_loader_visa_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visa_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])], VisaRequestPage);
      /***/
    },

    /***/
    "m/j0":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component.scss ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m_j0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXZpc2EtYXBwbGljYW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
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
    },

    /***/
    "xGir":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visa-request/visa-request.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xGir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-multi-outlets [id]=\"options.outletName\" [outletOptions]=\"options\" #multiTemplateRef>\r\n    <ng-container multiPageData>\r\n        <ps-container-panel [options]=\"panelOptions1\">\r\n            <ps-select-dropdown [options]=\"applicationType\" (onPsChange)=\"onApplicationTypeChange($event)\">\r\n            </ps-select-dropdown>\r\n            <ps-input-amount [options]=\"transactionAmount\"></ps-input-amount>\r\n            <ps-dropdown-currencies id=\"'currency' + id\" [options]=\"currencyOptions\"></ps-dropdown-currencies>\r\n            <ps-file-upload-bs [options]=\"transactionReceiptOptions\"></ps-file-upload-bs>\r\n            <ps-select-toggle class=\"visa-request-margin-top\" *ngIf=\"appType\" [options]=\"applicantIsMe\"\r\n                (onPsChange)=\"onToggleChange($event)\">\r\n            </ps-select-toggle>\r\n            <ps-input-count class=\"visa-request-margin-top\" *ngIf=\"!appType\" [options]=\"numberOfApplicants\"\r\n                (onPsChange)=\"numberOfApplicantsChange($event)\"></ps-input-count>\r\n        </ps-container-panel>\r\n    </ng-container>\r\n</ps-template-multi-outlets>";
      /***/
    },

    /***/
    "xyne":
    /*!***********************************************************!*\
      !*** ./src/app/pages/visa-request/visa-request.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function xyne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNhLXJlcXVlc3QucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=18-es5.js.map