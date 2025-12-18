(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "bZnp":
/*!*************************************************************************!*\
  !*** ./src/app/pages/online-registration/online-registration.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmxpbmUtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "guGN":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/online-registration/online-registration.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"online_reg_panel1\">\n      <ps-label class=\"online_reg_hints\" [options]=\"usrDetailsHintOPtions\"></ps-label>\n      <ps-complex-bank-authentication [options]=\"grpOptions\"></ps-complex-bank-authentication>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step2\" id=\"online_reg_panel2\">\n\n      <ps-input-password id=\"online_reg_card_pin\" [options]=\"cardPinOptions\"></ps-input-password>\n\n\n      <ps-complex-id-details [options]=\"complexIdDetailsOptions\"></ps-complex-id-details>\n\n\n      <ps-entity-phone-number [options]=\"complexPhoneOptions\"></ps-entity-phone-number>\n\n\n      <ps-date-day-month-year-past id=\"date_day_month_year_past\" [options]=\"psDateDayMonthYearPastAsStringOptions\">\n      </ps-date-day-month-year-past>\n\n      <ps-input-email [options]=\"emailOptions\"></ps-input-email>\n\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"panelOptions1Step3\" id=\"online_reg_panel3\">\n      <ps-label class=\"online_reg_hints\" [options]=\"usrNameHintOPtions\"></ps-label>\n\n      <ps-label class=\"online_reg_hints\" [options]=\"usrPasswordHintOPtions\"></ps-label>\n\n      <ps-complex-user-credentials [options]=\"userCredentialsOptions1\"></ps-complex-user-credentials>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step3\" id=\"online_reg_panel4\" *ngIf=\"RequireTransactionPassword\">\n      <ps-confirm-pin id=\"complex_pin_confirm\" [options]=\"pinConfirmOptions\"></ps-confirm-pin>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3Step3\" id=\"online_reg_panel5\" *ngIf=\"EnableSecurityQuestion\">\n      <ps-complex-security-questions id=\"complex_security_question\" [options]=\"securityQuestionOptions\">\n      </ps-complex-security-questions>\n    </ps-container-panel>\n    <div class=\"registration-charges-block\" *ngIf=\"registrationCharges\">\n      <ps-label class=\"registration-charges_label\" [options]=\"registrationLabelOptions\"></ps-label>\n      <ps-label class=\"registration-charges_value\" [options]=\"registrationChargesOptions\"></ps-label>\n    </div>\n    <!-- \n        <ps-container-panel [options]=\"panelOptions4Step3\">\n          <ps-gallery-verification-images id=\"verification_images\" [options]=\"verificationImageOptions\"></ps-gallery-verification-images>\n        </ps-container-panel>\n       -->\n  </ps-form-step>\n  <!-- <ps-form-step step3>\n        <ps-complex-terms-and-conditions [options]=\"termsAndConditionsOptions\" id=\"terms_and_conditions\"></ps-complex-terms-and-conditions>\n    </ps-form-step> -->\n</ps-template-stepper>");

/***/ }),

/***/ "jXMm":
/*!***********************************************************************!*\
  !*** ./src/app/pages/online-registration/online-registration.page.ts ***!
  \***********************************************************************/
/*! exports provided: OnlineRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineRegistrationPage", function() { return OnlineRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_online_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./online-registration.page.html */ "guGN");
/* harmony import */ var _online_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-registration.page.scss */ "bZnp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");













