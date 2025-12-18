(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bpm-dynamic-page-bpm-dynamic-page-module"],{

/***/ "++mf":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [options]=\"options\" (onPsChange)=\"onChange($event)\" ></ps-select-dropdown>");

/***/ }),

/***/ "+9nY":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"selectDropDownChange($event)\">\n</ps-select-dropdown>");

/***/ }),

/***/ "+BRL":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PsInputFreeTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponent", function() { return PsInputFreeTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-free-text.component.html */ "wsER");
/* harmony import */ var _ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-free-text.component.scss */ "+jbq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");







/**
 * @author Aftab.Ali
 * @since 24/10/2019
 *
 * <p> PsInputFreeTextComponent is a simple component base on ps-keyin-input and have free text field</p>
 */
let PsInputFreeTextComponent = class PsInputFreeTextComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.defaultOptions = {};
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
    }
    onInputChanged(event) {
        this.onPsChange.emit(event);
    }
};
PsInputFreeTextComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }
];
PsInputFreeTextComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputFreeTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-free-text',
        template: _raw_loader_ps_input_free_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_free_text_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
], PsInputFreeTextComponent);



/***/ }),

/***/ "+jbq":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1mcmVlLXRleHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "1L8/":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [id]=\"'terms_and_conditions' + id\" class=\"ps-complex-terms-and-conditions\">\r\n    <div class=\"ps-terms-cond-file\">\r\n        <ps-container-html-viewer [options]=\"options.htmlViewerOptions\">\r\n        </ps-container-html-viewer>\r\n        <div class=\"ps-terms-cond-checkbox\">\r\n            <ps-select-checkbox [id]=\"'terms_and_conditions' + id\" [options]=\"options.checkBoxOptions\"\r\n                (onPsChange)=\"onChange($event)\">\r\n            </ps-select-checkbox>\r\n        </div>\r\n    </div>\r\n</ps-container-complex>");

/***/ }),

/***/ "4GcI":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1uYXRpb25hbGl0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "4X+U":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1mdW5kLXNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6Nlt":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi13ZWFsdGgtc291cmNlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6eaE":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PsComplexTermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexTermsAndConditionsComponent", function() { return PsComplexTermsAndConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_terms_and_conditions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-terms-and-conditions.component.html */ "1L8/");
/* harmony import */ var _ps_complex_terms_and_conditions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-terms-and-conditions.component.scss */ "fyCU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-commonBusiness.settings */ "fOh1");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base.component */ "wYHK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








/*
Author: H.Hassan
Date: 21Oct2019
WI: #915289
ps-template-terms-and-conditions
*/
let PsComplexTermsAndConditionsComponent = class PsComplexTermsAndConditionsComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseComponent"] {
    constructor(commonProv, loggerP) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.onPsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.options = {};
    }
    ngOnInit() {
        this.options.checkBoxOptions.labelKey = this.options.chargesAmount ? this.options.chargesAmount + this.options.checkBoxOptions.labelKey : this.options.checkBoxOptions.labelKey;
        if (this.options && !(this.options.htmlViewerOptions && this.options.htmlViewerOptions.fileName)) {
            this.options.htmlViewerOptions = {
                fileName: src_app_commonBussinessSRC_psServices_models_ps_commonBusiness_settings__WEBPACK_IMPORTED_MODULE_4__["PsCommonBusinessSettings"].defaultTermsAndConditions,
                parseHtmlFromFile: true
            };
        }
        // this.options.checkBoxOptions.labelKey = this.options.checkBoxOptions.labelKey;
    }
    // handle checkbox change
    //edited by Marina jira-AZDB-1294; terms and conditions checkbox shouldn't have a false value
    onChange(event) {
        if (event.newValue == false || event.newValue == "false") {
            this.options.checkBoxOptions.group.controls[this.options.checkBoxOptions.fcName].reset();
        }
        this.onPsChange.emit(event);
    }
};
PsComplexTermsAndConditionsComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] }
];
PsComplexTermsAndConditionsComponent.propDecorators = {
    onPsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsComplexTermsAndConditionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-terms-and-conditions',
        template: _raw_loader_ps_complex_terms_and_conditions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_terms_and_conditions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
], PsComplexTermsAndConditionsComponent);



/***/ }),

/***/ "8WI6":
/*!*********************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.ts ***!
  \*********************************************************************************************/
/*! exports provided: PsTemplateBPMFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateBPMFlow", function() { return PsTemplateBPMFlow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_template_bpm_flow_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-template-bpm-flow.template.html */ "AFXa");
/* harmony import */ var _ps_template_bpm_flow_template_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-template-bpm-flow.template.scss */ "jHwt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_integration_JBPM_jbpm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/integration/JBPM/jbpm.service */ "c8v/");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_business_mapping_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-business-mapping-constants */ "FUl9");
/* harmony import */ var _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../psServices/Event/event.service */ "r40+");
/* harmony import */ var _psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../psServices/models/common-constant */ "zngb");
/* harmony import */ var _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../psServices/models/common-utils */ "qEF5");
/* harmony import */ var _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ps-template-base/ps-template-base.page */ "uqA0");






// import { PsComplexMediaCaptureComponent } from 'src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component';




