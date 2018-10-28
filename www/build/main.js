webpackJsonp([6],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		476,
		12
	],
	"../pages/modal/category/category-modal.module": [
		477,
		11
	],
	"../pages/modal/expense/expense-modal.module": [
		478,
		10
	],
	"../pages/modal/pay_method/pay-method-modal.module": [
		480,
		9
	],
	"../pages/register/register.module": [
		481,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_expenses__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdrawals_withdrawals__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdrawals_withdrawals___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__withdrawals_withdrawals__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_methods_pay_methods__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_report__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.pages = [];
        this.pages = [__WEBPACK_IMPORTED_MODULE_1__expenses_expenses__["a" /* ExpensesPage */], __WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */], __WEBPACK_IMPORTED_MODULE_3__pay_methods_pay_methods__["a" /* PayMethodsPage */], __WEBPACK_IMPORTED_MODULE_5__report_report__["a" /* ReportPage */], __WEBPACK_IMPORTED_MODULE_2__withdrawals_withdrawals__["WithdrawalsPage"]];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/tabs/tabs.html"*/'<ion-content padding>\n  <ion-tabs tabsPlacement=top>>\n    <ion-tab [tabTitle]="page.get_title()" [root]="page" [tabIcon]="page.get_icon()"\n             *ngFor="let page of pages;"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var State;
