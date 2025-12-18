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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27], {
    /***/
    "+FaT":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/cash-and-cheque-collection/cash-and-cheque-collection.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function FaT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNoLWFuZC1jaGVxdWUtY29sbGVjdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Gvut":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/cash-and-cheque-collection/cash-and-cheque-collection.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: CashAndChequeCollectionPage */

    /***/
    function Gvut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashAndChequeCollectionPage", function () {
        return CashAndChequeCollectionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cash_and_cheque_collection_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cash-and-cheque-collection.page.html */
      "eMpa");
      /* harmony import */


      var _cash_and_cheque_collection_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cash-and-cheque-collection.page.scss */
      "+FaT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-denomination/ps-dropdown-denomination.component */
      "Z6pj");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
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


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT"); // import { IOptionsPsInputVarcharExposed } from 'src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.interfaces';


      var CashAndChequeCollectionPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function CashAndChequeCollectionPage(commonProv, loggerP, eventEmitterService, navService) {
          var _this;

          _classCallCheck(this, CashAndChequeCollectionPage);

          _this = _callSuper(this, CashAndChequeCollectionPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.eventEmitterService = eventEmitterService;
          _this.navService = navService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.cashAndChequeCollectionVO = {};
          _this.stepperOptions = {
            stepperName: 'cash_and_cheque_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['cash_cheq_collection_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.accountOpeningEndPoint,
              group: _this.formGroup
            },
            requestObject: _this.cashAndChequeCollectionVO
          };
          _this.panelOptionStep1 = {
            isExpandable: true,
            labelKey: 'depositor_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptionStep2 = {
            isExpandable: true,
            labelKey: 'cash_details_key',
            iconName: 'document',
            expanded: false
          };
          _this.panelOptionStep3 = {
            isExpandable: true,
            labelKey: 'deposit_denomination_key',
            iconName: 'document',
            expanded: false
          };
          _this.panelOptionStep4 = {
            isExpandable: true,
            labelKey: 'cheque_details_key',
            iconName: 'document',
            expanded: false
          };
          _this.panelOptionStep5 = {
            isExpandable: true,
            labelKey: 'cheque_attachment_details_key',
            iconName: 'document',
            expanded: false
          };
          _this.panelOptionStep6 = {
            isExpandable: true,
            labelKey: 'collection_details_key',
            iconName: 'document',
            expanded: false
          };
          _this.panelOptionStep8 = {
            isExpandable: true,
            labelKey: 'attachments_key',
            iconName: 'document',
            expanded: false
          };
          _this.requestTypeOptions = {
            group: _this.formGroup,
            fcName: 'depositorRequestType' // GHada 04042023 RequestType is a reserved keyword and can't be set as fcname for any field 

          };
          _this.cashToggleOptions = {
            labelKey: 'deposit_in_my_account_key',
            placeHolder: 'deposit_in_my_account_key',
            group: _this.formGroup,
            fcName: 'isMyAccountDeposit',
            psClass: 'toggleColor'
          };
          _this.accountListOptions = {
            labelKey: 'account_key',
            placeHolder: 'select_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.cashAndChequeCollectionVO
          };
          _this.accountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'account_key',
            placeHolder: 'enter_account_no_key',
            group: _this.formGroup
          };
          _this.depositorNameOptions = {
            labelKey: 'depositor_name_key',
            placeHolder: 'depositor_name_key',
            fcName: 'depositorName',
            group: _this.formGroup
          };
          _this.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'exchange_currency_key',
                fcName: 'currency',
                group: _this.formGroup
              },
              amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                group: _this.formGroup,
                decimalPoints: 2
              }
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'toCurrency',
                group: _this.formGroup
              },
              amountOptions: {
                labelKey: 'exchange_amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'toAmount',
                group: _this.formGroup,
                decimalPoints: 2
              }
            },
            requestObject: _this.cashAndChequeCollectionVO,
            group: _this.formGroup
          };
          _this.reasonOptions = {
            placeHolder: 'deposit_reason_key',
            fcName: 'depositReason',
            group: _this.formGroup,
            labelKey: 'deposit_reason_key'
          };
          _this.bankNameOptions = {
            labelKey: 'bank_name_key',
            placeHolder: 'bank_name_key',
            fcName: 'chequeBankName',
            group: _this.formGroup
          };
          _this.chqSerialNoOptions = {
            fcName: 'chequeSerialNo',
            group: _this.formGroup,
            labelKey: 'cheque_serial_no_key',
            placeHolder: 'cheque_serial_no_key'
          };
          _this.chequeVersoImageOptions = {
            multiple: true,
            fcName: 'selectedFileData_veroImg',
            labelKey: 'cheque_verso_image_key',
            group: _this.formGroup,
            hasOpenCameraBtn: true,
            takePhotoLabelKey: 'cheque_verso_image_key'
          };
          _this.chequeRectoImageOptions = {
            multiple: true,
            fcName: 'selectedFileData_rectImg',
            labelKey: 'cheque_recto_image_key',
            group: _this.formGroup,
            hasOpenCameraBtn: true,
            takePhotoLabelKey: 'cheque_recto_image_key'
          };
          _this.attachmentOptions = {
            multiple: true,
            fcName: 'uploadedFiles',
            group: _this.formGroup
          };
          _this.fileCommentOptions = {
            group: _this.formGroup,
            fcName: 'chequeFileComment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key'
          };
          _this.locOptions = {
            fcName: 'collectionLocation',
            group: _this.formGroup,
            labelKey: 'collection_location_key'
          };
          _this.collectionDateOptions = {
            labelKey: 'collection_date_key',
            placeHolder: 'collection_date_key',
            fcName: 'collectionDate',
            group: _this.formGroup
          };
          _this.addressOptions = {
            group: _this.formGroup,
            placeHolder: 'enter_address_details_key',
            labelKey: 'collection_address_details_key',
            fcName: 'collectionLocationDesc'
          };
          _this.rangeOptions = {
            fromTime: {
              fcName: 'deliveryTimeFrom',
              labelKey: 'from_time_key',
              placeHolder: 'from_time_key',
              group: _this.formGroup
            },
            toTime: {
              fcName: 'deliveryTimeTo',
              labelKey: 'to_time_key',
              placeHolder: 'to_time_key',
              group: _this.formGroup
            },
            group: _this.formGroup
          };
          _this.denominationGridOptions = {
            fcName: 'denomination',
            group: _this.formGroup,
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
          _this.showAddress = false;
          _this.navParamsExist = false;
          return _this;
        }

        _inherits(CashAndChequeCollectionPage, _src_app_pages_omni_b);

        return _createClass(CashAndChequeCollectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.baseFormGroup = this.formGroup;
            this.navParamsExist = JSON.stringify(this.navService.getAllParams()) !== '{}';
            this.commonProv.copyObject(this.cashAndChequeCollectionVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {}); // this.commonProv.copyObject(this.stepperOptions.requestObject, this.cashAndChequeCollectionVO, true, false);

            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
            this.denominationGridOptions.columnComponents = [{
              columnNameKey: 'denomination_key',
              propertyName: 'denomination',
              component: src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_denomination_ps_dropdown_denomination_component__WEBPACK_IMPORTED_MODULE_6__["PsDropdownDenominationComponent"],
              componentOptions: {
                listOfOptions: []
              },
              componentType: 'select'
            }, {
              columnNameKey: 'no_of_bills_key',
              propertyName: 'noOfBills',
              component: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_8__["PsKeyinInputComponent"],
              componentOptions: {},
              componentType: 'input'
            }];
            this.enableDepositInMyAccToggle();

            if (this.navService.getAllParams().readOnlypage) {
              this.denominationGridOptions.enableEdit = false;
              this.denominationGridOptions.enableDelete = false;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(CashAndChequeCollectionPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.amountOptions.fcName], 1);
          }
        }, {
          key: "onChangeLov",
          value: function onChangeLov(values) {
            if (values) {
              this.enableDepositInMyAccToggle();

              if (values.itemValue === '1') {
                this.isCash = true;
                this.cashToggleOptions.labelKey = 'deposit_cash_in_my_account_key';
              } else {
                this.isCash = false;
                this.cashToggleOptions.labelKey = 'deposit_cheque_in_my_account_key';
              }

              this.cashAndChequeCollectionVO['depositorRequestTypeId'] = values.itemValue;
            }
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(values) {
            if (values.newValue === false) {
              this.depositCashInMyAcc = false;

              if (this.cashAndChequeCollectionVO[this.accountNumberOptions.fcName] !== undefined) {
                this.formGroup.controls[this.accountNumberOptions.fcName].reset();
              }

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountListOptions.fcName], 0);
              this.formGroup.controls[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].reset();
            } else {
              this.depositCashInMyAcc = true;

              if (this.cashAndChequeCollectionVO[this.accountListOptions.fcName] !== undefined) {
                this.formGroup.controls[this.accountListOptions.fcName].reset();
              }

              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountNumberOptions.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.accountListOptions.fcName], 1);
              this.formGroup.controls[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].reset();
            }
          }
        }, {
          key: "onChangeLoc",
          value: function onChangeLoc(values) {
            if (values) {
              this.showAddress = true;

              if (values.itemValue === '1') {
                var address = [this.cifInfo.customerInfoCO.streetDetails, this.cifInfo.customerInfoCO.cityName, this.cifInfo.customerInfoCO.country];
                this.cashAndChequeCollectionVO[this.addressOptions.fcName] = address.filter(function (x) {
                  return x !== undefined;
                }).join(',');
              } else if (values.itemValue === '2') {
                this.formGroup.controls[this.addressOptions.fcName].reset();
              }
            }
          }
        }, {
          key: "onAccountChange",
          value: function onAccountChange(event) {
            var _this2 = this;

            if (event) {
              this.accountCurrency = event.currency;

              if (this.navService.getAllParams() && this.navService.getAllParams().currency === undefined) {
                this.complexExchangeOptions.fromAmountOptions.currency = event.currencyBriefNameEnglish;
                this.complexExchangeOptions.fromAmountOptions.currencyCode = event.currency;
                setTimeout(function () {
                  _this2.stepperOptions.requestObject[_this2.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = event.currency;
                }, 1);
              } else {
                this.complexExchangeOptions.fromAmountOptions.currencyCode = this.navService.getAllParams().currency;
                setTimeout(function () {
                  _this2.stepperOptions.requestObject[_this2.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = _this2.navService.getAllParams().currency;
                }, 1);
                this.onDepositeAccountCurrencyChanged(this.navService.getAllParams().currency);
              }
            }
          }
        }, {
          key: "onDepositeAccountCurrencyChanged",
          value: function onDepositeAccountCurrencyChanged(event) {
            var _this3 = this;

            event = event ? event.itemValue ? event.itemValue : event : undefined;
            this.accountCurrency = this.accountCurrency === undefined ? event : this.accountCurrency;

            if (event) {
              if (this.accountCurrency !== undefined && event !== this.accountCurrency) {
                this.complexExchangeOptions.toAmountOptions.currencyCode = this.accountCurrency;
                setTimeout(function () {
                  _this3.stepperOptions.requestObject[_this3.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = _this3.accountCurrency;
                }, 1);
              }
            }
          }
        }, {
          key: "enableDepositInMyAccToggle",
          value: function enableDepositInMyAccToggle() {
            if (!this.navParamsExist) {
              this.cashAndChequeCollectionVO[this.cashToggleOptions.fcName] = 'Y';
              this.depositCashInMyAcc = true;
            }
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      CashAndChequeCollectionPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]
        }];
      };

      CashAndChequeCollectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cash-and-cheque-collection',
        template: _raw_loader_cash_and_cheque_collection_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cash_and_cheque_collection_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]])], CashAndChequeCollectionPage);
      /***/
    },

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
          var _this4;

          _classCallCheck(this, PsDropdownDenominationComponent);

          _this4 = _callSuper(this, PsDropdownDenominationComponent, [commonProv, loggerP]);
          _this4.omniPull = omniPull;
          _this4.defaultSelectOptions = {
            labelKey: '',
            placeHolder: 'select_denomination_key'
          };
          return _this4;
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
            var _this5 = this;

            var paramData = {};
            this.omniPull.returnDenominationList(paramData).then(function (result) {
              _this5.defaultSelectOptions.listOfOptions = [];

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

                    _this5.defaultSelectOptions.listOfOptions.push(acctype);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                _this5.logger.warn(result, 'empty response');
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
    "eMpa":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cash-and-cheque-collection/cash-and-cheque-collection.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eMpa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptionStep1\" id=\"cash_and_cheque_collection_panel1\">\n      <ps-lov-cash-request-type id=\"requestType\" [options]=\"requestTypeOptions\" (onPsChange)=\"onChangeLov($event)\">\n      </ps-lov-cash-request-type>\n      <ps-select-toggle [id]=\"'cashId'\" [options]=\"cashToggleOptions\" (onPsChange)=\"onToggleChange($event)\"\n        class=\"ps-toggle-acc-open fixed-maturity-account-toggle\">\n      </ps-select-toggle>\n      <ps-lookup-own-accounts id=\"'account'+ id\" [options]=\"accountListOptions\"\n        (onAccountChange)=\"onAccountChange($event)\" *ngIf=\"depositCashInMyAcc\"></ps-lookup-own-accounts>\n\n      <div *ngIf=\"!depositCashInMyAcc && depositCashInMyAcc!== undefined\">\n        <ps-input-account-number [options]=\"accountNumberOptions\">\n        </ps-input-account-number>\n        <ps-input-varchar id=\"depositorName\" [options]=\"depositorNameOptions\"></ps-input-varchar>\n      </div>\n\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"isCash\" [options]=\"panelOptionStep2\" id=\"cash_and_cheque_collection_panel2\">\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onFromCurrencyChanged)=\"onDepositeAccountCurrencyChanged($event)\">\n      </ps-complex-exchange>\n      <ps-container-panel [options]=\"panelOptionStep3\" id=\"cash_and_cheque_collection_panel3\">\n        <ps-ag-grid [options]=\"denominationGridOptions\"></ps-ag-grid>\n      </ps-container-panel>\n      <ps-input-varchar id=\"reason\" [options]=\"reasonOptions\"></ps-input-varchar>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"!isCash && isCash !== undefined\" [options]=\"panelOptionStep4\"\n      id=\"cash_and_cheque_collection_panel5\">\n      <ps-input-varchar id=\"bankName\" [options]=\"bankNameOptions\"></ps-input-varchar>\n      <ps-input-numeric id=\"chqSerialNo\" [options]=\"chqSerialNoOptions\">\n      </ps-input-numeric>\n      <ps-complex-exchange id=\"exchangeComponent\" [options]=\"complexExchangeOptions\"\n        (onFromCurrencyChanged)=\"onDepositeAccountCurrencyChanged($event)\"></ps-complex-exchange>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"!isCash && isCash !== undefined\" [options]=\"panelOptionStep5\"\n      id=\"cash_and_cheque_collection_panel6\">\n      <ps-file-upload-bs id=\"chqVersoImage\" [options]=\"chequeVersoImageOptions\"></ps-file-upload-bs>\n      <ps-file-upload-bs id=\"chqRectoImage\" [options]=\"chequeRectoImageOptions\"></ps-file-upload-bs>\n      <ps-input-free-text id=\"fileComment\" [options]=\"fileCommentOptions\"></ps-input-free-text>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep6\" id=\"cash_and_cheque_collection_panel7\">\n      <ps-lov-address id=\"collectionLoc\" [options]='locOptions' (onPsChange)='onChangeLoc($event)'></ps-lov-address>\n      <ps-input-free-text *ngIf=\"showAddress\" id=\"address\" [options]=\"addressOptions\">\n      </ps-input-free-text>\n      <ps-date-day-month-year-future id=\"collectionDate\" [options]=\"collectionDateOptions\">\n      </ps-date-day-month-year-future>\n      <ps-complex-time-range [options]='rangeOptions'></ps-complex-time-range>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelOptionStep8\" id=\"cash_and_cheque_collection_panel8\">\n      <ps-file-upload-bs id=\"attachment\" [options]=\"attachmentOptions\"></ps-file-upload-bs>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
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
    }
  }]);
})();
//# sourceMappingURL=27-es5.js.map