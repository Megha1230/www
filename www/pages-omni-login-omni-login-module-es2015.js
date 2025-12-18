(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-omni-login-omni-login-module"],{

/***/ "+kcj":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-tooltip/ps-complex-tooltip.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tooltip-container\">\r\n    <ps-container-html-viewer class=\"tooltiptext\" *ngIf=\"ifResult && htmlViewerOptions.fileName\"\r\n        [options]=\"htmlViewerOptions\">\r\n    </ps-container-html-viewer>\r\n    <ps-action-icon [options]=\"tooltipOptions\">\r\n    </ps-action-icon>\r\n</div>");

/***/ }),

/***/ "/naD":
/*!***********************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-login/ps-template-login.page.ts ***!
  \***********************************************************************************/
/*! exports provided: PsTemplateLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateLoginPage", function() { return PsTemplateLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_template_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-template-login.page.html */ "M1mx");
/* harmony import */ var _ps_template_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-template-login.page.scss */ "Yurl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _awesome_cordova_plugins_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/fingerprint-aio/ngx */ "8cTo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _psComponents_ps_base_ps_base_action_ps_action_button_ps_button_submit_ps_button_submit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../psComponents/ps-base/ps-base-action/ps-action-button/ps-button-submit/ps-button-submit.component */ "OPJk");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_username_ps_input_username_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-username/ps-input-username.component */ "6pjd");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_input_password_ps_input_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-input-password/ps-input-password.component */ "1kNi");
/* harmony import */ var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../psServices/models/common-constant */ "zngb");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../psServices/models/ps-app-settings */ "lE2x");
/* harmony import */ var _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.page */ "uqA0");
/* harmony import */ var _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





















