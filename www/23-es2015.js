(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "7xyC":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXBheUlkLXR5cGVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "AxTM":
/*!***************************************************************!*\
  !*** ./src/app/pages/payId-transfer/payId-transfer.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlJZC10cmFuc2Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fmW+":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: PsComplexPayIdTypesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexPayIdTypesDetailsComponent", function() { return PsComplexPayIdTypesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_payId_types_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-payId-types-details.component.html */ "mAit");
/* harmony import */ var _ps_complex_payId_types_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-payId-types-details.component.scss */ "7xyC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsComplexPayIdTypesDetailsComponent = class PsComplexPayIdTypesDetailsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(common, logger) {
        super(common, logger);
        this.common = common;
        this.logger = logger;
        this.selectedType = '';
    }
    ngOnInit() {
        super.init();
    }
    onPayIdTypeSelected(event) {
        if (event && event.itemValue) {
            this.selectedType = event.itemValue;
        }
        else {
            this.selectedType = null;
        }
        this.onPsChange.emit(event);
    }
};
PsComplexPayIdTypesDetailsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsComplexPayIdTypesDetailsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexPayIdTypesDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-payId-types-details',
        template: _raw_loader_ps_complex_payId_types_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_payId_types_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsComplexPayIdTypesDetailsComponent);



/***/ }),

/***/ "mAit":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex>\n  <ps-lov-payId-types id='payidTypes' [options]=\"options.payIdTypesOptions\" (onPsChange)=\"onPayIdTypeSelected($event)\">\n  </ps-lov-payId-types>\n\n  <ps-entity-phone-number *ngIf=\"selectedType === 'M'\" id='mobile' [options]=\"options.mobileOptions\">\n  </ps-entity-phone-number>\n\n  <ps-input-email *ngIf=\"selectedType === 'E'\" id='email' [options]=\"options.emailOptions\"></ps-input-email>\n\n  <ps-entity-phone-number *ngIf=\"selectedType === 'P'\" id='phone' [options]=\"options.phoneOptions\">\n  </ps-entity-phone-number>\n\n</ps-container-complex>");

/***/ }),

/***/ "ofsm":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payId-transfer/payId-transfer.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"payidTransferPanelOptions\" id=\"payId-transfer-panel\">\n      <ps-lookup-own-payIds [options]=\"fromPayIdLookupOptions\"></ps-lookup-own-payIds>\n      <ps-complex-segment class=\"payid-transfer-segment\" id=\"payidTransferSegment\" [options]=\"complexSegmentOptions\"\n        (complexSegmentButtonClicked)=\"onClickSegment($event)\">\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n          <ps-lookup-own-payIds [options]=\"toPayIdLookupOptions\"></ps-lookup-own-payIds>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n          <ps-complex-payId-types-details [options]=\"payIdTypesDetailsOptions\">\n          </ps-complex-payId-types-details>\n        </ps-content-segment>\n      </ps-complex-segment>\n      <ps-complex-amount [options]=\"complexAmountOptions\">\n\n      </ps-complex-amount>\n      <ps-input-varchar [options]=\"ownPurposeOptions\"></ps-input-varchar>\n      <ps-input-varchar [options]=\"benefPurposeOptions\"></ps-input-varchar>\n\n      <ps-select-toggle [options]=\"saveToBenefToggleOptions\"></ps-select-toggle>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"branchPanelOptions\" id=\"branch-panel\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "q5E2":
/*!*************************************************************!*\
  !*** ./src/app/pages/payId-transfer/payId-transfer.page.ts ***!
  \*************************************************************/
/*! exports provided: PayIdTransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayIdTransferPage", function() { return PayIdTransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payId_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payId-transfer.page.html */ "ofsm");
/* harmony import */ var _payId_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payId-transfer.page.scss */ "AxTM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component */ "PUN2");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component */ "fmW+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");












