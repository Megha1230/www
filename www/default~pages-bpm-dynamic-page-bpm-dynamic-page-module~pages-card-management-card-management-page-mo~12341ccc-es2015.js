(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-bpm-dynamic-page-bpm-dynamic-page-module~pages-card-management-card-management-page-mo~12341ccc"],{

/***/ "5aOE":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXBhc3N3b3JkLWNvbmZpcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gKqT":
/*!***************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
  \***************************************************/
/*! exports provided: OmniBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniBasePage", function() { return OmniBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./omni-base.page.html */ "mVVo");
/* harmony import */ var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omni-base.page.scss */ "s2T5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/customization/psServices/util/common-cust-utils */ "oS+F");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");











let OmniBasePage = class OmniBasePage {
    constructor() {
        this.isPageDisabled = false;
        this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
        this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]);
        // this.getScreenTranslations();
    }
    init() {
        this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
        this.customizationMap = this.commonProv.returnOperCustomization();
        const navParams = this.navigationServices.getAllParams();
        const formDisObj = {};
        // let oper = PsCommonSettings.oper_ID;
        // PsCommonSettings.currentListOfSteps = {};
        if (navParams && navParams.readOnlypage === true) {
            formDisObj.IS_READONLY = 1;
            // Modified by Richie for #BUG 1259353
            if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            }
        }
        else if (this.customizationMap) {
            formDisObj.IS_READONLY = 0;
            this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
        }
        // End Richie
        // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
        this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];
        if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
            this.getScreenTranslations(this.currentOperID);
        }
        // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
    }
    ngOnInit() {
        this.init();
    }
    ionViewDidEnter() {
        this.viewDidEnter();
    }
    ionViewWillLeave() {
        this.viewWillLeave();
    }
    ionViewWillEnter() {
        this.viewWillEnter();
    }
    viewWillEnter() {
    }
    disableForm(formGroup) {
        // Modified by Richie for #BUG 1259353
        if (formGroup !== undefined && this.customizationMap) {
            const formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY);
            // End Richie
            if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach((key) => {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
            }
        }
    }
    viewDidEnter() {
        this.commonProv.checkViewBS.next({ value: true, page: this, didEnter: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, didEnter: true });
        this.commonProv.dismissLoading();
        this.disableForm(this.baseFormGroup);
        src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
        this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
    }
    viewWillLeave() {
        this.commonProv.checkViewBS.next({ value: true, page: this, willLeave: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, willLeave: true });
    }
    // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
    // added after all the changeEvents are finished to disable the form 
    ngAfterViewChecked() {
        if (!this.isPageDisabled) {
            setTimeout(() => {
                this.disableForm(this.baseFormGroup);
                this.isPageDisabled = true;
            }, 300);
        }
    }
    // AZDB-7529 - Start - AMANAOI250035
    getScreenTranslations(screenOperId) {
        const operationId = screenOperId ? screenOperId : 2222;
        const activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';
        if (operationId && activeLanguage) {
            this.commonProv.language.getOperTranslation(activeLanguage, operationId);
        }
    }
};
OmniBasePage.ctorParameters = () => [];
OmniBasePage.propDecorators = {
    psClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
};
OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OmniBasePage);



/***/ }),

/***/ "jedr":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsComplexPasswordConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPasswordConfirmComponent", function() { return PsComplexPasswordConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_password_confirm_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-password-confirm.component.html */ "yedL");
/* harmony import */ var _ps_complex_password_confirm_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-password-confirm.component.scss */ "5aOE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_password_ps_input_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-password/ps-input-password.component */ "1kNi");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









/**
 * @author Zunair.Zakir
 * @since 27/10/2019
 *
 * <p> PsComplexPasswordConfirmComponent is a complex component base on ps-input-password component</p>
 */
