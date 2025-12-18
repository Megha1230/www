(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-security-questions-change-security-questions-module"],{

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

/***/ "+TG9":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1jb21wbGV4LXNlY3VyaXR5LXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "+hm1":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-security-question/ps-dropdown-security-question.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcy1kcm9wZG93bi1zZWN1cml0eS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "2A9y":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PsInputFreeTextComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsInputFreeTextComponentModule", function() { return PsInputFreeTextComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-input-free-text.component */ "+BRL");





let PsInputFreeTextComponentModule = class PsInputFreeTextComponentModule {
};
PsInputFreeTextComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]
        ],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_2__["PsComponentsModule"]
        ],
        exports: [
            _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]
        ],
        entryComponents: [
            _ps_input_free_text_component__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsInputFreeTextComponentModule);



/***/ }),

/***/ "87mA":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.module.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: PsComplexSecurityQuestionComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSecurityQuestionComponentModule", function() { return PsComplexSecurityQuestionComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ps-keyin-input/ps-input-free-text/ps-input-free-text.component.module */ "2A9y");
/* harmony import */ var _ps_select_dropdown_ps_dropdown_security_question_ps_dropdown_security_question_component_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ps-select-dropdown/ps-dropdown-security-question/ps-dropdown-security-question.component.module */ "HDcr");
/* harmony import */ var _ps_complex_security_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ps-complex-security-questions.component */ "R5ro");







let PsComplexSecurityQuestionComponentModule = class PsComplexSecurityQuestionComponentModule {
};
PsComplexSecurityQuestionComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_complex_security_questions_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSecurityQuestionComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"],
            _ps_select_dropdown_ps_dropdown_security_question_ps_dropdown_security_question_component_module__WEBPACK_IMPORTED_MODULE_5__["PsDropdownSecurityQuestionComponentModule"],
            _ps_keyin_input_ps_input_free_text_ps_input_free_text_component_module__WEBPACK_IMPORTED_MODULE_4__["PsInputFreeTextComponentModule"]
        ],
        exports: [_ps_complex_security_questions_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSecurityQuestionComponent"]],
        entryComponents: [_ps_complex_security_questions_component__WEBPACK_IMPORTED_MODULE_6__["PsComplexSecurityQuestionComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsComplexSecurityQuestionComponentModule);



/***/ }),

/***/ "AEMB":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-security-question/ps-dropdown-security-question.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-select-dropdown [id]=\"id\" class=\"ps-dropdown-security-questions\" [options]=\"securityQuestionOptions\" (onPsChange)=\"onChangeSecurityQuestion($event)\"></ps-select-dropdown>");

/***/ }),

/***/ "HDcr":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-security-question/ps-dropdown-security-question.component.module.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: PsDropdownSecurityQuestionComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownSecurityQuestionComponentModule", function() { return PsDropdownSecurityQuestionComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var _ps_dropdown_security_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ps-dropdown-security-question.component */ "QJZ3");





let PsDropdownSecurityQuestionComponentModule = class PsDropdownSecurityQuestionComponentModule {
};
PsDropdownSecurityQuestionComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ps_dropdown_security_question_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownSecurityQuestionComponent"]],
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_3__["PsComponentsModule"]
        ],
        exports: [_ps_dropdown_security_question_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownSecurityQuestionComponent"]],
        entryComponents: [_ps_dropdown_security_question_component__WEBPACK_IMPORTED_MODULE_4__["PsDropdownSecurityQuestionComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PsDropdownSecurityQuestionComponentModule);



/***/ }),

/***/ "QJZ3":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-select-dropdown/ps-dropdown-security-question/ps-dropdown-security-question.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: PsDropdownSecurityQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsDropdownSecurityQuestionComponent", function() { return PsDropdownSecurityQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_dropdown_security_question_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-dropdown-security-question.component.html */ "AEMB");
/* harmony import */ var _ps_dropdown_security_question_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-dropdown-security-question.component.scss */ "+hm1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/models/ps-common-bussiness-constant */ "V0Fi");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");
/* harmony import */ var _commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../commonSRC/psComponents/ps-base/ps-base-field/ps-field-select/ps-select-dropdown/ps-select-dropdown.component */ "iOQE");









