(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "EGjV":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VVTS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"options\">\n  <div class=\"profile-section\">\n\n    <ps-inline-labeled-camera [options]=\"imageUploadOptions\"></ps-inline-labeled-camera>\n    <div class=\"bank-profile-setion\">\n      <ps-label [options]=\"cifNameOptions\" class=\"ps-label-cifname\"></ps-label>\n      <ps-edit-nickname [options]=\"dynamicEditOptions\"></ps-edit-nickname>\n      <ps-label [options]=\"bvnLabelOptions\" class=\"ps-label-bvn\"\n        *ngIf=\"bvnLabelOptions.labelKey !=undefined && isRetail\">\n      </ps-label>\n      <ps-label [options]=\"userNameOptions\" class=\"ps-label-username\"></ps-label>\n    </div>\n  </div>\n  <div>\n\n    <ps-container-panel [options]=\"panelProfileOptions\" id=\"profile_panel1\">\n\n      <ps-hyperlink-anchor id=\"profile_contact_us\" [options]=\"contactUsOptions\">\n      </ps-hyperlink-anchor>\n\n\n      <ps-hyperlink-anchor id=\"profile_personal_details\" [options]=\"personalDetailsOptions\">\n      </ps-hyperlink-anchor>\n      <ps-hyperlink-anchor id=\"other_details\" [options]=\"relOfficerDetailsOptions\">\n      </ps-hyperlink-anchor>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelSecurityOptions\" id=\"profile_panel2\">\n\n      <ps-hyperlink-anchor id=\"profile_change_pass\" [options]=\"changePasswordPanelOptions\">\n      </ps-hyperlink-anchor>\n\n\n      <ps-hyperlink-anchor id=\"profile_change_pin\" *ngIf=\"EnablePin\" [options]=\"changePinPanelOptions\">\n      </ps-hyperlink-anchor>\n\n\n      <ps-hyperlink-anchor id=\"profile_security_question\" *ngIf=\"EnableSecurityQuestion\"\n        [options]=\"changeSecurityQuestionsPanelOptions\">\n      </ps-hyperlink-anchor>\n\n\n      <ps-hyperlink-anchor id=\"profile_account_deactivation\" [options]=\"accountDeactivationPanelOptions\">\n      </ps-hyperlink-anchor>\n\n      <!-- salah the account deletion option should be added here -->\n      <ps-hyperlink-anchor id=\"profile_account_deletion\" [options]=\"accountDeletionPanelOptions\">\n      </ps-hyperlink-anchor>\n      <!-- end salah -->\n\n      <ps-hyperlink-anchor id=\"trusted_devices_deactivation\" [options]=\"trustedDevicesPanelOptions\">\n      </ps-hyperlink-anchor>\n\n      <ps-hyperlink-anchor id=\"token_management\" [options]=\"tokenManagementPanelOptions\">\n      </ps-hyperlink-anchor>\n\n      <ps-hyperlink-anchor id=\"soft_token_OTP\" [options]=\"softTokenOTPPanelOptions\">\n      </ps-hyperlink-anchor>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelActivityLogOptions\" id=\"profile_panel3\">\n\n      <ps-hyperlink-anchor id=\"my_activity_Log\" [options]=\"activityLogOptions\">\n      </ps-hyperlink-anchor>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelUssdDeactivationOptions\" id=\"profile_panel4\">\n\n      <ps-hyperlink-anchor id=\"ussd_deactivation_Log\" [options]=\"ussdDecativationOptions\">\n      </ps-hyperlink-anchor>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"bvnPanelOptions\" id=\"bvn_panel\"\n      *ngIf=\"bvnLabelOptions.labelKey ==undefined && isRetail\">\n      <ps-hyperlink-anchor id=\"bvn_panel\" [options]=\"bvnOptions\">\n      </ps-hyperlink-anchor>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelPersonalizationOptions\" id=\"profile_panel5\">\n      <ps-hyperlink-anchor id=\"personalizationMyAccount\" [options]=\"myAccountPanelOptions\">\n      </ps-hyperlink-anchor>\n      <ps-hyperlink-anchor id=\"personalizationMyLimits\" [options]=\"myLimitPanelOptions\">\n      </ps-hyperlink-anchor>\n      <ps-hyperlink-anchor id=\"personalizationMyQuickLinks\" [options]=\"myQuickLinksPanelOptions\">\n      </ps-hyperlink-anchor>\n      <!-- <ps-hyperlink-anchor id=\"personalizationMyNotification\" [options]=\"myNotificationsPanelOptions\">\n      </ps-hyperlink-anchor>  -->\n    </ps-container-panel>\n    <ps-container-panel [options]=\"biometricPanelOptions\" id=\"bimetric_panel\" (click)=\"checkBioAvailability()\">\n      <ps-hyperlink-anchor id=\"biometric_panel\" [options]=\"biometricOptions\">\n      </ps-hyperlink-anchor>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"signatoryPanelOptions\" id=\"joint_authorized_signatory_panel\">\n      <ps-hyperlink-anchor id=\"authorized_signatory\" [options]=\"authorizedSignatoryOptions\">\n      </ps-hyperlink-anchor>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"payIdPanelOptions\" id=\"payId_panel\">\n      <ps-hyperlink-anchor id=\"payId-panel\" [options]=\"myPayIdOptions\">\n      </ps-hyperlink-anchor>\n    </ps-container-panel>\n  </div>\n\n\n</ps-template-view>");

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

