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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83], {
    /***/
    "+/KC":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/credit-card-request/credit-card-request.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _KC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"credit_card_req_panel\">\n\n\n\n      <ps-input-varchar id=\"cardHolderName\" [options]=\"cardHolderNameOptions\">\n      </ps-input-varchar>\n\n\n      <ps-dropdown-card-types id=\"cardType\" [options]=\"cardTypeOptions\" (onPsChange)=\"onCardTypeChange($event)\">\n      </ps-dropdown-card-types>\n\n\n      <ps-input-display-only id=\"withdrawal_limit\" [options]=\"withdrawalLimitOptions\">\n      </ps-input-display-only>\n\n\n      <ps-input-display-only id=\"posLimit\" [options]=\"posLimitOptions\">\n      </ps-input-display-only>\n\n\n      <ps-input-display-only id=\"billingCycle\" [options]=\"billingCycleOptions\">\n      </ps-input-display-only>\n\n\n\n      <!-- To Do: add new ddl for minimum payment -->\n\n\n\n      <ps-lookup-own-accounts id=\"settlementAccountid\" [options]=\"settlementAccountOptions\">\n      </ps-lookup-own-accounts>\n\n      <ps-complex-location (parentFun)=\"hideMap()\" [options]=\"deliveryAddressDetails\">\n      </ps-complex-location>\n\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"credit_card_req_pane2\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions4Step1\" id=\"credit_card_req_panel3\">\n      <ps-input-display-only id=\"accountCifBranch\" [options]=\"cifrequestBranchOptions\">\n      </ps-input-display-only>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions3Step1\" id=\"persoal_collect_panel\">\n      <ps-select-toggle [options]=\"personalCollectToggleOptions\" (onPsChange)=\"onPersonalToggleClicked($event)\">\n      </ps-select-toggle>\n      <ps-input-varchar *ngIf=\"showCollectorPanel\" id=\" collectorName\" [options]=\"collectorNameOptions\">\n      </ps-input-varchar>\n      <ps-complex-cif-id-types *ngIf=\"showCollectorPanel\" [options]=\"defaultCifIdTypesOptions\">\n      </ps-complex-cif-id-types>\n    </ps-container-panel>\n\n  </ps-form-step>\n\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"atmBranchesPanelOptions\" id=\"reqBranch\">\n      <div class=\"dcMapLocator\">\n        <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\">\n        </ps-map-atm-branches>\n      </div>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptionsStep2\" id=\"destBranch\">\n      <div class=\"dcMapLocator\">\n        <ps-map-atm-branches class=\"component-map-container\" [options]=\"destinationBranchesOptions\">\n        </ps-map-atm-branches>\n      </div>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "Ty6Q":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/credit-card-request/credit-card-request.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function Ty6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXQtY2FyZC1yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "gzy4":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/credit-card-request/credit-card-request.page.ts ***!
      \***********************************************************************/

    /*! exports provided: CreditCardRequestPage */

    /***/
    function gzy4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreditCardRequestPage", function () {
        return CreditCardRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_credit_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./credit-card-request.page.html */
      "+/KC");
      /* harmony import */


      var _credit_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./credit-card-request.page.scss */
      "Ty6Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var CreditCardRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function CreditCardRequestPage(omniPull, loggerP, commonService, omniCommon, eventEmitterService) {
          var _this;

          _classCallCheck(this, CreditCardRequestPage);

          _this = _callSuper(this, CreditCardRequestPage);
          _this.omniPull = omniPull;
          _this.loggerP = loggerP;
          _this.commonService = commonService;
          _this.omniCommon = omniCommon;
          _this.eventEmitterService = eventEmitterService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.creditCardRequestVO = {};
          _this.cifInfo = {};
          _this.showCollectorPanel = true;
          _this.stepperOptions = {
            stepperName: 'credit_card_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['credit_card_req_step1', 'credit_card_req_step2'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.creditCardRequest,
              group: _this.formGroup
            },
            requestObject: _this.creditCardRequestVO
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'card_details_key',
            iconName: 'new-card-request',
            expanded: true
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_map_branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.panelOptions3Step1 = {
            isExpandable: true,
            labelKey: 'collect_or_reveiver_details_key',
            iconName: 'new-card-request',
            expanded: true
          };
          _this.panelOptions4Step1 = {
            isExpandable: true,
            labelKey: 'request_branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.panelOptionsStep2 = {
            isExpandable: true,
            labelKey: 'choose_destination_Branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.atmBranchesPanelOptions = {
            isExpandable: true,
            labelKey: 'choose_request_branch_key',
            iconName: 'location-pin',
            expanded: true
          };
          _this.cardHolderNameOptions = {
            placeHolder: 'card_holder_name_key',
            labelKey: 'card_holder_name_key',
            group: _this.formGroup,
            fcName: 'cardHolderName'
          };
          _this.cardTypeOptions = {
            labelKey: 'card_type_key',
            placeHolder: 'select_card_type_key',
            group: _this.formGroup,
            fcName: 'cardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].CARDTYPE_C
          };
          _this.mapAtmBranchesOptions = {
            group: _this.formGroup,
            fcName: 'mapAtmBranches',
            labelKey: 'map_atm_branch_key',
            mapOptions: {
              labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH,
            requestVO: _this.creditCardRequestVO
          };
          _this.destinationBranchesOptions = {
            group: _this.formGroup,
            fcName: 'destinationBranches',
            labelKey: 'destination_branch_key',
            mapOptions: {
              labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            branchIds: '1,3,5',
            requestVO: _this.creditCardRequestVO
          };
          _this.posLimitOptions = {
            placeHolder: '',
            labelKey: 'pos_Limit_key',
            fcName: 'posLimit',
            group: _this.formGroup
          };
          _this.withdrawalLimitOptions = {
            placeHolder: '',
            labelKey: 'withdrawal_limit_key',
            fcName: 'withdrawalLimit',
            group: _this.formGroup
          };
          _this.billingCycleOptions = {
            labelKey: 'bilind_cycle_key',
            fcName: 'billingCycle',
            group: _this.formGroup
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup
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
              requestVO: _this.creditCardRequestVO
            },
            workAddressOptions: {
              placeHolder: 'work_address_key',
              labelKey: 'work_address_key',
              group: _this.formGroup,
              fcName: 'workAddress',
              requestVO: _this.creditCardRequestVO
            },
            otherAddressOptions: {
              labelKey: 'address_details_key',
              rows: '3',
              cols: '10',
              fcName: 'otherAddressDetails',
              group: _this.formGroup
            },
            branchCifOptions: {
              labelKey: 'account_branch_key',
              group: _this.formGroup,
              fcName: 'branchName'
            },
            cifBranchChecking: true
          };
          _this.cifrequestBranchOptions = {
            labelKey: 'account_branch_key',
            group: _this.formGroup,
            fcName: 'branch'
          };
          _this.settlementAccountOptions = {
            labelKey: 'settlement_account_key',
            placeHolder: 'settlement_account_key',
            accountNumber: '',
            currency: '',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].GeneralType,
            fcName: 'settlementAccount',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            fromTo: 'from',
            accountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].GeneralType,
            requestObject: _this.creditCardRequestVO
          };
          _this.personalCollectToggleOptions = {
            labelKey: 'i_will_be_collecting_personally_my_credit_card_key',
            group: _this.formGroup,
            fcName: 'personalCollect',
            psClass: 'toggleColor'
          };
          _this.collectorNameOptions = {
            placeHolder: 'collector_or_receiver_name_key',
            labelKey: 'collector_or_receiver_name_key',
            group: _this.formGroup,
            fcName: 'collectorName'
          };
          _this.defaultCifIdTypesOptions = {
            showCifType: false,
            group: _this.formGroup,
            cifTypeOptions: {
              group: _this.formGroup,
              fcName: 'idType'
            },
            complexIdDetailsOptions: {
              dropdownIdTypesOptions: {
                group: _this.formGroup
              },
              idNumberOptions: {
                group: _this.formGroup
              },
              dateExpiryOptions: {
                group: _this.formGroup
              },
              countriesOptions: {
                group: _this.formGroup
              },
              issueDateOptions: {
                group: _this.formGroup
              }
            },
            complexIdDetailsOptions1: {
              dropdownIdTypesOptions: {
                group: _this.formGroup
              },
              idNumberOptions: {
                group: _this.formGroup
              },
              dateExpiryOptions: {
                group: _this.formGroup
              },
              countriesOptions: {
                group: _this.formGroup
              },
              issueDateOptions: {
                group: _this.formGroup
              }
            },
            requestObject: _this.creditCardRequestVO
          };
          _this.enableCifBranch = false;
          return _this;
        }

        _inherits(CreditCardRequestPage, _omni_base_omni_base_);

        return _createClass(CreditCardRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(CreditCardRequestPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(CreditCardRequestPage, "ionViewDidEnter", this, 3)([]);

            this.fetchParameter();
          }
        }, {
          key: "fetchParameter",
          value: function fetchParameter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].USERINFO);
                    _context.n = 1;
                    return this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CARDS_REQUEST_BRANCH)["catch"](function (error) {
                      _this2.loggerP.error(error);
                    });

                  case 1:
                    result = _context.v;

                    if (result !== -1 && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.enableCifBranch = false;
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: 'credit_card_req_panel3'
                      }]);
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: 'credit_card_req_pane2'
                      }]);
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: 'reqBranch'
                      }], true);
                    } else {
                      if (result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
                        this.cifrequestBranchOptions.labelKey = "account_branch_key";
                        this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchCode : '', this.creditCardRequestVO);
                      } else {
                        this.cifrequestBranchOptions.labelKey = "cif_branch_key";
                        this.commonProv.setValInsideNestedObj(this.cifrequestBranchOptions.fcName, this.cifInfo.cifBranch ? this.cifInfo.customerInfoCO.branchBriefDesc : '', this.creditCardRequestVO);
                      }

                      this.enableCifBranch = true;
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: 'credit_card_req_panel3'
                      }]);
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: 'credit_card_req_pane2'
                      }]);
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: 'reqBranch'
                      }], true);
                    }

                    if (result !== -1 && result.CollectionDestinationBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: 'destBranch'
                      }], true);
                    } else {
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }, {
                        fcName: 'destBranch'
                      }], true);
                    }

                    if (result !== -1 && result.RequestBranch !== src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID && result !== -1 && result.CollectionDestinationBranch !== src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                      this.omniCommon.branchSelectionAndMapControl(0, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }], true);
                    } else {
                      this.omniCommon.branchSelectionAndMapControl(1, [{
                        fcName: this.stepperOptions.namesofSteps[1]
                      }], true);
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onCardTypeChange",
          value: function onCardTypeChange(values) {
            if (values.selectedObj) {
              switch (values.selectedObj.wdLimitBasedOn) {
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LIMIT:
                  // Todo: base currency is missing
                  this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, values.selectedObj.wdLimitAmount + this.getPeriodiCity(values.selectedObj.wdLimitCheckPeriod), this.creditCardRequestVO);
                  break;

                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OPEN:
                  this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, 'Unlimited', this.creditCardRequestVO);
                  break;

                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BALANCE:
                  this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, values.selectedObj.accountBalance ? values.selectedObj.accountBalance : '0', this.creditCardRequestVO);
                  break;
              }

              switch (values.selectedObj.posLimitBasedOn) {
                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LIMIT:
                  // Todo: base currency and periodicty is missing
                  this.commonProv.setValInsideNestedObj(this.posLimitOptions.fcName, values.selectedObj.posLimitAmount ? values.selectedObj.posLimitAmount : '0', this.creditCardRequestVO);
                  break;

                case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OPEN:
                  this.commonProv.setValInsideNestedObj(this.posLimitOptions.fcName, 'Unlimited', this.creditCardRequestVO);
                  break;
              }

              if (values.selectedObj.billingCycle) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_12__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.billingCycleOptions.fcName], 1);
                this.commonProv.setValInsideNestedObj(this.withdrawalLimitOptions.fcName, values.selectedObj.billingCycle, this.creditCardRequestVO);
              }
            }
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch(event) {
            if (event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue(event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, event.selectedObj, this.creditCardRequestVO);
            }
          }
        }, {
          key: "getPeriodiCity",
          value: function getPeriodiCity(val) {
            switch (val) {
              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DAYS:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DY;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MONTHS:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].MNTH;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].WEEK_CODE:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].WEEK;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QUATER_CODE:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].QUATER;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].YEAR:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].YR;

              default:
                return src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DY;
            }
          }
        }, {
          key: "hideMap",
          value: function hideMap() {
            var modeOfCollection = this.creditCardRequestVO ? this.creditCardRequestVO[this.deliveryAddressDetails.collectionModeOptions.fcName] : {};

            if ((modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].SPECIFIC_BRANCH_VALUE || (modeOfCollection === null || modeOfCollection === void 0 ? void 0 : modeOfCollection.itemValue) === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE || modeOfCollection === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].OTHER_ADDRESS_VALUE) {
              this.omniCommon.branchSelectionAndMapControl(1, [{
                fcName: this.stepperOptions.namesofSteps[1]
              }, {
                fcName: 'destBranch'
              }], true);
            } else {
              this.omniCommon.branchSelectionAndMapControl(0, [{
                fcName: this.stepperOptions.namesofSteps[1]
              }, {
                fcName: 'destBranch'
              }], true);

              if (this.enableCifBranch) {
                this.omniCommon.branchSelectionAndMapControl(0, [{
                  fcName: this.stepperOptions.namesofSteps[1]
                }, {
                  fcName: 'reqBranch'
                }], true);
              } else {
                this.omniCommon.branchSelectionAndMapControl(1, [{
                  fcName: this.stepperOptions.namesofSteps[1]
                }, {
                  fcName: 'reqBranch'
                }], true);
              }
            }
          }
        }, {
          key: "onPersonalToggleClicked",
          value: function onPersonalToggleClicked(event) {
            this.showCollectorPanel = !event.newValue;
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      CreditCardRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"]
        }];
      };

      CreditCardRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'credit-card-request-test',
        template: _raw_loader_credit_card_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_credit_card_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_8__["OmniCommonService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_10__["EventEmitterService"]])], CreditCardRequestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=83-es5.js.map