/**
 * @author Zunair.Zakir
 * @since 26/10/2019
 *
 * <p> PsDropdownSecurityQuestionComponent is a simple component base on ps-select-dropdown </p>
 */
let PsDropdownSecurityQuestionComponent = class PsDropdownSecurityQuestionComponent extends _commonSRC_psComponents_ps_base_ps_base_field_ps_field_select_ps_select_dropdown_ps_select_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["PsSelectDropdownComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.securityQuestionOptions = {
            labelKey: 'security_question_key',
            placeHolder: 'select_security_question_key',
            fcName: this.options.fcName,
            group: this.options.group,
            iconOptions: {
                iconName: 'lock-closed'
            }
        };
        this.loadSecurityQuestions();
    }
    onChangeSecurityQuestion(value) {
        this.onPsChange.emit(value);
    }
    loadSecurityQuestions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.omniPull.returnSecurityQuestion({ nbRec: -1, status: src_app_commonBussinessSRC_psServices_models_ps_common_bussiness_constant__WEBPACK_IMPORTED_MODULE_4__["CommonBussinessConstant"].STATUS_APPROVED }).catch(error => {
                this.logger.error('Error! while fetching security quetions in PsDropdownSecurityQuestionComponent :', error);
            });
            this.securityQuestionOptions.listOfOptions = [];
            if (result && result.gridModel) {
                for (const iterator of result.gridModel) {
                    const securityQuestion = {
                        itemValue: iterator.securityQuestionVO.SECURITY_ID,
                        description: iterator.securityQuestionVO.DESCRIPTION,
                        selectedObj: iterator
                    };
                    this.securityQuestionOptions.listOfOptions.push(securityQuestion);
                }
            }
        });
    } // end of loadSecurityQuestions()
};
PsDropdownSecurityQuestionComponent.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"] }
];
PsDropdownSecurityQuestionComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PsDropdownSecurityQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-dropdown-security-question',
        template: _raw_loader_ps_dropdown_security_question_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_dropdown_security_question_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], src_app_commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
        src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_5__["OmniPullService"]])
], PsDropdownSecurityQuestionComponent);



/***/ }),

/***/ "R5ro":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: PsComplexSecurityQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsComplexSecurityQuestionComponent", function() { return PsComplexSecurityQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ps_complex_security_questions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ps-complex-security-questions.component.html */ "ZyhN");
/* harmony import */ var _ps_complex_security_questions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ps-complex-security-questions.component.scss */ "+TG9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonBussinessSRC/psServices/omni-common/omni-pull.service */ "ZyuK");
/* harmony import */ var src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-base/ps-base-field/ps-base-field.component */ "ZF3V");
/* harmony import */ var _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commonSRC/psServices/logger/logger.service */ "DFXC");
/* harmony import */ var _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");








/**
 * @author Zunair.Zakir
 * @since 27/10/2019
 *
 * <p> PsComplexSecurityQuestionComponent is a complex component base on ps-dropdown-security-question component</p>
 */
