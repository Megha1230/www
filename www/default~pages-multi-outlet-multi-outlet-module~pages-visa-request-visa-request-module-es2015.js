(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-multi-outlet-multi-outlet-module~pages-visa-request-visa-request-module"],{

/***/ "+lUH":
/*!*********************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS1tdWx0aS1vdXRsZXRzLnRlbXBsYXRlLnNjc3MifQ== */");

/***/ }),

/***/ "HEGf":
/*!*******************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PsTemplateMultiOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateMultiOutletComponent", function() { return PsTemplateMultiOutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_template_multi_outlets_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-template-multi-outlets.template.html */ "pXmH");
/* harmony import */ var _ps_template_multi_outlets_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-template-multi-outlets.template.scss */ "+lUH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/models/common-constant */ "zngb");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../psServices/models/ps-common.settings */ "QZhd");
/* harmony import */ var _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.page */ "uqA0");











let PsTemplateMultiOutletComponent = class PsTemplateMultiOutletComponent extends _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_10__["PsTemplateBasePage"] {
    constructor(commonService, logger, componentFactoryResolver) {
        super();
        this.commonService = commonService;
        this.logger = logger;
        this.componentFactoryResolver = componentFactoryResolver;
        this.MultiOutletPageRequestVO = {};
        this.varaibJson = {};
        this.showTemplate = false;
        this.options = {
            stepperName: 'multi_outlet_page_stepper',
            numberOfSteps: 1,
            requestObject: this.MultiOutletPageRequestVO,
            isHorizontalStepper: true,
            hideStepper: false,
            namesofSteps: ['multiOutletStep1'],
            isMultiple: true,
        };
        this.showSegments = [false, false, false, false, false, false, false, false, false, false];
        this.segmentList = [
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
            { segmentName: '', segmentActive: false, segmentStatus: 'empty' },
        ];
        this.segmentOptions = {
            segmentList: [],
            defaultSegment: {},
            isMultiOutlet: true,
            fcName: 'segmentsOutlet',
        };
        this.standardOptions = {
            labelKey: 'add_new_segment_key',
            allowCust: false,
            iconName: 'add-circle'
        };
        this.standardOptions2 = {
            labelKey: 'remove_segment_key',
            allowCust: false,
            iconName: 'trash'
        };
        this.dynamicOptions = {};
        this.index = 0;
        this.refConfirm = [];
        this.menuArray = [];
        this.previewObject = {};
        this.segmentInit = false;
        this.previewData = [];
        this.showButtons = true;
        this.previewMode = false;
        this.factoryReferenceArray = [];
    }
    ngOnInit() {
        this.options.group = this.outletOptions.group;
        this.options.submitOptions = {
            submitServiceUrl: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].serviceUrl.multipleActionSubmit,
            group: this.options.group,
            preCallFunction: {
                func(response) {
                    return new Promise((resolve, reject) => {
                        resolve(this.executionClass.preCallFunction(response));
                    });
                },
                params: [this],
                executionClass: this
            },
            postCallFunction: {
                func(response) {
                    return new Promise((resolve, reject) => {
                        resolve(this.executionClass.postSubmitFunction(response));
                    });
                },
                params: [this],
                executionClass: this
            },
        };
        this.segmentOptions.group = this.options.group;
        this.commonProv.setFormData(this.options.group, this.MultiOutletPageRequestVO);
        this.options.type = this.outletOptions.type;
        this.showTemplate = true;
        // autobind function specific to the multi template where if there is data inside the navParams to be loaded then a differenct function is run for the data to be loaded one by one
        // as for each page to be loaded there is supposed ot be a different oeprationID
        let navParams = this.navService.getAllParams();
        if (JSON.stringify(navParams.ScreenVO) && JSON.stringify(navParams.ScreenVO) != '{}' && navParams.ScreenVO != undefined && navParams.ScreenVO != null) {
            this.autoLoadData(navParams.ScreenVO);
        }
        else {
            this.addNewOutlet();
        }
        if (this.outletOptions.segmentNameUpdate) {
            this.options.group.valueChanges.subscribe(val => {
                // loop on object keys of formgroup to check if the transfer- title or key is available
                Object.keys(val).forEach(element => {
                    if (element.match(this.outletOptions.segmentName)) {
                        if (val[element][this.outletOptions.segmentNameMap.key]) {
                            this.changeSegmentLabel(element, val[element][this.outletOptions.segmentNameMap.key][this.outletOptions.segmentNameMap.value]);
                        }
                    }
                });
            });
        }
    }
    changeSegmentLabel(segmentVal, newSegmentLabel) {
        for (let i = 0; i < this.segmentOptions.segmentList.length; i++) {
            if (this.segmentOptions.segmentList[i].itemValue === segmentVal) {
                this.segmentOptions.segmentList[i].description = newSegmentLabel;
            }
        }
    }
    draftData(draftData) {
        this.autoLoadData(draftData.requestObject);
    }
    autoLoadData(navData) {
        for (let i = 1; i <= 10; i++) {
            if (i === 1) {
                setTimeout(() => {
                    if (navData[this.outletOptions.segmentName + i] && navData[this.outletOptions.segmentName + i] != undefined) {
                        this.selectDropValue = navData[this.outletOptions.segmentName + i].operId;
                        this.MultiOutletPageRequestVO[this.outletOptions.segmentName + i] = navData[this.outletOptions.segmentName + i].submitFieldValueMap;
                        this.addNewSegment(true);
                    }
                }, 500);
            }
            else {
                setTimeout(() => {
                    if (navData[this.outletOptions.segmentName + i] && navData[this.outletOptions.segmentName + i] != undefined) {
                        this.selectDropValue = navData[this.outletOptions.segmentName + i].operId;
                        this.MultiOutletPageRequestVO[this.outletOptions.segmentName + i] = navData[this.outletOptions.segmentName + i].submitFieldValueMap;
                        this.addNewSegment(true);
                    }
                }, 2000);
            }
        }
    }
    ngAfterViewInit() {
        if (this.index >= 1) {
            setTimeout(() => {
                // required becasue without this the loaded the component does not show
                this.addDynamicCompOrPage();
            }, 500);
        }
    }
    // event absed onclick on segment component
    onClickSegment(ev) {
        if (ev !== undefined) {
            this.currentSegment = ev;
            this.setActiveSegment();
        }
    }
    // show or hide the activated segment based on the event onclick of segment
    setActiveSegment() {
        this.segmentList.forEach(each => {
            if (each.segmentName === this.currentSegment) {
                each.segmentActive = true;
            }
            else {
                each.segmentActive = false;
            }
        });
        if (this.index >= 10) {
            this.showButtons = false;
        }
    }
    // event triggered when the next button on stepper template
    nextButtonCLicked(event) {
        if (event._selectedIndex > 1) {
            this.refConfirm.forEach(item => {
                if (this.options.group.contains(item.control)) {
                    this.commonProv.previewMode(this.options.group.get(item.control));
                }
                this.previewMode = true;
            });
            _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = this.outletOptions.operID;
        }
        else {
            this.refConfirm.forEach(item => {
                if (this.options.group.contains(item.control)) {
                    this.commonProv.editMode(this.options.group.get(item.control));
                }
            });
            this.previewMode = false;
        }
    }
    // to be run incase there are precall functions present inside the pages loaded onto dynamic loader
    preCallFunction(params) {
        params = {};
        this.refConfirm.forEach(item => {
            if (this.options.group.contains(item.control)) {
                if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_PAGE) {
                    this.dynamicReference.forEach((vcr, index) => {
                        if (index === (item.index - 1)) {
                            vcr.preCallFunction(params);
                        }
                    });
                }
                this.MultiOutletPageRequestVO[item.control] = this.options.group.get([item.control, 'formData']).value;
            }
        });
    }
    // TO set data into the requestVO requested from the parent page
    // arg1: formgroup object name. if false then data set to root of form group. else in the defined object of the formgroup
    // arg2: data array of abject with key value map to be directly added to the formgroup
    setInfoToVO(groupObj, dataToBeSet) {
        if (groupObj) {
            dataToBeSet.forEach(element => {
                this.MultiOutletPageRequestVO[groupObj][element.key] = element.value;
            });
        }
        else {
            dataToBeSet.forEach(element => {
                this.MultiOutletPageRequestVO[element.key] = element.value;
            });
        }
    }
    // remove panel based on the outletType i.e page or component
    // component the last segment is removed and the formgroup as well as the dynamic view is purged.
    // for page it applies customization and removes the particlular segment from view by display none.
    removePanel() {
        if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_COMPONENT) {
            let delId = this.segmentOptions.segmentList[this.index - 1];
            this.segmentOptions.segmentList.pop();
            delete this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index];
            this.options.group.removeControl(this.outletOptions.segmentName + this.index);
            this.MultiOutletPageRequestVO[this.segmentOptions.fcName] = this.outletOptions.segmentName + (this.index);
            this.index--;
        }
        else {
            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentInfoAlert(this.commonProv.translate('are_you_sure_delete_transfer_?_key'), {
                buttonsArray: [
                    {
                        group: this.options.group,
                        type: 'reset',
                        labelKey: 'cancel_key',
                        handler: () => {
                            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                        }
                    },
                    {
                        group: this.options.group,
                        labelKey: 'ok_key',
                        type: 'submit',
                        handler: () => {
                            var _a;
                            let delInd = -1;
                            let i = 0;
                            this.segmentList.forEach(element => {
                                if (element.segmentName === this.currentSegment) {
                                    delInd = i;
                                }
                                i++;
                            });
                            this.commonProv.setOperationID(this.outletOptions.operID);
                            _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = this.outletOptions.operID;
                            this.options.group.removeControl(this.currentSegment);
                            delete this.MultiOutletPageRequestVO[this.currentSegment];
                            this.segmentList[delInd].segmentStatus = 'deleted';
                            this.segmentList[delInd].segmentActive = false; //added by ghada, AZDB-1674 set deleted segment as not active to hremove it from the dom
                            if (delInd == this.index - 1) {
                                --this.index; //reduce the index only if the deleted segment is the last one to avoid having multiple segments with the same name
                            }
                            const activeSeg = (_a = this.segmentList.find(seg => seg.segmentStatus == 'active')) === null || _a === void 0 ? void 0 : _a.segmentName;
                            this.selectSegmentRef.selectedSegment = activeSeg;
                            this.onClickSegment(activeSeg);
                            const deletedSegInd = this.segmentOptions.segmentList.findIndex(seg => seg.itemValue == this.segmentList[delInd].segmentName);
                            this.segmentOptions.segmentList.splice(deletedSegInd, 1);
                            _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                        }
                    }
                ]
            });
        }
    }
    // adds the dynamic page or component to the newly made availbale segment
    addDynamicCompOrPage() {
        let navParams = null;
        if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_PAGE) {
            this.outletOptions.dropdownList.forEach(element => {
                if (element.itemValue === this.selectDropValue) {
                    navParams = JSON.parse(element.selectedObj.param);
                }
            });
        }
        this.dynamicOptions[this.index] = {
            multiOutlet: true,
            component: this.outletOptions.component,
            group: this.options.group,
            multiOutletOptions: {
                outletType: this.outletOptions.type,
                stepperOptions: {
                    stepperName: this.outletOptions.segmentName + this.index,
                    hideStepper: true,
                },
                fromMultiLoader: true,
                navParams: navParams,
                segmentName: this.outletOptions.segmentName + this.index,
                requestObject: this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index] ? this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index] : {}
            }
        };
    }
    // Function to run after the dynamic component is initialized and event is emitted from the ps-dynaic-component-loader
    pageCompLoaded(ev) {
        var _a;
        if (ev) {
            // setTimeout(() => {
            this.refConfirm.push({ index: this.index, val: true, control: this.outletOptions.segmentName + this.index });
            if (this.options.group.contains(this.outletOptions.segmentName + this.index)) {
                this.MultiOutletPageRequestVO[this.outletOptions.segmentName + this.index] = (_a = this.options.group.get([this.outletOptions.segmentName + this.index, 'formData'])) === null || _a === void 0 ? void 0 : _a.value;
            }
            this.factoryReferenceArray[this.outletOptions.segmentName + this.index] = this.index - 1;
            // }, 2500);
        }
    }
    // adds a new segment with the outletOptions.segment name concatinated witht the current index
    addNewSegment(dropdown) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.index < 10 && (this.selectDropValue || !dropdown)) {
                this.showSegments[this.index] = true;
                this.index++;
                this.currentSegment = this.outletOptions.segmentName + this.index;
                this.segmentList[this.index - 1] = {
                    segmentActive: true,
                    segmentName: this.currentSegment,
                    segmentStatus: 'active'
                };
                // checks if is page or is component if component then normal add the segment then display the new dynamic component.
                // else if page then set the oper id for the services as the same as in the page info from the dropdown selection.
                if (!dropdown) {
                    this.segmentOptions.segmentList.push({
                        itemValue: this.outletOptions.segmentName + this.index,
                        description: this.outletOptions.segmentName + this.index
                    });
                }
                else {
                    this.outletOptions.dropdownList.forEach(element => {
                        if (element.itemValue === this.selectDropValue) {
                            this.segmentOptions.segmentList.push({
                                itemValue: this.outletOptions.segmentName + this.index,
                                description: this.outletOptions.segmentName + this.index,
                                iconName: element.selectedObj.iconName
                            });
                        }
                    });
                    _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = this.selectDropValue;
                    this.commonProv.setOperationID(this.selectDropValue);
                    yield this.commonProv.applyPageCustomization();
                    setTimeout(() => {
                        this.commonProv.setOperationID(this.outletOptions.operID);
                        _psServices_models_ps_common_settings__WEBPACK_IMPORTED_MODULE_8__["PsCommonSettings"].oper_ID = this.outletOptions.operID;
                    }, 1500);
                }
                this.segmentInit = true;
                this.MultiOutletPageRequestVO[this.segmentOptions.fcName] = this.currentSegment;
                setTimeout(() => {
                    this.selectSegmentRef.selectedSegment = this.currentSegment;
                }, 0);
                this.setActiveSegment();
                this.ngAfterViewInit();
            }
            else {
                this.logger.error('Page Limit Reached');
            }
        });
    }
    addNewOutlet() {
        // check if the multiple segment content is to be a page or a component based on the options on the parent page
        // If outlettype is page. the function for the dropdown is to be opened
        // else if a component then the compoenent itself is directly opened from the addNewFunction()
        if (this.outletOptions.type === _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_6__["ConstantCommon"].OUTLET_TYPE_COMPONENT) {
            this.addNewSegment(false);
        }
        else {
            this.selectNewPage();
        }
    }
    // utilize the dropdown from the outletOptions and present it in an alert modal. specifically for the page.
    selectNewPage() {
        return new Promise((resolve, reject) => {
            {
                {
                    const alertController = {
                        cssClass: 'ps-button-save',
                        header: 'select_page_to_open_key',
                        inputs: [
                            {
                                type: 'dropdown',
                                options: {
                                    placeHolder: 'select_page_to_open_key',
                                    fcName: 'menuPageSelection',
                                    group: this.options.group,
                                    listOfOptions: this.outletOptions.dropdownList,
                                    disablePreview: true
                                }
                            }
                        ],
                        buttons: [
                            {
                                role: 'cancel',
                                options: {
                                    labelKey: 'cancel_key',
                                    psClass: 'ps-drafts-report-cancel-button',
                                    group: null
                                },
                                handler: () => {
                                    reject(false);
                                }
                            }, {
                                // role: 'cancel',
                                options: {
                                    labelKey: 'confirm_key',
                                    iconName: 'paper-plane',
                                    psClass: 'ps-drafts-report-submit-button',
                                    group: this.options.group
                                },
                                handler: () => {
                                    this.selectDropValue = this.options.group.value['menuPageSelection'];
                                    if (this.selectDropValue) {
                                        this.addNewSegment(true);
                                        _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].dismissAllModals();
                                    }
                                    else {
                                        //added by ghada, AZDB-1674 to show field validation in cades no value entered
                                        this.commonProv.validateFormController(this.options.group.controls['menuPageSelection']);
                                    }
                                }
                            }
                        ]
                    };
                    this.commonProv.presentPsAlert(alertController, 'ps-input-reason');
                }
            }
        });
    }
    postSubmitFunction(response) {
        let multiResponse = "";
        for (const [key, value] of Object.entries(response.commonResponseList)) {
            if (response.commonResponseList[key].outputCode === 0 || response.commonResponseList[key].outputType === 'S') {
                multiResponse += key.toString() + ' ' + response.commonResponseList[key].outputNotification + '<br />';
            }
            else {
                multiResponse += key.toString() + ' ' + response.commonResponseList[key].outputNotification + '<br />';
            }
        }
        _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].presentInfoAlert(multiResponse, { autoHide: true });
    }
};
PsTemplateMultiOutletComponent.ctorParameters = () => [
    { type: _psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"] },
    { type: _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] }
];
PsTemplateMultiOutletComponent.propDecorators = {
    outletOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectSegmentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectSegmentRef',] }],
    dynamicReference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['dynamicComponentReference',] }]
};
PsTemplateMultiOutletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-multi-outlets',
        template: _raw_loader_ps_template_multi_outlets_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_multi_outlets_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_9__["PsCommonService"], _psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]])
], PsTemplateMultiOutletComponent);



