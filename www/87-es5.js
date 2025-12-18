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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87], {
    /***/
    "BVQX":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/forgot-credentials/forgot-credentials.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ForgotCredentialsPage */

    /***/
    function BVQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotCredentialsPage", function () {
        return ForgotCredentialsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_credentials_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-credentials.page.html */
      "EHMb");
      /* harmony import */


      var _forgot_credentials_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-credentials.page.scss */
      "cvRk");
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


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");

      var ForgotCredentialsPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function ForgotCredentialsPage(commonProv, loggerP, omniPull, NavService) {
          var _this;

          _classCallCheck(this, ForgotCredentialsPage);

          _this = _callSuper(this, ForgotCredentialsPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.NavService = NavService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.forgotCredentialsVO = {};
          _this.stepperOptions = {
            stepperName: 'forgot_cred_step',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['forgot_cred_step1', 'forgot_cred_step2'],
            group: _this.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.forgotCredentials,
              group: _this.formGroup,
              preCallFunction: {
                func: function func() {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.validateInputtedData());
                  });
                },
                executionClass: _this,
                params: []
              }
            },
            requestObject: _this.forgotCredentialsVO
          };
          _this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'IDENTIFICATION_DETAILS_KEY',
            iconName: 'finger-print',
            expanded: true
          };
          _this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'AUTHENTICATION_DETAILS_KEY',
            iconName: 'contact'
          };
          _this.forgotUsernameOptions = {
            labelKey: 'send_me_my_username_key',
            group: _this.formGroup,
            fcName: 'forgotUsername'
          };
          _this.complexPhoneOptions = {
            labelKey: 'phone_number_key',
            placeHolder: 'country_key',
            fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
            group: _this.formGroup
          };
          _this.userCredentialsOptions1 = {
            fcName: 'complexUserCredentials',
            group: _this.formGroup,
            userNameOption: {
              fcName: 'userName',
              group: _this.formGroup
            },
            passwordConfirmOptions: {
              group: _this.formGroup,
              password: {
                labelKey: 'password_key',
                placeHolder: 'enter_new_password_key',
                fcName: 'omniUserCO.omniUserVO.PASSWORD',
                group: _this.formGroup
              },
              confirmPassword: {
                labelKey: 'confirm_password_key',
                placeHolder: 'enter_confirm_password_key',
                fcName: 'confirmPassword',
                group: _this.formGroup
              }
            }
          };
          _this.forgotPasswordPanelOptions = {
            labelKey: 'forgot_password_key',
            iconName: 'lock',
            expanded: true
          };
          _this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this.formGroup
            },
            idNumberOptions: {
              labelKey: 'id_number_key',
              placeHolder: 'enter_id_number_key',
              fcName: 'idNumber',
              group: _this.formGroup
            },
            dateExpiryOptions: {
              labelKey: 'expiry_date_key',
              placeHolder: 'enter_expiry_date_key',
              fcName: 'expiryDate',
              group: _this.formGroup
            },
            countriesOptions: {
              placeHolder: 'country_of_issuance_key',
              labelKey: 'country_of_issuance_key',
              fcName: 'country',
              group: _this.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'issueDate',
              group: _this.formGroup
            }
          };
          _this.cardPinOptions = {
            fcName: 'omniUserCO.omniUserVO.PIN_PASSWORD',
            labelKey: 'card_pin_key',
            placeHolder: 'enter_card_pin_key',
            group: _this.formGroup
          };
          _this.grpOptions = {
            acNumOptions: {
              fcName: 'omniUserCO.omniUserVO.ACCOUNT_NUMBER',
              group: _this.formGroup
            },
            varcharOptions: {
              fcName: 'userCifNo',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'user-cif'
              }
            },
            cardNumberOptions: {
              fcName: 'cardNumber',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'card-input'
              }
            }
          };
          _this.complexSegmentOptions = {
            group: _this.formGroup,
            segmentOptions: {
              segmentList: []
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['forgot_password_segment', 'forgot_username_segment']
            }
          };
          /** Updated by Hisham.Omar TP#1136182
           *  Change the interface to be fit with the updated component 'ps-date-day-month-year-past-asString'
           */

          _this.psDateDayMonthYearPastOptions = {
            fcName: 'dateOfBirthday',
            group: _this.formGroup,
            labelKey: 'date_of_birth_key',
            placeHolder: 'enter_your_date_of_birth_key'
          };
          _this.orLabelOptions = {
            labelKey: 'OR_KEY'
          };
          return _this;
        }

        _inherits(ForgotCredentialsPage, _omni_base_omni_base_);

        return _createClass(ForgotCredentialsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(ForgotCredentialsPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].FORGOT_CREDENTIALS_OPER;
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].pageName = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].FORGOT_CREDENTIALS_TITLE;
            this.commonProv.setValInsideNestedObj(this.forgotUsernameOptions.fcName, false, this.forgotCredentialsVO);
            this.complexSegmentOptions.segmentOptions = {
              fcName: 'forgotCredentialsSegment',
              segmentList: [{
                selected: true,
                itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PASSWORD,
                description: this.commonProv.translate('forgot_password_key')
              }, {
                selected: true,
                itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].USER_NAME,
                description: this.commonProv.translate('forgot_username_key')
              }],
              defaultSegment: {
                itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PASSWORD,
                description: this.commonProv.translate('forgot_password_key')
              }
            };
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(ForgotCredentialsPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.forgotUsernameOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.userCredentialsOptions1.userNameOption.fcName], 1);
          }
        }, {
          key: "onforgotUsernameChanged",
          value: function onforgotUsernameChanged(event) {
            var enableForgotPassword = 0;

            if (event && event.newValue) {
              this.userCredentialsOptions1.passwordConfirmOptions.password.group.controls[this.userCredentialsOptions1.passwordConfirmOptions.password.fcName].reset();
              this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.group.controls[this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.fcName].reset();
              this.userCredentialsOptions1.userNameOption.group.controls[this.userCredentialsOptions1.userNameOption.fcName].reset();
              enableForgotPassword = 1;

              if (event.newValue === true) {
                this.commonProv.setValInsideNestedObj(this.forgotUsernameOptions.fcName, true, this.forgotCredentialsVO);
              }
            } else {
              enableForgotPassword = 0;
            }

            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.userCredentialsOptions1.userNameOption.fcName, this.userCredentialsOptions1.passwordConfirmOptions.password.fcName, this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.fcName], !enableForgotPassword);
          } // Updated by: Mohamed Fawzy - TP#1346247 - Validate inputs before submit

        }, {
          key: "validateInputtedData",
          value: function validateInputtedData() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                var _this4 = this;

                var result;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      _context.n = 1;
                      return this.omniPull.validateForgotCredentials(this.forgotCredentialsVO)["catch"](function (err) {
                        _this4.loggerP.error(err);

                        reject(err);
                      });

                    case 1:
                      result = _context.v;

                      if (result && result.success) {
                        if (result.data.outputType === "S") {
                          // Check username
                          if (this.forgotCredentialsVO && !this.forgotCredentialsVO[this.userCredentialsOptions1.userNameOption.fcName]) {
                            this.forgotCredentialsVO[this.userCredentialsOptions1.userNameOption.fcName] = _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].NO_VALUE;
                          }

                          resolve(result);
                        } else {
                          this.NavService.navigateBackward();
                        }
                      }

                    case 2:
                      return _context.a(2);
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "onClickSegment",
          value: function onClickSegment(selectedSegment) {
            // on moving to other tab - clear the fields inputted in the previous TAB
            if (selectedSegment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PASSWORD) {
              this.commonProv.setValInsideNestedObj(this.forgotUsernameOptions.fcName, false, this.forgotCredentialsVO);
              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.forgotUsernameOptions.fcName], 0);
            } else if (selectedSegment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].USER_NAME) {
              this.userCredentialsOptions1.userNameOption.group.controls[this.userCredentialsOptions1.userNameOption.fcName].setValue(""); //this.commonProv.setValInsideNestedObj(this.userCredentialsOptions1.userNameOption.fcName, null, this.forgotCredentialsVO);

              this.commonProv.setValInsideNestedObj(this.userCredentialsOptions1.passwordConfirmOptions.password.fcName, null, this.forgotCredentialsVO);
              this.commonProv.setValInsideNestedObj(this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.fcName, null, this.forgotCredentialsVO);
              this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.forgotUsernameOptions.fcName], 1);
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"]);

      ForgotCredentialsPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"]
        }, {
          type: _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]
        }];
      };

      ForgotCredentialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'forgot-credentials',
        template: _raw_loader_forgot_credentials_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_credentials_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"], _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]])], ForgotCredentialsPage);
      /***/
    },

    /***/
    "EHMb":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-credentials/forgot-credentials.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EHMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"forgot_cred_panel1\">\n\n      <ps-complex-bank-authentication [options]=\"grpOptions\">\n      </ps-complex-bank-authentication>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step2\" id=\"forgot_cred_panel2\">\n\n      <ps-input-password id=\"card_pin\" [options]=\"cardPinOptions\">\n      </ps-input-password>\n\n      <ps-complex-id-details [options]=\"complexIdDetailsOptions\">\n      </ps-complex-id-details>\n\n      <ps-entity-phone-number [options]=\"complexPhoneOptions\"></ps-entity-phone-number>\n\n      <ps-date-day-month-year-past id=\"date_day_month_year_past\" [options]=\"psDateDayMonthYearPastOptions\">\n      </ps-date-day-month-year-past>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"forgotPasswordPanelOptions\" id=\"forgot_cred_panel3\">\n\n      <ps-complex-segment id=\"forgetCredentialsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n        [options]=\"complexSegmentOptions\">\n\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n          <ps-complex-user-credentials [options]=\"userCredentialsOptions1\" id=\"forgot_password\">\n          </ps-complex-user-credentials>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n          <ps-select-checkbox id=\"forgot_username\" class=\"forget-username-checkbox\" [options]=\"forgotUsernameOptions\"\n            (onPsChange)=\"onforgotUsernameChanged($event)\">\n          </ps-select-checkbox>\n        </ps-content-segment>\n\n      </ps-complex-segment>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "cvRk":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/forgot-credentials/forgot-credentials.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function cvRk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtY3JlZGVudGlhbHMucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=87-es5.js.map