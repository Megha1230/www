(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93], {
    /***/
    "bZnp":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/online-registration/online-registration.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function bZnp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmxpbmUtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "guGN":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/online-registration/online-registration.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function guGN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"online_reg_panel1\">\n      <ps-label class=\"online_reg_hints\" [options]=\"usrDetailsHintOPtions\"></ps-label>\n      <ps-complex-bank-authentication [options]=\"grpOptions\"></ps-complex-bank-authentication>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step2\" id=\"online_reg_panel2\">\n\n      <ps-input-password id=\"online_reg_card_pin\" [options]=\"cardPinOptions\"></ps-input-password>\n\n\n      <ps-complex-id-details [options]=\"complexIdDetailsOptions\"></ps-complex-id-details>\n\n\n      <ps-entity-phone-number [options]=\"complexPhoneOptions\"></ps-entity-phone-number>\n\n\n      <ps-date-day-month-year-past id=\"date_day_month_year_past\" [options]=\"psDateDayMonthYearPastAsStringOptions\">\n      </ps-date-day-month-year-past>\n\n      <ps-input-email [options]=\"emailOptions\"></ps-input-email>\n\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"panelOptions1Step3\" id=\"online_reg_panel3\">\n      <ps-label class=\"online_reg_hints\" [options]=\"usrNameHintOPtions\"></ps-label>\n\n      <ps-label class=\"online_reg_hints\" [options]=\"usrPasswordHintOPtions\"></ps-label>\n\n      <ps-complex-user-credentials [options]=\"userCredentialsOptions1\"></ps-complex-user-credentials>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step3\" id=\"online_reg_panel4\" *ngIf=\"RequireTransactionPassword\">\n      <ps-confirm-pin id=\"complex_pin_confirm\" [options]=\"pinConfirmOptions\"></ps-confirm-pin>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3Step3\" id=\"online_reg_panel5\" *ngIf=\"EnableSecurityQuestion\">\n      <ps-complex-security-questions id=\"complex_security_question\" [options]=\"securityQuestionOptions\">\n      </ps-complex-security-questions>\n    </ps-container-panel>\n    <div class=\"registration-charges-block\" *ngIf=\"registrationCharges\">\n      <ps-label class=\"registration-charges_label\" [options]=\"registrationLabelOptions\"></ps-label>\n      <ps-label class=\"registration-charges_value\" [options]=\"registrationChargesOptions\"></ps-label>\n    </div>\n    <!-- \n        <ps-container-panel [options]=\"panelOptions4Step3\">\n          <ps-gallery-verification-images id=\"verification_images\" [options]=\"verificationImageOptions\"></ps-gallery-verification-images>\n        </ps-container-panel>\n       -->\n  </ps-form-step>\n  <!-- <ps-form-step step3>\n        <ps-complex-terms-and-conditions [options]=\"termsAndConditionsOptions\" id=\"terms_and_conditions\"></ps-complex-terms-and-conditions>\n    </ps-form-step> -->\n</ps-template-stepper>";
      /***/
    },

    /***/
    "jXMm":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/online-registration/online-registration.page.ts ***!
      \***********************************************************************/

    /*! exports provided: OnlineRegistrationPage */

    /***/
    function jXMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineRegistrationPage", function () {
        return OnlineRegistrationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_online_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./online-registration.page.html */
      "guGN");
      /* harmony import */


      var _online_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./online-registration.page.scss */
      "bZnp");
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


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var OnlineRegistrationPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function OnlineRegistrationPage(commonProv, loggerP, omniPull) {
          var _this;

          _classCallCheck(this, OnlineRegistrationPage);

          _this = _callSuper(this, OnlineRegistrationPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.termsAndConditionsOptions = {
            checkBoxOptions: {
              group: _this.formGroup,
              fcName: 'checkboxConfirm',
              labelKey: 'agree_terms_and_conditions_key'
            },
            htmlViewerOptions: {
              fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].onlineRegistrationTermsAndConditionsFileName
            }
          };
          _this.stepperOptions = {
            stepperName: 'on_reg_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['online_reg_step1', 'online_reg_step2'],
            group: _this.formGroup,
            submitOptions: {
              group: _this.formGroup,
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.onlineRegistration,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.updateScreenVO());
                  });
                },
                executionClass: _this,
                params: [_this]
              }
            },
            requestObject: {}
          };
          _this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'identification_details_key',
            iconName: 'finger-print',
            expanded: true
          };
          _this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'authentication_and_contact_details_key',
            iconName: 'contact'
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'user-profile_key',
            iconName: 'person'
          };
          _this.panelOptions1Step3 = {
            isExpandable: true,
            labelKey: 'credentials_key',
            iconName: 'clipboard',
            expanded: true
          };
          _this.panelOptions2Step3 = {
            isExpandable: true,
            labelKey: 'pin_key',
            iconName: 'contact'
          };
          _this.panelOptions3Step3 = {
            isExpandable: true,
            labelKey: 'security_question_key',
            iconName: 'lock'
          };
          _this.panelOptions4Step3 = {
            isExpandable: true,
            labelKey: 'verification_image_key',
            iconName: 'images'
          };
          _this.complexPhoneOptions = {
            fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
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
          _this.emailOptions = {
            group: _this.formGroup,
            fcName: 'omniUserCO.omniUserVO.EMAIL',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key'
          };
          _this.cardPinOptions = {
            fcName: 'cardPin',
            labelKey: 'card_pin_key',
            placeHolder: 'enter_card_pin_key',
            group: _this.formGroup
          };
          _this.userCredentialsOptions1 = {
            requestObject: _this.stepperOptions.requestObject,
            fcName: 'complexUserCredentials',
            group: _this.formGroup,
            userNameOption: {
              fcName: 'omniUserCO.omniUserVO.NAME',
              group: _this.formGroup,
              validateUserName: true
            },
            passwordConfirmOptions: {
              showPasswordHint: false,
              group: _this.formGroup,
              password: {
                labelKey: 'password_key',
                placeHolder: 'enter_password_key',
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
          _this.pinConfirmOptions = {
            group: _this.formGroup,
            password: {
              fcName: 'omniUserCO.omniUserVO.PIN_PASSWORD',
              group: _this.formGroup
            },
            confirmPassword: {
              fcName: 'confirmPin',
              group: _this.formGroup
            }
          };
          _this.securityQuestionOptions = {
            group: _this.formGroup,
            securityQuestionOptions: {
              fcName: 'securityQuestion',
              group: _this.formGroup
            },
            securityAnswerOptions: {
              labelKey: 'security_answer_key',
              placeHolder: 'enter_your_security_answer_key',
              fcName: 'omniUserCO.omniUserVO.SEC_ANSWER',
              group: _this.formGroup
            }
          };
          _this.verificationImageOptions = {
            fcName: 'verification',
            group: _this.formGroup
          };
          _this.userNameOptions = {
            group: _this.formGroup,
            fcName: 'username'
          };
          _this.passwordOptions = {
            group: _this.formGroup,
            fcName: 'password'
          };
          _this.grpOptions = {
            acNumOptions: {
              fcName: 'omniUserCO.omniUserVO.ACCOUNT_NUMBER',
              group: _this.formGroup
            },
            varcharOptions: {
              fcName: 'onlineRegUserCifNo',
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
          /** Updated by Hisham.Omar TP#1136182
          *  Change the interface to be fit with the updated component 'ps-date-day-month-year-past-asString'
          */

          _this.psDateDayMonthYearPastAsStringOptions = {
            fcName: 'dateOfBirth',
            group: _this.formGroup,
            labelKey: 'date_of_birth_key',
            placeHolder: 'enter_date_of_birth_key'
          };
          _this.registrationLabelOptions = {
            labelKey: 'registration_charges_key'
          }; //Added by ghada US#1261163 for adding new hints

          _this.usrDetailsHintOPtions = {
            labelKey: 'usr_details_hint_key'
          };
          _this.usrNameHintOPtions = {
            labelKey: 'usr_name_hint_key'
          };
          _this.usrPasswordHintOPtions = {
            labelKey: 'pass_note_key'
          };
          _this.registrationChargesOptions = {};
          return _this;
        }

        _inherits(OnlineRegistrationPage, _omni_base_omni_base_);

        return _createClass(OnlineRegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            _superPropGet(OnlineRegistrationPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ONLINE_REGISTRATION_OPER;
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].pageName = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ONLINE_REGISTRATION_TITLE;
            this.omniPull.getParamValOf('EnableSecurityQuestion', 'RequireTransactionPassword').then(function (res) {
              _this3.EnableSecurityQuestion = res.EnableSecurityQuestion;
              _this3.RequireTransactionPassword = res.RequireTransactionPassword;
            })["catch"](function (err) {
              return _this3.loggerP.log(err);
            });
            var preLoginResponse = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].preLoginResponse);
            this.registrationCharges = preLoginResponse.businessProfilesCO ? preLoginResponse.businessProfilesCO.businessProfileVO ? preLoginResponse.businessProfilesCO.businessProfileVO.REGISTRATION_CHARGES ? preLoginResponse.businessProfilesCO.businessProfileVO.REGISTRATION_CHARGES : null : null : null;

            if (this.registrationCharges) {
              var chargesCurrency = preLoginResponse.companySettingsCO.briefDesc;
              this.registrationChargesOptions.labelKey = String(this.registrationCharges) + ' ' + chargesCurrency;
            }
          }
        }, {
          key: "updateScreenVO",
          value: function updateScreenVO() {
            if (this.stepperOptions.requestObject.omniUserCO && this.stepperOptions.requestObject.omniUserCO.omniUserVO) {
              this.stepperOptions.requestObject.userName = this.stepperOptions.requestObject.omniUserCO.omniUserVO.NAME;
            } //added by Marina TP:#1486207 add mobileNo property to VO in order to be able to read it in authentication-matrix component


            this.commonProv.setValInsideNestedObj('mobileNo', this.formGroup.controls[this.complexPhoneOptions.fcName].value, this.stepperOptions.requestObject);
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      OnlineRegistrationPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      OnlineRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'online-registration',
        template: _raw_loader_online_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_online_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], OnlineRegistrationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=93-es5.js.map