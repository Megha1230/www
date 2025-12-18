(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "+T/B":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cheque-confirmation/cheque-confirmation.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"chequeConfirmationDetailsPanelOptions\" id=\"cheque_confirmation_details_panel\">\n\n            <ps-lookup-chequebooks [options]=\"chequeBookLookupOptions\" (onChequeBookChange)=\"onChequeChanged($event)\">\n            </ps-lookup-chequebooks>\n            <ps-input-account-number [options]=\"accountNumberOptions\">\n            </ps-input-account-number>\n\n            <ps-input-numeric id=\"ChequesNumber\" [options]=\"chequesNumberOptions\">\n            </ps-input-numeric>\n\n            <ps-input-account-number [options]=\"securityNumberOptions\">\n            </ps-input-account-number>\n\n            <ps-input-varchar id=\"beneficiaryName\" [options]=\"beneficiaryNameOptions\">\n            </ps-input-varchar>\n\n            <ps-complex-amount id=\"charges\" [options]=\"chequeAmountOptions\">\n            </ps-complex-amount>\n\n            <ps-date-day-month-year-past id=\"chequeDate\" [options]=\"chequeDateOptions\">\n            </ps-date-day-month-year-past>\n\n        </ps-container-panel>\n\n        <ps-container-panel [options]=\"attachmentPanelOptions\" id=\"attachment_panel\">\n            <ps-file-upload-bs id=\"ps-complex-file-upload\" [options]=\"versoImageUploadOptions\"></ps-file-upload-bs>\n            <ps-file-upload-bs id=\"ps-complex-file-upload\" [options]=\"rectoImageUploadOptions\"></ps-file-upload-bs>\n            <ps-input-varchar [options]=\"commentOptions\"></ps-input-varchar>\n        </ps-container-panel>\n\n    </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "Eued":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cheque-confirmation/cheque-confirmation.page.ts ***!
  \***********************************************************************/
/*! exports provided: ChequeConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeConfirmationPage", function() { return ChequeConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cheque_confirmation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cheque-confirmation.page.html */ "+T/B");
/* harmony import */ var _cheque_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheque-confirmation.page.scss */ "WohZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");











let ChequeConfirmationPage = class ChequeConfirmationPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"] {
    constructor(commonService, logger, camera) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.camera = camera;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.chequeConfirmationVO = {};
        this.stepperOptions = {
            stepperName: 'cheque_confirmation_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['cheque_confirmation_step1'],
            group: this.formGroup,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].serviceUrl.commonSubmitAction,
            },
            requestObject: this.chequeConfirmationVO
        };
        this.chequeConfirmationDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'cheque_confirmation_details_key',
            //iconName: 'document',
            expanded: true
        };
        this.attachmentPanelOptions = {
            isExpandable: true,
            labelKey: 'attachment_key',
            iconName: '',
            expanded: false,
        };
        this.chequeBookLookupOptions = {
            labelKey: 'chequebook_key',
            placeHolder: 'select_chequebook_key',
            group: this.formGroup,
            fcName: 'chequebook',
            requestObject: this.chequeConfirmationVO
        };
        this.accountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'account_number_key',
            placeHolder: 'enter_account_number_key',
            group: this.formGroup
        };
        this.chequesNumberOptions = {
            fcName: 'chequeNumber',
            group: this.formGroup,
            labelKey: 'cheque_number_key',
            placeHolder: 'enter_cheque_number_key',
        };
        this.securityNumberOptions = {
            fcName: 'securityNumber',
            labelKey: 'security_number_key',
            placeHolder: 'enter_security_number_key',
            group: this.formGroup
        };
        this.chequeAmountOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'chequeCurrency'
            },
            amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'amount',
                group: this.formGroup,
                decimalPoints: 3
            },
            showLimitLabel: false
        };
        this.chequeDateOptions = {
            labelKey: 'cheque_date_key',
            placeHolder: 'cheque_date_key',
            fcName: 'chequeDate',
            group: this.formGroup,
        };
        this.beneficiaryNameOptions = {
            labelKey: 'beneficiary_key',
            placeHolder: 'enter_beneficiary_name_key',
            group: this.formGroup,
            fcName: 'beneficiary'
        };
        this.versoImageUploadOptions = {
            multiple: false,
            labelKey: 'cheque_verso_image_key',
            fcName: 'selectedFileData_veroImg',
            group: this.formGroup,
            hasOpenCameraBtn: true,
            takePhotoLabelKey: 'cheque_verso_image_key',
            maxImgWidth: 18,
            maxImgHeight: 8.5
        };
        this.rectoImageUploadOptions = {
            multiple: false,
            labelKey: 'cheque_recto_image_key',
            fcName: 'selectedFileData_rectImg',
            group: this.formGroup,
            hasOpenCameraBtn: true,
            takePhotoLabelKey: 'cheque_recto_image_key',
            maxImgWidth: 18,
            maxImgHeight: 8.5
        };
        this.commentOptions = {
            group: this.formGroup,
            fcName: 'comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key'
        };
    }
    ngOnInit() {
        super.init();
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].USERINFO);
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_READONLY, [this.accountNumberOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_READONLY, [this.chequeAmountOptions.currenciesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.commentOptions.fcName], 0);
    }
    onChequeChanged(event) {
        this.commonProv.setValInsideNestedObj(this.accountNumberOptions.fcName, event.additionalRef, this.chequeConfirmationVO);
        this.commonProv.setValInsideNestedObj(this.chequeAmountOptions.currenciesOptions.fcName, event.currency, this.chequeConfirmationVO);
    }
};
ChequeConfirmationPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
];
ChequeConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cheque-confirmation',
        template: _raw_loader_cheque_confirmation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cheque_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
], ChequeConfirmationPage);



/***/ }),

/***/ "WohZ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cheque-confirmation/cheque-confirmation.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVxdWUtY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJ9 */");

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
//# sourceMappingURL=37-es2015.js.map