let PsTemplateBPMFlow = class PsTemplateBPMFlow extends _ps_template_base_ps_template_base_page__WEBPACK_IMPORTED_MODULE_9__["PsTemplateBasePage"] {
    constructor(bpmService, events) {
        super();
        this.bpmService = bpmService;
        this.events = events;
        this.mainComponentList = [];
        this.mainComponentListToIterateOver = [];
        this.keysToCheck = ["fcName", "id"];
        this.nextDefaultLabelKey = 'next_key';
        this.nextOptions = {
            labelKey: this.nextDefaultLabelKey,
            group: this.options.group
        };
        this.previousOptions = {
            labelKey: 'previous_key',
            group: this.options.group
        };
        this.currentIndex = 0;
        this.animationListForward = ["flipInX",];
        this.animationListBackward = ["slideInLeft" /* , "slide-bottom", "slide-right" */];
        this.flowDirection = "forward";
        this.arrowIconOptios = {
            iconName: 'arrow-back',
            allowCust: true
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.options.group) {
                if (_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].isEmptyObject(this.options.requestObject)) {
                    this.options.requestObject = {};
                }
                this.commonProv.setFormData(this.options.group, this.options.requestObject);
                if (this.options && this.options.bpmTemplate && this.options.bpmTemplate.taskTemplate) {
                    this.createListFromTemplate(this.options.bpmTemplate.taskTemplate, this.options.bpmTemplate.JBPM);
                }
                if (this.options.requestObject.activeStep) {
                    this.currentIndex = this.options.requestObject.activeStep;
                }
                this.generateStep();
            }
        });
    }
    totalNumberOfSteps() {
        return this.mainComponentList.length;
    }
    createGroupIfFcnameIsPresent(object) {
        this.createGroupIfFcnameIsPresentMain(object);
        return object;
    }
    createGroupIfFcnameIsPresentMain(object) {
        Object.keys(object).forEach(key => {
            if (this.keysToCheck.includes(key)) {
                object.group = this.options.group;
            }
            if (typeof object[key] === 'object' && object[key] !== null) {
                this.createGroupIfFcnameIsPresentMain(object[key]);
            }
        });
    }
    createListFromTemplate(taskTemplate, JBPM) {
        taskTemplate.forEach(step => {
            step.JBPM = JBPM;
            step.dynamicComponents.forEach(element => {
                let comp = element.component;
                comp = src_app_commonBussinessSRC_psServices_models_ps_common_business_mapping_constants__WEBPACK_IMPORTED_MODULE_5__["PsCommonBusinesstMappingConstants"].getComponent(comp);
                element.component = comp;
                let options = this.createGroupIfFcnameIsPresent(element.componentOptions);
                element.componentOptions = options;
            });
            this.mainComponentList.push(step);
        });
    }
    nextWasClicked() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mainWrapper) {
                let validationResult = this.getStepValidations(true);
                if (validationResult.isValid) {
                    let response = {};
                    if (this.currentStep.serviceToCall) {
                        this.commonProv.presentLoading();
                        response = yield this.commonProv.http.commonRequestAjax(this.currentStep.serviceToCall, this.options.requestObject);
                        this.commonProv.dismissLoading();
                    }
                    if (this.currentStep.shouldCallComplete) {
                        this.commonProv.presentLoading();
                        const completeParams = _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].valFromNestedObj('screenMarkup.completeParams', this.currentStep.JBPM);
                        const newParams = _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].createBPMParams(completeParams, this.options.requestObject, this.commonProv.session, 'out');
                        const finalParams = Object.assign(Object.assign({}, this.currentStep.JBPM.taskInfo), { bpmStepFlow: true, bpmParametersMap: Object.assign({}, newParams) });
                        finalParams.bpmProcessInstanceId = finalParams.processInstanceId; // to be done from backend side
                        let bpmResponse = yield this.bpmService.completeBpmTask(finalParams);
                        this.commonProv.dismissLoading();
                        if (bpmResponse && bpmResponse.screenMarkup && bpmResponse.screenMarkup.taskTemplate) {
                            const step = JSON.parse(bpmResponse.screenMarkup.taskTemplate);
                            let JBPM;
                            if (bpmResponse.taskTemplateIndex) {
                                JBPM = bpmResponse.gridModel[bpmResponse.screenMarkup.taskTemplateIndex];
                            }
                            this.createListFromTemplate(step, JBPM);
                        }
                    }
                    if (this.currentIndex + 1 < this.totalNumberOfSteps()) {
                        this.flowDirection = "forward";
                        this.commonNavigationFlow();
                        this.currentIndex++;
                        this.generateStep();
                    }
                }
            }
        });
    }
    previousWasClicked() {
        if (this.mainWrapper) {
            this.getStepValidations();
            if (this.currentStep.clearStepData && this.currentStep.validationResult.mapOfControls
                && Object.keys(this.currentStep.validationResult.mapOfControls).length > 0) {
                let keys = Object.keys(this.currentStep.validationResult.mapOfControls);
                keys.forEach(element => {
                    this.removeControl(element);
                });
            }
            this.flowDirection = "backward";
            this.commonNavigationFlow();
            this.currentIndex--;
            this.generateStep();
            if (this.currentStep.isDecisionMaker) {
                for (let index = this.currentIndex + 1; index < this.mainComponentList.length; index++) {
                    let removedStep = this.mainComponentList[index];
                    if (removedStep && removedStep.validationResult && removedStep.validationResult.mapOfControls) {
                        let keys = Object.keys(removedStep.validationResult.mapOfControls);
                        keys.forEach(element => {
                            this.removeControl(element);
                        });
                    }
                }
                this.mainComponentList.splice(this.currentIndex + 1);
            }
        }
    }
    removeControl(element) {
        this.options.group.removeControl(element);
        _psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_8__["CommonUtils"].deletePropFromObj(this.options.group.controls['formData'].value, element);
    }
    getStepValidations(validation = false) {
        let validationResult = this.commonProv.returnElementFormControlsAsAbstractFC(this.options.group, this.mainWrapper.nativeElement, validation);
        this.currentStep.validationResult = validationResult;
        return validationResult;
    }
    generateStep() {
        this.currentStep = this.mainComponentList[this.currentIndex];
        this.mainComponentListToIterateOver.push(this.currentStep);
        if (this.currentStep.serviceToCall) {
            this.nextOptions.labelKey = 'validate_and_proceed_key';
        }
        else {
            this.nextOptions.labelKey = this.nextDefaultLabelKey;
        }
        this.options.requestObject[_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_7__["ConstantCommon"].LAST_ACTIVE_STEP] = this.currentIndex;
    }
    commonNavigationFlow() {
        this.previousStep = this.mainComponentListToIterateOver.pop();
        delete this.previousStep.stepAnimation;
    }
    getRandomAnimation(component) {
        if (this.flowDirection == "forward") {
            component.stepAnimation = this.animationListForward[Math.floor(Math.random() * this.animationListForward.length)];
        }
        else {
            component.stepAnimation = this.animationListBackward[Math.floor(Math.random() * this.animationListBackward.length)];
        }
    }
    getNextOptions() {
        return {
            labelKey: this.currentStep.customNextLabel ? this.currentStep.customNextLabel : this.nextOptions.labelKey,
            group: this.options.group
        };
    }
    onCompChange(value, compOptions) {
        this.triggerNextAutomatically(compOptions);
    }
    onCompClick(value, compOptions) {
        this.triggerNextAutomatically(compOptions);
    }
    triggerNextAutomatically(compOptions) {
        if (compOptions.triggerNextAutomatically) {
            this.nextWasClicked();
        }
    }
};
PsTemplateBPMFlow.ctorParameters = () => [
    { type: src_app_commonBussinessSRC_psServices_integration_JBPM_jbpm_service__WEBPACK_IMPORTED_MODULE_4__["JBPMService"] },
    { type: _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__["Events"] }
];
PsTemplateBPMFlow.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dynamicComponentReference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ["dynamicComponentReference",] }],
    mainWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mainWrapper', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }]
};
PsTemplateBPMFlow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-template-bpm-flow',
        template: _raw_loader_ps_template_bpm_flow_template_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_template_bpm_flow_template_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonBussinessSRC_psServices_integration_JBPM_jbpm_service__WEBPACK_IMPORTED_MODULE_4__["JBPMService"], _psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_6__["Events"]])
], PsTemplateBPMFlow);



