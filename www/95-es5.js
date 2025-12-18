(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95], {
    /***/
    "2UoO":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personalize-accounts/personalize-accounts.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UoO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n    <ps-container-panel [options]=\"panelOptionStep1\" id=\"personalization_panel1\">\n      <ps-lookup-own-accounts #generalAccountsRef id=\"'transferFrom'+ id\" [options]=\"generalAccountOptions\"\n        (onAccountDeleted)=\"deleteAccount($event,'G')\" (onAccountChange)=\"onAccountsChanged($event, 'G')\">\n      </ps-lookup-own-accounts>\n      <ps-lookup-own-accounts #termAccountsRef id=\"'payment'+ id\" [options]=\"termAccountOptions\"\n        (onAccountDeleted)=\"deleteAccount($event,'T')\" (onAccountChange)=\"onAccountsChanged($event, 'T')\">\n      </ps-lookup-own-accounts>\n\n      <ps-lookup-own-accounts id=\"'transferFrom'+ id\" [options]=\"transferAccountOptions\"></ps-lookup-own-accounts>\n      <ps-lookup-own-accounts id=\"'payment'+ id\" [options]=\"paymentAccountOptions\"></ps-lookup-own-accounts>\n\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "Y4JH":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/personalize-accounts/personalize-accounts.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Y4JH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbGl6ZS1hY2NvdW50cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "cCdF":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/personalize-accounts/personalize-accounts.page.ts ***!
      \*************************************************************************/

    /*! exports provided: PersonalizeAccountsPage */

    /***/
    function cCdF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalizeAccountsPage", function () {
        return PersonalizeAccountsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_personalize_accounts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./personalize-accounts.page.html */
      "2UoO");
      /* harmony import */


      var _personalize_accounts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./personalize-accounts.page.scss */
      "Y4JH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-accounts-list/ps-accounts-list.component */
      "OVQh");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/pages/omni-base/omni-base.page */
      "gKqT");

      var PersonalizeAccountsPage = /*#__PURE__*/function (_src_app_pages_omni_b) {
        function PersonalizeAccountsPage(commonService, logger, router, omniPull) {
          var _this;

          _classCallCheck(this, PersonalizeAccountsPage);

          _this = _callSuper(this, PersonalizeAccountsPage);
          _this.commonService = commonService;
          _this.logger = logger;
          _this.router = router;
          _this.omniPull = omniPull;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.personalizeVO = {};
          _this.stepperOptions = {
            stepperName: 'cash_and_cheque_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['cash_cheq_collection_step1'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonBusinessSettings"].serviceUrl.updateUserInfoProfile,
              group: _this.formGroup,
              preCallFunction: {
                func: function func(response) {
                  var _this2 = this;

                  return new Promise(function (resolve, reject) {
                    resolve(_this2.executionClass.updateScreenVO(response));
                  });
                },
                executionClass: _this,
                params: [_this]
              }
            },
            requestObject: _this.personalizeVO
          };
          _this.panelOptionStep1 = {
            isExpandable: true,
            labelKey: 'my_accounts_key',
            iconName: 'document',
            expanded: true
          };
          _this.generalAccountOptions = {
            labelKey: 'general_accounts_key',
            placeHolder: 'select_general_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'generalAccounts',
            accountType: 'G',
            fromTo: 'to',
            multiple: true,
            requestObject: _this.personalizeVO,
            setAllAccountsAsSelecetd: true
          };
          _this.termAccountOptions = {
            labelKey: 'term_deposit_accounts_key',
            placeHolder: 'select_term_deposit_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'termAccounts',
            accountType: 'F',
            fromTo: 'to',
            multiple: true,
            requestObject: _this.personalizeVO,
            setAllAccountsAsSelecetd: true
          };
          _this.excludedTermAccounts = [];
          _this.excludedTermAccounts_lookupKey = [];
          _this.excludedGeneralAccounts = [];
          _this.excludedGeneralAccounts_lookupKey = [];
          _this.selectedAccountList = [];
          _this.selectedTermAccountList = [];
          _this.transferAccountOptions = {
            labelKey: 'my_default_transfer_account_key',
            placeHolder: 'select_my_default_transfer_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'defaultAccount',
            accountType: 'G',
            fromTo: 'from',
            requestObject: _this.personalizeVO
          };
          _this.paymentAccountOptions = {
            labelKey: 'my_default_qr_code_payment_account_key',
            placeHolder: 'select_my_default_qr_code_payment_account_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_6__["PsAccountsListComponent"],
            group: _this.formGroup,
            accountAllowedCurrencies: [],
            accountAllowedTypes: [],
            glTypes: 'G',
            fcName: 'defaultQrAccount',
            accountType: 'G',
            fromTo: 'from',
            purpose: 'QR',
            requestObject: _this.personalizeVO
          };
          return _this;
        }

        _inherits(PersonalizeAccountsPage, _src_app_pages_omni_b);

        return _createClass(PersonalizeAccountsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PersonalizeAccountsPage, "init", this, 3)([]);
          } //edited by Marina TP:#1433069; no need to update the excluded list on each delete as it will be updated once before
          //submit depending on the chosen values

        }, {
          key: "deleteAccount",
          value: function deleteAccount(account, type) {// if (account && account !== undefined) {
            //   if (type === 'G') {
            //     if (this.excludedGeneralAccounts.find(item => item.accountNumber === account.accountNumber) === undefined) {
            //       delete account['excludeType']  //added by Marina TP:#1433069 to avoid sending unnecessary property with account object
            //       this.excludedGeneralAccounts.push(account);
            //       this.excludedGeneralAccounts_lookupKey.push(account.lookupKey);
            //     }
            //   } else {
            //     if (this.excludedTermAccounts.find(item => item.accountNumber === account.accountNumber) === undefined) {
            //       delete account['excludeType'] //added by Marina TP:#1433069 to avoid sending unnecessary property with account object
            //       this.excludedTermAccounts.push(account);
            //       this.excludedTermAccounts_lookupKey.push(account.lookupKey);
            //     }
            //   }
            // }
          }
        }, {
          key: "updateScreenVO",
          value: function updateScreenVO(resp) {
            this.filterExcludedAccounts();
            this.updateSession(); // Added By MFawzy TP:#1433069 - Requested by OSRV team to allow the [updateUserInfo] service to save the excluded accounts in DB

            this.personalizeVO['type'] = 'A';
          } //added by Marina TP:#1433069 to avoid not sending any excluded accounts in case user submitted without change his previous choices 

        }, {
          key: "filterExcludedAccounts",
          value: function filterExcludedAccounts() {
            var _this3 = this;

            //loop on list of accounts and return the account that is not included in the screen VO values (chosen accounts)
            this.excludedGeneralAccounts = this.generalAccountsRef.complexLookupOptions.listOfOptions.filter(function (account) {
              var _a;

              return !((_a = _this3.personalizeVO[_this3.generalAccountOptions.fcName]) === null || _a === void 0 ? void 0 : _a.includes(account));
            });
            this.excludedGeneralAccounts_lookupKey = this.excludedGeneralAccounts.map(function (account) {
              return account.lookupKey;
            });
            this.excludedTermAccounts = this.termAccountsRef.complexLookupOptions.listOfOptions.filter(function (account) {
              var _a;

              return !((_a = _this3.personalizeVO[_this3.termAccountOptions.fcName]) === null || _a === void 0 ? void 0 : _a.includes(account));
            });
            this.excludedTermAccounts_lookupKey = this.excludedTermAccounts.map(function (account) {
              return account.lookupKey;
            }); //delete the chosen accounts from the screen VO because OSRV team saves the excluded ones not the chosen

            this.deleteFromScreenVO([this.generalAccountOptions.fcName, this.generalAccountOptions.fcName + '_lookupKey', this.termAccountOptions.fcName, this.termAccountOptions.fcName + '_lookupKey']); //remove escludedType property from accounts objects as it is not needed to be sent 

            this.personalizeVO['excludedGeneralAccounts'] = this.excludedGeneralAccounts.map(function (account) {
              delete account.excludeType;
              return account;
            });
            this.personalizeVO['excludedGeneralAccounts_lookupKey'] = this.excludedGeneralAccounts_lookupKey;
            this.personalizeVO['excludedTermAccounts'] = this.excludedTermAccounts.map(function (account) {
              delete account.excludeType;
              return account;
            });
            this.personalizeVO['excludedTermAccounts_lookupKey'] = this.excludedTermAccounts_lookupKey;
          } //edited by Marina TP:#1433069; no need to update the excluded list on each change as it will be updated once before
          //submit depending on the chosen values

        }, {
          key: "onAccountsChanged",
          value: function onAccountsChanged(accounts, type) {// if (accounts && accounts) {
            //   this.selectedAccountList = accounts;
            //   const excludedAccountList = type === 'G' ? this.excludedGeneralAccounts : this.excludedTermAccounts;
            //   const excludedAccountList_lookupKey = type === 'G' ? this.excludedGeneralAccounts_lookupKey : this.excludedTermAccounts_lookupKey;
            //   if (excludedAccountList.length !== 0) {
            //     for (const acc of this.selectedAccountList) {
            //       if (excludedAccountList.find(item => item.accountNumber === acc.accountNumber)) {
            //         excludedAccountList.splice(excludedAccountList.findIndex(item => item.accountNumber === acc.accountNumber), 1);
            //         excludedAccountList_lookupKey.splice(excludedAccountList_lookupKey.findIndex(item => item === acc.accountNumber), 1);
            //       }
            //     }
            //   }
            // }
          }
        }, {
          key: "updateSession",
          value: function updateSession() {
            var personalization = this.commonService.session.getValueOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PERSONALIZATION_CO) || {}; //Modified by ghada, tp1583585 for handling the case when user have no personalization 

            personalization.defaultTransferAccKey = this.formGroup.controls[this.transferAccountOptions.fcName].value['personalizeKey'];
            personalization.defaultQrPaymentAccKey = this.formGroup.controls[this.paymentAccountOptions.fcName].value['personalizeKey'];
            this.commonService.session.remove(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PERSONALIZATION_CO);
            this.commonService.session.append(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_7__["CommonBussinessConstant"].PERSONALIZATION_CO, personalization);
          } //Added by ghada, tp1582982 for cleaner code by removing duplicatations

        }, {
          key: "deleteFromScreenVO",
          value: function deleteFromScreenVO(fcnamesList) {
            var _iterator = _createForOfIteratorHelper(fcnamesList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var fcname = _step.value;
                delete this.personalizeVO[fcname];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);
      }(src_app_pages_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_12__["OmniBasePage"]);

      PersonalizeAccountsPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]
        }];
      };

      PersonalizeAccountsPage.propDecorators = {
        generalAccountsRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['generalAccountsRef']
        }],
        termAccountsRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['termAccountsRef']
        }]
      };
      PersonalizeAccountsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personalize-accounts',
        template: _raw_loader_personalize_accounts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personalize_accounts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_11__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]])], PersonalizeAccountsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=95-es5.js.map