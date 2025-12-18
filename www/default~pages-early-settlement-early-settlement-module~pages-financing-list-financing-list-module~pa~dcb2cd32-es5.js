(function () {
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

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-early-settlement-early-settlement-module~pages-financing-list-financing-list-module~pa~dcb2cd32"], {
    /***/
    "2ery":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ery(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-screen>\n    <ps-action-image class=\"inline-loading-image\" *ngIf=\"!options.disableLoading && spinner\"\n        [options]=\"actionImageOptions\">\n    </ps-action-image>\n    <ng-content>\n    </ng-content>\n    <ng-container psFooter>\n        <ng-content select=[footer]></ng-content>\n        <ps-button-cancel (click)=\"onFooterClick()\" [id]=\"id + 'temp_btn_cancel'\" [options]=\"cancelOptions\">\n        </ps-button-cancel>\n\n    </ng-container>\n</ps-template-screen>";
      /***/
    },

    /***/
    "DTk4":
    /*!***************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function DTk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS12aWV3LnRlbXBsYXRlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "FQ9l":
    /*!********************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: PsTemplateViewModule */

    /***/
    function FQ9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateViewModule", function () {
        return PsTemplateViewModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared.module */
      "rlZq");
      /* harmony import */


      var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-template-screen/ps-template-screen.template.module */
      "63Vm");
      /* harmony import */


      var _ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-template-view.template */
      "RkAu");

      var PsTemplateViewModule = /*#__PURE__*/_createClass(function PsTemplateViewModule() {
        _classCallCheck(this, PsTemplateViewModule);
      });

      PsTemplateViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateScreenPageModule"]],
        declarations: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        exports: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        entryComponents: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsTemplateViewModule);
      /***/
    },

    /***/
    "Joa9":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Joa9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWRlYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "RkAu":
    /*!*************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.ts ***!
      \*************************************************************************************/

    /*! exports provided: PsTemplateView */

    /***/
    function RkAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateView", function () {
        return PsTemplateView;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-template-view.template.html */
      "2ery");
      /* harmony import */


      var _ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-template-view.template.scss */
      "DTk4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../psServices/Event/event.service */
      "r40+");
      /* harmony import */


      var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-template-base/ps-template-base.page */
      "uqA0");

      var PsTemplateView = /*#__PURE__*/function (_ps_template_base_ps_) {
        // End Richie
        function PsTemplateView(events) {
          var _this;

          _classCallCheck(this, PsTemplateView);

          _this = _callSuper(this, PsTemplateView);
          _this.events = events;
          _this.cancelOptions = {
            labelKey: 'cancel_key',
            group: _this.options.group
          };
          _this.spinner = false;
          _this.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          }; // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument

          _this.reqStartEvent = events.subscribe('network:request:started', function (time) {
            _this.spinner = true;
          });
          _this.reqCompletEvent = events.subscribe('network:request:completed', function (time) {
            _this.spinner = false;
          });
          return _this;
        }

        _inherits(PsTemplateView, _ps_template_base_ps_);

        return _createClass(PsTemplateView, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.options.requestObject = this.options.requestObject ? this.options.requestObject : {};

            if (this.options.group) {
              this.commonProv.setFormData(this.options.group, this.options.requestObject);
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // modified by Richie #TP 1105083
            _superPropGet(PsTemplateView, "ngOnDestroy", this, 3)([]);

            if (this.reqStartEvent) {
              this.reqStartEvent.unsubscribe();
            }

            if (this.reqCompletEvent) {
              this.reqCompletEvent.unsubscribe();
            }
          }
        }]);
      }(_ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__["PsTemplateBasePage"]);

      PsTemplateView.ctorParameters = function () {
        return [{
          type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"]
        }];
      };

      PsTemplateView.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsTemplateView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-view',
        template: _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"]])], PsTemplateView);
      /***/
    },

    /***/
    "W2ay":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.module.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: PsComplexDealDetailsModule */

    /***/
    function W2ay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexDealDetailsModule", function () {
        return PsComplexDealDetailsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */
      "yvgy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_complex_deal_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-complex-deal-details.component */
      "qnJ5");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");

      var PsComplexDealDetailsModule = /*#__PURE__*/_createClass(function PsComplexDealDetailsModule() {
        _classCallCheck(this, PsComplexDealDetailsModule);
      });

      PsComplexDealDetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_ps_complex_deal_details_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexDealDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        exports: [_ps_complex_deal_details_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexDealDetailsComponent"]],
        entryComponents: [_ps_complex_deal_details_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexDealDetailsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_1__["PsSelectLookupOptionListComponentModule"]]
      })], PsComplexDealDetailsModule);
      /***/
    },

    /***/
    "qnJ5":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: PsComplexDealDetailsComponent */

    /***/
    function qnJ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexDealDetailsComponent", function () {
        return PsComplexDealDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_deal_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-deal-details.component.html */
      "t3bA");
      /* harmony import */


      var _ps_complex_deal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-deal-details.component.scss */
      "Joa9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsComplexDealDetailsComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsComplexDealDetailsComponent(commonP, loggerC) {
          var _this2;

          _classCallCheck(this, PsComplexDealDetailsComponent);

          _this2 = _callSuper(this, PsComplexDealDetailsComponent, [commonP, loggerC]);
          _this2.commonP = commonP;
          _this2.loggerC = loggerC;
          _this2.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.containerLookUpOptions = {};
          _this2.dealsLabelValuesMap = new Map();
          _this2.dealsHeaderMap = new Map();
          _this2.requestMap = new Map();
          _this2.editRequestMap = new Map();
          _this2.showSingleAccount = false;

          _this2.populateHeaderValueMap();

          return _this2;
        }

        _inherits(PsComplexDealDetailsComponent, _commonSRC_psComponen);

        return _createClass(PsComplexDealDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }

            this.containerLookUpOptions.actionDetailsOptions = [{}];
            this.containerLookUpOptions.statementOptions = {
              buttonIcon: 'facilities',
              redirectUrl: 'deal-statement-report'
            };
          }
        }, {
          key: "getOptionsForCard",
          value: function getOptionsForCard(item) {
            return Object.assign(Object.assign({}, this.containerLookUpOptions), {
              fcName: this.options.fcName + item.dealNbr
            });
          }
        }, {
          key: "trackByDealNumber",
          value: function trackByDealNumber(index, item) {
            var _a;

            return (_a = item === null || item === void 0 ? void 0 : item.dealNbr) !== null && _a !== void 0 ? _a : index;
          }
        }, {
          key: "balanceMapping",
          value: function balanceMapping() {
            var balanceMappingList = [{
              key: 'settled_amount_key',
              value: 'paidAmount'
            }, {
              key: 'outstanding_balance_key',
              value: 'outstandingBalance'
            }];
            return balanceMappingList;
          }
        }, {
          key: "populateHeaderValueMap",
          value: function populateHeaderValueMap() {
            var headerTitleMap = {};
            var subTitleMap = {};
            var nextPaymentDateMap = {};
            var nextPaymentValMap = {};
            var amountMap = {};
            var settledAmountMap = {};
            var maturityDateMap = {};
            var pastDuesMap = {};
            var lastPaymentDateMap = {};
            var lastPaymentAmountMap = {};
            var outstandingBalanceMap = {};
            var noOfRemainingInsMap = {};
            var periodicityPaymentMap = {};
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
              value: '---/--/----'
            };
            pastDuesMap = {
              key: 'pastDues',
              value: '0.0'
            };
            lastPaymentDateMap = {
              key: 'lastPaymentDate',
              value: '---/--/----'
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
                fcName: 'title'
              }
            }; //edited by Marina TP id: #1486410 to fix the issue of nickName doesn't update when edited

            subTitleMap = {
              key: 'subTitle',
              value: 'nickName',
              isEdit: true,
              formGroupMap: {
                placeHolder: 'enter_deal_nick',
                fcName: 'nickName'
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
            this.dealsLabelValuesMap.set('next_payment_amount_key', nextPaymentValMap); // will be used as header to template card in look up details component

            this.dealsHeaderMap.set('title', headerTitleMap);
            this.dealsHeaderMap.set('subTitle', subTitleMap);
            this.requestMap.set('nickNameNumber', 'key');
            this.requestMap.set('oldNickName', 'subTitle');
            this.editRequestMap.set('newNickName', 'subTitle');
            this.editRequestMap.set('type', 'A');
          }
        }, {
          key: "updateCard",
          value: function updateCard(event) {
            if (event && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === event;
              });
              this.options.item = this.options.itemList[0];
              this.showSingleAccount = !this.showSingleAccount;
              this.options.showItemPopUp = !this.options.showItemPopUp; // this.options.showSelectedCard = false;
            }

            this.onClickCard.emit(this.options);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"]);

      PsComplexDealDetailsComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }];
      };

      PsComplexDealDetailsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        itemCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsComplexDealDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-deal-details',
        template: _raw_loader_ps_complex_deal_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_deal_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])], PsComplexDealDetailsComponent);
      /***/
    },

    /***/
    "t3bA":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-deal-details/ps-complex-deal-details.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t3bA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-lookup-option [id]=\"'deals-list-' + id + i\" [options]=\"getOptionsForCard(item)\" *ngFor=\"let item of options.itemList; let i = index; trackBy: trackByDealNumber\" [itemCard]=\"item\"\n    (clickedCard)=\"updateCard($event)\">\n\n</ps-container-lookup-option>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-early-settlement-early-settlement-module~pages-financing-list-financing-list-module~pa~dcb2cd32-es5.js.map