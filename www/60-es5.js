(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60], {
    /***/
    "2V5f":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/supplementary-card-request/supplementary-card-request.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function V5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGVtZW50YXJ5LWNhcmQtcmVxdWVzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "Z2pP":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/supplementary-card-request/supplementary-card-request.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: SupplementaryCardRequestPage */

    /***/
    function Z2pP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplementaryCardRequestPage", function () {
        return SupplementaryCardRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_supplementary_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./supplementary-card-request.page.html */
      "q5NM");
      /* harmony import */


      var _supplementary_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./supplementary-card-request.page.scss */
      "2V5f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var SupplementaryCardRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function SupplementaryCardRequestPage(navService, commonProv, omniPull, loggerP, omniCommon) {
          var _this;

          _classCallCheck(this, SupplementaryCardRequestPage);

          _this = _callSuper(this, SupplementaryCardRequestPage);
          _this.navService = navService;
          _this.commonProv = commonProv;
          _this.omniPull = omniPull;
          _this.loggerP = loggerP;
          _this.omniCommon = omniCommon;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.supplementaryCardRequestVO = {};
          _this.stepperOptions = {
            stepperName: 'supplementary_card_request_stepper',
            numberOfSteps: 1,
            group: _this.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.cardActionRequestEndPoint,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.updateScreenVO());
                  });
                },
                executionClass: _this,
                params: [_this]
              },
              group: _this.formGroup
            },
            requestObject: _this.supplementaryCardRequestVO,
            isHorizontalStepper: true,
            namesofSteps: ['cardManagement']
          };
          _this.mainCardPanelOptions = {
            isExpandable: true,
            labelKey: 'main_card_information_key',
            iconName: 'cards',
            expanded: true
          };
          _this.supplementaryCardPanelOptions = {
            isExpandable: true,
            labelKey: 'supplementary_card_key',
            iconName: 'cards',
            expanded: true
          };
          _this.mapBranchPanelOptions = {
            isExpandable: true,
            labelKey: 'select_map_branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.cifBranchPanelOptions = {
            isExpandable: true,
            labelKey: 'request_branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.cifrequestBranchOptions = {
            placeHolder: 'request_branch_key',
            labelKey: 'request_branch_key',
            group: _this.formGroup,
            fcName: 'branch'
          };
          _this.cardHolderNameOptions = {
            placeHolder: 'cardholder_name_key',
            labelKey: 'cardholder_name_key',
            group: _this.formGroup,
            fcName: 'cardHolderName'
          };
          _this.deliveryAddressDetails = {
            collectionModeOptions: {
              group: _this.formGroup,
              fcName: 'deliveryLoc'
            },
            branchLocationOptions: {
              fcName: 'destinationBranchesDropdown',
              group: _this.formGroup,
              countryRegionCityOptions: {
                countriesOptions: {
                  fcName: 'destinationBranchCountry'
                },
                regionOptions: {
                  fcName: 'destinationBranchRegion'
                },
                cityOptions: {
                  fcName: 'destinationBranchCity'
                }
              },
              branchesOptions: {
                fcName: 'destinationBranch'
              }
            },
            homeAddressOptions: {
              placeHolder: 'home_address_key',
              labelKey: 'home_address_key',
              group: _this.formGroup,
              fcName: 'homeAddress',
              requestVO: _this.supplementaryCardRequestVO
            },
            workAddressOptions: {
              placeHolder: 'work_address_key',
              labelKey: 'work_address_key',
              group: _this.formGroup,
              fcName: 'workAddress',
              requestVO: _this.supplementaryCardRequestVO
            },
            otherAddressOptions: {
              labelKey: 'address_details_key',
              rows: '3',
              cols: '10',
              fcName: 'otherAddressDetails',
              group: _this.formGroup
            },
            branchCifOptions: {
              placeHolder: 'request_branch_key',
              labelKey: 'request_branch_key',
              group: _this.formGroup,
              fcName: 'branchName'
            },
            cifBranchChecking: true
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup
          };
          _this.itemCard = {};
          _this.cardOptions = {};
          return _this;
        }

        _inherits(SupplementaryCardRequestPage, _omni_base_omni_base_);

        return _createClass(SupplementaryCardRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(SupplementaryCardRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; //this.supplementaryCardRequestVO = this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {};

            this.itemCard = this.supplementaryCardRequestVO;
            this.cardOptions.formGroup = this.formGroup;
            this.cardOptions.labelsValueMap = this.navigationServices.getParamKey('labelsValueMap');
            this.cardOptions.headerMap = this.navigationServices.getParamKey('headerMap');
            this.cardOptions.showInitialCardValues = this.navigationServices.getParamKey('showInitialCardValues');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(SupplementaryCardRequestPage, "ionViewDidEnter", this, 3)([]);

            this.fetchParameter();
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var cifInfo, result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].USERINFO);
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)["catch"](function (error) {
                      _this3.loggerP.error(error);
                    });

                  case 1:
                    result = _context.v;

                    if (result !== -1 && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: 'cif_branch_panel'
                      }]);
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: 'branch_map_panel'
                      }]);
                    } else {
                      if (result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                        this.cifrequestBranchOptions.labelKey = "account_branch_key";
                        this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, cifInfo.cifBranch ? cifInfo.customerInfoCO.branchCode : '', this.supplementaryCardRequestVO);
                      } else {
                        this.cifrequestBranchOptions.labelKey = "cif_branch_key";
                        this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, cifInfo.cifBranch ? cifInfo.customerInfoCO.branchBriefDesc : '', this.supplementaryCardRequestVO);
                      }

                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: 'cif_branch_panel'
                      }]);
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: 'branch_map_panel'
                      }]);
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch(event) {
            if (event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.supplementaryCardRequestVO);
            }
          }
        }, {
          key: "updateScreenVO",
          value: function updateScreenVO() {
            this.supplementaryCardRequestVO['primarySupplementary'] = 'Supplementary';
            this.supplementaryCardRequestVO['primaryCard'] = this.supplementaryCardRequestVO['cardNumber'];
            delete this.supplementaryCardRequestVO['ownerName'];
            delete this.supplementaryCardRequestVO['key'];
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_13__["OmniBasePage"]);

      SupplementaryCardRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__["PsNavigatorService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]
        }];
      };

      SupplementaryCardRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'supplementary-card-request',
        template: _raw_loader_supplementary_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_supplementary_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_11__["PsNavigatorService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_12__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_9__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])], SupplementaryCardRequestPage);
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
            var _this4 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this4.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this5 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this5.disableForm(_this5.baseFormGroup);

                _this5.isPageDisabled = true;
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
    "q5NM":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/supplementary-card-request/supplementary-card-request.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q5NM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"mainCardPanelOptions\" id=\"main_card_info_panel\">\n      <ps-container-lookup-option [options]=\"cardOptions\" [itemCard]=\"itemCard\"></ps-container-lookup-option>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"supplementaryCardPanelOptions\" id=\"supplementary_card_info_panel\">\n      <ps-input-varchar id=\"card_holder_name\" [options]=\"cardHolderNameOptions\">\n      </ps-input-varchar>\n      <ps-complex-location [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"mapBranchPanelOptions\" id=\"branch_map_panel\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"cifBranchPanelOptions\" id=\"cif_branch_panel\">\n      <ps-input-display-only id=\"accountCifBranch\" [options]=\"cifrequestBranchOptions\">\n      </ps-input-display-only>\n    </ps-container-panel>\n\n  </ps-form-step>\n</ps-template-stepper>";
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
//# sourceMappingURL=60-es5.js.map