(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "6ckw":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "spzo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../omni-base/omni-base.page */ "gKqT");
/* harmony import */ var src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");












let DashboardPage = class DashboardPage extends _omni_base_omni_base_page__WEBPACK_IMPORTED_MODULE_6__["OmniBasePage"] {
    constructor(commonService, omniPull, logger, viewportRuler) {
        super();
        this.commonService = commonService;
        this.omniPull = omniPull;
        this.logger = logger;
        this.viewportRuler = viewportRuler;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.templateViewOptions = {
            group: this.formGroup,
            disableLoading: true
        };
        this.spinner = false;
        this.unAddedUserWidgets = []; // will contain the unadded available widgets within the dashboard
        this.userWidgets = []; // will contain the already added widgets within the dashboard
        this.currentLayout = 'rows';
        this.dropListOrientation = 'vertical';
        this.cdkDropListConnectedTo = ['userWidgets'];
        this.cdkDragLockAxis = 'y';
        this.showAvailableWidgets = false;
        this.unusedWidgetsPanelOpts = {
            isExpandable: true,
            labelKey: 'choose_your_widget_key',
            iconName: 'document',
            collapseIconName: 'close',
            expanded: true
        };
        this.dropHereLabel = {
            labelKey: 'drop_widget_here_key',
        };
        this.addWidgetIconOptions = {
            iconName: 'add',
            labelOptions: {
                labelKey: 'Click_here_to_add_widgets_key'
            },
            allowCust: true
        };
        this.actionImageOptions = {
            imageName: src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].getCssVariableValue('--ps-loader-image-name')
        };
        this.layoutIconOptions = [{
                iconName: 'rows-layout-icon',
                allowCust: true,
                handler: () => { this.onLayoutChange('rows'); }
            },
            {
                iconName: 'columns-layout-icon',
                allowCust: true,
                handler: () => { this.onLayoutChange('columns'); }
            }, {
                iconName: 'grid-layout-icon',
                allowCust: true,
                handler: () => { this.onLayoutChange('grid'); }
            }];
        this.dragWidgetIcon = {
            iconName: 'drag-icon',
            allowCust: true
        };
        this.dropListEnterPredicate = (drag, drop) => {
            if (drop == this.placeholder)
                return true;
            if (drag.data) {
                const widgetIndex = this.unAddedUserWidgets.findIndex(widget => widget.widgetCode === drag.data.widgetCode);
                return widgetIndex != -1 ? true : false;
            }
        };
    }
    ngOnInit() {
        super.init();
        this.isMobile = this.commonProv.isMobile();
        let userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO);
        if (!this.isMobile) {
            const dashboardLayout = (userInfo === null || userInfo === void 0 ? void 0 : userInfo.omniUserVO) && userInfo.omniUserVO.DASHBOARD_LAYOUT ? userInfo.omniUserVO.DASHBOARD_LAYOUT : this.currentLayout;
            if (dashboardLayout !== this.currentLayout) {
                this.changeCurrentLayout(dashboardLayout);
            }
        }
        this.returnWidgetDetails();
    }
    returnWidgetDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fetchedWidgets = [];
            this.spinner = true;
            const result = yield this.omniPull.returnWidgetDetails().catch(error => {
                this.spinner = false;
                this.logger.error('Error: While fetching dashboard widgets in DashboardPage :', error);
            });
            this.spinner = false;
            if (result && result.widgets && result.widgets.length > 0) {
                fetchedWidgets = this.populateDashbordWidgets(result.widgets);
            }
            const { userWidgets, unusedWidgets } = this.categorizeWidgets(fetchedWidgets);
            this.unAddedUserWidgets = unusedWidgets;
            this.userWidgets = this.sortWidgetsByOrder(userWidgets);
            if (this.currentLayout == 'grid') {
                this.cdkDropListConnectedTo = this.generateCdkDropListConnectedTo();
            }
        });
    }
    populateDashbordWidgets(requestData) {
        let fetchedWidgets = [];
        for (const iterator of requestData) {
            const widget = {
                widgetCode: iterator.widgetCode,
                widgetId: iterator.widgetId,
                widgetHeaderName: iterator.headerName,
                widgetTitle: iterator.label,
                widgetReportId: iterator.idReport,
                widgetReportType: iterator.type,
                linkedOperation: iterator.linkedOper,
                widgetIconName: this.getWidgetIconName(iterator.type),
                widgetOrder: iterator.widgetOrder,
            };
            fetchedWidgets.push(widget);
        }
        return fetchedWidgets;
    }
    categorizeWidgets(widgets) {
        return widgets.reduce((result, widget) => {
            if (widget.widgetOrder !== undefined && widget.widgetOrder !== null) {
                result.userWidgets.push(widget);
            }
            else {
                result.unusedWidgets.push(widget);
            }
            return result;
        }, { userWidgets: [], unusedWidgets: [] });
    }
    sortWidgetsByOrder(userWidgets) {
        return userWidgets.sort((a, b) => a.widgetOrder - b.widgetOrder);
    }
    removeWidgetConfirmationPopup(widgetCode) {
        let buttonsObject = [
            {
                type: 'reset',
                group: this.formGroup,
                labelKey: 'cancel_key',
                handler: () => {
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                }
            },
            {
                group: this.formGroup,
                labelKey: 'ok_key',
                type: 'submit',
                handler: () => {
                    this.removeWidget(widgetCode);
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                }
            }
        ];
        src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentInfoAlert(this.commonProv.translate('are_you_sure_?_key'), { buttonsArray: buttonsObject });
    }
    removeWidget(widgetCode) {
        if (widgetCode) {
            let removedWidget = {};
            const widgetIndex = this.userWidgets.findIndex(widget => widget.widgetCode === widgetCode);
            if (widgetIndex !== -1) {
                removedWidget = this.userWidgets.splice(widgetIndex, 1);
            }
            this.unAddedUserWidgets.push(removedWidget[0]);
            this.saveDashboardPersonalization();
        }
    }
    saveDashboardPersonalization(layout) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.commonProv.presentLoading();
                const widgetsArray = this.assignWidgetsOrder(this.userWidgets);
                let params = Object.assign(Object.assign({ widgetsArray }, (widgetsArray.length === 0 && !layout && { isDashboardEmpty: 'Y' })), (layout && { dashboardLayout: layout, widgetsArray: [] }));
                this.omniPull.saveDashboardPersonalization(params).then((result) => {
                    resolve(true);
                }).catch(error => {
                    src_app_commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentFatalAlert(this.commonProv.translate('dashboard_saving_personalization_error'));
                    this.logger.error('Error: While saving dashboard widgets personalization:', error);
                    reject(false);
                }).finally(() => {
                    this.commonProv.dismissLoading();
                });
            });
        });
    }
    assignWidgetsOrder(widgets) {
        return widgets.map((widget, index) => ({
            widgetCode: widget.widgetCode,
            widgetId: widget.widgetId,
            widgetOrder: index,
        }));
    }
    onLayoutChange(layout) {
        this.changeCurrentLayout(layout);
        setTimeout(() => {
            this.commonProv.chartResizeSubject.next(true);
        }, 0);
        this.saveDashboardPersonalization(layout).then((result) => {
            if (result) {
                this.updateLayoutFromSession(layout);
            }
        });
    }
    resizeWidgetChart() {
        setTimeout(() => {
            this.commonProv.chartResizeSubject.next(true);
        }, 0);
    }
    changeCurrentLayout(layout) {
        switch (layout) {
            case 'columns':
                this.cdkDragLockAxis = 'x';
                this.dropListOrientation = 'horizontal';
                this.currentLayout = 'columns';
                this.cdkDropListConnectedTo = ['userWidgets'];
                break;
            case 'rows':
                this.cdkDragLockAxis = 'y';
                this.dropListOrientation = 'vertical';
                this.currentLayout = 'rows';
                this.cdkDropListConnectedTo = ['userWidgets'];
                break;
            case 'grid':
                this.currentLayout = 'grid';
                setTimeout(() => {
                    this.removePlaceHolder();
                }, 0);
                this.cdkDropListConnectedTo = this.generateCdkDropListConnectedTo();
                break;
            default:
                break;
        }
    }
    generateCdkDropListConnectedTo() {
        return this.userWidgets.length > 0
            ? this.userWidgets.map((_, index) => `userWidgets-${index}`)
            : ['userWidgets-0'];
    }
    updateLayoutFromSession(layout) {
        const userInfo = this.commonProv.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO);
        if (userInfo === null || userInfo === void 0 ? void 0 : userInfo.omniUserVO) {
            userInfo.omniUserVO.DASHBOARD_LAYOUT = layout;
            this.commonProv.session.append(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_5__["ConstantCommon"].USERINFO, userInfo);
        }
    }
    showHideWidgetsPanel(event) {
        this.showAvailableWidgets = event;
        if (event) {
            this.unusedWidgetsPanelOpts.expanded = true;
        }
    }
    getWidgetIconName(reportType) {
        switch (reportType) {
            case 'DR':
                return 'bookmark';
            case 'PA':
                return 'document';
            case 'P':
                return 'document';
            case 'PC':
                return 'pie-chart';
            case 'DC':
                return 'doughnut-chart';
            case 'LC':
                return 'line-chart';
            case 'BC':
                return 'bar-chart';
            case 'AC':
                return 'area-chart';
            case 'L':
                return 'list';
            default:
                return '';
        }
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.userWidgets, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.resizeWidgetChart();
        this.saveDashboardPersonalization();
    }
    ngAfterViewInit() {
        if (this.currentLayout === 'grid') {
            this.removePlaceHolder();
        }
    }
    dragMoved(e) {
        let point = this.getPointerPositionOnPage(e.event);
        this.autoScroll(point.x, point.y);
        this.listGroup._items.forEach((dropList) => {
            if (__isInsideDropListClientRect(dropList, point.x, point.y) && e.source.dropContainer != dropList) {
                if (this.activeContainer != dropList) {
                    this.dropListEntered(e.source, dropList);
                }
                return;
            }
        });
    }
    autoScroll(pointX, pointY) {
        const container = this.container.nativeElement;
        const rect = container.getBoundingClientRect();
        const scrollSpeed = 10;
        clearInterval(this.autoScrollInterval);
        if (pointY < rect.top + 20) {
            this.autoScrollInterval = setInterval(() => {
                container.scrollBy(0, -scrollSpeed);
            }, 16);
        }
        else if (pointY > rect.bottom - 20) {
            this.autoScrollInterval = setInterval(() => {
                container.scrollBy(0, scrollSpeed);
            }, 16);
        }
        else if (pointX < rect.left + 20) {
            this.autoScrollInterval = setInterval(() => {
                container.scrollBy(-scrollSpeed, 0);
            }, 16);
        }
        else if (pointX > rect.right - 20) {
            this.autoScrollInterval = setInterval(() => {
                container.scrollBy(scrollSpeed, 0);
            }, 16);
        }
    }
    dropListEntered(drag, dropList) {
        var _a, _b, _c, _d, _e;
        const sourceElement = drag.dropContainer;
        const dropElement = dropList;
        this.activeContainer = dropList;
        if (!sourceElement || !dropElement) {
            console.warn('Source or Drop element is not defined.');
            return;
        }
        if (dropElement === this.placeholder) {
            return; // Exit if the placeholder is the drop container
        }
        const phElement = (_b = (_a = this.placeholder) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.nativeElement;
        const sourceNativeElement = sourceElement.element.nativeElement;
        const dropNativeElement = dropElement.element.nativeElement;
        if (!phElement || !sourceNativeElement || !dropNativeElement) {
            console.warn('One of the required elements (placeholder, source, or drop) is missing.');
            return;
        }
        const parentChildren = Array.from(((_c = dropNativeElement.parentElement) === null || _c === void 0 ? void 0 : _c.children) || []);
        const dragIndex = parentChildren.indexOf(this.source ? phElement : sourceNativeElement);
        const dropIndex = parentChildren.indexOf(dropNativeElement);
        if (!this.source) {
            // Initialize the source element and set placeholder dimensions
            this.sourceIndex = dragIndex;
            this.source = sourceElement;
            phElement.style.width = `${sourceNativeElement.clientWidth}px`;
            phElement.style.height = `${sourceNativeElement.clientHeight}px`;
            // Safely remove the source element
            (_d = sourceNativeElement.parentElement) === null || _d === void 0 ? void 0 : _d.removeChild(sourceNativeElement);
        }
        // Update target index for drop
        this.targetIndex = dropIndex !== -1 ? dropIndex : null;
        phElement.style.display = '';
        // Insert placeholder into the correct position
        (_e = dropNativeElement.parentElement) === null || _e === void 0 ? void 0 : _e.insertBefore(phElement, dropIndex > dragIndex ? dropNativeElement.nextSibling : dropNativeElement);
        // Allow placeholder to accept drag reference
        if (this.placeholder._dropListRef && drag._dragRef) {
            this.placeholder._dropListRef.enter(drag._dragRef, sourceNativeElement.offsetLeft, sourceNativeElement.offsetTop);
        }
        else {
            console.warn('Placeholder DropListRef or DragRef is not initialized.');
        }
    }
    dropListDropped(event) {
        var _a;
        if (this.activeContainer) {
            let phElement = this.placeholder.element.nativeElement;
            let parent = phElement.parentElement;
            phElement.style.display = 'none';
            parent.removeChild(phElement);
            parent.appendChild(phElement);
            parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        }
        if (this.sourceIndex !== null && this.targetIndex !== null && this.sourceIndex !== this.targetIndex) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.userWidgets, this.sourceIndex, this.targetIndex);
        }
        else if (event.previousContainer !== event.container) {
            const parentChildren = Array.from(((_a = event.container.element.nativeElement.parentElement) === null || _a === void 0 ? void 0 : _a.children) || []);
            const dropIndex = parentChildren.indexOf(event.container.element.nativeElement);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, dropIndex);
            this.cdkDropListConnectedTo = this.generateCdkDropListConnectedTo();
        }
        this.resizeWidgetChart();
        this.resetState();
        this.saveDashboardPersonalization();
    }
    resetState() {
        this.sourceIndex = null;
        this.targetIndex = null;
        this.source = null;
        this.activeContainer = null;
        clearInterval(this.autoScrollInterval);
    }
    removePlaceHolder() {
        let phElement = this.placeholder.element.nativeElement;
        phElement.style.display = 'none';
        phElement.parentElement.removeChild(phElement);
    }
    getPointerPositionOnPage(event) {
        const point = __isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top,
        };
    }
};
DashboardPage.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"] }
];
DashboardPage.propDecorators = {
    listGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["CdkDropListGroup"],] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['placeholder', { static: false, read: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["CdkDropList"] },] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['container',] }]
};
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'dashboard-page',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_10__["LoggerService"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]])
], DashboardPage);

