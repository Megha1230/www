(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payId-transfer-payId-transfer-module"],{

/***/ "6jfY":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PsLookupOwnPayIdsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupOwnPayIdsComponentModule", function() { return PsLookupOwnPayIdsComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */ "t+iT");
/* harmony import */ var _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component.module */ "FApF");
/* harmony import */ var _ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-lookup-own-payIds.component */ "JIdv");







let PsLookupOwnPayIdsComponentModule = class PsLookupOwnPayIdsComponentModule {
};
PsLookupOwnPayIdsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnPayIdsComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"],
            _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_5__["PsPayIdBeneficiaryComponentModule"]
        ],
        exports: [_ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnPayIdsComponent"]],
        entryComponents: [_ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnPayIdsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsLookupOwnPayIdsComponentModule);



/***/ }),

/***/ "9+1d":
/*!***************************************************************!*\
  !*** ./src/app/pages/payId-transfer/payId-transfer.module.ts ***!
  \***************************************************************/
/*! exports provided: PayIdTransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayIdTransferPageModule", function() { return PayIdTransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component.module */ "FApF");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */ "Uxj/");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module */ "ohDU");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */ "oZQX");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_payIds_ps_lookup_own_payIds_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.module */ "6jfY");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.module */ "d/Nm");
/* harmony import */ var _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../commonSRC/shared.module */ "rlZq");
/* harmony import */ var _payId_transfer_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payId-transfer.page */ "q5E2");













const routes = [
    {
        path: '',
        component: _payId_transfer_page__WEBPACK_IMPORTED_MODULE_12__["PayIdTransferPage"]
    }
];
let PayIdTransferPageModule = class PayIdTransferPageModule {
};
PayIdTransferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_8__["PsComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_10__["PsTemplateStepperModule"],
            src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_payIds_ps_lookup_own_payIds_component_module__WEBPACK_IMPORTED_MODULE_7__["PsLookupOwnPayIdsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexAmountComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"],
            _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexPayIdTypesDetailsComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexSelectBranchComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_3__["PsPayIdBeneficiaryComponentModule"]
        ],
        declarations: [_payId_transfer_page__WEBPACK_IMPORTED_MODULE_12__["PayIdTransferPage"]]
    })
], PayIdTransferPageModule);



/***/ }),

/***/ "JIdv":
/*!******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PsLookupOwnPayIdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLookupOwnPayIdsComponent", function() { return PsLookupOwnPayIdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_lookup_own_payIds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-lookup-own-payIds.component.html */ "jx2c");
/* harmony import */ var _ps_lookup_own_payIds_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-lookup-own-payIds.component.scss */ "Phs7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component */ "PUN2");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../psServices/omni-common/omni-pull.service */ "ZyuK");









