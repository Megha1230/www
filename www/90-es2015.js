(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "JgMb":
/*!*************************************************************************!*\
  !*** ./src/app/pages/letter-of-guarantee/letter-of-guarantee.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXR0ZXItb2YtZ3VhcmFudGVlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Nshj":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/letter-of-guarantee/letter-of-guarantee.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n        <ps-container-panel [options]=\"panelOptions1Step1\" id=\"lg_details_panel\">\n\n            <ps-input-display-only id=\"documentInNameRO\" [options]=\"documentInNameReadOnlyOptions\">\n            </ps-input-display-only>\n\n            <ps-input-display-only-cif-address-home id=\"applicantAddressDetails\"\n                [options]=\"applicantHomeAddressReadOnlyOptions\">\n            </ps-input-display-only-cif-address-home>\n\n            <ps-date-day-month-year-future [options]=\"effictiveDateOptions\"\n                (onPsChange)=\"onEffectiveDateChange($event)\">\n            </ps-date-day-month-year-future>\n\n            <ps-date-day-month-year-future [options]=\"expiryDateOptions\" (onPsChange)=\"onExpiryDateChange($event)\">\n            </ps-date-day-month-year-future>\n\n            <ps-date-day-month-year-future [options]=\"claimEndDateOptions\" (onPsChange)=\"onclaimEndDateChange($event)\">\n            </ps-date-day-month-year-future>\n\n\n            <ps-input-numeric [options]=\"periodDays\" (onPsChange)=\"onPeriodDaysChange($event)\"></ps-input-numeric>\n\n\n            <ps-dropdown-tfs-document-type [options]=\"tfsOptions\"></ps-dropdown-tfs-document-type>\n\n\n            <ps-complex-amount [options]=\"complexAmountOptions\">\n            </ps-complex-amount>\n\n\n            <ps-lov-charges-borne-by [options]=\"chargesBorneByOptions\" (onPsChange)=\"onchargesBorneByChange($event)\">\n            </ps-lov-charges-borne-by>\n\n\n            <ps-input-varchar *ngIf=\"isBeneficiaryChargesAccount\" id=\"'accountName' + id\"\n                [options]=\"accountNameOptions\"></ps-input-varchar>\n\n            <ps-input-varchar hidden [options]=\"branchOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"currencyOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"glAccountOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"cifNoOptions\"></ps-input-varchar>\n            <ps-input-varchar hidden [options]=\"serialNumberOptions\"></ps-input-varchar>\n\n\n            <ps-lov-form-of-undertaking id=\"form_of_undertaking\" [options]=\"formOfUndertakingOptions\">\n            </ps-lov-form-of-undertaking>\n\n            <ps-lov-settlement-method [options]=\"settlementMethodOptions\"\n                (onPsChange)=\"onSettlementMethodChange($event)\">\n            </ps-lov-settlement-method>\n            \n            <ps-lookup-own-accounts *ngIf=\"isApplicantChargesAccount || isApplicantFundingMethod\" id=\"'chargesAccount'+ id\"\n                [options]=\"chargesAccountListOptions\">\n            </ps-lookup-own-accounts>\n\n            <ps-lookup-own-accounts class=\"accounts\" id=\"'settelmentMethod'+ id\" #fromAccountRef\n                [options]=\"settlementAccountListOptions\">\n            </ps-lookup-own-accounts>\n\n            <ps-lookup-facility-details [options]=\"facilityDetailsOptions\" #facilityRef>\n            </ps-lookup-facility-details>\n\n\n            <ps-lov-type-of-undertaking id=\"type_of_undertaking\" [options]=\"typeOfUndertakingOptions\">\n            </ps-lov-type-of-undertaking>\n\n\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions2Step1\" id=\"validity_panel\">\n            <ps-lov-expiry-type id=\"expiry_type\" [options]=\"expiryTypeOptions\"\n                (onPsChange)=\"onexpirtTypeChange($event)\"></ps-lov-expiry-type>\n            <ps-lov-automatic-extention-period id=\"automatic_extention_period\"\n                [options]=\"automaticExtensionPeriodOptions\" (onPsChange)=\"onautomaticExtentionPeriodChange($event)\">\n            </ps-lov-automatic-extention-period>\n            <ps-date-day-month-year-future [options]=\"daysAutomaticExtensionPeriodOptions\">\n            </ps-date-day-month-year-future>\n            <ps-date-day-month-year-future [options]=\"oneYAutomaticExtensionPeriodOptions\">\n            </ps-date-day-month-year-future>\n            <ps-date-day-month-year-future [options]=\"otherAutomaticExtensionPeriodOptions\">\n            </ps-date-day-month-year-future>\n\n            <ps-select-toggle [id]=\"'sameBankBenef'\" [options]=\"sameBankToggleOptions\"\n                (onPsChange)=\"onSameBankToggleChange($event)\">\n            </ps-select-toggle>\n            <ps-banks [options]=\"beneficiaryBankCifDdlbOptions\">\n            </ps-banks>\n            <ps-input-varchar [options]=\"beneficiaryBankerSwiftCodeOptions\"></ps-input-varchar>\n            <ps-input-account-number [options]=\"accountNumberOptions\">\n            </ps-input-account-number>\n            <ps-input-varchar [options]=\"beneficiaryNameValidityOptions\"></ps-input-varchar>\n            <ps-complex-address [options]=\"benefAddressOptions\"></ps-complex-address>\n        </ps-container-panel>\n\n    </ps-form-step>\n    <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n        <ps-container-panel [options]=\"panel1OptionsStep2\" id=\"lg_panel1\">\n            <ps-input-display-only id=\"'beneficiaryCIF' + id\" [options]=\"beneficiaryBankCifOptions\">\n            </ps-input-display-only>\n\n            <ps-input-varchar id=\"'beneficiaryName' + id\" [options]=\"beneficiaryNameOptions\"></ps-input-varchar>\n\n\n            <ps-dropdown-country [options]=\"beneficiaryCountriesOptions\"></ps-dropdown-country>\n\n\n            <ps-input-varchar id=\"'beneficiaryName' + id\" [options]=\"beneficiaryAddressOptions\"></ps-input-varchar>\n\n\n\n\n\n\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panel2OptionsStep2\" id=\"lg_benef_details_panel\">\n\n            <ps-input-varchar id=\"'purpose1' + id\" [options]=\"purpose1Options\"></ps-input-varchar>\n            <ps-input-varchar id=\"'purpose2' + id\" [options]=\"purpose2Options\"></ps-input-varchar>\n            <ps-input-varchar id=\"'purpose3' + id\" [options]=\"purpose3Options\"></ps-input-varchar>\n            <ps-lov-applicable-rules id=\"applicable_rules\" [options]=\"applicableRulesOptions\">\n            </ps-lov-applicable-rules>\n            <ps-input-varchar id=\"undertaking_termsandconditions\" [options]=\"undertakingTermsAndConditionsOptions\">\n            </ps-input-varchar>\n\n\n            <ps-lov-file-identification [options]=\"fileIdentificationOptions\"></ps-lov-file-identification>\n            <ps-lov-delivery-of-original-undertaking [options]=\"deliveryOfOrginalUndertakingOptions\"\n                (onPsChange)=\"ondeliveryOfOrginalUndertakingChange($event)\">\n            </ps-lov-delivery-of-original-undertaking>\n            <ps-input-varchar [options]=\"additionalInfromation\"></ps-input-varchar>\n            <ps-lov-delivery-to-collection-by [options]=\"deliveryToCollectionBy\"\n                (onPsChange)=\"deliveryToCollectionByChange($event)\"> </ps-lov-delivery-to-collection-by>\n            <ps-input-varchar [options]=\"deliveryToCollectionByName\"></ps-input-varchar>\n            <ps-input-varchar [options]=\"deliveryToCollectionByAddress\"></ps-input-varchar>\n            <ps-input-varchar [options]=\"expiryConditionEvent\"></ps-input-varchar>\n            <ps-lov-confirmation-instruction [options]=\"confirmationInstruction\"></ps-lov-confirmation-instruction>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions3Step2\" id=\"lg_attachment_panel\">\n\n            <ps-file-upload-bs [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n\n\n            <ps-input-free-text id=\"comment_input\" [options]=\"commentOptions\">\n            </ps-input-free-text>\n\n        </ps-container-panel>\n\n\n    </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "Un4n":
/*!***********************************************************************!*\
  !*** ./src/app/pages/letter-of-guarantee/letter-of-guarantee.page.ts ***!
  \***********************************************************************/
/*! exports provided: LetterOfGuaranteePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterOfGuaranteePage", function() { return LetterOfGuaranteePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_letter_of_guarantee_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./letter-of-guarantee.page.html */ "Nshj");
/* harmony import */ var _letter_of_guarantee_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./letter-of-guarantee.page.scss */ "JgMb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_ps_option_facility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility/ps-option-facility.component */ "PCz6");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../commonSRC/psServices/logger/logger.service */ "DFXC");

















