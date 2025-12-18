(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[210], {
    /***/
    "TtBp":
    /*!*************************************************!*\
      !*** ./src/app/pages/welcome/welcome.module.ts ***!
      \*************************************************/

    /*! exports provided: WelcomePageModule */

    /***/
    function TtBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
        return WelcomePageModule;
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.page */
      "TxZw");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_menu_header_container_ps_complex_menu_header_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-menu-header-container/ps-complex-menu-header-container.module */
      "ab+Q");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_base_ps_template_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-base/ps-template-base.module */
      "IH4Z");

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_2__["WelcomePage"]
      }];

      var WelcomePageModule = /*#__PURE__*/_createClass(function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      });

      WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_base_ps_template_base_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBasePageModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_menu_header_container_ps_complex_menu_header_container_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexMenuHeaderContainerModule"]],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_2__["WelcomePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], WelcomePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=210-es5.js.map