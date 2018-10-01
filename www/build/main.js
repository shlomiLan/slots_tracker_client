webpackJsonp([3],{

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/category/category-modal.module": [
		470,
		2
	],
	"../pages/modal/expense/expense-modal.module": [
		471,
		1
	],
	"../pages/modal/pay_method/pay-method-modal.module": [
		472,
		0
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_expenses__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_methods_pay_methods__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_report__ = __webpack_require__(211);
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
        this.pages = [__WEBPACK_IMPORTED_MODULE_1__expenses_expenses__["a" /* ExpensesPage */], __WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* CategoriesPage */], __WEBPACK_IMPORTED_MODULE_2__pay_methods_pay_methods__["a" /* PayMethodsPage */], __WEBPACK_IMPORTED_MODULE_4__report_report__["a" /* ReportPage */]];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/tabs/tabs.html"*/'<ion-content padding>\n  <ion-tabs tabsPlacement=top>>\n    <ion-tab [tabTitle]="page.get_title()" [root]="page" [tabIcon]="page.get_icon()"\n             *ngFor="let page of pages;"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
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
        if (!expense) {
            // TODO: Remove this section to return an empty structure
            expense = {
                amount: undefined, description: '', pay_method: '', category: '',
                timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), one_time: false
            };
        }
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtrl.create('ExpenseModalPage', { data: expense }, myModalOptions);
        modal.onDidDismiss(function (data) {
            if (data) {
                if (data.hasOwnProperty('err')) {
                    _this.toastCtrl.create({
                        message: data.err,
                        position: 'top',
                        showCloseButton: true,
                    }).present();
                    return;
                }
                _this.api.createOrUpdateExpense(data).subscribe(function (res) {
                    var index = _this.expenses.findIndex(function (expense) { return expense._id == res['_id']; });
                    if (index != -1) {
                        _this.expenses[index] = res;
                    }
                    else {
                        _this.expenses.unshift(res);
                    }
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
            _this.expenses_state = State.Success;
            _this.close_loading();
        }, function (err) {
            _this.expenses_state = State.Error;
            _this.error_msg = _this.error_msg.concat('In getExpenses: ', err.error);
            _this.close_loading();
        });
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
    ExpensesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expenses',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/'<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let expense of expenses" (click)="createOrUpdateExpense(expense)">\n      <h3>{{expense.description}}</h3>\n      <h4>{{expense.category.name}}</h4>\n      <p>{{expense.pay_method.name}}</p>\n      <div item-end>\n        <h3>{{expense.amount}}</h3>\n        <h4 item-end>{{expense.timestamp}}</h4>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateExpense()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], ExpensesPage);
    return ExpensesPage;
}());

//# sourceMappingURL=expenses.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
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
    PayMethodsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay-methods',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/'<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let method of methods" (click)="createOrUpdatePayMethod(method)">\n      <p>{{method.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdatePayMethod()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PayMethodsPage);
    return PayMethodsPage;
}());

