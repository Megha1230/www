(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "PrBY":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/financial-calculator/financial-calculator.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n        <ps-container-panel [options]=\"panelOptions1Step2\" id=\"financial_calc_panel1\">\n            <ps-complex-financial-calculator [options]=\"financialCalculatorOptions\"\n                (productTypeChange)=\"onProductChange($event)\" (amountChange)=\"onAmountChange($event)\"\n                (currencyChange)=\"currencyChange($event)\">\n            </ps-complex-financial-calculator>\n\n\n\n        </ps-container-panel>\n\n    </ps-form-step>\n    <ps-form-step step2 *ngIf=\"preLoginCalc\" [id]=\"stepperOptions.namesofSteps[1]\">\n        <ng-container *psStep=\"'step2'\">\n            <ps-container-panel [options]=\"panelOptionsStep1\" id=\"financial_calc_panel2\">\n                <ps-complex-contact-info id=\"ps-complex-contact-info\" [options]=\"contactInfoOptions\">\n                </ps-complex-contact-info>\n            </ps-container-panel>\n        </ng-container>\n    </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "ZWsR":
/*!***************************************************************************!*\
  !*** ./src/app/pages/financial-calculator/financial-calculator.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbmFuY2lhbC1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJmaW5hbmNpYWwtY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */");

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

/***/ "nvBi":
/*!*************************************************************************!*\
  !*** ./src/app/pages/financial-calculator/financial-calculator.page.ts ***!
  \*************************************************************************/
/*! exports provided: FinancialCalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialCalculatorPage", function() { return FinancialCalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_financial_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./financial-calculator.page.html */ "PrBY");
/* harmony import */ var _financial_calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./financial-calculator.page.scss */ "ZWsR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/ps-common.settings */ "QZhd");















/** @name financial-calculator
 *  @author Heba.Hassan
 *  @description Display the financial calculator in pre login an post login
 */
