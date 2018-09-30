import {Component} from '@angular/core';
import {ExpensesPage} from "../expenses/expenses";
import {PayMethodsPage} from "../pay_methods/pay_methods";
import {CategoriesPage} from "../categories/categories";
import {ReportPage} from "../report/report";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  private pages: any = [];

  constructor() {
    this.pages = [ReportPage, ExpensesPage, CategoriesPage, PayMethodsPage];
  }
}



