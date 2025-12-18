(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "J0OA":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rewards-catalogue/rewards-catalogue.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\r\n    <div>\r\n        <ps-complex-widget-dropdowns [options]=\"widgetDropdownsOptions\" class=\"rewards_catalogue_widgets\">\r\n        </ps-complex-widget-dropdowns>\r\n    </div>\r\n</ps-template-view>");

/***/ }),

/***/ "fXc6":
/*!*******************************************************************!*\
  !*** ./src/app/pages/rewards-catalogue/rewards-catalogue.page.ts ***!
  \*******************************************************************/
/*! exports provided: RewardsCataloguePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsCataloguePage", function() { return RewardsCataloguePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rewards_catalogue_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rewards-catalogue.page.html */ "J0OA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_reward_details_ps_complex_reward_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-reward-details/ps-complex-reward-details.component */ "mONG");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_push_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/omni-common/omni-push.service */ "ysEX");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../omni-base/omni-base.page */ "gKqT");













let RewardsCataloguePage = class RewardsCataloguePage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(commonService, logger, omniPull, omniPush) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.omniPush = omniPush;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.rewardsCatalogueVO = {};
        this.showCategories = false;
        this.maskOptions = {
            groupSeparator: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].THOUSANDS_SEPARATOR,
            alias: 'currency',
            autoGroup: true,
            placeholder: '0',
            greedy: false,
            digits: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].DEFAULT_DECIMAL_DIGITS
        };
        this.templateViewOptions = {
            group: this.formGroup,
            disableLoading: true
        };
        this.widgetDropdownsOptions = {
            group: this.formGroup,
            requestObject: this.rewardsCatalogueVO,
            detailsObject: {
                detailsModal: _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_reward_details_ps_complex_reward_details_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexRewardDetailsComponent"],
                detailsModalClass: 'reward-details-modal',
                detailsModalId: 'ps-complex-reward-details-modal',
                detailsActionsList: [{ label: 'redeem_now_key', action: (data) => this.applyRedemption(data) }]
            },
            dropdowns: [
                {
                    group: this.formGroup,
                    fcName: 'categories',
                    labelKey: 'categories_key',
                    listOfOptions: [],
                    asyncURL: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].RETURN_REWARDS_CATEGORIES_URL,
                    serviceRequestObj: { submitType: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].RETURN_CATEGORIES_SUBMIT_TYPE, operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].REWARDS_CATALOGUE_OPER },
                    mapResponseProperties: {
                        itemValue: 'pathRewardCategoryId',
                        description: 'pathName',
                        imageName: 'pathImageUrl',
                        fallBackImageName: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].NO_IMAGE_FOUND_FALLBACK
                    },
                    enablePagination: false,
                    requestObject: this.rewardsCatalogueVO,
                    notSelectable: true
                },
                {
                    group: this.formGroup,
                    fcName: 'rewards',
                    labelKey: 'rewards_key',
                    listOfOptions: [],
                    asyncURL: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].RETURN_REWARDS_URL,
                    serviceRequestObj: { submitType: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].RETURN_REWARDS_SUBMIT_TYPE, operId: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].REWARDS_CATALOGUE_OPER },
                    mapResponseProperties: {
                        itemValue: 'pathRewardCategoryIdValue',
                        description: 'pathName',
                        imageName: 'pathImageUrl',
                        fallBackImageName: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].NO_IMAGE_FOUND_FALLBACK,
                        additionalDescList: [
                            { propNames: ['pathMerchantRewardsCatalogId'] },
                            { propNames: ['pathExpiryDate'] },
                            { propNames: ['pathNumberOfPoints'], maskOptions: this.maskOptions, concatString: 'points_key' }
                        ],
                        additionalActionList: [{ labelKey: 'redeem_now_key', group: this.formGroup, handler: (data) => this.applyRedemption(data) }]
                    },
                    enablePagination: false,
                    requestObject: this.rewardsCatalogueVO,
                    notSelectable: true,
                    isMultiDescription: true
                }
            ]
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.commonProv.setFormData(this.formGroup, this.rewardsCatalogueVO);
    }
    applyRedemption(data) {
        if (data) {
            const parameter = {
                submitType: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].APPLY_REDEMPTION_SUBMIT_TYPE,
                actionType: 'Submit',
                commonParametersList: Object.assign({}, data.selectedObj)
            };
            this.commonProv.presentLoading();
            this.omniPush.redeemPoints(parameter).then(() => {
                this.omniPull.getPointsBalance({}).then(() => {
                    this.commonProv.dismissLoading();
                });
            });
        }
    }
};
RewardsCataloguePage.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] },
    { type: _commonBussinessSRC_psServices_omni_common_omni_push_service__WEBPACK_IMPORTED_MODULE_9__["OmniPushService"] }
];
RewardsCataloguePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'rewards-catalogue',
        template: _raw_loader_rewards_catalogue_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"],
        _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], _commonBussinessSRC_psServices_omni_common_omni_push_service__WEBPACK_IMPORTED_MODULE_9__["OmniPushService"]])
], RewardsCataloguePage);



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