let PsTemplateLoginPage = class PsTemplateLoginPage extends _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_17__["PsTemplateBasePage"] {
    constructor(faio, alertCtrl, commonServices, route, logger, omniPull) {
        super();
        this.faio = faio;
        this.alertCtrl = alertCtrl;
        this.commonServices = commonServices;
        this.route = route;
        this.logger = logger;
        this.omniPull = omniPull;
        this.mainOptions = {};
        this.longUserName = '';
        this.rememberMeFromStorage = false;
        this.showBannerOnLogin = false;
        this.showBiometricButton = false;
        this.passwordChanged = false;
        this.onlineRegistrationOptions = {
            route: 'online-registration',
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].ONLINE_REGISTRATION_OPER,
                title: 'online_registration_key',
                iconName: 'user'
            },
            iconOptions: {
                iconName: 'user',
                labelOptions: {
                    labelKey: 'online_registration_key' // used for the anchor label description
                }
            }
        };
        this.reactivateMyAccountOptions = {
            route: 'reactivate-my-account',
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REACTIVATE_ACCOUNT_OPER,
                title: 'ractivate_my_account_key',
                iconName: 'reactivate-my-account'
            },
            iconOptions: {
                iconName: 'reactivate-my-account',
                labelOptions: {
                    labelKey: 'reactivate_my_account_key'
                }
            }
        };
        this.helpCredentialsOptions = {
            route: 'forgot-credentials',
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].FORGOT_CREDENTIALS_OPER,
                iconName: 'help-circle',
                title: 'help_with_credentials_key'
            },
            iconOptions: {
                iconName: 'help-circle',
                labelOptions: {
                    labelKey: 'help_with_credentials_key'
                }
            }
        };
        this.captchaOptions = {
            fcName: 'recaptchaReactive',
        };
        this.onUserNameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.logInClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.defaultConfiguration = {
            password: {
                fcName: 'userPassword',
            },
            userName: {
                fcName: 'userName',
            },
            rememberMe: {
                labelKey: 'remember_me_key',
                fcName: 'rememberMe',
            }
        };
        this.biometricLoginOptions = {
            iconOptions: {
                iconName: 'finger-print',
                labelOptions: {
                    labelKey: 'biometric_login_key',
                }
            }
        };
        this.submitOptions = {
            group: this.mainOptions.group,
            labelKey: 'login_key',
            submitServiceUrl: _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].serviceUrl.authenticate,
            enableNavigateBack: false,
            preCallFunction: {
                func() {
                    return new Promise((resolve) => {
                        resolve(this.executionClass.setOperId());
                    });
                },
                executionClass: this
            },
            postCallFunction: {
                func(response) {
                    return new Promise((resolve, reject) => {
                        resolve(this.executionClass.logIn(response));
                    });
                },
                params: [this],
                executionClass: this
            },
        };
        this.userWelcomeOptions = {
            labelKey: 'welcome_key',
        };
        this.longUserNameOptions = {};
        this.rememberMeCase = false;
        this.userNameValue = null;
        this.operId = 'operId_' + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].oper_ID;
    }
    set option(val) {
        if (val) {
            this.mainOptions = val;
            /* if (val.navigationHandler && this.submitOptions) {
              this.submitOptions = {
                ...this.submitOptions,
                navigationHandler: val.navigationHandler
              };
            } */
        }
    }
    ngOnInit() {
        // Added by Richie to log the time of of the specific action
        if (_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_14__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
            _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].timeLogs.push('in template-login, ngOnInit with start time: ' + (new Date()).toISOString());
        }
        // end 
        this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['reactivate-my_account_link'], 0);
        this.init();
        this.omniPull.getParamValOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].APPLY_LOGIN_VALIDATIONS).then((result) => {
            if (result[_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].APPLY_LOGIN_VALIDATIONS]) {
                this.applyLoginValidations = true;
            }
        });
        //AZDB-9537 AIBIRQI240102 - clone from IDB230105 , AZDB-4929 as per PM the re activate link shouldn't be available in corporate
        if (_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID != _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].CORPORATE_APP_ID) {
            this.showHideReactivateLink();
        }
        this.showBannerOnLogin = _psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_14__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.UI_CONFIGURATION.DISPLAY_SLIDER_ON_LOGIN;
        this.commonProv.copyObject(this.mainOptions, this.defaultConfiguration, false, true);
        this.submitOptions.group = this.mainOptions.group;
        this.captchaOptions.group = this.mainOptions.group;
        const defaultValidations = new Map();
        defaultValidations.set(this.mainOptions.userName.fcName, {
            required: true
        });
        defaultValidations.set(this.mainOptions.password.fcName, {
            required: true
        });
        this.commonProv.setDefaultValidators(defaultValidations, this.mainOptions.group);
        this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.mainOptions.password.fcName], 1);
        this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.mainOptions.rememberMe.fcName], 0);
        this.commonProv.session.append(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AUTO_LOGIN, 0);
        this.resultusername = '';
        this.commonProv.session.getStoredValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].USER_NAME).then(result => {
            this.resultusername = result;
        });
        this.commonProv.session.getStoredValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REMEMBER_ME + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID).then(result => {
            var _a, _b;
            this.commonProv.setValInsideNestedObj(this.mainOptions.rememberMe.fcName, result, (_a = this.mainOptions.group.controls.formData) === null || _a === void 0 ? void 0 : _a.value);
            if (result) {
                this.rememberMeFromStorage = true;
                if (this.resultusername) {
                    this.rememberMeCase = true;
                    this.commonProv.setValInsideNestedObj(this.mainOptions.userName.fcName, this.resultusername, (_b = this.mainOptions.group.controls.formData) === null || _b === void 0 ? void 0 : _b.value);
                    const preLoginParams = this.commonProv.session.getValueOf(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].PRE_LOGIN_PARAMS);
                    if (preLoginParams) {
                        //Edited by ghada, tp#1304017 for considering appId when saving remember me flag and user long / name in the session 
                        //to fix the issue of having saved changes of one app not to reflect on the other app like remeber me flag and username appear on login when opening both retail and corporate apps in the same browser
                        this.commonProv.session.getStoredValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].USER_LONG_NAME_KEY + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID).then(resultUserLongName => {
                            if (resultUserLongName) {
                                this.longUserName = resultUserLongName;
                                this.longUserNameOptions.labelKey = resultUserLongName;
                            }
                        });
                        if (preLoginParams[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ENABLE_BIOMETRICS_PARAM] && preLoginParams[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ENABLE_BIOMETRICS_PARAM].parameterVal === 'true'
                            && _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isNativeMobile()) {
                            this.biometricSubmitOptions = {
                                labelKey: 'biometric_login_key',
                                iconName: 'biometric',
                                psClass: 'ps-button-submit',
                                group: this.mainOptions.group,
                                biometricOptions: {
                                    username: this.resultusername
                                }
                            };
                            this.commonProv.session.getStoredValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].BIOMETRIC_LOGIN).then(result => {
                                if (result) {
                                    this.showBiometricButton = true;
                                    /*Mofified by ghada, tp1578210 using pipe(distinctUntilChanged()) in order to subscribe to observable only for distinct change
                                      and merging the two checks for splash screen (app loading) to eliminate unnecessary services calls resulted in security error */
                                    this.isSplashScreenVisibleObs = this.commonServices.isSplashScreenVisible.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(result => {
                                        if (result != undefined && result === false && !_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].bn6Vh8DfrTErfPp4) {
                                            this.doBiometricLogin();
                                        }
                                    });
                                }
                            });
                        }
                    }
                }
            }
        });
        this.commonServices.cancelClicked.subscribe(cancelClicked => {
            // Adding if conditions by Richie for #TP 1105083 since they were generating an error due to call reset of undifiend in case of closing the page with force logout
            if (this.submitOptions.group && this.submitOptions.group.controls) {
                if (this.submitOptions.group.controls[this.mainOptions.userName.fcName]) {
                    this.commonProv.session.getStoredValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REMEMBER_ME + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID).then(result => {
                        if (!result) {
                            // this.submitOptions.group.controls[this.mainOptions.userName.fcName].reset();
                        }
                    });
                }
                if (this.submitOptions.group.controls[this.mainOptions.password.fcName]) {
                    // this.submitOptions.group.controls[this.mainOptions.password.fcName].reset();
                }
            }
        });
        //Makki, Jira #6380 Subscribe to onSubmit event to do some precheckings before calling
        this.onSubmitListener = this.commonProv.events.subscribe("onSubmit", (formGroup) => {
            this.recheckCredentialsValue(formGroup);
        });
        //Temp Code: Makki jira #6380 Disable login button till both username & password are filled
        this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, ['login_submit'], 1);
        //End of Temp Code
        // Added by Richie to log the time of of the specific action
        if (_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_14__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
            _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].timeLogs.push('in template-login, ngOnInit with end time: ' + (new Date()).toISOString());
        }
        // end Richie
        this.logger.logForTesting('*****************Login screen display:******* ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        console.log('*****************Login screen display: ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
    }
    // Added by Richie to log the time of of the specific action
    ionViewDidEnter() {
        if (_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_14__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
            _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].timeLogs.push('in template-login, ionViewDidEnter with start time: ' + (new Date()).toISOString());
        }
    }
    // end Richie
    doBiometricLogin() {
        if (this.showBiometricButton) {
            //modified by ahmed regarding TP#1312400 to check if the user logged in through this session or not
            if (!this.commonProv.session.getValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].SESSION_LOGGED_IN)) {
                this.commonProv.checkBiometricAuthentication(this.biometricSubmitOptions.biometricOptions).then(bioResult => {
                    /*Mofified by ghada, tp1578210 using pipe(distinctUntilChanged()) in order to subscribe to observable only for distinct change
                      to eliminate unnecessary  services calls resulted in security error */
                    this.commonProv.biometricAuthResult.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(bioResultObs => {
                        if (bioResult === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].BIOMETRIC_AUTH_SUCCESS || bioResultObs === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].BIOMETRIC_AUTH_SUCCESS) {
                            this.logInByBiometric();
                        }
                    });
                });
            }
        }
    }
    logInByBiometric() {
        this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.mainOptions.password.fcName], 0);
        this.commonProv.session.append(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AUTO_LOGIN, 1);
        this.submitButtonRef.callServer();
    }
    logIn(loginResponse) {
        var _a, _b;
        this.logger.logForTesting('*****************loggedIn:******* ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        console.log('*****************loggedIn: ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        if ((_a = this.submitOptions.group.controls[this.mainOptions.rememberMe.fcName]) === null || _a === void 0 ? void 0 : _a.value) {
            this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REMEMBER_ME + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID, (_b = this.submitOptions.group.controls[this.mainOptions.rememberMe.fcName]) === null || _b === void 0 ? void 0 : _b.value, true);
            this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].USER_NAME, loginResponse.userName, true);
        }
        else {
            this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REMEMBER_ME + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID, false, true);
            this.commonProv.session.remove(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].USER_NAME);
        }
        this.commonProv.session.append(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AUTH_USER_NAME, loginResponse.userName, true);
        this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].SESSION_LOGGED_IN, true, false);
        this.logInClicked.emit(Object.assign(Object.assign({}, JSON.parse(JSON.stringify(this.mainOptions.group.controls.formData.value))), loginResponse));
    }
    onChangeUserName(event) {
        if (event && event.newValue && this.mainOptions.group.controls.formData.value[this.mainOptions.userName.fcName]) {
            this.logger.logForTesting('*****************userName filled:******* ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
            console.log('*****************userName filled: ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        }
        if (event && event.newValue && this.showBiometricButton) {
            this.showBiometricButton = false;
        }
    }
    onChangePassword(event) {
        if (event && event.newValue && this.mainOptions.group.controls.formData.value[this.mainOptions.password.fcName]) {
            this.logger.logForTesting('*****************password filled:******* ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
            console.log('*****************password filled: ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        }
        if (event && event.newValue) {
            this.showBiometricButton = false;
            this.passwordChanged = true;
            this.commonProv.session.append(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].AUTO_LOGIN, 0); //Added by ghada, tp1578210 for handling the login case where biometric login is enabled but user chooses to enter his password to login
        }
    }
    onToggle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!event.newValue && event.oldValue) { //Modified by ghada, tp1562091 for excluding the default value case on page initilization, and to clear the session only in scnerios: - user change (from screen) - programmatically change on login with toggle button being unchecked 
                if (this.rememberMeFromStorage && this.resultusername) {
                    this.rememberMeCase = false;
                }
                this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].USER_NAME, "", true);
                this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REMEMBER_ME + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID, false, true);
            }
            if (this.commonProv.isMobile()) {
                this.commonProv.session.getStoredValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].BIOMETRIC_LOGIN).then(result => {
                    this.isBioAvailable = result;
                });
            }
            if (this.commonProv.isMobile() && event.newValue === false && event.oldValue && this.isBioAvailable) {
                const alertController = {
                    cssClass: 'ps-button-save',
                    header: 'biometric_login_will_be_disabled_key',
                    inputs: [
                        {
                            options: {
                                placeHolder: 'are_you_sure_you_want_to_continue_key',
                                fcName: 'menuPageSelection',
                                group: this.options.group,
                                disablePreview: true
                            }
                        }
                    ],
                    buttons: [
                        {
                            role: 'cancel',
                            options: {
                                labelKey: 'cancel_key',
                                psClass: 'ps-drafts-report-cancel-button',
                                group: null
                            },
                            handler: () => {
                                this.commonProv.setValInsideNestedObj(this.mainOptions.rememberMe.fcName, true, this.mainOptions.group.controls.formData.value);
                            }
                        }, {
                            role: 'cancel',
                            options: {
                                labelKey: 'confirm_key',
                                iconName: 'paper-plane',
                                psClass: 'ps-drafts-report-submit-button',
                                group: this.options.group
                            },
                            handler: () => {
                                this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].BIOMETRIC_LOGIN, false, true);
                            }
                        }
                    ]
                };
                this.commonProv.presentPsAlert(alertController, 'off-toggle-confirmation');
            }
            // MFawzy,14122021,TP#1303741,Reset longUsername, userName, and password fields and remove userLongName from session in case the toggler is off
            if (event.newValue == false && this.longUserName != '') {
                this.longUserName = '';
                this.submitOptions.group.controls[this.mainOptions.userName.fcName].reset();
                this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].USER_LONG_NAME_KEY + _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID, '', true); //Edited by ghada, tp#1304017 for considering appId when saving remember me flag and user long / name in the session 
                //to fix the issue of having saved changes of one app not to reflect on the other app like remeber me flag and username appear on login when opening both retail and corporate apps in the same browser
            }
            // End MFawzy
            if (event.newValue == false && this.showBiometricButton == true) {
                this.showBiometricButton = false;
            }
            else if (event.newValue == true && this.showBiometricButton == false && !this.passwordChanged && this.isBioAvailable) {
                this.showBiometricButton = true;
            }
        });
    }
    onUserNameChangeFn(event) {
        this.onUserNameChange.emit(event);
    }
    // Added by: MFawzy for tp#1415074 - Comminting checkUsername method for disabling the checking of the maskedUsername as its not being used in the login process anymore
    setOperId() {
        return new Promise((resolve, reject) => {
            _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].oper_ID = _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].LOGIN_OPER_ID;
            if (this.applyLoginValidations) {
                this.commonServices.http.commonRequestAjax(_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].serviceUrl.authenticate, Object.assign({}, this.submitOptions.group.controls.formData.value)).then(result => {
                    if (result.success)
                        resolve(true);
                }).catch(error => {
                    reject();
                });
            }
            else
                resolve(true);
        });
    }
    onEmptyUsername() {
        this.logger.logForTesting('*****************userName deleted:*******' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        console.log('*****************userName deleted: ' + (new Date()).toISOString().replace('T', ' ').replace('Z', ''));
        // this.submitOptions.group.controls[this.mainOptions.password.fcName].reset();
    }
    ngOnDestroy() {
        if (this.isSplashScreenVisibleObs) {
            this.isSplashScreenVisibleObs.unsubscribe();
        }
        this.onSubmitListener.unsubscribe();
    }
    //Makki, Jira #6380 Check if Username/password was showing values in fields but not registered in group value
    recheckCredentialsValue(formGroup) {
        //Makki, Jira #6380 Ignore userName checking in case remember Me is active to avoid overriding the value from session.
        if (!this.rememberMeFromStorage && _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(this.mainOptions.group.controls.formData.value[this.mainOptions.userName.fcName])) {
            this.populateValueUsingVanillaJs(this.mainOptions.userName.fcName, this.usernameRef.inputRef.getDomRef());
        }
        if (_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(this.mainOptions.group.controls.formData.value[this.mainOptions.password.fcName])) {
            this.populateValueUsingVanillaJs(this.mainOptions.password.fcName, this.passwordRef.inputRef.getDomRef());
        }
    }
    //Makki, Jira #6380 Populate missing values to form group using Vanilla JS and dom Reference
    populateValueUsingVanillaJs(fcName, domRef) {
        if (_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(domRef.value)) {
            return;
        }
        let vanillaValue = domRef.value;
        let patchedObject = {};
        patchedObject[fcName] = vanillaValue;
        this.submitOptions.group.patchValue(patchedObject);
        this.commonProv.setValInsideNestedObj(fcName, vanillaValue, this.mainOptions.group.controls.formData.value);
    }
    onUsernameKeyUp(event) {
        var _a, _b;
        this._manageLoginButtonKey((_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.value, (_b = this.passwordRef.inputRef.getDomRef()) === null || _b === void 0 ? void 0 : _b.value);
    }
    onPasswordKeyUp(event) {
        var _a, _b, _c;
        if (this.rememberMeFromStorage && this.resultusername && this.rememberMeCase) {
            this._manageLoginButtonKey(this.resultusername, (_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _a === void 0 ? void 0 : _a.value);
        }
        else {
            this._manageLoginButtonKey((_b = this.usernameRef.inputRef.getDomRef()) === null || _b === void 0 ? void 0 : _b.value, (_c = event === null || event === void 0 ? void 0 : event.currentTarget) === null || _c === void 0 ? void 0 : _c.value);
        }
    }
    //Temp Code: Makki jira #6380 Disable login button till both username & password are filled
    _manageLoginButtonKey(userName, password) {
        let userNameIsValidFlag = false;
        let passwordIsValidFlag = false;
        if (!_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(userName)) {
            userNameIsValidFlag = true;
        }
        if (!_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].isEmptyOrNull(password)) {
            passwordIsValidFlag = true;
        }
        if (userNameIsValidFlag && passwordIsValidFlag) {
            this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, ['login_submit'], 0);
        }
        else {
            this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, ['login_submit'], 1);
        }
    }
    //AZDB-9537 AIBIRQI240102 - clone from IDB230105
    showHideReactivateLink() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.getParamValOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].ALLOW_ONLINE_SELF_REACTIVATION);
            if (result[_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].ALLOW_ONLINE_SELF_REACTIVATION]) {
                this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['reactivate-my_account_link'], 1);
                this.submitOptions.overrideAlerts = [{
                        code: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].DEACTIVATED_USER_ERROR_CODE,
                        optionsAlert: {
                            message: this.commonServices.translate('user_is_deactivated_key') + '\n' + this.commonServices.translate('reactivate_your_account_key'),
                            buttonsArray: [
                                {
                                    group: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormGroup"]({}),
                                    labelKey: 'yes_key',
                                    handler: () => {
                                        _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].dismissAllModals();
                                        let page = {
                                            title: 'reactivate_my_account_key',
                                            icon: 'reactivate-my-account',
                                            operID: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].REACTIVATE_ACCOUNT_OPER,
                                            component: 'reactivate-my-account',
                                        };
                                        this.navService.openPage(page);
                                        return;
                                    }
                                },
                                {
                                    group: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormGroup"]({}),
                                    labelKey: 'no_key',
                                    handler: () => {
                                        _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].dismissAllModals();
                                        return;
                                    }
                                }
                            ]
                        }
                    }];
            }
        });
    }
};
PsTemplateLoginPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_18__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_19__["OmniPullService"] }
];
PsTemplateLoginPage.propDecorators = {
    showForgotPwd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    option: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['options',] }],
    onUserNameChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    logInClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    submitButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['submitButton', { static: false },] }],
    usernameRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['usernameRef', { static: false },] }],
    passwordRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['passwordRef', { static: false },] }],
    operId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
};
PsTemplateLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-login',
        template: _raw_loader_ps_template_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_awesome_cordova_plugins_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_18__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_19__["OmniPullService"]])
], PsTemplateLoginPage);



