(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-add-owner-add-owner-module~pages-dynamic-component-page-loader-dynamic-component-page-~5fe6615e"],{

/***/ "89p+":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-specimen/ps-complex-specimen.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PsComplexSpecimenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSpecimenComponent", function() { return PsComplexSpecimenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_specimen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-specimen.component.html */ "nMK/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_entity_ps_field_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-entity/ps-field-entity.component */ "k3/b");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_file_upload_ps_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-file-upload/ps-file-upload.component */ "UWqY");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
var PsComplexSpecimenComponent_1;









/* Islam 21012020 */
let PsComplexSpecimenComponent = PsComplexSpecimenComponent_1 = class PsComplexSpecimenComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_entity_ps_field_entity_component__WEBPACK_IMPORTED_MODULE_4__["PsFieldEntityComponent"] {
    constructor(commonProv, omniPull, logger) {
        super(commonProv, logger);
        this.commonProv = commonProv;
        this.omniPull = omniPull;
        this.logger = logger;
        // scanUploadButton: IOptionsPsActionButton = {
        //   labelKey: 'browse_scan_signature_key',
        //   type: 'button',
        //   group: this.formGroup
        // };
        this.backButton = {
            labelKey: 'choose_another_option_key',
            type: 'button',
            group: null
        };
        this.defaultPadSignatureOptions = {};
        this.handWriting = 0;
        this.itemOptions = {
            psClass: 'complex-specimen',
            iconOptions: {
                iconName: 'complex-specimen-icon'
            },
            hideImageAndIconIfNotPresent: true
        };
    }
    get previewValOptions() {
        return {
            labelKey: this.fcValue,
            psClass: 'ps-value-preview',
            previewMode: true
        };
    }
    showPadSignature(value) {
        this.handWriting = value;
    }
    cancelClicked() {
        this.handWriting = 0;
        // this.defaultCaptureImageButtonOptions.imageBase64Url = null;
        // this.defaultCaptureImageButtonOptions.labelKey = 'browse_scan_signature_key';
        const padSigName = this.defaultPadSignatureOptions.fcName;
        const specUploadName = this.specimenScanUploadOptions.fcName;
        if (this.defaultPadSignatureOptions.group.controls[padSigName]) {
            this.setFromSavedData(this.defaultPadSignatureOptions, (this.savedData[this.options.fcName] && (this.savedData[this.options.fcName].length !== 0 && !this.savedData[this.options.fcName][0]['fileSize'])) ? true : false);
        }
        if (this.specimenScanUploadOptions.group.controls[specUploadName]) {
            if (this.fileRef) {
                this.fileRef.dataFiles = [];
                this.fileRef.uploadedFiles = [];
            }
            this.setFromSavedData(this.specimenScanUploadOptions, (this.savedData[this.options.fcName] && (this.savedData[this.options.fcName].length !== 0 && this.savedData[this.options.fcName][0]['fileSize'])) ? true : false);
        }
    }
    ngOnInit() {
        this.options.childComponent = PsComplexSpecimenComponent_1;
        this.options.fcName = this.options.fcName + '_' + src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].DEFAULT_FILE_UPLOAD_CNAME;
        this.defaultPadSignatureOptions = {
            group: this.entityFormGroup,
            fcName: 'onb_signature' + '_' + src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].DEFAULT_FILE_UPLOAD_CNAME,
            labelKey: 'pad_signature'
        };
        this.padSignatureButton = {
            labelKey: 'write_signature_key',
            type: 'button',
            group: this.entityFormGroup
        };
        this.specimenScanUploadOptions = {
            multiple: false,
            fcName: 'uploadedFiles',
            group: this.entityFormGroup,
            labelKey: 'browse_scan_signature_key',
            allowedFilesTypeName: src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].DEFAULT_ALLOWED_IMAGE_TYPE
        };
        this.setEntityFormGroup();
        this.previewLblOptions = {
            labelKey: this.options.labelKey,
            psClass: 'ps-lbl-preview',
            previewMode: true
        };
        this.initializeFromSavedData();
    }
    setEntityFormGroup() {
        this.commonProv.setFormData(this.entityFormGroup, this.entityVO);
    }
    signaturePageChanged(data) {
        if (data.newValue) {
            this.setEntityValue(data.newValue);
        }
        else {
            this.setEntityValue(data);
        }
    }
    uploadScanChanged(data) {
        if (Array.isArray(data.newValue) && data.newValue.length !== 0) {
            this.setEntityValue(data.newValue);
            this.setControlValue(this.specimenScanUploadOptions.fcName, data.newValue, this.entityVO);
        }
    }
    /*
    * on clicking cancel this function will set values of specimen file and pad Signature from saved Data sent to observable
    * otherwise it will empty them
    * based on setVal flag we either set or don't set the control (true if there exist a saved value for the control, false otherwise)
    */
    setFromSavedData(controlOptions, setVal) {
        if (this.savedData[this.options.fcName] && setVal) {
            controlOptions.group.controls[controlOptions.fcName].setValue(this.savedData[this.options.fcName]);
            this.commonProv.setValInsideNestedObj(controlOptions.fcName, this.savedData[this.options.fcName], this.entityVO);
        }
        else {
            controlOptions.group.controls[controlOptions.fcName].setValue([]);
            this.commonProv.setValInsideNestedObj(controlOptions.fcName, [], this.entityVO);
        }
    }
    /*
    *retrieve the saved data from observable to initialize the signature
    */
    initializeFromSavedData() {
        if (this.options.dataObservable) {
            this.options.dataObservable.subscribe((result) => {
                if (result) {
                    this.savedData = result;
                    let specVal = this.options.group.controls[src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].CONTROLLER_FORM_DATA].value[this.options.fcName];
                    if (specVal) {
                        if (specVal[0]['fileSize']) {
                            this.commonProv.setValInsideNestedObj(this.specimenScanUploadOptions.fcName, specVal, this.entityVO);
                            this.showPadSignature(1); //Makki:AZDB-5092 In case current sign is a file , show it  on open
                        }
                        else {
                            this.commonProv.setValInsideNestedObj(this.defaultPadSignatureOptions.fcName, specVal, this.entityVO);
                            this.showPadSignature(2); //Makki:AZDB-5092 In case current sign is a drawing , show the drawing pad on open
                        }
                    }
                }
            });
        }
    }
    onFileDelete(event) {
        this.deleteCurrentSign();
    }
    deleteCurrentSign() {
        this.setEntityValue([]);
        this.setControlValue(this.specimenScanUploadOptions.fcName, [], this.entityVO);
    }
    setControlValue(fcName, value, requestObject) {
        this.savedData[this.options.fcName] = value;
        this.commonProv.setValInsideNestedObj(fcName, value, requestObject);
        this.specimenScanUploadOptions.group.controls[fcName].setValue(value);
        this.specimenScanUploadOptions.group.updateValueAndValidity();
    }
};
PsComplexSpecimenComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsComplexSpecimenComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fileRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['fileUpload', { static: false },] }]
};
PsComplexSpecimenComponent = PsComplexSpecimenComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-specimen',
        template: _raw_loader_ps_complex_specimen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_3__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsComplexSpecimenComponent);



