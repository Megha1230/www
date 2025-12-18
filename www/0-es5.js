(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "TsS6":
    /*!*********************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function TsS6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS1zdGVwcGVyLnRlbXBsYXRlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "kRg/":
    /*!*******************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PsTemplateStepper */

    /***/
    function kRg_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateStepper", function () {
        return PsTemplateStepper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_template_stepper_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-template-stepper.template.html */
      "pcow");
      /* harmony import */


      var _ps_template_stepper_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-template-stepper.template.scss */
      "TsS6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_drafts_report_ps_drafts_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-drafts-report/ps-drafts-report.component */
      "Nt3t");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var _psComponents_ps_base_ps_base_action_ps_action_button_ps_button_next_ps_button_next_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../psComponents/ps-base/ps-base-action/ps-action-button/ps-button-next/ps-button-next.component */
      "WmIV");
      /* harmony import */


      var _psComponents_ps_base_ps_base_action_ps_action_button_ps_button_previous_ps_button_previous_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../psComponents/ps-base/ps-base-action/ps-action-button/ps-button-previous/ps-button-previous.component */
      "IDLg");
      /* harmony import */


      var _psComponents_ps_base_ps_base_action_ps_action_button_ps_button_submit_ps_button_submit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../psComponents/ps-base/ps-base-action/ps-action-button/ps-button-submit/ps-button-submit.component */
      "OPJk");
      /* harmony import */


      var _psComponents_ps_base_ps_base_container_ps_container_stepper_ps_container_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../psComponents/ps-base/ps-base-container/ps-container-stepper/ps-container-stepper.component */
      "RoNR");
      /* harmony import */


      var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../psServices/Event/event.service */
      "r40+");
      /* harmony import */


      var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../psServices/models/ps-app-settings */
      "lE2x");
      /* harmony import */


      var _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../ps-template-base/ps-template-base.page */
      "uqA0");

      var PsTemplateStepper = /*#__PURE__*/function (_ps_template_base_ps_) {
        function PsTemplateStepper(ref, events) {
          var _this;

          _classCallCheck(this, PsTemplateStepper);

          _this = _callSuper(this, PsTemplateStepper);
          _this.ref = ref;
          _this.events = events; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this.onNextPreviousStepper = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.draftLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.onTemplateStepWidgetOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.onTemplateStepWidgetInit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.isCheckerAndReportSelected = false;
          _this.isMakerAndReportSelected = false;
          _this.isDraft = false;
          _this.stepperOptions = {};
          _this.psContainerFlip = {
            hideVisibleArea: false,
            isFlipped: false
          };
          _this.previousIconOptions = {
            iconName: 'arrow-round-back'
          };
          _this.nextIconOptions = {
            iconName: 'arrow-round-forward'
          };
          _this.previousOptions = {
            labelKey: 'previous_key',
            group: _this.options.group
          };
          _this.hintOptions = {
            labelKey: 'complete_all_fields_key'
          };
          _this.nextOptions = {
            labelKey: 'next_key',
            // stepper: this.stepper, // Commented by Richie for TP# 1105083: stepper declared before initialized
            group: _this.options.group
          };
          _this.submitOptions = {
            labelKey: 'submit_key',
            group: _this.options.group,
            emitClickOnFailure: true
          };
          _this.saveAsDraftOptions = {
            labelKey: 'save_key',
            group: _this.options.group
          };
          _this.saveAsDraftWidgetOptions = {
            labelKey: 'save_and_quit_key',
            group: _this.options.group
          };
          _this.approveOptions = {
            labelKey: 'approve_key',
            group: _this.options.group
          };
          _this.rejectOptions = {
            labelKey: 'reject_key',
            group: _this.options.group
          };
          _this.sendBackOptions = {
            labelKey: 'send_back_key',
            group: _this.options.group
          };
          _this.termsAndConditionsOptions = {
            checkBoxOptions: {
              group: _this.options.group,
              fcName: 'checkboxConfirm',
              labelKey: 'agree_terms_and_conditions_key',
              //applyValueValidation: true // Added by ghada, tp#1383050  a custom validator will be applied to validate if component's value if true to mark it as valid
              allowDefaultValue: false //Added by Marina jira-AZDB-1294; terms and conditions shouldn't have a false value it is either empty or true 

            },
            htmlViewerOptions: {}
          };
          _this.draftLoaderOptions = {};
          _this.readOnlyMode = false;
          _this.showReport = false;
          _this.showReportFlag = false;
          _this.headerIconOptions = {
            iconName: 'bookmark'
          };
          _this.previewLblOptions = {
            labelKey: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].translate('send_back_reason_key'),
            psClass: 'ps-lbl-preview',
            previewMode: true
          };
          _this.previewValueOptions = {
            labelKey: 'test',
            psClass: 'ps-value-preview',
            previewMode: true
          };
          _this.draftsOptions = {};
          _this.isCorporate = false;
          _this.showSendBackReason = false;
          _this.hideStepper = false;
          _this.eventSub = events.subscribe('draft:navigation', function (requestObject) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.commonProv.copyObject(_this.options.requestObject, requestObject, true, false);

            if (_this.options.requestObject) {
              _this.saveAsDraftOptions.dataSaveId = requestObject.dataSaveId;

              _this.updateReferecnce();
            }

            _this.checkMakerChecker();

            _this.isDraft = false;

            if (_this.options.requestObject) {
              if (_this.options.requestObject.status === 'DR') {
                _this.isDraft = true;
              }
            }
          });
          return _this;
        }

        _inherits(PsTemplateStepper, _ps_template_base_ps_);

        return _createClass(PsTemplateStepper, [{
          key: "stepperInit",
          value: function stepperInit(stepper) {
            this.options.stepperInstance = this;
            this.stepper = stepper;
            this.nextOptions.stepper = this.stepper;
            this.submitOptions.stepper = this.stepper;
            this.saveAsDraftOptions.stepper = this.stepper;
            this.previousOptions.stepper = this.stepper;
            this.rejectOptions.stepper = this.stepper;
            this.sendBackOptions.stepper = this.stepper;
            this.approveOptions.stepper = this.stepper;
            this.draftsOptions.stepper = this.stepper;

            if (this.options.requestObject && this.options.requestObject[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].LAST_ACTIVE_STEP]) {
              this.stepper[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].LAST_ACTIVE_STEP] = this.options.requestObject[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].LAST_ACTIVE_STEP];
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.quickMenu = _psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_13__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.UI_CONFIGURATION.BOTTOM_QUICK_MENU;
            this.screenOptions = {
              quickMenuCollapsed: true
            };

            if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isCorporate) {
              this.isCorporate = true;
            }

            this.navParam = this.navService.getAllParams();
            var readOnly = this.navService.getParamKey('readOnlypage');
            var showTcAndPreviewSteps = this.navService.getParamKey('showTcAndPreviewInReadonly');

            if (readOnly != undefined) {
              this.readOnlyMode = readOnly;
            }

            this.options.showReport = this.options.showReport != undefined ? this.options.showReport : true;
            this.hideStepper = this.options.hideStepper ? this.options.hideStepper : false; // required to hide the stepper on payment page when the multi transfers loads it dynamically.

            this.options.type = this.options.type != undefined ? this.options.type : ''; // used for the preview template

            var screenVO = this.navService.getParamKey('ScreenVO');

            if (screenVO != undefined) {
              this.commonProv.copyObject(this.options.requestObject, screenVO, true, false);

              if (screenVO.sendBackReason != null && screenVO.status == 'PE' && src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isMaker) {
                this.previewValueOptions.labelKey = screenVO.sendBackReason;
                this.showSendBackReason = true;
              }

              this.checkMakerChecker();
            }

            this.stepperOptions = this.options ? this.options : this.stepperOptions;
            this.stepperOptions.readonlyMode = readOnly;
            this.stepperOptions.showTcAndPreviewInReadonly = showTcAndPreviewSteps;
            this.commonProv.copyObject(this.submitOptions, this.options.submitOptions, false, true);
            this.commonProv.copyObject(this.saveAsDraftOptions, this.options.submitOptions, false, true);
            this.commonProv.copyObject(this.saveAsDraftWidgetOptions, this.options.submitOptions, false, true);
            this.commonProv.copyObject(this.sendBackOptions, this.options.submitOptions, false, true);
            this.commonProv.copyObject(this.approveOptions, this.options.submitOptions, false, true);
            this.commonProv.copyObject(this.rejectOptions, this.options.submitOptions, false, true);
            this.commonProv.copyObject(this.nextOptions, this.options, false, true);
            this.commonProv.copyObject(this.draftsOptions, this.options, false, true);
            this.draftsOptions.requestObject = this.options.requestObject; //added by Marina TP:#1583639 to have the same reference of requestObject in both components; ps-template-stepper and ps-drafts-report

            if (this.options.widgetStepper) {
              this.saveAsDraftOptions.saveProcedureFlow = true; // GA: Added this flag for the widget based form

              this.saveAsDraftWidgetOptions.saveProcedureFlow = true; // GA: Added this flag for the widget based form
            }

            this.termsAndConditionsOptions.checkBoxOptions.group = this.options.group;
            this.termsAndConditionsOptions.htmlViewerOptions.fileName = _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonSettings"].oper_ID + "-TermsAndConditions.html";
            this.termsAndConditionsOptions.htmlViewerOptions.defaultFileName = "TermsAndConditions.html";
            this.termsAndConditionsOptions.htmlViewerOptions.parseHtmlFromFile = true;

            if (this.hideStepper) {
              this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.termsAndConditionsOptions.checkBoxOptions.fcName], 0);
            } else {
              this.commonProv.applyDynScreenDisplay(_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.termsAndConditionsOptions.checkBoxOptions.fcName], 1);
            }

            if (!this.options.requestObject) {
              this.options.requestObject = {};
            }

            if (this.options.requestObject) {
              if (this.options.requestObject.status === 'DR') {
                this.isDraft = true;
              }
            }

            this.saveAsDraftOptions.dataSaveId = this.options.requestObject.dataSaveId;
            this.commonProv.setFormData(this.options.group, this.options.requestObject);

            if (this.navParam.JBPM) {
              this.initJBPMFlow();
            } // AZDB-7617 - AMANAOI250044 - 201435 - The system is displaying Reject, Send back, and Approve buttons under EditPay favorite screens - Dev => Muzammil Arif


            this.isCorporateMakerChecker = this.isCorporate && src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isMaker && src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isChecker;
          }
        }, {
          key: "checkMakerChecker",
          value: function checkMakerChecker() {
            if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isAgent || src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isCorporate) {
              if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isChecker) {
                this.isCheckerAndReportSelected = true;
              }

              if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isMaker) {
                this.isMakerAndReportSelected = true;
              }
            }
          }
        }, {
          key: "onFooterClick",
          value: function onFooterClick() {
            if (document.getElementsByTagName('ion-modal')[0] !== undefined) {
              document.getElementsByTagName('ion-modal')[0].dismiss();
            }
          }
        }, {
          key: "onNextAndPrevious",
          value: function onNextAndPrevious(stepper) {
            this.onNextPreviousStepper.emit(stepper);
          }
        }, {
          key: "triggerNext",
          value: function triggerNext(event) {
            if (this.next) {
              this.next.onNextClicked(event);
            }
          }
        }, {
          key: "triggerPrevious",
          value: function triggerPrevious(event) {
            if (this.previous) {
              this.previous.onBackClicked(event);
            }
          }
        }, {
          key: "loadDrafts",
          value: function loadDrafts(report, event) {
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }

            this.checkDraftPage();

            if (report) {
              // report was chosen
              this.saveAsDraftOptions.dataSaveId = this.options.requestObject.dataSaveId;
              this.saveAsDraftOptions.labelKey = 'update_draft_key';

              if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isAgent || src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isCorporate) {
                if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isChecker) {
                  this.isCheckerAndReportSelected = true;
                }

                if (src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].isMaker) {
                  this.isMakerAndReportSelected = true;
                }
              }

              this.draftLoaded.emit(report);
            } // this.ref.detectChanges();

          }
        }, {
          key: "checkDraftPage",
          value: function checkDraftPage(forceClose) {
            var _this2 = this;

            var reportStatus = !this.showReport;

            if (forceClose) {
              reportStatus = false;
            }

            this.showReportFlag = reportStatus;
            var animationDuration;

            if (!reportStatus) {
              if (this.report) {
                animationDuration = parseFloat(_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].getElementStyle(this.report.hostElement.nativeElement, 'animationDuration')) * 1000;
                setTimeout(function () {
                  _this2.showReport = reportStatus;
                }, animationDuration);
                this.saveAsDraftOptions.dataSaveId = null;
                this.saveAsDraftOptions.labelKey = 'save_key';
              }
            } else {
              this.showReport = reportStatus;
            }

            if (this.options.requestObject) {
              if (this.options.requestObject.actionType === 'save') {
                this.isDraft = true;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Commented/Added by Richie #TP 1105083
            // this.events.unsubscribe('draft:navigation');
            if (this.eventSub) {
              this.eventSub.unsubscribe();
            }

            this.onTemplateStepWidgetOpen.unsubscribe();
            this.onTemplateStepWidgetInit.unsubscribe(); // End Richie
          }
        }, {
          key: "initJBPMFlow",
          value: function initJBPMFlow() {
            this.options.requestObject.completeBpmTask = true;
            this.options.requestObject.JBPM = this.navParam.JBPM;
            this.commonProv.copyObject(this.options.requestObject, this.options.requestObject.JBPM.taskInfo, false, false);

            var newParams = _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].createBPMParams(this.navParam.JBPM.screenMarkup.queryParams, null, this.commonProv.session, 'in');

            this.commonProv.copyObject(this.options.requestObject, newParams, false, false);

            if (_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].isNotNull(newParams.readOnlypage)) {
              this.readOnlyMode = newParams.readOnlyMode;
            }
          } // edited by Marina TP:#1586190; pass nextPageOtions to the report page or open it directly in case no report to be opened

        }, {
          key: "afterSubmitAction",
          value: function afterSubmitAction(response) {
            if (this.navParam.JBPM) {
              // revertBack partial revert
              this.navParam.postCallFunction.func(Object.assign(Object.assign({}, this.navParam.JBPM), {
                bpmParametersMap: {
                  amount_out: this.options.requestObject.transactionAmount
                }
              }));
            } else {
              var currentPageProfile = this.commonProv.getPageByOperId(response.operId);

              if (response.dontShowReport !== 'true' && response.dontShowReport !== true) {
                if ((currentPageProfile === null || currentPageProfile === void 0 ? void 0 : currentPageProfile.PROG_REF) !== undefined && (response.outputType === 'S' || response.outputType === 'I') || (currentPageProfile === null || currentPageProfile === void 0 ? void 0 : currentPageProfile.FAILURE_PROG_REF) !== undefined && response.outputType === 'F') {
                  var page = {
                    icon: 'document',
                    title: 'submission_report_key',
                    component: 'report-page',
                    operID: response.operId,
                    param: Object.assign(Object.assign(Object.assign({}, this.options.requestObject), response.commonResponseList), {
                      outputType: response.outputType,
                      nextPage: this.options.nextPageOptions
                    })
                  };
                  this.navService.openPage(page);
                } else if (this.options.nextPageOptions) {
                  this.navService.openPage(this.options.nextPageOptions);
                }
              } else if (this.options.nextPageOptions) {
                this.navService.openPage(this.options.nextPageOptions);
              }
            }
          }
        }, {
          key: "updateReferecnce",
          value: function updateReferecnce() {
            var _this3 = this;

            if (this.saveAsDraftWidgetOptions.dataSaveId) {
              this.saveAsDraftOptions.dataSaveId = this.saveAsDraftWidgetOptions.dataSaveId;
            }

            if (this.saveAsDraftOptions.dataSaveId) {
              this.saveAsDraftWidgetOptions.dataSaveId = this.saveAsDraftOptions.dataSaveId;
            }

            if (this.options.widgetStepper) {
              setTimeout(function () {
                _this3.containerStepper.updateAllWidgetsStatus();
              }, 1000);
            }
          }
        }, {
          key: "returnSubmitOptions",
          value: function returnSubmitOptions(numberOfValid) {
            if (this.options.widgetStepper) {
              if (_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_12__["CommonUtils"].isNull(this.submitOptions.psClass)) {
                this.submitOptions.psClass = '';
              }

              if (numberOfValid < 1) {
                if (this.submitOptions.psClass.indexOf('disableContent') < 0) {
                  this.submitOptions.psClass = 'disableContent ' + this.submitOptions.psClass;
                }
              } else {
                this.submitOptions.psClass = this.submitOptions.psClass.replace('disableContent', '');
              }
            } // added by Marina jira-AZDB-2518; to update navigateBack property


            this.submitOptions.enableNavigateBack = this.options.submitOptions.enableNavigateBack ? this.options.submitOptions.enableNavigateBack : true;
            return this.submitOptions;
          }
        }, {
          key: "onStepWidgetOpenEvent",
          value: function onStepWidgetOpenEvent(event) {
            this.onTemplateStepWidgetOpen.emit(event);
          }
        }, {
          key: "onStepWidgetInitEvent",
          value: function onStepWidgetInitEvent(event) {
            this.onTemplateStepWidgetInit.emit(event);
          }
        }]);
      }(_ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_15__["PsTemplateBasePage"]);

      PsTemplateStepper.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]
        }];
      };

      PsTemplateStepper.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onNextPreviousStepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        draftLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onTemplateStepWidgetOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onTemplateStepWidgetInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['next', {
            "static": false
          }]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['previous', {
            "static": false
          }]
        }],
        submit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['submit', {
            "static": false
          }]
        }],
        report: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['report', {
            "static": false
          }]
        }],
        containerStepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['containerStepper', {
            "static": false
          }]
        }]
      };
      PsTemplateStepper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-stepper',
        template: _raw_loader_ps_template_stepper_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_stepper_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]])], PsTemplateStepper);
      /***/
    },

    /***/
    "pcow":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pcow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-screen (click)='checkDraftPage(true)' [ngClass]=\"{'widget-stepper':!stepperOptions.widgetStepper}\"\n  [screenOptions]=\"screenOptions\">\n  <!-- <ps-complex-drafts-reports-loader [options]=\"draftLoaderOptions\">\n\n  </ps-complex-drafts-reports-loader> -->\n  <ng-container saveAsDraftButton *ngIf=\"navService.isUserLoggedIn && options.showReport\">\n    <div class=\"widget-menu-icon border-start widget-menu-icon-draft\" (click)='loadDrafts(null, $event)'>\n      <ps-action-icon class=\"menu-icon save-as-draft\" [options]='headerIconOptions'>\n      </ps-action-icon>\n    </div>\n  </ng-container>\n  <ng-container extraHeader *ngIf=\"showReport\">\n    <!-- <div class=\"row draftReportModal\"> -->\n    <ps-drafts-report class=\"inline-draft-report\" (onPsChange)=\"loadDrafts($event)\" [options]=\"draftsOptions\"\n      [ngClass]=\"(showReportFlag)?'isOpened':'isClosed'\" #report>\n    </ps-drafts-report>\n    <!-- </div> -->\n  </ng-container>\n  <!--   <ps-container-flip [options]=\"psContainerFlip\">\n    <ps-complex-menu visibleSection> -->\n  <ng-container>\n\n    <div class=\"parent-div\" (swiperight)=\"triggerNext($event)\" (swipeleft)=\"triggerPrevious($event)\"\n      [ngClass]=\"{'trigger-disable-field':showReportFlag}\">\n      <div class=\"main-form\"\n        [ngClass]=\"stepper?._steps?.length==(stepper?.selectedIndex+1)? 'hide-stepper': 'show-stepper'\">\n        <ng-container *ngIf=\"stepperOptions.widgetStepper\">\n          <div class=\"widget-stepper-header-wrapper\">\n            <div class=\"round-progress-wrapper orderless-widget-global\">\n              <round-progress [current]=\"containerStepper.totalNumberOfValidControlsRatio\" max=\"1\" responsive=\"true\"\n                stroke=\"15\" color=\"null\" class=\"important-stroke-color\" [ngClass]=\"{\n                  'positive' : containerStepper.totalNumberOfValidControlsRatio*100 >= 50,\n                  'negative':  containerStepper.totalNumberOfValidControlsRatio*100< 30,\n                  'neutral': containerStepper.totalNumberOfValidControlsRatio*100 < 50 && containerStepper.totalNumberOfValidControlsRatio*100> 30,\n                  'shade-0-20':containerStepper.totalNumberOfValidControlsRatio*100<= 20,\n                  'shade-20-40':containerStepper.totalNumberOfValidControlsRatio*100<= 40 && containerStepper.totalNumberOfValidControlsRatio*100> 20,\n                  'shade-40-60':containerStepper.totalNumberOfValidControlsRatio*100<= 60 && containerStepper.totalNumberOfValidControlsRatio*100> 40,\n                  'shade-60-80':containerStepper.totalNumberOfValidControlsRatio*100<= 80 && containerStepper.totalNumberOfValidControlsRatio*100> 60,\n                  'shade-80-100':containerStepper.totalNumberOfValidControlsRatio*100<= 100 && containerStepper.totalNumberOfValidControlsRatio*100> 80\n                    }\">\n              </round-progress>\n              <span class=\"percentage-completion\">{{containerStepper.totalNumberOfValidControlsRatio*100 | number:\n                '1.0-0'}}\n                %</span>\n            </div>\n            <ng-container *ngTemplateOutlet=\"submitButton\"></ng-container>\n            <div class=\"hint-wrapper\">\n              <div class=\"separator\"></div>\n              <ps-label [options]=\"hintOptions\" class=\"hint\"></ps-label>\n              <div class=\"separator\"></div>\n            </div>\n          </div>\n        </ng-container>\n\n        <ps-container-stepper #containerStepper [options]=\"stepperOptions\" (onPsInit)=\"stepperInit($event)\" [id]=\"id\"\n          [ngClass]=\"hideStepper ? 'stepperHidden' : ''\"\n          (onWidgetUpdate)=\"stepperOptions.widgetStepper?updateReferecnce():null\"\n          (onContainerStepWidgetOpen)=\"onStepWidgetOpenEvent($event)\"\n          (onContainerStepWidgetInit)=\"onStepWidgetInitEvent($event)\"\n          >\n          <ng-content select=\"[step1]\" mat-step-1></ng-content>\n          <ng-content select=\"[step2]\" mat-step-2></ng-content>\n          <ng-content select=\"[step3]\" mat-step-3></ng-content>\n          <ng-content select=\"[step4]\" mat-step-4></ng-content>\n          <ng-content select=\"[step5]\" mat-step-5></ng-content>\n          <ng-content select=\"[step6]\" mat-step-6></ng-content>\n          <ng-content select=\"[step7]\" mat-step-7></ng-content>\n          <ng-content select=\"[step8]\" mat-step-8></ng-content>\n          <ng-content select=\"[step9]\" mat-step-9></ng-content>\n          <ng-content select=\"[step10]\" mat-step-10></ng-content>\n          <!-- <ng-content select=\"[step10]\" step10></ng-content> -->\n          <ng-content select=\"[step11]\" mat-step-11></ng-content>\n          <ng-content select=\"[step12]\" mat-step-12></ng-content>\n          <ng-content select=\"[step13]\" mat-step-13></ng-content>\n          <ng-content select=\"[step14]\" mat-step-14></ng-content>\n          <ng-content select=\"[step15]\" mat-step-15></ng-content>\n          <ng-content select=\"[step16]\" mat-step-16></ng-content>\n          <ng-content select=\"[step17]\" mat-step-17></ng-content>\n          <ng-content select=\"[step18]\" mat-step-18></ng-content>\n          <ng-content select=\"[step19]\" mat-step-19></ng-content>\n          <ng-content select=\"[step20]\" mat-step-20></ng-content>\n          <ng-content select=\"[step21]\" mat-step-21></ng-content>\n\t\t  <ng-content select=\"[step22]\" mat-step-22></ng-content>\n\n          <ps-form-step *psStep=\"'step23'\" mat-step-23 [id]=\"id + '_terms'\">\n\n            <ps-complex-terms-and-conditions [options]=\"termsAndConditionsOptions\" [id]=\"id + '_terms_and_conditions'\">\n            </ps-complex-terms-and-conditions>\n          </ps-form-step>\n          <ps-form-step *psStep=\"'step24'\" mat-step-24 [id]=\"id + '_preview'\">\n\n            <ps-complex-preview *ngIf=\"stepper?._steps?.length==(stepper?.selectedIndex+1)\" [options]=\"options\">\n            </ps-complex-preview>\n            <div *ngIf=\"showSendBackReason\" id=\"send_back_preview_reason\">\n              <ps-label-input [id]=\"'lbl_'+ id\" [options]=\"previewLblOptions\" class=\"ps-lbl-preview\">\n              </ps-label-input>\n              <ps-label-input [id]=\"'value_preview_'+ id \" [options]=\"previewValueOptions\" class=\"ps-value-preview\">\n              </ps-label-input>\n            </div>\n          </ps-form-step>\n        </ps-container-stepper>\n      </div>\n    </div>\n  </ng-container>\n  <!--   </ps-complex-menu> -->\n  <!-- <ng-container hiddenSection>\n      <ps-drafts-report></ps-drafts-report>\n    </ng-container> -->\n  <!--   </ps-container-flip> -->\n  <ng-container psFooter>\n    <ng-container *ngIf=\"!hideStepper\">\n      <ng-container *ngIf=\"!stepperOptions.widgetStepper\">\n        <ps-button-cancel class=\"footer-buttons\" [id]=\"id + '_cancel_btn'\"></ps-button-cancel>\n\n        <ps-button-previous class=\"footer-buttons\" #previous [options]=\"previousOptions\"\n          (onClick)=\"onNextAndPrevious(stepper)\" [id]=\"id + '_previous_btn'\" *ngIf=\"stepper?.selectedIndex!=0\">\n        </ps-button-previous>\n\n        <ps-button-next class=\"footer-buttons\" *ngIf=\"stepper?._steps?.length!=(stepper?.selectedIndex+1)\"\n          [id]=\"id + '_next_btn'\" [options]=\"nextOptions\" (onClick)=\"onNextAndPrevious(stepper)\" #next>\n        </ps-button-next>\n      </ng-container>\n\n      <ng-container *ngIf=\"(!stepperOptions.widgetStepper && !(navParam.JBPM && navParam.isAllowApproval) \n        && (!readOnlyMode && navService.isUserLoggedIn && (isMakerAndReportSelected || !isCheckerAndReportSelected))) \n        || (stepperOptions.widgetStepper && containerStepper.showWidgetPopup)\">\n        <ng-container *ngTemplateOutlet=\"saveButton\"></ng-container>\n      </ng-container>\n\n      <ng-container *ngIf=\"stepperOptions.widgetStepper && containerStepper.showWidgetPopup\">\n        <ps-button-save class=\"footer-buttons\" [options]=\"saveAsDraftWidgetOptions\" [id]=\"id + '_widget_save_quit_btn'\"\n          (onClick)=\"containerStepper.dismissPopover(true)\">\n        </ps-button-save>\n      </ng-container>\n\n\n      <ng-container *ngIf=\"!stepperOptions.widgetStepper\">\n        <ps-button-approve class=\"footer-buttons\"\n          *ngIf=\"((isCheckerAndReportSelected && !isDraft && this.readOnlyMode) || (navParam.JBPM && navParam.isAllowApproval))\"\n          [options]=\"approveOptions\" id=\"step_approve\" (onClick)=\"afterSubmitAction($event)\">\n        </ps-button-approve>\n\n        <ps-button-reject class=\"footer-buttons\"\n          *ngIf=\"((isCheckerAndReportSelected && !isDraft && this.readOnlyMode) || (navParam.JBPM && navParam.isAllowApproval))\"\n          [options]=\"rejectOptions\" id=\"stepper_reject\">\n        </ps-button-reject>\n\n        <ps-button-send-back class=\"footer-buttons\"\n          *ngIf=\"isCorporate && ((isCheckerAndReportSelected && !isDraft && this.readOnlyMode) || (navParam.JBPM && navParam.isAllowApproval))\"\n          [options]=\"sendBackOptions\" id=\"stepper_sendt_back\">\n        </ps-button-send-back>\n\n        <ng-container\n          *ngIf=\"!(navParam.JBPM && navParam.isAllowApproval) && (!readOnlyMode && (stepper?._steps?.length==(stepper?.selectedIndex+1)) && (isMakerAndReportSelected || !isCheckerAndReportSelected))\">\n          <ng-container *ngTemplateOutlet=\"submitButton\"></ng-container>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n  <ps-button-fab-list *ngIf=\"navParam?.JBPM && navParam?.JBPM?.fabMarkUp\" [options]=\"navParam.JBPM.fabMarkUp\"\n    id=\"fab-jbpm-screen\">\n  </ps-button-fab-list>\n</ps-template-screen>\n\n\n\n<ng-template #saveButton>\n  <ps-button-save class=\"footer-buttons\" [options]=\"saveAsDraftOptions\"\n    [id]=\"!stepperOptions.widgetStepper?id + '_save_btn':id + '_widget_save_btn'\"\n    (onClick)=\"containerStepper.updateAllWidgetsStatus();containerStepper.onWidgetValueChange()\">\n  </ps-button-save>\n</ng-template>\n\n<ng-template #submitButton>\n  <ps-button-submit class=\"footer-buttons stepper-widget-buttons\" #submit\n    [options]=\"returnSubmitOptions(containerStepper.totalNumberOfValidControlsRatio)\"\n    [id]=\"!stepperOptions.widgetStepper?id + '_submit_btn':id + '_widget_save_btn'\"\n    (onClick)=\"afterSubmitAction($event)\">\n  </ps-button-submit>\n</ng-template>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=0-es5.js.map