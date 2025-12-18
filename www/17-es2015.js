(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "tC40":
/*!**************************************************************************************!*\
  !*** ./src/app/commonBussinessSRC/psServices/beneficiaries/beneficiaries.service.ts ***!
  \**************************************************************************************/
/*! exports provided: BeneficiariesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesService", function() { return BeneficiariesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/commonSRC/psServices/ps-common/ps-common.service */ "Q0Ba");



let BeneficiariesService = class BeneficiariesService {
    constructor(commonService) {
        this.commonService = commonService;
    }
    populateInternalBeneficiaries(internalBeneficiaries) {
        var _a;
        const internalBeneficiariesList = [];
        for (const iterator of internalBeneficiaries) {
            if (iterator && iterator.submitFieldValueMap) {
                const internalBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    benefBankName: iterator.submitFieldValueMap.benefBankName,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    currency: iterator.submitFieldValueMap.currency,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: 'active_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'benefName',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: ((_a = iterator.submitFieldValueMap.accountObject) === null || _a === void 0 ? void 0 : _a.accountNumber) || iterator.submitFieldValueMap.accountNumber,
                    //lookup shown keys
                    bankAccountNumberKey: iterator.submitFieldValueMap.accountNumber,
                    bankBenefNameKey: iterator.submitFieldValueMap.benefName,
                    bankPurposeKey: iterator.submitFieldValueMap.purpose,
                    bankBenefPhoneKey: iterator.submitFieldValueMap.benefPhone,
                    bankTitleKey: iterator.submitFieldValueMap.accountNumber
                };
                internalBeneficiariesList.push(internalBeneficiary);
            }
        }
        return internalBeneficiariesList;
    }
    /**
     * customizing local beneficiary object
     * @param gridModel
     */
    populateLocalBeneficiaries(localBeneficiaries) {
        const localBeneficiariesList = [];
        for (const iterator of localBeneficiaries) {
            if (iterator && iterator.submitFieldValueMap) {
                const localBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    benefBankName: iterator.submitFieldValueMap.bankDescriptionConcat,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: iterator.status == 'A' ? 'active_key' : 'pending_for_approval_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefBankId: iterator.submitFieldValueMap.bank,
                    benefBranchId: iterator.submitFieldValueMap.branch,
                    currency: iterator.submitFieldValueMap.currency,
                    bank: iterator.submitFieldValueMap.bank,
                    branch: iterator.submitFieldValueMap.branch,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    benefBranchTxt: iterator.submitFieldValueMap.benefBranchTxt,
                    previewProperty: 'benefName',
                    benefBvn: iterator.submitFieldValueMap.benefBvn,
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.accountNumber,
                    //lookups keys
                    localBenefNameKey: iterator.submitFieldValueMap.benefName,
                    localAccountNumberKey: iterator.submitFieldValueMap.accountNumber,
                    localBenefBankNameKey: iterator.submitFieldValueMap.bankDescriptionConcat,
                    benefBvnKey: iterator.submitFieldValueMap.benefBvn,
                    localTitleKey: iterator.submitFieldValueMap.accountNumber
                };
                localBeneficiariesList.push(localBeneficiary);
            }
        }
        return localBeneficiariesList;
    }
    /**
     * customizing international beneficiary object
     * @param gridModel
     */
    populateInternationalBeneficiaries(internationBeneficiaries) {
        const internationalBeneficiariesList = [];
        for (const iterator of internationBeneficiaries) {
            if (iterator && iterator.submitFieldValueMap) {
                const internationalBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    accountNumber: iterator.submitFieldValueMap.accountNumber,
                    benefBankName: iterator.submitFieldValueMap.bankName,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    benefReason: iterator.submitFieldValueMap.benefReason,
                    status: iterator.status == 'A' ? 'active_key' : 'pending_for_approval_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    currency: iterator.submitFieldValueMap.currency,
                    bank: iterator.submitFieldValueMap.bank,
                    branch: iterator.submitFieldValueMap.branch,
                    country: iterator.submitFieldValueMap.country,
                    swiftCode: iterator.submitFieldValueMap.swiftCode,
                    bankName: iterator.submitFieldValueMap.bankName,
                    region: iterator.submitFieldValueMap.region,
                    cityDetails: iterator.submitFieldValueMap.cityDetails,
                    city: iterator.submitFieldValueMap.city,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'benefName',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.accountNumber,
                    //lookups keys
                    swiftBenefNameKey: iterator.submitFieldValueMap.benefName,
                    swiftAccountNumberKey: iterator.submitFieldValueMap.accountNumber,
                    swiftBenefBankNameKey: iterator.submitFieldValueMap.bankName,
                    swiftTitleKey: iterator.submitFieldValueMap.accountNumber
                };
                internationalBeneficiariesList.push(internationalBeneficiary);
            }
        }
        return internationalBeneficiariesList;
    }
    populateBankCardBeneficiaries(bankCardBeneficiaries) {
        const bankCardBeneficiariesList = [];
        for (const iterator of bankCardBeneficiaries) {
            if (iterator && iterator.submitFieldValueMap) {
                const bankCardBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    cardNumber: iterator.submitFieldValueMap.cardNumber,
                    benefBankName: iterator.submitFieldValueMap.benefBankName,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: 'active_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'cardNumber',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.cardNumber,
                    //lookup keys
                    bankCardBenefNameKey: iterator.submitFieldValueMap.benefName,
                    bankCardNumberKey: iterator.submitFieldValueMap.cardNumber,
                    bankCardPurposeKey: iterator.submitFieldValueMap.purpose,
                    bankCardBenefPhoneKey: iterator.submitFieldValueMap.benefPhone,
                    bankCardtitleKey: iterator.submitFieldValueMap.cardNumber
                };
                bankCardBeneficiariesList.push(bankCardBeneficiary);
            }
        }
        return bankCardBeneficiariesList;
    }
    populateLocalCardBeneficiaries(LocalCardBeneficiaries) {
        const localCardBeneficiariesList = [];
        for (const iterator of LocalCardBeneficiaries) {
            if (iterator && iterator.submitFieldValueMap) {
                const LocalCardBeneficiary = {
                    nickName: iterator.nickName ? iterator.nickName : this.commonService.translate('add_nickname_key'),
                    benefName: iterator.submitFieldValueMap.benefName,
                    cardNumber: iterator.submitFieldValueMap.cardNumber,
                    benefBankName: iterator.submitFieldValueMap.bankDescriptionConcat,
                    bank: iterator.submitFieldValueMap.bank,
                    benefBranchTxt: iterator.submitFieldValueMap.benefBranchTxt,
                    currencyDesc: iterator.submitFieldValueMap.currencyDescriptionConcat,
                    currency: iterator.submitFieldValueMap.currency,
                    benefId: iterator.submitFieldValueMap.benefId,
                    benefNickName: iterator.submitFieldValueMap.benefNickName,
                    purpose: iterator.submitFieldValueMap.purpose,
                    status: 'active_key',
                    statusCode: iterator.status,
                    dataSaveId: iterator.dataSaveId,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    previewProperty: 'cardNumber',
                    nickNameNumber: iterator.dataSaveId ? iterator.dataSaveId : undefined,
                    lookupKey: iterator.submitFieldValueMap.cardNumber,
                    //lookup keys
                    localCardBenefNameKey: iterator.submitFieldValueMap.benefName,
                    localCardNumberKey: iterator.submitFieldValueMap.cardNumber,
                    localCardBenefBankNameKey: iterator.submitFieldValueMap.bankDescriptionConcat,
                    localCardBenefBranchTxtKey: iterator.submitFieldValueMap.benefBranchTxt,
                    localCardTitleKey: iterator.submitFieldValueMap.cardNumber
                };
                localCardBeneficiariesList.push(LocalCardBeneficiary);
            }
        }
        return localCardBeneficiariesList;
    }
    populateCashTransfers(cashTransfers) {
        const cashTransfersList = [];
        for (const iterator of cashTransfers) {
            if (iterator && iterator.submitFieldValueMap) {
                const transfer = {
                    idType: iterator.submitFieldValueMap.idType,
                    idNumber: iterator.submitFieldValueMap.idNumber,
                    idTypeDescriptionConcat: iterator.submitFieldValueMap.idTypeDescriptionConcat,
                    benefName: iterator.submitFieldValueMap.benefName,
                    benefPhone: iterator.submitFieldValueMap.benefPhone,
                    status: 'active_key',
                    statusCode: iterator.status,
                    purpose: iterator.submitFieldValueMap.purpose,
                    dataSaveId: iterator.dataSaveId,
                    previewProperty: 'benefName',
                    nickNameNumber: iterator.dataSaveId,
                    lookupKey: iterator.submitFieldValueMap.idNumber,
                    //lookup keys
                    cashBenefNameKey: iterator.submitFieldValueMap.benefName,
                    cashBenefPhoneKey: iterator.submitFieldValueMap.benefPhone,
                    cashPurposeKey: iterator.submitFieldValueMap.purpose,
                    cashTitleKey: iterator.submitFieldValueMap.benefName
                };
                cashTransfersList.push(transfer);
            }
        }
        return cashTransfersList;
    }
};
BeneficiariesService.ctorParameters = () => [
    { type: src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_2__["PsCommonService"] }
];
BeneficiariesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_commonSRC_psServices_ps_common_ps_common_service__WEBPACK_IMPORTED_MODULE_2__["PsCommonService"]])
], BeneficiariesService);



/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map