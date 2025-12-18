(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "5hBt":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ps-container-complex class=\"ps-complex-visa-applicant-info\"> -->\r\n<ps-container-panel [options]=\"panelOptions2\">\r\n    <ps-input-varchar [options]=\"firstNameOptions\"></ps-input-varchar>\r\n    <ps-input-varchar [options]=\"lastNameOptions\"></ps-input-varchar>\r\n    <ps-input-email [options]=\"userEmailOptions\"></ps-input-email>\r\n    <ps-entity-phone-number [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\r\n    <ps-input-numeric [options]=\"passportNumberOptions\"></ps-input-numeric>\r\n    <ps-input-varchar [options]=\"occupationOptions\"></ps-input-varchar>\r\n    <ps-dropdown-nationalities [options]=\"nationalityOptions\"></ps-dropdown-nationalities>\r\n    <ps-date-day-month-year-future [options]=\"departingDateOptions\"></ps-date-day-month-year-future>\r\n    <ps-date-day-month-year-future [options]=\"returningDateOptions\"></ps-date-day-month-year-future>\r\n    <ps-dropdown-nationalities [options]=\"visaCountryOptions\"></ps-dropdown-nationalities>\r\n    <ps-file-upload-bs [options]=\"passportPhotoUploadOptions\"></ps-file-upload-bs>\r\n</ps-container-panel>\r\n<!-- </ps-container-complex> -->");

/***/ }),

/***/ "7Go/":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: PscomplexVisaApplicantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PscomplexVisaApplicantDetailsComponent", function() { return PscomplexVisaApplicantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_visa_applicant_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-visa-applicant-details.component.html */ "5hBt");
/* harmony import */ var _ps_complex_visa_applicant_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-visa-applicant-details.component.scss */ "m/j0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PscomplexVisaApplicantDetailsComponent = class PscomplexVisaApplicantDetailsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonProv) {
        super(commonProv, commonProv.logger);
        this.commonProv = commonProv;
        this.visaFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.passportPhotoUploadOptions = {
            fcName: 'passportPhoto',
            group: this.visaFormGroup,
            multiple: false,
            labelKey: 'passport_photo_key',
        };
        this.visaCountryOptions = {
            fcName: 'visaCountry',
            group: this.visaFormGroup,
            labelKey: 'visa_country_key',
            placeHolder: 'visa_country_key',
            iconOptions: {
                iconName: 'clipboard'
            },
        };
        this.departingDateOptions = {
            fcName: 'departingDate',
            group: this.visaFormGroup,
            labelKey: 'departing_date_key',
            placeHolder: 'enter_the_departing_date_key',
        };
        this.returningDateOptions = {
            fcName: 'returningDate',
            group: this.visaFormGroup,
            labelKey: 'returning_date_key',
            placeHolder: 'enter_the_returning_date_key',
        };
        this.nationalityOptions = {
            fcName: 'nationality',
            group: this.visaFormGroup,
            labelKey: 'nationality_key',
            placeHolder: 'enter_nationality_key',
            iconOptions: {
                iconName: 'clipboard'
            },
        };
        this.firstNameOptions = {
            fcName: 'firstName',
            group: this.visaFormGroup,
            labelKey: 'first_name_key',
            placeHolder: 'enter_first_name_key',
        };
        this.lastNameOptions = {
            fcName: 'lastName',
            group: this.visaFormGroup,
            labelKey: 'last_name_key',
            placeHolder: 'enter_last_name_key',
        };
        this.occupationOptions = {
            fcName: 'occupation',
            group: this.visaFormGroup,
            labelKey: 'occupation_key',
            placeHolder: 'enter_occupation_key',
        };
        this.userEmailOptions = {
            fcName: 'email',
            group: this.visaFormGroup,
            labelKey: 'email_key',
            placeHolder: 'enter_email_key',
        };
        this.phoneNumberOptions = {
            fcName: 'phone',
            group: this.visaFormGroup,
            labelKey: 'phone_number_key',
            placeHolder: 'phone_number_key',
        };
        this.passportNumberOptions = {
            fcName: 'passportNumber',
            group: this.visaFormGroup,
            labelKey: 'passport_number_key',
            placeHolder: 'enter_passport_number_key',
            iconOptions: {
                iconName: 'clipboard'
            },
        };
        this.panelOptions2 = {
            isExpandable: true,
            labelKey: 'visa_applicant_details_key',
            iconName: 'document',
            expanded: true
        };
    }
    ngOnInit() {
    }
};
PscomplexVisaApplicantDetailsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] }
];
PscomplexVisaApplicantDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-visa-applicant-details',
        template: _raw_loader_ps_complex_visa_applicant_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_visa_applicant_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]])
], PscomplexVisaApplicantDetailsComponent);



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