/***/ }),

/***/ "AFXa":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-template-screen>\n  <ps-action-icon *ngIf=\"currentIndex>0\" class=\"previous-step\" id=\"back_icon\" [options]='arrowIconOptios'\n    (onClick)=\"previousWasClicked()\">\n  </ps-action-icon>\n  <ng-container *ngIf=\"mainComponentListToIterateOver && mainComponentListToIterateOver.length>0\">\n    <ng-container *ngFor=\"let rootComponent of mainComponentListToIterateOver; let i = index\">\n      <div #mainWrapper class=\"main-wrapper ps-animation\"\n        [ngClass]=\"rootComponent.stepAnimation?rootComponent.stepAnimation: getRandomAnimation(rootComponent)\">\n\n        <ps-label-header class=\"header-title\" [options]=\"rootComponent.headerLabel\" [ngClass]=\"'header-title-'+i\">\n        </ps-label-header>\n\n        <ng-container *ngFor=\"let compOptions of rootComponent.dynamicComponents; let j = index\">\n          <div class=\"component-wrapper\" [ngClass]=\"'component-wrapper-'+i+'-'+j\">\n            <ps-dynamic-component-loader [options]='compOptions' #dynamicComponentReference\n              (onPsCompChange)=\"onCompChange($event,compOptions)\" (onClick)=\"onCompClick($event,compOptions)\">\n            </ps-dynamic-component-loader>\n          </div>\n        </ng-container>\n\n      </div>\n    </ng-container>\n  </ng-container>\n  <ng-container psFooter>\n    <ps-button-next [id]=\"id + '_next_btn'\" class=\"next-step\"\n      *ngIf=\" (!currentStep.hideNextButton && !currentStep.isFinalStep)\" [options]=\"getNextOptions()\"\n      (onClick)=\"nextWasClicked()\">\n    </ps-button-next>\n  </ng-container>\n</ps-template-screen>");

/***/ }),

/***/ "AGta":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: PsDropdownWealthSourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownWealthSourcesComponent", function() { return PsDropdownWealthSourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_wealth_sources_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-wealth-sources.component.html */ "OfGH");
/* harmony import */ var _ps_dropdown_wealth_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-wealth-sources.component.scss */ "6Nlt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








let PsDropdownWealthSourcesComponent = class PsDropdownWealthSourcesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonService, logger, omniPullService) {
        super(commonService, logger);
        this.omniPullService = omniPullService;
        this.options = {};
        this.defaultOptions = {
            listOfOptions: [],
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
        this.loadFundSources();
    }
    loadFundSources() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const wealthSources = {
                gridModel: [
                    {
                        briefDesc: "Employment Earnings",
                        longDesc: "Employment Earnings",
                        code: "248",
                    },
                    {
                        briefDesc: "Commisions",
                        longDesc: "Commisions",
                        code: "268",
                    },
                    {
                        briefDesc: "Business Income",
                        longDesc: "Business Income",
                        code: "278",
                    },
                    {
                        briefDesc: "Business Earnings",
                        longDesc: "Business Earnings",
                        code: "898",
                    },
                    {
                        briefDesc: "Investment Earning",
                        longDesc: "Investment Earning",
                        code: "874",
                    },
                    {
                        briefDesc: "Centrelink Funds",
                        longDesc: "Centrelink Funds",
                        code: "894",
                    }
                ]
            };
            if (wealthSources && wealthSources.gridModel && wealthSources.gridModel.length > 0) {
                for (const iterator of wealthSources.gridModel) {
                    const wealthSource = {
                        itemValue: iterator.code,
                        description: iterator.briefDesc,
                        selectedObj: iterator
                    };
                    this.defaultOptions.listOfOptions.push(wealthSource);
                }
            }
        });
    }
    selectDropDownChange(values) {
        this.onPsChange.emit(values);
    }
};
PsDropdownWealthSourcesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsDropdownWealthSourcesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownWealthSourcesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-wealth-sources',
        template: _raw_loader_ps_dropdown_wealth_sources_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_wealth_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsDropdownWealthSourcesComponent);



