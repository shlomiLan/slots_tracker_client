import {Component} from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

// import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  loading: Loading;
  registerCredentials = {email: 'email', password: 'pass'};


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider,
              private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn);
    if (isLoggedIn) {
      this.moveToApp();
    }
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  moveToApp() {
    // this.navCtrl.setRoot('TabsPage');
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          localStorage.setItem('isLoggedIn', 'true');
          this.moveToApp();
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }
}