/***/ }),

/***/ "0mnr":
/*!*******************************************************!*\
  !*** ./src/app/pages/omni-login/omni-login.module.ts ***!
  \*******************************************************/
/*! exports provided: OmniLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniLoginPageModule", function() { return OmniLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_tooltip_ps_complex_tooltip_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-tooltip/ps-complex-tooltip.component.module */ "KOMg");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_allowed_languages_ps_dropdown_allowed_languages_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-allowed-languages/ps-dropdown-allowed-languages.component.module */ "KlyO");
/* harmony import */ var _commonSRC_psTemplates_ps_template_login_ps_template_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonSRC/psTemplates/ps-template-login/ps-template-login.module */ "c46C");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _omni_login_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./omni-login.page */ "NEl1");









let OmniLoginPageModule = class OmniLoginPageModule {
};
OmniLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _omni_login_page__WEBPACK_IMPORTED_MODULE_8__["OmniLoginPage"]
                }
            ]),
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _commonSRC_psTemplates_ps_template_login_ps_template_login_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateLoginPageModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_tooltip_ps_complex_tooltip_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexTooltipComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_allowed_languages_ps_dropdown_allowed_languages_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownAllowedLanguagesComponentModule"],
        ],
        declarations: [_omni_login_page__WEBPACK_IMPORTED_MODULE_8__["OmniLoginPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], OmniLoginPageModule);



/***/ }),

