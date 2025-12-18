(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cif-list-report-cif-list-report-module"], {
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
    "82RF":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cif-list-report/cif-list-report.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ReportCIFListPageModule */

    /***/
    function RF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportCIFListPageModule", function () {
        return ReportCIFListPageModule;
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


      var _cif_list_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cif-list-report.page */
      "m0f4");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_cif_list_ps_cif_list_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.module */
      "wLyJ");

      var routes = [{
        path: '',
        component: _cif_list_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportCIFListPage"]
      }];

      var ReportCIFListPageModule = /*#__PURE__*/_createClass(function ReportCIFListPageModule() {
        _classCallCheck(this, ReportCIFListPageModule);
      });

      ReportCIFListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_cif_list_ps_cif_list_component_module__WEBPACK_IMPORTED_MODULE_7__["PsOptionCifReportListComponentModule"]],
        declarations: [_cif_list_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportCIFListPage"]]
      })], ReportCIFListPageModule);
      /***/
    },

    /***/
    "C7pM":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PsOptionCifReportListComponent */

    /***/
    function C7pM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsOptionCifReportListComponent", function () {
        return PsOptionCifReportListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_cif_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-cif-list.component.html */
      "kpj1");
      /* harmony import */


      var _ps_cif_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-cif-list.component.scss */
      "vfPx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /* harmony import */


      var _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../psServices/models/ps-commonBusiness.settings */
      "fOh1");

      var PsOptionCifReportListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsOptionCifReportListComponent(commonProv, omniPull) {
          var _this;

          _classCallCheck(this, PsOptionCifReportListComponent);

          _this = _callSuper(this, PsOptionCifReportListComponent);
          _this.omniPull = omniPull;
          _this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-next-line: no-output-on-prefix

          _this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.cifReportLabelValuesMap = new Map();
          _this.cifReportHeaderMap = new Map();
          _this.noCifListFound = false;
          _this.firstNameKey = 'first_name_key';
          _this.lastNameKey = 'last_name_key';
          _this.motherfirstNameKey = 'mother_first_name_key';
          _this.motherlastNameKey = 'mother_last_name_key';
          _this.shortNameKey = 'short_name_key';
          _this.longNameKey = 'long_name_key';
          return _this;
        }

        _inherits(PsOptionCifReportListComponent, _src_app_commonSRC_ps);

        return _createClass(PsOptionCifReportListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsOptionCifReportListComponent, "init", this, 3)([]);

            this.populateCifListMap();

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
          value: function prepareLookUp(val) {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.currencyFlag = "";
            lookupDetails.labelsValueMap = new Map(_toConsumableArray(this.cifReportLabelValuesMap));
            lookupDetails.headerMap = this.cifReportHeaderMap;

            if (val.cifType == 'T') {
              lookupDetails.labelsValueMap["delete"](this.firstNameKey);
              lookupDetails.labelsValueMap["delete"](this.lastNameKey);
              lookupDetails.labelsValueMap["delete"](this.motherlastNameKey);
              lookupDetails.labelsValueMap["delete"](this.motherfirstNameKey);
            } else if (val.cifType == 'V') {
              lookupDetails.labelsValueMap["delete"](this.shortNameKey);
              lookupDetails.labelsValueMap["delete"](this.longNameKey);
            }

            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.translateSubTitle = false;
            lookupDetails.actionDetailsOptions = [];
            lookupDetails.itemList = this.options.itemList;

            if (val.statusCode === null || val.statusCode === "DR" || val.statusCode === "I") {
              lookupDetails.actionDetailsOptions.push({
                id: 'delete',
                labelOptions: {
                  labelKey: 'delete_key'
                },
                buttonIcon: "delete",
                actionUrl: _psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.deleteSubmitData,
                cssClass: "fab-edit-button",
                label: "delete_key",
                iconName: "trash",
                actionType: "Submit",
                alertMessage: "alert_delete_cif_request_key",
                alertType: "prompt",
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CIF_OPENING_DELETE_OPER_ID,
                detailServiceUrl: "rest/omniCorePull/returnCifInformation",
                detailServiceCallOnAction: true,
                postCallFunction: {
                  func: function func() {
                    var _this2 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this2.executionClass.reloadList());
                    });
                  },
                  executionClass: this,
                  params: []
                }
              }, {
                id: 'edit',
                label: "edit_key",
                actionHyperlink: {
                  group: this.options.group,
                  iconOptions: {
                    iconName: "paper",
                    labelOptions: {
                      labelKey: 'edit_key'
                    }
                  },
                  route: "cif-opening",
                  pageOptions: {
                    operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CIF_OPENING_EDIT_OPER_ID,
                    iconName: "paper",
                    title: "edit_key"
                  },
                  preCallFunction: {
                    func: function func() {
                      var _this3 = this;

                      return new Promise(function (resolve, reject) {
                        resolve(_this3.executionClass.prepareCIFDetails(lookupDetails.actionDetailsOptions[1].actionHyperlink));
                      });
                    },
                    executionClass: this,
                    params: []
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
          key: "populateCifListMap",
          value: function populateCifListMap() {
            var branchCodeMap = {};
            var cifNameMap = {};
            var cifTypeDescMap = {};
            var dateCreationMap = {};
            var firstNameMap = {};
            var lastNameMap = {};
            var motherFirstNameMap = {};
            var motherLastNameMap = {};
            var mobileMap = {};
            var statusMap = {};
            var telMap = {};
            var userCifNoMap = {};
            var shortNameMap = {};
            var longNameMap = {};
            branchCodeMap = {
              key: "branchCode",
              value: ""
            };
            cifNameMap = {
              key: "title",
              value: "cifName",
              isEdit: false,
              formGroupMap: {
                labelKey: "",
                placeHolder: "",
                fcName: "title"
              }
            };
            cifTypeDescMap = {
              key: "cifTypeDesc",
              value: ""
            };
            dateCreationMap = {
              key: "dateCreation",
              value: ""
            };
            firstNameMap = {
              key: "firstName",
              value: ""
            };
            lastNameMap = {
              key: "lastName",
              value: ""
            };
            shortNameMap = {
              key: "shortName",
              value: ""
            };
            longNameMap = {
              key: "longName",
              value: ""
            };
            motherFirstNameMap = {
              key: "motherFirstName",
              value: ""
            };
            motherLastNameMap = {
              key: "motherLastName",
              value: ""
            };
            mobileMap = {
              key: "mobile",
              value: ""
            };
            userCifNoMap = {
              key: "subTitle",
              value: "userCifNo",
              isEdit: false,
              formGroupMap: {
                labelKey: "",
                placeHolder: "",
                fcName: "subTitle"
              }
            };
            statusMap = {
              key: "status",
              value: ""
            };
            telMap = {
              key: "tel",
              value: ""
            };
            this.cifReportLabelValuesMap.set("branch_key", branchCodeMap);
            this.cifReportLabelValuesMap.set("status_key", statusMap);
            this.cifReportLabelValuesMap.set("cif_key", cifTypeDescMap);
            this.cifReportLabelValuesMap.set("creation_date_key", dateCreationMap);
            this.cifReportLabelValuesMap.set(this.shortNameKey, shortNameMap);
            this.cifReportLabelValuesMap.set(this.longNameKey, longNameMap);
            this.cifReportLabelValuesMap.set(this.firstNameKey, firstNameMap);
            this.cifReportLabelValuesMap.set(this.lastNameKey, lastNameMap);
            this.cifReportLabelValuesMap.set(this.motherfirstNameKey, motherFirstNameMap);
            this.cifReportLabelValuesMap.set(this.motherlastNameKey, motherLastNameMap);
            this.cifReportLabelValuesMap.set("mobile_key", mobileMap);
            this.cifReportLabelValuesMap.set("telephone_key", telMap);
            this.cifReportHeaderMap.set("title", cifNameMap);
            this.cifReportHeaderMap.set("subTitle", userCifNoMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(item) {
            this.onClickCard.emit(this.options);
          }
        }, {
          key: "prepareCIFDetails",
          value: function prepareCIFDetails(actionCard) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var generalRequestData = {
                commonParametersList: {
                  userCifNo: actionCard.navigationOptions.queryParams.userCifNo
                }
              };

              _this4.omniPull.returnCIFDetails(generalRequestData).then(function (result) {
                _this4.commonProv.copyObject(actionCard.navigationOptions.queryParams, result.data, false);

                var data = result.data;
                actionCard.navigationOptions.queryParams = Object.assign({
                  ScreenVO: Object.assign({
                    data: data
                  }, actionCard.navigationOptions.queryParams)
                }, actionCard.navigationOptions.queryParams);

                _this4.commonProv.prepareResult(actionCard.navigationOptions.queryParams.ScreenVO, true);

                resolve(true);
              });
            });
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateListPage"]);

      PsOptionCifReportListComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsOptionCifReportListComponent.propDecorators = {
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
      PsOptionCifReportListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "ps-cif-list",
        template: _raw_loader_ps_cif_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_ps_cif_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsOptionCifReportListComponent);
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
          var _this5;

          _classCallCheck(this, PsTemplateView);

          _this5 = _callSuper(this, PsTemplateView);
          _this5.events = events;
          _this5.cancelOptions = {
            labelKey: 'cancel_key',
            group: _this5.options.group
          };
          _this5.spinner = false;
          _this5.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          }; // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument

          _this5.reqStartEvent = events.subscribe('network:request:started', function (time) {
            _this5.spinner = true;
          });
          _this5.reqCompletEvent = events.subscribe('network:request:completed', function (time) {
            _this5.spinner = false;
          });
          return _this5;
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
    "kpj1":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kpj1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let item of options.itemList\">\n      <ps-container-lookup-option [id]=\"id + '_opt'\" [options]=\"getContainerLookUpOptions(item)\" [itemCard]=\"item\"\n        (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>";
      /***/
    },

    /***/
    "vfPx":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.scss ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vfPx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jaWYtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wLyJ":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-cif-list/ps-cif-list.component.module.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: PsOptionCifReportListComponentModule */

    /***/
    function wLyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsOptionCifReportListComponentModule", function () {
        return PsOptionCifReportListComponentModule;
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


      var _ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-cif-list.component */
      "C7pM");

      var PsOptionCifReportListComponentModule = /*#__PURE__*/_createClass(function PsOptionCifReportListComponentModule() {
        _classCallCheck(this, PsOptionCifReportListComponentModule);
      });

      PsOptionCifReportListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOptionCifReportListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOptionCifReportListComponent"]],
        entryComponents: [_ps_cif_list_component__WEBPACK_IMPORTED_MODULE_5__["PsOptionCifReportListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsOptionCifReportListComponentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cif-list-report-cif-list-report-module-es5.js.map