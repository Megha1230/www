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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ownership-list-ownership-list-module"], {
    /***/
    "+Chi":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: PsOwnershipListComponentModule */

    /***/
    function Chi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsOwnershipListComponentModule", function () {
        return PsOwnershipListComponentModule;
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


      var _ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-ownership-list.component */
      "F/zg");

      var PsOwnershipListComponentModule = /*#__PURE__*/_createClass(function PsOwnershipListComponentModule() {
        _classCallCheck(this, PsOwnershipListComponentModule);
      });

      PsOwnershipListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOwnershipListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOwnershipListComponent"]],
        entryComponents: [_ps_ownership_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOwnershipListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsOwnershipListComponentModule);
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
    "F/zg":
    /*!**************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: PsOwnershipListComponent */

    /***/
    function F_zg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsOwnershipListComponent", function () {
        return PsOwnershipListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_ownership_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-ownership-list.component.html */
      "OBBF");
      /* harmony import */


      var _ps_ownership_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-ownership-list.component.scss */
      "Nk4t");
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
       * @author Ahmed.Elfkhrany
       * @since 27/09/2022
       *
       */


      var PsOwnershipListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsOwnershipListComponent(cdRef) {
          var _this;

          _classCallCheck(this, PsOwnershipListComponent);

          _this = _callSuper(this, PsOwnershipListComponent);
          _this.cdRef = cdRef;
          _this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.showSingleAccount = false;
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          _this.addOwnerOptions = {
            route: 'add-owner',
            labelKey: 'add_owner_key',
            iconOptions: {
              iconName: 'owner',
              labelOptions: {
                labelKey: 'add_owner_key'
              }
            },
            pageOptions: {
              operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ADD_OWNER_OPER_ID,
              title: 'add_owner_key',
              iconName: 'owners'
            }
          };
          return _this;
        }

        _inherits(PsOwnershipListComponent, _src_app_commonSRC_ps);

        return _createClass(PsOwnershipListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsOwnershipListComponent, "init", this, 3)([]);

            this.populateHeaderValueMap();

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
          value: function getContainerLookUpOptions(val) {
            return this.prepareLookUp(val);
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp(card) {
            var lookupDetails = {};
            lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.isEditable = true;
            lookupDetails.translateSubTitle = this.options.translate;
            lookupDetails.matCardCssSelectors = card.matCardCssSelectors;
            lookupDetails.requestMap = this.requestMap;
            lookupDetails.pageData = {
              operID: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].OWNERS_LIST_OPER_ID,
              title: 'owners_list_report_key'
            };
            lookupDetails.actionDetailsOptions = [{
              id: 'delete',
              buttonIcon: 'delete',
              labelOptions: {
                labelKey: 'delete_key'
              },
              actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.deleteOwnerEndPoint,
              cssClass: 'delete-benef fab-edit-button',
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              alertType: 'prompt',
              alertStyle: 'warning',
              alertLabel: 'are_you_sure_you_want_to_delete_the_related_owner_key',
              reloadList: true
            }, {
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
                route: 'add-owner',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ADD_OWNER_OPER_ID,
                  iconName: 'edit1',
                  title: 'edit_key'
                }
              },
              cssClass: 'edit-owner'
            }]; //Added by Marina TP:#1533524 to be able to reload owners list after delete

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
            var entityTypeMap = {};
            var idTypeMap = {};
            var idNumberMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            var designationMap = {};
            var ownershipPercentageMap = {};
            var statusMap = {};
            entityTypeMap = {
              key: 'entityTypeDescriptionConcat',
              value: ''
            };
            idTypeMap = {
              key: 'idTypeDescriptionConcat',
              value: ''
            };
            idNumberMap = {
              key: 'idNumber',
              value: ''
            };
            designationMap = {
              key: 'designationDescriptionConcat',
              value: ''
            };
            ownershipPercentageMap = {
              key: 'ownershipPercentage',
              value: ''
            };
            statusMap = {
              key: 'statusDesc',
              value: ''
            };
            headerTitleMap = {
              key: 'title',
              value: 'title',
              isEdit: false
            }; // headerSubtitleMap = {
            //   key: 'subTitle',
            //   value: 'cifNumber',
            //   isEdit: false,
            // };
            // key here will be used as label in look up details component

            this.labelValuesMap.set('entity_type_key', entityTypeMap); // this.labelValuesMap.set('currency_key', designationMap);

            this.labelValuesMap.set('id_type_key', idTypeMap);
            this.labelValuesMap.set('id_number_key', idNumberMap);
            this.labelValuesMap.set('designation_key', designationMap);
            this.labelValuesMap.set('ownershipPercentage', ownershipPercentageMap);
            this.labelValuesMap.set('status', statusMap);
            this.headerMap.set('title', headerTitleMap); // this.headerMap.set('subTitle', headerSubtitleMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(card) {
            if (card && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === card;
              });
              this.options.item = this.options.itemList[0];
              this.showSingleAccount = !this.showSingleAccount;
              this.options.showItemPopUp = !this.options.showItemPopUp;
            }

            this.onClickCard.emit(this.options);
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.cdRef.markForCheck();
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"]);

      PsOwnershipListComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      PsOwnershipListComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsOwnershipListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-ownership-list',
        template: _raw_loader_ps_ownership_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_ownership_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], PsOwnershipListComponent);
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
    "Nk4t":
    /*!****************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nk4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1vd25lcnNoaXAtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OBBF":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OBBF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div>\n    <ps-action-hyperlink [options]=\"addOwnerOptions\" class=\"add-owner-button\">\n    </ps-action-hyperlink>\n  </div>\n  <div class=\"ps-options-owner\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\"\n        [options]=\"getContainerLookUpOptions(itemOption)\" [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>";
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
    "hlCU":
    /*!***************************************************************!*\
      !*** ./src/app/pages/ownership-list/ownership-list.module.ts ***!
      \***************************************************************/

    /*! exports provided: OwnershipListPageModule */

    /***/
    function hlCU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnershipListPageModule", function () {
        return OwnershipListPageModule;
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


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_ownership_list_ps_ownership_list_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-ownership-list/ps-ownership-list.component.module */
      "+Chi");
      /* harmony import */


      var _ownership_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ownership-list.page */
      "GpOE");

      var routes = [{
        path: '',
        component: _ownership_list_page__WEBPACK_IMPORTED_MODULE_7__["OwnershipListPage"]
      }];

      var OwnershipListPageModule = /*#__PURE__*/_createClass(function OwnershipListPageModule() {
        _classCallCheck(this, OwnershipListPageModule);
      });

      OwnershipListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _commonBussinessSRC_psComponents_ps_ownership_list_ps_ownership_list_component_module__WEBPACK_IMPORTED_MODULE_6__["PsOwnershipListComponentModule"]],
        declarations: [_ownership_list_page__WEBPACK_IMPORTED_MODULE_7__["OwnershipListPage"]]
      })], OwnershipListPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-ownership-list-ownership-list-module-es5.js.map