import {Component} from '@angular/core';
import {LoadingController, ModalController, ModalOptions, ToastController} from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
import 'rxjs/add/operator/do'

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})


export class CategoriesPage {
  categories: any;
  loader: any;

  constructor(public modalCtrl: ModalController, private api: ApiServiceProvider, public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {

    // Initialize data
    this.getCategories();

    this.loader = this.loadingCtrl.create({
      content: 'Loading data'
    });

    this.loader.present();
  }

  static get_title(): string {
    return 'Categories';
  }

  static get_icon(): string {
    return 'apps';
  }

  // Logic for creating or updating categories
  createOrUpdateCategory(data = undefined) {
    if (!data) {
      // TODO: Remove this section to return an empty structure
      data = {name: undefined};
    }

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    let modal = this.modalCtrl.create('CategoryModalPage', {data: data}, myModalOptions);
    modal.onDidDismiss(data => {
      if (data) {
        this.api.createOrUpdateCategory(data).subscribe(res => {
          this.categories.push(res);
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

  deleteCategory(category) {
    const toast = this.toastCtrl.create({
      message: 'Not implemented yet',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getCategories() {
    this.api.getCategories().subscribe(response => {
      this.categories = response;
      this.loader.dismiss();
    }, err => {
      this.loader.dismiss();
      let error_msg = 'In getCategories: ' + err.error;
      this.toastCtrl.create({
        message: error_msg,
        position: 'top',
        showCloseButton: true,
      }).present();
    });
  }
}
