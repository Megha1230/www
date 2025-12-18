(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-international-beneficiary-international-beneficiary-module"], {
    /***/
    "ZLNn":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/international-beneficiary/international-beneficiary.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: InternationalBeneficiaryPageModule */

    /***/
    function ZLNn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InternationalBeneficiaryPageModule", function () {
        return InternationalBeneficiaryPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_bank_details_ps_complex_beneficiary_bank_details_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-beneficiary-bank-details/ps-complex-beneficiary-bank-details.component.module */
      "UeDB");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_details_ps_complex_beneficiary_details_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-beneficiary-details/ps-complex-beneficiary-details.component.module */
      "8GAy");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _international_beneficiary_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./international-beneficiary.page */
      "kM1E");

      var routes = [{
        path: '',
        component: _international_beneficiary_page__WEBPACK_IMPORTED_MODULE_10__["InternationalBeneficiaryPage"]
      }]; //Author: GRadwan 16Jan2020, ISayad 21Jan2020 

      var InternationalBeneficiaryPageModule = /*#__PURE__*/_createClass(function InternationalBeneficiaryPageModule() {
        _classCallCheck(this, InternationalBeneficiaryPageModule);
      });

      InternationalBeneficiaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_7__["PsTemplateFormModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_6__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_8__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_details_ps_complex_beneficiary_details_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexBeneficiaryDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_beneficiary_bank_details_ps_complex_beneficiary_bank_details_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexBeneficiaryBankDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputVarcharComponentModule"]],
        declarations: [_international_beneficiary_page__WEBPACK_IMPORTED_MODULE_10__["InternationalBeneficiaryPage"]]
      })], InternationalBeneficiaryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-international-beneficiary-international-beneficiary-module-es5.js.map