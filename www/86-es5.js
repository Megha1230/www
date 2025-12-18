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

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86], {
    /***/
    "2O+z":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/e-statement-request/e-statement-request.page.ts ***!
      \***********************************************************************/

    /*! exports provided: EStatementRequestPage */

    /***/
    function OZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EStatementRequestPage", function () {
        return EStatementRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_e_statement_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./e-statement-request.page.html */
      "rFaf");
      /* harmony import */


      var _e_statement_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./e-statement-request.page.scss */
      "9vL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
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


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var EStatementRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function EStatementRequestPage(commonService, logger, navService) {
          var _this;

          _classCallCheck(this, EStatementRequestPage);

          _this = _callSuper(this, EStatementRequestPage);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.navService = navService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.eStatementRequestVO = {};
          _this.stepperOptions = {
            stepperName: 'e_statement_request_key',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            // schedulerStepIndex: 0,
            namesofSteps: ['e_statement_request_key'],
            group: _this.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.eStatementRequestEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.eStatementRequestVO
          };
          _this.accountDetailsOptions = {
            isExpandable: true,
            labelKey: 'account_details_key',
            expanded: true
          };
          _this.emailOptions = {
            labelKey: 'send_to_email_address_key',
            placeHolder: 'send_to_email_address_key',
            fcName: 'email',
            group: _this.formGroup
          };
          _this.statementFormatOptions = {
            group: _this.formGroup,
            fcName: 'fileFormat'
          };
          _this.additionalCommentsOptions = {
            labelKey: 'additional_comments_key',
            placeHolder: 'enter_additional_comments_key',
            rows: '3',
            cols: '10',
            fcName: 'additionalComments',
            group: _this.formGroup
          };
          _this.panelPeriodicityOptions = {
            isExpandable: true,
            labelKey: 'periodicity_details_key',
            expanded: true
          };
          _this.schedulerOptions = {
            fcName: 'psScheduler',
            group: _this.formGroup,
            periodaicityInputCountOptions: {
              fcName: 'noOfPayments',
              labelKey: 'no_of_occurences_key'
            },
            requestObject: _this.eStatementRequestVO
          };
          _this.hideDates = true;
          _this.lookupDetails = {
            singleLookup: true,
            labelKey: 'account_name_key',
            group: _this.formGroup
          };
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          return _this;
        }

        _inherits(EStatementRequestPage, _omni_base_omni_base_);

        return _createClass(EStatementRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(EStatementRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.commonProv.copyObject(this.eStatementRequestVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
            delete this.eStatementRequestVO['key'];
            this.populateAccountsMap();
            delete this.stepperOptions.requestObject.key;
            this.stepperOptions.schedulerStepIndex = 0;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(EStatementRequestPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.schedulerOptions.periodaicityInputCountOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.additionalCommentsOptions.fcName], 0);

            if (this.eStatementRequestVO[this.emailOptions.fcName] === undefined) {
              this.userInformation = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].USERINFO);

              if (this.userInformation.customerInfoCO) {
                this.eStatementRequestVO[this.emailOptions.fcName] = this.userInformation.customerInfoCO.coreEmail ? this.userInformation.customerInfoCO.coreEmail : '';
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {//  this.stepperOptions.schedulerStepIndex = 0;
          }
        }, {
          key: "onChangeSchedule",
          value: function onChangeSchedule(value) {
            var stateDay;

            if (value !== undefined) {
              if (value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SINGLE_FUTURE_DATE || value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RECURRING_WEEKLY) {
                stateDay = value.startDate.getDay() + 1;

                if (value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SINGLE_FUTURE_DATE) {
                  this.eStatementRequestVO['submitType'] = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SINGLE_FUTURE_DATE_SUBMIT_TYPE;
                } else {
                  stateDay = value.startDate.getDate();
                  this.eStatementRequestVO['submitType'] = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].WEEKLY_SUBMIT_TYPE;
                }
              }

              if (value.priodicityBy === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RECURRING_MONTHLY) {
                stateDay = value.startDate.getDate();
                this.eStatementRequestVO['submitType'] = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].MONTHLY_SUBMIT_TYPE;
              }
            }

            this.eStatementRequestVO['day'] = stateDay;
          }
        }, {
          key: "populateAccountsMap",
          value: function populateAccountsMap() {
            var accountNumberMap = {};
            var accountBalanceMap = {};
            var investMentCapitalMap = {};
            var profitRateMap = {};
            var tenorMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            accountNumberMap = {
              key: 'formattedAccount',
              value: '--- --- --- ---',
              isEdit: false
            };
            accountBalanceMap = {
              key: 'balance',
              value: '0.0',
              isEdit: false
            };
            investMentCapitalMap = {
              key: 'investmentCapital',
              value: '0',
              isEdit: false
            };
            profitRateMap = {
              key: 'profitRate',
              value: '0',
              isEdit: false
            };
            tenorMap = {
              key: 'tenor',
              value: '0',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'generalLedgerBriefNameEng',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'briefName',
              isEdit: true,
              formGroupMap: {
                placeHolder: 'enter_account_nick',
                fcName: 'briefName'
              }
            };
            this.labelValuesMap.set('account_key', accountNumberMap);
            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
            this.requestMap.set('nickNameNumber', 'key');
            this.requestMap.set('oldNickName', 'briefName');
            this.editRequestMap.set('newNickName', 'briefName');
            this.editRequestMap.set('type', 'A');
            this.lookupDetails.fcName = 'fromAccount';
            this.lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
            this.lookupDetails.labelsValueMap = this.labelValuesMap;
            this.lookupDetails.headerMap = this.headerMap;
            this.lookupDetails.formGroup = this.stepperOptions.group;
            this.lookupDetails.balanceMapping = this.balanceMapping();
            this.lookupDetails.isEditable = false;
            this.lookupDetails.requestMap = this.requestMap;
            this.lookupDetails.editRequestMap = this.editRequestMap;
            this.lookupDetails.actionDetailsOptions = [];
            this.lookupDetails.statementOptions = {};
            this.accountCardItem = this.eStatementRequestVO;
          }
        }, {
          key: "balanceMapping",
          value: function balanceMapping() {
            var balanceMappingList = [{
              key: 'current_balance_key',
              value: 'balance'
            }, {
              key: 'available_balance_key',
              value: 'availableBalance'
            }, {
              key: 'currency_iso_key',
              value: 'currencyBriefNameEnglish'
            }];
            return balanceMappingList;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      EStatementRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]
        }];
      };

      EStatementRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'e-statement-request',
        template: _raw_loader_e_statement_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_e_statement_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]])], EStatementRequestPage);
      /***/
    },

    /***/
    "9vL0":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/e-statement-request/e-statement-request.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function vL0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlLXN0YXRlbWVudC1yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "rFaf":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e-statement-request/e-statement-request.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rFaf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"accountDetailsOptions\" id=\"estatement_panel\">\n\n      <ps-container-lookup-option id=\"from_account\" [options]=\"lookupDetails\" [itemCard]=\"accountCardItem\">\n      </ps-container-lookup-option>\n\n      <ps-input-email [options]=\"emailOptions\"></ps-input-email>\n\n      <ps-lov-statement-format [options]=\"statementFormatOptions\"></ps-lov-statement-format>\n      <ps-keyin-textarea id=\"keyin_textarea\" [options]=\"additionalCommentsOptions\">\n      </ps-keyin-textarea>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelPeriodicityOptions\" id=\"periodicity_panel\">\n      <ps-complex-recurring-scheduler [options]=\"schedulerOptions\" (onPsChange)=\"onChangeSchedule($event)\">\n      </ps-complex-recurring-scheduler>\n    </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=86-es5.js.map