(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "NS8m":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.page.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CashAndChequeCollectionRequestReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAndChequeCollectionRequestReportPage", function() { return CashAndChequeCollectionRequestReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cash_and_cheque_collection_request_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cash-and-cheque-collection-request-report.page.html */ "w3x6");
/* harmony import */ var _cash_and_cheque_collection_request_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash-and-cheque-collection-request-report.page.scss */ "a/Dz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/omni-base/omni-base.page */ "gKqT");












let CashAndChequeCollectionRequestReportPage = class CashAndChequeCollectionRequestReportPage extends src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"] {
    constructor(commonService, logger, omniPull) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.omniPull = omniPull;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.cashCollectionOptions = {};
        this.chequeCollectionOptions = {};
        this.templateViewOptions = {
            group: this.formGroup
        };
        this.complexSegmentOptions = {
            segmentOptions: {
                segmentList: []
            },
            segmentContainerOptions: {
                numberOfSegments: 2,
                namesofSegments: ['cash-collection_segment', 'cheque_collection_segment'],
            }
        };
        this.segmentOptions = {
            segmentList: []
        };
        this.cardTypeFlagResponse = [];
        this.chqCardLabelOptions = {
            labelKey: 'no_cheque_collection_request_available_key'
        };
        this.debitCardLabelOptions = {
            labelKey: 'no_cash_collection_request_available_key'
        };
        this.cashKey = 'cash';
        this.chequeKey = 'cheque';
        this.showChqCards = false;
        this.showCashCards = false;
        this.nochqcards = false;
        this.nocashcards = false;
        this.cashReqType = "1";
        this.chequeReqType = "2";
    }
    ngOnInit() {
        super.init();
        this.cashCollectionOptions.group = this.formGroup;
        this.cashCollectionOptions.isEditable = true;
        this.cashCollectionOptions.translate = true;
        this.chequeCollectionOptions.group = this.formGroup;
        this.chequeCollectionOptions.isEditable = true;
        this.chequeCollectionOptions.translate = true;
        this.chequeCollectionOptions.operation = 'cashandchequereq';
        this.cashCollectionOptions.operation = 'cashandchequereq';
        this.complexSegmentOptions.group = this.formGroup;
        this.complexSegmentOptions.segmentOptions = {
            fcName: 'cardsSegment',
            segmentList: [
                {
                    selected: true,
                    itemValue: this.cashKey,
                    description: this.commonProv.translate('cash_collection_key')
                }, {
                    selected: true,
                    itemValue: this.chequeKey,
                    description: this.commonProv.translate('cheque_collection_key')
                }
            ]
        };
    }
    onClickSegment(selectedSegment) {
        this.chequeCollectionOptions.listOfOptions = undefined;
        this.cashCollectionOptions.listOfOptions = undefined;
        if (selectedSegment === this.chequeKey) {
            this.chequeCollectionOptions.isCash = false;
            this.cashCollectionOptions.isCash = true;
            this.loadList(this.chequeKey);
        }
        else {
            this.chequeCollectionOptions.isCash = true;
            this.cashCollectionOptions.isCash = true;
            this.loadList(this.cashKey);
        }
    }
    loadList(segment) {
        this.returnList(segment);
    }
    returnList(segment) {
        const paramData = {
            language: 'EN',
            cardType: segment,
            filterByOper: true,
            depositorRequestTypeId: segment == "cash" ? this.cashReqType : this.chequeReqType,
            operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CASH_AND_CHEQUE_REQ_OPER_ID
        };
        this.omniPull.returnCashManagementCardList(paramData).then((result) => {
            if (result && result.gridModel && result.gridModel.length > 0) {
                if (segment === this.chequeKey) {
                    this.chequeCollectionOptions.listOfOptions = [];
                    this.chequeCollectionOptions.listOfOptions = this.populateCards(result.gridModel);
                }
                else {
                    this.cashCollectionOptions.listOfOptions = [];
                    this.cashCollectionOptions.listOfOptions = this.populateCards(result.gridModel);
                }
            }
        }).catch(error => {
            this.logger.error('Error: While fetching cards list :', error);
        });
    }
    populateCards(card) {
        const cardList = [];
        const psDatePipe = new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["PsDateFormatPipe"]();
        for (const iterator of card) {
            // const limitFlagObject = ;
            // eslint-disable-next-line no-shadow
            if (iterator && iterator.submitFieldValueMap) {
                const item = {
                    depositorRequestType: (iterator.submitFieldValueMap.requestType || iterator.submitFieldValueMap.depositorRequestType || iterator.submitFieldValueMap.depositorRequestTypeId),
                    requestTypeDesc: (iterator.submitFieldValueMap.requestType === '1' || iterator.submitFieldValueMap.depositorRequestType === '1' || iterator.submitFieldValueMap.depositorRequestTypeId) ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('cash_collection_key') : src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('cheque_collection_key'),
                    status: iterator.status == 'N' ? 'new_key' : iterator.status == 'PD' || iterator.status == 'TD' || iterator.status == 'TP' ? 'in_process_key' :
                        iterator.status == 'R' ? 'rejected_key' : iterator.status == 'CL' ? 'closed_key' : iterator.status == 'C' ? 'canceled_key' : iterator.status == 'A' ? 'active_key' : iterator.status,
                    statusCode: iterator.status,
                    isMyAccountDeposit: iterator.submitFieldValueMap.isMyAccountDeposit,
                    depositCash: iterator.submitFieldValueMap.isMyAccountDeposit === 'Y' ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cash_in_my_account_key') : src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cash_in_other_account_key'),
                    depositCheque: iterator.submitFieldValueMap.isMyAccountDeposit === 'Y' ? src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cheque_in_my_account_key') : src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].translate('deposit_cheque_in_other_account_key'),
                    fromAccount: iterator.submitFieldValueMap.fromAccount,
                    fromAccount_lookupKey: iterator.submitFieldValueMap.fromAccount_lookupKey,
                    depositorName: iterator.submitFieldValueMap.depositorName,
                    transactionAmount: iterator.submitFieldValueMap.transactionAmount,
                    currency: iterator.submitFieldValueMap.currency,
                    currencyDescription: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    collectionDate: iterator.submitFieldValueMap.collectionDate,
                    collectionLocationDesc: iterator.submitFieldValueMap.collectionLocationDesc,
                    collectionLocation: iterator.submitFieldValueMap.collectionLocation,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    chequeBankName: iterator.submitFieldValueMap.chequeBankName,
                    chequeSerialNo: iterator.submitFieldValueMap.chequeSerialNo,
                    selectedFileData_rectImg_uploadedFiles: iterator.submitFieldValueMap.selectedFileData_rectImg_uploadedFiles,
                    selectedFileData_veroImg_uploadedFiles: iterator.submitFieldValueMap.selectedFileData_veroImg_uploadedFiles,
                    uploadedFiles: iterator.submitFieldValueMap.uploadedFiles,
                    chequeFileComment: iterator.submitFieldValueMap.chequeFileComment,
                    depositReason: iterator.submitFieldValueMap.depositReason,
                    operId: iterator.operId,
                    dataSaveId: iterator.dataSaveId
                };
                cardList.push(item);
            }
        }
        return cardList;
    }
    ionViewWillEnter() {
        super.viewWillEnter();
        this.loadList(this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue);
        this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue == this.cashKey ? this.cashCollectionOptions.isCash = true : this.cashCollectionOptions.isCash = false;
    }
};
CashAndChequeCollectionRequestReportPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"] }
];
CashAndChequeCollectionRequestReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cash-and-cheque-collection-request-report',
        template: _raw_loader_cash_and_cheque_collection_request_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cash_and_cheque_collection_request_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]])
], CashAndChequeCollectionRequestReportPage);



