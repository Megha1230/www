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

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97], {
    /***/
    "ef1P":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/reactivate-my-account/reactivate-my-account.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ef1P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFjdGl2YXRlLW15LWFjY291bnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "l1uR":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/reactivate-my-account/reactivate-my-account.page.ts ***!
      \***************************************************************************/

    /*! exports provided: ReactivateMyAccountPage */

    /***/
    function l1uR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactivateMyAccountPage", function () {
        return ReactivateMyAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reactivate_my_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reactivate-my-account.page.html */
      "mktO");
      /* harmony import */


      var _reactivate_my_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reactivate-my-account.page.scss */
      "ef1P");
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


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_username_ps_input_username_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-username/ps-input-username.component */
      "6pjd");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var ReactivateMyAccountPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function ReactivateMyAccountPage(common, logger, omniCommon) {
          var _this;

          _classCallCheck(this, ReactivateMyAccountPage);

          _this = _callSuper(this, ReactivateMyAccountPage);
          _this.common = common;
          _this.logger = logger;
          _this.omniCommon = omniCommon;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.reactivateMyAccountVO = {};
          _this.stepperOptions = {
            stepperName: 'reactivate_my_account_key',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['reactivate_account_step1'],
            group: _this.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.reactivateMyAccountEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.reactivateMyAccountVO
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'identification_details_key',
            iconName: 'reactivate_myAccount_panel1',
            expanded: true
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'authentication_details_key',
            iconName: 'reactivate_myAccount_panel2',
            expanded: true
          };
          _this.panelOption2Step2 = {
            isExpandable: true,
            labelKey: 'change_password_key',
            iconName: 'document',
            expanded: false
          };
          _this.cifNumOptions = {
            labelKey: 'cif_no_key',
            group: _this.formGroup,
            placeHolder: 'enter_cif_no_key',
            fcName: 'userCifNo'
          };
          _this.userNameOptions = {
            labelKey: 'username_key',
            group: _this.formGroup,
            placeHolder: 'enter_username_key',
            fcName: 'userName'
          };
          _this.accountNumberOptions = {
            labelKey: 'account_number_key',
            group: _this.formGroup,
            placeHolder: 'enter_account_number_key',
            fcName: 'accountNumber',
            requestObject: _this.reactivateMyAccountVO
          };
          _this.cardNumberOptions = {
            labelKey: 'card_number_key',
            group: _this.formGroup,
            placeHolder: 'enter_card_number_key',
            fcName: 'cardNumber'
          };
          _this.cardPinOptions = {
            fcName: 'cardPin',
            labelKey: 'card_pin_key',
            placeHolder: 'enter_card_pin_key',
            group: _this.formGroup
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
              labelKey: 'country_key',
              placeHolder: 'enter_country_key',
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
          _this.mobileNumberOptions = {
            labelKey: 'mobile_key',
            fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
            group: _this.formGroup
          };
          _this.psDateDayMonthYearPastOptions = {
            fcName: 'dateOfBirthday',
            group: _this.formGroup,
            labelKey: 'date_of_birth_key',
            placeHolder: 'enter_your_date_of_birth_key'
          };
          _this.confirmPasswordOptions = {
            group: _this.formGroup,
            password: {
              labelKey: 'new_password_key',
              placeHolder: 'enter_new_password_key',
              fcName: 'newPassword',
              group: _this.formGroup
            },
            confirmPassword: {
              labelKey: 'confirm_password_key',
              placeHolder: 'confirm_new_password_key',
              fcName: 'confirmPassword',
              group: _this.formGroup
            },
            requestObject: _this.reactivateMyAccountVO
          };
          return _this;
        }

        _inherits(ReactivateMyAccountPage, _omni_base_omni_base_);

        return _createClass(ReactivateMyAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "validateUsername",
          value: function validateUsername(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var paramData;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    //call the service to validate the username is exsits and blocked
                    if (event && event.newValue) {
                      paramData = {
                        userName: event.newValue
                      };

                      _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentLoading();

                      this.common.http.commonRequestAjax(src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.omniUserInfoEndPoint, paramData).then(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                          var _a, _b, _c, list, isInvalidLoginBlockReason, errMsg, _errMsg, _errMsg2;

                          return _regenerator().w(function (_context) {
                            while (1) switch (_context.n) {
                              case 0:
                                list = result.data.gridModel;

                                if (!(list && list.length > 0)) {
                                  _context.n = 7;
                                  break;
                                }

                                if (!(list[0].status && list[0].status == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].STATUS_BLOCKED)) {
                                  _context.n = 4;
                                  break;
                                }

                                if (!(list[0].blockReason && src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].REACTIVATE_ACCOUNT_VALID_BLOCK_REASONS.includes(list[0].blockReason))) {
                                  _context.n = 1;
                                  break;
                                }

                                isInvalidLoginBlockReason = list[0].blockReason && list[0].blockReason == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].BLOCK_REASON_INVALID_LOGIN;
                                if (isInvalidLoginBlockReason) this.isInvalidLoginBlock = true;else this.isInvalidLoginBlock = false;
                                _context.n = 3;
                                break;

                              case 1:
                                _context.n = 2;
                                return this.omniCommon.checkLabelTrans('invalid_block_reason_key');

                              case 2:
                                errMsg = _context.v;

                                _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentFailureAlert(errMsg);

                                this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_a = this.stepperOptions.group.controls.formData) === null || _a === void 0 ? void 0 : _a.value);

                              case 3:
                                _context.n = 6;
                                break;

                              case 4:
                                _context.n = 5;
                                return this.omniCommon.checkLabelTrans('invalid_user_status_key');

                              case 5:
                                _errMsg = _context.v;

                                _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentFailureAlert(_errMsg);

                                this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_b = this.stepperOptions.group.controls.formData) === null || _b === void 0 ? void 0 : _b.value);

                              case 6:
                                _context.n = 9;
                                break;

                              case 7:
                                _context.n = 8;
                                return this.omniCommon.checkLabelTrans('invalid_username_key');

                              case 8:
                                _errMsg2 = _context.v;

                                _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentFailureAlert(_errMsg2);

                                this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_c = this.stepperOptions.group.controls.formData) === null || _c === void 0 ? void 0 : _c.value);

                              case 9:
                                _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].dismissLoading();

                              case 10:
                                return _context.a(2);
                            }
                          }, _callee, this);
                        }));
                      })["catch"](function (error) {
                        var _a;

                        _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].dismissLoading();

                        _this2.logger.log(error);

                        _this2.commonProv.setValInsideNestedObj(_this2.userNameOptions.fcName, "", (_a = _this2.stepperOptions.group.controls.formData) === null || _a === void 0 ? void 0 : _a.value);
                      });
                    }

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      ReactivateMyAccountPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]
        }];
      };

      ReactivateMyAccountPage.propDecorators = {
        usernameRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['usernameRef', {
            "static": false
          }]
        }]
      };
      ReactivateMyAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reactivate-my-account',
        template: _raw_loader_reactivate_my_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reactivate_my_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])], ReactivateMyAccountPage);
      /***/
    },

    /***/
    "mktO":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reactivate-my-account/reactivate-my-account.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mktO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"account_reactivation_panel_1\">\n      <ps-input-numeric id=\"user_cif_number\" [options]=\"cifNumOptions\"></ps-input-numeric>\n      <ps-input-username #userName id=\"username\" [options]=\"userNameOptions\" (onPsChange)=\"validateUsername($event)\">\n\n      </ps-input-username>\n      <ps-input-account-number id=\"account_number\" [options]=\"accountNumberOptions\">\n      </ps-input-account-number>\n\n      <ps-input-card-number id=\"card_number\" [options]=\"cardNumberOptions\">\n      </ps-input-card-number>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"account_reactivation_panel_2\">\n      <ps-input-password id=\"card_pin\" [options]=\"cardPinOptions\">\n      </ps-input-password>\n      <ps-complex-id-details id=\"id_details\" [options]=\"complexIdDetailsOptions\"></ps-complex-id-details>\n      <ps-entity-phone-number id=\"mobile_number\" [options]=\"mobileNumberOptions\"></ps-entity-phone-number>\n\n      <ps-date-day-month-year-past id=\"date_of_birth\" [options]=\"psDateDayMonthYearPastOptions\">\n      </ps-date-day-month-year-past>\n\n    </ps-container-panel>\n  <ps-container-panel *ngIf=\"isInvalidLoginBlock\" [options]=\"panelOption2Step2\" id=\"password_details_panel2\">\n    \n    <ps-complex-password-confirm id=\"complex_password_confirm\" [options]=\"confirmPasswordOptions\">\n    </ps-complex-password-confirm>\n\n  </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=97-es5.js.map