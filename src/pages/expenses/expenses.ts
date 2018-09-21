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

  // Logic for creating or updating expense
  createOrUpdateExpense(data = undefined) {
    if (!data){
      // TODO: Remove this section to return an empty structure
      data = {
        amount: undefined, description: '', pay_method: '', category: '',
        timestamp: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), one_time: false
      }
    }

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    let modal = this.modalCtrl.create('ExpenseModalPage', {data: data}, myModalOptions);

    modal.onDidDismiss(data => {
      if (data) {
        if (data.hasOwnProperty('err')) {
          this.toastCtrl.create({
            message: data.err,
            position: 'top',
            showCloseButton: true,
          }).present();

          return
        }

        this.api.createOrUpdateExpense(data).subscribe(res => {
          // TODO: fix return data from server:
          /*
          {_id: "5ba4e3202c8884055984144f", amount: 55, description: "fgdf", pay_method: "5b8fdf622c888414d1bfa197", timestamp: "2018-09-21", …}
          active: true
          amount: 55
          category: "5b8fdf642c888414d1bfa1a0"
          description: "fgdf"
          one_time: false
          pay_method: "5b8fdf622c888414d1bfa197"
          timestamp: "2018-09-21"
          _id: "5ba4e3202c8884055984144f"
           */
          this.expenses.push(res);
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
    this.api.getExpenses(10).subscribe(response => {
      this.expenses = response;
      this.expenses_state = State.Success;
      this.close_loading();
    }, err => {
      this.expenses_state = State.Error;
      this.error_msg = this.error_msg.concat('In getExpenses: ', err.error);
      this.close_loading();
    });
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



