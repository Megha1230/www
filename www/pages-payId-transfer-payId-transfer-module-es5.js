(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payId-transfer-payId-transfer-module"], {
    /***/
    "6jfY":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: PsLookupOwnPayIdsComponentModule */

    /***/
    function jfY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupOwnPayIdsComponentModule", function () {
        return PsLookupOwnPayIdsComponentModule;
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


      var _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-complex-components/ps-complex-lookup/ps-complex-lookup.component.module */
      "t+iT");
      /* harmony import */


      var _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component.module */
      "FApF");
      /* harmony import */


      var _ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ps-lookup-own-payIds.component */
      "JIdv");

      var PsLookupOwnPayIdsComponentModule = /*#__PURE__*/_createClass(function PsLookupOwnPayIdsComponentModule() {
        _classCallCheck(this, PsLookupOwnPayIdsComponentModule);
      });

      PsLookupOwnPayIdsComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnPayIdsComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_complex_components_ps_complex_lookup_ps_complex_lookup_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexLookupComponentModule"], _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_5__["PsPayIdBeneficiaryComponentModule"]],
        exports: [_ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnPayIdsComponent"]],
        entryComponents: [_ps_lookup_own_payIds_component__WEBPACK_IMPORTED_MODULE_6__["PsLookupOwnPayIdsComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsLookupOwnPayIdsComponentModule);
      /***/
    },

    /***/
    "9+1d":
    /*!***************************************************************!*\
      !*** ./src/app/pages/payId-transfer/payId-transfer.module.ts ***!
      \***************************************************************/

    /*! exports provided: PayIdTransferPageModule */

    /***/
    function d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayIdTransferPageModule", function () {
        return PayIdTransferPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component.module */
      "FApF");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-amount/ps-complex-amount.component.module */
      "Uxj/");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module */
      "ohDU");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component.module */
      "oZQX");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_payIds_ps_lookup_own_payIds_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.module */
      "6jfY");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.module */
      "d/Nm");
      /* harmony import */


      var _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _payId_transfer_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./payId-transfer.page */
      "q5E2");

      var routes = [{
        path: '',
        component: _payId_transfer_page__WEBPACK_IMPORTED_MODULE_12__["PayIdTransferPage"]
      }];

      var PayIdTransferPageModule = /*#__PURE__*/_createClass(function PayIdTransferPageModule() {
        _classCallCheck(this, PayIdTransferPageModule);
      });

      PayIdTransferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_8__["PsComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_10__["PsTemplateStepperModule"], src_app_commonBussinessSRC_psComponents_ps_lookup_ps_lookup_own_payIds_ps_lookup_own_payIds_component_module__WEBPACK_IMPORTED_MODULE_7__["PsLookupOwnPayIdsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_amount_ps_complex_amount_component_module__WEBPACK_IMPORTED_MODULE_4__["PsComplexAmountComponentModule"], src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component_module__WEBPACK_IMPORTED_MODULE_6__["PsInputVarcharComponentModule"], _commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component_module__WEBPACK_IMPORTED_MODULE_9__["PsComplexPayIdTypesDetailsComponentModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_select_branch_ps_complex_select_branch_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexSelectBranchComponentModule"], src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component_module__WEBPACK_IMPORTED_MODULE_3__["PsPayIdBeneficiaryComponentModule"]],
        declarations: [_payId_transfer_page__WEBPACK_IMPORTED_MODULE_12__["PayIdTransferPage"]]
      })], PayIdTransferPageModule);
      /***/
    },

    /***/
    "JIdv":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: PsLookupOwnPayIdsComponent */

    /***/
    function JIdv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsLookupOwnPayIdsComponent", function () {
        return PsLookupOwnPayIdsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_lookup_own_payIds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-lookup-own-payIds.component.html */
      "jx2c");
      /* harmony import */


      var _ps_lookup_own_payIds_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-lookup-own-payIds.component.scss */
      "Phs7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component */
      "PUN2");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../psServices/omni-common/omni-pull.service */
      "ZyuK");

      var PsLookupOwnPayIdsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsLookupOwnPayIdsComponent(common, logger, omniPull) {
          var _this;

          _classCallCheck(this, PsLookupOwnPayIdsComponent);

          _this = _callSuper(this, PsLookupOwnPayIdsComponent, [common, logger]);
          _this.common = common;
          _this.logger = logger;
          _this.omniPull = omniPull;
          _this.options = {
            requestObject: null
          };
          _this.complexLookupOptions = {
            requestObject: null,
            notFoundMessage: 'no_payids_found_key'
          };
          _this.labelValuesMap = new Map();

          _this.populatePayIdMap();

          return _this;
        }

        _inherits(PsLookupOwnPayIdsComponent, _src_app_commonSRC_ps);

        return _createClass(PsLookupOwnPayIdsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsLookupOwnPayIdsComponent, "init", this, 3)([]);

            this.returnPayIdList();
            this.complexLookupOptions.title = 'title_key';
            this.complexLookupOptions.subTitle = 'sub_title_key';
            this.complexLookupOptions.labelsValueMap = this.labelValuesMap;
            this.common.copyObject(this.complexLookupOptions, this.options, false);
            this.complexLookupOptions.requestObject = this.options.requestObject;

            if (this.options && this.options.component) {
              this.complexLookupOptions.component = this.options.component;
            } else {
              this.complexLookupOptions.component = _ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_6__["PsPayIdBeneficiaryComponent"];
            }
          }
        }, {
          key: "returnPayIdList",
          value: function returnPayIdList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var beneficiariesRequestParam, result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    beneficiariesRequestParam = {
                      filterByOper: true,
                      fromTo: this.options.fromTo
                    };
                    _context.n = 1;
                    return this.omniPull.returnBeneficiaries(beneficiariesRequestParam)["catch"](function (error) {
                      _this2.complexLookupOptions.listOfOptions = [];

                      _this2.logger.error('Error: While fetching payID beneficiaries in PsLookupBeneficiariesLocalComponent :', error);
                    });

                  case 1:
                    result = _context.v;

                    //demo
                    if (this.options.fromTo === 'to') {
                      result.gridModel = [{
                        submitFieldValueMap: {
                          nickName: 'IBA Wallet',
                          linkedAccount: '00018000132160353140272',
                          payIdType: 'P',
                          status: 'Active',
                          payIdTypeDescriptionConcat: 'Phone Number',
                          phoneNumber: '376712345',
                          lookupKey: '1',
                          purpose: 'business wallet',
                          previewProperty: 'nickName',
                          statusCode: 'A'
                        },
                        dataSaveId: 1
                      }, {
                        submitFieldValueMap: {
                          nickName: 'NAB Wallet',
                          linkedAccount: '00018000132160353140272',
                          payIdType: 'P',
                          status: 'Active',
                          payIdTypeDescriptionConcat: 'Email Address',
                          emailaddress: 'payID2@azentio.com',
                          lookupKey: '2',
                          purpose: 'business wallet',
                          previewProperty: 'nickName',
                          statusCode: 'A'
                        },
                        dataSaveId: 2
                      }];
                    } else {
                      result.gridModel = [{
                        submitFieldValueMap: {
                          nickName: 'Ahmed ElFkhrany',
                          availableBalance: '2000000',
                          linkedAccount: '00018000132160353140272',
                          payIdType: 'P',
                          status: 'Active',
                          payIdTypeDescriptionConcat: 'Phone Number',
                          phoneNumber: '376712345',
                          lookupKey: '00018000132160353140272',
                          purpose: 'Testing',
                          previewProperty: 'nickName',
                          statusCode: 'A'
                        }
                      }, {
                        submitFieldValueMap: {
                          nickName: 'Mohamed Fawzy',
                          availableBalance: '111745',
                          linkedAccount: '00018000132100353140275',
                          payIdType: 'P',
                          status: 'Active',
                          payIdTypeDescriptionConcat: 'Mobile Number',
                          mobileNumber: '911606588589',
                          lookupKey: '00018000132100353140275',
                          purpose: 'Testing',
                          previewProperty: 'nickName',
                          statusCode: 'A'
                        }
                      }, {
                        submitFieldValueMap: {
                          nickName: 'Muhammad Romani',
                          availableBalance: '2000',
                          linkedAccount: '00018000132160353140272',
                          payIdType: 'E',
                          status: 'Deactive',
                          payIdTypeDescriptionConcat: 'Email Address',
                          emailaddress: 'mohammadromani@azentio.com',
                          lookupKey: 'MR1300018000132160353140272',
                          purpose: 'Testing',
                          previewProperty: 'nickName',
                          statusCode: 'B'
                        }
                      }];
                    }

                    if (result && result.gridModel.length > 0) {
                      this.complexLookupOptions.listOfOptions = this.populatePayIdsList(result.gridModel);
                    } else {
                      this.complexLookupOptions.listOfOptions = [];
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "populatePayIdsList",
          value: function populatePayIdsList(dataList) {
            var payidList = [];

            var _iterator = _createForOfIteratorHelper(dataList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                if (item && item.submitFieldValueMap) {
                  item = item.submitFieldValueMap;
                  var payidCard = {
                    nickName: item.nickName,
                    payIdType: item.payIdType,
                    payIdTypeDescriptionConcat: item.payIdTypeDescriptionConcat,
                    payIdContent: item.payIdTypeDescriptionConcat + ' - ' + (item.phoneNumber || item.emailAddress || item.mobileNumber),
                    phoneNumber: item.phoneNumber,
                    emailaddress: item.emailAddress,
                    mobileNumber: item.mobileNumber,
                    purpose: item.purpose,
                    lookupKey: item.nickName,
                    previewProperty: 'nickName'
                  };
                  payidList.push(payidCard);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return payidList;
          }
        }, {
          key: "onSelectItem",
          value: function onSelectItem(event) {}
        }, {
          key: "populatePayIdMap",
          value: function populatePayIdMap() {
            var payIdContentMap = {};
            payIdContentMap = {
              key: 'payIdContent',
              value: '------',
              isEdit: false
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('payid_key', payIdContentMap);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.complexLookupComponentObj.resetLookUp();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsLookupOwnPayIdsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }];
      };

      PsLookupOwnPayIdsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        complexLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['complexLookupComponentObj']
        }]
      };
      PsLookupOwnPayIdsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-lookup-own-payIds',
        template: _raw_loader_ps_lookup_own_payIds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_lookup_own_payIds_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]])], PsLookupOwnPayIdsComponent);
      /***/
    },

    /***/
    "Ngnl":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ngnl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OzHP":
    /*!********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: PsInputEmailComponentModule */

    /***/
    function OzHP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputEmailComponentModule", function () {
        return PsInputEmailComponentModule;
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


      var _ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-input-email.component */
      "P7Z/");

      var PsInputEmailComponentModule = /*#__PURE__*/_createClass(function PsInputEmailComponentModule() {
        _classCallCheck(this, PsInputEmailComponentModule);
      });

      PsInputEmailComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        entryComponents: [_ps_input_email_component__WEBPACK_IMPORTED_MODULE_4__["PsInputEmailComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsInputEmailComponentModule);
      /***/
    },

    /***/
    "P7Z/":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: PsInputEmailComponent */

    /***/
    function P7Z_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputEmailComponent", function () {
        return PsInputEmailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-email.component.html */
      "gSeR");
      /* harmony import */


      var _ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-email.component.scss */
      "Ngnl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsInputEmailComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsInputEmailComponent(commonP, loggerP) {
          var _this3;

          _classCallCheck(this, PsInputEmailComponent);

          _this3 = _callSuper(this, PsInputEmailComponent, [commonP, loggerP]);
          _this3.mainOptions = {};
          return _this3;
        }

        _inherits(PsInputEmailComponent, _src_app_commonSRC_ps2);

        return _createClass(PsInputEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mainOptions = this.options;
            this.mainOptions.type = 'email';
            this.mainOptions.iconOptions = {
              iconName: 'input-mail'
            };
          }
        }, {
          key: "onChangeEmail",
          value: function onChangeEmail($event) {
            this.onPsChange.emit($event);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"]);

      PsInputEmailComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsInputEmailComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsInputEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-email',
        template: _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsInputEmailComponent);
      /***/
    },

    /***/
    "Phs7":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.scss ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Phs7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1sb29rdXAtb3duLXBheUlkcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "gSeR":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gSeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-input [id]=\"id\" [options]=\"mainOptions\"  (onPsChange)=\"onChangeEmail($event)\"></ps-keyin-input>\n";
      /***/
    },

    /***/
    "jx2c":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-lookup/ps-lookup-own-payIds/ps-lookup-own-payIds.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jx2c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-own-payIds\">\n\n  <ps-complex-lookup [id]=\"id\" (changeItem)=\"onSelectItem($event)\" [options]=\"complexLookupOptions\">\n  </ps-complex-lookup>\n\n</ps-container-complex>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payId-transfer-payId-transfer-module-es5.js.map