(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-bpm-dynamic-page-bpm-dynamic-page-module~pages-dynamic-component-page-loader-dynamic-c~12b2ba92"], {
    /***/
    "2Sgc":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.html ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sgc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"(visible||custMode) && !previewMode\">\n\n  <div class=\"widget-style\" *ngIf=\"options?.isAdvanced\">\n    <div class=\"widget-menu-icon widget-menu-icon-back\" (click)=\"dismissModal(true)\">\n      <ps-action-icon class=\"modal-close-icon\" [options]=\"closeIcon\">\n      </ps-action-icon>\n    </div>\n  </div>\n\n  <div class=\"media-wrapper\"\n    [ngClass]=\"{'flow-initialized':screenData.flowWasInitialized, 'flow-not-initialized':!screenData.flowWasInitialized}\">\n    <ng-container *ngIf=\"options?.isAdvanced\">\n      <div class=\"media-video-wrapper\" #userVideoWrapper>\n        <div></div>\n        <video #userVideo class=\"media-video\" playsinline autoplay></video>\n        <ps-action-icon class=\"source-switcher\" [options]=\"switchIcon\"\n          *ngIf=\"sources?.length>=2 || commonP.isNativeMobile()\" (onClick)=\"switchCamera()\"></ps-action-icon>\n      </div>\n\n\n      <div #slider class=\"media-video-wrapper-preview\" *ngIf=\"screenData.visibleImagesOnlyArray.length>0\"\n        (mousedown)=\"onMouseDown($event)\" [ngClass]=\"{'active':onMouseDownFlag}\" (mouseup)=\"handleMouseEvent(false)\"\n        (mouseleave)=\"handleMouseEvent(false)\" (mousemove)=\"handleOnMove($event)\">\n        <ng-container *ngFor=\"let prev of screenData.visibleImagesOnlyArray; let i = index\">\n          <ng-container *ngIf=\"prev.type == TYPE_IMAGE\">\n            <ps-action-image #imageReference class=\"media-image-preview\" [options]=\"prev\"\n              (click)=\"checkSelectedMedia(prev)\" [id]=\"prev.dynamicID\">\n            </ps-action-image>\n          </ng-container>\n\n          <ng-container *ngIf=\"prev.type == TYPE_VIDEO\">\n            <video #userVideoPreview class=\"media-video-preview\" playsinline autoplay\n              (click)=\"checkSelectedMedia(prev)\"></video>\n          </ng-container>\n\n        </ng-container>\n      </div>\n    </ng-container>\n\n\n    <div class=\"buttons-wrapper\">\n      <ng-container *ngIf=\"!videoIsRecording\">\n        <ps-action-button [options]=\"options.mediaButton\"\n          (onClick)=\"!screenData.flowWasInitialized?presentPopup():captureMedia()\"\n          [ngClass]=\"{'col-12': !screenData.inProgress, 'col-6':screenData.inProgress}\"></ps-action-button>\n\n        <ps-action-button [ngClass]=\"{'col-12': !screenData.inProgress, 'col-6':screenData.inProgress}\"\n          *ngIf=\"screenData.inProgress\" (onClick)=\"dismissModal()\" [options]=\"doneOptions\"></ps-action-button>\n      </ng-container>\n\n\n      <ps-action-button *ngIf=\"videoIsRecording\" class=\"col-12\" (onClick)=\"stopRecording()\"\n        [options]=\"stopVideoRecordingLabel\">\n      </ps-action-button>\n    </div>\n\n  </div>\n</ng-container>\n\n<div *ngIf=\"previewMode\" class=\"ps-custom-component-preview selfie-component\" psPreviewEngine>\n  <ps-label psPreviewLabel *ngIf=\"options.mediaButton\" [id]=\"'lbl_'+ id\" [options]=\"options.mediaButton\"\n    class=\"ps-lbl-preview\">\n  </ps-label>\n  <ng-container *ngFor=\"let prev of screenData.visibleImagesOnlyArray\">\n    <ps-action-image psPreviewHTML class=\"media-image-preview\" [options]=\"prev\">\n\n    </ps-action-image>\n  </ng-container>\n</div>";
      /***/
    },

    /***/
    "Aju7":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: PsComplexCallSlotComponentModule */

    /***/
    function Aju7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCallSlotComponentModule", function () {
        return PsComplexCallSlotComponentModule;
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


      var _ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ps-complex-call-slot.component */
      "Aoll");

      var PsComplexCallSlotComponentModule = /*#__PURE__*/_createClass(function PsComplexCallSlotComponentModule() {
        _classCallCheck(this, PsComplexCallSlotComponentModule);
      });

      PsComplexCallSlotComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexCallSlotComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]],
        exports: [_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexCallSlotComponent"]],
        entryComponents: [_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexCallSlotComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexCallSlotComponentModule);
      /***/
    },

    /***/
    "Aoll":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: PsComplexCallSlotComponent */

    /***/
    function Aoll(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCallSlotComponent", function () {
        return PsComplexCallSlotComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_call_slot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-call-slot.component.html */
      "X6o6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var colors = {
        red: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        },
        blue: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        yellow: {
          primary: '#e3bc08',
          secondary: '#FDF1BA'
        }
      };

      var PsComplexCallSlotComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexCallSlotComponent(commonProv, loggerP, omniPull) {
          var _this;

          _classCallCheck(this, PsComplexCallSlotComponent);

          _this = _callSuper(this, PsComplexCallSlotComponent, [commonProv, loggerP]);
          _this.commonProv = commonProv;
          _this.omniPull = omniPull;
          _this.cOptions = {
            events: [{
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 1),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 2),
              title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 2).toLocaleTimeString(),
              // actions: this.actions,
              color: colors.red,
              onClick: function onClick(returnedData) {
                _this.bookSlot(returnedData);
              } // allDay: true,
              // resizable: {
              //   beforeStart: true,
              //   afterEnd: true,
              // },
              // draggable: true,

            }, {
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 1),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 2),
              title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 2).toLocaleTimeString(),
              // actions: this.actions,
              color: colors.yellow,
              onClick: function onClick(returnedData) {
                _this.bookSlot(returnedData);
              }
            }, {
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 1),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 2),
              title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 2).toLocaleTimeString(),
              color: colors.blue,
              onClick: function onClick(returnedData) {
                _this.bookSlot(returnedData);
              } // allDay: true,

            }, {
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 1),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 2),
              title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 2).toLocaleTimeString(),
              // actions: this.actions,
              color: colors.yellow,
              onClick: function onClick(returnedData) {
                _this.bookSlot(returnedData);
              } // resizable: {
              //   beforeStart: true,
              //   afterEnd: true,
              // },
              // draggable: true,

            }, {
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 4),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 5),
              title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 4).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 5).toLocaleTimeString(),
              // actions: this.actions,
              color: colors.yellow,
              onClick: function onClick(returnedData) {
                _this.bookSlot(returnedData);
              } // resizable: {
              //   beforeStart: true,
              //   afterEnd: true,
              // },
              // draggable: true,

            }]
          };
          return _this;
        }

        _inherits(PsComplexCallSlotComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexCallSlotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDateTimeFormat();
            this.cOptions.group = this.options.group;
            this.cOptions.fcName = this.options.fcName;
          }
        }, {
          key: "getDateTimeFormat",
          value: function getDateTimeFormat() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var result, paramData, res;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.omniPull.getParamValOf('DefaultDateTimeFormat');

                  case 1:
                    result = _context.v;

                    if (!result) {
                      _context.n = 3;
                      break;
                    }

                    paramData = {
                      lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].DEFAULT_DATE_TIME_LOV_TYPE_ID,
                      lovCodesInlude: result['DefaultDateTimeFormat']
                    };
                    _context.n = 2;
                    return this.omniPull.returnLovTypesValues(paramData);

                  case 2:
                    res = _context.v;

                    if (res && res[0] && res[0].description) {
                      this.dateTimeFormat = res[0].description;
                    }

                  case 3:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "bookSlot",
          value: function bookSlot(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    return _context2.a(2);
                }
              }, _callee2);
            }));
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"]);

      PsComplexCallSlotComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]
        }];
      };

      PsComplexCallSlotComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PsComplexCallSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-call-slot',
        template: _raw_loader_ps_complex_call_slot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])], PsComplexCallSlotComponent);
      /***/
    },

    /***/
    "X6o6":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X6o6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-complex-calendar [options]=\"cOptions\"></ps-complex-calendar>";
      /***/
    },

    /***/
    "dz/v":
    /*!*********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: PsComplexMediaCaptureComponentModule */

    /***/
    function dz_v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexMediaCaptureComponentModule", function () {
        return PsComplexMediaCaptureComponentModule;
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


      var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-svg-round-progressbar */
      "eANF");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-complex-media-capture.component */
      "xdyT");

      var PsComplexMediaCaptureComponentModule = /*#__PURE__*/_createClass(function PsComplexMediaCaptureComponentModule() {
        _classCallCheck(this, PsComplexMediaCaptureComponentModule);
      });

      PsComplexMediaCaptureComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__["RoundProgressModule"]],
        exports: [_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponent"]],
        entryComponents: [_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexMediaCaptureComponentModule);
      /***/
    },

    /***/
    "xdyT":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: PsComplexMediaCaptureComponent */

    /***/
    function xdyT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexMediaCaptureComponent", function () {
        return PsComplexMediaCaptureComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_media_capture_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-media-capture.component.html */
      "2Sgc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/camera-preview/ngx */
      "8Y4A");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_file_ps_field_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-file/ps-field-file.component */
      "jNcp");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-app-settings */
      "lE2x");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../psServices/models/ps-common-bussiness-constant */
      "V0Fi");

      var PsComplexMediaCaptureComponent_1;

      var PsComplexMediaCaptureComponent = PsComplexMediaCaptureComponent_1 = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsComplexMediaCaptureComponent(commonP, elRefC, cd, modalController, cameraPreview) {
          var _this2;

          _classCallCheck(this, PsComplexMediaCaptureComponent);

          _this2 = _callSuper(this, PsComplexMediaCaptureComponent, [commonP, commonP.logger, elRefC]);
          _this2.commonP = commonP;
          _this2.elRefC = elRefC;
          _this2.cd = cd;
          _this2.modalController = modalController;
          _this2.cameraPreview = cameraPreview;
          _this2.screenData = {
            micFlag: false,
            camFlag: true,
            camSide: "user",
            audioSource: null,
            videoSource: null,
            currentStream: null,
            recorder: null,
            chunks: [],
            previewImages: [],
            flowWasInitialized: false,
            inProgress: false,
            // showCountdown: false,
            // initialTime: 3,
            // currentTimer: 3
            lastState: false,
            lastStateData: {},
            numberOfImages: src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.UI_CONFIGURATION.MAX_NUMBER_OF_IMAGES_IN_MEDIA_CAPTURE,
            currentSelectedImageID: '',
            currentSelectedImage: null,
            visibleImagesOnlyArray: []
          };
          _this2.switchIcon = {
            iconName: 'cam-switch'
          };
          _this2.posterIcon = {
            imageName: 'camera.svg'
          };
          _this2.onMouseDownFlag = false;
          _this2.onMouseDownDrag = false;
          _this2.sources = [];
          _this2.TYPE_VIDEO = _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].TYPE_VIDEO;
          _this2.TYPE_IMAGE = _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].TYPE_IMAGE;
          _this2.closeIcon = {
            iconName: 'close',
            labelOptions: {
              labelKey: ''
            }
          };
          _this2.videoIsRecording = false;
          return _this2;
        }

        _inherits(PsComplexMediaCaptureComponent, _src_app_commonSRC_ps2);

        return _createClass(PsComplexMediaCaptureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexMediaCaptureComponent, "init", this, 3)([]);

            if (this.options && this.options.group) {
              this.doneOptions = {
                labelKey: 'done_key',
                group: this.options.group
              };
              this.stopVideoRecordingLabel = {
                labelKey: 'stop_recording_key',
                group: this.options.group
              };

              if (this.options.numberOfImages > 0) {
                this.screenData.numberOfImages = this.options.numberOfImages;
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.options && this.options.isAdvanced) {
              if (!src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].isEmptyObject(this.lastStateData)) {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].copyObject(this.screenData, this.lastStateData, true);
              } else {
                for (var i = 0; i < this.screenData.numberOfImages; i++) {
                  var fileName = this.options.fcName + '_img_' + i + '.' + src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].getCssVariableValue('--ps-preview-image-extension-format');
                  var image = {
                    imageName: fileName,
                    labelOptions: {
                      labelKey: this.options.fcName + '_label_' + i
                    },
                    dynamicID: this.options.fcName + '_' + i,
                    fallBackImageName: 'add.svg',
                    type: 'image',
                    fileName: fileName,
                    fileExt: src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].getCssVariableValue('--ps-preview-image-extension-format'),
                    status: 'N',
                    isImage: true
                  };
                  this.screenData.previewImages.push(image);

                  if (!this.custMode) {
                    this.checkCustomization(image.dynamicID, image);
                  } else {
                    this.screenData.visibleImagesOnlyArray.push(image);
                  }
                } // const video: PsMediaCapture = {
                //   imageName: this.options.fcName + '_video_' + '.' + CommonUtils.getCssVariableValue('--ps-preview-image-extension-format'),
                //   labelOptions: {
                //     labelKey: this.options.fcName + '_video_label_'
                //   },
                //   dynamicID: this.options.fcName + '_video',
                //   fallBackImageName: 'add.svg',
                //   type: 'video'
                // };
                // this.screenData.previewImages.push(video);
                // if (!this.custMode) {
                //   this.checkCustomization(video.dynamicID, video);
                // } else {
                //   this.screenData.visibleImagesOnlyArray.push(video);
                // }

              }

              this.initFlow();
            }
          }
        }, {
          key: "checkCustomization",
          value: function checkCustomization(dynamicID, image) {
            var cust = this.commonProv.getElementValidations(dynamicID);

            if (cust.IS_VISIBLE == 1) {
              this.screenData.visibleImagesOnlyArray.push(image);
            }
          }
        }, {
          key: "initFlow",
          value: function initFlow() {
            if (this.userVideoRef) {
              if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].isNativeMobile()) {
                try {
                  this.nativePreviewInit();
                } catch (err) {
                  this.fallBackInit();
                }
              } else {
                this.fallBackInit();
              }
            }
          }
        }, {
          key: "fallBackInit",
          value: function fallBackInit() {
            try {
              this.initWebRTCFlow();
            } catch (err) {
              src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].presentFailureAlert('camera_preview_not_avail_key');
            }
          }
        }, {
          key: "initWebRTCFlow",
          value: function initWebRTCFlow() {
            var _this3 = this;

            var userVideo = this.userVideoRef.nativeElement;
            userVideo.muted = true;
            userVideo.autoplay = true;
            navigator.mediaDevices.getUserMedia(this.getMediaConstaint()).then(function (stream) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                var _this4 = this;

                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      this.isWebRTCAvailable = true;
                      navigator.mediaDevices.enumerateDevices().then(function (devices) {
                        var filtered = devices.filter(function (device) {
                          return device.kind === 'videoinput';
                        });
                        _this4.sources = _toConsumableArray(filtered);
                      });
                      this.screenData.currentStream = stream;

                      if (userVideo) {
                        userVideo.srcObject = null;
                      }

                      userVideo.srcObject = stream;
                      _context3.n = 1;
                      return userVideo.play();

                    case 1:
                      this.screenData.flowWasInitialized = true;
                      this.checkSelectedMedia(this.screenData.visibleImagesOnlyArray[0]);

                    case 2:
                      return _context3.a(2);
                  }
                }, _callee3, this);
              }));
            })["catch"](function (err) {
              _this3.logger.log(err);

              _this3.nativePreviewInit();
            });
          }
        }, {
          key: "nativePreviewInit",
          value: function nativePreviewInit() {
            var _this5 = this;

            setTimeout(function () {
              if (_this5.userVideoWrapper && _this5.userVideoWrapper.nativeElement) {
                var wrapperPosition = _this5.userVideoWrapper.nativeElement.getBoundingClientRect();

                var paddingLeft = getComputedStyle(_this5.userVideoWrapper.nativeElement)['padding-left'];
                var paddingRight = getComputedStyle(_this5.userVideoWrapper.nativeElement)['padding-right'];
                var paddingTop = getComputedStyle(_this5.userVideoWrapper.nativeElement)['padding-top'];
                var paddingBottom = getComputedStyle(_this5.userVideoWrapper.nativeElement)['padding-bottom'];
                var xPadding = 0;
                var yPadding = 0;

                if (paddingLeft != null && paddingLeft != "") {
                  xPadding = xPadding + parseFloat(paddingLeft);
                }

                if (paddingRight != null && paddingRight != "") {
                  xPadding = xPadding + parseFloat(paddingRight);
                }

                if (paddingTop != null && paddingTop != "") {
                  yPadding = yPadding + parseFloat(paddingTop);
                }

                if (paddingBottom != null && paddingBottom != "") {
                  yPadding = yPadding + parseFloat(paddingBottom);
                }

                var cameraPreviewOpts = {
                  x: wrapperPosition.x + xPadding,
                  y: wrapperPosition.y + yPadding,
                  width: wrapperPosition.width - xPadding * 2,
                  height: wrapperPosition.height - yPadding * 2,
                  camera: 'rear',
                  tapPhoto: true,
                  previewDrag: false,
                  toBack: false,
                  alpha: 1
                };

                _this5.cameraPreview.stopCamera().then(function () {
                  _this5.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
                    _this5.isWebRTCAvailable = false;
                  })["catch"](function (err) {
                    _this5.logger.log(err);
                  });
                })["catch"](function (err) {
                  _this5.logger.log(err);

                  _this5.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
                    _this5.isWebRTCAvailable = false;
                  })["catch"](function (err) {
                    _this5.logger.log(err);
                  });
                });
              } else {
                _this5.nativePreviewInit();
              }
            }, 500);
          }
        }, {
          key: "getMediaConstaint",
          value: function getMediaConstaint() {
            var videoVal = this.screenData.camFlag ? {
              facingMode: this.screenData.camSide,
              frameRate: {
                ideal: 10,
                min: 5
              },
              noiseSuppression: true
            } : false;
            var audioVal = this.screenData.micFlag ? {
              deviceId: this.screenData.audioSource ? this.screenData.audioSource : undefined,
              echoCancellation: true
            } : false;
            var constraints = {
              video: videoVal,
              audio: audioVal
            };
            return constraints;
          }
        }, {
          key: "startRecording",
          value: function startRecording() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this6 = this;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    if (this.isWebRTCAvailable) {
                      this.screenData.chunks = [];
                      this.videoIsRecording = true;
                      this.screenData.recorder = new MediaRecorder(this.screenData.currentStream);
                      this.screenData.recorder.start();

                      this.screenData.recorder.ondataavailable = function (event) {
                        _this6.screenData.chunks.push(event.data);

                        var recordedBlob = new Blob(_this6.screenData.chunks, {
                          type: "video/webm"
                        });
                        var url = URL.createObjectURL(recordedBlob);

                        _this6.cd.detectChanges();

                        var userPreviewVideo = _this6.userVideoPreview.nativeElement;
                        userPreviewVideo.src = url; // saveAs(recordedBlob, Date.now() + '.webm');
                        // let a = document.createElement('a');
                        // document.body.appendChild(a);
                        // // a.style = 'display: none';
                        // a.href = url;
                        // a.download = Date.now() + '.webm';
                        // a.click();
                        // window.URL.revokeObjectURL(url);
                      };
                    } else {}

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "stopRecording",
          value: function stopRecording() {
            this.screenData.recorder.stop();
            this.screenData.inProgress = false;
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            var _this7 = this;

            var currentIndex = this.screenData.visibleImagesOnlyArray.findIndex(function (item) {
              return item.dynamicID === _this7.screenData.currentSelectedImageID;
            });
            var arrayLength = this.screenData.visibleImagesOnlyArray.length;
            var startIndex = currentIndex;

            if (startIndex == arrayLength - 1) {
              startIndex = 0;
            }

            if (currentIndex != -1) {
              var wasFound = false;

              for (var i = startIndex; i < this.screenData.visibleImagesOnlyArray.length; i++) {
                var element = this.screenData.visibleImagesOnlyArray[i];

                if (currentIndex != i && !element.imageBase64Url) {
                  if (!element.imageBase64Url && !wasFound) {
                    wasFound = true;
                    this.checkSelectedMedia(element);
                    var reference = this.imagesReference.toArray()[i];
                    reference.nativeElement.scrollIntoView({
                      behavior: 'smooth'
                    });
                    break;
                  }
                }

                if (!wasFound && startIndex != 0 && i == arrayLength - 1) {
                  startIndex = 0;
                  i = 0;
                }
              }

              ;
            }
          }
        }, {
          key: "captureMedia",
          value: function captureMedia() {
            var _this8 = this;

            if (!this.screenData.inProgress) {
              this.screenData.inProgress = true;
            }

            if (this.userVideoRef) {
              if (this.screenData.currentSelectedImage.type == this.TYPE_VIDEO) {
                if (this.isWebRTCAvailable) {
                  this.startRecording();
                }
              } else {
                var base64URL = "";
                var ext = "jpeg";

                if (this.isWebRTCAvailable) {
                  var userVideo = this.userVideoRef.nativeElement;
                  var canvas = document.createElement("canvas");
                  canvas.width = userVideo.videoWidth;
                  canvas.height = userVideo.videoHeight;
                  canvas.getContext('2d').drawImage(userVideo, 0, 0, canvas.width, canvas.height);
                  base64URL = canvas.toDataURL();
                  ext = "png";
                } else {
                  var pictureOpts = {
                    quality: 100
                  };
                  this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
                    base64URL = 'data:image/jpeg;base64,' + imageData;
                  }, function (err) {
                    _this8.logger.error('error_taking_pic_key');
                  });
                }

                this.screenData.visibleImagesOnlyArray.forEach(function (element) {
                  if (element.dynamicID === _this8.screenData.currentSelectedImageID) {
                    element.imageBase64Url = base64URL;
                    element.file = base64URL.split(',')[1];
                    element.fileExt = ext;
                    element.imageUrl = base64URL;
                  }
                }); //check base64

                this.goToNext();
              }
            }
          }
        }, {
          key: "presentPopup",
          value: function presentPopup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this9 = this;

              var id, newOptions, modal;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    /*
                    
                     const id = 'ps-media-capture-modal';
                             const newOptions: IOptionsPsComplexMediaCaptureComponent = {};
                    CommonUtils.copyObject(newOptions, this.options, true);
                    newOptions.isAdvanced = true;
                    const finalOptions = { options: newOptions, lastStateData: this.screenData && this.screenData.lastStateData ? this.screenData.lastStateData : null }
                             const modal = await this.common.presentPopupScreen({
                      component: PsComplexMediaCaptureComponent,
                      componentOptions: finalOptions
                    }, id);
                             await modal.onDidDismiss().then(data => {
                      this.screenData.lastStateData = data['data'];
                    }).catch(error => this.common.logger.log(error));
                    
                    
                    */
                    id = 'ps-media-capture-modal';
                    newOptions = {};
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].copyObject(newOptions, this.options, true);
                    newOptions.isAdvanced = true;
                    this.modalController.dismiss(null, null, id);
                    _context5.n = 1;
                    return this.modalController.create({
                      component: PsComplexMediaCaptureComponent_1,
                      cssClass: id,
                      componentProps: {
                        options: newOptions,
                        lastStateData: this.screenData && this.screenData.lastStateData ? this.screenData.lastStateData : null
                      },
                      backdropDismiss: true,
                      animated: false,
                      id: id
                    });

                  case 1:
                    modal = _context5.v;
                    _context5.n = 2;
                    return modal.present();

                  case 2:
                    _context5.n = 3;
                    return modal.onDidDismiss().then(function (data) {
                      _this9.screenData.lastStateData = data['data'];
                    })["catch"](function (error) {
                      return _this9.common.logger.log(error);
                    });

                  case 3:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "dismissModal",
          value: function dismissModal(justClose) {
            var _a;

            if (justClose) {
              // this.userVideoPreview.nativeElement.scrollIntoView({ behavior: 'smooth' });
              _superPropGet(PsComplexMediaCaptureComponent, "resetFileValController", this, 3)([]);

              this.modalController.dismiss();
            } else {
              _superPropGet(PsComplexMediaCaptureComponent, "setFileValController", this, 3)([(_a = this.screenData) === null || _a === void 0 ? void 0 : _a.visibleImagesOnlyArray.filter(function (b) {
                return b.imageBase64Url;
              })]); // this.onPsChange.emit();


              this.modalController.dismiss(this.screenData, null, 'ps-media-capture-modal');
            }
          }
        }, {
          key: "checkSelectedMedia",
          value: function checkSelectedMedia(media) {
            var _this0 = this;

            if (media.type == this.TYPE_VIDEO) {
              var modalID = 'ps-confirm-close';
              var alertController = {
                cssClass: 'user-consent-popup',
                header: 'you_will_be_recorded_key',
                buttons: [{
                  role: 'cancel',
                  options: {
                    labelKey: 'cancel_key',
                    psClass: 'ps-drafts-report-cancel-button',
                    group: this.options.group
                  },
                  handler: function handler() {
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].dismissAllModals(null, null, modalID);
                  }
                }, {
                  options: {
                    labelKey: 'ok_key',
                    psClass: 'ps-drafts-report-cancel-button',
                    group: this.options.group
                  },
                  handler: function handler() {
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].dismissAllModals(null, null, modalID);

                    _this0.selectMedia(media);
                  }
                }]
              };
              this.common.presentPsAlert(alertController, modalID);
            } else {
              this.selectMedia(media);
            }
          }
        }, {
          key: "selectMedia",
          value: function selectMedia(media) {
            var _this1 = this;

            this.screenData.currentSelectedImage = media;
            this.screenData.visibleImagesOnlyArray.forEach(function (element) {
              element.psClass = "";

              if (element.dynamicID == media.dynamicID) {
                element.psClass = "ps-selected-image";
                _this1.screenData.currentSelectedImageID = media.dynamicID;
              } else {
                element.psClass = "";
              }
            });
          }
        }, {
          key: "createDynID",
          value: function createDynID(media, id) {
            media.dynamicID = id;
            return id;
          }
        }, {
          key: "handleMouseEvent",
          value: function handleMouseEvent(type) {
            this.onMouseDownFlag = type;
            this.onMouseDownDrag = type;
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(e) {
            e.preventDefault(); // this.onMouseDownFlag = true;

            this.onMouseDownDrag = true;

            if (this.slider) {
              this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
              this.scrollLeft = this.slider.nativeElement.scrollLeft;
            }
          }
        }, {
          key: "handleOnMove",
          value: function handleOnMove(e) {
            if (!this.onMouseDownDrag) {
              return;
            }

            if (this.slider) {
              this.onMouseDownFlag = true;
              e.preventDefault();
              var x = e.pageX - this.slider.nativeElement.offsetLeft;
              var walk = (x - this.startX) * 2; //scroll-fast

              this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
            }
          }
        }, {
          key: "switchCamera",
          value: function switchCamera() {
            if (this.isWebRTCAvailable) {
              var tracks = this.screenData.currentStream.getTracks();
              tracks.forEach(function (track) {
                return track.stop();
              });

              if (this.screenData.camSide == "environment") {
                this.screenData.camSide = "user";
              } else {
                this.screenData.camSide = "environment";
              }

              this.initFlow();
            } else {
              this.cameraPreview.switchCamera();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.cameraPreview.stopCamera();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_file_ps_field_file_component__WEBPACK_IMPORTED_MODULE_5__["PsFieldFileComponent"]
      /*  implements AfterViewInit */
      );

      PsComplexMediaCaptureComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"]
        }];
      };

      PsComplexMediaCaptureComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        userVideoRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['userVideo', {
            "static": false
          }]
        }],
        userVideoPreview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['userVideoPreview', {
            "static": false
          }]
        }],
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['slider', {
            "static": false
          }]
        }],
        imagesReference: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: ['imageReference', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }]
        }],
        userVideoWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['userVideoWrapper', {
            "static": false
          }]
        }]
      };
      PsComplexMediaCaptureComponent = PsComplexMediaCaptureComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-media-capture',
        template: _raw_loader_ps_complex_media_capture_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"]])], PsComplexMediaCaptureComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-bpm-dynamic-page-bpm-dynamic-page-module~pages-dynamic-component-page-loader-dynamic-c~12b2ba92-es5.js.map