/***/ "9Kmo":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-tooltip/ps-complex-tooltip.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PsComplexTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexTooltipComponent", function() { return PsComplexTooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_tooltip_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-tooltip.component.html */ "+kcj");
/* harmony import */ var _ps_complex_tooltip_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-tooltip.component.scss */ "HGZG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexTooltipComponent = class PsComplexTooltipComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.options = {};
        this.tooltipOptions = {
            iconName: 'info'
        };
        this.showArrow = true;
        this.ifResult = false;
    }
    ngOnInit() {
        this.tooltipOptions.iconName = this.options.iconName ? this.options.iconName : "info";
        const result = this.options.fileName;
        if (result) {
            this.htmlViewerOptions = {
                fileName: result
            };
            this.ifResult = true;
        }
    }
};
PsComplexTooltipComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexTooltipComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexTooltipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-tooltip',
        template: _raw_loader_ps_complex_tooltip_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_tooltip_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexTooltipComponent);



/***/ }),

/***/ "HGZG":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-tooltip/ps-complex-tooltip.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXRvb2x0aXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "KOMg":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-tooltip/ps-complex-tooltip.component.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PsComplexTooltipComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexTooltipComponentModule", function() { return PsComplexTooltipComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_complex_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-complex-tooltip.component */ "9Kmo");





