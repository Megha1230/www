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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13], {
    /***/
    "2lx5":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div>\n    <ps-action-hyperlink [id]=\"this.options.type == 'INTERNAL'? 'addInternalBenef': 'addBankCardBenef'\"\n      [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\" *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n\n  <div *ngIf=\"options?.itemList?.length > 0\" class=\"benef-list\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'internal-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>";
      /***/
    },

    /***/
    "9bx7":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.scss ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnRlcm5hbC1iZW5lZmljaWFyeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Do7b":
    /*!*****************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.scss ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Do7b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnRlcm5hdGlvbmFsLWJlbmVmaWNpYXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "YaLh":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: PsCashTransferComponent */

    /***/
    function YaLh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsCashTransferComponent", function () {
        return PsCashTransferComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_cash_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-cash-transfer.component.html */
      "Yn0C");
      /* harmony import */


      var _ps_cash_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-cash-transfer.component.scss */
      "pZ9k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /**
       * @author G.Radwan
       * @since 04/02/2020
       *
       * <p> PsCashTransferComponent is business component contains mapping for for container-lookup component to load local beneficiaries</p>
       */


      var PsCashTransferComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsCashTransferComponent() {
          var _this;

          _classCallCheck(this, PsCashTransferComponent);

          _this = _callSuper(this, PsCashTransferComponent);
          _this.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.options = {};
          _this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          _this.showSingleAccount = false;
          _this.addBeneficiaryOptions = {
            route: 'cash-transfer',
            labelKey: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
            iconOptions: {
              iconName: 'add-benef',
              labelOptions: {
                labelKey: 'add_cash_transfer_key'
              }
            },
            pageOptions: {
              operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID,
              title: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_TRANSFER_DESC,
              iconName: 'beneficiaries'
            }
          };
          _this.bRefresh = false;
          return _this;
        }

        _inherits(PsCashTransferComponent, _src_app_commonSRC_ps);

        return _createClass(PsCashTransferComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsCashTransferComponent, "init", this, 3)([]);

            this.populateCashTransferMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            } // this.containerLookUpOptions.balanceMapping = this.balanceMapping();


            if (this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }
          }
        }, {
          key: "getContainerLookUpOptions",
          value: function getContainerLookUpOptions() {
            return this.prepareLookUp();
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp() {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.currencyFlag = 'currencyDesc';
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
            lookupDetails.requestMap = this.requestMap;
            lookupDetails.editRequestMap = this.editRequestMap;
            lookupDetails.group = this.options.group;
            lookupDetails.actionDetailsOptions = [{
              id: 'delete',
              buttonIcon: 'delete',
              actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
              cssClass: 'fab-edit-button',
              labelOptions: {
                labelKey: 'delete_key'
              },
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              alertType: 'prompt',
              alertStyle: 'info',
              reloadList: true
            }, {
              id: 'edit',
              label: 'edit_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'edit1',
                  labelOptions: {
                    labelKey: 'edit_key'
                  }
                },
                route: 'cash-transfer',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_BENEFICIARY_OPER_ID,
                  iconName: 'edit1',
                  title: 'edit_key'
                }
              }
            }, {
              id: 'pay',
              label: 'pay_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'create',
                  labelOptions: {
                    labelKey: 'pay_key'
                  }
                },
                route: 'payment',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].CASH_TRANSFER_OPER_ID,
                  iconName: 'create'
                },
                preCallFunction: {
                  func: function func() {
                    var _this2 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this2.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[2].actionHyperlink));
                    });
                  },
                  executionClass: this,
                  params: []
                }
              }
            }];
            lookupDetails.statementOptions = {};
            lookupDetails.reloadFunction = {
              func: function func() {
                var _this3 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this3.executionClass.reloadList());
                });
              },
              executionClass: this,
              params: []
            };
            return lookupDetails;
          }
        }, {
          key: "reloadList",
          value: function reloadList() {
            this.reloadFct.emit();
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
              this.options.showItemPopUp = !this.options.showItemPopUp;
            }

            this.onClickCard.emit(this.options);
          }
          /**
           * populating the map for internal beneficiaries
           */

        }, {
          key: "populateCashTransferMap",
          value: function populateCashTransferMap() {
            var idTypeMap = {};
            var idNumberMap = {};
            var mobileNumberMap = {};
            var purposeMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {}; // load value on card expend

            idTypeMap = {
              key: 'idTypeDescriptionConcat',
              value: '------',
              isEdit: false
            };
            idNumberMap = {
              key: 'idNumber',
              value: '------',
              isEdit: false
            };
            mobileNumberMap = {
              key: 'cashBenefPhoneKey',
              value: '------',
              isEdit: false
            };
            purposeMap = {
              key: 'cashPurposeKey',
              value: '------',
              isEdit: false
            };
            headerTitleMap = {
              key: 'cashTitleKey',
              value: 'benefName',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'cashBenefNameKey',
              isEdit: true
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('id_type_key', idTypeMap);
            this.labelValuesMap.set('id_number_key', idNumberMap);
            this.labelValuesMap.set('mobile_number_key', mobileNumberMap);
            this.labelValuesMap.set('purpose_key', purposeMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
            this.requestMap.set('nickNameNumber', 'nickNameNumber');
            this.requestMap.set('oldNickName', 'benefName');
            this.editRequestMap.set('newNickName', 'benefName');
            this.editRequestMap.set('type', 'A');
          }
        }, {
          key: "prepareTransaction",
          value: function prepareTransaction(actionCard) {
            actionCard.navigationOptions.queryParams.ScreenVO = {
              toAccountType: 'cashTransfer',
              showBeneficiaryDetails: true,
              toBeneficiary: actionCard.navigationOptions.queryParams.idNumber,
              toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.idNumber,
              purposeTxtDesc: actionCard.navigationOptions.queryParams.purpose
            };
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"]);

      PsCashTransferComponent.ctorParameters = function () {
        return [];
      };

      PsCashTransferComponent.propDecorators = {
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsCashTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-cash-transfer',
        template: _raw_loader_ps_cash_transfer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_cash_transfer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PsCashTransferComponent);
      /***/
    },

    /***/
    "Yn0C":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yn0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div>\n    <ps-action-hyperlink id=\"addCashBenef\" [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\"\n      *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n  <div *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'local-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>";
      /***/
    },

    /***/
    "ZI0R":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: PsInternationalBeneficiaryComponent */

    /***/
    function ZI0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInternationalBeneficiaryComponent", function () {
        return PsInternationalBeneficiaryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_international_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-international-beneficiary.component.html */
      "t1wS");
      /* harmony import */


      var _ps_international_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-international-beneficiary.component.scss */
      "Do7b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /**
       * @author Aftab.Ali
       * @since 04/02/2020
       *
       * <p> PsInternationalBeneficiaryComponent is business component contains mapping for for container-lookup component to load international beneficiaries</p>
       */


      var PsInternationalBeneficiaryComponent = /*#__PURE__*/function (_src_app_commonSRC_ps2) {
        function PsInternationalBeneficiaryComponent() {
          var _this4;

          _classCallCheck(this, PsInternationalBeneficiaryComponent);

          _this4 = _callSuper(this, PsInternationalBeneficiaryComponent);
          _this4.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this4.options = {}; // tslint:disable-next-line: no-output-on-prefix

          _this4.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this4.labelValuesMap = new Map();
          _this4.headerMap = new Map();
          _this4.requestMap = new Map();
          _this4.editRequestMap = new Map();
          _this4.showSingleAccount = false;
          _this4.addBeneficiaryOptions = {
            route: 'international-beneficiary',
            labelKey: 'international_beneficiary_key',
            iconOptions: {
              iconName: 'add-benef',
              labelOptions: {
                labelKey: 'add_international_benef_key'
              }
            },
            pageOptions: {
              operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
              title: 'international_beneficiary_key',
              iconName: 'beneficiaries'
            }
          };
          _this4.bRefresh = false;
          return _this4;
        }

        _inherits(PsInternationalBeneficiaryComponent, _src_app_commonSRC_ps2);

        return _createClass(PsInternationalBeneficiaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsInternationalBeneficiaryComponent, "init", this, 3)([]);

            this.populateInternationalBeneficiariesMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }
          }
        }, {
          key: "getContainerLookUpOptions",
          value: function getContainerLookUpOptions() {
            return this.prepareLookUp();
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp() {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.currencyFlag = 'currencyDesc';
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group; // this.containerLookUpOptions.balanceMapping = this.balanceMapping();

            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
            lookupDetails.requestMap = this.requestMap;
            lookupDetails.editRequestMap = this.editRequestMap;
            lookupDetails.group = this.options.group;
            lookupDetails.actionDetailsOptions = [{
              id: 'delete',
              labelOptions: {
                labelKey: 'delete_key'
              },
              buttonIcon: 'delete',
              actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
              cssClass: 'delete-benef international-trasnfer-actions fab-edit-button',
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              alertType: 'prompt',
              alertStyle: 'info',
              reloadList: true
            }, {
              id: 'details',
              label: 'details_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'document',
                  labelOptions: {
                    labelKey: 'details_key'
                  }
                },
                route: 'international-beneficiary',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: true
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
                  iconName: 'document',
                  title: 'details_key'
                }
              },
              cssClass: 'details-benef international-trasnfer-actions'
            }, {
              id: 'edit',
              label: 'edit_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'edit1',
                  labelOptions: {
                    labelKey: 'edit_key'
                  }
                },
                route: 'international-beneficiary',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].EXTERNAL_BENEFICIARY_OPER_ID,
                  iconName: 'edit1',
                  title: 'edit_key'
                }
              },
              cssClass: 'edit-benef international-trasnfer-actions'
            }, {
              id: 'pay',
              label: 'pay_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'create',
                  labelOptions: {
                    labelKey: 'pay_key'
                  }
                },
                route: 'payment',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNATIONAL_BENEFICIARY_TRANSFER,
                  iconName: 'create'
                },
                preCallFunction: {
                  func: function func() {
                    var _this5 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this5.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[3].actionHyperlink));
                    });
                  },
                  executionClass: this,
                  params: []
                }
              },
              cssClass: 'pay-benef international-trasnfer-actions'
            }];
            lookupDetails.statementOptions = {}; //  id: #1237692 -  Details :Updated by neethu  - Date:02/08/2021 - Desc:Added reload function inorder to refresh the beneficiarylist .  

            lookupDetails.reloadFunction = {
              func: function func() {
                var _this6 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this6.executionClass.reloadList());
                });
              },
              executionClass: this,
              params: []
            };
            return lookupDetails;
          }
        }, {
          key: "reloadList",
          value: function reloadList() {
            this.reloadFct.emit();
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
          /**
           * populating the map for internal beneficiaries
           */

        }, {
          key: "populateInternationalBeneficiariesMap",
          value: function populateInternationalBeneficiariesMap() {
            var beneficiaryAccountNumberMap = {};
            var beneficiaryBankNameMap = {};
            var beneficiaryNameMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            beneficiaryAccountNumberMap = {
              key: 'swiftAccountNumberKey',
              value: '--- --- ---',
              isEdit: false
            };
            beneficiaryNameMap = {
              key: 'swiftBenefNameKey',
              value: '------',
              isEdit: false
            };
            beneficiaryBankNameMap = {
              key: 'swiftBenefBankNameKey',
              value: '------',
              isEdit: false
            };
            headerTitleMap = {
              key: 'swiftTitleKey',
              value: 'accountNumber',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'nickName',
              isEdit: true
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('benef_name_key', beneficiaryNameMap);
            this.labelValuesMap.set('account_number_key', beneficiaryAccountNumberMap);
            this.labelValuesMap.set('bank_name_key', beneficiaryBankNameMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
            this.requestMap.set('nickNameNumber', 'nickNameNumber');
            this.requestMap.set('oldNickName', 'benefName');
            this.editRequestMap.set('newNickName', 'benefName');
            this.editRequestMap.set('type', 'A');
          }
        }, {
          key: "prepareTransaction",
          value: function prepareTransaction(actionCard) {
            actionCard.navigationOptions.queryParams.ScreenVO = {
              toAccountType: 'internationalAccountTransfer',
              toBeneficiary: actionCard.navigationOptions.queryParams.accountNumber,
              toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.accountNumber,
              swiftCode: actionCard.navigationOptions.queryParams.swiftCode,
              currency: actionCard.navigationOptions.queryParams.currency
            };
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateListPage"]);

      PsInternationalBeneficiaryComponent.ctorParameters = function () {
        return [];
      };

      PsInternationalBeneficiaryComponent.propDecorators = {
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsInternationalBeneficiaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-international-beneficiary',
        template: _raw_loader_ps_international_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_international_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PsInternationalBeneficiaryComponent);
      /***/
    },

    /***/
    "Zrkw":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-internal-beneficiary/ps-internal-beneficiary.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: PsInternalBeneficiaryComponent */

    /***/
    function Zrkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsInternalBeneficiaryComponent", function () {
        return PsInternalBeneficiaryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_internal_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-internal-beneficiary.component.html */
      "2lx5");
      /* harmony import */


      var _ps_internal_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-internal-beneficiary.component.scss */
      "9bx7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");
      /**
       * @author Aftab.Ali
       * @since 04/02/2020
       *
       * <p> PsInternalBeneficiaryComponent is business component contains mapping for for container-lookup component to load internal beneficiaries</p>
       */


      var PsInternalBeneficiaryComponent = /*#__PURE__*/function (_src_app_commonSRC_ps3) {
        function PsInternalBeneficiaryComponent(navService) {
          var _this7;

          _classCallCheck(this, PsInternalBeneficiaryComponent);

          _this7 = _callSuper(this, PsInternalBeneficiaryComponent);
          _this7.navService = navService;
          _this7.reloadFct = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this7.options = {}; // tslint:disable-next-line: no-output-on-prefix

          _this7.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this7.labelValuesMap = new Map();
          _this7.headerMap = new Map();
          _this7.requestMap = new Map();
          _this7.editRequestMap = new Map();
          _this7.showSingleAccount = false;
          _this7.addBeneficiaryOptions = {};
          _this7.bRefresh = false;
          return _this7;
        }

        _inherits(PsInternalBeneficiaryComponent, _src_app_commonSRC_ps3);

        return _createClass(PsInternalBeneficiaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            _superPropGet(PsInternalBeneficiaryComponent, "init", this, 3)([]);

            if (this.options.hyperLink) {
              this.addBeneficiaryOptions = this.options.hyperLink;
            }

            this.populateInternalBeneficiariesMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }

            var reportRefrshFlag = this.commonProv.reportRefrshFlag.subscribe(function (reloadList) {
              if (reloadList) {
                reportRefrshFlag === null || reportRefrshFlag === void 0 ? void 0 : reportRefrshFlag.unsubscribe();

                _this8.reloadFct.emit();
              }
            });
          }
        }, {
          key: "getContainerLookUpOptions",
          value: function getContainerLookUpOptions() {
            return this.prepareLookUp();
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp() {
            var lookupDetails = {};
            lookupDetails.labelKey = this.options.labelKey;
            lookupDetails.fcName = this.options.fcName;
            lookupDetails.currencyFlag = 'currencyDesc';
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.itemList = this.options.itemList;
            lookupDetails.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
            lookupDetails.requestMap = this.requestMap;
            lookupDetails.editRequestMap = this.editRequestMap;
            lookupDetails.group = this.options.group;
            lookupDetails.actionDetailsOptions = [{
              id: 'delete',
              labelOptions: {
                labelKey: 'delete_key'
              },
              buttonIcon: 'delete',
              actionUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinessSettings"].serviceUrl.deleteBeneficiaryEndPoint,
              cssClass: 'delete-benef internal-trasnfer-actions fab-edit-button',
              label: 'delete_key',
              iconName: 'trash',
              actionType: 'delete',
              alertType: 'prompt',
              alertStyle: 'info',
              reloadList: true
            }, {
              id: 'details',
              label: 'details_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'document',
                  labelOptions: {
                    labelKey: 'details_key'
                  }
                },
                route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'internal-beneficiary' : 'internal-card-beneficiary',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: true
                  }
                },
                pageOptions: {
                  operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                  iconName: 'document',
                  title: 'details_key'
                }
              },
              cssClass: 'details-benef internal-trasnfer-actions'
            }, {
              id: 'edit',
              label: 'edit_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'edit1',
                  labelOptions: {
                    labelKey: 'edit_key'
                  }
                },
                route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'internal-beneficiary' : 'internal-card-beneficiary',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_OPER_ID : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BANK_CARD_BENEFICIARY_OPER_ID,
                  iconName: 'edit1',
                  title: 'edit_key'
                }
              },
              cssClass: 'edit-benef internal-trasnfer-actions'
            }, {
              id: 'pay',
              label: 'pay_key',
              actionHyperlink: {
                group: this.options.group,
                iconOptions: {
                  iconName: 'create',
                  labelOptions: {
                    labelKey: 'pay_key'
                  }
                },
                route: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'payment' : 'bank-credit-card-settlement',
                navigationOptions: {
                  queryParams: {
                    readOnlypage: false
                  }
                },
                pageOptions: {
                  operId: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TRANSFER : src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].BANK_CREDIT_CARD_SETTLEMENT,
                  iconName: 'create',
                  title: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'payment_details_key' : 'bank_credit_card_settlement_key'
                },
                preCallFunction: {
                  func: function func() {
                    var _this9 = this;

                    return new Promise(function (resolve, reject) {
                      resolve(_this9.executionClass.prepareTransaction(lookupDetails.actionDetailsOptions[3].actionHyperlink));
                    });
                  },
                  executionClass: this,
                  params: []
                },
                psClass: 'pay-benef'
              },
              cssClass: 'pay-benef internal-trasnfer-actions'
            }];
            lookupDetails.statementOptions = {}; //  id: #1237692 -  Details :Updated by neethu  - Date:02/08/2021 - Desc:Added reload function inorder to refresh the beneficiarylist .  

            lookupDetails.reloadFunction = {
              func: function func() {
                var _this0 = this;

                return new Promise(function (resolve, reject) {
                  resolve(_this0.executionClass.reloadList());
                });
              },
              executionClass: this,
              params: []
            };
            return lookupDetails;
          }
        }, {
          key: "reloadList",
          value: function reloadList() {
            this.reloadFct.emit();
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
          /**
           * populating the map for internal beneficiaries
           */

        }, {
          key: "populateInternalBeneficiariesMap",
          value: function populateInternalBeneficiariesMap() {
            var beneficiaryAccountNumberMap = {};
            var beneficiaryCardNumberMap = {};
            var beneficiaryNameMap = {};
            var beneficiaryReasonMap = {};
            var beneficiaryPhoneNumberMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            beneficiaryAccountNumberMap = {
              key: 'bankAccountNumberKey',
              value: '--- --- ---',
              isEdit: false,
              showMappingOnNoValue: true
            };
            beneficiaryCardNumberMap = {
              key: 'bankCardNumberKey',
              value: '--- --- ---',
              isEdit: false,
              showMappingOnNoValue: true
            };
            beneficiaryNameMap = {
              key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankBenefNameKey' : 'bankCardBenefNameKey',
              value: '------',
              isEdit: false
            };
            beneficiaryReasonMap = {
              key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankPurposeKey' : 'bankCardPurposeKey',
              value: '------',
              isEdit: false
            };
            beneficiaryPhoneNumberMap = {
              key: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankBenefPhoneKey' : 'bankCardBenefPhoneKey',
              value: '------',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE ? 'bankTitleKey' : 'bankCardtitleKey',
              isEdit: false
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'nickName',
              isEdit: true
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('account_number_key', beneficiaryAccountNumberMap);
            this.labelValuesMap.set('card_number_key', beneficiaryCardNumberMap);
            this.labelValuesMap.set('benef_name_key', beneficiaryNameMap);
            this.labelValuesMap.set('phone_number_key', beneficiaryPhoneNumberMap);
            this.labelValuesMap.set('purpose_key', beneficiaryReasonMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
            this.requestMap.set('nickNameNumber', 'nickNameNumber');
            this.requestMap.set('oldNickName', 'benefName');
            this.editRequestMap.set('newNickName', 'benefName');
            this.editRequestMap.set('type', 'A');
          } //edited by Marina TP:#1544088 to open the payment screen with correct data depending on beneficiary type

        }, {
          key: "prepareTransaction",
          value: function prepareTransaction(actionCard) {
            if (this.options.type === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].INTERNAL_BENEFICIARY_TYPE) {
              actionCard.navigationOptions.queryParams.ScreenVO = {
                toAccountType: 'companyAccountTransfer',
                toAccount: actionCard.navigationOptions.queryParams.accountNumber,
                toAccount_lookupKey: actionCard.navigationOptions.queryParams.accountNumber
              };
            } else {
              actionCard.navigationOptions.queryParams.ScreenVO = {
                toAccountType: 'bankCardSettlement',
                toBeneficiary: actionCard.navigationOptions.queryParams.cardNumber,
                toBeneficiary_lookupKey: actionCard.navigationOptions.queryParams.cardNumber
              };
            }
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateListPage"]);

      PsInternalBeneficiaryComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_6__["PsNavigatorService"]
        }];
      };

      PsInternalBeneficiaryComponent.propDecorators = {
        reloadFct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsInternalBeneficiaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-internal-beneficiary',
        template: _raw_loader_ps_internal_beneficiary_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_internal_beneficiary_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_6__["PsNavigatorService"]])], PsInternalBeneficiaryComponent);
      /***/
    },

    /***/
    "pZ9k":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-cash-transfer/ps-cash-transfer.component.scss ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pZ9k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jYXNoLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "t1wS":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-beneficiary/ps-international-beneficiary/ps-international-beneficiary.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t1wS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div>\n    <ps-action-hyperlink id=\"addInternationalBenef\" [options]=\"addBeneficiaryOptions\" class=\"add-beneficiary-button\" *ngIf=\"options.isEditable\">\n    </ps-action-hyperlink>\n  </div>\n\n  <div *ngIf=\"options?.itemList?.length > 0\" class=\"benef-list\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'international-benef-list-' + id\" [options]=\"getContainerLookUpOptions()\"\n        [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\"></ps-container-lookup-option>\n    </div>\n  </div>\n</ps-template-list>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=13-es5.js.map