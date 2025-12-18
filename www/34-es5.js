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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34], {
    /***/
    "8Bn4":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/beneficiary-list/beneficiary-list.page.ts ***!
      \*****************************************************************/

    /*! exports provided: BeneficiaryListPage */

    /***/
    function Bn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeneficiaryListPage", function () {
        return BeneficiaryListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_beneficiary_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./beneficiary-list.page.html */
      "PHiK");
      /* harmony import */


      var _beneficiary_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./beneficiary-list.page.scss */
      "YkfP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service */
      "tC40");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /**
       * @author Aftab.Ali
       * @since 30/1/2020
       *
       * <p> BeneficiaryListPage </p>
       */


      var BeneficiaryListPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function BeneficiaryListPage(commonService, logger, omniPull, beneficiariesService) {
          var _this;

          _classCallCheck(this, BeneficiaryListPage);

          _this = _callSuper(this, BeneficiaryListPage);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.beneficiariesService = beneficiariesService;
          _this.internalBeneficiaryOptions = {};
          _this.localBeneficiaryOptions = {};
          _this.internationalBeneficiaryOptions = {};
          _this.cashTransferOptions = {};
          _this.bankCardBeneficiaryOptions = {};
          _this.localCardBeneficiaryOptions = {};
          _this.noInternalBeneficiariesFound = false;
          _this.noLocalBeneficiariesFound = false;
          _this.noInternationalBeneficiariesFound = false;
          _this.noCashTransfersFound = false;
          _this.noBankCardBeneficiariesFound = false;
          _this.noLocalCardBeneficiariesFound = false;
          _this.beneficiariesRequestParam = {};
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.addBeneficiaryButtonOptions = {
            group: _this.formGroup
          };
          _this.hasAccOnInternalBenef = false;
          _this.hasAccOnLocalBenef = false;
          _this.hasAccOnInternationalBenef = false;
          _this.hasAccOnCashTransfer = false;
          _this.hasAccOnBankCardBenef = false;
          _this.hasAccOnLocalCardBenef = false; //if the user has access on the local card benef operation 

          _this.templateViewOptions = {
            group: _this.formGroup,
            disableLoading: true
          };
          _this.actionImageOptions = {
            imageName: src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_10__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          };
          _this.noInternalOptions = {
            labelKey: 'no_internal_ben_available_key'
          };
          _this.noLocalOptions = {
            labelKey: 'no_local_ben_available_key'
          };
          _this.noInternationalOptions = {
            labelKey: 'no_internat_ben_available_key'
          };
          _this.noCashTransferOptions = {
            labelKey: 'no_cash_transfer_available_key'
          };
          _this.noBankCardOptions = {
            labelKey: 'no_bank_card_ben_available_key'
          };
          _this.noLocalCardOptions = {
            labelKey: 'no_Local_card_ben_available_key'
          };
          _this.requestWasSent = true;
          _this.internalBeneficiaryKey = 'internal_beneficiary_key';
          _this.localBeneficiaryKey = 'local_beneficiary_key';
          _this.internationalBeneficiaryKey = 'international_beneficiary_key';
          _this.complexSegmentOptions = {
            segmentOptions: {
              fcName: 'beneficiaryTypesSegment',
              segmentList: [{
                selected: true,
                itemValue: _this.internalBeneficiaryKey,
                description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY
              }, {
                selected: true,
                itemValue: _this.localBeneficiaryKey,
                description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY
              }, {
                selected: true,
                itemValue: _this.internationalBeneficiaryKey,
                description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY
              }, {
                selected: true,
                itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
                description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER_DESC
              }, {
                selected: true,
                itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_KEY,
                description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_KEY
              }, {
                selected: true,
                itemValue: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_KEY,
                description: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_KEY
              }]
            },
            segmentContainerOptions: {
              numberOfSegments: 6,
              namesofSegments: ['internal_beneficiary_segment', 'local_beneficiary_segment', 'international_beneficiary_segment', 'cash_transfer_segment', 'bank_card_segment', 'local_card_segment']
            }
          };
          return _this;
        } //edited by Marina TP:#1447627 separate parts of code into separated functions to follow best practices convetions 


        _inherits(BeneficiaryListPage, _omni_base_omni_base_);

        return _createClass(BeneficiaryListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(BeneficiaryListPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; // Added by Zunair For #BUG 1257538

            this.complexSegmentOptions.group = this.formGroup;
            this.initializeBeneficiariesOptions(); // this.setDefaultSegment();

            this.addBeneficiaryButtonOptions = {
              labelKey: 'add_beneficiary_key',
              group: this.formGroup
            };
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(BeneficiaryListPage, "ionViewDidEnter", this, 3)([]);
          }
        }, {
          key: "initializeBeneficiariesOptions",
          value: function initializeBeneficiariesOptions() {
            this.internalBeneficiaryOptions = {
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE,
              isEditable: true,
              hyperLink: {
                route: 'internal-beneficiary',
                labelKey: 'internal_beneficiary_key',
                iconOptions: {
                  iconName: 'add-benef',
                  labelOptions: {
                    labelKey: 'add_internal_benef_key'
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID,
                  title: 'internal_beneficiary_key',
                  iconName: 'beneficiaries'
                }
              }
            };
            this.localBeneficiaryOptions = {
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE,
              isEditable: true,
              hyperLink: {
                route: 'local-beneficiary',
                labelKey: 'local_beneficiary_key',
                iconOptions: {
                  iconName: 'add-benef',
                  labelOptions: {
                    labelKey: 'add_local_benef_key'
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID,
                  title: 'local_beneficiary_key',
                  iconName: 'beneficiaries'
                }
              }
            };
            this.internationalBeneficiaryOptions = {
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL,
              isEditable: true
            };
            this.cashTransferOptions = {
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER,
              isEditable: true
            };
            this.bankCardBeneficiaryOptions = {
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_TYPE,
              isEditable: true,
              hyperLink: {
                route: 'internal-card-beneficiary',
                labelKey: 'bank_card_beneficiary_key',
                iconOptions: {
                  iconName: 'add-benef',
                  labelOptions: {
                    labelKey: 'add_bank_card_benef_key'
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                  title: 'bank_card_beneficiary_key',
                  iconName: 'beneficiaries'
                }
              }
            };
            this.localCardBeneficiaryOptions = {
              group: this.formGroup,
              type: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_TYPE,
              isEditable: true,
              hyperLink: {
                route: 'local-card-beneficiary',
                labelKey: 'local_card_beneficiary_key',
                iconOptions: {
                  iconName: 'add-benef',
                  labelOptions: {
                    labelKey: 'add_local_card_benef_key'
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID,
                  title: 'local_card_beneficiary_key',
                  iconName: 'beneficiaries'
                }
              }
            };
          } //This code is commented as all options are already declared above and it doesn't add anything else 

        }, {
          key: "onClickSegment",
          value: function onClickSegment(selectedSegment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.loadBeneficiaries(selectedSegment);

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
          /**
           * fetching beneficiaries
           * @param segment
           */

        }, {
          key: "loadBeneficiaries",
          value: function loadBeneficiaries(segment) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.requestWasSent = true;
                    this.selectedSegment = segment;

                    if (!(segment === this.internalBeneficiaryKey)) {
                      _context2.n = 2;
                      break;
                    }

                    this.beneficiariesRequestParam = {
                      trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE,
                      filterByOper: true,
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID
                    };
                    _context2.n = 1;
                    return this.returnInternalBeneficiaries(this.beneficiariesRequestParam);

                  case 1:
                    _context2.n = 11;
                    break;

                  case 2:
                    if (!(segment === this.localBeneficiaryKey)) {
                      _context2.n = 4;
                      break;
                    }

                    this.beneficiariesRequestParam = {
                      trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_TYPE,
                      filterByOper: true,
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID
                    };
                    _context2.n = 3;
                    return this.returnLocalBeneficiaries(this.beneficiariesRequestParam);

                  case 3:
                    _context2.n = 11;
                    break;

                  case 4:
                    if (!(segment === this.internationalBeneficiaryKey)) {
                      _context2.n = 6;
                      break;
                    }

                    this.beneficiariesRequestParam = {
                      trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].INTERNATIONAL,
                      filterByOper: true,
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID
                    };
                    _context2.n = 5;
                    return this.returnInternationalBeneficiaries(this.beneficiariesRequestParam);

                  case 5:
                    _context2.n = 11;
                    break;

                  case 6:
                    if (!(segment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_KEY)) {
                      _context2.n = 8;
                      break;
                    }

                    this.beneficiariesRequestParam = {
                      trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_TYPE,
                      filterByOper: true,
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID
                    };
                    _context2.n = 7;
                    return this.returnBankCardBeneficiaries(this.beneficiariesRequestParam);

                  case 7:
                    _context2.n = 11;
                    break;

                  case 8:
                    if (!(segment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_KEY)) {
                      _context2.n = 10;
                      break;
                    }

                    this.beneficiariesRequestParam = {
                      trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_TYPE,
                      filterByOper: true,
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID
                    };
                    _context2.n = 9;
                    return this.returnLocalCardBeneficiaries(this.beneficiariesRequestParam);

                  case 9:
                    _context2.n = 11;
                    break;

                  case 10:
                    this.beneficiariesRequestParam = {
                      trxTypeParameterName: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_TRANSFER,
                      filterByOper: true,
                      operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID
                    };
                    _context2.n = 11;
                    return this.returnCashTransfers(this.beneficiariesRequestParam);

                  case 11:
                    this.requestWasSent = false;

                  case 12:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
          /**
           * fetching internal beneficiaries
           * @param requestData
           */

        }, {
          key: "returnInternalBeneficiaries",
          value: function returnInternalBeneficiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this2 = this;

              var result;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this2.logger.error('Error: While fetching internal beneficiaries in BeneficiaryListPage :', error);
                    });

                  case 1:
                    result = _context3.v;

                    if (result && result.gridModel.length > 0) {
                      this.noInternalBeneficiariesFound = false;
                      this.internalBeneficiaryOptions.listOfOptions = [];
                      this.internalBeneficiaryOptions.listOfOptions = this.populateCustomInternalBeneficiaries(result.gridModel);
                    } else {
                      this.internalBeneficiaryOptions.listOfOptions = []; // this.populateCustomInternalBeneficiaries([]);

                      this.noInternalBeneficiariesFound = true;
                    }

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
          /**
           * fetching local beneficiaries
           * @param requestData
           */

        }, {
          key: "returnLocalBeneficiaries",
          value: function returnLocalBeneficiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this3 = this;

              var result;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this3.logger.error('Error: While fetching local beneficiaries in BeneficiaryListPage :', error);
                    });

                  case 1:
                    result = _context4.v;

                    if (result && result.gridModel.length > 0) {
                      this.noLocalBeneficiariesFound = false;
                      this.localBeneficiaryOptions.listOfOptions = [];
                      this.localBeneficiaryOptions.listOfOptions = this.populateCustomLocalBeneficiaries(result.gridModel);
                    } else {
                      this.localBeneficiaryOptions.listOfOptions = []; // this.populateCustomLocalBeneficiaries([]);

                      this.noLocalBeneficiariesFound = true;
                    }

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
          /**
           * fetching international beneficiaries
           * @param requestData
           */

        }, {
          key: "returnInternationalBeneficiaries",
          value: function returnInternationalBeneficiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this4 = this;

              var result;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this4.logger.error('Error: While fetching international beneficiaries in BeneficiaryListPage :', error);
                    });

                  case 1:
                    result = _context5.v;

                    if (result && result.gridModel.length > 0) {
                      this.noInternationalBeneficiariesFound = false;
                      this.internationalBeneficiaryOptions.listOfOptions = [];
                      this.internationalBeneficiaryOptions.listOfOptions = this.populateCustomInternationalBeneficiaries(result.gridModel);
                    } else {
                      this.internationalBeneficiaryOptions.listOfOptions = []; // this.populateCustomInternationalBeneficiaries([]);

                      this.noInternationalBeneficiariesFound = true;
                    }

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "returnBankCardBeneficiaries",
          value: function returnBankCardBeneficiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this5 = this;

              var result;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this5.logger.error('Error: While fetching international beneficiaries in BeneficiaryListPage :', error);
                    });

                  case 1:
                    result = _context6.v;

                    if (result && result.gridModel.length > 0) {
                      this.noBankCardBeneficiariesFound = false;
                      this.bankCardBeneficiaryOptions.listOfOptions = [];
                      this.bankCardBeneficiaryOptions.listOfOptions = this.populateCustomBankCardBeneficiaries(result.gridModel);
                    } else {
                      this.bankCardBeneficiaryOptions.listOfOptions = [];
                      this.noBankCardBeneficiariesFound = true;
                    }

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "returnLocalCardBeneficiaries",
          value: function returnLocalCardBeneficiaries(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this6 = this;

              var result;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this6.logger.error('Error: While fetching international beneficiaries in BeneficiaryListPage :', error);
                    });

                  case 1:
                    result = _context7.v;

                    if (result && result.gridModel.length > 0) {
                      this.noLocalCardBeneficiariesFound = false;
                      this.localCardBeneficiaryOptions.listOfOptions = [];
                      this.localCardBeneficiaryOptions.listOfOptions = this.populateCustomLocalCardBeneficiaries(result.gridModel);
                    } else {
                      this.localCardBeneficiaryOptions.listOfOptions = [];
                      this.noLocalCardBeneficiariesFound = true;
                    }

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "returnCashTransfers",
          value: function returnCashTransfers(requestData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this7 = this;

              var result;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.omniPull.returnBeneficiaries(requestData)["catch"](function (error) {
                      _this7.logger.error('Error: While fetching cash transfers in BeneficiaryListPage :', error);
                    });

                  case 1:
                    result = _context8.v;

                    if (result && result.gridModel.length > 0) {
                      this.noCashTransfersFound = false;
                      this.cashTransferOptions.listOfOptions = [];
                      this.cashTransferOptions.listOfOptions = this.populateCustomCashTransfers(result.gridModel);
                    } else {
                      this.cashTransferOptions.listOfOptions = []; // this.populateCustomCashTransfers([]);

                      this.noCashTransfersFound = true;
                    }

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "updateCard",
          value: function updateCard(value) {}
          /**
           * customizing internal beneficiary object
           * @param gridModel
           */
          //modified by ghada, AZDB-309 for identifying and distinguishing each beneficiary's related keys, to fix the issue of keys with similar name getting affected by a beneficiary customization

        }, {
          key: "populateCustomInternalBeneficiaries",
          value: function populateCustomInternalBeneficiaries(internalBeneficiaries) {
            return this.beneficiariesService.populateInternalBeneficiaries(internalBeneficiaries);
          }
          /**
           * customizing local beneficiary object
           * @param gridModel
           */

        }, {
          key: "populateCustomLocalBeneficiaries",
          value: function populateCustomLocalBeneficiaries(localBeneficiaries) {
            return this.beneficiariesService.populateLocalBeneficiaries(localBeneficiaries);
          }
          /**
           * customizing international beneficiary object
           * @param gridModel
           */

        }, {
          key: "populateCustomInternationalBeneficiaries",
          value: function populateCustomInternationalBeneficiaries(internationBeneficiaries) {
            return this.beneficiariesService.populateInternationalBeneficiaries(internationBeneficiaries);
          }
        }, {
          key: "populateCustomBankCardBeneficiaries",
          value: function populateCustomBankCardBeneficiaries(bankCardBeneficiaries) {
            return this.beneficiariesService.populateBankCardBeneficiaries(bankCardBeneficiaries);
          }
        }, {
          key: "populateCustomLocalCardBeneficiaries",
          value: function populateCustomLocalCardBeneficiaries(LocalCardBeneficiaries) {
            return this.beneficiariesService.populateLocalCardBeneficiaries(LocalCardBeneficiaries);
          }
        }, {
          key: "populateCustomCashTransfers",
          value: function populateCustomCashTransfers(cashTransfers) {
            return this.beneficiariesService.populateCashTransfers(cashTransfers);
          } //End ghada

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _a;

            _superPropGet(BeneficiaryListPage, "viewWillEnter", this, 3)([]);

            this.loadBeneficiaries(this.formGroup.controls[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].CONTROLLER_FORM_DATA].value[this.complexSegmentOptions.segmentOptions.fcName] || ((_a = this.complexSegmentOptions.segmentOptions.defaultSegment) === null || _a === void 0 ? void 0 : _a.itemValue));
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      BeneficiaryListPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]
        }];
      };

      BeneficiaryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-beneficiary-list',
        template: _raw_loader_beneficiary_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_beneficiary_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonBussinessSRC_psServices_beneficiaries_beneficiaries_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiariesService"]])], BeneficiaryListPage);
      /***/
    },

    /***/
    "PHiK":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/beneficiary-list/beneficiary-list.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PHiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\">\n  <ps-complex-segment id=\"accountsSegment\" (complexSegmentButtonClicked)=\"onClickSegment($event)\"\n    [options]=\"complexSegmentOptions\">\n    <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n      <ps-internal-beneficiary [options]=\"internalBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'internal_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('internal_beneficiary_key')\"></ps-internal-beneficiary>\n      <div *ngIf=\"noInternalBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noInternalOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n      <ps-local-beneficiary [options]=\"localBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'local_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('local_beneficiary_key')\"></ps-local-beneficiary>\n      <div *ngIf=\"noLocalBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noLocalOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment3 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[2]\">\n      <ps-international-beneficiary [options]=\"internationalBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'international_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('international_beneficiary_key')\">\n      </ps-international-beneficiary>\n      <div *ngIf=\"noInternationalBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noInternationalOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment4 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[3]\">\n      <ps-cash-transfer [options]=\"cashTransferOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'cash_transfer_key'\"\n        (reloadFct)=\"loadBeneficiaries('cash_transfer_key')\">\n      </ps-cash-transfer>\n      <div *ngIf=\"noCashTransfersFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noCashTransferOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n    <ps-content-segment segment5 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[4]\">\n      <ps-internal-beneficiary [options]=\"bankCardBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'bank_card_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('bank_card_beneficiary_key')\"></ps-internal-beneficiary>\n      <div *ngIf=\"noBankCardBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noBankCardOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n\n    <ps-content-segment segment6 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[5]\">\n      <ps-local-beneficiary [options]=\"localCardBeneficiaryOptions\"\n        *ngIf=\"!requestWasSent && selectedSegment == 'local_card_beneficiary_key'\"\n        (reloadFct)=\"loadBeneficiaries('local_card_beneficiary_key')\"></ps-local-beneficiary>\n      <div *ngIf=\"noLocalCardBeneficiariesFound\" class=\"no-beneficiary-found-text\">\n        <ps-label [options]=\"noLocalCardOptions\"></ps-label>\n      </div>\n    </ps-content-segment>\n  </ps-complex-segment>\n\n  <ng-container *ngIf=\"requestWasSent\">\n    <div class=\"inline-loading-image\">\n      <ps-action-image [options]=\"actionImageOptions\"></ps-action-image>\n    </div>\n  </ng-container>\n</ps-template-view>";
      /***/
    },

    /***/
    "YkfP":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/beneficiary-list/beneficiary-list.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function YkfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5lZmljaWFyeS1saXN0LnBhZ2Uuc2NzcyJ9 */";
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
            var _this8 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this8.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this9 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this9.disableForm(_this9.baseFormGroup);

                _this9.isPageDisabled = true;
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
//# sourceMappingURL=34-es5.js.map