function __isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function __isInsideDropListClientRect(dropList, x, y) {
    const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
    return y >= top && y <= bottom && x >= left && x <= right;
}


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

/***/ }),

/***/ "spzo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-view [options]=\"templateViewOptions\" id=\"main1\">\n\t<ps-action-image class=\"inline-loading-image\" *ngIf=\"spinner\" [options]=\"actionImageOptions\">\n\t</ps-action-image>\n\t<div class=\"dashboard-action-buttons\">\n\t\t<ps-action-icon [options]=\"addWidgetIconOptions\" (onClick)=\"showHideWidgetsPanel('true')\"\n\t\t\t*ngIf=\"!showAvailableWidgets && unAddedUserWidgets.length\" class=\"material-icons add-widegt-btn\">\n\t\t</ps-action-icon>\n\t\t<div *ngIf='!isMobile' class=\"dashboard-layout-container\">\n\t\t\t<ps-label class=\"choose_web_layout_label\" [options]=\"{labelKey:'choose_web_layout_key'}\"></ps-label>\n\t\t\t<div class=\"dashboard-layout-buttons\">\n\t\t\t\t<ng-container *ngFor=\"let layoutIcon of layoutIconOptions; let i = index\">\n\t\t\t\t\t<ps-action-icon [options]=\"layoutIcon\" (onClick)=\"layoutIcon.handler()\"\n\t\t\t\t\t\tclass=\"material-icons dashboard-layout-icon\"\n\t\t\t\t\t\t[class]=\"layoutIcon.iconName + '-btn'\"></ps-action-icon>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"dashboard-unused-widgets-container\" *ngIf=\"showAvailableWidgets && unAddedUserWidgets.length\">\n\t\t<ps-container-panel id=\"available-widgets-panel\" [options]=\"unusedWidgetsPanelOpts\"\n\t\t\t(panelToggleEvent)=\"showHideWidgetsPanel($event)\">\n\t\t\t<ng-container *ngIf=\"unAddedUserWidgets?.length > 0\">\n\t\t\t\t<div class=\"dashboard-available-widgets-container\" cdkDropList\n\t\t\t\t\t[cdkDropListConnectedTo]=\"cdkDropListConnectedTo\" [cdkDropListData]=\"unAddedUserWidgets\">\n\t\t\t\t\t<ng-container *ngFor=\"let widget of unAddedUserWidgets; let i = index\">\n\t\t\t\t\t\t<div class=\"widget-item-wrapper\" cdkDrag [cdkDragData]=\"widget\">\n\t\t\t\t\t\t\t<ion-item class=\"ps-pointer widget-item\">\n\t\t\t\t\t\t\t\t<div class=\"widget-item-actions_wrapper\">\n\t\t\t\t\t\t\t\t\t<div cdkDragHandle class=\"widget-item-label-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<ps-action-icon [id]=\"'dashboard-widget-' + i\"\n\t\t\t\t\t\t\t\t\t\t\t[options]=\"{iconName: widget.widgetIconName}\" class=\"material-icons\">\n\t\t\t\t\t\t\t\t\t\t</ps-action-icon>\n\t\t\t\t\t\t\t\t\t\t<ps-label class=\"widget-item-label-desc\"\n\t\t\t\t\t\t\t\t\t\t\t[options]=\"{labelKey:widget.widgetHeaderName}\"></ps-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</ps-container-panel>\n\t</div>\n\n\t<div *ngIf=\"currentLayout != 'grid'\" id='userWidgets' class=\"dashboard-user-widgets-container\" [ngClass]=\"{\n   'user-widgets-column-layout': currentLayout === 'columns',\n   'user-widgets-row-layout': currentLayout === 'rows'}\" cdkDropList (cdkDropListDropped)=\"drop($event)\"\n\t\t[cdkDropListData]=\"userWidgets\" [cdkDropListOrientation]=\"dropListOrientation\">\n\t\t<ng-container *ngFor=\"let itemOption of userWidgets\">\n\t\t\t<div cdkDrag [cdkDragLockAxis]=\"cdkDragLockAxis\" class=\"widget-container-box\"\n\t\t\t\t[class]=\"currentLayout + '-widget-card-container'\"\n\t\t\t\t[ngClass]=\"'widget-card-type-' + itemOption?.widgetReportType\">\n\t\t\t\t<ps-container-widget-card [options]=\"itemOption\"\n\t\t\t\t\t(onRemoveWidget)=\"removeWidgetConfirmationPopup($event)\">\n\t\t\t\t\t<ps-action-icon dragIcon cdkDragHandle [id]=\"'drag-widget-handle-icon'\" [options]=\"dragWidgetIcon\"\n\t\t\t\t\t\tclass=\"material-icons drag-widget-handle-btn\">\n\t\t\t\t\t</ps-action-icon>\n\t\t\t\t</ps-container-widget-card>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ps-label *ngIf=\"userWidgets.length == 0\" [options]=\"dropHereLabel\" class=\"empty-widgets-label\"></ps-label>\n\t</div>\n\t<div cdkDropListGroup #container *ngIf=\"currentLayout === 'grid'\" class=\"user-widgets-grid-layout\"\n\t\t[ngClass]=\"{'empty-user-widgets-list': !userWidgets.length}\">\n\t\t<div #placeholder cdkDropList [cdkDropListData]=\"userWidgets\"\n\t\t\t[cdkDropListEnterPredicate]=\"dropListEnterPredicate\" (cdkDropListDropped)=\"dropListDropped($event)\"></div>\n\t\t<div cdkDropList [cdkDropListEnterPredicate]=\"dropListEnterPredicate\"\n\t\t\t(cdkDropListDropped)=\"dropListDropped($event)\" class=\"drop-list-widget\"\n\t\t\t*ngFor=\"let itemOption of userWidgets; index as i\" [cdkDropListData]=\"userWidgets\"\n\t\t\t[id]=\"'userWidgets-' + i\">\n\t\t\t<div cdkDrag (cdkDragMoved)=\"dragMoved($event);\" class=\"widget-container-box\"\n\t\t\t\t[class]=\"currentLayout + '-widget-card-container'\"\n\t\t\t\t[ngClass]=\"'widget-card-type-' + itemOption?.widgetReportType\">\n\t\t\t\t<ps-container-widget-card [id]=\"'ps-widget-container-lookup_' + i\" [options]=\"itemOption\"\n\t\t\t\t\t(onRemoveWidget)=\"removeWidgetConfirmationPopup($event)\">\n\t\t\t\t\t<ps-action-icon dragIcon cdkDragHandle [id]=\"'drag-widget-handle-icon'\" [options]=\"dragWidgetIcon\"\n\t\t\t\t\t\tclass=\"material-icons drag-widget-handle-btn\"></ps-action-icon>\n\t\t\t\t</ps-container-widget-card>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"userWidgets-0\" *ngIf=\"userWidgets.length == 0\" class=\"grid-placeholder-droplist\"\n\t\t\t[cdkDropListData]=\"userWidgets\" cdkDropList (cdkDropListDropped)=\"dropListDropped($event)\">\n\t\t\t<ps-label [options]=\"dropHereLabel\" class=\"empty-widgets-label\"></ps-label>\n\t\t</div>\n\t</div>\n</ps-template-view>");

/***/ })

}]);
//# sourceMappingURL=66-es2015.js.map