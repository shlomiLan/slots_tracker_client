import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, Injectable, Injector, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {ExpensesPage} from '../pages/expenses/expenses';
import {PayMethodsPage} from '../pages/pay_methods/pay_methods';
import {CategoriesPage} from '../pages/categories/categories';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiServiceProvider} from '../providers/api-service/api-service';
import {DatePipe} from "@angular/common";
import {TabsPage} from "../pages/tabs/tabs";
import {ReportPage} from "../pages/report/report";
import {ChartsModule} from "ng2-charts";
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {Pro} from "@ionic/pro";


Pro.init('a9f030da', {
  appVersion: '1.4.2'
});

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    // LoginPage,
    ExpensesPage,
    PayMethodsPage,
    CategoriesPage,
    TabsPage,
    ReportPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      animate: false // disable animation
    }),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // LoginPage,
    ExpensesPage,
    PayMethodsPage,
    CategoriesPage,
    TabsPage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    DatePipe,
    AuthServiceProvider
  ]
})
export class AppModule {}
