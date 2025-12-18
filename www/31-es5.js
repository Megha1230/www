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

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31], {
    /***/
    "Isfx":
    /*!*****************************************************!*\
      !*** ./src/app/pages/add-owner/add-owner.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Isfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3duZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "NDr7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-owner/add-owner.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function NDr7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <!-- Ownership Details -->\n    <ps-container-panel [options]=\"ownershipDetailsPanelOptions\" id=\"ownership_details_panel\">\n      <ps-lov-entity-type (onPsChange)=\"getIdTypes($event)\" [options]=\"entityTypeLovOptiops\"\n        id=\"entity_type\"></ps-lov-entity-type>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'existingCustomer'\" [options]=\"existingCustomerOptions\"\n        (onPsChange)=\"onExistingCustomerToggleChange($event)\">\n      </ps-select-toggle>\n      <ps-input-numeric [options]=\"cifNumberOptions\" id=\"cifNumber\">\n      </ps-input-numeric>\n      <ps-keyin-input id=\"full_name\" [options]=\"fullNameOptions\"></ps-keyin-input>\n      <ps-input-email id=\"email\" [options]=\"emailOptions\">\n      </ps-input-email>\n      <ps-entity-phone-number id=\"phone_number\" [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\n      <ps-complex-id-details #idDetailsComp [options]=\"complexIdDetailsOptions\"></ps-complex-id-details>\n      <ps-dropdown-nationalities [options]=\"nationalityOptions\"></ps-dropdown-nationalities>\n      <!-- <ps-lov-designation [options]=\"designationeLovOptiops\" id=\"designation\" (onPsChange)=\"designationChanged($event)\">\n      </ps-lov-designation>\n      <ps-select-dropdown [options]=\"designationeLovOptiops\" id=\"designation\" (onPsChange)=\"designationChanged($event)\"> -->\n      <!-- </ps-select-dropdown> -->\n      <ps-dropdown-designations [options]=\"designationOptions\"></ps-dropdown-designations>\n      <ps-input-numeric id=\"ownershipPercentage\" [options]=\"ownershipPercentageOptions\">\n      </ps-input-numeric>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'AuthSigner'\" [options]=\"AuthSignerOptions\">\n      </ps-select-toggle>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'authPowerofAttorney'\" [options]=\"authPowerofAttorneyOptions\">\n      </ps-select-toggle>\n      <ps-input-free-text [options]=\"username\"></ps-input-free-text>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"isOwnershipVerification\" [options]=\"ownerOnlineUserPanelOptions\"\n      id=\"owner_online_user_panel\">\n      <ps-select-toggle class=\"onboarding_toggles\" id=\"corp_user_toggle\" [options]=\"corpUserToggleOptions\">\n      </ps-select-toggle>\n    </ps-container-panel>\n  </ps-form-step>\n\n  <!-- ownerKYC -->\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n  </ps-form-step>\n\n  <!-- identity verification -->\n  <ps-form-step *psStep=\"'step3'\" step3 [id]=\"stepperOptions.namesofSteps[2]\">\n  </ps-form-step>\n\n  <!-- e Signing -->\n  <ps-form-step *psStep=\"'step4'\" step4 [id]=\"stepperOptions.namesofSteps[3]\">\n\n    <ps-complex-specimen [options]=\"specimenOptions\"></ps-complex-specimen>\n  </ps-form-step>\n\n  <!-- live ness detection -->\n  <ps-form-step *psStep=\"'step5'\" step5 [id]=\"stepperOptions.namesofSteps[4]\">\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step6'\" step6 [id]=\"stepperOptions.namesofSteps[5]\">\n    <ps-container-panel [options]=\"panelAttachmentOptions\" id=\"corp_attachment_details_panel\">\n      <ps-label class=\"upload-title\" [options]=\"fileUploadLabelDescription\" id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs id=\"ps-corp-file-upload\" [options]=\"corpFileUploadOptions\"></ps-file-upload-bs>\n      <!-- <ps-input-varchar [options]=\"commentOptions\" id=\"comments\"></ps-input-varchar> -->\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
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
            var _this = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this2 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this2.disableForm(_this2.baseFormGroup);

                _this2.isPageDisabled = true;
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
    "payI":
    /*!***************************************************!*\
      !*** ./src/app/pages/add-owner/add-owner.page.ts ***!
      \***************************************************/

    /*! exports provided: AddOwnerPage */

    /***/
    function payI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOwnerPage", function () {
        return AddOwnerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_owner_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-owner.page.html */
      "NDr7");
      /* harmony import */


      var _add_owner_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-owner.page.scss */
      "Isfx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.component */
      "y70R");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");

      var AddOwnerPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function AddOwnerPage(navService, omniPull, events) {
          var _this3;

          _classCallCheck(this, AddOwnerPage);

          _this3 = _callSuper(this, AddOwnerPage);
          _this3.navService = navService;
          _this3.omniPull = omniPull;
          _this3.events = events;
          _this3.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this3.addOwnerVO = {};
          _this3.isOwnershipVerification = _this3.commonProv.activePage.value.operID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWNERSHIP_VERIFICATION_OPER_ID;
          _this3.stepperOptions = {
            widgetStepper: _this3.isOwnershipVerification,
            isHorizontalStepper: true,
            stepperName: 'owner_stepper',
            numberOfSteps: _this3.isOwnershipVerification ? 6 : 1,
            namesofSteps: !_this3.isOwnershipVerification ? ['owner_details_step'] : ['owner_details_step', 'owner_ekyc_step', 'identity_verification_step', 'signature_specimen_step', 'liveness_detection_step', 'atttachment_step'],
            group: _this3.formGroup,
            submitOptions: {
              group: _this3.formGroup,
              submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonSettings"].serviceUrl.commonSubmitAction
            },
            requestObject: _this3.addOwnerVO,
            showReport: false
          };
          _this3.ownershipDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'ownership_details_key',
            iconName: 'document',
            expanded: true
          };
          _this3.entityTypeLovOptiops = {
            group: _this3.formGroup,
            fcName: 'entityType'
          };
          _this3.existingCustomerOptions = {
            labelKey: 'existing_customer_key',
            placeHolder: 'existing_customer_key',
            group: _this3.formGroup,
            fcName: 'existingCustomer',
            psClass: 'toggleColor'
          };
          _this3.cifNumberOptions = {
            placeHolder: 'enter_cif_number_key',
            labelKey: 'cif_number_key',
            group: _this3.formGroup,
            fcName: 'cifNumber',
            forceTriggerChange: true
          };
          _this3.ownershipPercentageOptions = {
            fcName: 'ownershipPercentage',
            group: _this3.formGroup,
            labelKey: 'ownership_percentage_key',
            placeHolder: 'enter_ownership_percentage_key'
          };
          _this3.AuthSignerOptions = {
            labelKey: 'authorized_signer_key',
            placeHolder: 'authorized_signer_key',
            group: _this3.formGroup,
            fcName: 'authSigner',
            psClass: 'toggleColor'
          };
          _this3.authPowerofAttorneyOptions = {
            labelKey: 'authorized_power_of_attorney_key',
            placeHolder: 'authorized_power_of_attorney_key',
            group: _this3.formGroup,
            fcName: 'authPowerofAttorney',
            psClass: 'toggleColor'
          };
          _this3.fullNameOptions = {
            group: _this3.formGroup,
            fcName: 'fullName',
            labelKey: 'full_name_key',
            placeHolder: 'enter_full_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this3.emailOptions = {
            group: _this3.formGroup,
            fcName: 'email',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key'
          };
          _this3.phoneNumberOptions = {
            group: _this3.formGroup,
            labelKey: 'mobile_number_key',
            placeHolder: 'mobile_key',
            fcName: 'mobileNumber'
          };
          _this3.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this3.formGroup,
              revertToOldValue: false
            },
            idNumberOptions: {
              labelKey: 'id_number_key',
              placeHolder: 'add_id_number_key',
              fcName: 'idNumber',
              group: _this3.formGroup
            },
            dateExpiryOptions: {
              labelKey: 'expiry_date_key',
              placeHolder: 'enter_expiry_date_key',
              fcName: 'idExpiryDate',
              group: _this3.formGroup
            },
            countriesOptions: {
              placeHolder: 'country_of_issuance_key',
              labelKey: 'country_of_issuance_key',
              fcName: 'idCountry',
              group: _this3.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'idIssueDate',
              group: _this3.formGroup
            }
          };
          _this3.nationalityOptions = {
            fcName: 'nationality',
            group: _this3.formGroup,
            labelKey: 'nationality_key',
            placeHolder: 'enter_nationality_key',
            revertToOldValue: false,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this3.designationOptions = {
            fcName: 'designation',
            group: _this3.formGroup,
            labelKey: 'designation_key',
            placeHolder: 'enter_designation_key',
            revertToOldValue: false,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this3.username = {
            group: _this3.formGroup,
            fcName: 'ownerUserName',
            placeHolder: 'user_name_key',
            labelKey: 'name_key',
            iconOptions: {
              iconName: 'user'
            }
          };
          _this3.ownerOnlineUserPanelOptions = {
            isExpandable: true,
            labelKey: 'online_user_key',
            iconName: 'document',
            expanded: true
          };
          _this3.corpUserToggleOptions = {
            labelKey: 'do_you_want_to_become_a_corporate_user_for_the_company_key',
            group: _this3.formGroup,
            fcName: 'corporateUser',
            psClass: 'toggleColor'
          };
          _this3.panelAttachmentOptions = {
            isExpandable: true,
            labelKey: 'attachment_details_key',
            expanded: true
          };
          _this3.fileUploadLabelDescription = {
            labelKey: 'onboarding_label_upload_description_key'
          };
          _this3.corpFileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: _this3.formGroup,
            uploadIconName: 'attach'
          };
          _this3.specimenOptions = {
            group: _this3.formGroup,
            fcName: 'signatureSpecimen',
            labelKey: 'signature_key'
          };
          _this3.isOwner = false;
          return _this3;
        }

        _inherits(AddOwnerPage, _src_app_pages_omni_b);

        return _createClass(AddOwnerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(AddOwnerPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.commonProv.copyObject(this.addOwnerVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
            this.userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
            this.isOwner = this.userInformation.omniUserVO.IS_OWNER_YN == "Y" ? true : false;
            this.isOwnershipVerification = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonSettings"].oper_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OWNERSHIP_VERIFICATION_OPER_ID;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(AddOwnerPage, "ionViewDidEnter", this, 3)([]);

            if (this.isOwnershipVerification) {
              this.getOwnersPredefinedData(); //moved here by Marina TP:##1488584 as populating owner's data and saving it as a draft is not needed unless the operation is ownership verification only 

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.entityTypeLovOptiops.fcName, this.existingCustomerOptions.fcName, this.cifNumberOptions.fcName, this.fullNameOptions.fcName, this.emailOptions.fcName, this.phoneNumberOptions.fcName, this.phoneNumberOptions.fcName, this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName, this.complexIdDetailsOptions.idNumberOptions.fcName, this.complexIdDetailsOptions.issueDateOptions.fcName, this.complexIdDetailsOptions.dateExpiryOptions.fcName, this.complexIdDetailsOptions.countriesOptions.fcName, this.nationalityOptions.fcName, this.designationOptions.fcName, this.ownershipPercentageOptions.fcName, this.AuthSignerOptions.fcName, this.authPowerofAttorneyOptions.fcName], 1);
            } //added by Marina upon PM updates on FRS 
            //if the representative is an owner and is editing his own record set the entity type as individual and disabled
            else {
              if (this.isOwner && this.addOwnerVO && this.userInformation.userName === this.addOwnerVO[this.username.fcName]) {
                this.commonProv.setValInsideNestedObj(this.entityTypeLovOptiops.fcName, 'V', this.addOwnerVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.entityTypeLovOptiops.fcName], 1);

                if (this.addOwnerVO.name) {
                  //added by ghada, tp1536097 for handling save draft case by checking if saved recored draft name property is returned 
                  // to apply the same custmoization of create mode  
                  var ownerUserNameCust = this.commonProv.getElementValidations(this.username.fcName);
                  this.commonProv.setValInsideNestedObj(this.username.fcName, ownerUserNameCust === null || ownerUserNameCust === void 0 ? void 0 : ownerUserNameCust.DEFAULT_VALUE, this.addOwnerVO);
                }
              }
            }
          } //added by Marina TP:#1496690 to get the idTypes allowed from admin for the chosen entity type

        }, {
          key: "getIdTypes",
          value: function getIdTypes(event) {
            this.idDetailsComp.idTypeComp.loadIdTypes(event.itemValue);
          } //edited by Marina TP:#1487761 to make fullName, idNumber, idType, expiryDate,nationality and designation fields 
          //visiblity depends on the existingCustomerToggle value and to nullify any hidden field 

        }, {
          key: "onExistingCustomerToggleChange",
          value: function onExistingCustomerToggleChange(event) {
            //Added by Marina TP:#1488584 check on event.value type as when the form is populated by old record the value is string
            if (event && event.newValue != undefined) {
              if (typeof event.newValue == 'string') {
                event.newValue = event.newValue == 'true'; // ? false : true;
              }

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifNumberOptions.fcName], event.newValue);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fullNameOptions.fcName, this.complexIdDetailsOptions.idNumberOptions.fcName, this.complexIdDetailsOptions.dateExpiryOptions.fcName, this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName, this.nationalityOptions.fcName, this.designationOptions.fcName], !event.newValue);

              if (event.newValue == false) {
                this.commonProv.setValInsideNestedObj(this.cifNumberOptions.fcName, null, this.addOwnerVO);
              } else {
                this.commonProv.setValInsideNestedObj(this.fullNameOptions.fcName, null, this.addOwnerVO);
                this.commonProv.setValInsideNestedObj(this.complexIdDetailsOptions.idNumberOptions.fcName, null, this.addOwnerVO);
                this.commonProv.setValInsideNestedObj(this.complexIdDetailsOptions.dateExpiryOptions.fcName, null, this.addOwnerVO);
                this.commonProv.setValInsideNestedObj(this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName, null, this.addOwnerVO);
                this.commonProv.setValInsideNestedObj(this.nationalityOptions.fcName, null, this.addOwnerVO);
                this.commonProv.setValInsideNestedObj(this.designationOptions.fcName, null, this.addOwnerVO);
              }
            }
          }
        }, {
          key: "designationChanged",
          value: function designationChanged(event) {// if (event && event.itemValue) {
            //   this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_VISIBLE, [this.ownershipPercentageOptions.fcName], event.itemValue === 'S' ? 1 : 0)
            // }
          } //edited by Marina after PM clarification that representative-owner data shouldn't be populated unless in edit mode which is done by populating the VO through navParams 

        }, {
          key: "getOwnersPredefinedData",
          value: function getOwnersPredefinedData() {
            var _this4 = this;

            this.omniPull.returnOwnerDetails({}).then(function (val) {
              var data = val.gridModel;

              _this4.commonProv.dismissLoading();

              if (data.length > 0) {
                var VO = data[0];
                VO.submitFieldValueMap.actionType = 'save';
                VO.submitFieldValueMap.dataSaveId = Number(VO.dataSaveId);

                _this4.events.publish('draft:navigation', VO.submitFieldValueMap);

                _this4.commonProv.dismissLoading();
              }
            })["catch"](function (err) {
              _this4.commonProv.dismissLoading();
            });
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      AddOwnerPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]
        }, {
          type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_12__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]
        }];
      };

      AddOwnerPage.propDecorators = {
        idDetailsComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['idDetailsComp']
        }]
      };
      AddOwnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'add-owner',
        template: _raw_loader_add_owner_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_owner_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"], _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_12__["OmniPullService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]])], AddOwnerPage);
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
//# sourceMappingURL=31-es5.js.map