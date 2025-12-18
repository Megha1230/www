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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-statement-list-account-statement-list-module"], {
    /***/
    "+ERO":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-account-statement-list/ps-account-statement-list.component.scss ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ERO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1hY2NvdW50LXN0YXRlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

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
    "ET3Z":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-account-statement-list/ps-account-statement-list.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: PsAccountStatementListComponent */

    /***/
    function ET3Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsAccountStatementListComponent", function () {
        return PsAccountStatementListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_account_statement_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-account-statement-list.component.html */
      "ytC1");
      /* harmony import */


      var _ps_account_statement_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-account-statement-list.component.scss */
      "+ERO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /* harmony import */


      var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../psServices/omni-common/omni-pull.service */
      "ZyuK");

      var PsAccountStatementListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsAccountStatementListComponent(omniPull) {
          var _this;

          _classCallCheck(this, PsAccountStatementListComponent);

          _this = _callSuper(this, PsAccountStatementListComponent);
          _this.omniPull = omniPull;
          _this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.options = {};
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();

          _this.populateHeaderValueMap();

          return _this;
        }

        _inherits(PsAccountStatementListComponent, _src_app_commonSRC_ps);

        return _createClass(PsAccountStatementListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsAccountStatementListComponent, "init", this, 3)([]);

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }
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

            if (card.merchantName && card.merchantLogo) {
              lookupDetails.logoOptions = {
                imageOptions: {
                  imageName: card.merchantLogo.toLowerCase() + '.png',
                  imageBase64Url: '',
                  imagePath: src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_5__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.IMGS_FOLDER_URL
                },
                label: card.merchantName
              };
              lookupDetails.actionDetailsOptions = [{
                id: 'merchant-details',
                label: 'merchant_details_key',
                actionHyperlink: {
                  group: this.options.group,
                  iconOptions: {
                    iconName: 'merchant-details',
                    labelOptions: {
                      labelKey: 'merchant_details_key'
                    }
                  },
                  route: 'merchant-details',
                  pageOptions: {
                    operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].MERCHANT_DETAILS,
                    iconName: 'merchant-details',
                    title: 'merchant_details_key'
                  },
                  navigationOptions: {
                    queryParams: {
                      card: card
                    }
                  }
                }
              }];
            }

            lookupDetails.reloadFunction = {
              func: function func() {
                var _this2 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this2.executionClass.reloadList());
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
            var transactionTypeMap = {};
            var transactionDateMap = {};
            var transactionReferenceMap = {};
            var amountMap = {};
            var valueDateMap = {};
            var branchMap = {};
            var descriptionMap = {};
            var fromAccountMap = {};
            var toAccountMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            var chequeNoMap = {};
            var chequeDateMap = {};
            var payeeNameMap = {};
            transactionReferenceMap = {
              key: 'reference',
              value: '--- --- --- ---',
              isEdit: false
            };
            amountMap = {
              key: 'transactionAmount',
              value: '--- --- --- ---',
              isEdit: false
            }; // valueDateMap = {
            //   key: 'startDate',
            //   value: '--- --- --- ---',
            //   isEdit: false,
            //   showMappingOnNoValue: false,
            // };
            // branchMap = {
            //   key: 'branch',
            //   value: '----',
            //   isEdit: false,
            //   showMappingOnNoValue: false,
            // };

            descriptionMap = {
              key: 'description',
              value: '--- --- --- ---',
              isEdit: false,
              showMappingOnNoValue: false
            };
            fromAccountMap = {
              key: 'fromAccount',
              value: '--- --- --- ---',
              isEdit: false
            };
            toAccountMap = {
              key: 'toAccount',
              value: '--- --- --- ---',
              isEdit: false
            };
            chequeNoMap = {
              key: 'chequeNo',
              value: '--- --- --- ---',
              isEdit: false
            };
            chequeDateMap = {
              key: 'chequeDate',
              value: '--- --- --- ---',
              isEdit: false
            };
            payeeNameMap = {
              key: 'payeeName',
              value: '--- --- --- ---',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'transactionName',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'transactionDate',
              isEdit: false,
              formGroupMap: {
                placeHolder: 'transaction_date',
                fcName: 'transactionDate'
              }
            };
            this.labelValuesMap.set('value_date_key', valueDateMap);
            this.labelValuesMap.set('description_key', descriptionMap);
            this.labelValuesMap.set('branch_key', branchMap);
            this.labelValuesMap.set('reference_no_key', transactionReferenceMap);
            this.labelValuesMap.set('amount_key', amountMap);
            this.labelValuesMap.set('from_account_number_key', fromAccountMap);
            this.labelValuesMap.set('to_account_number_key', toAccountMap);
            this.labelValuesMap.set('cheque_date_key', chequeDateMap);
            this.labelValuesMap.set('cheque_no_key', chequeNoMap);
            this.labelValuesMap.set('payee_name_date_key', payeeNameMap);
            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subtitle', headerSubtitleMap);
          } //handles the click event on merchant logo

        }, {
          key: "onLogoClicked",
          value: function onLogoClicked(card) {
            this.gotoMerchantDetails(card);
          }
        }, {
          key: "gotoMerchantDetails",
          value: function gotoMerchantDetails(card) {
            var page = {
              operID: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].VIEW_STATEMENT_OF_TRANSACTIONS,
              title: 'Merchant Details',
              icon: 'report',
              component: 'merchant-details',
              param: card
            };
            this.navService.openPage(page);
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"]);

      PsAccountStatementListComponent.ctorParameters = function () {
        return [{
          type: _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }];
      };

      PsAccountStatementListComponent.propDecorators = {
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsAccountStatementListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-account-statement-list',
        template: _raw_loader_ps_account_statement_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_account_statement_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]])], PsAccountStatementListComponent);
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
          var _this3;

          _classCallCheck(this, PsTemplateView);

          _this3 = _callSuper(this, PsTemplateView);
          _this3.events = events;
          _this3.cancelOptions = {
            labelKey: 'cancel_key',
            group: _this3.options.group
          };
          _this3.spinner = false;
          _this3.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          }; // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument

          _this3.reqStartEvent = events.subscribe('network:request:started', function (time) {
            _this3.spinner = true;
          });
          _this3.reqCompletEvent = events.subscribe('network:request:completed', function (time) {
            _this3.spinner = false;
          });
          return _this3;
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
    "YKWL":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/account-statement-list/account-statement-list.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: AccountStatementListPageModule */

    /***/
    function YKWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountStatementListPageModule", function () {
        return AccountStatementListPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_account_statement_list_ps_account_statement_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-account-statement-list/ps-account-statement-list.component.module */
      "m4Ap");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_report_filter_criteria_ps_complex_report_filter_criteria_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-report-filter-criteria/ps-complex-report-filter-criteria.component.module */
      "5lDr");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */
      "yvgy");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _account_statement_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./account-statement-list.page */
      "OkPl");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_button_export_ps_button_export_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psComponents/ps-button-export/ps-button-export.module */
      "gKDs");

      var routes = [{
        path: '',
        component: _account_statement_list_page__WEBPACK_IMPORTED_MODULE_9__["AccountStatementListPage"]
      }];

      var AccountStatementListPageModule = /*#__PURE__*/_createClass(function AccountStatementListPageModule() {
        _classCallCheck(this, AccountStatementListPageModule);
      });

      AccountStatementListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateViewModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_5__["PsSelectLookupOptionListComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_account_statement_list_ps_account_statement_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountStatementListComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_report_filter_criteria_ps_complex_report_filter_criteria_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexReportFilterCriteriaComponentModule"], _commonBussinessSRC_psComponents_ps_button_export_ps_button_export_module__WEBPACK_IMPORTED_MODULE_10__["PsButtonExportModule"]],
        declarations: [_account_statement_list_page__WEBPACK_IMPORTED_MODULE_9__["AccountStatementListPage"]],
        exports: [_account_statement_list_page__WEBPACK_IMPORTED_MODULE_9__["AccountStatementListPage"]]
      })], AccountStatementListPageModule);
      /***/
    },

    /***/
    "m4Ap":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-account-statement-list/ps-account-statement-list.component.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: PsAccountStatementListComponentModule */

    /***/
    function m4Ap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsAccountStatementListComponentModule", function () {
        return PsAccountStatementListComponentModule;
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


      var _ps_account_statement_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-account-statement-list.component */
      "ET3Z");

      var PsAccountStatementListComponentModule = /*#__PURE__*/_createClass(function PsAccountStatementListComponentModule() {
        _classCallCheck(this, PsAccountStatementListComponentModule);
      });

      PsAccountStatementListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_account_statement_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountStatementListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_account_statement_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountStatementListComponent"]],
        entryComponents: [_ps_account_statement_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountStatementListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsAccountStatementListComponentModule);
      /***/
    },

    /***/
    "ytC1":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-account-statement-list/ps-account-statement-list.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ytC1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [options]=\"prepareLookUp(itemOption)\" [itemCard]=\"itemOption\"\n        (logoClicked)=\"onLogoClicked($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-account-statement-list-account-statement-list-module-es5.js.map