webpackJsonp([3],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal/category/category-modal.module": [
		281,
		2
	],
	"../pages/modal/expense/expense-modal.module": [
		282,
		1
	],
	"../pages/modal/pay_method/pay-method-modal.module": [
		283,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(100);
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
        this.data_loading_indicator = { methods: State.Unset, categories: State.Unset, expenses: State.Unset };
        this.error_msg = '';
        // Initialize data
        this.getExpenses();
        this.getPayMethods();
        this.getCategories();
        this.loader = this.loadingCtrl.create({
            content: 'Loading data'
        });
        this.loader.present();
    }
    // Logic for creating or updating expense
    ExpensesPage.prototype.createOrUpdateExpense = function (data) {
        var _this = this;
        if (data === void 0) { data = undefined; }
        if (!data) {
            // TODO: Remove this section to return an empty structure
            data = {
                amount: undefined, description: '', pay_method: '', category: '',
                timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), one_time: false
            };
        }
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtrl.create('ExpenseModalPage', { data: data, methods: this.methods, categories: this.categories }, myModalOptions);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.api.createOrUpdateExpense(data).subscribe(function (_) {
                    _this.getExpenses();
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
            _this.data_loading_indicator.expenses = State.Success;
            _this.close_loading();
        }, function (err) {
            _this.data_loading_indicator.expenses = State.Error;
            _this.error_msg = _this.error_msg.concat('In getExpenses: ', err.error);
            _this.close_loading();
        });
    };
    ExpensesPage.prototype.getPayMethods = function () {
        var _this = this;
        this.api.getPayMethods().subscribe(function (response) {
            _this.methods = response;
            _this.data_loading_indicator.methods = State.Success;
            _this.close_loading();
        }, function (err) {
            _this.data_loading_indicator.methods = State.Error;
            _this.error_msg = _this.error_msg.concat('In getPayMethods: ', err.error);
            _this.close_loading();
        });
    };
    ExpensesPage.prototype.getCategories = function () {
        var _this = this;
        this.api.getCategories().subscribe(function (response) {
            _this.categories = response;
            _this.data_loading_indicator.categories = State.Success;
            _this.close_loading();
        }, function (err) {
            _this.data_loading_indicator.categories = State.Error;
            _this.error_msg = _this.error_msg.concat('In getCategories: ', err.error);
            _this.close_loading();
        });
    };
    ExpensesPage.prototype.close_loading = function () {
        var load_data = this.data_loading_indicator;
        if (load_data.methods != State.Unset && load_data.categories != State.Unset && load_data.expenses != State.Unset) {
            this.loader.dismiss();
            if (load_data.methods == State.Error || load_data.categories == State.Error || load_data.expenses == State.Error) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expenses',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Expenses</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let expense of expenses" (click)="createOrUpdateExpense(expense)">\n      <h3>{{expense.description}}</h3>\n      <h4>{{expense.category.name}}</h4>\n      <p>{{expense.pay_method.name}}</p>\n      <div item-end>\n        <h3>{{expense.amount}}</h3>\n        <h4 item-end>{{expense.timestamp}}</h4>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateExpense()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], ExpensesPage);
    return ExpensesPage;
}());

//# sourceMappingURL=expenses.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(100);
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
                _this.api.createOrUpdatePayMethod(data).subscribe(function (_) {
                    _this.getPayMethods();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay-methods',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pay Methods</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let method of methods" (click)="createOrUpdatePayMethod(method)">\n      <p>{{method.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdatePayMethod()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PayMethodsPage);
    return PayMethodsPage;
}());

//# sourceMappingURL=pay_methods.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(100);
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
                _this.api.createOrUpdateCategory(data).subscribe(function (_) {
                    _this.getCategories();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categories</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="createOrUpdateCategory(category)">\n      <p>{{category.name}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateCategory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(26);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */]
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
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_expenses_expenses__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pay_methods_pay_methods__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_categories_categories__ = __webpack_require__(201);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_expenses_expenses__["a" /* ExpensesPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Expenses', component: __WEBPACK_IMPORTED_MODULE_4__pages_expenses_expenses__["a" /* ExpensesPage */] }, { title: 'Pay Methods', component: __WEBPACK_IMPORTED_MODULE_5__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */] },
            { title: 'Categories', component: __WEBPACK_IMPORTED_MODULE_6__pages_categories_categories__["a" /* CategoriesPage */] }
        ];
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
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: true,
    api_base_url: 'https://slots-tracker-stage.herokuapp.com/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_environments_environment__ = __webpack_require__(278);
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
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__src_environments_environment__["a" /* ENV */].api_base_url;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map