(function (State) {
    State[State["Unset"] = 1] = "Unset";
    State[State["Success"] = 2] = "Success";
    State[State["Error"] = 4] = "Error";
})(State || (State = {}));
var ExpensesPage = /** @class */ (function () {
    function ExpensesPage(modalCtrl, api, datepipe, toastCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.datepipe = datepipe;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.expenses_state = State.Unset;
        this.error_msg = '';
        // Initialize data
        this.getExpenses();
        this.loader = this.loadingCtrl.create({
            content: 'Loading data'
        });
        this.loader.present();
    }
    ExpensesPage.get_title = function () {
        return 'Expenses';
    };
    ExpensesPage.get_icon = function () {
        return 'pricetags';
    };
    // Logic for creating or updating expense
    ExpensesPage.prototype.createOrUpdateExpense = function (expense) {
        var _this = this;
        if (expense === void 0) { expense = undefined; }
        var is_new = false;
        if (!expense) {
            // TODO: Remove this section to return an empty structure
            expense = {
                amount: undefined, description: '', pay_method: '', category: '',
                timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), one_time: false
            };
            is_new = true;
        }
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtrl.create('ExpenseModalPage', { data: expense, is_new: is_new }, myModalOptions);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.api.createOrUpdateExpense(data).subscribe(function (res) {
                    var _loop_1 = function (i) {
                        var item = res[i];
                        var index = _this.expenses.findIndex(function (expense) { return expense._id == item['_id']; });
                        if (index != -1) {
                            _this.expenses[index] = item;
                        }
                        else {
                            _this.expenses.unshift(item);
                        }
                    };
                    for (var i in res) {
                        _loop_1(i);
                    }
                }, function (err) {
                    _this.toastCtrl.create({
                        message: err.error,
                        position: 'top',
                        showCloseButton: true,
                    }).present();
                });
            }
        });
        modal.present();
    };
    ExpensesPage.prototype.deleteExpense = function (expense) {
        var toast = this.toastCtrl.create({
            message: 'Not implemented yet',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ExpensesPage.prototype.getExpenses = function () {
        var _this = this;
        this.api.getExpenses().subscribe(function (response) {
            _this.expenses = response;
            _this.filtered_expenses = response;
            _this.expenses_state = State.Success;
            _this.close_loading();
        }, function (err) {
            _this.expenses_state = State.Error;
            _this.error_msg = _this.error_msg.concat('In getExpenses: ', err.error);
            _this.close_loading();
        });
    };
    ExpensesPage.prototype.initializeItems = function () {
        this.expenses = this.filtered_expenses;
    };
    ExpensesPage.prototype.getFilterExpenses = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.expenses = this.expenses.filter(function (item) {
                console.log(item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
                return (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ExpensesPage.prototype.close_loading = function () {
        if (this.expenses_state != State.Unset) {
            this.loader.dismiss();
            if (this.expenses_state == State.Error) {
                this.expenses = undefined;
                this.toastCtrl.create({
                    message: this.error_msg,
                    position: 'top',
                    showCloseButton: true,
                }).present();
            }
        }
    };
    ExpensesPage.prototype.onBackButton = function () {
        return false; // Blocks any further action from parent views, default behaviour etc
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__scaffold_digital_ionic_hardware_buttons__["a" /* BackButton */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpensesPage.prototype, "onBackButton", null);
    ExpensesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expenses',template:/*ion-inline-start:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/expenses/expenses.html"*/'<ion-content>\n  <ion-searchbar (ionInput)="getFilterExpenses($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let expense of expenses" (click)="createOrUpdateExpense(expense)">\n      <h3>{{expense.description}}</h3>\n      <h4>{{expense.category.name}}</h4>\n      <p>{{expense.pay_method.name}}</p>\n      <div item-end>\n        <h3>{{expense.amount | currency:\'ILS\':\'symbol\': \'1.0-1\'}}</h3>\n        <h4 item-end>{{expense.timestamp}}</h4>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateExpense()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/expenses/expenses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], ExpensesPage);
    return ExpensesPage;
}());

//# sourceMappingURL=expenses.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayMethodsPage = /** @class */ (function () {
    function PayMethodsPage(modalCtrl, api, toastCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        // Initialize data
        this.getPayMethods();
        this.loader = this.loadingCtrl.create({
            content: 'Loading data'
        });
        this.loader.present();
    }
    PayMethodsPage.get_title = function () {
        return 'Pay methods';
    };
    PayMethodsPage.get_icon = function () {
        return 'logo-yen';
    };
    // Logic for creating or updating pay method
    PayMethodsPage.prototype.createOrUpdatePayMethod = function (data) {
        var _this = this;
        if (data === void 0) { data = undefined; }
        if (!data) {
            // TODO: Remove this section to return an empty structure
            data = { name: undefined };
        }
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtrl.create('PayMethodModalPage', { data: data }, myModalOptions);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.api.createOrUpdatePayMethod(data).subscribe(function (res) {
                    var index = _this.methods.findIndex(function (expense) { return expense._id == res['_id']; });
                    if (index != -1) {
                        _this.methods[index] = res;
                    }
                    else {
                        _this.methods.unshift(res);
                    }
                }, function (err) {
                    var toast = _this.toastCtrl.create({
                        message: err.error,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }
        });
        modal.present();
    };
    PayMethodsPage.prototype.deletePayMethod = function (pay_method) {
        var toast = this.toastCtrl.create({
            message: 'Not implemented yet',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    PayMethodsPage.prototype.getPayMethods = function () {
        var _this = this;
        this.api.getPayMethods().subscribe(function (response) {
            _this.methods = response;
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            var error_msg = 'In getPayMethods: ' + err.error;
            _this.toastCtrl.create({
                message: error_msg,
                position: 'top',
                showCloseButton: true,
            }).present();
        });
    };
    PayMethodsPage.prototype.onBackButton = function () {
        return false; // Blocks any further action from parent views, default behaviour etc
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__scaffold_digital_ionic_hardware_buttons__["a" /* BackButton */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PayMethodsPage.prototype, "onBackButton", null);
    PayMethodsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay-methods',template:/*ion-inline-start:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/'<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let method of methods" (click)="createOrUpdatePayMethod(method)">\n      <p>{{method.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdatePayMethod()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PayMethodsPage);
    return PayMethodsPage;
}());

//# sourceMappingURL=pay_methods.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(modalCtrl, api, toastCtrl, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        // Initialize data
        this.getCategories();
        this.loader = this.loadingCtrl.create({
            content: 'Loading data'
        });
        this.loader.present();
    }
    CategoriesPage.get_title = function () {
        return 'Categories';
    };
    CategoriesPage.get_icon = function () {
        return 'apps';
    };
    // Logic for creating or updating categories
    CategoriesPage.prototype.createOrUpdateCategory = function (data) {
        var _this = this;
        if (data === void 0) { data = undefined; }
        if (!data) {
            // TODO: Remove this section to return an empty structure
            data = { name: undefined };
        }
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtrl.create('CategoryModalPage', { data: data }, myModalOptions);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.api.createOrUpdateCategory(data).subscribe(function (res) {
                    var index = _this.categories.findIndex(function (expense) { return expense._id == res['_id']; });
                    if (index != -1) {
                        _this.categories[index] = res;
                    }
                    else {
                        _this.categories.unshift(res);
                    }
                }, function (err) {
                    var toast = _this.toastCtrl.create({
                        message: err.error,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }
        });
        modal.present();
    };
    CategoriesPage.prototype.deleteCategory = function (category) {
        var toast = this.toastCtrl.create({
            message: 'Not implemented yet',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CategoriesPage.prototype.getCategories = function () {
        var _this = this;
        this.api.getCategories().subscribe(function (response) {
            _this.categories = response;
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            var error_msg = 'In getCategories: ' + err.error;
            _this.toastCtrl.create({
                message: error_msg,
                position: 'top',
                showCloseButton: true,
            }).present();
        });
    };
    CategoriesPage.prototype.onBackButton = function () {
        return false; // Blocks any further action from parent views, default behaviour etc
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__scaffold_digital_ionic_hardware_buttons__["a" /* BackButton */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CategoriesPage.prototype, "onBackButton", null);
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/categories/categories.html"*/'<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="createOrUpdateCategory(category)">\n      <p>{{category.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateCategory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object])
    ], CategoriesPage);
    return CategoriesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_datalabels__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_datalabels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chartjs_plugin_datalabels__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportPage = /** @class */ (function () {
    function ReportPage(api, loadingCtrl, toastCtrl) {
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // Initialize data
        this.getChartsData();
        this.loader = this.loadingCtrl.create({
            content: 'Loading data'
        });
        this.loader.present();
        __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a.defaults.global.plugins.datalabels.anchor = 'end';
        __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a.defaults.global.plugins.datalabels.align = 'end';
        __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a.defaults.global.legend.display = false;
        __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a.defaults.global.title.display = true;
    }
    ReportPage.get_title = function () {
        return 'Report';
    };
    ReportPage.get_icon = function () {
        return 'stats';
    };
    ReportPage.prototype.getChartsData = function () {
        var _this = this;
        this.api.getChartsData().subscribe(function (response) {
            _this.charts_data = response;
            _this.loader.dismiss();
        }, function (err) {
            _this.loader.dismiss();
            var error_msg = 'In getChartsData: ' + err.error;
            _this.toastCtrl.create({
                message: error_msg,
                position: 'top',
                showCloseButton: true,
            }).present();
        });
    };
    ReportPage.prototype.onBackButton = function () {
        return false; // Blocks any further action from parent views, default behaviour etc
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__scaffold_digital_ionic_hardware_buttons__["a" /* BackButton */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ReportPage.prototype, "onBackButton", null);
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/report/report.html"*/'<ion-content>\n  <ion-list *ngIf="charts_data">\n    <ion-item *ngFor="let chart of charts_data">\n      <div style="display: block;" *ngIf="chart.type == \'table\'; then tableTemplate else chartTemplate"></div>\n\n      <ng-template #chartTemplate>\n          <canvas baseChart\n                  [datasets]="chart.data"\n                  [labels]="chart.labels"\n                  [chartType]="chart.type"\n                  [options]="chart.options">\n          </canvas>\n      </ng-template>\n\n      <ng-template #tableTemplate>\n        <p text-wrap *ngFor="let row of chart.data">\n            {{row[0]}} - {{row[1]}}\n        </p>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomihome/workspace/slots_tracker_client/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* ENV */].api_base_url;
    }
    ApiServiceProvider.prototype.getExpenses = function () {
        return this.http.get(this.baseURL + 'expenses/');
    };
    ApiServiceProvider.prototype.getPayMethods = function () {
        return this.http.get(this.baseURL + 'pay_methods/');
    };
    ApiServiceProvider.prototype.getCategories = function () {
        return this.http.get(this.baseURL + 'categories/');
    };
    ApiServiceProvider.prototype.getChartsData = function () {
        return this.http.get(this.baseURL + 'charts/');
    };
    ApiServiceProvider.prototype.createOrUpdateExpense = function (data) {
        var id = this.get_id(data);
        this.clean_data(data);
        var url = this.baseURL + 'expenses/';
        var payments = data.payments;
        delete data.payments;
        if (id) {
            url = url + id;
            return this.http.put(url, data);
        }
        // Only split payment when creating new expense
        if (payments) {
            url = url + '?payments=' + payments;
        }
        return this.http.post(url, data);
    };
    ApiServiceProvider.prototype.createOrUpdatePayMethod = function (data) {
        var id = this.get_id(data);
        this.clean_data(data);
        var url = this.baseURL + 'pay_methods/';
        if (id) {
            url = url + id;
            return this.http.put(url, data);
        }
        return this.http.post(url, data);
    };
    ApiServiceProvider.prototype.createOrUpdateCategory = function (data) {
        var id = this.get_id(data);
        this.clean_data(data);
        var url = this.baseURL + 'categories/';
        if (id) {
            url = url + id;
            return this.http.put(url, data);
        }
        return this.http.post(url, data);
    };
    ApiServiceProvider.prototype.get_id = function (data) {
        if (this.data_has_id(data)) {
            return data._id;
        }
        return undefined;
    };
    ApiServiceProvider.prototype.data_has_id = function (data) {
        if (data) {
            if (data._id) {
                return true;
            }
        }
        return false;
    };
    ApiServiceProvider.prototype.clean_data = function (data) {
        if (this.data_has_id(data)) {
            delete data._id;
        }
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiServiceProvider);
    return ApiServiceProvider;
    var _a;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_report_report__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_pro__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















__WEBPACK_IMPORTED_MODULE_16__ionic_pro__["Pro"].init('a9f030da', {
    appVersion: '1.4.3'
});
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler(injector) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */]);
        }
        catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        __WEBPACK_IMPORTED_MODULE_16__ionic_pro__["Pro"].monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // LoginPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_report_report__["a" /* ReportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    animate: false // disable animation
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/category/category-modal.module#ModalPageModule', name: 'CategoryModalPage', segment: 'category-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/expense/expense-modal.module#ModalPageModule', name: 'ExpenseModalPage', segment: 'expense-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/withdrawal/withdrawal-modal.module#ModalPageModule', name: 'WithdrawalModalPage', segment: 'withdrawal-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/pay_method/pay-method-modal.module#ModalPageModule', name: 'PayMethodModalPage', segment: 'pay-method-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                // LoginPage,
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_report_report__["a" /* ReportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__scaffold_digital_ionic_hardware_buttons__["b" /* HardwareButtons */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: true,
    api_base_url: 'https://slots-tracker.herokuapp.com/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, hardwareButtons) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.hardwareButtons = hardwareButtons;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        hardwareButtons.init();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shlomihome/workspace/slots_tracker_client/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/shlomihome/workspace/slots_tracker_client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__scaffold_digital_ionic_hardware_buttons__["b" /* HardwareButtons */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/shlomihome/workspace/slots_tracker_client/src/pages/withdrawals/withdrawals.ts'");

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bm": 231,
	"./bm.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-il": 250,
	"./en-il.js": 250,
	"./en-nz": 251,
	"./en-nz.js": 251,
	"./eo": 252,
	"./eo.js": 252,
	"./es": 253,
	"./es-do": 254,
	"./es-do.js": 254,
	"./es-us": 255,
	"./es-us.js": 255,
	"./es.js": 253,
	"./et": 256,
	"./et.js": 256,
	"./eu": 257,
	"./eu.js": 257,
	"./fa": 258,
	"./fa.js": 258,
	"./fi": 259,
	"./fi.js": 259,
	"./fo": 260,
	"./fo.js": 260,
	"./fr": 261,
	"./fr-ca": 262,
	"./fr-ca.js": 262,
	"./fr-ch": 263,
	"./fr-ch.js": 263,
	"./fr.js": 261,
	"./fy": 264,
	"./fy.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-latn": 267,
	"./gom-latn.js": 267,
	"./gu": 268,
	"./gu.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it.js": 276,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mn": 293,
	"./mn.js": 293,
	"./mr": 294,
	"./mr.js": 294,
	"./ms": 295,
	"./ms-my": 296,
	"./ms-my.js": 296,
	"./ms.js": 295,
	"./mt": 297,
	"./mt.js": 297,
	"./my": 298,
	"./my.js": 298,
	"./nb": 299,
	"./nb.js": 299,
	"./ne": 300,
	"./ne.js": 300,
	"./nl": 301,
	"./nl-be": 302,
	"./nl-be.js": 302,
	"./nl.js": 301,
	"./nn": 303,
	"./nn.js": 303,
	"./pa-in": 304,
	"./pa-in.js": 304,
	"./pl": 305,
	"./pl.js": 305,
	"./pt": 306,
	"./pt-br": 307,
	"./pt-br.js": 307,
	"./pt.js": 306,
	"./ro": 308,
	"./ro.js": 308,
	"./ru": 309,
	"./ru.js": 309,
	"./sd": 310,
	"./sd.js": 310,
	"./se": 311,
	"./se.js": 311,
	"./si": 312,
	"./si.js": 312,
	"./sk": 313,
	"./sk.js": 313,
	"./sl": 314,
	"./sl.js": 314,
	"./sq": 315,
	"./sq.js": 315,
	"./sr": 316,
	"./sr-cyrl": 317,
	"./sr-cyrl.js": 317,
	"./sr.js": 316,
	"./ss": 318,
	"./ss.js": 318,
	"./sv": 319,
	"./sv.js": 319,
	"./sw": 320,
	"./sw.js": 320,
	"./ta": 321,
	"./ta.js": 321,
	"./te": 322,
	"./te.js": 322,
	"./tet": 323,
	"./tet.js": 323,
	"./tg": 324,
	"./tg.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./ug-cn": 332,
	"./ug-cn.js": 332,
	"./uk": 333,
	"./uk.js": 333,
	"./ur": 334,
	"./ur.js": 334,
	"./uz": 335,
	"./uz-latn": 336,
	"./uz-latn.js": 336,
	"./uz.js": 335,
	"./vi": 337,
	"./vi.js": 337,
	"./x-pseudo": 338,
	"./x-pseudo.js": 338,
	"./yo": 339,
	"./yo.js": 339,
	"./zh-cn": 340,
	"./zh-cn.js": 340,
	"./zh-hk": 341,
	"./zh-hk.js": 341,
	"./zh-tw": 342,
	"./zh-tw.js": 342
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 453;

/***/ })

},[344]);
//# sourceMappingURL=main.js.map