(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "/Acp":
/*!***********************************************************!*\
  !*** ./src/app/pages/outward-bills/outward-bills.page.ts ***!
  \***********************************************************/
/*! exports provided: OutwardBillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutwardBillsPage", function() { return OutwardBillsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_outward_bills_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./outward-bills.page.html */ "ONR8");
/* harmony import */ var _outward_bills_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outward-bills.page.scss */ "5LPU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");












/** @name outward-bills
 *  @author Ahmed.Ragab
 *  @description Display the outward-bills
 */
let OutwardBillsPage = class OutwardBillsPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_11__["OmniBasePage"] {
    constructor(datepipe, common, omniPull, logger) {
        super();
        this.datepipe = datepipe;
        this.common = common;
        this.omniPull = omniPull;
        this.logger = logger;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.requiredDocumentOptions = {
            labelKey: 'required_documents_key'
        };
        //settlMethodDetails
        this.settlementMethodOptions = {
            group: this.formGroup,
            fcName: 'settlementMethod',
        };
        this.paymentsDetailOptions = {
            labelKey: 'payments_details_key',
            fcName: 'paymentsDetail',
            placeHolder: 'payments_details_key',
            group: this.formGroup
        };
        this.draweeNameOptions = {
            labelKey: 'drawee_name_key',
            fcName: 'draweeName',
            placeHolder: 'enter_drawee_name_key',
            group: this.formGroup
        };
        this.sameBankToggleOptions = {
            labelKey: 'same_bank_drawee_key',
            group: this.formGroup,
            fcName: 'sameBankDrawee',
            psClass: 'toggleColor'
        };
        this.defaultVO = {};
        this.billReferenceOptions = {
            fcName: 'billReference',
            placeHolder: 'enter_bill_reference_key',
            group: this.formGroup,
            labelKey: 'bill_reference_key'
        };
        this.draweesAccountOptions = {
            fcName: 'draweesaccount',
            placeHolder: 'enter_drawees_account_key',
            group: this.formGroup,
            labelKey: 'drawees_account_key'
        };
        this.portOdLoadingOptions = {
            fcName: 'portOfLoading',
            placeHolder: 'enter_port_of_loading_key',
            group: this.formGroup,
            labelKey: 'port_of_loading_key'
        };
        this.portOfArrivalOptions = {
            fcName: 'portOfarrival',
            placeHolder: 'enter_port_of_arrival_key',
            group: this.formGroup,
            labelKey: 'port_of_arrival_key'
        };
    }
    ngOnInit() {
        super.init();
        this.baseFormGroup = this.formGroup;
        this.loadOptions();
    }
    ionViewDidEnter() {
        super.ionViewDidEnter();
        // always non-mandatory
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.draweeBankOptions.subCategoryFcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeBranchOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.countriesOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.cityOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.regionOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.streetOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.buildingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.areaOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.wayOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweeAddressOptions.poBoxInputOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.goodsOptions.goodCategoriesOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.goodsOptions.goodOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.goodsOptions.countryGoodsOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.paymentsDetailOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.settlementTypesOptions.settlementTypesOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [this.settlementTypesOptions.settlementTypesOptions.fcName], 1);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.fileUploadOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.fileDetailInputOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.fileDetailInputOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.sameBankToggleOptions.fcName], 0);
        this.billTypesArray.forEach(x => {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [x.checkBoxOptions.fcName, x.copyInputOptions.fcName, x.originalInputOptions.fcName], 0);
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_READONLY, [x.copyInputOptions.fcName, x.originalInputOptions.fcName], 1);
            if (x.otherInputOptions) {
                this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [x.otherInputOptions.fcName], 0);
            }
        });
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.billReferenceOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.draweesAccountOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.portOdLoadingOptions.fcName], 0);
        this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_MANDATORY, [this.portOfArrivalOptions.fcName], 0);
    }
    loadOptions() {
        this.panelOptionsStep1 = {
            isExpandable: true,
            labelKey: 'outward_bills_request_key',
            iconName: 'create',
            expanded: true
        };
        this.banksDetailPanelOptions = {
            isExpandable: true,
            labelKey: 'banks_detail_key',
            iconName: 'calculator',
        };
        this.billDetailPanelOptions = {
            isExpandable: true,
            labelKey: 'bill_detail_key',
            iconName: 'document',
            expanded: true,
        };
        this.settlementsDetailPanelOptions = {
            isExpandable: true,
            labelKey: 'settlements_detail_key',
            iconName: 'clipboard',
        };
        this.panelOptions1Step2 = {
            isExpandable: true,
            labelKey: 'bill_type_key',
            iconName: 'clipboard',
            expanded: true
        };
        this.panelOptions2Step2 = {
            isExpandable: true,
            labelKey: 'goods_details_key',
            iconName: 'clipboard',
            expanded: false
        };
        this.panelOptions3Step2 = {
            isExpandable: true,
            labelKey: 'attachment_key',
            iconName: 'document',
            expanded: false
        };
        this.billtypesDropdownOptions = {
            group: this.formGroup,
            labelKey: 'bill_type_key',
            placeHolder: 'select_bill_type_key',
            fcName: 'docType',
            docType: "U"
        };
        this.billTypesArray = [
            {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'billOfLanding',
                    labelKey: 'bill_of_lading_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'billOfLandingCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'billOfLandingOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'truckCompany',
                    labelKey: 'truck_consignment_note_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'truckCompanyCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'truckCompanyOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'airBill',
                    labelKey: 'airway_bill_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'airBillCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'airBillOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'deliveryOrder',
                    labelKey: 'delivery_order_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'deliveryOrderCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'deliveryOrderOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'draft',
                    labelKey: 'drafts_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'draftCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'draftOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'commercialInvoice',
                    labelKey: 'commercial_invoice_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'commercialInvoiceCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'commercialInvoiceOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'certificateOfOrigin',
                    labelKey: 'certificate_of_origin_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'certificateOfOriginCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'certificateOfOriginOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'packingList',
                    labelKey: 'packing_list_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'packingListCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'packingListOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'weightList',
                    labelKey: 'weight_list_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'weightListCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'weightListOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'certificateOfAnalysis',
                    labelKey: 'certificate_of_analysis_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'certificateOfAnalysisCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'certificateOfAnalysisOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                otherInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'otherName',
                    labelKey: 'other_key',
                    placeHolder: 'other_key'
                },
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'otherChecked',
                    labelKey: 'other_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'otherCopy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'otherOriginal',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                otherInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other2Name',
                    labelKey: 'other_key',
                    placeHolder: 'other_key'
                },
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other2Checked',
                    labelKey: 'other_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other2Copy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other2Original',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }, {
                otherInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other3Name',
                    labelKey: 'other_key',
                    placeHolder: 'other_key'
                },
                checkBoxOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other3Checked',
                    labelKey: 'other_key'
                },
                copyInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other3Copy',
                    labelKey: 'copy_key',
                    placeHolder: '0'
                },
                originalInputOptions: {
                    group: this.formGroup,
                    fcName: 'billTypes' + 'other3Original',
                    labelKey: 'original_key',
                    placeHolder: '0'
                },
                BillTypeArray: [],
                group: this.formGroup
            }
        ];
        this.draweeBankOptions = {
            categoryLabelKey: 'drawee_bank_cif_key',
            categoryPlaceholderKey: 'select_drawee_bank_key',
            categoryFcName: 'draweeBankCif',
            subCategoryLabelKey: 'bank_branch_key',
            subCategoryPlaceholderKey: 'select_branch_key',
            subCategoryFcName: 'branch',
            group: this.formGroup,
        };
        this.draweeBranchOptions = {
            fcName: 'draweeBranch',
            placeHolder: 'enter_drawee_branch_key',
            group: this.formGroup,
            labelKey: 'drawee_branch_key'
        };
        this.draweeAddressOptions = {
            areaOptions: {
                labelKey: 'drawee_area_key',
                placeHolder: 'enter_drawee_area_key',
                fcName: 'draweearea',
                group: this.formGroup
            },
            wayOptions: {
                labelKey: 'drawee_way_key',
                placeHolder: 'enter_drawee_way_key',
                fcName: 'draweeway',
                group: this.formGroup
            },
            buildingOptions: {
                labelKey: 'drawee_building_no_key',
                placeHolder: 'enter_drawee_building_no_key',
                fcName: 'draweeOccupationBuilding',
                group: this.formGroup
            },
            streetOptions: {
                labelKey: 'drawee_street_key',
                placeHolder: 'enter_drawee_street_key',
                fcName: 'draweeStreet',
                group: this.formGroup
            },
            countriesOptions: {
                labelKey: 'drawee_country_key',
                placeHolder: 'select_drawee_country_key',
                fcName: 'draweeCountryCode',
                group: this.formGroup
            },
            regionOptions: {
                labelKey: 'drawee_region_key',
                placeHolder: 'select_drawee_region_key',
                fcName: 'draweeRegionCode',
                group: this.formGroup
            },
            cityOptions: {
                labelKey: 'drawee_city_key',
                placeHolder: 'select_drawee_city_key',
                fcName: 'draweeCityCode',
                group: this.formGroup
            },
            poBoxInputOptions: {
                group: this.formGroup,
                fcName: 'draweepoBox',
                labelKey: 'drawee_pobox_key',
                placeHolder: 'enter_drawee_pobox_key',
                iconOptions: {
                    iconName: 'clipboard'
                }
            }
        };
        this.settlementTypesOptions = {
            group: this.formGroup,
            settlementTypesOptions: {
                group: this.formGroup,
                fcName: 'settlementType',
            },
            payableInput: {
                group: this.formGroup,
                labelKey: 'payable_at_key',
                placeHolder: 'payable_at_key',
                fcName: 'settlementPayable',
                mask: {
                    regex: '[a-zA-Z0-9]*'
                }
            }, daysInput: {
                group: this.formGroup,
                placeHolder: 'enter_days_from_key',
                labelKey: 'days_from_key',
                fcName: 'settlementDays',
                mask: {
                    regex: '[a-zA-Z0-9]*'
                }
            }
        };
        this.goodsOptions = {
            group: this.formGroup,
            goodOptions: {
                group: this.formGroup,
                labelKey: 'goods_key',
                fcName: 'goods',
                placeHolder: 'select_goods_key'
            },
            goodCategoriesOptions: {
                group: this.formGroup,
                labelKey: 'good_categories_key',
                fcName: 'goodCategories',
                placeHolder: 'select_good_category_key'
            },
            countryGoodsOptions: {
                group: this.formGroup,
                labelKey: 'country_goods_key',
                fcName: 'countryGoods',
                placeHolder: 'select_country_goods_key'
            },
        };
        this.fileUploadOptions = {
            group: this.formGroup,
            multiple: true,
            fcName: 'selectedFileData',
        };
        this.fileDetailInputOptions = {
            labelKey: 'file_comment_key',
            fcName: 'fileDetailInput',
            group: this.formGroup,
            placeHolder: 'enter_file_comment_key'
        };
        this.complexAmountOptions = {
            currency: '',
            currenciesOptions: {
                labelKey: 'currency_key',
                placeHolder: 'select_currency_key',
                fcName: 'currency',
                group: this.formGroup
            },
            amountOptions: {
                labelKey: 'amount_key',
                placeHolder: 'enter_amount_key',
                fcName: 'transactionAmount',
                type: 'amount',
                group: this.formGroup
            }
        };
        this.stepperOptions = {
            stepperName: 'out_bills_stepper',
            isHorizontalStepper: true,
            numberOfSteps: 2,
            namesofSteps: ['outward_bills_request_key', 'bill_types_key', 'goods_key'],
            group: this.formGroup,
            requestObject: this.defaultVO,
            submitOptions: {
                group: this.formGroup,
                submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonBusinessSettings"].serviceUrl.FacilityRequest,
                postCallFunction: {
                    func() {
                        return new Promise((resolve, reject) => {
                            resolve(this.executionClass.redirectToSchedule());
                        });
                    },
                    executionClass: this,
                    params: [this]
                }
            },
        };
    }
    onBillTypeChange(event) {
        if (event != null && event !== undefined && event.selectedObj) {
            // set value of settlement type
            if (event.selectedObj.sightTime !== undefined) {
                this.formGroup.controls[this.settlementTypesOptions.settlementTypesOptions.fcName].setValue(event.selectedObj.sightTime);
            }
        }
    }
    onSameBankToggleChange(event) {
        if (event.newValue === true) {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.draweeBankOptions.categoryFcName], 0);
        }
        else {
            this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_9__["ConstantCommon"].ACTION_TYPE_VISIBLE, [this.draweeBankOptions.categoryFcName], 1);
        }
    }
};
OutwardBillsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"] }
];
OutwardBillsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-outward-bills',
        template: _raw_loader_outward_bills_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outward_bills_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_10__["PsCommonService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_7__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]])
], OutwardBillsPage);



