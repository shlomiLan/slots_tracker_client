import {Component} from '@angular/core';
import {LoadingController, ModalController, ModalOptions, ToastController} from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
import 'rxjs/add/operator/do'


@Component({
  selector: 'page-pay-methods',
  templateUrl: 'pay_methods.html'
})


export class PayMethodsPage {
  methods: any;
  loader: any;

  constructor(public modalCtrl: ModalController, private api: ApiServiceProvider, public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {

    // Initialize data
    this.getPayMethods();

    this.loader = this.loadingCtrl.create({
      content: 'Loading data'
    });

    this.loader.present();
  }

  static get_title(): string {
    return 'Pay methods';
  }

  static get_icon(): string {
    return 'logo-yen';
  }

  // Logic for creating or updating pay method
  createOrUpdatePayMethod(data = undefined) {
    if (!data) {
      // TODO: Remove this section to return an empty structure
      data = {name: undefined};
    }

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    let modal = this.modalCtrl.create('PayMethodModalPage', {data: data}, myModalOptions);
    modal.onDidDismiss(data => {
      if (data) {
        this.api.createOrUpdatePayMethod(data).subscribe(_ => {
          this.getPayMethods()
        }, err => {
          const toast = this.toastCtrl.create({
            message: err.error,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        });
      }
    });

    modal.present();
  }

  deletePayMethod(pay_method) {
    const toast = this.toastCtrl.create({
      message: 'Not implemented yet',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getPayMethods() {
    this.api.getPayMethods().subscribe(response => {
      this.methods = response;
      this.loader.dismiss();
    }, err => {
      this.loader.dismiss();
      let error_msg = 'In getPayMethods: ' + err.error;
      this.toastCtrl.create({
        message: error_msg,
        position: 'top',
        showCloseButton: true,
      }).present();
    });
  }
}
