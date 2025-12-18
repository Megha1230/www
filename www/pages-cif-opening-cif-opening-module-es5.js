(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cif-opening-cif-opening-module"], {
    /***/
    "/miJ":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-residency/ps-lov-residency.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: PsLovResidencyComponent */

    /***/
    function _miJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLovResidencyComponent", function () {
        return PsLovResidencyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lov_residency_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lov-residency.component.html */
      "g9TU");
      /* harmony import */


      var _ps_lov_residency_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lov-residency.component.scss */
      "XL/a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-lov.component */
      "41l2");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsLovResidencyComponent = /*#__PURE__*/function (_src_app_commonBussin) {
        function PsLovResidencyComponent(commonProvService, logger) {
          var _this;

          _classCallCheck(this, PsLovResidencyComponent);

          _this = _callSuper(this, PsLovResidencyComponent, [commonProvService, logger]);
          _this.defaultSelectOptions = {
            iconLocation: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].ICON_LOCATION_GENERAL,
            lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RESIDENCY_LOV_TYPE_ID
          };
          return _this;
        }

        _inherits(PsLovResidencyComponent, _src_app_commonBussin);

        return _createClass(PsLovResidencyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options);
            this.defaultSelectOptions.labelKey = this.commonProv.translate('residency_key');
            this.defaultSelectOptions.placeHolder = this.commonProv.translate('residency_key');
          }
        }, {
          key: "onChangeLov",
          value: function onChangeLov(values) {
            this.loggerP.log('onResidencyChange' + values);
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_dropdown_lov_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponent"]);

      PsLovResidencyComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }];
      };

      PsLovResidencyComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsLovResidencyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lov-residency',
        template: _raw_loader_ps_lov_residency_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lov_residency_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])], PsLovResidencyComponent);
      /***/
    },

    /***/
    "XL/a":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-residency/ps-lov-residency.component.scss ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XL_a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb3YtcmVzaWRlbmN5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "g9TU":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-residency/ps-lov-residency.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g9TU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-dropdown-lov [id]=\"id\" [options]=\"defaultSelectOptions\" (onPsChange)=\"onChangeLov($event)\"></ps-dropdown-lov>";
      /***/
    },

    /***/
    "oZgr":
    /*!*********************************************************!*\
      !*** ./src/app/pages/cif-opening/cif-opening.module.ts ***!
      \*********************************************************/

    /*! exports provided: CifOpeningPageModule */

    /***/
    function oZgr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CifOpeningPageModule", function () {
        return CifOpeningPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-address/ps-complex-address.component.module */
      "dqMd");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_details_ps_complex_cif_details_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-details/ps-complex-cif-details.component.module */
      "E18k");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_eco_sector_ps_complex_eco_sector_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-eco-sector/ps-complex-eco-sector.component.module */
      "RsoY");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_employment_details_ps_complex_employment_details_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-employment-details/ps-complex-employment-details.component.module */
      "SYYf");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module */
      "F9YD");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_personal_details_ps_complex_personal_details_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-personal-details/ps-complex-personal-details.component.module */
      "tG32");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_contact_ps_complex_user_contact_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-user-contact/ps-complex-user-contact.component.module */
      "J7JR");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module */
      "OzHP");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_map_atm_branches_ps_map_atm_branches_component_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-map-atm-branches/ps-map-atm-branches.component.module */
      "0uR4");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_cif_types_ps_dropdown_cif_types_component_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-cif-types/ps-dropdown-cif-types.component.module */
      "qO+L");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component.module */
      "jjhr");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_legal_status_ps_dropdown_legal_status_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-legal-status/ps-dropdown-legal-status.component.module */
      "rBpG");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_gender_ps_lov_gender_component_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-gender/ps-lov-gender.component.module */
      "X8pM");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_postal_codes_ps_dropdown_postal_codes_component_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-postal-codes/ps-dropdown-postal-codes.component.module */
      "xLgG");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_ranking_ps_dropdown_ranking_component_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-ranking/ps-dropdown-ranking.component.module */
      "SqNI");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */
      "YBCg");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _cif_opening_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./cif-opening.page */
      "HHWS");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_id_types_ps_complex_cif_id_types_component_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.module */
      "Y6U6");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module */
      "ohDU");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_residency_ps_lov_residency_component_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-residency/ps-lov-residency.component.module */
      "uqi9");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component.module */
      "Hy46");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-file-upload-bs/ps-file-upload-bs.component.module */
      "AvcC");

      var routes = [{
        path: '',
        component: _cif_opening_page__WEBPACK_IMPORTED_MODULE_24__["CifOpeningPage"]
      }];

      var CifOpeningPageModule = /*#__PURE__*/_createClass(function CifOpeningPageModule() {
        _classCallCheck(this, CifOpeningPageModule);
      });

      CifOpeningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_20__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_21__["PsTemplateFormModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_personal_details_ps_complex_personal_details_component_module__WEBPACK_IMPORTED_MODULE_8__["PsComplexPersonalDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_12__["PsInputVarcharComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_postal_codes_ps_dropdown_postal_codes_component_module__WEBPACK_IMPORTED_MODULE_18__["PsDropdownPostalCodesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_gender_ps_lov_gender_component_module__WEBPACK_IMPORTED_MODULE_17__["PsLovGenderComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_legal_status_ps_dropdown_legal_status_component_module__WEBPACK_IMPORTED_MODULE_16__["PsDropdownLegalStatusComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_ranking_ps_dropdown_ranking_component_module__WEBPACK_IMPORTED_MODULE_19__["PsDropdownRankingComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_email_ps_input_email_module__WEBPACK_IMPORTED_MODULE_10__["PsInputEmailComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_address_ps_complex_address_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexAddressComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_user_contact_ps_complex_user_contact_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexUserContactComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_eco_sector_ps_complex_eco_sector_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexEcoSectorModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_id_details_ps_complex_id_details_module__WEBPACK_IMPORTED_MODULE_7__["PsComplexIdDetailsModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_11__["PsInputNumericComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_15__["PsDropdownCountryComponentModule"], src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_22__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_map_atm_branches_ps_map_atm_branches_component_module__WEBPACK_IMPORTED_MODULE_13__["PsMapAtmBranchesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_cif_types_ps_dropdown_cif_types_component_module__WEBPACK_IMPORTED_MODULE_14__["PsDropdownCifTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_details_ps_complex_cif_details_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexCifDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_employment_details_ps_complex_employment_details_component_module__WEBPACK_IMPORTED_MODULE_6__["PsComplexEmploymentDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_26__["PsComplexSelectBranchComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_id_types_ps_complex_cif_id_types_component_module__WEBPACK_IMPORTED_MODULE_25__["PsComplexCifIdTypesComponentModule"], src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_residency_ps_lov_residency_component_module__WEBPACK_IMPORTED_MODULE_27__["PsLovResidencyComponentModule"], src_app_commonBussinessSRC_psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component_module__WEBPACK_IMPORTED_MODULE_28__["PsEntityPhoneNumberComponentModule"], src_app_commonBussinessSRC_psComponents_ps_file_upload_bs_ps_file_upload_bs_component_module__WEBPACK_IMPORTED_MODULE_29__["PsFileUploadBSComponentModule"]],
        declarations: [_cif_opening_page__WEBPACK_IMPORTED_MODULE_24__["CifOpeningPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], CifOpeningPageModule);
      /***/
    },

    /***/
    "uqi9":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-residency/ps-lov-residency.component.module.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: PsLovResidencyComponentModule */

    /***/
    function uqi9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLovResidencyComponentModule", function () {
        return PsLovResidencyComponentModule;
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


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-dropdown-lov.component.module */
      "LhaX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_residency_ps_lov_residency_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-lov-residency/ps-lov-residency.component */
      "/miJ");

      var PsLovResidencyComponentModule = /*#__PURE__*/_createClass(function PsLovResidencyComponentModule() {
        _classCallCheck(this, PsLovResidencyComponentModule);
      });

      PsLovResidencyComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_residency_ps_lov_residency_component__WEBPACK_IMPORTED_MODULE_5__["PsLovResidencyComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponentModule"]],
        exports: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_residency_ps_lov_residency_component__WEBPACK_IMPORTED_MODULE_5__["PsLovResidencyComponent"]],
        entryComponents: [src_app_commonBussinessSRC_psComponents_ps_select_dropdown_ps_dropdown_lov_ps_lov_residency_ps_lov_residency_component__WEBPACK_IMPORTED_MODULE_5__["PsLovResidencyComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLovResidencyComponentModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-cif-opening-cif-opening-module-es5.js.map