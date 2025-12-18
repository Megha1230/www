(function () {
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activate-soft-token-otp-activate-soft-token-otp-module"], {
    /***/
    "46tt":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/activate-soft-token-otp/activate-soft-token-otp.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ActivateSoftTokenOtpPageModule */

    /***/
    function tt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivateSoftTokenOtpPageModule", function () {
        return ActivateSoftTokenOtpPageModule;
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


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_vasco_soft_token_ps_complex_vasco_soft_token_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.module */
      "CQzC");
      /* harmony import */


      var _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _activate_soft_token_otp_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./activate-soft-token-otp.page */
      "3otj");

      var routes = [{
        path: '',
        component: _activate_soft_token_otp_page__WEBPACK_IMPORTED_MODULE_7__["ActivateSoftTokenOtpPage"]
      }];

      var ActivateSoftTokenOtpPageModule = /*#__PURE__*/_createClass(function ActivateSoftTokenOtpPageModule() {
        _classCallCheck(this, ActivateSoftTokenOtpPageModule);
      });

      ActivateSoftTokenOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateStepperModule"], _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_vasco_soft_token_ps_complex_vasco_soft_token_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexVascoSoftTokenComponentModule"]],
        declarations: [_activate_soft_token_otp_page__WEBPACK_IMPORTED_MODULE_7__["ActivateSoftTokenOtpPage"]]
      })], ActivateSoftTokenOtpPageModule);
      /***/
    },

    /***/
    "CQzC":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.module.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsComplexVascoSoftTokenComponentModule */

    /***/
    function CQzC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexVascoSoftTokenComponentModule", function () {
        return PsComplexVascoSoftTokenComponentModule;
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


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-complex-vasco-soft-token.component */
      "E/cP");

      var PsComplexVascoSoftTokenComponentModule = /*#__PURE__*/_createClass(function PsComplexVascoSoftTokenComponentModule() {
        _classCallCheck(this, PsComplexVascoSoftTokenComponentModule);
      });

      PsComplexVascoSoftTokenComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexVascoSoftTokenComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputVarcharComponentModule"]],
        exports: [_ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexVascoSoftTokenComponent"]],
        entryComponents: [_ps_complex_vasco_soft_token_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexVascoSoftTokenComponent"]]
      })], PsComplexVascoSoftTokenComponentModule);
      /***/
    },

    /***/
    "E/cP":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsComplexVascoSoftTokenComponent */

    /***/
    function E_cP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexVascoSoftTokenComponent", function () {
        return PsComplexVascoSoftTokenComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_vasco_soft_token_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-vasco-soft-token.component.html */
      "q2xR");
      /* harmony import */


      var _ps_complex_vasco_soft_token_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-vasco-soft-token.component.scss */
      "YjhT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_authentication_matrix_ps_authentication_matrix_component_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-authentication-matrix/ps-authentication-matrix.component.interface */
      "dwZw");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_authentication_matrix_authentication_matrix_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/authentication-matrix/authentication-matrix.service */
      "7upn");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsComplexVascoSoftTokenComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsComplexVascoSoftTokenComponent(commonProv, logger, omniAuthService, omniPull) {
          var _this;

          _classCallCheck(this, PsComplexVascoSoftTokenComponent);

          _this = _callSuper(this, PsComplexVascoSoftTokenComponent, [commonProv, logger]);
          _this.commonProv = commonProv;
          _this.logger = logger;
          _this.omniAuthService = omniAuthService;
          _this.omniPull = omniPull;
          _this.defaultOptions = {
            crontoImageOptions: {
              imageName: ''
            }
          };
          _this.softTokenDisabledHintLblOptions = {
            labelKey: 'enable_soft_token_param_in_order_to_proceed_key'
          };
          _this.showCrontoDetails = false;
          return _this;
        }

        _inherits(PsComplexVascoSoftTokenComponent, _commonSRC_psComponen);

        return _createClass(PsComplexVascoSoftTokenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
            this.userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
          }
        }, {
          key: "onActivationButtonClicked",
          value: function onActivationButtonClicked(event) {
            var _this2 = this;

            this.common.presentLoading();
            this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ENABLE_OTP_GENARATION).then(function (res) {
              var _a, _b;

              if (res[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ENABLE_OTP_GENARATION]) {
                var userInfo = {
                  userName: (_a = _this2.userInfo) === null || _a === void 0 ? void 0 : _a.omniUserVO.NAME,
                  userCifNo: (_b = _this2.userInfo) === null || _b === void 0 ? void 0 : _b.omniUserVO.CIF_NO
                };
                var otpAuth = {
                  data: [{
                    authentionTypesEnabled: "SmsOTP",
                    authenticationTypesDesc: "otp_key"
                  }],
                  success: true
                };

                _this2.omniAuthService.showAndManageValidations(otpAuth, src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_authentication_matrix_ps_authentication_matrix_component_interface__WEBPACK_IMPORTED_MODULE_4__["AuthMatrixViewer"].MODAL, userInfo).then(function (result) {
                  if (result && result.success) {
                    _this2.callVascoCrontoWS();
                  }
                })["catch"](function (error) {
                  _this2.commonProv.logger.error(error + " : error while validating otp authentication in ActivateSoftTokenOtpPage");

                  _this2.common.dismissLoading();
                });
              } else {
                _this2.callVascoCrontoWS();
              }
            });
          }
        }, {
          key: "callVascoCrontoWS",
          value: function callVascoCrontoWS() {
            var _this3 = this;

            this.common.presentLoading();
            this.omniPull.generateVascoCrontoImage({}).then(function (data) {
              if (data) {
                _this3.showCrontoDetails = true;
                _this3.defaultOptions.crontoImageOptions.imageBase64Url = data.imageBytesbase64;

                _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, ['activate_soft_token_btn'], 1);
              }
            })["finally"](function () {
              _this3.common.dismissLoading();
            });
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_9__["PsBaseFieldComponent"]);

      PsComplexVascoSoftTokenComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_authentication_matrix_authentication_matrix_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMatrixService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      PsComplexVascoSoftTokenComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexVascoSoftTokenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-vasco-soft-token',
        template: _raw_loader_ps_complex_vasco_soft_token_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_vasco_soft_token_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonBussinessSRC_psServices_authentication_matrix_authentication_matrix_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMatrixService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], PsComplexVascoSoftTokenComponent);
      /***/
    },

    /***/
    "YjhT":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.scss ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YjhT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXZhc2NvLXNvZnQtdG9rZW4uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "q2xR":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-vasco-soft-token/ps-complex-vasco-soft-token.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q2xR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-vasco-soft-token\">\n\n  <ps-action-button id=\"activate_soft_token_btn\" [options]=\"defaultOptions.activateSoftTokenOptions\"\n    [ngClass]=\"{'soft-token-btn': options.disableSoftTokenBtn}\" (onClick)=\" onActivationButtonClicked($event)\">\n  </ps-action-button>\n\n  <div class=\"soft-token-hint\" *ngIf=\"options.disableSoftTokenBtn\">\n    <ps-label [options]=\"softTokenDisabledHintLblOptions\">\n    </ps-label>\n  </div>\n\n  <ng-container *ngIf=\"showCrontoDetails\" id=\"cronto_details_panel\">\n    <ps-action-image [options]=\"defaultOptions.crontoImageOptions\"></ps-action-image>\n    <ps-input-varchar id=\"cronto-code\" [options]=\"defaultOptions.crontoCodeOptions\">\n    </ps-input-varchar>\n  </ng-container>\n\n</ps-container-complex>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-activate-soft-token-otp-activate-soft-token-otp-module-es5.js.map