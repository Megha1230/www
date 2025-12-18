(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "7cSM":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authorized-signatory/authorized-signatory.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-segment id=\"Segment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-signatory-card id=\"ps-authorized-signatory-list\" [options]=\"authorizedSignatoryOptions\">\n      </ps-signatory-card>\n    </ps-content-segment>\n\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-signatory-card id=\"ps-authorizer-signatory-list\" [options]=\"authorizerSignatoryOptions\">\n      </ps-signatory-card>\n    </ps-content-segment>\n  </ps-complex-segment>\n</ps-template-view>");

/***/ }),

/***/ "bj35":
/*!*************************************************************************!*\
  !*** ./src/app/pages/authorized-signatory/authorized-signatory.page.ts ***!
  \*************************************************************************/
/*! exports provided: AuthorizedSignatoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedSignatoryPage", function() { return AuthorizedSignatoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_authorized_signatory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./authorized-signatory.page.html */ "7cSM");
/* harmony import */ var _authorized_signatory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorized-signatory.page.scss */ "bqvS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../omni-base/omni-base.page */ "gKqT");










let AuthorizedSignatoryPage = class AuthorizedSignatoryPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_9__["OmniBasePage"] {
    constructor(commonProv, logger, omniPull) {
        super();
        this.commonProv = commonProv;
        this.logger = logger;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.authorizedSignatoryOptions = {};
        this.authorizerSignatoryOptions = {};
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.complexSegmentOptions = {
            segmentOptions: {
                fcName: 'signatoriesSegment',
                segmentList: [{
                        selected: true,
                        itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZED,
                        description: this.commonProv.translate('authorized_key')
                    }, {
                        selected: true,
                        itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZER,
                        description: this.commonProv.translate('authorizer_key')
                    }]
            },
            segmentContainerOptions: {
                numberOfSegments: 2,
                namesofSegments: ['authorized_segment', 'authorizer_segment'],
            }
        };
    }
    ngOnInit() {
        this.baseFormGroup = this.formGroup;
        this.complexSegmentOptions.group = this.formGroup;
        this.authorizedSignatoryOptions.group = this.formGroup;
        this.authorizedSignatoryOptions.noSignatoriesLabel = 'authorized_signatory_list_not_available';
        this.authorizedSignatoryOptions.isEditable = false;
        this.authorizedSignatoryOptions.translate = false;
        this.authorizedSignatoryOptions.showOnlyList = true;
        this.authorizedSignatoryOptions.signatoryType = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZED;
        this.authorizerSignatoryOptions.group = this.formGroup;
        this.authorizerSignatoryOptions.noSignatoriesLabel = 'authorizer_signatory_list_not_available';
        this.authorizerSignatoryOptions.isEditable = false;
        this.authorizerSignatoryOptions.translate = false;
        this.authorizerSignatoryOptions.showOnlyList = true;
        this.authorizerSignatoryOptions.signatoryType = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZER;
    }
    ionViewWillEnter() {
        super.viewWillEnter();
        const defaultSegment = this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue;
        // Fetch default segment's data
        this.loadSignatoriesList(defaultSegment);
    }
    onClickSegment(selectedSegment) {
        if (selectedSegment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZED) {
            this.authorizedSignatoryOptions.signatoryType = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZED;
            this.loadSignatoriesList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZED);
        }
        else {
            this.authorizerSignatoryOptions.signatoryType = _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZER;
            this.loadSignatoriesList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SIGNATORY_SEGMENT_NAME_AUTHORIZER);
        }
    }
    loadSignatoriesList(segment) {
        this.authorizedSignatoryOptions.listOfOptions = [];
        this.authorizerSignatoryOptions.listOfOptions = [];
        // dummy data for demo should be removed
        this.authorizedSignatoryOptions.listOfOptions = [
            {
                signatoryType: 'authorized',
                cifNumber: '254763',
                cifName: 'Mahmoud Alaa',
                idNumber: '85641',
                idType: 'National ID',
                nationality: 'Egyptian',
                address: 'Alexandria, Egypt',
            },
            {
                signatoryType: 'authorized',
                cifNumber: '876512',
                cifName: 'Ahmed Ali',
                idNumber: '56471',
                idType: 'National ID',
                nationality: 'Pakistani',
                address: 'Karachi, Pakistan',
            },
            {
                signatoryType: 'authorized',
                cifNumber: '325479',
                cifName: 'Mohamed Tony',
                idNumber: '95472',
                idType: 'National ID',
                nationality: 'Egyptian',
                address: 'Maadi, Cairo, Egypt',
            }
        ];
        this.authorizerSignatoryOptions.listOfOptions = [
            {
                signatoryType: 'authorizer',
                cifNumber: '756423',
                cifName: 'Muneer Alaa',
                idNumber: '583411',
                idType: 'National ID',
                nationality: 'Egyptian',
                address: 'Alexandria, Egypt',
            },
            {
                signatoryType: 'authorized',
                cifNumber: '123456',
                cifName: 'Moustafa Nabil',
                idNumber: '974632',
                idType: 'National ID',
                nationality: 'Pakistani',
                address: 'Karachi, Pakistan',
            }
        ];
        // const paramData: IOmniSignatoriessRequest = {
        //   // language: 'EN',
        //   signatoryType: segment
        // };
        // this.authorizedSignatoryOptions.listOfOptions = [];
        // this.authorizerSignatoryOptions.listOfOptions = [];
        // this.omniPull.returnSignatoryList(paramData).then((result) => {
        //   if (result && result.gridModel.length > 0) {
        //     if (segment === CommonBussinessConstant.SIGNATORY_SEGMENT_NAME_AUTHORIZED) {
        this.authorizedSignatoryOptions.listOfOptions = this.populateSignatories(this.authorizedSignatoryOptions.listOfOptions, segment);
        // this.authorizerSignatoryOptions.listOfOptions = this.populateSignatories(result.gridModel, segment);
        //     } else {
        this.authorizerSignatoryOptions.listOfOptions = this.populateSignatories(this.authorizerSignatoryOptions.listOfOptions, segment);
        // this.authorizerSignatoryOptions.listOfOptions = this.populateSignatories(result.gridModel, segment);
        //     }
        //   }
        // }).catch(err => this.logger.error('Error: While fetching signatories list :', err));
        this.authorizedSignatoryOptions.itemList = this.authorizedSignatoryOptions.listOfOptions;
        this.authorizerSignatoryOptions.itemList = this.authorizerSignatoryOptions.listOfOptions;
    }
    populateSignatories(signatories, segment) {
        const signatoryList = [];
        for (const iterator of signatories) {
            // eslint-disable-next-line no-shadow
            const signatory = {
                signatoryType: iterator.signatoryType,
                cifName: iterator.cifName,
                cifNumber: iterator.cifNumber,
                idNumber: iterator.idNumber,
                idType: iterator.idType,
                key: iterator.key,
                nationality: iterator.nationality,
                address: iterator.address,
                lookupKey: iterator.lookupKey,
                applicationId: iterator.applicationId,
                additionalRef: iterator.additionalRef,
                cif: iterator.cif,
            };
            signatoryList.push(signatory);
        }
        return signatoryList;
    }
};
AuthorizedSignatoryPage.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"] }
];
AuthorizedSignatoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-authorized-signatory',
        template: _raw_loader_authorized_signatory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_authorized_signatory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]])
], AuthorizedSignatoryPage);



/***/ }),

/***/ "bqvS":
/*!***************************************************************************!*\
  !*** ./src/app/pages/authorized-signatory/authorized-signatory.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpemVkLXNpZ25hdG9yeS5wYWdlLnNjc3MifQ== */");

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
//# sourceMappingURL=33-es2015.js.map