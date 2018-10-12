import {Component} from '@angular/core';
import {DatePipe} from '@angular/common'
import {LoadingController, ModalController, ModalOptions, ToastController} from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
import 'rxjs/add/operator/do'

enum State {Unset = 1, Success = 2, Error = 4}

@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html'
})

export class ExpensesPage {
  expenses: any;
  filtered_expenses: any;
  loader: any;
  expenses_state: State;
  error_msg: string;

  constructor(public modalCtrl: ModalController, private api: ApiServiceProvider, public datepipe: DatePipe,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

    this.expenses_state = State.Unset;
    this.error_msg = '';

    // Initialize data
    this.getExpenses();

    this.loader = this.loadingCtrl.create({
      content: 'Loading data'
    });

    this.loader.present();
  }

  static get_title(): string {
    return 'Test';
  }

  static get_icon(): string {
    return 'pricetags';
  }

  // Logic for creating or updating expense
  createOrUpdateExpense(expense = undefined) {
    let is_new = false;
    if (!expense) {
      // TODO: Remove this section to return an empty structure
      expense = {
        amount: undefined, description: '', pay_method: '', category: '',
        timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), one_time: false
      };

      is_new = true;
    }

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    let modal = this.modalCtrl.create('ExpenseModalPage', {data: expense, is_new: is_new}, myModalOptions);

    modal.onDidDismiss(data => {
      if (data) {
        this.api.createOrUpdateExpense(data).subscribe(res => {
          for (let i in res) {
            let item = res[i];

            let index = this.expenses.findIndex(expense => expense._id == item['_id']);
            if (index != -1) {
              this.expenses[index] = item;
            } else {
              this.expenses.unshift(item);
            }

            console.log(this.filtered_expenses);
            console.log(this.expenses);
          }
        }, err => {
          this.toastCtrl.create({
            message: err.error,
            position: 'top',
            showCloseButton: true,
          }).present();
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
      this.filtered_expenses = response;
      this.expenses_state = State.Success;
      this.close_loading();
    }, err => {
      this.expenses_state = State.Error;
      this.error_msg = this.error_msg.concat('In getExpenses: ', err.error);
      this.close_loading();
    });
  }

  initializeItems() {
    this.expenses = this.filtered_expenses;
  }

  getFilterExpenses(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.expenses = this.expenses.filter((item) => {
        console.log(item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
        return (item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  close_loading() {
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
  }
}



