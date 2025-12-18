(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "BVQX":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forgot-credentials/forgot-credentials.page.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotCredentialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotCredentialsPage", function() { return ForgotCredentialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_credentials_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-credentials.page.html */ "EHMb");
/* harmony import */ var _forgot_credentials_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-credentials.page.scss */ "cvRk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../commonSRC/psServices/navigator/ps-navigator.service */ "woXy");














let ForgotCredentialsPage = class ForgotCredentialsPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, NavService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.NavService = NavService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.forgotCredentialsVO = {};
        this.stepperOptions = {
            stepperName: 'forgot_cred_step',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['forgot_cred_step1', 'forgot_cred_step2'],
            group: this.formGroup,
            submitOptions: {
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.forgotCredentials,
                group: this.formGroup,
                preCallFunction: {
                    func() {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.validateInputtedData());
                        });
                    },
                    executionClass: this,
                    params: []
                }
            },
            requestObject: this.forgotCredentialsVO
        };
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'IDENTIFICATION_DETAILS_KEY',
            iconName: 'finger-print',
            expanded: true
        };
        this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'AUTHENTICATION_DETAILS_KEY',
            iconName: 'contact'
        };
        this.forgotUsernameOptions = {
            labelKey: 'send_me_my_username_key',
            group: this.formGroup,
            fcName: 'forgotUsername'
        };
        this.complexPhoneOptions = {
            labelKey: 'phone_number_key',
            placeHolder: 'country_key',
            fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
            group: this.formGroup
        };
        this.userCredentialsOptions1 = {
            fcName: 'complexUserCredentials',
            group: this.formGroup,
            userNameOption: {
                fcName: 'userName',
                group: this.formGroup,
            },
            passwordConfirmOptions: {
                group: this.formGroup,
                password: {
                    labelKey: 'password_key',
                    placeHolder: 'enter_new_password_key',
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
        this.forgotPasswordPanelOptions = {
            labelKey: 'forgot_password_key',
            iconName: 'lock',
            expanded: true
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
                placeHolder: 'country_of_issuance_key',
                labelKey: 'country_of_issuance_key',
                fcName: 'country',
                group: this.formGroup,
            },
            issueDateOptions: {
                labelKey: 'issue_date_key',
                placeHolder: 'issue_date_key',
                fcName: 'issueDate',
                group: this.formGroup
            }
        };
        this.cardPinOptions = {
            fcName: 'omniUserCO.omniUserVO.PIN_PASSWORD',
            labelKey: 'card_pin_key',
            placeHolder: 'enter_card_pin_key',
            group: this.formGroup
        };
        this.grpOptions = {
            acNumOptions: {
                fcName: 'omniUserCO.omniUserVO.ACCOUNT_NUMBER',
                group: this.formGroup
            },
            varcharOptions: {
                fcName: 'userCifNo',
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
        this.complexSegmentOptions = {
            group: this.formGroup,
            segmentOptions: {
                segmentList: []
            },
            segmentContainerOptions: {
                numberOfSegments: 2,
                namesofSegments: ['forgot_password_segment', 'forgot_username_segment'],
            }
        };
        /** Updated by Hisham.Omar TP#1136182
         *  Change the interface to be fit with the updated component 'ps-date-day-month-year-past-asString'
         */
        this.psDateDayMonthYearPastOptions = {
            fcName: 'dateOfBirthday',
            group: this.formGroup,
            labelKey: 'date_of_birth_key',
            placeHolder: 'enter_your_date_of_birth_key'
        };
        this.orLabelOptions = {
            labelKey: 'OR_KEY'
        };
    }
    ngOnInit() {
        super.init();
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
            defaultSegment: { itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PASSWORD, description: this.commonProv.translate('forgot_password_key') }
        };
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.forgotUsernameOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.userCredentialsOptions1.userNameOption.fcName], 1);
    }
    onforgotUsernameChanged(event) {
        let enableForgotPassword = 0;
        if (event && event.newValue) {
            this.userCredentialsOptions1.passwordConfirmOptions.password.group.controls[this.userCredentialsOptions1.passwordConfirmOptions.password.fcName].reset();
            this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.group.controls[this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.fcName].reset();
            this.userCredentialsOptions1.userNameOption.group.controls[this.userCredentialsOptions1.userNameOption.fcName].reset();
            enableForgotPassword = 1;
            if (event.newValue === true) {
                this.commonProv.setValInsideNestedObj(this.forgotUsernameOptions.fcName, true, this.forgotCredentialsVO);
            }
        }
        else {
            enableForgotPassword = 0;
        }
        this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.userCredentialsOptions1.userNameOption.fcName, this.userCredentialsOptions1.passwordConfirmOptions.password.fcName, this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.fcName], !enableForgotPassword);
    }
    // Updated by: Mohamed Fawzy - TP#1346247 - Validate inputs before submit
    validateInputtedData() {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.validateForgotCredentials(this.forgotCredentialsVO)
                .catch(err => { this.loggerP.error(err); reject(err); });
            if (result && result.success) {
                if (result.data.outputType === "S") {
                    // Check username
                    if (this.forgotCredentialsVO && !this.forgotCredentialsVO[this.userCredentialsOptions1.userNameOption.fcName]) {
                        this.forgotCredentialsVO[this.userCredentialsOptions1.userNameOption.fcName] = _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].NO_VALUE;
                    }
                    resolve(result);
                }
                else {
                    this.NavService.navigateBackward();
                }
            }
        }));
    }
    onClickSegment(selectedSegment) {
        // on moving to other tab - clear the fields inputted in the previous TAB
        if (selectedSegment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].PASSWORD) {
            this.commonProv.setValInsideNestedObj(this.forgotUsernameOptions.fcName, false, this.forgotCredentialsVO);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.forgotUsernameOptions.fcName], 0);
        }
        else if (selectedSegment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].USER_NAME) {
            this.userCredentialsOptions1.userNameOption.group.controls[this.userCredentialsOptions1.userNameOption.fcName].setValue("");
            //this.commonProv.setValInsideNestedObj(this.userCredentialsOptions1.userNameOption.fcName, null, this.forgotCredentialsVO);
            this.commonProv.setValInsideNestedObj(this.userCredentialsOptions1.passwordConfirmOptions.password.fcName, null, this.forgotCredentialsVO);
            this.commonProv.setValInsideNestedObj(this.userCredentialsOptions1.passwordConfirmOptions.confirmPassword.fcName, null, this.forgotCredentialsVO);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.forgotUsernameOptions.fcName], 1);
        }
    }
};
ForgotCredentialsPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"] },
    { type: _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"] }
];
ForgotCredentialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'forgot-credentials',
        template: _raw_loader_forgot_credentials_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_credentials_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"], _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"]])
], ForgotCredentialsPage);



