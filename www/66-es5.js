(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66], {
    /***/
    "6ckw":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function ckw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "spzo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");

      var DashboardPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function DashboardPage(commonService, omniPull, logger, viewportRuler) {
          var _this;

          _classCallCheck(this, DashboardPage);

          _this = _callSuper(this, DashboardPage);
          _this.commonService = commonService;
          _this.omniPull = omniPull;
          _this.logger = logger;
          _this.viewportRuler = viewportRuler;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
          _this.templateViewOptions = {
            group: _this.formGroup,
            disableLoading: true
          };
          _this.spinner = false;
          _this.unAddedUserWidgets = []; // will contain the unadded available widgets within the dashboard

          _this.userWidgets = []; // will contain the already added widgets within the dashboard

          _this.currentLayout = 'rows';
          _this.dropListOrientation = 'vertical';
          _this.cdkDropListConnectedTo = ['userWidgets'];
          _this.cdkDragLockAxis = 'y';
          _this.showAvailableWidgets = false;
          _this.unusedWidgetsPanelOpts = {
            isExpandable: true,
            labelKey: 'choose_your_widget_key',
            iconName: 'document',
            collapseIconName: 'close',
            expanded: true
          };
          _this.dropHereLabel = {
            labelKey: 'drop_widget_here_key'
          };
          _this.addWidgetIconOptions = {
            iconName: 'add',
            labelOptions: {
              labelKey: 'Click_here_to_add_widgets_key'
            },
            allowCust: true
          };
          _this.actionImageOptions = {
            imageName: src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          };
          _this.layoutIconOptions = [{
            iconName: 'rows-layout-icon',
            allowCust: true,
            handler: function handler() {
              _this.onLayoutChange('rows');
            }
          }, {
            iconName: 'columns-layout-icon',
            allowCust: true,
            handler: function handler() {
              _this.onLayoutChange('columns');
            }
          }, {
            iconName: 'grid-layout-icon',
            allowCust: true,
            handler: function handler() {
              _this.onLayoutChange('grid');
            }
          }];
          _this.dragWidgetIcon = {
            iconName: 'drag-icon',
            allowCust: true
          };

          _this.dropListEnterPredicate = function (drag, drop) {
            if (drop == _this.placeholder) return true;

            if (drag.data) {
              var widgetIndex = _this.unAddedUserWidgets.findIndex(function (widget) {
                return widget.widgetCode === drag.data.widgetCode;
              });

              return widgetIndex != -1 ? true : false;
            }
          };

          return _this;
        }

        _inherits(DashboardPage, _omni_base_omni_base_);

        return _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(DashboardPage, "init", this, 3)([]);

            this.isMobile = this.commonProv.isMobile();
            var userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO);

            if (!this.isMobile) {
              var dashboardLayout = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.omniUserVO) && userInfo.omniUserVO.DASHBOARD_LAYOUT ? userInfo.omniUserVO.DASHBOARD_LAYOUT : this.currentLayout;

              if (dashboardLayout !== this.currentLayout) {
                this.changeCurrentLayout(dashboardLayout);
              }
            }

            this.returnWidgetDetails();
          }
        }, {
          key: "returnWidgetDetails",
          value: function returnWidgetDetails() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var fetchedWidgets, result, _this$categorizeWidge, userWidgets, unusedWidgets;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    fetchedWidgets = [];
                    this.spinner = true;
                    _context.n = 1;
                    return this.omniPull.returnWidgetDetails()["catch"](function (error) {
                      _this2.spinner = false;

                      _this2.logger.error('Error: While fetching dashboard widgets in DashboardPage :', error);
                    });

                  case 1:
                    result = _context.v;
                    this.spinner = false;

                    if (result && result.widgets && result.widgets.length > 0) {
                      fetchedWidgets = this.populateDashbordWidgets(result.widgets);
                    }

                    _this$categorizeWidge = this.categorizeWidgets(fetchedWidgets), userWidgets = _this$categorizeWidge.userWidgets, unusedWidgets = _this$categorizeWidge.unusedWidgets;
                    this.unAddedUserWidgets = unusedWidgets;
                    this.userWidgets = this.sortWidgetsByOrder(userWidgets);

                    if (this.currentLayout == 'grid') {
                      this.cdkDropListConnectedTo = this.generateCdkDropListConnectedTo();
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "populateDashbordWidgets",
          value: function populateDashbordWidgets(requestData) {
            var fetchedWidgets = [];

            var _iterator = _createForOfIteratorHelper(requestData),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var iterator = _step.value;
                var widget = {
                  widgetCode: iterator.widgetCode,
                  widgetId: iterator.widgetId,
                  widgetHeaderName: iterator.headerName,
                  widgetTitle: iterator.label,
                  widgetReportId: iterator.idReport,
                  widgetReportType: iterator.type,
                  linkedOperation: iterator.linkedOper,
                  widgetIconName: this.getWidgetIconName(iterator.type),
                  widgetOrder: iterator.widgetOrder
                };
                fetchedWidgets.push(widget);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return fetchedWidgets;
          }
        }, {
          key: "categorizeWidgets",
          value: function categorizeWidgets(widgets) {
            return widgets.reduce(function (result, widget) {
              if (widget.widgetOrder !== undefined && widget.widgetOrder !== null) {
                result.userWidgets.push(widget);
              } else {
                result.unusedWidgets.push(widget);
              }

              return result;
            }, {
              userWidgets: [],
              unusedWidgets: []
            });
          }
        }, {
          key: "sortWidgetsByOrder",
          value: function sortWidgetsByOrder(userWidgets) {
            return userWidgets.sort(function (a, b) {
              return a.widgetOrder - b.widgetOrder;
            });
          }
        }, {
          key: "removeWidgetConfirmationPopup",
          value: function removeWidgetConfirmationPopup(widgetCode) {
            var _this3 = this;

            var buttonsObject = [{
              type: 'reset',
              group: this.formGroup,
              labelKey: 'cancel_key',
              handler: function handler() {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
              }
            }, {
              group: this.formGroup,
              labelKey: 'ok_key',
              type: 'submit',
              handler: function handler() {
                _this3.removeWidget(widgetCode);

                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
              }
            }];
            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentInfoAlert(this.commonProv.translate('are_you_sure_?_key'), {
              buttonsArray: buttonsObject
            });
          }
        }, {
          key: "removeWidget",
          value: function removeWidget(widgetCode) {
            if (widgetCode) {
              var removedWidget = {};
              var widgetIndex = this.userWidgets.findIndex(function (widget) {
                return widget.widgetCode === widgetCode;
              });

              if (widgetIndex !== -1) {
                removedWidget = this.userWidgets.splice(widgetIndex, 1);
              }

              this.unAddedUserWidgets.push(removedWidget[0]);
              this.saveDashboardPersonalization();
            }
          }
        }, {
          key: "saveDashboardPersonalization",
          value: function saveDashboardPersonalization(layout) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this4 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    return _context2.a(2, new Promise(function (resolve, reject) {
                      _this4.commonProv.presentLoading();

                      var widgetsArray = _this4.assignWidgetsOrder(_this4.userWidgets);

                      var params = Object.assign(Object.assign({
                        widgetsArray: widgetsArray
                      }, widgetsArray.length === 0 && !layout && {
                        isDashboardEmpty: 'Y'
                      }), layout && {
                        dashboardLayout: layout,
                        widgetsArray: []
                      });

                      _this4.omniPull.saveDashboardPersonalization(params).then(function (result) {
                        resolve(true);
                      })["catch"](function (error) {
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentFatalAlert(_this4.commonProv.translate('dashboard_saving_personalization_error'));

                        _this4.logger.error('Error: While saving dashboard widgets personalization:', error);

                        reject(false);
                      })["finally"](function () {
                        _this4.commonProv.dismissLoading();
                      });
                    }));
                }
              }, _callee2);
            }));
          }
        }, {
          key: "assignWidgetsOrder",
          value: function assignWidgetsOrder(widgets) {
            return widgets.map(function (widget, index) {
              return {
                widgetCode: widget.widgetCode,
                widgetId: widget.widgetId,
                widgetOrder: index
              };
            });
          }
        }, {
          key: "onLayoutChange",
          value: function onLayoutChange(layout) {
            var _this5 = this;

            this.changeCurrentLayout(layout);
            setTimeout(function () {
              _this5.commonProv.chartResizeSubject.next(true);
            }, 0);
            this.saveDashboardPersonalization(layout).then(function (result) {
              if (result) {
                _this5.updateLayoutFromSession(layout);
              }
            });
          }
        }, {
          key: "resizeWidgetChart",
          value: function resizeWidgetChart() {
            var _this6 = this;

            setTimeout(function () {
              _this6.commonProv.chartResizeSubject.next(true);
            }, 0);
          }
        }, {
          key: "changeCurrentLayout",
          value: function changeCurrentLayout(layout) {
            var _this7 = this;

            switch (layout) {
              case 'columns':
                this.cdkDragLockAxis = 'x';
                this.dropListOrientation = 'horizontal';
                this.currentLayout = 'columns';
                this.cdkDropListConnectedTo = ['userWidgets'];
                break;

              case 'rows':
                this.cdkDragLockAxis = 'y';
                this.dropListOrientation = 'vertical';
                this.currentLayout = 'rows';
                this.cdkDropListConnectedTo = ['userWidgets'];
                break;

              case 'grid':
                this.currentLayout = 'grid';
                setTimeout(function () {
                  _this7.removePlaceHolder();
                }, 0);
                this.cdkDropListConnectedTo = this.generateCdkDropListConnectedTo();
                break;

              default:
                break;
            }
          }
        }, {
          key: "generateCdkDropListConnectedTo",
          value: function generateCdkDropListConnectedTo() {
            return this.userWidgets.length > 0 ? this.userWidgets.map(function (_, index) {
              return "userWidgets-".concat(index);
            }) : ['userWidgets-0'];
          }
        }, {
          key: "updateLayoutFromSession",
          value: function updateLayoutFromSession(layout) {
            var userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO);

            if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.omniUserVO) {
              userInfo.omniUserVO.DASHBOARD_LAYOUT = layout;
              this.commonProv.session.append(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO, userInfo);
            }
          }
        }, {
          key: "showHideWidgetsPanel",
          value: function showHideWidgetsPanel(event) {
            this.showAvailableWidgets = event;

            if (event) {
              this.unusedWidgetsPanelOpts.expanded = true;
            }
          }
        }, {
          key: "getWidgetIconName",
          value: function getWidgetIconName(reportType) {
            switch (reportType) {
              case 'DR':
                return 'bookmark';

              case 'PA':
                return 'document';

              case 'P':
                return 'document';

              case 'PC':
                return 'pie-chart';

              case 'DC':
                return 'doughnut-chart';

              case 'LC':
                return 'line-chart';

              case 'BC':
                return 'bar-chart';

              case 'AC':
                return 'area-chart';

              case 'L':
                return 'list';

              default:
                return '';
            }
          }
        }, {
          key: "drop",
          value: function drop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.userWidgets, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }

            this.resizeWidgetChart();
            this.saveDashboardPersonalization();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.currentLayout === 'grid') {
              this.removePlaceHolder();
            }
          }
        }, {
          key: "dragMoved",
          value: function dragMoved(e) {
            var _this8 = this;

            var point = this.getPointerPositionOnPage(e.event);
            this.autoScroll(point.x, point.y);

            this.listGroup._items.forEach(function (dropList) {
              if (__isInsideDropListClientRect(dropList, point.x, point.y) && e.source.dropContainer != dropList) {
                if (_this8.activeContainer != dropList) {
                  _this8.dropListEntered(e.source, dropList);
                }

                return;
              }
            });
          }
        }, {
          key: "autoScroll",
          value: function autoScroll(pointX, pointY) {
            var container = this.container.nativeElement;
            var rect = container.getBoundingClientRect();
            var scrollSpeed = 10;
            clearInterval(this.autoScrollInterval);

            if (pointY < rect.top + 20) {
              this.autoScrollInterval = setInterval(function () {
                container.scrollBy(0, -scrollSpeed);
              }, 16);
            } else if (pointY > rect.bottom - 20) {
              this.autoScrollInterval = setInterval(function () {
                container.scrollBy(0, scrollSpeed);
              }, 16);
            } else if (pointX < rect.left + 20) {
              this.autoScrollInterval = setInterval(function () {
                container.scrollBy(-scrollSpeed, 0);
              }, 16);
            } else if (pointX > rect.right - 20) {
              this.autoScrollInterval = setInterval(function () {
                container.scrollBy(scrollSpeed, 0);
              }, 16);
            }
          }
        }, {
          key: "dropListEntered",
          value: function dropListEntered(drag, dropList) {
            var _a, _b, _c, _d, _e;

            var sourceElement = drag.dropContainer;
            var dropElement = dropList;
            this.activeContainer = dropList;

            if (!sourceElement || !dropElement) {
              console.warn('Source or Drop element is not defined.');
              return;
            }

            if (dropElement === this.placeholder) {
              return; // Exit if the placeholder is the drop container
            }

            var phElement = (_b = (_a = this.placeholder) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.nativeElement;
            var sourceNativeElement = sourceElement.element.nativeElement;
            var dropNativeElement = dropElement.element.nativeElement;

            if (!phElement || !sourceNativeElement || !dropNativeElement) {
              console.warn('One of the required elements (placeholder, source, or drop) is missing.');
              return;
            }

            var parentChildren = Array.from(((_c = dropNativeElement.parentElement) === null || _c === void 0 ? void 0 : _c.children) || []);
            var dragIndex = parentChildren.indexOf(this.source ? phElement : sourceNativeElement);
            var dropIndex = parentChildren.indexOf(dropNativeElement);

            if (!this.source) {
              // Initialize the source element and set placeholder dimensions
              this.sourceIndex = dragIndex;
              this.source = sourceElement;
              phElement.style.width = "".concat(sourceNativeElement.clientWidth, "px");
              phElement.style.height = "".concat(sourceNativeElement.clientHeight, "px"); // Safely remove the source element

              (_d = sourceNativeElement.parentElement) === null || _d === void 0 ? void 0 : _d.removeChild(sourceNativeElement);
            } // Update target index for drop


            this.targetIndex = dropIndex !== -1 ? dropIndex : null;
            phElement.style.display = ''; // Insert placeholder into the correct position

            (_e = dropNativeElement.parentElement) === null || _e === void 0 ? void 0 : _e.insertBefore(phElement, dropIndex > dragIndex ? dropNativeElement.nextSibling : dropNativeElement); // Allow placeholder to accept drag reference

            if (this.placeholder._dropListRef && drag._dragRef) {
              this.placeholder._dropListRef.enter(drag._dragRef, sourceNativeElement.offsetLeft, sourceNativeElement.offsetTop);
            } else {
              console.warn('Placeholder DropListRef or DragRef is not initialized.');
            }
          }
        }, {
          key: "dropListDropped",
          value: function dropListDropped(event) {
            var _a;

            if (this.activeContainer) {
              var phElement = this.placeholder.element.nativeElement;
              var parent = phElement.parentElement;
              phElement.style.display = 'none';
              parent.removeChild(phElement);
              parent.appendChild(phElement);
              parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
            }

            if (this.sourceIndex !== null && this.targetIndex !== null && this.sourceIndex !== this.targetIndex) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.userWidgets, this.sourceIndex, this.targetIndex);
            } else if (event.previousContainer !== event.container) {
              var parentChildren = Array.from(((_a = event.container.element.nativeElement.parentElement) === null || _a === void 0 ? void 0 : _a.children) || []);
              var dropIndex = parentChildren.indexOf(event.container.element.nativeElement);
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, dropIndex);
              this.cdkDropListConnectedTo = this.generateCdkDropListConnectedTo();
            }

            this.resizeWidgetChart();
            this.resetState();
            this.saveDashboardPersonalization();
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.sourceIndex = null;
            this.targetIndex = null;
            this.source = null;
            this.activeContainer = null;
            clearInterval(this.autoScrollInterval);
          }
        }, {
          key: "removePlaceHolder",
          value: function removePlaceHolder() {
            var phElement = this.placeholder.element.nativeElement;
            phElement.style.display = 'none';
            phElement.parentElement.removeChild(phElement);
          }
        }, {
          key: "getPointerPositionOnPage",
          value: function getPointerPositionOnPage(event) {
            var point = __isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
            var scrollPosition = this.viewportRuler.getViewportScrollPosition();
            return {
              x: point.pageX - scrollPosition.left,
              y: point.pageY - scrollPosition.top
            };
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_6__["OmniBasePage"]);

      DashboardPage.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
        }];
      };

      DashboardPage.propDecorators = {
        listGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["CdkDropListGroup"]]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['placeholder', {
            "static": false,
            read: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["CdkDropList"]
          }]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['container']
        }]
      };
      DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'dashboard-page',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]])], DashboardPage);

      function __isTouchEvent(event) {
        return event.type.startsWith('touch');
      }

      function __isInsideDropListClientRect(dropList, x, y) {
        var _dropList$element$nat = dropList.element.nativeElement.getBoundingClientRect(),
            top = _dropList$element$nat.top,
            bottom = _dropList$element$nat.bottom,
            left = _dropList$element$nat.left,
            right = _dropList$element$nat.right;

        return y >= top && y <= bottom && x >= left && x <= right;
      }
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
            var _this9 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this9.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this0 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this0.disableForm(_this0.baseFormGroup);

                _this0.isPageDisabled = true;
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
    },

    /***/
    "spzo":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function spzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-view [options]=\"templateViewOptions\" id=\"main1\">\n\t<ps-action-image class=\"inline-loading-image\" *ngIf=\"spinner\" [options]=\"actionImageOptions\">\n\t</ps-action-image>\n\t<div class=\"dashboard-action-buttons\">\n\t\t<ps-action-icon [options]=\"addWidgetIconOptions\" (onClick)=\"showHideWidgetsPanel('true')\"\n\t\t\t*ngIf=\"!showAvailableWidgets && unAddedUserWidgets.length\" class=\"material-icons add-widegt-btn\">\n\t\t</ps-action-icon>\n\t\t<div *ngIf='!isMobile' class=\"dashboard-layout-container\">\n\t\t\t<ps-label class=\"choose_web_layout_label\" [options]=\"{labelKey:'choose_web_layout_key'}\"></ps-label>\n\t\t\t<div class=\"dashboard-layout-buttons\">\n\t\t\t\t<ng-container *ngFor=\"let layoutIcon of layoutIconOptions; let i = index\">\n\t\t\t\t\t<ps-action-icon [options]=\"layoutIcon\" (onClick)=\"layoutIcon.handler()\"\n\t\t\t\t\t\tclass=\"material-icons dashboard-layout-icon\"\n\t\t\t\t\t\t[class]=\"layoutIcon.iconName + '-btn'\"></ps-action-icon>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"dashboard-unused-widgets-container\" *ngIf=\"showAvailableWidgets && unAddedUserWidgets.length\">\n\t\t<ps-container-panel id=\"available-widgets-panel\" [options]=\"unusedWidgetsPanelOpts\"\n\t\t\t(panelToggleEvent)=\"showHideWidgetsPanel($event)\">\n\t\t\t<ng-container *ngIf=\"unAddedUserWidgets?.length > 0\">\n\t\t\t\t<div class=\"dashboard-available-widgets-container\" cdkDropList\n\t\t\t\t\t[cdkDropListConnectedTo]=\"cdkDropListConnectedTo\" [cdkDropListData]=\"unAddedUserWidgets\">\n\t\t\t\t\t<ng-container *ngFor=\"let widget of unAddedUserWidgets; let i = index\">\n\t\t\t\t\t\t<div class=\"widget-item-wrapper\" cdkDrag [cdkDragData]=\"widget\">\n\t\t\t\t\t\t\t<ion-item class=\"ps-pointer widget-item\">\n\t\t\t\t\t\t\t\t<div class=\"widget-item-actions_wrapper\">\n\t\t\t\t\t\t\t\t\t<div cdkDragHandle class=\"widget-item-label-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<ps-action-icon [id]=\"'dashboard-widget-' + i\"\n\t\t\t\t\t\t\t\t\t\t\t[options]=\"{iconName: widget.widgetIconName}\" class=\"material-icons\">\n\t\t\t\t\t\t\t\t\t\t</ps-action-icon>\n\t\t\t\t\t\t\t\t\t\t<ps-label class=\"widget-item-label-desc\"\n\t\t\t\t\t\t\t\t\t\t\t[options]=\"{labelKey:widget.widgetHeaderName}\"></ps-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</ps-container-panel>\n\t</div>\n\n\t<div *ngIf=\"currentLayout != 'grid'\" id='userWidgets' class=\"dashboard-user-widgets-container\" [ngClass]=\"{\n   'user-widgets-column-layout': currentLayout === 'columns',\n   'user-widgets-row-layout': currentLayout === 'rows'}\" cdkDropList (cdkDropListDropped)=\"drop($event)\"\n\t\t[cdkDropListData]=\"userWidgets\" [cdkDropListOrientation]=\"dropListOrientation\">\n\t\t<ng-container *ngFor=\"let itemOption of userWidgets\">\n\t\t\t<div cdkDrag [cdkDragLockAxis]=\"cdkDragLockAxis\" class=\"widget-container-box\"\n\t\t\t\t[class]=\"currentLayout + '-widget-card-container'\"\n\t\t\t\t[ngClass]=\"'widget-card-type-' + itemOption?.widgetReportType\">\n\t\t\t\t<ps-container-widget-card [options]=\"itemOption\"\n\t\t\t\t\t(onRemoveWidget)=\"removeWidgetConfirmationPopup($event)\">\n\t\t\t\t\t<ps-action-icon dragIcon cdkDragHandle [id]=\"'drag-widget-handle-icon'\" [options]=\"dragWidgetIcon\"\n\t\t\t\t\t\tclass=\"material-icons drag-widget-handle-btn\">\n\t\t\t\t\t</ps-action-icon>\n\t\t\t\t</ps-container-widget-card>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ps-label *ngIf=\"userWidgets.length == 0\" [options]=\"dropHereLabel\" class=\"empty-widgets-label\"></ps-label>\n\t</div>\n\t<div cdkDropListGroup #container *ngIf=\"currentLayout === 'grid'\" class=\"user-widgets-grid-layout\"\n\t\t[ngClass]=\"{'empty-user-widgets-list': !userWidgets.length}\">\n\t\t<div #placeholder cdkDropList [cdkDropListData]=\"userWidgets\"\n\t\t\t[cdkDropListEnterPredicate]=\"dropListEnterPredicate\" (cdkDropListDropped)=\"dropListDropped($event)\"></div>\n\t\t<div cdkDropList [cdkDropListEnterPredicate]=\"dropListEnterPredicate\"\n\t\t\t(cdkDropListDropped)=\"dropListDropped($event)\" class=\"drop-list-widget\"\n\t\t\t*ngFor=\"let itemOption of userWidgets; index as i\" [cdkDropListData]=\"userWidgets\"\n\t\t\t[id]=\"'userWidgets-' + i\">\n\t\t\t<div cdkDrag (cdkDragMoved)=\"dragMoved($event);\" class=\"widget-container-box\"\n\t\t\t\t[class]=\"currentLayout + '-widget-card-container'\"\n\t\t\t\t[ngClass]=\"'widget-card-type-' + itemOption?.widgetReportType\">\n\t\t\t\t<ps-container-widget-card [id]=\"'ps-widget-container-lookup_' + i\" [options]=\"itemOption\"\n\t\t\t\t\t(onRemoveWidget)=\"removeWidgetConfirmationPopup($event)\">\n\t\t\t\t\t<ps-action-icon dragIcon cdkDragHandle [id]=\"'drag-widget-handle-icon'\" [options]=\"dragWidgetIcon\"\n\t\t\t\t\t\tclass=\"material-icons drag-widget-handle-btn\"></ps-action-icon>\n\t\t\t\t</ps-container-widget-card>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"userWidgets-0\" *ngIf=\"userWidgets.length == 0\" class=\"grid-placeholder-droplist\"\n\t\t\t[cdkDropListData]=\"userWidgets\" cdkDropList (cdkDropListDropped)=\"dropListDropped($event)\">\n\t\t\t<ps-label [options]=\"dropHereLabel\" class=\"empty-widgets-label\"></ps-label>\n\t\t</div>\n\t</div>\n</ps-template-view>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=66-es5.js.map