/***/ }),

/***/ "a/Dz":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.page.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNoLWFuZC1jaGVxdWUtY29sbGVjdGlvbi1yZXF1ZXN0LXJlcG9ydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "w3x6":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.page.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-segment id=\"cashSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-option-cash-and-cheque *ngIf=\"cashCollectionOptions?.listOfOptions?.length > 0\" id=\"ps-option-cash-list\"\n        [options]=\"cashCollectionOptions\" (reloadFct)=\"onClickSegment('cash')\"></ps-option-cash-and-cheque>\n      <div *ngIf=\"cashCollectionOptions?.listOfOptions?.length ==0\" class=\"no-account-text\">\n        <ps-label [options]=\"debitCardLabelOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-option-cash-and-cheque *ngIf=\"chequeCollectionOptions?.listOfOptions?.length > 0\" id=\"ps-option-cheque-list\"\n        [options]=\"chequeCollectionOptions\"  (reloadFct)=\"onClickSegment('cheque')\">\n      </ps-option-cash-and-cheque>\n      <div *ngIf=\"chequeCollectionOptions?.listOfOptions?.length ==0\" class=\"no-account-text\">\n        <ps-label [options]=\"chqCardLabelOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n  </ps-complex-segment>\n</ps-template-view>");

/***/ })

}]);
//# sourceMappingURL=80-es2015.js.map