let PsComplexTooltipComponentModule = class PsComplexTooltipComponentModule {
};
PsComplexTooltipComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexTooltipComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
        ],
        exports: [_ps_complex_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexTooltipComponent"]],
        entryComponents: [_ps_complex_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexTooltipComponent"]]
    })
], PsComplexTooltipComponentModule);



/***/ }),

/***/ "M1mx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-login/ps-template-login.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-base>\n    <div class=\"ps-template-login-banners widget-banner\" *ngIf=\"showBannerOnLogin\" psHeader>\n        <div class=\"login-banners\" banner>\n            <ps-gallery-banners id=\"login_banner\" class=\"profile-animate-left\" [options]='bannersOptions'>\n            </ps-gallery-banners>\n        </div>\n    </div>\n    <ion-card class=\"ps-template-login-card\">\n        <div class=\"ps-template-login-card-flex\">\n            <div class=\"ps-template-login-logo\">\n                <ng-content select=\"[header]\"></ng-content>\n            </div>\n            <div id=\"ps-container-login-form\">\n                <div *ngIf=\"this.rememberMeFromStorage && this.longUserName != '' \" class=\"ps-template-login-longName\">\n                    <ps-label [options]=\"userWelcomeOptions\"></ps-label>\n                    <ps-label [options]=\"longUserNameOptions\"></ps-label>\n                </div>\n                <div class=\"ps-template-login-username\"\n                    *ngIf=\"!(this.rememberMeFromStorage && this.longUserName != '')\">\n                    <ps-input-username #usernameRef [id]=\"'username_' + id\" [options]=\"mainOptions.userName\"\n                        (onPsEmpty)=\"onEmptyUsername()\" (onPsKeyUp)=\"onUsernameKeyUp($event)\"\n                        (onPsChange)=\"onChangeUserName($event)\"></ps-input-username>\n                </div>\n                <div class=\"ps-template-login-password\">\n                    <ps-input-password #passwordRef [id]=\"'password_' + id\" [options]=\"mainOptions.password\"\n                        (onPsKeyUp)=\"onPasswordKeyUp($event)\"\n                        (onPsChange)=\"onChangePassword($event)\"></ps-input-password>\n                </div>\n                <div class=\"ps-template-login-rememberMe\">\n                    <ps-select-toggle [id]=\"'rememberMe_' + id\" [options]=\"mainOptions.rememberMe\"\n                        class=\"ps-template-login-rememberMe-toggle\" (onPsChange)=\"onToggle($event)\">\n                    </ps-select-toggle>\n                </div>\n                <div class=\"ps-template-login-captcha\">\n                    <ps-captcha [id]=\"'captcha_' + id\" [options]=\"captchaOptions\">\n                    </ps-captcha>\n                </div>\n                <div class=\"ps-template-login-help\">\n                    <ps-action-hyperlink id=\"help_with_cred_link\" [options]=\"helpCredentialsOptions\">\n                    </ps-action-hyperlink>\n                    <ps-action-hyperlink class=\"reactivate-my-account-link\" id=\"reactivate_my_account_link\"\n                        [options]=\"reactivateMyAccountOptions\">\n                    </ps-action-hyperlink>\n                </div>\n\n                <!-- \n                    <div class=\"ps-template-login-biometric\">\n                        <ps-action-anchor id=\"'biometric_login_' + id\" [options]=\"biometricLoginOptions\" (onClick)=\"logInByBiometric(true)\">\n                        </ps-action-anchor>\n                    </div> \n                -->\n                <div class=\"ps-template-login-submit\">\n                    <ps-button-submit #submitButton id=\"login_submit\" [options]=\"submitOptions\" class=\"ps-login-submit\">\n                    </ps-button-submit>\n                    <ps-button-biometric *ngIf=\"showBiometricButton\" class=\"ps-biometric-submit\"\n                        [options]=\"biometricSubmitOptions\" id=\"biommmmetric_submit\"\n                        (authenticateBiometric)=\"logInByBiometric()\">\n                    </ps-button-biometric>\n                </div>\n                <div class=\"additional-links\">\n                    <ps-action-hyperlink class=\"online-registration-link\" id=\"online_registration_link\"\n                        [options]=\"onlineRegistrationOptions\">\n                    </ps-action-hyperlink>\n                </div>\n\n                <div class=\"ps-template-login-links\">\n                    <ng-content select=\"[footer]\"></ng-content>\n                </div>\n                <div class=\"bank-name\">\n                    <ng-content select=\"[bankName]\"></ng-content>\n                </div>\n            </div>\n            <ng-content select=\"[login-fab-list]\"></ng-content>\n            <!-- <div>\n                <ng-content select=\"[serverUrl]\"></ng-content>\n            </div> -->\n        </div>\n    </ion-card>\n</ps-template-base>");

