(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "40Vc":
/*!*******************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmJvYXJkaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Fxwi":
/*!*****************************************************!*\
  !*** ./src/app/pages/onboarding/onboarding.page.ts ***!
  \*****************************************************/
/*! exports provided: OnBoardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingPage", function() { return OnBoardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./onboarding.page.html */ "cwH1");
/* harmony import */ var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding.page.scss */ "40Vc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _regulaforensics_ionic_native_document_reader_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @regulaforensics/ionic-native-document-reader/ngx */ "KDpp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_cif_id_types_ps_complex_cif_id_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-cif-id-types/ps-complex-cif-id-types.component */ "7XXa");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-common.service */ "0CJq");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commonSRC/psPipes/ps-date-format/ps-date-format.pipe */ "nipE");
/* harmony import */ var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commonSRC/psServices/Event/event.service */ "r40+");
/* harmony import */ var src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/commonSRC/psServices/event-emitter/event-emitter.service */ "f42Q");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common-interface */ "DUM0");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var _commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./../../commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template */ "kRg/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_23__);
























let OnBoardingPage = class OnBoardingPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_21__["OmniBasePage"] {
    constructor(commonProv, loggerP, omniPull, toastController, eventEmitterService, events, ref, omniCommon) {
        var _a, _b;
        super();
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.toastController = toastController;
        this.eventEmitterService = eventEmitterService;
        this.events = events;
        this.ref = ref;
        this.omniCommon = omniCommon;
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.draftsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.draftsObservable = this.draftsSubject.asObservable();
        this.isRequireTransactionPassword = true;
        this.enableSecurityQuestion = true;
        this.whiteSpaceValueForHtml = "&nbsp;";
        this.whiteSpaceValueForPDF = "";
        this.emptyImageForPDF = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsAAAAGMAQMAAADuk4YmAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAADlJREFUeF7twDEBAAAAwiD7p7bGDlgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAGJrAABgPqdWQAAAABJRU5ErkJggg==';
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.enableCifBranch = false;
        this.onBoardingVO = {};
        this.isCorporate = false;
        this.stepperOptions = {
            widgetStepper: ((_a = this.commonProv.activePage.value.param) === null || _a === void 0 ? void 0 : _a.widgetStepper) ? true : false,
            stepperName: 'create_account_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 22,
            namesofSteps: ['pre_terms_and_condition_step', 'main_info_step', 'company_details_step', 'user_credential_step', 'identity_verification_step',
                'personal_details_step', 'selfie_image_step', 'selfie_video_step', 'speciment_upload_step',
                'select_branch_step', 'products_step', 'call_schedule_step', 'contract_signing_step', 'attachment_details', 'owner_kyc', 'liveness_detection', 'company_address_details', 'company_ekyc', 'regula_doc_reader_step', 'regula_selfie_video_step', 'kyc_contract_step', 'account_contract_step'],
            group: this.formGroup,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: ((_b = this.commonProv.activePage.value.param) === null || _b === void 0 ? void 0 : _b.CIFOnboarding) ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].serviceUrl.commonSubmitAction : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].serviceUrl.SubmitOutsideAction,
                preCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.updateScreenVO());
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
                postCallFunction: {
                    func(response) {
                        return new Promise((resolve, reject) => {
                            //Jira #5211 Force user to log out if successfully completed his  onboarding journey
                            if (this.executionClass.isPostLogin && response.actionType.toLowerCase() == "submit" && response.outputType.toLowerCase() == "s") {
                                resolve(this.executionClass.logUserOut(response));
                                return;
                            }
                            resolve(true);
                        });
                    },
                    executionClass: this,
                    params: [this]
                },
            },
            requestObject: this.onBoardingVO,
            showReport: false
        };
        this.showCardToggle = false;
        this.showChequeBookToggle = false;
        this.panelUserCredentials = {
            isExpandable: true,
            labelKey: 'credentials_key',
            iconName: 'clipboard',
            expanded: true
        };
        this.panelIdDetailsOptions = {
            isExpandable: true,
            labelKey: 'id_details_key',
            expanded: true,
        };
        this.panelPersonalDetailsOptions = {
            isExpandable: true,
            labelKey: 'personal_details_key',
            expanded: true,
        };
        this.panelAdditionalDetailsOptions = {
            isExpandable: true,
            labelKey: 'additional_details_key',
            expanded: true,
        };
        this.panelAddressDetailsOptions = {
            isExpandable: true,
            labelKey: 'address_details_key',
            expanded: true,
        };
        this.panelEmploymentDetailsOptions = {
            isExpandable: true,
            labelKey: 'employment_details_key',
            expanded: true
        };
        this.panelEmployementDetailsOptions = {
            isExpandable: true,
            labelKey: 'employement_details_key',
            expanded: true
        };
        this.panelAttachmentOptions = {
            isExpandable: true,
            labelKey: 'attachment_details_key',
            expanded: true
        };
        this.panelProductsOptions = {
            isExpandable: true,
            labelKey: 'products_key',
            expanded: true
        };
        this.panelOptions1Step1 = {
            isExpandable: true,
            labelKey: 'personal_details_key',
            iconName: 'user',
            expanded: true
        };
        this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'identification_details_key',
            iconName: 'finger-print',
            expanded: false
        };
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'address_details_key',
            iconName: 'compass',
            expanded: true
        };
        this.panelOptions1Step4 = {
            isExpandable: true,
            labelKey: 'products_key',
            iconName: 'document',
            expanded: true
        };
        this.panelAccountOptions = {
            isExpandable: true,
            labelKey: 'account_request_key',
            expanded: false
        };
        this.panelAttachementOptions = {
            isExpandable: true,
            labelKey: 'attachment_details_key',
            expanded: false
        };
        this.panelCifInformationOptions = {
            isExpandable: true,
            labelKey: 'cif_information_key',
            expanded: false
        };
        this.atmBranchesPanelOptions = {
            isExpandable: true,
            labelKey: 'atm_branches_key',
            expanded: false
        };
        this.panelCifAddressOptions = {
            isExpandable: true,
            labelKey: 'address_details_key',
            expanded: false
        };
        this.selectBranchPanelOptions = {
            isExpandable: true,
            labelKey: 'branch_details_key',
            expanded: true
        };
        // selectFinBranchLocPanelOptions: IOptionsPsContainerPanel = {
        //   isExpandable: true,
        //   labelKey: 'financing_branch_locator_key',
        //   expanded: true
        // };
        this.selectBranchLocPanelOptions = {
            isExpandable: true,
            labelKey: 'branch_locator_key',
            expanded: true
        };
        ////////////////////////////////////////////////////////////////
        this.specimenOptions = {
            group: this.formGroup,
            fcName: 'onb_specimen',
            labelKey: 'specimen_key',
            dataObservable: this.draftsObservable
        };
        this.selfieOptions = {
            group: this.formGroup,
            fcName: 'onb_selfie',
            labelKey: 'selfie_key',
            mediaButton: {
                group: this.formGroup,
                labelKey: 'selfie_key'
            },
            numberOfImages: 1
        };
        this.callSlotOptions = {
            group: this.formGroup,
            fcName: 'onb_call_schedule',
            labelKey: 'call_schedule_key',
        };
        this.nickNameOptions = {
            group: this.formGroup,
            fcName: 'onb_nickName',
            labelKey: 'nickname_key',
            placeHolder: 'enter_nickname_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.phoneNumberOptions = {
            group: this.formGroup,
            labelKey: 'mobile_number_key',
            placeHolder: 'mobile_key',
            fcName: 'onb_accountMobile',
            validate: true
        };
        this.emailOptions = {
            group: this.formGroup,
            fcName: 'onb_accountEmail',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key',
        };
        this.userCredentialsOptions = {
            requestObject: this.stepperOptions.requestObject,
            fcName: 'onb_complexUserCredentials',
            group: this.formGroup,
            userNameOption: {
                fcName: 'onb_accountUsername',
                group: this.formGroup,
                validateUserName: true //Ghada &Waleed 18052013 TP: 1578107
            },
            passwordConfirmOptions: {
                group: this.formGroup,
                password: {
                    labelKey: 'password_key',
                    placeHolder: 'enter_password_key',
                    fcName: 'onb_accountPass',
                    group: this.formGroup,
                },
                confirmPassword: {
                    labelKey: 'confirm_password_key',
                    placeHolder: 'enter_confirm_password_key',
                    fcName: 'onb_accountConfirmPass',
                    group: this.formGroup,
                }
            }
        };
        this.personalInfoFileUploadOptions = {
            multiple: true,
            group: this.formGroup,
            uploadIconName: 'attach',
            fcName: 'personalInfoFileData'
        };
        this.idDetailsFileUploadOptions = {
            multiple: true,
            group: this.formGroup,
            uploadIconName: 'attach',
            fcName: 'idDetailsFileData'
        };
        this.addressOptions2 = {
            areaOptions: {
                labelKey: 'area_key',
                placeHolder: 'enter_area_key',
                fcName: 'onb_accountArea',
                group: this.formGroup
            },
            wayOptions: {
                labelKey: 'way_key',
                placeHolder: 'enter_way_key',
                fcName: 'onb_accountWay',
                group: this.formGroup,
            },
            buildingOptions: {
                labelKey: 'building_no_key',
                placeHolder: 'enter_building_no_key',
                fcName: 'onb_accountOccupationBuilding',
                group: this.formGroup
            },
            streetOptions: {
                labelKey: 'street_key',
                placeHolder: 'enter_street_key',
                fcName: 'onb_accountStreet',
                group: this.formGroup
            },
            countriesOptions: {
                labelKey: 'country_key',
                placeHolder: 'select_country_key',
                fcName: 'onb_accountCountryCode',
                group: this.formGroup,
            },
            regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'select_region_key',
                fcName: 'onb_accountRegionCode',
                group: this.formGroup
            },
            cityOptions: {
                labelKey: 'city_key',
                placeHolder: 'select_city_key',
                fcName: 'onb_accountCityCode',
                group: this.formGroup,
            },
            poBoxInputOptions: {
                group: this.formGroup,
                fcName: 'onb_accountPoBox',
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
            },
            postalCodesOptions: {
                labelKey: 'postal_code',
                placeHolder: 'select_postal_code_key',
                fcName: 'onb_postalCode',
                group: this.formGroup,
                iconOptions: {
                    iconName: 'clipboard'
                }
            }
        };
        this.fileUploadLabelDescription = {
            labelKey: 'onboarding_label_upload_description_key',
        };
        this.defaultCifIdTypesOptions = {
            showCifType: false,
            group: this.formGroup,
            cifTypeOptions: {
                group: this.formGroup,
                fcName: 'onb_cifType'
            },
            complexIdDetailsOptions: {
                dropdownIdTypesOptions: {
                    group: this.formGroup
                },
                idNumberOptions: {
                    group: this.formGroup
                },
                dateExpiryOptions: {
                    group: this.formGroup
                },
                countriesOptions: {
                    group: this.formGroup
                },
                issueDateOptions: {
                    group: this.formGroup
                },
                group: this.formGroup
            },
            complexIdDetailsOptions1: {
                dropdownIdTypesOptions: {
                    group: this.formGroup
                },
                idNumberOptions: {
                    group: this.formGroup
                },
                dateExpiryOptions: {
                    group: this.formGroup
                },
                countriesOptions: {
                    group: this.formGroup
                },
                issueDateOptions: {
                    group: this.formGroup
                },
                group: this.formGroup
            },
            requestObject: this.onBoardingVO
        };
        this.representativeCifIdTypesOptions = {
            showCifType: false,
            group: this.formGroup,
            cifTypeOptions: {
                group: this.formGroup,
                fcName: 'rep_cifType'
            },
            complexIdDetailsOptions: {
                dropdownIdTypesOptions: {
                    group: this.formGroup,
                    fcName: "idType1"
                },
                idNumberOptions: {
                    group: this.formGroup,
                    fcName: "idNumber1"
                },
                dateExpiryOptions: {
                    group: this.formGroup,
                    fcName: "expiryDate1"
                },
                countriesOptions: {
                    group: this.formGroup,
                    fcName: "rep_place"
                },
                issueDateOptions: {
                    group: this.formGroup,
                    fcName: "rep_issueDate"
                }
            },
            complexIdDetailsOptions1: {
                dropdownIdTypesOptions: {
                    group: this.formGroup,
                    fcName: "idType1"
                },
                idNumberOptions: {
                    group: this.formGroup,
                    fcName: "idNumber1"
                },
                dateExpiryOptions: {
                    group: this.formGroup,
                    fcName: "expiryDate1"
                },
                countriesOptions: {
                    group: this.formGroup,
                    fcName: "rep_place"
                },
                issueDateOptions: {
                    group: this.formGroup,
                    fcName: "rep_issueDate"
                }
            },
            requestObject: this.onBoardingVO
        };
        this.firstNameOptions = {
            group: this.formGroup,
            fcName: 'onb_firstname',
            labelKey: 'english_first_name_key',
            placeHolder: 'enter_english_first_name_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.middleNameOptions = {
            group: this.formGroup,
            fcName: 'onb_middleName',
            labelKey: 'english_middle_name_key',
            placeHolder: 'enter_english_middle_name_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.lastNameOptions = {
            group: this.formGroup,
            fcName: 'onb_lastName',
            labelKey: 'english_last_name_key',
            placeHolder: 'enter_english_last_name_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.shortArabicNameOptions = {
            group: this.formGroup,
            fcName: 'briefNameArabic',
            labelKey: 'arabic_brief_name_key',
            placeHolder: 'enter_arabic_brief_name_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.longArabicNameOptions = {
            group: this.formGroup,
            fcName: 'longNameArabic',
            labelKey: 'arabic_long_name_key',
            placeHolder: 'enter_arabic_long_name_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.defaultPersonalDetailsOptions = {
            customerNameOptions: {
                group: this.formGroup,
                fcName: 'onb_customername',
                labelKey: 'customer_name_key',
                placeHolder: 'enter_customer_name_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            psDobOptions: {
                group: this.formGroup,
                fcName: 'onb_birthDate',
                labelKey: 'date_of_birth_key',
                placeHolder: 'select_date_of_birth_key',
            },
            nationalityOptions: {
                labelKey: 'select_nationality_key',
                placeHolder: 'please_select_nationality_key',
                fcName: 'onb_nationality',
                group: this.formGroup,
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            maritalstatusOptions: {
                labelKey: 'marital_status_key',
                // placeHolder: 'select_maritial_status_key',
                fcName: 'onb_martialStatus',
                group: this.formGroup,
                iconOptions: {
                    iconName: 'clipboard'
                }
            }
        };
        this.postalCodeOptions = {
            labelKey: 'select_postal_code_key',
            placeHolder: 'please_select_postal_code_key',
            fcName: 'onb_postalCode',
            group: this.formGroup,
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.genderOptions = {
            group: this.formGroup,
            fcName: 'onb_gender',
        };
        this.lstatusOptions = {
            labelKey: 'legal_status_key',
            placeHolder: 'legal_status_key',
            group: this.formGroup,
            fcName: 'onb_lstatus',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.accountTypeOptions = {
            allowedAccountType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].AllowedGeneralAccountTypes,
            accountCategory: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACC_TYPE_D,
            group: this.formGroup,
            fcName: 'onb_accountTypes'
        };
        this.currencyOptions = {
            labelKey: 'currency_key',
            placeHolder: 'select_currency_key',
            group: this.formGroup,
            fcName: 'onb_currency'
        };
        this.cardsLookupOptiops = {
            fcName: 'onb_card',
            group: this.formGroup,
        };
        this.cardcheckboxOptions = {
            group: this.formGroup,
            fcName: 'onb_card_checkbox',
            labelKey: 'i_want_a_card_key',
            allowCust: false,
        };
        this.chequeBookcheckboxOptions = {
            group: this.formGroup,
            fcName: 'onb_chequebook_checkbox',
            labelKey: 'i_want_a_cheque_book_key',
            allowCust: false,
        };
        this.chequebookTypeOptions = {
            group: this.formGroup,
            fcName: 'onb_chequeBookTypes'
        };
        this.debitCardTypeOptions = {
            labelKey: 'debit_card_type_key',
            placeHolder: 'debit_card_type_key',
            group: this.formGroup,
            fcName: 'onb_debitcardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CARDTYPE_D
        };
        this.creditCardTypeOptions = {
            labelKey: 'credit_card_type_key',
            placeHolder: 'credit_card_type_key',
            group: this.formGroup,
            fcName: 'onb_creditCardType',
            cardType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CARDTYPE_C
        };
        this.personalInfoCommentOptions = {
            group: this.formGroup,
            fcName: 'onb_personal_info_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.attachementDetCommentOptions = {
            group: this.formGroup,
            fcName: 'onb_attachement_det_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.corpAttachementDetCommentOptions = {
            group: this.formGroup,
            fcName: 'onb_corp_attachement_det_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.tinNumberOptions = {
            fcName: 'onb_tinNumber',
            group: this.formGroup,
            labelKey: 'tin_number_key',
            placeHolder: 'enter_tin_number_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.countriesOptions = {
            labelKey: 'country_of_birth_key',
            placeHolder: 'select_country_key',
            fcName: 'onb_country',
            group: this.formGroup,
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.branchOptions = {
            placeHolder: 'get cif branch from session',
            labelKey: 'branch_key',
            group: this.formGroup,
            fcName: 'onb_branch_name'
        };
        this.defaultEmployeeOptions = {
            employerNameOptions: {
                group: this.formGroup,
                fcName: 'onb_employeename',
                labelKey: 'company_name_key',
                placeHolder: 'enter_company_name_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            occupationOptions: {
                group: this.formGroup,
                fcName: 'onb_occupation',
                labelKey: 'occupation_key',
                placeHolder: 'enter_occupation_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            },
            dateOfJoiningDivisionOptions: {
                group: this.formGroup,
                fcName: 'onb_dateofjoining',
                labelKey: 'date_of_joining_key',
                placeHolder: 'enter_date_of_joining_key'
            },
            addressOptions: {
                areaOptions: {
                    labelKey: 'area_key',
                    placeHolder: 'enter_area_key',
                    fcName: 'onb_employeearea',
                    group: this.formGroup
                },
                wayOptions: {
                    labelKey: 'way_key',
                    placeHolder: 'enter_way_key',
                    fcName: 'onb_employeeway',
                    group: this.formGroup,
                },
                buildingOptions: {
                    labelKey: 'building_no_key',
                    placeHolder: 'enter_building_no_key',
                    fcName: 'onb_employeebuilding',
                    group: this.formGroup
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
                    fcName: 'onb_employeePostalcode',
                    group: this.formGroup,
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                },
                streetOptions: {
                    labelKey: 'street_key',
                    placeHolder: 'enter_street_key',
                    fcName: 'onb_employeestreet',
                    group: this.formGroup
                },
                countriesOptions: {
                    labelKey: 'country_key',
                    placeHolder: 'select_country_key',
                    fcName: 'onb_employeecountry',
                    group: this.formGroup,
                },
                regionOptions: {
                    labelKey: 'region_key',
                    placeHolder: 'select_region_key',
                    fcName: 'onb_employeeregion',
                    group: this.formGroup
                },
                cityOptions: {
                    labelKey: 'city_key',
                    placeHolder: 'select_city_key',
                    fcName: 'onb_employeecity',
                    group: this.formGroup,
                },
                poBoxInputOptions: {
                    group: this.formGroup,
                    fcName: 'onb_employeepobox',
                    labelKey: 'pobox_key',
                    placeHolder: 'enter_pobox_key',
                    iconOptions: {
                        iconName: 'clipboard'
                    }
                }
            },
            officeTelPhoneNumberOptions: {
                fcName: 'onb_empOfficeTelPhoneNumber',
                group: this.formGroup,
                labelKey: 'office_tel_key',
            },
            handPhoneNumberOptions: {
                fcName: 'onb_empHandPhoneNumber',
                group: this.formGroup,
                labelKey: 'hand_phone_number_key',
            },
            faxOptions: {
                fcName: 'onb_empFaxNumber',
                group: this.formGroup,
                labelKey: 'fax_key',
            }
        };
        this.lostDocumentRequestVO = {};
        this.selectBranchOptions = {
            fcName: 'mapAtmBranchesDropdown',
            group: this.formGroup
        };
        this.panelOptions2Step1 = {
            isExpandable: true,
            labelKey: 'select_branch_key',
            iconName: 'document',
            expanded: true
        };
        this.productClassOptions = {
            labelKey: 'product_class_key',
            placeHolder: 'product_class_key',
            fcName: 'productType',
            group: this.formGroup
        };
        this.productCategoryOptions = {
            group: this.formGroup,
            placeHolder: 'select_product_category_key',
            labelKey: 'product_category_key',
            fcName: 'productCategory',
        };
        this.assetDescriptionOptions = {
            group: this.formGroup,
            placeHolder: 'select_asset_description_key',
            labelKey: 'item_assets_description_key',
            fcName: 'assetDescription',
        };
        this.ownerCheckboxOptions = [
            {
                labelKey: 'owner_key',
                group: this.formGroup,
                fcName: 'owner'
            }, {
                labelKey: 'applying_on_behalf_of_owner_key',
                group: this.formGroup,
                fcName: 'behalfOfOwner'
            }
        ];
        //Company Details
        this.companyMainDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'company_main_details_key',
            iconName: 'document',
            expanded: true
        };
        this.legalEntityNameOptions = {
            group: this.formGroup,
            fcName: 'legalEntityName',
            labelKey: 'legal_entity_name_key',
            placeHolder: 'enter_legal_entity_name_key'
        };
        this.taxNumberOptions = {
            fcName: 'taxNumber',
            group: this.formGroup,
            labelKey: 'tax_identification_number_key',
            placeHolder: 'enter_tax_identification_number_key'
        };
        this.estabCountryOptions = {
            labelKey: 'country_of_establishment_key',
            placeHolder: 'select_country_of_establishment_key',
            fcName: 'estabCountry',
            group: this.formGroup,
        };
        this.estabDateOptions = {
            fcName: 'estabDate',
            group: this.formGroup,
            labelKey: 'date_establishment_key',
            placeHolder: 'enter_date_establishment_key'
        };
        this.registNumberOptions = {
            placeHolder: 'enter_registration_number_key',
            labelKey: 'registration_number_key',
            group: this.formGroup,
            fcName: 'registNumber'
        };
        this.currentEmpOptions = {
            placeHolder: 'current_employment_key',
            labelKey: 'current_employment_key',
            group: this.formGroup,
            fcName: 'currentEmp'
        };
        //Ownership Details
        this.ownershipDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'ownership_details_key',
            iconName: 'document',
            expanded: true
        };
        this.entityTypeLovOptiops = {
            group: this.formGroup,
            fcName: 'entityType',
        };
        this.existingCustomerOptions = {
            labelKey: 'existing_customer_key',
            placeHolder: 'existing_customer_key',
            group: this.formGroup,
            fcName: 'existingCustomer',
            psClass: 'toggleColor'
        };
        this.cifNumberOptions = {
            placeHolder: 'enter_cif_number_key',
            labelKey: 'cif_number_key',
            group: this.formGroup,
            fcName: 'cifNumber'
        };
        this.designationeLovOptiops = {
            group: this.formGroup,
            labelKey: 'designation_key',
            placeHolder: 'select_designation_key',
            fcName: 'designation',
            listOfOptions: [{
                    itemValue: 'S',
                    description: 'Shareholder',
                    selectedObj: {
                        itemValue: 'S',
                        description: 'Shareholder',
                    }
                },
                {
                    itemValue: 'D',
                    description: 'Director',
                    selectedObj: {
                        itemValue: 'D',
                        description: 'Director',
                    }
                }
            ]
        };
        this.ownershipPercentageOptions = {
            fcName: 'ownershipPercentage',
            group: this.formGroup,
            labelKey: 'ownership_percentage_key',
            placeHolder: 'enter_ownership_percentage_key'
        };
        this.AuthSignerOptions = {
            labelKey: 'authorized_signer_key',
            placeHolder: 'authorized_signer_key',
            group: this.formGroup,
            fcName: 'authSigner',
            psClass: 'toggleColor'
        };
        this.authPowerofAttorneyOptions = {
            labelKey: 'authorized_power_of_attorney_key',
            placeHolder: 'authorized_power_of_attorney_key',
            group: this.formGroup,
            fcName: 'authPowerofAttorney',
            psClass: 'toggleColor'
        };
        this.panelPinOptions = {
            isExpandable: true,
            labelKey: 'pin_key',
            iconName: 'contact',
            expanded: true
        };
        this.pinConfirmOptions = {
            group: this.formGroup,
            password: {
                labelKey: 'pin_key',
                placeHolder: 'enter_pin_key',
                fcName: 'onb_pin',
                group: this.formGroup,
            },
            confirmPassword: {
                labelKey: 'confirm_pin_key',
                placeHolder: 'enter_confirm_pin_key',
                fcName: 'onb_confirm_pin',
                group: this.formGroup,
            },
            showPasswordHint: false,
            requestObject: this.onBoardingVO
        };
        this.panelSecurityQuestion = {
            isExpandable: true,
            labelKey: 'security_question_key',
            iconName: 'lock'
        };
        this.securityQuestionOptions = {
            group: this.formGroup,
            securityQuestionOptions: {
                fcName: 'onb_security_question',
                group: this.formGroup,
            },
            securityAnswerOptions: {
                labelKey: 'security_answer_key',
                placeHolder: 'enter_your_security_answer_key',
                fcName: 'onb_security_question_answer',
                group: this.formGroup,
            }
        };
        this.showCifDetails = false;
        this.showChequebooklookup = false;
        this.showCardTypelookup = false;
        this.showCreditCardTypes = false;
        this.showDebitCardTypes = false;
        this.complexEcoSectorOptions = {
            fcName: 'ecoSector',
            group: this.formGroup
        };
        this.finanacingFileUploadOptions = {
            multiple: true,
            fcName: 'financingFileData',
            group: this.formGroup,
            uploadIconName: 'attach'
        };
        this.financingFileUploadLabelDescription = {
            labelKey: 'financing_upload_description_key',
        };
        this.financingToggleOptions = {
            fcName: 'onb_financing_toggle',
            group: this.formGroup,
            labelKey: 'financing_toggle_key'
        };
        this.financingSelectBranchOptions = {
            fcName: 'finanicingMapAtmBranchesDropdown',
            group: this.formGroup,
            countryRegionCityOptions: {
                countriesOptions: {
                    fcName: 'finnacingBranchCountry'
                },
                regionOptions: {
                    fcName: 'finnacingBranchRegion'
                },
                cityOptions: {
                    fcName: 'finnacingBranchCity'
                }
            },
            branchesOptions: {
                labelKey: 'financing_branch_key',
                fcName: 'finnacingBranch'
            }
        };
        this.onbSelectBranchOptions = {
            fcName: 'onbMapAtmBranchesDropdown',
            group: this.formGroup,
            countryRegionCityOptions: {
                countriesOptions: {
                    fcName: 'onbBranchCountry'
                },
                regionOptions: {
                    fcName: 'onbBranchRegion'
                },
                cityOptions: {
                    fcName: 'onbBranchCity'
                }
            },
            branchesOptions: {
                labelKey: 'financing_branch_key',
                fcName: 'onbBranch'
            }
        };
        this.facilityTypeOptions = {
            group: this.formGroup,
            placeHolder: 'select_facility_types_key',
            labelKey: 'facility_types_key',
            fcName: 'facilityType',
        };
        this.downPaymentOptions = {
            fcName: 'downPayment',
            group: this.formGroup,
            labelKey: 'down_payment_key',
            placeHolder: 'enter_down_payment_key',
            decimalPoints: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].DEFAULT_DECIMAL_POINTS
        };
        this.initialAmountOptions = {
            fcName: 'initialAmount',
            group: this.formGroup,
            labelKey: 'initial_amount_key',
            placeHolder: 'enter_initial_amount_key',
            decimalPoints: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].DEFAULT_DECIMAL_POINTS
        };
        this.complexAmountOptions = {
            showLimitLabel: false,
            currenciesOptions: {
                labelKey: 'financing_currency_key',
                placeHolder: 'select_financing_currency_key',
                group: this.formGroup,
                fcName: 'financing_currency',
                currencyType: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].FINANCING_CURRENCY_TYPE
            },
            amountOptions: {
                labelKey: 'financing_amount_key',
                placeHolder: 'enter_financing_amount_key',
                fcName: 'inputAmount',
                group: this.formGroup,
                type: 'financing_amount'
            }
        };
        this.monthlyInAmountOptions = {
            showLimitLabel: false,
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'currency_key',
                group: this.formGroup,
                fcName: 'monthlyIncomeCurrency'
            },
            amountOptions: {
                labelKey: 'monthly_income_amount_key',
                placeHolder: 'enter_monthly_income_amount_key',
                fcName: 'monthlyIncome',
                group: this.formGroup,
                type: 'amount'
            }
        };
        this.showFinancingSection = false;
        // financingMapAtmBranchesOptions: IOptionsPsMapAtmBranchesExposed;
        this.onbCifBranchOptions = {
            fcName: 'financingCifBranchLable',
            labelKey: 'financing_branch_key',
            group: this.formGroup
        };
        this.tenorFinancingOptions = {
            fcName: 'financingTenor',
            labelKey: 'financing_tenor_key',
            placeHolder: 'tenor_placeholder_key',
            group: this.formGroup
        };
        this.profitRateOptions = {
            placeHolder: 'select_yield_profit_rate_key',
            labelKey: 'yield_profit_rate_key',
            group: this.formGroup,
            fcName: 'profitRate'
        };
        this.noOfPaymentsOptions = {
            fcName: 'noOfPayments',
            group: this.formGroup,
            labelKey: 'no_of_payments_key',
            placeHolder: 'enter_no_of_payments_key'
        };
        this.payEveryOptions = {
            labelKey: 'pay_every_key',
            placeHolder: 'select_to_pay_every_key',
            fcName: 'payEvery',
            group: this.formGroup
        };
        this.isPostLogin = false;
        this.defaultFormat = src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].PREV_DATE_FORMAT;
        this.companyAdditionalDetailsPanelOptions = {
            isExpandable: true,
            labelKey: 'company_additional_details_key',
            iconName: 'document',
            expanded: true
        };
        this.corpTypeOptions = {
            group: this.formGroup,
            fcName: 'onb_corpType',
        };
        this.rankingOptions = {
            labelKey: 'ranking_key',
            placeHolder: 'ranking_key',
            fcName: 'ranking',
            group: this.formGroup
        };
        this.corpEmailOptions = {
            group: this.formGroup,
            fcName: 'companyEmail',
            labelKey: 'email_key',
            placeHolder: 'enter_email_key',
        };
        this.corpAddressOptions = {
            areaOptions: {
                labelKey: 'area_key',
                placeHolder: 'enter_area_key',
                fcName: 'corp_onb_accountArea',
                group: this.formGroup
            },
            wayOptions: {
                labelKey: 'way_key',
                placeHolder: 'enter_way_key',
                fcName: 'corp_onb_accountWay',
                group: this.formGroup,
            },
            buildingOptions: {
                labelKey: 'building_no_key',
                placeHolder: 'enter_building_no_key',
                fcName: 'corp_onb_accountOccupationBuilding',
                group: this.formGroup
            },
            streetOptions: {
                labelKey: 'street_key',
                placeHolder: 'enter_street_key',
                fcName: 'corp_onb_accountStreet',
                group: this.formGroup
            },
            countriesOptions: {
                labelKey: 'country_key',
                placeHolder: 'select_country_key',
                fcName: 'corp_onb_accountCountryCode',
                group: this.formGroup,
            },
            regionOptions: {
                labelKey: 'region_key',
                placeHolder: 'select_region_key',
                fcName: 'corp_onb_accountRegionCode',
                group: this.formGroup
            },
            cityOptions: {
                labelKey: 'city_key',
                placeHolder: 'select_city_key',
                fcName: 'corp_onb_accountCityCode',
                group: this.formGroup,
            },
            poBoxInputOptions: {
                group: this.formGroup,
                fcName: 'corp_onb_accountPoBox',
                labelKey: 'pobox_key',
                placeHolder: 'enter_pobox_key',
            },
        };
        this.isOwnerToggleOptions = {
            labelKey: 'is_owner_key',
            group: this.formGroup,
            fcName: 'isOwnerToggle',
            psClass: 'toggleColor',
        };
        this.corpFileUploadOptions = {
            multiple: true,
            fcName: 'selectedFileData',
            group: this.formGroup,
            uploadIconName: 'attach'
        };
        this.addFileUploadLabelDescription = {
            labelKey: 'onboarding_label_upload_description_key',
        };
        this.addFileUploadOptions = {
            multiple: true,
            group: this.formGroup,
            uploadIconName: 'attach',
            fcName: 'additionalFileUpload'
        };
        this.addCommentOptions = {
            group: this.formGroup,
            fcName: 'onb_additional_comment',
            labelKey: 'file_comment_key',
            placeHolder: 'enter_file_comment_key',
            iconOptions: {
                iconName: 'clipboard'
            }
        };
        this.termsAndConditionsOptions = {
            checkBoxOptions: {
                group: this.formGroup,
                fcName: 'checkboxConfirm',
                labelKey: 'agree_terms_and_conditions_key',
                //applyValueValidation: true // Added by ghada, tp#1383050  a custom validator will be applied to validate if component's value if true to mark it as valid
                allowDefaultValue: false //Added by Marina jira-AZDB-1294; terms and conditions shouldn't have a false value it is either empty or true 
            },
            htmlViewerOptions: {}
        };
        this.reportKYCShow = false;
        this.reportAccountShow = false;
        this.kycReportBase64 = 'onb_kyc_uploadedFiles';
        this.accountReportBase64 = 'onb_accopen_uploadedFiles';
        this.mandatoryFlagValuesDic = {};
        this.reportKYCTemplateOptions = {
            showReport: true,
            allowHorizontalScroll: true,
            group: this.formGroup,
            reportParametersList: {}
        };
        this.reportAccountTemplateOptions = {
            showReport: true,
            allowHorizontalScroll: true,
            group: this.formGroup,
            reportParametersList: {}
        };
        this.kycReportPanelOptions = {
            isExpandable: true,
            labelKey: 'kyc_contract_key',
            iconName: 'report',
            expanded: true,
        };
        this.accountReportPanelOptions = {
            isExpandable: true,
            labelKey: 'generate_account_contract_key',
            iconName: 'report',
            expanded: true,
        };
        this.kycReportCheckBoxOptions = {
            group: this.formGroup,
            fcName: 'kycCheckbox',
            labelKey: 'i_accept_kyc_contract_step_key',
        };
        this.accountReportCheckBoxOptions = {
            group: this.formGroup,
            fcName: 'accountCheckbox',
            labelKey: 'i_accept_account_contract_step_key',
        };
        this.exportButtonOptions = {
            iconName: 'document',
            labelKey: 'download_as_pdf_key',
            group: this.formGroup
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.isCorporate = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].APP_ID == src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CORPORATE_APP_ID;
        this.isPostLogin = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].oper_ID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_ONBOARDING_OPER;
        this.sessionData = this.commonProv.session.getValueOf((this.isPostLogin ? src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].USERINFO : src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].preLoginResponse));
        if (this.isCorporate) {
            this.stepperOptions.namesofSteps[1] = 'representative_details_step';
            this.panelOptions1Step1.labelKey = 'representative_details_key';
            this.stepperOptions.namesofSteps[11] = 'video_call_schedule_step';
            this.firstNameOptions.fcName = "onb_representativeFirstname";
            this.lastNameOptions.fcName = "onb_representativeLastName";
            this.phoneNumberOptions.fcName = "onb_representativeAccountMobile";
            this.emailOptions.fcName = "onb_representativeAccountEmail";
            this.representativeCifIdTypesOptions.param = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].ALLOWED_CROP_INSTITUTION_ID_TYPE; // Mohanad 08042024 - that this was added as per the request of AZDB-2532 
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[5], this.stepperOptions.namesofSteps[6], this.stepperOptions.namesofSteps[7], this.stepperOptions.namesofSteps[8]], 0);
            if (!this.isPostLogin) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[4], this.stepperOptions.namesofSteps[9], this.stepperOptions.namesofSteps[11], this.stepperOptions.namesofSteps[12], this.stepperOptions.namesofSteps[14], this.stepperOptions.namesofSteps[15], this.stepperOptions.namesofSteps[16], this.stepperOptions.namesofSteps[17]], 0);
            }
        }
        else {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.stepperOptions.namesofSteps[2], this.stepperOptions.namesofSteps[14], this.stepperOptions.namesofSteps[15], this.stepperOptions.namesofSteps[16], this.stepperOptions.namesofSteps[17]], 0);
        }
        this.mapAtmBranchesOptions = {
            group: this.formGroup,
            fcName: 'onb_mapAtmBranches',
            labelKey: 'map_branch_key',
            mapOptions: {
                labelKey: 'map'
            },
            showSegments: false,
            mapTypesInclude: '\'B\'',
            requestVO: this.onBoardingVO
        };
        // this.financingMapAtmBranchesOptions = {
        //   group: this.formGroup,
        //   fcName: 'finnancing_mapAtmBranches',
        //   labelKey: 'financing_map_atm_branch_key',
        //   mapOptions: {
        //     labelKey: 'map'
        //   },
        //   showSegments: false,
        //   mapTypesInclude: '\'B\'',
        //   parameterToCheck: CommonBussinessConstant.FACILITY_CIF_BRANCH,
        //   requestVO: this.onBoardingVO
        // };
        this.mapFinancingStepvalidation = this.commonProv.getInitialState(this.stepperOptions.namesofSteps[this.stepperOptions.namesofSteps.length - 1]);
        this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS).then((result) => {
            if (result) {
                this.personalInfoFileUploadOptions.maxNbFiles = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS];
                this.idDetailsFileUploadOptions.maxNbFiles = result[src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_MAX_NUMBER_OF_ATTACHMENTS];
            }
        });
        // this.fetchParameter();
        this.omniPull.getParamValOf('RequireTransactionPassword').then(res => {
            this.isRequireTransactionPassword = res ? res.RequireTransactionPassword : true;
        }).catch(err => this.loggerP.log(err));
        //Makki - #6800 Init Default Settings for Pre T&C Step
        this.termsAndConditionsOptions.checkBoxOptions.group = this.formGroup;
        this.termsAndConditionsOptions.htmlViewerOptions.fileName = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_19__["PsCommonSettings"].oper_ID + "-TermsAndConditions.html";
        this.termsAndConditionsOptions.htmlViewerOptions.defaultFileName = "TermsAndConditions.html";
        this.termsAndConditionsOptions.htmlViewerOptions.parseHtmlFromFile = true;
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.termsAndConditionsOptions.checkBoxOptions.fcName], 1);
        this.omniPull.getParamValOf('EnableSecurityQuestion').then(res => {
            this.enableSecurityQuestion = res ? res.EnableSecurityQuestion : true;
        }).catch(err => this.loggerP.log(err));
    }
    onSelectFinancingBranch($event) {
        if ($event.itemValue !== undefined) {
            this.formGroup.controls[this.financingSelectBranchOptions.fcName].setValue($event);
            this.commonProv.setValInsideNestedObj(this.financingSelectBranchOptions.fcName, $event.selectedObj, this.onBoardingVO);
        }
    }
    onSelectCprporateType(event) {
        this.cifIdTypesComp.idDetailsComp.idTypeComp.loadIdTypes(event.itemValue);
    }
    fetchParameter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = yield this.omniPull.getParamValOf(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].FACILITY_CIF_BRANCH).catch((error) => this.loggerP.log(error));
            result = {
                RequestBranch: 'R'
            };
            if (result && result.RequestBranch === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].FACILITY_USER_INPUT_VALUE) {
                this.enableCifBranch = false;
                this.omniCommon.branchSelectionAndMapControl(1, [{ fcName: this.stepperOptions.namesofSteps[10] }, { fcName: 'onb_branch_panel' },
                    { fcName: 'onb_map_panel' }], true);
            }
            else {
                this.enableCifBranch = true;
                if (this.onBoardingVO[this.mapAtmBranchesOptions.fcName]) {
                    this.commonProv.setValInsideNestedObj(this.onbCifBranchOptions.fcName, this.onBoardingVO[this.mapAtmBranchesOptions.fcName].briefDesc, this.onBoardingVO);
                }
                this.omniCommon.branchSelectionAndMapControl(0, [{ fcName: this.stepperOptions.namesofSteps[10] }, { fcName: 'onb_branch_panel' },
                    { fcName: 'onb_map_panel' }], true);
            }
        });
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.cardcheckboxOptions.fcName, this.productClassOptions.fcName, this.productCategoryOptions.fcName, this.assetDescriptionOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, ['mapBranchInput'], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifNumberOptions.fcName, this.ownershipPercentageOptions.fcName, 'financing_branch_panel', 'financing_map_panel'], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_READONLY, [this.profitRateOptions.fcName, this.initialAmountOptions.fcName], 1);
        if (this.isPostLogin) {
            this.reportKYCTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].POSTLOGIN_ONBOARDING_KYC_OPER_ID;
            this.reportAccountTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].POSTLOGIN_ONBOARDING_ACCOUNT_OPER_ID;
        }
        else {
            this.reportKYCTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].PRELOGIN_ONBOARDING_KYC_OPER_ID;
            this.reportAccountTemplateOptions.operId = src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].PRELOGIN_ONBOARDING_ACCOUNT_OPER_ID;
        }
    }
    onSelectBranch($event) {
        if ($event.itemValue !== undefined) {
            this.formGroup.controls[this.selectBranchOptions.fcName].setValue($event);
            this.commonProv.setValInsideNestedObj(this.selectBranchOptions.fcName, $event.selectedObj, this.onBoardingVO);
        }
    }
    mapValueChanged(event) {
        if (this.enableCifBranch && event.newValue) {
            this.commonProv.setValInsideNestedObj(this.onbCifBranchOptions.fcName, event.newValue.briefDesc, this.onBoardingVO);
        }
    }
    //Edited by ghada, tp#1345713 for fixing the issue of location panels to be shown based on financing toggle
    financingToggleChecking(event) {
        if (event.newValue != undefined) {
            this.showFinancingSection = event.newValue == false || event.newValue == 'false' ? false : true; //Muhnd AZDB-6980 - 16012025
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, ['financing_branch_panel', 'financing_map_panel'], event.newValue);
        }
    }
    loadOnBoardingData() {
        this.omniPull.returnSubmitDataList({ filterByOper: true, status: 'A' }).then((val) => {
            const data = val.gridModel;
            this.commonProv.dismissLoading();
            if (data.length > 0) {
                const VO = data[0];
                VO.submitFieldValueMap.actionType = 'save';
                VO.submitFieldValueMap.dataSaveId = Number(VO.dataSaveId);
                this.events.publish('draft:navigation', VO.submitFieldValueMap);
                this.commonProv.dismissLoading();
                //pass the drafts to the complex specimen component to set the values
                this.draftsSubject.next(Object.assign({}, VO.submitFieldValueMap));
            }
        }).catch((err) => {
            this.commonProv.dismissLoading();
        });
    }
    resetVisibility() {
        this.showCardToggle = false;
        this.showChequeBookToggle = false;
        this.showCardTypelookup = false;
        this.showChequebooklookup = false;
        this.resetCardsVisibility();
    }
    resetCardsVisibility() {
        this.showDebitCardTypes = false;
        this.showCreditCardTypes = false;
    }
    cardChecking(event) {
        if (event.newValue != undefined) {
            if (event.newValue == 'true' || event.newValue == true) {
                this.showCardTypelookup = true;
            }
            else {
                this.showCardTypelookup = false;
                this.resetCardsVisibility();
            }
        }
    }
    chequeBookChecking(event) {
        if (event.newValue != undefined) {
            if (event.newValue == 'true' || event.newValue == true) {
                this.showChequebooklookup = true;
            }
            else {
                this.showChequebooklookup = false;
            }
        }
    }
    cardTypeChecking(event) {
        if (event.newValue != undefined || event.itemValue != undefined) {
            if (event.newValue === 'D' || event.itemValue === 'D') {
                this.showDebitCardTypes = true;
                this.showCreditCardTypes = false;
            }
            else if (event.newValue === 'C' || event.itemValue === 'C') {
                this.showCreditCardTypes = true;
                this.showDebitCardTypes = false;
            }
        }
    }
    accountTypeChecking(event) {
        this.resetVisibility();
        if (event.affectCard != undefined) {
            if (event.affectCard === '1') {
                this.showCardToggle = true;
            }
            if (event.affection === '2') {
                this.showChequeBookToggle = true;
            }
        }
    }
    ngAfterViewInit() {
        if (this.onBoardingVO[this.cardcheckboxOptions.fcName] === undefined) {
            this.onBoardingVO[this.cardcheckboxOptions.fcName] = false;
        }
        if (this.onBoardingVO[this.chequeBookcheckboxOptions.fcName] === undefined) {
            this.onBoardingVO[this.chequeBookcheckboxOptions.fcName] = false;
        }
        if (this.sessionData.companySettingsCO) {
            this.commonProv.setValInsideNestedObj(this.monthlyInAmountOptions.currenciesOptions.fcName, this.sessionData.companySettingsCO.baseCurrency, this.onBoardingVO);
        }
        /*Moved by ghada, AZDB-4632 to speed the process of defaulting the fields with previously selected values
        and since the issue of id types ddl got fixed, there 's no need to wait for it's service to return data*/
        if (this.isPostLogin) {
            /*Makki: AZDB-4690 Adding Post-login condition in order to avoid security error  */
            this.loadOnBoardingData();
        }
    }
    //reset data of financiing if toggle  is desiabled on submit
    updateScreenVO() {
        if (!this.onBoardingVO[this.financingToggleOptions.fcName]) {
            delete this.onBoardingVO[this.complexAmountOptions.amountOptions.fcName];
            delete this.onBoardingVO[this.complexAmountOptions.currenciesOptions.fcName];
            delete this.onBoardingVO[this.facilityTypeOptions.fcName];
            delete this.onBoardingVO[this.downPaymentOptions.fcName];
            delete this.onBoardingVO[this.financingSelectBranchOptions.fcName];
            delete this.onBoardingVO[this.financingSelectBranchOptions.countryRegionCityOptions.countriesOptions.fcName];
            delete this.onBoardingVO[this.financingSelectBranchOptions.countryRegionCityOptions.regionOptions.fcName];
            delete this.onBoardingVO[this.financingSelectBranchOptions.countryRegionCityOptions.cityOptions.fcName];
            delete this.onBoardingVO[this.financingSelectBranchOptions.branchesOptions.fcName];
            //  delete this.onBoardingVO[this.financingMapAtmBranchesOptions.fcName];
        }
        //add by Marina TP:#1486207 add mobileNo and email properties to VO in order to be able to read it in authentication-matrix component
        this.commonProv.setValInsideNestedObj('mobileNo', this.formGroup.controls[this.phoneNumberOptions.fcName].value, this.onBoardingVO);
        this.commonProv.setValInsideNestedObj('email', this.formGroup.controls[this.emailOptions.fcName].value, this.onBoardingVO);
        //Temp: Delete Key Of Tin if it is empty
        if (this.onBoardingVO[this.tinNumberOptions.fcName] == "" || this.onBoardingVO[this.tinNumberOptions.fcName] == null) {
            delete this.onBoardingVO[this.tinNumberOptions.fcName];
        }
    }
    changeDownPaymentDecimalPoints(event) {
        if (this.complexAmountOptions.amountOptions.decimalPoints) {
            this.downPaymentOptions.decimalPoints = this.complexAmountOptions.amountOptions.decimalPoints;
        }
    }
    onOwnerChanged(event, owner) {
        if (event != null && event != undefined) {
            if (event.newValue === true) {
                const otherOwners = this.ownerCheckboxOptions.filter(i => i.fcName !== owner.fcName);
                for (owner of otherOwners) {
                    this.commonProv.setValInsideNestedObj(owner.fcName, false, this.onBoardingVO);
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [owner.fcName], 0);
                }
            }
        }
    }
    onExistingCustomerToggleChange(event) {
        if (event && event.newValue != undefined) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.cifNumberOptions.fcName], event.newValue);
        }
    }
    designationChanged(event) {
        if (event && event.itemValue) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.ownershipPercentageOptions.fcName], event.itemValue === 'S' ? 1 : 0);
        }
    }
    onProductClassChange(event) {
        if (event && event.selectedObj) {
            this.commonProv.setValInsideNestedObj(this.noOfPaymentsOptions.fcName, event.selectedObj.noOfPayment, this.onBoardingVO);
            this.commonProv.setValInsideNestedObj(this.payEveryOptions.fcName, event.selectedObj.periodicityType, this.onBoardingVO);
            this.commonProv.setValInsideNestedObj(this.profitRateOptions.fcName, 10, this.onBoardingVO);
        }
    }
    onDownPaymentChange(event) {
        if (event && event.newValue && this.formGroup.controls[this.complexAmountOptions.amountOptions.fcName].value) {
            this.commonProv.setValInsideNestedObj(this.initialAmountOptions.fcName, (this.formGroup.controls[this.complexAmountOptions.amountOptions.fcName].value - event.newValue), this.onBoardingVO);
        }
    }
    onAmountChanged(event) {
        if (event && event.amount && this.formGroup.controls[this.downPaymentOptions.fcName].value) {
            this.commonProv.setValInsideNestedObj(this.initialAmountOptions.fcName, (event.amount - this.formGroup.controls[this.downPaymentOptions.fcName].value), this.onBoardingVO);
        }
    }
    addData(OCRResults, fieldNameFromOCR, fieldNameFromRequestObject, value) {
        let fieldValue = OCRResults.getTextFieldValueByType({ fieldType: _regulaforensics_ionic_native_document_reader_ngx__WEBPACK_IMPORTED_MODULE_6__["Enum"].eVisualFieldType[fieldNameFromOCR] });
        if (fieldValue) {
            this.stepperOptions.requestObject[fieldNameFromRequestObject] = fieldValue;
        }
    }
    setFileValController(base64, fcName) {
        if (base64) {
            let file = {
                fileExt: "png",
                fileName: fcName + ".png",
                isImage: true,
                file: base64,
                status: "N",
                imageUrl: "data:image/png;base64," + base64
            };
            if (!this.stepperOptions.group.controls[fcName]) {
                this.stepperOptions.group.addControl(fcName, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]());
            }
            if (!Array.isArray(this.stepperOptions.requestObject[fcName + "_uploadedFiles"])) {
                this.stepperOptions.requestObject[fcName + "_uploadedFiles"] = [];
            }
            this.stepperOptions.group.controls[fcName].setValue(file);
            this.stepperOptions.group.controls[fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CONTROLLER_CALLED_AFTER_CHANGE] = true;
            this.stepperOptions.group.controls[fcName][src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].CONTROLLER_CALL_VALIDATE_SERVICE] = false;
            // this.stepperOptions.requestObject[fcName] = file;
            this.stepperOptions.requestObject[fcName + "_uploadedFiles"].push(file);
        }
    }
    onIdTypesLoaded(event) {
        if (event) {
            if (this.commonProv.activePage.value.operID === src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].CIF_ONBOARDING_OPER) {
                this.showCifDetails = true;
            }
        }
    }
    onIsOwnerSelect(event) {
    }
    ngOnDestroy() {
        this.draftsSubject.unsubscribe();
    }
    //Jira #5211 Force user to log out if successfully completed his  onboarding journey
    logUserOut() {
        this.omniCommon.logout(7).then(() => {
            this.commonProv.dismissLoading();
        });
    }
    onChangeCheckboxKyc(event) {
        if (event.newValue == false || event.newValue == "false") {
            this.kycReportCheckBoxOptions.group.controls[this.kycReportCheckBoxOptions.fcName].reset();
        }
    }
    onChangeCheckboxAccount(event) {
        if (event.newValue == false || event.newValue == "false") {
            this.accountReportCheckBoxOptions.group.controls[this.accountReportCheckBoxOptions.fcName].reset();
        }
    }
    onKYCButtonClicked(event) {
        this.omniCommon.exportData(src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF, this.handleKYCReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF), this.reportKYCTemplateOptions.operId, this.commonProv.translate(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].KYC_REPORT_KEY));
    }
    onAccountButtonClicked(event) {
        this.omniCommon.exportData(src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF, this.handleAccountReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF), this.reportAccountTemplateOptions.operId, this.commonProv.translate(src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].ACCOUNT_OPENING_REPORT_KEY));
    }
    onOpenStepWidget(widgetStep) {
        const { stepName, wasStepLoaded } = widgetStep;
        //Added by Michel to handle unloaded widgets
        if (!wasStepLoaded) {
            console.log('Step Widget isnt Loaded: ', stepName);
            this.templateStepper.containerStepper.dismissPopover(true);
        }
        else {
            this.manageStepMandatoryFlag(stepName, true);
        }
    }
    onInitStepWidget(stepName) {
        this.manageStepMandatoryFlag(stepName, this.isPostLogin ? false : true);
    }
    manageStepMandatoryFlag(stepName, stepWidgetIsOpen) {
        this.reportKYCShow = false;
        this.reportAccountShow = false;
        switch (stepName) {
            case 'kyc_contract_step':
                this._fetchCheckBoxMandatoryFlag('MandatoryKycContract', this.kycReportCheckBoxOptions.fcName).then((isMandatory) => {
                    if (!stepWidgetIsOpen) {
                        return;
                    }
                    if (this.isPostLogin && isMandatory && !this.templateStepper.containerStepper.checkOtherWidgetsStatus(['kyc_contract_step', 'account_contract_step'])) {
                        this.showFinishOtherStepsFirstWarning();
                        this.reportKYCShow = false;
                        return;
                    }
                    this.reportKYCTemplateOptions.reportParametersList = this.handleKYCReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML);
                    this.reportKYCShow = true;
                    this.saveAsBase64(this.reportKYCTemplateOptions, stepName, this.kycReportBase64);
                });
                break;
            case 'account_contract_step':
                this._fetchCheckBoxMandatoryFlag('MandatoryAccountOpeningContract', this.accountReportCheckBoxOptions.fcName).then((isMandatory) => {
                    if (!stepWidgetIsOpen) {
                        return;
                    }
                    if (this.isPostLogin && isMandatory && !this.templateStepper.containerStepper.checkOtherWidgetsStatus(['account_contract_step'])) {
                        this.showFinishOtherStepsFirstWarning();
                        this.reportAccountShow = false;
                        return;
                    }
                    this.reportAccountTemplateOptions.reportParametersList = this.handleAccountReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML);
                    this.reportAccountShow = true;
                    this.saveAsBase64(this.reportAccountTemplateOptions, stepName, this.accountReportBase64);
                });
                break;
        }
    }
    _fetchCheckBoxMandatoryFlag(adminParameter, fcName) {
        return new Promise((resolve, reject) => {
            if (this.mandatoryFlagValuesDic[adminParameter] !== undefined) {
                let isMandatory = this.mandatoryFlagValuesDic[adminParameter];
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [fcName], isMandatory);
                resolve(isMandatory);
            }
            else {
                this.omniPull.getParamValOf(adminParameter).then(res => {
                    let isMandatory = res ? (res[adminParameter] ? 1 : 0) : 0;
                    this.mandatoryFlagValuesDic[adminParameter] = isMandatory;
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].ACTION_TYPE_MANDATORY, [fcName], isMandatory);
                    resolve(isMandatory);
                }).catch(error => resolve(1));
            }
        });
    }
    showFinishOtherStepsFirstWarning() {
        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].presentInfoAlert(this.commonProv.translate('you_must_complete_other_steps_first_key'), {
            title: this.commonProv.translate('warning_key'),
            message: this.commonProv.translate('you_must_complete_other_steps_first_key'),
            autoHide: false,
            displayImageOrIcon: false,
            buttonsArray: [
                {
                    group: null,
                    labelKey: 'ok_key',
                    handler: () => {
                        this.templateStepper.containerStepper.dismissPopover(true);
                        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].dismissAllModals();
                    }
                }
            ]
        });
    }
    handleKYCReportParam(screenVO, target) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        let whiteSpaceValue = null;
        if (target === src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML) {
            whiteSpaceValue = this.whiteSpaceValueForHtml;
        }
        else {
            whiteSpaceValue = this.whiteSpaceValueForPDF;
        }
        let reportParametersList = {};
        reportParametersList = {
            customerName: `${screenVO[this.firstNameOptions.fcName] || whiteSpaceValue} ${screenVO[this.middleNameOptions.fcName] || whiteSpaceValue} ${screenVO[this.lastNameOptions.fcName] || whiteSpaceValue}`,
            gender: ((_a = screenVO[this.genderOptions.fcName]) === null || _a === void 0 ? void 0 : _a.description) || whiteSpaceValue,
            nationality: ((_b = screenVO[this.defaultPersonalDetailsOptions.nationalityOptions.fcName]) === null || _b === void 0 ? void 0 : _b.description) || whiteSpaceValue,
            dateOfbirth: screenVO[this.defaultPersonalDetailsOptions.psDobOptions.fcName] || whiteSpaceValue,
            martialStatus: ((_c = screenVO[this.defaultPersonalDetailsOptions.maritalstatusOptions.fcName]) === null || _c === void 0 ? void 0 : _c.description) || whiteSpaceValue,
            qualification: ((_d = screenVO === null || screenVO === void 0 ? void 0 : screenVO.EducationLevel) === null || _d === void 0 ? void 0 : _d.description) || whiteSpaceValue,
            idType: ((_e = screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.dropdownIdTypesOptions.fcName]) === null || _e === void 0 ? void 0 : _e.description) || whiteSpaceValue,
            idNo: screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.idNumberOptions.fcName] || whiteSpaceValue,
            placeOfIssue: ((_f = screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.countriesOptions.fcName]) === null || _f === void 0 ? void 0 : _f.description) || whiteSpaceValue,
            dataOfIssue: screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.issueDateOptions.fcName] ? moment__WEBPACK_IMPORTED_MODULE_23___default()(screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.issueDateOptions.fcName]).format("DD/MM/YYYY") : whiteSpaceValue,
            expiryDate: screenVO[this.representativeCifIdTypesOptions.complexIdDetailsOptions.dateExpiryOptions.fcName] || whiteSpaceValue,
            country: ((_g = screenVO[this.addressOptions2.countriesOptions.fcName]) === null || _g === void 0 ? void 0 : _g.description) || whiteSpaceValue,
            city: ((_h = screenVO[this.addressOptions2.cityOptions.fcName]) === null || _h === void 0 ? void 0 : _h.description) || whiteSpaceValue,
            street: screenVO[this.addressOptions2.streetOptions.fcName] || whiteSpaceValue,
            remark: screenVO[this.addressOptions2.buildingOptions.fcName] || whiteSpaceValue,
            cellPhone: screenVO[this.phoneNumberOptions.fcName] || whiteSpaceValue,
            email: screenVO[this.emailOptions.fcName] || whiteSpaceValue,
            jobTitle: ((_j = screenVO[this.defaultEmployeeOptions.occupationOptions.fcName]) === null || _j === void 0 ? void 0 : _j.description) || whiteSpaceValue,
            employer: screenVO[this.defaultEmployeeOptions.employerNameOptions.fcName] || whiteSpaceValue,
            workAdress: `${((_k = screenVO[this.defaultEmployeeOptions.addressOptions.countriesOptions.fcName]) === null || _k === void 0 ? void 0 : _k.description) || whiteSpaceValue} ${((_l = screenVO[this.defaultEmployeeOptions.addressOptions.regionOptions.fcName]) === null || _l === void 0 ? void 0 : _l.description) || whiteSpaceValue} ${((_m = screenVO[this.defaultEmployeeOptions.addressOptions.cityOptions.fcName]) === null || _m === void 0 ? void 0 : _m.description) || whiteSpaceValue} ${screenVO[this.defaultEmployeeOptions.addressOptions.streetOptions.fcName] || whiteSpaceValue} ${screenVO[this.defaultEmployeeOptions.addressOptions.buildingOptions.fcName] || whiteSpaceValue} ${((_o = screenVO[this.defaultEmployeeOptions.addressOptions.poBoxInputOptions.fcName]) === null || _o === void 0 ? void 0 : _o.description) || whiteSpaceValue}`,
            workPhone: screenVO[this.defaultEmployeeOptions.officeTelPhoneNumberOptions.fcName] || whiteSpaceValue,
            monthlyIncome: screenVO[this.monthlyInAmountOptions.amountOptions.fcName] ? (screenVO[this.monthlyInAmountOptions.amountOptions.fcName] + ' ' + ((_p = screenVO[this.monthlyInAmountOptions.currenciesOptions.fcName]) === null || _p === void 0 ? void 0 : _p.description)) : whiteSpaceValue,
            TINNo: screenVO[this.tinNumberOptions.fcName] || whiteSpaceValue,
            clientName: `${screenVO[this.firstNameOptions.fcName] || whiteSpaceValue} ${screenVO[this.middleNameOptions.fcName] || whiteSpaceValue} ${screenVO[this.lastNameOptions.fcName] || whiteSpaceValue}`,
            clientSignature: this.extractSignatureDataUri(screenVO, target) || this.emptyImageForPDF,
        };
        for (const [key, value] of Object.entries(screenVO)) {
            if (reportParametersList[key] == undefined) {
                if (typeof value === 'string') {
                    if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].isDate(value)) {
                        reportParametersList[key] = moment__WEBPACK_IMPORTED_MODULE_23___default()(value).format("DD/MM/YYYY");
                    }
                    else {
                        reportParametersList[key] = value;
                    }
                }
                else if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_17__["CommonUtils"].isObject(value) && (value === null || value === void 0 ? void 0 : value['description'])) {
                    reportParametersList[key] = value === null || value === void 0 ? void 0 : value['description'];
                }
            }
        }
        return reportParametersList;
    }
    extractSignatureDataUri(screenVO, target) {
        let signatureObjectKey = null;
        /*
          if (this.stepSpecimenOptions !== undefined && screenVO[this.stepSpecimenOptions.fcName] && screenVO[this.stepSpecimenOptions.fcName].length > 0) {
            signatureObjectKey = this.stepSpecimenOptions.fcName;
          }
          if (this.panelSpecimenOptions !== undefined && screenVO[this.panelSpecimenOptions.fcName] && screenVO[this.panelSpecimenOptions.fcName].length > 0) {
            signatureObjectKey = this.panelSpecimenOptions.fcName;
          }*/
        if (screenVO[this.specimenOptions.fcName] && screenVO[this.specimenOptions.fcName].length > 0) {
            signatureObjectKey = this.specimenOptions.fcName;
        }
        if (signatureObjectKey == null) {
            return null;
        }
        if (target === src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML) {
            return screenVO[signatureObjectKey][0].imageUrl;
        }
        return screenVO[signatureObjectKey][0].imageUrl.replace("data:image/png;base64,", "").trim();
    }
    handleAccountReportParam(screenVO, target) {
        var _a, _b, _c, _d, _e;
        let whiteSpaceValue = null;
        if (target === src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].HTML) {
            whiteSpaceValue = this.whiteSpaceValueForHtml;
        }
        else {
            whiteSpaceValue = this.whiteSpaceValueForPDF;
        }
        const param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].preLoginResponse).parameters;
        let currentDateDefaultFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
        return {
            customerName: `${screenVO[this.firstNameOptions.fcName] || whiteSpaceValue} ${screenVO[this.middleNameOptions.fcName] || whiteSpaceValue} ${screenVO[this.lastNameOptions.fcName] || whiteSpaceValue}`,
            clientSignature: this.extractSignatureDataUri(screenVO, target) || this.emptyImageForPDF,
            banchName: ((_a = screenVO[this.mapAtmBranchesOptions.fcName]) === null || _a === void 0 ? void 0 : _a.briefDesc) || screenVO[this.onbSelectBranchOptions.branchesOptions.fcName + 'DescriptionConcat'] || ((_b = screenVO[this.onbSelectBranchOptions.branchesOptions.fcName]) === null || _b === void 0 ? void 0 : _b.description) || whiteSpaceValue,
            branchName: ((_c = screenVO[this.mapAtmBranchesOptions.fcName]) === null || _c === void 0 ? void 0 : _c.briefDesc) || screenVO[this.onbSelectBranchOptions.branchesOptions.fcName + 'DescriptionConcat'] || ((_d = screenVO[this.onbSelectBranchOptions.branchesOptions.fcName]) === null || _d === void 0 ? void 0 : _d.description) || whiteSpaceValue,
            customerServicesName: whiteSpaceValue,
            customerServicesSignature: whiteSpaceValue,
            branchManagerName: whiteSpaceValue,
            branchManagerSignature: whiteSpaceValue,
            cellPhone: screenVO[this.phoneNumberOptions.fcName] || whiteSpaceValue,
            accountType: ((_e = screenVO[this.accountTypeOptions.fcName]) === null || _e === void 0 ? void 0 : _e.description) || whiteSpaceValue,
            todayDate: new src_app_commonSRC_psPipes_ps_date_format_ps_date_format_pipe__WEBPACK_IMPORTED_MODULE_12__["PsDateFormatPipe"]().transform(new Date(), currentDateDefaultFormat) || whiteSpaceValue,
        };
    }
    saveAsBase64(reportOptions, stepName, fcName) {
        const reportRequest = {
            operId: reportOptions.operId,
            reportFormat: src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF,
            reportType: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_16__["ConstantCommon"].EXPORT_REPORT_TYPE,
            reportParametersList: stepName === "kyc_contract_step" ? this.handleKYCReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF) : this.handleAccountReportParam(this.onBoardingVO, src_app_commonSRC_psServices_models_ps_common_interface__WEBPACK_IMPORTED_MODULE_18__["IFileFormat"].PDF)
        };
        this.commonProv.presentLoading();
        this.commonProv.returnReportDetails(reportRequest).then(result => {
            if (result) {
                let fileObject = {
                    fileExt: result['data']['reportFormat'],
                    fileName: stepName === "kyc_contract_step" ? "Customer_KYC.pdf" : "Account_Contract.pdf",
                    status: "N",
                    isImage: false,
                    file: result['data']['base64Data'],
                    fileSize: result['data']['fileSize'],
                    imageUrl: "data:application/pdf;base64," + result['data']['base64Data']
                };
                this.commonProv.setValInsideNestedObj(fcName, [fileObject], this.onBoardingVO);
                this.commonProv.dismissLoading();
            }
        }).catch((error) => {
            this.commonProv.dismissLoading();
            this.commonProv.logger.log(error);
        });
    }
};
OnBoardingPage.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_20__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_15__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__["EventEmitterService"] },
    { type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_13__["Events"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"] }
];
OnBoardingPage.propDecorators = {
    fileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    cifIdTypesComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cifIdTypesComp',] }],
    templateStepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['templateStepper', { static: false },] }]
};
OnBoardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'on-boarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_20__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_15__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_11__["OmniPullService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        src_app_commonSRC_psServices_event_emitter_event_emitter_service__WEBPACK_IMPORTED_MODULE_14__["EventEmitterService"],
        src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_13__["Events"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_common_service__WEBPACK_IMPORTED_MODULE_10__["OmniCommonService"]])
], OnBoardingPage);



