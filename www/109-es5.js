(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109], {
    /***/
    "Qw6n":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qw6n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [ngClass]=\"{'colAcc' : options.showScannerIcon || custMode}\">\r\n    <ps-keyin-input [id]=\"id\" [options]=\"options\" (onPsChange)=\"onChangeEvent($event)\" (onPsEmpty)=\"onEmpty($event)\">\r\n    </ps-keyin-input>\r\n    <ps-action-icon [id]=\"'QrScannerIcon'\" *ngIf=\"options.showScannerIcon || custMode\" class=\"scanQrIcon\" [ngClass]=\"{'disableContent':isInReadOnlyScreen}\"\r\n        [options]=\"actionOption\" (onClick)=\"getScannedData(true)\"></ps-action-icon>\r\n</div>";
      /***/
    },

    /***/
    "UTjL":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsInputAccountNumberComponent */

    /***/
    function UTjL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInputAccountNumberComponent", function () {
        return PsInputAccountNumberComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_input_account_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-input-account-number.component.html */
      "Qw6n");
      /* harmony import */


      var _ps_input_account_number_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-input-account-number.component.scss */
      "v88X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */
      "BYmO");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");

      var PsInputAccountNumberComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        // public format: any = 2;
        // public accountLength: any = 8;
        function PsInputAccountNumberComponent(commonP, loggerP, omniPull, nav) {
          var _this;

          _classCallCheck(this, PsInputAccountNumberComponent);

          _this = _callSuper(this, PsInputAccountNumberComponent, [commonP, loggerP]);
          _this.omniPull = omniPull;
          _this.nav = nav;
          _this.getScannedQr = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.actionOption = {}; //   this.omniPull.getParamValOf('AccountsInputFormat', 'AccountAddRefLength').then((result) => {
          //     if (result.AccountsInputFormat) {
          //       this.format = result.AccountsInputFormat;
          //     }
          //     if (result.AccountAddRefLength) {
          //       this.accountLength = result.AccountAddRefLength;
          //     }
          //   }).catch((error) => { });

          if (_this.custMode) _this.options.showScannerIcon = true;
          return _this;
        }

        _inherits(PsInputAccountNumberComponent, _src_app_commonSRC_ps);

        return _createClass(PsInputAccountNumberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a; // don't remove ngOnInit() it's needed in 


            var operCustomization = this.common.returnOperCustomization();
            this.isInReadOnlyScreen = ((_a = operCustomization.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_10__["ConstantCommon"].FORM_READONLY)) === null || _a === void 0 ? void 0 : _a.IS_READONLY) == 1 ? true : false;

            if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].isNotNull(this.options)) {
              this.options.hideValueOnError = true;
            }

            this.actionOption = {
              iconName: 'qr_code_scanner',
              allowCust: true,
              group: this.options.group
            };
          }
        }, {
          key: "onChangeEvent",
          value: function onChangeEvent(val) {
            this.onPsChange.emit(val);
          }
        }, {
          key: "getScannedData",
          value: function getScannedData(buttonClicked) {
            var _this2 = this;

            if (!this.custMode) {
              // set force trigger true so that once account is scanned the validation will be triggered to apply the needed validation on account change
              if (this.options.forceTriggerChange == false) this.options.forceTriggerChange = true; // this.commonProv.presentLoading();

              this.commonProv.scanQRCode().then(function (result) {
                var _a, _b;

                if (result) {
                  result = JSON.parse(result);

                  _this2.commonProv.setValInsideNestedObj(_this2.options.fcName, (_a = result.AccountRef) === null || _a === void 0 ? void 0 : _a.split('-')[1], _this2.options.requestObject ? _this2.options.requestObject : {});

                  var data = Object.assign(Object.assign({}, result), {
                    accountNumber: (_b = result.AccountRef) === null || _b === void 0 ? void 0 : _b.split('-')[1]
                  });

                  _this2.getScannedQr.emit([data, buttonClicked]);
                } // this.commonProv.dismissLoading();

              })["catch"](function (error) {
                // this.commonProv.dismissLoading();
                _this2.logger.error('something went wrong', error);

                _this2.nav.navigateBackward();
              });
            }
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_5__["PsKeyinInputComponent"]);

      PsInputAccountNumberComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]
        }, {
          type: _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]
        }];
      };

      PsInputAccountNumberComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        getScannedQr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsInputAccountNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-account-number',
        template: _raw_loader_ps_input_account_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_account_number_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], _commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]])], PsInputAccountNumberComponent);
      /***/
    },

    /***/
    "v88X":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component.scss ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function v88X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1hY2NvdW50LW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=109-es5.js.map