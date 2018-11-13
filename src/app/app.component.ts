import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {HardwareButtons} from '@scaffold-digital/ionic-hardware-buttons';
import {FcmProvider} from "../providers/fcm/fcm";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public hardwareButtons: HardwareButtons, public fcm: FcmProvider, public toastCtrl: ToastController) {
    this.initializeApp();
    hardwareButtons.init();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //Notifications
      // Get a FCM token
      this.fcm.getToken();

      // Listen to incoming messages
      this.fcm.listenToNotifications().subscribe(
        msg => {
          // show a toast
          const toast = this.toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        },
        err => {
          console.log(err);
        })
    });
  }
}
