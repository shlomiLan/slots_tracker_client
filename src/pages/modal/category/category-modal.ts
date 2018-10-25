import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {BackButton} from "@scaffold-digital/ionic-hardware-buttons";

@IonicPage()
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-buttons>
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
        <ion-buttons end>
          <button ion-button type="submit" [disabled]="!category.valid">Submit</button>
        </ion-buttons>
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

  @BackButton()
  public onBackButton() {
    return false; // Blocks any further action from parent views, default behaviour etc
  }
}
