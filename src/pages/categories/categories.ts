import {Component} from '@angular/core';
import {ModalController, ModalOptions, ToastController} from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
import 'rxjs/add/operator/do'


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})


export class CategoriesPage {
  categories: any;

  constructor(public modalCtrl: ModalController, private api: ApiServiceProvider, public toastCtrl: ToastController) {

    // Initialize data
    this.getCategories();
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
        this.api.createOrUpdateCategory(data).subscribe(_ => {
          this.getCategories()
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
    });
  }
}
