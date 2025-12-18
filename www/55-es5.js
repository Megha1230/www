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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55], {
    /***/
    "WvFu":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/personalize-my-quick-links/personalize-my-quick-links.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function WvFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbGl6ZS1teS1xdWljay1saW5rcy5wYWdlLnNjc3MifQ== */";
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
    "vZnc":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/personalize-my-quick-links/personalize-my-quick-links.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: PersonalizeMyQuickLinksPage */

    /***/
    function vZnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalizeMyQuickLinksPage", function () {
        return PersonalizeMyQuickLinksPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_personalize_my_quick_links_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./personalize-my-quick-links.page.html */
      "xqXA");
      /* harmony import */


      var _personalize_my_quick_links_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personalize-my-quick-links.page.scss */
      "WvFu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var PersonalizeMyQuickLinksPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function PersonalizeMyQuickLinksPage(commonService, logger, omniPull) {
          var _this3;

          _classCallCheck(this, PersonalizeMyQuickLinksPage);

          _this3 = _callSuper(this, PersonalizeMyQuickLinksPage);
          _this3.commonService = commonService;
          _this3.logger = logger;
          _this3.omniPull = omniPull;
          _this3.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this3.operationsArray = [];
          _this3.selectedOperationsList = [];
          _this3.quickLinksList = [];
          _this3.personalizationQuickLinksPages = [];
          _this3.operArrayList = [];
          _this3.options = {
            group: _this3.formGroup,
            submitOptions: {
              extraParams: {
                quickLinks: []
              },
              group: _this3.formGroup,
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.updateUserInfoProfile,
              preCallFunction: {
                func: function func(response) {
                  var _this4 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this4.executionClass.updateSubmitQueryParams(response));
                  });
                },
                executionClass: _this3,
                params: [_this3]
              },
              postCallFunction: {
                func: function func(response) {
                  var _this5 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this5.executionClass.updateQuickLinksSession(response));
                  });
                },
                executionClass: _this3,
                params: [_this3]
              }
            }
          };
          _this3.defaultQuickLinksList = [];
          return _this3;
        }

        _inherits(PersonalizeMyQuickLinksPage, _omni_base_omni_base_);

        return _createClass(PersonalizeMyQuickLinksPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PERSONALIZE_MY_QUICK_LINK_OPER_ID;
            this.userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);

            if (this.userInformation && this.userInformation.businessProfiles.length > 0) {
              this.prepareToggleOperations(this.userInformation.businessProfiles);
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(PersonalizeMyQuickLinksPage, "ionViewDidEnter", this, 3)([]);

            for (var i = 0; i < this.operationsArray.length; i++) {
              if (this.operationsArray[i].isSelected) {
                this.formGroup.controls[this.operationsArray[i].fcName].setValue(true);
              }
            }
          }
        }, {
          key: "updateQuickLinksSession",
          value: function updateQuickLinksSession(response) {
            if (response.outputType === 'S') {
              this.commonProv.session.remove(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].QUICK_LINKS_MENUS);
              this.commonProv.session.append(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].QUICK_LINKS_MENUS, this.quickLinksList.length > 0 ? this.quickLinksList : []);

              if (this.personalizationQuickLinksPages.length !== 0) {
                this.omniPull.omniCommon.quickLinksMenuPages = this.personalizationQuickLinksPages;
              } else {
                this.omniPull.omniCommon.quickLinksMenuPages = [];
                this.defaultQuickLinksList = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU : [];

                if (this.userInformation && this.userInformation.businessProfiles.length > 0) {
                  for (var i = 0; i < this.defaultQuickLinksList.length; i++) {
                    var row = this.defaultQuickLinksList[i];
                    this.addQuickLinkPage(row);
                  }

                  this.omniPull.omniCommon.quickLinksMenuPages = this.personalizationQuickLinksPages;
                }
              }
            }
          }
        }, {
          key: "disableToggleValidation",
          value: function disableToggleValidation() {
            for (var i = 0; i < this.operationsArray.length; i++) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.operationsArray[i].fcName], 0);
            }
          }
        }, {
          key: "prepareToggleOperations",
          value: function prepareToggleOperations(list) {
            var _this6 = this;

            this.operationsArray = [];
            this.quickLinksList = this.commonProv.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].QUICK_LINKS_MENUS) || []; //If incase the quicklin list is empty it should set with defaultQuicklink menu values fetching from ps-config.json

            if (this.userInformation && this.userInformation.businessProfiles.length > 0) {
              if (this.quickLinksList.length == 0) {
                var defaultQuickLinkOperations = [];
                var defaultQuickLinkArray = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.DEFAULT_QUICK_LINKS_MENU : [];

                for (var i = 0; i < defaultQuickLinkArray.length; i++) {
                  defaultQuickLinkOperations.push({
                    "operId": defaultQuickLinkArray[i]
                  });
                }

                this.quickLinksList = defaultQuickLinkOperations;
              }

              var _loop = function _loop() {
                var row = list[_i];
                var busProfile = row.operVO;

                if (row.operVO.BUSINESS_PROFILE_YN !== 'N' && row.operAppChnlVO.CATEG === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CATEGORY_MENU) {
                  var userOperation = _this6.quickLinksList ? _this6.quickLinksList.find(function (obj) {
                    return obj.operId === row.operVO.OPER_ID;
                  }) : undefined;
                  var operation = {
                    labelKey: row.operVO.OPER_NAME ? row.operVO.OPER_NAME : row.operVO.DESCRIPTION,
                    group: _this6.formGroup,
                    fcName: row.operVO.OPER_NAME ? row.operVO.OPER_NAME : row.operVO.DESCRIPTION,
                    psClass: 'toggleColor',
                    isSelected: userOperation ? true : false,
                    iconName: row.operAppChnlVO.ICON_NAME
                  };

                  _this6.operationsArray.push(operation);

                  _this6.operArrayList.push(row.operVO);

                  if (operation.isSelected) {
                    _this6.addQuickLinkPage(row.operVO.OPER_ID);
                  }
                }
              };

              for (var _i = 0; _i < list.length; _i++) {
                _loop();
              }
            }
          }
        }, {
          key: "onToggleChanged",
          value: function onToggleChanged(event, itemOption) {
            var _a;

            if (event.newValue === true) {
              if (itemOption) {
                var result = this.operArrayList.find(function (e) {
                  return e.OPER_NAME === itemOption.labelKey;
                });
                this.selectedOperationsList.push(result);
                var quickLinkresult = (_a = this.quickLinksList) === null || _a === void 0 ? void 0 : _a.findIndex(function (e) {
                  return e.operId === result.OPER_ID;
                });

                if (quickLinkresult == -1) {
                  this.quickLinksList.push({
                    operId: result.OPER_ID
                  });
                }

                var page = this.omniPull.omniCommon.quickLinksMenuPages.find(function (e) {
                  return e.operID === result.OPER_ID;
                });
                var checkOperExistOnArrayPersonalizationQuickLinksPages = this.personalizationQuickLinksPages.find(function (e) {
                  return e.operID === result.OPER_ID;
                });

                if (!page || !checkOperExistOnArrayPersonalizationQuickLinksPages) {
                  this.addQuickLinkPage(result.OPER_ID);
                }
              }

              this.disableToggleValidation();
            } else {
              if (this.selectedOperationsList) {
                var _result = this.selectedOperationsList.find(function (e) {
                  return e.OPER_NAME === itemOption.labelKey;
                });

                var selectedItem = this.selectedOperationsList.indexOf(_result);

                if (selectedItem !== -1) {
                  this.selectedOperationsList.splice(selectedItem, 1);
                }

                var quickLinkItemIndex = this.quickLinksList.findIndex(function (e) {
                  return e.operId === _result.OPER_ID;
                });

                if (quickLinkItemIndex !== -1) {
                  this.quickLinksList.splice(quickLinkItemIndex, 1);
                }

                var pageIndex = this.personalizationQuickLinksPages.findIndex(function (e) {
                  return e.operID === _result.OPER_ID;
                });

                if (selectedItem !== -1) {
                  this.personalizationQuickLinksPages.splice(pageIndex, 1);
                }
              }
            }
          }
        }, {
          key: "updateSubmitQueryParams",
          value: function updateSubmitQueryParams(req) {
            this.commonProv.copyObject(this.options.submitOptions.extraParams, {
              quickLinks: this.selectedOperationsList
            }, false, true);
          }
        }, {
          key: "addQuickLinkPage",
          value: function addQuickLinkPage(operId) {
            var row = this.userInformation.businessProfiles.find(function (e) {
              return e.operVO.OPER_ID === operId;
            });
            var childrenArray = [];

            if (row.operAppChnlVO.CATEG === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CATEGORY_MENU && row.operVO.BUSINESS_PROFILE_YN !== 'N') {
              //  id: #1272236 -  Details :Updated by neethu  - Date:21/10/2021 - Desc:Chceking the operation catergory=M before adding to  array personalizationQuickLinksPages
              if (row.children !== undefined) {
                if (row.children.length > 0) {
                  for (var i = 0; i < row.children.length; i++) {
                    var child = row.children[i];

                    if (child.operVO.BUSINESS_PROFILE_YN !== 'N') {
                      var childpage = void 0;
                      childpage = {
                        title: child.operVO.OPER_NAME ? child.operVO.OPER_NAME : child.operVO.DESCRIPTION,
                        icon: child.operAppChnlVO.ICON_NAME,
                        component: child.operAppChnlVO.PAGE_HREF != null ? child.operAppChnlVO.PAGE_HREF : src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].HASH_INPUT,
                        children: [],
                        hasParent: false,
                        operID: child.operVO.OPER_ID,
                        collapse: true,
                        hide: true,
                        param: child.operAppChnlVO.PARAM !== undefined ? JSON.parse(child.operAppChnlVO.PARAM) : child.operAppChnlVO.PARAM,
                        isMaker: child.businessProfileOperVO ? child.businessProfileOperVO.MAKER_YN == 'Y' ? true : false : false,
                        isChecker: child.businessProfileOperVO ? child.businessProfileOperVO.CHECKER_YN == 'Y' ? true : false : false
                      };
                      child.children ? childpage.isParent = true : childpage.isChildLeaf = true;
                      childrenArray.push(childpage);
                    }
                  }
                }
              }

              var page;
              page = {
                title: row.operVO.OPER_NAME ? row.operVO.OPER_NAME : row.operVO.DESCRIPTION,
                icon: row.operAppChnlVO.ICON_NAME,
                component: row.operAppChnlVO.PAGE_HREF != null ? row.operAppChnlVO.PAGE_HREF : src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].HASH_INPUT,
                children: childrenArray,
                hasParent: false,
                operID: row.operVO.OPER_ID,
                collapse: true,
                hide: true,
                param: row.operAppChnlVO.PARAM !== undefined ? JSON.parse(row.operAppChnlVO.PARAM) : row.operAppChnlVO.PARAM,
                isMaker: row.businessProfileOperVO ? row.businessProfileOperVO.MAKER_YN == 'Y' ? true : false : false,
                isChecker: row.businessProfileOperVO ? row.businessProfileOperVO.CHECKER_YN == 'Y' ? true : false : false
              };
              row.children ? page.isParent = true : page.isChildLeaf = true;
              var isDuplicateOperation = this.personalizationQuickLinksPages.find(function (e) {
                return e.operID === page.operID;
              });

              if (!isDuplicateOperation) {
                this.personalizationQuickLinksPages.push(page);
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__["OmniBasePage"]);

      PersonalizeMyQuickLinksPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      PersonalizeMyQuickLinksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'personalize-my-quick-links',
        template: _raw_loader_personalize_my_quick_links_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personalize_my_quick_links_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], PersonalizeMyQuickLinksPage);
      /***/
    },

    /***/
    "xqXA":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personalize-my-quick-links/personalize-my-quick-links.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xqXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-form [options]=\"options\">\n\n  <ng-container *ngFor=\"let itemOption of operationsArray; let idx=index\">\n    <div class=\"ps-quick-link-item-container\">\n      <ps-action-icon class=\"ps-quick-link-item-icon\" [options]=\"{ iconName:itemOption.iconName }\">\n      </ps-action-icon>\n      <ps-select-toggle class=\"ps-quick-link-item-toogle\" [options]=\"itemOption\"\n        (onPsChange)=\"onToggleChanged($event,itemOption)\">\n      </ps-select-toggle>\n    </div>\n  </ng-container>\n</ps-template-form>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=55-es5.js.map