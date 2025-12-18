(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-webview-onboarding-page-webview-onboarding-page-module"],{

/***/ "FZGf":
/*!**********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-webview-container/ps-webview-container.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ps-webview-container-content {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  --background: var(--ion-background-color, #ffffff);\n}\n.ps-webview-container-content .loading-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ps-webview-container-content .loading-container ion-spinner {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 16px;\n  --color: var(--ion-color-primary, #3880ff);\n}\n.ps-webview-container-content .loading-container .loading-text {\n  color: var(--ion-color-medium, #92949c);\n  font-size: 14px;\n  margin: 0;\n}\n.ps-webview-container-content .ps-webview-iframe-wrapper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 1;\n}\n.ps-webview-container-content .ps-webview-iframe {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  height: 100% !important;\n  border: none;\n  z-index: 999;\n}\nion-content .ps-webview-container-content {\n  --padding-bottom: env(safe-area-inset-bottom);\n  --padding-top: env(safe-area-inset-top);\n}\n@supports (-webkit-touch-callout: none) {\n  .ps-webview-iframe {\n    -webkit-overflow-scrolling: touch;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BzLXdlYnZpZXctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBQ047QUFFSTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFBTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGSjtBQU1BO0VBQ0UsNkJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUpGO0FBUUE7RUFDRSw2Q0FBQTtFQUNBLHVDQUFBO0FBTEY7QUFRQTtFQUNFO0lBQ0UsaUNBQUE7RUFMRjtBQUNGIiwiZmlsZSI6InBzLXdlYnZpZXctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBzLXdlYnZpZXctY29udGFpbmVyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcblxuICAubG9hZGluZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xuICAgIH1cblxuICAgIC5sb2FkaW5nLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5Mjk0OWMpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5wcy13ZWJ2aWV3LWlmcmFtZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuXG4ucHMtd2Vidmlldy1pZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgei1pbmRleDogOTk5O1xufVxufVxuXG5pb24tY29udGVudCAucHMtd2Vidmlldy1jb250YWluZXItY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgLS1wYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xufVxuXG5Ac3VwcG9ydHMgKC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSkge1xuICAucHMtd2Vidmlldy1pZnJhbWUge1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxufVxuICJdfQ== */");

/***/ }),

/***/ "QmjH":
/*!********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-webview-container/ps-webview-container.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PsWebviewContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsWebviewContainerComponent", function() { return PsWebviewContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_webview_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-webview-container.component.html */ "lqSM");
/* harmony import */ var _ps_webview_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-webview-container.component.scss */ "FZGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/navigator/ps-navigator.service */ "woXy");