/***/ }),

/***/ "BcCD":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearComponent", function() { return PsDateDayMonthYearComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-date-day-month-year.component.html */ "Tlgk");
/* harmony import */ var _ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-date-day-month-year.component.scss */ "Lb7B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/models/common-constant */ "zngb");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-date/ps-keyin-date.component */ "JpVU");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonSRC/psServices/models/common-utils */ "qEF5");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/commonSRC/psServices/Event/event.service */ "r40+");











let PsDateDayMonthYearComponent = class PsDateDayMonthYearComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_date_ps_keyin_date_component__WEBPACK_IMPORTED_MODULE_5__["PsKeyinDateComponent"] {
    constructor(commonProv, loggerP, events) {
        super(commonProv, loggerP, events);
        this.commonProv = commonProv;
        this.dateOptions = {};
        this.omniPull = _commonSRC_psServices_models_common_utils__WEBPACK_IMPORTED_MODULE_7__["CommonUtils"].injectionHandler(_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_9__["OmniPullService"]);
    }
    ngOnInit() {
        this.commonProv.copyObject(this.dateOptions, this.options, false);
        const param = this.omniPull.omniCommon.session.getValueOf(src_app_commonSRC_psServices_models_common_constant__WEBPACK_IMPORTED_MODULE_4__["ConstantCommon"].preLoginResponse).parameters;
        this.dateOptions.displayFormat = param.DefaultDateFormat ? param.DefaultDateFormat.parameterVal : 'DD/MM/YYYY';
        this.dateOptions.pickerFormat = this.dateOptions.displayFormat;
    }
    ngOnChanges() {
        if (this.options && this.options.min) {
            this.dateOptions.min = this.options.min;
        }
        if (this.options && this.options.max) {
            this.dateOptions.max = this.options.max;
        }
    }
    dateChanged(value) {
        this.onPsChange.emit(value);
    }
};
PsDateDayMonthYearComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"] }
];
PsDateDayMonthYearComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDateDayMonthYearComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year',
        template: _raw_loader_ps_date_day_month_year_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_10__["Events"]])
], PsDateDayMonthYearComponent);



/***/ }),

/***/ "EBce":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLXBhc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FUl9":
/*!**********************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psServices/models/ps-common-business-mapping-constants.ts ***!
  \**********************************************************************************************/
/*! exports provided: PsCommonBusinesstMappingConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsCommonBusinesstMappingConstants", function() { return PsCommonBusinesstMappingConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_button_ps_button_next_ps_button_next_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-action/ps-action-button/ps-button-next/ps-button-next.component */ "WmIV");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_icon_ps_action_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-action/ps-action-icon/ps-action-icon.component */ "ilDp");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template */ "gkmT");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template */ "kRg/");
/* harmony import */ var _psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component */ "Aoll");
/* harmony import */ var _psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component */ "xdyT");
/* harmony import */ var _psComponents_ps_complex_components_ps_complex_password_confirm_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../psComponents/ps-complex-components/ps-complex-password-confirm/ps-complex-password-confirm.component */ "jedr");
/* harmony import */ var _psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component */ "6eaE");
/* harmony import */ var _psComponents_ps_complex_components_ps_complex_widget_dropdowns_ps_complex_widget_dropdowns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../psComponents/ps-complex-components/ps-complex-widget-dropdowns/ps-complex-widget-dropdowns.component */ "Sx1r");
/* harmony import */ var _psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../psComponents/ps-field-entity/ps-entity-phone-number/ps-entity-phone-number.component */ "7Cko");
/* harmony import */ var _psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component */ "ngfJ");
/* harmony import */ var _psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component */ "x3b/");
/* harmony import */ var _psComponents_ps_keyin_input_ps_input_email_ps_input_email_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-input-email/ps-input-email.component */ "P7Z/");
/* harmony import */ var _psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component */ "+BRL");
/* harmony import */ var _psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-input-numeric/ps-input-numeric.component */ "WAnK");
/* harmony import */ var _psComponents_ps_keyin_input_ps_input_passcode_ps_input_passcode_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component */ "RW5F");
/* harmony import */ var _psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../psComponents/ps-keyin-input/ps-input-varchar/ps-input-varchar.component */ "/QlS");
/* harmony import */ var _psComponents_ps_label_ps_label_header_description_ps_label_header_description_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../psComponents/ps-label/ps-label-header-description/ps-label-header-description.component */ "AYhJ");
/* harmony import */ var _psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../psComponents/ps-select-dropdown/ps-dropdown-country/ps-dropdown-country.component */ "7/W0");
/* harmony import */ var _psComponents_ps_select_dropdown_ps_dropdown_fund_sources_ps_dropdown_fund_sources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component */ "TqLw");
/* harmony import */ var _psComponents_ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component */ "dUiw");
/* harmony import */ var _psComponents_ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component */ "WGyA");
/* harmony import */ var _psComponents_ps_select_dropdown_ps_dropdown_wealth_sources_ps_dropdown_wealth_sources_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component */ "AGta");



























