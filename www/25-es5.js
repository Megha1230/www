(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25], {
    /***/
    "9K5J":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: PsPassbookListComponent */

    /***/
    function K5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsPassbookListComponent", function () {
        return PsPassbookListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_passbook_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-passbook-list.component.html */
      "wkFC");
      /* harmony import */


      var _ps_passbook_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-passbook-list.component.scss */
      "ezsQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonSRC/psTemplates/ps-template-list/ps-template-list.template */
      "EZLY");

      var PsPassbookListComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsPassbookListComponent(cdRef) {
          var _this;

          _classCallCheck(this, PsPassbookListComponent);

          _this = _callSuper(this, PsPassbookListComponent);
          _this.cdRef = cdRef;
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.showSingleAccount = false;
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          _this.cardLabelOptions = {
            labelKey: 'passbook_list_not_available'
          }; // eslint-disable-next-line @angular-eslint/no-output-on-prefix

          _this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          return _this;
        }

        _inherits(PsPassbookListComponent, _src_app_commonSRC_ps);

        return _createClass(PsPassbookListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsPassbookListComponent, "init", this, 3)([]);

            this.populateHeaderValueMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            if (this.options.cardAction === null || this.options.cardAction === undefined) {
              this.options.cardAction = false;
            }

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }

            if (this.options && this.options.noCardsLabel) {
              this.cardLabelOptions.labelKey = this.options.noCardsLabel;
            }
          }
        }, {
          key: "getContainerLookUpOptions",
          value: function getContainerLookUpOptions(val) {
            return this.prepareLookUp(val);
          }
        }, {
          key: "prepareLookUp",
          value: function prepareLookUp(card) {
            var lookupDetails = {};
            lookupDetails.currencyFlag = 'currencyBriefNameEnglish';
            lookupDetails.labelsValueMap = this.labelValuesMap;
            lookupDetails.headerMap = this.headerMap;
            lookupDetails.formGroup = this.options.group;
            lookupDetails.isEditable = this.options.isEditable;
            lookupDetails.translateSubTitle = this.options.translate;
            lookupDetails.pageData = {};
            lookupDetails.actionDetailsOptions = [];
            lookupDetails.statementOptions = {};
            return lookupDetails;
          }
        }, {
          key: "populateHeaderValueMap",
          value: function populateHeaderValueMap() {
            var accountNumberMap = {};
            var currencyMap = {};
            var headerTitleMap = {};
            var headerSubtitleMap = {};
            accountNumberMap = {
              key: 'accGl',
              value: '--- --- --- ---',
              isEdit: false
            };
            currencyMap = {
              key: 'currency',
              value: '---',
              isEdit: false
            };
            headerTitleMap = {
              key: 'title',
              value: 'additionalRef',
              isEdit: false,
              formGroupMap: {
                placeHolder: 'enter_passbook_type',
                fcName: 'additionalRef'
              }
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'passbookCode',
              isEdit: true,
              formGroupMap: {
                placeHolder: 'enter_passbookCode',
                fcName: 'passbookCode'
              }
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('account_key', accountNumberMap);
            this.labelValuesMap.set('currency_key', currencyMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(card) {
            if (card && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === card;
              });
              this.options.item = this.options.itemList[0];
              this.showSingleAccount = !this.showSingleAccount;
              this.options.showItemPopUp = !this.options.showItemPopUp; // this.options.showSelectedCard = false;
            }

            this.onClickCard.emit(this.options);
          } // eslint-disable-next-line @angular-eslint/use-lifecycle-interface

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.cdRef.markForCheck();
          }
        }]);
      }(src_app_commonSRC_psTemplates_ps_template_list_ps_template_list_template__WEBPACK_IMPORTED_MODULE_4__["PsTemplateListPage"]);

      PsPassbookListComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      PsPassbookListComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsPassbookListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-passbook-list',
        template: _raw_loader_ps_passbook_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_passbook_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], PsPassbookListComponent);
      /***/
    },

    /***/
    "ANVv":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lost-document-request/lost-document-request.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ANVv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"lostDocumentPanelOptions\" id=\"local_benef_panel\">\n            <ps-dropdown-document-types id=\"lost_document_types\" [options]=\"lostDocumentTypesOptions\" (onPsChange)=\"onDocTypeChange($event)\"></ps-dropdown-document-types>\n            <ps-lookup-chequebooks [options]=\"chequeBookLookupOptions\" (onChequeBookChange)=\"onLookupChange($event)\"></ps-lookup-chequebooks>\n            <ps-lov-card-types [options]=\"cardsLookupOptiops\" (onPsChange)=\"onChange($event)\">\n            </ps-lov-card-types>\n            <ps-lookup-debit-cards *ngIf=\"showDebitCardlookup\" [options]=\"debitCardsLookupOptiops\" (onDebitCardChange)=\"onLookupChange($event)\"></ps-lookup-debit-cards>\n            <ps-lookup-credit-cards *ngIf=\"showCreditCardlookup\" [options]=\"creditCardsLookupOptiops\" (onCreditCardChange)=\"onLookupChange($event)\">\n            </ps-lookup-credit-cards>\n            <ps-lookup-passbooks *ngIf=\"showPassbookslookup\" [options]=\"passbooksLookupOptions\" (onPassbookChange)=\"onLookupChange($event)\"></ps-lookup-passbooks>\n            <ps-input-numeric [options]=\"documentNumberOptions\"></ps-input-numeric>\n            <ps-input-numeric [options]=\"fromDocumentNumberOptions\"></ps-input-numeric>\n            <ps-input-numeric [options]=\"toDocumentNumberOptions\"></ps-input-numeric>\n            <ps-input-varchar [options]=\"passcodeCommentOptions\"></ps-input-varchar>\n            <ps-dropdown-core-reasons id=\"keyin_select_dropdown\" [options]=\"stopReasonsOptions\">\n            </ps-dropdown-core-reasons>\n            <ps-input-free-text id=\"input_free_text\" [options]=\"briefExplanationOptions\">\n            </ps-input-free-text>\n            <ps-complex-amount [hidden]=\"isCurrAmountHidden\" [options]=\"complexChargesOptions\"></ps-complex-amount>\n        </ps-container-panel>\n    </ps-form-step>\n</ps-template-stepper>";
      /***/
    },

    /***/
    "RhpE":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/lost-document-request/lost-document-request.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function RhpE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb3N0LWRvY3VtZW50LXJlcXVlc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "XxTl":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/lost-document-request/lost-document-request.page.ts ***!
      \***************************************************************************/

    /*! exports provided: LostDocumentRequestPage */

    /***/
    function XxTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LostDocumentRequestPage", function () {
        return LostDocumentRequestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lost_document_request_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lost-document-request.page.html */
      "ANVv");
      /* harmony import */


      var _lost_document_request_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lost-document-request.page.scss */
      "RhpE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component */
      "9K5J");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */
      "ZyuK");
      /* harmony import */


      var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/logger/logger.service */
      "DFXC");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/common-constant */
      "zngb");

      var LostDocumentRequestPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function LostDocumentRequestPage(commonProv, logger, omniPullService) {
          var _this2;

          _classCallCheck(this, LostDocumentRequestPage);

          _this2 = _callSuper(this, LostDocumentRequestPage);
          _this2.commonProv = commonProv;
          _this2.logger = logger;
          _this2.omniPullService = omniPullService;
          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this2.lostDocumentRequestVO = {};
          _this2.stepperOptions = {
            stepperName: 'lost_doc_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 1,
            namesofSteps: ['lost_doc_req_step1'],
            group: _this2.formGroup,
            requestObject: _this2.lostDocumentRequestVO,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.debitCardRequest,
              group: _this2.formGroup
            }
          };
          _this2.lostDocumentTypesOptions = {
            labelKey: 'lost_document_type_key',
            placeHolder: 'please_slct_lost_doc_type_key',
            fcName: 'documentType',
            group: _this2.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.serialNumberOptions = {
            group: _this2.formGroup,
            fcName: 'serialNo',
            labelKey: 'serial_no_key',
            placeHolder: 'enter_serial_no_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.documentCurrencyOptions = {
            placeHolder: 'document_currency_key',
            labelKey: 'document_currency_key',
            group: _this2.formGroup,
            fcName: 'documentCurrency'
          };
          _this2.documentNumberOptions = {
            group: _this2.formGroup,
            fcName: 'documentNumber',
            labelKey: 'document_number_key',
            placeHolder: 'enter_document_number_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.fromDocumentNumberOptions = {
            group: _this2.formGroup,
            fcName: 'fromdocumentNumber',
            labelKey: 'from_document_number_key',
            placeHolder: 'enter_from_document_number_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.toDocumentNumberOptions = {
            group: _this2.formGroup,
            fcName: 'todocumentNumber',
            labelKey: 'to_document_number_key',
            placeHolder: 'enter_to_document_number_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.passcodeCommentOptions = {
            group: _this2.formGroup,
            fcName: 'passcodeComment',
            labelKey: 'comment_key',
            placeHolder: 'enter_comment_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.stopReasonOptions = {
            labelKey: 'stop_reason_key',
            placeHolder: 'please_select_stop_reason_key',
            fcName: 'stopReason',
            group: _this2.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.stopReasonsOptions = {
            labelKey: 'stop_reason_key',
            placeHolder: 'please_select_stop_reason_key',
            fcName: 'stopReason',
            group: _this2.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.briefExplanationOptions = {
            labelKey: 'brief_explanation_key',
            placeHolder: 'enter_brief_explanation_key',
            fcName: 'briefExplanation',
            group: _this2.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this2.lostDocumentPanelOptions = {
            isExpandable: true,
            labelKey: 'lost_document_key',
            iconName: 'document',
            expanded: true
          };
          _this2.showDocCurrency = false;
          _this2.showDocSINo = false;
          _this2.showDebitCardlookup = false;
          _this2.showCreditCardlookup = false;
          _this2.showChequebooklookup = false;
          _this2.showPassbookslookup = false;
          _this2.showCardTypelookup = false;
          _this2.lostDocNoRequired = '';
          _this2.requestedBranch = '';
          _this2.chequeBookLookupOptions = {
            labelKey: 'chequebook_key',
            placeHolder: 'select_chequebook_key',
            group: _this2.formGroup,
            fcName: 'chequebook',
            requestObject: _this2.lostDocumentRequestVO
          };
          _this2.debitCardsLookupOptiops = {
            labelKey: 'debit_card_key',
            placeHolder: 'select_debit_card_key',
            group: _this2.formGroup,
            fcName: 'debitCard',
            requestObject: _this2.lostDocumentRequestVO,
            submitType: 0
          };
          _this2.creditCardsLookupOptiops = {
            labelKey: 'credit_card_key',
            placeHolder: 'select_credit_card_key',
            group: _this2.formGroup,
            fcName: 'creditCard',
            requestObject: _this2.lostDocumentRequestVO,
            submitType: 0
          };
          _this2.passbooksLookupOptions = {
            labelKey: 'passbook_key',
            placeHolder: 'select_passbook_key',
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_passbook_list_ps_passbook_list_component__WEBPACK_IMPORTED_MODULE_5__["PsPassbookListComponent"],
            group: _this2.formGroup,
            fcName: 'passbook',
            requestObject: _this2.lostDocumentRequestVO
          };
          _this2.cardsLookupOptiops = {
            fcName: 'cardType',
            group: _this2.formGroup
          };
          _this2.complexChargesOptions = {
            currency: '',
            disablePreview: true,
            requestObject: _this2.lostDocumentRequestVO,
            showLimitLabel: false,
            amountOptions: {
              fcName: 'chargesAmount',
              group: _this2.formGroup,
              labelKey: 'amount_key',
              placeHolder: 'amount_key'
            },
            currenciesOptions: {
              fcName: 'chargesCurrency',
              group: _this2.formGroup,
              labelKey: 'currency_key',
              placeHolder: 'currency_key'
            }
          };
          return _this2;
        }

        _inherits(LostDocumentRequestPage, _omni_base_omni_base_);

        return _createClass(LostDocumentRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(LostDocumentRequestPage, "init", this, 3)([]);

            this.resetVisibility();
            var pattern = "^[0-9]*$";
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.documentNumberOptions.fcName], pattern);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.toDocumentNumberOptions.fcName], pattern);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_PATTERN, [this.fromDocumentNumberOptions.fcName], pattern);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexChargesOptions.currenciesOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.complexChargesOptions.amountOptions.fcName], 1);
            this.baseFormGroup = this.formGroup;
            this.commonProv.setFormData(this.formGroup, this.lostDocumentRequestVO);
            var baseCurrency = this.commonProv.session.getValueOf(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO).companySettingsCO.baseCurrencyISO;
            this.commonProv.setValInsideNestedObj(this.complexChargesOptions.currenciesOptions.fcName, baseCurrency, this.lostDocumentRequestVO);
            var amountFieldCust = this.commonProv.getElementValidations(this.complexChargesOptions.amountOptions.fcName);
            var currenciesFieldCust = this.commonProv.getElementValidations(this.complexChargesOptions.currenciesOptions.fcName);

            if (amountFieldCust.IS_VISIBLE === 0 || currenciesFieldCust.IS_VISIBLE === 0) {
              this.isCurrAmountHidden = true;
            } else {
              this.isCurrAmountHidden = false;
            }
          }
        }, {
          key: "resetVisibility",
          value: function resetVisibility() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.showDebitCardlookup = false; //  this.showCardTypelookup = false;

                    this.showCreditCardlookup = false;
                    this.showChequebooklookup = false;
                    this.showPassbookslookup = false;
                    this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.documentNumberOptions.fcName, this.cardsLookupOptiops.fcName, this.creditCardsLookupOptiops.fcName, this.debitCardsLookupOptiops.fcName, this.chequeBookLookupOptions.fcName, this.passbooksLookupOptions.fcName, this.fromDocumentNumberOptions.fcName, this.toDocumentNumberOptions.fcName, this.passcodeCommentOptions.fcName], 0);

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onDocTypeChange",
          value: function onDocTypeChange(event) {
            var _this3 = this;

            this.resetVisibility().then(function () {
              return _this3.applyCustAfterSelectDoc(event);
            });
            this.commonProv.setValInsideNestedObj(this.complexChargesOptions.amountOptions.fcName, "", this.lostDocumentRequestVO);
          }
        }, {
          key: "onLookupChange",
          value: function onLookupChange(event) {
            var _this4 = this;

            var _a, _b;

            var chargesReqParam = {
              "commonParametersList": {
                "itemCard": event
              },
              "entityType": (_a = this.lostDocumentRequestVO.documentType) === null || _a === void 0 ? void 0 : _a.description,
              "entityTypeCode": (_b = this.lostDocumentRequestVO.documentType) === null || _b === void 0 ? void 0 : _b.selectedObj.docCode
            };
            this.commonProv.presentLoading();
            this.omniPullService.returnDocumentCharges(chargesReqParam).then(function (res) {
              if (res) {
                _this4.commonProv.setValInsideNestedObj(_this4.complexChargesOptions.amountOptions.fcName, res.totalCharge, _this4.lostDocumentRequestVO);

                _this4.commonProv.dismissLoading();
              }
            })["catch"](function (error) {
              _this4.commonProv.logger.error(error);

              _this4.commonProv.dismissLoading();
            });
          }
        }, {
          key: "applyCustAfterSelectDoc",
          value: function applyCustAfterSelectDoc(event) {
            if (event != null && event !== undefined && event.selectedObj) {
              var docType = event.selectedObj.docCard;
              this.documentTypeCategory = docType;

              switch (docType) {
                case 'C':
                  this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.documentNumberOptions.fcName, this.chequeBookLookupOptions.fcName], 1);
                  this.lostDocumentRequestVO['submitType'] = '2';
                  break;

                case 'Q':
                  this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.fromDocumentNumberOptions.fcName, this.chequeBookLookupOptions.fcName, this.toDocumentNumberOptions.fcName], 1);
                  this.lostDocumentRequestVO['submitType'] = '1';
                  break;

                case 'D':
                  this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cardsLookupOptiops.fcName], 1);
                  this.lostDocumentRequestVO['submitType'] = '3';
                  break;

                case 'P':
                  this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.passbooksLookupOptions.fcName], 1);
                  this.showPassbookslookup = true;
                  this.lostDocumentRequestVO['submitType'] = '4';
                  break;
              }
            }
          }
        }, {
          key: "onChange",
          value: function onChange(values) {
            if (values !== undefined) {
              if (values.itemValue === 'D') {
                this.showDebitCardlookup = true;
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardsLookupOptiops.fcName], 0);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardsLookupOptiops.fcName], 1);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.creditCardsLookupOptiops.fcName], 0);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.debitCardsLookupOptiops.fcName], 1);
              } else if (values.itemValue === 'C') {
                this.showCreditCardlookup = true;
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.creditCardsLookupOptiops.fcName], 1);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.debitCardsLookupOptiops.fcName], 0);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.creditCardsLookupOptiops.fcName], 1);
                this.commonProv.applyDynScreenDisplay(_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.debitCardsLookupOptiops.fcName], 0);
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_10__["OmniBasePage"]);

      LostDocumentRequestPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]
        }];
      };

      LostDocumentRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lost-document-request',
        template: _raw_loader_lost_document_request_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lost_document_request_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"]])], LostDocumentRequestPage);
      /***/
    },

    /***/
    "ezsQ":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.scss ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ezsQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1wYXNzYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "wkFC":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-passbook-list/ps-passbook-list.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wkFC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-list>\n  <div class=\"ps-options-card\" *ngIf=\"options?.itemList?.length > 0\">\n    <div *ngFor=\"let itemOption of options.itemList\">\n      <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\"\n        [options]=\"getContainerLookUpOptions(itemOption)\" [itemCard]=\"itemOption\" (clickedCard)=\"updateCard($event)\">\n      </ps-container-lookup-option>\n    </div>\n  </div>\n  <div class=\"no-account-text\" *ngIf=\"!options || !options.itemList || options.itemList.length === 0\">\n    <ps-label [options]=\"cardLabelOptions\"></ps-label>\n  </div>\n</ps-template-list>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=25-es5.js.map