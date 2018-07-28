webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_modal__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expense_modal__["a" /* ExpenseModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense_modal__["a" /* ExpenseModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=expense-modal.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpenseModalPage = /** @class */ (function () {
    function ExpenseModalPage(navParams, formBuilder, viewCtrl) {
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.expense = this.formBuilder.group(this.navParams.get('data'));
        this.methods = this.formBuilder.array(this.navParams.get('methods'));
        // Modify the pay_method data for the select element
        this.expense.controls['pay_method'].setValue(this.expense.value.pay_method._id);
    }
    ExpenseModalPage.prototype.saveData = function () {
        this.expense.controls['pay_method'].setValue({ "_id": this.expense.value.pay_method });
        this.viewCtrl.dismiss(this.expense.value);
    };
    ExpenseModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ExpenseModalPage.prototype.payMethodChange = function (value) {
        this.expense.controls['pay_method'].setValue(value);
    };
    ExpenseModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Modal</ion-title>\n        <ion-buttons end>\n          <button ion-button (click)=\"closeModal()\">Close</button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <form [formGroup]=\"expense\" (ngSubmit)=\"saveData()\">\n        <ion-item>\n          <ion-label>Amount:</ion-label>\n          <ion-input formControlName=\"amount\" type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Description:</ion-label>\n          <ion-input formControlName=\"description\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pay method:</ion-label>\n          <ion-select formControlName=\"pay_method\" (ionChange)=\"payMethodChange($event);\" interface=\"popover\">\n            <ion-option *ngFor=\"let item of methods.controls\" [value]=\"item.value._id\">\n              {{item.value.name}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Date:</ion-label>\n          <ion-datetime displayFormat=\"D MMM YYYY\" formControlName=\"timestamp\"></ion-datetime>\n        </ion-item>\n        <button ion-button type=\"submit\" [disabled]=\"!expense.valid\">Submit</button>\n    </form>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object])
    ], ExpenseModalPage);
    return ExpenseModalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=expense-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map