/***/ }),

/***/ "IzlW":
/*!**************************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PsTemplateMultiOutletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateMultiOutletModule", function() { return PsTemplateMultiOutletModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var _ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ps-template-multi-outlets.template */ "HEGf");






let PsTemplateMultiOutletModule = class PsTemplateMultiOutletModule {
};
PsTemplateMultiOutletModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateMultiOutletComponent"]],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"],
            _ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_4__["PsTemplateStepperModule"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateMultiOutletComponent"]],
        exports: [_ps_template_multi_outlets_template__WEBPACK_IMPORTED_MODULE_5__["PsTemplateMultiOutletComponent"]],
    })
], PsTemplateMultiOutletModule);



/***/ }),

/***/ "pXmH":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-multi-outlets/ps-template-multi-outlets.template.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-stepper [id]=\"options.stepperName\" *ngIf=\"showTemplate\" [options]=\"options\"\r\n    (draftLoaded)=\"draftData($event)\" (onNextPreviousStepper)=\"nextButtonCLicked($event)\">\r\n    <ps-form-step class=\"multi-outlet-segment\" *psStep=\"'step1'\" step1 [id]=\"options.namesofSteps[0]\">\r\n        <ng-content *ngIf=\"outletOptions.type === 'component'\" select=\"[multiPageData]\"></ng-content>\r\n        <div *ngIf=\"outletOptions.type !== 'component'\" class=\"ps-multi-outlet-action-icons\">\r\n            <ps-action-icon class=\"ps-button-add\" [options]=\"standardOptions\" *ngIf=\"showButtons\"\r\n                (onClick)=\"selectNewPage()\">\r\n            </ps-action-icon>\r\n            <ps-action-icon class=\"ps-button-remove\" [options]=\"standardOptions2\"\r\n                *ngIf=\"this.segmentOptions.segmentList.length >=1 && index >= 1\" (onClick)=\"removePanel()\">\r\n            </ps-action-icon>\r\n        </div>\r\n        <ps-select-segment #selectSegmentRef *ngIf=\"segmentInit\" id=\"multiOutletSegment\"\r\n            (segmentButtonClicked)=\"onClickSegment($event)\" [options]=\"segmentOptions\" [id]=\"id\">\r\n        </ps-select-segment>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[0]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}1</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[0].segmentActive,'hideSegment': !segmentList[0].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[1]'\r\n                *ngIf=\"dynamicOptions[1]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[1]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}2</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[1].segmentActive,'hideSegment': !segmentList[1].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[2]'\r\n                *ngIf=\"dynamicOptions[2]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[2]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}3</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 3 *ngIf=\"segmentList[2].segmentStatus === 'active' || segmentList[2].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[2].segmentActive,'hideSegment': !segmentList[2].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[3]'\r\n                *ngIf=\"dynamicOptions[3]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[3]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}4</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 4 *ngIf=\"segmentList[3].segmentStatus === 'active' || segmentList[3].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[3].segmentActive,'hideSegment': !segmentList[3].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[4]'\r\n                *ngIf=\"dynamicOptions[4]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[4]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}5</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 5 *ngIf=\"segmentList[4].segmentStatus === 'active' || segmentList[4].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[4].segmentActive,'hideSegment': !segmentList[4].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[5]'\r\n                *ngIf=\"dynamicOptions[5]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[5]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}6</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 6 *ngIf=\"segmentList[5].segmentStatus === 'active' || segmentList[5].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[5].segmentActive,'hideSegment': !segmentList[5].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[6]'\r\n                *ngIf=\"dynamicOptions[6]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[6]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}7</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 7 *ngIf=\"segmentList[6].segmentStatus === 'active' || segmentList[6].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[6].segmentActive,'hideSegment': !segmentList[6].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[7]'\r\n                *ngIf=\"dynamicOptions[7]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[7]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}8</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 8 *ngIf=\"segmentList[7].segmentStatus === 'active' || segmentList[7].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[7].segmentActive,'hideSegment': !segmentList[7].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[8]'\r\n                *ngIf=\"dynamicOptions[8]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[8]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}9</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 9 *ngIf=\"segmentList[8].segmentStatus === 'active' || segmentList[8].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[8].segmentActive,'hideSegment': !segmentList[8].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[9]'\r\n                *ngIf=\"dynamicOptions[9]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <div *ngIf=\"previewMode\" class=\"ps-custom-component-preview\" psPreviewEngine>\r\n            <div *ngIf=\"showSegments[9]\" psPreviewMultiTemplate>\r\n                <ion-label>{{ outletOptions.segmentName }}10</ion-label>\r\n            </div>\r\n        </div>\r\n        <!-- FOR-PREVIEW -->\r\n        <!-- SEGMENT 10 *ngIf=\"segmentList[9].segmentStatus === 'active' || segmentList[9].segmentStatus === 'empty'\" -->\r\n        <div [ngClass]=\"{'showSegment': segmentList[9].segmentActive,'hideSegment': !segmentList[9].segmentActive}\">\r\n            <ps-dynamic-component-loader (compLoaded)=\"pageCompLoaded($event)\" [options]='dynamicOptions[10]'\r\n                *ngIf=\"dynamicOptions[10]\" #dynamicComponentReference>\r\n            </ps-dynamic-component-loader>\r\n        </div>\r\n        <!-- PREVIEW -->\r\n    </ps-form-step>\r\n</ps-template-stepper>");

/***/ })

}]);
//# sourceMappingURL=default~pages-multi-outlet-multi-outlet-module~pages-visa-request-visa-request-module-es2015.js.map