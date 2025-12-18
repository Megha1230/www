(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "FKG8":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequebook-request/chequebook-request.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"cheq_req_panel1\">\n\n      <ps-input-display-only id=\"name_to_be_printed\" [options]=\"nameOptions\">\n      </ps-input-display-only>\n\n\n      <ps-lookup-own-accounts id=\"cheq_req_transfer_from\" [options]=\"accountListOptions\"\n        (onAccountChange)=\"onAccountChange($event)\"></ps-lookup-own-accounts>\n\n\n      <ps-dropdown-chequebook-types id=\"'cheq_req_transfer_to\" [options]=\"chequebookTypeOptions\"\n        (onPsChange)=\"ontypesChange($event)\">\n      </ps-dropdown-chequebook-types>\n\n\n      <ps-input-display-only *ngIf=\"enableCifBranch\" id=\"account_cif_branch\" [options]=\"branchOptions\">\n\n      </ps-input-display-only>\n\n\n      <ps-lov-destination-branch *ngIf=\"!enableCifBranch\" id=\"cheq_destination_branch\"\n        [options]=\"destinationBranchOptions\" (onPsChange)=\"onBranchChange($event)\">\n      </ps-lov-destination-branch>\n\n\n      <ps-input-display-only id=\"no_of_leaves_cheq\" [options]=\"noOfLeaves\"></ps-input-display-only>\n\n\n      <!-- <ps-lov-preferred-language id=\"lov_preferred_language\" [options]=\"preferredLanguageOptions\" class=\"ps-lov-lang\"\n            (onPsChange)=\"onChange($event)\">\n          </ps-lov-preferred-language>  -->\n      <ps-dropdown-allowed-languages [options]=\"optionsPreferredLanguage\">\n      </ps-dropdown-allowed-languages>\n\n      <!-- AZDB-7876 - AMANAOI250069 - 202129 - The user is able to define No of chequebook as negative value - Dev: Muzammil Arif -->\n      <!-- using $event.preventDefault() to prevent firing the mouse wheel event -->\n      <ps-input-numeric (wheel)=\"$event.preventDefault()\" id=\"number_of_cheqbooks\" [options]=\"noOfchequeBooks\"></ps-input-numeric>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"cheq_req_panel3\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"cheq_req_panel2\">\n\n      <ps-input-varchar id=\"collector_name\" [options]=\"collecterNameOptions\"></ps-input-varchar>\n\n\n      <ps-complex-id-details id=\"complex_id_details\" [options]=\"complexIdDetailsOptions\"\n        (onPsChange)=\"onItemChange($event)\">\n      </ps-complex-id-details>\n\n    </ps-container-panel>\n    <!-- <div>\n          <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountListOptions\"></ps-lookup-own-accounts>\n        </div> -->\n    <!-- <ps-input-amount id=\"input_amount\" [options]=\"inputAmountOptions\">\n        </ps-input-amount>\n        <div>\n          <ps-dropdown-currencies id=\"'currency' + id\" [options]=\"currencyOptions\"></ps-dropdown-currencies>\n        </div>\n        <div>\n          <ps-complex-amount></ps-complex-amount>\n        </div> -->\n    <!-- <div>\n          <ps-input-numeric id=\"'leaveNosFrom' + id\" [options]=\"leaveNosFromOptions\"></ps-input-numeric>\n        </div>\n        <div>\n          <ps-input-numeric id=\"'leaveNosTo' + id\" [options]=\"leaveNosToOptions\"></ps-input-numeric>\n        </div> -->\n    <!-- <div>\n          <ps-input-varchar id=\"'collecterName' + id\" [options]=\"collecterNameOptions\"></ps-input-varchar>\n        </div> -->\n    <!-- <div>\n        <ps-lov-preferred-language id=\"lov_preferred_language\" [options]=\"preferredLanguageOptions\" class=\"ps-lov-lang\"\n          (onPsChange)=\"onChange($event)\">\n        </ps-lov-preferred-language> \n          </div>-->\n    <!-- <ps-dropdown-id-types id=\"id_types\" [options]=\"idTypeOptions\"></ps-dropdown-id-types> -->\n\n\n  </ps-form-step>\n  <ps-form-step step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ng-container *psStep=\"'step2'\">\n      <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n    </ng-container>\n  </ps-form-step>\n  <!-- <ps-form-step *psStep=\"'step3'\" step3  [id]=\"stest\">\n   \n  </ps-form-step> -->\n</ps-template-stepper>");

