webpackJsonp([5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: 'email', password: 'pass' };
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log(isLoggedIn);
        if (isLoggedIn) {
            this.moveToApp();
        }
    }
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.moveToApp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                localStorage.setItem('isLoggedIn', 'true');
                _this.moveToApp();
            }
            else {
                _this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/login/login.html"*/'<ion-content>\n  <form (ngSubmit)="login()" #registerForm="ngForm">\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n      <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		473,
		4
	],
	"../pages/modal/category/category-modal.module": [
		474,
		3
	],
	"../pages/modal/expense/expense-modal.module": [
		476,
		2
	],
	"../pages/modal/pay_method/pay-method-modal.module": [
		475,
		1
	],
	"../pages/register/register.module": [
		477,
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_expenses__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_methods_pay_methods__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_report__ = __webpack_require__(170);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(88);
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
                        console.log(_this.filtered_expenses);
                        console.log(_this.expenses);
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
    ExpensesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expenses',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/'<ion-content>\n  <ion-searchbar (ionInput)="getFilterExpenses($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let expense of expenses" (click)="createOrUpdateExpense(expense)">\n      <h3>{{expense.description}}</h3>\n      <h4>{{expense.category.name}}</h4>\n      <p>{{expense.pay_method.name}}</p>\n      <div item-end>\n        <h3>{{expense.amount | currency:\'ILS\':\'symbol\': \'1.0-1\'}}</h3>\n        <h4 item-end>{{expense.timestamp}}</h4>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab (click)="createOrUpdateExpense()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/expenses/expenses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], ExpensesPage);
    return ExpensesPage;
}());

//# sourceMappingURL=expenses.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(88);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PayMethodsPage);
    return PayMethodsPage;
}());

//# sourceMappingURL=pay_methods.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(88);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_datalabels__ = __webpack_require__(399);
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
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/report/report.html"*/'<ion-content>\n  <ion-list *ngIf="charts_data">\n    <ion-item *ngFor="let chart of charts_data">\n      <div style="display: block;" *ngIf="chart.type == \'table\'; then tableTemplate else chartTemplate"></div>\n\n      <ng-template #chartTemplate>\n          <canvas baseChart\n                  [datasets]="chart.data"\n                  [labels]="chart.labels"\n                  [chartType]="chart.type"\n                  [options]="chart.options">\n          </canvas>\n      </ng-template>\n\n      <ng-template #tableTemplate>\n        <p text-wrap *ngFor="let row of chart.data">\n            {{row[0]}} - {{row[1]}}\n        </p>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

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

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_report_report__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(111);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    animate: false // disable animation
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/category/category-modal.module#ModalPageModule', name: 'CategoryModalPage', segment: 'category-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/pay_method/pay-method-modal.module#ModalPageModule', name: 'PayMethodModalPage', segment: 'pay-method-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/expense/expense-modal.module#ModalPageModule', name: 'ExpenseModalPage', segment: 'expense-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_expenses_expenses__["a" /* ExpensesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pay_methods_pay_methods__["a" /* PayMethodsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_15__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(396);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    api_base_url: 'http://127.0.0.1:5000/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 178,
	"./af.js": 178,
	"./ar": 179,
	"./ar-dz": 180,
	"./ar-dz.js": 180,
	"./ar-kw": 181,
	"./ar-kw.js": 181,
	"./ar-ly": 182,
	"./ar-ly.js": 182,
	"./ar-ma": 183,
	"./ar-ma.js": 183,
	"./ar-sa": 184,
	"./ar-sa.js": 184,
	"./ar-tn": 185,
	"./ar-tn.js": 185,
	"./ar.js": 179,
	"./az": 186,
	"./az.js": 186,
	"./be": 187,
	"./be.js": 187,
	"./bg": 188,
	"./bg.js": 188,
	"./bm": 189,
	"./bm.js": 189,
	"./bn": 190,
	"./bn.js": 190,
	"./bo": 191,
	"./bo.js": 191,
	"./br": 192,
	"./br.js": 192,
	"./bs": 193,
	"./bs.js": 193,
	"./ca": 194,
	"./ca.js": 194,
	"./cs": 195,
	"./cs.js": 195,
	"./cv": 196,
	"./cv.js": 196,
	"./cy": 197,
	"./cy.js": 197,
	"./da": 198,
	"./da.js": 198,
	"./de": 199,
	"./de-at": 200,
	"./de-at.js": 200,
	"./de-ch": 201,
	"./de-ch.js": 201,
	"./de.js": 199,
	"./dv": 202,
	"./dv.js": 202,
	"./el": 203,
	"./el.js": 203,
	"./en-au": 204,
	"./en-au.js": 204,
	"./en-ca": 205,
	"./en-ca.js": 205,
	"./en-gb": 206,
	"./en-gb.js": 206,
	"./en-ie": 207,
	"./en-ie.js": 207,
	"./en-il": 208,
	"./en-il.js": 208,
	"./en-nz": 209,
	"./en-nz.js": 209,
	"./eo": 210,
	"./eo.js": 210,
	"./es": 211,
	"./es-do": 212,
	"./es-do.js": 212,
	"./es-us": 213,
	"./es-us.js": 213,
	"./es.js": 211,
	"./et": 214,
	"./et.js": 214,
	"./eu": 215,
	"./eu.js": 215,
	"./fa": 216,
	"./fa.js": 216,
	"./fi": 217,
	"./fi.js": 217,
	"./fo": 218,
	"./fo.js": 218,
	"./fr": 219,
	"./fr-ca": 220,
	"./fr-ca.js": 220,
	"./fr-ch": 221,
	"./fr-ch.js": 221,
	"./fr.js": 219,
	"./fy": 222,
	"./fy.js": 222,
	"./gd": 223,
	"./gd.js": 223,
	"./gl": 224,
	"./gl.js": 224,
	"./gom-latn": 225,
	"./gom-latn.js": 225,
	"./gu": 226,
	"./gu.js": 226,
	"./he": 227,
	"./he.js": 227,
	"./hi": 228,
	"./hi.js": 228,
	"./hr": 229,
	"./hr.js": 229,
	"./hu": 230,
	"./hu.js": 230,
	"./hy-am": 231,
	"./hy-am.js": 231,
	"./id": 232,
	"./id.js": 232,
	"./is": 233,
	"./is.js": 233,
	"./it": 234,
	"./it.js": 234,
	"./ja": 235,
	"./ja.js": 235,
	"./jv": 236,
	"./jv.js": 236,
	"./ka": 237,
	"./ka.js": 237,
	"./kk": 238,
	"./kk.js": 238,
	"./km": 239,
	"./km.js": 239,
	"./kn": 240,
	"./kn.js": 240,
	"./ko": 241,
	"./ko.js": 241,
	"./ky": 242,
	"./ky.js": 242,
	"./lb": 243,
	"./lb.js": 243,
	"./lo": 244,
	"./lo.js": 244,
	"./lt": 245,
	"./lt.js": 245,
	"./lv": 246,
	"./lv.js": 246,
	"./me": 247,
	"./me.js": 247,
	"./mi": 248,
	"./mi.js": 248,
	"./mk": 249,
	"./mk.js": 249,
	"./ml": 250,
	"./ml.js": 250,
	"./mn": 251,
	"./mn.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./mt": 255,
	"./mt.js": 255,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./ug-cn": 290,
	"./ug-cn.js": 290,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
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
webpackContext.id = 427;

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(111);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/shlomilanton/workscpace/slots_tracker_client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map