(function () {
  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

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

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
    /***/
    "1q3T":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q3T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n\n    <ps-dropdown-id-types #idTypeComp [options]=\"options?.dropdownIdTypesOptions\" (expiryNeeded)=\"toggleExpiry($event)\"\n        (onPsChange)=\"onItemChange($event)\"></ps-dropdown-id-types>\n    <ps-input-free-text [options]=\"options?.idNumberOptions\"></ps-input-free-text>\n    <ps-date-day-month-year-future [id]=\"id + '_expiryDate'\" [options]=\"options.dateExpiryOptions\" #expiryDate>\n    </ps-date-day-month-year-future>\n    <ps-dropdown-country [id]=\"id + '_country'\" [options]=\"options?.countriesOptions\" #issuanceCountry>\n    </ps-dropdown-country>\n    <ps-date-day-month-year-past [options]=\"options?.issueDateOptions\" [id]=\"id + '_issueDate'\" #issueDate>\n    </ps-date-day-month-year-past>\n\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "21oR":
    /*!***************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.html ***!
      \***************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-date-day-month-year [options]=\"dateDayMonthYearOptions\" [id]=\"id\" (onPsChange)=\"dataChanged($event)\"></ps-date-day-month-year>";
      /***/
    },

    /***/
    "BcCD":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearComponent */

    /***/
    function BcCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponent", function () {
        return PsDateDayMonthYearComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-date-day-month-year.component.html */
      "Tlgk");
      /* harmony import */


      var _ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-date-day-month-year.component.scss */
      "Lb7B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-date/ps-keyin-date.component */
      "JpVU");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");

      var PsDateDayMonthYearComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsDateDayMonthYearComponent(commonProv, loggerP, events) {
          var _this;

          _classCallCheck(this, PsDateDayMonthYearComponent);

          _this = _callSuper(this, PsDateDayMonthYearComponent, [commonProv, loggerP, events]);
          _this.commonProv = commonProv;
          _this.dateOptions = {};
          _this.omniPull = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].injectionHandler(_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]);
          return _this;
        }

        _inherits(PsDateDayMonthYearComponent, _commonSRC_psComponen);

        return _createClass(PsDateDayMonthYearComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.dateOptions, this.options, false);
            var param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].preLoginResponse).parameters;
            this.dateOptions.displayFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
            this.dateOptions.pickerFormat = this.dateOptions.displayFormat;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.options && this.options.min) {
              this.dateOptions.min = this.options.min;
            }

            if (this.options && this.options.max) {
              this.dateOptions.max = this.options.max;
            }
          }
        }, {
          key: "dateChanged",
          value: function dateChanged(value) {
            this.onPsChange.emit(value);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__["PsKeyinDateComponent"]);

      PsDateDayMonthYearComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]
        }];
      };

      PsDateDayMonthYearComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDateDayMonthYearComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year',
        template: _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]])], PsDateDayMonthYearComponent);
      /***/
    },

    /***/
    "EBce":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.scss ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EBce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLXBhc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "J8wZ":
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: PsDropDownIdTypesComponent */

    /***/
    function J8wZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropDownIdTypesComponent", function () {
        return PsDropDownIdTypesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_id_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-id-types.component.html */
      "XWmo");
      /* harmony import */


      var _ps_dropdown_id_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-id-types.component.scss */
      "fnHL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /**
       * @author Aftab.Ali
       * @since 22/10/2019
       *
       * <p> PsLovIdTypesComponent is responsile for fetching ID types based on lovTypeId(ID for ID types).</p>
       */


      var PsDropDownIdTypesComponent = /*#__PURE__*/function (_commonSRC_psComponen2) {
        function PsDropDownIdTypesComponent(commonService, logger, omniPull) {
          var _this2;

          _classCallCheck(this, PsDropDownIdTypesComponent);

          _this2 = _callSuper(this, PsDropDownIdTypesComponent, [commonService, logger]);
          _this2.omniPull = omniPull;
          _this2.listOfIdTypes = [];
          _this2.expiryNeeded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this2.defaultOptions = {
            labelKey: 'id_type_key',
            placeHolder: 'select_id_type_key'
          };
          return _this2;
        }

        _inherits(PsDropDownIdTypesComponent, _commonSRC_psComponen2);

        return _createClass(PsDropDownIdTypesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.options, this.defaultOptions, false);

            if (this.options.listOfOptions && this.options.listOfOptions.length > 0) {
              this.defaultOptions.listOfOptions = this.options.listOfOptions;
              this.listOfIdTypes = [];

              var _iterator = _createForOfIteratorHelper(this.defaultOptions.listOfOptions),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var idType = _step.value;
                  this.listOfIdTypes.push(idType.selectedObj);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              this.loadIdTypes();
            }
          }
          /**
           * Is responsible for populating listOfOption: IPsSelect after getting id types from service
           */

        }, {
          key: "loadIdTypes",
          value: function loadIdTypes(param) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this3 = this;

              var paramData, result, _iterator2, _step2, iterator, lovDropDown;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    paramData = {
                      idTypeList: '',
                      param: param || ((_a = this.options) === null || _a === void 0 ? void 0 : _a.param)
                    };
                    _context.n = 1;
                    return this.omniPull.returnIdTypesList(paramData)["catch"](function (error) {
                      _this3.logger.error('Error: While fetching id types in PsLovIdTypesComponent :', error);
                    });

                  case 1:
                    result = _context.v;
                    this.defaultOptions.listOfOptions = [];

                    if (result && result.gridModel && result.gridModel.length > 0) {
                      this.listOfIdTypes = result.gridModel;
                      this.defaultOptions.listOfOptions.splice(0, this.defaultOptions.listOfOptions.length);
                      _iterator2 = _createForOfIteratorHelper(result.gridModel);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          iterator = _step2.value;
                          lovDropDown = {
                            itemValue: iterator.CODE.toString(),
                            description: iterator.briefDesc,
                            selectedObj: iterator
                          };
                          this.defaultOptions.listOfOptions.push(lovDropDown);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      this.commonProv.copyObject(this.options, this.defaultOptions, false);
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onChangeIdTypes",
          value: function onChangeIdTypes(values) {
            var _iterator3 = _createForOfIteratorHelper(this.listOfIdTypes),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var each = _step3.value;

                if (each['CODE'] === values['itemValue']) {
                  if (each['ID_EXP_DTE_MAN'] === '1') {
                    this.expiryNeeded.emit(true);
                  } else {
                    this.expiryNeeded.emit(false);
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.onPsChange.emit(values);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["PsSelectDropdownComponent"]);

      PsDropDownIdTypesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropDownIdTypesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        expiryNeeded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsDropDownIdTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-id-types',
        template: _raw_loader_ps_dropdown_id_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_id_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropDownIdTypesComponent);
      /***/
    },

    /***/
    "Lb7B":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lb7B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "OB+4":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.component.scss ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OB4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWlkLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "OEOT":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearFutureComponent */

    /***/
    function OEOT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearFutureComponent", function () {
        return PsDateDayMonthYearFutureComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_date_day_month_year_future_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-date-day-month-year-future.component.html */
      "21oR");
      /* harmony import */


      var _ps_date_day_month_year_future_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-date-day-month-year-future.component.scss */
      "zf1h");
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


      var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-date-day-month-year.component */
      "BcCD");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");

      var PsDateDayMonthYearFutureComponent = /*#__PURE__*/function (_ps_date_day_month_ye) {
        function PsDateDayMonthYearFutureComponent(commonProv, loggerP, events) {
          var _this4;

          _classCallCheck(this, PsDateDayMonthYearFutureComponent);

          _this4 = _callSuper(this, PsDateDayMonthYearFutureComponent, [commonProv, loggerP, events]);
          _this4.commonProv = commonProv;
          _this4.dateDayMonthYearOptions = {
            min: new Date()
          };
          return _this4;
        }

        _inherits(PsDateDayMonthYearFutureComponent, _ps_date_day_month_ye);

        return _createClass(PsDateDayMonthYearFutureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.dateDayMonthYearOptions, this.options, false);
          }
        }, {
          key: "dataChanged",
          value: function dataChanged(value) {
            this.onPsChange.emit(value);
          }
        }, {
          key: "superWriteValue",
          value: function superWriteValue(val) {
            _superPropGet(PsDateDayMonthYearFutureComponent, "writeValue", this, 3)([val]);
          }
        }]);
      }(_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__["PsDateDayMonthYearComponent"]);

      PsDateDayMonthYearFutureComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]
        }];
      };

      PsDateDayMonthYearFutureComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDateDayMonthYearFutureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year-future',
        template: _raw_loader_ps_date_day_month_year_future_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_future_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]])], PsDateDayMonthYearFutureComponent);
      /***/
    },

    /***/
    "Tlgk":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tlgk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-keyin-date [options]=\"dateOptions\" [id]=\"id\" class=\"ps-day-month-year\" (onPsChange)=\"dateChanged($event)\" (onPsInit)=\"this.onInit($event)\"></ps-keyin-date>";
      /***/
    },

    /***/
    "XWmo":
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.html ***!
      \***********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XWmo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown  [id]=\"id\" [options]=\"options\" (onPsChange)=\"onChangeIdTypes($event)\"></ps-select-dropdown>\r\n";
      /***/
    },

    /***/
    "fnHL":
    /*!*********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component.scss ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fnHL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1pZC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "jmNg":
    /*!***********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.html ***!
      \***********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jmNg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-date-day-month-year [options]=\"dateDayMonthYearOptions\" [id]=\"id\" (onPsChange)=\"onChange($event)\">\n</ps-date-day-month-year>";
      /***/
    },

    /***/
    "ngfJ":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: PsDateDayMonthYearPastComponent */

    /***/
    function ngfJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponent", function () {
        return PsDateDayMonthYearPastComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-date-day-month-year-past.component.html */
      "jmNg");
      /* harmony import */


      var _ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-date-day-month-year-past.component.scss */
      "EBce");
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


      var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-date-day-month-year.component */
      "BcCD");
      /* harmony import */


      var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/Event/event.service */
      "r40+");

      var PsDateDayMonthYearPastComponent = /*#__PURE__*/function (_ps_date_day_month_ye2) {
        function PsDateDayMonthYearPastComponent(commonProv, loggerP, events) {
          var _this5;

          _classCallCheck(this, PsDateDayMonthYearPastComponent);

          _this5 = _callSuper(this, PsDateDayMonthYearPastComponent, [commonProv, loggerP, events]);
          _this5.commonProv = commonProv;
          _this5.dateDayMonthYearOptions = {
            max: new Date()
          };
          return _this5;
        }

        _inherits(PsDateDayMonthYearPastComponent, _ps_date_day_month_ye2);

        return _createClass(PsDateDayMonthYearPastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.dateDayMonthYearOptions, this.options, false);
          }
        }, {
          key: "superWriteValue",
          value: function superWriteValue(val) {
            _superPropGet(PsDateDayMonthYearPastComponent, "writeValue", this, 3)([val]);
          }
        }]);
      }(_ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__["PsDateDayMonthYearComponent"]);

      PsDateDayMonthYearPastComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]
        }];
      };

      PsDateDayMonthYearPastComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDateDayMonthYearPastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year-past',
        template: _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]])], PsDateDayMonthYearPastComponent);
      /***/
    },

    /***/
    "y70R":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-id-details/ps-complex-id-details.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: PsComplexIdDetailsComponent */

    /***/
    function y70R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexIdDetailsComponent", function () {
        return PsComplexIdDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_id_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-id-details.component.html */
      "1q3T");
      /* harmony import */


      var _ps_complex_id_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-id-details.component.scss */
      "OB+4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_future_ps_date_day_month_year_future_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component */
      "OEOT");
      /* harmony import */


      var _ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component */
      "ngfJ");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component */
      "7/W0");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_lov_ps_dropdown_id_types_ps_dropdown_id_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../ps-select-dropdown/ps-dropdown-lov/ps-dropdown-id-types/ps-dropdown-id-types.component */
      "J8wZ");
      /**
       * @author Aftab.Ali
       * @since 24/10/2019
       *
       * <p> PsComplexIdDetailsComponent is a complex component composed of ps-dropdown-id-types, ps-input-free-text and ps-date-future components</p>
       */


      var PsComplexIdDetailsComponent = /*#__PURE__*/function (_commonSRC_psComponen3) {
        function PsComplexIdDetailsComponent(commonService, logger) {
          _classCallCheck(this, PsComplexIdDetailsComponent);

          return _callSuper(this, PsComplexIdDetailsComponent, [commonService, logger]);
        }

        _inherits(PsComplexIdDetailsComponent, _commonSRC_psComponen3);

        return _createClass(PsComplexIdDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexIdDetailsComponent, "init", this, 3)([]);

            if (this.options) {
              if (this.options.dropdownIdTypesOptions) {
                this.options.dropdownIdTypesOptions.iconOptions = {
                  iconName: 'clipboard'
                };
              }

              if (this.options.idNumberOptions) {
                this.options.idNumberOptions.iconOptions = {
                  iconName: 'clipboard'
                };
              }
            }

            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.options.countriesOptions.fcName], 0);
          }
          /**
           * will validate the Id Types
           */

        }, {
          key: "validateIdType",
          value: function validateIdType(values) {
            /*if (this.pageVO.idType && this.customerInfoCO.idType) {
                if (this.pageVO.idType != this.customerInfoCO.idType) {
                  this.common.presentAlert("", this.common.translate("Invalid_Id_Type_key"))
                  this.resetField("idType");
                  this.checkAttempts();
                }
              } */
          }
          /**
           * will validate the Id Number
           */

        }, {
          key: "validateIdNumber",
          value: function validateIdNumber(values) {
            /* if (this.pageVO.idnumber && this.customerInfoCO.idNumber) {
              if (this.pageVO.idnumber != this.customerInfoCO.idNumber) {
                this.common.presentAlert("", this.common.translate("Invalid_Id_Number_key"))
                this.resetField("idnumber");
                this.checkAttempts();
              }
            } */
          }
        }, {
          key: "onChangeCvvNumber",
          value: function onChangeCvvNumber(value) {
            this.commonProv.logger.log('CardCvv:' + value.newValue);
          }
        }, {
          key: "onItemChange",
          value: function onItemChange(values) {
            if (values && values.selectedObj) {
              if (values.selectedObj.TYPES === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].PASSPORT_NO_ID) {
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.options.countriesOptions.fcName], 1);
              } else {
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.options.countriesOptions.fcName], 0);
              }

              this.onPsChange.emit(values);
            }
          }
        }, {
          key: "toggleExpiry",
          value: function toggleExpiry(event) {
            this.logger.log('expirytoggle', event);

            if (event === false && this.hasValue()) {
              this.expiryDate.superWriteValue('');
              this.issuanceCountry.superWriteValue('');
              this.issueDate.superWriteValue('');
            }
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            return (this.options.group.controls[this.options.dateExpiryOptions.fcName].value && this.options.group.controls[this.options.issueDateOptions.fcName].value) != '';
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsComplexIdDetailsComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }];
      };

      PsComplexIdDetailsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        expiryDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['expiryDate', {
            "static": false
          }]
        }],
        idTypeComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['idTypeComp']
        }],
        issuanceCountry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['issuanceCountry', {
            "static": false
          }]
        }],
        issueDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['issueDate', {
            "static": false
          }]
        }]
      };
      PsComplexIdDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-id-details',
        template: _raw_loader_ps_complex_id_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_id_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])], PsComplexIdDetailsComponent);
      /***/
    },

    /***/
    "zf1h":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-future/ps-date-day-month-year-future.component.scss ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zf1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLWZ1dHVyZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=6-es5.js.map