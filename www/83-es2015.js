(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "+/KC":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credit-card-request/credit-card-request.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"credit_card_req_panel\">\n\n\n\n      <ps-input-varchar id=\"cardHolderName\" [options]=\"cardHolderNameOptions\">\n      </ps-input-varchar>\n\n\n      <ps-dropdown-card-types id=\"cardType\" [options]=\"cardTypeOptions\" (onPsChange)=\"onCardTypeChange($event)\">\n      </ps-dropdown-card-types>\n\n\n      <ps-input-display-only id=\"withdrawal_limit\" [options]=\"withdrawalLimitOptions\">\n      </ps-input-display-only>\n\n\n      <ps-input-display-only id=\"posLimit\" [options]=\"posLimitOptions\">\n      </ps-input-display-only>\n\n\n      <ps-input-display-only id=\"billingCycle\" [options]=\"billingCycleOptions\">\n      </ps-input-display-only>\n\n\n\n      <!-- To Do: add new ddl for minimum payment -->\n\n\n\n      <ps-lookup-own-accounts id=\"settlementAccountid\" [options]=\"settlementAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-complex-location (parentFun)=\"hideMap()\" [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"credit_card_req_pane2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions4Step1\" id=\"credit_card_req_panel3\">\n      <ps-input-display-only id=\"accountCifBranch\" [options]=\"cifrequestBranchOptions\">\n      </ps-input-display-only>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3Step1\" id=\"persoal_collect_panel\">\n      <ps-select-toggle [options]=\"personalCollectToggleOptions\" (onPsChange)=\"onPersonalToggleClicked($event)\">\n      </ps-select-toggle>\n      <ps-input-varchar *ngIf=\"showCollectorPanel\" id=\" collectorName\" [options]=\"collectorNameOptions\">\n      </ps-input-varchar>\n      <ps-complex-cif-id-types *ngIf=\"showCollectorPanel\" [options]=\"defaultCifIdTypesOptions\">\n      </ps-complex-cif-id-types>\n    </ps-container-panel>\n\n  </ps-form-step>\n\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"atmBranchesPanelOptions\" id=\"reqBranch\">\n      <div class=\"dcMapLocator\">\n        <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\">\n        </ps-map-atm-branches>\n      </div>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptionsStep2\" id=\"destBranch\">\n      <div class=\"dcMapLocator\">\n        <ps-map-atm-branches class=\"component-map-container\" [options]=\"destinationBranchesOptions\">\n        </ps-map-atm-branches>\n      </div>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "Ty6Q":
/*!*************************************************************************!*\
  !*** ./src/app/pages/credit-card-request/credit-card-request.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXQtY2FyZC1yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gzy4":
/*!***********************************************************************!*\
  !*** ./src/app/pages/credit-card-request/credit-card-request.page.ts ***!
  \***********************************************************************/
/*! exports provided: CreditCardRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardRequestPage", function() { return CreditCardRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_credit_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./credit-card-request.page.html */ "+/KC");
/* harmony import */ var _credit_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-card-request.page.scss */ "Ty6Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");