let FinancialCalculatorPage = class FinancialCalculatorPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(datepipe, common, omniPull, logger, navService) {
        super();
        this.datepipe = datepipe;
        this.common = common;
        this.omniPull = omniPull;
        this.logger = logger;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.productClass = {};
        this.amountValue = 0;
        this.ownFinancialCalculatorVO = {};
        this.oldSelectedProduct = null;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        //this.cifInfo = this.common.session.getValueOf(ConstantCommon.USERINFO);
        this.screenOperId = _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].oper_ID;
        this.screenOperId == _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].PRE_LOGIN_FINANCIAL_CALCULATOR_OPER ? this.preLoginCalc = true : false;
        this.loadOptions();
    }
    loadOptions() {
        this.panelOptionsStep1 = {
            isExpandable: true,
            labelKey: 'contact_information_key',
            iconName: 'contact',
            expanded: true
        };
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'financing_calculator_key',
            iconName: 'calculator',
            expanded: true
        };
        this.contactInfoOptions = {
            emailOptions: {
                group: this.formGroup,
                fcName: 'email',
                labelKey: 'email_key',
                placeHolder: 'enter_email_key'
            },
            fullNameOptions: {
                labelKey: 'full_name_key',
                placeHolder: 'full_name_key',
                group: this.formGroup,
                fcName: 'fullName',
                iconOptions: {
                    iconName: 'user3'
                }
            },
            phoneNumberOptions: {
                labelKey: 'phone_number_key',
                fcName: 'phoneNumber',
                placeHolder: 'phone_number_key',
                group: this.formGroup
            }
        };
        this.financialCalculatorOptions = {
            productTypesOptions: {
                labelKey: 'product_type_key',
                placeHolder: 'product_type_key',
                fcName: 'productType',
                group: this.formGroup
            },
            group: this.formGroup,
            complexAmountOptions: {
                showLimitLabel: false,
                currency: '',
                currenciesOptions: {
                    labelKey: 'currency_key',
                    placeHolder: 'select_currency_key',
                    fcName: 'dealCurrency',
                    group: this.formGroup
                },
                amountOptions: {
                    labelKey: 'amount_key',
                    placeHolder: 'enter_amount_key',
                    fcName: 'dealAmount',
                    group: this.formGroup,
                    decimalPoints: 3
                }
            },
            downPaymentOptions: {
                fcName: 'downPayment',
                group: this.formGroup,
                labelKey: 'down_payment_key',
                placeHolder: 'enter_down_payment_key',
                decimalPoints: 2
            },
            numberOfInstallmentsCountOptions: {
                fcName: 'numberOfPayments',
                group: this.formGroup,
                labelKey: 'no_of_installments_key',
                forceTriggerChange: true
            },
            paymentsLabelOptions: { previewMode: true },
            amountLabelOptions: { previewMode: true },
        };
        this.stepperOptions = {
            stepperName: 'finan_calc_stepper',
            isHorizontalStepper: true,
            numberOfSteps: this.preLoginCalc ? 2 : 1,
            namesofSteps: ['financing_calculator_key', 'contact_information_key'],
            group: this.formGroup,
            requestObject: this.ownFinancialCalculatorVO,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.FinancialCalculator,
                postCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.navigateToReport(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateCalculatorVO(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
            },
        };
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
    }
    navigateToReport(params) {
        const pram = params.commonResponseList;
        if (_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].oper_ID === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].DEAL_REQUEST_OPER) {
            pram['dynamicOperId'] = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].DEAL_REQUEST_OPER;
        }
        //Makki: #6269 if Coming from Prelogin Calc, Override operId of login screen. 
        if (this.preLoginCalc) {
            pram['overrideOperId'] = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_13__["CommonBussinessConstant"].FINANCING_CALC_REPORT;
        }
        const page = {
            operID: this.screenOperId,
            component: 'financing-calculator-report',
            param: pram
        };
        this.navService.openPage(page);
    }
    onProductChange(value) {
        if (value && value.selectedObj && value.selectedObj.productClassCode !== this.productClass.productClassCode) {
            this.productClass = value.selectedObj;
            this.formGroup.controls[this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName].setValue(this.productClass.noOfPayment ? this.productClass.noOfPayment.toString() : '0');
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.minNoOfRepayments);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.minNoOfRepayments);
            this.financialCalculatorOptions.paymentsLabelOptions.labelKey = this.common.translate('down_payment_key') + ' ' + value.selectedObj.downPayment + '%';
            if (this.productClass.minFinancingAmt !== undefined && this.productClass.minFinancingAmt > 0) {
                this.financialCalculatorOptions.amountLabelOptions.labelKey = this.common.translate('min_amount_key') + ' ' + this.productClass.minFinancingAmt;
            }
            if (this.productClass.maxFinancingAmt !== undefined && this.productClass.maxFinancingAmt < 999999999999) {
                this.financialCalculatorOptions.amountLabelOptions.labelKey += ' ' + this.common.translate('max_amount_key') + ' ' + this.productClass.maxFinancingAmt;
            }
            this.financialCalculatorOptions.downPaymentExists = (value.selectedObj.downPayment && value.selectedObj.downPayment > 0) ? true : false;
            // set validation form no of installments
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.maxNoOfRepayments);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName], this.productClass.minNoOfRepayments);
            // set validation for min/max financing amount
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName], this.productClass.maxFinancingAmt);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName], this.productClass.minFinancingAmt);
            /* To clear fields when product class changed */
            // Edited by ahmed regarding TP#1402866 check on oldSelectedProduct
            //to prevent clearing amount field if it is entered before selecting any product type
            //and in case opening deal request from saved drafts
            if (this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName] && this.oldSelectedProduct) {
                this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.amountOptions.fcName].setValue('');
                this.amountValue = 0;
            }
            if (this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName]) {
                this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName].setValue(0);
            }
            if (this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.currenciesOptions.fcName]) {
                this.formGroup.controls[this.financialCalculatorOptions.complexAmountOptions.currenciesOptions.fcName].setValue(null);
            }
        }
        this.oldSelectedProduct = this.formGroup.controls[this.financialCalculatorOptions.productTypesOptions.fcName].value;
    }
    // the event trigger when change the amount to validate the financing Amount and the downpayment value
    onAmountChange(event) {
        if (event && event.amount && this.amountValue != event.amount) {
            this.amountValue = event.amount;
            if (event.amount && this.productClass && this.productClass.downPayment > 0) {
                const minDownPayment = (event.amount * this.productClass.downPayment) / 100;
                if (this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName]) {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXVALUE, [this.financialCalculatorOptions.downPaymentOptions.fcName], event.amount);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINVALUE, [this.financialCalculatorOptions.downPaymentOptions.fcName], minDownPayment);
                    this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName].setValue(minDownPayment.toString());
                }
            }
        }
    }
    // event trigger when currancy change to add the select surruncy id to the VO object
    // temporary added till the issue of financial calc service fixed
    currencyChange(event) {
        if (event && event.itemValue) {
            // set decimalpoins per currency
            if (this.formGroup.controls[this.financialCalculatorOptions.downPaymentOptions.fcName]) {
                this.financialCalculatorOptions.downPaymentOptions.decimalPoints = this.financialCalculatorOptions.complexAmountOptions.amountOptions.decimalPoints;
            }
        }
    }
    updateCalculatorVO() {
        //Mohanad AZDB-6448 - 19112024
        if (this.ownFinancialCalculatorVO[this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName] == this.commonProv.translate('unlimited_key')) {
            this.commonProv.setValInsideNestedObj(this.financialCalculatorOptions.numberOfInstallmentsCountOptions.fcName, 'Unlimited', this.ownFinancialCalculatorVO);
        }
    }
};
FinancialCalculatorPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"] }
];
FinancialCalculatorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-financial-calculator',
        template: _raw_loader_financial_calculator_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_financial_calculator_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]])
], FinancialCalculatorPage);



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
//# sourceMappingURL=45-es2015.js.map