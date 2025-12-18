(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qibla-direction-qibla-direction-module"], {
    /***/
    "2ery":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ery(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-screen>\n    <ps-action-image class=\"inline-loading-image\" *ngIf=\"!options.disableLoading && spinner\"\n        [options]=\"actionImageOptions\">\n    </ps-action-image>\n    <ng-content>\n    </ng-content>\n    <ng-container psFooter>\n        <ng-content select=[footer]></ng-content>\n        <ps-button-cancel (click)=\"onFooterClick()\" [id]=\"id + 'temp_btn_cancel'\" [options]=\"cancelOptions\">\n        </ps-button-cancel>\n\n    </ng-container>\n</ps-template-screen>";
      /***/
    },

    /***/
    "DTk4":
    /*!***************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function DTk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS12aWV3LnRlbXBsYXRlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "FHtE":
    /*!***************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.module.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: PsComplexLandmarkCompassComponentModule */

    /***/
    function FHtE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexLandmarkCompassComponentModule", function () {
        return PsComplexLandmarkCompassComponentModule;
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


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */
      "yvgy");
      /* harmony import */


      var _ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-complex-landmark-compass.component */
      "mlJC");

      var PsComplexLandmarkCompassComponentModule = /*#__PURE__*/_createClass(function PsComplexLandmarkCompassComponentModule() {
        _classCallCheck(this, PsComplexLandmarkCompassComponentModule);
      });

      PsComplexLandmarkCompassComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLandmarkCompassComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_4__["PsSelectLookupOptionListComponentModule"]],
        exports: [_ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLandmarkCompassComponent"]],
        entryComponents: [_ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLandmarkCompassComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsComplexLandmarkCompassComponentModule);
      /***/
    },

    /***/
    "FQ9l":
    /*!********************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: PsTemplateViewModule */

    /***/
    function FQ9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateViewModule", function () {
        return PsTemplateViewModule;
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


      var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ps-template-screen/ps-template-screen.template.module */
      "63Vm");
      /* harmony import */


      var _ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ps-template-view.template */
      "RkAu");

      var PsTemplateViewModule = /*#__PURE__*/_createClass(function PsTemplateViewModule() {
        _classCallCheck(this, PsTemplateViewModule);
      });

      PsTemplateViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"], _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateScreenPageModule"]],
        declarations: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        exports: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        entryComponents: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], PsTemplateViewModule);
      /***/
    },

    /***/
    "RkAu":
    /*!*************************************************************************************!*\
      !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.ts ***!
      \*************************************************************************************/

    /*! exports provided: PsTemplateView */

    /***/
    function RkAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsTemplateView", function () {
        return PsTemplateView;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-template-view.template.html */
      "2ery");
      /* harmony import */


      var _ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-template-view.template.scss */
      "DTk4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../psServices/Event/event.service */
      "r40+");
      /* harmony import */


      var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ps-template-base/ps-template-base.page */
      "uqA0");

      var PsTemplateView = /*#__PURE__*/function (_ps_template_base_ps_) {
        // End Richie
        function PsTemplateView(events) {
          var _this;

          _classCallCheck(this, PsTemplateView);

          _this = _callSuper(this, PsTemplateView);
          _this.events = events;
          _this.cancelOptions = {
            labelKey: 'cancel_key',
            group: _this.options.group
          };
          _this.spinner = false;
          _this.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
          }; // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument

          _this.reqStartEvent = events.subscribe('network:request:started', function (time) {
            _this.spinner = true;
          });
          _this.reqCompletEvent = events.subscribe('network:request:completed', function (time) {
            _this.spinner = false;
          });
          return _this;
        }

        _inherits(PsTemplateView, _ps_template_base_ps_);

        return _createClass(PsTemplateView, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.options.requestObject = this.options.requestObject ? this.options.requestObject : {};

            if (this.options.group) {
              this.commonProv.setFormData(this.options.group, this.options.requestObject);
            }
          }
        }, {
          key: "onFooterClick",
          value: function onFooterClick() {
            if (document.getElementsByTagName('ion-modal')[0] !== undefined) {
              document.getElementsByTagName('ion-modal')[0].dismiss();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // modified by Richie #TP 1105083
            _superPropGet(PsTemplateView, "ngOnDestroy", this, 3)([]);

            if (this.reqStartEvent) {
              this.reqStartEvent.unsubscribe();
            }

            if (this.reqCompletEvent) {
              this.reqCompletEvent.unsubscribe();
            }
          }
        }]);
      }(_ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__["PsTemplateBasePage"]);

      PsTemplateView.ctorParameters = function () {
        return [{
          type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"]
        }];
      };

      PsTemplateView.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsTemplateView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-view',
        template: _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"]])], PsTemplateView);
      /***/
    },

    /***/
    "UdmB":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/qibla-direction/qibla-direction.module.ts ***!
      \*****************************************************************/

    /*! exports provided: QiblaDirectionPageModule */

    /***/
    function UdmB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QiblaDirectionPageModule", function () {
        return QiblaDirectionPageModule;
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


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_landmark_compass_ps_complex_landmark_compass_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.module */
      "FHtE");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-components.module */
      "dqXS");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */
      "FQ9l");
      /* harmony import */


      var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/shared.module */
      "rlZq");
      /* harmony import */


      var _qibla_direction_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./qibla-direction.page */
      "n+wQ");

      var routes = [{
        path: '',
        component: _qibla_direction_page__WEBPACK_IMPORTED_MODULE_7__["QiblaDirectionPage"]
      }];

      var QiblaDirectionPageModule = /*#__PURE__*/_createClass(function QiblaDirectionPageModule() {
        _classCallCheck(this, QiblaDirectionPageModule);
      });

      QiblaDirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"], src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateViewModule"], src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_landmark_compass_ps_complex_landmark_compass_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexLandmarkCompassComponentModule"]],
        declarations: [_qibla_direction_page__WEBPACK_IMPORTED_MODULE_7__["QiblaDirectionPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], QiblaDirectionPageModule);
      /***/
    },

    /***/
    "Vf1Y":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.scss ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vf1Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWxhbmRtYXJrLWNvbXBhc3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "dI5s":
    /*!***************************************************************************!*\
      !*** ./src/app/commonSRC/psServices/landmark-compass/landmark-compass.ts ***!
      \***************************************************************************/

    /*! exports provided: LandmarkCompassService */

    /***/
    function dI5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandmarkCompassService", function () {
        return LandmarkCompassService;
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


      var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/device-orientation/ngx */
      "aaCY");
      /* harmony import */


      var _geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../geolocation/geolocation.service */
      "cHGM");
      /* harmony import */


      var _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../logger/logger.service */
      "DFXC");

      var LandmarkCompassService = /*#__PURE__*/function () {
        function LandmarkCompassService(deviceOrientation, geolocationService, logger) {
          _classCallCheck(this, LandmarkCompassService);

          this.deviceOrientation = deviceOrientation;
          this.geolocationService = geolocationService;
          this.logger = logger;
          this.deviceAngle = 0;
          this.deviceLocation = {
            longitude: 35,
            latitude: 33
          };
          this._subscriptions = {};
        }

        return _createClass(LandmarkCompassService, [{
          key: "radToDeg",
          value: function radToDeg(angleInRad) {
            return angleInRad * 180 / Math.PI;
          }
        }, {
          key: "degToRad",
          value: function degToRad(angleInDeg) {
            return angleInDeg * Math.PI / 180;
          }
        }, {
          key: "getDistance",
          value: function getDistance(coordinates) {
            // alert(this.deviceLocation.latitude+","+this.deviceLocation.longitude);
            var R = 6371; // Radius of the earth in km

            var dLat = this.degToRad(coordinates.latitude - this.deviceLocation.latitude);
            var dLon = this.degToRad(coordinates.longitude - this.deviceLocation.longitude);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.degToRad(this.deviceLocation.latitude)) * Math.cos(this.degToRad(coordinates.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km

            return d;
          }
        }, {
          key: "subscribe",
          value: function subscribe() {
            var _this2 = this;

            this._subscriptions.watchHeading = this.deviceOrientation.watchHeading().subscribe(function (orientation) {
              _this2.deviceAngle = orientation.magneticHeading;
            }, function (error) {
              _this2.logger.log(error);
            });
            this.geolocationService.getCachedCoordinates().then(function () {
              _this2._subscriptions.watchPosition = _this2.geolocationService.watchUserPosition().subscribe(function (location) {
                if (location.coords) {
                  _this2.deviceLocation.latitude = location.coords.latitude;
                  _this2.deviceLocation.longitude = location.coords.longitude;
                }
              }, function (error) {
                _this2.logger.log(error);
              });
            }); // window.addEventListener('deviceorientation', this.processEvent, true);
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            if (this._subscriptions.watchHeading !== undefined) {
              this._subscriptions.watchHeading.unsubscribe();
            }

            window.removeEventListener('deviceorientation', this.processEvent);
          }
        }, {
          key: "getLandmarkAngle",
          value: function getLandmarkAngle(coords) {
            if (!coords) {
              return;
            }

            var Xq = coords.longitude;
            var Yq = coords.latitude;
            var Xm = this.deviceLocation.longitude;
            var Ym = this.deviceLocation.latitude;
            var a2 = Math.atan(Math.abs(Xm - Xq) / Math.abs(90 - Yq));
            var b = Math.atan(Math.abs(Yq - 90) / Math.abs(Xq - Xm));
            var b1 = Math.atan(Math.abs(Yq - Ym) / Math.abs(Xq - Xm));
            var b2 = Math.abs(b1 - b);
            var c = 180 - this.radToDeg(a2 + b2);
            var result = c;

            if (Xq < Xm) {
              result = -result;
            }

            if (Yq > Ym) {
              result = 180 - result;
            }

            return result;
          }
        }, {
          key: "trueAngle",
          value: function trueAngle(coords) {
            var landmarkAngle = this.getLandmarkAngle(coords);
            var result = landmarkAngle - this.deviceAngle;

            if (result <= -180) {
              result = result + 360;
            }

            return result;
          }
        }, {
          key: "processEvent",
          value: function processEvent(event) {
            var elem = document.getElementsByClassName('direction-n');
            window.addEventListener('deviceorientation', function (e) {
              // remember to use vendor-prefixed transform property
              elem['style'].transform = 'rotateZ(' + (e.alpha - 180) + 'deg) ' + 'rotateX(' + e.beta + 'deg) ' + 'rotateY(' + -e.gamma + 'deg)';
            });
          }
        }]);
      }();

      LandmarkCompassService.ctorParameters = function () {
        return [{
          type: _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceOrientation"]
        }, {
          type: _geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]
        }, {
          type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]
        }];
      };

      LandmarkCompassService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceOrientation"], _geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"], _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])], LandmarkCompassService);
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
            var _this3 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this3.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this4 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this4.disableForm(_this4.baseFormGroup);

                _this4.isPageDisabled = true;
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
    "iumF":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iumF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"landmark-icon-main\">\n</div>\n<ps-label class=\"landmark-compass-title\" [options]=\"options.lblOptions\"></ps-label>\n<div class=\"landmark-icon-arrow\">\n\t<ps-action-icon [options]=\"landmarkOptions\" class=\"important-text-color\"></ps-action-icon>\n</div>\n<div class=\"landmark-compass-wrapper\">\n\t<div class=\"compass-background\" [style.transform]=\"'rotate(' + deviceAngle + 'deg)'\">\n\t\t<!-- Compass Directions -->\n\t\t<div class=\"primary-text-color direction direction-n\">\n\t\t\t<ps-label [options]=\"northOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-ne\">\n\t\t\t<ps-label [options]=\"northEastOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"primary-text-color direction direction-e\">\n\t\t\t<ps-label [options]=\"eastOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-se\">\n\t\t\t<ps-label [options]=\"southEastOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"primary-text-color direction direction-s\">\n\t\t\t<ps-label [options]=\"southOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-sw\">\n\t\t\t<ps-label [options]=\"southWestOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"primary-text-color direction direction-w\">\n\t\t\t<ps-label [options]=\"westOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-nw\">\n\t\t\t<ps-label [options]=\"northWestOptions\"></ps-label>\n\t\t</div>\n\t\t<!-- Landmark Icon -->\n\t\t<div class=\"landmark-icon-wrapper\">\n\t\t\t<div class=\"primary-text-color direction landmark-compass-icon-arrow\">\n\t\t\t\t<ps-action-icon [options]=\"landmarkArrowOptions\"></ps-action-icon>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"landmark-icon-wrapper\" [ngStyle]=\"{'transform': 'rotateZ('+ landmarkAngle + 'deg)'}\">\n\t\t\t\t<div class=\"landmark-icon\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main-pointing-arrow\">\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t<!-- Landmark Icon -->\n\t\t<!-- <div class=\"landmark-icon-wrapper\" [ngStyle]=\"{'transform': 'rotateZ('+ landmarkAngle + 'deg)'}\">\n\t\t\t\t<div class=\"landmark-icon\" [ngStyle]=\"{'transform': 'translateX(-50%) rotate('+ (-deviceAngle) + 'deg)'}\">\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"landmark-icon-arrow\">\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t<div class=\"main-pointing-arrow direction \">\n\t</div>\n\t</div>\n\t<div class=\"compass-inner-circle\">\n\t\t<!-- <ps-action-icon [options]=\"iconOptions\" class=\"device-pointer\" psIcon *ngIf=\"iconOptions?.iconName\">\n\t\t\t</ps-action-icon> -->\n\t\t<!-- <ion-icon name=\"logo-twitter\" class=\" compass-arrow\" ></ion-icon> -->\n\t</div>\n</div>";
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
    "mlJC":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: PsComplexLandmarkCompassComponent */

    /***/
    function mlJC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexLandmarkCompassComponent", function () {
        return PsComplexLandmarkCompassComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_landmark_compass_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-landmark-compass.component.html */
      "iumF");
      /* harmony import */


      var _ps_complex_landmark_compass_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-landmark-compass.component.scss */
      "Vf1Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psServices_landmark_compass_landmark_compass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/landmark-compass/landmark-compass */
      "dI5s");

      var PsComplexLandmarkCompassComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexLandmarkCompassComponent(commonProv, logger, landmarkCompassService) {
          var _this5;

          _classCallCheck(this, PsComplexLandmarkCompassComponent);

          _this5 = _callSuper(this, PsComplexLandmarkCompassComponent, [commonProv, logger]);
          _this5.commonProv = commonProv;
          _this5.logger = logger;
          _this5.landmarkCompassService = landmarkCompassService;
          _this5.landmarkLoc = {
            latitude: 0,
            longitude: 0
          };
          _this5.iconOptions = {
            iconName: 'arrow-round-up'
          };
          _this5.landmarkArrowOptions = {
            iconName: 'compass-arrow'
          };
          _this5.landmarkOptions = {
            iconName: 'remove'
          };
          _this5.landmarkFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          return _this5;
        }

        _inherits(PsComplexLandmarkCompassComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexLandmarkCompassComponent, [{
          key: "landmarkLocation",
          get: function get() {
            return this.landmarkLoc;
          },
          set: function set(value) {
            this.landmarkLoc = value;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.commonProv.isMobile()) {
              this.landmarkCompassService.subscribe();
            }

            this.northOptions = {
              labelKey: 'north_key',
              fcName: 'north',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate'
            };
            this.northEastOptions = {
              labelKey: 'ne_key',
              fcName: 'northEast',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate coordinates-upcase'
            };
            this.eastOptions = {
              labelKey: 'east_key',
              fcName: 'east',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate'
            };
            this.southEastOptions = {
              labelKey: 'se_key',
              fcName: 'southEast',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate coordinates-upcase'
            };
            this.southOptions = {
              labelKey: 'south_key',
              fcName: 'south',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate'
            };
            this.southWestOptions = {
              labelKey: 'sw_key',
              fcName: 'southWest',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate coordinates-upcase'
            };
            this.westOptions = {
              labelKey: 'west_key',
              fcName: 'west',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate'
            };
            this.northWestOptions = {
              labelKey: 'nw_key',
              fcName: 'northWest',
              group: this.landmarkFormGroup,
              psClass: 'transformRotate coordinates-upcase'
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.commonProv.isNativeMobile()) {
              this.landmarkCompassService.unsubscribe();
            }
          }
        }, {
          key: "deviceAngle",
          get: function get() {
            if (document.getElementsByClassName('transformRotate')[0] !== undefined) {
              document.getElementsByClassName('transformRotate')[0]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[1]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[2]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[3]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[4]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[5]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[6]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('transformRotate')[7]['style'].transform = 'rotate(' + this.landmarkCompassService.deviceAngle + 'deg)';
              document.getElementsByClassName('landmark-compass-icon-arrow')[0]['style'].transform = 'translateX(-50%) rotate(' + (this.landmarkCompassService.deviceAngle - this.landmarkAngle + 90) + 'deg)';
              document.getElementsByClassName('landmark-icon-wrapper')[0]['style'].transform = document.getElementsByClassName('transformRotate')[0]['style'].transform;
              document.getElementsByClassName('main-pointing-arrow')[0]['style']['transform-origin'] = 'top bottom';
            }

            return -this.landmarkCompassService.deviceAngle;
          }
        }, {
          key: "landmarkAngle",
          get: function get() {
            return this.landmarkCompassService.getLandmarkAngle(this.landmarkLocation);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsComplexLandmarkCompassComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: _commonSRC_psServices_landmark_compass_landmark_compass__WEBPACK_IMPORTED_MODULE_8__["LandmarkCompassService"]
        }];
      };

      PsComplexLandmarkCompassComponent.propDecorators = {
        landmarkLocation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['landmark-location']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexLandmarkCompassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-landmark-compass',
        template: _raw_loader_ps_complex_landmark_compass_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_landmark_compass_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], _commonSRC_psServices_landmark_compass_landmark_compass__WEBPACK_IMPORTED_MODULE_8__["LandmarkCompassService"]])], PsComplexLandmarkCompassComponent);
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
//# sourceMappingURL=pages-qibla-direction-qibla-direction-module-es5.js.map