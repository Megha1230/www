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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15], {
    /***/
    "+R6y":
    /*!************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: PsComplexCifAccountComponent */

    /***/
    function R6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexCifAccountComponent", function () {
        return PsComplexCifAccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_cif_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-cif-account.component.html */
      "/G9Y");
      /* harmony import */


      var _ps_complex_cif_account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-cif-account.component.scss */
      "lG59");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");

      var PsComplexCifAccountComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexCifAccountComponent(commonService, logger, omniPull) {
          var _this;

          _classCallCheck(this, PsComplexCifAccountComponent);

          _this = _callSuper(this, PsComplexCifAccountComponent, [commonService, logger]);
          _this.omniPull = omniPull;
          _this.cifValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.cifNumberOptions = {
            fcName: 'cifAccount',
            labelKey: 'cif_no_key',
            placeHolder: 'enter_cif_no_key'
          };
          return _this;
        }

        _inherits(PsComplexCifAccountComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexCifAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonProv.copyObject(this.cifNumberOptions, this.options);
            this.cifNumberOptions.forceTriggerChange = true;

            _superPropGet(PsComplexCifAccountComponent, "init", this, 3)([]);
          }
        }, {
          key: "onCifChange",
          value: function onCifChange(value) {
            var _a, _b, _c;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var cifNumber, requestData, result, cifDetails, _t2;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    cifNumber = this.options.group.controls[this.cifNumberOptions.fcName].value;

                    if (cifNumber) {
                      _context.n = 1;
                      break;
                    }

                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].presentFailureAlert(this.commonProv.translate('enter_value_before_proceed_key'), {
                      autoHide: true
                    });
                    return _context.a(2);

                  case 1:
                    requestData = {
                      commonParametersList: {
                        userCifNo: cifNumber
                      }
                    };
                    _context.p = 2;
                    _context.n = 3;
                    return this.omniPull.returnCIFDetails(requestData);

                  case 3:
                    result = _context.v;
                    cifDetails = (_b = (_a = result.data.result) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.cifDetails;

                    if (((_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.outputCode) === 0 && cifDetails && Object.keys(cifDetails).length > 0) {
                      this.cifValidated.emit(result.data);
                    } else {
                      this.clearCifField('invalid_cif_key');
                    }

                    _context.n = 5;
                    break;

                  case 4:
                    _context.p = 4;
                    _t2 = _context.v;
                    console.error('Error validating CIF:', _t2);
                    this.clearCifField('invalid_cif_key');

                  case 5:
                    return _context.a(2);
                }
              }, _callee, this, [[2, 4]]);
            }));
          }
          /**
           * Clears the CIF field and displays an error message
           * @param messageKey - Translation key for the error message (optional)
          */

        }, {
          key: "clearCifField",
          value: function clearCifField(messageKey) {
            this.options.group.controls[this.cifNumberOptions.fcName].setValue(null);

            if (messageKey) {
              src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].presentFailureAlert(this.commonProv.translate(messageKey));
            }
          }
          /**
           * Resets the CIF account field
          */

        }, {
          key: "resetCifField",
          value: function resetCifField() {
            this.clearCifField();
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"]);

      PsComplexCifAccountComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_4__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      PsComplexCifAccountComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cifValidated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsComplexCifAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-cif-account',
        template: _raw_loader_ps_complex_cif_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_cif_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_4__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], PsComplexCifAccountComponent);
      /***/
    },

    /***/
    "/7JZ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function _7JZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"payment_panel\">\n\n      <div *ngIf=\"enableRemittanceTransfer()\">\n        <ps-remittance [options]=\"remittanceOptions\"></ps-remittance>\n      </div>\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" #fromAccountRef [options]=\"fromAccountList\"\n        (onAccountChange)=\"onFromAccountChange($event)\"></ps-lookup-own-accounts>\n\n\n      <ps-lookup-own-accounts *ngIf=\"enableOwnAccountTransfer()\" id=\"'transferTo'+ id\" #toAccountRef\n        [options]=\"toaccountList\" (onAccountChange)=\"onToAccountChange($event)\"></ps-lookup-own-accounts>\n\n      <ps-complex-segment class=\"transfer-select-segment\" *ngIf=\"showSegment\" id=\"transferSegment\"\n        [options]=\"complexSegmentOptions\" (complexSegmentButtonClicked)=\"onClickSegment($event)\">\n\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n          <ps-container-panel [options]=\"toBenefPanelOptions\" id=\"to-beneficiary-details\" class=\"payment-segment-panel\">\n            <ps-lookup-beneficiaries-local #localBeneficiaryLookupComponentObj\n              *ngIf=\"enableLocalBeneficiary() && showBeneficiaryDropdown\" id=\"'localbeneficiarytransferTo'+ id\"\n              [options]=\"localBeneficiariesOptions\" (onBenificiaryChange)=\"localBeneficiaryChange($event)\">\n            </ps-lookup-beneficiaries-local>\n\n\n            <ps-lookup-beneficiaries-internal *ngIf=\"enableInternalBeneficiary() &&\n          showBeneficiaryDropdown\" id=\"'internalbeneficiarytransferTo'+\n              id\" #internalBeneficiaryLookupComponentObj [options]=\"internalBeneficiariesOptions\"\n              (onBenificiaryChange)=\"internalBeneficiaryChange($event)\">\n            </ps-lookup-beneficiaries-internal>\n\n\n            <ps-lookup-beneficiaries-international *ngIf=\"enableInternationalBeneficiary() &&\n          showBeneficiaryDropdown\" id=\"'internationalbeneficiarytransferTo'+ id\"\n              #internationalBeneficiaryLookupComponentObj [options]=\"internationalBeneficiariesOptions\"\n              (onBenificiaryChange)=\"internationalBeneficiaryChange($event)\">\n            </ps-lookup-beneficiaries-international>\n\n            <ps-lookup-beneficiaries-cash *ngIf=\"enableCashBeneficiary() &&\n            showBeneficiaryDropdown\" id=\"'cashtransferTo'+ id\" [options]=\"cashBeneficiariesOptions\"\n              (onBenificiaryChange)=\"cashBeneficiaryChange($event)\"></ps-lookup-beneficiaries-cash>\n\n            <ps-lookup-beneficiaries-bank-card *ngIf=\"enableBankCardBeneficiary() &&\n          showBeneficiaryDropdown\" id=\"'internalcardbeneficiarysettlementTo'+ id\"\n              #bankCardBeneficiaryLookupComponentObj [options]=\"bankCardBeneficiariesOptions\"\n              (onBenificiaryChange)=\"bankCardBeneficiaryChange($event)\">\n            </ps-lookup-beneficiaries-bank-card>\n\n            <ps-lookup-beneficiaries-local-card *ngIf=\"enableLocalCardBeneficiary() &&\n            showBeneficiaryDropdown\" id=\"'internalcardbeneficiarysettlementTo'+ id\"\n              #localCardBeneficiaryLookupComponentObj [options]=\"localCardBeneficiariesOptions\"\n              (onBenificiaryChange)=\"localCardBeneficiaryChange($event)\">\n            </ps-lookup-beneficiaries-local-card>\n          </ps-container-panel>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n          <ps-container-panel [options]=\"toOtherPanelOptions\" id=\"to-other-details\" class=\"payment-segment-panel\">\n            <div *ngIf=\"enableLocalBeneficiary()\">\n              <ps-banks [options]=\"banksOptions\" (onPsChange)=\"onBankChanged($event)\">\n              </ps-banks>\n\n              <ps-keyin-input id=\"branch_name\" [options]=\"branchOptions\"></ps-keyin-input>\n\n              <ps-input-varchar id=\"beneficiaryBvn\" [options]=\"beneficiaryBvnOptions\">\n              </ps-input-varchar>\n            </div>\n\n            <!-- AZDB-9168 - internal transfer by cif no -->\n            <div *ngIf=\"enableInternalBeneficiary()\">\n              <ps-select-radio class=\"radio-button\" [options]=\"transferFormatOptions\"\n                (onPsChange)=\"onTransferFormatChanged($event)\">\n              </ps-select-radio>\n              <ps-complex-cif-account [options]=\"cifAccountOptions\" (cifValidated)=\"onCifValidated($event)\">\n              </ps-complex-cif-account>\n               <div class=\"cif-account-lookup-container\" *ngIf=\"isCifValidated\">\n                <ps-lookup-own-accounts #toCifAccountObj [options]=\"cifAccountList\"\n                  (onAccountChange)=\"onCifAccountSelected($event)\">\n                </ps-lookup-own-accounts>\n              </div>\n            </div>\n            <!-- internal transfer by cif no -->\n\n            <div *ngIf=\"!enableCashBeneficiary() && !(enableBankCardBeneficiary() || enableLocalCardBeneficiary())\">\n              <ps-input-varchar *ngIf=\"enableInternationalBeneficiary()\" id=\"id\" [options]=\"swiftCodeOptions\"\n                (onPsChange)=\"onSwiftCodeChanged($event)\">\n              </ps-input-varchar>\n\n\n              <ps-input-account-number #accountNb (getScannedQr)=\"getScannedData($event)\"\n                [options]=\"toOtherAccountNumberOptions\" (onPsChange)=\"onAccountNumbChanged($event)\"\n                (onPsEmpty)=\"onEmptyAccountNumb($event)\">\n              </ps-input-account-number>\n\n              <ps-input-varchar *ngIf=\"isCifFormatSelected\" id=\"accountName\" [options]=\"accountNameOptions\">\n              </ps-input-varchar>\n\n              <ps-input-varchar id=\"benefName\"\n                *ngIf=\" (enableRemittanceTransfer() && (enableLocalBeneficiary() || enableInternationalBeneficiary()))\"\n                [options]=\"benefNameOptions\"><!--enableInternationalBeneficiary() ||-->\n              </ps-input-varchar>\n\n              <ps-input-varchar id=\"recipientName\" *ngIf=\"enableLocalBeneficiary() || enableInternationalBeneficiary()\"\n                [options]=\"recipientNameOptions\">\n              </ps-input-varchar>\n\n              <ps-input-display-only *ngIf=\"enableInternalBenef\" [options]=\"beneficiaryOptions\"></ps-input-display-only>\n\n              <ps-dropdown-currencies\n                *ngIf=\"enableLocalBeneficiary() || enableInternationalBeneficiary() || enableInternalBeneficiary()\"\n                id=\"id\" [options]=\"benefCurrencyOptions\" (onPsChange)=\"onBenefCurrencyChanged($event)\">\n              </ps-dropdown-currencies>\n\n\n              <!-- <ps-select-toggle [id]=\"'showPersonalDet'\" [options]=\"saveBenefToggleOptions\"\n                (onPsChange)=\"onSaveBenefChange($event)\">\n              </ps-select-toggle> -->\n            </div>\n            <div *ngIf=\"enableCashBeneficiary()\">\n              <ps-input-varchar id=\"benefName\" [options]=\"benefNameOptions\">\n              </ps-input-varchar>\n\n              <ps-complex-id-details id=\"complex_id_details1\" [options]=\"complexIdDetailsOptions\">\n              </ps-complex-id-details>\n\n              <ps-entity-phone-number [options]=\"benefPhoneOptions\"></ps-entity-phone-number>\n\n            </div>\n\n            <div *ngIf=\"enableBankCardBeneficiary() || enableLocalCardBeneficiary()\">\n              <div *ngIf=\"enableLocalCardBeneficiary()\">\n                <ps-banks [options]=\"banksOptions\" (onPsChange)=\"onBankChanged($event)\">\n                </ps-banks>\n                <ps-keyin-input id=\"branch_name\" [options]=\"branchOptions\"></ps-keyin-input>\n              </div>\n              <ps-keyin-input id=\"beneficiary_name\" [options]=\"beneficiaryNameOptions\"></ps-keyin-input>\n              <ps-input-card-number [options]=\"cardNumberOptions\"></ps-input-card-number>\n              <!-- <ps-select-toggle [id]=\"'showPersonalDet'\" [options]=\"saveBenefToggleOptions\"\n                (onPsChange)=\"onSaveBenefChange($event)\">\n              </ps-select-toggle> -->\n            </div>\n            <div\n              *ngIf=\"enableLocalBeneficiary()  || enableInternalBeneficiary() || enableInternationalBeneficiary() || enableLocalCardBeneficiary() || enableBankCardBeneficiary() || enableCashBeneficiary()  \">\n              <ps-select-toggle [id]=\"'showPersonalDet'\" [options]=\"saveBenefToggleOptions\"\n                (onPsChange)=\"onSaveBenefChange($event)\"></ps-select-toggle>\n            </div>\n          </ps-container-panel>\n\n          <ps-container-panel [options]=\"panelOptionsBenfBankDetails\"\n            *ngIf=\"!enableRemittanceTransfer() && enableInternationalBeneficiary()\" id=\"bank_benef_panel\">\n            <!--AIBIRQI250064 clone from Makki: PBSDB240042 - Adding fields on the International Transfer screen-->\n\n            <ps-complex-beneficiary-bank-details [options]='bankDetailsOptions'></ps-complex-beneficiary-bank-details>\n            <!--End AIBIRQI250064 clone from PBSDB240042 - Adding fields on the International Transfer screen-->\n          </ps-container-panel>\n        </ps-content-segment>\n\n      </ps-complex-segment>\n\n\n\n      <ps-complex-exchange #exchangeRef id=\"exchange\" [options]=\"complexExchangeOptions\"></ps-complex-exchange>\n\n      <ps-purpose *ngIf=\"showPurpposeSubPurpose\" id=\"purpose\" [options]=\"purposeOptionsDDLB\"></ps-purpose>\n\n      <ps-input-free-text *ngIf=\"!showPurpposeSubPurpose\" id=\"'purpose' + id\" [options]=\"purposeOptions\">\n      </ps-input-free-text>\n\n    </ps-container-panel>\n    <!-- Attachment Panel-->\n    <ps-container-panel [options]=\"attachmentPanelOptions\" id=\"attachment_panel\">\n      <ps-file-upload-bs id=\"ps-complex-file-upload\" [options]=\"attachmentUploadOptions\"></ps-file-upload-bs>\n    </ps-container-panel>\n    <!-- End of Attachment Panel -->\n  </ps-form-step>\n  <ps-form-step step2 *ngIf=\"toAccountComponent.scheduler\" [id]=\"step2Name\">\n    <ng-container *psStep=\"'step2'\">\n      <ps-complex-recurring-scheduler [options]=\"schedulerOptions\" (onPsChange)=\"onChangeSchedule($event)\">\n      </ps-complex-recurring-scheduler>\n    </ng-container>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "/G9Y":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _G9Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-input-numeric id=\"'userCifNo' + id\" [options]=\"cifNumberOptions\" (onPsChange)=\"onCifChange($event)\"></ps-input-numeric>\n\n";
      /***/
    },

    /***/
    "4Hic":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hic(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <div *ngIf=\"options?.itemList?.length > 0\">\n    <ps-container-lookup-option [id]=\"'swift-account-list-'+ id\"[options]=\"containerLookUpOptions\" (clickedCard)=\"updateCard($event)\" [itemCard]=\"item\"\n    *ngFor=\"let item of options.itemList\"></ps-container-lookup-option>\n </div>\n ";
      /***/
    },

    /***/
    "Nnln":
    /*!****************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-interfaces.ts ***!
      \****************************************************************************************/

    /*! exports provided: MediaSourceExposed, PaymentSegment, Periodacity */

    /***/
    function Nnln(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaSourceExposed", function () {
        return MediaSourceExposed;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentSegment", function () {
        return PaymentSegment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Periodacity", function () {
        return Periodacity;
      }); // import { IOcGoodsGoodsCategoriesRequest } from './ps-common-bussiness-interfaces';


      var MAPTYPES;

      (function (MAPTYPES) {
        MAPTYPES["CDM"] = "C";
        MAPTYPES["ATM"] = "A";
        MAPTYPES["BRANCH"] = "B";
      })(MAPTYPES || (MAPTYPES = {}));

      var MediaSourceExposed = /*#__PURE__*/_createClass(function MediaSourceExposed() {
        _classCallCheck(this, MediaSourceExposed);
      });

      var PaymentSegment;

      (function (PaymentSegment) {
        PaymentSegment["BENEFICIARY"] = "B";
        PaymentSegment["OTHER"] = "O";
      })(PaymentSegment || (PaymentSegment = {}));

      var Periodacity;

      (function (Periodacity) {
        Periodacity["SINGLE"] = "S";
        Periodacity["DAILY"] = "D";
        Periodacity["WEEKLY"] = "W";
        Periodacity["MONTHLY"] = "M";
        Periodacity["YEARLY"] = "Y";
        Periodacity["FORTNIGHTLY"] = "F";
      })(Periodacity || (Periodacity = {}));
      /***/

    },

    /***/
    "Q4uH":
    /*!************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q4uH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1zd2lmdC1hY2NvdW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "lG59":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lG59(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWNpZi1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "uV3x":
    /*!***********************************************!*\
      !*** ./src/app/pages/payment/payment.page.ts ***!
      \***********************************************/

    /*! exports provided: PaymentPage */

    /***/
    function uV3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
        return PaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payment.page.html */
      "/7JZ");
      /* harmony import */


      var _payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payment.page.scss */
      "wxfD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component */
      "YaLh");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-local-beneficiary/ps-local-beneficiary.component */
      "jXvJ");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-exchange/ps-complex-exchange.component */
      "/M2N");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_keyin_input_ps_input_account_number_ps_input_account_number_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-account-number/ps-input-account-number.component */
      "UTjL");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_swift_account_list_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component */
      "yh/l");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-interfaces */
      "Nnln");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component */
      "Zrkw");
      /* harmony import */


      var _commonBussinessSRC_psComponents_ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component */
      "ZI0R");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./../../commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-cif-account/ps-complex-cif-account.component */
      "+R6y");

      var PaymentPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function PaymentPage(commonProvider, logger, nav, omniPull) {
          var _this2;

          _classCallCheck(this, PaymentPage);

          var _a, _b;

          _this2 = _callSuper(this, PaymentPage);
          _this2.commonProvider = commonProvider;
          _this2.logger = logger;
          _this2.nav = nav;
          _this2.omniPull = omniPull;
          /** local variables START */

          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this2.exchangeRate = '0.00';
          _this2.amountInToAccountAmount = '0.00';
          _this2.ownAccountVO = {};
          _this2.toBeneficiarySegment = 'to_benef';
          _this2.showPurpposeSubPurpose = false;
          _this2.fromMultiLoader = false;
          _this2.isCifValidated = false;
          _this2.step2Name = "payment_step2";
          _this2.defaultSegment = {};
          _this2.stepperOptions = {
            stepperName: 'payment_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['payment_step1'],
            group: _this2.formGroup,
            submitOptions: {
              group: _this2.formGroup,
              enableNavigateBack: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].STOP_STANDING_ORDER || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].APP_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CORPORATE_APP_ID && src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].isChecker && ((_b = (_a = _this2.nav.getAllParams()) === null || _a === void 0 ? void 0 : _a.ScreenVO) === null || _b === void 0 ? void 0 : _b.status) == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].TODO_STATUS_PENDING ? true : false,
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_13__["PsCommonBusinessSettings"].serviceUrl.fundstransferEndPoint,
              postCallFunction: {
                func: function func(response) {
                  var _this3 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this3.executionClass.navigateToBeneficiary(response));
                  });
                },
                executionClass: _this2,
                params: [_this2]
              },
              //Commented by Marina , check TP comment 1571249
              //Local Credit Card - Save Beneficiary - Beneficiary not saved  failureCallFunction: {
              //   func(response) {
              //     return new Promise<any>((resolve, reject) => {
              //       resolve(this.executionClass.navigateToBeneficiary(response));
              //     });
              //   },
              //   executionClass: this,
              //   params: [this]
              // },
              preCallFunction: {
                func: function func(response) {
                  var _this4 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this4.executionClass.updateAccountVO(response));
                  });
                },
                executionClass: _this2,
                params: [_this2]
              }
            },
            requestObject: _this2.ownAccountVO
          };
          _this2.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'own_account_transfer_key',
            iconName: 'document',
            expanded: true
          };
          _this2.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'payment_details_key',
            iconName: 'crop',
            expanded: true
          };
          _this2.panelOptions2 = {
            isExpandable: true,
            labelKey: 'dynamic_fields_key',
            iconName: 'crop',
            expanded: true
          };
          _this2.attachmentPanelOptions = {
            isExpandable: true,
            labelKey: 'attachments_key',
            iconName: 'document',
            expanded: false
          };
          _this2.attachmentUploadOptions = {
            multiple: true,
            fcName: 'uploadedFiles',
            group: _this2.formGroup
          }; //Added by ghada, IMAL-8582 adding a panels under each segment for enabling the option of adding dynamic fields separately under each one

          _this2.toBenefPanelOptions = {
            isExpandable: false,
            labelKey: 'to_beneficiary_transfer_details_key',
            iconName: 'crop',
            expanded: true
          };
          _this2.toOtherPanelOptions = {
            isExpandable: false,
            labelKey: 'to_other_transfer_details_key',
            iconName: 'crop',
            expanded: true
          };
          _this2.panelOptionsBenfBankDetails = {
            isExpandable: true,
            labelKey: 'beneficiary_bank_details_key',
            iconName: '',
            expanded: true
          };
          _this2.fromAccountList = {
            labelKey: 'from_account_key',
            placeHolder: 'select_from_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this2.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'fromAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this2.ownAccountVO
          };
          _this2.toaccountList = {
            labelKey: 'to_account_key',
            placeHolder: 'select_to_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this2.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toAccount',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this2.ownAccountVO
          };
          _this2.currenciesOptions = {
            labelKey: 'currency_key',
            placeHolder: 'select_currency_key',
            fcName: 'currency',
            group: _this2.formGroup,
            currencySource: 'to'
          };
          _this2.transferFormatOptions = {
            group: _this2.formGroup,
            fcName: 'transferFormat',
            listOfOptions: [{
              itemValue: '0',
              description: "By Account",
              checked: false
            }, {
              itemValue: '1',
              description: "By CIF",
              checked: true
            }]
          };
          _this2.cifAccountOptions = {
            labelKey: 'cif_key',
            placeHolder: 'enter_cif_key',
            fcName: 'cifAccount',
            group: _this2.formGroup
          };
          _this2.cifAccountList = {
            labelKey: 'to_account_key',
            placeHolder: 'select_to_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this2.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'toCif',
            accountType: 'G',
            fromTo: 'to',
            requestObject: _this2.ownAccountVO
          };
          _this2.amountOptions = {
            labelKey: 'amount_key',
            placeHolder: 'enter_amount_key',
            fcName: 'amountInFromAccount',
            group: _this2.formGroup
          };
          _this2.complexExchangeOptions = {
            editableMode: false,
            showToCurrencyOptions: true,
            enableTwoWayExchange: true,
            fromAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'currency_key',
                labelKey: 'currency_key',
                fcName: 'fromCurrency',
                group: _this2.formGroup,
                currencySource: 'from' //added by ghada, AZDB-5475 as requested by service team to differentiate between fromCurrency/toCurrency

              },
              amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                group: _this2.formGroup,
                type: 'amount',
                decimalPoints: 2
              },
              requestObject: _this2.ownAccountVO
            },
            toAmountOptions: {
              currency: '',
              currenciesOptions: {
                placeHolder: 'exchange_currency_key',
                labelKey: 'exchange_currency_key',
                fcName: 'currency',
                group: _this2.formGroup,
                currencySource: 'to'
              },
              amountOptions: {
                labelKey: 'exchange_amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'toAmount',
                group: _this2.formGroup,
                type: 'amount',
                decimalPoints: 2
              },
              requestObject: _this2.ownAccountVO
            },
            requestObject: _this2.ownAccountVO,
            group: _this2.formGroup
          };
          _this2.schedulerOptions = {
            fcName: 'psScheduler',
            group: _this2.formGroup,
            periodaicityInputCountOptions: {
              fcName: 'noOfPayments'
            },
            requestObject: _this2.ownAccountVO
          };
          _this2.localBeneficiariesOptions = {
            labelKey: 'to_beneficiary_key',
            placeHolder: 'select_to_beneficiary_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__["PsLocalBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'toBeneficiary',
            requestObject: _this2.ownAccountVO
          };
          _this2.internalBeneficiariesOptions = {
            labelKey: 'to_beneficiary_key',
            placeHolder: 'select_to_beneficiary_key',
            component: _commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_20__["PsInternalBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'toAccount',
            requestObject: _this2.ownAccountVO
          };
          _this2.internationalBeneficiariesOptions = {
            labelKey: '',
            placeHolder: 'select_to_beneficiary_key',
            component: _commonBussinessSRC_psComponents_ps_beneficiary_ps_international_beneficiary_ps_international_beneficiary_component__WEBPACK_IMPORTED_MODULE_21__["PsInternationalBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'toBeneficiary',
            requestObject: _this2.ownAccountVO
          };
          _this2.cashBeneficiariesOptions = {
            labelKey: 'beneficiary_name_key',
            placeHolder: 'select_beneficiary_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_cash_transfer_ps_cash_transfer_component__WEBPACK_IMPORTED_MODULE_6__["PsCashTransferComponent"],
            group: _this2.formGroup,
            fcName: 'toBeneficiary',
            requestObject: _this2.ownAccountVO
          };
          _this2.toSwiftList = {
            labelKey: 'to_swift_key',
            placeHolder: 'select_to_swift_key',
            component: src_app_commonBussinessSRC_psComponents_ps_swift_account_list_ps_swift_account_list_component__WEBPACK_IMPORTED_MODULE_10__["PsSwiftAccountListComponent"],
            currency: 'USD',
            group: _this2.formGroup,
            fcName: 'toSwift'
          };
          _this2.bankCardBeneficiariesOptions = {
            labelKey: 'to_card_beneficiary_key',
            placeHolder: 'select_to_beneficiary_key',
            component: _commonBussinessSRC_psComponents_ps_beneficiary_ps_internal_beneficiary_ps_internal_beneficiary_component__WEBPACK_IMPORTED_MODULE_20__["PsInternalBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'toBeneficiary',
            requestObject: _this2.ownAccountVO
          };
          _this2.localCardBeneficiariesOptions = {
            labelKey: 'to_beneficiary_key',
            placeHolder: 'select_to_beneficiary_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_local_beneficiary_ps_local_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__["PsLocalBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'toBeneficiary',
            requestObject: _this2.ownAccountVO
          };
          _this2.purposeOptionsDDLB = {
            categoryLabelKey: 'purpose_key',
            categoryPlaceholderKey: 'select_purpose_key',
            categoryFcName: 'purpose',
            subCategoryLabelKey: 'sub_purpose_key',
            subCategoryPlaceholderKey: 'select_sub_purpose_key',
            subCategoryFcName: 'subPurpose',
            group: _this2.formGroup,
            requestObject: _this2.ownAccountVO
          };
          _this2.purposeOptions = {
            labelKey: 'purpose_key',
            placeHolder: 'add_transfer_purpose_key',
            group: _this2.formGroup,
            fcName: 'purposeTxtDesc'
          };
          _this2.toAccountComponent = {};
          _this2.saveBenefToggleOptions = {
            labelKey: 'save_beneficiary_key',
            placeHolder: 'save_beneficiar_key',
            group: _this2.formGroup,
            fcName: 'saveBenef',
            psClass: 'toggleColor'
          };
          _this2.toOtherAccountNumberOptions = {
            fcName: 'accountNumber',
            labelKey: 'iban_account_no_key',
            placeHolder: 'enter_account_no_iban_key',
            group: _this2.formGroup,
            forceTriggerChange: true,
            requestObject: _this2.ownAccountVO
          };
          _this2.complexSegmentOptions = {
            group: _this2.formGroup,
            segmentOptions: {
              fcName: 'beneficiarySegment',
              segmentList: [{
                selected: true,
                itemValue: 'to_benef',
                description: _this2.commonProv.translate('to_beneficiary_seg_key')
              }, {
                selected: true,
                itemValue: 'to_others',
                description: _this2.commonProv.translate('to_other_key')
              }],
              defaultSegment: _this2.defaultSegment,
              group: _this2.formGroup
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['beneficiary_segment', 'other_segment']
            }
          };
          _this2.banksOptions = {
            categoryLabelKey: 'bank_key',
            categoryPlaceholderKey: 'select_bank_key',
            categoryFcName: 'bank',
            subCategoryLabelKey: 'branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: _this2.formGroup,
            requestObject: _this2.ownAccountVO
          };
          _this2.swiftCodeOptions = {
            fcName: 'swiftCode',
            labelKey: 'bic_swift_code_key',
            placeHolder: 'enter_swift_code_key',
            group: _this2.formGroup
          };
          _this2.benefCurrencyOptions = {
            fcName: 'benefCurrency',
            group: _this2.formGroup,
            labelKey: 'beneficiary_currency_key',
            placeHolder: 'select_currency_key',
            currencySource: 'to'
          };
          _this2.remittanceOptions = {
            categoryLabelKey: 'remittance_category_key',
            categoryPlaceholderKey: 'select_remittance_category_key',
            categoryFcName: 'remittanceCategory',
            subCategoryLabelKey: 'remittance_type_key',
            subCategoryPlaceholderKey: 'select_remittance_type_key',
            subCategoryFcName: 'remittanceType',
            group: _this2.formGroup,
            requestObject: _this2.ownAccountVO
          };
          _this2.benefNameOptions = {
            fcName: 'benefName',
            labelKey: 'to_beneficiary_key',
            placeHolder: 'add_beneficiary_full_name_key',
            group: _this2.formGroup
          };
          _this2.recipientNameOptions = {
            fcName: 'recipientName',
            labelKey: 'recipient_name_key',
            placeHolder: 'add_recipient_name_key',
            group: _this2.formGroup
          };
          _this2.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this2.formGroup
            },
            idNumberOptions: {
              labelKey: 'id_number_key',
              placeHolder: 'enter_id_number_key',
              fcName: 'idNumber',
              group: _this2.formGroup
            },
            dateExpiryOptions: {
              labelKey: 'expiry_date_key',
              placeHolder: 'enter_expiry_date_key',
              fcName: 'idExpiryDate',
              group: _this2.formGroup
            },
            countriesOptions: {
              placeHolder: 'country_of_issuance_key',
              labelKey: 'country_of_issuance_key',
              fcName: 'idCountry',
              group: _this2.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'idIssueDate',
              group: _this2.formGroup
            }
          };
          _this2.benefPhoneOptions = {
            fcName: 'benefPhone',
            labelKey: 'mobile_no_key',
            placeHolder: 'enter_mobile_no_key',
            group: _this2.formGroup
          };
          _this2.cardNumberOptions = {
            group: _this2.formGroup,
            labelKey: 'card_number_key',
            placeHolder: 'add_card_number_key',
            fcName: 'cardNumber'
          }; //clone from AIBIRQI250064Makki: PBSDB240042 - Adding fields on the International Transfer screen

          _this2.bankDetailsOptions = {
            swiftCodeOptions: {
              fcName: 'swiftCode_child',
              labelKey: 'bic_swift_code_key',
              placeHolder: 'enter_swift_code_key',
              group: _this2.formGroup,
              iconOptions: null
            },
            countriesOptions: {
              labelKey: 'country_key',
              placeHolder: 'select_country_key',
              fcName: 'country',
              group: _this2.formGroup,
              iconOptions: null
            },
            cityFreeInputOptions: {
              labelKey: 'city_key',
              placeHolder: 'enter_city_key',
              fcName: 'cityDetails',
              group: _this2.formGroup
            },
            bankNameOptions: {
              labelKey: 'bank_name_key',
              placeHolder: 'enter_bank_name_key',
              fcName: 'beneficaryBankName',
              group: _this2.formGroup,
              iconOptions: null
            },
            branchNameOptions: {
              labelKey: 'branch_key',
              placeHolder: 'enter_branch_key',
              fcName: 'beneficaryBankBranch',
              group: _this2.formGroup,
              iconOptions: null
            },
            regionOptions: {
              labelKey: 'region_key',
              placeHolder: 'select_region_key',
              fcName: 'region',
              selectedCountryCode: '',
              group: _this2.formGroup,
              iconOptions: null
            },
            cityOptions: {
              labelKey: 'city_key',
              placeHolder: 'select_city_key',
              fcName: 'city',
              group: _this2.formGroup,
              iconOptions: null
            }
          }; // local Transfer params

          _this2.LocalTransfersBeneficiary = false;
          _this2.LocalTransfersNonBeneficiary = false;
          _this2.EnableLocalBeneficiaryApproval = false; // international Transfers params

          _this2.internationTransfersBeneficiary = false;
          _this2.internationTransfersNonBeneficiary = false;
          _this2.enableInternationBeneficiaryApproval = false; // transfer Between Bank Accounts params

          _this2.transferBetweenBankAccountsBeneficiary = false;
          _this2.transferBetweenBankAccountsNonBeneficiary = false; // scheduled Local Transfer params

          _this2.scheduledLocalTransferBeneficiary = false;
          _this2.scheduledLocalTransferNonBeneficiary = false; // scheduled International Transfer params

          _this2.scheduledInternationalTransferBeneficiary = false;
          _this2.scheduledInternationalTransferNonBeneficiary = false;
          _this2.showBeneficiaryDropdown = false;
          _this2.showAccountNumber = false;
          _this2.showBeneficiaryDetails = true;
          _this2.showToOtherDetails = false;
          _this2.containerItemOptions = {// hideImageAndIconIfNotPresent: true
          };
          _this2.showSegment = false;
          _this2.beneficiaryOptions = {
            placeHolder: 'recipinet_name_key',
            fcName: 'benefName',
            labelKey: 'recipient_name_key',
            group: _this2.formGroup
          };
          _this2.branchOptions = {
            group: _this2.formGroup,
            fcName: 'benefBranchTxt',
            labelKey: 'branch_key',
            placeHolder: 'enter_branch_key'
          };
          _this2.beneficiaryNameOptions = {
            group: _this2.formGroup,
            fcName: 'benefNameTxt',
            labelKey: 'name_key',
            placeHolder: 'enter_beneficiary_name_key'
          };
          _this2.beneficiaryBvnOptions = {
            group: _this2.formGroup,
            fcName: 'benefBvn',
            labelKey: 'beneficiary_bvn_key',
            placeHolder: 'enter_bvn_key'
          };
          _this2.accountNameOptions = {
            labelKey: 'account_name_key',
            placeHolder: 'account_name_key',
            fcName: 'accountName',
            group: _this2.formGroup
          };
          _this2.isCifFormatSelected = false;
          return _this2;
        }

        _inherits(PaymentPage, _omni_base_omni_base_);

        return _createClass(PaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c;

            _superPropGet(PaymentPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup; // moved here by Zunair For #BUG 1257538

            var userInformation = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].USERINFO);
            var paymentSec = userInformation === null || userInformation === void 0 ? void 0 : userInformation.businessProfiles.find(function (i) {
              return i.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].PAYMENT_SEC_OPER_ID;
            });

            try {
              if ((_a = this.nav.getAllParams()) === null || _a === void 0 ? void 0 : _a.ScreenVO) {
                this.updateVOByNavParams(this.nav.getAllParams().ScreenVO);
              } else {
                this.toAccountComponent = this.nav.getAllParams();
                this.initAccountVO();
              }

              if (paymentSec) {
                this.toOtherAccountNumberOptions.showScannerIcon = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID !== src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].QR_PAYMENT_OPER_ID && ((_b = this.nav.getAllParams()) === null || _b === void 0 ? void 0 : _b.from) !== 'MR' && ((_c = paymentSec.children) === null || _c === void 0 ? void 0 : _c.some(function (c) {
                  return c.operVO.OPER_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].QR_PAYMENT_OPER_ID;
                }));
              }
            } catch (error) {
              this.logger.error('Payment Screen Error ! ', error);
            }

            if (this.toAccountComponent && this.toAccountComponent.scheduler) {
              this.stepperOptions.namesofSteps.push(this.step2Name);
              this.stepperOptions.numberOfSteps = 2;
              this.schedulerOptions.requestObject = this.ownAccountVO;
            }

            if (this.toAccountComponent && this.toAccountComponent.scheduler && this.nav.getAllParams().ScreenVO === undefined) {
              this.commonProv.setValInsideNestedObj('periodicity', 'M', this.ownAccountVO);
            }

            if (this.enableLocalBeneficiary()) {
              // local Beneficiary Params
              this.LocalTransfersBeneficiary = true;
              this.LocalTransfersNonBeneficiary = true;
              this.EnableLocalBeneficiaryApproval = false;
              this.scheduledLocalTransferBeneficiary = true;
              this.scheduledLocalTransferNonBeneficiary = true;
              this.enableLocalTransfer();
              this.enableRemittanceTransfer();
            }

            if (this.enableInternationalBeneficiary()) {
              // local Beneficiary Params
              this.internationTransfersBeneficiary = true;
              this.internationTransfersNonBeneficiary = true;
              this.enableInternationBeneficiaryApproval = false;
              this.scheduledInternationalTransferBeneficiary = true;
              this.scheduledInternationalTransferNonBeneficiary = true;
              this.enableInternationalTransfer();
              this.enableRemittanceTransfer();
            }

            if (this.enableInternalBeneficiary()) {
              this.transferBetweenBankAccountsBeneficiary = true;
              this.transferBetweenBankAccountsNonBeneficiary = true;
              this.enableInternalTransfer();
              this.enableRemittanceTransfer();
            }

            if (this.enableCashBeneficiary()) {
              this.showSegment = true;
              this.showBeneficiaryDropdown = true;
            }

            if (this.enableBankCardBeneficiary()) {
              this.showSegment = true;
              this.showBeneficiaryDropdown = true;
            }

            if (this.enableLocalCardBeneficiary()) {
              this.showSegment = true;
              this.showBeneficiaryDropdown = true;
            }

            switch (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID) {
              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].INTRA_BANK_REMITTANCE_TRANSFER:
                this.panelOptions1Step2.labelKey = 'intra_bank_remittance_details_key';
                break;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].LOCAL_REMITTANCE_TRANSFER:
                this.panelOptions1Step2.labelKey = 'local_remittance_details_key';
                break;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].INTERNATIONAL_REMITTANCE_TRANSFER:
                this.panelOptions1Step2.labelKey = 'international_remittance_details_key';
                break;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].BANK_CREDIT_CARD_SETTLEMENT:
                this.panelOptions1Step2.labelKey = 'bank_credit_card_settlement_key';
                break;

              case src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].LOCAL_CREDIT_CARD_SETTLEMENT:
                this.panelOptions1Step2.labelKey = 'local_credit_card_settlement_key';
                break;

              default:
                this.panelOptions1Step2.labelKey = 'payment_details_key';
                break;
            }

            if (this.fromMultiLoader) {
              // Added to cater for the multi outlet multi transfers by Ammar
              this.complexExchangeOptions.fromAmountOptions.isMulti = this.fromMultiLoader;
              this.complexExchangeOptions.toAmountOptions.isMulti = this.fromMultiLoader;
              this.complexSegmentOptions.segmentOptions.segmentList.pop();
              this.complexSegmentOptions.segmentContainerOptions.namesofSegments.pop();
              this.complexSegmentOptions.segmentContainerOptions.numberOfSegments = 1;
              this.stepperOptions.group.addControl('operId', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]());
              this.stepperOptions.group.controls['operId'].setValue(src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID);
              this.stepperOptions.requestObject['operId'] = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID;
            }

            var operCustomization = this.commonProvider.returnOperCustomization();
            this.readonlyMode = operCustomization.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].FORM_READONLY).IS_READONLY || false;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a;

            var screenVO = (_a = this.nav.getAllParams()) === null || _a === void 0 ? void 0 : _a.ScreenVO;

            if (screenVO) {
              this.commonProv.setValInsideNestedObj(this.currenciesOptions.fcName, screenVO.currency, this.ownAccountVO);

              if (screenVO.accountNumber && this.showSegment && !this.enableCashBeneficiary() && this.showToOtherDetails) {
                this.ownAccountVO['toBeneficiary'] = null;
                this.ownAccountVO['toAccount'] = null;
                this.onAccountNumbChanged(screenVO.accountNumber);
              }

              this.setSelectedSegment(this.showBeneficiaryDetails === true ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].BENEFICIARY : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].OTHER);
              this.ownAccountVO['saveBenef'] = screenVO.saveBenef === 'true' || screenVO.saveBenef === true;
            } else {
              if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].QR_PAYMENT_OPER_ID) {
                this.setSelectedSegment(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].OTHER);
              }
            }

            if (this.toAccountComponent && this.toAccountComponent.scheduler) {
              this.stepperOptions.schedulerStepIndex = 1;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(PaymentPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.currenciesOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.saveBenefToggleOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.banksOptions.subCategoryFcName], 0); //Added by ghada for tp #1261037 for fixing not able to proceed to the next step issue and toAmount not being readonly

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexSegmentOptions.segmentOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName], 1);

            if (this.enableInternalBeneficiary()) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.benefCurrencyOptions.fcName], 1);
            }

            this.commonProv.setValInsideNestedObj(this.complexSegmentOptions.segmentOptions.fcName, this.complexSegmentOptions.segmentOptions.defaultSegment.itemValue, this.ownAccountVO);

            if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].QR_PAYMENT_OPER_ID) {
              this.accountNb.getScannedData(false);
            }

            if (!this.commonProv.valFromNestedObj('dataSaveId', this.ownAccountVO) && !this.commonProv.valFromNestedObj(this.transferFormatOptions.fcName, this.ownAccountVO)) {
              this.commonProv.setValInsideNestedObj(this.transferFormatOptions.fcName, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACCOUNT_FORMAT_RADIO_VALUE, this.ownAccountVO);
            }

            if (this.readonlyMode) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.transferFormatOptions.fcName], 1);
            }

            if (this.readonlyMode || this.commonProv.valFromNestedObj(this.transferFormatOptions.fcName, this.ownAccountVO)) {
              var transferFormat = this.ownAccountVO[this.transferFormatOptions.fcName];
              var isCifFormat = transferFormat === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CIF_FORMAT_RADIO_VALUE || transferFormat && transferFormat.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CIF_FORMAT_RADIO_VALUE;

              if (isCifFormat) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.toOtherAccountNumberOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.cifAccountOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountList.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.accountNameOptions.fcName], 1);
                this.isCifFormatSelected = true;
              } else {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.toOtherAccountNumberOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountList.fcName], 0);
                this.isCifFormatSelected = false;
              }
            }
          }
        }, {
          key: "updateVOByNavParams",
          value: function updateVOByNavParams(screenVO) {
            this.toAccountComponent = {
              toAccountType: screenVO.toAccountType,
              scheduler: typeof screenVO.scheduler == 'string' ? screenVO.scheduler == 'true' : screenVO.scheduler == true // edited by Marina TP:#1542363 check on scheduler type as "true" is not equal to true which causes scheduler property to always be false 

            };

            if (screenVO[this.complexSegmentOptions.segmentOptions.fcName]) {
              this.showBeneficiaryDetails = screenVO[this.complexSegmentOptions.segmentOptions.fcName] == 'to_benef';
            } else {
              //Edited by ghada for tp#1287125, for the issue of segment being set 'toOther' on navigating from beneficiaries  
              this.showBeneficiaryDetails = screenVO['showBeneficiaryDetails'] || !screenVO['showToOtherDetails'];
            }

            this.showToOtherDetails = !this.showBeneficiaryDetails;

            if (this.showToOtherDetails) {
              delete screenVO['toBeneficiary'];
              delete screenVO['toBeneficiary_lookupKey'];
            } else {
              if (screenVO['toBeneficiary']) {
                screenVO['toBeneficiary_lookupKey'] = screenVO['toBeneficiary'];
              }
            }

            this.commonProv.copyObject(this.ownAccountVO, screenVO);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.toOtherAccountNumberOptions.fcName, this.saveBenefToggleOptions.fcName, this.purposeOptions.fcName, this.complexExchangeOptions.fromAmountOptions.amountOptions.fcName], screenVO.changeScannedDataToRO || false);
          }
        }, {
          key: "setSelectedSegment",
          value: function setSelectedSegment(selectedSegment) {
            if (selectedSegment === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].BENEFICIARY) {
              this.defaultSegment = {
                itemValue: 'to_benef',
                description: this.commonProv.translate('to_beneficiary_seg_key')
              };
              this.showBeneficiaryDetails = true;
            } else {
              this.defaultSegment = {
                itemValue: 'to_others',
                description: this.commonProv.translate('to_other_key')
              };
              this.showBeneficiaryDetails = false;

              if (this.formGroup.controls['toAccount']) {
                if (this.formGroup.controls['toAccount'].value == '' && this.ownAccountVO['toAccount'] !== undefined && this.ownAccountVO['toAccount'] !== null) {
                  this.formGroup.controls['toAccount'].setValue(this.ownAccountVO['toAccount']);
                  this.formGroup.controls['toAccount_lookupKey'].setValue(this.ownAccountVO['toAccount']);
                }
              }
            }

            this.showToOtherDetails = !this.showBeneficiaryDetails;
            this.commonProv.setValInsideNestedObj(this.complexSegmentOptions.segmentOptions.fcName, this.defaultSegment.itemValue, this.ownAccountVO);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['toBeneficiary', 'toBeneficiary_lookupKey', 'toAccount', 'toAccount_lookupKey'], this.showBeneficiaryDetails ? 1 : 0);

            if (this.enableCashBeneficiary()) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptions.fcName], this.showBeneficiaryDetails);
            }

            this.complexSegmentOptions.segmentOptions.defaultSegment = this.defaultSegment;
          }
          /**
           *
           * @param fromAccount
           */

        }, {
          key: "onFromAccountChange",
          value: function onFromAccountChange(fromAccount) {
            var _this5 = this;

            this.onFromAccountCombinationValidation(fromAccount);
            this.complexExchangeOptions.fromAmountOptions.currency = fromAccount.currencyBriefNameEnglish;
            this.complexExchangeOptions.fromAmountOptions.currencyCode = fromAccount.currency;
            setTimeout(function () {
              _this5.stepperOptions.requestObject[_this5.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] = fromAccount.currency;
            }, 1);
            this.purposeOnCurrencyChange(); //if own account transfer removce selected account from to account

            if (this.enableOwnAccountTransfer()) {
              this.toAccountRef.removeAccount(fromAccount);
            }

            if (this.enableCashBeneficiary()) {
              this.complexExchangeOptions.toAmountOptions.currencyCode = fromAccount.currency;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = fromAccount.currency;
            }
          }
        }, {
          key: "onFromAccountCombinationValidation",
          value: function onFromAccountCombinationValidation(fromAccount) {
            if (fromAccount && fromAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].VALIDATE_COMBINATION]) {
              var validationRequest = {
                fromCurrency: +fromAccount.currency,
                listOfAffectedFields: [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName],
                screenVO: this.ownAccountVO,
                listOfAccounts: [this.fromAccountRef, this.exchangeRef]
              };

              if (this.toAccountComponent.toAccountType === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].COMPANY_ACC_TRANSFER) {
                if (this.ownAccountVO[this.currenciesOptions.fcName]) {
                  validationRequest.toCurrency = +this.ownAccountVO[this.currenciesOptions.fcName].itemValue;
                  validationRequest.listOfAffectedFields.push(this.toOtherAccountNumberOptions.fcName);
                  validationRequest.listOfAffectedFields.push(this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName);
                } else if (this.ownAccountVO[this.internalBeneficiariesOptions.fcName]) {
                  validationRequest.toCurrency = +this.complexExchangeOptions.toAmountOptions.currencyCode;
                  validationRequest.listOfAffectedFields.push(this.internalBeneficiariesOptions.fcName);
                  validationRequest.listOfAffectedFields.push(this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName);
                }
              } else if (this.toAccountComponent.toAccountType === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].OWN_ACC_TRANSFER && this.ownAccountVO[this.toaccountList.fcName]) {
                validationRequest.toCurrency = +this.ownAccountVO[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName].itemValue;
                validationRequest.listOfAccounts.push(this.toAccountRef);
                validationRequest.listOfAffectedFields.push(this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName);
              } else if (this.toAccountComponent.toAccountType === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].BANK_LOCAL_TRANSFER) {
                if (this.ownAccountVO[this.localBeneficiariesOptions.fcName]) {
                  validationRequest.toCurrency = +this.ownAccountVO[this.localBeneficiariesOptions.fcName].currency;
                  validationRequest.listOfAffectedFields.push(this.localBeneficiariesOptions.fcName);
                }
              }

              this.callCurrencyCombinationValidateService(validationRequest);
            }
          }
          /**
           *
           * @param toAccount
           */

        }, {
          key: "onToAccountChange",
          value: function onToAccountChange(toAccount) {
            var _this6 = this;

            if (toAccount && toAccount[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].VALIDATE_COMBINATION]) {
              if (this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]) {
                var validationRequest = {
                  fromCurrency: +(this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].itemValue ? this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].itemValue : this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]),
                  toCurrency: +toAccount.currency,
                  listOfAffectedFields: [this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName],
                  screenVO: this.ownAccountVO,
                  listOfAccounts: [this.fromAccountRef, this.toAccountRef, this.exchangeRef]
                };
                this.callCurrencyCombinationValidateService(validationRequest);
              }
            }

            if (this.toAccountComponent.scheduler) {
              src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].OWN_ACCOUNT_STANDING_ORDER_OPER_ID;
            }

            this.complexExchangeOptions.toAmountOptions.currency = toAccount.currencyBriefNameEnglish;
            this.complexExchangeOptions.toAmountOptions.currencyCode = toAccount.currency;
            setTimeout(function () {
              _this6.stepperOptions.requestObject[_this6.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = toAccount.currency;
            }, 1);
            this.showExchangeRate();
            this.purposeOnCurrencyChange();
            this.fromAccountRef.removeAccount(toAccount);
          }
          /**
           *
           * @param internalBeneficiary
           */

        }, {
          key: "internalBeneficiaryChange",
          value: function internalBeneficiaryChange(internalBeneficiary) {
            if (this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]) {
              var validationRequest = {
                fromCurrency: +(this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].itemValue ? this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].itemValue : this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]),
                toCurrency: +internalBeneficiary.currency,
                listOfAffectedFields: [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.internalBeneficiariesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName],
                screenVO: this.ownAccountVO,
                listOfAccounts: [this.fromAccountRef, this.exchangeRef]
              };
              this.callCurrencyCombinationValidateService(validationRequest);
            }

            if (internalBeneficiary !== undefined) {
              this.accountNumber = internalBeneficiary.accountNumber, this.complexExchangeOptions.toAmountOptions.currencyCode = internalBeneficiary.currency;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = internalBeneficiary.currency;
              this.stepperOptions.requestObject[this.internalBeneficiariesOptions.fcName] = internalBeneficiary;
            }

            this.purposeOnCurrencyChange();
          }
          /**
           *
           * @param localBeneficiary
           */

        }, {
          key: "localBeneficiaryChange",
          value: function localBeneficiaryChange(localBeneficiary) {
            if (this.complexExchangeOptions.fromAmountOptions.currencyCode) {
              var validationRequest = {
                fromCurrency: +this.complexExchangeOptions.fromAmountOptions.currencyCode,
                toCurrency: +localBeneficiary.currency,
                listOfAffectedFields: [this.fromAccountList.fcName, this.localBeneficiariesOptions.fcName],
                screenVO: this.ownAccountVO,
                listOfAccounts: [this.fromAccountRef, this.exchangeRef]
              };
              this.callCurrencyCombinationValidateService(validationRequest);
            }

            if (localBeneficiary !== undefined) {
              this.complexExchangeOptions.toAmountOptions.currencyCode = localBeneficiary.currency;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = localBeneficiary.currency;
              this.stepperOptions.requestObject[this.localBeneficiariesOptions.fcName] = localBeneficiary;
            }

            this.purposeOnCurrencyChange();
          }
          /**
           *
           * @param internationalBeneficiary
           */

        }, {
          key: "internationalBeneficiaryChange",
          value: function internationalBeneficiaryChange(internationalBeneficiary) {
            if (internationalBeneficiary !== undefined) {
              this.complexExchangeOptions.toAmountOptions.currencyCode = internationalBeneficiary.currency;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = internationalBeneficiary.currency;
              this.stepperOptions.requestObject[this.internationalBeneficiariesOptions.fcName] = internationalBeneficiary;
            }

            this.purposeOnCurrencyChange();
          }
        }, {
          key: "cashBeneficiaryChange",
          value: function cashBeneficiaryChange(cashBeneficiary) {}
        }, {
          key: "localCardBeneficiaryChange",
          value: function localCardBeneficiaryChange(localCardBeneficiary) {
            if (this.complexExchangeOptions.fromAmountOptions.currencyCode && localCardBeneficiary.currency) {
              var validationRequest = {
                fromCurrency: +this.complexExchangeOptions.fromAmountOptions.currencyCode,
                toCurrency: +localCardBeneficiary.currency,
                listOfAffectedFields: [this.fromAccountList.fcName, this.localCardBeneficiariesOptions.fcName],
                screenVO: this.ownAccountVO,
                listOfAccounts: [this.fromAccountRef, this.exchangeRef]
              };
              this.callCurrencyCombinationValidateService(validationRequest);
            }

            if (localCardBeneficiary !== undefined) {
              this.complexExchangeOptions.toAmountOptions.currencyCode = localCardBeneficiary.currency;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = localCardBeneficiary.currency;
              this.stepperOptions.requestObject[this.localCardBeneficiariesOptions.fcName] = localCardBeneficiary;
            }

            this.purposeOnCurrencyChange();
          }
        }, {
          key: "bankCardBeneficiaryChange",
          value: function bankCardBeneficiaryChange(bankCardBeneficiary) {
            if (this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName] && bankCardBeneficiary.currency) {
              var validationRequest = {
                fromCurrency: +(this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].itemValue ? this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName].itemValue : this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]),
                toCurrency: +bankCardBeneficiary.currency,
                listOfAffectedFields: [this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.bankCardBeneficiariesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName],
                screenVO: this.ownAccountVO,
                listOfAccounts: [this.fromAccountRef, this.exchangeRef]
              };
              this.callCurrencyCombinationValidateService(validationRequest);
            }

            if (bankCardBeneficiary !== undefined) {
              this.complexExchangeOptions.toAmountOptions.currencyCode = bankCardBeneficiary.currency;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = bankCardBeneficiary.currency;
              this.stepperOptions.requestObject[this.bankCardBeneficiariesOptions.fcName] = bankCardBeneficiary;
            }

            this.purposeOnCurrencyChange();
          }
        }, {
          key: "onInitialPurposeChange",
          value: function onInitialPurposeChange(val) {}
        }, {
          key: "onAmountChange",
          value: function onAmountChange(event) {
            this.logger.log(event);
          }
        }, {
          key: "onChangeSchedule",
          value: function onChangeSchedule(value) {
            var stateDay;

            if (this.nav.getAllParams().ScreenVO === undefined) {
              if (value !== undefined) {
                if (value.priodicityBy === 'S' || value.priodicityBy === 'M') {
                  stateDay = value.startDate.getDay() + 1;

                  if (value.priodicityBy === 'S') {
                    this.ownAccountVO['submitType'] = '4';
                  } else {
                    stateDay = value.startDate.getDate();
                    this.ownAccountVO['submitType'] = '5';
                  }
                }

                if (value.priodicityBy === 'W') {
                  stateDay = value.startDate.getDay() + 1;
                  this.ownAccountVO['submitType'] = '5';
                }
              }

              this.ownAccountVO['day'] = stateDay;
            }
          }
          /** to show exchange rate if from and to currencies are different */

        }, {
          key: "showExchangeRate",
          value: function showExchangeRate() {
            this.exchangeChild.showToCurrency();
          } // GRadwan, ARagab 29/07/2020

        }, {
          key: "enableOwnAccountTransfer",
          value: function enableOwnAccountTransfer() {
            this.enableOwnAccTrans = this.toAccountComponent.toAccountType === 'ownAccountTransfer' || this.toAccountComponent.toAccountType === 'ownAccountStandingOrder';
            return this.enableOwnAccTrans;
          }
        }, {
          key: "enableLocalBeneficiary",
          value: function enableLocalBeneficiary() {
            this.enableLocalBenef = this.toAccountComponent.toAccountType === 'bankLocalTransfer' || this.toAccountComponent.toAccountType === 'bankLocalStandingOrder';
            return this.enableLocalBenef;
          }
        }, {
          key: "enableInternalBeneficiary",
          value: function enableInternalBeneficiary() {
            this.enableInternalBenef = this.toAccountComponent.toAccountType === 'companyAccountTransfer' || this.toAccountComponent.toAccountType === 'companyAccountStandingOrder';
            return this.enableInternalBenef;
          }
        }, {
          key: "enableRemittanceTransfer",
          value: function enableRemittanceTransfer() {
            if (src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].INTRA_BANK_REMITTANCE_TRANSFER || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].LOCAL_REMITTANCE_TRANSFER || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].INTERNATIONAL_REMITTANCE_TRANSFER) {
              return this.enableRemittancetrans = true;
            }
          }
        }, {
          key: "enableInternationalBeneficiary",
          value: function enableInternationalBeneficiary() {
            this.enableInternationBenef = this.toAccountComponent.toAccountType === 'internationalAccountTransfer' || this.toAccountComponent.toAccountType === 'internationalAccountStandingOrder';
            return this.enableInternationBenef;
          }
        }, {
          key: "enableCashBeneficiary",
          value: function enableCashBeneficiary() {
            return this.toAccountComponent.toAccountType === 'cashTransfer' || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CASH_TRANSFER_OPER_ID || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].STOP_CASH_TRANSFER_OPER_ID;
          }
        }, {
          key: "enableBankCardBeneficiary",
          value: function enableBankCardBeneficiary() {
            return this.toAccountComponent.toAccountType === 'bankCardSettlement';
          }
        }, {
          key: "enableLocalCardBeneficiary",
          value: function enableLocalCardBeneficiary() {
            return this.toAccountComponent.toAccountType === 'localCardSettlement';
          }
        }, {
          key: "onSaveBenefChange",
          value: function onSaveBenefChange(event) {
            this.ownAccountVO['saveBenef'] = event.newValue;
          }
        }, {
          key: "enableInternationalTransfer",
          value: function enableInternationalTransfer() {
            if (this.toAccountComponent.toAccountType === 'internationalAccountStandingOrder') {
              this.internationTransfersBeneficiary = this.scheduledInternationalTransferBeneficiary;
              this.internationTransfersNonBeneficiary = this.scheduledInternationalTransferNonBeneficiary;
            }

            if (this.internationTransfersBeneficiary && this.internationTransfersNonBeneficiary && !this.enableInternationBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
              this.internationalBeneficiariesOptions.labelKey = 'to_account_or_beneficiary_key';
              this.showSegment = true;
            } else if (this.internationTransfersBeneficiary && !this.internationTransfersNonBeneficiary && !this.enableInternationBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
              this.internationalBeneficiariesOptions.labelKey = 'to_beneficiary_key';
            } else if (this.internationTransfersBeneficiary && this.internationTransfersNonBeneficiary && this.enableInternationBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
              this.internationalBeneficiariesOptions.labelKey = 'to_beneficiary_key';
              this.showSegment = true;
            } else if (this.internationTransfersBeneficiary && !this.internationTransfersNonBeneficiary && this.enableInternationBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
              this.internationalBeneficiariesOptions.labelKey = 'to_beneficiary_key';
            } else if (!this.internationTransfersBeneficiary) {
              this.showAccountNumber = true;
            }
          }
        }, {
          key: "enableLocalTransfer",
          value: function enableLocalTransfer() {
            if (this.toAccountComponent.toAccountType === 'bankLocalStandingOrder') {
              this.LocalTransfersBeneficiary = this.scheduledLocalTransferBeneficiary;
              this.LocalTransfersNonBeneficiary = this.scheduledLocalTransferNonBeneficiary;
            }

            if (this.LocalTransfersBeneficiary && this.LocalTransfersNonBeneficiary && !this.EnableLocalBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
              this.showSegment = true;
            } else if (this.LocalTransfersBeneficiary && !this.LocalTransfersNonBeneficiary && !this.EnableLocalBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
            } else if (this.LocalTransfersBeneficiary && this.LocalTransfersNonBeneficiary && this.EnableLocalBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
              this.showSegment = true;
            } else if (this.LocalTransfersBeneficiary && !this.LocalTransfersNonBeneficiary && this.EnableLocalBeneficiaryApproval) {
              this.showBeneficiaryDropdown = true;
            } else if (!this.LocalTransfersBeneficiary) {
              this.showAccountNumber = true;
            }
          }
        }, {
          key: "enableInternalTransfer",
          value: function enableInternalTransfer() {
            if (this.transferBetweenBankAccountsBeneficiary && this.transferBetweenBankAccountsNonBeneficiary) {
              this.showBeneficiaryDropdown = true;
              this.internalBeneficiariesOptions.labelKey = 'to_account_or_beneficiary_key';
              this.showSegment = true;
            } else if (this.transferBetweenBankAccountsBeneficiary && !this.transferBetweenBankAccountsNonBeneficiary) {
              this.showBeneficiaryDropdown = true;
              this.internalBeneficiariesOptions.labelKey = 'to_beneficiary_key';
            } else if (!this.transferBetweenBankAccountsBeneficiary && this.transferBetweenBankAccountsNonBeneficiary) {
              this.showAccountNumber = true;
            }
          } //edited by Marina TP:#1586190; sending page options to ps-template-stteper options to handle the navigation there to avoid race condition happening when there is submit report navigation 

        }, {
          key: "navigateToBeneficiary",
          value: function navigateToBeneficiary(params) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;

            if (((_a = this.formGroup.controls[this.saveBenefToggleOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) === true && !this.readonlyMode) {
              if (this.enableInternationalBeneficiary()) {
                this.stepperOptions.nextPageOptions = {
                  operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
                  title: 'international_beneficiary_key',
                  component: 'international-beneficiary',
                  param: {
                    accountNumber: this.accountNumber,
                    benefName: (_c = (_b = this.formGroup.controls[this.benefNameOptions.fcName]) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : (_d = this.formGroup.controls[this.recipientNameOptions.fcName]) === null || _d === void 0 ? void 0 : _d.value,
                    swiftCode: (_e = this.formGroup.controls[this.swiftCodeOptions.fcName]) === null || _e === void 0 ? void 0 : _e.value,
                    country: (_f = this.formGroup.controls[this.bankDetailsOptions.countriesOptions.fcName]) === null || _f === void 0 ? void 0 : _f.value,
                    city: (_g = this.formGroup.controls[this.bankDetailsOptions.cityOptions.fcName]) === null || _g === void 0 ? void 0 : _g.value,
                    region: (_h = this.formGroup.controls[this.bankDetailsOptions.regionOptions.fcName]) === null || _h === void 0 ? void 0 : _h.value,
                    cityDetails: (_j = this.formGroup.controls[this.bankDetailsOptions.cityFreeInputOptions.fcName]) === null || _j === void 0 ? void 0 : _j.value,
                    bankName: (_k = this.formGroup.controls[this.bankDetailsOptions.bankNameOptions.fcName]) === null || _k === void 0 ? void 0 : _k.value,
                    branch: (_l = this.formGroup.controls[this.bankDetailsOptions.branchNameOptions.fcName]) === null || _l === void 0 ? void 0 : _l.value,
                    currency: (_m = this.formGroup.controls[this.benefCurrencyOptions.fcName]) === null || _m === void 0 ? void 0 : _m.value,
                    purpose: ((_o = this.formGroup.controls[this.purposeOptions.fcName]) === null || _o === void 0 ? void 0 : _o.value) || ((_p = this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName]) === null || _p === void 0 ? void 0 : _p.value)
                  }
                };
              }

              if (this.enableLocalBeneficiary()) {
                this.stepperOptions.nextPageOptions = {
                  operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].LOCAL_BENEFICIARY_OPER_ID,
                  title: 'local_beneficiary_key',
                  component: 'local-beneficiary',
                  param: {
                    accountNumber: this.accountNumber,
                    benefName: (_r = (_q = this.formGroup.controls[this.benefNameOptions.fcName]) === null || _q === void 0 ? void 0 : _q.value) !== null && _r !== void 0 ? _r : (_s = this.formGroup.controls[this.recipientNameOptions.fcName]) === null || _s === void 0 ? void 0 : _s.value,
                    bank: (_t = this.formGroup.controls[this.banksOptions.categoryFcName]) === null || _t === void 0 ? void 0 : _t.value,
                    bankFullObj: this.selectedBank,
                    benefBranchTxt: (_u = this.formGroup.controls[this.branchOptions.fcName]) === null || _u === void 0 ? void 0 : _u.value,
                    currency: (_v = this.formGroup.controls[this.benefCurrencyOptions.fcName]) === null || _v === void 0 ? void 0 : _v.value,
                    purpose: ((_w = this.formGroup.controls[this.purposeOptions.fcName]) === null || _w === void 0 ? void 0 : _w.value) || ((_x = this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName]) === null || _x === void 0 ? void 0 : _x.value),
                    benefBvn: (_y = this.formGroup.controls[this.beneficiaryBvnOptions.fcName]) === null || _y === void 0 ? void 0 : _y.value
                  }
                };
              }

              if (this.enableInternalBeneficiary()) {
                this.stepperOptions.nextPageOptions = {
                  operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID,
                  title: 'internal_beneficiary_key',
                  component: 'internal-beneficiary',
                  param: {
                    accountNumber: this.accountNumber,
                    purpose: ((_z = this.formGroup.controls[this.purposeOptions.fcName]) === null || _z === void 0 ? void 0 : _z.value) || ((_0 = this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName]) === null || _0 === void 0 ? void 0 : _0.value),
                    benefName: (_1 = this.formGroup.controls.formData.value.benefName) !== null && _1 !== void 0 ? _1 : (_2 = this.formGroup.controls[this.recipientNameOptions.fcName]) === null || _2 === void 0 ? void 0 : _2.value,
                    currency: (_3 = this.formGroup.controls[this.benefCurrencyOptions.fcName]) === null || _3 === void 0 ? void 0 : _3.value
                  }
                };
              }

              if (this.enableLocalCardBeneficiary()) {
                this.stepperOptions.nextPageOptions = {
                  operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].LOCAL_CARD_BENEFICIARY_OPER_ID,
                  title: 'local_card_beneficiary_key',
                  component: 'local-card-beneficiary',
                  param: {
                    cardNumber: (_4 = this.formGroup.controls[this.cardNumberOptions.fcName]) === null || _4 === void 0 ? void 0 : _4.value,
                    benefName: (_6 = (_5 = this.formGroup.controls[this.beneficiaryNameOptions.fcName]) === null || _5 === void 0 ? void 0 : _5.value) !== null && _6 !== void 0 ? _6 : (_7 = this.formGroup.controls[this.recipientNameOptions.fcName]) === null || _7 === void 0 ? void 0 : _7.value,
                    bank: (_8 = this.formGroup.controls[this.banksOptions.categoryFcName]) === null || _8 === void 0 ? void 0 : _8.value,
                    bankFullObj: this.selectedBank,
                    benefBranchTxt: (_9 = this.formGroup.controls[this.branchOptions.fcName]) === null || _9 === void 0 ? void 0 : _9.value,
                    currency: (_10 = this.formGroup.controls[this.benefCurrencyOptions.fcName]) === null || _10 === void 0 ? void 0 : _10.value,
                    purpose: this.formGroup.controls[this.purposeOptions.fcName].value || this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName].value
                  }
                };
              }

              if (this.enableBankCardBeneficiary()) {
                this.stepperOptions.nextPageOptions = {
                  operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                  title: 'bank_card_beneficiary_key',
                  component: 'internal-card-beneficiary',
                  param: {
                    cardNumber: (_11 = this.formGroup.controls[this.cardNumberOptions.fcName]) === null || _11 === void 0 ? void 0 : _11.value,
                    purpose: ((_12 = this.formGroup.controls[this.purposeOptions.fcName]) === null || _12 === void 0 ? void 0 : _12.value) || this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName].value,
                    benefName: (_14 = (_13 = this.formGroup.controls[this.beneficiaryNameOptions.fcName]) === null || _13 === void 0 ? void 0 : _13.value) !== null && _14 !== void 0 ? _14 : (_15 = this.formGroup.controls[this.recipientNameOptions.fcName]) === null || _15 === void 0 ? void 0 : _15.value,
                    currency: (_16 = this.formGroup.controls[this.benefCurrencyOptions.fcName]) === null || _16 === void 0 ? void 0 : _16.value
                  }
                };
              } //added by Marina-jira-7951


              if (this.enableCashBeneficiary()) {
                this.stepperOptions.nextPageOptions = {
                  operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID,
                  title: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
                  component: 'cash-transfer',
                  param: {
                    benefName: (_18 = (_17 = this.formGroup.controls[this.benefNameOptions.fcName]) === null || _17 === void 0 ? void 0 : _17.value) !== null && _18 !== void 0 ? _18 : (_19 = this.formGroup.controls[this.recipientNameOptions.fcName]) === null || _19 === void 0 ? void 0 : _19.value,
                    benefPhone: (_20 = this.formGroup.controls[this.benefPhoneOptions.fcName]) === null || _20 === void 0 ? void 0 : _20.value,
                    idType: (_21 = this.formGroup.controls[this.complexIdDetailsOptions.dropdownIdTypesOptions.fcName]) === null || _21 === void 0 ? void 0 : _21.value,
                    idNumber: (_22 = this.formGroup.controls[this.complexIdDetailsOptions.idNumberOptions.fcName]) === null || _22 === void 0 ? void 0 : _22.value,
                    idExpiryDate: (_23 = this.formGroup.controls[this.complexIdDetailsOptions.dateExpiryOptions.fcName]) === null || _23 === void 0 ? void 0 : _23.value,
                    idIssueDate: (_24 = this.formGroup.controls[this.complexIdDetailsOptions.issueDateOptions.fcName]) === null || _24 === void 0 ? void 0 : _24.value,
                    purpose: ((_25 = this.formGroup.controls[this.purposeOptions.fcName]) === null || _25 === void 0 ? void 0 : _25.value) || ((_26 = this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName]) === null || _26 === void 0 ? void 0 : _26.value)
                  }
                };
              }
            }
          } //Edited by ghada, US1122924 for fixing the issue of not being able to go next on switching segments due to 'toAccount_lookupKey' being invalid

        }, {
          key: "onClickSegment",
          value: function onClickSegment(selectedSegment) {
            this.setSelectedSegment(selectedSegment === this.toBeneficiarySegment ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].BENEFICIARY : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].OTHER);
            this.resetSegmentData(selectedSegment);
          } //Added by Marina TP:#1404187 for resetting segment data upon switching to the other segment

        }, {
          key: "resetSegmentData",
          value: function resetSegmentData(selectedSegment) {
            var _a, _b;

            if (selectedSegment === this.toBeneficiarySegment) {
              this.resetComponentVal([this.toOtherAccountNumberOptions.fcName]);

              if (this.enableLocalBeneficiary()) {
                this.resetComponentVal([this.branchOptions.fcName, this.banksOptions.categoryFcName, this.benefCurrencyOptions.fcName, this.beneficiaryBvnOptions.fcName]);
              } else if (this.enableInternationalBeneficiary()) {
                this.resetComponentVal([this.swiftCodeOptions.fcName, this.benefCurrencyOptions.fcName]); //AIBIRQI250064 clone from Makki: PBSDB240042 - Adding fields on the International Transfer screen

                this.commonProv.setValInsideNestedObj(this.benefNameOptions.fcName, null, this.ownAccountVO);
                this.commonProv.setValInsideNestedObj(this.bankDetailsOptions.countriesOptions.fcName, null, this.ownAccountVO);
                this.commonProv.setValInsideNestedObj(this.bankDetailsOptions.cityFreeInputOptions.fcName, null, this.ownAccountVO);
                this.commonProv.setValInsideNestedObj(this.bankDetailsOptions.bankNameOptions.fcName, null, this.ownAccountVO);
                this.commonProv.setValInsideNestedObj(this.bankDetailsOptions.branchNameOptions.fcName, null, this.ownAccountVO);
              } else if (this.enableLocalCardBeneficiary()) {
                this.resetComponentVal([this.banksOptions.categoryFcName, this.branchOptions.fcName]);
              }
            } else if (((_a = this.formGroup.controls['toBeneficiary']) === null || _a === void 0 ? void 0 : _a.value) || ((_b = this.formGroup.controls['toAccount']) === null || _b === void 0 ? void 0 : _b.value)) {
              if (this.enableLocalBeneficiary()) this.localBeneficiaryLookupComponentObj.reset();else if (this.enableInternationalBeneficiary()) this.internationalBeneficiaryLookupComponentObj.reset();else if (this.enableInternalBeneficiary()) this.internalBeneficiaryLookupComponentObj.reset();else if (this.enableLocalCardBeneficiary()) this.localCardBeneficiaryLookupComponentObj.reset();else this.enableBankCardBeneficiary();
              this.bankCardBeneficiaryLookupComponentObj.reset();
            }
          }
        }, {
          key: "onEmptyAccountNumb",
          value: function onEmptyAccountNumb(event) {
            this.resetComponentVal([this.beneficiaryOptions.fcName, this.benefCurrencyOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName]); //Editted by ghada, AZDB-2792 for reseting all beneficiary account number related fileds on removing it's value

            this.complexExchangeOptions.toAmountOptions.currencyCode = undefined;
            this.exchangeChild.showToCurrency(); //Added by ghada, for revalidating the to Currency and hide it on removing account number
          }
        }, {
          key: "onAccountNumbChanged",
          value: function onAccountNumbChanged(event) {
            var _a;

            if (this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]) {
              this.callCurrencyCombinationValidateService();
            }

            this.accountNumber = event ? event.newValue ? event.newValue : event : undefined; //Added by ghada tp#1266566 for fixing the issue of accountnumber being removed on clicking next and benefName not being send in navParams on navigate

            if (this.accountNumber && ((_a = this.formGroup.controls[this.internalBeneficiariesOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) == "") {
              this.formGroup.controls[this.toOtherAccountNumberOptions.fcName].setValue(this.accountNumber);
            } //Commented by Marina Jira:AZDB-5528; operId shouldn't be set manually to avoid applying same customization for creatLike screens 
            //Edited by ghada, US1122924 for fixing 'operId being changed on account number change issue' in Remittance screens
            // if (this.enableInternalBeneficiary()) {
            //   if (this.toAccountComponent.scheduler) {
            //     PsCommonSettings.oper_ID = CommonBussinessConstant.INTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
            //   } else {
            //     PsCommonSettings.oper_ID = this.enableRemittanceTransfer() ? CommonBussinessConstant.INTRA_BANK_REMITTANCE_TRANSFER : CommonBussinessConstant.INTERNAL_BENEFICIARY_TRANSFER;
            //   }
            // } else if (this.enableLocalBeneficiary()) {
            //   if (this.toAccountComponent.scheduler) {
            //     PsCommonSettings.oper_ID = CommonBussinessConstant.LOCAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
            //   } else {
            //     PsCommonSettings.oper_ID = this.enableRemittanceTransfer() ? CommonBussinessConstant.LOCAL_REMITTANCE_TRANSFER : CommonBussinessConstant.LOCAL_BENEFICIARY_TRANSFER;
            //   }
            // } else if (this.enableInternationalBeneficiary()) {
            //   if (this.toAccountComponent.scheduler) {
            //     PsCommonSettings.oper_ID = CommonBussinessConstant.EXTERNAL_BENEFICIARY_TRANSFER_STANDING_ORDER_OPER_ID;
            //   } else {
            //     PsCommonSettings.oper_ID = this.enableRemittanceTransfer() ? CommonBussinessConstant.INTERNATIONAL_REMITTANCE_TRANSFER : CommonBussinessConstant.INTERNATIONAL_BENEFICIARY_TRANSFER;
            //   }

          } //IMAL-7934, Modified by ghada for eleminating dublicated code and unifying the behaviour of calling CurrencyCombination with configureing screenVO to remove all the null values that could lead to an issue being in service request

        }, {
          key: "callCurrencyCombinationValidateService",
          value: function callCurrencyCombinationValidateService(validationRequestParam) {
            var _this7 = this;

            var _a, _b;

            if (!validationRequestParam) {
              var validationRequest = {
                fromCurrency: +(((_a = this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]) === null || _a === void 0 ? void 0 : _a.itemValue) || this.ownAccountVO[this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName]),
                toCurrency: +(((_b = this.ownAccountVO[this.benefCurrencyOptions.fcName]) === null || _b === void 0 ? void 0 : _b.itemValue) || this.ownAccountVO[this.benefCurrencyOptions.fcName]),
                listOfAffectedFields: [this.toOtherAccountNumberOptions.fcName, this.complexExchangeOptions.fromAmountOptions.currenciesOptions.fcName, this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName],
                screenVO: this.ownAccountVO,
                listOfAccounts: [this.fromAccountRef]
              };
              validationRequestParam = validationRequest;
            }

            if (validationRequestParam.fromCurrency && validationRequestParam.toCurrency) {
              this.omniPull.validateCurrencyCombination(validationRequestParam).then(function (result) {
                if (!result) {
                  if (_this7.showToOtherDetails) {
                    _this7.resetComponentVal([_this7.benefCurrencyOptions.fcName, _this7.beneficiaryOptions.fcName]);
                  }
                }

                _this7.deleteNullPropsFromVO();
              });
            }
          }
        }, {
          key: "onBankChanged",
          value: function onBankChanged(bank) {
            if (bank) {
              this.selectedBank = bank;
            }
          }
        }, {
          key: "onSwiftCodeChanged",
          value: function onSwiftCodeChanged(event) {
            if (event && event !== undefined) {}
          }
        }, {
          key: "onBenefCurrencyChanged",
          value: function onBenefCurrencyChanged(currency) {
            if (currency !== undefined) {
              if (!this.enableInternalBeneficiary()) {
                //IMAL-7934, added by ghada for stop calling CurrencyCombination service more tham one with the same request in case internal transfer where the it will be called on accountNumber change which responsible for setting the benefCurrency 
                this.callCurrencyCombinationValidateService();
              }

              this.complexExchangeOptions.toAmountOptions.currency = currency.selectedObj.briefDescription;
              this.complexExchangeOptions.toAmountOptions.currencyCode = currency.itemValue;
              this.stepperOptions.requestObject[this.complexExchangeOptions.toAmountOptions.currenciesOptions.fcName] = currency.itemValue;
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.complexExchangeOptions.toAmountOptions.fcName], 0);
              this.showExchangeRate();
            }

            this.purposeOnCurrencyChange();
          }
        }, {
          key: "purposeOnCurrencyChange",
          value: function purposeOnCurrencyChange() {
            if (this.complexExchangeOptions.fromAmountOptions.currencyCode !== undefined && this.complexExchangeOptions.toAmountOptions.currencyCode !== undefined) {
              // eslint-disable-next-line radix
              if (this.commonProv.getLKCompany().isLK && this.complexExchangeOptions.fromAmountOptions.currencyCode !== this.complexExchangeOptions.toAmountOptions.currencyCode && this.complexExchangeOptions.toAmountOptions.currencyCode == this.commonProv.getLKCompany().currencyCode) {
                this.showPurpposeSubPurpose = true;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptionsDDLB.categoryFcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptionsDDLB.subCategoryFcName], 1); // commented the use of form controller to the use of VO by Richie for #TP 1105083 since they will generate error in case the controller does not exist and we should not use the controller to set a value!
                // this.formGroup.controls[this.purposeOptions.fcName].setValue(null);

                this.ownAccountVO[this.purposeOptions.fcName] = null;
              } else {
                this.showPurpposeSubPurpose = false;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptionsDDLB.categoryFcName], 0); // this.formGroup.controls[this.purposeOptionsDDLB.categoryFcName].setValue(null);

                this.ownAccountVO[this.purposeOptionsDDLB.categoryFcName] = null;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.purposeOptionsDDLB.subCategoryFcName], 0); // this.formGroup.controls[this.purposeOptionsDDLB.subCategoryFcName].setValue(null);

                this.ownAccountVO[this.purposeOptionsDDLB.subCategoryFcName] = null;
              }
            }
          }
        }, {
          key: "updateAccountVO",
          value: function updateAccountVO(params) {
            this.ownAccountVO['toAccountType'] = this.toAccountComponent.toAccountType;
            this.ownAccountVO['scheduler'] = this.toAccountComponent.scheduler; //Mohanad AZDB-6448 - 19112024

            if (this.ownAccountVO[this.schedulerOptions.periodaicityInputCountOptions.fcName] == this.commonProv.translate('unlimited_key')) {
              this.commonProv.setValInsideNestedObj(this.schedulerOptions.periodaicityInputCountOptions.fcName, 'Unlimited', this.ownAccountVO);
            }

            if (!this.fromMultiLoader) {
              src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID = params.ownAccountVO.operId || src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_17__["PsCommonSettings"].oper_ID;
            }

            var accountNumberControlVal = this.formGroup.controls[this.toOtherAccountNumberOptions.fcName] ? this.formGroup.controls[this.toOtherAccountNumberOptions.fcName].value : null; // this.accountNumber = this.accountNumber || accountNumberControl;

            this.accountNumber = accountNumberControlVal ? accountNumberControlVal : this.accountNumber;

            if (this.accountNumber) {
              if (this.enableInternalBeneficiary()) {
                if (!this.ownAccountVO['toAccount'] && src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_16__["CommonUtils"].isNotObject(this.ownAccountVO['toAccount'])) {
                  //construct a toAccont object to be sent in the request in the case of "to other" transfer scenario similar to the object costructed in the "to benef. " transfer scaenrio for the submit service 
                  this.ownAccountVO['toAccount'] = {
                    accountNumber: this.accountNumber
                  };
                }

                this.ownAccountVO['accountNumber'] = this.accountNumber;
              }

              if (!this.ownAccountVO['toBeneficiary'] && src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_16__["CommonUtils"].isNotObject(this.ownAccountVO['toBeneficiary'])) {
                if (this.enableInternationalBeneficiary()) {
                  this.ownAccountVO['toBeneficiary'] = {
                    accountNumber: this.accountNumber,
                    swiftCode: this.formGroup.controls[this.swiftCodeOptions.fcName].value,
                    currency: this.formGroup.controls[this.benefCurrencyOptions.fcName].value
                  };
                }

                if (this.enableLocalBeneficiary()) {
                  this.ownAccountVO['toBeneficiary'] = {
                    accountNumber: this.accountNumber,
                    benefBankId: this.formGroup.controls[this.banksOptions.categoryFcName].value,
                    currency: this.formGroup.controls[this.benefCurrencyOptions.fcName].value
                  };
                }
              }
            }

            this.deleteNullPropsFromVO();
          }
        }, {
          key: "onCifValidated",
          value: function onCifValidated(event) {
            var _this8 = this;

            if (event.cifStatus === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACTIVE_CIF_STATUS) {
              this.isCifValidated = true;
              this.cifAccountList.queryParams = {
                userCifNo: event.cif
              };
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountList.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cifAccountList.fcName], 1);
              setTimeout(function () {
                var _a;

                (_a = _this8.toCifAccountObj) === null || _a === void 0 ? void 0 : _a.loadAccounts();
              }, 0);
            } else {
              this.formGroup.controls[this.cifAccountOptions.fcName].setValue('');
              src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_16__["CommonUtils"].presentFailureAlert(this.commonProv.translate('cif_is_not_active_key'));
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountList.fcName], 0);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cifAccountList.fcName], 0);
            }
          }
        }, {
          key: "onCifAccountSelected",
          value: function onCifAccountSelected(selectedAccount) {
            if (selectedAccount) {
              var accountName = selectedAccount.accountTypeDesc;
              this.commonProv.setValInsideNestedObj(this.accountNameOptions.fcName, accountName, this.ownAccountVO);
              this.commonProv.setValInsideNestedObj(this.benefCurrencyOptions.fcName, selectedAccount.currency, this.ownAccountVO);
              this.accountNumber = selectedAccount.accountNumber;
            }
          }
        }, {
          key: "onTransferFormatChanged",
          value: function onTransferFormatChanged(event) {
            var _a, _b;

            if (event != null && event !== undefined) {
              if (event.itemValue == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].ACCOUNT_FORMAT_RADIO_VALUE) {
                this.isCifFormatSelected = false;
                this.isCifValidated = false;

                if (this.ownAccountVO['cifAccount']) {
                  (_a = this.cifAccount) === null || _a === void 0 ? void 0 : _a.resetCifField();
                  (_b = this.toCifAccountObj) === null || _b === void 0 ? void 0 : _b.reset();
                  this.commonProv.setValInsideNestedObj(this.accountNameOptions.fcName, null, this.ownAccountVO);
                  this.commonProv.setValInsideNestedObj(this.benefCurrencyOptions.fcName, null, this.ownAccountVO);
                }

                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.toOtherAccountNumberOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.toOtherAccountNumberOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cifAccountOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cifAccountList.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountList.fcName], 0);
              } else if (event.itemValue == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_11__["CommonBussinessConstant"].CIF_FORMAT_RADIO_VALUE) {
                this.isCifFormatSelected = true;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.toOtherAccountNumberOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.toOtherAccountNumberOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cifAccountOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifAccountOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_15__["ConstantCommon"].ACTION_TYPE_READONLY, [this.accountNameOptions.fcName], 1);
              }
            }
          }
        }, {
          key: "deleteNullPropsFromVO",
          value: function deleteNullPropsFromVO() {
            for (var fcName in this.ownAccountVO) {
              if (this.ownAccountVO[fcName] == null || this.ownAccountVO[fcName] === "") {
                delete this.ownAccountVO[fcName];
              }
            }
          }
        }, {
          key: "initAccountVO",
          value: function initAccountVO() {
            this.ownAccountVO['toAccountType'] = this.toAccountComponent.toAccountType;
            this.ownAccountVO['scheduler'] = this.toAccountComponent.scheduler;
            this.ownAccountVO['saveBenef'] = false;
          }
        }, {
          key: "getScannedData",
          value: function getScannedData(event) {
            if (!event[1]) {
              this.showToOtherDetails = true;
              this.showBeneficiaryDetails = false;
              this.setSelectedSegment(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_interfaces__WEBPACK_IMPORTED_MODULE_12__["PaymentSegment"].OTHER);
            }

            if (event[0]) {
              this.accountNumber = event[0].accountNumber;
              this.commonProv.copyObject(this.ownAccountVO, event[0]);
            }
          }
        }, {
          key: "resetComponentVal",
          value: function resetComponentVal(componentFcNamesList) {
            var _iterator = _createForOfIteratorHelper(componentFcNamesList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var component = _step.value;
                this.commonProv.setValInsideNestedObj(component, null, this.ownAccountVO);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.deleteNullPropsFromVO(); //added by ghada, AZDB-2792 to delete null property in case a service is gonna be called with vo as param like executePWSService which will affect the response of the service
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_22__["OmniBasePage"]);

      PaymentPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_19__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_14__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_18__["PsNavigatorService"]
        }, {
          type: _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_23__["OmniPullService"]
        }];
      };

      PaymentPage.propDecorators = {
        exchangeChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_exchange_ps_complex_exchange_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexExchangeComponent"]]
        }],
        accountNb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['accountNb']
        }],
        cifAccount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_cif_account_ps_complex_cif_account_component__WEBPACK_IMPORTED_MODULE_24__["PsComplexCifAccountComponent"]]
        }],
        toAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['toAccountRef']
        }],
        fromAccountRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fromAccountRef']
        }],
        toCifAccountObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['toCifAccountObj']
        }],
        exchangeRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['exchangeRef']
        }],
        localBeneficiaryLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['localBeneficiaryLookupComponentObj']
        }],
        internalBeneficiaryLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['internalBeneficiaryLookupComponentObj']
        }],
        internationalBeneficiaryLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['internationalBeneficiaryLookupComponentObj']
        }],
        bankCardBeneficiaryLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['bankCardBeneficiaryLookupComponentObj']
        }],
        localCardBeneficiaryLookupComponentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['localCardBeneficiaryLookupComponentObj']
        }]
      };
      PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_19__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_14__["LoggerService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_18__["PsNavigatorService"], _commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_23__["OmniPullService"]])], PaymentPage);
      /***/
    },

    /***/
    "wxfD":
    /*!*************************************************!*\
      !*** ./src/app/pages/payment/payment.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function wxfD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "yh/l":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-swift-account-list/ps-swift-account-list.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: PsSwiftAccountListComponent */

    /***/
    function yh_l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsSwiftAccountListComponent", function () {
        return PsSwiftAccountListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_swift_account_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-swift-account-list.component.html */
      "4Hic");
      /* harmony import */


      var _ps_swift_account_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-swift-account-list.component.scss */
      "Q4uH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /**
       * @author Zunair.Zakir
       * @since 29/01/2020
       *
       * <p> PsSwiftAccountListComponent </p>
       */


      var PsSwiftAccountListComponent = /*#__PURE__*/function (_commonSRC_psComponen) {
        function PsSwiftAccountListComponent(commonServices, logger, cdRef) {
          var _this9;

          _classCallCheck(this, PsSwiftAccountListComponent);

          _this9 = _callSuper(this, PsSwiftAccountListComponent, [commonServices, logger]);
          _this9.cdRef = cdRef;
          _this9.options = {}; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this9.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this9.containerLookUpOptions = {};
          _this9.labelValuesMap = new Map();
          _this9.headerMap = new Map();
          _this9.showSingleAccount = false;
          return _this9;
        }

        _inherits(PsSwiftAccountListComponent, _commonSRC_psComponen);

        return _createClass(PsSwiftAccountListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsSwiftAccountListComponent, "ngOnInit", this, 3)([]);

            this.populateAccountsMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            this.containerLookUpOptions.currencyFlag = 'currencyDesc';
            this.containerLookUpOptions.labelsValueMap = this.labelValuesMap;
            this.containerLookUpOptions.headerMap = this.headerMap;
            this.containerLookUpOptions.formGroup = this.options.group; // this.containerLookUpOptions.balanceMapping = this.balanceMapping();

            this.containerLookUpOptions.isEditable = this.options.isEditable;

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }

            this.containerLookUpOptions.statementOptions = {};
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.cdRef.markForCheck();

            if (this.options && (this.options.itemList === null || this.options.itemList === undefined)) {
              this.options.itemList = this.options.listOfOptions;
              this.showSingleAccount = false;
            } else if (this.options && this.options.itemList && this.options.itemList.length === 1 && this.showSingleAccount === false) {
              this.options.itemList = this.options.listOfOptions;
            } else if (this.options && this.options.showItemPopUp === undefined) {
              this.options.itemList = this.options.listOfOptions;
            }

            this.containerLookUpOptions.itemList = this.options.itemList;
            this.containerLookUpOptions.formGroup = this.options.group;
          }
        }, {
          key: "updateCard",
          value: function updateCard(account) {
            if (account && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === account;
              });
              this.options.item = this.options.itemList[0];
              this.showSingleAccount = !this.showSingleAccount;
              this.options.showItemPopUp = !this.options.showItemPopUp; // this.options.showSelectedCard = false;
            }

            this.onClickCard.emit(this.options);
          }
        }, {
          key: "populateAccountsMap",
          value: function populateAccountsMap() {
            var swiftAccountNumberMap = {};
            var swiftBankNameMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            swiftAccountNumberMap = {
              key: 'swiftAccountNumber',
              value: '--- --- ---',
              isEdit: false
            };
            swiftBankNameMap = {
              key: 'swiftBankName',
              value: '------',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'swiftName',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'swiftNameSub',
              isEdit: true
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('swift_account_key', swiftAccountNumberMap);
            this.labelValuesMap.set('bank_name_key', swiftBankNameMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
          }
        }]);
      }(_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsSwiftAccountListComponent.ctorParameters = function () {
        return [{
          type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      PsSwiftAccountListComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsSwiftAccountListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-swift-account',
        template: _raw_loader_ps_swift_account_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_ps_swift_account_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], PsSwiftAccountListComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=15-es5.js.map