let PsComplexPasswordConfirmComponent = class PsComplexPasswordConfirmComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.onPasswordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onConfirmPasswordChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.newPassword = null;
        this.confirmedNewPassword = null;
        this.passNote = {};
    }
    ngOnInit() {
        if (this.options.showPasswordHint == undefined) {
            this.options.showPasswordHint = true;
        }
        this.passNote.labelKey = this.options.hintMessage ? this.options.hintMessage : 'pass_note_key';
    }
    onChangePassword(values) {
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.options.confirmPassword.fcName], 1);
        this.newPassword = values.newValue;
        if (this.options.allowUserSimilarToPassword) {
            if (this.options.username && this.newPassword === this.options.username) {
                //  this.commonProv.presentAlert(this.commonProv.translate('WARNING_KEY'),this.commonProv.translate('YOU_CANNOT_SET_A_PASSWORD_SIMILAR_TO_THE_USERNAME_KEY'));
                this.options.group.controls[this.options.password.fcName].setErrors({ warning: this.commonProv.translate('YOU_CANNOT_SET_A_PASSWORD_SIMILAR_TO_THE_USERNAME_KEY') });
                super.checkValidationErrors();
                this.passwordRef.superWriteValue('');
            }
            else {
                this.commonProv.session.getStoredValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USER_NAME).then(result => {
                    if (result && result === values.newValue) {
                        // this.commonProv.presentAlert(this.commonProv.translate('WARNING_KEY'),this.commonProv.translate('YOU_CANNOT_SET_A_PASSWORD_SIMILAR_TO_THE_USERNAME_KEY'));
                        this.options.group.controls[this.options.password.fcName].setErrors({ warning: this.commonProv.translate('YOU_CANNOT_SET_A_PASSWORD_SIMILAR_TO_THE_USERNAME_KEY') });
                        super.checkValidationErrors();
                        this.passwordRef.superWriteValue('');
                    }
                });
            }
        }
        this.confirmPasswordRef.superWriteValue('');
        this.confirmedNewPassword = null;
        this.onPasswordChange.emit(values);
    }
    onChangeConfirmPassword(values) {
        this.errorMsg = '';
        this.confirmedNewPassword = values.newValue;
        if (this.newPassword !== null && this.confirmedNewPassword !== null && this.newPassword !== this.confirmedNewPassword) {
            //this.presentAlert('error_key', 'icon icon-danger', this.commonProv.translate(this.options.password.labelKey) + '_do_not_match_key');
            this.options.confirmPassword.group.controls[this.options.confirmPassword.fcName].setErrors({ customErrorKey: this.commonProv.translate(this.options.password.labelKey) + ' ' + this.commonProv.translate('do_not_match_key') });
            this.errorMsg = this.commonProv.translate(this.options.password.labelKey) + ' ' + this.commonProv.translate('do_not_match_key');
            super.checkValidationErrors();
            this.commonProv.setValInsideNestedObj(this.options.confirmPassword.fcName, null, this.options.requestObject);
            // this.confirmedNewPassword = null;
        }
        this.onConfirmPasswordChange.emit(values);
    }
    onfieldEmpty(fieldType) {
        fieldType === 'pass' ? this.newPassword = null : this.confirmedNewPassword = null;
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.options.confirmPassword.fcName], 0);
    }
};
PsComplexPasswordConfirmComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsComplexPasswordConfirmComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onPasswordChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onConfirmPasswordChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    passwordRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['passwordRef', { static: false },] }],
    confirmPasswordRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['confirmPasswordRef', { static: false },] }]
};
PsComplexPasswordConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-password-confirm',
        template: _raw_loader_ps_complex_password_confirm_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_password_confirm_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsComplexPasswordConfirmComponent);



/***/ }),

/***/ "mVVo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "s2T5":
/*!*****************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "yedL":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [id]=\"'password_confirm' + id\">\n\n  <ps-input-password class=\"main-password pc-input-label ps-input-text-font-color\" [id]=\"'password_' + id\"\n    [options]=\"options.password\" (onPsEmpty)=\"onfieldEmpty('pass')\" (onPsChange)=\"onChangePassword($event)\"\n    #passwordRef>\n  </ps-input-password>\n\n  <div class=\"col-12 pass-note\">\n    <ps-label *ngIf=\"options.showPasswordHint\" [options]=\"passNote\"></ps-label>\n  </div>\n\n  <ps-input-password class=\"confirm-password pc-input-label ps-input-text-font-color\" [id]=\"'confirmPassword_' + id\"\n    [options]=\"options.confirmPassword\" (onPsEmpty)=\"onfieldEmpty('conf')\"\n    (onPsChange)=\"onChangeConfirmPassword($event)\" #confirmPasswordRef>\n  </ps-input-password>\n  <ng-container>\n    <p *ngIf=\"errorMsg\" class=\"validation-message\">\n      <ps-label [options]=\"{labelKey: errorMsg}\"></ps-label>\n    </p>\n  </ng-container>\n</ps-container-complex>");

/***/ })

}]);
//# sourceMappingURL=default~pages-bpm-dynamic-page-bpm-dynamic-page-module~pages-card-management-card-management-page-mo~12341ccc-es2015.js.map