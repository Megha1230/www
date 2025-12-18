(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cash-and-cheque-collection-request-report-cash-and-cheque-collection-request-report-module"], {
    /***/
    "8f1H":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/cash-and-cheque-collection-request-report/cash-and-cheque-collection-request-report.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: CashAndChequeCollectionRequestReportPageModule */

    /***/
    function f1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashAndChequeCollectionRequestReportPageModule", function () {
        return CashAndChequeCollectionRequestReportPageModule;
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


      var _cash_and_cheque_collection_request_report_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cash-and-cheque-collection-request-report.page */
      "NS8m");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_cash_and_cheque_ps_option_cash_and_cheque_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-cash-and-cheque/ps-option-cash-and-cheque.component.module */
      "i6Ga");

      var routes = [{
        path: '',
        component: _cash_and_cheque_collection_request_report_page__WEBPACK_IMPORTED_MODULE_2__["CashAndChequeCollectionRequestReportPage"]
      }];

      var CashAndChequeCollectionRequestReportPageModule = /*#__PURE__*/_createClass(function CashAndChequeCollectionRequestReportPageModule() {
        _classCallCheck(this, CashAndChequeCollectionRequestReportPageModule);
      });

      CashAndChequeCollectionRequestReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateViewModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_cash_and_cheque_ps_option_cash_and_cheque_component_module__WEBPACK_IMPORTED_MODULE_7__["PsOptionCashAndChequeComponentModule"]],
        declarations: [_cash_and_cheque_collection_request_report_page__WEBPACK_IMPORTED_MODULE_2__["CashAndChequeCollectionRequestReportPage"]]
      })], CashAndChequeCollectionRequestReportPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cash-and-cheque-collection-request-report-cash-and-cheque-collection-request-report-module-es5.js.map