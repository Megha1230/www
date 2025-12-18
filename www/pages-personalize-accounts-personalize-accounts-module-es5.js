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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-personalize-accounts-personalize-accounts-module"], {
    /***/
    "/qQm":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/personalize-accounts/personalize-accounts.module.ts ***!
      \***************************************************************************/

    /*! exports provided: PersonalizeAccountsPageModule */

    /***/
    function _qQm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalizeAccountsPageModule", function () {
        return PersonalizeAccountsPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module */
      "HbOp");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-accounts/ps-lookup-own-accounts.component.module */
      "xB6I");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _personalize_accounts_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./personalize-accounts.page */
      "cCdF");

      var routes = [{
        path: '',
        component: _personalize_accounts_page__WEBPACK_IMPORTED_MODULE_10__["PersonalizeAccountsPage"]
      }];

      var PersonalizeAccountsPageModule = /*#__PURE__*/_createClass(function PersonalizeAccountsPageModule() {
        _classCallCheck(this, PersonalizeAccountsPageModule);
      });

      PersonalizeAccountsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_5__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_6__["PsTemplateFormModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateViewModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_accounts_ps_lookup_own_accounts_component_module__WEBPACK_IMPORTED_MODULE_4__["PsLookupOwnAccountComponentModule"], src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component_module__WEBPACK_IMPORTED_MODULE_3__["PsAccountsListComponentModule"]],
        declarations: [_personalize_accounts_page__WEBPACK_IMPORTED_MODULE_10__["PersonalizeAccountsPage"]]
      })], PersonalizeAccountsPageModule);
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
    "HbOp":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PsAccountsListComponentModule */

    /***/
    function HbOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsAccountsListComponentModule", function () {
        return PsAccountsListComponentModule;
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


      var _ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-accounts-list.component */
      "OVQh");

      var PsAccountsListComponentModule = /*#__PURE__*/_createClass(function PsAccountsListComponentModule() {
        _classCallCheck(this, PsAccountsListComponentModule);
      });

      PsAccountsListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateListModule"]],
        exports: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        entryComponents: [_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsAccountsListComponentModule);
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
    }
  }]);
})();
//# sourceMappingURL=pages-personalize-accounts-personalize-accounts-module-es5.js.map