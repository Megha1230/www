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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24], {
    /***/
    "1WmL":
    /*!*************************************************************!*\
      !*** ./src/app/pages/register-user/register-user.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function WmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci11c2VyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "59KN":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility-access/ps-option-facility-access.component.scss ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1vcHRpb24tZmFjaWxpdHktYWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "DXcj":
    /*!*************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility-access/ps-option-facility-access.component.html ***!
      \*************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DXcj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div  class=\"ps-options-facility\" *ngIf=\"options?.itemList?.length > 0\">\n  <ps-container-lookup-option [id]=\"'ps-container-lookup-option_' + id\" [options]=\"containerLookUpOptions\"\n      [itemCard]=\"item\" (clickedCard)=\"updateCard($event)\" *ngFor=\"let item of options.itemList\"></ps-container-lookup-option>\n</div>";
      /***/
    },

    /***/
    "ifsZ":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-user/register-user.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ifsZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"options\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"options.namesofSteps[0]\">\n\n    <ps-container-panel [options]=\"panelOptions1\">\n\n      <ps-input-username [options]=\"userId\" (onPsChange)=\"onChangeUsername($event)\"></ps-input-username>\n\n      <ps-input-free-text [options]=\"username\"></ps-input-free-text>\n\n      <ps-input-free-text [options]=\"arabicName\"></ps-input-free-text>\n\n      <ps-dropdown-sub-profile [options]=\"subProfile\"></ps-dropdown-sub-profile>\n\n      <ps-input-email [options]=\"userEmail\"></ps-input-email>\n\n      <ps-entity-phone-number [options]=\"phoneOptions\"></ps-entity-phone-number>\n\n      <ps-lov-preferred-language [options]=\"alertLanguage\"></ps-lov-preferred-language>\n\n      <ps-lookup-own-accounts id=\"user_admin_accounts\" [options]=\"accountListOptions\"></ps-lookup-own-accounts>\n\n      <ps-lookup-facility-access [options]=\"facilityDetailsOptions\"></ps-lookup-facility-access>\n\n <ps-dropdown-id-types [options]=\"dropdownIdTypesOptions\"></ps-dropdown-id-types>\n      <ps-input-free-text [options]=\"idNumberOptions\"></ps-input-free-text>\n      <ps-dropdown-individual-cif-no [options]=\"individualCifNoOptions\"></ps-dropdown-individual-cif-no>\n      <ps-select-checkbox id=\"loginTimeFrameCheckbox\" [options]=\"loginTimeFrameOptions\">\n      </ps-select-checkbox>\n\n      <ps-date-day-month-year-future id=\"expiryDate\" [options]=\"dateOptions\">\n      </ps-date-day-month-year-future>\n    </ps-container-panel>\n  </ps-form-step>\n\n</ps-template-stepper>";
      /***/
    },

    /***/
    "j6Br":
    /*!*********************************************************************************************************************************************!*\
      !*** ./src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility-access/ps-option-facility-access.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: PsOptionFacilityAccessComponent */

    /***/
    function j6Br(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PsOptionFacilityAccessComponent", function () {
        return PsOptionFacilityAccessComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ps_option_facility_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ps-option-facility-access.component.html */
      "DXcj");
      /* harmony import */


      var _ps_option_facility_access_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ps-option-facility-access.component.scss */
      "59KN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */
      "ZF3V");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");

      var PsOptionFacilityAccessComponent = /*#__PURE__*/function (_src_app_commonSRC_ps) {
        function PsOptionFacilityAccessComponent(commonProv, cdRef) {
          var _this;

          _classCallCheck(this, PsOptionFacilityAccessComponent);

          _this = _callSuper(this, PsOptionFacilityAccessComponent, [commonProv, commonProv.logger]);
          _this.cdRef = cdRef;
          _this.onClickCard = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          _this.containerLookUpOptions = {};
          _this.labelValuesMap = new Map();
          _this.headerMap = new Map();
          _this.showSingleAccount = false;
          _this.requestMap = new Map();
          _this.editRequestMap = new Map();
          return _this;
        }

        _inherits(PsOptionFacilityAccessComponent, _src_app_commonSRC_ps);

        return _createClass(PsOptionFacilityAccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(PsOptionFacilityAccessComponent, "init", this, 3)([]);

            this.populateHeaderValueMap();

            if (this.options.showOnlyList === null || this.options.showOnlyList === undefined) {
              this.options.showOnlyList = false;
            }

            this.containerLookUpOptions.currencyFlag = 'currencyBriefNameEnglish';
            this.containerLookUpOptions.labelsValueMap = this.labelValuesMap;
            this.containerLookUpOptions.headerMap = this.headerMap;
            this.containerLookUpOptions.formGroup = this.options.group;
            this.containerLookUpOptions.isEditable = this.options.isEditable;
            this.containerLookUpOptions.editActionUrl = src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].serviceUrl.personalizationNicknameEndPoint;
            this.containerLookUpOptions.requestMap = this.requestMap;
            this.containerLookUpOptions.editRequestMap = this.editRequestMap;

            if (this.options && this.options.listOfOptions) {
              this.options.listOfOptions.map(function (element, index) {
                return element['rowIndex'] = index;
              });
              this.options.itemList = this.options.listOfOptions;
            }

            this.containerLookUpOptions.actionDetailsOptions = [];
            this.containerLookUpOptions.statementOptions = {};
          }
        }, {
          key: "populateHeaderValueMap",
          value: function populateHeaderValueMap() {
            var facilityTypeMap = {};
            var currencyNameMap = {};
            var facilityBranchMap = {};
            var statusMap = {}; // let branchNameMap: IMapKeyValue = {};

            var headerTitleMap = {};
            var headerSubtitleMap = {}; //let currencyMap: IMapKeyValue = {};

            facilityTypeMap = {
              key: 'facilityType',
              value: ''
            };
            currencyNameMap = {
              key: 'currencyName',
              value: '0.0'
            };
            facilityBranchMap = {
              key: 'facilityBranch',
              value: '0.0'
            };
            statusMap = {
              key: 'status',
              value: ''
            }; // branchNameMap = {
            //   key: 'branchName',
            //   value: ''
            // };
            // currencyMap = {
            //   key: 'currencyDesc',
            //   value: ''
            // };

            headerTitleMap = {
              key: 'title',
              value: 'cifLongName',
              isEdit: false,
              formGroupMap: {
                placeHolder: '',
                fcName: 'cifLongName'
              }
            };
            headerSubtitleMap = {
              key: 'subTitle',
              value: 'revolvingOneOff',
              isEdit: false,
              formGroupMap: {
                placeHolder: '',
                fcName: 'revolvingOneOff'
              }
            }; // key here will be used as label in look up details component

            this.labelValuesMap.set('facility_type_key', facilityTypeMap);
            this.labelValuesMap.set('currency_key', currencyNameMap);
            this.labelValuesMap.set('ufacility_branch_key', facilityBranchMap);
            this.labelValuesMap.set('status_key', statusMap); // will be used as header to template card in look up details component

            this.headerMap.set('title', headerTitleMap);
            this.headerMap.set('subTitle', headerSubtitleMap);
          }
        }, {
          key: "updateCard",
          value: function updateCard(facility) {
            if (facility && this.options.listOfOptions) {
              this.options.itemList = this.options.listOfOptions.filter(function (acct) {
                return acct === facility;
              });
              this.options.item = this.options.itemList[0];
              this.showSingleAccount = !this.showSingleAccount;
              this.options.showItemPopUp = !this.options.showItemPopUp; // this.options.showSelectedCard = false;
            }

            this.onClickCard.emit(this.options);
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
        }]);
      }(src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"]);

      PsOptionFacilityAccessComponent.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      PsOptionFacilityAccessComponent.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onClickCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      PsOptionFacilityAccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-option-facility-access',
        template: _raw_loader_ps_option_facility_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_option_facility_access_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], PsOptionFacilityAccessComponent);
      /***/
    },

    /***/
    "uH6F":
    /*!***********************************************************!*\
      !*** ./src/app/pages/register-user/register-user.page.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterUserPage */

    /***/
    function uH6F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUserPage", function () {
        return RegisterUserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register-user.page.html */
      "ifsZ");
      /* harmony import */


      var _register_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-user.page.scss */
      "1WmL");
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


      var src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_access_ps_option_facility_access_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psComponents/ps-container-lookup-option/ps-option-facility-access/ps-option-facility-access.component */
      "j6Br");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-constant */
      "zngb");
      /* harmony import */


      var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/navigator/ps-navigator.service */
      "woXy");
      /* harmony import */


      var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/ps-common/ps-common.service */
      "Q0Ba");
      /* harmony import */


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */
      "0CJq");
      /* harmony import */


      var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/commonSRC/psServices/models/common-utils */
      "qEF5");

      var RegisterUserPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function RegisterUserPage(navService, omniCommon, commonProvider) {
          var _this2;

          _classCallCheck(this, RegisterUserPage);

          _this2 = _callSuper(this, RegisterUserPage);
          _this2.navService = navService;
          _this2.omniCommon = omniCommon;
          _this2.commonProvider = commonProvider;
          _this2.RegisterAdminUserVO = {};
          _this2.isEditState = false;
          _this2.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this2.options = {
            stepperName: 'corporate_user_register_stepper',
            numberOfSteps: 1,
            group: _this2.formGroup,
            submitOptions: {
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_7__["PsCommonBusinessSettings"].serviceUrl.registerUser,
              group: _this2.formGroup
            },
            requestObject: _this2.RegisterAdminUserVO,
            isHorizontalStepper: true,
            namesofSteps: ['registerUser']
          };
          _this2.userId = {
            group: _this2.formGroup,
            fcName: 'newUserName',
            placeHolder: 'user_name_key',
            labelKey: 'user_name_key'
          };
          _this2.username = {
            group: _this2.formGroup,
            fcName: 'newName',
            placeHolder: 'name_key',
            labelKey: 'name_key',
            iconOptions: {
              iconName: 'user'
            }
          };
          _this2.arabicName = {
            group: _this2.formGroup,
            fcName: 'arabicName',
            placeHolder: 'enter_arabic_name_key',
            labelKey: 'arabic_name_key',
            iconOptions: {
              iconName: 'user'
            }
          };
          _this2.phoneOptions = {
            group: _this2.formGroup,
            fcName: 'mobileNumber',
            labelKey: 'phone_number_key'
          };
          _this2.alertLanguage = {
            group: _this2.formGroup,
            fcName: 'alertLanguage',
            labelKey: 'alert_language_key',
            placeHolder: 'alert_language_key'
          };
          _this2.userEmail = {
            group: _this2.formGroup,
            fcName: 'email',
            labelKey: 'email_key',
            iconName: 'register-mail',
            placeHolder: 'email_key'
          };
          _this2.subProfile = {
            group: _this2.formGroup,
            fcName: 'subProfile',
            labelKey: 'sub_profile_key',
            placeHolder: 'user_sub_profile_key',
            iconOptions: {
              iconName: 'document'
            }
          };
          _this2.panelOptions1 = {
            isExpandable: true,
            labelKey: 'user_registration_key',
            iconName: 'document',
            expanded: true
          };
          _this2.accountListOptions = {
            labelKey: 'account_list_key',
            placeHolder: 'select_accounts_key',
            component: src_app_commonBussinessSRC_psComponents_ps_accounts_list_ps_accounts_list_component__WEBPACK_IMPORTED_MODULE_5__["PsAccountsListComponent"],
            group: _this2.formGroup,
            fcName: 'accountList',
            fromTo: 'from',
            requestObject: _this2.RegisterAdminUserVO,
            multiple: true,
            allType: true,
            glTypes: 'G',
            accountType: 'G',
            enableListPagination: true,
            endUserId: _this2.navService.getAllParams() ? _this2.navService.getAllParams().ScreenVO ? _this2.navService.getAllParams().ScreenVO.userId ? _this2.navService.getAllParams().ScreenVO.userId : undefined : undefined : undefined
          };
          _this2.facilityDetailsOptions = {
            labelKey: 'financing_list',
            placeHolder: 'select_from_financing_list_key',
            fcName: 'financingList',
            group: _this2.formGroup,
            component: src_app_commonBussinessSRC_psComponents_ps_container_lookup_option_ps_option_facility_access_ps_option_facility_access_component__WEBPACK_IMPORTED_MODULE_6__["PsOptionFacilityAccessComponent"],
            requestObject: _this2.RegisterAdminUserVO,
            multiple: true
          };
          _this2.individualCifNoOptions = {
            group: _this2.formGroup,
            fcName: 'individualCifNo',
            labelKey: 'individual_cif_no_key',
            placeHolder: 'select_individual_cif_no_key'
          };
          _this2.dateOptions = {
            labelKey: 'expiry_date_key',
            placeHolder: 'enter_expiry_date_key',
            fcName: 'expiryDate',
            group: _this2.formGroup
          };
          _this2.loginTimeFrameOptions = {
            labelKey: 'include_in_login_time_frame_key',
            group: _this2.formGroup,
            fcName: 'includeLoginTimeYN'
          };
          _this2.dropdownIdTypesOptions = {
            fcName: 'corporateIdType',
            group: _this2.formGroup
          };
          _this2.idNumberOptions = {
            labelKey: 'id_number_key',
            placeHolder: 'enter_id_number_key',
            fcName: 'corporateIdNumber',
            group: _this2.formGroup
          };
          return _this2;
        }

        _inherits(RegisterUserPage, _omni_base_omni_base_);

        return _createClass(RegisterUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _superPropGet(RegisterUserPage, "init", this, 3)([]);

            this.baseFormGroup = this.formGroup;

            if (JSON.stringify(this.navService.getAllParams()) !== '{}') {
              this.RegisterAdminUserVO = this.navService.getAllParams() ? this.navService.getAllParams() : {}; // this.commonProv.copyObject(this.options.requestObject, this.RegisterAdminUserVO, true, false);

              this.isEditState = true;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(RegisterUserPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.individualCifNoOptions.fcName], 0);

            if (this.isEditState) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.userId.fcName], 1);
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.facilityDetailsOptions.fcName], 0);
            }

            if (this.RegisterAdminUserVO.restore) {
              this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].ACTION_TYPE_READONLY, [this.userId.fcName, this.individualCifNoOptions.fcName, this.facilityDetailsOptions.fcName, this.accountListOptions.fcName, this.username.fcName, this.phoneOptions.fcName, this.alertLanguage.fcName, this.userEmail.fcName, this.subProfile.fcName, this.loginTimeFrameOptions.fcName], 1);
            }
          } //Jira #7021 - Validate username on user name change

        }, {
          key: "onChangeUsername",
          value: function onChangeUsername(event) {
            var _this3 = this;

            var request = {
              userName: event.newValue
            };
            this.commonProv.presentLoading();
            this.omniCommon.verifyUserName(request).then(function (result) {
              _this3.commonProv.dismissLoading();

              src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].deleteError(_this3.userId.group, _this3.userId.fcName);
              _this3.formGroup.controls[_this3.userId.fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].CONTROLLER_STOP_REVALIDATION] = false;
            })["catch"](function (error) {
              _this3.commonProv.setValInsideNestedObj(_this3.userId.fcName, null, _this3.options.requestObject);

              _this3.commonProv.dismissLoading();

              if (error && error.data.outputType === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].OUT_PUT_TYPE_U) {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_13__["CommonUtils"].setErrors(_this3.formGroup, _this3.userId.fcName, [{
                  msgKey: error.data.outputNotification
                }]);
                _this3.formGroup.controls[_this3.userId.fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_8__["ConstantCommon"].CONTROLLER_STOP_REVALIDATION] = true;
              }
            });
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"]);

      RegisterUserPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_12__["OmniCommonService"]
        }, {
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]
        }];
      };

      RegisterUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'register-user',
        template: _raw_loader_register_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_9__["PsNavigatorService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_12__["OmniCommonService"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"]])], RegisterUserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=24-es5.js.map