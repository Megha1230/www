(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qibla-direction-qibla-direction-module"],{

/***/ "2ery":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-screen>\n    <ps-action-image class=\"inline-loading-image\" *ngIf=\"!options.disableLoading && spinner\"\n        [options]=\"actionImageOptions\">\n    </ps-action-image>\n    <ng-content>\n    </ng-content>\n    <ng-container psFooter>\n        <ng-content select=[footer]></ng-content>\n        <ps-button-cancel (click)=\"onFooterClick()\" [id]=\"id + 'temp_btn_cancel'\" [options]=\"cancelOptions\">\n        </ps-button-cancel>\n\n    </ng-container>\n</ps-template-screen>");

/***/ }),

/***/ "DTk4":
/*!***************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS12aWV3LnRlbXBsYXRlLnNjc3MifQ== */");

/***/ }),

/***/ "FHtE":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.module.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: PsComplexLandmarkCompassComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexLandmarkCompassComponentModule", function() { return PsComplexLandmarkCompassComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-select-lookup-option-list/ps-select-lookup-option-list.component.module */ "yvgy");
/* harmony import */ var _ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-complex-landmark-compass.component */ "mlJC");






let PsComplexLandmarkCompassComponentModule = class PsComplexLandmarkCompassComponentModule {
};
PsComplexLandmarkCompassComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLandmarkCompassComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_select_dropdown_ps_select_lookup_option_list_ps_select_lookup_option_list_component_module__WEBPACK_IMPORTED_MODULE_4__["PsSelectLookupOptionListComponentModule"]
        ],
        exports: [_ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLandmarkCompassComponent"]],
        entryComponents: [_ps_complex_landmark_compass_component__WEBPACK_IMPORTED_MODULE_5__["PsComplexLandmarkCompassComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexLandmarkCompassComponentModule);



/***/ }),

/***/ "FQ9l":
/*!********************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PsTemplateViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateViewModule", function() { return PsTemplateViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-template-screen/ps-template-screen.template.module */ "63Vm");
/* harmony import */ var _ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-template-view.template */ "RkAu");






let PsTemplateViewModule = class PsTemplateViewModule {
};
PsTemplateViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateScreenPageModule"]
        ],
        declarations: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        exports: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        entryComponents: [_ps_template_view_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateView"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], PsTemplateViewModule);



/***/ }),

/***/ "RkAu":
/*!*************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.ts ***!
  \*************************************************************************************/
/*! exports provided: PsTemplateView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateView", function() { return PsTemplateView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-template-view.template.html */ "2ery");
/* harmony import */ var _ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-template-view.template.scss */ "DTk4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../psServices/Event/event.service */ "r40+");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.page */ "uqA0");







let PsTemplateView = class PsTemplateView extends _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_6__["PsTemplateBasePage"] {
    // End Richie
    constructor(events) {
        super();
        this.events = events;
        this.cancelOptions = {
            labelKey: 'cancel_key',
            group: this.options.group
        };
        this.spinner = false;
        this.actionImageOptions = {
            imageName: _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_5__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
        };
        // modified by Richie #TP 1105083 due to migration to ionic 5 since Event service was removed and replaced with observable with one argument
        this.reqStartEvent = events.subscribe('network:request:started', (time) => {
            this.spinner = true;
        });
        this.reqCompletEvent = events.subscribe('network:request:completed', (time) => {
            this.spinner = false;
        });
    }
    ngOnInit() {
        this.options.requestObject = this.options.requestObject ? this.options.requestObject : {};
        if (this.options.group) {
            this.commonProv.setFormData(this.options.group, this.options.requestObject);
        }
    }
    onFooterClick() {
        if (document.getElementsByTagName('ion-modal')[0] !== undefined) {
            document.getElementsByTagName('ion-modal')[0].dismiss();
        }
    }
    ngOnDestroy() {
        // modified by Richie #TP 1105083
        super.ngOnDestroy();
        if (this.reqStartEvent) {
            this.reqStartEvent.unsubscribe();
        }
        if (this.reqCompletEvent) {
            this.reqCompletEvent.unsubscribe();
        }
    }
};
PsTemplateView.ctorParameters = () => [
    { type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
PsTemplateView.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsTemplateView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-view',
        template: _raw_loader_ps_template_view_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_view_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], PsTemplateView);



/***/ }),

