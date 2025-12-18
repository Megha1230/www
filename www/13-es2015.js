(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "2lx5":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div>\n    <ps-action-hyperlink [id]=\"this.options.type == 'INTERNAL'? 'addInternalBenef': 'addBankCardBenef'\"\n      [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\" *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n\n  <div *ngIf=\"options?.itemList?.length > 0\" class=\"benef-list\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'internal-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "9bx7":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnRlcm5hbC1iZW5lZmljaWFyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Do7b":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnRlcm5hdGlvbmFsLWJlbmVmaWNpYXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "YaLh":
/*!***************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PsCashTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsCashTransferComponent", function() { return PsCashTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_cash_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-cash-transfer.component.html */ "Yn0C");
/* harmony import */ var _ps_cash_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-cash-transfer.component.scss */ "pZ9k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");







/**
 * @author G.Radwan
 * @since 04/02/2020
 *
 * <p> PsCashTransferComponent is business component contains mapping for for container-lookup component to load local beneficiaries</p>
 */
let PsCashTransferComponent = class PsCashTransferComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"] {
    constructor() {
        super();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.showSingleAccount = false;
        this.addBeneficiaryOptions = {
            route: 'cash-transfer',
            labelKey: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
            iconOptions: {
                iconName: 'add-benef',
                labelOptions: {
                    labelKey: 'add_cash_transfer_key'
                }
            },
            pageOptions: {
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID,
                title: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
                iconName: 'beneficiaries',
            }
        };
        this.bRefresh = false;
    }
    ngOnInit() {
        super.init();
        this.populateCashTransferMap();
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
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        lookupDetails.group = this.options.group;
        lookupDetails.actionDetailsOptions = [
            {
                id: 'delete',
                buttonIcon: 'delete',
                actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
                cssClass: 'fab-edit-button',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                label: 'delete_key',
                iconName: 'trash',
                actionType: 'delete',
                alertType: 'prompt',
                alertStyle: 'info',
                reloadList: true
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
                    route: 'cash-transfer',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                }
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
                    route: 'payment',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_TRANSFER_OPER_ID,
                        iconName: 'create',
                    },
                    preCallFunction: {
                        func() {
                            return new Promise((resolve, reject) => {
                                resolve(this.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[2].actionHyperlink));
                            });
                        },
                        executionClass: this,
                        params: []
                    },
                }
            }
        ];
        lookupDetails.statementOptions = {};
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
        }
        this.onClickCard.emit(this.options);
    }
    /**
     * populating the map for internal beneficiaries
     */
    populateCashTransferMap() {
        let idTypeMap = {};
        let idNumberMap = {};
        let mobileNumberMap = {};
        let purposeMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        // load value on card expend
        idTypeMap = {
            key: 'idTypeDescriptionConcat',
            value: '------',
            isEdit: false
        };
        idNumberMap = {
            key: 'idNumber',
            value: '------',
            isEdit: false
        };
        mobileNumberMap = {
            key: 'cashBenefPhoneKey',
            value: '------',
            isEdit: false
        };
        purposeMap = {
            key: 'cashPurposeKey',
            value: '------',
            isEdit: false
        };
        headerTitleMap = {
            key: 'cashTitleKey',
            value: 'benefName',
            isEdit: false
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'cashBenefNameKey',
            isEdit: true
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('id_type_key', idTypeMap);
        this.labelValuesMap.set('id_number_key', idNumberMap);
        this.labelValuesMap.set('mobile_number_key', mobileNumberMap);
        this.labelValuesMap.set('purpose_key', purposeMap);
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
        this.requestMap.set('nickNameNumber', 'nickNameNumber');
        this.requestMap.set('oldNickName', 'benefName');
        this.editRequestMap.set('newNickName', 'benefName');
        this.editRequestMap.set('type', 'A');
    }
    prepareTransaction(actionCard) {
        actionCard.navigationOptions.queryParams.ScreenVO = {
            toAccountType: 'cashTransfer',
            showBeneficiaryDetails: true,
            toBeneficiary: actionCard.navigationOptions.queryParams.idNumber,
            toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.idNumber,
            purposeTxtDesc: actionCard.navigationOptions.queryParams.purpose,
        };
    }
};
PsCashTransferComponent.ctorParameters = () => [];
PsCashTransferComponent.propDecorators = {
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsCashTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-cash-transfer',
        template: _raw_loader_ps_cash_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_cash_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsCashTransferComponent);



/***/ }),

/***/ "Yn0C":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div>\n    <ps-action-hyperlink id=\"addCashBenef\" [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\"\n      *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n  <div *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'local-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

/***/ }),

/***/ "ZI0R":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: PsInternationalBeneficiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInternationalBeneficiaryComponent", function() { return PsInternationalBeneficiaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_international_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-international-beneficiary.component.html */ "t1wS");
/* harmony import */ var _ps_international_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-international-beneficiary.component.scss */ "Do7b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");







/**
 * @author Aftab.Ali
 * @since 04/02/2020
 *
 * <p> PsInternationalBeneficiaryComponent is business component contains mapping for for container-lookup component to load international beneficiaries</p>
 */
