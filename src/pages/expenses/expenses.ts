import {Component} from '@angular/core';
import {DatePipe} from '@angular/common'
import {ModalController, ModalOptions, ToastController} from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
import 'rxjs/add/operator/do'

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})

export class ExpensesPage {
  expenses: any;
  methods: any;
  categories: any;

  constructor(public modalCtrl: ModalController, private api: ApiServiceProvider, public datepipe: DatePipe,
              public toastCtrl: ToastController) {

    // Initialize data
    this.getExpenses();
    this.getPayMethods();
    this.getCategories();
  }

  // Logic for creating or updating expense
  createOrUpdateExpense(data = undefined) {
    if (!data){
      // TODO: Remove this section to return an empty structure
      data = {
        amount: undefined, description: '', pay_method: '', category: '',
        timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
      }
    }

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    let modal = this.modalCtrl.create('ExpenseModalPage',
      {data: data, methods: this.methods, categories: this.categories}, myModalOptions);
    modal.onDidDismiss(data => {
        if (data){
          this.api.createOrUpdateExpense(data).subscribe(_ => {
            this.getExpenses()
          });
        }
      });

      modal.present();
  }

  deleteExpense(expense) {
    const toast = this.toastCtrl.create({
      message: 'Not implemented yet',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  getExpenses() {
    this.api.getExpenses().subscribe(response => {
      this.expenses = response;
    });
  }

  getPayMethods() {
    this.api.getPayMethods().subscribe(response => {
      this.methods = response;
    } );
  }

  getCategories() {
    this.api.getCategories().subscribe(response => {
      this.categories = response;
    });
  }
}