let PsCommonBusinesstMappingConstants = class PsCommonBusinesstMappingConstants {
    constructor() {
        // this.componentsList[IComponentNameMapping.PsComplexCallSlotComponent] = PsComplexCallSlotComponent;
        // this.componentsList[IComponentNameMapping.PsActionIconComponent] = PsActionIconComponent;
        // this.componentsList[IComponentNameMapping.PsComplexMediaCaptureComponent] = PsComplexMediaCaptureComponent;
        // this.componentsList[IComponentNameMapping.PsSelectDropdownComponent] = PsSelectDropdownComponent;
        // this.componentsList[IComponentNameMapping.PsComplexPasswordConfirmComponent] = PsComplexPasswordConfirmComponent;
    }
    static getComponent(componentName) {
        return this.componentsList[componentName];
    }
};
PsCommonBusinesstMappingConstants.componentsList = {
    PsActionIconComponent: src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_icon_ps_action_icon_component__WEBPACK_IMPORTED_MODULE_3__["PsActionIconComponent"],
    PsComplexCallSlotComponent: _psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component__WEBPACK_IMPORTED_MODULE_8__["PsComplexCallSlotComponent"],
    PsComplexMediaCaptureComponent: _psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component__WEBPACK_IMPORTED_MODULE_9__["PsComplexMediaCaptureComponent"],
    PsComplexPasswordConfirmComponent: _psComponents_ps_complex_components_ps_complex_password_confirm_ps_complex_password_confirm_component__WEBPACK_IMPORTED_MODULE_10__["PsComplexPasswordConfirmComponent"],
    PsSelectDropdownComponent: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"],
    PsKeyinInputComponent: src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"],
    PsTemplateForm: src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template__WEBPACK_IMPORTED_MODULE_6__["PsTemplateForm"],
    PsTemplateStepper: src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateStepper"],
    PsComplexWidgetDropdownsComponent: _psComponents_ps_complex_components_ps_complex_widget_dropdowns_ps_complex_widget_dropdowns_component__WEBPACK_IMPORTED_MODULE_12__["PsComplexWidgetDropdownsComponent"],
    PsComplexTermsAndConditionsComponent: _psComponents_ps_complex_components_ps_complex_terms_and_conditions_ps_complex_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_11__["PsComplexTermsAndConditionsComponent"],
    PsInputPasscodeComponent: _psComponents_ps_keyin_input_ps_input_passcode_ps_input_passcode_component__WEBPACK_IMPORTED_MODULE_19__["PsInputPasscodeComponent"],
    PsEntityPhoneNumberComponent: _psComponents_ps_field_entity_ps_entity_phone_number_ps_entity_phone_number_component__WEBPACK_IMPORTED_MODULE_13__["PsEntityPhoneNumberComponent"],
    PsLabelHeaderDescriptionComponent: _psComponents_ps_label_ps_label_header_description_ps_label_header_description_component__WEBPACK_IMPORTED_MODULE_21__["PsLabelHeaderDescriptionComponent"],
    PsInputEmailComponent: _psComponents_ps_keyin_input_ps_input_email_ps_input_email_component__WEBPACK_IMPORTED_MODULE_16__["PsInputEmailComponent"],
    PsInputNumericComponent: _psComponents_ps_keyin_input_ps_input_numeric_ps_input_numeric_component__WEBPACK_IMPORTED_MODULE_18__["PsInputNumericComponent"],
    PsDropdownNationalitiesComponent: _psComponents_ps_select_dropdown_ps_dropdown_nationalities_ps_dropdown_nationalities_component__WEBPACK_IMPORTED_MODULE_24__["PsDropdownNationalitiesComponent"],
    PsDropdownOccupationComponent: _psComponents_ps_select_dropdown_ps_dropdown_occupation_ps_dropdown_occupation_component__WEBPACK_IMPORTED_MODULE_25__["PsDropdownOccupationComponent"],
    PsDateDayMonthYearPastComponent: _psComponents_ps_keyin_input_ps_day_month_year_ps_date_day_month_year_past_ps_date_day_month_year_past_component__WEBPACK_IMPORTED_MODULE_14__["PsDateDayMonthYearPastComponent"],
    PsInputFreeTextComponent: _psComponents_ps_keyin_input_ps_input_free_text_ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_17__["PsInputFreeTextComponent"],
    PsInputVarcharComponent: _psComponents_ps_keyin_input_ps_input_varchar_ps_input_varchar_component__WEBPACK_IMPORTED_MODULE_20__["PsInputVarcharComponent"],
    PsInputCardNumberComponent: _psComponents_ps_keyin_input_ps_input_card_number_ps_input_card_number_component__WEBPACK_IMPORTED_MODULE_15__["PsInputCardNumberComponent"],
    PsDropdownFundSourcesComponent: _psComponents_ps_select_dropdown_ps_dropdown_fund_sources_ps_dropdown_fund_sources_component__WEBPACK_IMPORTED_MODULE_23__["PsDropdownFundSourcesComponent"],
    PsDropdownWealthSourcesComponent: _psComponents_ps_select_dropdown_ps_dropdown_wealth_sources_ps_dropdown_wealth_sources_component__WEBPACK_IMPORTED_MODULE_26__["PsDropdownWealthSourcesComponent"],
    PsDropdownCountryComponent: _psComponents_ps_select_dropdown_ps_dropdown_country_ps_dropdown_country_component__WEBPACK_IMPORTED_MODULE_22__["PsDropdownCountryComponent"],
    PsButtonNextComponent: src_app_commonSRC_psComponents_ps_base_ps_base_action_ps_action_button_ps_button_next_ps_button_next_component__WEBPACK_IMPORTED_MODULE_2__["PsButtonNextComponent"]
};
PsCommonBusinesstMappingConstants.ctorParameters = () => [];
PsCommonBusinesstMappingConstants = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PsCommonBusinesstMappingConstants);



/***/ }),

/***/ "GlqB":
/*!*******************************************************************!*\
  !*** ./src/app/pages/bpm-dynamic-page/bpm-dynamic-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: BpmDynamicPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmDynamicPagePageModule", function() { return BpmDynamicPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_bpm_flow_ps_template_bpm_flow_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.module */ "jUhy");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _bpm_dynamic_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bpm-dynamic-page.page */ "dlXr");






