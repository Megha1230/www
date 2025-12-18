(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-bpm-dynamic-page-bpm-dynamic-page-module~pages-dynamic-component-page-loader-dynamic-c~12b2ba92"],{

/***/ "2Sgc":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(visible||custMode) && !previewMode\">\n\n  <div class=\"widget-style\" *ngIf=\"options?.isAdvanced\">\n    <div class=\"widget-menu-icon widget-menu-icon-back\" (click)=\"dismissModal(true)\">\n      <ps-action-icon class=\"modal-close-icon\" [options]=\"closeIcon\">\n      </ps-action-icon>\n    </div>\n  </div>\n\n  <div class=\"media-wrapper\"\n    [ngClass]=\"{'flow-initialized':screenData.flowWasInitialized, 'flow-not-initialized':!screenData.flowWasInitialized}\">\n    <ng-container *ngIf=\"options?.isAdvanced\">\n      <div class=\"media-video-wrapper\" #userVideoWrapper>\n        <div></div>\n        <video #userVideo class=\"media-video\" playsinline autoplay></video>\n        <ps-action-icon class=\"source-switcher\" [options]=\"switchIcon\"\n          *ngIf=\"sources?.length>=2 || commonP.isNativeMobile()\" (onClick)=\"switchCamera()\"></ps-action-icon>\n      </div>\n\n\n      <div #slider class=\"media-video-wrapper-preview\" *ngIf=\"screenData.visibleImagesOnlyArray.length>0\"\n        (mousedown)=\"onMouseDown($event)\" [ngClass]=\"{'active':onMouseDownFlag}\" (mouseup)=\"handleMouseEvent(false)\"\n        (mouseleave)=\"handleMouseEvent(false)\" (mousemove)=\"handleOnMove($event)\">\n        <ng-container *ngFor=\"let prev of screenData.visibleImagesOnlyArray; let i = index\">\n          <ng-container *ngIf=\"prev.type == TYPE_IMAGE\">\n            <ps-action-image #imageReference class=\"media-image-preview\" [options]=\"prev\"\n              (click)=\"checkSelectedMedia(prev)\" [id]=\"prev.dynamicID\">\n            </ps-action-image>\n          </ng-container>\n\n          <ng-container *ngIf=\"prev.type == TYPE_VIDEO\">\n            <video #userVideoPreview class=\"media-video-preview\" playsinline autoplay\n              (click)=\"checkSelectedMedia(prev)\"></video>\n          </ng-container>\n\n        </ng-container>\n      </div>\n    </ng-container>\n\n\n    <div class=\"buttons-wrapper\">\n      <ng-container *ngIf=\"!videoIsRecording\">\n        <ps-action-button [options]=\"options.mediaButton\"\n          (onClick)=\"!screenData.flowWasInitialized?presentPopup():captureMedia()\"\n          [ngClass]=\"{'col-12': !screenData.inProgress, 'col-6':screenData.inProgress}\"></ps-action-button>\n\n        <ps-action-button [ngClass]=\"{'col-12': !screenData.inProgress, 'col-6':screenData.inProgress}\"\n          *ngIf=\"screenData.inProgress\" (onClick)=\"dismissModal()\" [options]=\"doneOptions\"></ps-action-button>\n      </ng-container>\n\n\n      <ps-action-button *ngIf=\"videoIsRecording\" class=\"col-12\" (onClick)=\"stopRecording()\"\n        [options]=\"stopVideoRecordingLabel\">\n      </ps-action-button>\n    </div>\n\n  </div>\n</ng-container>\n\n<div *ngIf=\"previewMode\" class=\"ps-custom-component-preview selfie-component\" psPreviewEngine>\n  <ps-label psPreviewLabel *ngIf=\"options.mediaButton\" [id]=\"'lbl_'+ id\" [options]=\"options.mediaButton\"\n    class=\"ps-lbl-preview\">\n  </ps-label>\n  <ng-container *ngFor=\"let prev of screenData.visibleImagesOnlyArray\">\n    <ps-action-image psPreviewHTML class=\"media-image-preview\" [options]=\"prev\">\n\n    </ps-action-image>\n  </ng-container>\n</div>");

/***/ }),

/***/ "Aju7":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: PsComplexCallSlotComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexCallSlotComponentModule", function() { return PsComplexCallSlotComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-complex-call-slot.component */ "Aoll");





