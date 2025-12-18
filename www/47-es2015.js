(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "QZb8":
/*!*********************************************************!*\
  !*** ./src/app/pages/ipo-request/ipo-request.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpcG8tcmVxdWVzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cCV5":
/*!*******************************************************!*\
  !*** ./src/app/pages/ipo-request/ipo-request.page.ts ***!
  \*******************************************************/
/*! exports provided: IpoRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpoRequestPage", function() { return IpoRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ipo_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ipo-request.page.html */ "eK7+");
/* harmony import */ var _ipo_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipo-request.page.scss */ "QZb8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");













let IpoRequestPage = class IpoRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniCommon, nav, omniCommonService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniCommon = omniCommon;
        this.nav = nav;
        this.omniCommonService = omniCommonService;
        this.formData = {};
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.ipoRequestVO = {};
        this.stepperOptions = {
            stepperName: 'ipo_req_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['ipo_req_step1'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.securityRenewal,
                group: this.formGroup
            },
            requestObject: this.ipoRequestVO
            // submitServiceUrl: ,
        };
        this.termsAndConditionsOptions = {
            checkBoxOptions: {
                group: this.formGroup,
                fcName: 'checkboxConfirm',
                labelKey: 'agree_terms_and_conditions_key'
            },
            htmlViewerOptions: {
                fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].onlineRegistrationTermsAndConditionsFileName
            }
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'portfolio_and_sukuk_key',
            iconName: 'portfolio-and-sukuk',
            expanded: true
        };
        this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'ipo_related_file_key',
            iconName: 'ipo-file',
            expanded: true
        };
        this.sukukOptions = {
            fcName: 'quantity',
            group: this.formGroup,
            min: 1,
            labelKey: 'number_of_sukuk_key',
            placeHolder: 'number_of_sukuk_key',
        };
        this.portfolioOptions = {
            fcName: 'portfolioNumber',
            group: this.formGroup,
            labelKey: 'portfolio_key',
            placeHolder: 'select_portfolio_key'
        };
        this.paymentMethodOptions = {
            fcName: 'paymentMethodAgent',
            group: this.formGroup,
        };
        this.paymentMethodIndividualOptions = {
            fcName: 'paymentMethodIndividual',
            group: this.formGroup,
        };
        this.sukukValueOptions = {
            currency: '',
            currenciesOptions: {
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'currency'
            },
            amountOptions: {
                labelKey: 'sukuk_value_key',
                fcName: 'sukukValue',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3,
            }
        };
        this.fileCommentOptions = {
            fcName: 'fileComments',
            group: this.formGroup,
            labelKey: 'enter_comments_on_uploaded_file_key',
            rows: '4',
        };
        this.fileLabel = {
            labelKey: 'ipo_file_upload_key',
            position: 'floating'
        };
        this.fileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: this.formGroup
        };
        this.itemCard = {};
        this.cardOptions = {};
        this.noIpoSecuritiesListFound = false;
    }
    countChange(val) {
        const sukukControl = this.formGroup.controls[this.sukukValueOptions.amountOptions.fcName];
        if (sukukControl !== undefined) {
            sukukControl.setValue(this.toIPORequestComponent.calculatedSukukPrice * val.newValue);
        }
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        const prevFormat = 'YYYY-MM-DD';
        const psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["PsDateFormatPipe"]();
        const userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].USERINFO);
        const workingCif = this.omniCommonService.common.session.getValueOf('WORKINGCIF');
        if (this.omniCommon.isAgent()) {
            this.isUserAgent = true;
        }
        else {
            this.isUserAgent = false;
        }
        try {
            this.toIPORequestComponent = this.nav.getAllParams();
        }
        catch (error) {
            this.loggerP.error('IPORequest Screen Error ! ', error);
        }
        setTimeout(() => {
            if (this.toIPORequestComponent !== undefined) {
                this.formGroup.controls[this.sukukValueOptions.amountOptions.fcName].setValue(this.toIPORequestComponent.calculatedSukukPrice);
                this.formGroup.controls[this.sukukValueOptions.currenciesOptions.fcName].setValue(this.toIPORequestComponent.tradingCurrencyCode);
            }
            else {
                this.formGroup.controls[this.sukukValueOptions.amountOptions.fcName].setValue(0);
            }
        }, 100);
        this.ipoRequestVO[this.sukukValueOptions.amountOptions.fcName] = this.toIPORequestComponent.calculatedSukukPrice;
        this.ipoRequestVO[this.sukukValueOptions.currenciesOptions.fcName] = this.toIPORequestComponent.tradingCurrencyCode;
        this.itemCard = this.toIPORequestComponent !== undefined ? this.toIPORequestComponent : this.ipoRequestVO;
        this.cardOptions.formGroup = this.formGroup;
        this.cardOptions.labelsValueMap = this.navigationServices.getParamKey('labelsValueMap');
        this.cardOptions.headerMap = this.navigationServices.getParamKey('headerMap');
        this.cardOptions.showInitialCardValues = this.navigationServices.getParamKey('showInitialCardValues');
        this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { securityCode1: this.toIPORequestComponent.securityCode1, securityCode2: this.toIPORequestComponent.securityCode2, workingCif: workingCif ? workingCif : userInfo.omniUserVO.CIF_NO, price: this.toIPORequestComponent.calculatedSukukPrice, tradeDate: psDatePipe.transform((new Date()), prevFormat) }, false, true);
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.sukukValueOptions.amountOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.sukukValueOptions.amountOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.sukukValueOptions.currenciesOptions.fcName], 1);
    }
    onFileSelect(val) {
        this.uploadedFiles = [];
        this.uploadedFiles = val;
        this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { uploadedFiles: this.uploadedFiles }, false, true);
    }
    onFileDeleted(val) {
        for (const uploadedFile of this.uploadedFiles) {
            if (val.selectedFile.name === uploadedFile.selectedFile.name) {
                this.uploadedFiles.splice(this.uploadedFiles.indexOf(uploadedFile), 1);
                break;
            }
        }
        this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { uploadedFiles: this.uploadedFiles }, false, true);
    }
};
IpoRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"] }
];
IpoRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ipo-request',
        template: _raw_loader_ipo_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ipo_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_6__["OmniCommonService"]])
], IpoRequestPage);



