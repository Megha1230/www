(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "dae6":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/relationship-officer-details/relationship-officer-details.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: RelationshipOfficerDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipOfficerDetailsPage", function() { return RelationshipOfficerDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relationship_officer_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relationship-officer-details.page.html */ "ecwQ");
/* harmony import */ var _relationship_officer_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relationship-officer-details.page.scss */ "jBpv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");










let RelationshipOfficerDetailsPage = class RelationshipOfficerDetailsPage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_9__["OmniBasePage"] {
    constructor(commonProv, navigatorProv, omniPull, logger) {
        super();
        this.commonProv = commonProv;
        this.navigatorProv = navigatorProv;
        this.omniPull = omniPull;
        this.logger = logger;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.panelRelOptions = {
            isExpandable: true,
            labelKey: 'relationship_officer_details_key',
            expanded: true,
            iconName: 'contact'
        };
        this.officerIdOptions = {
            placeHolder: 'officer_id_key',
            labelKey: 'officer_id_key',
            group: this.formGroup,
            fcName: 'officerId'
        };
        this.officerNameOptions = {
            placeHolder: 'officer_name_key',
            labelKey: 'officer_name_key',
            group: this.formGroup,
            fcName: 'officerName'
        };
        this.roleOptions = {
            placeHolder: 'role_key',
            labelKey: 'role_key',
            group: this.formGroup,
            fcName: 'role'
        };
        this.divisionOptions = {
            placeHolder: 'division_key',
            labelKey: 'division_key',
            group: this.formGroup,
            fcName: 'division'
        };
        this.branchNameOptions = {
            placeHolder: 'branch_name_key',
            labelKey: 'branch_name_key',
            group: this.formGroup,
            fcName: 'branchName'
        };
        this.officeNumberOptions = {
            placeHolder: 'office_number_key',
            labelKey: 'office_number_key',
            group: this.formGroup,
            fcName: 'officeNumber'
        };
        this.extensionNumberOptions = {
            placeHolder: 'extension_number_key',
            labelKey: 'extension_number_key',
            group: this.formGroup,
            fcName: 'extensionNumber'
        };
        this.mobileNumberOptions = {
            placeHolder: 'mobile_number_key',
            labelKey: 'mobile_number_key',
            group: this.formGroup,
            fcName: 'mobileNumber'
        };
        this.emailAddressOptions = {
            placeHolder: 'email_address_key',
            labelKey: 'email_address_key',
            group: this.formGroup,
            fcName: 'emailAddress'
        };
        this.departmentOptions = {
            placeHolder: 'department_key',
            labelKey: 'department_key',
            group: this.formGroup,
            fcName: 'department'
        };
        this.managerNameOptions = {
            placeHolder: 'manager_name_key',
            labelKey: 'manager_name_key',
            group: this.formGroup,
            fcName: 'managerName'
        };
    }
    ngOnInit() {
        super.init();
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.returnCIFInformation();
    }
    returnCIFInformation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cifInfo = yield this.omniPull.returnCIFInformation({}).catch(error => {
                this.logger.error('Error: While fetching returnCIFInformation : ', error);
            });
            if (cifInfo) {
                this.formGroup.controls[this.officerIdOptions.fcName].setValue(cifInfo.officerId);
                this.formGroup.controls[this.officerNameOptions.fcName].setValue(cifInfo.officerName);
                this.formGroup.controls[this.roleOptions.fcName].setValue(cifInfo.roleDesc);
                this.formGroup.controls[this.divisionOptions.fcName].setValue(cifInfo.employerDivisionDesc);
                this.formGroup.controls[this.branchNameOptions.fcName].setValue(cifInfo.userBranchName);
                this.formGroup.controls[this.officeNumberOptions.fcName].setValue(cifInfo.userOfficeNb);
                this.formGroup.controls[this.extensionNumberOptions.fcName].setValue(cifInfo.userOfficeExt);
                this.formGroup.controls[this.mobileNumberOptions.fcName].setValue(cifInfo.userMobilePhone);
                this.formGroup.controls[this.emailAddressOptions.fcName].setValue(cifInfo.userEmail);
                this.formGroup.controls[this.departmentOptions.fcName].setValue(cifInfo.employerDepartmentDesc);
                this.formGroup.controls[this.managerNameOptions.fcName].setValue(cifInfo.managerName);
            }
        });
    }
};
RelationshipOfficerDetailsPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
RelationshipOfficerDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-relationship-officer-details',
        template: _raw_loader_relationship_officer_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relationship_officer_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], RelationshipOfficerDetailsPage);



/***/ }),

/***/ "ecwQ":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/relationship-officer-details/relationship-officer-details.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <div>\n    <ps-container-panel [options]=\"panelRelOptions\" id=\"profile_panel1\">\n      <ps-input-display-only id=\"'officerId' + id\" [options]=\"officerIdOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'officerName' + id\" [options]=\"officerNameOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'role' + id\" [options]=\"roleOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'division' + id\" [options]=\"divisionOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'branchName' + id\" [options]=\"branchNameOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'officeNumber' + id\" [options]=\"officeNumberOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'extensionNumber' + id\" [options]=\"extensionNumberOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'mobileNumber' + id\" [options]=\"mobileNumberOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'emailAddress' + id\" [options]=\"emailAddressOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'department' + id\" [options]=\"departmentOptions\">\n\n      </ps-input-display-only>\n      <ps-input-display-only id=\"'managername' + id\" [options]=\"managerNameOptions\">\n\n      </ps-input-display-only>\n    </ps-container-panel>\n  </div>\n</ps-template-view>");

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

/***/ "jBpv":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/relationship-officer-details/relationship-officer-details.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdGlvbnNoaXAtb2ZmaWNlci1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

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
//# sourceMappingURL=58-es2015.js.map