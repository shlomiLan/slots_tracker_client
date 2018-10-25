import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {ApiServiceProvider} from "../../../providers/api-service/api-service";
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
      <form [formGroup]="expense" (ngSubmit)="saveData()" *ngIf="expense && categories_form && methods_form">
        <ion-item>
          <ion-label>Amount:</ion-label>
          <ion-input formControlName="amount" type="number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Description:</ion-label>
          <ion-input formControlName="description" type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Category:</ion-label>
          <ion-select formControlName="category" (ionChange)="categoryChange($event);" interface="popover">
            <ion-option *ngFor="let item of categories_form.controls" [value]="item.value._id">
              {{item.value.name}}
            </ion-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Pay method:</ion-label>
          <ion-select formControlName="pay_method" (ionChange)="payMethodChange($event);" interface="popover">
            <ion-option *ngFor="let item of methods_form.controls" [value]="item.value._id">
              {{item.value.name}}
            </ion-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>Date:</ion-label>
          <ion-datetime displayFormat="D MMM YYYY" formControlName="timestamp"></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-label>One time</ion-label>
          <ion-checkbox color="dark" formControlName="one_time"></ion-checkbox>
        </ion-item>

        <ion-item *ngIf="is_new">
          <ion-label>Payments:</ion-label>
          <ion-input formControlName="payments" type="number" [min]="1"></ion-input>
        </ion-item>

        <ion-buttons end>
          <button ion-button type="submit" [disabled]="!expense.valid">Submit</button>
        </ion-buttons>
      </form>
    </ion-content>
  `
})

export class ExpenseModalPage {
  private expense: FormGroup;
  private methods_form: FormArray;
  private categories_form: FormArray;
  private readonly is_new: boolean;

  private methods: any;
  private categories: any;
  private error_msg: string;

  constructor(private navParams: NavParams, private formBuilder: FormBuilder, private viewCtrl: ViewController,
              private api: ApiServiceProvider) {

    // Initialize data
    this.error_msg = '';
    this.getPayMethods();
    this.getCategories();
    this.is_new = this.navParams.get('is_new');
    let expense_data = Object.assign({}, this.navParams.get('data'));

    // Add the payment field only if create new expense
    if (this.is_new == true) {
      expense_data['payments'] = 1;
    }

    for (let prop of Object.keys(expense_data)) {
      expense_data[prop] = [expense_data[prop], [Validators.required]];

      if (prop == 'payments') {
        expense_data[prop][1].push(Validators.min(1));
      }
    }

    this.expense = this.formBuilder.group(expense_data);

    // Modify the pay_method and category data for the select element
    this.expense.controls['pay_method'].setValue(this.expense.value.pay_method._id);
    this.expense.controls['category'].setValue(this.expense.value.category._id);
  }

  saveData() {
    this.expense.controls['pay_method'].setValue({"_id": this.expense.value.pay_method});
    this.expense.controls['category'].setValue({"_id": this.expense.value.category});
    this.viewCtrl.dismiss(this.expense.value);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  payMethodChange(value) {
    this.expense.controls['pay_method'].setValue(value);
  }

  categoryChange(value) {
    this.expense.controls['category'].setValue(value);
  }

  getPayMethods() {
    this.api.getPayMethods().subscribe(response => {
      this.methods = response;
      this.methods_form = this.formBuilder.array(this.methods);
    }, err => {
      this.error_msg = this.error_msg.concat('In getPayMethods: ', err.error);
      this.close_and_display_error(err);
    });
  }

  getCategories() {
    this.api.getCategories().subscribe(response => {
      this.categories = response;
      this.categories_form = this.formBuilder.array(this.categories);
    }, err => {
      this.error_msg = this.error_msg.concat('In getCategories: ', err.error);
      this.close_and_display_error(err);
    });
  }

  close_and_display_error(err) {
    this.viewCtrl.dismiss(err);
  }

  @BackButton()
  public onBackButton() {
    return false; // Blocks any further action from parent views, default behaviour etc
  }
}