let CreditCardRequestPage = class CreditCardRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"] {
    constructor(omniPull, loggerP, commonService, omniCommon, eventEmitterService) {
        super();
        this.omniPull = omniPull;
        this.loggerP = loggerP;
        this.commonService = commonService;
        this.omniCommon = omniCommon;
        this.eventEmitterService = eventEmitterService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.creditCardRequestVO = {};
        this.cifInfo = {};
        this.showCollectorPanel = true;
        this.stepperOptions = {
            stepperName: 'credit_card_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: [
                'credit_card_req_step1',
                'credit_card_req_step2'
            ],
            group: this.formGroup,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.creditCardRequest,
                group: this.formGroup,
            },
            requestObject: this.creditCardRequestVO,
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'card_details_key',
            iconName: 'new-card-request',
            expanded: true,
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_map_branch_key',
            iconName: 'location-pin',
            expanded: true,
        };
        this.panelOptions3Step1 = {
            isExpandable: true,
            labelKey: 'collect_or_reveiver_details_key',
            iconName: 'new-card-request',
            expanded: true,
        };
        this.panelOptions4Step1 = {
            isExpandable: true,
            labelKey: 'request_branch_key',
            iconName: 'location-pin',
            expanded: true
        };
        this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'choose_destination_Branch_key',
            iconName: 'location-pin',
            expanded: true,
        };
        this.atmBranchesPanelOptions = {
            isExpandable: true,
            labelKey: 'choose_request_branch_key',
            iconName: 'location-pin',
            expanded: true,
        };
        this.cardHolderNameOptions = {
            placeHolder: 'card_holder_name_key',
            labelKey: 'card_holder_name_key',
            group: this.formGroup,
            fcName: 'cardHolderName',
        };
        this.cardTypeOptions = {
            labelKey: 'card_type_key',
            placeHolder: 'select_card_type_key',
            group: this.formGroup,
            fcName: 'cardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].CARDTYPE_C,
        };
        this.mapAtmBranchesOptions = {
            group: this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
                labelKey: 'map',
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH,
            requestVO: this.creditCardRequestVO
        };
        this.destinationBranchesOptions = {
            group: this.formGroup,
            fcName: 'destinationBranches',
            labelKey: 'destination_branch_key',
            mapOptions: {
                labelKey: 'map',
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            requestVO: this.creditCardRequestVO
        };
        this.posLimitOptions = {
            placeHolder: '',
            labelKey: 'pos_Limit_key',
            fcName: 'posLimit',
            group: this.formGroup,
        };
        this.withdrawalLimitOptions = {
            placeHolder: '',
            labelKey: 'withdrawal_limit_key',
            fcName: 'withdrawalLimit',
            group: this.formGroup,
        };
        this.billingCycleOptions = {
            labelKey: 'bilind_cycle_key',
            fcName: 'billingCycle',
            group: this.formGroup,
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup,
        };
        this.deliveryAddressDetails = {
            collectionModeOptions: {
                group: this.formGroup,
                fcName: 'deliveryLoc'
            },
            branchLocationOptions: {
                fcName: 'destinationBranchesDropdown',
                group: this.formGroup,
                countryRegionCityOptions: {
                    countriesOptions: {
                        fcName: 'destinationBranchCountry'
                    },
                    regionOptions: {
                        fcName: 'destinationBranchRegion'
                    },
                    cityOptions: {
                        fcName: 'destinationBranchCity'
                    }
                },
                branchesOptions: {
                    fcName: 'destinationBranch'
                }
            },
            homeAddressOptions: {
                placeHolder: 'home_address_key',
                labelKey: 'home_address_key',
                group: this.formGroup,
                fcName: 'homeAddress',
                requestVO: this.creditCardRequestVO,
            },
            workAddressOptions: {
                placeHolder: 'work_address_key',
                labelKey: 'work_address_key',
                group: this.formGroup,
                fcName: 'workAddress',
                requestVO: this.creditCardRequestVO,
            },
            otherAddressOptions: {
                labelKey: 'address_details_key',
                rows: '3',
                cols: '10',
                fcName: 'otherAddressDetails',
                group: this.formGroup,
            },
            branchCifOptions: {
                labelKey: 'account_branch_key',
                group: this.formGroup,
                fcName: 'branchName',
            },
            cifBranchChecking: true
        };
        this.cifrequestBranchOptions = {
            labelKey: 'account_branch_key',
            group: this.formGroup,
            fcName: 'branch',
        };
        this.settlementAccountOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'settlement_account_key',
            accountNumber: '',
            currency: '',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].GeneralType,
            fcName: 'settlementAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].GeneralType,
            requestObject: this.creditCardRequestVO,
        };
        this.personalCollectToggleOptions = {
            labelKey: 'i_will_be_collecting_personally_my_credit_card_key',
            group: this.formGroup,
            fcName: 'personalCollect',
            psClass: 'toggleColor',
        };
        this.collectorNameOptions = {
            placeHolder: 'collector_or_receiver_name_key',
            labelKey: 'collector_or_receiver_name_key',
            group: this.formGroup,
            fcName: 'collectorName',
        };
        this.defaultCifIdTypesOptions = {
            showCifType: false,
            group: this.formGroup,
            cifTypeOptions: {
                group: this.formGroup,
                fcName: 'idType'
            },
            complexIdDetailsOptions: {
                dropdownIdTypesOptions: {
                    group: this.formGroup
                },
                idNumberOptions: {
                    group: this.formGroup
                },
                dateExpiryOptions: {
                    group: this.formGroup
                },
                countriesOptions: {
                    group: this.formGroup
                },
                issueDateOptions: {
                    group: this.formGroup
                }
            },
            complexIdDetailsOptions1: {
                dropdownIdTypesOptions: {
                    group: this.formGroup
                },
                idNumberOptions: {
                    group: this.formGroup
                },
                dateExpiryOptions: {
                    group: this.formGroup
                },
                countriesOptions: {
                    group: this.formGroup
                },
                issueDateOptions: {
                    group: this.formGroup
                }
            },
            requestObject: this.creditCardRequestVO
        };
        this.enableCifBranch = false;
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.fetchParameter();
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
            const result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)
                .catch((error) => {
                this.loggerP.error(error);
            });
            if (result !== -1 && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.enableCifBranch = false;
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: 'credit_card_req_panel3' }]);
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: 'credit_card_req_pane2' }]);
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'reqBranch' }], true);
            }
            else {
                if (result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                    this.cifrequestBranchOptions.labelKey = "account_branch_key";
                    this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchCode : '', this.creditCardRequestVO);
                }
                else {
                    this.cifrequestBranchOptions.labelKey = "cif_branch_key";
                    this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.creditCardRequestVO);
                }
                this.enableCifBranch = true;
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: 'credit_card_req_panel3' }]);
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: 'credit_card_req_pane2' }]);
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'reqBranch' }], true);
            }
            if (result !== -1 && result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'destBranch' }], true);
            }
            else {
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'destBranch' }], true);
            }
            if (result !== -1 && result.RequestBranch !== src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID && result !== -1 && result.CollectionDestinationBranch !== src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }], true);
            }
            else {
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }], true);
            }
        });
    }
    onCardTypeChange(values) {
        if (values.selectedObj) {
            switch (values.selectedObj.wdLimitBasedOn) {
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LIMIT:
                    // Todo: base currency is missing
                    this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, values.selectedObj.wdLimitAmount + this.getPeriodiCity(values.selectedObj.wdLimitCheckPeriod), this.creditCardRequestVO);
                    break;
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OPEN:
                    this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, 'Unlimited', this.creditCardRequestVO);
                    break;
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BALANCE:
                    this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, (values.selectedObj.accountBalance) ? values.selectedObj.accountBalance : '0', this.creditCardRequestVO);
                    break;
            }
            switch (values.selectedObj.posLimitBasedOn) {
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LIMIT:
                    // Todo: base currency and periodicty is missing
                    this.commonProv.setValInsideNestedObj(this.posLimitOptions.fcName, (values.selectedObj.posLimitAmount) ? values.selectedObj.posLimitAmount : '0', this.creditCardRequestVO);
                    break;
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OPEN:
                    this.commonProv.setValInsideNestedObj(this.posLimitOptions.fcName, 'Unlimited', this.creditCardRequestVO);
                    break;
            }
            if (values.selectedObj.billingCycle) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.billingCycleOptions.fcName], 1);
                this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, values.selectedObj.billingCycle, this.creditCardRequestVO);
            }
        }
    }
    onSelectBranch(event) {
        if (event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.creditCardRequestVO);
        }
    }
    getPeriodiCity(val) {
        switch (val) {
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DAYS:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DY;
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MONTHS:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MNTH;
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].WEEK_CODE:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].WEEK;
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QUATER_CODE:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QUATER;
            case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].YEAR:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].YR;
            default:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DY;
        }
    }
    hideMap() {
        let modeOfCollection = this.creditCardRequestVO ? this.creditCardRequestVO[this.deliveryAddressDetails.collectionModeOptions.fcName] : {};
        if ((modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE ||
            (modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE) {
            this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'destBranch' }], true);
        }
        else {
            this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'destBranch' }], true);
            if (this.enableCifBranch) {
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'reqBranch' }], true);
            }
            else {
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'reqBranch' }], true);
            }
        }
    }
    onPersonalToggleClicked(event) {
        this.showCollectorPanel = !event.newValue;
    }
};
CreditCardRequestPage.ctorParameters = () => [
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"] }
];
CreditCardRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'credit-card-request-test',
        template: _raw_loader_credit_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_credit_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"]])
], CreditCardRequestPage);



/***/ })

}]);
//# sourceMappingURL=83-es2015.js.map