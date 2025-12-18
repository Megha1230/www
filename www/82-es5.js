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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82], {
    /***/
    "FKG8":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequebook-request/chequebook-request.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FKG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"cheq_req_panel1\">\n\n      <ps-input-display-only id=\"name_to_be_printed\" [options]=\"nameOptions\">\n      </ps-input-display-only>\n\n\n      <ps-lookup-own-accounts id=\"cheq_req_transfer_from\" [options]=\"accountListOptions\"\n        (onAccountChange)=\"onAccountChange($event)\"></ps-lookup-own-accounts>\n\n\n      <ps-dropdown-chequebook-types id=\"'cheq_req_transfer_to\" [options]=\"chequebookTypeOptions\"\n        (onPsChange)=\"ontypesChange($event)\">\n      </ps-dropdown-chequebook-types>\n\n\n      <ps-input-display-only *ngIf=\"enableCifBranch\" id=\"account_cif_branch\" [options]=\"branchOptions\">\n\n      </ps-input-display-only>\n\n\n      <ps-lov-destination-branch *ngIf=\"!enableCifBranch\" id=\"cheq_destination_branch\"\n        [options]=\"destinationBranchOptions\" (onPsChange)=\"onBranchChange($event)\">\n      </ps-lov-destination-branch>\n\n\n      <ps-input-display-only id=\"no_of_leaves_cheq\" [options]=\"noOfLeaves\"></ps-input-display-only>\n\n\n      <!-- <ps-lov-preferred-language id=\"lov_preferred_language\" [options]=\"preferredLanguageOptions\" class=\"ps-lov-lang\"\n            (onPsChange)=\"onChange($event)\">\n          </ps-lov-preferred-language>  -->\n      <ps-dropdown-allowed-languages [options]=\"optionsPreferredLanguage\">\n      </ps-dropdown-allowed-languages>\n\n      <!-- AZDB-7876 - AMANAOI250069 - 202129 - The user is able to define No of chequebook as negative value - Dev: Muzammil Arif -->\n      <!-- using $event.preventDefault() to prevent firing the mouse wheel event -->\n      <ps-input-numeric (wheel)=\"$event.preventDefault()\" id=\"number_of_cheqbooks\" [options]=\"noOfchequeBooks\"></ps-input-numeric>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions2Step1\" id=\"cheq_req_panel3\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelOptions1Step2\" id=\"cheq_req_panel2\">\n\n      <ps-input-varchar id=\"collector_name\" [options]=\"collecterNameOptions\"></ps-input-varchar>\n\n\n      <ps-complex-id-details id=\"complex_id_details\" [options]=\"complexIdDetailsOptions\"\n        (onPsChange)=\"onItemChange($event)\">\n      </ps-complex-id-details>\n\n    </ps-container-panel>\n    <!-- <div>\n          <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"accountListOptions\"></ps-lookup-own-accounts>\n        </div> -->\n    <!-- <ps-input-amount id=\"input_amount\" [options]=\"inputAmountOptions\">\n        </ps-input-amount>\n        <div>\n          <ps-dropdown-currencies id=\"'currency' + id\" [options]=\"currencyOptions\"></ps-dropdown-currencies>\n        </div>\n        <div>\n          <ps-complex-amount></ps-complex-amount>\n        </div> -->\n    <!-- <div>\n          <ps-input-numeric id=\"'leaveNosFrom' + id\" [options]=\"leaveNosFromOptions\"></ps-input-numeric>\n        </div>\n        <div>\n          <ps-input-numeric id=\"'leaveNosTo' + id\" [options]=\"leaveNosToOptions\"></ps-input-numeric>\n        </div> -->\n    <!-- <div>\n          <ps-input-varchar id=\"'collecterName' + id\" [options]=\"collecterNameOptions\"></ps-input-varchar>\n        </div> -->\n    <!-- <div>\n        <ps-lov-preferred-language id=\"lov_preferred_language\" [options]=\"preferredLanguageOptions\" class=\"ps-lov-lang\"\n          (onPsChange)=\"onChange($event)\">\n        </ps-lov-preferred-language> \n          </div>-->\n    <!-- <ps-dropdown-id-types id=\"id_types\" [options]=\"idTypeOptions\"></ps-dropdown-id-types> -->\n\n\n  </ps-form-step>\n  <ps-form-step step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ng-container *psStep=\"'step2'\">\n      <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\"></ps-map-atm-branches>\n    </ng-container>\n  </ps-form-step>\n  <!-- <ps-form-step *psStep=\"'step3'\" step3  [id]=\"stest\">\n   \n  </ps-form-step> -->\n</ps-template-stepper>";
      /***/
    },

    /***/
    "uvEi":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/chequebook-request/chequebook-request.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function uvEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVxdWVib29rLXJlcXVlc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "y9pH":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/chequebook-request/chequebook-request.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ChequebookRequestPage */

    /***/
    function y9pH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequebookRequestPage", function () {
        return ChequebookRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chequebook_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chequebook-request.page.html */
      "FKG8");
      /* harmony import */


      var _chequebook_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chequebook-request.page.scss */
      "uvEi");
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


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */
      "f42Q");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../omni-base/omni-base.page */
      "gKqT");

      var ChequebookRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function ChequebookRequestPage(commonProv, loggerP, omniPull, eventEmitterService, commonService, navService) {
          var _this;

          _classCallCheck(this, ChequebookRequestPage);

          _this = _callSuper(this, ChequebookRequestPage);
          _this.commonProv = commonProv;
          _this.loggerP = loggerP;
          _this.omniPull = omniPull;
          _this.eventEmitterService = eventEmitterService;
          _this.commonService = commonService;
          _this.navService = navService;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.chequebookVO = {};
          _this.stepperOptions = {
            stepperName: 'cheq_req_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['cheque_req_step1', 'cheque_req_step2'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: _commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_14__["PsCommonBusinessSettings"].serviceUrl.chequeBookRequest,
              group: _this.formGroup
            },
            requestObject: _this.chequebookVO
          };
          _this.inputAmountOptions = {
            labelKey: 'Amount_key',
            placeHolder: 'enter_your_amount_key',
            fcName: 'inputAmount',
            group: _this.formGroup,
            type: 'amount',
            decimalPoints: 3
          };
          _this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'currency_key',
            group: _this.formGroup,
            fcName: 'currency'
          };
          _this.noOfLeaves = {
            labelKey: 'number_of_leaves_key',
            placeHolder: 'number_of_leaves_key',
            group: _this.formGroup,
            fcName: 'noOfLeaves'
          };
          _this.noOfchequeBooks = {
            labelKey: 'number_of_chequebooks_key',
            placeHolder: 'number_of_chequebooks_key',
            group: _this.formGroup,
            fcName: 'noOfChequeBooks',
            allowDecimal: false
          };
          _this.collecterNameOptions = {
            labelKey: 'collector_name_key',
            placeHolder: 'collector_name_key',
            group: _this.formGroup,
            fcName: 'collectorName'
          };
          _this.accountListOptions = {
            labelKey: 'account_no_key',
            placeHolder: 'select_account_no_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            currency: 'USD',
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'savingAccNo',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.chequebookVO
          };
          _this.preferredLanguageOptions = {
            fcName: 'lang',
            group: _this.formGroup,
            labelKey: 'chequebook_language_key',
            placeHolder: 'select_chequebook_lang_key'
          };
          _this.idTypeOptions = {
            fcName: 'id_types',
            group: _this.formGroup
          };
          _this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'chequebook_details_key',
            iconName: 'document',
            expanded: true
          };
          _this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'collector_details_key',
            iconName: 'document',
            expanded: false
          };
          _this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this.nameOptions = {
            placeHolder: 'name_to_be_printed_key',
            labelKey: 'name_to_be_printed_key',
            group: _this.formGroup,
            fcName: 'nameToBePrinted',
            disablePreview: true
          };
          _this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this.formGroup
            },
            idNumberOptions: {
              labelKey: 'id_number_key',
              placeHolder: 'enter_id_number_key',
              fcName: 'idNumber',
              group: _this.formGroup
            },
            dateExpiryOptions: {
              labelKey: 'expiry_date_key',
              placeHolder: 'enter_expiry_date_key',
              fcName: 'expiryDate',
              group: _this.formGroup
            },
            countriesOptions: {
              placeHolder: 'country_of_issuance_key',
              labelKey: 'country_of_issuance_key',
              fcName: 'country',
              group: _this.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'issueDate',
              group: _this.formGroup
            }
          };
          _this.chequebookTypeOptions = {
            group: _this.formGroup,
            fcName: 'chequeBookTypes'
          };
          _this.branchOptions = {
            placeHolder: 'get_cif_branch_frm_session_key',
            labelKey: 'branch_key',
            group: _this.formGroup,
            fcName: 'branchName',
            disablePreview: true
          };
          _this.destinationBranchOptions = {
            group: _this.formGroup,
            fcName: 'destinationBranch'
          };
          _this.optionsPreferredLanguage = {
            fcName: 'lang',
            group: _this.formGroup,
            labelKey: 'chequebook_language_key',
            placeHolder: 'select_chequebook_lang_key'
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup
          };
          _this.enableCifBranch = true;
          _this.showDestinationBranch = true;
          return _this;
        }

        _inherits(ChequebookRequestPage, _omni_base_omni_base_);

        return _createClass(ChequebookRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(ChequebookRequestPage, "init", this, 3)([]);

            this.cifInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);
            this.mapAtmBranchesOptions = {
              group: this.formGroup,
              fcName: 'mapAtmBranches',
              labelKey: 'map_atm_branch_key',
              mapOptions: {
                labelKey: 'map'
              },
              showSegments: false,
              mapTypesInclude: '\'B\'',
              branchIds: '1,3,5',
              parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].COLLECTIONBRANCH,
              requestVO: this.chequebookVO
            };
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            _superPropGet(ChequebookRequestPage, "ionViewDidEnter", this, 3)([]);

            this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].COLLECTIONBRANCH).then(function (result) {
              if (result !== -1 && result.CollectionBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].END_USER_INPUT_ID) {
                _this2.commonService.branchSelectionAndMapControl(1, [{
                  fcName: _this2.stepperOptions.namesofSteps[1]
                }, {
                  fcName: _this2.mapAtmBranchesOptions.fcName
                }, {
                  fcName: 'cheq_req_panel3'
                }], true);

                _this2.enableCifBranch = false;
                _this2.branchType = result.CollectionBranch;
              } else {
                _this2.branchType = result.CollectionBranch;
                _this2.enableCifBranch = true;

                _this2.commonService.branchSelectionAndMapControl(0, [{
                  fcName: _this2.stepperOptions.namesofSteps[1]
                }, {
                  fcName: _this2.mapAtmBranchesOptions.fcName
                }, {
                  fcName: 'cheq_req_panel3'
                }], true);

                _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [_this2.destinationBranchOptions.fcName], 0);

                _this2.commonProv.setValInsideNestedObj(_this2.branchOptions.fcName, _this2.cifInfo.cifBranch ? _this2.cifInfo.customerInfoCO.branchBriefDesc : '', _this2.chequebookVO);

                _this2.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [_this2.branchOptions.fcName], 1);
              }
            })["catch"](function (error) {});
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.mapAtmBranchesOptions.fcName], 0);
            var defaultValidations = new Map();
            defaultValidations.set(this.noOfchequeBooks.fcName, this.commonProv.prepareValidation(false, null, false, 1, null, null, 2));
            this.commonProv.setDefaultValidators(defaultValidations, this.formGroup); // send the cif branch in all cases to the service

            this.commonProv.copyObject(this.stepperOptions.submitOptions.extraParams, {
              branch: this.cifInfo.customerInfoCO ? this.cifInfo.customerInfoCO.branchCode : ''
            }, false, true);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.branchOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.noOfLeaves.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.nameOptions.fcName], 1); // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MAXLENGTH, [this.noOfchequeBooks.fcName], 2);

            if (this.cifInfo.customerInfoCO.longName) {
              this.commonProv.setValInsideNestedObj(this.nameOptions.fcName, this.cifInfo.customerInfoCO.longName, this.chequebookVO);
            }

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MINLENGTH, [this.optionsPreferredLanguage.fcName], 2); // this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_READONLY, [this.nameOptions.fcName], 1);

            this.baseFormGroup = this.formGroup;
          }
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.chequebookVO);
            }
          }
        }, {
          key: "onChange",
          value: function onChange(values) {}
        }, {
          key: "onItemChange",
          value: function onItemChange(values) {}
        }, {
          key: "onBranchChange",
          value: function onBranchChange(values) {
            if (values && values.description && values.description.indexOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].DESTINATIONBRANCH_OPTION) > -1) {
              this.showDestinationBranch = true;
              this.commonService.branchSelectionAndMapControl(1, [{
                fcName: this.stepperOptions.namesofSteps[1]
              }, {
                fcName: this.mapAtmBranchesOptions.fcName
              }, {
                fcName: 'cheq_req_panel3'
              }], true); // if (!this.enableCifBranch) {
              //   this.commonProv.applyDynScreenDisplay(ConstantCommon.ACTION_TYPE_MANDATORY, [this.mapAtmBranchesOptions.fcName], 1);
              // }
            } else {
              this.showDestinationBranch = false;
              this.commonService.branchSelectionAndMapControl(0, [{
                fcName: this.stepperOptions.namesofSteps[1]
              }, {
                fcName: this.mapAtmBranchesOptions.fcName
              }, {
                fcName: 'cheq_req_panel3'
              }], true);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapBranchInput'], 0);
            }
          }
        }, {
          key: "onAccountChange",
          value: function onAccountChange(fromAccount) {
            if (this.branchType === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_6__["CommonBussinessConstant"].ACCOUNT_BRANCH_ID) {
              if (fromAccount && fromAccount.branchDescription) {
                this.commonProv.setValInsideNestedObj(this.branchOptions.fcName, fromAccount.branchDescription ? fromAccount.branchDescription : '', this.chequebookVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.branchOptions.fcName], 1);
              }
            }
          }
        }, {
          key: "getBranchDesc",
          value: function getBranchDesc(branchId) {
            var _this3 = this;

            try {
              var paramData = {
                branchesIdList: branchId
              };
              this.omniPull.returnBranchesList(paramData).then(function (result) {
                if (result && result.gridModel != null && result.gridModel.length > 0) {} else {
                  _this3.loggerP.warn(result, 'empty response');
                }
              })["catch"](function (error) {});
            } catch (error) {}
          }
        }, {
          key: "ontypesChange",
          value: function ontypesChange(values) {
            if (values && values.selectedObj && values.selectedObj.numberOfCheques) {
              this.commonProv.setValInsideNestedObj(this.noOfLeaves.fcName, values.selectedObj.numberOfCheques, this.chequebookVO);
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_15__["OmniBasePage"]);

      ChequebookRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]
        }];
      };

      ChequebookRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chequebook-request',
        template: _raw_loader_chequebook_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chequebook_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]])], ChequebookRequestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=82-es5.js.map