//# sourceMappingURL=pay_methods.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
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
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/categories/categories.html"*/'<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="createOrUpdateCategory(category)">\n      <p>{{category.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateCategory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_datalabels__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_datalabels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_datalabels__);
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
        // Chart.defaults.global.plugins.datalabels.anchor = 'end';
        // Chart.defaults.global.plugins.datalabels.align = 'end';
        // Chart.defaults.global.legend.display = false;
        // Chart.defaults.global.title.display = true;
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
            console.log(_this.charts_data);
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
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/report/report.html"*/'<ion-content>\n  <div *ngIf="charts_data">\n    <ion-item *ngFor="let chart of charts_data">\n      <div *ngIf="chart.type == \'table\'; then tableTemplate else chartTemplate"></div>\n      <ng-template #chartTemplate>\n        <div style="display: block;">\n          <canvas baseChart\n                  [datasets]="chart.data"\n                  [labels]="chart.labels"\n                  [chartType]="chart.type"\n                  [options]="chart.options">\n          </canvas>\n        </div>\n      </ng-template>\n      <ng-template #tableTemplate>\n        <ion-list *ngFor="let row of chart.data">\n          <ion-item>\n            {{row[0]}} - {{row[1]}}\n          </ion-item>\n        </ion-list>\n      </ng-template>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_report_report__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_report_report__["a" /* ReportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    animate: false // disable animation
                }, {
                    links: [
                        { loadChildren: '../pages/modal/category/category-modal.module#ModalPageModule', name: 'CategoryModalPage', segment: 'category-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/expense/expense-modal.module#ModalPageModule', name: 'ExpenseModalPage', segment: 'expense-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/pay_method/pay-method-modal.module#ModalPageModule', name: 'PayMethodModalPage', segment: 'pay-method-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_report_report__["a" /* ReportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(393);
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
        if (id) {
            url = url + id;
            return this.http.put(url, data);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    api_base_url: 'http://127.0.0.1:5000/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(207);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 219,
	"./af.js": 219,
	"./ar": 220,
	"./ar-dz": 221,
	"./ar-dz.js": 221,
	"./ar-kw": 222,
	"./ar-kw.js": 222,
	"./ar-ly": 223,
	"./ar-ly.js": 223,
	"./ar-ma": 224,
	"./ar-ma.js": 224,
	"./ar-sa": 225,
	"./ar-sa.js": 225,
	"./ar-tn": 226,
	"./ar-tn.js": 226,
	"./ar.js": 220,
	"./az": 227,
	"./az.js": 227,
	"./be": 228,
	"./be.js": 228,
	"./bg": 229,
	"./bg.js": 229,
	"./bm": 230,
	"./bm.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-il": 249,
	"./en-il.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es-us": 254,
	"./es-us.js": 254,
	"./es.js": 252,
	"./et": 255,
	"./et.js": 255,
	"./eu": 256,
	"./eu.js": 256,
	"./fa": 257,
	"./fa.js": 257,
	"./fi": 258,
	"./fi.js": 258,
	"./fo": 259,
	"./fo.js": 259,
	"./fr": 260,
	"./fr-ca": 261,
	"./fr-ca.js": 261,
	"./fr-ch": 262,
	"./fr-ch.js": 262,
	"./fr.js": 260,
	"./fy": 263,
	"./fy.js": 263,
	"./gd": 264,
	"./gd.js": 264,
	"./gl": 265,
	"./gl.js": 265,
	"./gom-latn": 266,
	"./gom-latn.js": 266,
	"./gu": 267,
	"./gu.js": 267,
	"./he": 268,
	"./he.js": 268,
	"./hi": 269,
	"./hi.js": 269,
	"./hr": 270,
	"./hr.js": 270,
	"./hu": 271,
	"./hu.js": 271,
	"./hy-am": 272,
	"./hy-am.js": 272,
	"./id": 273,
	"./id.js": 273,
	"./is": 274,
	"./is.js": 274,
	"./it": 275,
	"./it.js": 275,
	"./ja": 276,
	"./ja.js": 276,
	"./jv": 277,
	"./jv.js": 277,
	"./ka": 278,
	"./ka.js": 278,
	"./kk": 279,
	"./kk.js": 279,
	"./km": 280,
	"./km.js": 280,
	"./kn": 281,
	"./kn.js": 281,
	"./ko": 282,
	"./ko.js": 282,
	"./ky": 283,
	"./ky.js": 283,
	"./lb": 284,
	"./lb.js": 284,
	"./lo": 285,
	"./lo.js": 285,
	"./lt": 286,
	"./lt.js": 286,
	"./lv": 287,
	"./lv.js": 287,
	"./me": 288,
	"./me.js": 288,
	"./mi": 289,
	"./mi.js": 289,
	"./mk": 290,
	"./mk.js": 290,
	"./ml": 291,
	"./ml.js": 291,
	"./mn": 292,
	"./mn.js": 292,
	"./mr": 293,
	"./mr.js": 293,
	"./ms": 294,
	"./ms-my": 295,
	"./ms-my.js": 295,
	"./ms.js": 294,
	"./mt": 296,
	"./mt.js": 296,
	"./my": 297,
	"./my.js": 297,
	"./nb": 298,
	"./nb.js": 298,
	"./ne": 299,
	"./ne.js": 299,
	"./nl": 300,
	"./nl-be": 301,
	"./nl-be.js": 301,
	"./nl.js": 300,
	"./nn": 302,
	"./nn.js": 302,
	"./pa-in": 303,
	"./pa-in.js": 303,
	"./pl": 304,
	"./pl.js": 304,
	"./pt": 305,
	"./pt-br": 306,
	"./pt-br.js": 306,
	"./pt.js": 305,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 308,
	"./ru.js": 308,
	"./sd": 309,
	"./sd.js": 309,
	"./se": 310,
	"./se.js": 310,
	"./si": 311,
	"./si.js": 311,
	"./sk": 312,
	"./sk.js": 312,
	"./sl": 313,
	"./sl.js": 313,
	"./sq": 314,
	"./sq.js": 314,
	"./sr": 315,
	"./sr-cyrl": 316,
	"./sr-cyrl.js": 316,
	"./sr.js": 315,
	"./ss": 317,
	"./ss.js": 317,
	"./sv": 318,
	"./sv.js": 318,
	"./sw": 319,
	"./sw.js": 319,
	"./ta": 320,
	"./ta.js": 320,
	"./te": 321,
	"./te.js": 321,
	"./tet": 322,
	"./tet.js": 322,
	"./tg": 323,
	"./tg.js": 323,
	"./th": 324,
	"./th.js": 324,
	"./tl-ph": 325,
	"./tl-ph.js": 325,
	"./tlh": 326,
	"./tlh.js": 326,
	"./tr": 327,
	"./tr.js": 327,
	"./tzl": 328,
	"./tzl.js": 328,
	"./tzm": 329,
	"./tzm-latn": 330,
	"./tzm-latn.js": 330,
	"./tzm.js": 329,
	"./ug-cn": 331,
	"./ug-cn.js": 331,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
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
webpackContext.id = 449;

/***/ })

},[342]);
//# sourceMappingURL=main.js.map