let PsWebviewContainerComponent = class PsWebviewContainerComponent {
    constructor(commonService, logger, sanitizer, nav) {
        this.commonService = commonService;
        this.logger = logger;
        this.sanitizer = sanitizer;
        this.nav = nav;
        this.options = {};
        this.loadComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loadError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.backButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.safeUrl = null;
        this.isLoading = true;
        this.hasError = false;
        this.webUrlIsSet = false;
        this.errorMessageKey = 'error_loading_content_key';
    }
    /* ================================
     *  INIT
     * ================================ */
    ngOnInit() {
        var _a, _b;
        console.log('[WebView] ngOnInit');
        const isMobile = this.commonService.isMobile();
        console.log('[WebView] isMobile:', isMobile);
        console.log('[WebView] Options:', this.options);
        console.log('[WebView] cordova:', window.cordova);
        console.log('[WebView] InAppBrowser plugin:', (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.cordova) === null || _b === void 0 ? void 0 : _b.InAppBrowser);
        if (isMobile) {
            this.initInAppBrowser();
            return;
        }
        this.initIframe();
    }
    /* ================================
     *  WEB (IFRAME)
     * ================================ */
    initIframe() {
        var _a, _b, _c;
        console.log('[WebView] initIframe');
        const url = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.trim();
        this.pageTitle = (_c = this.options) === null || _c === void 0 ? void 0 : _c.pageTitle;
        console.log('[WebView] iframe URL:', url);
        if (!url) {
            console.error('[WebView] No URL provided for iframe');
            this.onLoadError({ reason: 'NO_URL' });
            return;
        }
        try {
            this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            console.log('[WebView] URL sanitized');
            setTimeout(() => {
                this.webUrlIsSet = true;
                console.log('[WebView] webUrlIsSet = true');
            }, 300);
        }
        catch (err) {
            console.error('[WebView] Sanitizer error', err);
            this.onLoadError({ reason: 'SANITIZER_ERROR', err });
        }
    }
    onIframeLoad() {
        console.log('[WebView] iframe load success');
        this.isLoading = false;
        this.loadComplete.emit();
    }
    /* ================================
     *  MOBILE (INAPPBROWSER)
     * ================================ */
    initInAppBrowser() {
        var _a, _b;
        console.log('[WebView] initInAppBrowser START');
        const url = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.trim();
        console.log('[WebView] InAppBrowser URL:', url);
        if (!url) {
            console.error('[WebView] No URL provided for InAppBrowser');
            this.onLoadError({ reason: 'NO_URL' });
            return;
        }
        if (!window.cordova) {
            console.error('[WebView] Cordova not available – running in browser');
            this.onLoadError({ reason: 'CORDOVA_NOT_AVAILABLE' });
            return;
        }
        let browser;
        try {
            console.log('[WebView] BEFORE create()');
            browser = this.commonService.inAppBrowser.create(url, '_blank', 'location=yes');
            console.log('[WebView] AFTER create()', browser);
        }
        catch (e) {
            console.error('[WebView] ERROR during create()', e);
            this.onLoadError({ reason: 'CREATE_FAILED', error: e });
            return;
        }
        try {
            console.log('[WebView] BEFORE show()');
            browser.show();
            console.log('[WebView] AFTER show()');
        }
        catch (e) {
            console.error('[WebView] ERROR during show()', e);
            this.onLoadError({ reason: 'SHOW_FAILED', error: e });
            return;
        }
        this.registerBrowserEvents(browser);
    }
    registerBrowserEvents(browser) {
        console.log('[WebView] Registering InAppBrowser events');
        browser.on('loadstart').subscribe(event => {
            console.log('[WebView] loadstart:', event);
        });
        browser.on('beforeload').subscribe(event => {
            console.log('[WebView] beforeload:', event);
        });
        browser.on('loadstop').subscribe(event => {
            console.log('[WebView] loadstop:', event);
            this.isLoading = false;
            this.loadComplete.emit();
        });
        browser.on('loaderror').subscribe(error => {
            console.error('[WebView] loaderror:', error);
            this.onLoadError(error);
        });
        browser.on('message').subscribe(event => {
            console.log('[WebView] message:', event);
        });
        browser.on('exit').subscribe(() => {
            console.log('[WebView] exit event');
            this.closeWebView();
        });
    }
    /* ================================
     *  ERROR / CLOSE
     * ================================ */
    onLoadError(event) {
        console.error('[WebView] onLoadError', event);
        this.isLoading = false;
        this.hasError = true;
        this.loadError.emit(event);
    }
    closeWebView() {
        console.log('[WebView] closeWebView');
        this.nav.navigateBackward();
    }
};
PsWebviewContainerComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"] }
];
PsWebviewContainerComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    loadComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    loadError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    backButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsWebviewContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-webview-container',
        template: _raw_loader_ps_webview_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_webview_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
        src_app_commonSRC_psServices_navigator_ps_navigator_service__WEBPACK_IMPORTED_MODULE_7__["PsNavigatorService"]])
], PsWebviewContainerComponent);



/***/ }),

/***/ "SSCU":
/*!***************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-webview-container/ps-webview-container.component.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PsWebViewContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsWebViewContainerComponentModule", function() { return PsWebViewContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_webview_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-webview-container.component */ "QmjH");





let PsWebViewContainerComponentModule = class PsWebViewContainerComponentModule {
};
PsWebViewContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_webview_container_component__WEBPACK_IMPORTED_MODULE_4__["PsWebviewContainerComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_webview_container_component__WEBPACK_IMPORTED_MODULE_4__["PsWebviewContainerComponent"]
        ],
        entryComponents: [
            _ps_webview_container_component__WEBPACK_IMPORTED_MODULE_4__["PsWebviewContainerComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsWebViewContainerComponentModule);



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

/***/ "hECL":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/webview-onboarding-page/webview-onboarding-page.module.ts ***!
  \*********************************************************************************/
/*! exports provided: WebviewOnboardingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebviewOnboardingPagePageModule", function() { return WebviewOnboardingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _webview_onboarding_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webview-onboarding-page-routing.module */ "8H5k");
/* harmony import */ var _webview_onboarding_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webview-onboarding-page.page */ "iRyL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_webview_container_ps_webview_container_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-webview-container/ps-webview-container.component.module */ "SSCU");








let WebviewOnboardingPagePageModule = class WebviewOnboardingPagePageModule {
};
WebviewOnboardingPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _webview_onboarding_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["WebviewOnboardingPagePageRoutingModule"],
            src_app_commonBussinessSRC_psComponents_ps_webview_container_ps_webview_container_component_module__WEBPACK_IMPORTED_MODULE_7__["PsWebViewContainerComponentModule"]
        ],
        declarations: [_webview_onboarding_page_page__WEBPACK_IMPORTED_MODULE_6__["WebviewOnboardingPagePage"]]
    })
], WebviewOnboardingPagePageModule);



/***/ }),

/***/ "lqSM":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-webview-container/ps-webview-container.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeWebView()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ pageTitle | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ps-webview-container-content\">\n  <div class=\"ps-webview-iframe-wrapper\">\n    <iframe #webviewIframe [src]=\"safeUrl\" *ngIf=\"webUrlIsSet\" (load)=\"onIframeLoad()\" class=\"ps-webview-iframe\"\n      frameBorder=\"0\" allowfullscreen>\n    </iframe>\n  </div>\n</ion-content>");

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
//# sourceMappingURL=pages-webview-onboarding-page-webview-onboarding-page-module-es2015.js.map