const routes = [
    {
        path: '',
        component: _bpm_dynamic_page_page__WEBPACK_IMPORTED_MODULE_5__["BpmDynamicPagePage"]
    }
];
let BpmDynamicPagePageModule = class BpmDynamicPagePageModule {
};
BpmDynamicPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psTemplates_ps_template_bpm_flow_ps_template_bpm_flow_template_module__WEBPACK_IMPORTED_MODULE_3__["PsTemplateBPMFlowModule"]
        ],
        declarations: [_bpm_dynamic_page_page__WEBPACK_IMPORTED_MODULE_5__["BpmDynamicPagePage"]]
    })
], BpmDynamicPagePageModule);



/***/ }),

/***/ "Iq5Ni":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1wYXNzY29kZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "LaLV":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" class=\"ps-input-card-number\" [options]=\"defaultOptions\" (keyup)=\"changeCardIcon($event)\">\r\n</ps-keyin-input>");

/***/ }),

/***/ "Lb7B":
/*!************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kYXRlLWRheS1tb250aC15ZWFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Ngnl":
/*!*************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1lbWFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "OfGH":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-wealth-sources/ps-dropdown-wealth-sources.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"selectDropDownChange($event)\">\n</ps-select-dropdown>");

/***/ }),

/***/ "P7Z/":
/*!***********************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PsInputEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputEmailComponent", function() { return PsInputEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-email.component.html */ "gSeR");
/* harmony import */ var _ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-email.component.scss */ "Ngnl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsInputEmailComponent = class PsInputEmailComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_4__["PsKeyinInputComponent"] {
    constructor(commonP, loggerP) {
        super(commonP, loggerP);
        this.mainOptions = {};
    }
    ngOnInit() {
        this.mainOptions = this.options;
        this.mainOptions.type = 'email';
        this.mainOptions.iconOptions = {
            iconName: 'input-mail'
        };
    }
    onChangeEmail($event) {
        this.onPsChange.emit($event);
    }
};
PsInputEmailComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsInputEmailComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-email',
        template: _raw_loader_ps_input_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsInputEmailComponent);



/***/ }),

/***/ "RW5F":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PsInputPasscodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputPasscodeComponent", function() { return PsInputPasscodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_passcode_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-passcode.component.html */ "ps3I");
/* harmony import */ var _ps_input_passcode_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-passcode.component.scss */ "Iq5Ni");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_entity_ps_field_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-entity/ps-field-entity.component */ "k3/b");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");







let PsInputPasscodeComponent = class PsInputPasscodeComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_entity_ps_field_entity_component__WEBPACK_IMPORTED_MODULE_4__["PsFieldEntityComponent"] {
    constructor(common, logger) {
        super(common, logger);
        this.common = common;
        this.logger = logger;
        this.onPsKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.defaultOptions = {
            type: 'number',
            mask: {
                regex: '^[0-9]$'
            }
        };
        this.passcodeItemOptions = {
            psClass: 'ps-input-passcode'
        };
        this.codeDigitsOptions = [];
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
        for (let index = 0; index < 4; index++) {
            const digit = {
                fcName: this.defaultOptions.fcName + index,
                group: this.defaultOptions.group,
                mask: {
                    regex: this.defaultOptions.mask.regex
                }
            };
            this.codeDigitsOptions.push(digit);
        }
        this.commonProv.setFormData(this.entityFormGroup, this.options.requestObject);
    }
    inputChanged(event) {
        var _a, _b;
        if (event) {
            let inputValue = '';
            for (const digit of this.codeDigitsOptions) {
                if ((_a = this.options.group.controls[digit.fcName]) === null || _a === void 0 ? void 0 : _a.value) {
                    inputValue += (_b = this.options.group.controls[digit.fcName]) === null || _b === void 0 ? void 0 : _b.value;
                }
            }
            this.setEntityValue(parseInt(inputValue));
        }
    }
    moveToNextDigit(field) {
        this.onPsKeyUp.emit(field);
    }
};
PsInputPasscodeComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
PsInputPasscodeComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onPsKeyUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsInputPasscodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-passcode',
        template: _raw_loader_ps_input_passcode_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_passcode_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_6__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], PsInputPasscodeComponent);



/***/ }),

/***/ "Tlgk":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-date [options]=\"dateOptions\" [id]=\"id\" class=\"ps-day-month-year\" (onPsChange)=\"dateChanged($event)\" (onPsInit)=\"this.onInit($event)\"></ps-keyin-date>");

/***/ }),

/***/ "TqLw":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-fund-sources/ps-dropdown-fund-sources.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: PsDropdownFundSourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownFundSourcesComponent", function() { return PsDropdownFundSourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_fund_sources_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-fund-sources.component.html */ "+9nY");
/* harmony import */ var _ps_dropdown_fund_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-fund-sources.component.scss */ "4X+U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








let PsDropdownFundSourcesComponent = class PsDropdownFundSourcesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["PsSelectDropdownComponent"] {
    constructor(commonService, logger, omniPullService) {
        super(commonService, logger);
        this.omniPullService = omniPullService;
        this.options = {};
        this.defaultOptions = {
            listOfOptions: [],
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
        this.loadFundSources();
    }
    /**
     * populating Facility types fetched from server
     */
    loadFundSources() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fundSources = {
                gridModel: [
                    {
                        briefDesc: "Salary And Wages",
                        longDesc: "Salary And Wages",
                        code: "248",
                    },
                    {
                        briefDesc: "Bonus And Commission",
                        longDesc: "Bonus And Commission",
                        code: "268",
                    },
                    {
                        briefDesc: "Business Income",
                        longDesc: "Business Income",
                        code: "278",
                    },
                    {
                        briefDesc: "Investment Return",
                        longDesc: "Investment Return",
                        code: "898",
                    },
                    {
                        briefDesc: "Centrelink Payments",
                        longDesc: "Centrelink Payments",
                        code: "874",
                    }
                ]
            };
            if (fundSources && fundSources.gridModel && fundSources.gridModel.length > 0) {
                for (const iterator of fundSources.gridModel) {
                    const fundSource = {
                        itemValue: iterator.code,
                        description: iterator.briefDesc,
                        selectedObj: iterator
                    };
                    this.defaultOptions.listOfOptions.push(fundSource);
                }
            }
        });
    }
    selectDropDownChange(values) {
        this.onPsChange.emit(values);
    }
};
PsDropdownFundSourcesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsDropdownFundSourcesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownFundSourcesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-fund-sources',
        template: _raw_loader_ps_dropdown_fund_sources_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_fund_sources_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsDropdownFundSourcesComponent);



