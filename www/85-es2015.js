(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "2A6Q":
/*!***********************************************************************!*\
  !*** ./src/app/pages/debit-card-request/debit-card-request.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWJpdC1jYXJkLXJlcXVlc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "oXwh":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/debit-card-request/debit-card-request.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"panelOptions1Step1\" id=\"debit_card_req_panel\">\n\n            <ps-lookup-own-accounts id=\"'primaryAccount'+ id\" [options]=\"primaryAccountOptions\">\n            </ps-lookup-own-accounts>\n\n\n\n            <ps-input-varchar id=\"'cardHolderName' + id\" [options]=\"cardHolderNameOptions\">\n            </ps-input-varchar>\n\n\n\n            <ps-dropdown-card-types id=\"'cardType' + id\" [options]=\"cardTypeOptions\"\n                (onPsChange)=\"onCardTypeChangeItem($event)\"></ps-dropdown-card-types>\n\n            <ng-container *ngIf=\"enableCardLimit || enablePosLimit\">\n                <ps-input-display-only id=\"'withdrawalLimit' + id\" [options]=\"withdrawalLimitOptions\"\n                    *ngIf=\"enableCardLimit\">\n                </ps-input-display-only>\n                <ps-input-display-only id=\"'pOSLimit' + id\" [options]=\"posLimitOptions\" *ngIf=\"enablePosLimit\">\n                </ps-input-display-only>\n            </ng-container>\n            <br />\n\n            <ps-lookup-own-accounts id=\"'secondaryAccount'+ id\" [options]=\"secondaryAccountOptions\">\n            </ps-lookup-own-accounts>\n\n            <ps-complex-location (parentFun)=\"hideDestinationMap()\" [options]=\"deliveryAddressDetails\">\n            </ps-complex-location>\n\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions2Step1\" id=\"credit_card_req_pane2\">\n            <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n            </ps-complex-select-branch>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions4Step1\" id=\"credit_card_req_panel3\">\n            <ps-input-display-only id=\"accountCifBranch\" [options]=\"cifrequestBranchOptions\">\n            </ps-input-display-only>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions3Step1\" id=\"persoal_collect_panel\">\n            <ps-select-toggle [options]=\"personalCollectToggleOptions\" (onPsChange)=\"onPersonalToggleClicked($event)\">\n            </ps-select-toggle>\n            <ps-input-varchar *ngIf=\"showCollectorPanel\" id=\" collectorName\" [options]=\"collectorNameOptions\">\n            </ps-input-varchar>\n            <ps-complex-cif-id-types *ngIf=\"showCollectorPanel\" [options]=\"defaultCifIdTypesOptions\">\n            </ps-complex-cif-id-types>\n        </ps-container-panel>\n    </ps-form-step>\n\n    <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n        <ps-container-panel [options]=\"atmBranchesPanelOptions\" id=\"reqBranch\">\n            <div class=\"dcMapLocator\">\n                <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\">\n                </ps-map-atm-branches>\n            </div>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptionsStep2\" id=\"destBranch\">\n            <div class=\"dcMapLocator\">\n                <ps-map-atm-branches class=\"component-map-container\" [options]=\"destinationBranchesOptions\">\n                </ps-map-atm-branches>\n            </div>\n        </ps-container-panel>\n    </ps-form-step>\n</ps-template-stepper>");

/***/ }),

/***/ "vjIa":
/*!*********************************************************************!*\
  !*** ./src/app/pages/debit-card-request/debit-card-request.page.ts ***!
  \*********************************************************************/
/*! exports provided: CardRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRequestPage", function() { return CardRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_debit_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./debit-card-request.page.html */ "oXwh");
/* harmony import */ var _debit_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debit-card-request.page.scss */ "2A6Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */ "OVQh");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");















