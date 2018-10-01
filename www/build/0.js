webpackJsonp([0],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_method_modal__ = __webpack_require__(475);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay_method_modal__["a" /* PayMethodModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay_method_modal__["a" /* PayMethodModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=pay-method-modal.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayMethodModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PayMethodModalPage = /** @class */ (function () {
    function PayMethodModalPage(navParams, formBuilder, viewCtrl) {
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.pay_method = this.formBuilder.group(this.navParams.get('data'));
    }
    PayMethodModalPage.prototype.saveData = function () {
        this.viewCtrl.dismiss(this.pay_method.value);
    };
    PayMethodModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PayMethodModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-buttons>\n          <button ion-button (click)=\"closeModal()\">Close</button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <form [formGroup]=\"pay_method\" (ngSubmit)=\"saveData()\">\n        <ion-item>\n          <ion-label>Name:</ion-label>\n          <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-buttons end>\n          <button ion-button type=\"submit\" [disabled]=\"!pay_method.valid\">Submit</button>\n        </ion-buttons>\n      </form>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */]])
    ], PayMethodModalPage);
    return PayMethodModalPage;
}());

// <ion-item>
//   <ion-label>Pay method:</ion-label>
//   <ion-input formControlName="pay_method" type="text"></ion-input>
// </ion-item>
// <ion-item>
//   <ion-label>Timestamp:</ion-label>
//   <ion-input formControlName="timestamp" type="text"></ion-input>
//   <!-- <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"></ion-datetime> -->
// </ion-item>
//# sourceMappingURL=pay-method-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map