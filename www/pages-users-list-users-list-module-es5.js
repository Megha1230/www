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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-users-list-users-list-module"], {
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
    "7jT/":
    /*!*************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PsUsersListComponentModule */

    /***/
    function jT_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsUsersListComponentModule", function () {
        return PsUsersListComponentModule;
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


      var _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */
      "yvgy");
      /* harmony import */


      var _ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ps-users-list.component */
      "Cuzk");

      var PsUsersListComponentModule = /*#__PURE__*/_createClass(function PsUsersListComponentModule() {
        _classCallCheck(this, PsUsersListComponentModule);
      });

      PsUsersListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__["PsUsersListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_5__["PsSelectLookupOptionListComponentModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__["PsUsersListComponent"]],
        entryComponents: [_ps_users_list_component__WEBPACK_IMPORTED_MODULE_6__["PsUsersListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsUsersListComponentModule);
      /***/
    },

    /***/
    "Cuzk":
    /*!******************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: PsUsersListComponent */

    /***/
    function Cuzk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsUsersListComponent", function () {
        return PsUsersListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_users_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-users-list.component.html */
      "pF22");
      /* harmony import */


      var _ps_users_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-users-list.component.scss */
      "QPBS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /* harmony import */


      var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../psServices/models/ps-commonBusiness.settings */
      "fOh1");

      var PsUsersListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsUsersListComponent() {
          var _this;

          _classCallCheck(this, PsUsersListComponent);

          _this = _callSuper(this, PsUsersListComponent);
          _this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.options = {}; // tslint:disable-next-line: no-output-on-prefix

          _this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          _this.bRefresh = false;
          return _this;
        }

        _inherits(PsUsersListComponent, _src_app_commonSRC_ps);

        return _createClass(PsUsersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsUsersListComponent, "init", this, 3)([]);

            this.populateUsersListMap();

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
          value: function prepareLookUp(user) {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.currencyFlag = '';
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.translateSubTitle = false;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.actionDetailsOptions = [];
            lookupDetails.reloadFunction = {
              func: function func() {
                var _this2 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this2.executionClass.reloadList());
                });
              },
              executionClass: this,
              params: []
            }; // if (this.commonProv.getPageByOperId(CommonBussinessConstant.ACTIVATE_END_USERS_REGISTRATION) !== undefined) { // ACTIVATE_END_USERS_REGISTRATION

            if (this.options.allowedActions.activate) {
              if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_SUSPEND) {
                lookupDetails.actionDetailsOptions.push({
                  id: 'activate',
                  labelOptions: {
                    labelKey: 'activate_key'
                  },
                  buttonIcon: 'paper-plane',
                  actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.activateCorporateUserEndpoint,
                  cssClass: 'fab-edit-button',
                  label: 'activate_key',
                  iconName: 'paper-plane',
                  actionType: 'activate',
                  alertType: 'input',
                  fcName: 'reasonDetails',
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].ACTIVATE_END_USERS_REGISTRATION
                });
              }
            } // if (this.commonProv.getPageByOperId(CommonBussinessConstant.SUSPEND_END_USERS_REGISTRATION) !== undefined) { // SUSPEND_END_USERS_REGISTRATION


            if (this.options.allowedActions.suspend) {
              if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_ACTIVE) {
                lookupDetails.actionDetailsOptions.push({
                  id: 'suspend',
                  labelOptions: {
                    labelKey: 'suspend_key'
                  },
                  label: 'suspend_key',
                  buttonIcon: 'information-circle-outline',
                  actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.suspendCorporateUserEndpoint,
                  cssClass: 'fab-edit-button',
                  iconName: 'information-circle-outline',
                  actionType: 'suspend',
                  alertType: 'input',
                  fcName: 'reasonDetails',
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].SUSPEND_END_USERS_REGISTRATION
                });
              }
            } // if (this.commonProv.getPageByOperId(CommonBussinessConstant.DELETE_END_USERS_REGISTRATION) !== undefined) { // DELETE_END_USERS_REGISTRATION


            if (this.options.allowedActions["delete"]) {
              lookupDetails.actionDetailsOptions.push({
                id: 'delete',
                labelOptions: {
                  labelKey: 'delete_key'
                },
                buttonIcon: 'delete',
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.deleteCorporateUserEndpoint,
                cssClass: 'fab-edit-button',
                label: 'delete_key',
                iconName: 'trash',
                actionType: 'delete',
                alertType: 'input',
                fcName: 'reasonDetails',
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].DELETE_END_USERS_REGISTRATION
              });
            } // if (this.commonProv.getPageByOperId(CommonBussinessConstant.EDIT_END_USERS_REGISTRATION) !== undefined) { // EDIT_END_USERS_REGISTRATION


            if (this.options.allowedActions.edit) {
              if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_ACTIVE) {
                lookupDetails.actionDetailsOptions.push({
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
                    route: 'register-user',
                    pageOptions: {
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EDIT_END_USERS_REGISTRATION,
                      iconName: 'paper',
                      title: 'edit_key'
                    }
                  }
                });
              }
            }

            if (user.userStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].USER_STATE_EXPIRED && this.options.allowedActions.restore) {
              lookupDetails.actionDetailsOptions.push({
                id: 'restore',
                label: 'restore_key',
                actionHyperlink: {
                  group: this.options.group,
                  iconOptions: {
                    iconName: 'restore-user',
                    labelOptions: {
                      labelKey: 'restore_key'
                    }
                  },
                  route: 'register-user',
                  pageOptions: {
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].RESTORE_END_USERS_REGISTRATION,
                    iconName: 'register-user',
                    title: 'restore_key'
                  },
                  navigationOptions: {
                    queryParams: {
                      restore: true
                    }
                  }
                }
              });
            }

            lookupDetails.statementOptions = {};
            return lookupDetails;
          }
        }, {
          key: "reloadList",
          value: function reloadList() {
            this.reloadFct.emit();
          }
        }, {
          key: "populateUsersListMap",
          value: function populateUsersListMap() {
            var userPhoneMap = {};
            var userNameMap = {};
            var userEmailMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            var alertLangMap = {};
            var allowedAccounts = {};
            var userStatusMap = {};
            var regSourceMap = {};
            var reasonMap = {};
            var userIndividualCifNoMap = {};
            var expiryDateMap = {};
            var includeLoginTimeYN = {};
            var arabicNameMap = {};
            var idTypeMap = {};
            var idNumberMap = {};
            userEmailMap = {
              key: 'email',
              value: '',
              isEdit: false
            };
            userPhoneMap = {
              key: 'mobileNumber',
              value: '',
              isEdit: false
            };
            userNameMap = {
              key: 'newUserName',
              value: '',
              isEdit: false
            };
            allowedAccounts = {
              key: 'allowedAccounts',
              value: '',
              isEdit: false
            };
            userStatusMap = {
              key: 'userStatus',
              value: '',
              isEdit: false
            };
            alertLangMap = {
              key: 'alertLanguage',
              value: '',
              isEdit: false
            };
            reasonMap = {
              key: 'reason',
              value: '',
              isEdit: false
            };
            regSourceMap = {
              key: 'onlineRegYN',
              value: '',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'newName',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'businessProfileDescription',
              isEdit: false
            };
            userIndividualCifNoMap = {
              key: 'userIndividualCifNo',
              value: 'userIndividualCifNo',
              isEdit: false
            };
            expiryDateMap = {
              key: 'expiryDateStr',
              value: '--/---/---',
              isDetailOption: true
            };
            includeLoginTimeYN = {
              key: 'includeLoginTimeYNDesc',
              value: 'includeLoginTimeYNDesc',
              showMappingOnNoValue: true,
              isEdit: false
            };
            arabicNameMap = {
              key: 'arabicName',
              value: '',
              isEdit: false
            };
            idTypeMap = {
              key: 'corporateIdTypeDesc',
              value: '',
              isEdit: false
            };
            idNumberMap = {
              key: 'corporateIdNumber',
              value: '',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('user_name_key', userNameMap);
            this.labelValuesMap.set('email_key', userEmailMap);
            this.labelValuesMap.set('phone_number_key', userPhoneMap);
            this.labelValuesMap.set('individual_cif_noâ€?', userIndividualCifNoMap); // this.labelValuesMap.set('status_description_key', statusDescriptionMap);

            this.labelValuesMap.set('reason_key', reasonMap);
            this.labelValuesMap.set('alert_language_key', alertLangMap);
            this.labelValuesMap.set('source_key', regSourceMap);
            this.labelValuesMap.set('accounts_key', allowedAccounts);
            this.labelValuesMap.set('expiry_date_key', expiryDateMap);
            this.labelValuesMap.set('include_in_login_time_frame_key', includeLoginTimeYN);
            this.labelValuesMap.set('arabic_name_key', arabicNameMap);
            this.labelValuesMap.set('id_type_key', idTypeMap);
            this.labelValuesMap.set('id_number_key', idNumberMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(item) {
            this.onClickCard.emit(this.options);
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateListPage"]);

      PsUsersListComponent.ctorParameters = function () {
        return [];
      };

      PsUsersListComponent.propDecorators = {
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
      PsUsersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-users-list',
        template: _raw_loader_ps_users_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_ps_users_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PsUsersListComponent);
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
    "QPBS":
    /*!********************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QPBS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy11c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
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
    "ii6P":
    /*!*******************************************************!*\
      !*** ./src/app/pages/users-list/users-list.module.ts ***!
      \*******************************************************/

    /*! exports provided: UsersListPageModule */

    /***/
    function ii6P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListPageModule", function () {
        return UsersListPageModule;
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


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _users_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users-list.page */
      "lAGo");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_users_list_ps_users_list_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.module */
      "7jT/");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_alert_controller_ps_template_alert_controller_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-alert-controller/ps-template-alert-controller.template.module */
      "p0NE");

      var routes = [{
        path: '',
        component: _users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"]
      }];

      var UsersListPageModule = /*#__PURE__*/_createClass(function UsersListPageModule() {
        _classCallCheck(this, UsersListPageModule);
      });

      UsersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_users_list_ps_users_list_component_module__WEBPACK_IMPORTED_MODULE_7__["PsUsersListComponentModule"], src_app_commonSRC_psTemplates_ps_template_alert_controller_ps_template_alert_controller_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateAlertControllerModule"]],
        declarations: [_users_list_page__WEBPACK_IMPORTED_MODULE_6__["UsersListPage"]]
      })], UsersListPageModule);
      /***/
    },

    /***/
    "pF22":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-users-list/ps-users-list.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pF22(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n   <div *ngIf=\"options?.itemList?.length > 0\">\n      <!-- <ps-container-lookup-option [options]=\"containerLookUpOptions\" (clickedCard)=\"updateCard($event)\" [itemCard]=\"getItem(itemOption)\" ></ps-container-lookup-option> -->\n      <div *ngFor=\"let item of options.itemList\">\n         <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions(item)\" [itemCard]=\"item\"\n            (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n      </div>\n   </div>\n</ps-template-list>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-users-list-users-list-module-es5.js.map