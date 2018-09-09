import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Modal</ion-title>
        <ion-buttons end>
          <button ion-button (click)="closeModal()">Close</button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <form [formGroup]="category" (ngSubmit)="saveData()">
        <ion-item>
          <ion-label>Name:</ion-label>
          <ion-input formControlName="name" type="text"></ion-input>
        </ion-item>
        <button ion-button type="submit" [disabled]="!category.valid">Submit</button>
      </form>
    </ion-content>
  `
})

export class CategoryModalPage {
  private category: FormGroup;

  constructor(private navParams: NavParams, private formBuilder: FormBuilder, private viewCtrl: ViewController) {
    this.category = this.formBuilder.group(this.navParams.get('data'));
  }

  saveData() {
    this.viewCtrl.dismiss(this.category.value);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