/***/ "UdmB":
/*!*****************************************************************!*\
  !*** ./src/app/pages/qibla-direction/qibla-direction.module.ts ***!
  \*****************************************************************/
/*! exports provided: QiblaDirectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QiblaDirectionPageModule", function() { return QiblaDirectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_landmark_compass_ps_complex_landmark_compass_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.module */ "FHtE");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-view/ps-template-view.template.module */ "FQ9l");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _qibla_direction_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qibla-direction.page */ "n+wQ");








const routes = [
    {
        path: '',
        component: _qibla_direction_page__WEBPACK_IMPORTED_MODULE_7__["QiblaDirectionPage"]
    }
];
let QiblaDirectionPageModule = class QiblaDirectionPageModule {
};
QiblaDirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            src_app_commonSRC_psTemplates_ps_template_view_ps_template_view_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateViewModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_landmark_compass_ps_complex_landmark_compass_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexLandmarkCompassComponentModule"]
        ],
        declarations: [_qibla_direction_page__WEBPACK_IMPORTED_MODULE_7__["QiblaDirectionPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], QiblaDirectionPageModule);



/***/ }),

/***/ "Vf1Y":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LWxhbmRtYXJrLWNvbXBhc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dI5s":
/*!***************************************************************************!*\
  !*** ./src/app/commonSRC/psServices/landmark-compass/landmark-compass.ts ***!
  \***************************************************************************/
/*! exports provided: LandmarkCompassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandmarkCompassService", function() { return LandmarkCompassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/device-orientation/ngx */ "aaCY");
/* harmony import */ var _geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geolocation/geolocation.service */ "cHGM");
/* harmony import */ var _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/logger.service */ "DFXC");





let LandmarkCompassService = class LandmarkCompassService {
    constructor(deviceOrientation, geolocationService, logger) {
        this.deviceOrientation = deviceOrientation;
        this.geolocationService = geolocationService;
        this.logger = logger;
        this.deviceAngle = 0;
        this.deviceLocation = {
            longitude: 35,
            latitude: 33,
        };
        this._subscriptions = {};
    }
    radToDeg(angleInRad) {
        return angleInRad * 180 / Math.PI;
    }
    degToRad(angleInDeg) {
        return angleInDeg * Math.PI / 180;
    }
    getDistance(coordinates) {
        // alert(this.deviceLocation.latitude+","+this.deviceLocation.longitude);
        let R = 6371; // Radius of the earth in km
        let dLat = this.degToRad(coordinates.latitude - this.deviceLocation.latitude);
        let dLon = this.degToRad(coordinates.longitude - this.deviceLocation.longitude);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.degToRad(this.deviceLocation.latitude)) * Math.cos(this.degToRad(coordinates.latitude)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        return d;
    }
    subscribe() {
        this._subscriptions.watchHeading = this.deviceOrientation.watchHeading().subscribe(orientation => {
            this.deviceAngle = orientation.magneticHeading;
        }, error => { this.logger.log(error); });
        this.geolocationService.getCachedCoordinates().then(() => {
            this._subscriptions.watchPosition = this.geolocationService.watchUserPosition().subscribe((location) => {
                if (location.coords) {
                    this.deviceLocation.latitude = location.coords.latitude;
                    this.deviceLocation.longitude = location.coords.longitude;
                }
            }, error => { this.logger.log(error); });
        });
        // window.addEventListener('deviceorientation', this.processEvent, true);
    }
    unsubscribe() {
        if (this._subscriptions.watchHeading !== undefined) {
            this._subscriptions.watchHeading.unsubscribe();
        }
        window.removeEventListener('deviceorientation', this.processEvent);
    }
    getLandmarkAngle(coords) {
        if (!coords) {
            return;
        }
        const Xq = coords.longitude;
        const Yq = coords.latitude;
        const Xm = this.deviceLocation.longitude;
        const Ym = this.deviceLocation.latitude;
        const a2 = Math.atan(Math.abs(Xm - Xq) / Math.abs(90 - Yq));
        const b = Math.atan(Math.abs(Yq - 90) / Math.abs(Xq - Xm));
        const b1 = Math.atan(Math.abs(Yq - Ym) / Math.abs(Xq - Xm));
        const b2 = Math.abs(b1 - b);
        const c = 180 - this.radToDeg(a2 + b2);
        let result = c;
        if (Xq < Xm) {
            result = -result;
        }
        if (Yq > Ym) {
            result = 180 - result;
        }
        return result;
    }
    trueAngle(coords) {
        const landmarkAngle = this.getLandmarkAngle(coords);
        let result = (landmarkAngle - this.deviceAngle);
        if (result <= -180) {
            result = result + 360;
        }
        return result;
    }
    processEvent(event) {
        var elem = document.getElementsByClassName('direction-n');
        window.addEventListener('deviceorientation', (e) => {
            // remember to use vendor-prefixed transform property
            elem['style'].transform =
                'rotateZ(' + (e.alpha - 180) + 'deg) ' +
                    'rotateX(' + e.beta + 'deg) ' +
                    'rotateY(' + (-e.gamma) + 'deg)';
        });
    }
};
LandmarkCompassService.ctorParameters = () => [
    { type: _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceOrientation"] },
    { type: _geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"] },
    { type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }
];
LandmarkCompassService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["DeviceOrientation"],
        _geolocation_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"],
        _logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
], LandmarkCompassService);



