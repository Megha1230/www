(function () {
  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forgot-credentials-forgot-credentials-module~pages-online-registration-online-registra~f12e25d8"], {
    /***/
    "+BRL":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: PsInputFreeTextComponent */

    /***/
    function BRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponent", function () {
        return PsInputFreeTextComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-free-text.component.html */
      "wsER");
      /* harmony import */


      var _ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-free-text.component.scss */
      "+jbq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /**
       * @author Aftab.Ali
       * @since 24/10/2019
       *
       * <p> PsInputFreeTextComponent is a simple component base on ps-keyin-input and have free text field</p>
       */


      var PsInputFreeTextComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsInputFreeTextComponent(commonService, logger) {
          var _this;

          _classCallCheck(this, PsInputFreeTextComponent);

          _this = _callSuper(this, PsInputFreeTextComponent, [commonService, logger]);
          _this.options = {};
          _this.defaultOptions = {};
          return _this;
        }

        _inherits(PsInputFreeTextComponent, _commonSRC_psComponen);

        return _createClass(PsInputFreeTextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options, false);
          }
        }, {
          key: "onInputChanged",
          value: function onInputChanged(event) {
            this.onPsChange.emit(event);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"]);

      PsInputFreeTextComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }];
      };

      PsInputFreeTextComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputFreeTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-free-text',
        template: _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])], PsInputFreeTextComponent);
      /***/
    },

    /***/
    "+jbq":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jbq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1mcmVlLXRleHQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "/1jk":
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-bank-authentication/ps-complex-bank-authentication.component.scss ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _1jk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWJhbmstYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "/IGH":
    /*!************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-action-gallery/ps-gallery-verification-images/ps-gallery-verification-images.component.scss ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _IGH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1nYWxsZXJ5LXZlcmlmaWNhdGlvbi1pbWFnZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "2A9y":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: PsInputFreeTextComponentModule */

    /***/
    function A9y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponentModule", function () {
        return PsInputFreeTextComponentModule;
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


      var _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-input-free-text.component */
      "+BRL");

      var PsInputFreeTextComponentModule = /*#__PURE__*/_createClass(function PsInputFreeTextComponentModule() {
        _classCallCheck(this, PsInputFreeTextComponentModule);
      });

      PsInputFreeTextComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]],
        entryComponents: [_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputFreeTextComponentModule);
      /***/
    },

    /***/
    "8OiH":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-action-gallery/ps-gallery-verification-images/ps-gallery-verification-images.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: PsGalleryVerificationImagesComponent */

    /***/
    function OiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsGalleryVerificationImagesComponent", function () {
        return PsGalleryVerificationImagesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_gallery_verification_images_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-gallery-verification-images.component.html */
      "jFNW");
      /* harmony import */


      var _ps_gallery_verification_images_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-gallery-verification-images.component.scss */
      "/IGH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_gallery_ps_action_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-action/ps-action-gallery/ps-action-gallery.component */
      "Ptdy");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /*
        Author  : Islam Sayed, Ghada Radwan
        Description: Will inherit from ps-action-gallery and will be used to show the list of verification images. Component should call the service to get the list of verification images and display them as per the properties defined in the component.
      */


      var PsGalleryVerificationImagesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsGalleryVerificationImagesComponent(commonP, logger, modalController, omniPullProvider) {
          var _this2;

          _classCallCheck(this, PsGalleryVerificationImagesComponent);

          _this2 = _callSuper(this, PsGalleryVerificationImagesComponent, [commonP, logger, modalController, omniPullProvider]);
          _this2.commonP = commonP;
          _this2.defaultConf = {
            layout: 'grid',
            itemHieght: 150,
            itemWidth: 150,
            numberOfItemsPerPage: 9
          };
          return _this2;
        }

        _inherits(PsGalleryVerificationImagesComponent, _src_app_commonSRC_ps);

        return _createClass(PsGalleryVerificationImagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonP.copyObject(this.options, this.defaultConf, false, true);
            this.getListOfImages();
          }
        }, {
          key: "getListOfImages",
          value: function getListOfImages() {
            var _this3 = this;

            var paramData = {
              previewAllYN: 'Y'
            };
            var mediaList = [];

            try {
              this.omniPullProvider.returnListOfImages(paramData).then(function (result) {
                if (result && result.gridModel && result.gridModel.length > 0) {
                  // eslint-disable-next-line @typescript-eslint/prefer-for-of
                  for (var i = 0; i < result.gridModel.length; i++) {
                    mediaList.push({
                      id: result.gridModel[i].verificationImageId,
                      data: result.gridModel[i].encodeImage
                    });
                  }

                  _this3.options.mediaList = mediaList;
                  _this3.selectedImage = result.verificationImageId;
                  _this3.options.layout = 'grid';
                }
              })["catch"](function (err) {
                _this3.logger.error(err);
              });
            } catch (error) {
              this.logger.error(error);
            }
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_gallery_ps_action_gallery_component__WEBPACK_IMPORTED_MODULE_6__["PsActionGalleryComponent"]);

      PsGalleryVerificationImagesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsGalleryVerificationImagesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsGalleryVerificationImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-gallery-verification-images',
        template: _raw_loader_ps_gallery_verification_images_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_gallery_verification_images_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsGalleryVerificationImagesComponent);
      /***/
    },

    /***/
    "F9YD":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsComplexIdDetailsModule */

    /***/
    function F9YD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexIdDetailsModule", function () {
        return PsComplexIdDetailsModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module */
      "vRU4");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */
      "2A9y");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component.module */
      "jjhr");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.module */
      "j6t5");
      /* harmony import */


      var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.module */
      "GNGv");
      /* harmony import */


      var _ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./ps-complex-id-details.component */
      "y70R");

      var PsComplexIdDetailsModule = /*#__PURE__*/_createClass(function PsComplexIdDetailsModule() {
        _classCallCheck(this, PsComplexIdDetailsModule);
      });

      PsComplexIdDetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputFreeTextComponentModule"], _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component_module__WEBPACK_IMPORTED_MODULE_7__["PsDropDownIdTypesComponentModule"], _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component_module__WEBPACK_IMPORTED_MODULE_8__["PsDateDayMonthYearFutureComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component_module__WEBPACK_IMPORTED_MODULE_2__["PsDateDayMonthYearPastComponentModule"], _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownCountryComponentModule"]],
        exports: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        entryComponents: [_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexIdDetailsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexIdDetailsModule);
      /***/
    },

    /***/
    "GNGv":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.module.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearFutureComponentModule */

    /***/
    function GNGv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearFutureComponentModule", function () {
        return PsDateDayMonthYearFutureComponentModule;
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


      var _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-date-day-month-year.component.module */
      "jSSe");
      /* harmony import */


      var _ps_date_day_month_year_future_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-date-day-month-year-future.component */
      "OEOT");

      var PsDateDayMonthYearFutureComponentModule = /*#__PURE__*/_createClass(function PsDateDayMonthYearFutureComponentModule() {
        _classCallCheck(this, PsDateDayMonthYearFutureComponentModule);
      });

      PsDateDayMonthYearFutureComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_date_day_month_year_future_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearFutureComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponentModule"]],
        exports: [_ps_date_day_month_year_future_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearFutureComponent"]],
        entryComponents: [_ps_date_day_month_year_future_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearFutureComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDateDayMonthYearFutureComponentModule);
      /***/
    },

    /***/
    "JMCL":
    /*!******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-bank-authentication/ps-complex-bank-authentication.component.html ***!
      \******************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JMCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex [options]=\"defaultOptions\">\n\n    <ps-input-numeric id=\"'userCifNo' + id\" [options]=\"defaultOptions.varcharOptions\"></ps-input-numeric>\n\n    <ps-input-account-number id=\"'input_account_number_' + id\" [options]=\"defaultOptions.acNumOptions\">\n    </ps-input-account-number>\n\n    <ps-input-card-number [id]=\"'card_number_' + id\" [options]=\"options?.cardNumberOptions\">\n    </ps-input-card-number>\n</ps-container-complex>";
      /***/
    },

    /***/
    "PaM2":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-bank-authentication/ps-complex-bank-authentication.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: PsComplexBankAuthenticationComponent */

    /***/
    function PaM2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexBankAuthenticationComponent", function () {
        return PsComplexBankAuthenticationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_bank_authentication_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-bank-authentication.component.html */
      "JMCL");
      /* harmony import */


      var _ps_complex_bank_authentication_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-bank-authentication.component.scss */
      "/1jk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");

      var PsComplexBankAuthenticationComponent = /*#__PURE__*/function (_commonSRC_psComponen2) {
        function PsComplexBankAuthenticationComponent(commonService, logger) {
          var _this4;

          _classCallCheck(this, PsComplexBankAuthenticationComponent);

          _this4 = _callSuper(this, PsComplexBankAuthenticationComponent, [commonService, logger]);
          _this4.defaultOptions = {
            acNumOptions: {
              labelKey: 'account_number_key',
              placeHolder: 'enter_account_number_key',
              iconOptions: {
                iconName: 'accounts'
              }
            },
            varcharOptions: {
              labelKey: 'cif_no_key',
              placeHolder: 'enter_cif_no_key'
            }
          };
          return _this4;
        }

        _inherits(PsComplexBankAuthenticationComponent, _commonSRC_psComponen2);

        return _createClass(PsComplexBankAuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options);

            _superPropGet(PsComplexBankAuthenticationComponent, "init", this, 3)([]);
          }
        }, {
          key: "onCardNumberChange",
          value: function onCardNumberChange(value) {
            this.commonProv.logger.log('CardNumber:' + value.newValue);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"]);

      PsComplexBankAuthenticationComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_4__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsComplexBankAuthenticationComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexBankAuthenticationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-bank-authentication',
        template: _raw_loader_ps_complex_bank_authentication_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_bank_authentication_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_4__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsComplexBankAuthenticationComponent);
      /***/
    },

    /***/
    "j6t5":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.module.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: PsDropDownIdTypesComponentModule */

    /***/
    function j6t5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropDownIdTypesComponentModule", function () {
        return PsDropDownIdTypesComponentModule;
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


      var _ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-dropdown-id-types.component */
      "J8wZ");

      var PsDropDownIdTypesComponentModule = /*#__PURE__*/_createClass(function PsDropDownIdTypesComponentModule() {
        _classCallCheck(this, PsDropDownIdTypesComponentModule);
      });

      PsDropDownIdTypesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_dropdown_lov_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDropdownLovComponentModule"]],
        exports: [_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]],
        entryComponents: [_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_5__["PsDropDownIdTypesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropDownIdTypesComponentModule);
      /***/
    },

    /***/
    "jFNW":
    /*!**************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-action-gallery/ps-gallery-verification-images/ps-gallery-verification-images.component.html ***!
      \**************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jFNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\r\n    <ps-action-gallery [options]='options'></ps-action-gallery>\r\n</ps-container-complex>";
      /***/
    },

    /***/
    "jSSe":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearComponentModule */

    /***/
    function jSSe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponentModule", function () {
        return PsDateDayMonthYearComponentModule;
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
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-date-day-month-year.component */
      "BcCD");

      var PsDateDayMonthYearComponentModule = /*#__PURE__*/_createClass(function PsDateDayMonthYearComponentModule() {
        _classCallCheck(this, PsDateDayMonthYearComponentModule);
      });

      PsDateDayMonthYearComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]],
        exports: [_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]],
        entryComponents: [_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDateDayMonthYearComponentModule);
      /***/
    },

    /***/
    "pIP6":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-action-gallery/ps-gallery-verification-images/ps-gallery-verification-images.module.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: PsGalleryVerificationImagesModule */

    /***/
    function pIP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsGalleryVerificationImagesModule", function () {
        return PsGalleryVerificationImagesModule;
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


      var _ps_gallery_verification_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-gallery-verification-images.component */
      "8OiH");

      var PsGalleryVerificationImagesModule = /*#__PURE__*/_createClass(function PsGalleryVerificationImagesModule() {
        _classCallCheck(this, PsGalleryVerificationImagesModule);
      });

      PsGalleryVerificationImagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_gallery_verification_images_component__WEBPACK_IMPORTED_MODULE_4__["PsGalleryVerificationImagesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_gallery_verification_images_component__WEBPACK_IMPORTED_MODULE_4__["PsGalleryVerificationImagesComponent"]],
        entryComponents: [_ps_gallery_verification_images_component__WEBPACK_IMPORTED_MODULE_4__["PsGalleryVerificationImagesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsGalleryVerificationImagesModule);
      /***/
    },

    /***/
    "v5TM":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-bank-authentication/ps-complex-bank-authentication.module.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: PsComplexBankAuthenticationComponentModule */

    /***/
    function v5TM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexBankAuthenticationComponentModule", function () {
        return PsComplexBankAuthenticationComponentModule;
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


      var _ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-account-number/ps-input-account-number.module */
      "iNXY");
      /* harmony import */


      var _ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-card-number/ps-input-card-number.component.module */
      "gByX");
      /* harmony import */


      var _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var _ps_complex_bank_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ps-complex-bank-authentication.component */
      "PaM2");
      /* harmony import */


      var _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../ps-keyin-input/ps-input-numeric/ps-input-numeric.component.module */
      "oAvJ");

      var PsComplexBankAuthenticationComponentModule = /*#__PURE__*/_createClass(function PsComplexBankAuthenticationComponentModule() {
        _classCallCheck(this, PsComplexBankAuthenticationComponentModule);
      });

      PsComplexBankAuthenticationComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_bank_authentication_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexBankAuthenticationComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_keyin_input_ps_input_account_number_ps_input_account_number_module__WEBPACK_IMPORTED_MODULE_4__["PsInputAccountNumberComponentModule"], _ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"], _ps_keyin_input_ps_input_card_number_ps_input_card_number_component_module__WEBPACK_IMPORTED_MODULE_5__["PsInputCardNumberComponentModule"], _ps_keyin_input_ps_input_numeric_ps_input_numeric_component_module__WEBPACK_IMPORTED_MODULE_8__["PsInputNumericComponentModule"]],
        exports: [_ps_complex_bank_authentication_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexBankAuthenticationComponent"]],
        entryComponents: [_ps_complex_bank_authentication_component__WEBPACK_IMPORTED_MODULE_7__["PsComplexBankAuthenticationComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexBankAuthenticationComponentModule);
      /***/
    },

    /***/
    "vRU4":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.module.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearPastComponentModule */

    /***/
    function vRU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponentModule", function () {
        return PsDateDayMonthYearPastComponentModule;
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


      var _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-date-day-month-year.component.module */
      "jSSe");
      /* harmony import */


      var _ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-date-day-month-year-past.component */
      "ngfJ");

      var PsDateDayMonthYearPastComponentModule = /*#__PURE__*/_createClass(function PsDateDayMonthYearPastComponentModule() {
        _classCallCheck(this, PsDateDayMonthYearPastComponentModule);
      });

      PsDateDayMonthYearPastComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_date_day_month_year_component_module__WEBPACK_IMPORTED_MODULE_4__["PsDateDayMonthYearComponentModule"]],
        exports: [_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]],
        entryComponents: [_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_5__["PsDateDayMonthYearPastComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDateDayMonthYearPastComponentModule);
      /***/
    },

    /***/
    "wsER":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wsER(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-input [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"onInputChanged($event)\"></ps-keyin-input>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-forgot-credentials-forgot-credentials-module~pages-online-registration-online-registra~f12e25d8-es5.js.map