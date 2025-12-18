(function () {
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

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
    /***/
    "7XXa":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: PsComplexCifIdTypesComponent */

    /***/
    function XXa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCifIdTypesComponent", function () {
        return PsComplexCifIdTypesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_cif_id_types_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-cif-id-types.component.html */
      "NcWP");
      /* harmony import */


      var _ps_complex_cif_id_types_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-cif-id-types.component.scss */
      "zhiz");
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


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_complex_id_details_ps_complex_id_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../ps-complex-id-details/ps-complex-id-details.component */
      "y70R");

      var PsComplexCifIdTypesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexCifIdTypesComponent(commonService, logger, omniPull) {
          var _this;

          _classCallCheck(this, PsComplexCifIdTypesComponent);

          _this = _callSuper(this, PsComplexCifIdTypesComponent, [commonService, logger]);
          _this.omniPull = omniPull;
          _this.onIdTypesGetLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.defaultOptions = {
            cifTypeOptions: {
              labelKey: 'cif_key',
              placeHolder: 'select_cif_type_key',
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            complexIdDetailsOptions: {
              dropdownIdTypesOptions: {
                fcName: 'idType1',
                labelKey: 'national_id_type_key',
                placeHolder: 'enter_national_id_type_key'
              },
              idNumberOptions: {
                labelKey: 'id_number_key',
                placeHolder: 'enter_id_number_key',
                fcName: 'idNumber1'
              },
              dateExpiryOptions: {
                labelKey: 'expiry_date_key',
                placeHolder: 'enter_expiry_date_key',
                fcName: 'expiryDate1'
              },
              countriesOptions: {
                labelKey: 'country_of_issuance_key',
                placeHolder: 'select_country_of_issuance_key',
                fcName: 'issuanceCountry1',
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              issueDateOptions: {
                labelKey: 'issue_date_key',
                placeHolder: 'issue_date_key',
                fcName: 'issueDate1'
              }
            },
            complexIdDetailsOptions1: {
              dropdownIdTypesOptions: {
                fcName: 'idType1',
                labelKey: 'national_id_type_key',
                placeHolder: 'enter_national_id_type_key'
              },
              idNumberOptions: {
                labelKey: 'id_number_key',
                placeHolder: 'enter_id_number_key',
                fcName: 'idNumber1'
              },
              dateExpiryOptions: {
                labelKey: 'expiry_date_key',
                placeHolder: 'enter_expiry_date_key',
                fcName: 'expiryDate1'
              },
              countriesOptions: {
                labelKey: 'country_of_issuance_key',
                placeHolder: 'select_country_of_issuance_key',
                fcName: 'issuanceCountry1',
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              issueDateOptions: {
                labelKey: 'issue_date_key',
                placeHolder: 'issue_date_key',
                fcName: 'issueDate1'
              }
            },
            showCifType: true
          };
          _this.showBG = false;
          _this.mandatoryIdTypes = [];
          _this.optionalIdTypes = [];
          _this.showIdDropDown = false;
          _this.mandatoryIdThere = false;
          _this.gridModelItemLength = 0;
          return _this;
        }

        _inherits(PsComplexCifIdTypesComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexCifIdTypesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultOptions, this.options);
            this.defaultOptions.requestObject = this.options.requestObject;

            _superPropGet(PsComplexCifIdTypesComponent, "init", this, 3)([]);

            if (this.defaultOptions.showCifType == false) {
              this.returnIDTypes(null);
            } // PsCommonSettings.oper_ID = 1481;

          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            if (this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName] !== undefined) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 0);
              this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName].setValue(null);
            }

            if (this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.fcName] !== undefined) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.fcName], 0);
              this.defaultOptions.group.controls[this.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.fcName].setValue(null);
            }

            if (event && event.selectedObj) {
              this.returnIDTypes(event.selectedObj);
              this.onPsChange.emit(event);
            }
          }
        }, {
          key: "returnIDTypes",
          value: function returnIDTypes(selectedObj) {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var paramData;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    paramData = {
                      cifType: {
                        selectedObj: selectedObj
                      },
                      param: (_a = this.options) === null || _a === void 0 ? void 0 : _a.param //Mohanad 08042024-AZDB-2532

                    };
                    this.omniPull.returnIdTypesList(paramData).then(function (result) {
                      var _a;

                      _this2.mandatoryIdTypes = [];
                      _this2.optionalIdTypes = [];
                      var optionalIdType;

                      if (result && result.gridModel && result.gridModel.length > 0) {
                        _this2.removeIdDetailControls();

                        _this2.showIdDropDown = false;
                        var num = 1;
                        /*
                          #DN GilbertAndary #BUG 1096926
                        */

                        var mandatoryList = result.gridModel.filter(function (val) {
                          return val.mandatory === true;
                        });
                        _this2.gridModelItemLength = mandatoryList.length;
                        _this2.mandatoryIdThere = mandatoryList.length > 0 ? true : false;

                        var _iterator = _createForOfIteratorHelper(result.gridModel),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var iterator = _step.value;
                            var obj = {
                              group: _this2.options.group,
                              dropdownIdTypesOptions: {
                                labelKey: 'national_id_type_key',
                                placeHolder: 'enter_national_id_type_key',
                                group: _this2.options.group
                              },
                              idNumberOptions: {
                                labelKey: 'id_number_key',
                                placeHolder: 'enter_id_number_key',
                                group: _this2.options.group
                              },
                              dateExpiryOptions: {
                                labelKey: 'expiry_date_key',
                                placeHolder: 'enter_expiry_date_key',
                                group: _this2.options.group
                              },
                              countriesOptions: {
                                labelKey: 'country_of_issuance_key',
                                placeHolder: 'select_country_of_issuance_key',
                                iconOptions: {
                                  iconName: 'clipboard'
                                },
                                group: _this2.options.group
                              },
                              issueDateOptions: {
                                labelKey: 'issue_date_key',
                                placeHolder: 'issue_date_key',
                                group: _this2.options.group
                              }
                            };

                            if (iterator.mandatory === true) {
                              obj.dropdownIdTypesOptions.fcName = 'idType' + num;
                              obj.idNumberOptions.fcName = 'idNumber' + num;
                              obj.dateExpiryOptions.fcName = 'expiryDate' + num;
                              obj.countriesOptions.fcName = 'issuanceCountry' + num;
                              obj.issueDateOptions.fcName = 'issueDate' + num;
                              _this2.showBG = true;
                              var list = [{
                                itemValue: iterator.CODE.toString(),
                                description: iterator.briefDesc,
                                selectedObj: iterator
                              }];
                              obj.dropdownIdTypesOptions.listOfOptions = list;

                              _this2.mandatoryIdTypes.push(obj);

                              _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [obj.dropdownIdTypesOptions.fcName], 1);

                              _this2.options.group.addControl(obj.dropdownIdTypesOptions.fcName, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]());

                              _this2.commonProv.setValInsideNestedObj(obj.dropdownIdTypesOptions.fcName, iterator.CODE.toString(), _this2.options.requestObject);

                              if (iterator.fromLen) {
                                _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [obj.idNumberOptions.fcName], iterator.fromLen);
                              }

                              if (iterator.toLen) {
                                _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXLENGTH, [obj.idNumberOptions.fcName], iterator.toLen);
                              }

                              if (iterator.DATA_TYPE) {
                                _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_PATTERN, [obj.idNumberOptions.fcName], _this2.getDataType(iterator.DATA_TYPE));
                              }

                              num = num + 1;
                            } else if (iterator.mandatory === false && !_this2.mandatoryIdThere) {
                              _this2.showBG = true;
                              var _list = {
                                itemValue: iterator.CODE.toString(),
                                description: iterator.briefDesc,
                                selectedObj: iterator
                              };
                              optionalIdType = '';
                              optionalIdType = iterator.CODE.toString();

                              _this2.optionalIdTypes.push(_list);
                            }
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }

                        if (_this2.optionalIdTypes && _this2.optionalIdTypes.length > 0
                        /* #DN GilbertAndary #BUG 1096926*/
                        && !_this2.mandatoryIdThere) {
                          _this2.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions = _this2.optionalIdTypes;
                          (_a = _this2.options.group.controls[_this2.defaultOptions.complexIdDetailsOptions1.idNumberOptions.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
                        }
                      } else {
                        _this2.showIdDropDown = true;
                        _this2.showBG = true;
                        _this2.mandatoryIdTypes = [];
                        _this2.optionalIdTypes = [];
                        _this2.defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions = [];

                        _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [_this2.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName], 0);

                        _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_PATTERN, [_this2.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], _this2.getDataType(0)); //   this.options.group.controls[this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName].reset();


                        if (_this2.defaultOptions.group.controls[_this2.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName]) {
                          _this2.commonProv.setValInsideNestedObj(_this2.defaultOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName, null, _this2.options.requestObject);
                        }
                      }
                    }, function (err) {
                      _this2.logger.error('Error: While fetching data : ', err);
                    })["finally"](function () {
                      _this2.onIdTypesGetLoaded.emit(true);
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDataType",
          value: function getDataType(val) {
            var patrn;

            switch (val) {
              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].DEFAULT_DATA_TYPE:
                return patrn = {
                  expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].numericRegex,
                  errorMsg: 'field_should_contain_numeric_characters_key'
                };

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ALPHA_DATA_TYPE:
                return patrn = {
                  expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].alphaRegex,
                  errorMsg: 'field_should_contain_alphabetic_characters_key'
                };

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].NUMERIC_DATA_TYPE:
                return patrn = {
                  expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].numericRegex,
                  errorMsg: 'field_should_contain_numeric_characters_key'
                };

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].ALPHA_NUMERIC_DATA_TYPE:
                return patrn = {
                  expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].alphaNumericRegex,
                  errorMsg: 'field_should_contain_alpha_numeric_characters_key'
                };

              default:
                return patrn = {
                  expression: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].numericRegex,
                  errorMsg: 'field_should_contain_numeric_characters_key'
                };
            }
          }
        }, {
          key: "removeIdDetailControls",
          value: function removeIdDetailControls() {
            if (this.gridModelItemLength > 0) {
              for (var i = 1; i < this.gridModelItemLength + 1; i++) {
                this.defaultOptions.group.removeControl('idType' + i);
                this.defaultOptions.group.removeControl('idNumber' + i);
                this.defaultOptions.group.removeControl('expiryDate' + i);
                this.defaultOptions.group.removeControl('issuanceCountry' + i);
                this.defaultOptions.group.removeControl('issueDate' + i);
              }
            }
          }
        }, {
          key: "onItemChange",
          value: function onItemChange(values) {
            //this.options.group.controls[this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName].reset();
            if (values && values.selectedObj) {
              var patrn = this.getDataType(values.selectedObj.DATA_TYPE);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], patrn);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], values.selectedObj.FROM_LEN);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MAXLENGTH, [this.defaultOptions.complexIdDetailsOptions.idNumberOptions.fcName], values.selectedObj.TO_LEN);
            }
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_7__["PsBaseFieldComponent"]);

      PsComplexCifIdTypesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]
        }];
      };

      PsComplexCifIdTypesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onIdTypesGetLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        idDetailsComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['idDetailsComp']
        }]
      };
      PsComplexCifIdTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-cif-id-types',
        template: _raw_loader_ps_complex_cif_id_types_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_cif_id_types_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_6__["OmniPullService"]])], PsComplexCifIdTypesComponent);
      /***/
    },

    /***/
    "NcWP":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NcWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex [options]=\"defaultOptions\">\n\n  <ps-dropdown-cif-types *ngIf=\"defaultOptions.showCifType\" [options]=\"defaultOptions.cifTypeOptions\"\n    (onPsChange)=\"onChange($event)\">\n  </ps-dropdown-cif-types>\n\n  <div class=\"cifIdTypes\" *ngIf=\"showBG\">\n    <ng-container *ngIf=\"mandatoryIdTypes && mandatoryIdTypes.length > 0 && !showIdDropDown\">\n\n      <ps-complex-id-details #idDetailsComp *ngFor=\"let item of mandatoryIdTypes\" id=\"complex_id_details\"\n        [options]=\"item\">\n      </ps-complex-id-details>\n\n    </ng-container>\n\n\n    <ps-complex-id-details #idDetailsComp\n      *ngIf=\"mandatoryIdTypes.length == 0 && defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions  && defaultOptions.complexIdDetailsOptions1.dropdownIdTypesOptions.listOfOptions.length>0 && !showIdDropDown && !mandatoryIdThere\"\n      id=\"complex_id_details1\" [options]=\"defaultOptions.complexIdDetailsOptions1\" (onPsChange)=\"onItemChange($event)\">\n    </ps-complex-id-details>\n\n\n    <ps-complex-id-details #idDetailsComp\n      *ngIf=\"mandatoryIdTypes.length == 0 && optionalIdTypes.length ==  0 && showIdDropDown\" id=\"complex_id_details2\"\n      [options]=\"defaultOptions.complexIdDetailsOptions\" (onPsChange)=\"onItemChange($event)\">\n    </ps-complex-id-details>\n\n  </div>\n</ps-container-complex>";
      /***/
    },

    /***/
    "zhiz":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zhiz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWNpZi1pZC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=12-es5.js.map