/***/ }),

/***/ "gKqT":
/*!***************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.ts ***!
  \***************************************************/
/*! exports provided: OmniBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniBasePage", function() { return OmniBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./omni-base.page.html */ "mVVo");
/* harmony import */ var _omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omni-base.page.scss */ "s2T5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/customization/psServices/util/common-cust-utils */ "oS+F");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/ps-app-settings */ "lE2x");











let OmniBasePage = class OmniBasePage {
    constructor() {
        this.isPageDisabled = false;
        this.commonProv = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"]);
        this.navigationServices = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].injectionHandler(src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]);
        // this.getScreenTranslations();
    }
    init() {
        this.currentOperID = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID;
        this.customizationMap = this.commonProv.returnOperCustomization();
        const navParams = this.navigationServices.getAllParams();
        const formDisObj = {};
        // let oper = PsCommonSettings.oper_ID;
        // PsCommonSettings.currentListOfSteps = {};
        if (navParams && navParams.readOnlypage === true) {
            formDisObj.IS_READONLY = 1;
            // Modified by Richie for #BUG 1259353
            if (this.customizationMap) {
                this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
            }
        }
        else if (this.customizationMap) {
            formDisObj.IS_READONLY = 0;
            this.customizationMap.set(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY, formDisObj);
        }
        // End Richie
        // AZDB-7529 - Start - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
        this.screenTranslationOperIds = src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER ? src_app_commonSRC_psServices_models_ps_app_settings__WEBPACK_IMPORTED_MODULE_10__["PsApplicationSettings"].MAIN_CONFIG.SCREEN_TRANSLATION_OPER : [];
        if (this.screenTranslationOperIds.length > 0 && this.screenTranslationOperIds.includes(this.currentOperID)) {
            this.getScreenTranslations(this.currentOperID);
        }
        // AZDB-7529 - End - AMANAOI250035 - 201195 - The system is not displaying the correct report name - Dev => Muzammil Arif
    }
    ngOnInit() {
        this.init();
    }
    ionViewDidEnter() {
        this.viewDidEnter();
    }
    ionViewWillLeave() {
        this.viewWillLeave();
    }
    ionViewWillEnter() {
        this.viewWillEnter();
    }
    viewWillEnter() {
    }
    disableForm(formGroup) {
        // Modified by Richie for #BUG 1259353
        if (formGroup !== undefined && this.customizationMap) {
            const formDisObj = this.customizationMap.get(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].FORM_READONLY);
            // End Richie
            if (formDisObj && formDisObj.IS_READONLY === 1 && formGroup.status != 'DISABLED') {
                formGroup.disable();
                Object.keys(formGroup.controls).forEach((key) => {
                    this.commonProv.applyDynScreenDisplay(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].ACTION_TYPE_READONLY, [key], 1);
                });
            }
        }
    }
    viewDidEnter() {
        this.commonProv.checkViewBS.next({ value: true, page: this, didEnter: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, didEnter: true });
        this.commonProv.dismissLoading();
        this.disableForm(this.baseFormGroup);
        src_app_commonSRC_customization_psServices_util_common_cust_utils__WEBPACK_IMPORTED_MODULE_4__["CommonCustUtils"].getAllSessionFcVars(this.baseFormGroup);
        this.commonProv.setFormGroupByOper(this.baseFormGroup); // Added by Zunair For #BUG 1257538
    }
    viewWillLeave() {
        this.commonProv.checkViewBS.next({ value: true, page: this, willLeave: true });
        this.commonProv.setCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID);
        this.commonProv.emitCheckViewByOper(this.currentOperID ? this.currentOperID : src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].oper_ID, { value: true, page: this, willLeave: true });
    }
    // Edited by Salah #1556226 in some cases the fields were being editable in checker so the setTimeout was 
    // added after all the changeEvents are finished to disable the form 
    ngAfterViewChecked() {
        if (!this.isPageDisabled) {
            setTimeout(() => {
                this.disableForm(this.baseFormGroup);
                this.isPageDisabled = true;
            }, 300);
        }
    }
    // AZDB-7529 - Start - AMANAOI250035
    getScreenTranslations(screenOperId) {
        const operationId = screenOperId ? screenOperId : 2222;
        const activeLanguage = src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge ? src_app_commonSRC_psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_6__["PsCommonSettings"].activeLanguge : 'EN';
        if (operationId && activeLanguage) {
            this.commonProv.language.getOperTranslation(activeLanguage, operationId);
        }
    }
};
OmniBasePage.ctorParameters = () => [];
OmniBasePage.propDecorators = {
    psClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class',] }]
};
OmniBasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-omni-base',
        template: _raw_loader_omni_base_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_omni_base_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OmniBasePage);



