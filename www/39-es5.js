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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39], {
    /***/
    "HHWS":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cif-opening/cif-opening.page.ts ***!
      \*******************************************************/

    /*! exports provided: CifOpeningPage */

    /***/
    function HHWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CifOpeningPage", function () {
        return CifOpeningPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cif_opening_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cif-opening.page.html */
      "I4lj");
      /* harmony import */


      var _cif_opening_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cif-opening.page.scss */
      "uL9s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */
      "V0Fi");
      /* harmony import */


      var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */
      "fOh1");
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


      var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../omni-base/omni-base.page */
      "gKqT");
      /* harmony import */


      var _commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../commonSRC/psServices/models/ps-common.settings */
      "QZhd");

      var CifOpeningPage = /*#__PURE__*/function (_omni_base_omni_base_) {
        function CifOpeningPage(commonService, omniPull, navService, loggerP, eventEmitterService, common) {
          var _this;

          _classCallCheck(this, CifOpeningPage);

          _this = _callSuper(this, CifOpeningPage);
          _this.commonService = commonService;
          _this.omniPull = omniPull;
          _this.navService = navService;
          _this.loggerP = loggerP;
          _this.eventEmitterService = eventEmitterService;
          _this.common = common;
          _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
          _this.enableCifBranch = false;
          _this.cifOpeningVO = {};
          _this.isInstitutionType = false;
          _this.stepperOptions = {
            stepperName: 'cif_open_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 3,
            namesofSteps: ['cif_open_step1', 'cif_open_step2', 'cif_open_step3'],
            group: _this.formGroup,
            submitOptions: {
              extraParams: {},
              submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.cifOpeningRequest,
              group: _this.formGroup
            },
            requestObject: _this.cifOpeningVO
          };
          _this.cifOptions = {
            group: _this.formGroup,
            cifTypeOptions: {
              group: _this.formGroup,
              fcName: 'cifType'
            },
            complexIdDetailsOptions: {
              dropdownIdTypesOptions: {
                group: _this.formGroup
              },
              idNumberOptions: {
                group: _this.formGroup
              },
              dateExpiryOptions: {
                group: _this.formGroup
              },
              countriesOptions: {
                group: _this.formGroup
              },
              issueDateOptions: {
                group: _this.formGroup
              }
            },
            complexIdDetailsOptions1: {
              dropdownIdTypesOptions: {
                group: _this.formGroup
              },
              idNumberOptions: {
                group: _this.formGroup
              },
              dateExpiryOptions: {
                group: _this.formGroup
              },
              countriesOptions: {
                group: _this.formGroup
              },
              issueDateOptions: {
                group: _this.formGroup
              }
            },
            requestObject: _this.cifOpeningVO
          };
          _this.options = {
            // submitServiceUrl: PsCommonBusinessSettings.serviceUrl.changeSecurityQuestion,
            group: _this.formGroup
          };
          _this.panelIdDetailsOptions = {
            isExpandable: true,
            labelKey: 'id_details_key',
            expanded: true
          };
          _this.panelAddressDetailsOptions = {
            isExpandable: true,
            labelKey: 'address_key',
            expanded: true
          };
          _this.panelAccountOptions = {
            isExpandable: true,
            labelKey: 'account_request_key',
            expanded: false
          };
          _this.panelAttachementOptions = {
            isExpandable: true,
            labelKey: 'attachement_key',
            expanded: false
          };
          _this.panelCifInformationOptions = {
            isExpandable: true,
            labelKey: 'name_details_key',
            expanded: false
          };
          _this.panelAditionalInformationOptions = {
            isExpandable: true,
            labelKey: 'additional_information_key',
            expanded: false
          };
          _this.shortNameArabicOptions = {
            group: _this.formGroup,
            fcName: 'briefNameArabic',
            labelKey: 'arabic_brief_name_key',
            placeHolder: 'enter_arabic_brief_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.longNameArabicOptions = {
            group: _this.formGroup,
            fcName: 'longNameArabic',
            labelKey: 'arabic_long_name_key',
            placeHolder: 'enter_arabic_long_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.customerNameValOptions = {
            group: _this.formGroup,
            fcName: 'customerName',
            labelKey: 'customer_name_key',
            placeHolder: 'enter_customer_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.defaultPersonalDetailsOptions = {
            psDobOptions: {
              group: _this.formGroup,
              fcName: 'birthDate',
              labelKey: 'date_of_birth_key',
              placeHolder: 'select_date_of_birth_key'
            },
            nationalityOptions: {
              labelKey: 'nationality_key',
              placeHolder: 'select_nationality_key',
              fcName: 'nationality',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            maritalstatusOptions: {
              labelKey: 'marital_status_key',
              placeHolder: 'select_maritial_status_key',
              fcName: 'martialStatus',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'clipboard'
              }
            }
          };
          _this.firstNameOptions = {
            group: _this.formGroup,
            fcName: 'firstName',
            labelKey: 'english_first_name_key',
            placeHolder: 'enter_english_first_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.middleNameOptions = {
            group: _this.formGroup,
            fcName: 'middleName',
            labelKey: 'english_middle_name_key',
            placeHolder: 'enter_english_middle_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.lastNameOptions = {
            group: _this.formGroup,
            fcName: 'lastName',
            labelKey: 'english_last_name_key',
            placeHolder: 'enter_english_last_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.motherFirstNameOptions = {
            group: _this.formGroup,
            fcName: 'motherFirstName',
            labelKey: 'mother_first_name_key',
            placeHolder: 'enter_mother_first_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.motherLastNameOptions = {
            group: _this.formGroup,
            fcName: 'motherLastName',
            labelKey: 'mother_last_name_key',
            placeHolder: 'enter_mother_last_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.longNameOptions = {
            group: _this.formGroup,
            fcName: 'longName',
            labelKey: 'english_long_name_key',
            placeHolder: 'enter_english_long_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.shortNameOptions = {
            group: _this.formGroup,
            fcName: 'shortName',
            labelKey: 'english_short_name_key',
            placeHolder: 'enter_english_short_name_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.postalCodeOptions = {
            labelKey: 'select_postal_code_key',
            placeHolder: 'please_select_postal_code_key',
            fcName: 'postalCode',
            group: _this.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.genderOptions = {
            group: _this.formGroup,
            fcName: 'gender'
          };
          _this.panelEmployementDetailsOptions = {
            isExpandable: true,
            labelKey: 'employement_details_key',
            expanded: true
          };
          _this.lstatusOptions = {
            labelKey: 'legal_status_key',
            placeHolder: 'legal_status_key',
            group: _this.formGroup,
            fcName: 'lstatus',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.panelBankRegisterOptions = {
            isExpandable: true,
            labelKey: 'bank_register_key',
            expanded: false
          };
          _this.userContactOptions = {
            emailBankOptions: {
              labelKey: 'email_key',
              placeHolder: 'email_key',
              fcName: 'userBankEmail',
              group: _this.formGroup
            },
            phoneNumberBankOptions: {
              fcName: 'omniUserCO.omniUserVO.MOBILE_NUMBER',
              group: _this.formGroup
            }
          };
          _this.addressOptions = {
            areaOptions: {
              labelKey: 'area_key',
              placeHolder: 'enter_area_key',
              fcName: 'employeearea',
              group: _this.formGroup
            },
            wayOptions: {
              labelKey: 'way_key',
              placeHolder: 'enter_way_key',
              fcName: 'employeeway',
              group: _this.formGroup
            },
            buildingOptions: {
              labelKey: 'building_no_key',
              placeHolder: 'enter_building_no_key',
              fcName: 'employeebuilding',
              group: _this.formGroup
            },
            poBoxOptions: {
              regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'select_region_key',
                fcName: 'region',
                selectedCountryCode: '',
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              poBoxInputOptions: {
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
                fcName: 'poboxinput',
                iconOptions: {
                  iconName: 'clipboard'
                }
              }
            },
            streetOptions: {
              labelKey: 'street_key',
              placeHolder: 'enter_street_key',
              fcName: 'employeestreet',
              group: _this.formGroup
            },
            countriesOptions: {
              labelKey: 'country_key',
              placeHolder: 'select_country_key',
              fcName: 'employeecountry',
              group: _this.formGroup
            },
            regionOptions: {
              labelKey: 'region_key',
              placeHolder: 'select_region_key',
              fcName: 'employeeregion',
              group: _this.formGroup
            },
            cityOptions: {
              labelKey: 'city_key',
              placeHolder: 'select_city_key',
              fcName: 'employeecity',
              group: _this.formGroup
            },
            postalCodesOptions: {
              labelKey: 'postal_code',
              placeHolder: 'select_postal_code_key',
              fcName: 'postalcode',
              group: _this.formGroup,
              iconOptions: {
                iconName: 'clipboard'
              }
            }
          };
          _this.fileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: _this.formGroup
          };
          _this.commentOptions = {
            group: _this.formGroup,
            fcName: 'comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.complexEcoSectorOptions = {
            fcName: 'ecoSector',
            group: _this.formGroup
          };
          _this.complexIdDetailsOptions = {
            dropdownIdTypesOptions: {
              fcName: 'idType',
              group: _this.formGroup,
              labelKey: 'national_id_type_key',
              placeHolder: 'enter_national_id_type_key'
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
              labelKey: 'country_of_issuance_key',
              placeHolder: 'select_country_of_issuance_key',
              fcName: 'issuanceCountry',
              iconOptions: {
                iconName: 'clipboard'
              },
              group: _this.formGroup
            },
            issueDateOptions: {
              labelKey: 'issue_date_key',
              placeHolder: 'issue_date_key',
              fcName: 'issueDate',
              group: _this.formGroup
            }
          };
          _this.tinNumberOptions = {
            fcName: 'tinNumber',
            group: _this.formGroup,
            labelKey: 'tin_number_key',
            placeHolder: 'enter_tin_number_key',
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.birthCountriesOptions = {
            labelKey: 'country_of_birth_key',
            placeHolder: 'select_country_key',
            fcName: 'birthCountry',
            group: _this.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.countriesOptions = {
            labelKey: 'country_key',
            placeHolder: 'select_country_key',
            fcName: 'addressDetailsCountry',
            group: _this.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.branchOptions = {
            placeHolder: 'get_cif_branch_frm_session_key',
            labelKey: 'branch_key',
            group: _this.formGroup,
            fcName: 'branch_name'
          };
          _this.cifTypeOptions = {
            labelKey: 'cif',
            placeHolder: 'select_cif_type_key',
            fcName: 'cifType',
            group: _this.formGroup,
            iconOptions: {
              iconName: 'clipboard'
            }
          };
          _this.defaultEmployeeOptions = {
            employerNameOptions: {
              group: _this.formGroup,
              fcName: 'employeename',
              labelKey: 'company_name_key',
              placeHolder: 'enter_company_name_key',
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            occupationOptions: {
              group: _this.formGroup,
              fcName: 'position',
              labelKey: 'position_key',
              placeHolder: 'enter_occupation_key',
              iconOptions: {
                iconName: 'clipboard'
              }
            },
            dateOfJoiningDivisionOptions: {
              group: _this.formGroup,
              fcName: 'dateofjoining',
              labelKey: 'date_of_joining_key',
              placeHolder: 'enter_date_of_joining_key'
            },
            addressOptions: {
              areaOptions: {
                labelKey: 'area_key',
                placeHolder: 'enter_area_key',
                fcName: 'employeearea',
                group: _this.formGroup
              },
              wayOptions: {
                labelKey: 'way_key',
                placeHolder: 'enter_way_key',
                fcName: 'employeeway',
                group: _this.formGroup
              },
              buildingOptions: {
                labelKey: 'building_no_key',
                placeHolder: 'enter_building_no_key',
                fcName: 'employeebuilding',
                group: _this.formGroup
              },
              // poBoxOptions: {
              //   regionOptions: {
              //     labelKey: 'region_key',
              //     placeHolder: 'region_key',
              //     fcName: 'region',
              //     selectedCountryCode: '',
              //     group: this.formGroup,
              //     iconOptions: {
              //       iconName: 'clipboard'
              //     }
              //   }, poBoxInputOptions: {
              //     labelKey: 'pobox_key',
              //     placeHolder: 'enter_pobox_key',
              //     fcName: 'poboxinput',
              //     group: this.formGroup,
              //   }
              // },
              postalCodesOptions: {
                labelKey: 'postal_code',
                placeHolder: 'select_postal_code_key',
                fcName: 'employeePostalcode',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              streetOptions: {
                labelKey: 'street_key',
                placeHolder: 'enter_street_key',
                fcName: 'employeestreet',
                group: _this.formGroup
              },
              countriesOptions: {
                labelKey: 'country_key',
                placeHolder: 'select_country_key',
                fcName: 'employeecountry',
                group: _this.formGroup
              },
              regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'select_region_key',
                fcName: 'employeeregion',
                group: _this.formGroup
              },
              cityOptions: {
                labelKey: 'city_key',
                placeHolder: 'select_city_key',
                fcName: 'employeecity',
                group: _this.formGroup
              },
              poBoxInputOptions: {
                group: _this.formGroup,
                fcName: 'pobox',
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
                iconOptions: {
                  iconName: 'clipboard'
                }
              }
            },
            officeTelPhoneNumberOptions: {
              fcName: 'empOfficeTelPhoneNumber',
              group: _this.formGroup,
              labelKey: 'office_tel_key'
            },
            handPhoneNumberOptions: {
              fcName: 'empHandPhoneNumber',
              group: _this.formGroup,
              labelKey: 'hand_phone_number_key'
            },
            faxOptions: {
              fcName: 'empFaxNumber',
              group: _this.formGroup,
              labelKey: 'fax_key'
            },
            establishmentDateOptions: {
              group: _this.formGroup,
              fcName: 'establishmentDate',
              labelKey: 'establishment_date_key',
              placeHolder: 'enter_establishment_date_key'
            }
          };
          _this.panelCifAddressOptions = {
            isExpandable: true,
            labelKey: 'address_details_key',
            expanded: false
          };
          _this.panelSelectBranch = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
          };
          _this.defaultCifDetailsOptions = {
            mobileNumberOptions: {
              fcName: 'personalMobileNo',
              group: _this.formGroup,
              labelKey: 'personal_tel_key'
            },
            residentialTelOptions: {
              fcName: 'residentialMobileNo',
              group: _this.formGroup,
              labelKey: 'residential_tel_key'
            },
            faxOptions: {
              fcName: 'faxNumber',
              group: _this.formGroup,
              labelKey: 'fax_key'
            },
            emailOptions: {
              labelKey: 'email_key',
              placeHolder: 'enter_email_key',
              fcName: 'personalEmail',
              group: _this.formGroup
            },
            addressOptions: {
              areaOptions: {
                labelKey: 'area_key',
                placeHolder: 'enter_area_key',
                fcName: 'area',
                group: _this.formGroup
              },
              wayOptions: {
                labelKey: 'way_key',
                placeHolder: 'enter_way_key',
                fcName: 'way',
                group: _this.formGroup
              },
              buildingOptions: {
                labelKey: 'building_no_key',
                placeHolder: 'enter_building_no_key',
                fcName: 'building',
                group: _this.formGroup
              },
              // poBoxOptions: {
              //   regionOptions: {
              //     labelKey: 'region_key',
              //     placeHolder: 'select_region_key',
              //     fcName: 'region',
              //     group: this.formGroup,
              //     selectedCountryCode: '',
              //     iconOptions: {
              //       iconName: 'clipboard'
              //     }
              //   },
              //   poBoxInputOptions: {
              //     labelKey: 'pobox_key',
              //     placeHolder: 'enter_pobox_key',
              //     fcName: 'poboxinput',
              //     group: this.formGroup,
              //   }
              // },
              postalCodesOptions: {
                labelKey: 'postal_code',
                placeHolder: 'select_postal_code_key',
                fcName: 'postalcode',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              streetOptions: {
                labelKey: 'street_key',
                placeHolder: 'enter_street_key',
                fcName: 'street',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              countriesOptions: {
                labelKey: 'country_key',
                placeHolder: 'select_country_key',
                fcName: 'contactBirthCountry',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'region_key',
                fcName: 'region',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              cityOptions: {
                labelKey: 'city_key',
                placeHolder: 'select_city_key',
                fcName: 'city',
                group: _this.formGroup,
                iconOptions: {
                  iconName: 'clipboard'
                }
              },
              poBoxInputOptions: {
                group: _this.formGroup,
                fcName: 'pobox',
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
                iconOptions: {
                  iconName: 'clipboard'
                }
              }
            }
          };
          _this.moreAddressDetailsInputOptions = {
            labelKey: 'more_address_details_key',
            placeHolder: 'more_adress_details_key',
            fcName: 'moreAddressDetails',
            group: _this.formGroup
          };
          _this.mobileNumberOptions = {
            labelKey: 'mobile_key',
            fcName: 'mobileNumber',
            group: _this.formGroup
          };
          _this.rankingOptions = {
            labelKey: 'ranking_key',
            placeHolder: 'ranking_key',
            fcName: 'ranking',
            group: _this.formGroup
          };
          _this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: _this.formGroup
          };
          _this.residencyOptions = {
            fcName: 'residency',
            group: _this.formGroup
          };
          _this.showAddress = false;
          return _this;
        }

        _inherits(CifOpeningPage, _omni_base_omni_base_);

        return _createClass(CifOpeningPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            _superPropGet(CifOpeningPage, "init", this, 3)([]);

            this.mapAtmBranchesOptions = {
              group: this.formGroup,
              fcName: 'mapAtmBranches',
              labelKey: 'map_atm_branch_key',
              mapOptions: {
                labelKey: 'map'
              },
              showSegments: false,
              mapTypesInclude: '\'A\',\'B\',\'C\'',
              branchIds: '1,3,5',
              parameterToCheck: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CIF_BRANCH,
              requestVO: this.cifOpeningVO
            };
            this.cifInfo = this.commonService.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].USERINFO);

            if (JSON.stringify(this.navService.getAllParams()) !== '{}') {
              this.commonProv.copyObject(this.cifOpeningVO, this.navService.getAllParams(), true, false);

              if (this.cifOpeningVO.ScreenVO && this.cifOpeningVO.ScreenVO.userCifNo) {
                this.cifOpeningVO.ScreenVO.userCifNo = this.cifInfo.omniUserVO.CIF_NO;
              }
            }

            this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CIF_BRANCH).then(function (result) {
              if (result) {
                _this2.fileUploadOptions.maxNbFiles = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS];
              }

              if (result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].CIF_BRANCH] === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].OTHER) {
                _this2.enableCifBranch = false;

                _this2.common.branchSelectionAndMapControl(1, [{
                  fcName: _this2.stepperOptions.namesofSteps[2]
                }, {
                  fcName: _this2.mapAtmBranchesOptions.fcName
                }, {
                  fcName: 'cif_opening_panel3'
                }], true);
              } else {
                _this2.enableCifBranch = true;

                _this2.common.branchSelectionAndMapControl(0, [{
                  fcName: _this2.stepperOptions.namesofSteps[2]
                }, {
                  fcName: _this2.mapAtmBranchesOptions.fcName
                }, {
                  fcName: 'cif_opening_panel3'
                }], true);

                _this2.loadBranch();
              }
            })["catch"](function (error) {});
            this.baseFormGroup = this.formGroup;
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            _superPropGet(CifOpeningPage, "ionViewDidEnter", this, 3)([]);

            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.defaultPersonalDetailsOptions.nationalityOptions.fcName], 1);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.birthCountriesOptions.fcName], 1); // this.omniPull.getParamValOf(CommonBussinessConstant.ALLOWED_ATTACHMENTS_FILES).then((result) => {
            //   if (result) {
            //     this.fileUploadOptions.allowedTypes = result[CommonBussinessConstant.ALLOWED_ATTACHMENTS_FILES];
            //   }
            // });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "onSelectBranch",
          value: function onSelectBranch($event) {
            if ($event.itemValue !== undefined) {
              this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
              this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.cifOpeningVO);
            }
          }
        }, {
          key: "loadBranch",
          value: function loadBranch() {
            var _this3 = this;

            try {
              var paramData = {
                branchesIdList: this.cifInfo.cifBranch ? this.cifInfo.cifBranch : ''
              };
              this.omniPull.returnBranchesList(paramData).then(function (result) {
                if (result && result.gridModel != null && result.gridModel.length > 0) {
                  var branch = _this3.cifInfo.cifBranch ? _this3.cifInfo.cifBranch + ' - ' + result.gridModel[0].longDesc : '';

                  _this3.branchOptions.group.controls[_this3.branchOptions.fcName].setValue(branch);
                } else {
                  _this3.loggerP.warn(result, 'empty response');
                }
              })["catch"](function (error) {});
            } catch (error) {}
          }
        }, {
          key: "onNameChange",
          value: function onNameChange(val) {
            if (this.cifOpeningVO[this.firstNameOptions.fcName] && this.cifOpeningVO[this.lastNameOptions.fcName]) {
              this.cifOpeningVO[this.customerNameValOptions.fcName] = this.cifOpeningVO[this.firstNameOptions.fcName] + ' ' + this.cifOpeningVO[this.lastNameOptions.fcName];
            }
          }
        }, {
          key: "onResidencyChange",
          value: function onResidencyChange(val) {
            if (val && val.selectedObj) {
              if (val.selectedObj.itemValue === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].RESIDENT_CODE) {
                this.showAddress = true;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.countriesOptions.fcName], src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].INVISIBLE_FIELD);
                this.commonProv.setValInsideNestedObj(this.defaultCifDetailsOptions.addressOptions.countriesOptions.fcName, src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].SUDAN_COUNTRY_CODE, this.cifOpeningVO);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.defaultCifDetailsOptions.addressOptions.countriesOptions.fcName, this.defaultCifDetailsOptions.addressOptions.regionOptions.fcName, this.defaultCifDetailsOptions.addressOptions.cityOptions.fcName, this.defaultCifDetailsOptions.addressOptions.streetOptions.fcName, this.defaultCifDetailsOptions.addressOptions.postalCodesOptions.fcName], src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].VISIBLE_FIELD);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_READONLY, [this.defaultCifDetailsOptions.addressOptions.countriesOptions.fcName], src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].VISIBLE_FIELD);
                this.cifOpeningVO[this.countriesOptions.fcName] = '';
              } else {
                this.showAddress = false;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.countriesOptions.fcName], src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].VISIBLE_FIELD);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.defaultCifDetailsOptions.addressOptions.countriesOptions.fcName, this.defaultCifDetailsOptions.addressOptions.regionOptions.fcName, this.defaultCifDetailsOptions.addressOptions.cityOptions.fcName, this.defaultCifDetailsOptions.addressOptions.streetOptions.fcName, this.defaultCifDetailsOptions.addressOptions.postalCodesOptions.fcName], src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].INVISIBLE_FIELD);
                this.cifOpeningVO[this.defaultCifDetailsOptions.addressOptions.countriesOptions.fcName] = '';
                this.cifOpeningVO[this.defaultCifDetailsOptions.addressOptions.regionOptions.fcName] = '';
                this.cifOpeningVO[this.defaultCifDetailsOptions.addressOptions.cityOptions.fcName] = '';
                this.cifOpeningVO[this.defaultCifDetailsOptions.addressOptions.streetOptions.fcName] = '';
                this.cifOpeningVO[this.defaultCifDetailsOptions.addressOptions.postalCodesOptions.fcName] = '';
              }
            }
          }
        }, {
          key: "onCifTypeSelected",
          value: function onCifTypeSelected(selectedCIF) {
            if (selectedCIF && selectedCIF.selectedObj) {
              if (selectedCIF.selectedObj.vtIndicator && selectedCIF.selectedObj.vtIndicator === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_5__["CommonBussinessConstant"].INSTITUTION_VT_INDICATOR) {
                this.isInstitutionType = true;
                this.defaultPersonalDetailsOptions.isInstitutionType = true;
                this.defaultEmployeeOptions.isInstitutionType = true;
                this.defaultCifDetailsOptions.isInstitutionType = true;
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_LABEL, ['cif_open_employment_details_panel'], 'institution_details_key'); // MFawzy, 10012022, TP#1319420, Updating the nationality label key in case of agency

                if (_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_15__["PsCommonSettings"].APP_ID === src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].AGENT_APPLICATION_APP_ID) {
                  this.defaultPersonalDetailsOptions.nationalityOptions.labelKey = 'nationality_key';
                  this.defaultPersonalDetailsOptions.nationalityOptions.placeHolder = 'select_nationality_key';
                } else {
                  this.defaultPersonalDetailsOptions.nationalityOptions.labelKey = 'country_of_establishment_key';
                  this.defaultPersonalDetailsOptions.nationalityOptions.placeHolder = 'country_of_establishment_key';
                } // End MFawzy


                this.defaultCifDetailsOptions.mobileNumberOptions = {
                  fcName: 'personalMobileNo',
                  group: this.formGroup,
                  labelKey: 'telephone_key'
                };
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.firstNameOptions.fcName, this.middleNameOptions.fcName, this.lastNameOptions.fcName, this.motherFirstNameOptions.fcName, this.motherLastNameOptions.fcName, this.genderOptions.fcName, this.customerNameValOptions.fcName, this.defaultPersonalDetailsOptions.psDobOptions.fcName, this.defaultPersonalDetailsOptions.maritalstatusOptions.fcName, this.birthCountriesOptions.fcName, this.defaultEmployeeOptions.employerNameOptions.fcName, this.defaultEmployeeOptions.occupationOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.longNameOptions.fcName, this.shortNameOptions.fcName, this.defaultEmployeeOptions.establishmentDateOptions.fcName], 1);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.defaultCifDetailsOptions.residentialTelOptions.fcName, this.defaultCifDetailsOptions.residentialTelOptions.fcName + 'countriesFcName', this.defaultCifDetailsOptions.residentialTelOptions.fcName + 'numberFcName', this.defaultCifDetailsOptions.faxOptions.fcName, this.defaultCifDetailsOptions.faxOptions.fcName + 'countriesFcName', this.defaultCifDetailsOptions.faxOptions.fcName + 'numberFcName', this.genderOptions.fcName, this.customerNameValOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.defaultCifDetailsOptions.mobileNumberOptions.fcName, this.defaultCifDetailsOptions.mobileNumberOptions.fcName + 'countriesFcName', this.defaultCifDetailsOptions.mobileNumberOptions.fcName + 'numberFcName'], 1);
              } else {
                this.isInstitutionType = false;
                this.defaultPersonalDetailsOptions.isInstitutionType = false;
                this.defaultEmployeeOptions.isInstitutionType = false;
                this.defaultCifDetailsOptions.isInstitutionType = false;
                this.defaultPersonalDetailsOptions.nationalityOptions.labelKey = 'nationality_key';
                this.defaultPersonalDetailsOptions.nationalityOptions.placeHolder = 'select_nationality_key';
                this.defaultCifDetailsOptions.mobileNumberOptions = {
                  fcName: 'personalMobileNo',
                  group: this.formGroup,
                  labelKey: 'personal_tel_key'
                };
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_LABEL, ['cif_open_employment_details_panel'], 'employement_details_key');
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.firstNameOptions.fcName, this.middleNameOptions.fcName, this.lastNameOptions.fcName, this.motherFirstNameOptions.fcName, this.motherLastNameOptions.fcName, this.genderOptions.fcName, this.customerNameValOptions.fcName, this.defaultPersonalDetailsOptions.psDobOptions.fcName, this.defaultPersonalDetailsOptions.maritalstatusOptions.fcName, this.birthCountriesOptions.fcName, this.defaultEmployeeOptions.employerNameOptions.fcName, this.defaultEmployeeOptions.occupationOptions.fcName], 1);
                this.onNameChange(null);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.longNameOptions.fcName, this.shortNameOptions.fcName, this.defaultEmployeeOptions.establishmentDateOptions.fcName], 0);
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_11__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.defaultCifDetailsOptions.residentialTelOptions.fcName, this.defaultCifDetailsOptions.residentialTelOptions.fcName + 'countriesFcName', this.defaultCifDetailsOptions.residentialTelOptions.fcName + 'numberFcName', this.defaultCifDetailsOptions.mobileNumberOptions.fcName, this.defaultCifDetailsOptions.mobileNumberOptions.fcName + 'countriesFcName', this.defaultCifDetailsOptions.mobileNumberOptions.fcName + 'numberFcName', this.defaultCifDetailsOptions.faxOptions.fcName, this.defaultCifDetailsOptions.faxOptions.fcName + 'countriesFcName', this.defaultCifDetailsOptions.faxOptions.fcName + 'numberFcName', this.genderOptions.fcName, this.customerNameValOptions.fcName], 1);
                this.onNameChange(null);
              }
            }
          }
        }]);
      }(_omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_14__["OmniBasePage"]);

      CifOpeningPage.ctorParameters = function () {
        return [{
          type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"]
        }, {
          type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"]
        }, {
          type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"]
        }, {
          type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"]
        }, {
          type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]
        }];
      };

      CifOpeningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cif-opening',
        template: _raw_loader_cif_opening_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cif_opening_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_13__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_8__["OmniPullService"], src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_12__["PsNavigatorService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"], src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_7__["OmniCommonService"]])], CifOpeningPage);
      /***/
    },

    /***/
    "I4lj":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cif-opening/cif-opening.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function I4lj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n\n    <ps-container-panel [options]=\"panelIdDetailsOptions\">\n      <!--\n        <ps-dropdown-cif-types [options]=\"cifTypeOptions\"></ps-dropdown-cif-types>\n       -->\n      <!-- <ps-complex-id-details id=\"complex_id_details\" [options]=\"complexIdDetailsOptions\">\n        </ps-complex-id-details> -->\n      <ps-complex-cif-id-types [options]=\"cifOptions\" (onPsChange)=\"onCifTypeSelected($event)\">\n      </ps-complex-cif-id-types>\n      <ps-input-numeric id=\"input_free_text\" [options]=\"tinNumberOptions\">\n      </ps-input-numeric>\n    </ps-container-panel>\n\n\n    <ps-container-panel [options]=\"panelCifInformationOptions\">\n      <ng-container>\n        <div [hidden]=\"isInstitutionType\">\n          <ps-input-varchar [options]=\"firstNameOptions\" (onPsChange)=\"onNameChange($event)\"></ps-input-varchar>\n          <ps-input-varchar [options]=\"middleNameOptions\"></ps-input-varchar>\n          <ps-input-varchar [options]=\"lastNameOptions\" (onPsChange)=\"onNameChange($event)\"></ps-input-varchar>\n          <ps-input-varchar [options]=\"motherFirstNameOptions\"></ps-input-varchar>\n          <ps-input-varchar [options]=\"motherLastNameOptions\"></ps-input-varchar>\n        </div>\n        <div [hidden]=\"!isInstitutionType\">\n          <ps-input-varchar [options]=\"longNameOptions\"></ps-input-varchar>\n          <ps-input-varchar [options]=\"shortNameOptions\"></ps-input-varchar>\n        </div>\n      </ng-container>\n\n      <ps-input-varchar [options]=\"shortNameArabicOptions\"></ps-input-varchar>\n\n      <ps-input-varchar [options]=\"longNameArabicOptions\"></ps-input-varchar>\n      <ps-input-varchar [options]=\"customerNameValOptions\"></ps-input-varchar>\n\n    </ps-container-panel>\n\n\n\n    <ps-container-panel [options]=\"panelAditionalInformationOptions\">\n\n      <ps-complex-personal-details [options]=\"defaultPersonalDetailsOptions\"></ps-complex-personal-details>\n\n      <ps-lov-gender [options]=\"genderOptions\"></ps-lov-gender>\n\n      <ps-dropdown-legal-status id=\"'lstatus' + id\" [options]=\"lstatusOptions\"></ps-dropdown-legal-status>\n\n      <ps-dropdown-country *ngIf=\"!isInstitutionType\" id=\"countries\" [options]=\"birthCountriesOptions\">\n      </ps-dropdown-country>\n\n      <ps-dropdown-ranking [options]=\"rankingOptions\"></ps-dropdown-ranking>\n\n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelCifAddressOptions\">\n\n      <ps-lov-residency id=\"residencies\" [options]=\"residencyOptions\" (onPsChange)=\"onResidencyChange($event)\">\n      </ps-lov-residency>\n\n      <ps-dropdown-country id=\"countries\" [options]=\"countriesOptions\"></ps-dropdown-country>\n\n      <ps-complex-cif-details [options]=\"defaultCifDetailsOptions\"></ps-complex-cif-details>\n\n      <ps-keyin-input [options]=\"moreAddressDetailsInputOptions\"></ps-keyin-input>\n\n      <ps-entity-phone-number [options]=\"mobileNumberOptions\"></ps-entity-phone-number>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelSelectBranch\" id=\"cif_opening_panel3\">\n      <ps-complex-select-branch [options]=\"selectBranchOptions\" (onPsChange)=\"onSelectBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"panelEmployementDetailsOptions\" id=\"cif_open_employment_details_panel\">\n\n      <ps-complex-employment-details [options]=\"defaultEmployeeOptions\"></ps-complex-employment-details>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelBankRegisterOptions\" id=\"panel_bank_register\">\n\n      <ps-complex-user-contact [options]=\"userContactOptions\"></ps-complex-user-contact>\n\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelAccountOptions\" *ngIf=\"enableCifBranch\">\n\n      <ps-input-display-only id=\"'accountCifBranch' + id\" [options]=\"branchOptions\">\n\n      </ps-input-display-only>\n\n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelAttachementOptions\">\n\n      <ps-file-upload-bs id=\"ps-file-upload\" [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n\n      <ps-input-varchar [options]=\"commentOptions\"></ps-input-varchar>\n\n    </ps-container-panel>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step3'\" step3 [id]=\"stepperOptions.namesofSteps[2]\">\n    <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\">\n    </ps-map-atm-branches>\n  </ps-form-step>\n\n</ps-template-stepper>";
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
            var _this4 = this;

            // Modified by Richie for #BUG 1259353
            if (formGroup !== undefined && this.customizationMap) {
              var formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY); // End Richie

              if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach(function (key) {
                  _this4.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
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
            var _this5 = this;

            if (!this.isPageDisabled) {
              setTimeout(function () {
                _this5.disableForm(_this5.baseFormGroup);

                _this5.isPageDisabled = true;
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
    },

    /***/
    "uL9s":
    /*!*********************************************************!*\
      !*** ./src/app/pages/cif-opening/cif-opening.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function uL9s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaWYtb3BlbmluZy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=39-es5.js.map