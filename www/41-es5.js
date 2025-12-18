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

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41], {
    /***/
    "DLu+":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function DLu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-screen>\n    <ps-container-panel [options]=\"panelOptions1\" id=\"documents_panel_1\" class=\"ps-container-panel-doc\">\n        <ps-container-lookup-option #productDetails [options]=\"cardOptions\" [itemCard]=\"itemCard\">\n        </ps-container-lookup-option>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2\" id=\"documents_panel_2\" class=\"ps-container-panel-doc\">\n        <div class=\"documentsDropdown\">\n            <ps-complex-widget-dropdowns #documentsDropdownWidget [options]=\"widgetDropdownsOptions\" id=\"documents_list_dropdown\">\n            </ps-complex-widget-dropdowns>\n        </div>\n        <ps-complex-date-filter id=\"filterDate\" [options]=\"filterDate\"></ps-complex-date-filter>\n        <div class=\"documents-actions\">\n            <div class=\"reset-documents-button\">\n                <ps-button-reset [options]=\"resetOptions\" (onClick)=\"resetFilter()\"></ps-button-reset>\n            </div>\n            <div class=\"filter-documents-button\">\n                <ps-button-standard [options]=\"filterOptions\" (onClick)=\"filterDocuments()\"></ps-button-standard>\n            </div>\n        </div>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3\" id=\"documents_panel_3\" class=\"ps-container-panel-doc\">\n        <ps-documents-list [options]=\"documentListOptions\"></ps-documents-list>\n    </ps-container-panel>\n</ps-template-screen>";
      /***/
    },

    /***/
    "KEkL":
    /*!*****************************************************!*\
      !*** ./src/app/pages/documents/documents.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function KEkL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudHMucGFnZS5zY3NzIn0= */";
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
            var _this = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this2 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this2.disableForm(_this2.baseFormGroup);

                _this2.isPageDisabled = true;
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
    "kAgI":
    /*!***************************************************!*\
      !*** ./src/app/pages/documents/documents.page.ts ***!
      \***************************************************/

    /*! exports provided: DocumentsPage */

    /***/
    function kAgI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPage", function () {
        return DocumentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_documents_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./documents.page.html */
      "DLu+");
      /* harmony import */


      var _documents_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./documents.page.scss */
      "KEkL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_widget_dropdowns_ps_complex_widget_dropdowns_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component */
      "Sx1r");
      /* harmony import */


      var _commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_container_ps_container_lookup_option_ps_container_lookup_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../commonSRC/psComponents/ps-base/ps-base-container/ps-container-lookup-option/ps-container-lookup-option.component */
      "BygU");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../commonSRC/psServices/models/ps-common-interface */
      "DUM0");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-utils */
      "qEF5");

      var DocumentsPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function DocumentsPage(omniPull, omniCommonService) {
          var _this3;

          _classCallCheck(this, DocumentsPage);

          _this3 = _callSuper(this, DocumentsPage);
          _this3.omniPull = omniPull;
          _this3.omniCommonService = omniCommonService;
          _this3.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this3.documentsPageData = {};
          _this3.panelOptions1 = {
            isExpandable: true,
            iconName: 'document',
            expanded: true
          };
          _this3.panelOptions2 = {
            isExpandable: true,
            labelKey: 'documents_filter_key',
            iconName: 'document',
            expanded: true
          };
          _this3.panelOptions3 = {
            isExpandable: true,
            labelKey: 'documents_key',
            iconName: 'document',
            expanded: true
          };
          _this3.filterDate = {};
          _this3.resetOptions = {
            labelKey: 'reset_key',
            group: _this3.formGroup
          };
          _this3.filterOptions = {
            labelKey: 'filter_key',
            group: _this3.formGroup
          };
          _this3.widgetDropdownsOptions = {
            group: _this3.formGroup,
            requestObject: _this3.documentsPageData,
            dropdowns: [{
              group: _this3.formGroup,
              fcName: 'documentsDropdown',
              enablePagination: false,
              requestObject: _this3.documentsPageData
            }]
          };
          _this3.documentListOptions = {
            itemList: []
          };
          return _this3;
        }

        _inherits(DocumentsPage, _omni_base_omni_base_);

        return _createClass(DocumentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.baseFormGroup = this.formGroup;
            var param = this.omniPull.omniCommon.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].preLoginResponse).parameters;
            var defaultFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
            this.filterDate = {
              fromDate: {
                group: this.formGroup,
                fcName: 'fromDate',
                displayFormat: defaultFormat,
                placeHolder: 'from_date_key'
              },
              toDate: {
                group: this.formGroup,
                fcName: 'toDate',
                displayFormat: defaultFormat,
                placeHolder: 'to_date_key'
              }
            };
            this.lookup.showDocuments = false;
            this.cardOptions = this.navigationServices.getParamKey('options');
            this.cardOptions.isEditable = false;
            this.cardOptions.actionDetailsOptions = null;
            this.cardOptions.listOfStatementOptions = null;
            this.itemCard = this.navigationServices.getParamKey('itemCard');
            var fromOperName = this.navigationServices.getParamKey('fromOperName');
            var panel1Name = fromOperName;

            if (panel1Name.startsWith("My")) {
              panel1Name = panel1Name.replace("My ", "");
            }

            panel1Name = panel1Name.replace(" Documents", "");

            if (fromOperName.startsWith("My") && panel1Name.endsWith('s')) {
              panel1Name = panel1Name.replace("s", "");
            }

            this.panelOptions1.labelKey = panel1Name + " Details";
            this.parentDocuments = this.getParentDocumentsList();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(DocumentsPage, "ionViewDidEnter", this, 3)([]); //moved here by ghada, AZDB-4624 to eliminate repetition of getting date controls format


            this.fromDateCtrlFormat = this.formGroup.controls[this.filterDate.fromDate.fcName][_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CONTROLLER_DATE_FORMAT];
            this.toDateCtrlFormat = this.formGroup.controls[this.filterDate.toDate.fcName][_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].CONTROLLER_DATE_FORMAT];
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.documentsComplexWidget.resetSelections();
            this.formGroup.get(this.filterDate.fromDate.fcName).setValue("");
            this.formGroup.get(this.filterDate.toDate.fcName).setValue("");
            this.formGroup.controls[this.filterDate.fromDate.fcName].markAsTouched();
            this.formGroup.controls[this.filterDate.toDate.fcName].markAsTouched();
          }
        }, {
          key: "getParentDocumentsList",
          value: function getParentDocumentsList() {
            var parentOper = this.navigationServices.getParamKey('fromOper');
            var listOptions = this.omniCommonService.getParentDocumentsList(parentOper);
            this.widgetDropdownsOptions.dropdowns[0].listOfOptions = listOptions;
          }
        }, {
          key: "filterDocuments",
          value: function filterDocuments() {
            var _this4 = this;

            var filteredDocs = this.documentsComplexWidget.selectedItemsList;
            var fromDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.formGroup.get(this.filterDate.fromDate.fcName).value).format(this.fromDateCtrlFormat);
            var toDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.formGroup.get(this.filterDate.toDate.fcName).value).format(this.toDateCtrlFormat);

            if (this.formGroup.valid) {
              if (filteredDocs.length > 0) {
                this.documentListOptions.fromDate = fromDate;
                this.documentListOptions.toDate = toDate;
                var operIdsList = [];
                filteredDocs.forEach(function (element) {
                  operIdsList.push(element.itemValue);
                });
                var params = {
                  reportType: _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].REPORT_TYPE,
                  reportFormat: _commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_11__["IFileFormat"].HTML,
                  reportParametersList: {
                    operIds: operIdsList,
                    fromDate: fromDate,
                    toDate: toDate
                  }
                };
                this.commonProv.presentLoading();
                this.omniPull.returnFilteredDocuments(params).then(function (result) {
                  if (result && result.gridModel && result.gridModel.length > 0) {
                    var grid = result.gridModel;
                    var docList = [];
                    grid.forEach(function (item) {
                      docList.push({
                        documentName: item.operName,
                        operId: item.operChildId,
                        showExports: item.hasData
                      });
                    });
                    _this4.documentListOptions.itemList = docList;
                    _this4.documentListOptions.itemCard = _this4.itemCard;
                  } else {
                    if (filteredDocs.length == 0) {
                      _this4.documentsComplexWidget.selectReportsError = true;
                    }

                    _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].presentInfoAlert(_this4.commonProv.translate('no_data_found_key'));
                  }
                })["catch"](function (error) {
                  return _this4.commonProv.logger.log(error);
                })["finally"](function () {
                  _this4.commonProv.dismissLoading();
                });
              }
            } else {
              for (var _i = 0, _Object$keys = Object.keys(this.formGroup.controls); _i < _Object$keys.length; _i++) {
                var control = _Object$keys[_i];

                if (this.formGroup.controls[control].errors) {
                  this.formGroup.get(control).setValue("");
                  this.formGroup.controls[control].markAsTouched();
                }
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      DocumentsPage.ctorParameters = function () {
        return [{
          type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }, {
          type: _commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]
        }];
      };

      DocumentsPage.propDecorators = {
        lookup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['productDetails', {
            "static": true
          }]
        }],
        documentsComplexWidget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['documentsDropdownWidget', {
            "static": true
          }]
        }]
      };
      DocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'documents',
        template: _raw_loader_documents_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documents_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], _commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])], DocumentsPage);
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
//# sourceMappingURL=41-es5.js.map