let CardRequestPage = class CardRequestPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__["OmniBasePage"] {
    constructor(loggerP, commonProv, omniPull, omniCommon, eventEmitterService) {
        super();
        this.loggerP = loggerP;
        this.commonProv = commonProv;
        this.omniPull = omniPull;
        this.omniCommon = omniCommon;
        this.eventEmitterService = eventEmitterService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.debitCardRequestVO = {};
        this.enableCardLimit = false;
        this.enablePosLimit = false;
        this.stepperOptions = {
            stepperName: 'deb_card_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['debit_card_req_step1', 'debit_card_req_step2'],
            group: this.formGroup,
            requestObject: this.debitCardRequestVO,
            submitOptions: {
                extraParams: {},
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.debitCardRequest,
                group: this.formGroup,
            },
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
            parameterToCheck: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH,
            requestVO: this.debitCardRequestVO
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'debit_card_request_key',
            iconName: 'new-card-request',
            expanded: true,
        };
        this.lblOptions = {
            group: this.formGroup,
            labelKey: 'branch_key',
        };
        this.lblOptionsCif = {
            group: this.formGroup,
            labelKey: 'embossed_name_key',
        };
        this.cifNameOptions = {
            group: this.formGroup,
        };
        this.cifBranchOtpions = {};
        this.cardTypeOptions = {
            labelKey: 'card_type_key',
            placeHolder: 'card_type_key',
            group: this.formGroup,
            fcName: 'cardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].CARDTYPE_D,
        };
        this.primaryAccountOptions = {
            labelKey: 'primary_account_key',
            placeHolder: 'primary_account_key',
            accountNumber: '',
            currency: '',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].GeneralType,
            fcName: 'primaryAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].GeneralType,
            requestObject: this.debitCardRequestVO,
        };
        this.secondaryAccountOptions = {
            labelKey: 'secondary_account_key',
            placeHolder: 'secondary_account_key',
            accountNumber: '',
            currency: '',
            group: this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].GeneralType,
            fcName: 'supplementaryAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].GeneralType,
            requestObject: this.debitCardRequestVO,
        };
        this.branchOptions = {
            placeHolder: 'request_branch_key',
            labelKey: 'request_branch_key',
            group: this.formGroup,
            fcName: 'branchName',
        };
        this.withdrawalLimitOptions = {
            placeHolder: '',
            labelKey: 'Withdrawal_Limit_key',
            group: this.formGroup,
            fcName: 'withdrawalLimit',
        };
        this.posLimitOptions = {
            placeHolder: '',
            labelKey: 'pos_Limit_key',
            group: this.formGroup,
            fcName: 'posLimit',
        };
        this.cardHolderNameOptions = {
            placeHolder: 'cardholder_name_key',
            labelKey: 'cardholder_name_key',
            group: this.formGroup,
            fcName: 'embossedName',
        };
        this.deliveryAddressDetails = {
            collectionModeOptions: {
                group: this.formGroup,
                fcName: 'deliveryLoc',
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
                requestVO: this.debitCardRequestVO,
            },
            workAddressOptions: {
                placeHolder: 'work_address_key',
                labelKey: 'work_address_key',
                group: this.formGroup,
                fcName: 'workAddress',
                requestVO: this.debitCardRequestVO,
            },
            otherAddressOptions: {
                labelKey: 'address_details_key',
                rows: '3',
                cols: '10',
                fcName: 'otherAddressDetails',
                group: this.formGroup,
            },
            branchCifOptions: {
                placeHolder: 'request_branch_key',
                labelKey: 'request_branch_key',
                group: this.formGroup,
                fcName: 'branchName',
            },
            cifBranchChecking: true
        };
        this.atmBranchesPanelOptions = {
            isExpandable: true,
            labelKey: 'choose_request_branch_key',
            iconName: 'crop',
            expanded: true,
        };
        this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'choose_destination_Branch_key',
            iconName: 'location-pin',
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
        this.requestBranchOptions = {
            labelKey: 'request_branch_key',
            fcName: 'requestBranch',
            placeHolder: '',
            group: this.formGroup,
        };
        this.deliveryBranchOptions = {
            placeHolder: '',
            labelKey: 'delivery_location_key',
            group: this.formGroup,
            fcName: 'deliveryLocationBranch',
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
            requestVO: this.debitCardRequestVO
        };
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup,
        };
        this.personalCollectToggleOptions = {
            labelKey: 'i_will_be_collecting_personally_my_debit_card_key',
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
            requestObject: this.debitCardRequestVO
        };
        this.selectedBranchObj = {};
        this.enableCifBranch = false;
        this.enableCifName = false;
        this.showCollectorPanel = true;
        this.enableDeliveryLoc = false;
        this.cifrequestBranchOptions = {
            labelKey: 'account_branch_key',
            group: this.formGroup,
            fcName: 'branch',
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.cifNameOptions.labelKey = this.omniCommon.common.getLoginResponse().customerInfoCO.longName;
        this.fetchParameter();
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
            const result = yield this.omniPull.getParamValOf(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)
                .catch((error) => {
                this.loggerP.error(error);
            });
            if (result !== -1 && result.RequestBranch === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.enableCifBranch = false;
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: 'credit_card_req_panel3' }]);
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: 'credit_card_req_pane2' }]);
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'reqBranch' }], true);
            }
            else {
                if (result.RequestBranch === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                    this.cifrequestBranchOptions.labelKey = "account_branch_key";
                    this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchCode : '', this.debitCardRequestVO);
                }
                else {
                    this.cifrequestBranchOptions.labelKey = "cif_branch_key";
                    this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.debitCardRequestVO); //Mohanad AZDB-6448 - 15012025
                }
                this.enableCifBranch = true;
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: 'credit_card_req_panel3' }]);
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: 'credit_card_req_pane2' }]);
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'reqBranch' }], true);
            }
            if (result !== -1 && result.CollectionDestinationBranch === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'destBranch' }], true);
            }
            else {
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }, { fcName: 'destBranch' }], true);
            }
            if (result !== -1 && result.RequestBranch !== _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].END_USER_INPUT_ID && result !== -1 && result.CollectionDestinationBranch !== _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[1] }], true);
            }
            else {
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[1] }], true);
            }
            this.commonProv.setValInsideNestedObj(this.requestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.debitCardRequestVO);
        });
    }
    onCardTypeChangeItem(values) {
        if (values && values.selectedObj) {
            switch (values.selectedObj.wdLimitBasedOn) {
                case 'L':
                    this.debitCardRequestVO[this.withdrawalLimitOptions.fcName] =
                        values.selectedObj.wdLimitAmount + ' / ' +
                            this.getPeriodicCity(values.selectedObj.wdLimitCheckPeriod);
                    this.enableCardLimit = true;
                    break;
                case 'O':
                    this.debitCardRequestVO[this.withdrawalLimitOptions.fcName] =
                        'Unlimited';
                    this.enableCardLimit = true;
                    break;
                case 'B':
                    this.debitCardRequestVO[this.withdrawalLimitOptions.fcName] =
                        'Account balance';
                    this.enableCardLimit = true;
                    break;
                default:
                    this.enableCardLimit = false;
            }
            switch (values.selectedObj.posLimitBasedOn) {
                case 'L':
                    // Todo: base currency and periodicty is missing
                    this.debitCardRequestVO[this.posLimitOptions.fcName] =
                        values.selectedObj.posLimitAmount;
                    this.enablePosLimit = true;
                    break;
                case 'O':
                    this.debitCardRequestVO[this.posLimitOptions.fcName] = 'Unlimited';
                    this.enablePosLimit = true;
                    break;
                case 'B':
                    this.debitCardRequestVO[this.posLimitOptions.fcName] =
                        'Account balance';
                    this.enablePosLimit = true;
                    break;
                default:
                    this.enablePosLimit = false;
            }
        }
    }
    onSelectBranch(event) {
        if (event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.debitCardRequestVO);
        }
    }
    getPeriodicCity(val) {
        switch (val) {
            case _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].DAYS:
                return _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].DY;
            case _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].MONTHS:
                return _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].MNTH;
            case _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].WEEK_CODE:
                return _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].WEEK;
            case _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].QUATER_CODE:
                return _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].QUATER;
            case _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].YEAR:
                return _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].YR;
            default:
                return _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].DY;
        }
    }
    hideDestinationMap() {
        let modeOfCollection = this.debitCardRequestVO ? this.debitCardRequestVO[this.deliveryAddressDetails.collectionModeOptions.fcName] : {};
        if ((modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE ||
            (modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE || modeOfCollection === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_14__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE) {
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
CardRequestPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"] }
];
CardRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'debit-card-request',
        template: _raw_loader_debit_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_debit_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"],
        src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"],
        src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]])
], CardRequestPage);



/***/ })

}]);
//# sourceMappingURL=85-es2015.js.map