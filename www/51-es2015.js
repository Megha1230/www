(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "/gsp":
/*!*******************************************************!*\
  !*** ./src/app/pages/omni-login/omni-login.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWxvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "NEl1":
/*!*****************************************************!*\
  !*** ./src/app/pages/omni-login/omni-login.page.ts ***!
  \*****************************************************/
/*! exports provided: OmniLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniLoginPage", function() { return OmniLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_omni_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./omni-login.page.html */ "xql0");
/* harmony import */ var _omni_login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omni-login.page.scss */ "/gsp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_errorhandler_errorhandler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/errorhandler/errorhandler.service */ "K1pK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");
/* harmony import */ var src_app_commonSRC_psServices_session_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/session/session.service */ "bQcQ");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_push_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/omni-common/omni-push.service */ "ysEX");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");



















let OmniLoginPage = class OmniLoginPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_18__["OmniBasePage"] {
    constructor(navService, session, alertCtrl, omniPush, ommniCommon, errorHandlerService, omniPull) {
        var _a, _b, _c, _d;
        super();
        this.navService = navService;
        this.session = session;
        this.alertCtrl = alertCtrl;
        this.omniPush = omniPush;
        this.ommniCommon = ommniCommon;
        this.errorHandlerService = errorHandlerService;
        this.omniPull = omniPull;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.version = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.IMGS_FOLDER_URL;
        this.fab_login = "fab_login";
        this.preLoginOpersLinksOptions = [];
        this.preLoginOpersTooltipsOptions = [];
        this.options = {
            password: {
                fcName: 'password',
                group: this.loginForm,
            },
            userName: {
                fcName: 'userName',
                group: this.loginForm,
            },
            rememberMe: {
                fcName: 'rememberMe',
                group: this.loginForm
            },
            group: this.loginForm,
        };
        this.serverURLOptions = {
            iconOptions: {
                iconName: 'diamond',
                labelOptions: {
                    labelKey: 'SERVER_URL_KEY',
                }
            },
            disableLoading: true
        };
        this.atmAndBranchLocatorOptions = {
            route: 'atm-branch-locator',
            labelKey: 'atm_and_branch_locator_key',
            iconOptions: {
                iconName: 'map',
                labelOptions: {
                    labelKey: 'atm_and_branch_locator_key'
                }
            },
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PRELOGIN_MAP_ATM_OPER,
            }
        };
        this.qiblaDirectionOptions = {
            route: 'qibla-direction',
            labelKey: 'qibla_direction_key',
            iconOptions: {
                iconName: 'compass-outline',
                labelOptions: {
                    labelKey: 'qibla_direction_key',
                }
            },
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].QIBLA_DIRECTION_OPER,
            }
        };
        this.createAccountOptions = {
            pageOptions: {
                // UCBU250064 Mustafa - we need to check if webview url is configured then set operId to -1 to avoid navigation to on-boarding oper 182 after filling the buisness brofile
                operId: ((_b = (_a = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === null || src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === void 0 ? void 0 : src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG) === null || _a === void 0 ? void 0 : _a.WEBVIEW_URLS) === null || _b === void 0 ? void 0 : _b.WEBVIEW_ONBOARDING_URL) ? -1 : _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].ON_BOARDING_OPER,
                title: 'become_our_customer_key',
                iconName: 'person-add'
            },
            route: ((_d = (_c = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === null || src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === void 0 ? void 0 : src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG) === null || _c === void 0 ? void 0 : _c.WEBVIEW_URLS) === null || _d === void 0 ? void 0 : _d.WEBVIEW_ONBOARDING_URL) ? 'webview-onboarding-page' : 'on-boarding',
            navigationOptions: this.getOnboardingNavigationOptions(),
            labelKey: 'become_our_customer_key',
            iconOptions: {
                iconName: 'person-add',
                labelOptions: {
                    labelKey: 'become_our_customer_key',
                }
            }
        };
        this.ProductNServiceCategoriesOptions = {
            pageOptions: {
                operId: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].DEFAULT_FALLBACK_OPER,
                title: 'products_and_services_key',
                iconName: 'information-circle-outline'
            },
            route: 'products-services',
            labelKey: 'products_and_services_key',
            iconOptions: {
                iconName: 'information-circle-outline',
                labelOptions: {
                    labelKey: 'products_and_services_key',
                }
            }
        };
        this.financingCalculatorOptions = {
            route: 'financial-calculator',
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PRE_LOGIN_FINANCIAL_CALCULATOR_OPER,
                title: 'financing_calculator_key',
                iconName: 'calculator'
            },
            iconOptions: {
                iconName: 'calculator',
                labelOptions: {
                    labelKey: 'financing_calculator_key'
                }
            }
        };
        this.faqOptions = {
            route: 'faq',
            pageOptions: {
                operId: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].DEFAULT_FALLBACK_OPER,
                title: 'faq_key',
                iconName: 'help'
            },
            iconOptions: {
                iconName: 'help',
                labelOptions: {
                    labelKey: 'faq_key'
                }
            },
            navigationOptions: {
                queryParams: {
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].faq
                }
            }
        };
        this.prayerOptions = {
            route: 'prayer-time',
            labelKey: 'prayer_time_key',
            iconOptions: {
                iconName: 'timer-outline',
                labelOptions: {
                    labelKey: 'prayer_time_key'
                }
            },
            pageOptions: {
                operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PRAYER_TIME_OPER,
            }
        };
        this.loginfabListOptions = {
            group: this.loginForm,
            mainProperties: {
                iconName: 'login-fab-icon',
                group: this.loginForm,
                labelKey: 'show_more_key'
            },
            topFabList: [
                {
                    id: 'prayer_time_',
                    group: this.loginForm,
                    iconName: this.prayerOptions.iconOptions.iconName,
                    labelKey: this.prayerOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].prayerTime,
                    handler: () => {
                        this.navService.openPage({
                            component: 'prayer-time',
                            title: this.prayerOptions.labelKey,
                            operID: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PRAYER_TIME_OPER
                        });
                    }
                },
                {
                    id: 'qibla_direction_',
                    group: this.loginForm,
                    iconName: this.qiblaDirectionOptions.iconOptions.iconName,
                    labelKey: this.qiblaDirectionOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].qiblaDirection,
                    handler: () => {
                        this.navService.openPage({
                            component: 'qibla-direction',
                            title: this.qiblaDirectionOptions.labelKey,
                            operID: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].QIBLA_DIRECTION_OPER
                        });
                    }
                },
                {
                    id: 'atm_and_branch_',
                    group: this.loginForm,
                    iconName: this.atmAndBranchLocatorOptions.iconOptions.iconName,
                    labelKey: this.atmAndBranchLocatorOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].branchesAndAtm,
                    handler: () => {
                        this.navService.openPage({
                            component: 'atm-branch-locator',
                            title: this.atmAndBranchLocatorOptions.labelKey,
                            operID: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PRELOGIN_MAP_ATM_OPER,
                            icon: 'map'
                        });
                    }
                }, {
                    id: 'products_',
                    group: this.loginForm,
                    iconName: this.ProductNServiceCategoriesOptions.iconOptions.iconName,
                    labelKey: this.ProductNServiceCategoriesOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].productAndServices,
                    handler: () => {
                        this.navService.openPage({
                            component: 'products-services',
                            title: this.ProductNServiceCategoriesOptions.labelKey,
                            operID: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].DEFAULT_FALLBACK_OPER,
                        });
                    }
                },
                {
                    id: 'financing_calc_',
                    group: this.loginForm,
                    iconName: this.financingCalculatorOptions.iconOptions.iconName,
                    labelKey: this.financingCalculatorOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].finacialCalculator,
                    handler: () => {
                        this.navService.openPage({
                            component: 'financial-calculator',
                            title: this.financingCalculatorOptions.iconOptions.labelOptions.labelKey,
                            operID: this.financingCalculatorOptions.pageOptions.operId
                        });
                    }
                },
                {
                    id: 'create_account_',
                    group: this.loginForm,
                    iconName: this.createAccountOptions.iconOptions.iconName,
                    labelKey: this.createAccountOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].becomeOurCustomer,
                    handler: () => {
                        this.handleBecomeOurCustomer(); //UCBU250064 - Megha
                    },
                },
                {
                    id: 'faq_link_',
                    group: this.loginForm,
                    iconName: this.faqOptions.iconOptions.iconName,
                    labelKey: this.faqOptions.iconOptions.labelOptions.labelKey,
                    fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].faq,
                    handler: () => {
                        this.navService.openPage({
                            component: this.faqOptions.route,
                            title: this.faqOptions.pageOptions.title,
                            operID: this.faqOptions.pageOptions.operId,
                            param: { fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].faq },
                        });
                    },
                },
            ]
        };
        this.bankName = {};
        this.createAccountToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].becomeOurCustomer,
        };
        this.ProductsToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].productAndServices,
        };
        this.qiblaDirectionToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].qiblaDirection,
        };
        this.PrayerToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].prayerTime
        };
        this.atmAndBranchtToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].branchesAndAtm,
        };
        this.finacialCalculatorToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].finacialCalculator,
        };
        this.faqToolTipOptions = {
            iconName: 'info',
            fileName: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].faq,
        };
        this.optionsPreferredLanguage = {
            group: this.loginForm, fcName: 'loginLang', changeSystemLanguage: true, forceTriggerChange: false, preventNavigationToMain: true
        };
    }
    ngOnInit() {
        // Added by Richie to log the time of of the specific action
        if (src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
            _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].timeLogs.push('in omni-login, ngOnInit with start time: ' + (new Date()).toISOString());
        }
        // end Richie
        this.prepareCreateLikeLinks();
        this.bannersOptions = { layout: 'slider' };
        _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].oper_ID = _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].LOGIN_OPER_ID;
        _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].pageName = _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].LOGIN_PAGE_NAME;
        this.omniPull.getParamValOf('BankName').then((result) => {
            if (result.BankName) {
                this.bankName.labelKey = result.BankName;
            }
        }).catch((error) => { });
        this.baseFormGroup = this.loginForm; // Added by Zunair For #BUG 1257538
    }
    ionViewDidEnter() {
        // Added by Richie to log the time of of the specific action
        if (src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
            _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].timeLogs.push('in omni-login, ionViewDidEnter with start time: ' + (new Date()).toISOString());
        }
        // end Richie
        super.ionViewDidEnter(); // Added by Zunair For #BUG 1257538
        _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].VGn7PhYqt0YnWCou = false;
        this.commonProv.sendTimeLog(); // send time logs to crashlytics
        this.commonProv.setValInsideNestedObj(this.optionsPreferredLanguage.fcName, _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].activeLanguge, this.loginForm.controls['formData'].value);
    }
    authenticate(authenticationResponse) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Added by Richie to log the time of of the specific action
            if (src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
                _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].timeLogs.push('in omni-login, authenticate() with start time: ' + (new Date()).toISOString());
            }
            // end Richie
            if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].isNativeMobile() && authenticationResponse.trustingOutputCode === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].DEVICE_CANNOT_BE_TRUSTED_MAX_REACHED ||
                authenticationResponse.trustingOutputCode === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].DEVICE_CANNOT_BE_TRUSTED_BLOCKED_STATUS) {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].presentFailureAlert(authenticationResponse.trustingOutputNotificationDetails);
            }
            else if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].isNativeMobile() && authenticationResponse.trustingOutputCode === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].DEVICE_NOT_TRUSTED) {
                this.showTrustedConfirmationMessage(authenticationResponse);
            }
            else {
                this.commonProv.presentLoading();
                const assignedSoftToken = this.commonProv.session.getValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].ASSIGNED_SOFT_TOKEN);
                authenticationResponse = Object.assign(Object.assign({}, authenticationResponse), { assignedSoftToken });
                const routesArray = this.navService.preLoginRoutingChecking(authenticationResponse);
                if (routesArray.length === 0) {
                    this.commonProv.dismissLoading();
                    if (authenticationResponse.userAlreadylogin == 'true') {
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].presentInfoAlert(this.commonProv.translate('logged_from_another_session_key'), {
                            buttonsArray: [
                                {
                                    group: this.options.group,
                                    labelKey: 'cancel_key',
                                    type: 'reset',
                                    handler: () => {
                                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].dismissAllModals();
                                    }
                                },
                                {
                                    group: this.options.group,
                                    labelKey: 'force_logout_key',
                                    type: 'submit',
                                    handler: () => {
                                        // Added By OmarTalaat ABEOI240006 Disable Activate softToken-OTP mandatory if user not assignee In case user choose the force logout popup the check of otp notification
                                        this.showActivateOTPInfo(authenticationResponse.assignedSoftToken).then((resolve) => this.login(authenticationResponse.ocUserId, authenticationResponse.userName));
                                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].dismissAllModals();
                                    }
                                }
                            ]
                        });
                    }
                    else {
                        // Added By OmarTalaat ABEOI240006 Disable Activate softToken-OTP mandatory popup the check of otp notification in login
                        this.showActivateOTPInfo(authenticationResponse.assignedSoftToken).then(() => this.login(authenticationResponse.ocUserId, authenticationResponse.userName));
                    }
                }
            }
        });
    }
    //Added by Marina #1451290 to include links added by create like operation in admin 
    prepareCreateLikeLinks() {
        const preLoginRes = this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].preLoginResponse);
        const preLoginOpers = preLoginRes.preLoginOpers ? preLoginRes.preLoginOpers.filter(oper => oper.operVO.CREATELIKE_OPER_ID !== undefined) : [];
        if (preLoginOpers) {
            this.preLoginOpersLinksOptions = preLoginOpers.map(oper => {
                return {
                    pageOptions: {
                        operId: oper.operVO.OPER_ID,
                        title: oper.operVO.OPER_NAME.toLowerCase() + '_key',
                        iconName: oper.operAppChnlVO.ICON_NAME ? oper.operAppChnlVO.ICON_NAME : 'checkmark-circle-outline'
                    },
                    route: oper.operAppChnlVO.PAGE_HREF,
                    labelKey: oper.operVO.OPER_NAME.toLowerCase() + '_key',
                    iconOptions: {
                        iconName: oper.operAppChnlVO.ICON_NAME ? oper.operAppChnlVO.ICON_NAME : 'checkmark-circle-outline',
                        labelOptions: {
                            labelKey: oper.operVO.OPER_NAME.toLowerCase() + '_key',
                        }
                    }
                };
            });
            this.preLoginOpersTooltipsOptions = preLoginOpers.map(oper => {
                let fileName = oper.operVO.DESCRIPTION && oper.operVO.DESCRIPTION.replace(/\s+/g, '-');
                return {
                    iconName: 'info',
                    fileName: fileName + '-tooltip.html',
                };
            });
        }
    }
    showTrustedConfirmationMessage(authenticationResponse) {
        return new Promise((resolve, reject) => {
            {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].presentInfoAlert(this.commonProv.translate('mark_as_trusted_device_key'), {
                    buttonsArray: [
                        {
                            group: this.options.group,
                            type: 'reset',
                            labelKey: 'cancel_key',
                            handler: () => {
                                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].dismissAllModals();
                            }
                        },
                        {
                            group: this.options.group,
                            labelKey: 'ok_key',
                            type: 'submit',
                            handler: () => {
                                const page = {
                                    title: 'device_details_key',
                                    component: 'device-details',
                                    operID: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].DEVICE_MANAGEMENT_OPER_ID,
                                    param: authenticationResponse
                                };
                                this.navService.openPage(page);
                                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].dismissAllModals();
                            }
                        }
                    ]
                });
            }
        });
    }
    login(ocUserId, userName) {
        const loginRequest = { ocUserId: ocUserId, userName: userName }; // no additional information to be passsed to the login service (CompCode, appId, channelId,userId are sent via the interceptor)
        // Added by Richie to log the time of of the specific action
        if (src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
            _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].timeLogs.push('in omni-login, before omniPush.login() with start time: ' + (new Date()).toISOString());
        }
        // end Richie
        this.omniPush.login(loginRequest).then(result => {
            // Added by Richie to log the time of of the specific action
            if (src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.TIME_LOG_ENABLED) {
                _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].timeLogs.push('in omni-login, after omniPush.login() with end time: ' + (new Date()).toISOString());
            }
            // end Richie
            if (result) {
                const userInfo = this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].USERINFO);
                if (userInfo.quickLinks) {
                    this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].QUICK_LINKS_MENUS, userInfo.quickLinks);
                }
                else {
                    this.commonProv.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].QUICK_LINKS_MENUS, []);
                }
                //  this.omniPull.omniCommon.common.session.append(CommonBussinessConstant.UPDATED_QUICKLINKS, this.quickLinksList);
                // MFawzy,01122021,TP#1262588,Saving user's long name in the storage if the user choosed remeber me before login
                if (this.options.group.controls[this.options.rememberMe.fcName].value === true) {
                    //Edited by ghada, tp#1304017, tp#1320480 for considering appId when saving user long / name in the session 
                    //to fix the issue of having the same long name appear on login when opening retail, corporate and agency in the same browser
                    this.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].USER_LONG_NAME_KEY + _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].APP_ID, (_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].APP_ID !== _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].RETAIL_APP_ID && userInfo.name) ? userInfo.name : userInfo.customerInfoCO.longName, true);
                }
                //edited by Marina TP:#1433069 to be able to update default accounts stored in personalizationCO later (nested objects can't be updated in session)
                if (userInfo && userInfo.personalizationCO) {
                    this.session.append(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PERSONALIZATION_CO, userInfo.personalizationCO);
                    const personalize = this.session.getValueOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_12__["CommonBussinessConstant"].PERSONALIZATION_CO);
                    if (userInfo.personalizationCO.nickname)
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].presentSuccessAlert(src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('welcome_key') + ' ' + userInfo.personalizationCO.nickname, { autoHide: true });
                }
            }
        });
    }
    checkIfVisibleCustomization(id) {
        const cust = this.commonProv.getElementValidations(id);
        return _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_16__["PsCommonSettings"].custMode ? true : cust.IS_VISIBLE === 1;
    }
    // Added By OmarTalaat ABEOI240006 Disable Activate softToken-OTP mandatory if user not assignee
    // To Check on submit the assigneeToken and popup Info msg that user need to set the assignee
    showActivateOTPInfo(assignedSoftToken) {
        return new Promise((resolve, reject) => {
            const isUserAssigneeSoftToken = assignedSoftToken == 0;
            if (isUserAssigneeSoftToken) {
                this.commonProv.isUserAssignedToSoftTokenAction(true, 'checked_activate_otp_info_modal_key', this.options).then(() => resolve(true));
            }
            else {
                resolve(true);
            }
        });
    }
    getOnboardingNavigationOptions() {
        var _a, _b;
        const webviewUrl = (_b = (_a = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === null || src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === void 0 ? void 0 : src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG) === null || _a === void 0 ? void 0 : _a.WEBVIEW_URLS) === null || _b === void 0 ? void 0 : _b.WEBVIEW_ONBOARDING_URL;
        if (webviewUrl && webviewUrl.trim() !== '') {
            const fullUrl = this.buildFullUrl(webviewUrl);
            return { queryParams: {} };
        }
        return { queryParams: { widgetStepper: false, CIFOnboarding: false } };
    }
    buildFullUrl(url) {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        const mainPath = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.MAIN_PATH;
        const baseUrl = mainPath.endsWith('/') ? mainPath.slice(0, -1) : mainPath;
        return url.startsWith('/') ? baseUrl + url : baseUrl + '/' + url;
    }
    handleBecomeOurCustomer() {
        var _a, _b;
        const webviewUrl = (_b = (_a = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === null || src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"] === void 0 ? void 0 : src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG) === null || _a === void 0 ? void 0 : _a.WEBVIEW_URLS) === null || _b === void 0 ? void 0 : _b.WEBVIEW_ONBOARDING_URL;
        if (webviewUrl && webviewUrl.trim() !== '') {
            const fullUrl = this.buildFullUrl(webviewUrl);
            this.navService.openPage({
                component: 'webview-onboarding-page',
                title: 'become_our_customer_key',
                operID: -1,
                param: {}
            });
        }
        else {
            this.navService.openPage({
                component: 'on-boarding',
                title: this.createAccountOptions.labelKey,
                operID: this.createAccountOptions.pageOptions.operId,
                param: {
                    widgetStepper: false,
                    CIFOnboarding: false
                }
            });
        }
    }
};
OmniLoginPage.ctorParameters = () => [
    { type: _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__["PsNavigatorService"] },
    { type: src_app_commonSRC_psServices_session_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _commonBussinessSRC_psServices_omni_common_omni_push_service__WEBPACK_IMPORTED_MODULE_14__["OmniPushService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_errorhandler_errorhandler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
OmniLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'omni-login',
        template: _raw_loader_omni_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_17__["PsNavigatorService"], src_app_commonSRC_psServices_session_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _commonBussinessSRC_psServices_omni_common_omni_push_service__WEBPACK_IMPORTED_MODULE_14__["OmniPushService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"], src_app_commonSRC_psServices_errorhandler_errorhandler_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], OmniLoginPage);



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

/***/ "xql0":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-login/omni-login.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"login-page\">\n\t<div class=\"container-fluid ion-no-padding\">\n\t\t<div class=\"row ion-no-padding\">\n\t\t\t<div class=\"ps-dropdown-allowed-languages-wrapper\">\n\t\t\t\t<ps-dropdown-allowed-languages [options]=\"optionsPreferredLanguage\">\n\t\t\t\t</ps-dropdown-allowed-languages>\n\t\t\t</div>\n\t\t\t<div class=\"login-main col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 offset-lg-0 offset-xl-3\">\n\t\t\t\t<ps-template-login id=\"omni-login\" [options]=\"options\" (logInClicked)=\"authenticate($event)\">\n\t\t\t\t\t<div header class=\"bank-logo\"></div>\n\t\t\t\t\t<div footer class=\"omni-login-links\">\n\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('create_account_link')\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"create_account_link\" [options]=\"createAccountOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"createAccountToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('products_link')\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"products_link\" [options]=\"ProductNServiceCategoriesOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"ProductsToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('qibla_direction_link')\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"qibla_direction_link\" [options]=\"qiblaDirectionOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"qiblaDirectionToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('prayer-time_link')\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"prayer-time_link\" [options]=\"prayerOptions\"></ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"PrayerToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"additional-links\"\n\t\t\t\t\t\t\t*ngIf=\"checkIfVisibleCustomization('atm_and_branch_locator_link')\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"atm_and_branch_locator_link\"\n\t\t\t\t\t\t\t\t[options]=\"atmAndBranchLocatorOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"atmAndBranchtToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('financing_calculator_link')\">\n\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"financing_calculator_link\" [options]=\"financingCalculatorOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"finacialCalculatorToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('faq_link')\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"faq_link\" [options]=\"faqOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"faqToolTipOptions\">\n\t\t\t\t\t\t\t</ps-complex-tooltip>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ng-container *ngFor=\" let linkOption of preLoginOpersLinksOptions; let i=index\">\n\t\t\t\t\t\t\t<div class=\"additional-links\" *ngIf=\"checkIfVisibleCustomization('login_oper_'+i)\">\n\t\t\t\t\t\t\t\t<ps-action-hyperlink [id]=\"'login_oper_' + i\" [options]=\"linkOption\">\n\t\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t\t\t<ps-complex-tooltip [options]=\"preLoginOpersTooltipsOptions[i]\">\n\t\t\t\t\t\t\t\t</ps-complex-tooltip>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<!-- <div class=\"additional-links\">\n\t\t\t\t\t\t\t<ps-action-hyperlink id=\"hints_link\" [options]=\"hintsOptions\">\n\t\t\t\t\t\t\t</ps-action-hyperlink>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div login-fab-list class=\"omni-login-fab-list\">\n\t\t\t\t\t\t<ps-button-fab-list [options]=\"loginfabListOptions\" [id]=\"fab_login\">\n\t\t\t\t\t\t</ps-button-fab-list>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ps-label bankName class=\"omni-login-fab-list\" [options]=\"bankName\">\n\t\t\t\t\t</ps-label>\n\t\t\t\t</ps-template-login>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<ion-footer class=\"ps-version\">\n\t\t<div class=\"omni-login-version-number\">{{ version }}</div>\n\t</ion-footer>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=51-es2015.js.map