/***/ }),

/***/ "eK7+":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ipo-request/ipo-request.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"ipo_req_panel\">\n\n      <ps-container-lookup-option [options]=\"cardOptions\" [itemCard]=\"itemCard\"></ps-container-lookup-option>\n\n\n      <ps-dropdown-portfolio id=\"portfolio_id\" [options]=\"portfolioOptions\"></ps-dropdown-portfolio>\n\n\n      <ps-input-numeric id=\"sukuk_count\" (onPsChange)=\"countChange($event)\" [options]=\"sukukOptions\"></ps-input-numeric>\n\n\n      <ps-complex-amount id=\"sukuk_value\" [options]=\"sukukValueOptions\"></ps-complex-amount>\n\n\n      <ps-lov-payment-method-agent *ngIf=\"isUserAgent\" id=\"payment_method\" [options]=\"paymentMethodOptions\">\n      </ps-lov-payment-method-agent>\n\n\n      <ps-lov-payment-method-individual *ngIf=\"!isUserAgent\" id=\"payment_method\"\n        [options]=\"paymentMethodIndividualOptions\">\n      </ps-lov-payment-method-individual>\n\n\n      <ps-file-upload-bs id=\"ps-file-upload\" [options]=\"fileUploadOptions\" (onPsFileSelect)='onFileSelect($event)'\n        (onPsFileDelete)='onFileDeleted($event)'></ps-file-upload-bs>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

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

/***/ })

}]);
//# sourceMappingURL=47-es2015.js.map