/***/ }),

/***/ "WGyA":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: PsDropdownOccupationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownOccupationComponent", function() { return PsDropdownOccupationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_occupation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-occupation.component.html */ "doD4");
/* harmony import */ var _ps_dropdown_occupation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-occupation.component.scss */ "ywvj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownOccupationComponent = class PsDropdownOccupationComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.occupationOptions = {};
    }
    ngOnInit() {
        this.loadOccupation();
        this.commonProv.copyObject(this.occupationOptions, this.options);
    }
    onChangeOccupation(value) {
        this.onPsChange.emit(value);
    }
    loadOccupation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = {
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].OCCUPATION_OPER_ID
            };
            const result = yield this.omniPull.reutrnOccupation(params).catch(error => {
                this.logger.error('Error ! while fetching occupation in PsDropdownOccupationComponent', error);
            });
            this.occupationOptions.listOfOptions = [];
            if (result && result.gridModel && result.gridModel.length > 0) {
                for (const iterator of result.gridModel) {
                    const country = {
                        itemValue: iterator.positionCode,
                        description: iterator.briefDescription,
                        selectedObj: iterator
                    };
                    this.occupationOptions.listOfOptions.push(country);
                }
            }
        });
    }
};
PsDropdownOccupationComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownOccupationComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownOccupationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-occupation',
        template: _raw_loader_ps_dropdown_occupation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_occupation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownOccupationComponent);



/***/ }),

/***/ "dUiw":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-nationalities/ps-dropdown-nationalities.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: PsDropdownNationalitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownNationalitiesComponent", function() { return PsDropdownNationalitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_nationalities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-nationalities.component.html */ "++mf");
/* harmony import */ var _ps_dropdown_nationalities_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-nationalities.component.scss */ "4GcI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");









let PsDropdownNationalitiesComponent = class PsDropdownNationalitiesComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.defaultSelectOptions = {};
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultSelectOptions, this.options, false);
        this.returnNationalities();
    }
    returnNationalities() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nationaltiesRequest = {
                operId: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].NATIONALITY_OPER_ID
            }; // No need other than company code as all the nationalities will be retrieved
            const nationalitiesResponse = yield this.omniPull.returnNationalities(nationaltiesRequest).catch(error => {
                this.logger.error('Error! while fetching nationalities in PsDropdownNationalitiesComponent', error);
            });
            this.defaultSelectOptions.listOfOptions = [];
            if (nationalitiesResponse && nationalitiesResponse.gridModel && nationalitiesResponse.gridModel.length > 0) {
                for (const iterator of nationalitiesResponse.gridModel) {
                    const documents = {
                        itemValue: iterator.NATIONALITY_CODE,
                        description: iterator.longDesc,
                        selectedObj: iterator
                    };
                    this.defaultSelectOptions.listOfOptions.push(documents);
                }
                this.options.listOfOptions = [];
                this.commonProv.copyObject(this.options.listOfOptions, this.defaultSelectOptions.listOfOptions, false);
            }
        });
    }
    onChange(value) {
        this.onPsChange.emit(value);
    }
};
PsDropdownNationalitiesComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownNationalitiesComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownNationalitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-nationalities',
        template: _raw_loader_ps_dropdown_nationalities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_nationalities_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_8__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownNationalitiesComponent);



/***/ }),

/***/ "doD4":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\"  [options]=\"occupationOptions\" (onPsChange)=\"onChangeOccupation($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "fyCU":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-terms-and-conditions/ps-complex-terms-and-conditions.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "gSeR":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-email/ps-input-email.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" [options]=\"mainOptions\"  (onPsChange)=\"onChangeEmail($event)\"></ps-keyin-input>\n");

/***/ }),

/***/ "jEzM":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1pbnB1dC1jYXJkLW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "jHwt":
/*!***********************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy10ZW1wbGF0ZS1icG0tZmxvdy50ZW1wbGF0ZS5zY3NzIn0= */");

/***/ }),

/***/ "jUhy":
/*!****************************************************************************************************!*\
  !*** ./src/app/commonSRC/psTemplates/ps-template-bpm-flow/ps-template-bpm-flow.template.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: PsTemplateBPMFlowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsTemplateBPMFlowModule", function() { return PsTemplateBPMFlowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-call-slot/ps-complex-call-slot.component.module */ "Aju7");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-media-capture/ps-complex-media-capture.component.module */ "dz/v");
/* harmony import */ var _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "rlZq");
/* harmony import */ var _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ps-template-screen/ps-template-screen.template.module */ "63Vm");
/* harmony import */ var _ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ps-template-bpm-flow.template */ "8WI6");








let PsTemplateBPMFlowModule = class PsTemplateBPMFlowModule {
};
PsTemplateBPMFlowModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBPMFlow"]],
        imports: [
            _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            _ps_template_screen_ps_template_screen_template_module__WEBPACK_IMPORTED_MODULE_6__["PsTemplateScreenPageModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_call_slot_ps_complex_call_slot_component_module__WEBPACK_IMPORTED_MODULE_2__["PsComplexCallSlotComponentModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_media_capture_ps_complex_media_capture_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexMediaCaptureComponentModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBPMFlow"]],
        exports: [_ps_template_bpm_flow_template__WEBPACK_IMPORTED_MODULE_7__["PsTemplateBPMFlow"]],
    })
], PsTemplateBPMFlowModule);



/***/ }),

