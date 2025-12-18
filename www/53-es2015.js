(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "Bt2J":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personal-details/personal-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n      <ps-container-panel [options]=\"panelPersonalDetailsOptions\" id=\"personal_details_panel1\">\n\n        <ps-complex-personal-details [options]=\"defaultPersonalDetailsOptions\"></ps-complex-personal-details>\n\n      </ps-container-panel>\n      <ps-container-panel [options]=\"panelCifAddressOptions\" id=\"personal_details_panel2\">\n\n        <ps-complex-cif-details [options]=\"defaultCifDetailsOptions\"></ps-complex-cif-details>\n\n\n      </ps-container-panel>\n      <ps-container-panel [options]=\"panelEmployementDetailsOptions\" id=\"personal_details_panel3\">\n\n        <ps-complex-employment-details [options]=\"defaultEmployeeOptions\"></ps-complex-employment-details>\n\n      </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "P9aH":
/*!*****************************************************************!*\
  !*** ./src/app/pages/personal-details/personal-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: PersonalDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsPage", function() { return PersonalDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personal_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-details.page.html */ "Bt2J");
/* harmony import */ var _personal_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-details.page.scss */ "i9wU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");















let PersonalDetailsPage = class PersonalDetailsPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(commonService, navService, logger, omniPull) {
        super();
        this.commonService = commonService;
        this.navService = navService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.personalDetailsVO = {};
        this.panelPersonalDetailsOptions = {
            isExpandable: true,
            labelKey: 'personal_details_key',
            expanded: true
        };
        this.panelCifAddressOptions = {
            isExpandable: true,
            labelKey: 'address_details_key',
            expanded: false
        };
        this.panelEmployementDetailsOptions = {
            isExpandable: true,
            labelKey: 'employement_details_key',
            expanded: false
        };
        this.defaultPersonalDetailsOptions = {
            customerNameOptions: {
                group: this.formGroup,
                fcName: 'longName',
                labelKey: 'customer_name_key',
                placeHolder: 'enter_customer_name_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            psDobOptions: {
                group: this.formGroup,
                fcName: 'strBirthDate',
                labelKey: 'date_of_birth_key',
            },
            nationalityOptions: {
                fcName: 'nationality',
                group: this.formGroup,
                labelKey: 'nationality_key',
                placeHolder: 'enter_nationality_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            maritalstatusOptions: {
                labelKey: 'marital_status_key',
                placeHolder: 'select_maritial_status_key',
                fcName: 'martialStatus',
                group: this.formGroup,
                iconOptions: {
                    iconName: 'clipboard'
                }
            }
        };
        this.defaultCifDetailsOptions = {
            addressOptions: {
                areaOptions: {
                    labelKey: 'area_key',
                    placeHolder: 'enter_area_key',
                    fcName: 'area',
                    group: this.formGroup
                },
                wayOptions: {
                    labelKey: 'way_key',
                    placeHolder: 'enter_way_key',
                    fcName: 'way',
                    group: this.formGroup
                },
                buildingOptions: {
                    labelKey: 'building_no_key',
                    placeHolder: 'enter_building_no_key',
                    fcName: 'buildingOrHouse',
                    group: this.formGroup
                },
                postalCodesOptions: {
                    labelKey: 'postal_code',
                    placeHolder: 'select_postal_code_key',
                    fcName: 'postalCode',
                    group: this.formGroup,
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                },
                streetOptions: {
                    labelKey: 'street_key',
                    placeHolder: 'enter_street_key',
                    fcName: 'streetDetails',
                    group: this.formGroup
                },
                countriesOptions: {
                    labelKey: 'country_key',
                    placeHolder: 'select_country_key',
                    fcName: 'addressCountryCode',
                    group: this.formGroup,
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                },
                regionOptions: {
                    labelKey: 'region_key',
                    placeHolder: 'select_region_key',
                    fcName: 'addressRegionCode',
                    selectedCountryCode: '',
                    group: this.formGroup,
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                },
                cityOptions: {
                    labelKey: 'city_key',
                    placeHolder: 'select_city_key',
                    fcName: 'addresscityCode',
                    group: this.formGroup,
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                },
                // countriesOptions: {
                //   labelKey: 'country_key',
                //   placeHolder: 'select_country_key',
                //   fcName: 'addressCountryCode',
                //   group: this.formGroup,
                // },
                // regionOptions: {
                //   labelKey: 'region_key',
                //   placeHolder: 'select_region_key',
                //   fcName: 'addressRegionCode',
                //   group: this.formGroup
                // },
                // cityOptions: {
                //   labelKey: 'city_key',
                //   placeHolder: 'select_city_key',
                //   fcName: 'addresscityCode',
                //   group: this.formGroup,
                // },
                poBoxInputOptions: {
                    group: this.formGroup,
                    fcName: 'poBox',
                    labelKey: 'pobox_key',
                    placeHolder: 'enter_pobox_key',
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                }
            },
            mobileNumberOptions: {
                fcName: 'userMobileNumber',
                group: this.formGroup,
                labelKey: 'mobile_no_key'
            },
            residentialTelOptions: {
                fcName: 'homeTel',
                group: this.formGroup,
                labelKey: 'residential_tel_key'
            },
            telOptions: {
                fcName: 'telNumber',
                group: this.formGroup,
                labelKey: 'telephone_key'
            },
            faxOptions: {
                fcName: 'fax',
                group: this.formGroup,
                labelKey: 'fax_key'
            },
            emailOptions: {
                labelKey: 'email_key',
                placeHolder: 'enter_your_email_key',
                fcName: 'coreEmail',
                group: this.formGroup,
            }
        };
        this.defaultEmployeeOptions = {
            employerNameOptions: {
                group: this.formGroup,
                fcName: 'institutionName',
                labelKey: 'company_name_key',
                placeHolder: 'enter_company_name_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            occupationOptions: {
                group: this.formGroup,
                fcName: 'occupationCode',
                labelKey: 'occupation_key',
                placeHolder: 'enter_occupation_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            dateOfJoiningDivisionOptions: {
                group: this.formGroup,
                fcName: 'strDateOfJoining',
                labelKey: 'date_of_joining_key',
                placeHolder: '',
            },
            addressOptions: {
                areaOptions: {
                    labelKey: 'area_key',
                    placeHolder: 'enter_area_key',
                    fcName: 'employeearea',
                    group: this.formGroup
                },
                wayOptions: {
                    labelKey: 'way_key',
                    placeHolder: 'enter_way_key',
                    fcName: 'employeeway',
                    group: this.formGroup,
                },
                buildingOptions: {
                    labelKey: 'building_no_key',
                    placeHolder: 'enter_building_no_key',
                    fcName: 'occupationBuilding',
                    group: this.formGroup
                },
                streetOptions: {
                    labelKey: 'street_key',
                    placeHolder: 'enter_street_key',
                    fcName: 'employerStreet',
                    group: this.formGroup
                },
                countriesOptions: {
                    labelKey: 'country_key',
                    placeHolder: 'select_country_key',
                    fcName: 'countryCode',
                    group: this.formGroup,
                },
                regionOptions: {
                    labelKey: 'region_key',
                    placeHolder: 'select_region_key',
                    fcName: 'regionCode',
                    group: this.formGroup
                },
                cityOptions: {
                    labelKey: 'city_key',
                    placeHolder: 'select_city_key',
                    fcName: 'cityCode',
                    group: this.formGroup,
                },
                poBoxInputOptions: {
                    group: this.formGroup,
                    fcName: 'employerpoBox',
                    labelKey: 'pobox_key',
                    placeHolder: 'enter_pobox_key',
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                }
            },
            officeTelPhoneNumberOptions: {
                fcName: 'employerOfficeTel',
                group: this.formGroup,
                labelKey: 'office_tel_key',
            },
            handPhoneNumberOptions: {
                fcName: 'employerMobileNumber',
                group: this.formGroup,
                labelKey: 'hand_phone_number_key',
            },
            faxOptions: {
                fcName: 'employerFax',
                group: this.formGroup,
                labelKey: 'fax_key',
            }
        };
        this.cifDetailsVO = {};
        this.employeeDetailsVO = {};
        this.stepperOptions = {
            stepperName: 'personal_details',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: [
                'personal_details_step1',
            ],
            group: this.formGroup,
            submitOptions: {
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.updateProfileSettingsEndPoint,
                group: this.formGroup,
            },
            requestObject: this.personalDetailsVO,
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_11__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].MY_PROFILE_OPER;
        this.userInformation = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
        this.commonService.logger.log('userinfo:', this.userInformation);
        if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__["CommonUtils"].isEmptyObject(this.navService.getAllParams())) {
            this.personalDetailsVO = this.userInformation && this.userInformation.customerInfoCO ? this.userInformation.customerInfoCO : {};
        }
        else {
            this.personalDetailsVO = this.navService.getAllParams() ? this.navService.getAllParams() : {};
        }
        this.commonProv.copyObject(this.stepperOptions.requestObject, this.personalDetailsVO, true, false);
        delete this.stepperOptions.requestObject.cifType;
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultPersonalDetailsOptions.customerNameOptions.fcName, this.defaultPersonalDetailsOptions.psDobOptions.fcName], src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].VISIBLE_FIELD);
    }
};
PersonalDetailsPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] }
];
PersonalDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'personal-details',
        template: _raw_loader_personal_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])
], PersonalDetailsPage);



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

/***/ "i9wU":
/*!*******************************************************************!*\
  !*** ./src/app/pages/personal-details/personal-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

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

/***/ })

}]);
//# sourceMappingURL=53-es2015.js.map