/***/ }),

/***/ "DtgQ":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-specimen/ps-complex-specimen.component.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsComplexSpecimenComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSpecimenComponentModule", function() { return PsComplexSpecimenComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_specimen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-complex-specimen.component */ "89p+");





let PsComplexSpecimenComponentModule = class PsComplexSpecimenComponentModule {
};
PsComplexSpecimenComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_specimen_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexSpecimenComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
        ],
        exports: [
            _ps_complex_specimen_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexSpecimenComponent"]
        ],
        entryComponents: [
            _ps_complex_specimen_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexSpecimenComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexSpecimenComponentModule);



/***/ }),

/***/ "nMK/":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-specimen/ps-complex-specimen.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-field-entity [options]=\"options\">\n\n    <ps-container-item [options]=\"itemOptions\" [attr.psFcName]=\"options.fcName\">\n        <!-- <ps-action-button id=\"scan-upload-button\" [options]=\"scanUploadButton\" (click)=\"showPadSignature(1)\">\n        </ps-action-button> -->\n        <ps-action-button *ngIf=\"handWriting !=0 \" id=\"specimen-cancel-button\" [options]=\"backButton\"\n            (click)=\"cancelClicked()\">\n        </ps-action-button>\n        <ng-container *ngIf=\"handWriting !=2\">\n            <ps-file-upload [options]=\"specimenScanUploadOptions\" (click)=\"showPadSignature(1)\"\n                (onPsChange)=\"uploadScanChanged($event)\"\n                (onPsFileDelete)=\"onFileDelete($event)\"\n                  #fileUpload>\n\n            </ps-file-upload>\n            <!-- <ps-button-capture-image [options]=\"defaultCaptureImageButtonOptions\" (click)=\"showPadSignature(1)\"\r\n                (onClick)=\"uploadScanChanged()\">\n            </ps-button-capture-image> -->\n        </ng-container>\n        <ng-container *ngIf=\"handWriting == 0\">\n            <ps-action-button id=\"pad-signature-button\" [options]=\"padSignatureButton\" (click)=\"showPadSignature(2)\">\n            </ps-action-button>\n        </ng-container>\n\n        <ng-container *ngIf=\"handWriting == 2\">\n            <ps-field-signature-pad [options]=\"defaultPadSignatureOptions\" (onPsChange)=\"signaturePageChanged($event)\">\n            </ps-field-signature-pad>\n        </ng-container>\n    </ps-container-item>\n\n\n\n</ps-field-entity>\n\n\n<ng-container *ngFor=\"let file of previewValOptions.labelKey;index as i\">\n    <div class=\"ps-custom-component-preview\" psPreviewEngine>\n        <ps-label-input *ngIf=\"previewLblOptions.labelKey\" [id]=\"'lbl_'+ id\" [options]=\"previewLblOptions\"\n            class=\"ps-lbl-preview\" psPreviewLabel>\n        </ps-label-input>\n        <img psPreviewHTML class=\"ps-image ps-verification-images\"\n            [src]=\"file.imageUrl\" [id]=\"'lbl_'+ id\" />\n    </div>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default~pages-add-owner-add-owner-module~pages-dynamic-component-page-loader-dynamic-component-page-~5fe6615e-es2015.js.map