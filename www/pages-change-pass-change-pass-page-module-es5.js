(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-pass-change-pass-page-module"], {
    /***/
    "qM1/":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component.module.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsComplexPasswordConfirmModule */

    /***/
    function qM1_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexPasswordConfirmModule", function () {
        return PsComplexPasswordConfirmModule;
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


      var _ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-complex-password-confirm.component */
      "jedr");

      var PsComplexPasswordConfirmModule = /*#__PURE__*/_createClass(function PsComplexPasswordConfirmModule() {
        _classCallCheck(this, PsComplexPasswordConfirmModule);
      });

      PsComplexPasswordConfirmModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexPasswordConfirmComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexPasswordConfirmComponent"]],
        entryComponents: [_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexPasswordConfirmComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexPasswordConfirmModule);
      /***/
    },

    /***/
    "tOhn":
    /*!**************************************************************!*\
      !*** ./src/app/pages/change-pass/change-pass.page.module.ts ***!
      \**************************************************************/

    /*! exports provided: ChangePassPageModule */

    /***/
    function tOhn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePassPageModule", function () {
        return ChangePassPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_password_confirm_ps_complex_password_confirm_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component.module */
      "qM1/");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _change_pass_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./change-pass.page */
      "t3Id");

      var routes = [{
        path: '',
        component: _change_pass_page__WEBPACK_IMPORTED_MODULE_7__["ChangePassPage"]
      }];

      var ChangePassPageModule = /*#__PURE__*/_createClass(function ChangePassPageModule() {
        _classCallCheck(this, ChangePassPageModule);
      });

      ChangePassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateFormModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_password_confirm_ps_complex_password_confirm_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexPasswordConfirmModule"]],
        declarations: [_change_pass_page__WEBPACK_IMPORTED_MODULE_7__["ChangePassPage"]]
      })], ChangePassPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-change-pass-change-pass-page-module-es5.js.map