(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-deactivation-account-deactivation-module"], {
    /***/
    "mYOi":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/account-deactivation/account-deactivation.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AccountDeactivationPageModule */

    /***/
    function mYOi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountDeactivationPageModule", function () {
        return AccountDeactivationPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_reasons_ps_dropdown_reasons_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-reasons/ps-dropdown-reasons.component.module */
      "DxCd");
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
      /*! ../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _account_deactivation_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account-deactivation.page */
      "WXz3");

      var routes = [{
        path: '',
        component: _account_deactivation_page__WEBPACK_IMPORTED_MODULE_7__["AccountDeactivationPage"]
      }];

      var AccountDeactivationPageModule = /*#__PURE__*/_createClass(function AccountDeactivationPageModule() {
        _classCallCheck(this, AccountDeactivationPageModule);
      });

      AccountDeactivationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_reasons_ps_dropdown_reasons_component_module__WEBPACK_IMPORTED_MODULE_3__["PsDropdownReasonsComponentModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateFormModule"]],
        declarations: [_account_deactivation_page__WEBPACK_IMPORTED_MODULE_7__["AccountDeactivationPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AccountDeactivationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-account-deactivation-account-deactivation-module-es5.js.map