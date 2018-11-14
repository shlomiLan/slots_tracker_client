import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {HardwareButtons} from '@scaffold-digital/ionic-hardware-buttons';
// import {FcmProvider} from "../providers/fcm/fcm";
import {Firebase} from "@ionic-native/firebase";
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public hardwareButtons: HardwareButtons, private firebase: Firebase, public firebaseNative: Firebase,
              public afs: AngularFirestore) {
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
      this.firebase.getToken()
        .then(token => this.saveTokenToFirestore(token)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));

      this.firebase.onTokenRefresh()
        .subscribe((token: string) => this.saveTokenToFirestore(token));
    });
  }

  // Save the token to firestore
  private saveTokenToFirestore(token) {
    if (!token) return;

    console.log(`The token is ${token}`);
    const devicesRef = this.afs.collection('devices');

    const docData = {
      token
    };

    return devicesRef.doc(token).set(docData)
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }
}
