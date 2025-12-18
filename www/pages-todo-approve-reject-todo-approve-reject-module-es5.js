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

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-todo-approve-reject-todo-approve-reject-module"], {
    /***/
    "BDF1":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.page.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: PsTemplateApproveRejectData */

    /***/
    function BDF1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateApproveRejectData", function () {
        return PsTemplateApproveRejectData;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_template_approve_reject_data_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-template-approve-reject-data.page.html */
      "fPKs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_integration_ps_integration_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/integration/ps-integration-constants */
      "MNPF");
      /* harmony import */


      var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-template-base/ps-template-base.page */
      "uqA0");

      var PsTemplateApproveRejectData = /*#__PURE__*/function (_ps_template_base_ps_) {
        function PsTemplateApproveRejectData(common) {
          var _this;

          _classCallCheck(this, PsTemplateApproveRejectData);

          _this = _callSuper(this, PsTemplateApproveRejectData);
          _this.common = common;
          _this.approveOptions = {
            labelKey: 'approve_key',
            group: _this.options.group,
            postCallFunction: {
              func: function func(returnedData) {
                var _this2 = this;

                return new Promise(function (resolve, reject) {
                  _this2.executionClass.refreshList(returnedData);

                  resolve(true);
                });
              },
              executionClass: _this,
              params: []
            }
          };
          _this.rejectOptions = {
            labelKey: 'reject_key',
            group: _this.options.group,
            preCallFunction: {
              func: function func() {
                var _this3 = this;

                return new Promise(function (resolve, reject) {
                  _this3.executionClass.confirm().then(function () {
                    resolve(true);
                  })["catch"](function () {
                    reject();
                  });
                });
              },
              executionClass: _this,
              params: []
            },
            postCallFunction: {
              func: function func(returnedData) {
                var _this4 = this;

                return new Promise(function (resolve, reject) {
                  _this4.executionClass.refreshList(returnedData);

                  resolve(true);
                });
              },
              executionClass: _this,
              params: []
            }
          };
          _this.previewPanelOptions = {
            isExpandable: true,
            labelKey: _this.common.translate('summary_key'),
            iconName: 'keypad',
            expanded: true
          };
          return _this;
        }

        _inherits(PsTemplateApproveRejectData, _ps_template_base_ps_);

        return _createClass(PsTemplateApproveRejectData, [{
          key: "refreshList",
          value: function refreshList(returnedData) {
            //added by ghada, AZDB-5485 for refreshing whole draft list not just JBPM since the template now is being opened from other draft records
            this.common.events.publish('draft:refresh');
          }
        }, {
          key: "operId",
          get: function get() {
            var _iterator = _createForOfIteratorHelper(this.options.data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                if (item.labelkey == "operId") return item.value;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.oper_Id = 'operId_' + this.operId;
            this.enableTranslation = this.options.isPendingDeletion ? true : false;
            this.approveOptions.group = this.options.group;
            this.approveOptions.submitServiceUrl = this.options.isPendingDeletion ? "" : src_app_commonBussinessSRC_psServices_integration_ps_integration_constants__WEBPACK_IMPORTED_MODULE_3__["IntegrationConstants"].JBPM.serviceUrl.completeBpmTaskFromInterceptor;
            this.rejectOptions.group = this.options.group;
            this.rejectOptions.submitServiceUrl = this.options.isPendingDeletion ? "" : src_app_commonBussinessSRC_psServices_integration_ps_integration_constants__WEBPACK_IMPORTED_MODULE_3__["IntegrationConstants"].JBPM.serviceUrl.completeBpmTaskFromInterceptor;

            if (this.options.data) {
              this.approveOptions.extraParams = Object.assign(Object.assign({
                data: this.options.data
              }, this.options.extraParams), {
                isActionButton: true
              });
              this.rejectOptions.extraParams = Object.assign(Object.assign({
                data: this.options.data
              }, this.options.extraParams), {
                isActionButton: true
              });
            }

            this.commonProv.setFormData(this.options.group, this.options.requestObject);
          }
        }, {
          key: "confirm",
          value: function confirm() {
            var _this5 = this;

            var modalID = 'user-confirmation-popup';
            return new Promise(function (resolve, reject) {
              var alertController = {
                cssClass: modalID,
                header: 'enter_reason_key',
                inputs: [{
                  type: 'keyin',
                  options: {
                    placeHolder: 'reason_key',
                    fcName: 'rejectionReason',
                    group: _this5.options.group,
                    forceShowOnPreview: true
                  }
                }],
                buttons: [{
                  role: 'cancel',
                  options: {
                    labelKey: 'cancel_key',
                    psClass: 'user-confirmation-popup-cancel-button',
                    group: _this5.options.group
                  },
                  handler: function handler() {
                    _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_4__["CommonUtils"].dismissAllModals(null, null, modalID);

                    reject();
                  }
                }, {
                  options: {
                    labelKey: 'submit_key',
                    psClass: 'user-confirmation-popup-submit-button',
                    group: _this5.options.group
                  },
                  handler: function handler() {
                    _this5.rejectOptions.extraParams = Object.assign(Object.assign({}, _this5.rejectOptions.extraParams), {
                      bpmParametersMap: {
                        reject_reason_out: _this5.options.requestObject.reason
                      }
                    });

                    _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_4__["CommonUtils"].dismissAllModals(null, null, modalID);

                    resolve();
                  }
                }]
              };

              _this5.commonProv.presentPsAlert(alertController, modalID);
            });
          }
        }]);
      }(_ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__["PsTemplateBasePage"]);

      PsTemplateApproveRejectData.ctorParameters = function () {
        return [{
          type: _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }];
      };

      PsTemplateApproveRejectData.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        oper_Id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
          args: ['class']
        }]
      };
      PsTemplateApproveRejectData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-template-approve-reject-data',
        template: _raw_loader_ps_template_approve_reject_data_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]])], PsTemplateApproveRejectData);
      /***/
    },

    /***/
    "d75m":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PsTemplateApproveRejectDataModule */

    /***/
    function d75m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateApproveRejectDataModule", function () {
        return PsTemplateApproveRejectDataModule;
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


      var _ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-template-approve-reject-data.page */
      "BDF1");

      var PsTemplateApproveRejectDataModule = /*#__PURE__*/_createClass(function PsTemplateApproveRejectDataModule() {
        _classCallCheck(this, PsTemplateApproveRejectDataModule);
      });

      PsTemplateApproveRejectDataModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateScreenPageModule"]],
        declarations: [_ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__["PsTemplateApproveRejectData"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__["PsTemplateApproveRejectData"]],
        exports: [_ps_template_approve_reject_data_page__WEBPACK_IMPORTED_MODULE_5__["PsTemplateApproveRejectData"]]
      })], PsTemplateApproveRejectDataModule);
      /***/
    },

    /***/
    "fPKs":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.page.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fPKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ps-template-screen>\n  <ng-container *ngIf=\"options?.data\">\n    <ps-container-panel [options]=\"previewPanelOptions\">\n      <div\n        *ngFor=\"let item of options.data\"\n        class=\"preview-wrapper\"\n        [class]=\"'preview-label-' + item.labelkey\"\n      >\n      <ng-conatiner *ngIf=\"item.value\">\n        <ps-label        \n        *ngIf=\"enableTranslation\" \n          class=\"preview-label\"\n          [options]=\"{labelKey:item.labelkey+'_key',translate:true}\"\n        >\n        </ps-label>\n        <ps-label\n        *ngIf=\"!enableTranslation\"\n        class=\"preview-label\"\n        [options]=\"{labelKey:item.labelkey+'_key',translate:false}\"\n      >\n      </ps-label>\n        <ps-label\n          class=\"preview-value\"\n          [options]=\"{labelKey:item.value, translate:false}\"\n        >\n        </ps-label>\n      </ng-conatiner>\n      </div>\n    </ps-container-panel>\n  </ng-container>\n  <ng-container psFooter>\n    <ps-button-cancel\n      class=\"footer-buttons\"\n      [id]=\"'todo_cancel'\"\n    ></ps-button-cancel>\n    <ps-button-approve\n      class=\"footer-buttons\"\n      [options]=\"approveOptions\"\n      id=\"todo_approve\"\n    >\n    </ps-button-approve>\n    <ps-button-reject\n      class=\"footer-buttons\"\n      [options]=\"rejectOptions\"\n      id=\"todo_reject\"\n    >\n    </ps-button-reject>\n  </ng-container>\n</ps-template-screen>\n";
      /***/
    },

    /***/
    "gKqT":
    /*!***************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
      \***************************************************/

    /*! exports provided: OmniBasePage */

    /***/
    function gKqT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OmniBasePage", function () {
        return OmniBasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./omni-base.page.html */
      "mVVo");
      /* harmony import */


      var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./omni-base.page.scss */
      "s2T5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/customization/psServices/util/common-cust-utils */
      "oS+F");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");

      var OmniBasePage = /*#__PURE__*/function () {
        function OmniBasePage() {
          _classCallCheck(this, OmniBasePage);

          this.isPageDisabled = false;
          this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
          this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]); // this.getScreenTranslations();
        }

        return _createClass(OmniBasePage, [{
          key: "init",
          value: function init() {
            this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
            this.customizationMap = this.commonProv.returnOperCustomization();
            var navParams = this.navigationServices.getAllParams();
            var formDisObj = {}; // let oper = PsCommonSettings.oper_ID;
            // PsCommonSettings.currentListOfSteps = {};

            if (navParams && navParams.readOnlypage === true) {
              formDisObj.IS_READONLY = 1; // Modified by Richie for #BUG 1259353

              if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
              }
            } else if (this.customizationMap) {
              formDisObj.IS_READONLY = 0;
              this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            } // End Richie
            // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif


            this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];

            if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
              this.getScreenTranslations(this.currentOperID);
            } // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif

          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.viewDidEnter();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.viewWillLeave();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.viewWillEnter();
          }
        }, {
          key: "viewWillEnter",
          value: function viewWillEnter() {}
        }, {
          key: "disableForm",
          value: function disableForm(formGroup) {
            var _this6 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this6.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
              }
            }
          }
        }, {
          key: "viewDidEnter",
          value: function viewDidEnter() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              didEnter: true
            });
            this.commonProv.dismissLoading();
            this.disableForm(this.baseFormGroup);
            src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
            this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
          }
        }, {
          key: "viewWillLeave",
          value: function viewWillLeave() {
            this.commonProv.checkViewBS.next({
              value: true,
              page: this,
              willLeave: true
            });
            this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
            this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, {
              value: true,
              page: this,
              willLeave: true
            });
          } // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
          // added after all the changeEvents are finished to disable the form 

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this7 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this7.disableForm(_this7.baseFormGroup);

                _this7.isPageDisabled = true;
              }, 300);
            }
          } // AZDB-7529 - Start - AMANAOI250035

        }, {
          key: "getScreenTranslations",
          value: function getScreenTranslations(screenOperId) {
            var operationId = screenOperId ? screenOperId : 2222;
            var activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';

            if (operationId && activeLanguage) {
              this.commonProv.language.getOperTranslation(activeLanguage, operationId);
            }
          }
        }]);
      }();

      OmniBasePage.ctorParameters = function () {
        return [];
      };

      OmniBasePage.propDecorators = {
        psClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class']
        }]
      };
      OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], OmniBasePage);
      /***/
    },

    /***/
    "irmf":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/todo-approve-reject/todo-approve-reject.module.ts ***!
      \*************************************************************************/

    /*! exports provided: TodoApproveRejectPageModule */

    /***/
    function irmf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TodoApproveRejectPageModule", function () {
        return TodoApproveRejectPageModule;
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


      var src_app_commonSRC_psTemplates_ps_template_approve_reject_data_ps_template_approve_reject_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-approve-reject-data/ps-template-approve-reject-data.module */
      "d75m");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _todo_approve_reject_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./todo-approve-reject.page */
      "Tgbh");

      var routes = [{
        path: '',
        component: _todo_approve_reject_page__WEBPACK_IMPORTED_MODULE_6__["TodoApproveRejectPage"]
      }];

      var TodoApproveRejectPageModule = /*#__PURE__*/_createClass(function TodoApproveRejectPageModule() {
        _classCallCheck(this, TodoApproveRejectPageModule);
      });

      TodoApproveRejectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_approve_reject_data_ps_template_approve_reject_data_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateApproveRejectDataModule"]],
        declarations: [_todo_approve_reject_page__WEBPACK_IMPORTED_MODULE_6__["TodoApproveRejectPage"]]
      })], TodoApproveRejectPageModule);
      /***/
    },

    /***/
    "mVVo":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mVVo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n";
      /***/
    },

    /***/
    "s2T5":
    /*!*****************************************************!*\
      !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function s2T5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-todo-approve-reject-todo-approve-reject-module-es5.js.map