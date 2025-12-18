(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44], {
    /***/
    "+Kqw":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/facility-request/facility-request.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kqw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\"\n    (onNextPreviousStepper)=\"showGridValidation()\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"panelOptionsStep1\" id=\"facility_req_panel1\">\n\n            <ps-input-display-only id=\"'accountCifBranch' + id\" [options]=\"branchOptions\" *ngIf=\"enableCifBranch\">\n            </ps-input-display-only>\n\n            <ps-complex-facility-request [options]=\"facilityRequestOptions\" (amountChange)=\"onAmountChange($event)\"\n                (facilityTypeChange)=\"onFacilityTypeChanged($event)\" (downPaymentChange)='onDownpaymentChange($event)'\n                (fileSelected)=\"selectFile($event)\">\n            </ps-complex-facility-request>\n        </ps-container-panel>\n\n        <ps-container-panel *ngIf=\"!defaultVO.navigatedFromFL\" [options]=\"attachmentPanelOptions\" id=\"attachment_panel\">\n\n            <ps-file-upload-bs [options]=\"fileUploadOptions\" (onPsFileSelect)=\"selectFile($event)\"></ps-file-upload-bs>\n\n        </ps-container-panel>\n\n        <ps-container-panel *ngIf=\"!defaultVO.navigatedFromFL\" [options]=\"panelOptions2Step1\"\n            id=\"facility_req_pane2\">\n            <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n            </ps-complex-select-branch>\n        </ps-container-panel>\n    </ps-form-step>\n\n    <ps-form-step step2 [id]=\"stepperOptions.namesofSteps[1]\" *ngIf=\"!defaultVO.navigatedFromFL\">\n        <ng-container *psStep=\"'step2'\">\n            <ps-container-panel [options]=\"panelOptions1Step2\" id=\"facility_req_panel2\">\n\n                <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\">\n                </ps-map-atm-branches>\n\n            </ps-container-panel>\n        </ng-container>\n    </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "Fy5i":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/facility-request/facility-request.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Fy5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZhY2lsaXR5LXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6ImZhY2lsaXR5LXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */";
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
    "ingC":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/facility-request/facility-request.page.ts ***!
      \*****************************************************************/

    /*! exports provided: FacilityRequestPage */

    /***/
    function ingC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityRequestPage", function () {
        return FacilityRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_facility_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./facility-request.page.html */
      "+Kqw");
      /* harmony import */


      var _facility_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./facility-request.page.scss */
      "Fy5i");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component */
      "WAnK");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_tfs_document_type_ps_dropdown_tfs_document_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-tfs-document-type/ps-dropdown-tfs-document-type.component */
      "S7SP");
      /** @name financial-calculator
       *  @author Heba.Hassan
       *  @description Display the financial calculator in pre login an post login
       */


      var FacilityRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function FacilityRequestPage(datepipe, common, omniPull, logger, eventEmitterService, navService, omniCommon) {
          var _this3;

          _classCallCheck(this, FacilityRequestPage);

          _this3 = _callSuper(this, FacilityRequestPage);
          _this3.datepipe = datepipe;
          _this3.common = common;
          _this3.omniPull = omniPull;
          _this3.logger = logger;
          _this3.eventEmitterService = eventEmitterService;
          _this3.navService = navService;
          _this3.omniCommon = omniCommon;
          _this3.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
          _this3.branchOptions = {
            labelKey: 'branch_key',
            group: _this3.formGroup,
            fcName: 'branch'
          };
          _this3.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this3.enableCifBranch = true;
          _this3.defaultVO = {};
          _this3.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this3.formGroup
          };
          _this3.requestedProductPanelOptions = {
            isExpandable: true,
            labelKey: 'requested_products_key',
            iconName: 'document',
            expanded: true
          };
          return _this3;
        }

        _inherits(FacilityRequestPage, _omni_base_omni_base_);

        return _createClass(FacilityRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(FacilityRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
            _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].oper_ID = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].FACILITY_REQUEST_OPER;
            _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].pageName = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].FACILITY_REQUEST_TITLE; //added by ghada, AZDB-4490 for copying the nav params to screen vo without overriding it properly

            this.commonProv.copyObject(this.defaultVO, this.navService.getAllParams() ? this.navService.getAllParams() : {});
            this.loadOptions();
            this.commonProv.addDefaultValidator(this.formGroup, this.facilityRequestOptions.requestedProductsGridOptions.fcName, this.commonProv.prepareValidation(false, null, null, null, null, null, null, null, [this.custGridValidator()]));
            this.fetchParameter();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(FacilityRequestPage, "ionViewDidEnter", this, 3)([]);

            this.fetchParameter();
            this.downPaymentLabel = src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].translate('down_payment_key');
            this.commonProv.setValInsideNestedObj(this.branchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.defaultVO);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.branchOptions.fcName, this.facilityRequestOptions.revolvingAmountOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.facilityRequestOptions.revolvingAmountOptions.fcName, this.facilityRequestOptions.amountLabelOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.facilityRequestOptions.tenureInputOptions.fcName, this.facilityRequestOptions.additionalCommentsOptions.fcName], 0);
          }
        }, {
          key: "loadOptions",
          value: function loadOptions() {
            this.panelOptionsStep1 = {
              isExpandable: true,
              labelKey: 'facility_request_key',
              iconName: 'calculator',
              expanded: true
            };
            this.panelOptions1Step2 = {
              isExpandable: true,
              labelKey: 'atm_branches_key',
              iconName: 'atm',
              expanded: true
            };
            this.attachmentPanelOptions = {
              isExpandable: true,
              labelKey: 'attachment_key',
              iconName: '',
              expanded: true
            };
            this.facilityRequestOptions = {
              requestObject: this.defaultVO,
              facilitytypesOptions: {
                group: this.formGroup,
                placeHolder: 'select_facility_types_key',
                labelKey: 'facility_types_key',
                fcName: 'facilityType'
              },
              productClassOptions: {
                labelKey: 'product_class_key',
                placeHolder: 'product_class_key',
                fcName: 'productType',
                group: this.formGroup
              },
              group: this.formGroup,
              revolvingAmountOptions: {
                fcName: 'revolving',
                placeHolder: '',
                group: this.formGroup,
                labelKey: this.common.translate('revolving_key') + ' ' + this.common.translate('one_off_key')
              },
              amountLabelOptions: {
                placeHolder: 'enter_total_amount_key',
                labelKey: 'financing_amount_key',
                group: this.formGroup,
                fcName: 'financing_amount'
              },
              complexAmountOptions: {
                currency: '',
                currenciesOptions: {
                  labelKey: 'currency_key',
                  placeHolder: 'select_currency_key',
                  fcName: 'currency',
                  group: this.formGroup
                },
                amountOptions: {
                  labelKey: 'total_amount_key',
                  placeHolder: 'enter_total_amount_key',
                  fcName: 'transactionAmount',
                  type: 'amount',
                  group: this.formGroup
                }
              },
              downPaymentOptions: {
                fcName: 'downPayment',
                group: this.formGroup,
                labelKey: 'down_payment_key',
                placeHolder: 'enter_down_payment_key'
              },
              productCategoryOptions: {
                group: this.formGroup,
                placeHolder: 'select_product_category_key',
                labelKey: 'product_category_key',
                fcName: 'productCategory'
              },
              tenureInputOptions: {
                labelKey: 'tenure_key',
                placeHolder: 'tenure_key',
                group: this.formGroup,
                fcName: 'tenure'
              },
              priodicityOptions: {
                labelKey: 'periodicity_key',
                placeHolder: 'select_periodicity_key',
                group: this.formGroup,
                fcName: 'periodicity'
              },
              purposeOptions: {
                labelKey: 'purpose_key',
                placeHolder: 'select_purpose_key',
                group: this.formGroup,
                fcName: 'purpose'
              },
              financingDateOptions: {
                labelKey: 'financing_date_key',
                placeHolder: 'financing_date_key',
                group: this.formGroup,
                fcName: 'financingDate'
              },
              commoditiesOptions: {
                labelKey: 'commodities_key',
                placeHolder: 'commodities_key',
                group: this.formGroup,
                fcName: 'commodities'
              },
              supplySourceOptions: {
                labelKey: 'supply_source_key',
                placeHolder: 'supply_source_key',
                group: this.formGroup,
                fcName: 'supplySource'
              },
              securitiesOptions: {
                labelKey: 'securities_key',
                placeHolder: 'securities_key',
                group: this.formGroup,
                fcName: 'securities'
              },
              additionalCommentsOptions: {
                labelKey: 'additional_comments_key',
                placeHolder: 'additional_comments_key',
                group: this.formGroup,
                fcName: 'additionalComments'
              },
              requestDateOptions: {
                placeHolder: 'request_date_key',
                labelKey: 'request_date_key',
                group: this.formGroup,
                fcName: 'requestDate'
              },
              requestedProductsGridOptions: {
                group: this.formGroup,
                //TP#1331866 - Add label for the grid options to be shown on preview screen
                labelKey: 'requested_products_key',
                fcName: 'requestedProducts',
                gridOptions: {
                  defaultColDef: {
                    flex: 1,
                    minWidth: 150,
                    sortable: true,
                    resizable: true
                  },
                  rowSelection: 'multiple',
                  applyPagination: true,
                  paginationPageSize: 5,
                  cacheBlockSize: 1,
                  cacheOverflowSize: 10,
                  maxConcurrentDatasourceRequests: 2,
                  infiniteInitialRowCount: 500,
                  maxBlocksInCache: 200
                },
                enableEdit: true,
                enableDelete: true,
                columnComponents: [{
                  columnNameKey: 'product_name_key',
                  propertyName: 'productName',
                  component: _commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_tfs_document_type_ps_dropdown_tfs_document_type_component__WEBPACK_IMPORTED_MODULE_19__["PsDropdownTFSDocumentTypeComponent"],
                  componentOptions: {
                    listOfOptions: []
                  },
                  componentType: 'select'
                }, {
                  columnNameKey: 'maximum_usance_period_days_key',
                  propertyName: 'maxUsancePeriod',
                  component: _commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_18__["PsInputNumericComponent"],
                  componentOptions: {},
                  componentType: 'number'
                }]
              }
            };
            this.fileUploadOptions = {
              group: this.formGroup,
              multiple: true,
              fcName: 'selectedFileData'
            };
            this.stepperOptions = {
              stepperName: 'fac_req_stepper',
              isHorizontalStepper: true,
              numberOfSteps: 2,
              namesofSteps: ['facility_request_key', 'atm_branches_key'],
              group: this.formGroup,
              submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.FacilityRequest,
                postCallFunction: {
                  func: function func() {
                    var _this4 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this4.executionClass.redirectToSchedule());
                    });
                  },
                  executionClass: this,
                  params: [this]
                }
              },
              requestObject: this.defaultVO
            };
            this.mapAtmBranchesOptions = {
              group: this.formGroup,
              fcName: 'mapAtmBranches',
              labelKey: 'map_atm_branch_key',
              mapOptions: {
                labelKey: 'map'
              },
              showSegments: false,
              mapTypesInclude: '\'B\'',
              branchIds: '1,3,5',
              parameterToCheck: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].FACILITY_CIF_BRANCH,
              requestVO: this.defaultVO
            };
            this.loadfacilityPurposeList();
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var result, aBranch;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    //to set the default visibility to hidden until the admin value is returned
                    this.omniCommon.branchSelectionAndMapControl(0, [{
                      fcName: this.stepperOptions.namesofSteps[1]
                    }, {
                      fcName: this.mapAtmBranchesOptions.fcName
                    }, {
                      fcName: 'facility_req_pane2'
                    }], true); //Makki: jira #5919, Hide Step 2 by default at screen start

                    _context.n = 1;
                    return this.omniPull.getParamValOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].FACILITY_CIF_BRANCH, _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].AcntOpenBranchesMatAcc, _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].AllowedBranches, src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].AllowedFixedMaturityAccountsTypes, _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].AllowedCurrencies, _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].AllAllowedBranches)["catch"](function (error) {
                      return _this5.logger.log(error);
                    });

                  case 1:
                    result = _context.v;

                    if (result && result.RequestBranch === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_15__["CommonBussinessConstant"].FACILITY_USER_INPUT_VALUE) {
                      this.enableCifBranch = false;
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: this.mapAtmBranchesOptions.fcName,
                        mandatory: 1
                      }, {
                        fcName: 'facility_req_pane2'
                      }], true);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchOptions.fcName], 0);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapBranchInput'], 1);
                    } else {
                      this.enableCifBranch = true;
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: this.mapAtmBranchesOptions.fcName
                      }, {
                        fcName: 'facility_req_pane2'
                      }], true);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.branchOptions.fcName], 1);
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapBranchInput'], 0);
                    }

                    if (result !== -1 && result.AcntOpenBranchesMatAcc === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].cifBranch) {
                      aBranch = result.allowedBranches ? result.allowedBranches.toString().split(',') : result.AllAllowedBranches.split(',');
                      this.mapAtmBranchesOptions.branchIds = this.mapAtmBranchesOptions.branchIds + ',' + aBranch;
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.defaultVO);
            }
          }
        }, {
          key: "onAmountChange",
          value: function onAmountChange(event) {
            if (event && event.amount) {
              var downPayment = this.formGroup.controls[this.facilityRequestOptions.downPaymentOptions.fcName].value;
              downPayment = typeof downPayment === 'string' ? Number(downPayment.replace(/[^0-9.-]+/g, '')) : downPayment;
              this.CalculateFinanceAmount(event.amount, downPayment);
            }
          }
        }, {
          key: "onDownpaymentChange",
          value: function onDownpaymentChange(event) {
            if (event && (event.newValue || typeof event.newValue === 'number')) {
              var amount = this.formGroup.controls[this.facilityRequestOptions.complexAmountOptions.amountOptions.fcName].value;
              amount = typeof amount === 'string' ? Number(amount.replace(/[^0-9.-]+/g, '')) : amount;
              this.CalculateFinanceAmount(amount, event.newValue);
            }
          } //edited by Marina-jira-7698

        }, {
          key: "CalculateFinanceAmount",
          value: function CalculateFinanceAmount(amount, downPayment) {
            if (this.formGroup.controls[this.facilityRequestOptions.amountLabelOptions.fcName]) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.facilityRequestOptions.amountLabelOptions.fcName], 1);
              this.formGroup.controls[this.facilityRequestOptions.amountLabelOptions.fcName].setValue(amount - downPayment);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.facilityRequestOptions.amountLabelOptions.fcName], 1);
            }
          }
        }, {
          key: "redirectToSchedule",
          value: function redirectToSchedule(params) {}
        }, {
          key: "onFacilityTypeChanged",
          value: function onFacilityTypeChanged(value) {
            if (value && value.selectedObj) {
              this.facility = value.selectedObj;
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.facilityRequestOptions.revolvingAmountOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.facilityRequestOptions.revolvingAmountOptions.fcName], 1);
              this.formGroup.controls[this.facilityRequestOptions.revolvingAmountOptions.fcName].setValue(value.selectedObj.revolvingOneOff === 'O' ? this.common.translate('one_off_key') : this.common.translate('Revolving_key'));

              if (value.selectedObj.code !== this.facility.code) {
                if (this.formGroup.controls[this.facilityRequestOptions.complexAmountOptions.amountOptions.fcName]) {
                  this.formGroup.controls[this.facilityRequestOptions.complexAmountOptions.amountOptions.fcName].setValue('');
                }

                if (this.formGroup.controls[this.facilityRequestOptions.downPaymentOptions.fcName]) {
                  this.formGroup.controls[this.facilityRequestOptions.downPaymentOptions.fcName].setValue(0);
                }
              }
            }
          }
        }, {
          key: "loadfacilityPurposeList",
          value: function loadfacilityPurposeList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this6 = this;

              var facilityPurposeList, _iterator, _step, iterator, facilityPurpose;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.omniPull.returnFacilityPurposeList({})["catch"](function (error) {
                      _this6.logger.error('Error: While fetching Product types in PsDropdownProductCategoryComponent : ', error);
                    });

                  case 1:
                    facilityPurposeList = _context2.v;
                    this.facilityRequestOptions.purposeOptions.listOfOptions = [];

                    if (facilityPurposeList && facilityPurposeList.gridModel && facilityPurposeList.gridModel.length > 0) {
                      _iterator = _createForOfIteratorHelper(facilityPurposeList.gridModel);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          iterator = _step.value;
                          facilityPurpose = {
                            itemValue: iterator.fmsPurFinId,
                            description: iterator.description,
                            selectedObj: iterator
                          };
                          this.facilityRequestOptions.purposeOptions.listOfOptions.push(facilityPurpose);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                    }

                    this.facilityRequestOptions.purposeOptions = Object.assign({}, this.facilityRequestOptions.purposeOptions);

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            if (event) {
              var fileType = event[0].selectedFile.type.substring(0, event[0].selectedFile.type.indexOf('/'));
            }
          }
        }, {
          key: "showGridValidation",
          value: function showGridValidation() {
            var requestedProdCtrl = this.formGroup.controls[this.facilityRequestOptions.requestedProductsGridOptions.fcName];

            if (!this.checkGridControlsValidity(requestedProdCtrl)) {
              this.facilityRequestOptions.errorMsg = this.commonProv.translate("value_is_missing_key");
            } else {
              this.facilityRequestOptions.errorMsg = "";
            }
          }
        }, {
          key: "custGridValidator",
          value: function custGridValidator() {
            var _this7 = this;

            return function (control) {
              if (!_this7.checkGridControlsValidity(control)) {
                return {
                  required: true
                };
              }

              return null;
            };
          }
        }, {
          key: "checkGridControlsValidity",
          value: function checkGridControlsValidity(control) {
            if (control.value == null || control.value != null && control.value.some(function (r) {
              return Object.values(r).some(function (i) {
                return i === "" || i == null || i == undefined;
              });
            })) {
              return false;
            }

            return true;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_17__["OmniBasePage"]);

      FacilityRequestPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]
        }];
      };

      FacilityRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-facility-request',
        template: _raw_loader_facility_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_facility_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])], FacilityRequestPage);
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
//# sourceMappingURL=44-es5.js.map