let PsInternationalBeneficiaryComponent = class PsInternationalBeneficiaryComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"] {
    constructor() {
        super();
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
        // tslint:disable-next-line: no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.showSingleAccount = false;
        this.addBeneficiaryOptions = {
            route: 'international-beneficiary',
            labelKey: 'international_beneficiary_key',
            iconOptions: {
                iconName: 'add-benef',
                labelOptions: {
                    labelKey: 'add_international_benef_key'
                }
            },
            pageOptions: {
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
                title: 'international_beneficiary_key',
                iconName: 'beneficiaries',
            }
        };
        this.bRefresh = false;
    }
    ngOnInit() {
        super.init();
        this.populateInternationalBeneficiariesMap();
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        if (this.options && this.options.listOfOptions) {
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
        // this.containerLookUpOptions.balanceMapping = this.balanceMapping();
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        lookupDetails.group = this.options.group;
        lookupDetails.actionDetailsOptions = [
            {
                id: 'delete',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                buttonIcon: 'delete',
                actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
                cssClass: 'delete-benef international-trasnfer-actions fab-edit-button',
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
                    route: 'international-beneficiary',
                    navigationOptions: {
                        queryParams: { readOnlypage: true },
                    },
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
                        iconName: 'document',
                        title: 'details_key'
                    }
                },
                cssClass: 'details-benef international-trasnfer-actions',
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
                    route: 'international-beneficiary',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                },
                cssClass: 'edit-benef international-trasnfer-actions',
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
                    route: 'payment',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER,
                        iconName: 'create',
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
                cssClass: 'pay-benef international-trasnfer-actions',
            }
        ];
        lookupDetails.statementOptions = {};
        //  id: #1237692 -  Details :Updated by neethu  - Date:02/08/2021 - Desc:Added reload function inorder to refresh the beneficiarylist .  
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
    populateInternationalBeneficiariesMap() {
        let beneficiaryAccountNumberMap = {};
        let beneficiaryBankNameMap = {};
        let beneficiaryNameMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        beneficiaryAccountNumberMap = {
            key: 'swiftAccountNumberKey',
            value: '--- --- ---',
            isEdit: false
        };
        beneficiaryNameMap = {
            key: 'swiftBenefNameKey',
            value: '------',
            isEdit: false
        };
        beneficiaryBankNameMap = {
            key: 'swiftBenefBankNameKey',
            value: '------',
            isEdit: false
        };
        headerTitleMap = {
            key: 'swiftTitleKey',
            value: 'accountNumber',
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
        this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap);
        // will be used as header to template card in look up details component
        this.headerMap.set('title', headerTitleMap);
        this.headerMap.set('subTitle', headerSubtitleMap);
        this.requestMap.set('nickNameNumber', 'nickNameNumber');
        this.requestMap.set('oldNickName', 'benefName');
        this.editRequestMap.set('newNickName', 'benefName');
        this.editRequestMap.set('type', 'A');
    }
    prepareTransaction(actionCard) {
        actionCard.navigationOptions.queryParams.ScreenVO = {
            toAccountType: 'internationalAccountTransfer',
            toBeneficiary: actionCard.navigationOptions.queryParams.accountNumber,
            toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.accountNumber,
            swiftCode: actionCard.navigationOptions.queryParams.swiftCode,
            currency: actionCard.navigationOptions.queryParams.currency,
        };
    }
};
PsInternationalBeneficiaryComponent.ctorParameters = () => [];
PsInternationalBeneficiaryComponent.propDecorators = {
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsInternationalBeneficiaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-international-beneficiary',
        template: _raw_loader_ps_international_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_international_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsInternationalBeneficiaryComponent);



/***/ }),

/***/ "Zrkw":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PsInternalBeneficiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInternalBeneficiaryComponent", function() { return PsInternalBeneficiaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_internal_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-internal-beneficiary.component.html */ "2lx5");
/* harmony import */ var _ps_internal_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-internal-beneficiary.component.scss */ "9bx7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */ "EZLY");








/**
 * @author Aftab.Ali
 * @since 04/02/2020
 *
 * <p> PsInternalBeneficiaryComponent is business component contains mapping for for container-lookup component to load internal beneficiaries</p>
 */