/***/ }),

/***/ "iumF":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"landmark-icon-main\">\n</div>\n<ps-label class=\"landmark-compass-title\" [options]=\"options.lblOptions\"></ps-label>\n<div class=\"landmark-icon-arrow\">\n\t<ps-action-icon [options]=\"landmarkOptions\" class=\"important-text-color\"></ps-action-icon>\n</div>\n<div class=\"landmark-compass-wrapper\">\n\t<div class=\"compass-background\" [style.transform]=\"'rotate(' + deviceAngle + 'deg)'\">\n\t\t<!-- Compass Directions -->\n\t\t<div class=\"primary-text-color direction direction-n\">\n\t\t\t<ps-label [options]=\"northOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-ne\">\n\t\t\t<ps-label [options]=\"northEastOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"primary-text-color direction direction-e\">\n\t\t\t<ps-label [options]=\"eastOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-se\">\n\t\t\t<ps-label [options]=\"southEastOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"primary-text-color direction direction-s\">\n\t\t\t<ps-label [options]=\"southOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-sw\">\n\t\t\t<ps-label [options]=\"southWestOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"primary-text-color direction direction-w\">\n\t\t\t<ps-label [options]=\"westOptions\"></ps-label>\n\t\t</div>\n\t\t<div class=\"light direction direction-nw\">\n\t\t\t<ps-label [options]=\"northWestOptions\"></ps-label>\n\t\t</div>\n\t\t<!-- Landmark Icon -->\n\t\t<div class=\"landmark-icon-wrapper\">\n\t\t\t<div class=\"primary-text-color direction landmark-compass-icon-arrow\">\n\t\t\t\t<ps-action-icon [options]=\"landmarkArrowOptions\"></ps-action-icon>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"landmark-icon-wrapper\" [ngStyle]=\"{'transform': 'rotateZ('+ landmarkAngle + 'deg)'}\">\n\t\t\t\t<div class=\"landmark-icon\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main-pointing-arrow\">\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t<!-- Landmark Icon -->\n\t\t<!-- <div class=\"landmark-icon-wrapper\" [ngStyle]=\"{'transform': 'rotateZ('+ landmarkAngle + 'deg)'}\">\n\t\t\t\t<div class=\"landmark-icon\" [ngStyle]=\"{'transform': 'translateX(-50%) rotate('+ (-deviceAngle) + 'deg)'}\">\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"landmark-icon-arrow\">\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t<div class=\"main-pointing-arrow direction \">\n\t</div>\n\t</div>\n\t<div class=\"compass-inner-circle\">\n\t\t<!-- <ps-action-icon [options]=\"iconOptions\" class=\"device-pointer\" psIcon *ngIf=\"iconOptions?.iconName\">\n\t\t\t</ps-action-icon> -->\n\t\t<!-- <ion-icon name=\"logo-twitter\" class=\" compass-arrow\" ></ion-icon> -->\n\t</div>\n</div>");

/***/ }),