/***/ "hZhG":
/*!*********************************************************!*\
  !*** ./src/app/pages/visa-request/visa-request.page.ts ***!
  \*********************************************************/
/*! exports provided: VisaRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaRequestPage", function() { return VisaRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visa_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visa-request.page.html */ "xGir");
/* harmony import */ var _visa_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visa-request.page.scss */ "xyne");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_visa_applicant_details_ps_complex_visa_applicant_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component */ "7Go/");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");











let VisaRequestPage = class VisaRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(commonService, logger) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.visaRequestVO = {};
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.options = {
            outletName: 'multi-visa-application',
            requestObject: this.visaRequestVO,
            type: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].OUTLET_TYPE_COMPONENT,
            segmentName: 'visa-',
            component: src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_visa_applicant_details_ps_complex_visa_applicant_details_component__WEBPACK_IMPORTED_MODULE_5__["PscomplexVisaApplicantDetailsComponent"],
            group: this.formGroup,
            operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MULTI_VISA_REQUEST_OPER_ID
        };
        this.panelOptions1 = {
            isExpandable: true,
            labelKey: 'visa_application_details_key',
            iconName: 'document',
            expanded: true
        };
        this.applicationType = {
            labelKey: 'application_type_key',
            fcName: 'applicationType',
            group: this.formGroup,
            placeHolder: 'please_select_application_type_key',
            selectDefaultItem: { itemValue: 'INDIVIDUAL', description: 'individual_key', selectedObj: { itemValue: 'INDIVIDUAL', description: 'individual_key' } },
            listOfOptions: [{ itemValue: 'INDIVIDUAL', description: 'individual_key', selectedObj: { itemValue: 'INDIVIDUAL', description: 'individual_key' } }, { itemValue: 'GROUP', description: 'group_key', selectedObj: { itemValue: 'GROUP', description: 'group_key' } }]
        };
        this.transactionAmount = {
            labelKey: 'transaction_amount_key',
            placeHolder: 'transaction_amount_key',
            fcName: 'transactionAmount',
            group: this.formGroup,
            type: 'amount',
            decimalPoints: 3
        };
        this.currencyOptions = {
            fcName: 'currencyType',
            group: this.formGroup,
            labelKey: 'transaction_currency_key',
            placeHolder: 'transaction_currency_key',
            iconOptions: {
                iconName: 'filter-report-icon'
            }
        };
        this.transactionReceiptOptions = {
            multiple: false,
            fcName: 'transactionReceipt',
            group: this.formGroup,
            labelKey: 'transaction_reciept_key',
            uploadIconName: 'attach'
        };
        this.applicantIsMe = {
            fcName: 'applicant_is_me',
            group: this.formGroup,
            labelKey: 'applicant_is_me_key',
        };
        this.numberOfApplicants = {
            labelKey: 'number_of_applicants_key',
            fcName: 'numberOfApplicants',
            group: this.formGroup
        };
        this.appType = true;
        this.totalApplicants = 1;
        this.userInformation = {};
        this.defaultUserInfoKeyMapData = [
            { 'key': 'nationality', 'value': null },
            { 'key': 'firstName', 'value': null },
            { 'key': 'lastName', 'value': null },
            { 'key': 'occupation', 'value': null },
            { 'key': 'email', 'value': null },
            { 'key': 'phone', 'value': null }
        ];
    }
    onToggleChange(event) {
        if (event.newValue) {
            this.loadUserInformation();
        }
        else if (!event.newValue && event.oldValue) {
            this.removeUserInformation();
        }
    }
    onApplicationTypeChange(event) {
        if (event.itemValue === 'GROUP') {
            this.appType = false;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.applicantIsMe.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.numberOfApplicants.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.applicantIsMe.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.numberOfApplicants.fcName], 1);
            if (JSON.stringify(this.userInformation) != '{}') {
                this.removeUserInformation();
            }
        }
        else {
            this.appType = true;
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.applicantIsMe.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.numberOfApplicants.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.applicantIsMe.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.numberOfApplicants.fcName], 0);
        }
        this.options.appType = event.itemValue;
    }
    numberOfApplicantsChange(event) {
        if (event === 'unlimited') {
            event = 1;
        }
        if (this.totalApplicants < event) {
            this.totalApplicants = event;
            this.multiTemplate.addNewOutlet();
        }
        if (this.totalApplicants > event) {
            this.totalApplicants = event;
            this.multiTemplate.removePanel();
        }
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
    }
    loadUserInformation() {
        this.userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);
        let filledUserData = [
            { 'key': 'nationality', 'value': this.userInformation.customerInfoCO.countryCode },
            { 'key': 'firstName', 'value': this.userInformation.customerInfoCO.shortName },
            { 'key': 'lastName', 'value': this.userInformation.customerInfoCO.longName },
            { 'key': 'occupation', 'value': this.userInformation.customerInfoCO.occupation },
            { 'key': 'email', 'value': this.userInformation.customerInfoCO.coreEmail },
            { 'key': 'phone', 'value': this.userInformation.customerInfoCO.userMobileNumber }
        ];
        this.multiTemplate.setInfoToVO('visa-1', filledUserData);
    }
    removeUserInformation() {
        this.multiTemplate.setInfoToVO('visa-1', this.defaultUserInfoKeyMapData);
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_DEFAULT_VALUE, [this.applicantIsMe.fcName], false);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_DEFAULT_VALUE, [this.applicationType.fcName], 'INDIVIDUAL');
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_DEFAULT_VALUE, ['visaCountry'], '784');
    }
};
VisaRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] }
];
VisaRequestPage.propDecorators = {
    multiTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['multiTemplateRef',] }]
};
VisaRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'visa-request',
        template: _raw_loader_visa_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visa_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])
], VisaRequestPage);



