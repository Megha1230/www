(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-multi-outlet-multi-outlet-module~pages-visa-request-visa-request-module"], {
    /***/
    "+lUH":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS1tdWx0aS1vdXRsZXRzLnRlbXBsYXRlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "HEGf":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PsTemplateMultiOutletComponent */

    /***/
    function HEGf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateMultiOutletComponent", function () {
        return PsTemplateMultiOutletComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_template_multi_outlets_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-template-multi-outlets.template.html */
      "pXmH");
      /* harmony import */


      var _ps_template_multi_outlets_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-template-multi-outlets.template.scss */
      "+lUH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../ps-template-base/ps-template-base.page */
      "uqA0");

      var PsTemplateMultiOutletComponent = /*#__PURE__*/function (_ps_template_base_ps_) {
        function PsTemplateMultiOutletComponent(commonService, logger, componentFactoryResolver) {
          var _this;

          _classCallCheck(this, PsTemplateMultiOutletComponent);

          _this = _callSuper(this, PsTemplateMultiOutletComponent);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.componentFactoryResolver = componentFactoryResolver;
          _this.MultiOutletPageRequestVO = {};
          _this.varaibJson = {};
          _this.showTemplate = false;
          _this.options = {
            stepperName: 'multi_outlet_page_stepper',
            numberOfSteps: 1,
            requestObject: _this.MultiOutletPageRequestVO,
            isHorizontalStepper: true,
            hideStepper: false,
            namesofSteps: ['multiOutletStep1'],
            isMultiple: true
          };
          _this.showSegments = [false, false, false, false, false, false, false, false, false, false];
          _this.segmentList = [{
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }, {
            segmentName: '',
            segmentActive: false,
            segmentStatus: 'empty'
          }];
          _this.segmentOptions = {
            segmentList: [],
            defaultSegment: {},
            isMultiOutlet: true,
            fcName: 'segmentsOutlet'
          };
          _this.standardOptions = {
            labelKey: 'add_new_segment_key',
            allowCust: false,
            iconName: 'add-circle'
          };
          _this.standardOptions2 = {
            labelKey: 'remove_segment_key',
            allowCust: false,
            iconName: 'trash'
          };
          _this.dynamicOptions = {};
          _this.index = 0;
          _this.refConfirm = [];
          _this.menuArray = [];
          _this.previewObject = {};
          _this.segmentInit = false;
          _this.previewData = [];
          _this.showButtons = true;
          _this.previewMode = false;
          _this.factoryReferenceArray = [];
          return _this;
        }

        _inherits(PsTemplateMultiOutletComponent, _ps_template_base_ps_);

        return _createClass(PsTemplateMultiOutletComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.options.group = this.outletOptions.group;
            this.options.submitOptions = {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].serviceUrl.multipleActionSubmit,
              group: this.options.group,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.preCallFunction(response));
                  });
                },
                params: [this],
                executionClass: this
              },
              postCallFunction: {
                func: function func(response) {
                  var _this3 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this3.executionClass.postSubmitFunction(response));
                  });
                },
                params: [this],
                executionClass: this
              }
            };
            this.segmentOptions.group = this.options.group;
            this.commonProv.setFormData(this.options.group, this.MultiOutletPageRequestVO);
            this.options.type = this.outletOptions.type;
            this.showTemplate = true; // autobind function specific to the multi template where if there is data inside the navParams to be loaded then a differenct function is run for the data to be loaded one by one
            // as for each page to be loaded there is supposed ot be a different oeprationID

            var navParams = this.navService.getAllParams();

            if (JSON.stringify(navParams.ScreenVO) && JSON.stringify(navParams.ScreenVO) != '{}' && navParams.ScreenVO != undefined && navParams.ScreenVO != null) {
              this.autoLoadData(navParams.ScreenVO);
            } else {
              this.addNewOutlet();
            }

            if (this.outletOptions.segmentNameUpdate) {
              this.options.group.valueChanges.subscribe(function (val) {
                // loop on object keys of formgroup to check if the transfer- title or key is available
                Object.keys(val).forEach(function (element) {
                  if (element.match(_this4.outletOptions.segmentName)) {
                    if (val[element][_this4.outletOptions.segmentNameMap.key]) {
                      _this4.changeSegmentLabel(element, val[element][_this4.outletOptions.segmentNameMap.key][_this4.outletOptions.segmentNameMap.value]);
                    }
                  }
                });
              });
            }
          }
        }, {
          key: "changeSegmentLabel",
          value: function changeSegmentLabel(segmentVal, newSegmentLabel) {
            for (var i = 0; i < this.segmentOptions.segmentList.length; i++) {
              if (this.segmentOptions.segmentList[i].itemValue === segmentVal) {
                this.segmentOptions.segmentList[i].description = newSegmentLabel;
              }
            }
          }
        }, {
          key: "draftData",
          value: function draftData(_draftData) {
            this.autoLoadData(_draftData.requestObject);
          }
        }, {
          key: "autoLoadData",
          value: function autoLoadData(navData) {
            var _this5 = this;

            var _loop = function _loop(i) {
              if (i === 1) {
                setTimeout(function () {
                  if (navData[_this5.outletOptions.segmentName + i] && navData[_this5.outletOptions.segmentName + i] != undefined) {
                    _this5.selectDropValue = navData[_this5.outletOptions.segmentName + i].operId;
                    _this5.MultiOutletPageRequestVO[_this5.outletOptions.segmentName + i] = navData[_this5.outletOptions.segmentName + i].submitFieldValueMap;

                    _this5.addNewSegment(true);
                  }
                }, 500);
              } else {
                setTimeout(function () {
                  if (navData[_this5.outletOptions.segmentName + i] && navData[_this5.outletOptions.segmentName + i] != undefined) {
                    _this5.selectDropValue = navData[_this5.outletOptions.segmentName + i].operId;
                    _this5.MultiOutletPageRequestVO[_this5.outletOptions.segmentName + i] = navData[_this5.outletOptions.segmentName + i].submitFieldValueMap;

                    _this5.addNewSegment(true);
                  }
                }, 2000);
              }
            };

            for (var i = 1; i <= 10; i++) {
              _loop(i);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            if (this.index >= 1) {
              setTimeout(function () {
                // required becasue without this the loaded the component does not show
                _this6.addDynamicCompOrPage();
              }, 500);
            }
          } // event absed onclick on segment component

        }, {
          key: "onClickSegment",
          value: function onClickSegment(ev) {
            if (ev !== undefined) {
              this.currentSegment = ev;
              this.setActiveSegment();
            }
          } // show or hide the activated segment based on the event onclick of segment

        }, {
          key: "setActiveSegment",
          value: function setActiveSegment() {
            var _this7 = this;

            this.segmentList.forEach(function (each) {
              if (each.segmentName === _this7.currentSegment) {
                each.segmentActive = true;
              } else {
                each.segmentActive = false;
              }
            });

            if (this.index >= 10) {
              this.showButtons = false;
            }
          } // event triggered when the next button on stepper template

        }, {
          key: "nextButtonCLicked",
          value: function nextButtonCLicked(event) {
            var _this8 = this;

            if (event._selectedIndex > 1) {
              this.refConfirm.forEach(function (item) {
                if (_this8.options.group.contains(item.control)) {
                  _this8.commonProv.previewMode(_this8.options.group.get(item.control));
                }

                _this8.previewMode = true;
              });
              _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = this.outletOptions.operID;
            } else {
              this.refConfirm.forEach(function (item) {
                if (_this8.options.group.contains(item.control)) {
                  _this8.commonProv.editMode(_this8.options.group.get(item.control));
                }
              });
              this.previewMode = false;
            }
          } // to be run incase there are precall functions present inside the pages loaded onto dynamic loader

        }, {
          key: "preCallFunction",
          value: function preCallFunction(params) {
            var _this9 = this;

            params = {};
            this.refConfirm.forEach(function (item) {
              if (_this9.options.group.contains(item.control)) {
                if (_this9.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_PAGE) {
                  _this9.dynamicReference.forEach(function (vcr, index) {
                    if (index === item.index - 1) {
                      vcr.preCallFunction(params);
                    }
                  });
                }

                _this9.MultiOutletPageRequestVO[item.control] = _this9.options.group.get([item.control, 'formData']).value;
              }
            });
          } // TO set data into the requestVO requested from the parent page
          // arg1: formgroup object name. if false then data set to root of form group. else in the defined object of the formgroup
          // arg2: data array of abject with key value map to be directly added to the formgroup

        }, {
          key: "setInfoToVO",
          value: function setInfoToVO(groupObj, dataToBeSet) {
            var _this0 = this;

            if (groupObj) {
              dataToBeSet.forEach(function (element) {
                _this0.MultiOutletPageRequestVO[groupObj][element.key] = element.value;
              });
            } else {
              dataToBeSet.forEach(function (element) {
                _this0.MultiOutletPageRequestVO[element.key] = element.value;
              });
            }
          } // remove panel based on the outletType i.e page or component
          // component the last segment is removed and the formgroup as well as the dynamic view is purged.
          // for page it applies customization and removes the particlular segment from view by display none.

        }, {
          key: "removePanel",
          value: function removePanel() {
            var _this1 = this;

            if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_COMPONENT) {
              var delId = this.segmentOptions.segmentList[this.index - 1];
              this.segmentOptions.segmentList.pop();
              delete this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index];
              this.options.group.removeControl(this.outletOptions.segmentName + this.index);
              this.MultiOutletPageRequestVO[this.segmentOptions.fcName] = this.outletOptions.segmentName + this.index;
              this.index--;
            } else {
              _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentInfoAlert(this.commonProv.translate('are_you_sure_delete_transfer_?_key'), {
                buttonsArray: [{
                  group: this.options.group,
                  type: 'reset',
                  labelKey: 'cancel_key',
                  handler: function handler() {
                    _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                  }
                }, {
                  group: this.options.group,
                  labelKey: 'ok_key',
                  type: 'submit',
                  handler: function handler() {
                    var _a;

                    var delInd = -1;
                    var i = 0;

                    _this1.segmentList.forEach(function (element) {
                      if (element.segmentName === _this1.currentSegment) {
                        delInd = i;
                      }

                      i++;
                    });

                    _this1.commonProv.setOperationID(_this1.outletOptions.operID);

                    _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = _this1.outletOptions.operID;

                    _this1.options.group.removeControl(_this1.currentSegment);

                    delete _this1.MultiOutletPageRequestVO[_this1.currentSegment];
                    _this1.segmentList[delInd].segmentStatus = 'deleted';
                    _this1.segmentList[delInd].segmentActive = false; //added by ghada, AZDB-1674 set deleted segment as not active to hremove it from the dom

                    if (delInd == _this1.index - 1) {
                      --_this1.index; //reduce the index only if the deleted segment is the last one to avoid having multiple segments with the same name
                    }

                    var activeSeg = (_a = _this1.segmentList.find(function (seg) {
                      return seg.segmentStatus == 'active';
                    })) === null || _a === void 0 ? void 0 : _a.segmentName;
                    _this1.selectSegmentRef.selectedSegment = activeSeg;

                    _this1.onClickSegment(activeSeg);

                    var deletedSegInd = _this1.segmentOptions.segmentList.findIndex(function (seg) {
                      return seg.itemValue == _this1.segmentList[delInd].segmentName;
                    });

                    _this1.segmentOptions.segmentList.splice(deletedSegInd, 1);

                    _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                  }
                }]
              });
            }
          } // adds the dynamic page or component to the newly made availbale segment

        }, {
          key: "addDynamicCompOrPage",
          value: function addDynamicCompOrPage() {
            var _this10 = this;

            var navParams = null;

            if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_PAGE) {
              this.outletOptions.dropdownList.forEach(function (element) {
                if (element.itemValue === _this10.selectDropValue) {
                  navParams = JSON.parse(element.selectedObj.param);
                }
              });
            }

            this.dynamicOptions[this.index] = {
              multiOutlet: true,
              component: this.outletOptions.component,
              group: this.options.group,
              multiOutletOptions: {
                outletType: this.outletOptions.type,
                stepperOptions: {
                  stepperName: this.outletOptions.segmentName + this.index,
                  hideStepper: true
                },
                fromMultiLoader: true,
                navParams: navParams,
                segmentName: this.outletOptions.segmentName + this.index,
                requestObject: this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index] ? this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index] : {}
              }
            };
          } // Function to run after the dynamic component is initialized and event is emitted from the ps-dynaic-component-loader

        }, {
          key: "pageCompLoaded",
          value: function pageCompLoaded(ev) {
            var _a;

            if (ev) {
              // setTimeout(() => {
              this.refConfirm.push({
                index: this.index,
                val: true,
                control: this.outletOptions.segmentName + this.index
              });

              if (this.options.group.contains(this.outletOptions.segmentName + this.index)) {
                this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index] = (_a = this.options.group.get([this.outletOptions.segmentName + this.index, 'formData'])) === null || _a === void 0 ? void 0 : _a.value;
              }

              this.factoryReferenceArray[this.outletOptions.segmentName + this.index] = this.index - 1; // }, 2500);
            }
          } // adds a new segment with the outletOptions.segment name concatinated witht the current index

        }, {
          key: "addNewSegment",
          value: function addNewSegment(dropdown) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this11 = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!(this.index < 10 && (this.selectDropValue || !dropdown))) {
                      _context.n = 4;
                      break;
                    }

                    this.showSegments[this.index] = true;
                    this.index++;
                    this.currentSegment = this.outletOptions.segmentName + this.index;
                    this.segmentList[this.index - 1] = {
                      segmentActive: true,
                      segmentName: this.currentSegment,
                      segmentStatus: 'active'
                    }; // checks if is page or is component if component then normal add the segment then display the new dynamic component.
                    // else if page then set the oper id for the services as the same as in the page info from the dropdown selection.

                    if (dropdown) {
                      _context.n = 1;
                      break;
                    }

                    this.segmentOptions.segmentList.push({
                      itemValue: this.outletOptions.segmentName + this.index,
                      description: this.outletOptions.segmentName + this.index
                    });
                    _context.n = 3;
                    break;

                  case 1:
                    this.outletOptions.dropdownList.forEach(function (element) {
                      if (element.itemValue === _this11.selectDropValue) {
                        _this11.segmentOptions.segmentList.push({
                          itemValue: _this11.outletOptions.segmentName + _this11.index,
                          description: _this11.outletOptions.segmentName + _this11.index,
                          iconName: element.selectedObj.iconName
                        });
                      }
                    });
                    _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = this.selectDropValue;
                    this.commonProv.setOperationID(this.selectDropValue);
                    _context.n = 2;
                    return this.commonProv.applyPageCustomization();

                  case 2:
                    setTimeout(function () {
                      _this11.commonProv.setOperationID(_this11.outletOptions.operID);

                      _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = _this11.outletOptions.operID;
                    }, 1500);

                  case 3:
                    this.segmentInit = true;
                    this.MultiOutletPageRequestVO[this.segmentOptions.fcName] = this.currentSegment;
                    setTimeout(function () {
                      _this11.selectSegmentRef.selectedSegment = _this11.currentSegment;
                    }, 0);
                    this.setActiveSegment();
                    this.ngAfterViewInit();
                    _context.n = 5;
                    break;

                  case 4:
                    this.logger.error('Page Limit Reached');

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addNewOutlet",
          value: function addNewOutlet() {
            // check if the multiple segment content is to be a page or a component based on the options on the parent page
            // If outlettype is page. the function for the dropdown is to be opened
            // else if a component then the compoenent itself is directly opened from the addNewFunction()
            if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_COMPONENT) {
              this.addNewSegment(false);
            } else {
              this.selectNewPage();
            }
          } // utilize the dropdown from the outletOptions and present it in an alert modal. specifically for the page.

        }, {
          key: "selectNewPage",
          value: function selectNewPage() {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              {
                {
                  var alertController = {
                    cssClass: 'ps-button-save',
                    header: 'select_page_to_open_key',
                    inputs: [{
                      type: 'dropdown',
                      options: {
                        placeHolder: 'select_page_to_open_key',
                        fcName: 'menuPageSelection',
                        group: _this12.options.group,
                        listOfOptions: _this12.outletOptions.dropdownList,
                        disablePreview: true
                      }
                    }],
                    buttons: [{
                      role: 'cancel',
                      options: {
                        labelKey: 'cancel_key',
                        psClass: 'ps-drafts-report-cancel-button',
                        group: null
                      },
                      handler: function handler() {
                        reject(false);
                      }
                    }, {
                      // role: 'cancel',
                      options: {
                        labelKey: 'confirm_key',
                        iconName: 'paper-plane',
                        psClass: 'ps-drafts-report-submit-button',
                        group: _this12.options.group
                      },
                      handler: function handler() {
                        _this12.selectDropValue = _this12.options.group.value['menuPageSelection'];

                        if (_this12.selectDropValue) {
                          _this12.addNewSegment(true);

                          _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                        } else {
                          //added by ghada, AZDB-1674 to show field validation in cades no value entered
                          _this12.commonProv.validateFormController(_this12.options.group.controls['menuPageSelection']);
                        }
                      }
                    }]
                  };

                  _this12.commonProv.presentPsAlert(alertController, 'ps-input-reason');
                }
              }
            });
          }
        }, {
          key: "postSubmitFunction",
          value: function postSubmitFunction(response) {
            var multiResponse = "";

            for (var _i = 0, _Object$entries = Object.entries(response.commonResponseList); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (response.commonResponseList[key].outputCode === 0 || response.commonResponseList[key].outputType === 'S') {
                multiResponse += key.toString() + ' ' + response.commonResponseList[key].outputNotification + '<br />';
              } else {
                multiResponse += key.toString() + ' ' + response.commonResponseList[key].outputNotification + '<br />';
              }
            }

            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentInfoAlert(multiResponse, {
              autoHide: true
            });
          }
        }]);
      }(_ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_10__["PsTemplateBasePage"]);

      PsTemplateMultiOutletComponent.ctorParameters = function () {
        return [{
          type: _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
        }];
      };

      PsTemplateMultiOutletComponent.propDecorators = {
        outletOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectSegmentRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['selectSegmentRef']
        }],
        dynamicReference: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ['dynamicComponentReference']
        }]
      };
      PsTemplateMultiOutletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-multi-outlets',
        template: _raw_loader_ps_template_multi_outlets_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_multi_outlets_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]])], PsTemplateMultiOutletComponent);
      /***/
    },

    /***/
    "IzlW":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.module.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: PsTemplateMultiOutletModule */

    /***/
    function IzlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateMultiOutletModule", function () {
        return PsTemplateMultiOutletModule;
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


      var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared.module */
      "rlZq");
      /* harmony import */


      var _ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-template-stepper/ps-template-stepper.template.module */
      "fM+N");
      /* harmony import */


      var _ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-template-multi-outlets.template */
      "HEGf");

      var PsTemplateMultiOutletModule = /*#__PURE__*/_createClass(function PsTemplateMultiOutletModule() {
        _classCallCheck(this, PsTemplateMultiOutletModule);
      });

      PsTemplateMultiOutletModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateMultiOutletComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateStepperModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateMultiOutletComponent"]],
        exports: [_ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateMultiOutletComponent"]]
      })], PsTemplateMultiOutletModule);
      /***/
    },

    /***/
    "pXmH":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pXmH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [id]=\"options.stepperName\" *ngIf=\"showTemplate\" [options]=\"options\"\r\n    (draftLoaded)=\"draftData($event)\" (onNextPreviousStepper)=\"nextButtonCLicked($event)\">\r\n    <ps-form-step class=\"multi-outlet-segment\" *psStep=\"'step1'\" step1 [id]=\"options.namesofSteps[0]\">\r\n        <ng-content *ngIf=\"outletOptions.type === 'component'\" select=\"[multiPageData]\"></ng-content>\r\n        <div *ngIf=\"outletOptions.type !== 'component'\" class=\"ps-multi-outlet-action-icons\">\r\n            <ps-action-icon class=\"ps-button-add\" [options]=\"standardOptions\" *ngIf=\"showButtons\"\r\n                (onClick)=\"selectNewPage()\">\r\n            </ps-action-icon>\r\n            <ps-action-icon class=\"ps-button-remove\" [options]=\"standardOptions2\"\r\n                *ngIf=\"this.segmentOptions.segmentList.length >=1 && index >= 1\" (onClick)=\"removePanel()\">\r\n            </ps-action-icon>\r\n        </div>\r\n        <ps-select-segment #selectSegmentRef *ngIf=\"segmentInit\" id=\"multiOutletSegment\"\r\n            (segmentButtonClicked)=\"onClickSegment($event)\" [options]=\"segmentOptions\" [id]=\"id\">\r\n        </ps-select-segment>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[0]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}1</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[0].segmentActive,'hideSegment': !segmentList[0].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[1]'\r\n                *ngIf=\"dynamicOptions[1]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[1]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}2</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[1].segmentActive,'hideSegment': !segmentList[1].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[2]'\r\n                *ngIf=\"dynamicOptions[2]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[2]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}3</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 3 *ngIf=\"segmentList[2].segmentStatus === 'active' || segmentList[2].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[2].segmentActive,'hideSegment': !segmentList[2].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[3]'\r\n                *ngIf=\"dynamicOptions[3]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[3]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}4</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 4 *ngIf=\"segmentList[3].segmentStatus === 'active' || segmentList[3].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[3].segmentActive,'hideSegment': !segmentList[3].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[4]'\r\n                *ngIf=\"dynamicOptions[4]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[4]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}5</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 5 *ngIf=\"segmentList[4].segmentStatus === 'active' || segmentList[4].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[4].segmentActive,'hideSegment': !segmentList[4].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[5]'\r\n                *ngIf=\"dynamicOptions[5]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[5]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}6</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 6 *ngIf=\"segmentList[5].segmentStatus === 'active' || segmentList[5].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[5].segmentActive,'hideSegment': !segmentList[5].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[6]'\r\n                *ngIf=\"dynamicOptions[6]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[6]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}7</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 7 *ngIf=\"segmentList[6].segmentStatus === 'active' || segmentList[6].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[6].segmentActive,'hideSegment': !segmentList[6].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[7]'\r\n                *ngIf=\"dynamicOptions[7]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[7]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}8</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 8 *ngIf=\"segmentList[7].segmentStatus === 'active' || segmentList[7].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[7].segmentActive,'hideSegment': !segmentList[7].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[8]'\r\n                *ngIf=\"dynamicOptions[8]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[8]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}9</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 9 *ngIf=\"segmentList[8].segmentStatus === 'active' || segmentList[8].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[8].segmentActive,'hideSegment': !segmentList[8].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[9]'\r\n                *ngIf=\"dynamicOptions[9]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[9]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}10</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 10 *ngIf=\"segmentList[9].segmentStatus === 'active' || segmentList[9].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[9].segmentActive,'hideSegment': !segmentList[9].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[10]'\r\n                *ngIf=\"dynamicOptions[10]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- PREVIEW -->\r\n    </ps-form-step>\r\n</ps-template-stepper>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-multi-outlet-multi-outlet-module~pages-visa-request-visa-request-module-es5.js.map