/** @name letter_of-Guarantee
 *  @author Heba.Hassan
 *  @description Display the letter of Guarantee
 */
let LetterOfGuaranteePage = class LetterOfGuaranteePage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"] {
    constructor(common, logger, omniPull, navService, translateSrv) {
        super();
        this.common = common;
        this.logger = logger;
        this.omniPull = omniPull;
        this.navService = navService;
        this.translateSrv = translateSrv;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.defaultVO = {};
        this.DAYS_AUTOMATIC_EXTENSTION_PERIOD = 'DaysAutomaticExtensionPeriod';
        this.OTHER_AUTOMATIC_EXTENSTION_PERIOD = 'OtherAutomaticExtensionPeriod';
        this.PURPOSE_OF_MESSAGE = 'PurposeOfMessage';
        this.beneficiariesRequestParam = {};
        this.isApplicantChargesAccount = false;
        this.isBeneficiaryChargesAccount = false;
        this.isApplicantFundingMethod = false;
        this.chargesBorneByOptions = {
            group: this.formGroup,
            fcName: 'chargesBorneBy',
        };
        this.accountNameOptions = {
            labelKey: 'charges_account_key',
            placeHolder: 'charges_account_key',
            group: this.formGroup,
            fcName: 'otherPartyChargesAccount'
        };
        this.stepperOptions = {
            stepperName: 'letterOfGuarantee_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['letter_Of_Guarantee_key', 'benefciary_details_key'],
            group: this.formGroup,
            requestObject: this.defaultVO,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_10__["PsCommonBusinessSettings"].serviceUrl.letterOfGuaranteeEndPoint,
            },
        };
        this.panel1OptionsStep2 = {
            isExpandable: true,
            labelKey: 'benefciary_details_key',
            iconName: 'contact',
            expanded: true
        };
        this.panel2OptionsStep2 = {
            isExpandable: true,
            labelKey: 'more_details_key',
            iconName: 'contact',
            expanded: true
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'lg_details_key',
            iconName: 'letter',
            expanded: true
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'validity_details_key',
            iconName: 'letter',
            expanded: true
        };
        this.fileUploadOptions = {
            group: this.formGroup,
            multiple: true,
            fcName: 'selectedFileData',
        };
        this.tfsOptions = {
            group: this.formGroup,
            labelKey: 'lG_types_key',
            placeHolder: 'select_lg_type',
            fcName: 'docType',
            docType: "G"
        };
        this.periodDays = {
            group: this.formGroup,
            fcName: 'periodDays',
            placeHolder: 'claim_period_days_key',
            labelKey: 'claim_period_days_key'
        };
        this.purpose1Options = {
            labelKey: 'purpose_key',
            placeHolder: 'purpose1_key',
            group: this.formGroup,
            fcName: 'purposeTxtDesc'
        };
        this.purpose2Options = {
            labelKey: 'second_purpose_key',
            placeHolder: 'purpose2_key',
            group: this.formGroup,
            fcName: 'purposeTxtDesc2'
        };
        this.purpose3Options = {
            labelKey: 'third_purpose_key',
            placeHolder: 'purpose3_key',
            group: this.formGroup,
            fcName: 'purposeTxtDesc3'
        };
        this.beneficiaryBankCifOptions = {
            labelKey: 'beneficiary_bank_cif_key',
            placeHolder: 'beneficiary_bank_cif_key',
            group: this.formGroup,
            fcName: 'beneficiaryBankCif'
        };
        this.beneficiaryNameOptions = {
            labelKey: 'ultimate_beneficiary_name_key',
            placeHolder: 'ultimate_beneficiary_name_key',
            group: this.formGroup,
            fcName: 'beneficiaryName'
        };
        this.beneficiaryAddressOptions = {
            labelKey: 'ultimate_beneficiary_address_key',
            placeHolder: 'ultimate_beneficiary_address_key',
            group: this.formGroup,
            fcName: 'beneficiaryAddress'
        };
        this.beneficiaryCountriesOptions = {
            labelKey: 'beneficiary_country_key',
            placeHolder: 'select_beneficiary_country_key',
            fcName: 'beneficiaryCountry',
            group: this.formGroup
        };
        this.commentOptions = {
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            fcName: 'comment',
            group: this.formGroup
        };
        this.effictiveDateOptions = {
            labelKey: 'lG_effective_date_key',
            placeHolder: 'enter_lG_effective_date_key',
            fcName: 'effectiveDate',
            group: this.formGroup
        };
        this.expiryDateOptions = {
            labelKey: 'lG_expiry_date_key',
            placeHolder: 'enter_Expiry_date_key',
            fcName: 'expiryDate',
            group: this.formGroup
        };
        this.claimEndDateOptions = {
            labelKey: 'claim_end_date_key',
            placeHolder: 'enter_claim_end_date_key',
            fcName: 'claimEndDate',
            group: this.formGroup
        };
        this.complexAmountOptions = {
            currency: '',
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'select_currency_key',
                fcName: 'currency',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'total_amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                type: 'amount',
                group: this.formGroup
            }
        };
        this.chargesAccountListOptions = {
            labelKey: 'account_number_key',
            placeHolder: 'select_account_number_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.defaultVO,
            currency: '',
        };
        this.settlementMethodOptions = {
            group: this.formGroup,
            fcName: 'settlementMethod',
            labelKey: 'funding_method_key',
            placeHolder: 'select_funding_method_key',
        };
        this.settlementAccountListOptions = {
            labelKey: 'account_number_key',
            placeHolder: 'select_account_number_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_7__["PsAccountsListComponent"],
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'settlementAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.defaultVO,
        };
        this.noLocalOptions = {
            labelKey: 'no_local_ben_available_key'
        };
        this.panelOptions3Step2 = {
            isExpandable: true,
            labelKey: 'attachment_key',
            iconName: 'document',
            expanded: true
        };
        this.documentInNameReadOnlyOptions = {
            fcName: 'documentInNameOfRO',
            labelKey: 'document_in_name_of_key',
            placeHolder: 'document_in_name_of_key',
            group: this.formGroup
        };
        this.applicantHomeAddressReadOnlyOptions = {
            fcName: 'applicantAddressDetails',
            labelKey: 'applicant_address_key',
            placeHolder: 'applicant_address_key',
            group: this.formGroup,
            requestVO: this.defaultVO
        };
        this.facilityDetailsOptions = {
            labelKey: 'facility_key',
            placeHolder: 'select_from_facilities_key',
            fcName: 'facilityDetails',
            group: this.formGroup,
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_ps_option_facility_component__WEBPACK_IMPORTED_MODULE_8__["PsOptionFacilityComponent"],
            requestObject: this.defaultVO
        };
        this.applicableRulesOptions = {
            group: this.formGroup,
            fcName: 'applicableRules',
        };
        this.undertakingTermsAndConditionsOptions = {
            labelKey: 'undertaking_terms_and_conditions_key',
            placeHolder: 'enter_undertaking_terms_and_conditions_key',
            group: this.formGroup,
            fcName: 'undertakingTermsAndConditions'
        };
        this.formOfUndertakingOptions = {
            group: this.formGroup,
            fcName: 'formOfUndertaking',
        };
        this.typeOfUndertakingOptions = {
            group: this.formGroup,
            fcName: 'typeOfUndertaking',
        };
        this.expiryTypeOptions = {
            group: this.formGroup,
            fcName: 'expiryType',
        };
        this.automaticExtensionPeriodOptions = {
            group: this.formGroup,
            fcName: 'automaticExtensionPeriod',
        };
        this.daysAutomaticExtensionPeriodOptions = {
            labelKey: 'days_automatic_extension_peroid_key',
            placeHolder: 'enter_days_automatic_extension_peroid_key',
            fcName: 'daysAutomaticExtensionPeriod',
            group: this.formGroup
        };
        this.oneYAutomaticExtensionPeriodOptions = {
            labelKey: 'oney_automatic_extension_peroid_key',
            placeHolder: 'enter_oney_automatic_extension_peroid_key',
            fcName: 'oneyAutomaticExtensionPeriod',
            group: this.formGroup
        };
        this.otherAutomaticExtensionPeriodOptions = {
            labelKey: 'other_automatic_extension_peroid_key',
            placeHolder: 'enter_other_automatic_extension_peroid_key',
            fcName: 'otherAutomaticExtensionPeriod',
            group: this.formGroup
        };
        this.sameBankToggleOptions = {
            labelKey: 'same_bank_beneficiary_key',
            group: this.formGroup,
            fcName: 'sameBank',
            psClass: 'toggleColor'
        };
        this.beneficiaryBankCifDdlbOptions = {
            categoryLabelKey: 'beneficiary_bank_cif_key',
            categoryPlaceholderKey: 'select_beneficiary_bank_cif_key',
            categoryFcName: 'beneficiaryBankCifCategory',
            subCategoryLabelKey: 'branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: this.formGroup,
            requestObject: this.defaultVO
        };
        this.beneficiaryBankerSwiftCodeOptions = {
            labelKey: 'beneficiary_banker_swift_code',
            placeHolder: 'enter_beneficiary_banker_swift_code',
            group: this.formGroup,
            fcName: 'beneficiaryBankerSwiftCode'
        };
        this.accountNumberOptions = {
            fcName: 'beneficiaryBankAccountNumber',
            labelKey: 'beneficiary_bank_account_no_key',
            placeHolder: 'enter_beneficiary_bank_account_no_key',
            group: this.formGroup
        };
        this.beneficiaryNameValidityOptions = {
            labelKey: 'beneficiary_name_key',
            placeHolder: 'enter_beneficiary_name_key',
            group: this.formGroup,
            fcName: 'beneficiaryName'
        };
        this.benefAddressOptions = {
            buildingOptions: {
                labelKey: 'beneficiary_building_no_key',
                placeHolder: 'enter_beneficiary_building_no_key',
                fcName: 'benefOccupationBuilding',
                group: this.formGroup
            },
            streetOptions: {
                labelKey: 'beneficiary_street_key',
                placeHolder: 'enter_beneficiary_street_key',
                fcName: 'benefStreet',
                group: this.formGroup
            },
            countriesOptions: {
                labelKey: 'beneficiary_country_key',
                placeHolder: 'select_beneficiary_country_key',
                fcName: 'benefCountryCode',
                group: this.formGroup,
            },
            regionOptions: {
                labelKey: 'beneficiary_region_key',
                placeHolder: 'select_beneficiary_region_key',
                fcName: 'benefRegionCode',
                group: this.formGroup
            },
            cityOptions: {
                labelKey: 'beneficiary_city_key',
                placeHolder: 'select_beneficiary_city_key',
                fcName: 'benefCityCode',
                group: this.formGroup,
            },
            poBoxInputOptions: {
                group: this.formGroup,
                fcName: 'benefpoBox',
                labelKey: 'beneficiary_pobox_key',
                placeHolder: 'enter_beneficiary_pobox_key'
            }
        };
        this.deliveryOfOrginalUndertakingOptions = {
            group: this.formGroup,
            fcName: 'deliveryOfOrginalUndertakingOptions'
        };
        this.additionalInfromation = {
            labelKey: 'additional_information_key',
            placeHolder: 'enter_additional_information_key',
            group: this.formGroup,
            fcName: 'additionalInformation'
        };
        this.deliveryToCollectionBy = {
            group: this.formGroup,
            fcName: 'deliveryToCollectionBy'
        };
        this.deliveryToCollectionByName = {
            labelKey: 'delivery_to_collection_by_name_key',
            placeHolder: 'enter_delivery_to_collection_by_name_key',
            group: this.formGroup,
            fcName: 'deliveryToCollectionByName'
        };
        this.deliveryToCollectionByAddress = {
            labelKey: 'delivery_to_collection_by_address_key',
            placeHolder: 'enter_delivery_to_collection_by_address_key',
            group: this.formGroup,
            fcName: 'deliveryToCollectionByAddress'
        };
        this.confirmationInstruction = {
            group: this.formGroup,
            fcName: 'confirmationInstruction'
        };
        this.expiryConditionEvent = {
            labelKey: 'expiry_condition_event_key',
            placeHolder: 'enter_expiry_condition_event_key',
            group: this.formGroup,
            fcName: 'expiryConditionEvent'
        };
        this.fileIdentificationOptions = {
            group: this.formGroup,
            fcName: 'fileIdentification',
            lovAdminFilterParamName: 'AllowedFileIdentification'
        };
        this.branchOptions = {
            group: this.formGroup,
            fcName: 'branchAcc',
            disablePreview: true
        };
        this.currencyOptions = {
            group: this.formGroup,
            fcName: 'currencyAcc',
            disablePreview: true
        };
        this.glAccountOptions = {
            group: this.formGroup,
            fcName: 'accountGl',
            disablePreview: true
        };
        this.cifNoOptions = {
            group: this.formGroup,
            fcName: 'cifNo',
            disablePreview: true
        };
        this.serialNumberOptions = {
            group: this.formGroup,
            fcName: 'serialNumber',
            disablePreview: true
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.defaultVO = this.navService.getAllParams() ? this.navService.getAllParams() : {};
        this.beneficiariesRequestParam = {
            trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].LOCAL_BENEFICIARY,
            filterByOper: true
        };
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
        this.commonProv.setValInsideNestedObj(this.documentInNameReadOnlyOptions.fcName, this.cifInfo.customerInfoCO ? (this.translateSrv.currentLang.toLocaleLowerCase() === 'ar' ? this.cifInfo.customerInfoCO.longNameArabic : this.cifInfo.customerInfoCO.longName) : '', this.defaultVO);
        if (this.defaultVO.disableCustomComponents) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.facilityDetailsOptions.fcName], 1);
        }
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.fetchParameter();
        // always non-mandatory
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.effictiveDateOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.expiryDateOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.claimEndDateOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.periodDays.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesBorneByOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryCountriesOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryAddressOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purpose2Options.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purpose3Options.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.commentOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [this.branchOptions.fcName, this.currencyOptions.fcName, this.glAccountOptions.fcName, this.cifNoOptions.fcName, this.serialNumberOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.branchOptions.fcName, this.currencyOptions.fcName, this.glAccountOptions.fcName, this.cifNoOptions.fcName, this.serialNumberOptions.fcName], 0);
        // mandatory based on conditions of charges brone changed
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.applicableRulesOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.undertakingTermsAndConditionsOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.additionalInfromation.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryOfOrginalUndertakingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByName.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByAddress.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.typeOfUndertakingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.automaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryBankerSwiftCodeOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.countriesOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.regionOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.cityOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.streetOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.buildingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.benefAddressOptions.poBoxInputOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.sameBankToggleOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.fileIdentificationOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryOfOrginalUndertakingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalInfromation.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryToCollectionBy.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryToCollectionByName.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.deliveryToCollectionByAddress.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.confirmationInstruction.fcName], 0);
        // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.formOfUndertakingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.expiryTypeOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifDdlbOptions.subCategoryFcName, this.deliveryOfOrginalUndertakingOptions.fcName, this.deliveryToCollectionBy.fcName, this.settlementAccountListOptions.fcName, this.facilityDetailsOptions.fcName], 0);
    }
    onclaimEndDateChange(event) {
        if (event && event.newValue !== undefined && new Date(event.newValue).getTime() !== new Date(event.oldValue).getTime()) {
            this.changePeriodDays();
        }
    }
    onEffectiveDateChange(event) {
        if (event && event.newValue !== undefined && new Date(event.newValue).getTime() !== new Date(event.oldValue).getTime()) {
            this.effectiveDateOldVal = event.oldValue ? event.oldValue : event.newValue;
            this.changePeriodDays();
            //this.enableDateChange = false;
            let oneYearFromNow = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.newValue, 'DD-MM-YYYY');
            oneYearFromNow.add(1, 'years').calendar();
            this.formGroup.controls[this.oneYAutomaticExtensionPeriodOptions.fcName].setValue(oneYearFromNow);
        }
    }
    onExpiryDateChange(event) {
        if (event && event.newValue !== undefined) {
            if (this.daysAutomaticextPeriodadminCount) {
                var daysAutomaticExtDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.newValue, 'DD-MM-YYYY').add(this.daysAutomaticextPeriodadminCount, 'days');
                this.formGroup.controls[this.daysAutomaticExtensionPeriodOptions.fcName].setValue(daysAutomaticExtDate);
            }
            if (this.otherAutomaticExtentionPeriodAdminCount) {
                var otherAutomaticExtDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(event.newValue, 'DD-MM-YYYY').add(this.otherAutomaticExtentionPeriodAdminCount, 'days');
                this.formGroup.controls[this.otherAutomaticExtensionPeriodOptions.fcName].setValue(otherAutomaticExtDate);
            }
        }
    }
    onPeriodDaysChange(event) {
        const days = (event.oldValue || 0) - event.newValue;
        const claimDate = new Date(this.formGroup.controls[this.claimEndDateOptions.fcName].value);
        const newDate = new Date(claimDate.setDate(claimDate.getDate() - days));
        if (event.oldValue && days !== 0 && new Date(this.effectiveDateOldVal).getTime() === new Date(this.formGroup.controls[this.effictiveDateOptions.fcName].value).getTime()) {
            this.formGroup.controls[this.claimEndDateOptions.fcName].setValue(newDate);
        }
    }
    onchargesBorneByChange(event) {
        if (event != null && event !== undefined && event.description) {
            switch (event.itemValue) {
                case 'A':
                    //this.isApplicantChargesAccount = true;
                    this.isBeneficiaryChargesAccount = false;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 0);
                    //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 1);
                    break;
                case 'H': //both
                    this.accountNameOptions.labelKey = 'beneficiary_charges_account_key';
                    //this.isApplicantChargesAccount = true;
                    this.isBeneficiaryChargesAccount = true;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 1);
                    //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 1);
                    break;
                case 'B': //other party
                    this.accountNameOptions.labelKey = 'other_party_charges_account_key';
                    //this.isApplicantChargesAccount = false;
                    this.isBeneficiaryChargesAccount = true;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName], 1);
                    //this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], 0);
                    break;
                default:
                    this.accountNameOptions.labelKey = 'other_party_charges_account_key';
                    this.isApplicantChargesAccount = false;
                    this.isBeneficiaryChargesAccount = false;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNameOptions.fcName /*, this.chargesAccountListOptions.fcName*/], 0);
                    break;
            }
        }
    }
    onSettlementMethodChange(event) {
        if (!(event === null || event === void 0 ? void 0 : event.selectedObj)) {
            return;
        }
        const showFacility = event.itemValue === 'I';
        // Reset the relevant form control
        const controlToReset = showFacility ? this.settlementAccountListOptions.fcName : this.facilityDetailsOptions.fcName;
        const controlCustomization = this.commonProv.getElementValidations(controlToReset);
        if (!controlCustomization.DEFAULT_VALUE) {
            const controlRef = showFacility ? this.fromAccountRef : this.facilityRef;
            controlRef.reset();
        }
        // Toggle visibility for both controls
        this.isApplicantFundingMethod = !showFacility;
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.chargesAccountListOptions.fcName], showFacility ? 0 : 1);
        // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_VISIBLE, [this.settlementAccountListOptions.fcName], showFacility ? 0 : 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.facilityDetailsOptions.fcName], showFacility ? 1 : 0);
    }
    dateDiff(claimDate, effectiveDate) {
        claimDate = new Date(claimDate);
        effectiveDate = new Date(effectiveDate);
        const diffTime = Math.abs(claimDate - effectiveDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].BENEFICIARY_BANK_CIF, this.PURPOSE_OF_MESSAGE, this.OTHER_AUTOMATIC_EXTENSTION_PERIOD, this.DAYS_AUTOMATIC_EXTENSTION_PERIOD).then((result) => {
                if (result != -1) {
                    if (result.BeneficiaryBankCIF) {
                        this.commonProv.setValInsideNestedObj(this.beneficiaryBankCifOptions.fcName, result.BeneficiaryBankCIF, this.stepperOptions.requestObject);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.beneficiaryBankCifOptions.fcName], 1);
                    }
                    if (result.PurposeOfMessage) {
                        if (result.PurposeOfMessage === 'ACNF' || result.PurposeOfMessage === 'ADVI' || result.PurposeOfMessage === 'ISSU') {
                            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryOfOrginalUndertakingOptions.fcName], 1);
                            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionBy.fcName], 1);
                        }
                        else {
                            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryOfOrginalUndertakingOptions.fcName], 0);
                            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionBy.fcName], 0);
                        }
                    }
                    if (result.DaysAutomaticExtensionPeriod) {
                        this.daysAutomaticextPeriodadminCount = result.DaysAutomaticExtensionPeriod;
                    }
                    if (result.OtherAutomaticExtensionPeriod) {
                        this.otherAutomaticExtentionPeriodAdminCount = result.OtherAutomaticExtensionPeriod;
                    }
                }
            }).catch((error) => {
            });
            const paramData = {
                lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].APPLICABLE_RULES_LOV_TYPE_ID
            };
            const result = yield this.omniPull.returnLovTypesValues(paramData).catch(error => {
                this.logger.error('Error: While fetching LOV types in ApplicableValues :', error);
            });
            if (result && result.length > 0) {
                const APPLICABLE_DEFAULT_VALUE_ISPR = 'I'; // 'ISPR';
                const defaultApplicableValue = result.find((e) => e.itemValue === APPLICABLE_DEFAULT_VALUE_ISPR);
                if (defaultApplicableValue) {
                    this.commonProv.setValInsideNestedObj(this.applicableRulesOptions.fcName, defaultApplicableValue.itemValue, this.defaultVO);
                }
            }
            const paramDataLovExpiryType = {
                lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].EXPIRY_TYPE_LOV_TYPE_ID
            };
            const lovExpiryTypeDefaultValue = yield this.omniPull.returnLovTypesValues(paramDataLovExpiryType).catch(error => {
                this.logger.error('Error: While fetching LOV types in expiryType :', error);
            });
            if (lovExpiryTypeDefaultValue && lovExpiryTypeDefaultValue.length > 0) {
                const EXPIRY_TYPE_DEFAULT_VALUE_ISPR = 'FIXD'; // 'ISPR';
                const defaultExpiryTypeValue = lovExpiryTypeDefaultValue.find((e) => e.itemValue === EXPIRY_TYPE_DEFAULT_VALUE_ISPR);
                if (defaultExpiryTypeValue) {
                    this.commonProv.setValInsideNestedObj(this.expiryTypeOptions.fcName, defaultExpiryTypeValue.itemValue, this.defaultVO);
                }
            }
        });
    }
    changePeriodDays() {
        const claimDate = this.formGroup.controls[this.claimEndDateOptions.fcName].value;
        const effectDate = this.formGroup.controls[this.effictiveDateOptions.fcName].value;
        if (claimDate !== undefined && effectDate !== undefined) {
            const diff = this.dateDiff(claimDate, effectDate);
            if (diff != this.formGroup.controls[this.periodDays.fcName].value) {
                this.formGroup.controls[this.periodDays.fcName].setValue(diff);
            }
        }
    }
    onSameBankToggleChange(event) {
        if (event.newValue === true) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifDdlbOptions.categoryFcName], 0);
        }
        else {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.beneficiaryBankCifDdlbOptions.categoryFcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.beneficiaryBankCifDdlbOptions.categoryFcName], 1);
        }
    }
    onexpirtTypeChange(event) {
        if (event != null && event !== undefined && event.description) {
            if (event.itemValue == 'COND' || event.itemValue == 'FIXD') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.automaticExtensionPeriodOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.automaticExtensionPeriodOptions.fcName], 0);
                if (event.itemValue == 'COND') {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.expiryConditionEvent.fcName], 1);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.expiryConditionEvent.fcName], 0);
                }
                else {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.expiryConditionEvent.fcName], 0);
                }
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.automaticExtensionPeriodOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
            }
        }
        if (this.formGroup.controls[this.automaticExtensionPeriodOptions.fcName].value) {
            this.formGroup.controls[this.automaticExtensionPeriodOptions.fcName].setValue('');
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
        }
    }
    ondeliveryOfOrginalUndertakingChange(event) {
        if (event != null && event !== undefined && event.description) {
            if (event.itemValue === 'COUR' || event.itemValue === 'OTHR') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.additionalInfromation.fcName], 1);
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.additionalInfromation.fcName], 0);
            }
        }
    }
    deliveryToCollectionByChange(event) {
        if (event != null && event !== undefined && event.description) {
            if (event.itemValue === 'OTHR') {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByName.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByAddress.fcName], 1);
            }
            else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByName.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.deliveryToCollectionByAddress.fcName], 0);
            }
        }
    }
    onautomaticExtentionPeriodChange(event) {
        if (event != null && event !== undefined && event.description) {
            if (this.formGroup.controls[this.expiryTypeOptions.fcName].value === "COND" || this.formGroup.controls[this.expiryTypeOptions.fcName].value === "FIXD") {
                switch (event.itemValue) {
                    case 'DAYS':
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 1);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.daysAutomaticExtensionPeriodOptions.fcName], 1);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
                        break;
                    case 'ONEY':
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 1);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.oneYAutomaticExtensionPeriodOptions.fcName], 1);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 0);
                        break;
                    case 'OTHR':
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.otherAutomaticExtensionPeriodOptions.fcName], 1);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_READONLY, [this.otherAutomaticExtensionPeriodOptions.fcName], 1);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.daysAutomaticExtensionPeriodOptions.fcName], 0);
                        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.oneYAutomaticExtensionPeriodOptions.fcName], 0);
                        break;
                    default:
                        break;
                }
            }
        }
    }
};
LetterOfGuaranteePage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_16__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
LetterOfGuaranteePage.propDecorators = {
    fromAccountRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fromAccountRef',] }],
    facilityRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['facilityRef',] }]
};
LetterOfGuaranteePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-letter-of-guarantee',
        template: _raw_loader_letter_of_guarantee_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_letter_of_guarantee_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_14__["PsCommonService"],
        _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_16__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_13__["PsNavigatorService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], LetterOfGuaranteePage);



/***/ })

}]);
//# sourceMappingURL=90-es2015.js.map