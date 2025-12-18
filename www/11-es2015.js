(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "8SAW":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div>\n    <ps-action-hyperlink [id]=\"this.options.type == 'LOCAL'? 'addLocalBenef': 'addLocalCardBenef'\"\n      [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\" *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n  <div *ngIf=\"options?.itemList?.length > 0\" class=\"benef-list\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'local-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "jXvJ":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PsLocalBeneficiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsLocalBeneficiaryComponent", function() { return PsLocalBeneficiaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_local_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-local-beneficiary.component.html */ "8SAW");
/* harmony import */ var _ps_local_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-local-beneficiary.component.scss */ "qTPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");







/**
 * @author Aftab.Ali
 * @since 04/02/2020
 *
 * <p> PsLocalBeneficiaryComponent is business component contains mapping for for container-lookup component to load local beneficiaries</p>
 */
let PsLocalBeneficiaryComponent = class PsLocalBeneficiaryComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"] {
    constructor() {
        super();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
        // tslint:disable-next-line: no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.headerMap = new Map();
        this.showSingleAccount = false;
        this.addBeneficiaryOptions = {};
        this.bRefresh = false;
    }
    ngOnInit() {
        super.init();
        if (this.options.hyperLink) {
            this.addBeneficiaryOptions = this.options.hyperLink;
        }
        this.populateLocalBeneficiariesMap();
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        // this.containerLookUpOptions.balanceMapping = this.balanceMapping();
        if (this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
    }
    getContainerLookUpOptions() {
        return this.prepareLookUp();
    }
    prepareLookUp() {
        let lookupDetails = {};
        lookupDetails.labelKey = this.options.labelKey;
        lookupDetails.fcName = this.options.fcName;
        lookupDetails.currencyFlag = 'currencyDesc';
        lookupDetails.labelsValueMap = this.labelValuesMap;
        lookupDetails.headerMap = this.headerMap;
        lookupDetails.formGroup = this.options.group;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.showInitialCardValues = 2;
        lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        lookupDetails.group = this.options.group;
        // The detailServiceUrl will load the detail of any service in which
        // paramsKeyLabels is the request parameter
        // responseKeyLabel is the property to be displayed on itemCard key from the response.
        lookupDetails.detailServiceUrl = [
            { url: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.returnCategorySubcategory, paramsKeyLabels: [{ key: 'includeIds', value: 'bank' }, { key: 'type', staticValue: 'Bank' }], responseKeyLabel: [{ key: 'categoriesDescription', value: 'bank' }] }
        ];
        lookupDetails.actionDetailsOptions = [
            {
                id: 'delete',
                buttonIcon: 'delete',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
                cssClass: 'delete-benef fab-edit-button',
                label: 'delete_key',
                iconName: 'trash',
                actionType: 'delete',
                alertType: 'prompt',
                alertStyle: 'info',
                reloadList: true
            },
            {
                id: 'details',
                label: 'details_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'document',
                        labelOptions: {
                            labelKey: 'details_key'
                        }
                    },
                    route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'local-beneficiary' : 'local-card-beneficiary',
                    navigationOptions: {
                        queryParams: { readOnlypage: true },
                    },
                    pageOptions: {
                        operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ?
                            src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID,
                        iconName: 'document',
                        title: 'additional_details_key'
                    }
                },
                cssClass: 'details-benef local-trasnfer-actions',
            },
            {
                id: 'edit',
                label: 'edit_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'edit1',
                        labelOptions: {
                            labelKey: 'edit_key'
                        }
                    },
                    route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'local-beneficiary' : 'local-card-beneficiary',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ?
                            src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                },
                cssClass: 'edit-benef local-trasnfer-actions',
            },
            {
                id: 'pay',
                label: 'pay_key',
                actionHyperlink: {
                    group: this.options.group,
                    iconOptions: {
                        iconName: 'create',
                        labelOptions: {
                            labelKey: 'pay_key'
                        }
                    },
                    route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'payment' : 'local_credit_card_settlement',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_CREDIT_CARD_SETTLEMENT,
                        iconName: 'create',
                        title: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'payment_details_key' : 'local_credit_card_settlement_key'
                    },
                    preCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[3].actionHyperlink));
                            });
                        },
                        executionClass: this,
                        params: []
                    },
                },
                cssClass: 'pay-benef local-trasnfer-actions'
            }
        ];
        lookupDetails.statementOptions = {};
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.reloadFunction = {
            func() {
                return new Promise((resolve, reject) => {
                    resolve(this.executionClass.reloadList());
                });
            },
            executionClass: this,
            params: []
        };
        return lookupDetails;
    }
    reloadList() {
        this.reloadFct.emit();
    }
    updateCard(account) {
        if (account && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === account);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
    /**
     * populating the map for internal beneficiaries
     */
    populateLocalBeneficiariesMap() {
        let beneficiaryAccountNumberMap = {};
        let beneficiaryCardNumberMap = {};
        let beneficiaryNameMap = {};
        let beneficiaryBankMap = {};
        let benefBankBranchMap = {};
        let beneficiaryBvnMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        beneficiaryAccountNumberMap = {
            key: 'localAccountNumberKey',
            value: '--- --- ---',
            isEdit: false,
            showMappingOnNoValue: true
        };
        beneficiaryCardNumberMap = {
            key: 'localCardNumberKey',
            value: '--- --- ---',
            isEdit: false,
            showMappingOnNoValue: true
        };
        beneficiaryNameMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'localBenefNameKey' : 'localCardBenefNameKey',
            value: '------',
            isEdit: false
        };
        // load value on card expend
        beneficiaryBankMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'localBenefBankNameKey' : 'localCardBenefBankNameKey',
            value: '--- --- ---',
            isEdit: false,
            isDetailOption: true,
        };
        benefBankBranchMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'benefBranchTxtKey' : 'localCardBenefBranchTxtKey',
            value: '--- --- ---',
            isEdit: false,
            isDetailOption: true,
        };
        beneficiaryBvnMap = {
            key: 'benefBvnKey',
            value: '---',
            isEdit: false,
            isDetailOption: true,
            showMappingOnNoValue: true
        };
        headerTitleMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'localTitleKey' : 'localCardTitleKey',
            value: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE ? 'localTitleKey' : 'localCardTitleKey',
            isEdit: false
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'nickName',
            isEdit: true
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('benef_name_key', beneficiaryNameMap);
        this.labelValuesMap.set('account_number_key', beneficiaryAccountNumberMap);
        this.labelValuesMap.set('card_number_key', beneficiaryCardNumberMap);
        // load on card expend
        this.labelValuesMap.set('bank_key', beneficiaryBankMap);
        this.labelValuesMap.set('branch_key', benefBankBranchMap);
        this.labelValuesMap.set('beneficiary_bvn_key', beneficiaryBvnMap);
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
        this.requestMap.set('nickNameNumber', 'nickNameNumber');
        this.requestMap.set('oldNickName', 'benefName');
        this.editRequestMap.set('newNickName', 'benefName');
        this.editRequestMap.set('type', 'A');
    }
    //edited by Marina TP:#1544088 to open the payment screen with correct data depending on beneficiary type
    prepareTransaction(actionCard) {
        if (this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE) {
            actionCard.navigationOptions.queryParams.ScreenVO = {
                toAccountType: 'bankLocalTransfer',
                toBeneficiary: actionCard.navigationOptions.queryParams.accountNumber,
                toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.accountNumber,
                bank: actionCard.navigationOptions.queryParams.benefBankId,
                currency: actionCard.navigationOptions.queryParams.currency
            };
        }
        else {
            actionCard.navigationOptions.queryParams.ScreenVO = {
                toAccountType: 'localCardSettlement',
                toBeneficiary: actionCard.navigationOptions.queryParams.cardNumber,
                toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.cardNumber,
            };
        }
    }
};
PsLocalBeneficiaryComponent.ctorParameters = () => [];
PsLocalBeneficiaryComponent.propDecorators = {
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsLocalBeneficiaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-local-beneficiary',
        template: _raw_loader_ps_local_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_local_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsLocalBeneficiaryComponent);



/***/ }),

/***/ "qTPY":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb2NhbC1iZW5lZmljaWFyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=11-es2015.js.map