let PsComplexCallSlotComponentModule = class PsComplexCallSlotComponentModule {
};
PsComplexCallSlotComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexCallSlotComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
        ],
        exports: [
            _ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexCallSlotComponent"]
        ],
        entryComponents: [
            _ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_4__["PsComplexCallSlotComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexCallSlotComponentModule);



/***/ }),

/***/ "Aoll":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PsComplexCallSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexCallSlotComponent", function() { return PsComplexCallSlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_call_slot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-call-slot.component.html */ "X6o6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
let PsComplexCallSlotComponent = class PsComplexCallSlotComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_6__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.omniPull = omniPull;
        this.cOptions = {
            events: [{
                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 1),
                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 2),
                    title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1), 2).toLocaleTimeString(),
                    // actions: this.actions,
                    color: colors.red,
                    onClick: (returnedData) => {
                        this.bookSlot(returnedData);
                    }
                    // allDay: true,
                    // resizable: {
                    //   beforeStart: true,
                    //   afterEnd: true,
                    // },
                    // draggable: true,
                },
                {
                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 1),
                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 2),
                    title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 2).toLocaleTimeString(),
                    // actions: this.actions,
                    color: colors.yellow,
                    onClick: (returnedData) => {
                        this.bookSlot(returnedData);
                    }
                },
                {
                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 1),
                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 2),
                    title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 1), 2).toLocaleTimeString(),
                    color: colors.blue,
                    onClick: (returnedData) => {
                        this.bookSlot(returnedData);
                    }
                    // allDay: true,
                },
                {
                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 1),
                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 2),
                    title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 1).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(), 2), 2).toLocaleTimeString(),
                    // actions: this.actions,
                    color: colors.yellow,
                    onClick: (returnedData) => {
                        this.bookSlot(returnedData);
                    }
                    // resizable: {
                    //   beforeStart: true,
                    //   afterEnd: true,
                    // },
                    // draggable: true,
                }, {
                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 4),
                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 5),
                    title: 'Slot From ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 4).toLocaleTimeString() + ' to ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addHours"])(new Date(), 5).toLocaleTimeString(),
                    // actions: this.actions,
                    color: colors.yellow,
                    onClick: (returnedData) => {
                        this.bookSlot(returnedData);
                    }
                    // resizable: {
                    //   beforeStart: true,
                    //   afterEnd: true,
                    // },
                    // draggable: true,
                },]
        };
    }
    ngOnInit() {
        this.getDateTimeFormat();
        this.cOptions.group = this.options.group;
        this.cOptions.fcName = this.options.fcName;
    }
    getDateTimeFormat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.getParamValOf('DefaultDateTimeFormat');
            if (result) {
                const paramData = {
                    lovTypeId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].DEFAULT_DATE_TIME_LOV_TYPE_ID,
                    lovCodesInlude: result['DefaultDateTimeFormat']
                };
                const res = yield this.omniPull.returnLovTypesValues(paramData);
                if (res && res[0] && res[0].description) {
                    this.dateTimeFormat = res[0].description;
                }
            }
        });
    }
    bookSlot(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return;
        });
    }
};
PsComplexCallSlotComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsComplexCallSlotComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PsComplexCallSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-call-slot',
        template: _raw_loader_ps_complex_call_slot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsComplexCallSlotComponent);



/***/ }),

/***/ "X6o6":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-complex-calendar [options]=\"cOptions\"></ps-complex-calendar>");

/***/ }),

/***/ "dz/v":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: PsComplexMediaCaptureComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexMediaCaptureComponentModule", function() { return PsComplexMediaCaptureComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-round-progressbar */ "eANF");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-complex-media-capture.component */ "xdyT");






let PsComplexMediaCaptureComponentModule = class PsComplexMediaCaptureComponentModule {
};
PsComplexMediaCaptureComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponent"]],
        imports: [src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"], angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__["RoundProgressModule"]],
        exports: [_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponent"]],
        entryComponents: [_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexMediaCaptureComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexMediaCaptureComponentModule);



/***/ }),

/***/ "xdyT":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PsComplexMediaCaptureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexMediaCaptureComponent", function() { return PsComplexMediaCaptureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_media_capture_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-media-capture.component.html */ "2Sgc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ "8Y4A");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_file_ps_field_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-file/ps-field-file.component */ "jNcp");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../psServices/models/ps-common-bussiness-constant */ "V0Fi");
var PsComplexMediaCaptureComponent_1;










