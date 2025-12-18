(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "Joa9":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWRlYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qnJ5":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PsComplexDealDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexDealDetailsComponent", function() { return PsComplexDealDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_deal_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-deal-details.component.html */ "t3bA");
/* harmony import */ var _ps_complex_deal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-deal-details.component.scss */ "Joa9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsComplexDealDetailsComponent = class PsComplexDealDetailsComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"] {
    constructor(commonP, loggerC) {
        super(commonP, loggerC);
        this.commonP = commonP;
        this.loggerC = loggerC;
        this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.containerLookUpOptions = {};
        this.dealsLabelValuesMap = new Map();
        this.dealsHeaderMap = new Map();
        this.requestMap = new Map();
        this.editRequestMap = new Map();
        this.showSingleAccount = false;
        this.populateHeaderValueMap();
    }
    ngOnInit() {
        this.containerLookUpOptions.labelKey = this.options.labelKey;
        this.containerLookUpOptions.currencyFlag = 'currencyBriefNameEnglish';
        this.containerLookUpOptions.labelsValueMap = this.dealsLabelValuesMap;
        this.containerLookUpOptions.headerMap = this.dealsHeaderMap;
        this.containerLookUpOptions.formGroup = this.options.group;
        this.containerLookUpOptions.balanceMapping = this.balanceMapping();
        this.containerLookUpOptions.isEditable = this.options.isEditable;
        this.containerLookUpOptions.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
        this.containerLookUpOptions.requestMap = this.requestMap;
        this.containerLookUpOptions.editRequestMap = this.editRequestMap;
        this.containerLookUpOptions.pageData = {
            operID: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].DEAL_REPORT,
            title: 'deal_report_key'
        };
        if (this.options && this.options.listOfOptions) {
            this.options.listOfOptions.map((element, index) => element['rowIndex'] = index);
            this.options.itemList = this.options.listOfOptions;
        }
        this.containerLookUpOptions.actionDetailsOptions = [{}];
        this.containerLookUpOptions.statementOptions = {
            buttonIcon: 'facilities',
            redirectUrl: 'deal-statement-report'
        };
    }
    getOptionsForCard(item) {
        return Object.assign(Object.assign({}, this.containerLookUpOptions), { fcName: this.options.fcName + item.dealNbr });
    }
    trackByDealNumber(index, item) {
        var _a;
        return (_a = item === null || item === void 0 ? void 0 : item.dealNbr) !== null && _a !== void 0 ? _a : index;
    }
    balanceMapping() {
        const balanceMappingList = [
            {
                key: 'settled_amount_key',
                value: 'paidAmount'
            },
            {
                key: 'outstanding_balance_key',
                value: 'outstandingBalance'
            },
        ];
        return balanceMappingList;
    }
    populateHeaderValueMap() {
        let headerTitleMap = {};
        let subTitleMap = {};
        let nextPaymentDateMap = {};
        let nextPaymentValMap = {};
        let amountMap = {};
        let settledAmountMap = {};
        let maturityDateMap = {};
        let pastDuesMap = {};
        let lastPaymentDateMap = {};
        let lastPaymentAmountMap = {};
        let outstandingBalanceMap = {};
        let noOfRemainingInsMap = {};
        let periodicityPaymentMap = {};
        nextPaymentDateMap = {
            key: 'nextPaymentDate',
            value: '---/--/----'
        };
        nextPaymentValMap = {
            key: 'nextPaymentVal',
            value: '0.0'
        };
        settledAmountMap = {
            key: 'paidAmount',
            value: '0.0'
        };
        amountMap = {
            key: 'amount',
            value: '0.0'
        };
        maturityDateMap = {
            key: 'maturityDate',
            value: '---/--/----',
        };
        pastDuesMap = {
            key: 'pastDues',
            value: '0.0'
        };
        lastPaymentDateMap = {
            key: 'lastPaymentDate',
            value: '---/--/----',
        };
        lastPaymentAmountMap = {
            key: 'lastPaymentAmount',
            value: '0.0'
        };
        outstandingBalanceMap = {
            key: 'outstandingBalanceDesc',
            value: '0.0'
        };
        noOfRemainingInsMap = {
            key: 'noOfRemainingIns',
            value: '0'
        };
        periodicityPaymentMap = {
            key: 'periodicityPayment',
            value: '0'
        };
        headerTitleMap = {
            key: 'title',
            value: 'title',
            isEdit: false,
            formGroupMap: {
                placeHolder: 'title_key',
                fcName: 'title',
            }
        };
        //edited by Marina TP id: #1486410 to fix the issue of nickName doesn't update when edited
        subTitleMap = {
            key: 'subTitle',
            value: 'nickName',
            isEdit: true,
            formGroupMap: {
                placeHolder: 'enter_deal_nick',
                fcName: 'nickName',
            }
        };
        this.dealsLabelValuesMap.set('financing_amount_key', amountMap);
        this.dealsLabelValuesMap.set('maturity_date_key', maturityDateMap);
        this.dealsLabelValuesMap.set('payment_key', periodicityPaymentMap);
        this.dealsLabelValuesMap.set('no_remaining_installments_key', noOfRemainingInsMap);
        this.dealsLabelValuesMap.set('settled_amount_key', settledAmountMap);
        this.dealsLabelValuesMap.set('outstanding_balance_key', outstandingBalanceMap);
        this.dealsLabelValuesMap.set('past_dues_key', pastDuesMap);
        this.dealsLabelValuesMap.set('last_payment_date_key', lastPaymentDateMap);
        this.dealsLabelValuesMap.set('last_payment_amount_key', lastPaymentAmountMap);
        this.dealsLabelValuesMap.set('next_payment_date_key', nextPaymentDateMap);
        this.dealsLabelValuesMap.set('next_payment_amount_key', nextPaymentValMap);
        // will be used as header to template card in look up details component
        this.dealsHeaderMap.set('title', headerTitleMap);
        this.dealsHeaderMap.set('subTitle', subTitleMap);
        this.requestMap.set('nickNameNumber', 'key');
        this.requestMap.set('oldNickName', 'subTitle');
        this.editRequestMap.set('newNickName', 'subTitle');
        this.editRequestMap.set('type', 'A');
    }
    updateCard(event) {
        if (event && this.options.listOfOptions) {
            this.options.itemList = this.options.listOfOptions.filter(acct => acct === event);
            this.options.item = this.options.itemList[0];
            this.showSingleAccount = !this.showSingleAccount;
            this.options.showItemPopUp = !this.options.showItemPopUp;
            // this.options.showSelectedCard = false;
        }
        this.onClickCard.emit(this.options);
    }
};
PsComplexDealDetailsComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] }
];
PsComplexDealDetailsComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    itemCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onClickCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsComplexDealDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-deal-details',
        template: _raw_loader_ps_complex_deal_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_deal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])
], PsComplexDealDetailsComponent);



/***/ }),

/***/ "t3bA":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-lookup-option [id]=\"'deals-list-' + id + i\" [options]=\"getOptionsForCard(item)\" *ngFor=\"let item of options.itemList; let i = index; trackBy: trackByDealNumber\" [itemCard]=\"item\"\n    (clickedCard)=\"updateCard($event)\">\n\n</ps-container-lookup-option>");

/***/ })

}]);
//# sourceMappingURL=108-es2015.js.map