/***/ }),

/***/ "m/j0":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-visa-applicant-details/ps-complex-visa-applicant-details.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXZpc2EtYXBwbGljYW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

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

/***/ "xGir":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visa-request/visa-request.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-multi-outlets [id]=\"options.outletName\" [outletOptions]=\"options\" #multiTemplateRef>\r\n    <ng-container multiPageData>\r\n        <ps-container-panel [options]=\"panelOptions1\">\r\n            <ps-select-dropdown [options]=\"applicationType\" (onPsChange)=\"onApplicationTypeChange($event)\">\r\n            </ps-select-dropdown>\r\n            <ps-input-amount [options]=\"transactionAmount\"></ps-input-amount>\r\n            <ps-dropdown-currencies id=\"'currency' + id\" [options]=\"currencyOptions\"></ps-dropdown-currencies>\r\n            <ps-file-upload-bs [options]=\"transactionReceiptOptions\"></ps-file-upload-bs>\r\n            <ps-select-toggle class=\"visa-request-margin-top\" *ngIf=\"appType\" [options]=\"applicantIsMe\"\r\n                (onPsChange)=\"onToggleChange($event)\">\r\n            </ps-select-toggle>\r\n            <ps-input-count class=\"visa-request-margin-top\" *ngIf=\"!appType\" [options]=\"numberOfApplicants\"\r\n                (onPsChange)=\"numberOfApplicantsChange($event)\"></ps-input-count>\r\n        </ps-container-panel>\r\n    </ng-container>\r\n</ps-template-multi-outlets>");

/***/ }),

/***/ "xyne":
/*!***********************************************************!*\
  !*** ./src/app/pages/visa-request/visa-request.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNhLXJlcXVlc3QucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=18-es2015.js.map