let PsComplexMediaCaptureComponent = PsComplexMediaCaptureComponent_1 = class PsComplexMediaCaptureComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_file_ps_field_file_component__WEBPACK_IMPORTED_MODULE_5__["PsFieldFileComponent"] /*  implements AfterViewInit */ {
    constructor(commonP, elRefC, cd, modalController, cameraPreview) {
        super(commonP, commonP.logger, elRefC);
        this.commonP = commonP;
        this.elRefC = elRefC;
        this.cd = cd;
        this.modalController = modalController;
        this.cameraPreview = cameraPreview;
        this.screenData = {
            micFlag: false,
            camFlag: true,
            camSide: "user",
            audioSource: null,
            videoSource: null,
            currentStream: null,
            recorder: null,
            chunks: [],
            previewImages: [],
            flowWasInitialized: false,
            inProgress: false,
            // showCountdown: false,
            // initialTime: 3,
            // currentTimer: 3
            lastState: false,
            lastStateData: {},
            numberOfImages: src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_7__["PsApplicationSettings"].CLIENT_ASSETS_CONFIG.UI_CONFIGURATION.MAX_NUMBER_OF_IMAGES_IN_MEDIA_CAPTURE,
            currentSelectedImageID: '',
            currentSelectedImage: null,
            visibleImagesOnlyArray: []
        };
        this.switchIcon = {
            iconName: 'cam-switch'
        };
        this.posterIcon = {
            imageName: 'camera.svg'
        };
        this.onMouseDownFlag = false;
        this.onMouseDownDrag = false;
        this.sources = [];
        this.TYPE_VIDEO = _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].TYPE_VIDEO;
        this.TYPE_IMAGE = _psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_9__["CommonBussinessConstant"].TYPE_IMAGE;
        this.closeIcon = {
            iconName: 'close',
            labelOptions: {
                labelKey: '',
            }
        };
        this.videoIsRecording = false;
    }
    ngOnInit() {
        super.init();
        if (this.options && this.options.group) {
            this.doneOptions = {
                labelKey: 'done_key',
                group: this.options.group
            };
            this.stopVideoRecordingLabel = {
                labelKey: 'stop_recording_key',
                group: this.options.group
            };
            if (this.options.numberOfImages > 0) {
                this.screenData.numberOfImages = this.options.numberOfImages;
            }
        }
    }
    ngAfterViewInit() {
        if (this.options && this.options.isAdvanced) {
            if (!src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].isEmptyObject(this.lastStateData)) {
                src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].copyObject(this.screenData, this.lastStateData, true);
            }
            else {
                for (let i = 0; i < this.screenData.numberOfImages; i++) {
                    let fileName = this.options.fcName + '_img_' + i + '.' + src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].getCssVariableValue('--ps-preview-image-extension-format');
                    const image = {
                        imageName: fileName,
                        labelOptions: {
                            labelKey: this.options.fcName + '_label_' + i
                        },
                        dynamicID: this.options.fcName + '_' + i,
                        fallBackImageName: 'add.svg',
                        type: 'image',
                        fileName: fileName,
                        fileExt: src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].getCssVariableValue('--ps-preview-image-extension-format'),
                        status: 'N',
                        isImage: true
                    };
                    this.screenData.previewImages.push(image);
                    if (!this.custMode) {
                        this.checkCustomization(image.dynamicID, image);
                    }
                    else {
                        this.screenData.visibleImagesOnlyArray.push(image);
                    }
                }
                // const video: PsMediaCapture = {
                //   imageName: this.options.fcName + '_video_' + '.' + CommonUtils.getCssVariableValue('--ps-preview-image-extension-format'),
                //   labelOptions: {
                //     labelKey: this.options.fcName + '_video_label_'
                //   },
                //   dynamicID: this.options.fcName + '_video',
                //   fallBackImageName: 'add.svg',
                //   type: 'video'
                // };
                // this.screenData.previewImages.push(video);
                // if (!this.custMode) {
                //   this.checkCustomization(video.dynamicID, video);
                // } else {
                //   this.screenData.visibleImagesOnlyArray.push(video);
                // }
            }
            this.initFlow();
        }
    }
    checkCustomization(dynamicID, image) {
        const cust = this.commonProv.getElementValidations(dynamicID);
        if (cust.IS_VISIBLE == 1) {
            this.screenData.visibleImagesOnlyArray.push(image);
        }
    }
    initFlow() {
        if (this.userVideoRef) {
            if (src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].isNativeMobile()) {
                try {
                    this.nativePreviewInit();
                }
                catch (err) {
                    this.fallBackInit();
                }
            }
            else {
                this.fallBackInit();
            }
        }
    }
    fallBackInit() {
        try {
            this.initWebRTCFlow();
        }
        catch (err) {
            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].presentFailureAlert('camera_preview_not_avail_key');
        }
    }
    initWebRTCFlow() {
        let userVideo = this.userVideoRef.nativeElement;
        userVideo.muted = true;
        userVideo.autoplay = true;
        navigator.mediaDevices.getUserMedia(this.getMediaConstaint()).then((stream) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isWebRTCAvailable = true;
            navigator.mediaDevices.enumerateDevices().then(devices => {
                const filtered = devices.filter(device => device.kind === 'videoinput');
                this.sources = [...filtered];
            });
            this.screenData.currentStream = stream;
            if (userVideo) {
                userVideo.srcObject = null;
            }
            userVideo.srcObject = stream;
            yield userVideo.play();
            this.screenData.flowWasInitialized = true;
            this.checkSelectedMedia(this.screenData.visibleImagesOnlyArray[0]);
        })).catch((err) => {
            this.logger.log(err);
            this.nativePreviewInit();
        });
    }
    nativePreviewInit() {
        setTimeout(() => {
            if (this.userVideoWrapper && this.userVideoWrapper.nativeElement) {
                const wrapperPosition = this.userVideoWrapper.nativeElement.getBoundingClientRect();
                let paddingLeft = getComputedStyle(this.userVideoWrapper.nativeElement)['padding-left'];
                let paddingRight = getComputedStyle(this.userVideoWrapper.nativeElement)['padding-right'];
                let paddingTop = getComputedStyle(this.userVideoWrapper.nativeElement)['padding-top'];
                let paddingBottom = getComputedStyle(this.userVideoWrapper.nativeElement)['padding-bottom'];
                let xPadding = 0;
                let yPadding = 0;
                if (paddingLeft != null && paddingLeft != "") {
                    xPadding = xPadding + parseFloat(paddingLeft);
                }
                if (paddingRight != null && paddingRight != "") {
                    xPadding = xPadding + parseFloat(paddingRight);
                }
                if (paddingTop != null && paddingTop != "") {
                    yPadding = yPadding + parseFloat(paddingTop);
                }
                if (paddingBottom != null && paddingBottom != "") {
                    yPadding = yPadding + parseFloat(paddingBottom);
                }
                const cameraPreviewOpts = {
                    x: wrapperPosition.x + xPadding,
                    y: wrapperPosition.y + yPadding,
                    width: wrapperPosition.width - (xPadding * 2),
                    height: wrapperPosition.height - (yPadding * 2),
                    camera: 'rear',
                    tapPhoto: true,
                    previewDrag: false,
                    toBack: false,
                    alpha: 1
                };
                this.cameraPreview.stopCamera().then(() => {
                    this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
                        this.isWebRTCAvailable = false;
                    }).catch((err) => { this.logger.log(err); });
                }).catch((err) => {
                    this.logger.log(err);
                    this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
                        this.isWebRTCAvailable = false;
                    }).catch((err) => { this.logger.log(err); });
                });
            }
            else {
                this.nativePreviewInit();
            }
        }, 500);
    }
    getMediaConstaint() {
        let videoVal = this.screenData.camFlag ? {
            facingMode: this.screenData.camSide,
            frameRate: {
                ideal: 10,
                min: 5,
            },
            noiseSuppression: true,
        } : false;
        let audioVal = this.screenData.micFlag ? {
            deviceId: (this.screenData.audioSource) ? this.screenData.audioSource : undefined,
            echoCancellation: true
        } : false;
        let constraints = {
            video: videoVal,
            audio: audioVal,
        };
        return constraints;
    }
    startRecording() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isWebRTCAvailable) {
                this.screenData.chunks = [];
                this.videoIsRecording = true;
                this.screenData.recorder = new MediaRecorder(this.screenData.currentStream);
                this.screenData.recorder.start();
                this.screenData.recorder.ondataavailable = (event) => {
                    this.screenData.chunks.push(event.data);
                    let recordedBlob = new Blob(this.screenData.chunks, { type: "video/webm" });
                    let url = URL.createObjectURL(recordedBlob);
                    this.cd.detectChanges();
                    let userPreviewVideo = this.userVideoPreview.nativeElement;
                    userPreviewVideo.src = url;
                    // saveAs(recordedBlob, Date.now() + '.webm');
                    // let a = document.createElement('a');
                    // document.body.appendChild(a);
                    // // a.style = 'display: none';
                    // a.href = url;
                    // a.download = Date.now() + '.webm';
                    // a.click();
                    // window.URL.revokeObjectURL(url);
                };
            }
            else {
            }
        });
    }
    stopRecording() {
        this.screenData.recorder.stop();
        this.screenData.inProgress = false;
    }
    goToNext() {
        const currentIndex = this.screenData.visibleImagesOnlyArray.findIndex(item => item.dynamicID === this.screenData.currentSelectedImageID);
        const arrayLength = this.screenData.visibleImagesOnlyArray.length;
        let startIndex = currentIndex;
        if (startIndex == arrayLength - 1) {
            startIndex = 0;
        }
        if (currentIndex != -1) {
            let wasFound = false;
            for (let i = startIndex; i < this.screenData.visibleImagesOnlyArray.length; i++) {
                const element = this.screenData.visibleImagesOnlyArray[i];
                if (currentIndex != i && !element.imageBase64Url) {
                    if (!element.imageBase64Url && !wasFound) {
                        wasFound = true;
                        this.checkSelectedMedia(element);
                        const reference = this.imagesReference.toArray()[i];
                        reference.nativeElement.scrollIntoView({ behavior: 'smooth' });
                        break;
                    }
                }
                if (!wasFound && startIndex != 0 && i == arrayLength - 1) {
                    startIndex = 0;
                    i = 0;
                }
            }
            ;
        }
    }
    captureMedia() {
        if (!this.screenData.inProgress) {
            this.screenData.inProgress = true;
        }
        if (this.userVideoRef) {
            if (this.screenData.currentSelectedImage.type == this.TYPE_VIDEO) {
                if (this.isWebRTCAvailable) {
                    this.startRecording();
                }
            }
            else {
                let base64URL = "";
                let ext = "jpeg";
                if (this.isWebRTCAvailable) {
                    let userVideo = this.userVideoRef.nativeElement;
                    let canvas = document.createElement("canvas");
                    canvas.width = userVideo.videoWidth;
                    canvas.height = userVideo.videoHeight;
                    canvas.getContext('2d')
                        .drawImage(userVideo, 0, 0, canvas.width, canvas.height);
                    base64URL = canvas.toDataURL();
                    ext = "png";
                }
                else {
                    const pictureOpts = {
                        quality: 100
                    };
                    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
                        base64URL = 'data:image/jpeg;base64,' + imageData;
                    }, (err) => { this.logger.error('error_taking_pic_key'); });
                }
                this.screenData.visibleImagesOnlyArray.forEach(element => {
                    if (element.dynamicID === this.screenData.currentSelectedImageID) {
                        element.imageBase64Url = base64URL;
                        element.file = base64URL.split(',')[1];
                        element.fileExt = ext;
                        element.imageUrl = base64URL;
                    }
                });
                //check base64
                this.goToNext();
            }
        }
    }
    presentPopup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            
             const id = 'ps-media-capture-modal';
        
            const newOptions: IOptionsPsComplexMediaCaptureComponent = {};
            CommonUtils.copyObject(newOptions, this.options, true);
            newOptions.isAdvanced = true;
            const finalOptions = { options: newOptions, lastStateData: this.screenData && this.screenData.lastStateData ? this.screenData.lastStateData : null }
        
            const modal = await this.common.presentPopupScreen({
              component: PsComplexMediaCaptureComponent,
              componentOptions: finalOptions
            }, id);
        
            await modal.onDidDismiss().then(data => {
              this.screenData.lastStateData = data['data'];
            }).catch(error => this.common.logger.log(error));
            
            
            */
            const id = 'ps-media-capture-modal';
            const newOptions = {};
            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].copyObject(newOptions, this.options, true);
            newOptions.isAdvanced = true;
            this.modalController.dismiss(null, null, id);
            const modal = yield this.modalController.create({
                component: PsComplexMediaCaptureComponent_1,
                cssClass: id,
                componentProps: { options: newOptions, lastStateData: this.screenData && this.screenData.lastStateData ? this.screenData.lastStateData : null },
                backdropDismiss: true,
                animated: false,
                id: id
            });
            /* return */ yield modal.present();
            yield modal.onDidDismiss().then(data => {
                this.screenData.lastStateData = data['data'];
            }).catch(error => this.common.logger.log(error));
        });
    }
    dismissModal(justClose) {
        var _a;
        if (justClose) {
            // this.userVideoPreview.nativeElement.scrollIntoView({ behavior: 'smooth' });
            super.resetFileValController();
            this.modalController.dismiss();
        }
        else {
            super.setFileValController((_a = this.screenData) === null || _a === void 0 ? void 0 : _a.visibleImagesOnlyArray.filter(b => b.imageBase64Url));
            // this.onPsChange.emit();
            this.modalController.dismiss(this.screenData, null, 'ps-media-capture-modal');
        }
    }
    checkSelectedMedia(media) {
        if (media.type == this.TYPE_VIDEO) {
            const modalID = 'ps-confirm-close';
            const alertController = {
                cssClass: 'user-consent-popup',
                header: 'you_will_be_recorded_key',
                buttons: [
                    {
                        role: 'cancel',
                        options: {
                            labelKey: 'cancel_key',
                            psClass: 'ps-drafts-report-cancel-button',
                            group: this.options.group
                        },
                        handler: () => {
                            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].dismissAllModals(null, null, modalID);
                        }
                    },
                    {
                        options: {
                            labelKey: 'ok_key',
                            psClass: 'ps-drafts-report-cancel-button',
                            group: this.options.group
                        },
                        handler: () => {
                            src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_6__["CommonUtils"].dismissAllModals(null, null, modalID);
                            this.selectMedia(media);
                        }
                    }
                ]
            };
            this.common.presentPsAlert(alertController, modalID);
        }
        else {
            this.selectMedia(media);
        }
    }
    selectMedia(media) {
        this.screenData.currentSelectedImage = media;
        this.screenData.visibleImagesOnlyArray.forEach(element => {
            element.psClass = "";
            if (element.dynamicID == media.dynamicID) {
                element.psClass = "ps-selected-image";
                this.screenData.currentSelectedImageID = media.dynamicID;
            }
            else {
                element.psClass = "";
            }
        });
    }
    createDynID(media, id) {
        media.dynamicID = id;
        return id;
    }
    handleMouseEvent(type) {
        this.onMouseDownFlag = type;
        this.onMouseDownDrag = type;
    }
    onMouseDown(e) {
        e.preventDefault();
        // this.onMouseDownFlag = true;
        this.onMouseDownDrag = true;
        if (this.slider) {
            this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
            this.scrollLeft = this.slider.nativeElement.scrollLeft;
        }
    }
    handleOnMove(e) {
        if (!this.onMouseDownDrag) {
            return;
        }
        if (this.slider) {
            this.onMouseDownFlag = true;
            e.preventDefault();
            const x = e.pageX - this.slider.nativeElement.offsetLeft;
            const walk = (x - this.startX) * 2; //scroll-fast
            this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
        }
    }
    switchCamera() {
        if (this.isWebRTCAvailable) {
            const tracks = this.screenData.currentStream.getTracks();
            tracks.forEach(track => track.stop());
            if (this.screenData.camSide == "environment") {
                this.screenData.camSide = "user";
            }
            else {
                this.screenData.camSide = "environment";
            }
            this.initFlow();
        }
        else {
            this.cameraPreview.switchCamera();
        }
    }
    ngOnDestroy() {
        this.cameraPreview.stopCamera();
    }
};
PsComplexMediaCaptureComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"] }
];
PsComplexMediaCaptureComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    userVideoRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['userVideo', { static: false },] }],
    userVideoPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['userVideoPreview', { static: false },] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['slider', { static: false },] }],
    imagesReference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ['imageReference', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },] }],
    userVideoWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['userVideoWrapper', { static: false },] }]
};
PsComplexMediaCaptureComponent = PsComplexMediaCaptureComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'ps-complex-media-capture',
        template: _raw_loader_ps_complex_media_capture_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__["CameraPreview"]])
], PsComplexMediaCaptureComponent);



/***/ })

}]);
//# sourceMappingURL=default~pages-bpm-dynamic-page-bpm-dynamic-page-module~pages-dynamic-component-page-loader-dynamic-c~12b2ba92-es2015.js.map