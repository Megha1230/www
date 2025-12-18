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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69], {
    /***/
    "3t/l":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/hard-copy-statement-request/hard-copy-statement-request.page.ts ***!
      \***************************************************************************************/

    /*! exports provided: HardCopyStatementRequestPage */

    /***/
    function t_l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HardCopyStatementRequestPage", function () {
        return HardCopyStatementRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_hard_copy_statement_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./hard-copy-statement-request.page.html */
      "aOjt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var HardCopyStatementRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function HardCopyStatementRequestPage(logger, omniPull, navService, eventEmitterService) {
          var _this;

          _classCallCheck(this, HardCopyStatementRequestPage);

          _this = _callSuper(this, HardCopyStatementRequestPage);
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.navService = navService;
          _this.eventEmitterService = eventEmitterService;
          _this.HardCopyRequestVO = {};
          _this.filterDate = {};
          _this.lookupDetails = {
            singleLookup: true,
            labelKey: 'account_name_key'
          };
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          _this.sysParamScreenDispList = new Map(); //object used for storing customization values from OADM

          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
          _this.options = {
            stepperName: 'hard_copy_request_stepper',
            numberOfSteps: 2,
            group: _this.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonSettings"].serviceUrl.commonSubmitAction,
              group: _this.formGroup,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.updateAccountVO(response));
                  });
                },
                executionClass: _this,
                params: [_this]
              }
            },
            requestObject: _this.HardCopyRequestVO,
            isHorizontalStepper: true,
            namesofSteps: ['hard_copy_statement_step_1', 'map_hard_copy_statement_step_2']
          };
          _this.panelOptions1 = {
            isExpandable: true,
            labelKey: 'account_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions2 = {
            isExpandable: true,
            labelKey: 'statement_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions3 = {
            isExpandable: true,
            labelKey: 'collection_delivery_key',
            iconName: 'box',
            expanded: true
          };
          _this.panelOptions4 = {
            isExpandable: true,
            labelKey: 'collector_receiver_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions5 = {
            isExpandable: true,
            labelKey: 'attachment_key',
            iconName: 'file',
            expanded: true
          };
          _this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'collection_deliv_branch_key',
            iconName: 'file',
            expanded: true
          };
          _this.additionalCommentsOptions = {
            labelKey: 'additional_comments_key',
            placeHolder: 'enter_additional_comments_key',
            rows: '3',
            cols: '10',
            fcName: 'additionalComments',
            group: _this.formGroup
          };
          _this.deliveryAdditionalCommentsOptions = {
            labelKey: 'delivery_additional_cmnts_key',
            placeHolder: 'enter_delivery_cmnts_key',
            rows: '3',
            cols: '10',
            fcName: 'deliveryAdditionalComments',
            group: _this.formGroup
          };
          _this.collectorNameOptions = {
            group: _this.formGroup,
            fcName: 'collectorName',
            labelKey: 'collector_name_key',
            placeHolder: 'enter_collector_name_key'
          };
          _this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this.formGroup
            },
            idNumberOptions: {
              labelKey: 'id_number_key',
              placeHolder: 'enter_id_number_key',
              fcName: 'idNumber',
              group: _this.formGroup
            },
            dateExpiryOptions: {
              labelKey: 'expiry_date_key',
              placeHolder: 'enter_expiry_date_key',
              fcName: 'idExpiryDate',
              group: _this.formGroup
            },
            countriesOptions: {
              placeHolder: 'country_of_issuance_key',
              labelKey: 'country_of_issuance_key',
              fcName: 'idCountryOfIssuance',
              group: _this.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'idIssueDate',
              group: _this.formGroup
            }
          };
          _this.collectedByCifOptions = {
            labelKey: 'collecting_toggle_message_key',
            group: _this.formGroup,
            fcName: 'isAmountCollectedByCif',
            psClass: 'toggleColor'
          };
          _this.fileUploadOptions = {
            multiple: false,
            fcName: 'uploadedFiles',
            uploadIconName: 'attach',
            group: _this.formGroup
          };
          _this.timeDeliveryOptions = {
            fromTime: {
              fcName: 'deliveryTimeFrom',
              group: _this.formGroup,
              labelKey: 'from_time_key',
              placeHolder: 'select_from_time_key'
            },
            toTime: {
              fcName: 'deliveryTimeTo',
              group: _this.formGroup,
              labelKey: 'to_time_key',
              placeHolder: 'select_to_time_key'
            },
            group: _this.formGroup
          };
          _this.deliveryAddressDetails = {
            collectionModeOptions: {
              group: _this.formGroup,
              fcName: 'collectionMode'
            },
            branchLocationOptions: {
              fcName: 'mapAtmBranchesDropdown',
              group: _this.formGroup
            },
            homeAddressOptions: {
              placeHolder: 'home_address_key',
              labelKey: 'home_address_key',
              group: _this.formGroup,
              fcName: 'deliveryHomeAddress',
              requestVO: _this.HardCopyRequestVO
            },
            workAddressOptions: {
              placeHolder: 'work_address_key',
              labelKey: 'work_address_key',
              group: _this.formGroup,
              fcName: 'deliveryWorkAddress',
              requestVO: _this.HardCopyRequestVO
            },
            otherAddressOptions: {
              placeHolder: 'enter_address_key',
              labelKey: 'other_address_key',
              group: _this.formGroup,
              fcName: 'deliveryOtherAddress'
            },
            cifBranchChecking: false
          };
          _this.deliveryDateOptions = {
            labelKey: 'delivery_date_key',
            placeHolder: 'select_delivery_date_key',
            group: _this.formGroup,
            fcName: 'deliveryDate'
          };
          _this.mapAtmBranchesOptions = {
            group: _this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
              labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].RequestBranch,
            requestVO: _this.HardCopyRequestVO
          };
          return _this;
        }

        _inherits(HardCopyStatementRequestPage, _omni_base_omni_base_);

        return _createClass(HardCopyStatementRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(HardCopyStatementRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.sysParamScreenDispList = this.commonProv.initialScreenDisplayParams.get(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonSettings"].oper_ID);
            this.commonProv.copyObject(this.HardCopyRequestVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {}, true, false);
            this.hideMapStep();
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.options.namesofSteps[1]], 0);

            if (!this.HardCopyRequestVO || this.HardCopyRequestVO['isAmountCollectedByCif'] == undefined) {
              this.HardCopyRequestVO['isAmountCollectedByCif'] = true;
            }

            var param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].preLoginResponse).parameters;
            var defaultFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
            this.filterDate = {
              fromDate: {
                group: this.formGroup,
                fcName: 'fromDate',
                displayFormat: defaultFormat,
                placeHolder: 'from_date_key'
              },
              toDate: {
                group: this.formGroup,
                fcName: 'toDate',
                displayFormat: defaultFormat,
                placeHolder: 'to_date_key'
              }
            };
            this.populateAccountsMap();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(HardCopyStatementRequestPage, "ionViewDidEnter", this, 3)([]); // toggle button by default enabled


            this.commonProv.setValInsideNestedObj(this.collectedByCifOptions.fcName, true, this.HardCopyRequestVO);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.collectorNameOptions.fcName], 0, true);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.collectedByCifOptions.fcName], 0, true);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexIdDetailsOptions.idNumberOptions.fcName], 0, true);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 0, true);
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
        }, {
          key: "populateAccountsMap",
          value: function populateAccountsMap() {
            var accountNumberMap = {};
            var accountBalanceMap = {};
            var investMentCapitalMap = {};
            var profitRateMap = {};
            var tenorMap = {};
            var maturityDateMap = {};
            var dividendsPaidMap = {};
            var accruedDividendsMap = {};
            var renewMap = {};
            var renewWithSameMap = {};
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
            maturityDateMap = {
              key: 'maturityDate',
              value: '0',
              isEdit: false
            };
            dividendsPaidMap = {
              key: 'dividendsPaid',
              value: '0',
              isEdit: false
            };
            accruedDividendsMap = {
              key: 'accruedDividends',
              value: '0',
              isEdit: false
            };
            renewMap = {
              key: 'renew',
              value: '0',
              isEdit: false
            };
            renewWithSameMap = {
              key: 'renewWithSame',
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

            if (this.HardCopyRequestVO.isFMA && this.commonProv.getPageByOperId(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].MATURITY_UPDATE_OPER_ID) !== undefined) {
              this.labelValuesMap.set('investment_capital_key', investMentCapitalMap);
              this.labelValuesMap.set('profit_rate_key', profitRateMap);
              this.labelValuesMap.set('tenor_key', tenorMap);
              this.labelValuesMap.set('maturity_date_key', maturityDateMap);
              this.labelValuesMap.set('dividends_paid_key', dividendsPaidMap);
              this.labelValuesMap.set('accrued_dividends_key', accruedDividendsMap);
              this.labelValuesMap.set('renew_key', renewMap);
              this.labelValuesMap.set('renew_new_balance_within_same_account_key', renewWithSameMap);
            }

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
            this.lookupDetails.formGroup = this.options.group;
            this.lookupDetails.balanceMapping = this.balanceMapping();
            this.lookupDetails.isEditable = false;
            this.lookupDetails.requestMap = this.requestMap;
            this.lookupDetails.editRequestMap = this.editRequestMap;
            this.lookupDetails.actionDetailsOptions = [];
            this.lookupDetails.statementOptions = {};
            this.accountCardItem = this.HardCopyRequestVO;
          }
        }, {
          key: "hideMapStep",
          value: function hideMapStep() {
            var branchLocatorStepperName = this.options.namesofSteps[1];
            var modeOfCollection = this.HardCopyRequestVO ? this.HardCopyRequestVO[this.deliveryAddressDetails.collectionModeOptions.fcName] : {};

            if (modeOfCollection && (modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === undefined) {
              //  id: 1260745 -  Details :Updated by neethu  - Date:01/10/2021 - Desc:Customization should be applied based on the  customization values from OADM,so before applying customization to map_hard_copy_statement_step_2 need to check the customization value from OADM also 
              if (!(this.sysParamScreenDispList && this.sysParamScreenDispList.get(branchLocatorStepperName) && this.sysParamScreenDispList.get(branchLocatorStepperName).IS_VISIBLE == 0)) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [branchLocatorStepperName], 1, true);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapAtmBranches'], 1, true);
              }
            } else if (modeOfCollection !== undefined) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_VISIBLE, [branchLocatorStepperName], 0, true);
            }
          }
        }, {
          key: "toggleChanged",
          value: function toggleChanged(event) {
            if (event.newValue == true) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.collectorNameOptions.fcName], 0, true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.collectorNameOptions.fcName], 0, true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexIdDetailsOptions.idNumberOptions.fcName], 0, true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 0, true);
            } else {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.collectorNameOptions.fcName], 1, true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.collectorNameOptions.fcName], 1, true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexIdDetailsOptions.idNumberOptions.fcName], 1, true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 1, true);
            }
          }
        }, {
          key: "updateAccountVO",
          value: function updateAccountVO(data) {
            this.HardCopyRequestVO['fromAccount'] = Object.assign({}, this.HardCopyRequestVO);
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      HardCopyStatementRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"]
        }];
      };

      HardCopyStatementRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'hard-copy-statement-request',
        template: _raw_loader_hard_copy_statement_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"]])], HardCopyStatementRequestPage);
      /***/
    },

    /***/
    "aOjt":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hard-copy-statement-request/hard-copy-statement-request.page.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aOjt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"options\" [id]=\"options.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"options.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1\" id=\"hard-request-panel-1\">\n\n      <ps-container-lookup-option *ngIf=\"accountCardItem\" id=\"from_account\" [options]=\"lookupDetails\"\n        [itemCard]=\"accountCardItem\">\n      </ps-container-lookup-option>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2\" id=\"hard-request-panel-2\">\n      <ps-complex-date-filter id=\"filterDate\" [options]=\"filterDate\"></ps-complex-date-filter>\n\n      <ps-keyin-textarea id=\"keyin_textarea\" [options]=\"additionalCommentsOptions\">\n      </ps-keyin-textarea>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3\" id=\"hard-request-panel-3\">\n      <ps-complex-location (parentFun)=\"hideMapStep()\" [options]=\"deliveryAddressDetails\"></ps-complex-location>\n\n      <ps-date-day-month-year-future id=\"delivery-Date\" [options]=\"deliveryDateOptions\">\n      </ps-date-day-month-year-future>\n      <ps-complex-time-range [options]=\"timeDeliveryOptions\"></ps-complex-time-range>\n\n      <ps-keyin-textarea id=\"delivery_textarea\" [options]=\"deliveryAdditionalCommentsOptions\">\n      </ps-keyin-textarea>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions4\" id=\"hard-request-panel-4\">\n      <ps-select-toggle id=\"collectedByCif\" [options]=\"collectedByCifOptions\" (onPsChange)=\"toggleChanged($event)\">\n      </ps-select-toggle>\n      <ng-container *ngIf=\"!HardCopyRequestVO['isAmountCollectedByCif']\">\n        <ps-input-varchar [options]=\"collectorNameOptions\"></ps-input-varchar>\n        <ps-complex-id-details id=\"complex_id_details\" [options]=\"complexIdDetailsOptions\">\n        </ps-complex-id-details>\n      </ng-container>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions5\" id=\"hard-request-panel-5\">\n      <ps-file-upload-bs id=\"ps-file-upload\" [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n    </ps-container-panel>\n\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"options.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "gKqT":
    /*!***************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
      \***************************************************/

    /*! exports provided: OmniBasePage */

    /***/
    function gKqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OmniBasePage", function () {
        return OmniBasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./omni-base.page.html */
      "mVVo");
      /* harmony import */


      var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./omni-base.page.scss */
      "s2T5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/customization/psServices/util/common-cust-utils */
      "oS+F");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");

      var OmniBasePage = /*#__PURE__*/function () {
        function OmniBasePage() {
          _classCallCheck(this, OmniBasePage);

          this.isPageDisabled = false;
          this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
          this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]); // this.getScreenTranslations();
        }

        return _createClass(OmniBasePage, [{
          key: "init",
          value: function init() {
            this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
            this.customizationMap = this.commonProv.returnOperCustomization();
            var navParams = this.navigationServices.getAllParams();
            var formDisObj = {}; // let oper = PsCommonSettings.oper_ID;
            // PsCommonSettings.currentListOfSteps = {};

            if (navParams && navParams.readOnlypage === true) {
              formDisObj.IS_READONLY = 1; // Modified by Richie for #BUG 1259353

              if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
              }
            } else if (this.customizationMap) {
              formDisObj.IS_READONLY = 0;
              this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            } // End Richie
            // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif


            this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];

            if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
              this.getScreenTranslations(this.currentOperID);
            } // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif

          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.viewDidEnter();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.viewWillLeave();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.viewWillEnter();
          }
        }, {
          key: "viewWillEnter",
          value: function viewWillEnter() {}
        }, {
          key: "disableForm",
          value: function disableForm(formGroup) {
            var _this3 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
              }
            }
          }
        }, {
          key: "viewDidEnter",
          value: function viewDidEnter() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.dismissLoading();
            this.disableForm(this.baseFormGroup);
            src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
            this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
          }
        }, {
          key: "viewWillLeave",
          value: function viewWillLeave() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              willLeave: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              willLeave: true
            });
          } // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
          // added after all the changeEvents are finished to disable the form 

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this4 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this4.disableForm(_this4.baseFormGroup);

                _this4.isPageDisabled = true;
              }, 300);
            }
          } // AZDB-7529 - Start - AMANAOI250035

        }, {
          key: "getScreenTranslations",
          value: function getScreenTranslations(screenOperId) {
            var operationId = screenOperId ? screenOperId : 2222;
            var activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';

            if (operationId && activeLanguage) {
              this.commonProv.language.getOperTranslation(activeLanguage, operationId);
            }
          }
        }]);
      }();

      OmniBasePage.ctorParameters = function () {
        return [];
      };

      OmniBasePage.propDecorators = {
        psClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class']
        }]
      };
      OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], OmniBasePage);
      /***/
    },

    /***/
    "mVVo":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mVVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n";
      /***/
    },

    /***/
    "s2T5":
    /*!*****************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function s2T5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=69-es5.js.map