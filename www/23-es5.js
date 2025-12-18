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

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23], {
    /***/
    "7xyC":
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.scss ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xyC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXBheUlkLXR5cGVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "AxTM":
    /*!***************************************************************!*\
      !*** ./src/app/pages/payId-transfer/payId-transfer.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function AxTM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlJZC10cmFuc2Zlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "fmW+":
    /*!**************************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: PsComplexPayIdTypesDetailsComponent */

    /***/
    function fmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsComplexPayIdTypesDetailsComponent", function () {
        return PsComplexPayIdTypesDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_complex_payId_types_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-complex-payId-types-details.component.html */
      "mAit");
      /* harmony import */


      var _ps_complex_payId_types_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-complex-payId-types-details.component.scss */
      "7xyC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsComplexPayIdTypesDetailsComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsComplexPayIdTypesDetailsComponent(common, logger) {
          var _this;

          _classCallCheck(this, PsComplexPayIdTypesDetailsComponent);

          _this = _callSuper(this, PsComplexPayIdTypesDetailsComponent, [common, logger]);
          _this.common = common;
          _this.logger = logger;
          _this.selectedType = '';
          return _this;
        }

        _inherits(PsComplexPayIdTypesDetailsComponent, _src_app_commonSRC_ps);

        return _createClass(PsComplexPayIdTypesDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsComplexPayIdTypesDetailsComponent, "init", this, 3)([]);
          }
        }, {
          key: "onPayIdTypeSelected",
          value: function onPayIdTypeSelected(event) {
            if (event && event.itemValue) {
              this.selectedType = event.itemValue;
            } else {
              this.selectedType = null;
            }

            this.onPsChange.emit(event);
          }
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_4__["PsBaseFieldComponent"]);

      PsComplexPayIdTypesDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      };

      PsComplexPayIdTypesDetailsComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PsComplexPayIdTypesDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-payId-types-details',
        template: _raw_loader_ps_complex_payId_types_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_payId_types_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])], PsComplexPayIdTypesDetailsComponent);
      /***/
    },

    /***/
    "mAit":
    /*!******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component.html ***!
      \******************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mAit(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-container-complex>\n  <ps-lov-payId-types id='payidTypes' [options]=\"options.payIdTypesOptions\" (onPsChange)=\"onPayIdTypeSelected($event)\">\n  </ps-lov-payId-types>\n\n  <ps-entity-phone-number *ngIf=\"selectedType === 'M'\" id='mobile' [options]=\"options.mobileOptions\">\n  </ps-entity-phone-number>\n\n  <ps-input-email *ngIf=\"selectedType === 'E'\" id='email' [options]=\"options.emailOptions\"></ps-input-email>\n\n  <ps-entity-phone-number *ngIf=\"selectedType === 'P'\" id='phone' [options]=\"options.phoneOptions\">\n  </ps-entity-phone-number>\n\n</ps-container-complex>";
      /***/
    },

    /***/
    "ofsm":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payId-transfer/payId-transfer.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ofsm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"payidTransferPanelOptions\" id=\"payId-transfer-panel\">\n      <ps-lookup-own-payIds [options]=\"fromPayIdLookupOptions\"></ps-lookup-own-payIds>\n      <ps-complex-segment class=\"payid-transfer-segment\" id=\"payidTransferSegment\" [options]=\"complexSegmentOptions\"\n        (complexSegmentButtonClicked)=\"onClickSegment($event)\">\n        <ps-content-segment segment1 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[0]\">\n          <ps-lookup-own-payIds [options]=\"toPayIdLookupOptions\"></ps-lookup-own-payIds>\n        </ps-content-segment>\n\n        <ps-content-segment segment2 [id]=\"complexSegmentOptions.segmentContainerOptions.namesofSegments[1]\">\n          <ps-complex-payId-types-details [options]=\"payIdTypesDetailsOptions\">\n          </ps-complex-payId-types-details>\n        </ps-content-segment>\n      </ps-complex-segment>\n      <ps-complex-amount [options]=\"complexAmountOptions\">\n\n      </ps-complex-amount>\n      <ps-input-varchar [options]=\"ownPurposeOptions\"></ps-input-varchar>\n      <ps-input-varchar [options]=\"benefPurposeOptions\"></ps-input-varchar>\n\n      <ps-select-toggle [options]=\"saveToBenefToggleOptions\"></ps-select-toggle>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"branchPanelOptions\" id=\"branch-panel\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "q5E2":
    /*!*************************************************************!*\
      !*** ./src/app/pages/payId-transfer/payId-transfer.page.ts ***!
      \*************************************************************/

    /*! exports provided: PayIdTransferPage */

    /***/
    function q5E2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayIdTransferPage", function () {
        return PayIdTransferPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_payId_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./payId-transfer.page.html */
      "ofsm");
      /* harmony import */


      var _payId_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payId-transfer.page.scss */
      "AxTM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-payId-beneficiary/ps-payId-beneficiary.component */
      "PUN2");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-payId-types-details/ps-complex-payId-types-details.component */
      "fmW+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/ps-common.settings */
      "QZhd");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");

      var PayIdTransferPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function PayIdTransferPage(navService) {
          var _this2;

          _classCallCheck(this, PayIdTransferPage);

          _this2 = _callSuper(this, PayIdTransferPage);
          _this2.navService = navService;
          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this2.transferVO = {};
          _this2.stepperOptions = {
            stepperName: 'payId_transfer_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['payId_transfer_details'],
            group: _this2.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_9__["PsCommonSettings"].serviceUrl.commonSubmitAction,
              group: _this2.formGroup,
              postCallFunction: {
                func: function func(response) {
                  var _this3 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this3.executionClass.handleScreenVo(response));
                  });
                },
                executionClass: _this2,
                params: [_this2]
              }
            },
            requestObject: _this2.transferVO
          };
          _this2.payidTransferPanelOptions = {
            isExpandable: true,
            labelKey: 'payid_transfer_key',
            iconName: 'document',
            expanded: true
          };
          _this2.branchPanelOptions = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this2.fromPayIdLookupOptions = {
            labelKey: 'from_payid_key',
            placeHolder: 'select_from_payid_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_5__["PsPayIdBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'fromPayId',
            fromTo: 'from',
            requestObject: _this2.transferVO
          };
          _this2.toPayIdLookupOptions = {
            labelKey: 'to_payid_key',
            placeHolder: 'select_to_payid_key',
            component: src_app_commonBussinessSRC_psComponents_ps_beneficiary_ps_payId_beneficiary_ps_payId_beneficiary_component__WEBPACK_IMPORTED_MODULE_5__["PsPayIdBeneficiaryComponent"],
            group: _this2.formGroup,
            fcName: 'toBeneficiary',
            fromTo: 'to',
            requestObject: _this2.transferVO
          };
          _this2.complexSegmentOptions = {
            group: _this2.formGroup,
            segmentOptions: {
              fcName: 'beneficiarySegment',
              segmentList: [{
                selected: true,
                itemValue: 'to_benef',
                description: _this2.commonProv.translate('to_beneficiary_key')
              }, {
                selected: true,
                itemValue: 'to_others',
                description: _this2.commonProv.translate('to_other_key')
              }],
              group: _this2.formGroup
            },
            segmentContainerOptions: {
              numberOfSegments: 2,
              namesofSegments: ['beneficiary_segment', 'other_segment']
            }
          };
          _this2.payIdTypesDetailsOptions = {
            payIdTypesOptions: {
              fcName: 'payIdType',
              group: _this2.formGroup
            },
            mobileOptions: {
              fcName: 'mobileNo',
              labelKey: 'mobile_no_key',
              placeHolder: 'enter_mobile_no_key',
              group: _this2.formGroup
            },
            emailOptions: {
              fcName: 'email',
              labelKey: 'email_address_key',
              placeHolder: 'enter_email_address_key',
              group: _this2.formGroup
            },
            phoneOptions: {
              fcName: 'phoneNo',
              labelKey: 'phone_number_key',
              placeHolder: 'enter_phone_number_key',
              group: _this2.formGroup
            }
          };
          _this2.complexAmountOptions = {
            currenciesOptions: {
              labelKey: 'currency_key',
              placeHolder: 'select_currency_key',
              group: _this2.formGroup,
              fcName: 'currency'
            },
            amountOptions: {
              labelKey: 'amount_key',
              placeHolder: 'enter_amount_key',
              fcName: 'transferAmount',
              group: _this2.formGroup,
              type: 'amount',
              decimalPoints: 3
            },
            requestObject: _this2.transferVO
          };
          _this2.ownPurposeOptions = {
            labelKey: 'own_purpose_key',
            placeHolder: 'enter_the_purpose_to_be_shown_on_your_statement_key',
            group: _this2.formGroup,
            fcName: 'ownPurpose'
          };
          _this2.benefPurposeOptions = {
            labelKey: 'beneficiary_purpose_key',
            placeHolder: 'enter_the_purpose_to_be_shared_with_beneficiary_bank_key',
            group: _this2.formGroup,
            fcName: 'benefPurpose'
          };
          _this2.saveToBenefToggleOptions = {
            labelKey: 'save_beneficiary_key',
            placeHolder: 'save_beneficiar_key',
            group: _this2.formGroup,
            fcName: 'saveBenef',
            psClass: 'toggleColor'
          };
          _this2.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this2.formGroup
          };
          return _this2;
        }

        _inherits(PayIdTransferPage, _omni_base_omni_base_);

        return _createClass(PayIdTransferPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PayIdTransferPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;
            this.commonProv.copyObject(this.transferVO, this.navService.getAllParams() ? this.navService.getAllParams().ScreenVO ? this.navService.getAllParams().ScreenVO : this.navService.getAllParams() : {});
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(PayIdTransferPage, "ionViewDidEnter", this, 3)([]);
          }
        }, {
          key: "onClickSegment",
          value: function onClickSegment(event) {
            var _a, _b;

            if (event === this.complexSegmentOptions.segmentOptions.segmentList[0].itemValue) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.payIdTypesDetailsOptions.payIdTypesOptions.fcName], 0);
              this.commonProv.setValInsideNestedObj(this.payIdTypesDetailsOptions.payIdTypesOptions.fcName, null, this.transferVO);
              this.complexPayIdTypesDetailsComp.onPayIdTypeSelected();
            } else {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.toPayIdLookupOptions.fcName, this.toPayIdLookupOptions.fcName + '_lookupKey'], 0);
              this.commonProv.setValInsideNestedObj(this.toPayIdLookupOptions.fcName, null, this.transferVO);
              (_a = this.formGroup.controls[this.toPayIdLookupOptions.fcName]) === null || _a === void 0 ? void 0 : _a.reset();
              (_b = this.formGroup.controls[this.toPayIdLookupOptions.fcName + '_lookupKey']) === null || _b === void 0 ? void 0 : _b.reset();
            }

            this.formGroup.controls[this.complexSegmentOptions.segmentOptions.fcName].setValue(event);
          }
        }, {
          key: "savePayIdBeneficiary",
          value: function savePayIdBeneficiary() {
            var _a, _b, _c, _d, _e;

            var page;
            page = {
              operID: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PAYID_BENEFICIARY_OPER_ID,
              title: 'payid_beneficiary_key',
              component: 'add-payId',
              param: {
                payIdType: (_a = this.formGroup.controls[this.payIdTypesDetailsOptions.payIdTypesOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value,
                mobileNumber: (_b = this.formGroup.controls[this.payIdTypesDetailsOptions.mobileOptions.fcName]) === null || _b === void 0 ? void 0 : _b.value,
                emailAddress: (_c = this.formGroup.controls[this.payIdTypesDetailsOptions.emailOptions.fcName]) === null || _c === void 0 ? void 0 : _c.value,
                phoneNumber: (_d = this.formGroup.controls[this.payIdTypesDetailsOptions.phoneOptions.fcName]) === null || _d === void 0 ? void 0 : _d.value,
                purpose: (_e = this.formGroup.controls[this.benefPurposeOptions.fcName]) === null || _e === void 0 ? void 0 : _e.value
              }
            };
            this.navService.openPage(page);
          }
        }, {
          key: "handleScreenVo",
          value: function handleScreenVo(resp) {
            var _a;

            if (((_a = this.formGroup.controls[this.saveToBenefToggleOptions.fcName]) === null || _a === void 0 ? void 0 : _a.value) == true) {
              this.savePayIdBeneficiary();
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      PayIdTransferPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]
        }];
      };

      PayIdTransferPage.propDecorators = {
        complexPayIdTypesDetailsComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_payId_types_details_ps_complex_payId_types_details_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexPayIdTypesDetailsComponent"]]
        }]
      };
      PayIdTransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'payId-transfer',
        template: _raw_loader_payId_transfer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payId_transfer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_10__["PsNavigatorService"]])], PayIdTransferPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=23-es5.js.map