/***/ "uxLX":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "VVTS");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "EGjV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");














let ProfilePage = class ProfilePage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__["OmniBasePage"] {
    constructor(commonService, logger, router, omniPull) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.router = router;
        this.omniPull = omniPull;
        this.isRetail = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].isRetail;
        this.panelProfileOptions = {
            isExpandable: true,
            labelKey: 'profile_settings_key',
            expanded: true,
            iconName: 'contact'
        };
        this.bvnPanelOptions = {
            isExpandable: true,
            labelKey: 'bvn_settings_key',
            iconName: 'bvn-icon'
        };
        this.panelSecurityOptions = {
            isExpandable: true,
            labelKey: 'security_settings_key',
            expanded: false,
            iconName: 'security_settings',
        };
        this.panelActivityLogOptions = {
            isExpandable: true,
            labelKey: 'activity_log_key',
            expanded: false,
            iconName: 'document',
        };
        this.panelUssdDeactivationOptions = {
            isExpandable: true,
            labelKey: 'opt_out_ussd_channel_key',
            expanded: false,
            iconName: 'warning',
        };
        this.panelPersonalizationOptions = {
            isExpandable: true,
            labelKey: 'personalization_settings_key',
            expanded: false,
            iconName: 'document',
        };
        this.biometricPanelOptions = {
            isExpandable: true,
            labelKey: 'alternative_login_key',
            iconName: 'alternative-fingerprint',
        };
        this.signatoryPanelOptions = {
            isExpandable: true,
            labelKey: 'joint_accounts_settings_key',
            iconName: 'document',
        };
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.profileVO = {};
        this.options = {
            group: this.formGroup
        };
        this.accountDeactivationPanelOptions = {
            // salah changed from deactivation to suspension => US #1432913
            route: 'account-deactivation',
            labelKey: 'account_suspension_key',
            titleOptions: {
                labelKey: 'account_suspension_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'account_suspension_description_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'account_suspension',
            },
            pageOptions: {
                iconName: 'account_suspension',
                title: 'account_suspension_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACCOUNT_DEACTIVATION_OPER
            }
        };
        this.accountDeletionPanelOptions = {
            route: 'account-deletion',
            labelKey: 'account_deletion_key',
            titleOptions: {
                labelKey: 'account_deletion_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'account_deletion_description_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'account_deletion',
            },
            pageOptions: {
                iconName: 'account_deletion',
                title: 'account_deletion_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACCOUNT_DELETION_OPER
            }
        };
        // end salah
        this.trustedDevicesPanelOptions = {
            route: 'trusted-devices-list',
            labelKey: 'my_trusted_devices_key',
            titleOptions: {
                labelKey: 'my_trusted_devices_key',
                psClass: 'ps-anchor-title',
            },
            iconOptions: {
                iconName: 'trusted-devices-icon',
            },
            descriptionOptions: {
                labelKey: 'my_trusted_devices_key',
                psClass: 'ps-anchor-description',
            },
            pageOptions: {
                iconName: 'trusted-devices-icon',
                title: 'my_trusted_devices_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MY_TRUSTED_DEVICE_OPER_ID
            }
        };
        this.tokenManagementPanelOptions = {
            route: 'token-management-options',
            labelKey: 'token_managemnt_key',
            titleOptions: {
                labelKey: 'token_managemnt_key',
                psClass: 'ps-anchor-title',
            },
            iconOptions: {
                iconName: 'token_management',
            },
            descriptionOptions: {
                labelKey: 'token_managemnt_key',
                psClass: 'ps-anchor-description',
            },
            pageOptions: {
                iconName: 'token_management',
                title: 'token_managemnt_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SOFT_TOKEN_OTP_OPER_ID
            }
        };
        this.softTokenOTPPanelOptions = {
            route: 'activate-soft-token-otp',
            labelKey: 'activate_soft_token_otp_key',
            titleOptions: {
                labelKey: 'activate_soft_token_otp_key',
                psClass: 'ps-anchor-title',
            },
            iconOptions: {
                iconName: 'activate_soft_token_otp',
            },
            descriptionOptions: {
                labelKey: 'activate_soft_token_otp_key',
                psClass: 'ps-anchor-description',
            },
            pageOptions: {
                iconName: 'activate_soft_token_otp',
                title: 'activate_soft_token_otp_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SOFT_TOKEN_OTP_OPER_ID
            }
        };
        this.changePasswordPanelOptions = {
            route: 'change-pass',
            labelKey: 'change_password_key',
            titleOptions: {
                labelKey: 'change_password_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'change_your_password_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'change_your_password',
            },
            pageOptions: {
                iconName: 'change_your_password',
                title: 'change_password_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CHANGE_PASSWORD_OPER
            }
        };
        this.changePinPanelOptions = {
            route: 'change-pin',
            labelKey: 'change_pin_key',
            titleOptions: {
                labelKey: 'change_pin_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'displays_the_pin_details_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'key',
            },
            pageOptions: {
                iconName: 'key',
                title: 'change_pin_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CHANGE_PIN_OPER
            }
        };
        this.changeSecurityQuestionsPanelOptions = {
            route: 'change-security-questions',
            labelKey: 'reset_security_question_key',
            titleOptions: {
                labelKey: 'reset_security_question_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'change_your_security_quest_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'change_your_security_quest',
            },
            pageOptions: {
                iconName: 'change_your_security_quest',
                title: 'reset_security_question_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].RESET_SEC_QUESTION_OPER,
            }
        };
        this.contactUsOptions = {
            route: 'contact',
            labelKey: 'notification_contact_key',
            titleOptions: {
                labelKey: 'notification_contact_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'notif_email_and_phone_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'contact-us-mail',
            },
            pageOptions: {
                iconName: 'contact-us-mail',
                title: 'notification_contact_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CONTACT_DETAILS_OPER_ID
            }
        };
        this.bvnOptions = {
            route: 'bank-verification-number',
            labelKey: 'bank_verification_number_key',
            titleOptions: {
                labelKey: 'bvn_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'bvn_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'bvn-icon',
            },
            pageOptions: {
                iconName: 'bvn-icon',
                title: 'bank_verification_number_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BVN_OPER
            }
        };
        this.personalDetailsOptions = {
            route: 'personal-details',
            labelKey: 'personal_information_key',
            titleOptions: {
                labelKey: 'personal_information_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'cif_addr_and_empl_details_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'contact',
            },
            pageOptions: {
                iconName: 'contact',
                title: 'personal_information_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PERSONAL_DETAILS_OPER_ID
            }
        };
        this.relOfficerDetailsOptions = {
            route: 'relationship-officer-details',
            labelKey: 'relationship_officer_details_key',
            titleOptions: {
                labelKey: 'relationship_officer_details_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'display_officer_details_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'bank',
            },
            pageOptions: {
                iconName: 'bank',
                title: 'relationship_officer_details_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DEFAULT_FALLBACK_OPER
            }
        };
        this.activityLogOptions = {
            route: 'activity-log-report',
            labelKey: 'my_activity_log_key',
            titleOptions: {
                labelKey: 'my_activity_log_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'cif_activity_log_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'activity-log',
            },
            pageOptions: {
                iconName: 'activity-log',
                title: 'activity_log_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACTIVITY_LOG_OPER_ID
            },
            navigationOptions: {
                queryParams: {
                    userId: this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO).ocUserId
                }
            }
        };
        this.ussdDecativationOptions = {
            route: 'ussd-deactivation',
            labelKey: 'ussd_deactivation_key',
            titleOptions: {
                labelKey: 'ussd_deactivation_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'ussd_deactivation_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'warning',
            },
            pageOptions: {
                iconName: 'warning',
                title: 'ussd_deactivation_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OPT_OUT_USSD_DEACTIVATION_OPER_ID
            },
        };
        this.cifNameOptions = {
            fcName: 'cifName'
        };
        this.bvnLabelOptions = {
            fcName: 'bvnLabel'
        };
        this.userNameOptions = {
            previewMode: true,
            fcName: 'userName'
        };
        this.imageUploadOptions = {
            fcName: 'profilePicture',
            group: this.formGroup,
            actionImageOptions: {
                imageName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DEFAULT_IMAGE
            }
        };
        this.myAccountPanelOptions = {
            route: 'personalize-accounts',
            labelKey: 'my_accounts_key',
            titleOptions: {
                labelKey: 'my_accounts_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'my_accounts_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'accounts',
            },
            pageOptions: {
                iconName: 'accounts',
                title: 'my_accounts_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PERSONALIZE_MY_ACCOUNTS_OPER_ID
            }
        };
        this.myLimitPanelOptions = {
            route: 'personalize-my-limit',
            labelKey: 'my_limit_key',
            titleOptions: {
                labelKey: 'my_limit_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'my_limit_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'my_limit',
            },
            pageOptions: {
                iconName: 'my_limit',
                title: 'my_limit_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PERSONALIZE_MY_LIMIT_OPER_ID
            }
        };
        this.myQuickLinksPanelOptions = {
            route: 'personalize-my-quick-links',
            labelKey: 'my_quick_links_key',
            titleOptions: {
                labelKey: 'my_quick_links_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'my_quick_links_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'my_quick_links',
            },
            pageOptions: {
                iconName: 'my_quick_links',
                title: 'my_quick_links_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].PERSONALIZE_MY_QUICK_LINK_OPER_ID
            }
        };
        this.biometricOptions = {
            route: 'alternative-login',
            labelKey: 'biometric_login_key',
            titleOptions: {
                labelKey: 'biometric_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'biometric_login_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'biometric-fingerprint',
            },
            pageOptions: {
                iconName: 'finger-print',
                title: 'biometric_login_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ALTERNATIVE_LOGIN_OPER_ID
            }
        };
        this.myPayIdOptions = {
            route: 'my-payId-list',
            labelKey: 'my_payid_key',
            titleOptions: {
                labelKey: 'my_payId_management_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'regiester_and_manage_your_payId_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'info',
            },
            pageOptions: {
                iconName: 'info',
                title: 'my_payid_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MY_payId
            }
        };
        this.authorizedSignatoryOptions = {
            route: 'authorized-signatory',
            labelKey: 'authorized-signatory_key',
            titleOptions: {
                labelKey: 'biometric_key',
                psClass: 'ps-anchor-title',
            },
            descriptionOptions: {
                labelKey: 'joint_and_authorized_signatory_key',
                psClass: 'ps-anchor-description',
            },
            iconOptions: {
                iconName: 'info',
            },
            pageOptions: {
                iconName: 'info',
                title: 'joint_and_authorized_signatory_key',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ALTERNATIVE_LOGIN_OPER_ID
            }
        };
        this.payIdPanelOptions = {
            isExpandable: true,
            labelKey: 'my_payid_key',
            iconName: 'info',
        };
        this.dynamicEditOptions = {};
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup; // Added by Zunair For #BUG 1257538
        //PsCommonSettings.oper_ID = CommonBussinessConstant.PROFILE_IMAGE_OPER_ID; *commented by ghada tp#1264414 for fixing customization issue on refresh profile screen
        this.userInformation = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
        if (this.userInformation.profileImage) {
            this.imageUploadOptions.actionImageOptions.imageBase64Url = this.userInformation.profileImage;
            this.imageUploadOptions.actionImageOptions.imageName = '';
        }
        this.cifNameOptions.labelKey = this.userInformation.customerInfoCO.shortName;
        this.userNameOptions.labelKey = this.userInformation.omniUserVO.NAME;
        this.commonService.logger.log('userinfo:', this.userInformation);
        this.omniPull.getParamValOf('EnableSecurityQuestion', 'RequireTransactionPassword').then(res => {
            this.EnableSecurityQuestion = res.EnableSecurityQuestion;
            this.EnablePin = res.RequireTransactionPassword;
        }).catch(err => this.logger.log(err));
        const userInfo = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
        if (userInfo && userInfo.omniUserVO[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LINKED_BVN]) {
            this.bvnLabelOptions.labelKey = ' - ' + this.commonProv.translate('bvn_profile_key') + ': ' + userInfo.omniUserVO[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LINKED_BVN];
        }
        this.dynamicEditOptions = {
            itemCard: this.itemCard,
            group: this.formGroup,
            isEditable: true,
            valueMap: this.commonProv.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].USER_NICKNAME) || (this.userInformation.personalizationCO ? this.userInformation.personalizationCO.nickname : undefined) || this.userInformation.customerInfoCO.longName,
            fcName: 'nickname',
            placeHolder: "edit_nickname_key"
        };
    }
    checkBioAvailability() {
        if (this.commonProv.isNativeMobile()) {
            this.commonProv.isbiometricAvaliable().then((res) => {
                if (res == false) {
                    this.biometricOptions.pageOptions = undefined;
                    this.biometricPanelOptions.expanded = false;
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentInfoAlert(this.commonProv.translate('device_do_not_support_biometrics_key'));
                }
            });
        }
        else {
            this.biometricPanelOptions.expanded = false;
            this.biometricOptions.pageOptions = undefined;
            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_11__["CommonUtils"].presentInfoAlert(this.commonProv.translate('device_do_not_support_biometrics_key'));
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] }
];
ProfilePage.propDecorators = {
    itemCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=57-es2015.js.map