/***/ }),

/***/ "uvEi":
/*!***********************************************************************!*\
  !*** ./src/app/pages/chequebook-request/chequebook-request.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVxdWVib29rLXJlcXVlc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "y9pH":
/*!*********************************************************************!*\
  !*** ./src/app/pages/chequebook-request/chequebook-request.page.ts ***!
  \*********************************************************************/
/*! exports provided: ChequebookRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequebookRequestPage", function() { return ChequebookRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chequebook_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chequebook-request.page.html */ "FKG8");
/* harmony import */ var _chequebook_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chequebook-request.page.scss */ "uvEi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../omni-base/omni-base.page */ "gKqT");
















let ChequebookRequestPage = class ChequebookRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, eventEmitterService, commonService, navService) {
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.eventEmitterService = eventEmitterService;
        this.commonService = commonService;
        this.navService = navService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.chequebookVO = {};
        this.stepperOptions = {
            stepperName: 'cheq_req_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['cheque_req_step1', 'cheque_req_step2'],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonBusinessSettings"].serviceUrl.chequeBookRequest,
                group: this.formGroup,
            },
            requestObject: this.chequebookVO
        };
        this.inputAmountOptions = {
            labelKey: 'Amount_key',
            placeHolder: 'enter_your_amount_key',
            fcName: 'inputAmount',
            group: this.formGroup,
            type: 'amount',
            decimalPoints: 3
        };
        this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'currency_key',
            group: this.formGroup,
            fcName: 'currency'
        };
        this.noOfLeaves = {
            labelKey: 'number_of_leaves_key',
            placeHolder: 'number_of_leaves_key',
            group: this.formGroup,
            fcName: 'noOfLeaves'
        };
        this.noOfchequeBooks = {
            labelKey: 'number_of_chequebooks_key',
            placeHolder: 'number_of_chequebooks_key',
            group: this.formGroup,
            fcName: 'noOfChequeBooks',
            allowDecimal: false
        };
        this.collecterNameOptions = {
            labelKey: 'collector_name_key',
            placeHolder: 'collector_name_key',
            group: this.formGroup,
            fcName: 'collectorName'
        };
        this.accountListOptions = {
            labelKey: 'account_no_key',
            placeHolder: 'select_account_no_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'savingAccNo',
            accountType: 'G',
            fromTo: 'from',
            requestObject: this.chequebookVO
        };
        this.preferredLanguageOptions = {
            fcName: 'lang',
            group: this.formGroup,
            labelKey: 'chequebook_language_key',
            placeHolder: 'select_chequebook_lang_key'
        };
        this.idTypeOptions = {
            fcName: 'id_types',
            group: this.formGroup
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'chequebook_details_key',
            iconName: 'document',
            expanded: true
        };
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'collector_details_key',
            iconName: 'document',
            expanded: false
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
        };
        this.nameOptions = {
            placeHolder: 'name_to_be_printed_key',
            labelKey: 'name_to_be_printed_key',
            group: this.formGroup,
            fcName: 'nameToBePrinted',
            disablePreview: true
        };
        this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
                fcName: 'idType',
                group: this.formGroup,
            },
            idNumberOptions: {
                labelKey: 'id_number_key',
                placeHolder: 'enter_id_number_key',
                fcName: 'idNumber',
                group: this.formGroup
            },
            dateExpiryOptions: {
                labelKey: 'expiry_date_key',
                placeHolder: 'enter_expiry_date_key',
                fcName: 'expiryDate',
                group: this.formGroup,
            },
            countriesOptions: {
                placeHolder: 'country_of_issuance_key',
                labelKey: 'country_of_issuance_key',
                fcName: 'country',
                group: this.formGroup,
            },
            issueDateOptions: {
                labelKey: 'issue_date_key',
                placeHolder: 'issue_date_key',
                fcName: 'issueDate',
                group: this.formGroup
            }
        };
        this.chequebookTypeOptions = {
            group: this.formGroup,
            fcName: 'chequeBookTypes'
        };
        this.branchOptions = {
            placeHolder: 'get_cif_branch_frm_session_key',
            labelKey: 'branch_key',
            group: this.formGroup,
            fcName: 'branchName',
            disablePreview: true
        };
        this.destinationBranchOptions = {
            group: this.formGroup,
            fcName: 'destinationBranch'
        };
        this.optionsPreferredLanguage = {
            fcName: 'lang',
            group: this.formGroup,
            labelKey: 'chequebook_language_key',
            placeHolder: 'select_chequebook_lang_key'
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup
        };
        this.enableCifBranch = true;
        this.showDestinationBranch = true;
    }
    ngOnInit() {
        super.init();
        this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
        this.mapAtmBranchesOptions = {
            group: this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
                labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].COLLECTIONBRANCH,
            requestVO: this.chequebookVO
        };
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].COLLECTIONBRANCH).then((result) => {
            if (result !== -1 && result.CollectionBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.commonService.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] },
                    { fcName: this.mapAtmBranchesOptions.fcName },
                    { fcName: 'cheq_req_panel3' }], true);
                this.enableCifBranch = false;
                this.branchType = result.CollectionBranch;
            }
            else {
                this.branchType = result.CollectionBranch;
                this.enableCifBranch = true;
                this.commonService.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: this.mapAtmBranchesOptions.fcName },
                    { fcName: 'cheq_req_panel3' }], true);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.destinationBranchOptions.fcName], 0);
                this.commonProv.setValInsideNestedObj(this.branchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.chequebookVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.branchOptions.fcName], 1);
            }
        }).catch((error) => { });
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.mapAtmBranchesOptions.fcName], 0);
        const defaultValidations = new Map();
        defaultValidations.set(this.noOfchequeBooks.fcName, this.commonProv.prepareValidation(false, null, false, 1, null, null, 2));
        this.commonProv.setDefaultValidators(defaultValidations, this.formGroup);
        // send the cif branch in all cases to the service
        this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, { branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : '' }, false, true);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.branchOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.noOfLeaves.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.nameOptions.fcName], 1);
        // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MAXLENGTH, [this.noOfchequeBooks.fcName], 2);
        if (this.cifInfo.customerInfoCO.longName) {
            this.commonProv.setValInsideNestedObj(this.nameOptions.fcName, this.cifInfo.customerInfoCO.longName, this.chequebookVO);
        }
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [this.optionsPreferredLanguage.fcName], 2);
        // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_READONLY, [this.nameOptions.fcName], 1);
        this.baseFormGroup = this.formGroup;
    }
    onSelectBranch($event) {
        if ($event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.chequebookVO);
        }
    }
    onChange(values) {
    }
    onItemChange(values) {
    }
    onBranchChange(values) {
        if (values && values.description && values.description.indexOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DESTINATIONBRANCH_OPTION) > -1) {
            this.showDestinationBranch = true;
            this.commonService.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] },
                { fcName: this.mapAtmBranchesOptions.fcName },
                { fcName: 'cheq_req_panel3' }], true);
            // if (!this.enableCifBranch) {
            //   this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.mapAtmBranchesOptions.fcName], 1);
            // }
        }
        else {
            this.showDestinationBranch = false;
            this.commonService.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: this.mapAtmBranchesOptions.fcName },
                { fcName: 'cheq_req_panel3' }], true);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapBranchInput'], 0);
        }
    }
    onAccountChange(fromAccount) {
        if (this.branchType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
            if (fromAccount && fromAccount.branchDescription) {
                this.commonProv.setValInsideNestedObj(this.branchOptions.fcName, fromAccount.branchDescription ? fromAccount.branchDescription : '', this.chequebookVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.branchOptions.fcName], 1);
            }
        }
    }
    getBranchDesc(branchId) {
        try {
            const paramData = {
                branchesIdList: branchId
            };
            this.omniPull.returnBranchesList(paramData).then((result) => {
                if (result && result.gridModel != null && result.gridModel.length > 0) {
                }
                else {
                    this.loggerP.warn(result, 'empty response');
                }
            }).catch((error) => { });
        }
        catch (error) { }
    }
    ontypesChange(values) {
        if (values && values.selectedObj && values.selectedObj.numberOfCheques) {
            this.commonProv.setValInsideNestedObj(this.noOfLeaves.fcName, values.selectedObj.numberOfCheques, this.chequebookVO);
        }
    }
};
ChequebookRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"] }
];
ChequebookRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chequebook-request',
        template: _raw_loader_chequebook_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chequebook_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"],
        src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]])
], ChequebookRequestPage);



/***/ })

}]);
//# sourceMappingURL=82-es2015.js.map