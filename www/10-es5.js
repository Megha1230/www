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

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
    /***/
    "Sx1r":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsComplexWidgetDropdownsComponent */

    /***/
    function Sx1r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexWidgetDropdownsComponent", function () {
        return PsComplexWidgetDropdownsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_widget_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-widget-dropdowns.component.html */
      "qxlB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsComplexWidgetDropdownsComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsComplexWidgetDropdownsComponent(commonProv, loggerP, modalController) {
          var _this;

          _classCallCheck(this, PsComplexWidgetDropdownsComponent);

          _this = _callSuper(this, PsComplexWidgetDropdownsComponent, [commonProv, loggerP]);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.modalController = modalController;
          _this.onSecondValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this.numberOfDropdowns = 0;
          _this.currentDropdownPosition = 0;
          _this.selectedItemsList = [];
          _this.selectReportsError = false;
          _this.selectionErrorMessage = "no_selected_reports_key";
          _this.headerLabelOptions = {};
          _this.backIconOptions = {
            iconName: 'arrow-back'
          };
          _this.backClicked = false;
          _this.showIcon = false;
          _this.isPreviouslySelected = false; // AZDB-7715 - AMANAOI250051 - 201633 - The system is displaying wrong billers - Dev: Muzammil Arif

          return _this;
        }

        _inherits(PsComplexWidgetDropdownsComponent, _commonSRC_psComponen);

        return _createClass(PsComplexWidgetDropdownsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.options.dropdowns && this.options.dropdowns.length > 0) {
              this.numberOfDropdowns = this.options.dropdowns.length;
              this.options.dropdowns[0].renderDropdown = true;
              this.currentDropdownPosition = 1;
              this.headerLabelOptions.labelKey = this.options.dropdowns[0].labelKey;
            }
          }
        }, {
          key: "onItemSelected",
          value: function onItemSelected(data) {
            var _this2 = this;

            /* The cases that will go through the IF condition :
             * Opening a draft screen
             * Navigating to next widget level where its list of options are filled from the business screen (Not Async call).
            */
            if (this.options.requestObject && this.options.requestObject[this.options.dropdowns[this.currentDropdownPosition - 1].fcName] && data.itemValue === this.options.requestObject[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].itemValue && this.options.dropdowns[this.currentDropdownPosition] && this.options.dropdowns[this.currentDropdownPosition].listOfOptions && this.options.dropdowns[this.currentDropdownPosition].listOfOptions.length > 0) {
              if (this.options.dropdowns.length > this.currentDropdownPosition) {
                this.options.dropdowns[this.currentDropdownPosition - 1].psClass = 'hide-dropdown';
                this.options.dropdowns[this.currentDropdownPosition].psClass = 'show-dropdown';
                this.currentDropdownPosition++;
                this.showIcon = true;
              }
            } else {
              if (this.options.dropdowns.length > 1 || this.options.dropdowns.length == 1 && this.options.dropdowns[0].asyncURL) {
                // AZDB-7715 - AMANAOI250051 - 201633 - The system is displaying wrong billers - Dev: Muzammil Arif
                this.isPreviouslySelected = this.options.requestObject[this.options.dropdowns[this.currentDropdownPosition - 1].fcName] && this.options.requestObject[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].HEADER_LABEL] ? true : false;
                this.commonProv.setValInsideNestedObj(this.options.dropdowns[this.currentDropdownPosition - 1].fcName, data, this.options.requestObject);

                if (this.options.dropdowns.length > this.currentDropdownPosition) {
                  if (this.backClicked) {
                    this.commonProv.setValInsideNestedObj(this.options.dropdowns[this.currentDropdownPosition].fcName, null, this.options.requestObject);
                    this.options.dropdowns[this.currentDropdownPosition].renderDropdown = false;
                    this.options.dropdowns[this.currentDropdownPosition] = {
                      group: this.options.dropdowns[this.currentDropdownPosition].group,
                      fcName: this.options.dropdowns[this.currentDropdownPosition].fcName,
                      labelKey: this.options.dropdowns[this.currentDropdownPosition].labelKey,
                      asyncURL: this.options.dropdowns[this.currentDropdownPosition].asyncURL,
                      mapResponseProperties: this.options.dropdowns[this.currentDropdownPosition].mapResponseProperties,
                      enablePagination: this.options.dropdowns[this.currentDropdownPosition].enablePagination,
                      listOfOptions: [],
                      componentInstance: this.options.dropdowns[this.currentDropdownPosition].componentInstance
                    };
                    this.headerLabelOptions.labelKey = this.options.dropdowns[this.currentDropdownPosition - 1].labelKey;
                  } // If we define request parameters in the options of the next widget list, then we append the clicked widget data to them


                  if (this.options.dropdowns[this.currentDropdownPosition].serviceRequestObj) {
                    this.options.dropdowns[this.currentDropdownPosition].serviceRequestObj.commonParametersList = data.selectedObj;
                  } else {
                    this.options.dropdowns[this.currentDropdownPosition].serviceRequestObj = {
                      'commonParametersList': data.selectedObj
                    };
                  }

                  this.options.dropdowns[this.currentDropdownPosition].renderDropdown = true;
                  this.options.dropdowns[this.currentDropdownPosition - 1].psClass = 'hide-dropdown';

                  if (this.headerLabelOptions.labelKey.indexOf('-') !== -1) {
                    this.headerLabelOptions.labelKey = this.headerLabelOptions.labelKey.slice(0, this.headerLabelOptions.labelKey.lastIndexOf('-') + 1);
                    this.headerLabelOptions.labelKey.replace(this.commonProv.translate(this.options.dropdowns[this.currentDropdownPosition - 1].fcName), data.description);

                    if (this.headerLabelOptions.labelKey.endsWith('-')) {
                      this.headerLabelOptions.labelKey = this.headerLabelOptions.labelKey.slice(0, -1); //Jira #7587 - Double checking if there is a dash after replacement
                    }

                    this.headerLabelOptions.labelKey += ' - ' + this.options.dropdowns[this.currentDropdownPosition].fcName;
                  } else {
                    this.headerLabelOptions.labelKey = data.description;
                    this.headerLabelOptions.labelKey += ' - ' + this.options.dropdowns[this.currentDropdownPosition].fcName;
                  }

                  this.showIcon = true;
                  this.currentDropdownPosition++;
                  this.options.group.controls[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].reset();
                  this.options.dropdowns[this.currentDropdownPosition - 1].componentInstance.callService();
                } else if (this.options.dropdowns.length === this.currentDropdownPosition) {
                  // AZDB-7715 - AMANAOI250051 - 201633 - The system is displaying wrong billers - Dev: Muzammil Arif
                  this.headerLabelOptions.labelKey = this.isPreviouslySelected ? this.headerLabelOptions.labelKey.slice(0, this.headerLabelOptions.labelKey.indexOf('-') + 1) : this.headerLabelOptions.labelKey.slice(0, this.headerLabelOptions.labelKey.lastIndexOf('-') + 1);
                  this.headerLabelOptions.labelKey += data.description;
                  this.options.requestObject[_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].HEADER_LABEL] = this.headerLabelOptions.labelKey;
                  this.common.presentLoading();
                  setTimeout(function () {
                    _this2.onSecondValueChange.emit(_this2.options.requestObject);

                    _this2.common.dismissLoading();
                  }, 500);
                  this.showDescriptionModal(data);
                }
              } else if (this.options.dropdowns.length == 1 && !this.options.dropdowns[0].asyncURL) {
                var exist = false;
                this.selectReportsError = false;
                var widgetFcname = this.options.dropdowns[0].fcName;
                this.selectedItemsList.forEach(function (value, index) {
                  if (value.itemValue == data.itemValue) {
                    exist = true;
                    value.selected = false;

                    _this2.selectedItemsList.splice(index, 1);
                  }
                });

                if (!exist) {
                  this.selectedItemsList.push(data);
                }

                if (this.selectedItemsList.length == 0) {
                  this.selectReportsError = true;
                  this.options.group.controls[widgetFcname].setValue([]);
                  this.options.group.get(widgetFcname).setValue([]);
                }

                this.selectedItemsList.forEach(function (element) {
                  element.selected = true;
                });
                this.options.group.controls[widgetFcname].setValue(this.selectedItemsList);
                this.options.group.get(widgetFcname).setValue(this.selectedItemsList);
                this.commonProv.setValInsideNestedObj(this.options.dropdowns[0].fcName, this.selectedItemsList, this.options.requestObject);
              }
            }
          }
        }, {
          key: "showDescriptionModal",
          value: function showDescriptionModal(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modalId, detailsModal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!this.options.detailsObject) {
                      _context.n = 2;
                      break;
                    }

                    modalId = this.options.detailsObject.detailsModalId;
                    _context.n = 1;
                    return this.modalController.create({
                      component: this.options.detailsObject.detailsModal,
                      componentProps: {
                        data: Object.assign({}, data.selectedObj),
                        actions: this.options.detailsObject.detailsActionsList
                      },
                      cssClass: this.options.detailsObject.detailsModalClass,
                      animated: false,
                      id: modalId
                    });

                  case 1:
                    detailsModal = _context.v;
                    _context.n = 2;
                    return detailsModal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onBackIconClicked",
          value: function onBackIconClicked() {
            this.backClicked = true;
            var inValid = this.options.group.controls[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].invalid;

            if (inValid) {
              this.options.group.controls[this.options.dropdowns[this.currentDropdownPosition - 1].fcName].reset();
            }

            this.options.dropdowns[this.currentDropdownPosition - 1].psClass = 'hide-dropdown';
            this.options.dropdowns[this.currentDropdownPosition - 2].psClass = 'show-dropdown';
            this.currentDropdownPosition--;

            if (this.currentDropdownPosition === 1) {
              this.showIcon = false;
            }
          }
        }, {
          key: "resetSelections",
          value: function resetSelections() {
            var widgetFcname = this.options.dropdowns[0].fcName;
            this.selectedItemsList.forEach(function (element) {
              element.selected = false;
            });
            this.selectedItemsList = [];
            this.options.group.controls[widgetFcname].setValue([]);
            this.options.group.get(widgetFcname).setValue(this.selectedItemsList);
            this.commonProv.setValInsideNestedObj(this.options.dropdowns[0].fcName, this.selectedItemsList, this.options.requestObject);
            this.selectReportsError = true;
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexWidgetDropdownsComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      PsComplexWidgetDropdownsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onSecondValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      PsComplexWidgetDropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-widget-dropdowns',
        template: _raw_loader_ps_complex_widget_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], PsComplexWidgetDropdownsComponent);
      /***/
    },

    /***/
    "qxlB":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qxlB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex class=\"ps-complex-widget-dropdowns\">\r\n    <ng-container *ngIf=\"options?.dropdowns.length > 0\">\r\n        <div class=\"ps-complex-widget-dropdowns_header\">\r\n            <div class=\"ps-complex-widget-dropdowns_header-back\" *ngIf=\"showIcon\">\r\n                <ps-action-icon [options]=\"backIconOptions\" (onClick)=\"onBackIconClicked()\"></ps-action-icon>\r\n            </div>\r\n            <div class=\"ps-complex-widget-dropdowns_header-label\">\r\n                <ps-label [options]=\"headerLabelOptions\"></ps-label>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngFor=\"let dropdownOptions of options.dropdowns; let i = index\">\r\n            <ps-select-dropdown-widget (onPsChange)=\"onItemSelected($event)\" [options]=\"dropdownOptions\"\r\n                [ngClass]=\"[dropdownOptions && dropdownOptions.psClass?dropdownOptions.psClass:'','level-'+i]\">\r\n            </ps-select-dropdown-widget>\r\n        </ng-container>\r\n    </ng-container>\r\n    <p *ngIf=\"selectReportsError\" class=\"select-documents-validation-message\">{{selectionErrorMessage | translate}}</p>\r\n</ps-container-complex>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=10-es5.js.map