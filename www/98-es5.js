(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98], {
    /***/
    "/qnY":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report-page/report-page.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function _qnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-report #reportTemplate [options]=\"reportTemplateOptions\" id=\"report_page\"></ps-template-report>";
      /***/
    },

    /***/
    "b5LR":
    /*!*********************************************************!*\
      !*** ./src/app/pages/report-page/report-page.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function b5LR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "f/nv":
    /*!*******************************************************!*\
      !*** ./src/app/pages/report-page/report-page.page.ts ***!
      \*******************************************************/

    /*! exports provided: ReportPagePage */

    /***/
    function f_nv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPagePage", function () {
        return ReportPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-page.page.html */
      "/qnY");
      /* harmony import */


      var _report_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-page.page.scss */
      "b5LR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/ps-common.settings */
      "QZhd");

      var ReportPagePage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function ReportPagePage(logger, common, navService, modalController) {
          var _this;

          _classCallCheck(this, ReportPagePage);

          _this = _callSuper(this, ReportPagePage);
          _this.logger = logger;
          _this.common = common;
          _this.navService = navService;
          _this.modalController = modalController;
          _this.reportTemplateOptions = {
            reportParametersList: {
              iconPath: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].ICON_LOCATION_LANGUAGE
            },
            showReport: true
          };
          _this.reportId = 'report_' + _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID;
          _this.reloadReport = false; //Mohanad: AZDB-5549-01092024 - Add flag which control when report get reloaded

          _this.parameterListCache = 0;
          _this.parameterListCache = 0;
          /* Fixed by Hisham.Omar TP#986400 start
           * Move the function content to the constructor as the constructor parameters
           * will be undefined when accessing them using 'this' keyword
           * Get the classList from offsetParent property as the class is added on the 'td' tag not the 'a' tag
           * Remove the function 'checkHyperlinkClickEvent' from the code as it is no longer needed
           * Remove the document function 'removeEventListener' from ngOnDestroy
          **/

          document.addEventListener('click', function () {
            var _a;

            if ((_a = event.target['offsetParent']) === null || _a === void 0 ? void 0 : _a.classList.contains(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].REPORT_CLICK_EVENT_REFERENCE)) {
              event.preventDefault();
              var hyperLinkTag = event.target['offsetParent'].querySelector('a');
              var parameterList = hyperLinkTag.href;

              if (_this.parameterListCache && _this.parameterListCache > 0) {
                return;
              }

              _this.parameterListCache++;

              if (parameterList.indexOf('operId') > -1) {
                parameterList = parameterList.substring(parameterList.indexOf('operId'), parameterList.length - 1);
                var parametersListArray = parameterList.split('&');
                var operationIdObject = parametersListArray[0];
                var reportNameObject = parametersListArray[1];
                var operationIdObjectArray = operationIdObject.split('=');
                var operationId = operationIdObjectArray[1];
                var parentOperId = _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID;
                _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID = +operationId;
                var reportNameObjectArray = reportNameObject.split('=');
                var reportName = reportNameObjectArray[1];
                parametersListArray = parametersListArray.length > 2 ? parametersListArray.slice(2) : [];
                var navigationExtras = {};
                var reportParametersList = {};

                if (parametersListArray && parametersListArray.length > 0) {
                  var _iterator = _createForOfIteratorHelper(parametersListArray),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var eachParameter = _step.value;
                      var parameter = eachParameter.split('=');
                      reportParametersList[parameter[0]] = parameter[1];
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  navigationExtras = {
                    queryParams: reportParametersList
                  };
                  navigationExtras.queryParams['parentOperId'] = parentOperId;
                }

                var reportTitle = String(reportName).split('-').join('_');
                reportTitle += '_key';
                var page = {
                  operID: +operationId,
                  title: reportTitle,
                  component: reportName,
                  param: navigationExtras.queryParams
                };
                navService.openPage(page);
              } else {
                parameterList = parameterList.substring(parameterList.indexOf('className'), parameterList.length - 1);

                var _parametersListArray = parameterList.split('&');

                var classNameObject = _parametersListArray[0];
                var methodNameObject = _parametersListArray[1];
                var classNameObjectArray = classNameObject.split('=');
                var className = classNameObjectArray[1];
                var methodNameObjectArray = methodNameObject.split('=');
                var methodName = methodNameObjectArray[1];
                _parametersListArray = _parametersListArray.length > 2 ? _parametersListArray.slice(2) : [];
                var _reportParametersList = {};

                if (_parametersListArray && _parametersListArray.length > 0) {
                  var _iterator2 = _createForOfIteratorHelper(_parametersListArray),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _eachParameter = _step2.value;

                      var _parameter = _eachParameter.split('=');

                      _reportParametersList[_parameter[0]] = _parameter[1];
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                } // For now as the securityCode should be returned as securityCode1
                // When fixed then we can pass the reportParameterList directly to the method.


                var requestParameters = {
                  applicationName: _reportParametersList['applicationName'],
                  progReference: _reportParametersList['progReference'],
                  securityCode1: _reportParametersList['securityCode'],
                  transactionNumberDetails: _reportParametersList['transactionNumber']
                };
                common.getAttachmentsAndOrDownload(requestParameters, true);
              }

              event.stopImmediatePropagation();
            }
          }, false);
          /* Fixed by Hisham.Omar TP#986400 end **/

          return _this;
        }

        _inherits(ReportPagePage, _omni_base_omni_base_);

        return _createClass(ReportPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(ReportPagePage, "init", this, 3)([]);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(ReportPagePage, "ionViewDidEnter", this, 3)([]);

            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].stopTimer = false;
            this.commonProv.reportRefrshFlag.next(true);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            //Mohanad: AZDB-5549-01092024
            this.reportTemplateOptions.operId = _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonSettings"].oper_ID;
            this.prepareReportParams();
            this.handleFilteredReports(); // Using setTimeout to avoid the calling of willEnter twice to prevent fetching report

            setTimeout(function () {
              _this2.reportTemplate.init();
            }, 500);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            //Mohanad: AZDB-5549-01092024
            this.reportTemplate.displayDiv = false;
          }
        }, {
          key: "prepareReportParams",
          value: function prepareReportParams() {
            //#1182706 Heba.Hassan - handle navigation params by openPage either navigateForward 
            var result = this.navService.getAllParams() ? this.navService.getAllParams() : this.navService.getAllParams().queryParams ? this.navService.getAllParams().queryParams : null;

            if (result) {
              var resultData = result.queryParams ? result.queryParams : result; // oper id for the new transaction associated by submit

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
              } //added by Marina TP:#1586190


              if (resultData['nextPage']) {
                this.reportTemplateOptions.nextPageOptions = resultData['nextPage'];
              }

              delete resultData['timeOutCount'];
              delete resultData['function'];
              delete resultData['message'];
            }
          }
        }, {
          key: "handleFilteredReports",
          value: function handleFilteredReports() {
            if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].filteredReport.includes(this.reportTemplateOptions.operId)) {
              this.reportTemplateOptions.showReport = false;
            } else {
              this.reportTemplateOptions.showReport = true;
            }
          } // refreshReport() {
          //   this.showReport = false;
          //   this.viewWillLeave();
          //   setTimeout(() => {
          //     super.viewDidEnter();
          //     this.init();
          //   }, 500);
          // }

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.pagesNavigationInfoSubscription) {
              this.pagesNavigationInfoSubscription.unsubscribe();
            }

            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_9__["CommonUtils"].stopTimer = true;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      ReportPagePage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      ReportPagePage.propDecorators = {
        reportId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['id']
        }],
        reportTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['reportTemplate']
        }]
      };
      ReportPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'report-page',
        template: _raw_loader_report_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], ReportPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=98-es5.js.map