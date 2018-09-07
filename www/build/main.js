webpackJsonp([2],{

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
	"../pages/modal/expense/expense-modal.module": [
		281,
		1
	],
	"../pages/modal/pay_method/pay-method-modal.module": [
		282,
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





var ExpensesPage = /** @class */ (function () {
    function ExpensesPage(modalCtrl, api, datepipe, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.datepipe = datepipe;
        this.toastCtrl = toastCtrl;
        // Initialize data
        this.getExpenses();
        this.getPayMethods();
    }
    // Logic for creating or updating expense
    ExpensesPage.prototype.createOrUpdateExpense = function (data) {
        var _this = this;
        if (data === void 0) { data = undefined; }
        if (!data) {
            // TODO: Remove this section to return an empty structure
            data = {
                amount: undefined, description: '', pay_method: '',
                timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
            };
        }
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtrl.create('ExpenseModalPage', { data: data, methods: this.methods }, myModalOptions);
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
        });
    };
    ExpensesPage.prototype.getPayMethods = function () {
        var _this = this;
        this.api.getPayMethods().subscribe(function (response) {
            _this.methods = response;
        });
    };
    ExpensesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expenses',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Expenses</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let expense of expenses">\n      <ion-item>\n        <p>{{expense.amount}}</p>\n        <p>{{expense.description}}</p>\n        <p>{{expense.pay_method.name}}</p>\n        <p item-end>{{expense.timestamp}}</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteExpense(expense)" icon-start>\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n        <button ion-button color="primary" (click)="createOrUpdateExpense(expense)">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateExpense()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
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
    function PayMethodsPage(modalCtrl, api, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        // Initialize data
        this.getPayMethods();
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
        });
    };
    PayMethodsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay-methods',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pay Methods</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let method of methods">\n      <ion-item>\n        <p>{{method.name}}</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deletePayMethod(method)" icon-start>\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n        <button ion-button color="primary" (click)="createOrUpdatePayMethod(method)">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdatePayMethod()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/pay_methods/pay_methods.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PayMethodsPage);
    return PayMethodsPage;
}());

//# sourceMappingURL=pay_methods.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__ = __webpack_require__(280);
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
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
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

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_expenses_expenses__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pay_methods_pay_methods__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_categories_categories__ = __webpack_require__(280);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    api_base_url: 'http://127.0.0.1:5000/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 280:
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
    function CategoriesPage(modalCtrl, api, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.toastCtrl = toastCtrl;
        // Initialize data
        this.getCategories();
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
            _this.methods = response;
        });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categories</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let method of methods">\n      <ion-item>\n        <p>{{method.name}}</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteCategory(method)" icon-start>\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n        <button ion-button color="primary" (click)="createOrUpdateCategory(method)">\n          <ion-icon name="create"></ion-icon>\n          Edit\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateCategory()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_environments_environment__ = __webpack_require__(277);
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
        console.log('Is production: ' + __WEBPACK_IMPORTED_MODULE_2__src_environments_environment__["a" /* ENV */].production);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiServiceProvider);
    return ApiServiceProvider;
    var _a;
}());

//# sourceMappingURL=api-service.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map