(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "/qnY":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report-page/report-page.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-report #reportTemplate [options]=\"reportTemplateOptions\" id=\"report_page\"></ps-template-report>");

/***/ }),

/***/ "b5LR":
/*!*********************************************************!*\
  !*** ./src/app/pages/report-page/report-page.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "f/nv":
/*!*******************************************************!*\
  !*** ./src/app/pages/report-page/report-page.page.ts ***!
  \*******************************************************/
/*! exports provided: ReportPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPagePage", function() { return ReportPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-page.page.html */ "/qnY");
/* harmony import */ var _report_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-page.page.scss */ "b5LR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/ps-common.settings */ "QZhd");














let ReportPagePage = class ReportPagePage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"] {
    constructor(logger, common, navService, modalController) {
        super();
        this.logger = logger;
        this.common = common;
        this.navService = navService;
        this.modalController = modalController;
        this.reportTemplateOptions = {
            reportParametersList: {
                iconPath: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].ICON_LOCATION_LANGUAGE
            },
            showReport: true
        };
        this.reportId = 'report_' + _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID;
        this.reloadReport = false; //Mohanad: AZDB-5549-01092024 - Add flag which control when report get reloaded
        this.parameterListCache = 0;
        this.parameterListCache = 0;
        /* Fixed by Hisham.Omar TP#986400 start
         * Move the function content to the constructor as the constructor parameters
         * will be undefined when accessing them using 'this' keyword
         * Get the classList from offsetParent property as the class is added on the 'td' tag not the 'a' tag
         * Remove the function 'checkHyperlinkClickEvent' from the code as it is no longer needed
         * Remove the document function 'removeEventListener' from ngOnDestroy
        **/
        document.addEventListener('click', () => {
            var _a;
            if ((_a = event.target['offsetParent']) === null || _a === void 0 ? void 0 : _a.classList.contains(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].REPORT_CLICK_EVENT_REFERENCE)) {
                event.preventDefault();
                const hyperLinkTag = event.target['offsetParent'].querySelector('a');
                let parameterList = hyperLinkTag.href;
                if (this.parameterListCache && this.parameterListCache > 0) {
                    return;
                }
                this.parameterListCache++;
                if (parameterList.indexOf('operId') > -1) {
                    parameterList = parameterList.substring(parameterList.indexOf('operId'), parameterList.length - 1);
                    let parametersListArray = parameterList.split('&');
                    const operationIdObject = parametersListArray[0];
                    const reportNameObject = parametersListArray[1];
                    const operationIdObjectArray = operationIdObject.split('=');
                    const operationId = operationIdObjectArray[1];
                    const parentOperId = _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID;
                    _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID = +operationId;
                    const reportNameObjectArray = reportNameObject.split('=');
                    const reportName = reportNameObjectArray[1];
                    parametersListArray = parametersListArray.length > 2 ? parametersListArray.slice(2) : [];
                    let navigationExtras = {};
                    const reportParametersList = {};
                    if (parametersListArray && parametersListArray.length > 0) {
                        for (const eachParameter of parametersListArray) {
                            const parameter = eachParameter.split('=');
                            reportParametersList[parameter[0]] = parameter[1];
                        }
                        navigationExtras = {
                            queryParams: reportParametersList
                        };
                        navigationExtras.queryParams['parentOperId'] = parentOperId;
                    }
                    let reportTitle = String(reportName).split('-').join('_');
                    reportTitle += '_key';
                    const page = {
                        operID: +operationId,
                        title: reportTitle,
                        component: reportName,
                        param: navigationExtras.queryParams
                    };
                    navService.openPage(page);
                }
                else {
                    parameterList = parameterList.substring(parameterList.indexOf('className'), parameterList.length - 1);
                    let parametersListArray = parameterList.split('&');
                    const classNameObject = parametersListArray[0];
                    const methodNameObject = parametersListArray[1];
                    const classNameObjectArray = classNameObject.split('=');
                    const className = classNameObjectArray[1];
                    const methodNameObjectArray = methodNameObject.split('=');
                    const methodName = methodNameObjectArray[1];
                    parametersListArray = parametersListArray.length > 2 ? parametersListArray.slice(2) : [];
                    const reportParametersList = {};
                    if (parametersListArray && parametersListArray.length > 0) {
                        for (const eachParameter of parametersListArray) {
                            const parameter = eachParameter.split('=');
                            reportParametersList[parameter[0]] = parameter[1];
                        }
                    }
                    // For now as the securityCode should be returned as securityCode1
                    // When fixed then we can pass the reportParameterList directly to the method.
                    const requestParameters = {
                        applicationName: reportParametersList['applicationName'],
                        progReference: reportParametersList['progReference'],
                        securityCode1: reportParametersList['securityCode'],
                        transactionNumberDetails: reportParametersList['transactionNumber']
                    };
                    common.getAttachmentsAndOrDownload(requestParameters, true);
                }
                event.stopImmediatePropagation();
            }
        }, false);
        /* Fixed by Hisham.Omar TP#986400 end **/
    }
    ngOnInit() {
        super.init();
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].stopTimer = false;
        this.commonProv.reportRefrshFlag.next(true);
    }
    ionViewWillEnter() {
        //Mohanad: AZDB-5549-01092024
        this.reportTemplateOptions.operId = _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID;
        this.prepareReportParams();
        this.handleFilteredReports();
        // Using setTimeout to avoid the calling of willEnter twice to prevent fetching report
        setTimeout(() => {
            this.reportTemplate.init();
        }, 500);
    }
    ionViewWillLeave() {
        //Mohanad: AZDB-5549-01092024
        this.reportTemplate.displayDiv = false;
    }
    prepareReportParams() {
        //#1182706 Heba.Hassan - handle navigation params by openPage either navigateForward 
        const result = this.navService.getAllParams() ? this.navService.getAllParams() : this.navService.getAllParams().queryParams ? this.navService.getAllParams().queryParams : null;
        if (result) {
            const resultData = result.queryParams ? result.queryParams : result;
            // oper id for the new transaction associated by submit
            if (resultData['operId']) {
                this.reportTemplateOptions.operId = resultData['operId'];
                _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID = this.reportTemplateOptions.operId;
            }
            if (resultData['dynamicOperId']) {
                this.reportTemplateOptions.dynamicOperId = resultData['dynamicOperId'];
                this.reportTemplateOptions.submitOptions = {
                    group: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({}),
                    submitServiceUrl: _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].serviceUrl.commonSubmitAction,
                    extraParams: resultData
                };
            }
            this.reportTemplateOptions.reportParametersList = resultData;
            if (resultData['parentOperId']) {
                this.reportTemplateOptions.parentOperId = resultData['parentOperId'];
            }
            if (resultData['timeOutCount']) {
                this.reportTemplateOptions.timeOut = {};
                this.reportTemplateOptions.timeOut.timeOutCount = resultData['timeOutCount'];
                this.reportTemplateOptions.timeOut.timeOutFunc = resultData['function'];
                this.reportTemplateOptions.timeOut.message = resultData['message'];
            }
            //added by Marina TP:#1586190
            if (resultData['nextPage']) {
                this.reportTemplateOptions.nextPageOptions = resultData['nextPage'];
            }
            delete resultData['timeOutCount'];
            delete resultData['function'];
            delete resultData['message'];
        }
    }
    handleFilteredReports() {
        if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].filteredReport.includes(this.reportTemplateOptions.operId)) {
            this.reportTemplateOptions.showReport = false;
        }
        else {
            this.reportTemplateOptions.showReport = true;
        }
    }
    // refreshReport() {
    //   this.showReport = false;
    //   this.viewWillLeave();
    //   setTimeout(() => {
    //     super.viewDidEnter();
    //     this.init();
    //   }, 500);
    // }
    ngOnDestroy() {
        if (this.pagesNavigationInfoSubscription) {
            this.pagesNavigationInfoSubscription.unsubscribe();
        }
        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].stopTimer = true;
    }
};
ReportPagePage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ReportPagePage.propDecorators = {
    reportId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['id',] }],
    reportTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportTemplate',] }]
};
ReportPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'report-page',
        template: _raw_loader_report_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], ReportPagePage);



/***/ })

}]);
//# sourceMappingURL=98-es2015.js.map