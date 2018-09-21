import {Component} from '@angular/core';
import {ExpensesPage} from "../expenses/expenses";
import {PayMethodsPage} from "../pay_methods/pay_methods";
import {CategoriesPage} from "../categories/categories";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tab1Root = ExpensesPage;
  tab2Root = CategoriesPage;
  tab3Root = PayMethodsPage;

  constructor() {

  }
}



