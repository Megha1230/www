(function () {
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dynamic-component-page-loader-dynamic-component-page-loader-module"], {
    /***/
    "2ZGv":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.module.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: PsComplexInappUrlComponentModule */

    /***/
    function ZGv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexInappUrlComponentModule", function () {
        return PsComplexInappUrlComponentModule;
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


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-complex-inapp-url.component */
      "2eY9");

      var PsComplexInappUrlComponentModule = /*#__PURE__*/_createClass(function PsComplexInappUrlComponentModule() {
        _classCallCheck(this, PsComplexInappUrlComponentModule);
      });

      PsComplexInappUrlComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponent"]],
        entryComponents: [_ps_complex_inapp_url_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexInappUrlComponentModule);
      /***/
    },

    /***/
    "2eY9":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: PsComplexInappUrlComponent */

    /***/
    function eY9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexInappUrlComponent", function () {
        return PsComplexInappUrlComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_inapp_url_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-inapp-url.component.html */
      "APAi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsComplexInappUrlComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexInappUrlComponent(commonService, logger) {
          var _this;

          _classCallCheck(this, PsComplexInappUrlComponent);

          _this = _callSuper(this, PsComplexInappUrlComponent, [commonService, logger]);
          _this.htmlViewerOptions = {};
          return _this;
        }

        _inherits(PsComplexInappUrlComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexInappUrlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // super.init();
            this.htmlViewerOptions.directURL = this.options.url;

            if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].isEmptyOrNull(this.options.type)) {
              this.options.type = 'iframe';
            }

            if (this.options.type == 'inapp' && this.options.url) {
              var browser = this.common.inAppBrowser.create(this.options.url);
              browser.show();
            }
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_3__["PsBaseFieldComponent"]);

      PsComplexInappUrlComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }];
      };

      PsComplexInappUrlComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PsComplexInappUrlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-inapp-url',
        template: _raw_loader_ps_complex_inapp_url_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])], PsComplexInappUrlComponent);
      /***/
    },

    /***/
    "APAi":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function APAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"options?.url\">\n  <ps-action-button *ngIf=\"options?.customRefresh && options?.customRefresh.func\">\n\n  </ps-action-button>\n\n  <ps-container-html-viewer *ngIf=\"options.type == 'iframe' \" [options]=\"htmlViewerOptions\" [id]=\"id\">\n  </ps-container-html-viewer>\n</ng-container>";
      /***/
    },

    /***/
    "Gt6D":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/dynamic-component-page-loader/dynamic-component-page-loader.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: DynamicComponentPageLoaderPageModule */

    /***/
    function Gt6D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicComponentPageLoaderPageModule", function () {
        return DynamicComponentPageLoaderPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module */
      "Aju7");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_inapp_url_ps_complex_inapp_url_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-inapp-url/ps-complex-inapp-url.component.module */
      "2ZGv");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module */
      "dz/v");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_specimen_ps_complex_specimen_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-specimen/ps-complex-specimen.component.module */
      "DtgQ");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _dynamic_component_page_loader_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dynamic-component-page-loader.page */
      "eThR");

      var routes = [{
        path: '',
        component: _dynamic_component_page_loader_page__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentPageLoaderPage"]
      }];

      var DynamicComponentPageLoaderPageModule = /*#__PURE__*/_createClass(function DynamicComponentPageLoaderPageModule() {
        _classCallCheck(this, DynamicComponentPageLoaderPageModule);
      });

      DynamicComponentPageLoaderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_7__["PsComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexCallSlotComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_specimen_ps_complex_specimen_component_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexSpecimenComponentModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateFormModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_inapp_url_ps_complex_inapp_url_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexInappUrlComponentModule"]],
        declarations: [_dynamic_component_page_loader_page__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentPageLoaderPage"]]
      })], DynamicComponentPageLoaderPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dynamic-component-page-loader-dynamic-component-page-loader-module-es5.js.map