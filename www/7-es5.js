(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
    /***/
    "+85s":
    /*!****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.scss ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXNlbGVjdC1icmFuY2guY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "+odD":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.module.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: PsDropdownBranchesComponentModule */

    /***/
    function odD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownBranchesComponentModule", function () {
        return PsDropdownBranchesComponentModule;
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


      var _ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-dropdown-branches.component */
      "wTrn");

      var PsDropdownBranchesComponentModule = /*#__PURE__*/_createClass(function PsDropdownBranchesComponentModule() {
        _classCallCheck(this, PsDropdownBranchesComponentModule);
      });

      PsDropdownBranchesComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownBranchesComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownBranchesComponent"]],
        entryComponents: [_ps_dropdown_branches_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownBranchesComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsDropdownBranchesComponentModule);
      /***/
    },

    /***/
    "9vDO":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-select-dropdown [id]=\"id\"  [options]=\"defaultSelectOptions\" (onPsChange)=\"onBranchChange($event)\"></ps-select-dropdown>";
      /***/
    },

    /***/
    "ULj9":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: PsComplexSelectBranchComponent */

    /***/
    function ULj9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexSelectBranchComponent", function () {
        return PsComplexSelectBranchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_select_branch_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-select-branch.component.html */
      "mblX");
      /* harmony import */


      var _ps_complex_select_branch_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-select-branch.component.scss */
      "+85s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../psServices/models/ps-common-bussiness-constant */
      "V0Fi");

      var PsComplexSelectBranchComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsComplexSelectBranchComponent(commonService, logger, omniPull) {
          var _this;

          _classCallCheck(this, PsComplexSelectBranchComponent);

          _this = _callSuper(this, PsComplexSelectBranchComponent, [commonService, logger]);
          _this.omniPull = omniPull;
          _this.defaultOptions = {};
          return _this;
        }

        _inherits(PsComplexSelectBranchComponent, _commonSRC_psComponen);

        return _createClass(PsComplexSelectBranchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var optionsFcNameValidations, result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.defaultOptions = {
                      countryRegionCityOptions: {
                        countriesOptions: {
                          labelKey: 'country__key',
                          placeHolder: 'select_country_key',
                          fcName: this.options.countryRegionCityOptions ? this.options.countryRegionCityOptions.countriesOptions.fcName : 'branch_country',
                          group: this.options.group,
                          iconOptions: {
                            iconName: 'clipboard'
                          }
                        },
                        regionOptions: {
                          labelKey: 'region_key',
                          placeHolder: 'region_key',
                          fcName: this.options.countryRegionCityOptions ? this.options.countryRegionCityOptions.regionOptions.fcName : 'branch_region',
                          group: this.options.group
                        },
                        cityOptions: {
                          labelKey: 'city_key',
                          placeHolder: 'select_city_key',
                          fcName: this.options.countryRegionCityOptions ? this.options.countryRegionCityOptions.cityOptions.fcName : 'branch_city',
                          group: this.options.group
                        }
                      }
                    };
                    this.defaultOptions.branchesOptions = {
                      group: this.options.group,
                      fcName: this.options.branchesOptions ? this.options.branchesOptions.fcName : 'default_branch',
                      placeHolder: ((_a = this.options.branchesOptions) === null || _a === void 0 ? void 0 : _a.placeHolder) ? this.options.branchesOptions.placeHolder : 'branch_key',
                      labelKey: ((_b = this.options.branchesOptions) === null || _b === void 0 ? void 0 : _b.labelKey) ? this.options.branchesOptions.labelKey : 'label_branch_key'
                    };
                    this.commonProv.copyObject(this.defaultOptions, this.options);
                    optionsFcNameValidations = this.commonProv.getElementValidations(this.defaultOptions.branchesOptions.fcName);

                    if (!this.options.parameterToCheck) {
                      _context.n = 2;
                      break;
                    }

                    _context.n = 1;
                    return this.omniPull.checkBranch(this.options.parameterToCheck);

                  case 1:
                    result = _context.v;
                    optionsFcNameValidations = this.commonProv.getElementValidations(this.defaultOptions.branchesOptions.fcName);

                    if (result.enableCifBranch || this.defaultOptions.branchesOptions.fcName && !optionsFcNameValidations.IS_VISIBLE) {
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultOptions.branchesOptions.fcName], 0);
                    } else {
                      this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultOptions.branchesOptions.fcName], optionsFcNameValidations.IS_MANDATORY);
                    }

                    _context.n = 3;
                    break;

                  case 2:
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultOptions.branchesOptions.fcName], optionsFcNameValidations.IS_MANDATORY);

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            this.onPsChange.emit($event);
          }
          /**
           * event for city change
           * @param event
           */

        }, {
          key: "onChildDropdownSelected",
          value: function onChildDropdownSelected(event) {
            if (event[_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].SELECTED_DROPDOWN]) {
              var dropdownType = event[_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].SELECTED_DROPDOWN];

              if (dropdownType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].COUNTRY_DROPDOWN) {
                this.defaultOptions.branchesOptions.selectedCountryCode = event.selectedObj !== undefined ? event.selectedObj.countriesID : event.newValue != undefined ? event.newValue : null;
                this.defaultOptions.branchesOptions.selectedRegionCode = null;
                this.defaultOptions.branchesOptions.selectedCityCode = null;
              } else if (dropdownType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].REGION_DROPDOWN) {
                this.defaultOptions.branchesOptions.selectedRegionCode = event.selectedObj !== undefined ? event.selectedObj.countriesRegionID : event.newValue != undefined ? event.newValue : null;
                this.defaultOptions.branchesOptions.selectedCityCode = null;
              } else if (dropdownType === _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CITY_DROPDOWN) {
                this.defaultOptions.branchesOptions.selectedCityCode = event.selectedObj !== undefined ? event.selectedObj.citiesId : event.newValue != undefined ? event.newValue : null;
              }
            }

            this.defaultOptions.branchesOptions = Object.assign({}, this.defaultOptions.branchesOptions);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"]);

      PsComplexSelectBranchComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsComplexSelectBranchComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexSelectBranchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-select-branch',
        template: _raw_loader_ps_complex_select_branch_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_select_branch_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsComplexSelectBranchComponent);
      /***/
    },

    /***/
    "jtkp":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.scss ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jtkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1icmFuY2hlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "mblX":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.html ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mblX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-swift-benef-creation\">\n\n  <ps-complex-country-regions-cities [id]=\"id\" [options]=\"defaultOptions.countryRegionCityOptions\"\n    (onPsChange)=\"onChildDropdownSelected($event)\"></ps-complex-country-regions-cities>\n\n\n  <ps-dropdown-branches [id]=\"id\" [options]=\"defaultOptions.branchesOptions\" (onPsChange)=\"onSelectBranch($event)\">\n  </ps-dropdown-branches>\n\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "ohDU":
    /*!*********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-select-branch/ps-complex-select-branch.component.module.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: PsComplexSelectBranchComponentModule */

    /***/
    function ohDU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexSelectBranchComponentModule", function () {
        return PsComplexSelectBranchComponentModule;
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


      var _ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-select-branch.component */
      "ULj9");
      /* harmony import */


      var _commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_complex_country_regions_cities_ps_complex_country_regions_cities_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ps-complex-country-regions-cities/ps-complex-country-regions-cities.component.module */
      "X7AV");
      /* harmony import */


      var _ps_select_dropdown_ps_dropdown_branches_ps_dropdown_branches_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.module */
      "+odD");

      var PsComplexSelectBranchComponentModule = /*#__PURE__*/_createClass(function PsComplexSelectBranchComponentModule() {
        _classCallCheck(this, PsComplexSelectBranchComponentModule);
      });

      PsComplexSelectBranchComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexSelectBranchComponent"]],
        imports: [_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], _ps_select_dropdown_ps_dropdown_branches_ps_dropdown_branches_component_module__WEBPACK_IMPORTED_MODULE_6__["PsDropdownBranchesComponentModule"], _ps_complex_country_regions_cities_ps_complex_country_regions_cities_component_module__WEBPACK_IMPORTED_MODULE_5__["PsComplexCountryRegionsCitiesComponentModule"]],
        exports: [_ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexSelectBranchComponent"]],
        entryComponents: [_ps_complex_select_branch_component__WEBPACK_IMPORTED_MODULE_2__["PsComplexSelectBranchComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexSelectBranchComponentModule);
      /***/
    },

    /***/
    "wTrn":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-branches/ps-dropdown-branches.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: PsDropdownBranchesComponent */

    /***/
    function wTrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsDropdownBranchesComponent", function () {
        return PsDropdownBranchesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_dropdown_branches_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-dropdown-branches.component.html */
      "9vDO");
      /* harmony import */


      var _ps_dropdown_branches_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-dropdown-branches.component.scss */
      "jtkp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */
      "iOQE");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsDropdownBranchesComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsDropdownBranchesComponent(commonProv, loggerP, omniPull) {
          var _this2;

          _classCallCheck(this, PsDropdownBranchesComponent);

          _this2 = _callSuper(this, PsDropdownBranchesComponent, [commonProv, loggerP]);
          _this2.omniPull = omniPull;
          _this2.defaultSelectOptions = {
            labelKey: 'label_branch_key',
            placeHolder: 'branch_key'
          };
          _this2.branches = [];
          return _this2;
        }

        _inherits(PsDropdownBranchesComponent, _src_app_commonSRC_ps);

        return _createClass(PsDropdownBranchesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.defaultSelectOptions, this.options);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.getBranches();
          }
        }, {
          key: "getBranches",
          value: function getBranches() {
            var _this3 = this;

            var paramData = {
              // eslint-disable-next-line radix
              countryId: this.options.selectedCountryCode ? parseInt(this.options.selectedCountryCode) : null,
              regionId: this.options.selectedRegionCode ? parseInt(this.options.selectedRegionCode) : null,
              cityId: this.options.selectedCityCode ? parseInt(this.options.selectedCityCode) : null,
              mapTypesInclude: "'B'"
            };
            this.branches = [];
            this.omniPull.returnMapAtmBranches(paramData).then(function (result) {
              _this3.defaultSelectOptions.listOfOptions = [];

              if (result && result.gridModel != null && result.gridModel.length > 0) {
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (var i = 0; i < result.gridModel.length; i++) {
                  var acctype = {
                    itemValue: result.gridModel[i].vsBranchCode,
                    description: result.gridModel[i].briefDesc,
                    selectedObj: result.gridModel[i]
                  };

                  _this3.branches.push(acctype);
                }

                _this3.defaultSelectOptions.listOfOptions = _this3.branches;
                var defaultBranchSelected = _this3.defaultSelectOptions.group.controls[_this3.defaultSelectOptions.fcName].value;

                if (defaultBranchSelected && !_this3.defaultSelectOptions.listOfOptions.some(function (e) {
                  return e.itemValue === defaultBranchSelected;
                })) {
                  _this3.defaultSelectOptions.group.controls[_this3.defaultSelectOptions.fcName].setValue(null);
                }
              } else {
                _this3.defaultSelectOptions.listOfOptions = [];

                _this3.defaultSelectOptions.group.controls[_this3.defaultSelectOptions.fcName].setValue(null);

                _this3.logger.warn(result, 'empty response');
              }
            })["catch"](function (error) {});
          }
        }, {
          key: "onBranchChange",
          value: function onBranchChange(values) {
            this.loggerP.log('onBranchChange' + values);
            this.onPsChange.emit(values);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"]);

      PsDropdownBranchesComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }];
      };

      PsDropdownBranchesComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsDropdownBranchesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-branches',
        template: _raw_loader_ps_dropdown_branches_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_branches_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])], PsDropdownBranchesComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=7-es5.js.map