let OnlineRegistrationPage = class OnlineRegistrationPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.termsAndConditionsOptions = {
            checkBoxOptions: {
                group: this.formGroup,
                fcName: 'checkboxConfirm',
                labelKey: 'agree_terms_and_conditions_key'
            },
            htmlViewerOptions: {
                fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].onlineRegistrationTermsAndConditionsFileName
            }
        };
        this.stepperOptions = {
            stepperName: 'on_reg_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['online_reg_step1', 'online_reg_step2'],
            group: this.formGroup,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.onlineRegistration,
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateScreenVO());
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
            },
            requestObject: {},
        };
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'identification_details_key',
            iconName: 'finger-print',
            expanded: true
        };
        this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'authentication_and_contact_details_key',
            iconName: 'contact'
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'user-profile_key',
            iconName: 'person'
        };
        this.panelOptions1Step3 = {
            isExpandable: true,
            labelKey: 'credentials_key',
            iconName: 'clipboard',
            expanded: true
        };
        this.panelOptions2Step3 = {
            isExpandable: true,
            labelKey: 'pin_key',
            iconName: 'contact'
        };
        this.panelOptions3Step3 = {
            isExpandable: true,
            labelKey: 'security_question_key',
            iconName: 'lock'
        };
        this.panelOptions4Step3 = {
            isExpandable: true,
            labelKey: 'verification_image_key',
            iconName: 'images'
        };
        this.complexPhoneOptions = {
            fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
            group: this.formGroup,
        };
        this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
                fcName: 'idType',
                group: this.formGroup,
            },
            idNumberOptions: {
                labelKey: 'id_number_key',
                placeHolder: 'enter_id_number_key',
                fcName: 'idNumber',
                group: this.formGroup
            },
            dateExpiryOptions: {
                labelKey: 'expiry_date_key',
                placeHolder: 'enter_expiry_date_key',
                fcName: 'expiryDate',
                group: this.formGroup,
            },
            countriesOptions: {
                labelKey: 'country_key',
                placeHolder: 'enter_country_key',
                fcName: 'country',
                group: this.formGroup,
            },
            issueDateOptions: {
                labelKey: 'issue_date_key',
                placeHolder: 'issue_date_key',
                fcName: 'issueDate',
                group: this.formGroup,
            }
        };
        this.emailOptions = {
            group: this.formGroup,
            fcName: 'omniUserCO.omniUserVO.EMAIL',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key'
        };
        this.cardPinOptions = {
            fcName: 'cardPin',
            labelKey: 'card_pin_key',
            placeHolder: 'enter_card_pin_key',
            group: this.formGroup
        };
        this.userCredentialsOptions1 = {
            requestObject: this.stepperOptions.requestObject,
            fcName: 'complexUserCredentials',
            group: this.formGroup,
            userNameOption: {
                fcName: 'omniUserCO.omniUserVO.NAME',
                group: this.formGroup,
                validateUserName: true
            },
            passwordConfirmOptions: {
                showPasswordHint: false,
                group: this.formGroup,
                password: {
                    labelKey: 'password_key',
                    placeHolder: 'enter_password_key',
                    fcName: 'omniUserCO.omniUserVO.PASSWORD',
                    group: this.formGroup,
                },
                confirmPassword: {
                    labelKey: 'confirm_password_key',
                    placeHolder: 'enter_confirm_password_key',
                    fcName: 'confirmPassword',
                    group: this.formGroup,
                }
            }
        };
        this.pinConfirmOptions = {
            group: this.formGroup,
            password: {
                fcName: 'omniUserCO.omniUserVO.PIN_PASSWORD',
                group: this.formGroup,
            },
            confirmPassword: {
                fcName: 'confirmPin',
                group: this.formGroup,
            }
        };
        this.securityQuestionOptions = {
            group: this.formGroup,
            securityQuestionOptions: {
                fcName: 'securityQuestion',
                group: this.formGroup,
            },
            securityAnswerOptions: {
                labelKey: 'security_answer_key',
                placeHolder: 'enter_your_security_answer_key',
                fcName: 'omniUserCO.omniUserVO.SEC_ANSWER',
                group: this.formGroup,
            }
        };
        this.verificationImageOptions = {
            fcName: 'verification',
            group: this.formGroup,
        };
        this.userNameOptions = {
            group: this.formGroup,
            fcName: 'username'
        };
        this.passwordOptions = {
            group: this.formGroup,
            fcName: 'password'
        };
        this.grpOptions = {
            acNumOptions: {
                fcName: 'omniUserCO.omniUserVO.ACCOUNT_NUMBER',
                group: this.formGroup
            },
            varcharOptions: {
                fcName: 'onlineRegUserCifNo',
                group: this.formGroup,
                iconOptions: {
                    iconName: 'user-cif'
                }
            },
            cardNumberOptions: {
                fcName: 'cardNumber',
                group: this.formGroup,
                iconOptions: {
                    iconName: 'card-input'
                }
            }
        };
        /** Updated by Hisham.Omar TP#1136182
        *  Change the interface to be fit with the updated component 'ps-date-day-month-year-past-asString'
        */
        this.psDateDayMonthYearPastAsStringOptions = {
            fcName: 'dateOfBirth',
            group: this.formGroup,
            labelKey: 'date_of_birth_key',
            placeHolder: 'enter_date_of_birth_key'
        };
        this.registrationLabelOptions = {
            labelKey: 'registration_charges_key'
        };
        //Added by ghada US#1261163 for adding new hints
        this.usrDetailsHintOPtions = {
            labelKey: 'usr_details_hint_key'
        };
        this.usrNameHintOPtions = {
            labelKey: 'usr_name_hint_key'
        };
        this.usrPasswordHintOPtions = {
            labelKey: 'pass_note_key'
        };
        this.registrationChargesOptions = {};
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ONLINE_REGISTRATION_OPER;
        src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonSettings"].pageName = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ONLINE_REGISTRATION_TITLE;
        this.omniPull.getParamValOf('EnableSecurityQuestion', 'RequireTransactionPassword').then(res => {
            this.EnableSecurityQuestion = res.EnableSecurityQuestion;
            this.RequireTransactionPassword = res.RequireTransactionPassword;
        }).catch(err => this.loggerP.log(err));
        const preLoginResponse = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].preLoginResponse);
        this.registrationCharges = preLoginResponse.businessProfilesCO ? preLoginResponse.businessProfilesCO.businessProfileVO ? preLoginResponse.businessProfilesCO.businessProfileVO.REGISTRATION_CHARGES ? preLoginResponse.businessProfilesCO.businessProfileVO.REGISTRATION_CHARGES : null : null : null;
        if (this.registrationCharges) {
            const chargesCurrency = preLoginResponse.companySettingsCO.briefDesc;
            this.registrationChargesOptions.labelKey = String(this.registrationCharges) + ' ' + chargesCurrency;
        }
    }
    updateScreenVO() {
        if (this.stepperOptions.requestObject.omniUserCO && this.stepperOptions.requestObject.omniUserCO.omniUserVO) {
            this.stepperOptions.requestObject.userName = this.stepperOptions.requestObject.omniUserCO.omniUserVO.NAME;
        }
        //added by Marina TP:#1486207 add mobileNo property to VO in order to be able to read it in authentication-matrix component
        this.commonProv.setValInsideNestedObj('mobileNo', this.formGroup.controls[this.complexPhoneOptions.fcName].value, this.stepperOptions.requestObject);
    }
};
OnlineRegistrationPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
OnlineRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'online-registration',
        template: _raw_loader_online_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_online_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], OnlineRegistrationPage);



/***/ })

}]);
//# sourceMappingURL=93-es2015.js.map