/***/ }),

/***/ "5LPU":
/*!*************************************************************!*\
  !*** ./src/app/pages/outward-bills/outward-bills.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL291dHdhcmQtYmlsbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6Im91dHdhcmQtYmlsbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "ONR8":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outward-bills/outward-bills.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [options]=\"stepperOptions\" [id]=\"stepperOptions.stepperName\">\n    <ps-form-step *psStep=\"'step1'\" step1 [id]=\"stepperOptions.namesofSteps[0]\">\n        <ps-container-panel [options]=\"billDetailPanelOptions\" id=\"outward_bills_panel1\">\n            <ps-dropdown-tfs-document-type [options]=\"billtypesDropdownOptions\" (onPsChange)=\"onBillTypeChange($event)\">\n            </ps-dropdown-tfs-document-type>\n            <ps-complex-amount [options]=\"complexAmountOptions\">\n            </ps-complex-amount>\n            <ps-input-varchar id=\"bill_reference\" [options]=\"billReferenceOptions\"></ps-input-varchar>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"banksDetailPanelOptions\" id=\"outward_bills_panel2\">\n\n            <ps-select-toggle id=\"sameBankBenef\" [options]=\"sameBankToggleOptions\"\n                (onPsChange)=\"onSameBankToggleChange($event)\">\n            </ps-select-toggle>\n\n            <ps-banks [options]=\"draweeBankOptions\"></ps-banks>\n\n            <ps-input-varchar id=\"branch\" [options]=\"draweeBranchOptions\"></ps-input-varchar>\n\n            <ps-input-free-text id=\"draweeName_textarea\" [options]=\"draweeNameOptions\">\n            </ps-input-free-text>\n\n            <ps-complex-address [options]=\"draweeAddressOptions\"></ps-complex-address>\n            <ps-input-varchar id=\"drawees_Account\" [options]=\"draweesAccountOptions\"></ps-input-varchar>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"settlementsDetailPanelOptions\" id=\"outward_bills_panel3\">\n            <ps-complex-settlement [options]=\"settlementTypesOptions\"></ps-complex-settlement>\n            <ps-input-free-text id=\"payments_details_textarea\" [options]=\"paymentsDetailOptions\">\n            </ps-input-free-text>\n        </ps-container-panel>\n    </ps-form-step>\n    <ps-form-step *psStep=\"'step2'\" step2 [id]=\"stepperOptions.namesofSteps[1]\">\n        <ps-container-panel [options]=\"panelOptions1Step2\" id=\"outward_bills_step2_panel1\">\n            <ps-label [options]=\"requiredDocumentOptions\"></ps-label>\n            <div *ngFor=\"let att of billTypesArray; let idx = index\">\n                <ps-complex-bill-item [options]=\"att\"></ps-complex-bill-item>\n            </div>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions2Step2\" id=\"outward_bills_step2_panel2\">\n            <ps-complex-goods [options]=\"goodsOptions\"></ps-complex-goods>\n            <ps-input-varchar id=\"port_of_loading\" [options]=\"portOdLoadingOptions\"></ps-input-varchar>\n            <ps-input-varchar id=\"port_of_arrival\" [options]=\"portOfArrivalOptions\"></ps-input-varchar>\n        </ps-container-panel>\n        <ps-container-panel [options]=\"panelOptions3Step2\" id=\"outward_bills_step2_panel3\">\n            <ps-file-upload-bs [options]=\"fileUploadOptions\"></ps-file-upload-bs>\n            <ps-input-free-text id=\"file_comment_textarea\" [options]=\"fileDetailInputOptions\">\n            </ps-input-free-text>\n        </ps-container-panel>\n\n\n    </ps-form-step>\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=94-es2015.js.map