let PsLookupOwnPayIdsComponent = class PsLookupOwnPayIdsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"] {
    constructor(common, logger, omniPull) {
        super(common, logger);
        this.common = common;
        this.logger = logger;
        this.omniPull = omniPull;
        this.options = {
            requestObject: null
        };
        this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_payids_found_key'
        };
        this.labelValuesMap = new Map();
        this.populatePayIdMap();
    }
    ngOnInit() {
        super.init();
        this.returnPayIdList();
        this.complexLookupOptions.title = 'title_key';
        this.complexLookupOptions.subTitle = 'sub_title_key';
        this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
        this.common.copyObject(this.complexLookupOptions, this.options, false);
        this.complexLookupOptions.requestObject = this.options.requestObject;
        if (this.options && this.options.component) {
            this.complexLookupOptions.component = this.options.component;
        }
        else {
            this.complexLookupOptions.component = _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_6__["PsPayIdBeneficiaryComponent"];
        }
    }
    returnPayIdList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const beneficiariesRequestParam = {
                filterByOper: true,
                fromTo: this.options.fromTo
            };
            const result = yield this.omniPull.returnBeneficiaries(beneficiariesRequestParam).catch(error => {
                this.complexLookupOptions.listOfOptions = [];
                this.logger.error('Error: While fetching payID beneficiaries in PsLookupBeneficiariesLocalComponent :', error);
            });
            //demo
            if (this.options.fromTo === 'to') {
                result.gridModel = [{
                        submitFieldValueMap: {
                            nickName: 'IBA Wallet',
                            linkedAccount: '00018000132160353140272',
                            payIdType: 'P',
                            status: 'Active',
                            payIdTypeDescriptionConcat: 'Phone Number',
                            phoneNumber: '376712345',
                            lookupKey: '1',
                            purpose: 'business wallet',
                            previewProperty: 'nickName',
                            statusCode: 'A'
                        },
                        dataSaveId: 1
                    },
                    {
                        submitFieldValueMap: {
                            nickName: 'NAB Wallet',
                            linkedAccount: '00018000132160353140272',
                            payIdType: 'P',
                            status: 'Active',
                            payIdTypeDescriptionConcat: 'Email Address',
                            emailaddress: 'payID2@azentio.com',
                            lookupKey: '2',
                            purpose: 'business wallet',
                            previewProperty: 'nickName',
                            statusCode: 'A'
                        },
                        dataSaveId: 2
                    },
                ];
            }
            else {
                result.gridModel = [{
                        submitFieldValueMap: {
                            nickName: 'Ahmed ElFkhrany',
                            availableBalance: '2000000',
                            linkedAccount: '00018000132160353140272',
                            payIdType: 'P',
                            status: 'Active',
                            payIdTypeDescriptionConcat: 'Phone Number',
                            phoneNumber: '376712345',
                            lookupKey: '00018000132160353140272',
                            purpose: 'Testing',
                            previewProperty: 'nickName',
                            statusCode: 'A'
                        }
                    },
                    {
                        submitFieldValueMap: {
                            nickName: 'Mohamed Fawzy',
                            availableBalance: '111745',
                            linkedAccount: '00018000132100353140275',
                            payIdType: 'P',
                            status: 'Active',
                            payIdTypeDescriptionConcat: 'Mobile Number',
                            mobileNumber: '911606588589',
                            lookupKey: '00018000132100353140275',
                            purpose: 'Testing',
                            previewProperty: 'nickName',
                            statusCode: 'A'
                        }
                    },
                    {
                        submitFieldValueMap: {
                            nickName: 'Muhammad Romani',
                            availableBalance: '2000',
                            linkedAccount: '00018000132160353140272',
                            payIdType: 'E',
                            status: 'Deactive',
                            payIdTypeDescriptionConcat: 'Email Address',
                            emailaddress: 'mohammadromani@azentio.com',
                            lookupKey: 'MR1300018000132160353140272',
                            purpose: 'Testing',
                            previewProperty: 'nickName',
                            statusCode: 'B'
                        }
                    }
                ];
            }
            if (result && result.gridModel.length > 0) {
                this.complexLookupOptions.listOfOptions = this.populatePayIdsList(result.gridModel);
            }
            else {
                this.complexLookupOptions.listOfOptions = [];
            }
        });
    }
    populatePayIdsList(dataList) {
        const payidList = [];
        for (let item of dataList) {
            if (item && item.submitFieldValueMap) {
                item = item.submitFieldValueMap;
                const payidCard = {
                    nickName: item.nickName,
                    payIdType: item.payIdType,
                    payIdTypeDescriptionConcat: item.payIdTypeDescriptionConcat,
                    payIdContent: item.payIdTypeDescriptionConcat + ' - ' + (item.phoneNumber || item.emailAddress || item.mobileNumber),
                    phoneNumber: item.phoneNumber,
                    emailaddress: item.emailAddress,
                    mobileNumber: item.mobileNumber,
                    purpose: item.purpose,
                    lookupKey: item.nickName,
                    previewProperty: 'nickName',
                };
                payidList.push(payidCard);
            }
        }
        return payidList;
    }
    onSelectItem(event) {
    }
    populatePayIdMap() {
        let payIdContentMap = {};
        payIdContentMap = {
            key: 'payIdContent',
            value: '------',
            isEdit: false
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('payid_key', payIdContentMap);
    }
    reset() {
        this.complexLookupComponentObj.resetLookUp();
    }
};
PsLookupOwnPayIdsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] }
];
PsLookupOwnPayIdsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    complexLookupComponentObj: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['complexLookupComponentObj',] }]
};
PsLookupOwnPayIdsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-own-payIds',
        template: _raw_loader_ps_lookup_own_payIds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_own_payIds_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]])
], PsLookupOwnPayIdsComponent);



/***/ }),

/***/ "Ngnl":
/*!*************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "OzHP":
/*!********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: PsInputEmailComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputEmailComponentModule", function() { return PsInputEmailComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-input-email.component */ "P7Z/");





let PsInputEmailComponentModule = class PsInputEmailComponentModule {
};
PsInputEmailComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]
        ],
        entryComponents: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputEmailComponentModule);



/***/ }),

/***/ "P7Z/":
/*!***********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PsInputEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputEmailComponent", function() { return PsInputEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-email.component.html */ "gSeR");
/* harmony import */ var _ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-email.component.scss */ "Ngnl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsInputEmailComponent = class PsInputEmailComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"] {
    constructor(commonP, loggerP) {
        super(commonP, loggerP);
        this.mainOptions = {};
    }
    ngOnInit() {
        this.mainOptions = this.options;
        this.mainOptions.type = 'email';
        this.mainOptions.iconOptions = {
            iconName: 'input-mail'
        };
    }
    onChangeEmail($event) {
        this.onPsChange.emit($event);
    }
};
PsInputEmailComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsInputEmailComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-email',
        template: _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsInputEmailComponent);



/***/ }),

/***/ "Phs7":
/*!********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtb3duLXBheUlkcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gSeR":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" [options]=\"mainOptions\"  (onPsChange)=\"onChangeEmail($event)\"></ps-keyin-input>\n");

/***/ }),

/***/ "jx2c":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex class=\"ps-complex-own-payIds\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onSelectItem($event)\" [options]=\"complexLookupOptions\">\n  </ps-complex-lookup>\n\n</ps-container-complex>");

/***/ })

}]);
//# sourceMappingURL=pages-payId-transfer-payId-transfer-module-es2015.js.map