let PsInternalBeneficiaryComponent = class PsInternalBeneficiaryComponent extends src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateListPage"] {
    constructor(navService) {
        super();
        this.navService = navService;
        this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
        // tslint:disable-next-line: no-output-on-prefix
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.labelValuesMap = new Map();
        this.headerMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.showSingleAccount = false;
        this.addBeneficiaryOptions = {};
        this.bRefresh = false;
    }
    ngOnInit() {
        super.init();
        if (this.options.hyperLink) {
            this.addBeneficiaryOptions = this.options.hyperLink;
        }
        this.populateInternalBeneficiariesMap();
        if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
            this.options.showOnlyList = false;
        }
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
        const reportRefrshFlag = this.commonProv.reportRefrshFlag.subscribe((reloadList) => {
            if (reloadList) {
                reportRefrshFlag === null || reportRefrshFlag === void 0 ? void 0 : reportRefrshFlag.unsubscribe();
                this.reloadFct.emit();
            }
        });
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
        lookupDetails.isEditable = this.options.isEditable;
        lookupDetails.itemList = this.options.itemList;
        lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        lookupDetails.requestMap = this.requestMap;
        lookupDetails.editRequestMap = this.editRequestMap;
        lookupDetails.group = this.options.group;
        lookupDetails.actionDetailsOptions = [
            {
                id: 'delete',
                labelOptions: {
                    labelKey: 'delete_key'
                },
                buttonIcon: 'delete',
                actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
                cssClass: 'delete-benef internal-trasnfer-actions fab-edit-button',
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
                    route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'internal-beneficiary' : 'internal-card-beneficiary',
                    navigationOptions: {
                        queryParams: { readOnlypage: true },
                    },
                    pageOptions: {
                        operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ?
                            src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                        iconName: 'document',
                        title: 'details_key'
                    }
                },
                cssClass: 'details-benef internal-trasnfer-actions'
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
                    route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'internal-beneficiary' : 'internal-card-beneficiary',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ?
                            src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                        iconName: 'edit1',
                        title: 'edit_key'
                    }
                },
                cssClass: 'edit-benef internal-trasnfer-actions'
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
                    route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'payment' : 'bank-credit-card-settlement',
                    navigationOptions: {
                        queryParams: { readOnlypage: false },
                    },
                    pageOptions: {
                        operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ?
                            src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BANK_CREDIT_CARD_SETTLEMENT,
                        iconName: 'create',
                        title: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'payment_details_key' : 'bank_credit_card_settlement_key'
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
                    psClass: 'pay-benef'
                },
                cssClass: 'pay-benef internal-trasnfer-actions'
            }
        ];
        lookupDetails.statementOptions = {};
        //  id: #1237692 -  Details :Updated by neethu  - Date:02/08/2021 - Desc:Added reload function inorder to refresh the beneficiarylist .  
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
    populateInternalBeneficiariesMap() {
        let beneficiaryAccountNumberMap = {};
        let beneficiaryCardNumberMap = {};
        let beneficiaryNameMap = {};
        let beneficiaryReasonMap = {};
        let beneficiaryPhoneNumberMap = {};
        let headerTitleMap = {};
        let headerSubtitleMap = {};
        beneficiaryAccountNumberMap = {
            key: 'bankAccountNumberKey',
            value: '--- --- ---',
            isEdit: false,
            showMappingOnNoValue: true
        };
        beneficiaryCardNumberMap = {
            key: 'bankCardNumberKey',
            value: '--- --- ---',
            isEdit: false,
            showMappingOnNoValue: true
        };
        beneficiaryNameMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankBenefNameKey' : 'bankCardBenefNameKey',
            value: '------',
            isEdit: false
        };
        beneficiaryReasonMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankPurposeKey' : 'bankCardPurposeKey',
            value: '------',
            isEdit: false
        };
        beneficiaryPhoneNumberMap = {
            key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankBenefPhoneKey' : 'bankCardBenefPhoneKey',
            value: '------',
            isEdit: false
        };
        headerTitleMap = {
            key: 'title',
            value: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankTitleKey' : 'bankCardtitleKey',
            isEdit: false
        };
        headerSubtitleMap = {
            key: 'subTitle',
            value: 'nickName',
            isEdit: true
        };
        // key here will be used as label in look up details component
        this.labelValuesMap.set('account_number_key', beneficiaryAccountNumberMap);
        this.labelValuesMap.set('card_number_key', beneficiaryCardNumberMap);
        this.labelValuesMap.set('benef_name_key', beneficiaryNameMap);
        this.labelValuesMap.set('phone_number_key', beneficiaryPhoneNumberMap);
        this.labelValuesMap.set('purpose_key', beneficiaryReasonMap);
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
        if (this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE) {
            actionCard.navigationOptions.queryParams.ScreenVO = {
                toAccountType: 'companyAccountTransfer',
                toAccount: actionCard.navigationOptions.queryParams.accountNumber,
                toAccount_lookupKey: actionCard.navigationOptions.queryParams.accountNumber,
            };
        }
        else {
            actionCard.navigationOptions.queryParams.ScreenVO = {
                toAccountType: 'bankCardSettlement',
                toBeneficiary: actionCard.navigationOptions.queryParams.cardNumber,
                toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.cardNumber,
            };
        }
    }
};
PsInternalBeneficiaryComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_6__["PsNavigatorService"] }
];
PsInternalBeneficiaryComponent.propDecorators = {
    reloadFct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsInternalBeneficiaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-internal-beneficiary',
        template: _raw_loader_ps_internal_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_internal_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_6__["PsNavigatorService"]])
], PsInternalBeneficiaryComponent);



/***/ }),

/***/ "pZ9k":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jYXNoLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "t1wS":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-list>\n  <div>\n    <ps-action-hyperlink id=\"addInternationalBenef\" [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\" *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n\n  <div *ngIf=\"options?.itemList?.length > 0\" class=\"benef-list\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'international-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>");

/***/ })

}]);
//# sourceMappingURL=13-es2015.js.map