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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scheduled-transfers-list-scheduled-transfers-list-module"], {
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
    "D508":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-scheduled-transfers-list/ps-scheduled-transfers-list.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D508(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\r\n    <div *ngIf=\"options?.itemList?.length > 0\">\r\n        <div *ngFor=\"let itemOption of options.itemList\">\r\n            <ps-container-lookup-option [options]=\"prepareLookUp(itemOption)\" [itemCard]=\"itemOption\">\r\n            </ps-container-lookup-option>\r\n        </div>\r\n    </div>\r\n</ps-template-list>";
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
    "JjGW":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-scheduled-transfers-list/ps-scheduled-transfers-list.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: PsScheduledTransfersListComponent */

    /***/
    function JjGW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsScheduledTransfersListComponent", function () {
        return PsScheduledTransfersListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_scheduled_transfers_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-scheduled-transfers-list.component.html */
      "D508");
      /* harmony import */


      var _ps_scheduled_transfers_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-scheduled-transfers-list.component.scss */
      "cuC9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /* harmony import */


      var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../psServices/omni-common/omni-pull.service */
      "ZyuK");

      var PsScheduledTransfersListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsScheduledTransfersListComponent(omniPull) {
          var _this;

          _classCallCheck(this, PsScheduledTransfersListComponent);

          _this = _callSuper(this, PsScheduledTransfersListComponent);
          _this.omniPull = omniPull;
          _this.bRefresh = false;
          _this.lookUpOptions = [];
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.allowEdit = false;
          _this.allowDelete = false;
          _this.showDetails = false;
          _this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();

          _this.populateHeaderValueMap();

          return _this;
        }

        _inherits(PsScheduledTransfersListComponent, _src_app_commonSRC_ps);

        return _createClass(PsScheduledTransfersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsScheduledTransfersListComponent, "init", this, 3)([]);

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }

            this.allowEdit = this.allowDelete = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SCHEDULED_TRANSFERS_OPER_ID || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID;
            this.showDetails = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SCHEDULED_TRANSFERS_OPER_ID;
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp(card) {
            var lookupDetails = {};
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.showInitialCardValues = 5;
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID != _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? lookupDetails.statementOptions = {
              buttonIcon: 'list-box',
              redirectUrl: 'scheduled-transfer-statement-report'
            } : {};
            lookupDetails.actionDetailsOptions = [this.allowEdit ? {
              id: 'edit',
              label: 'edit_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'edit1',
                  labelOptions: {
                    labelKey: 'edit_key'
                  }
                },
                route: 'payment',
                pageOptions: {
                  operId: card.transferTypeOperId,
                  iconName: 'edit1',
                  title: card.operName || 'pending_transfers_key' //modified by ghada, AZDB-5974 for opening each transfer screen with it's related oper name

                },
                preCallFunction: {
                  func: function func() {
                    var _this2 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this2.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[0].actionHyperlink));
                    });
                  },
                  executionClass: this,
                  params: []
                },
                navigationOptions: {
                  queryParams: {
                    transferScheduledList: true
                  }
                },
                psClass: 'pending-transfer-actions edit-pending'
              }
            } : {}, this.showDetails ? {
              id: 'details',
              label: 'details_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'document',
                  labelOptions: {
                    labelKey: 'details_key'
                  }
                },
                route: 'payment',
                pageOptions: {
                  operId: card.transferTypeOperId,
                  iconName: 'document',
                  title: 'pending_transfers_key'
                },
                navigationOptions: {
                  queryParams: {
                    transferScheduledList: true,
                    readOnlypage: true
                  }
                },
                preCallFunction: {
                  func: function func() {
                    var _this3 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this3.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[1].actionHyperlink));
                    });
                  },
                  executionClass: this,
                  params: []
                },
                psClass: 'pending-transfer-actions details-pending'
              }
            } : {}, card.transactionStatus === 'A' && this.allowDelete ? {
              id: 'delete',
              labelOptions: {
                labelKey: 'delete_key'
              },
              buttonIcon: 'delete',
              actionUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].serviceUrl.commonSubmitAction,
              cssClass: 'pending-transfer-actions delete-pending fab-edit-button',
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              operId: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID ? _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].DELETE_IMMEDIATE_TRANSFER : _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].DELETE_STANDING_ORDER,
              postCallFunction: {
                func: function func() {
                  var _this4 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this4.executionClass.reloadList());
                  });
                },
                executionClass: this,
                params: []
              },
              detailServiceUrl: 'rest/omniCorePull/returnTransactionDetails',
              detailServiceCallOnAction: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].isCorporate ? true : false
            } : {}, this.allowStop(card.transactionStatus) ? {
              id: 'stop',
              labelOptions: {
                labelKey: 'stop_key'
              },
              buttonIcon: 'delete',
              actionUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].serviceUrl.commonSubmitAction,
              cssClass: 'pending-transfer-actions details-pending fab-edit-button',
              label: 'stop_key',
              iconName: 'square-outline',
              actionType: 'Submit',
              operId: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID ? _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].STOP_CASH_TRANSFER_OPER_ID : _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].STOP_STANDING_ORDER,
              filterParamValues: ['transactionNumber'],
              alertLabel: 'are_you_sure_you_want_to_stop_key',
              alertType: 'prompt',
              postCallFunction: {
                func: function func() {
                  var _this5 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this5.executionClass.reloadList());
                  });
                },
                executionClass: this,
                params: []
              }
            } : {}];
            src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID != _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PENDING_TRANSFERS_OPER_ID && src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID != _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID ? lookupDetails.pageData = {
              operID: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].VIEW_SCHEDULED_TRANSFERS_STATEMENT,
              title: 'scheduled_transfers_report_key'
            } : {};
            lookupDetails.reloadFunction = {
              func: function func() {
                var _this6 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this6.executionClass.reloadList());
                });
              },
              executionClass: this,
              params: []
            };
            return lookupDetails;
          }
        }, {
          key: "reloadList",
          value: function reloadList() {
            this.reloadFct.emit();
          }
        }, {
          key: "populateHeaderValueMap",
          value: function populateHeaderValueMap() {
            var typeMap = {};
            var fromAccountMap = {};
            var toAccountMap = {};
            var amountMap = {};
            var dateMap = {};
            var referenceMap = {};
            var statusMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            var transactionNumberMap = {};
            var bankCifShortNameEngMap = {};
            var transactionDateMap = {};
            var idTypeNumberMap = {};
            var purposeMap = {};
            transactionDateMap = {
              key: 'transactionDate',
              value: '--- --- --- ---',
              isEdit: false
            };
            bankCifShortNameEngMap = {
              key: 'bankCifShortNameEng',
              value: '--- --- --- ---',
              isEdit: false,
              showMappingOnNoValue: true
            };
            transactionNumberMap = {
              key: 'transactionNumber',
              value: '--- --- --- ---',
              isEdit: false
            };
            typeMap = {
              key: 'transferType',
              value: '--- --- --- ---',
              isEdit: false
            };
            referenceMap = {
              key: 'reference',
              value: '--- --- --- ---',
              isEdit: false
            };
            fromAccountMap = {
              key: 'formattedFromAccount',
              value: '--- --- --- ---',
              isEdit: false
            };
            toAccountMap = {
              key: 'formattedToAccount',
              value: '--- --- --- ---',
              isEdit: false,
              showMappingOnNoValue: true
            };
            statusMap = {
              key: 'statusDescription',
              value: '--- --- --- ---',
              isEdit: false
            };
            amountMap = {
              key: 'transactionAmountNCurrency',
              value: '--- --- --- ---',
              isEdit: false
            };
            dateMap = {
              key: 'date',
              value: '--- --- --- ---',
              isEdit: false
            };
            idTypeNumberMap = {
              key: 'idTypeNumber',
              value: '---/---',
              isEdit: false
            };
            purposeMap = {
              key: 'purpose',
              value: '------',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'title',
              isEdit: false,
              formGroupMap: {
                placeHolder: 'enter_transfer_type',
                fcName: 'transferTypeTitle'
              }
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'subTitle',
              isEdit: false,
              formGroupMap: {
                placeHolder: 'transfer_type',
                fcName: 'transferTypeSubtTitle'
              }
            };
            this.labelValuesMap.set('transaction_number_key', transactionNumberMap);
            this.labelValuesMap.set('from_account_key', fromAccountMap);
            this.labelValuesMap.set('amount_key', amountMap);
            this.labelValuesMap.set('trade_date_key', transactionDateMap);
            this.labelValuesMap.set('value_date_key', dateMap);

            if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID !== _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID) {
              this.labelValuesMap.set('to_account_key', toAccountMap);
              this.labelValuesMap.set('type_key', typeMap);
              this.labelValuesMap.set('reference_key', referenceMap);
              this.labelValuesMap.set('bank_key', bankCifShortNameEngMap);
            } else {
              this.labelValuesMap.set('id_type_number_key', idTypeNumberMap);
              this.labelValuesMap.set('purpose_key', purposeMap);
            }

            this.labelValuesMap.set('status_key', statusMap);
            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
          }
        }, {
          key: "prepareTransaction",
          value: function prepareTransaction(actionCard) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              var generalRequestData = {
                commonParametersList: {
                  transactionNumber: actionCard.navigationOptions.queryParams.transactionNumber,
                  transferTypeOperId: actionCard.navigationOptions.queryParams.transferTypeOperId,
                  transactionBranch: actionCard.navigationOptions.queryParams.transactionBranch || null
                }
              };

              _this7.omniPull.returnTransactionDetails(generalRequestData).then(function (result) {
                result.data.operId = actionCard.navigationOptions.queryParams.transferTypeOperId; // By Mohanad AZDB-6915 - 26012025

                var data = _this7.commonProv.prepareResult(result.data);

                if (data.toBeneficiary && !data.toBeneficiary_lookupKey) {
                  data.toBeneficiary_lookupKey = data.toBeneficiary;
                } //Jira #7124 - In case toAccount_lookupKey was missing , inject it manually to populate the TO Account component


                if (data.toAccount && !data.toAccount_lookupKey) {
                  data.toAccount_lookupKey = data.toAccount;
                }

                _this7.commonProv.copyObject(actionCard.navigationOptions.queryParams, data, false);

                _this7.commonProv.copyObject(actionCard.navigationOptions.queryParams.ScreenVO, data, false); //===Jira #7235 In case commonResponseList exists, merge its objects with the root params to include possible dynamic Fields values


                if (typeof data.commonResponseList !== "undefined") {
                  _this7.commonProv.copyObject(actionCard.navigationOptions.queryParams, data.commonResponseList, false);

                  _this7.commonProv.copyObject(actionCard.navigationOptions.queryParams.ScreenVO, data.commonResponseList, false);
                }

                actionCard.navigationOptions.queryParams = Object.assign({
                  ScreenVO: Object.assign({}, actionCard.navigationOptions.queryParams)
                }, actionCard.navigationOptions.queryParams);
                resolve(null);
              });
            });
          } //edited by Marina-Jira-7926

        }, {
          key: "allowStop",
          value: function allowStop(statusCode) {
            //Makki: #6557 , As per Mirna Mezher, Stop should only be allowed for Created only in case of Sch Transfer
            //Makki: #7092 , As per Mirna Mezher, Stop should only be allowed for Approved only in case of Cash Transfer
            return statusCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].TRANSFER_STATUS_CREATED && src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].SCHEDULED_TRANSFERS_OPER_ID || statusCode === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].TRANSFER_STATUS_APPROVED && src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonSettings"].oper_ID === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].CASH_TRANSFER_REP_OPER_ID;
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"]);

      PsScheduledTransfersListComponent.ctorParameters = function () {
        return [{
          type: _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }];
      };

      PsScheduledTransfersListComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsScheduledTransfersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-scheduled-transfers-list',
        template: _raw_loader_ps_scheduled_transfers_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_scheduled_transfers_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])], PsScheduledTransfersListComponent);
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
          var _this8;

          _classCallCheck(this, PsTemplateView);

          _this8 = _callSuper(this, PsTemplateView);
          _this8.events = events;
          _this8.cancelOptions = {
            labelKey: 'cancel_key',
            group: _this8.options.group
          };
          _this8.spinner = false;
          _this8.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          }; // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument

          _this8.reqStartEvent = events.subscribe('network:request:started', function (time) {
            _this8.spinner = true;
          });
          _this8.reqCompletEvent = events.subscribe('network:request:completed', function (time) {
            _this8.spinner = false;
          });
          return _this8;
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
    "SPt7":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/scheduled-transfers-list/scheduled-transfers-list.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ScheduledTransfersListPageModule */

    /***/
    function SPt7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduledTransfersListPageModule", function () {
        return ScheduledTransfersListPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_scheduled_transfers_list_ps_scheduled_transfers_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-scheduled-transfers-list/ps-scheduled-transfers-list.component.module */
      "Y0dE");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _scheduled_transfers_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./scheduled-transfers-list.page */
      "kFG2");

      var routes = [{
        path: '',
        component: _scheduled_transfers_list_page__WEBPACK_IMPORTED_MODULE_7__["ScheduledTransfersListPage"]
      }];

      var ScheduledTransfersListPageModule = /*#__PURE__*/_createClass(function ScheduledTransfersListPageModule() {
        _classCallCheck(this, ScheduledTransfersListPageModule);
      });

      ScheduledTransfersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateViewModule"], src_app_commonBussinessSRC_psComponents_ps_scheduled_transfers_list_ps_scheduled_transfers_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsScheduledTransfersListComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_scheduled_transfers_list_page__WEBPACK_IMPORTED_MODULE_7__["ScheduledTransfersListPage"]]
      })], ScheduledTransfersListPageModule);
      /***/
    },

    /***/
    "Y0dE":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-scheduled-transfers-list/ps-scheduled-transfers-list.component.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsScheduledTransfersListComponentModule */

    /***/
    function Y0dE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsScheduledTransfersListComponentModule", function () {
        return PsScheduledTransfersListComponentModule;
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


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template.module */
      "os9x");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_scheduled_transfers_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-scheduled-transfers-list.component */
      "JjGW");

      var PsScheduledTransfersListComponentModule = /*#__PURE__*/_createClass(function PsScheduledTransfersListComponentModule() {
        _classCallCheck(this, PsScheduledTransfersListComponentModule);
      });

      PsScheduledTransfersListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_scheduled_transfers_list_component__WEBPACK_IMPORTED_MODULE_5__["PsScheduledTransfersListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_scheduled_transfers_list_component__WEBPACK_IMPORTED_MODULE_5__["PsScheduledTransfersListComponent"]],
        entryComponents: [_ps_scheduled_transfers_list_component__WEBPACK_IMPORTED_MODULE_5__["PsScheduledTransfersListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsScheduledTransfersListComponentModule);
      /***/
    },

    /***/
    "cuC9":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-scheduled-transfers-list/ps-scheduled-transfers-list.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cuC9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1zY2hlZHVsZWQtdHJhbnNmZXJzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-scheduled-transfers-list-scheduled-transfers-list-module-es5.js.map