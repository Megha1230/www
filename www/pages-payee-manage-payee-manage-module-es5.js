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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payee-manage-payee-manage-module"], {
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
    "BLof":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payee-manage/payee-manage.module.ts ***!
      \***********************************************************/

    /*! exports provided: PayeeManagePageModule */

    /***/
    function BLof(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayeeManagePageModule", function () {
        return PayeeManagePageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_fav_payee_list_ps_fav_payee_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.module */
      "ULIO");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _payee_manage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./payee-manage.page */
      "VfCj");

      var routes = [{
        path: '',
        component: _payee_manage_page__WEBPACK_IMPORTED_MODULE_7__["PayeeManagePage"]
      }];

      var PayeeManagePageModule = /*#__PURE__*/_createClass(function PayeeManagePageModule() {
        _classCallCheck(this, PayeeManagePageModule);
      });

      PayeeManagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"], src_app_commonBussinessSRC_psComponents_ps_fav_payee_list_ps_fav_payee_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsFavPayeeListComponentModule"]],
        declarations: [_payee_manage_page__WEBPACK_IMPORTED_MODULE_7__["PayeeManagePage"]]
      })], PayeeManagePageModule);
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
    "JsQt":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JsQt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n   <ng-container *ngIf=\"options?.itemList?.length > 0\">\n      <ng-container *ngFor=\"let item of options.itemList\">\n         <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions()\" [itemCard]=\"item\"\n            (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n      </ng-container>\n   </ng-container>\n</ps-template-list>";
      /***/
    },

    /***/
    "O0aa":
    /*!****************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O0aa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1mYXYtcGF5ZWUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
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
    "ltde":
    /*!**************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-fav-payee-list/ps-fav-payee-list.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: PsFavPayeeListComponent */

    /***/
    function ltde(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsFavPayeeListComponent", function () {
        return PsFavPayeeListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_fav_payee_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-fav-payee-list.component.html */
      "JsQt");
      /* harmony import */


      var _ps_fav_payee_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-fav-payee-list.component.scss */
      "O0aa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /* harmony import */


      var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /**
       * @author Ammar.Ahmed
       * @since 22/06/2021
       *
       * <p> PsInternalBeneficiaryComponent is business component contains mapping for for container-lookup component to load internal beneficiaries</p>
       */


      var PsFavPayeeListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsFavPayeeListComponent() {
          var _this2;

          _classCallCheck(this, PsFavPayeeListComponent);

          _this2 = _callSuper(this, PsFavPayeeListComponent);
          _this2.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.options = {}; // tslint:disable-next-line: no-output-on-prefix

          _this2.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.labelValuesMap = new Map();
          _this2.headerMap = new Map();
          _this2.requestMap = new Map();
          _this2.editRequestMap = new Map();
          _this2.bRefresh = false;
          _this2.postFct = {
            func: function func() {
              var _this3 = this;

              return new Promise(function (resolve, reject) {
                resolve(_this3.executionClass.reloadList());
              });
            },
            executionClass: _this2,
            params: []
          };
          return _this2;
        }

        _inherits(PsFavPayeeListComponent, _src_app_commonSRC_ps);

        return _createClass(PsFavPayeeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsFavPayeeListComponent, "init", this, 3)([]);

            this.pupulateFavPayeeMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }
          }
        }, {
          key: "getContainerLookUpOptions",
          value: function getContainerLookUpOptions() {
            return this.prepareLookUp();
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp() {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.actionDetailsOptions = [{
              id: 'pay',
              label: 'pay_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'paper-plane',
                  labelOptions: {
                    labelKey: 'pay_key'
                  }
                },
                pageOptions: {
                  operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].WIDGET_BILL_PAYMENTS_OPER_ID
                },
                navigationOptions: {
                  queryParams: {
                    navigationIndex: 1
                  }
                }
              }
            }, {
              id: 'delete',
              labelOptions: {
                labelKey: 'delete_key'
              },
              buttonIcon: 'delete',
              actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
              cssClass: 'fab-edit-button',
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              alertStyle: 'warning',
              alertType: 'prompt',
              alertMessage: 'confirm_delete_this_favorite_key',
              operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DELETE_FAV_PAYEE_OPER_ID
            }, {
              id: 'edit',
              label: 'edit_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'paper',
                  labelOptions: {
                    labelKey: 'edit_key'
                  }
                },
                pageOptions: {
                  operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].EDIT_FAV_PAYEE_OPER_ID
                }
              }
            }];
            lookupDetails.statementOptions = {};
            lookupDetails.reloadFunction = {
              func: function func() {
                var _this4 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this4.executionClass.reloadList());
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
          key: "pupulateFavPayeeMap",
          value: function pupulateFavPayeeMap() {
            var billerMap = {};
            var categoryMap = {};
            var referenceMap = {};
            var headerTitleMap = {};
            billerMap = {
              key: 'billerDescriptionConcat',
              value: '',
              isEdit: false
            };
            categoryMap = {
              key: 'categoryDescriptionConcat',
              value: '',
              isEdit: false
            };
            referenceMap = {
              key: 'billerAccount',
              value: '',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'nickName',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('biller_key', billerMap);
            this.labelValuesMap.set('category_key', categoryMap);
            this.labelValuesMap.set('reference_key', referenceMap);
            this.headerMap.set('title', headerTitleMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(item) {
            if (item && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === item;
              });
              this.options.item = this.options.itemList[0];
              this.options.showItemPopUp = !this.options.showItemPopUp;
            }

            this.onClickCard.emit(this.options);
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"]);

      PsFavPayeeListComponent.ctorParameters = function () {
        return [];
      };

      PsFavPayeeListComponent.propDecorators = {
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsFavPayeeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-fav-payee-list',
        template: _raw_loader_ps_fav_payee_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_fav_payee_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PsFavPayeeListComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payee-manage-payee-manage-module-es5.js.map