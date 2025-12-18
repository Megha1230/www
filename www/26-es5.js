(function () {
  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

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

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
    /***/
    "Z6pj":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: PsDropdownDenominationComponent */

    /***/
    function Z6pj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownDenominationComponent", function () {
        return PsDropdownDenominationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_denomination_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-denomination.component.html */
      "ozAa");
      /* harmony import */


      var _ps_dropdown_denomination_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-denomination.component.scss */
      "ptKa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownDenominationComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsDropdownDenominationComponent(commonProv, loggerP, omniPull) {
          var _this;

          _classCallCheck(this, PsDropdownDenominationComponent);

          _this = _callSuper(this, PsDropdownDenominationComponent, [commonProv, loggerP]);
          _this.omniPull = omniPull;
          _this.defaultSelectOptions = {
            labelKey: '',
            placeHolder: 'select_denomination_key'
          };
          return _this;
        }

        _inherits(PsDropdownDenominationComponent, _src_app_commonSRC_ps);

        return _createClass(PsDropdownDenominationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
            this.getDenomination();
          }
        }, {
          key: "getDenomination",
          value: function getDenomination() {
            var _this2 = this;

            var paramData = {};
            this.omniPull.returnDenominationList(paramData).then(function (result) {
              _this2.defaultSelectOptions.listOfOptions = [];

              if (result && result.gridModel != null && result.gridModel.length > 0) {
                var _iterator = _createForOfIteratorHelper(result.gridModel),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    var acctype = {
                      itemValue: item.value,
                      description: item.description,
                      selectedObj: item
                    };

                    _this2.defaultSelectOptions.listOfOptions.push(acctype);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _this2.logger.warn(result, 'empty response');
              }
            })["catch"](function (error) {});
          }
        }, {
          key: "onChange",
          value: function onChange(values) {
            this.loggerP.log('onCategory' + values);
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownDenominationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownDenominationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownDenominationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-denomination',
        template: _raw_loader_ps_dropdown_denomination_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_denomination_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownDenominationComponent);
      /***/
    },

    /***/
    "gYxe":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/bulk-cash-request/bulk-cash-request.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function gYxe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWxrLWNhc2gtcmVxdWVzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "ozAa":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ozAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChange($event)\"    (onPsInit)=\"this.onInit($event)\"></ps-select-dropdown>";
      /***/
    },

    /***/
    "ptKa":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component.scss ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ptKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1kZW5vbWluYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "sXM2":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bulk-cash-request/bulk-cash-request.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sXM2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n    <ps-container-panel [options]=\"panelOptionStep1\" id=\"bulk_cash_request_panel1\">\n      <ps-lookup-own-accounts id=\"'fromAccount'\" [options]=\"fromAccOptions\"\n        (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onFromCurrencyChanged)=\"onFromCurrencyChanged($event)\"></ps-complex-exchange>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep5\" id=\"bulk_cash_request_panel5\">\n      <ps-ag-grid [options]=\"denominationGridOptions\"></ps-ag-grid>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep2\" id=\"bulk_cash_request_panel2\">\n      <ps-lov-mode-of-collection id=\"modeOfCollection\" [options]='collectionOptions'\n        (onPsChange)=\"onModeOfCollectioneLov($event)\"></ps-lov-mode-of-collection>\n      <ps-lov-address id=\"address\" [options]='addressOptions' (onPsChange)='onAddressChanged($event)'>\n      </ps-lov-address>\n      <ps-input-free-text *ngIf='showAddress' id=\"addressDetails\" [options]=\"addressDetailsOptions\">\n      </ps-input-free-text>\n\n      <ps-date-day-month-year-future id=\"deliveryDate\" [options]=\"deliveryDateOptions\">\n      </ps-date-day-month-year-future>\n      <ps-complex-time-range [options]='rangeOptions'></ps-complex-time-range>\n      <ps-input-varchar id=\"keyin_textarea\" [options]=\"addCommentsOptions\">\n      </ps-input-varchar>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep3\" id=\"bulk_cash_request_panel3\">\n\n      <ps-select-toggle [id]=\"'receivingAmountToggle'\" [options]=\"toggleOptions\"\n        (onPsChange)=\"onReceivingToggleChange($event)\" class=\"ps-toggle-acc-open-2\">\n      </ps-select-toggle>\n      <div *ngIf=\"showCollectorDetails\">\n        <ps-input-free-text id=\"receiverName\" [options]=\"receiverNameOptions\"></ps-input-free-text>\n\n        <ps-complex-id-details id=\"complex_id_details1\" [options]=\"complexIdDetailsOptions\"\n          (onPsChange)=\"onItemChange($event)\">\n        </ps-complex-id-details>\n      </div>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep4\" id=\"bulk_cash_request_panel4\">\n      <ps-file-upload-bs id=\"ps-complex-file-upload\" [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"bulk_cash_request_panel6\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "tevm":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/bulk-cash-request/bulk-cash-request.page.ts ***!
      \*******************************************************************/

    /*! exports provided: BulkCashRequestPage */

    /***/
    function tevm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BulkCashRequestPage", function () {
        return BulkCashRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bulk_cash_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bulk-cash-request.page.html */
      "sXM2");
      /* harmony import */


      var _bulk_cash_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bulk-cash-request.page.scss */
      "gYxe");
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


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component */
      "Z6pj");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");

      var BulkCashRequestPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function BulkCashRequestPage(commonProv, loggerP, omniPull, datePipe, eventEmitterService, commonService, navService) {
          var _this3;

          _classCallCheck(this, BulkCashRequestPage);

          _this3 = _callSuper(this, BulkCashRequestPage);
          _this3.commonProv = commonProv;
          _this3.loggerP = loggerP;
          _this3.omniPull = omniPull;
          _this3.datePipe = datePipe;
          _this3.eventEmitterService = eventEmitterService;
          _this3.commonService = commonService;
          _this3.navService = navService;
          _this3.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
          _this3.bulkCashRequestVO = {};
          _this3.bulkCashRequestType = '3';
          _this3.stepperOptions = {
            stepperName: 'bulk_cash-request_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['bulk_cash_request_step1', 'bulk_cash_request_step2'],
            group: _this3.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_18__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
              group: _this3.formGroup
            },
            requestObject: _this3.bulkCashRequestVO
          };
          _this3.panelOptionStep1 = {
            isExpandable: true,
            labelKey: 'bulk_cash_request_details_key',
            iconName: 'document',
            expanded: true
          };
          _this3.panelOptionStep2 = {
            isExpandable: true,
            labelKey: 'collection_delivery_details_key',
            iconName: 'document',
            expanded: false
          };
          _this3.panelOptionStep3 = {
            isExpandable: true,
            labelKey: 'receiver_details_key',
            iconName: 'document',
            expanded: false
          };
          _this3.panelOptionStep4 = {
            isExpandable: true,
            labelKey: 'attachments_key',
            iconName: 'document',
            expanded: false
          };
          _this3.panelOptionStep5 = {
            isExpandable: true,
            labelKey: 'preferred_denomination_key',
            iconName: 'document',
            expanded: false
          };
          _this3.denominationGridOptions = {
            fcName: 'denomination',
            group: _this3.formGroup,
            gridOptions: {
              defaultColDef: {
                flex: 1,
                minWidth: 150,
                sortable: true,
                resizable: true
              },
              rowSelection: 'multiple',
              applyPagination: false,
              paginationPageSize: 5,
              cacheBlockSize: 1,
              cacheOverflowSize: 10,
              maxConcurrentDatasourceRequests: 2,
              infiniteInitialRowCount: 500,
              maxBlocksInCache: 200
            },
            enableEdit: true,
            enableDelete: true
          };
          _this3.fromAccOptions = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this3.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this3.bulkCashRequestVO
          };
          _this3.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'exchange_currency_key',
                fcName: 'currency',
                group: _this3.formGroup
              },
              amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                group: _this3.formGroup,
                decimalPoints: 2
              }
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'toCurrency',
                group: _this3.formGroup
              },
              amountOptions: {
                labelKey: 'exchange_amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'toAmount',
                group: _this3.formGroup,
                decimalPoints: 2
              }
            },
            requestObject: _this3.bulkCashRequestVO,
            group: _this3.formGroup
          };
          _this3.addCommentsOptions = {
            labelKey: 'additional_comments_key',
            placeHolder: 'enter_additional_comments_key',
            fcName: 'additionalComments',
            group: _this3.formGroup
          };
          _this3.deliveryDateOptions = {
            labelKey: 'delivery_date_key',
            placeHolder: 'select_delivery_date_key',
            fcName: 'collectionDate',
            group: _this3.formGroup
          };
          _this3.collectionOptions = {
            fcName: 'collectionMode',
            group: _this3.formGroup
          };
          _this3.addressOptions = {
            fcName: 'collectionLocation',
            group: _this3.formGroup
          };
          _this3.toggleOptions = {
            labelKey: 'i_will_be_collecting_receiving_personally_the_amount_key',
            group: _this3.formGroup,
            fcName: 'isAmountCollectedByCif',
            psClass: 'toggleColor'
          };
          _this3.receiverNameOptions = {
            labelKey: 'collector_or_receiver_name_key',
            placeHolder: 'enter_name_key',
            fcName: 'collectorName',
            group: _this3.formGroup
          };
          _this3.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this3.formGroup
            },
            idNumberOptions: {
              labelKey: 'id_number_key',
              placeHolder: 'enter_id_number_key',
              fcName: 'idNumber',
              group: _this3.formGroup
            },
            dateExpiryOptions: {
              labelKey: 'expiry_date_key',
              placeHolder: 'enter_expiry_date_key',
              fcName: 'idExpiryDate',
              group: _this3.formGroup
            },
            countriesOptions: {
              placeHolder: 'country_of_issuance_key',
              labelKey: 'country_of_issuance_key',
              fcName: 'idCountry',
              group: _this3.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'idIssueDate',
              group: _this3.formGroup
            }
          };
          _this3.fileUploadOptions = {
            multiple: true,
            fcName: 'uploadedFiles',
            group: _this3.formGroup
          };
          _this3.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this3.formGroup
          };
          _this3.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'collection_delivery_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this3.addressDetailsOptions = {
            group: _this3.formGroup,
            placeHolder: 'enter_address_details_key',
            labelKey: 'address_details_key',
            fcName: 'collectionLocationDesc'
          };
          _this3.rangeOptions = {
            fromTime: {
              fcName: 'deliveryTimeFrom',
              labelKey: 'from_time_key',
              placeHolder: 'from_time_key',
              group: _this3.formGroup
            },
            toTime: {
              fcName: 'deliveryTimeTo',
              labelKey: 'to_time_key',
              placeHolder: 'to_time_key',
              group: _this3.formGroup
            },
            group: _this3.formGroup
          };
          _this3.showBranch = false;
          _this3.showAddress = false;
          _this3.showCollectorDetails = false;
          return _this3;
        }

        _inherits(BulkCashRequestPage, _src_app_pages_omni_b);

        return _createClass(BulkCashRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(BulkCashRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.commonProv.copyObject(this.bulkCashRequestVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {}); // PBSDB230029 -  Changed By Omar Talaat,Cloned By Makki Jira #363 To set inital Value for request Type to makr the request as Cash request.

            this.bulkCashRequestVO.depositorRequestType = this.bulkCashRequestType; // this.commonProv.copyObject(this.stepperOptions.requestObject, this.bulkCashRequestVO, true, false);

            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].USERINFO);
            this.mapAtmBranchesOptions = {
              group: this.formGroup,
              fcName: 'mapAtmBranches',
              labelKey: 'map_atm_branch_key',
              mapOptions: {
                labelKey: 'map'
              },
              showSegments: false,
              mapTypesInclude: '\'B\'',
              branchIds: '1,3,5',
              parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_8__["CommonBussinessConstant"].AcntOpenBranchesMatAcc,
              requestVO: this.bulkCashRequestVO
            };
            this.denominationGridOptions.columnComponents = [{
              columnNameKey: 'denomination_key',
              propertyName: 'denomination',
              component: src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_7__["PsDropdownDenominationComponent"],
              componentOptions: {
                listOfOptions: []
              },
              componentType: 'select'
            },, {
              columnNameKey: 'no_of_bills_key',
              propertyName: 'noOfBills',
              component: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_11__["PsKeyinInputComponent"],
              componentOptions: {},
              componentType: 'input'
            }];
            this.bulkCashRequestVO[this.toggleOptions.fcName] = true;

            if (this.navService.getAllParams().readOnlypage) {
              this.denominationGridOptions.enableEdit = false;
              this.denominationGridOptions.enableDelete = false;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(BulkCashRequestPage, "ionViewDidEnter", this, 3)([]);

            if (!this.bulkCashRequestVO.collectionMode) {
              this.adjustBranchControlCust(0);
            }

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.addressOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.addCommentsOptions.fcName], 0); //moved by ghada, tp tp1478243, for fixing the issue of 'to currency'being mandatory while it shouldn'n't be for being readonly

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.bulkCashRequestVO);
            }
          }
        }, {
          key: "onFromAccountChange",
          value: function onFromAccountChange(account) {
            var _this4 = this;

            if (account) {
              this.accountCurrency = account.currency;

              if (this.bulkCashRequestVO.currency === undefined) {
                this.complexExchangeOptions.fromAmountOptions.currency = account.currencyBriefNameEnglish;
                this.complexExchangeOptions.fromAmountOptions.currencyCode = account.currency;
                setTimeout(function () {
                  _this4.stepperOptions.requestObject[_this4.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = account.currency;
                }, 1);
              } else {
                this.complexExchangeOptions.fromAmountOptions.currencyCode = this.bulkCashRequestVO.currency;
                setTimeout(function () {
                  _this4.stepperOptions.requestObject[_this4.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = _this4.bulkCashRequestVO.currency;
                }, 1);
                this.onFromCurrencyChanged(this.bulkCashRequestVO.currency);
              }
            }
          }
        }, {
          key: "onModeOfCollectioneLov",
          value: function onModeOfCollectioneLov(event) {
            if (event) {
              if (event.itemValue === '1') {
                //this.showBranch = true;
                this.adjustBranchControlCust(1);
              } else {
                //this.showBranch = false;
                this.adjustBranchControlCust(0);
              }

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_14__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.addressOptions.fcName], event.itemValue === '1' ? 0 : 1);
            }
          }
        }, {
          key: "onAddressChanged",
          value: function onAddressChanged(values) {
            if (values) {
              this.showAddress = true;

              if (values.itemValue === '1') {
                var address = [this.cifInfo.customerInfoCO.streetDetails, this.cifInfo.customerInfoCO.cityName, this.cifInfo.customerInfoCO.country];
                this.bulkCashRequestVO[this.addressDetailsOptions.fcName] = address.filter(function (x) {
                  return x !== undefined;
                }).join(',');
              } else if (values.itemValue === '2') {
                this.formGroup.controls[this.addressDetailsOptions.fcName].reset();
              }
            }
          }
        }, {
          key: "onReceivingToggleChange",
          value: function onReceivingToggleChange(event) {
            if (event && event.newValue === false) {
              this.showCollectorDetails = true;
            } else {
              this.showCollectorDetails = false;
            }
          }
        }, {
          key: "onItemChange",
          value: function onItemChange(type) {}
        }, {
          key: "onFromCurrencyChanged",
          value: function onFromCurrencyChanged(event) {
            var _this5 = this;

            event = event ? event.itemValue ? event.itemValue : event : undefined;
            this.accountCurrency = this.accountCurrency === undefined ? event : this.accountCurrency;

            if (event) {
              if (this.accountCurrency !== undefined && event !== this.accountCurrency) {
                this.complexExchangeOptions.toAmountOptions.currencyCode = this.accountCurrency;
                setTimeout(function () {
                  _this5.stepperOptions.requestObject[_this5.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = _this5.accountCurrency;
                }, 1);
              }
            }
          }
        }, {
          key: "adjustBranchControlCust",
          value: function adjustBranchControlCust(visibility) {
            this.commonService.branchSelectionAndMapControl(visibility, [{
              fcName: this.stepperOptions.namesofSteps[1]
            }, {
              fcName: this.mapAtmBranchesOptions.fcName
            }], true);
            this.commonService.branchSelectionAndMapControl(visibility, [{
              fcName: 'bulk_cash_request_panel6'
            }]);
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_17__["OmniBasePage"]);

      BulkCashRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"]
        }];
      };

      BulkCashRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bulk-cash-request',
        template: _raw_loader_bulk_cash_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bulk_cash_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_16__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_13__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_10__["OmniPullService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_12__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_9__["OmniCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_15__["PsNavigatorService"]])], BulkCashRequestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=26-es5.js.map