/***/ }),

/***/ "EHMb":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-credentials/forgot-credentials.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"forgot_cred_panel1\">\n\n      <ps-complex-bank-authentication [options]=\"grpOptions\">\n      </ps-complex-bank-authentication>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step2\" id=\"forgot_cred_panel2\">\n\n      <ps-input-password id=\"card_pin\" [options]=\"cardPinOptions\">\n      </ps-input-password>\n\n      <ps-complex-id-details [options]=\"complexIdDetailsOptions\">\n      </ps-complex-id-details>\n\n      <ps-entity-phone-number [options]=\"complexPhoneOptions\"></ps-entity-phone-number>\n\n      <ps-date-day-month-year-past id=\"date_day_month_year_past\" [options]=\"psDateDayMonthYearPastOptions\">\n      </ps-date-day-month-year-past>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"forgotPasswordPanelOptions\" id=\"forgot_cred_panel3\">\n\n      <ps-complex-segment id=\"forgetCredentialsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n        [options]=\"complexSegmentOptions\">\n\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n          <ps-complex-user-credentials [options]=\"userCredentialsOptions1\" id=\"forgot_password\">\n          </ps-complex-user-credentials>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n          <ps-select-checkbox id=\"forgot_username\" class=\"forget-username-checkbox\" [options]=\"forgotUsernameOptions\"\n            (onPsChange)=\"onforgotUsernameChanged($event)\">\n          </ps-select-checkbox>\n        </ps-content-segment>\n\n      </ps-complex-segment>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "cvRk":
/*!***********************************************************************!*\
  !*** ./src/app/pages/forgot-credentials/forgot-credentials.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtY3JlZGVudGlhbHMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=87-es2015.js.map