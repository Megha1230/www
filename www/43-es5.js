(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43], {
    /***/
    "3APC":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/facilities-list/facilities-list.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function APC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWNpbGl0aWVzLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "3Doi":
    /*!***************************************************************!*\
      !*** ./src/app/pages/facilities-list/facilities-list.page.ts ***!
      \***************************************************************/

    /*! exports provided: facilitiesListPage */

    /***/
    function Doi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "facilitiesListPage", function () {
        return facilitiesListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_facilities_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./facilities-list.page.html */
      "bXO7");
      /* harmony import */


      var _facilities_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./facilities-list.page.scss */
      "3APC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psPipes/ps-currency/ps-currency.pipe */
      "EIUR");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");

      var facilitiesListPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function facilitiesListPage(commonProv, loggerP, omniPull, datepipe) {
          var _this;

          _classCallCheck(this, facilitiesListPage);

          _this = _callSuper(this, facilitiesListPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.datepipe = datepipe;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
          _this.psCurrency = new src_app_commonSRC_psPipes_ps_currency_ps_currency_pipe__WEBPACK_IMPORTED_MODULE_7__["PsCurrencyPipe"]();
          _this.activeFacilityOptions = {};
          _this.closedFacilityOptions = {};
          _this.templateViewOptions = {
            group: _this.formGroup
          };
          _this.showActiveFacilities = false;
          _this.showClosedFacilities = false;
          _this.cardTypeFlagResponse = [];
          _this.complexSegmentOptions = {
            group: _this.formGroup,
            segmentOptions: {
              segmentList: []
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['active_facilities_segment', 'closed_facilities_segment']
            }
          };
          _this.activeFacilityLabelOptions = {
            labelKey: 'no_active_facility_available_key'
          };
          _this.closedFacilityLabelOptions = {
            labelKey: 'no_closed_facility_available_key'
          };
          _this.activeFacilityList = [];
          _this.closedFacilityList = [];
          _this.showTotalHeader = false;
          _this.noDataFound = false;
          return _this;
        }

        _inherits(facilitiesListPage, _omni_base_omni_base_);

        return _createClass(facilitiesListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(facilitiesListPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.activeFacilityOptions = {
              group: this.formGroup,
              isEditable: true
            };
            this.closedFacilityOptions = {
              group: this.formGroup,
              isEditable: true
            };
            this.complexSegmentOptions.segmentOptions = {
              fcName: 'facilitySegment',
              segmentList: [{
                selected: true,
                itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME,
                description: this.commonProv.translate('active_facilities_key')
              }, {
                selected: true,
                itemValue: _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CLOSED_FACILITY_SEGMENT_NAME,
                description: this.commonProv.translate('closed_facilities_key')
              }]
            };
            this.loadFacilityList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME);
          }
        }, {
          key: "onClickSegment",
          value: function onClickSegment(selectedSegment) {
            this.showTotalHeader = false;

            if (selectedSegment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME) {
              this.loadFacilityList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME);
            } else {
              this.loadFacilityList(_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CLOSED_FACILITY_SEGMENT_NAME);
            }
          }
        }, {
          key: "loadFacilityList",
          value: function loadFacilityList(segment) {
            var _this2 = this;

            var paramData = {};
            this.omniPull.reutrnFacilityDetails(paramData).then(function (result) {
              if (result) {
                if (segment === _commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_FACILITY_SEGMENT_NAME) {
                  if (result.activeFacilitiesList && result.activeFacilitiesList.length > 0) {
                    _this2.activeFacilityOptions.listOfOptions = [];
                    _this2.activeFacilityOptions.listOfOptions = _this2.populateFacilities(result.activeFacilitiesList, 'A');
                    _this2.totalAmount = _this2.psCurrency.parse(result.totalActiveAmount);
                    _this2.totalUtilized = _this2.psCurrency.parse(result.totalActiveUtilizedAmount);
                    _this2.totalUnUtilized = _this2.psCurrency.parse(result.totalActiveUnUtilizedAmount);
                    _this2.totalOutstanding = _this2.psCurrency.parse(result.totalActiveOutAmount); //

                    _this2.showActiveFacilities = true;
                    _this2.showClosedFacilities = false;
                  } else {
                    _this2.noDataFound = true;
                    return;
                  }
                } else {
                  if (result.closedFacilitiesList && result.closedFacilitiesList.length > 0) {
                    _this2.closedFacilityOptions.listOfOptions = [];
                    _this2.closedFacilityOptions.listOfOptions = _this2.populateFacilities(result.closedFacilitiesList, 'C');
                    _this2.totalAmount = _this2.psCurrency.parse(result.totalClosedAmount);
                    _this2.totalUtilized = _this2.psCurrency.parse(result.totalClosedUtilizedAmount);
                    _this2.totalUnUtilized = _this2.psCurrency.parse(result.totalClosedUnUtilizedAmount);
                    _this2.showActiveFacilities = false;
                    _this2.showClosedFacilities = true;
                  } else {
                    _this2.noDataFound = true;
                    return;
                  }
                }

                _this2.noDataFound = false;
              } else {
                _this2.noDataFound = true;
              }
            })["catch"](function (error) {
              _this2.loggerP.error('Error: While fetching facility list :', error);
            });
          }
        }, {
          key: "populateFacilities",
          value: function populateFacilities(facilities, status) {
            var _a, _b;

            var facilityList = [];

            var _iterator = _createForOfIteratorHelper(facilities),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;
                var facility = {
                  facilityNumber: iterator.facilityNumber || iterator.facilityCode,
                  facilityAmount: this.psCurrency.transform((iterator.facilityValue || 0).toString(), 2) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish),
                  utilizedAmount: iterator.utilizedAmount ? this.psCurrency.transform((iterator.utilizedAmount || 0).toString(), 2) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish) : null,
                  unutilizedAmount: iterator.unUtilizedAmount ? this.psCurrency.transform((iterator.unUtilizedAmount || 0).toString(), 2) + ' ' + (iterator.currencyBriefName || iterator.currencyBriefNameEnglish) : null,
                  facilityType: iterator.facilityType,
                  facilityTypeDesc: iterator.facilityTypeDesc,
                  revolvingOneOff: iterator.revolvingOneOff,
                  revolvingOneOffDesc: iterator.revolvingOneOffDesc,
                  branchName: iterator.facilityBranch,
                  expiryDate: iterator.expiryDate,
                  outstanding: this.psCurrency.transform((iterator.outstandingAmount || 0).toString(), 2),
                  isEligibleLC: (_a = iterator.limitDetails) === null || _a === void 0 ? void 0 : _a.some(function (f) {
                    return f.isEligibleLC == true;
                  }),
                  isEligibleLG: (_b = iterator.limitDetails) === null || _b === void 0 ? void 0 : _b.some(function (f) {
                    return f.isEligibleLG == true;
                  }),
                  facilityStatus: status,
                  statusDesc: iterator.status,
                  currency: iterator.currency || iterator.transactionCurrency,
                  currencyBriefNameEnglish: iterator.currencyBriefNameEnglish,
                  currencyBriefName: iterator.currencyBriefName,
                  lookupKey: iterator.facilityCode
                };
                facilityList.push(facility);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.showHeader(facilityList);
            return facilityList;
          }
        }, {
          key: "showHeader",
          value: function showHeader(list) {// this.showTotalHeader = !list.some(i => list.some(item => item.currency !== i.currency))
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"]);

      facilitiesListPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      facilitiesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'facilities-list',
        template: _raw_loader_facilities_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_facilities_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])], facilitiesListPage);
      /***/
    },

    /***/
    "bXO7":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/facilities-list/facilities-list.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bXO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\">\n    <div class=\"total-header\" *ngIf=\"showTotalHeader\">\n        <div class='total-element'>\n            <ps-label [options]=\"{labelKey:'total_amount_key'}\"></ps-label>:\n            {{totalAmount}}\n        </div>\n        <div class='total-element'>\n            <ps-label [options]=\"{labelKey:'total_utilized_key'}\"></ps-label>:\n            {{totalUtilized}}\n        </div>\n        <div class='total-element'>\n            <ps-label [options]=\"{labelKey:'total_unutilized_key'}\"></ps-label>:\n            {{totalUnUtilized}}\n        </div>\n        <div class='total-element' *ngIf=\"this.showActiveFacilities\">\n            <ps-label [options]=\"{labelKey:'total_outstanding_key'}\"></ps-label>:\n            {{totalOutstanding}}\n        </div>\n    </div>\n    <ps-complex-segment id=\"accountsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n        [options]=\"complexSegmentOptions\">\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n            <ps-option-facility id=\"ps-option-facility-list\" [options]=\"activeFacilityOptions\"\n                *ngIf=\"showActiveFacilities\">\n            </ps-option-facility>\n            <ps-label *ngIf=\"noDataFound\" class=\"validation-message\" [options]=\"activeFacilityLabelOptions\"></ps-label>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n            <ps-option-facility id=\"ps-option-facility-list\" [options]=\"closedFacilityOptions\"\n                *ngIf=\"showClosedFacilities\">\n            </ps-option-facility>\n            <ps-label *ngIf=\"noDataFound\" class=\"validation-message\" [options]=\"closedFacilityLabelOptions\"></ps-label>\n        </ps-content-segment>\n    </ps-complex-segment>\n</ps-template-view>";
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
            var _this3 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this4 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this4.disableForm(_this4.baseFormGroup);

                _this4.isPageDisabled = true;
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
//# sourceMappingURL=43-es5.js.map