/***/ "mONG":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-reward-details/ps-complex-reward-details.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: PsComplexRewardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexRewardDetailsComponent", function() { return PsComplexRewardDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_reward_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-reward-details.component.html */ "nm3A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_action_ps_base_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-action/ps-base-action.component */ "KNX7");
/* harmony import */ var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/models/common-utils */ "qEF5");









let PsComplexRewardDetailsComponent = class PsComplexRewardDetailsComponent extends _commonSRC_psComponents_ps_base_ps_base_action_ps_base_action_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseActionComponent"] {
    constructor(navParams, commonProv, modalCtrl) {
        super(commonProv, commonProv.logger);
        this.navParams = navParams;
        this.commonProv = commonProv;
        this.modalCtrl = modalCtrl;
        this.rewardData = {};
        this.merchantLabelOptions = {
            labelKey: 'merchant_name_key'
        };
        this.validityLabelOptions = {
            labelKey: 'reward_validity_key'
        };
        this.headerOptions = {
            labelKey: 'reward_description_key'
        };
        this.maskOptions = {
            groupSeparator: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonSettings"].THOUSANDS_SEPARATOR,
            alias: 'currency',
            autoGroup: true,
            placeholder: '0',
            greedy: false,
            digits: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].DEFAULT_DECIMAL_DIGITS
        };
    }
    ngOnInit() {
        super.ngOnInit();
        this.rewardData = this.navParams.get('data');
        this.rewardAction = this.navParams.get('actions')[0];
        if (this.rewardData.pathNumberOfPoints) {
            this.rewardData.pathNumberOfPoints = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].applyMaskFormat(+this.rewardData.pathNumberOfPoints, this.maskOptions) + ' ' + this.commonProv.translate('points_key');
        }
        this.rewardData.pathImageUrl = this.rewardData.pathImageUrl ? this.rewardData.pathImageUrl : 'noImage.jpg';
    }
    onRedeemClicked(data) {
        this.rewardAction.action(data);
        this.modalCtrl.dismiss();
    }
};
PsComplexRewardDetailsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
PsComplexRewardDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-reward-details',
        template: _raw_loader_ps_complex_reward_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], PsComplexRewardDetailsComponent);



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

/***/ "nm3A":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-reward-details/ps-complex-reward-details.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ps-complex-reward-details\">\r\n    <div class=\"reward-details_header\">\r\n        <ps-label-header class=\"reward_title\" [options]=\"headerOptions\"></ps-label-header>\r\n        <ps-icon-close class=\"header_close\"></ps-icon-close>\r\n    </div>\r\n    <div class=\"reward-details_body\">\r\n        <div class=\"reward-details_main\">\r\n            <ps-action-image class=\"reward_image\" *ngIf=\"rewardData.pathImageUrl\"\r\n                [options]=\"{imageName: rewardData.pathImageUrl}\">\r\n            </ps-action-image>\r\n            <ps-label class=\"reward_points\" *ngIf=\"rewardData?.pathNumberOfPoints\"\r\n                [options]=\"{labelKey:rewardData?.pathNumberOfPoints, translate:false}\">\r\n            </ps-label>\r\n            <ps-label class=\"reward_name\" [options]=\"{labelKey:rewardData?.pathName, translate:false}\"></ps-label>\r\n        </div>\r\n        <div class=\"reward-details_desc\">\r\n            <ps-label class=\"reward_description\"\r\n                [options]=\"{labelKey:rewardData?.pathProductDescription, translate:false}\">\r\n            </ps-label>\r\n            <div class=\"reward_merchant\">\r\n                <ps-label class=\"reward_merchant-label\" [options]=\"merchantLabelOptions\"></ps-label>\r\n                <ps-label class=\"reward_merchant-value\"\r\n                    [options]=\"{labelKey:rewardData?.pathMerchantRewardsCatalogId, translate:false}\">\r\n                </ps-label>\r\n            </div>\r\n            <div class=\"reward_validity\">\r\n                <ps-label class=\"reward_validity-label\" [options]=\"validityLabelOptions\"></ps-label>\r\n                <ps-label class=\"reward_validity-value\"\r\n                    [options]=\"{labelKey:rewardData?.pathExpiryDate, translate:false}\">\r\n                </ps-label>\r\n            </div>\r\n            <ps-action-button class=\"redeem_action\" (onClick)=\"onRedeemClicked(rewardData)\"\r\n                [options]=\"{labelKey: rewardAction.label}\">\r\n            </ps-action-button>\r\n        </div>\r\n    </div>\r\n</div>");

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
//# sourceMappingURL=20-es2015.js.map