let PsComplexSecurityQuestionComponent = class PsComplexSecurityQuestionComponent extends src_app_commonSRC_psComponents_ps_base_ps_base_field_ps_base_field_component__WEBPACK_IMPORTED_MODULE_5__["PsBaseFieldComponent"] {
    constructor(commonProv, loggerP, omniPull) {
        super(commonProv, loggerP);
        this.commonProv = commonProv;
        this.loggerP = loggerP;
        this.omniPull = omniPull;
        this.onSecurityQuestionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onAnswerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        super.init();
        this.options.securityAnswerOptions.revertToOldValue = false; //added by Marina TP:#1590807 security question answer field shouldn't revert to old value
        if (this.options && this.options.securityAnswerOptions) {
            this.options.securityAnswerOptions.iconOptions = {
                iconName: 'key1',
            };
        }
        this.omniPull.getParamValOf('EnableSecurityQuestion').then(res => {
            this.EnableSecurityQuestion = res.EnableSecurityQuestion;
        }).catch(err => this.logger.log(err));
    }
    onChangeSecurityQuestion(value) {
        this.onSecurityQuestionChange.emit(value);
    }
    onChangeAnwer(value) {
        this.onAnswerChange.emit(value);
    }
};
PsComplexSecurityQuestionComponent.ctorParameters = () => [
    { type: _commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"] },
    { type: _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
    { type: src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"] }
];
PsComplexSecurityQuestionComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onSecurityQuestionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onAnswerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
PsComplexSecurityQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ps-complex-security-questions',
        template: _raw_loader_ps_complex_security_questions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ps_complex_security_questions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_7__["PsCommonService"], _commonSRC_psServices_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"], src_app_commonBussinessSRC_psServices_omni_common_omni_pull_service__WEBPACK_IMPORTED_MODULE_4__["OmniPullService"]])
], PsComplexSecurityQuestionComponent);



/***/ }),

/***/ "ZyhN":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ps-container-complex [id]=\"'container_complex_'+id\" *ngIf=\"EnableSecurityQuestion\">\n\n    <ng-container *ngIf=\"options.group\">\n\n        <ps-dropdown-security-question [id]=\"'sec_question_'+id\" [options]=\"options.securityQuestionOptions\"\n            (onPsChange)=\"onChangeSecurityQuestion($event)\"></ps-dropdown-security-question>\n\n\n\n        <ps-input-free-text [id]=\"'sec_answer_'+id\" (onPsChange)=\"onChangeAnwer($event)\"\n            [options]=\"options.securityAnswerOptions\"></ps-input-free-text>\n\n    </ng-container>\n\n</ps-container-complex>");

/***/ }),

/***/ "rOWv":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/change-security-questions/change-security-questions.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ChangeSecurityQuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSecurityQuestionsPageModule", function() { return ChangeSecurityQuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_security_questions_ps_complex_security_questions_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/commonBussinessSRC/psComponents/ps-complex-components/ps-complex-security-questions/ps-complex-security-questions.component.module */ "87mA");
/* harmony import */ var src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commonSRC/psComponents/ps-components.module */ "dqXS");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-form/ps-template-form.template.module */ "YBCg");
/* harmony import */ var src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commonSRC/psTemplates/ps-template-stepper/ps-template-stepper.template.module */ "fM+N");
/* harmony import */ var src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commonSRC/shared.module */ "rlZq");
/* harmony import */ var _change_security_questions_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-security-questions.page */ "5Si6");









const routes = [
    {
        path: '',
        component: _change_security_questions_page__WEBPACK_IMPORTED_MODULE_8__["ChangeSecurityQuestionsPage"]
    }
];
let ChangeSecurityQuestionsPageModule = class ChangeSecurityQuestionsPageModule {
};
ChangeSecurityQuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_commonSRC_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_commonSRC_psTemplates_ps_template_form_ps_template_form_template_module__WEBPACK_IMPORTED_MODULE_5__["PsTemplateFormModule"],
            src_app_commonSRC_psComponents_ps_components_module__WEBPACK_IMPORTED_MODULE_4__["PsComponentsModule"],
            src_app_commonBussinessSRC_psComponents_ps_complex_components_ps_complex_security_questions_ps_complex_security_questions_component_module__WEBPACK_IMPORTED_MODULE_3__["PsComplexSecurityQuestionComponentModule"],
            src_app_commonSRC_psTemplates_ps_template_stepper_ps_template_stepper_template_module__WEBPACK_IMPORTED_MODULE_6__["PsTemplateStepperModule"],
        ],
        declarations: [_change_security_questions_page__WEBPACK_IMPORTED_MODULE_8__["ChangeSecurityQuestionsPage"]]
    })
], ChangeSecurityQuestionsPageModule);



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

/***/ })

}]);
//# sourceMappingURL=pages-change-security-questions-change-security-questions-module-es2015.js.map