/***/ "jmNg":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-date-day-month-year [options]=\"dateDayMonthYearOptions\" [id]=\"id\" (onPsChange)=\"onChange($event)\">\n</ps-date-day-month-year>");

/***/ }),

/***/ "ngfJ":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-day-month-year/ps-date-day-month-year-past/ps-date-day-month-year-past.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: PsDateDayMonthYearPastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDateDayMonthYearPastComponent", function() { return PsDateDayMonthYearPastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-date-day-month-year-past.component.html */ "jmNg");
/* harmony import */ var _ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-date-day-month-year-past.component.scss */ "EBce");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ps-date-day-month-year.component */ "BcCD");
/* harmony import */ var src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/Event/event.service */ "r40+");








let PsDateDayMonthYearPastComponent = class PsDateDayMonthYearPastComponent extends _ps_date_day_month_year_component__WEBPACK_IMPORTED_MODULE_6__["PsDateDayMonthYearComponent"] {
    constructor(commonProv, loggerP, events) {
        super(commonProv, loggerP, events);
        this.commonProv = commonProv;
        this.dateDayMonthYearOptions = {
            max: new Date()
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.dateDayMonthYearOptions, this.options, false);
    }
    superWriteValue(val) {
        super.writeValue(val);
    }
};
PsDateDayMonthYearPastComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
    { type: src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"] }
];
PsDateDayMonthYearPastComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDateDayMonthYearPastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-date-day-month-year-past',
        template: _raw_loader_ps_date_day_month_year_past_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_date_day_month_year_past_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], src_app_commonSRC_psServices_Event_event_service__WEBPACK_IMPORTED_MODULE_7__["Events"]])
], PsDateDayMonthYearPastComponent);



/***/ }),

/***/ "ps3I":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-passcode/ps-input-passcode.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-field-entity [options]=\"options\">\n  <ps-container-item class=\"ps-field-item-wrapper main-container ps-container-passcode\" [options]=\"passcodeItemOptions\">\n    <ps-keyin-input *ngFor=\"let digitOption of codeDigitsOptions\" class=\"ps-input-passcode-digit\" #digit\n      [id]=\"digitOption.fcName\" [options]=\"digitOption\" (onPsChange)=\"inputChanged($event)\"\n      (onPsEmpty)=\"onEmpty($event)\" (onPsKeyUp)=\"moveToNextDigit(digit)\"></ps-keyin-input>\n  </ps-container-item>\n</ps-field-entity>");

/***/ }),

/***/ "wsER":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-keyin-input [id]=\"id\" [options]=\"defaultOptions\" (onPsChange)=\"onInputChanged($event)\"></ps-keyin-input>");

/***/ }),

/***/ "x3b/":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-card-number/ps-input-card-number.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PsInputCardNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputCardNumberComponent", function() { return PsInputCardNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_input_card_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-input-card-number.component.html */ "LaLV");
/* harmony import */ var _ps_input_card_number_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-input-card-number.component.scss */ "jEzM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-keyin/ps-keyin-input/ps-keyin-input.component */ "BYmO");







/**
 * @author Zunair Zakir
 * @since 01/11/2019
 *
 * <p> PsInputCardNumberComponent is a simple component base on ps-keyin-input and have free text field</p>
 */
let PsInputCardNumberComponent = class PsInputCardNumberComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_keyin_ps_keyin_input_ps_keyin_input_component__WEBPACK_IMPORTED_MODULE_6__["PsKeyinInputComponent"] {
    constructor(commonService, logger) {
        super(commonService, logger);
        this.options = {};
        this.defaultOptions = {
            mask: { mask: '9999 9999 9999 9999' },
            labelKey: 'card_number_key',
            placeHolder: 'enter_your_card_number_key',
            type: 'tel',
            imageOptions: {
                imageName: '',
                psClass: 'card-action-image'
            }
        };
    }
    ngOnInit() {
        this.commonProv.copyObject(this.defaultOptions, this.options, false);
    }
    changeCardIcon(event) {
        const currentValue = event.target.value;
        if (currentValue.startsWith('4')) {
            this.defaultOptions.imageOptions.imageName = 'Visa-Curved.png';
        }
        else if (this.checkCard(52, 55, currentValue) || this.checkCard(2221, 2720, currentValue)) {
            this.defaultOptions.imageOptions.imageName = 'Mastercard-Curved.png';
        }
        else if (currentValue.startsWith('34') || currentValue.startsWith('37')) {
            this.defaultOptions.imageOptions.imageName = 'American-Express-Curved.png';
        }
        else if (currentValue.startsWith('6011') || currentValue.startsWith('65')) {
            this.defaultOptions.imageOptions.imageName = 'Discover-Straight.png';
        }
        else if (currentValue.startsWith('36') || currentValue.startsWith('38') || this.checkCard(300, 305, currentValue)) {
            this.defaultOptions.imageOptions.imageName = 'DinerClub.png';
        }
        else if (currentValue.startsWith('35') || currentValue.startsWith('2131') || currentValue.startsWith('1800')) {
            this.defaultOptions.imageOptions.imageName = 'jbc-card.jpg';
        }
        else {
            this.defaultOptions.imageOptions.imageName = '';
        }
    }
    checkCard(start, end, value) {
        let found = false;
        if (value && start && end) {
            for (let i = start; i <= end; i++) {
                if (value.startsWith(i.toString())) {
                    found = true;
                    break;
                }
            }
        }
        return found;
    }
};
PsInputCardNumberComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }
];
PsInputCardNumberComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsInputCardNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-input-card-number',
        template: _raw_loader_ps_input_card_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_input_card_number_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_5__["PsCommonService"],
        src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
], PsInputCardNumberComponent);



/***/ }),

/***/ "ywvj":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-occupation/ps-dropdown-occupation.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1vY2N1cGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-bpm-dynamic-page-bpm-dynamic-page-module-es2015.js.map