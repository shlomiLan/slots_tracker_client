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
  methods: any;
  categories: any;
  loader: any;
  data_loading_indicator: { methods: State; categories: State; expenses: State };
  error_msg: string;

  constructor(public modalCtrl: ModalController, private api: ApiServiceProvider, public datepipe: DatePipe,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

    this.data_loading_indicator = {methods: State.Unset, categories: State.Unset, expenses: State.Unset};
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
    this.api.getExpenses(10).subscribe(response => {
      this.expenses = response;
      this.data_loading_indicator.expenses = State.Success;
      this.close_loading();
    }, err => {
      this.data_loading_indicator.expenses = State.Error;
      this.error_msg = this.error_msg.concat('In getExpenses: ', err.error);
      this.close_loading();
    });
  }

  getPayMethods() {
    this.api.getPayMethods().subscribe(response => {
      this.methods = response;
      this.data_loading_indicator.methods = State.Success;
      this.close_loading();
    }, err => {
      this.data_loading_indicator.methods = State.Error;
      this.error_msg = this.error_msg.concat('In getPayMethods: ', err.error);
      this.close_loading();
    });
  }

  getCategories() {
    this.api.getCategories().subscribe(response => {
      this.categories = response;
      this.data_loading_indicator.categories = State.Success;
      this.close_loading();
    }, err => {
      this.data_loading_indicator.categories = State.Error;
      this.error_msg = this.error_msg.concat('In getCategories: ', err.error);
      this.close_loading();
    });
  }

  close_loading() {
    let load_data = this.data_loading_indicator;
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
  }
}



