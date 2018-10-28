webpackJsonp([2],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_modal__ = __webpack_require__(482);
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
                __WEBPACK_IMPORTED_MODULE_2__expense_modal__["a" /* ExpenseModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense_modal__["a" /* ExpenseModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=expense-modal.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(35);
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
    function ExpenseModalPage(navParams, formBuilder, viewCtrl, api) {
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.api = api;
        // Initialize data
        this.error_msg = '';
        this.getPayMethods();
        this.getCategories();
        this.is_new = this.navParams.get('is_new');
        var expense_data = Object.assign({}, this.navParams.get('data'));
        // Add the payment field only if create new expense
        if (this.is_new == true) {
            expense_data['payments'] = 1;
        }
        for (var _i = 0, _a = Object.keys(expense_data); _i < _a.length; _i++) {
            var prop = _a[_i];
            expense_data[prop] = [expense_data[prop], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]];
            if (prop == 'payments') {
                expense_data[prop][1].push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(1));
            }
        }
        this.expense = this.formBuilder.group(expense_data);
        // Modify the pay_method and category data for the select element
        this.expense.controls['pay_method'].setValue(this.expense.value.pay_method._id);
        this.expense.controls['category'].setValue(this.expense.value.category._id);
    }
    ExpenseModalPage.prototype.saveData = function () {
        this.expense.controls['pay_method'].setValue({ "_id": this.expense.value.pay_method });
        this.expense.controls['category'].setValue({ "_id": this.expense.value.category });
        this.viewCtrl.dismiss(this.expense.value);
    };
    ExpenseModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ExpenseModalPage.prototype.payMethodChange = function (value) {
        this.expense.controls['pay_method'].setValue(value);
    };
    ExpenseModalPage.prototype.categoryChange = function (value) {
        this.expense.controls['category'].setValue(value);
    };
    ExpenseModalPage.prototype.getPayMethods = function () {
        var _this = this;
        this.api.getPayMethods().subscribe(function (response) {
            _this.methods = response;
            _this.methods_form = _this.formBuilder.array(_this.methods);
        }, function (err) {
            _this.error_msg = _this.error_msg.concat('In getPayMethods: ', err.error);
            _this.close_and_display_error(err);
        });
    };
    ExpenseModalPage.prototype.getCategories = function () {
        var _this = this;
        this.api.getCategories().subscribe(function (response) {
            _this.categories = response;
            _this.categories_form = _this.formBuilder.array(_this.categories);
        }, function (err) {
            _this.error_msg = _this.error_msg.concat('In getCategories: ', err.error);
            _this.close_and_display_error(err);
        });
    };
    ExpenseModalPage.prototype.close_and_display_error = function (err) {
        this.viewCtrl.dismiss(err);
    };
    ExpenseModalPage.prototype.onBackButton = function () {
        return false; // Blocks any further action from parent views, default behaviour etc
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__scaffold_digital_ionic_hardware_buttons__["a" /* BackButton */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpenseModalPage.prototype, "onBackButton", null);
    ExpenseModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-buttons>\n          <button ion-button (click)=\"closeModal()\">Close</button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <form [formGroup]=\"expense\" (ngSubmit)=\"saveData()\" *ngIf=\"expense && categories_form && methods_form\">\n        <ion-item>\n          <ion-label>Amount:</ion-label>\n          <ion-input formControlName=\"amount\" type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Description:</ion-label>\n          <ion-input formControlName=\"description\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Category:</ion-label>\n          <ion-select formControlName=\"category\" (ionChange)=\"categoryChange($event);\" interface=\"popover\">\n            <ion-option *ngFor=\"let item of categories_form.controls\" [value]=\"item.value._id\">\n              {{item.value.name}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pay method:</ion-label>\n          <ion-select formControlName=\"pay_method\" (ionChange)=\"payMethodChange($event);\" interface=\"popover\">\n            <ion-option *ngFor=\"let item of methods_form.controls\" [value]=\"item.value._id\">\n              {{item.value.name}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Date:</ion-label>\n          <ion-datetime displayFormat=\"D MMM YYYY\" formControlName=\"timestamp\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>One time</ion-label>\n          <ion-checkbox color=\"dark\" formControlName=\"one_time\"></ion-checkbox>\n        </ion-item>\n\n        <ion-item *ngIf=\"is_new\">\n          <ion-label>Payments:</ion-label>\n          <ion-input formControlName=\"payments\" type=\"number\" [min]=\"1\"></ion-input>\n        </ion-item>\n\n        <ion-buttons end>\n          <button ion-button type=\"submit\" [disabled]=\"!expense.valid\">Submit</button>\n        </ion-buttons>\n      </form>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], ExpenseModalPage);
    return ExpenseModalPage;
}());

//# sourceMappingURL=expense-modal.js.map

/***/ })

});
//# sourceMappingURL=2.js.map