/***/ "mVVo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/omni-base/omni-base.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "mlJC":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-landmark-compass/ps-complex-landmark-compass.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PsComplexLandmarkCompassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexLandmarkCompassComponent", function() { return PsComplexLandmarkCompassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_landmark_compass_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-landmark-compass.component.html */ "iumF");
/* harmony import */ var _ps_complex_landmark_compass_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-landmark-compass.component.scss */ "Vf1Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psServices_landmark_compass_landmark_compass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psServices/landmark-compass/landmark-compass */ "dI5s");









let PsComplexLandmarkCompassComponent = class PsComplexLandmarkCompassComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonProv, logger, landmarkCompassService) {
        super(commonProv, logger);
        this.commonProv = commonProv;
        this.logger = logger;
        this.landmarkCompassService = landmarkCompassService;
        this.landmarkLoc = {
            latitude: 0,
            longitude: 0
        };
        this.iconOptions = {
            iconName: 'arrow-round-up'
        };
        this.landmarkArrowOptions = {
            iconName: 'compass-arrow',
        };
        this.landmarkOptions = {
            iconName: 'remove',
        };
        this.landmarkFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
    }
    set landmarkLocation(value) {
        this.landmarkLoc = value;
    }
    get landmarkLocation() {
        return this.landmarkLoc;
    }
    ngOnInit() {
        if (this.commonProv.isMobile()) {
            this.landmarkCompassService.subscribe();
        }
        this.northOptions = {
            labelKey: 'north_key',
            fcName: 'north',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate'
        };
        this.northEastOptions = {
            labelKey: 'ne_key',
            fcName: 'northEast',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate coordinates-upcase'
        };
        this.eastOptions = {
            labelKey: 'east_key',
            fcName: 'east',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate'
        };
        this.southEastOptions = {
            labelKey: 'se_key',
            fcName: 'southEast',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate coordinates-upcase'
        };
        this.southOptions = {
            labelKey: 'south_key',
            fcName: 'south',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate'
        };
        this.southWestOptions = {
            labelKey: 'sw_key',
            fcName: 'southWest',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate coordinates-upcase'
        };
        this.westOptions = {
            labelKey: 'west_key',
            fcName: 'west',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate'
        };
        this.northWestOptions = {
            labelKey: 'nw_key',
            fcName: 'northWest',
            group: this.landmarkFormGroup,
            psClass: 'transformRotate coordinates-upcase'
        };
    }
    ngOnDestroy() {
        if (this.commonProv.isNativeMobile()) {
            this.landmarkCompassService.unsubscribe();
        }
    }
    get deviceAngle() {
        if (document.getElementsByClassName('transformRotate')[0] !== undefined) {
            document.getElementsByClassName('transformRotate')[0]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[1]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[2]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[3]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[4]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[5]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[6]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('transformRotate')[7]['style'].transform = 'rotate(' + (this.landmarkCompassService.deviceAngle) + 'deg)';
            document.getElementsByClassName('landmark-compass-icon-arrow')[0]['style'].transform = 'translateX(-50%) rotate(' + ((this.landmarkCompassService.deviceAngle - this.landmarkAngle) + 90) + 'deg)';
            document.getElementsByClassName('landmark-icon-wrapper')[0]['style'].transform = document.getElementsByClassName('transformRotate')[0]['style'].transform;
            document.getElementsByClassName('main-pointing-arrow')[0]['style']['transform-origin'] = 'top bottom';
        }
        return -this.landmarkCompassService.deviceAngle;
    }
    get landmarkAngle() {
        return this.landmarkCompassService.getLandmarkAngle(this.landmarkLocation);
    }
};
PsComplexLandmarkCompassComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _commonSRC_psServices_landmark_compass_landmark_compass__WEBPACK_IMPORTED_MODULE_8__["LandmarkCompassService"] }
];
PsComplexLandmarkCompassComponent.propDecorators = {
    landmarkLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['landmark-location',] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexLandmarkCompassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-landmark-compass',
        template: _raw_loader_ps_complex_landmark_compass_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_landmark_compass_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], _commonSRC_psServices_landmark_compass_landmark_compass__WEBPACK_IMPORTED_MODULE_8__["LandmarkCompassService"]])
], PsComplexLandmarkCompassComponent);



/***/ }),

/***/ "s2T5":
/*!*****************************************************!*\
  !*** ./src/app/pages/omni-base/omni-base.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhc2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-qibla-direction-qibla-direction-module-es2015.js.map