let PayIdTransferPage = class PayIdTransferPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"] {
    constructor(navService) {
        super();
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.transferVO = {};
        this.stepperOptions = {
            stepperName: 'payId_transfer_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['payId_transfer_details'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonSettings"].serviceUrl.commonSubmitAction,
                group: this.formGroup,
                postCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.handleScreenVo(response));
                        });
                    },
                    executionClass: this,
                    params: [this]
                }
            },
            requestObject: this.transferVO
        };
        this.payidTransferPanelOptions = {
            isExpandable: true,
            labelKey: 'payid_transfer_key',
            iconName: 'document',
            expanded: true
        };
        this.branchPanelOptions = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
        };
        this.fromPayIdLookupOptions = {
            labelKey: 'from_payid_key',
            placeHolder: 'select_from_payid_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_5__["PsPayIdBeneficiaryComponent"],
            group: this.formGroup,
            fcName: 'fromPayId',
            fromTo: 'from',
            requestObject: this.transferVO
        };
        this.toPayIdLookupOptions = {
            labelKey: 'to_payid_key',
            placeHolder: 'select_to_payid_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_5__["PsPayIdBeneficiaryComponent"],
            group: this.formGroup,
            fcName: 'toBeneficiary',
            fromTo: 'to',
            requestObject: this.transferVO
        };
        this.complexSegmentOptions = {
            group: this.formGroup,
            segmentOptions: {
                fcName: 'beneficiarySegment',
                segmentList: [{
                        selected: true,
                        itemValue: 'to_benef',
                        description: this.commonProv.translate('to_beneficiary_key'),
                    }, {
                        selected: true,
                        itemValue: 'to_others',
                        description: this.commonProv.translate('to_other_key')
                    }],
                group: this.formGroup,
            },
            segmentContainerOptions: {
                numberOfSegments: 2,
                namesofSegments: ['beneficiary_segment', 'other_segment'],
            }
        };
        this.payIdTypesDetailsOptions = {
            payIdTypesOptions: {
                fcName: 'payIdType',
                group: this.formGroup,
            },
            mobileOptions: {
                fcName: 'mobileNo',
                labelKey: 'mobile_no_key',
                placeHolder: 'enter_mobile_no_key',
                group: this.formGroup
            },
            emailOptions: {
                fcName: 'email',
                labelKey: 'email_address_key',
                placeHolder: 'enter_email_address_key',
                group: this.formGroup
            },
            phoneOptions: {
                fcName: 'phoneNo',
                labelKey: 'phone_number_key',
                placeHolder: 'enter_phone_number_key',
                group: this.formGroup
            }
        };
        this.complexAmountOptions = {
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'select_currency_key',
                group: this.formGroup,
                fcName: 'currency'
            },
            amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transferAmount',
                group: this.formGroup,
                type: 'amount',
                decimalPoints: 3
            },
            requestObject: this.transferVO
        };
        this.ownPurposeOptions = {
            labelKey: 'own_purpose_key',
            placeHolder: 'enter_the_purpose_to_be_shown_on_your_statement_key',
            group: this.formGroup,
            fcName: 'ownPurpose'
        };
        this.benefPurposeOptions = {
            labelKey: 'beneficiary_purpose_key',
            placeHolder: 'enter_the_purpose_to_be_shared_with_beneficiary_bank_key',
            group: this.formGroup,
            fcName: 'benefPurpose'
        };
        this.saveToBenefToggleOptions = {
            labelKey: 'save_beneficiary_key',
            placeHolder: 'save_beneficiar_key',
            group: this.formGroup,
            fcName: 'saveBenef',
            psClass: 'toggleColor'
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.commonProv.copyObject(this.transferVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
    }
    onClickSegment(event) {
        var _a, _b;
        if (event === this.complexSegmentOptions.segmentOptions.segmentList[0].itemValue) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.payIdTypesDetailsOptions.payIdTypesOptions.fcName], 0);
            this.commonProv.setValInsideNestedObj(this.payIdTypesDetailsOptions.payIdTypesOptions.fcName, null, this.transferVO);
            this.complexPayIdTypesDetailsComp.onPayIdTypeSelected();
        }
        else {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.toPayIdLookupOptions.fcName, this.toPayIdLookupOptions.fcName + '_lookupKey'], 0);
            this.commonProv.setValInsideNestedObj(this.toPayIdLookupOptions.fcName, null, this.transferVO);
            (_a = this.formGroup.controls[this.toPayIdLookupOptions.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
            (_b = this.formGroup.controls[this.toPayIdLookupOptions.fcName + '_lookupKey']) === null || _b === void 0 ? void 0 : _b.reset();
        }
        this.formGroup.controls[this.complexSegmentOptions.segmentOptions.fcName].setValue(event);
    }
    savePayIdBeneficiary() {
        var _a, _b, _c, _d, _e;
        let page;
        page = {
            operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PAYID_BENEFICIARY_OPER_ID,
            title: 'payid_beneficiary_key',
            component: 'add-payId',
            param: {
                payIdType: (_a = this.formGroup.controls[this.payIdTypesDetailsOptions.payIdTypesOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value,
                mobileNumber: (_b = this.formGroup.controls[this.payIdTypesDetailsOptions.mobileOptions.fcName]) === null || _b === void 0 ? void 0 : _b.value,
                emailAddress: (_c = this.formGroup.controls[this.payIdTypesDetailsOptions.emailOptions.fcName]) === null || _c === void 0 ? void 0 : _c.value,
                phoneNumber: (_d = this.formGroup.controls[this.payIdTypesDetailsOptions.phoneOptions.fcName]) === null || _d === void 0 ? void 0 : _d.value,
                purpose: (_e = this.formGroup.controls[this.benefPurposeOptions.fcName]) === null || _e === void 0 ? void 0 : _e.value
            }
        };
        this.navService.openPage(page);
    }
    handleScreenVo(resp) {
        var _a;
        if (((_a = this.formGroup.controls[this.saveToBenefToggleOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) == true) {
            this.savePayIdBeneficiary();
        }
    }
};
PayIdTransferPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"] }
];
PayIdTransferPage.propDecorators = {
    complexPayIdTypesDetailsComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexPayIdTypesDetailsComponent"],] }]
};
PayIdTransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'payId-transfer',
        template: _raw_loader_payId_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payId_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]])
], PayIdTransferPage);



/***/ })

}]);
//# sourceMappingURL=23-es2015.js.map