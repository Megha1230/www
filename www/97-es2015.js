(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "ef1P":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reactivate-my-account/reactivate-my-account.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFjdGl2YXRlLW15LWFjY291bnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "l1uR":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reactivate-my-account/reactivate-my-account.page.ts ***!
  \***************************************************************************/
/*! exports provided: ReactivateMyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactivateMyAccountPage", function() { return ReactivateMyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reactivate_my_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reactivate-my-account.page.html */ "mktO");
/* harmony import */ var _reactivate_my_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactivate-my-account.page.scss */ "ef1P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_username_ps_input_username_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-username/ps-input-username.component */ "6pjd");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");













let ReactivateMyAccountPage = class ReactivateMyAccountPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(common, logger, omniCommon) {
        super();
        this.common = common;
        this.logger = logger;
        this.omniCommon = omniCommon;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.reactivateMyAccountVO = {};
        this.stepperOptions = {
            stepperName: 'reactivate_my_account_key',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['reactivate_account_step1'],
            group: this.formGroup,
            submitOptions: {
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.reactivateMyAccountEndPoint,
                group: this.formGroup
            },
            requestObject: this.reactivateMyAccountVO
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'identification_details_key',
            iconName: 'reactivate_myAccount_panel1',
            expanded: true,
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'authentication_details_key',
            iconName: 'reactivate_myAccount_panel2',
            expanded: true,
        };
        this.panelOption2Step2 = {
            isExpandable: true,
            labelKey: 'change_password_key',
            iconName: 'document',
            expanded: false
        };
        this.cifNumOptions = {
            labelKey: 'cif_no_key',
            group: this.formGroup,
            placeHolder: 'enter_cif_no_key',
            fcName: 'userCifNo'
        };
        this.userNameOptions = {
            labelKey: 'username_key',
            group: this.formGroup,
            placeHolder: 'enter_username_key',
            fcName: 'userName'
        };
        this.accountNumberOptions = {
            labelKey: 'account_number_key',
            group: this.formGroup,
            placeHolder: 'enter_account_number_key',
            fcName: 'accountNumber',
            requestObject: this.reactivateMyAccountVO
        };
        this.cardNumberOptions = {
            labelKey: 'card_number_key',
            group: this.formGroup,
            placeHolder: 'enter_card_number_key',
            fcName: 'cardNumber'
        };
        this.cardPinOptions = {
            fcName: 'cardPin',
            labelKey: 'card_pin_key',
            placeHolder: 'enter_card_pin_key',
            group: this.formGroup
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
        this.mobileNumberOptions = {
            labelKey: 'mobile_key',
            fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
            group: this.formGroup
        };
        this.psDateDayMonthYearPastOptions = {
            fcName: 'dateOfBirthday',
            group: this.formGroup,
            labelKey: 'date_of_birth_key',
            placeHolder: 'enter_your_date_of_birth_key'
        };
        this.confirmPasswordOptions = {
            group: this.formGroup,
            password: {
                labelKey: 'new_password_key',
                placeHolder: 'enter_new_password_key',
                fcName: 'newPassword',
                group: this.formGroup,
            },
            confirmPassword: {
                labelKey: 'confirm_password_key',
                placeHolder: 'confirm_new_password_key',
                fcName: 'confirmPassword',
                group: this.formGroup,
            },
            requestObject: this.reactivateMyAccountVO
        };
    }
    ngOnInit() {
    }
    validateUsername(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //call the service to validate the username is exsits and blocked
            if (event && event.newValue) {
                const paramData = {
                    userName: event.newValue,
                };
                _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentLoading();
                this.common.http.commonRequestAjax(src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.omniUserInfoEndPoint, paramData).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var _a, _b, _c;
                    const list = result.data.gridModel;
                    if (list && list.length > 0) {
                        if (list[0].status && list[0].status == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].STATUS_BLOCKED) {
                            if (list[0].blockReason && src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].REACTIVATE_ACCOUNT_VALID_BLOCK_REASONS.includes(list[0].blockReason)) {
                                let isInvalidLoginBlockReason = list[0].blockReason && list[0].blockReason == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].BLOCK_REASON_INVALID_LOGIN;
                                if (isInvalidLoginBlockReason)
                                    this.isInvalidLoginBlock = true;
                                else
                                    this.isInvalidLoginBlock = false;
                            }
                            else {
                                const errMsg = yield this.omniCommon.checkLabelTrans('invalid_block_reason_key');
                                _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentFailureAlert(errMsg);
                                this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_a = this.stepperOptions.group.controls.formData) === null || _a === void 0 ? void 0 : _a.value);
                            }
                        }
                        else {
                            const errMsg = yield this.omniCommon.checkLabelTrans('invalid_user_status_key');
                            _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentFailureAlert(errMsg);
                            this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_b = this.stepperOptions.group.controls.formData) === null || _b === void 0 ? void 0 : _b.value);
                        }
                    }
                    else {
                        const errMsg = yield this.omniCommon.checkLabelTrans('invalid_username_key');
                        _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentFailureAlert(errMsg);
                        this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_c = this.stepperOptions.group.controls.formData) === null || _c === void 0 ? void 0 : _c.value);
                    }
                    _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].dismissLoading();
                })).catch((error) => {
                    var _a;
                    _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].dismissLoading();
                    this.logger.log(error);
                    this.commonProv.setValInsideNestedObj(this.userNameOptions.fcName, "", (_a = this.stepperOptions.group.controls.formData) === null || _a === void 0 ? void 0 : _a.value);
                });
            }
        });
    }
};
ReactivateMyAccountPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"] }
];
ReactivateMyAccountPage.propDecorators = {
    usernameRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['usernameRef', { static: false },] }]
};
ReactivateMyAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reactivate-my-account',
        template: _raw_loader_reactivate_my_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reactivate_my_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])
], ReactivateMyAccountPage);



/***/ }),

/***/ "mktO":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reactivate-my-account/reactivate-my-account.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"account_reactivation_panel_1\">\n      <ps-input-numeric id=\"user_cif_number\" [options]=\"cifNumOptions\"></ps-input-numeric>\n      <ps-input-username #userName id=\"username\" [options]=\"userNameOptions\" (onPsChange)=\"validateUsername($event)\">\n\n      </ps-input-username>\n      <ps-input-account-number id=\"account_number\" [options]=\"accountNumberOptions\">\n      </ps-input-account-number>\n\n      <ps-input-card-number id=\"card_number\" [options]=\"cardNumberOptions\">\n      </ps-input-card-number>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"account_reactivation_panel_2\">\n      <ps-input-password id=\"card_pin\" [options]=\"cardPinOptions\">\n      </ps-input-password>\n      <ps-complex-id-details id=\"id_details\" [options]=\"complexIdDetailsOptions\"></ps-complex-id-details>\n      <ps-entity-phone-number id=\"mobile_number\" [options]=\"mobileNumberOptions\"></ps-entity-phone-number>\n\n      <ps-date-day-month-year-past id=\"date_of_birth\" [options]=\"psDateDayMonthYearPastOptions\">\n      </ps-date-day-month-year-past>\n\n    </ps-container-panel>\n  <ps-container-panel *ngIf=\"isInvalidLoginBlock\" [options]=\"panelOption2Step2\" id=\"password_details_panel2\">\n    \n    <ps-complex-password-confirm id=\"complex_password_confirm\" [options]=\"confirmPasswordOptions\">\n    </ps-complex-password-confirm>\n\n  </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=97-es2015.js.map