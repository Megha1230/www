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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81], {
    /***/
    "amOZ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/change-maturity-instructions/change-maturity-instructions.page.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ChangeMaturityInstructionsPage */

    /***/
    function amOZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangeMaturityInstructionsPage", function () {
        return ChangeMaturityInstructionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_maturity_instructions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-maturity-instructions.page.html */
      "wZzz");
      /* harmony import */


      var _change_maturity_instructions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-maturity-instructions.page.scss */
      "vK8o");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../commonSRC/psPipes/ps-currency/ps-currency.pipe */
      "EIUR");

      var ChangeMaturityInstructionsPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function ChangeMaturityInstructionsPage(commonProv, navService, loggerP, eventEmitterService, datePipe, omniPull) {
          var _this;

          _classCallCheck(this, ChangeMaturityInstructionsPage);

          _this = _callSuper(this, ChangeMaturityInstructionsPage);
          _this.commonProv = commonProv;
          _this.navService = navService;
          _this.loggerP = loggerP;
          _this.eventEmitterService = eventEmitterService;
          _this.datePipe = datePipe;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
          _this.changeMaturityInstructionsVO = {};
          _this.stepperOptions = {
            isHorizontalStepper: true,
            requestObject: _this.changeMaturityInstructionsVO,
            numberOfSteps: 1,
            namesofSteps: ['change_maturity_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.updateMaturityInstructions,
              group: _this.formGroup,
              //Mohanad - AZDB-4356 - 02102024
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.checkProfitAccount());
                  });
                },
                executionClass: _this,
                params: [_this]
              },
              //End
              postCallFunction: {
                func: function func(response) {
                  var _this3 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this3.executionClass.serviceRes(response));
                  });
                },
                params: [_this],
                executionClass: _this
              }
            }
          };
          _this.panelOptionsStep1 = {
            isExpandable: true,
            labelKey: 'maturity_instructions_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'account_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.psCurrency = new _commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_15__["PsCurrencyPipe"]();
          _this.generalLabelValuesMap = new Map();
          _this.generalHeaderMap = new Map();
          _this.termsLabelValuesMap = new Map();
          _this.termsHeaderMap = new Map();
          _this.enableCifBranch = false;
          _this.enablePeriodicity = false;
          _this.accountTypesOptions = {
            accountTypesOptions: {
              allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].AllowedFixedMaturityAccountsTypes,
              accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACC_TYPE_T,
              group: _this.formGroup,
              fcName: 'accountTypes'
            },
            periodicity: {
              group: _this.formGroup,
              fcName: 'periodiCity'
            },
            minimumBalance: {
              group: _this.formGroup,
              fcName: 'minBalance'
            },
            group: _this.formGroup,
            requestObject: _this.changeMaturityInstructionsVO
          };
          _this.psComplexAmountOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'currency_key',
              group: _this.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'opening_balance_key',
              placeHolder: 'enter_opening_balance_key',
              fcName: 'inputAmount',
              group: _this.formGroup,
              type: 'amount',
              decimalPoints: 3
            }
          };
          _this.mainOptions = {
            toggleOptions: {
              labelKey: 'renew_key',
              placeHolder: 'renew_key',
              group: _this.formGroup,
              fcName: 'renew',
              psClass: 'toggleColor'
            },
            toggleProfitOptions: {
              labelKey: 'Post_Profit_to_Same_Account_key',
              placeHolder: 'Post_Profit_to_Same_Account_key',
              group: _this.formGroup,
              fcName: 'renewWithSame'
            }
          };
          _this.accountListOptions = {
            group: _this.formGroup,
            fcName: 'account',
            isEditable: false,
            requestObject: _this.changeMaturityInstructionsVO
          };
          _this.maturityTransferOptions = {
            labelKey: 'on_maturity_transfer_balance_to_key',
            placeHolder: 'select_on_maturity_transfer_balance_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'maturityAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.changeMaturityInstructionsVO
          };
          _this.profitAccOptions = {
            labelKey: 'post_profit_to_key',
            placeHolder: 'select_post_profit_to_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'profitAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this.changeMaturityInstructionsVO
          };
          return _this;
        } // edited by Marina jira-518 to remove the account lookup and have the account card like other edit screens


        _inherits(ChangeMaturityInstructionsPage, _omni_base_omni_base_);

        return _createClass(ChangeMaturityInstructionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(ChangeMaturityInstructionsPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
            this.termAccount = this.navService.getAllParams() ? this.navService.getAllParams() : {};
            this.commonProv.copyObject(this.changeMaturityInstructionsVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
            this.accountListOptions.listOfOptions = [];
            this.accountListOptions.listOfOptions.push(this.changeMaturityInstructionsVO);
            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
              branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : ''
            }, false, true);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            var _a; //added by ghada, AZDB-4356 to send selected Account Info as object on submit


            this.changeMaturityInstructionsVO['fromAccount'] = Object.assign({}, this.changeMaturityInstructionsVO);
            setTimeout(function () {
              _this4.changeMaturityInstructionsVO[_this4.accountTypesOptions.accountTypesOptions.fcName] = _this4.changeMaturityInstructionsVO.accGl;
              _this4.changeMaturityInstructionsVO[_this4.psComplexAmountOptions.currenciesOptions.fcName] = _this4.changeMaturityInstructionsVO.currency;
            }, 300);

            if ((_a = this.navService.getAllParams()) === null || _a === void 0 ? void 0 : _a.MaturityInfo) {
              this.commonProv.copyObject(this.changeMaturityInstructionsVO, this.navService.getAllParams().MaturityInfo);
              this.renewAccount = this.changeMaturityInstructionsVO.renew;
              this.postProfitAccount = this.renewAccount ? this.changeMaturityInstructionsVO.renewWithSame : false;
              this.setMaturityTogglesValues();
              delete this.changeMaturityInstructionsVO.MaturityInfo;
            }
          }
        }, {
          key: "serviceRes",
          value: function serviceRes(res) {
            this.commonProv.logger.log(res);
          }
        }, {
          key: "onChange",
          value: function onChange(values) {
            var _a, _b;

            if (values.newValue == false) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.profitAccOptions.fcName], 0);
              (_a = this.profitAccountRef) === null || _a === void 0 ? void 0 : _a.reset();
              this.profitAccOptions = Object.assign({}, this.profitAccOptions); //Force Object to be init to call ngOnChanges
            } else {
              (_b = this.maturitrytransferRef) === null || _b === void 0 ? void 0 : _b.reset(); //ADDED BY MICHEL IN ORDER TO RESET THE OLDVALUE OF THE "renewWithSame" TOGGLE IN ORDER TO RE-TRIGGER THE onProfitChange METHOD TO Reapply the visibility customization after "RENEW" is enabled for the second time

              if (this.mainOptions.toggleProfitOptions.group.controls[this.mainOptions.toggleProfitOptions.fcName]) {
                this.mainOptions.toggleProfitOptions.group.controls[this.mainOptions.toggleProfitOptions.fcName]['oldValue'] = null;
              }

              this.changeMaturityInstructionsVO[this.mainOptions.toggleProfitOptions.fcName] = false;
            }

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.mainOptions.toggleProfitOptions.fcName], values.newValue == false ? 0 : 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.maturityTransferOptions.fcName], values.newValue == false ? 1 : 0); // this.changeMaturityInstructionsVO[this.mainOptions.toggleOptions.fcName] = values.newValue;//Force renew Value to new value
          }
        }, {
          key: "onProfitChange",
          value: function onProfitChange(values1) {
            var _a;

            if (values1.newValue == false) {
              this.changeMaturityInstructionsVO[this.mainOptions.toggleOptions.fcName] = true;
            } else {
              (_a = this.profitAccountRef) === null || _a === void 0 ? void 0 : _a.reset();
            }

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.profitAccOptions.fcName], values1.newValue == false ? 1 : 0);
          }
        }, {
          key: "setMaturityTogglesValues",
          value: function setMaturityTogglesValues() {
            this.changeMaturityInstructionsVO[this.mainOptions.toggleOptions.fcName] = this.renewAccount;
            this.changeMaturityInstructionsVO[this.mainOptions.toggleProfitOptions.fcName] = this.renewAccount ? this.postProfitAccount : undefined;
          } //Mohanad - AZDB-4356 - 02102024

        }, {
          key: "checkProfitAccount",
          value: function checkProfitAccount() {
            var isRenewed = this.stepperOptions.requestObject[this.mainOptions.toggleOptions.fcName] === true || this.stepperOptions.requestObject[this.mainOptions.toggleOptions.fcName] === "true";
            var isRenewedWithSame = this.stepperOptions.requestObject[this.mainOptions.toggleProfitOptions.fcName] === true || this.stepperOptions.requestObject[this.mainOptions.toggleProfitOptions.fcName] === "true";

            if (isRenewed && isRenewedWithSame || !isRenewed && !isRenewedWithSame) {
              this.commonProv.setValInsideNestedObj(this.profitAccOptions.fcName, this.termAccount, this.stepperOptions.requestObject);
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      ChangeMaturityInstructionsPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }];
      };

      ChangeMaturityInstructionsPage.propDecorators = {
        maturitrytransferRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['maturitrytransferRef']
        }],
        profitAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['profitAccountRef']
        }]
      };
      ChangeMaturityInstructionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-change-maturity-instructions',
        template: _raw_loader_change_maturity_instructions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_maturity_instructions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]])], ChangeMaturityInstructionsPage);
      /***/
    },

    /***/
    "vK8o":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/change-maturity-instructions/change-maturity-instructions.page.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function vK8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtbWF0dXJpdHktaW5zdHJ1Y3Rpb25zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wZzz":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-maturity-instructions/change-maturity-instructions.page.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wZzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\">\n  <ps-form-step step1>\n\n    <ps-container-panel [options]=\"panelOptionsStep2\" id=\"account_details_panel\">\n      <ps-accounts-list id=\"account_details\" [options]=\"accountListOptions\"\n        *ngIf=\"accountListOptions?.listOfOptions?.length>0\"></ps-accounts-list>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionsStep1\" id=\"change_maturity_panel\">\n\n      <ps-select-toggle *ngIf=\"renewAccount !== undefined\" [id]=\"'accOpenFMid'\" [options]=\"mainOptions.toggleOptions\" (onPsChange)=\"onChange($event)\"\n        class=\"ps-toggle-acc-open fixed-maturity-account-toggle\">\n      </ps-select-toggle>\n\n\n      <ps-lookup-own-accounts #maturitrytransferRef id=\"'maturitrytransfer'+ id\" [options]=\"maturityTransferOptions\">\n      </ps-lookup-own-accounts>\n\n\n      <ps-select-toggle *ngIf=\"postProfitAccount !== undefined\" [id]=\"'accprofitFMid'\" [options]=\"mainOptions.toggleProfitOptions\"\n        (onPsChange)=\"onProfitChange($event)\" class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n\n      <div>\n        <ps-lookup-own-accounts #profitAccountRef id=\"' profitAccount'+ id\"\n          [options]=\"profitAccOptions\"></ps-lookup-own-accounts>\n      </div>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=81-es5.js.map