/***/ }),

/***/ "cwH1":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding/onboarding.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper #templateStepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\"\n  (onTemplateStepWidgetOpen)=\"onOpenStepWidget($event)\" (onTemplateStepWidgetInit)=\"onInitStepWidget($event)\">\n  <!-- New T&C Step/Widget to appear first -->\n  <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">    \n    <ps-complex-terms-and-conditions [options]=\"termsAndConditionsOptions\" [id]=\"stepperOptions.namesofSteps[0] + '_pre_terms_and_conditions'\">\n    </ps-complex-terms-and-conditions>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n    <ps-container-panel [options]=\"panelOptions1Step1\" id=\"personal_info_panel\">\n      <ps-keyin-input id=\"first_name\" [options]=\"firstNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"middle_name\" [options]=\"middleNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input id=\"last_name\" [options]=\"lastNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"short_arabic_name\" [options]=\"shortArabicNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"long_arabic_name\" [options]=\"longArabicNameOptions\">\n      </ps-keyin-input>\n      <ps-keyin-input *ngIf=\"!isCorporate\" id=\"nick_name\" [options]=\"nickNameOptions\">\n      </ps-keyin-input>\n      <ps-date-day-month-year-past *ngIf=\"!isPostLogin && !isCorporate\"\n        [options]=\"defaultPersonalDetailsOptions.psDobOptions\" id=\"dateOfBirth\" class=\"ps-date-month-year\">\n      </ps-date-day-month-year-past>\n      <ps-entity-phone-number id=\"phone_number\" [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\n      <ps-input-email id=\"email\" [options]=\"emailOptions\">\n      </ps-input-email>\n      <ng-container *ngIf=\"!isPostLogin && !isCorporate\">\n        <ps-input-free-text id=\"currentEmp\" [options]=\"currentEmpOptions\">\n        </ps-input-free-text>\n        <ps-complex-amount [options]=\"monthlyInAmountOptions\" id=\"monthlyInAmount\">\n        </ps-complex-amount>\n      </ng-container>\n      <ps-select-toggle *ngIf=\"isCorporate\" [options]=\"isOwnerToggleOptions\" (click)=\"onIsOwnerSelect($event)\">\n      </ps-select-toggle>\n      <ps-label *ngIf=\"isCorporate\" class=\"upload-title\" [options]=\"fileUploadLabelDescription\"\n        id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs *ngIf=\"isCorporate\" [options]=\"personalInfoFileUploadOptions\" id=\"ps-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar *ngIf=\"isCorporate\" [options]=\"personalInfoCommentOptions\" id=\"comments\"></ps-input-varchar>\n\n    \n    </ps-container-panel>\n    <ps-container-panel [options]=\"panelIdDetailsOptions\" id=\"main_id_details_panel\">\n      <!-- *ngIf=\"showCifDetails\" -->\n      <ps-complex-cif-id-types [options]=\"representativeCifIdTypesOptions\"\n        (onIdTypesGetLoaded)=\"onIdTypesLoaded($event)\">\n      </ps-complex-cif-id-types>\n      <ps-input-numeric id=\"input_free_text\" [options]=\"tinNumberOptions\">\n      </ps-input-numeric>\n    </ps-container-panel>\n    <ps-container-panel *ngIF=\"!isCorporate\" [options]=\"panelAttachmentOptions\" id=\"attachment_details_panel\">\n      <ps-label class=\"upload-title\" [options]=\"fileUploadLabelDescription\" id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs [options]=\"idDetailsFileUploadOptions\" id=\"ps-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar [options]=\"attachementDetCommentOptions\" id=\"comments\"></ps-input-varchar>\n    </ps-container-panel>\n\n    <!-- \n    <ps-container-panel [options]=\"panelAditionalInformationOptions\" id=\"additional_info_panel\">\n   \n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n\n    </ps-container-panel> -->\n\n  </ps-form-step>\n\n  <!--  company details-->\n  <ps-form-step *psStep=\"'step3'\" step3 [id]=\"stepperOptions.namesofSteps[2]\">\n    <ps-container-panel [options]=\"companyMainDetailsPanelOptions\" id=\"company_details_panel\">\n      <ps-lov-corporate-type  id=\"'corpType' + id\" [options]=\"corpTypeOptions\"\n        (onPsChange)=\"onSelectCprporateType($event)\">\n      </ps-lov-corporate-type>\n      <!-- <ps-lov-entity-type [options]=\"entityTypeLovOptiops\" id=\"corporate_type\"></ps-lov-entity-type> -->\n      <ps-keyin-input [options]=\"legalEntityNameOptions\" id=\"legalEntityName\"></ps-keyin-input>\n      <ps-dropdown-legal-status id=\"'lstatus' + id\" [options]=\"lstatusOptions\"></ps-dropdown-legal-status>\n      <ps-input-numeric id=\"taxNumber\" [options]=\"taxNumberOptions\">\n      </ps-input-numeric>\n      <ps-dropdown-country id=\"estabCountry\" [options]=\"estabCountryOptions\">\n      </ps-dropdown-country>\n      <ps-date-day-month-year-past id=\"estabDate\" [options]=\"estabDateOptions\">\n      </ps-date-day-month-year-past>\n      <ps-complex-cif-id-types #cifIdTypesComp [options]=\"defaultCifIdTypesOptions\"></ps-complex-cif-id-types>\n      <!-- <ps-input-numeric id=\"input_free_text\" [options]=\"tinNumberOptions\">\n      </ps-input-numeric> -->\n      <ps-input-free-text id=\"registNumber\" [options]=\"registNumberOptions\">\n      </ps-input-free-text>\n      <!-- <ps-complex-eco-sector *ngIf=\"!isCorporate\" id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector> -->\n    </ps-container-panel>\n    <ps-container-panel  [options]=\"companyAdditionalDetailsPanelOptions\"\n      id=\"company_additional_details_panel\">\n      <ps-input-email id=\"corpEmail\" [options]=\"corpEmailOptions\">\n      </ps-input-email>\n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n      <ps-dropdown-ranking [options]=\"rankingOptions\"></ps-dropdown-ranking>\n      <ps-label class=\"upload-title\" [options]=\"addFileUploadLabelDescription\" id=\"add_file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs [options]=\"addFileUploadOptions\" id=\"add-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar [options]=\"addCommentOptions\" id=\"comments\"></ps-input-varchar>\n    </ps-container-panel>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step4'\" step4 [id]=\"stepperOptions.namesofSteps[3]\">\n    <ps-container-panel [options]=\"panelUserCredentials\" id=\"user_credentials_panel\">\n\n      <ps-complex-user-credentials [options]=\"userCredentialsOptions\" id=\"user_credential\">\n      </ps-complex-user-credentials>\n\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"isRequireTransactionPassword\" [options]=\"panelPinOptions\" id=\"pin_panel\">\n      <ps-confirm-pin id=\"complex_pin_confirm\" [options]=\"pinConfirmOptions\">\n      </ps-confirm-pin>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"enableSecurityQuestion\" [options]=\"panelSecurityQuestion\" id=\"security_question_panel\">\n      <ps-complex-security-questions id=\"complex_security_question\" [options]=\"securityQuestionOptions\">\n      </ps-complex-security-questions>\n    </ps-container-panel>\n\n  </ps-form-step>\n\n  <!-- Identity verification -->\n  <ps-form-step *psStep=\"'step5'\" step5 [id]=\"stepperOptions.namesofSteps[4]\">\n    <!-- <ps-container-panel [options]=\"panelIdDetailsOptions\" id=\"id_details_panel\">\n      <ps-complex-cif-id-types *ngIf=\"showCifDetails\" [options]=\"defaultCifIdTypesOptions\"></ps-complex-cif-id-types>\n    </ps-container-panel> -->\n\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step6'\" step6 [id]=\"stepperOptions.namesofSteps[5]\">\n    <ps-container-panel [options]=\"panelAdditionalDetailsOptions\" id=\"additional_info_panel\">\n      <ps-complex-personal-details [options]=\"defaultPersonalDetailsOptions\"></ps-complex-personal-details>\n      <ps-lov-gender [options]=\"genderOptions\" id=\"gender\"></ps-lov-gender>\n      <ps-dropdown-legal-status id=\"'lstatus' + id\" [options]=\"lstatusOptions\"></ps-dropdown-legal-status>\n    </ps-container-panel>\n\n    <ps-container-panel *ngIf=\"!isCorporate\" [options]=\"panelAddressDetailsOptions\" id=\"address_details_panel\">\n      <ps-complex-address [options]=\"addressOptions2\"></ps-complex-address>\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"panelEmploymentDetailsOptions\" id=\"employment_details_panel\">\n      <ps-complex-employment-details [options]=\"defaultEmployeeOptions\" id=\"employment_details_panel\">\n      </ps-complex-employment-details>\n      <ps-input-free-text id=\"currentEmp\" [options]=\"currentEmpOptions\">\n      </ps-input-free-text>\n\n      <ps-complex-amount [options]=\"monthlyInAmountOptions\" id=\"monthlyInAmount\">\n      </ps-complex-amount>\n      <ps-complex-eco-sector id=\"ps-complex-eco-sector-id\" [options]=\"complexEcoSectorOptions\">\n      </ps-complex-eco-sector>\n    </ps-container-panel>\n    <!-- <div *ngIf=\"isCorporate\" class=\"owners\">\n      <ps-select-checkbox class=\"owner\" *ngFor=\"let owner of ownerCheckboxOptions; let idx=\n    index\" [id]=\"owner.fcName\" [options]=\"owner\" (onPsChange)=\"onOwnerChanged($event,owner)\">\n      </ps-select-checkbox>\n    </div> -->\n  </ps-form-step>\n\n  <!-- Ownership Details (panel 2 in widget 1)\n  <ps-form-step *psStep=\"'step6'\" step6 [id]=\"stepperOptions.namesofSteps[5]\">\n\n    <ps-container-panel [options]=\"ownershipDetailsPanelOptions\" id=\"ownership_details_panel\">\n      <ps-lov-entity-type [options]=\"entityTypeLovOptiops\" id=\"entity_type\"></ps-lov-entity-type>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'existingCustomer'\" [options]=\"existingCustomerOptions\"\n        (onPsChange)=\"onExistingCustomerToggleChange($event)\">\n      </ps-select-toggle>\n      <ps-input-numeric [options]=\"cifNumberOptions\" id=\"cifNumber\"></ps-input-numeric>\n      <ps-keyin-input id=\"full_name\" [options]=\"firstNameOptions\"></ps-keyin-input>\n      <ps-entity-phone-number id=\"phone_number\" [options]=\"phoneNumberOptions\"></ps-entity-phone-number>\n\n      <ps-input-email id=\"email\" [options]=\"emailOptions\"> </ps-input-email>\n\n\n\n      <ps-lov-designation [options]=\"designationeLovOptiops\" id=\"designation\" (onPsChange)=\"designationChanged($event)\">\n      </ps-lov-designation>\n\n      <ps-input-numeric id=\"ownershipPercentage\" [options]=\"ownershipPercentageOptions\">\n      </ps-input-numeric>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'AuthSigner'\" [options]=\"AuthSignerOptions\">\n      </ps-select-toggle>\n      <ps-select-toggle class=\"onboarding_toggles\" [id]=\"'authPowerofAttorney'\" [options]=\"authPowerofAttorneyOptions\">\n      </ps-select-toggle>\n    </ps-container-panel>\n  </ps-form-step> -->\n\n  <!--  selfie Picture-->\n  <ps-form-step *psStep=\"'step7'\" step7 [id]=\"stepperOptions.namesofSteps[6]\">\n    <ps-complex-media-capture [options]=\"selfieOptions\"></ps-complex-media-capture>\n\n  </ps-form-step>\n\n  <!-- video selfie -->\n  <ps-form-step *psStep=\"'step8'\" step8 [id]=\"stepperOptions.namesofSteps[7]\">\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step9'\" step9 [id]=\"stepperOptions.namesofSteps[8]\">\n\n    <ps-complex-specimen [options]=\"specimenOptions\">\n\n    </ps-complex-specimen>\n  </ps-form-step>\n\n  <ps-form-step *psStep=\"'step10'\" step10 [id]=\"stepperOptions.namesofSteps[9]\">\n    <ps-container-panel [options]=\"selectBranchPanelOptions\" id=\"onb_branch_panel\">\n      <ps-complex-select-branch [options]=\"onbSelectBranchOptions\"\n        (onPsChange)=\"onSelectFinancingBranch($event)\">\n      </ps-complex-select-branch>\n      <!-- <ps-input-display-only [options]=\"onbCifBranchOptions\" *ngIf=\"enableCifBranch\">\n      </ps-input-display-only> -->\n    </ps-container-panel>\n\n    <ps-container-panel [options]=\"selectBranchLocPanelOptions\" id=\"onb_map_panel\">\n      <ps-map-atm-branches class=\"component-map-container\" [options]=\"mapAtmBranchesOptions\" id=\"map_atm_branches\"\n        (onPsChange)=\"mapValueChanged($event)\">\n      </ps-map-atm-branches>\n    </ps-container-panel>\n  </ps-form-step>\n\n  <!-- Product details -->\n  <ps-form-step *psStep=\"'step11'\" step11 [id]=\"stepperOptions.namesofSteps[10]\">\n    <ps-container-panel [options]=\"panelProductsOptions\" id=\"product_details_panel\">\n\n      <ps-dropdown-account-types id='accountType' [options]=\"accountTypeOptions\"\n        (onPsChange)=\"accountTypeChecking($event)\"></ps-dropdown-account-types>\n\n      <ps-dropdown-currencies id='currency' [options]=\"currencyOptions\"></ps-dropdown-currencies>\n\n      <ps-select-toggle *ngIf=\"showCardToggle\" class=\"onboarding_toggles\" id='card_flag' [options]=\"cardcheckboxOptions\"\n        (onPsChange)=\"cardChecking($event)\">\n      </ps-select-toggle>\n\n      <ps-lov-card-types *ngIf=\"showCardTypelookup\" [options]=\"cardsLookupOptiops\" id=\"card_type\"\n        (onPsChange)=\"cardTypeChecking($event)\">\n      </ps-lov-card-types>\n\n      <ps-dropdown-card-types *ngIf=\"showDebitCardTypes\" id=\"debitCardType\" [options]=\"debitCardTypeOptions\">\n      </ps-dropdown-card-types>\n\n      <ps-dropdown-card-types *ngIf=\"showCreditCardTypes\" id=\"creditCardType\" [options]=\"creditCardTypeOptions\">\n      </ps-dropdown-card-types>\n\n      <ps-select-toggle class=\"onboarding_toggles\" *ngIf=\"showChequeBookToggle\" id='chequebook_flag'\n        [options]=\"chequeBookcheckboxOptions\" (onPsChange)=\"chequeBookChecking($event)\"></ps-select-toggle>\n\n      <ps-dropdown-chequebook-types *ngIf=\"showChequebooklookup\" id=\"'cheq_req_transfer_to\"\n        [options]=\"chequebookTypeOptions\">\n      </ps-dropdown-chequebook-types>\n      <ps-select-toggle class=\"onboarding_toggles\" [options]=\"financingToggleOptions\" id=\"financing_toggle\"\n        (onPsChange)=\"financingToggleChecking($event)\">\n      </ps-select-toggle>\n      <ng-container *ngIf=\"showFinancingSection\">\n\n        <ps-dropdown-facility-types [options]=\"facilityTypeOptions\">\n        </ps-dropdown-facility-types>\n\n        <ps-dropdown-product-types id=\"productClass\" [options]=\"productClassOptions\"\n          (onPsChange)=\"onProductClassChange($event)\">\n        </ps-dropdown-product-types>\n\n        <ps-dropdown-product-category [options]=\"productCategoryOptions\"></ps-dropdown-product-category>\n\n        <ps-dropdown-assets-description id=\"assetDescription\" [options]=\"assetDescriptionOptions\">\n        </ps-dropdown-assets-description>\n\n\n        <ps-complex-amount [options]=\"complexAmountOptions\" id=\"financingComplexAmount\"\n          (onCurrencyChange)=\"changeDownPaymentDecimalPoints($event)\" (onAmountChanged)=\"onAmountChanged($event)\">\n        </ps-complex-amount>\n\n        <ps-keyin-input [options]=\"tenorFinancingOptions\">\n\n        </ps-keyin-input>\n\n        <ps-input-amount id=\"down_payment\" [options]=\"downPaymentOptions\" (onPsChange)='onDownPaymentChange($event)'>\n        </ps-input-amount>\n\n        <ps-keyin-input [options]=\"profitRateOptions\">\n        </ps-keyin-input>\n\n        <ps-input-amount id=\"initial_amount\" [options]=\"initialAmountOptions\">\n        </ps-input-amount>\n\n        <ps-input-numeric id=\"noOfPayments\" [options]=\"noOfPaymentsOptions\">\n        </ps-input-numeric>\n\n        <ps-lov-periodicity id=\"payEvery\" [options]=\"payEveryOptions\">\n        </ps-lov-periodicity>\n\n        <ps-label class=\"upload-title\" [options]=\"financingFileUploadLabelDescription\" id=\"file_upload_label_desc\">\n        </ps-label>\n        <ps-file-upload-bs [options]=\"finanacingFileUploadOptions\" id=\"ps-file-upload\"></ps-file-upload-bs>\n      </ng-container>\n    </ps-container-panel>\n    <!-- <ps-container-panel [options]=\"selectBranchPanelOptions\" id=\"financing_branch_panel\">\n      <ps-complex-select-branch [options]=\"financingSelectBranchOptions\" (onPsChange)=\"onSelectFinancingBranch($event)\">\n      </ps-complex-select-branch>\n    </ps-container-panel> -->\n    <!-- <ps-container-panel [options]=\"selectFinBranchLocPanelOptions\" id=\"financing_map_panel\">\n      <ps-map-atm-branches class=\"component-map-container\" [options]=\"financingMapAtmBranchesOptions\"\n        id=\"financing_map_atm_branches\">\n      </ps-map-atm-branches>\n    </ps-container-panel> -->\n  </ps-form-step>\n\n  <!--    Video Call Scheduling -->\n  <ps-form-step *psStep=\"'step12'\" step12 [id]=\"stepperOptions.namesofSteps[11]\">\n    <!-- <ps-complex-call-slot [options]=\"callSlotOptions\"></ps-complex-call-slot> -->\n  </ps-form-step>\n\n  <!-- Contract Signing -->\n  <ps-form-step *psStep=\"'step13'\" step13 [id]=\"stepperOptions.namesofSteps[12]\">\n\n  </ps-form-step>\n\n  <!-- attachment details -->\n  <ps-form-step *psStep=\"'step14'\" step14 [id]=\"stepperOptions.namesofSteps[13]\">\n\n    <ps-container-panel [options]=\"panelAttachmentOptions\" id=\"corp_attachment_details_panel\">\n      <ps-label class=\"upload-title\" [options]=\"fileUploadLabelDescription\" id=\"file_upload_label_desc\">\n      </ps-label>\n      <ps-file-upload-bs [options]=\"corpFileUploadOptions\" id=\"ps-corp-file-upload\"></ps-file-upload-bs>\n      <ps-input-varchar [options]=\"corpAttachementDetCommentOptions\" id=\"comments\"></ps-input-varchar>\n    </ps-container-panel>\n  </ps-form-step>\n  <!-- ownerKYC -->\n  <ps-form-step *psStep=\"'step15'\" step15 [id]=\"stepperOptions.namesofSteps[14]\">\n  </ps-form-step>\n  <!-- live ness detection -->\n  <ps-form-step *psStep=\"'step16'\" step16 [id]=\"stepperOptions.namesofSteps[15]\"></ps-form-step>\n  <ps-form-step *psStep=\"'step17'\" step17 [id]=\"stepperOptions.namesofSteps[16]\">\n    <ps-container-panel [options]=\"panelAddressDetailsOptions\" id=\"corp_address_details_panel\">\n      <ps-complex-address [options]=\"addressOptions2\"></ps-complex-address>\n    </ps-container-panel>\n  </ps-form-step>\n  <!--company eKYC -->\n  <ps-form-step *psStep=\"'step18'\" step18 [id]=\"stepperOptions.namesofSteps[17]\">\n  </ps-form-step>\n\n\n  <ps-form-step *psStep=\"'step19'\" step19 [id]=\"stepperOptions.namesofSteps[18]\">\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step20'\" step20 [id]=\"stepperOptions.namesofSteps[19]\">\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step21'\" step21 [id]=\"stepperOptions.namesofSteps[20]\">\n    <ps-container-panel [options]=\"kycReportPanelOptions\" id=\"kyc_report_panel\">\n      <div class=\"ps-template-report-viewer\">\n        <ps-container-report-viewer *ngIf=\"reportKYCShow\" [options]=\"reportKYCTemplateOptions\"\n          id=\"report_page\"></ps-container-report-viewer>\n        <ps-select-checkbox [id]=\"'kyc_report_checkbox'\" [options]=\"kycReportCheckBoxOptions\"\n          (onPsChange)=\"onChangeCheckboxKyc($event)\">\n        </ps-select-checkbox>\n        <ps-action-button [options]=\"exportButtonOptions\" (onClick)=\"onKYCButtonClicked($event)\"></ps-action-button>\n      </div>\n    </ps-container-panel>\n  </ps-form-step>\n  <ps-form-step *psStep=\"'step22'\" step22 [id]=\"stepperOptions.namesofSteps[21]\">\n    <ps-container-panel [options]=\"accountReportPanelOptions\" id=\"account_report_panel\">\n      <div class=\"ps-template-report-viewer\">\n        <ps-container-report-viewer *ngIf=\"reportAccountShow\" [options]=\"reportAccountTemplateOptions\"\n          id=\"report_page\"></ps-container-report-viewer>\n        <ps-select-checkbox [id]=\"'account_report_checkbox'\" [options]=\"accountReportCheckBoxOptions\"\n          (onPsChange)=\"onChangeCheckboxAccount($event)\">\n        </ps-select-checkbox>\n        <ps-action-button [options]=\"exportButtonOptions\" (onClick)=\"onAccountButtonClicked($event)\"></ps-action-button>\n\n      </div>\n    </ps-container-panel>\n  </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=91-es2015.js.map