/***/ }),

/***/ "Yurl":
/*!*************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-login/ps-template-login.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS1sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "c46C":
/*!*************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-login/ps-template-login.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PsTemplateLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateLoginPageModule", function() { return PsTemplateLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_captcha_ps_captcha_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-captcha/ps-captcha.component.module */ "en3d");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_menu_header_container_ps_complex_menu_header_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-menu-header-container/ps-complex-menu-header-container.module */ "ab+Q");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_base_ps_template_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.module */ "IH4Z");
/* harmony import */ var _ps_template_login_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ps-template-login.page */ "/naD");









let PsTemplateLoginPageModule = class PsTemplateLoginPageModule {
};
PsTemplateLoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__["PsComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ps_template_base_ps_template_base_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBasePageModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_menu_header_container_ps_complex_menu_header_container_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexMenuHeaderContainerModule"],
            src_app_commonBussinessSRC_psComponents_ps_captcha_ps_captcha_component_module__WEBPACK_IMPORTED_MODULE_3__["PsCaptchaComponentModule"],
        ],
        declarations: [_ps_template_login_page__WEBPACK_IMPORTED_MODULE_8__["PsTemplateLoginPage"]],
        exports: [_ps_template_login_page__WEBPACK_IMPORTED_MODULE_8__["PsTemplateLoginPage"]],
        entryComponents: [_ps_template_login_page__WEBPACK_IMPORTED_MODULE_8__["PsTemplateLoginPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsTemplateLoginPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-omni-login-omni-login-module-es2015.js.map